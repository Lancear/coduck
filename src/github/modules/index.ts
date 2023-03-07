import { GithubPullRequest } from "../domain.js";
import { fetchFromGithub, getResponseData } from "../internal/fetch.js";

export async function fetchPullRequest(owner: string, repository: string, number: number): Promise<GithubPullRequest> {
  const response = await fetchFromGithub('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
    owner: owner,
    repo: repository,
    pull_number: number,
  });

  return getResponseData(response);
}
