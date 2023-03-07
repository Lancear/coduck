export class DatabaseConnectionError extends Error {
  constructor(url: string, cause?: Error) {
    super(`Failed to connect to ${url}`, { cause });
  }
}

export class DatabaseNotConnectedError extends Error {
  constructor() {
    super(`Missing database connection, make sure to await connect first`);
  }
}
