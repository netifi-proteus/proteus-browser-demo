# proteus-demo
Demo application for Proteus and RSocket

http://rsocket-demo.herokuapp.com


## Running the Demo

To edit the homepage (including the JavaScript example code), do the following:

- Fork/clone the repo and `cd` to the root directory.
- Install the JavaScript dependencies with;

    yarn

- The generated code in `src/main/resources/web/public/` should be
  checked in, and can be updated with:

    yarn run build

- To view the app in action, start a web server to host the JS:

    yarn start

- Hit http://localhost:3000 in a webbrowser

- The page will have several sections

    - My ID for this session is 
        - spits out a randomish string that will identify this copy of the application in messages
    
    - Available Brokers
        - Gives a series of messages that identify available Broker instances
    
    - Different Interaction Types
        - Each interaction type will print 2 scrolling lists of messages, those prefixed with "CLIENT" when the application is acting as a client, and messages prefixed with "SERVICE" when it is servicing a request of that interaction type
            - Request/Responses
            - Fire and Forgets
            - Streams

- Shortly after loading the page, CLIENT and SERVER messages should start appearing. The default behavior runs through the different Ping Pong interactions on interval timers
- Each message should refer to an identifier like the one in "My ID for this session...", e.g. India-Four-Two-One
- With only one browser instance, all CLIENT and SERVICE messages will have your identifier in them. Unless someone else happens to be connected to the same Broker
- You can experience the magic by opening multiple tabs or multiple browsers (e.g. Chrome and Safari) and going to http://localhost:3000
    - You should notice that each instance now will sometimes to refer to other IDs. This is other application instances servicing your messages and vice versa 
