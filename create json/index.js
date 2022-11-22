// 'use strict';

const fs = require('fs');

let jsonData={
    dna: "1",
    name: "Hamza #1",
    description: "",
    image: "https://gateway.pinata.cloud/ipfs/QmRrMnRaG22qMFLoH6yWec68vnu9RMzRTyr9zkDf26Vcc5/",
    edition: 1,
    date: Date.now(),
  }
for(let i=1;i<=4;i++){
    jsonData.dna=i;
    jsonData.edition=i;
   jsonData.image=`https://gateway.pinata.cloud/ipfs/QmRrMnRaG22qMFLoH6yWec68vnu9RMzRTyr9zkDf26Vcc5/${i}.jpeg`;
   jsonData.name="Hamza #"+i;
   let data = JSON.stringify(jsonData, null, 2);
   console.log(jsonData.image);
   fs.writeFile(`json/${i}.json`, data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}


console.log('This is after the write call');