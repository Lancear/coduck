import * as github from "./github/index.js";

main();
async function main() {
  try {
    console.log("Fetching pull request...");
    const pullRequest = await github.fetchPullRequest('shopstory-ai', 'shopstory', 1208);
    console.dir(pullRequest);

    console.log();
    console.log("Fetching base commit...");
    const baseCommit = await github.git.fetchCommit('shopstory-ai', 'shopstory', pullRequest.base.sha);
    const baseTree = await github.git.fetchTree('shopstory-ai', 'shopstory', baseCommit.tree.sha);
    console.dir(baseCommit);
    console.dir(baseTree);

    console.log();
    console.log("Fetching head commit...");
    const headCommit = await github.git.fetchCommit('shopstory-ai', 'shopstory', pullRequest.head.sha);
    const headTree = await github.git.fetchTree('shopstory-ai', 'shopstory', headCommit.tree.sha);
    console.dir(headCommit);
    console.dir(headTree);
  }
  catch (err) {
    console.error(err);
  }
}
