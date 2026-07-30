import http from 'node:http'
import usersArr from './data.js'

const PORT = 4000

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    if(req.method === 'POST' && req.url === '/users'){
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        });
        req.on('end', ()=> {
            try {
                const newUser = JSON.parse(body)
    
                newUser.id = usersArr.length + 1
                usersArr.push(newUser)
    
                res.writeHead(201, {
                    'Content-Type': 'application/json'
                })
    
                return res.end(JSON.stringify(usersArr))
    
            } catch(error) {
                res.writeHead(400, {
                    'Content-Type': 'application/json'
                })
    
                return res.end(JSON.stringify({
                    error: "Invalid JSON"
                }))
            }
        })

        return
    } else if (req.method === "GET" && req.url === '/users' ) {
        if (usersArr) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(usersArr))
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('not objekt')
        }
    }

    res.end();
}).listen(PORT)
