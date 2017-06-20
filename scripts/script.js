
$(document).ready(()=>{

	console.log(window)

	$('.profile-wrapper').hover(function() {
		$('profile-wrapper').on('mousemove', function(event){
			console.log(event)
		})
		console.log('things are happening')
		$('.layer1').removeClass('animate-profile');
		$('.layer1').addClass('layer');
		var scene = $('#scene').get(0);
		var parallax = new Parallax(scene, {
			relativeInput: true,
			clipRelativeInput: true,
			// hoverOnly: true,
			inputElement: $('scene'),
			scalarX: 15,
			scalarY: 10,
			frictionX: 1,
			frictionY: 0,
			originX: 1,
			originY: .5,
		});
	}, function(){
		// console.log('off')
		$('.layer1').removeClass('layer');
		$('.layer1').addClass('animate-profile')
		$('.layer1').css("transform", "translate3d(0px, 0px, 0px)", "transition", "5s");
		// $('.layer1').removeAttr('style');
	});

	

	// var scene = $('#scene').get(0);
	// var parallax = new Parallax(scene, {
	// 	relativeInput: true,
	// 	hoverOnly: true,
	// 	inputElement: $('scene'),
	// 	scalarX: 10,
	// 	scalarY: 6,
	// 	frictionX: .5,
	// 	frictionY: .5,
	// });

});







// 