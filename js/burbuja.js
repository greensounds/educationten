function burbujas(){
        var width = 800;
		var height = 600;

		var canvas = d3.select("#news").append("svg")
					   .attr("width", width)
					   .attr("height", height)
					.append("g")
					.attr("transform", "translate(50, 50)");

		var pack = d3.layout.pack()
		             .size([width, height - 50])
		             .padding(10);

		d3.json("js/states.json", function(data) {
			var nodes = pack.nodes(data)

			var node = canvas.selectAll(".node")
							 .data(nodes)
							 .enter()
							 .append("g")
							 .attr("class", "node")
							 .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")";})

			node.append("circle")
				.attr("r", function (d) { return d.r; })
				.attr("fill", function(d){ return d.children ? "#fff" : "steelblue"; })
				.attr("opacity", 0.25)
				.attr("stroke", function(d) {return d.children ? "#fff" : "ADADAD"})
				.attr("stroke-width", 2);

			node.append("text")
				.text(function(d) { return d.children ? "" : d.name;})
				.attr("text-anchor", "middle")
				.attr("font-size", "10px")
				.attr("font-weight", "bold");

		})
}

window.addEventListener("load", burbujas());