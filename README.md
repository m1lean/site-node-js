# Site | NodeJS

#### This Node.js code represents a simple web server with Express, Morgan, and dotenv integration, featuring organized routes and error handling. The server responds with "Hello, World!" on the root route and "This is the About page." on the '/about' route.
### Step 1: Set Up the Project

1. **Create a new directory:**
   Open a terminal and create a new directory for your project.

   ```bash
   mkdir my-nodejs-project
   cd my-nodejs-project
   ```

2. **Create a package.json file:**
   Initialize a `package.json` file using the following command. You can press Enter for most prompts, or provide the necessary information.

   ```bash
   npm init -y
   ```

### Step 2: Install Dependencies

1. **Install Express, Morgan, and Dotenv:**
   Use npm to install the required packages.

   ```bash
   npm install express morgan dotenv
   ```

### Step 3: Create Files

1. **Create the .env file:**
   Create a `.env` file in the project root and set the `PORT` variable.

   ```env
   PORT=3000
   ```

2. **Create the server.js file:**
   Create a `server.js` file in the project root and copy the provided code into it.

   ```javascript
   const express = require('express');
   const morgan = require('morgan');
   const path = require('path');
   require('dotenv').config();

   const app = express();
   const port = process.env.PORT || 3000;

   app.use(morgan('dev'));
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   app.use(express.static(path.join(__dirname, 'public')));

   app.use('/', require('./routes/index'));
   app.use('/about', require('./routes/about'));

   app.use((req, res, next) => {
     res.status(404).send('404 - Not Found');
   });

   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send('500 - Internal Server Error');
   });

   app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
   });
   ```

3. **Create the routes directory and index.js, about.js files:**
   Create a `routes` directory in the project root. Inside the `routes` directory, create `index.js` and `about.js` files with the provided code.

   - **routes/index.js:**
     ```javascript
     const express = require('express');
     const router = express.Router();

     router.get('/', (req, res) => {
       res.send('Hello, World!');
     });

     module.exports = router;
     ```

   - **routes/about.js:**
     ```javascript
     const express = require('express');
     const router = express.Router();

     router.get('/', (req, res) => {
       res.send('This is the About page.');
     });

     module.exports = router;
     ```

### Step 4: Run the Server

1. **Run the server:**
   In the terminal, run the following command to start the server:

   ```bash
   node server.js
   ```

2. **Access the application:**
   Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to see the "Hello, World!" message. You can also visit [http://localhost:3000/about](http://localhost:3000/about) to view the "This is the About page." message.

Now, you have successfully installed and run the Node.js application with additional features. Feel free to explore and modify the code to suit your needs.
## Authors

#### [@m1lean](https://www.github.com/m1lean)

