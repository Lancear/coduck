import { requestWithAuth } from "./request.js";

export async function fetchCommit(owner: string, repository: string, sha: string) {
  const res = await requestWithAuth('GET /repos/{owner}/{repo}/git/commits/{commit_sha}', {
    owner: owner,
    repo: repository,
    commit_sha: sha,
  });

  if (res.status !== 200) {
    throw new Error(`Fetch resulted in status ${res.status}`);
  }

  return res.data;
}

export async function fetchTree(owner: string, repository: string, sha: string) {
  const res = await requestWithAuth('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
    owner: owner,
    repo: repository,
    tree_sha: sha,
  });

  if (res.status !== 200) {
    throw new Error(`Fetch resulted in status ${res.status}`);
  }

  return res.data;
}
