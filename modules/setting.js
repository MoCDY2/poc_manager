const fs = require('fs');
const yaml = require('js-yaml');
config = {};
function readConfig(){
    try {
        // 读取 YAML 配置文件
        config = yaml.safeLoad(fs.readFileSync('config.yaml', 'utf8'));
        makeLog('INFO', "配置文件加载成功");
    } catch (error) {
        makeLog('ERROR', "配置文件加载失败，请检查config.yml文件");
    }
}

function  saveConfig(){
    let yamlString = yaml.safeDump(config);
    try{
        fs.writeFileSync('config.yaml', yamlString, 'utf8');
        makeLog('INFO', "配置文件写入成功");
    } catch (error) {
        makeLog('ERROR', "配置文件写入失败");
    }

}