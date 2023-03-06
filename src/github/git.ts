import { GithubFetchError, fetchWithAuth } from "./internal/fetch.js";

export async function fetchCommit(owner: string, repository: string, sha: string) {
  const res = await fetchWithAuth('GET /repos/{owner}/{repo}/git/commits/{commit_sha}', {
    owner: owner,
    repo: repository,
    commit_sha: sha,
  });

  if (res.status !== 200) {
    throw new GithubFetchError(res);
  }

  return res.data;
}

export async function fetchTree(owner: string, repository: string, sha: string) {
  const res = await fetchWithAuth('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
    owner: owner,
    repo: repository,
    tree_sha: sha,
  });

  if (res.status !== 200) {
    throw new GithubFetchError(res);
  }

  return res.data;
}
