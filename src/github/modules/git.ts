import { GithubGitCommit, GithubGitTree } from "../domain.js";
import { fetchFromGithub, getResponseData } from "../internal/fetch.js";

export async function fetchCommit(owner: string, repository: string, sha: string): Promise<GithubGitCommit> {
  const response = await fetchFromGithub('GET /repos/{owner}/{repo}/git/commits/{commit_sha}', {
    owner: owner,
    repo: repository,
    commit_sha: sha,
  });

  return getResponseData(response);
}

export async function fetchTree(owner: string, repository: string, sha: string): Promise<GithubGitTree> {
  const response = await fetchFromGithub('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
    owner: owner,
    repo: repository,
    tree_sha: sha,
  });

  return getResponseData(response);
}
