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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15668, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pa}", "mouseover", function(sym, e) {
         sym.play("pa_on");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pa}", "mouseout", function(sym, e) {
         sym.play("pa_off");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15805, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pa}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('pa');
         sound.play();
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("dd_word_pa.html", "_self");
             } , 2000 );
         }
         

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_ma}", "mouseover", function(sym, e) {
         sym.play("on_ma");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ma}", "mouseout", function(sym, e) {
         sym.stop("on_ma");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ma}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('ma');
         sound.play();
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("dd_word_ma.html", "_self");
             } , 2000 );
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ka}", "mouseover", function(sym, e) {
         sym.play("on_ka");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ka}", "mouseout", function(sym, e) {
         sym.stop("on_ka");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ka}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('ka');
         sound.play();
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("dd_word_ka.html", "_self");
             } , 2000 );
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sa}", "mouseover", function(sym, e) {
         sym.play("on_sa");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sa}", "mouseout", function(sym, e) {
         sym.stop("on_sa");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sa}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('sa');
         sound.play();
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("dd_word_sa.html", "_self");
             } , 2000 );
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_va}", "mouseover", function(sym, e) {
         sym.play("on_va");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_va}", "mouseout", function(sym, e) {
         sym.stop("on_va");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_va}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('va');
         sound.play();
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("dd_word_va.html", "_self");
             } , 2000 );
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_na}", "mouseover", function(sym, e) {
         sym.play("on_na");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_na}", "mouseout", function(sym, e) {
         sym.stop("on_na");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_na}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('na');
         sound.play();
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("dd_word_na.html", "_self");
             } , 2000 );
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tha}", "mouseover", function(sym, e) {
         sym.play("on_tha");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tha}", "mouseout", function(sym, e) {
         sym.stop("on_tha");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tha}", "click", function(sym, e) {
         var sound = soundManager.getSoundById('tha');
         sound.play();
         
         delay();
         function delay(){
         		  setTimeout( function () {
                 window.open("dd_word_tha.html", "_self");
             } , 2000 );
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17087, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17918, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18668, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19418, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20168, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20918, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mun}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("dd_word_2.html", "_self");
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_menu_sorkal}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("sub_menu.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home}", "click", function(sym, e) {
         // insert code for mouse click here// Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("index.html", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mun2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("dd_word_2.html", "_self");

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

})(jQuery, AdobeEdge, "EDGE-2577926");