# Thesis React application

This project was created in spring 2022. The purpose is to connect to
three different serverless backend API:s and test their functionality. Would they
be suitable for running a smaller serverless application?

## Available Links

Basic web page with login functionality.
Available routes are:
- Home, login, test, auth and about.
    - Login: sign in a user
    - Test: test route with a simple fetch to a get-route on the cloud provider
    - Auth: test route which requires are valid token in order to access

Fill in details about connection to the base url of the api in src/vars.js,
create a variable called baseUrl.

### Changes
2022-04-04 Basic React app created including routes using react-dom
2022-04-24 Login implemented, still need to save token for using in other routes
2022-04-25 Token used to authorize logged in user
2022-05-28 Registering a user is now implemented. Login and Register are not shown
when user is logged in anymore.
