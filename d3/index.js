d3.select();
d3.selectAll();

var forestFootprint = [0.29, 0.19, 0.14, 0.17, 0.6, 1.23, 0.99, 0.16, 0.68, 0.09, 0.14, 0.12, 0.24, 0.4, 0.46, 0.16, 0.58, 0.77, 0.1, 0.5, 0.18, 0.12, 0.25, 0.42, 0.19, 0.83, 0.19, 0.09, 0.17, 0.52, 0.27, 0.55, 0.12];
var forestLand = [0.66, 1.18, 0.02, 13.86, 6.82, 0.19, 2.19, 2.09, 0.63, 0.23, 0.52, 0.16, 1.41, 0.04, 95.16, 0.13, 0.34, 59.19, 0.01, 0.89, 0.1, 0.1, 0.47, 0.74, 1.74, 5.54, 2.82, 0.17, 0.1, 81.52, 0.15, 1.22, 1.79];
var paises = ["Argentina", "Bahamas", "Barbados", "Bolivia", "Brazil", "Cayman Islands", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "French Guiana", "Guadeloupe", "Guatemala", "Guyana", "Haiti", "Honduras", "Jamaica", "Martinique", "Mexico", "Nicaragua", "Panama", "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia", "Suriname", "Trinidad and Tobago", "Uruguay", "Bolivarian Republic of Venezuela"];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / forestLand.length);

var svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

var barChart = svg.selectAll("rect")
                    .data(forestLand)
                    .enter()
                    .append("rect")
                    .attr("y", function(d){
                        return svgHeight - d;
                    })
                    .attr("height", function(d){
                        return d;
                    })
                    .attr("width", barWidth - barPadding)
                    .attr("transform", function(d,i){
                        var translate = [barWidth*i,0];
                        return "translate("+translate+")";
                    });

var text = svg.selectAll("text")
                .data(forestLand)
                .enter()
                .append("text")
                .text(function(d){
                    return d;
                })
                .attr("y", function(d, i){
                    return svgHeight - d - 2;
                })
                .attr("x", function(d, i){
                    return svgWidth * i;
                })