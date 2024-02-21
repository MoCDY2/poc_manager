const nmap = require('libnmap');

function portScan(host, ports, args,){
    let opts = {
        "range": host,
        "ports": ports,
        "flags": args
    }
    let report
    nmap.scan(opts, function(err, result) {
        if (err) {
            makeLog("Error", "端口扫描失败: " + err)
        }
        report = result
    })
    makeLog("INFO", "端口扫描完成")
    return report
}