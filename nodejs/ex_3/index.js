const Logger = require('logplease');
const add = require('./math');

const options = {
    useColors: true,     // Enable colors
    color: Logger.Colors.Magenta, // Set the color of the logger
    showTimestamp: true, // Display timestamp in the log message
    useLocalTime: false, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
  };

const logger = Logger.create('Calculator', options);

let price = 100;
const age = 5;
if (age < 10){
    logger.error("User is too young");
}else if (age > 21){
    price = add(price, price * 0.1);
    logger.debug("User is older than 21");
} else{    
    logger.warn("User is not older than 21");
}

logger.info("Final price", price);