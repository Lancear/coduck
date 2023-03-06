import { ENV_CONFIG } from "../../env-config.js";
import { request } from "@octokit/request";
import { OctokitResponse } from "@octokit/types";
import { GithubFetchError } from "../domain.js";

export const fetchFromGithub = request.defaults({
  headers: {
    authorization: `token ${ENV_CONFIG.GITHUB_TOKEN}`,
  },
});

export function getResponseData<T>(response: OctokitResponse<T>) {
  if (response.status !== 200) {
    throw new GithubFetchError(response);
  }

  return response.data;
};
