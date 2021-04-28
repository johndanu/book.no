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

sym.$("a").html("f");
sym.$("aa").html("fh");
sym.$("i").html("fp");
sym.$("ee").html("fP");
sym.$("u").html("F");
sym.$("oo").html("$");
sym.$("e").html("nf");
sym.$("ea").html("Nf");
sym.$("ai").html("if");
sym.$("o").html("nfh");
sym.$("O").html("Nfh");
sym.$("av").html("nfs");



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
							  sym.$(mySym).css('left', 527); 
						     sym.$(mySym).css('top', 264); 
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


nxtQues();



			function delay_2()
			{
setTimeout( function () {
			//  alert("delay")

				          sym.$('finish').show();
			EC.Sound.play('clapping');

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
         
         //**********************************************SETUP SOUND <START>**********************************************
         yepnope({
         
                    load: "js/EdgeCommons.js",
         
         
                            callback: function() {
         
                  // Load sound manifest (e.g. in creationComplete)
         
                  var assetsPath = "sound/ezhuthu/";
         
                  EC.Sound.setup(
         
                             [
         
                                  {src: assetsPath + "ka.mp3|" + assetsPath + "ka.ogg", id: "pic1"},
         
                                  {src: assetsPath + "kaa.mp3|" + assetsPath + "kaa.ogg", id: 'pic2'},
         
                                  {src: assetsPath + "ki.mp3|" + assetsPath + "ki.ogg", id: 'pic3'},
         
                                  {src: assetsPath + "kee.mp3|" + assetsPath + "kee.ogg", id: 'pic4'},
         
                                  {src: assetsPath + "ku.mp3|" + assetsPath + "ku.ogg", id: 'pic5'},
         								 {src: assetsPath + "koo.mp3|" + assetsPath + "koo.ogg", id: 'pic6'},
                                  {src: assetsPath + "ke.mp3|" + assetsPath + "ke.ogg", id: 'pic7'},
                                  {src: assetsPath + "kea.mp3|" + assetsPath + "kea.ogg", id: 'pic8'},
                                  {src: assetsPath + "kai.mp3|" + assetsPath + "kai.ogg", id: 'pic9'},
                                  {src: assetsPath + "ko.mp3|" + assetsPath + "ko.ogg", id: 'pic10'},
                                  {src: assetsPath + "kko.mp3|" + assetsPath + "kko.ogg", id: 'pic11'},
                                  {src: assetsPath + "kov.mp3|" + assetsPath + "kov.ogg", id: 'pic12'},
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

})(jQuery, AdobeEdge, "EDGE-7374520");