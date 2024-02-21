const fs = require('fs')
function createScript(name, desc, type, options, payload){
    let script = {}
    script["name"] = name
    script["desc"] = desc
    script["type"] = type
    script["options"] = options
    script["payload"] = payload
    let jsonString = JSON.stringify(script, null, 2)
    fs.writeFile(name+".json", jsonString, 'utf8', (err) => {
        if (err) {
            makeLog("INFO", "脚本" + name + "创建成功")
        } else {
            makeLog("ERROR", "脚本" + name + "创建失败")
        }
    })
}