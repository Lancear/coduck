import * as dotenv from "dotenv";
import { request } from "@octokit/request";
dotenv.config();
main();
async function main() {
    try {
        console.log("Fetching PRs...");
        const { data: pulls } = await request('GET /repos/{owner}/{repo}/pulls', {
            headers: {
                authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
            owner: 'shopstory-ai',
            repo: 'shopstory',
        });
        console.dir(pulls[0]);
        const { data: commits } = await request(`GET ${pulls[0]._links.commits.href.replace("https://api.github.com", "")}`, {
            headers: {
                authorization: `token ${process.env.GITHUB_TOKEN}`,
            },
        });
        console.dir(commits[0]);
    }
    catch (err) {
        console.error(err);
    }
}
//# sourceMappingURL=index.js.map