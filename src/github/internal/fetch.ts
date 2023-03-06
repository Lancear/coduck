import { ENV_CONFIG } from "../../env-config.js";
import { request } from "@octokit/request";

export const fetchWithAuth = request.defaults({
  headers: {
    authorization: `token ${ENV_CONFIG.GITHUB_TOKEN}`,
  },
});

export type GithubResponse = Awaited<ReturnType<typeof request>>;

export class GithubFetchError extends Error {
  constructor(response: GithubResponse) {
    super(`Failed to fetch ${response.url}, received status ${response.status}`);
  }
}
