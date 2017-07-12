$(document).ready(function() {


	if (!device.tablet() && !device.mobile()) {
		$(".player").mb_YTPlayer();
	} else {
		//Если мобильние девайсы
	};

	$(".sec_4").height($(window).height());

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));



	$("#toggle").click(function(){
    $(this).toggleClass("on");
    $(".main_menu").slideToggle();

	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});
	//var myAnimation = DrawFillSVG({
		//elementId:"tc-svg1"
	//});
   //var svg = new Walkway({ 
      //selector: '#tc-svg1',
      //duration: '1600',
     // easing: 'easeOut'
    //});

    //svg.draw();


});

