var path = require('./app.js');
var matchesData=path.ext('./matches.csv');
var deliveriesData=path.ext('./deliveries.csv');
function mapEconomy()
{
	let matchesID = []
	let graphData = {}
	let topEconomies = []
	
	matchesID = matchesData.filter((item, index) => { return item['season'] == 2015}).map((item, index) => {return item['id']})
	deliveriesData = deliveriesData.filter((item, index) => 
	{
		return(matchesID.indexOf(item["match_id"]) !== -1)			
	})
	deliveriesData.map((item, index) => {
		if(!graphData.hasOwnProperty(item['bowler']))
		{
			runsConceded = parseInt(item['total_runs']) - parseInt(item['bye_runs']) - parseInt(item['legbye_runs']) - parseInt(item['penalty_runs'])
			graphData[item['bowler']] = {'runs' : runsConceded, 'overs' : 0}
		}
		else
		{
			runsConceded = parseInt(item['total_runs']) - parseInt(item['bye_runs']) - parseInt(item['legbye_runs']) - parseInt(item['penalty_runs'])
			if(index === deliveriesData.length-1)
			{
				graphData[item['bowler']]['overs'] = graphData[item['bowler']]['overs'] + 1
			}
			else if(deliveriesData[index+1]['bowler'] !== item['bowler'])
			{
				graphData[item['bowler']]['overs'] = graphData[item['bowler']]['overs'] + 1
			}
			graphData[item['bowler']]['runs'] = graphData[item['bowler']]['runs'] + runsConceded
		}
	})
	
	for (let elem in graphData)
	{
		let economy = graphData[elem]['runs'] / graphData[elem]['overs']
		topEconomies.push([elem,economy])	 
	}
	topEconomies.sort((a,b) => {return a[1] - b[1]})
	topEconomies = topEconomies.splice(0,10)
	graphData = {}
	topEconomies.map((item , index) => {graphData[item[0]]= item[1]})
	return graphData
}
console.log(mapEconomy());