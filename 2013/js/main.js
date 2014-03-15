$(document).ready(function() {
	console.log('test');
	$("#countdown").countdown({
        date: "07 september 2013 09:00:00",
        format: "on"
      },
      
      function() {
        // callback function
    });

	$("#tabs > div").hide();
	$("#home_content").show();

	$("#navigation li.home").on('click', function() {		
		$("#tabs > div").hide();
		$("#home_content").show();
	});

	$("#navigation li.twitter").on('click', function() {
		$("#tabs > div").hide();
		$("#twitter_content").show();
	});
	
	$("#navigation li.ideas").on('click', function() {
		$("#tabs > div").hide();
		$("#ideas_content").show();
	});
	
	$("#navigation li.quienes").on('click', function() {
		$("#tabs > div").hide();
		$("#quienes_content").show();
	});

	$("#navigation li.faq").on('click', function() {
		$("#tabs > div").hide();
		$("#faq_content").show();
	});


	$("#basesYcondicionesLink").on('click', function() {
		$("#tabs > div").hide();
		$("#basesYcondiciones_content").show();
	});

});