$(function() {
    $(".alert").alert();
    $("form").submit(function() {
        return false;
    });
    $("#start").click(function() {
        // Reset the UI
        $("table tbody").html("");
        $("#alerts").html("");
    
        // Target string
        var goal = $("#goal").val();
        // Size of gene pool
        var size = parseInt($("#size").val(), 10);
    
        var population = new genetic.Population(goal, size);
        for (var result = population.generation();; result = population.generation()) {
        	if (result.generation % 100 == 0 || result.cost < 50) {
        		$("table tbody").append("<tr><td>" + result.generation + "</td><td>" + result.value + "</td><td>" + result.cost + "</td></tr>");
        	}
        	if (result.cost == 0) {
            	$("#alerts").append("<div class=\"alert alert-success\">" + 
                    "<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>" + 
                    "<h4>Match found in " + result.generation + " generations!</h4>" +
                    "</div>");
                $("table tbody tr").last().addClass("match");
            	break;
        	}
            if (result.generation >= 2000) {
                $("#alerts").append("<div class=\"alert alert-error\">" + 
                    "<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>" + 
                    "<h4>Failed to find match in " + result.generation + " generations!</h4>" +
                    "</div>");
                break;
            }		
        }
        return false;
    });
});