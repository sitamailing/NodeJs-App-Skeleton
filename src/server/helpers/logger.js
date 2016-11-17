import winston from 'winston';
import moment from 'moment';
import Constants from './../helpers/constants';

const currentDate = moment().format(Constants.dateFormat);

const logger = new (winston.Logger)({
    level: 'debug',
    transports: [
        new (winston.transports.Console)({
            timestamp: currentDate,
            prettyPrint: true,
            colorize: true
        }),
        new (winston.transports.File)({
            filename: `data/logs/${currentDate}.log`,
            timestamp: moment().format(Constants.dateTimeFormat),
            level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
        })
    ]
});

export default logger;