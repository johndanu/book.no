/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the symbol is created here
         yepnope(
         	{
         		nope:
         			['js/jquery-ui-1.10.3.custom.min.js', 'js/jquery.ui.touch-punch.min.js'],
         			complete: init
         	}
         );
         function init()
         	{
                  		var snd = ["sound1", "sound2", "sound3", "sound4", "sound5"];
         				var drag = ["letter1","letter2","letter3","letter4","letter5"];
         				var drop = ["ansbox1","ansbox2","ansbox3","ansbox4","ansbox5"];
         				var rect = ["rect1","rect2","rect3","rect4","rect5"];
         				$mark = 0;
                  		//Draggable
         				for(i=0;i<drag.length;i++)
         				{
         				sym.$(drag[i]).draggable({ revert:'invalid', snapmode: 'inner', revertDuration: '10' });
         				}
         
                  		//Droppable
         				for(i=0;i<drop.length;i++)
         				{
         						sym.$(drop[i]).droppable(
         						{	
									accept: sym.$(drag[i]),
									drop: function(event, ui){
									$mark++;
									chk();
									sym.$(this).append(ui.draggable.css({'position':'static'}))
									sym.$(drag[i]).css({'margin':'auto'});
									//getting the index of array
									var draggableId = ui.draggable.attr("id");
									var wrd =  draggableId.replace('Stage_','')
									var j = drag.indexOf(wrd);
									var k = drop.indexOf(wrd);
									//index of rect
									sym.$(rect[j]).css({"border-color":"#49f50c", "border-width":"3px"});
									//index of sound
									var sound = soundManager.getSoundById(snd[j]);
									sound.play();
									
									sym.$(drop[i]).play();
         						}	
         					});
         				}
         }
			function chk()
			{
			 	if($mark>=2)
			 	{							
					delay();
				}
			}
				function delay(){
					  setTimeout( function () {
						sym.play('greet');
						var sound = soundManager.getSoundById("clap");
						sound.play();
					} , 2000 );
				}
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pin}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("dd_letter_2.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_letter1}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('sound1');
         sound.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_box1}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('sound1');
         sound.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_letter2}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('sound2');
         sound.play();
      });
      //Edge binding end
      

      Symbol.bindElementAction(compId, symbolName, "${_box2}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('sound2');
         sound.play();

      });
      //Edge binding end
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 199, function(sym, e) {
         sym.play("star");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 312, function(sym, e) {
         sym.play("star")

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 56, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("index.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_menu_sorkal}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("sub_menu.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fct_2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.flowcharttech.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         this.onMove = function( posX, posY ){
         	timelineControl = Number(posX)*1;
         	console.log(timelineControl);
         	sym.getSymbol("pupils").stop(timelineControl);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         this.onMove( e.pageX, e.pageY );

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         reSize();
         
         function reSize()
         {
         var stageHeight = $("#Stage").height();
         var stageWidth = $("#Stage").width();
         // console.log("stageHeight " + stageHeight);
         // console.log("stageWidth " + stageWidth);
         var ratio = stageWidth / stageHeight;
         var bodyHeight = $(window).height();
         var bodyWidth = $(window).width();
         // console.log("bodyHeight " + bodyHeight);
         // console.log("bodyWidth " + bodyWidth);
         var bodyRatio = bodyWidth / bodyHeight;
         var newStageHeight = bodyHeight;
         var newStageWidth = bodyWidth;
         var leftPos = 0;
         var topPos = 0;
         // fit width
         if (bodyRatio < ratio) {
             newStageWidth = bodyWidth;
             newStageHeight = newStageWidth / ratio;
             topPos = 0.5 * (bodyHeight - stageHeight);
         }
         // fit height
         else if (ratio < bodyRatio) {
             newStageHeight = bodyHeight;
             newStageWidth = newStageHeight * ratio;
             leftPos = 0.5 * ($(window).height() - $("#Stage").height());
         }
         // console.log("newStageHeight " + newStageHeight);
         // console.log("newStageWidth " + newStageWidth);
         $("#Stage").height(newStageHeight);
         $("#Stage").width(newStageWidth);
         $("#Stage").css("margin-left",'auto');
         $("#Stage").css("margin-right",'auto');
         $("#Stage").css("width", '1366px');
         $("#Stage").css("height", '768px');
         $("#Stage").css("top", leftPos+'px');
         //$("body").css("background-color", '#00A0ff');
         //$("body").css("background-image", 'url(images/bg.jpg)');
         
         
         
         
         }
         
         reSize();
         
         window.onresize = function(event) {
         
         reSize();
         
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'pupils'
   (function(symbolName) {   
   
   })("pupils");
   //Edge symbol end:'pupils'

})(jQuery, AdobeEdge, "EDGE-7374520");