import { ENV_CONFIG } from "../env-config.js";
import { request } from "@octokit/request";

export const requestWithAuth = request.defaults({
  headers: {
    authorization: `token ${ENV_CONFIG.GITHUB_TOKEN}`,
  },
});
