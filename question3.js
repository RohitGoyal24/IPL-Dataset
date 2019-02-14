var path = require('./app.js');
var match=path.ext('./matches.csv');
var deli=path.ext('./deliveries.csv');
var idArr=[];
idArr=match.filter(function(i){
    return i['season']==='2016';
}).map(function(i){
    return i['id']
});
let obj={};
for(let i=0;i<deli.length;i++){
    for(let j=0;j<idArr.length;j++){
        if(deli[i]['match_id']==idArr[j]){
        if(obj.hasOwnProperty(deli[i]['bowling_team'])){
            obj[deli[i]['bowling_team']]+=Number(deli[i]['extra_runs']);
        }
        else{
            obj[deli[i]['bowling_team']]=Number(deli[i]['extra_runs']);
        }
    }
    }
}
console.log(obj);