var path=require('./app.js');
var match=path.ext('./matches.csv');
function matches(){
var newobj={};
match.map((i,j)=>{
    if((!newobj.hasOwnProperty(i['winner']))&&(i['result']==='normal'))
    {
        newobj[i['winner']]={};
        newobj[i['winner']][i['season']]=1
    }
    else if(i['result']==='normal'){
        if(!newobj[i['winner']].hasOwnProperty([i['season']]))
        {
            newobj[i['winner']][i['season']]=1;
        }
        else{
            newobj[i['winner']][i['season']]=newobj[i['winner']][i['season']]+1
        }
    }
})
return newobj;
} 
console.log(matches())