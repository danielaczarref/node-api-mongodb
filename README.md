# Node API with MongoDB connection

The purpose of this API is to obtain and send information from temperature sensors via the "/ sensors" route.

The routes will be integrated with a mobile application to obtain temperature information of smart city environments through the MQTT protocol.

In addition, the UUID standard was used to generate an identification (in addition to the id automatically generated by MongoDB) for educational purposes only.

## Running
```
npm start
```
## MongoDB
To connect to the Mongo database, on my local machine, through Docker, I created an instance to run MongoDB and my application connected to it.

- Schema: ItemSchema;
- Collection: Temperature;
- Database: sensor-db.

## Controller
../routes/sensors

## Service
../service/sensorSevice
