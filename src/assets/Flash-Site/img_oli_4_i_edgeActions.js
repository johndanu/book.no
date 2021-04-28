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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_thangai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('thangai');
         sound.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pachai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('pachai');
         sound.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_salangai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('salangai');
         sound.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vadai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('vadai');
         sound.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_panai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('panai');
         sound.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yanai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('yanai');
         sound.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kuthirai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('kuthirai');
         sound.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_marai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('marai');
         sound.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kudai}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('kudai');
         sound.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1014, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1071, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_thangai}", "mouseover", function(sym, e) {
         sym.play("on_1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_thangai}", "mouseout", function(sym, e) {
         sym.stop("off_1");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1223, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1166, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1381, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1438, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1599, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1542, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1792, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1735, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1993, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1936, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2134, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2077, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2283, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2226, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2431, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2374, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pachai}", "mouseover", function(sym, e) {
         sym.play("on_3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kuthirai}", "mouseover", function(sym, e) {
         sym.play("on_4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_marai}", "mouseover", function(sym, e) {
         sym.play("on_5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kudai}", "mouseover", function(sym, e) {
         sym.play("on_6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vadai}", "mouseover", function(sym, e) {
         sym.play("on_7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_panai}", "mouseover", function(sym, e) {
         sym.play("on_8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yanai}", "mouseover", function(sym, e) {
         sym.play("on_9");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_salangai}", "mouseover", function(sym, e) {
         sym.play("on_2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_salangai}", "mouseout", function(sym, e) {
         sym.stop("off_2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pachai}", "mouseout", function(sym, e) {
         sym.stop("off_3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kuthirai}", "mouseout", function(sym, e) {
         sym.stop("off_4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_marai}", "mouseout", function(sym, e) {
         sym.stop("off_5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kudai}", "mouseout", function(sym, e) {
         sym.stop("off_6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vadai}", "mouseout", function(sym, e) {
         sym.stop("off_7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_panai}", "mouseout", function(sym, e) {
         sym.stop("off_8");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yanai}", "mouseout", function(sym, e) {
         sym.stop("off_9");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pin}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("oosai.html", "_self");
         

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

      Symbol.bindElementAction(compId, symbolName, "${_pin2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("oosai.html", "_self");
         

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

})(jQuery, AdobeEdge, "EDGE-13970204");