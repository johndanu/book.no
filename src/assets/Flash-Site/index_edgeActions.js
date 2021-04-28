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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_sorkal}", "mouseover", function(sym, e) {
         sym.play("sorkal_on");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sorkal}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the objectsym.play();
         //sym.play("sorkal_off");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         this.onMove = function( posX, posY ){
         	timelineControl = Number(posX)*1;
         	console.log(timelineControl);
         	sym.getSymbol("pupils").stop(timelineControl);
         }
         yepnope({
         			nope:['js/jquery-ui-1.10.3.custom.min.js', 'js/jquery.ui.touch-punch.min.js'],
         		   complete: init
         
         
         });
         // stop the timeline at the given position (ms or label)

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sorkal}", "click", function(sym, e) {
         sym.play("stage_rev");
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("sub_menu.html", "_self");
             } , 1580 );
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9549, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4587, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89746, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_eq_pause}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('bgm');
         sound.pause();
         sym.play("pause");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88877, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89129, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_eq_play}", "click", function(sym, e) {
         
         var sound = soundManager.getSoundById('bgm');
         sound.play();
         
         sym.play("play");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fct_2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.flowcharttech.com", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         this.onMove( e.pageX, e.pageY );
         //sym.$('#Stage').css({'margin-left':'auto', 'margin-right':'auto'});
         
         sym.$('#Stage').css({'margin-left':'auto', 'margin-right':'auto'});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vilayatu}", "mousedown", function(sym, e) {
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91195, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vilayatu}", "mouseover", function(sym, e) {
         sym.play("vilayatu_on");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vilayatu}", "mouseout", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vilayatu}", "click", function(sym, e) {
         sym.play("stage_rev");
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("Vilayatu_Main_Menu.html", "_self");
             } , 1580 );
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sorkalCopy}", "mouseover", function(sym, e) {
         sym.play("sorkal_on");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sorkalCopy}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the objectsym.play();
         //sym.play("sorkal_off");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sorkalCopy}", "click", function(sym, e) {
         sym.play("stage_rev");
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("sub_menu.html", "_self");
             } , 1580 );
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91626, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_eluthukal2}", "mouseover", function(sym, e) {
         sym.play("ezhuthu_on");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_eluthukal2}", "click", function(sym, e) {
         sym.play("stage_rev");
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("eluthukal_main_menu.html", "_self");
             } , 1580 );
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "focus", function(sym, e) {
         
         sym.$('#Stage').css({'margin-left':'auto', 'margin-right':'auto'});
         

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

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

})(jQuery, AdobeEdge, "EDGE-7869254");