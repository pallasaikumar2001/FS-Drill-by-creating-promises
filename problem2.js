import fs from "fs";

function readLipsum() {
    return new Promise((resolve, reject) => {
        fs.readFile('lipsum.txt', 'utf8', (err, data) => {
            if (err) {
                reject('Error in reading file: ' + err);
            } else {
                resolve(data);
            }
        });
    });
}

function upper(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('upper.txt', data.toUpperCase(), (err) => {
            if (err) {
                reject('Error in writing to upper.txt: ' + err);
            } else {
                resolve(data); 
            }
        });
    });
}

function writeFileName(fileName) {
    return new Promise((resolve, reject) => {
        fs.writeFile('filenames.txt', fileName + '\n', (err) => {
            if (err) {
                reject('Error in writing filename: ' + err);
            } else {
                resolve(`${fileName} is added to filenames`);
            }
        });
    });
}

function lower(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('lower.txt', data.toLowerCase(), (err) => {
            if (err) {
                reject('Error in writing to lower.txt: ' + err);
            } else {
                resolve(data); 
            }
        });
    });
}

function appendFileName(fileName) {
    return new Promise((resolve, reject) => {
        fs.appendFile('filenames.txt', fileName + '\n', (err) => {
            if (err) {
                reject('Error in appending filename: ' + err);
            } else {
                resolve(`${fileName} is added to filenames`);
            }
        });
    });
}

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject('Error in reading file: ' + err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFinalFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('final.txt', data, (err) => {
            if (err) {
                reject('Error in writing to final.txt: ' + err);
            } else {
                resolve('Writing data to final.txt file completed');
            }
        });
    });
}
export function main(){
    readLipsum()
        .then((data) => {
            console.log('Reading file completed');
            return upper(data);
        })
        .then((data) => {
            console.log('Writing data to upper.txt file completed');
            return writeFileName('upper.txt');
        })
        .then(() => {
            return readFile('upper.txt');
        })
        .then((upperData) => {
            return readFile('lower.txt').then((lowerData) => ({ upperData, lowerData }));
        })
        .then(({ upperData, lowerData }) => {
            const combinedData = upperData.split(' ').concat(' ',lowerData.split(' '));
            combinedData.sort();
            const finalData = combinedData.join(' ');
            return writeFinalFile(finalData);
        })
        .then((message) => {
            console.log(message);
            return appendFileName('final.txt');
        })
        .then((message) => {
            console.log(message);
        })
        .catch((err) => {
            console.error(err);
        });
}

