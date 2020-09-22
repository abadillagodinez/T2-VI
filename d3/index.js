d3.select();
d3.selectAll();
d3.csv();

d3.select("h1").style('color','red');
d3.csv('data.csv').then(data=>{console.log(data);});