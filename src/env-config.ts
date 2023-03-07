import * as dotenv from "dotenv";

export interface EnvConfig {
  GITHUB_TOKEN: string;
  DB_URL: string;
};

const res = dotenv.config();
export const ENV_CONFIG = res.parsed as unknown as EnvConfig;
