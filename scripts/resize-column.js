/*	$.fn.moveHeaderRow = function() {
		var $grid = $(this);
		//if(!$grid.getHeaderRow().length) {
			$firstTr = $("#projectgroupsheader");
			//$grid.parents(".gridContainer").prepend($("<table class='gridHeaderRow'>").append($firstTr));
			
			$firstTr.find("div").each(function(i,item) {
				var $th = $(this);
				//var text = $th.text();
				//$th.html("");
				console.log(item);
				// create inner th elements
				//var lastTh = $grid.getHeaderRow().find("th").length -1;
				
				var $colHandle = $("<div class='colHandle'>Hemant</div>");
					$colHandle.height($th.outerHeight());
				 $th.append($colHandle);
				
				// if resizalbe columns is set
				//if($grid.data().resizableColumns) {
					// add drag (mousedown and mousemove) listeners
					$colHandle.mousedown(function(e) {
						
						var startX = e.clientX;
						$(document).bind("mousemove.grid",function(e) {
							// get the inner div
							var $div = $th;
							// calculate the width based on mouse position
							var width = $div.width() + (e.clientX - startX);
							// we need to resize the TD as well - so using the index, grab it
							var currentIndex = $th.prevAll().length;
							// set the width of the div
							$div.width(width);
							// set the width of the td
							$grid.find(".projectgroup").eq(currentIndex).width(width);
							// reset our start var
							startX = e.clientX;
							// equalize all the others
							$grid.equalizeColumns();
							// store this guys width
							$th.attr("width",width);
						});
						$(document).mouseup(function() {
							$(document).unbind("mousemove.grid");
						});
					});
				//}

				// now set the th to auto
				$th.width("auto");
				
				// add the resizer
				//$th.append($colResizer);
				
				// fix some sizing
				var ptop = -1 * parseInt($th.css("padding-top"));
				$colHandle.css({
					"top":ptop,
					"right":-1 * $colHandle.outerWidth() / 1.9
				});
								
			});
			
			//$grid.getHeaderRow().find(".colhandle:last").remove();
			
		//}	
		//return $grid.getHeaderRow();
	}


var $headerRow = $("#projectgroups").moveHeaderRow();



*/


















