logList = [] // 全局数组 用来存储日志
function makeLog(level,info) { // 函数 用于进行一次日志记录
    // 获取当前的时间
    let currentTime = (new Date()).toLocaleString();
    // 以JSON格式存储一条日志
    let logData = {
        "id": logList.length,
        "level": level,
        "time": currentTime,
        "info": info,
    }
    // 将JSON存储的日志放入logList中
    logList.push(logData);
}

function saveLog(filename){
    for(let i of logList){
        tmpLog = "[" + i.level + "][" + i.time + "] " + i.info
        const fs = require('fs');
        fs.writeFile(filename, tmpLog);
    }
}
