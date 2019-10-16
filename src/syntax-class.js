class Logger {
  constructor() {
    this.creationTime = new Date();
  }

  log() {
    console.log(this.creationTime.toUTCString());
  }
}

const logger = new Logger();

logger.log();
