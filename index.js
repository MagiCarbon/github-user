let GitHubApi = require("github");

let github = new GitHubApi({
    // optional
    debug: false,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    //pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    headers: {
        "user-agent": "GitHubUser" // GitHub is happy with a unique user agent
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects
    timeout: 50000
});
github.users.getForUser({
    // optional:
    // headers: {
    //     "cookie": "blahblah"
    // },
    user: "imbubble"
}, function(err, res) {
    //console.log(res);
    //console.log(JSON.stringify(res));
    console.log(res.id);
});