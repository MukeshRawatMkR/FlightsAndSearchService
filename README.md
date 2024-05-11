# welcome to FLights Service

## Project Setup
- clone the project on your local
- execute `npm install` on the same path as of your root dir of the downloaded project.
- create a `.env` file in the root dir and add the following environment variables
-> `PORT=3000`
- inside the 'src/config' folder create a new file `config.json` and then add the following piece of JSON.
```
{
  "development": {
    "username": "YOUR DB LOGIN NAME",
    "password": "<YOUR DB PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

}
```
- once you've added your db config as listed above, go to the src folder from your terminal and execute `npm sequelize db:create` .