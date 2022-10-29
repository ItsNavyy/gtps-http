//** CODED BY NAVY, SIMPLE HTTP FOR GTPS SERVERS!

const http = require("http");

const server = http.createServer(function(req, res) {
    if (req.url == "/") {
        if (req.method == "GET") {
            res.writeHead(200);
            res.write("HTTP - GTPS");
            res.end();
        }
    }
    else if (req.url == "/growtopia/server_data.php") {
        if (req.method == "POST") {
            res.write("server|127.0.0.1\nport|17091\ntype|1\n#maint|Simple HTTP GTPS\n\nbeta_server|127.0.0.1\nbeta_port|17092\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001");
            res.end();
        }
        else {
            res.writeHead(404);
            res.write("You cant access that");
            return res.end();
        }
    }
    else {
        res.writeHead(404);
        res.write("404 Not Found");
        return res.end();
    }
});
server.listen(80);
console.log("Your server is start up!");
