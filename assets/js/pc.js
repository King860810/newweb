  
		$(document).ready(function(){

			function myfunction(li,li_a,menu_tab){
				li.click(function(){
				var index=$(this).index();
				menu_tab.eq(index).addClass("active").siblings().removeClass("active");
				li_a.removeClass("selected");
				li_a.eq(index).addClass("selected").siblings().removeClass("selected");
				
			});
			}

			myfunction($(".main .menu .ulmenu1 li"),$(".main .ulmenu1 li a"),$(".main .content .menu1 .tab"));
			myfunction($(".main .menu .ulmenu2 li"),$(".main .ulmenu2 li a"),$(".main .content .menu2 .tab"));
			myfunction($(".main .menu .ulmenu3 li"),$(".main .ulmenu3 li a"),$(".main .content .menu3 .tab"));



			$(function(){           
				$(".menu > ul").eq(0).show();
				 $(".menu h3").click(function(){
				 		
				 		$(".menu_tab > div").removeClass("active");

				 		var val=($(this).next().attr('class'));
				 		var menu_value=(val.substring(val.length-1));
				 		$(".main .content .menu"+menu_value+" .tab:first-child").addClass("active");
				 		$(".main .menu .ulmenu"+menu_value+" li>a").removeClass("selected");
				 		$(".main .menu .ulmenu"+menu_value+" li a").eq(0).addClass("selected");
				 		

			            });

			});
			
			$(function(){   
				 $(".main .menu > h3").click(function(){

				 	$(".main .content .A1").empty().text($(this).text());
				 	
				 });
			});
		});



