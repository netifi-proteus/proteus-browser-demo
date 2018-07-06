const {
    Proteus,
    BrokerInfoServiceClient,
} = require('proteus-js-client');

const {
    Empty
} = require('google-protobuf/google/protobuf/empty_pb');

const {
    encodeProteusMetadata
} = require('proteus-js-frames');

const {
    ReactiveSocket,
    Encodable
} = require('rsocket-types');

const {
    Flowable,
    Single
} = require('rsocket-flowable');



/** Helpers **/

// For generating variable identities in order to easily tell if messages are coming from this application instance or another
const alphabet = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet", "Kilo", "Lima", "Mike", "November",
    "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-Ray", "Yankee", "Zulu"
];

const numbers = [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateName(){
    return alphabet[getRandomInt(25)] + '-' + numbers[getRandomInt(9)] + '-' + numbers[getRandomInt(9)] + '-' + numbers[getRandomInt(9)];
}

// Convenience method to update the webpage as new messages are available
function addMessage(message, element) {
    var ul = document.getElementById(element);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(message));
    if(ul.childElementCount >= 10){
        ul.removeChild(ul.childNodes[0]);
    }
    ul.appendChild(li);
}


/**
    This function spins up a new "PingPong" client. It has methods that "ping" a service and expect a reply (ping),
    no reply (pingFnF), and a stream of replies (pingStream).

    It will push messages via the Proteus Channel to be served by any service that registers with the target "group"

*/

function createPingPongClient(proteusGateway) {

    //Gets a handle to a ReactiveSocket, targeting the group set up in this ProteusGateway config
    const rs = proteusGateway.group(proteusGateway.myGroup());

    return {
        // Sends a single 'Ping' message in a Request/Response interaction model
        ping: function pingOnce() {
            const dataBuf = Buffer.from(proteusGateway.myDestination());
            const metadataBuf = encodeProteusMetadata(
                'io.netifi.proteus.demo.PingPongService',
                'Ping',
                Buffer.alloc(0),
            );
            console.log('Pinging...');

            // This invokes the corresponding `requestResponse` method on the service, implemented below and returns a
            // "Single" of the response
            return rs
                .requestResponse({
                    data: dataBuf,
                    metadata: metadataBuf,
                })
                .map(payload => {
                    console.log('Received payload:' + JSON.stringify(payload));
                    if (payload.data == null) {
                        throw new Error('data is null');
                    }
                    return payload.data.toString('utf8');
                });
        },

        // Sends a single 'Ping' message in a Fire and Forget interaction model
        pingFnF: function pingFnF() {
            const dataBuf = Buffer.from(proteusGateway.myDestination());
            const metadataBuf = encodeProteusMetadata(
                'io.netifi.proteus.demo.PingPongService',
                'Ping',
                Buffer.alloc(0),
            );

            // This invokes the corresponding `fireAndForget` method on the service, implemented below and returns nothing
            // as this interaction model assumes the client is done as soon as the message is sent
            return rs
                .fireAndForget({
                    data: dataBuf,
                    metadata: metadataBuf,
                });
        },

        // Sends a single 'Ping' message and expects a stream of 'Pong' responses
        pingStream: function pingStream(){
            const dataBuf = Buffer.from(proteusGateway.myDestination());
            const metadataBuf = encodeProteusMetadata(
                'io.netifi.proteus.demo.PingPongService',
                'Ping',
                Buffer.alloc(0),
            );

            // This invokes the corresponding `requestStream` method on the service, implemented below and returns a
            // stream that represents the 0 or more 'Pong' responses from the server
            return rs
                .requestStream({
                    data: dataBuf,
                    metadata: metadataBuf,
                })
                .map(payload => {
                    console.log('Received stream payload:' + JSON.stringify(payload));
                    if (payload.data == null) {
                        throw new Error('data is null');
                    }
                    return payload.data.toString('utf8');
                });
        }
    };
};

/**
    This function spins up a new implementation of a sample "PingPong" service. It implements all of the ReactiveSocket
    methods: fireAndForget, requestResponse, requestStream, requestChannel (not supported), and pushMetadata (not supported)

    It will service messages pushed to it via the Proteus Channel

 */
function createPingPongService(desintationId){
    return {
        /**
         * Fire and Forget interaction model of `ReactiveSocket`. The returned
         * Publisher resolves when the passed `payload` is successfully handled.
         */
        fireAndForget: function fireAndForget(payload) { //: Payload<D, M>): void,
            console.log('Someone called fireAndForget');
            addMessage('SERVICE: ' + payload.data.toString('utf8') + ' pinged me... but doesn\'t care if I respond', 'fireAndForgetService');
        },

        /**
         * Request-Response interaction model of `ReactiveSocket`. The returned
         * Publisher resolves with the response.
         */
        requestResponse: function requestResponse(payload) { //: Payload<D, M>): Single<Payload<D, M>>,
            console.log('Someone called requestResponse');
            addMessage('SERVICE: ' + payload.data.toString('utf8') + ' pinged me, responding with PONG!', 'requestResponseService');
            return Single.of({
                data: Buffer.from('PONG! from ' + desintationId),
                metadata: Buffer.alloc(0)
            });
        },

        /**
         * Request-Stream interaction model of `ReactiveSocket`. The returned
         * Publisher returns values representing the response(s).
         */
        requestStream: function requestStream(payload) { //: Payload<D, M>): Flowable<Payload<D, M>>,
            console.log('Someone called requestStream');
            addMessage('SERVICE: ' + payload.data.toString('utf8') + ' has requested a PONG stream', 'requestStreamService');
            return new Flowable(subscriber => {

                /*** This block really just sets up limits on how much to stream back - random number of "values" up to 8 ***/
                let counter = 0;
                let threshold = getRandomInt(8);
                let active = true;
                let completed = false;

                const checkCounter = () => {
                    if(active && ++counter > threshold){
                        active = false;
                    }
                    return active;
                }
                /***  ***/

                subscriber.onSubscribe({
                    cancel: () => {
                        addMessage('SERVICE: ' + payload.data.toString('utf8') + ' canceled stream', 'requestStreamService');
                        active = false;
                        },
                    request: () => {
                        if (checkCounter()) {

                            subscriber.onNext({
                                data: Buffer.from('PONG #' + (counter) + ' from ' + desintationId),
                                metadata: Buffer.alloc(0)
                            });
                        } else if (!completed) {
                            //Quick guard to make sure we only ever onComplete once
                            completed = true;
                            active = false;
                            subscriber.onComplete();
                        }
                    }
                });
            });
        },

        /**
         * Request-Channel interaction model of `ReactiveSocket`. The returned
         * Publisher returns values representing the response(s).
         */
        requestChannel: function requestChannel(payloads) { //: Flowable<Payload<D, M>>): Flowable<Payload<D, M>>,
            return Flowable.error(new Error('requestChannel() is not implemented'));
        },

        /**
         * Metadata-Push interaction model of `ReactiveSocket`. The returned Publisher
         * resolves when the passed `payload` is successfully handled.
         */
        metadataPush: function metadataPush(payload) { //: Payload<D, M>): Single<void>,
            return Single.error(new Error('metadataPush() is not implemented'));
        }
    };
};

function main() {
    const url = __WS_URL__;

    const sessionId = generateName();
    addMessage(sessionId, 'destination');

    // This Proteus object acts as our gateway to both send messages to services and to register services that we support
    const proteus = Proteus.create({
        setup: {
            group: 'browser-demo',
            destination: sessionId,
            accessKey: 9007199254740991,
            accessToken: 'kTBDVtfRBO4tHOnZzSyY5ym2kfY=',
        },
        transport: {
            url,
        },
    });

    // This section is how one would query information about available brokers. The BrokerInfoService client is packaged
    // with the proteus client library and has several query functions to find the status of active brokers and services
    const brokerInfoService = new BrokerInfoServiceClient(
        proteus.group('com.netifi.proteus.brokerServices'),
    );

    brokerInfoService.brokers(new Empty(), Buffer.alloc(0)).subscribe({
        onComplete: () => console.log('complete'),
        onError: error => console.error(error),
        onNext: broker => {
            var pretty = JSON.stringify(broker.toObject());
            console.log(pretty);
            addMessage(pretty, 'messages');
        },
        onSubscribe: subscription => {
            subscription.request(100);
        },
    });

    // Here we register a "PingPong" service through our gateway. This application is telling the broker that it is
    // available to service messages bound for the "io.netifi.proteus.demo.PingPongService"
    proteus.addService('io.netifi.proteus.demo.PingPongService', createPingPongService(proteus.myDestination()));

    // Here we create a client of the ping pong service so that we may send messages to the PingPong service -
    // the service name 'io.netifi.proteus.demo.PingPongService' is included in the routing metadata in our
    // PingPong client implementation, above.
    let pingPongClient = createPingPongClient(proteus);

    // Loop a request/response PING which could be handled by any other connected service, including this browser!
    setInterval(() => {
        addMessage('CLIENT: pinging...', 'requestResponseClient');

        // The requestResponse method (underlying our 'ping') on ReactiveSockets has a
        // Single return type. This type will call onComplete with a result value exactly once or
        // onError exactly once with the error
        pingPongClient.ping().subscribe({
            onComplete: pong => {
                console.log("Pong received: " + JSON.stringify(pong));
                addMessage('CLIENT: received [' + pong + ']', 'requestResponseClient');
            },
            onError: error => {
                addMessage('CLIENT: received and ERROR[' + error + ']', 'requestResponseClient');
            }
        });
    }, 5000);

    //Loop a fire-and-forget PING
    setInterval(() => {
        addMessage('CLIENT: pinging...', 'fireAndForgetClient');

        // The fire and forget method on ReactiveSockets has a void return type because we want to fire... and forget.
        pingPongClient.pingFnF();
    }, 6000);

    //Loop every 7500 ms, ask for a stream of 'pongs' from the network
    setInterval(() => {
        addMessage('CLIENT: request pong stream...', 'requestStreamClient');
        let _subscription;

        // The requestStream method (underlying our 'pingStream') on ReactiveSockets has a
        // Flowable return type. Flowables conform to the Publisher API defined by ReactiveSocket.
        // The 'subscribe' method expects a subscriber object with the following methods
        //
        // {
        //     onSubscribe: subscription => {...},
        //     onComplete: () => {...},
        //     onError: error => {...},
        //     onNext: value => {...}
        // }
        //
        // Typically onSubscribe is called immediately in order to pass a 'subscription' handle back to the caller
        // as seen in below's 'onSubscribe' function. The subscription is persisted because it has 2 important methods.
        //
        // {
        //     cancel: () => {...},
        //     request: n => {...}
        // }
        //
        // Cancel indicates that the caller no longer wants to receive data and the Service is free
        // to tear down any state for its response stream.
        //
        // When a subscriber (client) invokes 'request(n)', it is signalling to the service that it wants up to n
        // 'onNext' calls with values.
        //
        // The service will call onComplete on the subscriber when no more values are available or onError
        // if it encounters an error while processing.

        pingPongClient.pingStream().subscribe({
            onNext: pong => {
                console.log("Pong received: " + JSON.stringify(pong));
                addMessage('CLIENT: received [' + pong + ']', 'requestStreamClient');
                _subscription.request(1);
            },
            onComplete: () => {
                addMessage('CLIENT: finished pong stream', 'requestStreamClient');
            },
            onError: error => {
                addMessage('CLIENT: received error from pong stream[' + error + ']', 'requestStreamClient');
            },
            onSubscribe: subscription => {
                _subscription = subscription;
                _subscription.request(1);
            }
        });
    }, 15000);


}

document.addEventListener('DOMContentLoaded', main);
