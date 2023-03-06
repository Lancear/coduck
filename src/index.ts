import github from "./github/index.js";

main();
async function main() {
  try {
    const repository = ['shopstory-ai', 'shopstory'] as const;
    const pullRequestNumber = 1208;

    console.log("Fetching pull request...");
    const pullRequest = await github.fetchPullRequest(...repository, pullRequestNumber);
    console.dir(pullRequest);

    console.log();
    console.log("Fetching base commit...");
    const baseCommit = await github.git.fetchCommit(...repository, pullRequest.base.sha);
    const baseTree = await github.git.fetchTree(...repository, baseCommit.tree.sha);
    console.dir(baseCommit);
    console.dir(baseTree);

    console.log();
    console.log("Fetching head commit...");
    const headCommit = await github.git.fetchCommit(...repository, pullRequest.head.sha);
    const headTree = await github.git.fetchTree(...repository, headCommit.tree.sha);
    console.dir(headCommit);
    console.dir(headTree);
  }
  catch (err) {
    console.error(err);
  }
}
