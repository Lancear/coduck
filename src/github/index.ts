import { requestWithAuth } from "./request.js";
export const git = await import("./git.js");

export async function fetchPullRequest(owner: string, repository: string, number: number) {
  const res = await requestWithAuth('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
    owner: owner,
    repo: repository,
    pull_number: number,
  });

  if (res.status !== 200) {
    throw new Error(`Fetch resulted in status ${res.status}`);
  }

  return res.data;
}

