import neo4j, { Driver } from "neo4j-driver";
import { DatabaseConnectionError, DatabaseNotConnectedError } from "./domain.js";
import { ENV_CONFIG } from "../env-config.js";

let connection: Driver | undefined;

async function connect(): Promise<Driver> {
  if (connection) return connection;

  try {
    connection = neo4j.driver(ENV_CONFIG.DB_URL);
    await connection.getServerInfo();
    return connection;
  }
  catch (err) {
    throw new DatabaseConnectionError(ENV_CONFIG.DB_URL, err);
  }
}

function getConnection() {
  return connection;
}

function expectConnection() {
  if (!connection) throw new DatabaseNotConnectedError();
  return connection;
}

export default {
  connect,
  getConnection,
  expectConnection,
};
