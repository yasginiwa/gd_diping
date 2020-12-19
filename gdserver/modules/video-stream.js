const fs = require('fs')
const path = require('path')
const url = require('url')
var util = require('util');
var slice = require('stream-slice').slice;
var Stream = require('stream');


module.exports = async (ctx, next) => {

    await next()
    let ext = path.extname(ctx.url)
    let file = path.basename(ctx.url)
    let filePath = `./static/uploads/detail/video/${file}`
    if (ext === '.mp4') {
        let stats = fs.statSync(filePath)
        var range = ctx.headers.range;
        console.log(range)
        var positions = range.replace(/bytes=/, "").split("-");
        var start = parseInt(positions[0], 10);
        var total = stats.size;
        var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
        var chunksize = (end - start) + 1;

        ctx.response.headers = {
            "Content-Range": "bytes " + start + "-" + end + "/" + total,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4"
        }
        
        ctx.response.body = fs.createReadStream(filePath)
    }
} 
