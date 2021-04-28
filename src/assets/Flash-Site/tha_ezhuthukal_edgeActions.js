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
         yepnope({nope:['js/jquery-ui-1.10.0.custom.min.js'], complete: init});
         
         
         function init(){
         
         	//Use the code! Draggable! Droppable!!
         
         sym.$("a").html("j");
         sym.$("aa").html("jh");
         sym.$("i").html("jp");
         sym.$("ee").html("jP");
         sym.$("u").html("J");
         sym.$("oo").html("J}");
         sym.$("e").html("nj");
         sym.$("ea").html("Nj");
         sym.$("ai").html("ij");
         sym.$("o").html("njh");
         sym.$("O").html("Njh");
         sym.$("av").html("njs");
         
         
         
         sym.$('a').draggable();
         sym.$('aa').draggable();
         sym.$('i').draggable();
         sym.$('ee').draggable();
         sym.$('u').draggable();
         sym.$('oo').draggable();
         sym.$('e').draggable();
         sym.$('ea').draggable();
         sym.$('ai').draggable();
         sym.$('o').draggable();
         sym.$('O').draggable();
         sym.$('av').draggable();
         
         	//Droppable... on the target!
         	//sym.$('body').droppable({drop: function() {sym.getSymbol("part").play();}});
         
         	sym.$('Stage').droppable
            ({
         
         	drop: function() 
         	          {
         
         
         	         // EC.Sound.play('pic1');
          //EC.Sound.play('pic1');
         	              //alert(sym.getVariable("mySym").indexOf("Stage_a"))
          			var mySym =sym.getVariable("curSym").substring(sym.getVariable("curSym").lastIndexOf('_')+1);
         
          							  sym.setVariable('mysymbol',mySym)
         
         							  if(sym.getVariable("mySym").indexOf(sym.getVariable("curSym")) == sym.getVariable("ranNo" ))
         							  {
         							//  alert("correct");
         
         							sym.setVariable("mark",sym.getVariable("mark")+1);
         							if(sym.getVariable("mark")>=12)
         							{
         							delay_2();
         							}
         							 EC.Sound.play('correct');
         							  //EC.Sound.play('pic1');
         							  // play the timeline of the correct symbol
         							  sym.getSymbol("correct").play(1);
         							 // alert('sss');
         							  sym.$(mySym).css('left', 765); 
         						     sym.$(mySym).css('top', 385); 
         							  sym.setVariable('curX',0);
         							  sym.setVariable('curY',0);
         							  sym.getVariable("mySym").splice(sym.getVariable("ranNo"),1);
         							  sym.getVariable("myText").splice(sym.getVariable("ranNo"),1);
         							  sym.getVariable("mySound").splice(sym.getVariable("ranNo"),1);
         
         							  //alert(sym.getVariable("mySym").length)
         
         							 	delay();
         
         
         
         
         					 }
         
         
         
         				           else
         							  {
         							//  EC.Sound.play('pic1');
         
         									//alert("in-correct")
         										EC.Sound.play('wrong');
         									// play the timeline of the in-correct symbol
         									sym.getSymbol("incorrect").play(1);
         									sym.$(mySym).css('left', sym.getVariable('curX')); 
         									sym.$(mySym).css('top', sym.getVariable('curY')); 
         									sym.setVariable('curX',0);
         									sym.setVariable('curY',0);
         									sym.$("question").show();
         
         
         							  }
         	            }
         	  });
         }
         
         
         
         
         
         
         //Reqired Variables 
         sym.setVariable("curX",0);
         sym.setVariable("curY",0);
         sym.setVariable("mySym",['Stage_a','Stage_aa',"Stage_i",'Stage_ee','Stage_u',"Stage_oo",'Stage_e','Stage_ea',"Stage_ai",'Stage_o','Stage_O',"Stage_av"]);
         sym.setVariable("myText",['m','M',",",'<','c',"C",'v','V',"I",'x','X',"xs"]);
         sym.setVariable("mySound",["pic1","pic2","pic3","pic4","pic5","pic6","pic7","pic8","pic9","pic10","pic11","pic12"]);
         sym.setVariable("curSym","");
         sym.setVariable('mysymbol','')
         sym.setVariable("mark",0);
         
         
         
         
         function nxtQues()
         {
         
         
         var ranNo = Math.floor(Math.random()*sym.getVariable("mySym").length);
         
         sym.setVariable("ranNo",ranNo);
         
         sym.$("quesText").html(sym.getVariable("myText")[ranNo]);
         
         
         EC.Sound.play(sym.getVariable("mySound")[ranNo]);
         
         }
         //function Variables
         sym.setVariable("nxtQues",nxtQues);
         
         
         
         
         function delay()
         			{
         			  setTimeout( function () {
         			//  alert("delay")
         
         				           sym.getVariable("nxtQues")();
         				           sym.$("question").show();
         							  sym.$(sym.getVariable('mysymbol')).hide();
         
         			  } , 2000 );
         			}
         
         
         nxtQues();//get the value of a Symbol variable
         var myVariable = sym.getVariable("myVariableName");
         
         
         
         
         			function delay_2()
         			{
         setTimeout( function () {
         			//  alert("delay")
         
         				          sym.$('finish').show();
         			EC.Sound.play('clapping');
         
         			  } , 3000 );
         
         
         			}
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pin}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("eluthu_sub_menu.html", "_self");
         

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
         window.open("eluthukal_main_menu.html", "_self");
         

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
         
         //**********************************************SETUP SOUND <START>**********************************************
         yepnope({
         
                    load: "js/EdgeCommons.js",
         
         
                            callback: function() {
         
                  // Load sound manifest (e.g. in creationComplete)
         
                  var assetsPath = "sound/ezhuthu/";
         
                  EC.Sound.setup(
         
                             [
         
                                  {src: assetsPath + "tha.mp3|" + assetsPath + "tha.ogg", id: "pic1"},
         
                                  {src: assetsPath + "thaa.mp3|" + assetsPath + "thaa.ogg", id: 'pic2'},
         
                                  {src: assetsPath + "thi.mp3|" + assetsPath + "thi.ogg", id: 'pic3'},
         
                                  {src: assetsPath + "thee.mp3|" + assetsPath + "thee.ogg", id: 'pic4'},
         
                                  {src: assetsPath + "thu.mp3|" + assetsPath + "thu.ogg", id: 'pic5'},
         								 {src: assetsPath + "thoo.mp3|" + assetsPath + "thoo.ogg", id: 'pic6'},
                                  {src: assetsPath + "the.mp3|" + assetsPath + "the.ogg", id: 'pic7'},
                                  {src: assetsPath + "thea.mp3|" + assetsPath + "thea.ogg", id: 'pic8'},
                                  {src: assetsPath + "thai.mp3|" + assetsPath + "thai.ogg", id: 'pic9'},
         
                                  {src: assetsPath + "tho.mp3|" + assetsPath + "tho.ogg", id: 'pic10'},
                                  {src: assetsPath + "ttho.mp3|" + assetsPath + "ttho.ogg", id: 'pic11'},
                                  {src: assetsPath + "thov.mp3|" + assetsPath + "thov.ogg", id: 'pic12'},
                                  {src: assetsPath + "correct.mp3|" + assetsPath + "correct.ogg", id: 'correct'},
                                  {src: assetsPath + "wrong.mp3|" + assetsPath + "wrong.ogg", id: 'wrong'},
                                   {src: assetsPath + "clapping.mp3|" + assetsPath + "clapping.ogg", id: 'clapping'},
         
                             ],
         
                             function(){ EC.info("Sound setup finished", "Sound with Edge Commons");
         
         
         
         
                              }
         
                  );
         
         
          }
         
                  });
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_a}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_aa}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_i}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         
		 

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ee}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_u}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_oo}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_e}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ea}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ai}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_o}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_O}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_av}", "mousedown", function(sym, e) {
         var X = sym.$(e.target).offset().left;
         var Y = sym.$(e.target).offset().top;
         
         sym.setVariable('curX',X);
         sym.setVariable('curY',Y);
         
         sym.$("question").hide();
         sym.setVariable("curSym",e.target.id)
         
         

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
   
   //Edge symbol: 'mystage'
   (function(symbolName) {   
   
   })("mystage");
   //Edge symbol end:'mystage'

   //=========================================================
   
   //Edge symbol: 'incorrect'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("incorrect");
   //Edge symbol end:'incorrect'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         stop();

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'finish'
   (function(symbolName) {   
   
   })("finish");
   //Edge symbol end:'finish'

})(jQuery, AdobeEdge, "EDGE-7374520");