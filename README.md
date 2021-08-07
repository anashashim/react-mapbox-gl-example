## A sample react app 

A react typescript app by integrating Mapbox and a react bar chart to explore about the usage and functionality

## Run application

Once cloned the project, goto the project folder and run

### `npm install`

Installs all depedencies for the project

### Set .env file

Need to create .env file into your project
Add below data before run your application

    REACT_APP_API_BASE_URL = "https://restcountries.eu"
    REACT_APP_MAPBOX_TOKEN = "<your-map-box-token>"

### Mapbox token generation

- Goto mapbox official webpage https://www.mapbox.com/
- Create an account and signin to your account
- You will be land to Dashboard page
- You will be able to find a public token or You can create a token through '+ create token' button

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

