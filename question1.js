var path = require('./app.js');
var match=path.ext('./matches.csv');
var newArray={};
for(item in match){
    if(newArray.hasOwnProperty(match[item]['season'])){
        newArray[match[item]['season']]++;
    }
    else{
        newArray[match[item]['season']]=1;
    }
}
console.log( newArray);

