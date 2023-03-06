import { ENV_CONFIG } from "./env-config.js";
import { request } from "@octokit/request";

const requestWithAuth = request.defaults({
  headers: {
    authorization: `token ${ENV_CONFIG.GITHUB_TOKEN}`,
  },
});

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

export async function fetchGitCommit(owner: string, repository: string, sha: string) {
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
