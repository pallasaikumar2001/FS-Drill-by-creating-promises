import fs from 'fs'
export function createdir(){
    return new Promise((resolve, reject) => {
        fs.mkdir("folder",{recursive:true},(err)=>{
            if (err){
                reject('Error in creating directory :',err);
            }
            else{
                resolve('Directory is created')
            }
        })
    })
}
export function createfile1(){
    return new Promise((resolve, reject) => {
        fs.writeFile('folder/sai1.json','this is content in sai1.json file',(err)=>{
            if (err){
                reject('Error in creating directory :',err);
            }
            else{
                resolve('file is created')
            }
        })
    })
}
export function createfile2(){
    return new Promise((resolve, reject) => {
        fs.writeFile('folder/sai2.json','this is content in sai2.json file',(err)=>{
            if (err){
                reject('Error in creating directory :',err);
            }
            else{
                resolve('file is created')
            }
        })
    })
}
export function deletesai1(){
    return new Promise((resolve, reject) => {
        fs.unlink('folder/sai1.json',(err)=>{
            if(err){
                reject('Error in deleting sai1.json file :',err)
            }
            else{
                resolve('sai1.json file deleted')
            }
        })
    })
}
export function deletesai2(){
    return new Promise((resolve, reject) => {
        fs.unlink('folder/sai2.json',(err)=>{
            if(err){
                reject('Error in deleting sai2.json file :',err)
            }
            else{
                resolve('sai2.json file deleted')
            }
        })
    })
}
export function main(){
    createdir()
    .then((message)=>{
        console.log(message);
        return createfile1();
    })
    .then((message)=>{
        console.log(message);
        return createfile2()
    })
    .then((message)=>{
        console.log(message)
        return deletesai1()
    })
    .then((message)=>{
        console.log(message)
        return deletesai2()
    })
    .then((message)=>{
        console.log(message)
    })
    .catch((message)=>{
        console.log(message)
    })

}

