# push-notification-nodejs

The project is built with nodejs for push notification application

## Features

    $ subcribe to a topic 
    
    POST(http://localhost:8000/subscribe/:topic)
    body{
           {
            "url": "http://localhost:9000/subscriber"
           }
    }
    
    response: 
        {
            "topic": "development",
            "url": "http://localhost:9000/sam"
        }
    
    $ publish a topic 
    
    POST(http://localhost:8000/publish/:topic)
    body{
           {
            "url": "http://localhost:9000/"
           }
    }
    
    response: 
        {
            "topic": "development",
            "message": "Topic sent to 3 subscriber(s)"
        } 
        
    $ subscriber route 
    
    POST(http://localhost:9000/subscriber)  
    body{
           {
                "subscriber": "dammy",
                "body": {}
           }
    }

    response: 
        {
            "subscriber": "dammy",
            "body": {}
        }

## Install

    $ git clone https://github.com/omowonuola/push-notification-nodejs.git
    $ yarn install or npm install


## Running the project

    $ ./start-server.sh - this runs the both the publisher server(port 8000) and the subscriber server(port 9000) concurrently
    
## Technologies

- Node JS
- Express

