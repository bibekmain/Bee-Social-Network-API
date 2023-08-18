
# ![Badge](https://img.shields.io/badge/License-MIT-brightgreen)
# Bee Social Network API

![An example showing Insomnia sending a get request for one user with the response showing a number of information](https://github.com/bibekmain/Bee-Social-Network-API/blob/main/assets/Thumbnail.png?raw=true)
    
## Description
The Bee Social Network API is a comprehensive and robust backend solution tailored for social media platforms. With a range of powerful features, it offers real-time thought sharing, interactive responses, and friend connections. This API simplifies the development process, allowing social media platforms to focus on creating engaging user experiences while leveraging the solid foundation provided by Bee Social Network API.

- Motivation: The general motivation for Bee was to empower developers to concentrate on innovative features and user interactions, saving time and effort in building the fundamental backend infrastructure.
- Purpose: The Bee Social Network API eliminates the need for developers to build a social media platform's backend from scratch, saving time and resources while ensuring a reliable and feature-rich foundation.
- What i learned: Mongo DB, Mongoose, Express, Insomnia

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)  
* [Questions](#questions)
* [License](#license)

## Installation
- First make sure you have [mongodb](https://www.mongodb.com/try/download/community) and the optional [compass](https://www.mongodb.com/try/download/compass) installed on your machine
- Fork/download the repository to your local machine
- Cd into the local repo's directory and run `npm i` to install the required node packages
- Start your mongodb connection at `localhost:27017`
- Go back to the terminal and run `npm run seed` to seed the database with the initial test items
- Run `npm start` to start the application and you are free to make requests to the API!


## Usage
You can retrieve user and thought information by sending get requests to the server. You can also create users, friendships, thoughts, and reactions by making post requests to the server, along with put requests that can update user information, or update thought information. Alongside that you can make delete requests to the server to get rid of users, thoughts, responses, and friends.  

### Usage Tutorial:  
Follow [this](https://drive.google.com/file/d/1-Cg4OuBIg0j8As741boPwhBMVhYNWYZp/view?usp=sharing) link to view the usage tutorial for the different API calls that can be made using this application.

## Credits  


### Third Party Assets:
* [Mongo DB](https://www.mongodb.com/docs/)
* [Mongoose](https://mongoosejs.com/docs/)
* [Express](https://expressjs.com/)
* [Insomnia](https://docs.insomnia.rest/)


## Questions
Check out my [Github](https://github.com/bibekmain)  
You can email me at: [bibekmbkb@gmail.com](bibekmbkb@gmail.com) with any questions about the program.

## License
    This project is licensed with MIT
