import * as github from "./github.js";

main();
async function main() {
  try {
    console.log("Fetching pull request...");
    const pullRequest = await github.fetchPullRequest('shopstory-ai', 'shopstory', 1208);
    console.dir(pullRequest);

    console.log();
    console.log("Fetching base commit...");
    const baseCommit = await github.fetchGitCommit('shopstory-ai', 'shopstory', pullRequest.base.sha);
    console.dir(baseCommit);

    console.log();
    console.log("Fetching head commit...");
    const headCommit = await github.fetchGitCommit('shopstory-ai', 'shopstory', pullRequest.head.sha);
    console.dir(headCommit);
  }
  catch (err) {
    console.error(err);
  }
}
