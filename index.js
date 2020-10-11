const http = require('http');
const axios = require('axios');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    try {
        const url = `https://api.github.com/repos/nodejs/node`;
        const { data } = await axios.get(url);
        const stargazersCount = data['stargazers_count'];
        const forksCount = data['forks_count'];
        const openIssuesCount = data['open_issues_count'];
        const message = `Stargazers: ${stargazersCount}\nForks: ${forksCount}\nOpen Issues: ${openIssuesCount}`;
        
        res.statusCode = 200;
        res.end(message);
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Internal error issued.');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
