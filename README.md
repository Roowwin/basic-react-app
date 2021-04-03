# NEWS Paper Web App

This is basic node and react project to display news and advertisement.


[React Framework](https://reactjs.org/) is used for frontend design using bootstrap & sass. 

[Node.js Framework](https://nodejs.org/en/)  as the backend server.

Sample [JSON](https://gist.github.com/kieranjones/44d71c01636b004c1b8d5857f7bc0e24) data


## Prerequisite
 - Node 
 - NPM Package or Yarn Package manager

## How to run 

### Installing Dependencies 
- Go to project folder (Node & React project)
- Run the command `npm run install` or  `yarn` (NodeJs dependency)
- Go to client folder (React Project) `cd client` 
- Run the command `npm run install` or `yarn`



### Running on Development Mode
- `npm run dev` or `yarn run dev`
    
    Runs the react server at [http://localhost:3000](http://localhost:3000) and Node.js server at [http://localhost:500](http://localhost:5000) using [Nodemon](https://www.npmjs.com/package/nodemon) 

### Deploying on production
- To execute for first time `npm run deploy` or `yarn run deploy`

    Builds the app for production to the `client\build` folder.<br />
    It correctly bundles React in production mode and optimizes the build for the best performance.

    The build is minified and the filenames include the hashes.<br />
    Your app is ready to be deployed!

    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

    It starts the pm2 server (as Node JS)

    Learn more about [Pm2 Server](https://pm2.keymetrics.io/).


- Just to run pm2 server `npm run server` or `yarn run server`

