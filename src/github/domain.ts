import { OctokitResponse } from "@octokit/types";
import { components } from "@octokit/openapi-types";

export type GithubGitCommit = components["schemas"]["git-commit"];
export type GithubGitTree = components["schemas"]["git-tree"];
export type GithubPullRequest = components["schemas"]["pull-request"];

export class GithubFetchError extends Error {
  constructor(response: OctokitResponse<unknown>) {
    super(`Failed to fetch ${response.url}, received status ${response.status}`);
  }
}
