import { GithubFetchError, fetchWithAuth } from "./internal/fetch.js";
export const git = await import("./git.js");

export async function fetchPullRequest(owner: string, repository: string, number: number) {
  const res = await fetchWithAuth('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
    owner: owner,
    repo: repository,
    pull_number: number,
  });

  if (res.status !== 200) {
    throw new GithubFetchError(res);
  }

  return res.data;
}
