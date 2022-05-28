# Thesis React application

This project was created in spring 2022. The purpose is to connect to
three different serverless backend API:s and test their functionality. Would they
be suitable for running a smaller serverless application?

## Available Links

Basic web page with login functionality.
Available routes are:
- Home, test, register, login, auth and about.
    - Login: sign in a user
    - Test: test route with a simple fetch to a get-route on the cloud provider
    - Auth: test route which requires are valid token in order to access
    - Register: register a new user
    - About: short info about the webpage

Fill in details about connection to the base url of the api in src/vars.js,
create a variable called baseUrl. This base URL on AWS/Azure/Google Cloud
is then used to contact the /v1/user, /v1/user/login, /v1/test and /v1/auth
routes in order to fill up information in certain sub-pages of the React webpage.

## How to use the app
- You need to have an API running with its base URL (fill it in according to above).
- The API could be found in one of my serverless-.... repositoryies (AWS, Google or Azure)
- Run **npm start** to run the application locally (localhost:3000)
- The mentioned routes above will automatically be connected to the application

### Changes
2022-04-04 Basic React app created including routes using react-dom
2022-04-24 Login implemented, still need to save token for using in other routes
2022-04-25 Token used to authorize logged in user
2022-05-28 Registering a user is now implemented. Login and Register are not shown
when user is logged in anymore.
