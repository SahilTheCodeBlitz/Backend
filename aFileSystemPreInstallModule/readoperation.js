// did two operations read and append

import { readFile } from 'fs/promises';
import { appendFile } from 'fs';
import { writeFile } from 'fs/promises';

// async function readFromFile(filePath) {
//   try {
//     const data = await readFile(filePath);
//     console.log('File contents:', data.toString());
//   } catch (error) {
//     console.error('Error reading the file:', error);
//   }
// }

// readFromFile('C:\\Users\\welcome\\Desktop\\Backend Trivedi Sir\\aFileSystemPreInstallModule\\messages.txt');


// async function appendData(filePath,dataToAppend){
//     try{
//           appendFile(filePath,dataToAppend,()=>{
//           console.log('success');  
//         })
//     }catch(error){
//         console.log(error);
//     }
// }

// appendData('C:\\Users\\welcome\\Desktop\\Backend Trivedi Sir\\aFileSystemPreInstallModule\\messages.txt','\ni am append wala data')

async function writeData(file, dataToWrite) {
    try {
        await writeFile(file, dataToWrite);
        console.log('Success: Data written to file.');
    } catch (error) {
        console.error('Error:', error);
    }
}

writeData('C:\\Users\\welcome\\Desktop\\Backend Trivedi Sir\\aFileSystemPreInstallModule\\mess2.txt', 'I am data of write function to write');

