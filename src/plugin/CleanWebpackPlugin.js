const fs = require('fs')
const path = require('path')

class CleanWebpackPlugin{
    constructor(options){
        console.log('创建插件', options);
    }
    apply(complier){
        //1.拿出输出路径
        let outputPath = complier.config.output.path
        //2.订阅打包前消息
        complier.hooks.entryOption.tap('CleanWebpackPlugin', ()=>{
            this.cleanDirOrFile(outputPath)
        })
    }
    cleanDirOrFile(dirPath){
        // 1.如果没有文件就不需要删除
        if (!fs.existsSync(dirPath)){
            return
        }
        // 2.nodejs注意点：不能删除非空文件，判断是否是一个文件并且有内容
        if (fs.statSync(dirPath).isDirectory() && fs.readdirSync(dirPath).length !== 0) {
            // 3.如果是一个非空的目录, 那么就先删除这个目录中的内容
            let files = fs.readdirSync(dirPath);
            files.forEach((file) => {
                console.log('file',file);
                let filePath = path.resolve(dirPath, file);
                if(fs.statSync(filePath).isDirectory()){
                    //清空目录
                    this.cleanDir(filePath);
                }else{
                    //直接删除
                    fs.unlinkSync(filePath);
                }
            })
        }
    }
}

module.exports = CleanWebpackPlugin