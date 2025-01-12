import { Config } from './config/index';
import logger from './config/logger';
import app from './app';

const startServer = async () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => {
      logger.info(`Listening on the PORT ${PORT}`, { Test: 1 });
    });
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
      setTimeout(() => {
        process.exit(1);
      }, 2000);
    }
  }
};

startServer();
