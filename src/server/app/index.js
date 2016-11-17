import express from 'express';
import Promise from 'bluebird';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from '../routes/routes';
import Constants from './../helpers/constants';
import Logger from './../helpers/logger';
import Config from '../configs/config';

global.Promise = Promise;
global.Constants = Constants;
global.Logger = Logger;
global.Config = Config;

// Init App
var app = express();

// BodyParser middleware
// Configure app to use bodyParser() to get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.listen(Config.port, () => Logger.info(`Listening on port ${Config.port}`));

module.exports = app;
