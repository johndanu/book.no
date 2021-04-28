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
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_pin}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("vilayattu_sub_menu3.html", "_self");
         

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

      

      Symbol.bindElementAction(compId, symbolName, "${_fct_2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://www.flowcharttech.com", "_blank");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         this.onMove( e.pageX, e.pageY );

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         yepnope({
         
                             load: "http://cdn.edgecommons.org/an/1.1.0/js/min/EdgeCommons.js",
         
                            callback: function() {
         
                  // Load sound manifest (e.g. in creationComplete)
         
                  var assetsPath = "sound/";
         
                  EC.Sound.setup(
         
                             [
         
         
                                                {src: assetsPath + "udukkai.mp3|" + assetsPath + "udukkai.ogg", id: "u_pic1"},
         
                                                {src: assetsPath + "urulai.mp3|" + assetsPath + "urulai.ogg", id: 'u_pic2'},
         
                                                {src: assetsPath + "unavagam.mp3|" + assetsPath + "unavagam.ogg", id: 'u_pic3'},
         
                                                {src: assetsPath + "ulagam.mp3|" + assetsPath + "ulagam.ogg", id: 'u_pic4'},
         
                                                {src: assetsPath + "uyaram.mp3|" + assetsPath + "uyaram.ogg", id: 'u_pic5'},
         
                                                {src: assetsPath + "nungu.mp3|" + assetsPath + "nungu.ogg", id: 'u_pic6'},
												
												{src: assetsPath + "clapping.mp3|" + assetsPath + "clapping.ogg", id: 'clapping'},
												{src: assetsPath + "_correct.mp3|" + assetsPath + "_correct.ogg", id: '_correct'},
         
         
         
                             ],
         
                             function(){ EC.info("Sound setup finished", "Sound with Edge Commons"); }
         
                  );
         
         
         
         
         
         
         
         
         
                                      }
         
                  });
                  
                  
                  
                  
                  
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

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /*
         	Dynamically create the board and attach it to the Stage.  It has an index
         	in the DOM that causes it to hide behind the "background" symbol instance if
         	the iframe is collapsed.
         */         var gameBoard = sym.createChildSymbol("gameBoard", "bg2", 1);
         gameBoard.getSymbolElement().css("left", 0);
         gameBoard.getSymbolElement().css("top", 4);
         sym.setVariable("gameBoard", gameBoard);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vilayattu2}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("Vilayatu_Main_Menu.html", "_self");
         

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

   //=========================================================
   
   //Edge symbol: 'flower'
   (function(symbolName) {   
   
   })("flower");
   //Edge symbol end:'flower'

   //=========================================================
   
   //Edge symbol: 'decorateTheOutdoorsText'
   (function(symbolName) {   
   
   })("decorateTheOutdoorsText");
   //Edge symbol end:'decorateTheOutdoorsText'

   //=========================================================
   
   //Edge symbol: 'simpleFlower'
   (function(symbolName) {   
   
   })("simpleFlower");
   //Edge symbol end:'simpleFlower'

   //=========================================================
   
   //Edge symbol: 'fallingFlower'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2043, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 943, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("swingingFlower");
   //Edge symbol end:'swingingFlower'

   //=========================================================
   
   //Edge symbol: 'simpleFlower_1'
   (function(symbolName) {   
 
      var mymark = 0;
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3111, function(sym, e) {
         sym.stop();
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 696, function(sym, e) {
         sym.stop();
         /*
         	All of the logic for matching happens in this closure.  Since each flower knows
         	its own color, we can compare them and decide whether or not they're a match.
         	We use a single variable on the gameBoard level to remember the first object we've
         	clicked as well as whether or not we've clicked on anything.
         */
      
         // if this is the first click, register that this was the first clicked object
         var clicked = sym.getParentSymbol().getVariable("firstClickObject");
         if (clicked == null) {
         	sym.getParentSymbol().setVariable("firstClickObject", sym);
         }
         else {
         	// if this is the second click, do the comparison, and if it's the same, animate
         	var clickedColor = clicked.getVariable("color");
         	var currColor = sym.getVariable("color");
         	if (clickedColor == currColor) {
         		clicked.play("spin");
      
         		mymark++;
      EC.Sound.play('_correct');
      
         		sym.play("spin");
			sym.getComposition().getStage().$("mark").html("0"+mymark);

			 var starArray = ["star0","star1","star2","star3","star4","star5"];
			delay2();
function delay2(){
		  setTimeout( function () {
        		 
			sym.getComposition().getStage().$(starArray[mymark-1]).css("opacity",'1');


    } , 1000 );
}

         		// have we won?
         		var matched = sym.getParentSymbol().getVariable("matched");
 		if (matched >= 5) {
						delay();
						function delay(){
		  				setTimeout( function () {
        				sym.getComposition().getStage().play("gameWin");
						EC.Sound.play("clapping");
  					  } , 3000 );
              }
				}
         		else {
         			matched++;
         			sym.getParentSymbol().setVariable("matched", matched);
         		}

         	}
         	else {
         		// no match
         		sym.play("flipback");
         		clicked.play("flipback");
         	}
         	// either way, we clear the first clicked
         	sym.getParentSymbol().setVariable("firstClickObject", null);
         }


      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1928, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_myquestion}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         
         
   		//var imgPath = this.getElementById("background").style.backgroundImage;
			sym.play("reveal");

   var url = sym.$("background").css('background-image').replace(/^url\((.*?)\)$/,     '$1');
   var filename = url.substring(url.lastIndexOf('/')+1);

  filename=filename.substr(0, filename.lastIndexOf('.'));
  EC.Sound.play(filename);



      });
      //Edge binding end

   
      //Edge binding end

      })("gameFlower");
   //Edge symbol end:'gameFlower'

   //=========================================================
   
   //Edge symbol: 'background'
   (function(symbolName) {   
   
   })("background");
   //Edge symbol end:'background'

   //=========================================================
   
   //Edge symbol: 'cascadingFlowers'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var flowerNames = ["falling0", "falling1", "falling2", "falling3", "falling4",
         						 "falling5", "falling6"];
         
         for (var i=0; i < 7; i++) {
         	/*
         	  Each of the flower colors are randomly generated.  The flower asset (transparent PNG)
         	  has a yellow center, a transparent flower, and a slightly darker circle with an opacity
         	  set.  Behind this asset, we have an Ellipse called "background".  Changing the color
         	  of this div changes the color of the flower.
         	*/
         	var hue = 'rgb(' + (Math.floor((256)*Math.random()) + 50) + ',' + (Math.floor((256)*Math.random()) + 50) + ',' +  (Math.floor((256)*Math.random()) + 50) + ')';
         	sym.getSymbol(flowerNames[i]).getSymbol("flower").getSymbol("simpleFlower").$("background").css("background-color", hue);
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.getSymbol("falling1").play("center");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.getSymbol("falling6").play("center");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.getSymbol("falling4").play("center");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.getSymbol("falling2").play("center");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.getSymbol("falling0").play("center");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.getSymbol("falling5").play("center");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.getSymbol("falling3").play("center");

      });
      //Edge binding end

   })("cascadingFlowers");
   //Edge symbol end:'cascadingFlowers'
   
   //Edge symbol: 'gameBoard'
   (function(symbolName) {   
      // all of the flowers to colorize in an array
      var boardArray = ["flower0", "flower1", "flower2", "flower3",
	  					"flower4", "flower5", "flower6", "flower7",
						"flower8", "flower9", "flower10","flower11"];




      // colors 0-11, preselected pastel colors
      var imageArray = ["url(images/u_pic1.png)","url(images/u_pic2.png)","url(images/u_pic3.png)",
      						"url(images/u_pic4.png)","url(images/u_pic5.png)","url(images/u_pic6.png)"];




      function setUpBoard(currSym) {
         /*
         	This private method randomly shuffles the board so that you get a different
         	board each time.  We use the JavaScript equivalent of an associative array to 
         	keep track of how many of each color we have.  Since this is a match-two game,
         	the max is set to 2.
         */

      	// reset score
      	currSym.setVariable("matched", 0);

      	// create 24 matches - 12 colors
      	var matchArray = new Array();
      	var colorHashObject = new Object();
      	// initialization of the colorHashObject's hash
      	for (var i=0; i < 6; i++) {
      		colorHashObject[i.toString()] = 0;
      	}

      	// create the list of objects - max 2 matches per color
      	while(matchArray.length < 12) {
      		var randNum = Math.floor(Math.random() * 100) % 6;
      		if (colorHashObject[randNum.toString()] < 2) {
      			colorHashObject[randNum.toString()] += 1;
      			matchArray.push(randNum);
      		}
      		else {
      			continue;
      		}
      	}
      	return matchArray;
      }

      function colorizeBoard(currSym, randomImages) {
      	for (var i=0; i<12; i++) {
      		// each flower knows what its color is
      		var currColor = randomImages[i];
      		currSym.getSymbol(boardArray[i]).setVariable("color", imageArray[currColor]);


      		// set the color of the background
      		//currSym.getSymbol(boardArray[i]).$("background").css("background-color", imageArray[currColor]);
      	currSym.getSymbol(boardArray[i]).$("background").css("background-image", imageArray[currColor]);
      	}
      }

      function newBoard(mySym) {
         var randomImages = setUpBoard(mySym);
      	colorizeBoard(mySym, randomImages);
      }

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      	// IMPORTANT: click on "gameBoard" in the code panel's tree to see the symbol-level 
      	// functions that randomly generate the board.
      	newBoard(sym);

      	// 5x5 board means that there's always one left out in match-two game
      	sym.getSymbol("flower12").$("background").css("background-color","#ffffff");

      	// initialize the first click
      	sym.setVariable("firstClickObject", null);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_flower0}", "click", function(sym, e) {


      });
      //Edge binding end


   })("gameBoard");
   //Edge symbol end:'gameBoard'

   //=========================================================
   
   //Edge symbol: 'finishSym'
   (function(symbolName) {   
   
   })("finishSym");
   //Edge symbol end:'finishSym'

   //=========================================================
   
   //Edge symbol: 'st'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);

      });
      //Edge binding end

   })("st");
   //Edge symbol end:'st'

})(jQuery, AdobeEdge, "EDGE-7374520");