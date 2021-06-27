# plem-social-platform
Implementation of social platform with functionalities found at social websites like Twitter, Facebook, Instagram, etc.

# Platform Structure
The Plem platform contains the following structure:
  PlemApp:
  --Toolbar
  --Userlist
  --[To be expanded]

# Overview
In order to run this project from your local computer, after downloading the files, make sure to have the following modules installed:
  - Node.js && npm
  - @material-ui/core
  - react-router-dom
  - nodemon

# Run Project Locally
To run project locally, ensure to have cloned project in your desired directory and that you are inside the directory where the project
is. Run the following commands:
First, install the *node_modules* within the current working directory by running:
```npm install```
Then go to the *client* folder and run the same line to install the node_modules there.
After, return to the root directory of the project and install the needed components:
```npm install @material-ui/core```
```npm install react-router-dom```
```npm install nodemon```
Finally, after installing these modules, run the following command in the root directory:
```npm run client:build```
```npm run dev```
The first command will build the client website, updating any changes before displaying it to the user once hosted.
The second command will run the client site along with the server, prompting the site on your default browser.

