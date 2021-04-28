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
         
         var mybite=$(".bite");
         var myfish = $(".fish");
         
         
         mybite.css({ "left": e.pageX-700+"px"});
         mybite.css({ "top": e.pageY-330+"px"});
         ///$("body").css({"cursor":"none"});
         if(flag==true)
         {
         myfish.css({ "left": e.pageX-400+"px"});
         myfish.css({ "top": e.pageY-100+"px"});
         myfish.css({ "-webkit-transform": 'rotate(' +90 + 'deg)'});    
         myfish.css({ '-moz-transform': 'rotate(' + 90 + 'deg)'});
         
         }

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         //**********************************************SETUP SOUND <START>**********************************************
         yepnope({
         
                    load: "http://cdn.edgecommons.org/an/1.1.0/js/min/EdgeCommons.js",
         
         
                            callback: function() {
         
                  // Load sound manifest (e.g. in creationComplete)
         
                  var assetsPath = "sound/game2/";
         
                  EC.Sound.setup(
         
                             [
         
                                                {src: assetsPath + "kappal.mp3|" + assetsPath + "kappal.ogg", id: "pic1"},
         
                                                {src: assetsPath + "visiri.mp3|" + assetsPath + "visiri.ogg", id: 'pic2'},
         
                                                {src: assetsPath + "palaa.mp3|" + assetsPath + "palaa.ogg", id: 'pic3'},
         
                                                {src: assetsPath + "anil.mp3|" + assetsPath + "anil.ogg", id: 'pic4'},
         
                                                {src: assetsPath + "appalam.mp3|" + assetsPath + "appalam.ogg", id: 'pic5'},
         													{src: assetsPath + "pala.mp3|" + assetsPath + "pala.ogg", id: 'pic6'},
                                                {src: assetsPath + "kadam.mp3|" + assetsPath + "kadam.ogg", id: 'pic7'},
                                                   {src: assetsPath + "naai.mp3|" + assetsPath + "naai.ogg", id: 'pic8'},
                                                      {src: assetsPath + "pandham.mp3|" + assetsPath + "pandham.ogg", id: 'pic9'},
                                                         {src: assetsPath + "kili.mp3|" + assetsPath + "kili.ogg", id: 'pic10'},
                                                            {src: assetsPath + "kanini.mp3|" + assetsPath + "kanini.ogg", id: 'pic11'},
                                                               {src: assetsPath + "naham.mp3|" + assetsPath + "naham.ogg", id: 'pic12'},
                                                               {src: assetsPath + "thai.mp3|" + assetsPath + "thai.ogg", id: 'pic13'},
                                                                  {src: assetsPath + "kaal.mp3|" + assetsPath + "kaal", id: 'pic14'},
                                                                     {src: assetsPath + "theeri.mp3|" + assetsPath + "theeri", id: 'pic15'},
                                                                        {src: assetsPath + "aaram.mp3|" + assetsPath + "aaram.ogg", id: 'pic16'},
                                                                        {src: assetsPath + "thandham.mp3|" + assetsPath + "thandham.ogg", id: 'pic17'},
                                                                        {src: assetsPath + "kattil.mp3|" + assetsPath + "kattil.ogg", id: 'pic18'},
                                                                        {src: assetsPath + "pattam.mp3|" + assetsPath + "pattam.ogg", id: 'pic19'},
                                                                        {src: assetsPath + "minnal.mp3|" + assetsPath + "minnal.ogg", id: 'pic20'},
                                                                        {src: assetsPath + "correct.mp3|" + assetsPath + "correct.ogg", id: 'correct'},
                                                                        {src: assetsPath + "wrong.mp3|" + assetsPath + "wrong.ogg", id: 'wrong'},
         
         
         
                             ],
         
                             function(){ EC.info("Sound setup finished", "Sound with Edge Commons"); }
         
                  );
         
         
          }
         
                  });
         
         
         //********************************************************SETUP SOUND <END>**********************************************************
         
         
         sym.setVariable("myques",['fg;gy;','tprpwp',"gyh",'mzpy;','mg;gsk;','gyh','flk;','eha;','ge;jk;','fpsp','fzpdp','efk;','jha;','fhy;','jphp','m+uk;','je;jk;','fl;by;','tl;lk;','kpd;dy;']);
         sym.setVariable("myopt",['r1','r3',"r2",'r3','r1',"r2",'r1','r2',"r1",'r3','r3',"r1",'r2','r2',"r3",'r2','r1',"r3",'r1','r3']);
         sym.setVariable("starArray",['star0','star1','star2','star3','star4','star5','star6','star7','star8','star9','star10','star11','star12','star13','star14','star15','star16','star17','star18','star19'])
         
         sym.setVariable("fishs1",['f1','f2','f3','f4','f5','f6']);
         sym.setVariable("fishs2",['f7','f8','f9','f10','f11','f12']);
         sym.setVariable("fishs3",['f13','f14','f15','f16','f17','f18']);
         sym.setVariable("mysound",['pic1','pic2','pic3','pic4','pic5','pic6','pic7','pic8','pic9','pic10','pic11','pic12','pic13','pic14','pic15','pic16','pic17','pic18','pic19','pic20']);
         
         sym.setVariable("i",0);
         sym.setVariable("flag","false");
         
         
         
         
         
         function playSound()
         {
         EC.Sound.play(sym.getVariable("mysound")[sym.getVariable("ranNo")])
         
         
         
         
         }
         sym.setVariable("playSound",playSound);
         
         
         
         //var quesArray=sym.getVariable("myques");
         //alert(sym.getVariable("myques")[0])
         getQues();
         function getQues()
         {
         var ranNo = Math.floor(Math.random()*sym.getVariable("myques").length);
         
         sym.setVariable("ranNo",ranNo);
         
         sym.getSymbol("gameStage").getSymbol("fishfront2").getSymbol("fishin").$("ques_txt").html(sym.getVariable("myques")[ranNo]);
         
         //alert(sym.getVariable("myques").length);
         
         if(sym.getVariable("i")<9)
         sym.$("mark").html("0"+sym.getVariable("i"));
         else
         sym.$("mark").html(sym.getVariable("i"));
         
         }
         
         sym.setVariable('getQues',getQues);
         
         
         
         
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
   
   //Edge symbol: 'r1'
   (function(symbolName) {   
   
   })("r1");
   //Edge symbol end:'r1'

   //=========================================================
   
   //Edge symbol: 'fishfront'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_fishin}", "click", function(sym, e) {
         
         sym.stop(1);
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40, function(sym, e) {
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2002, function(sym, e) {
         
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         //alert( sym.getComposition().getStage().getVariable("mysound"));
         //alert( sym.getComposition().getStage().getVariable("ranNo"))
         
         sym.getComposition().getStage().getVariable("playSound")(); 

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10968, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(1);

      });
      //Edge binding end

   })("fishfront");
   //Edge symbol end:'fishfront'

   //=========================================================
   
   //Edge symbol: 'fishh'
   (function(symbolName) {   
   
      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         question ="sfsdf";

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 850, function(sym, e) {
         sym.stop();
         sym.playReverse();

      });
      //Edge binding end

   })("fishh");
   //Edge symbol end:'fishh'

   //=========================================================
   
   //Edge symbol: 'Symbol_1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 200, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("p");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1065, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("Symbol_1_1");
   //Edge symbol end:'Symbol_1_1'

   //=========================================================
   
   //Edge symbol: 'bottle3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bottle3");
   //Edge symbol end:'bottle3'

   //=========================================================
   
   //Edge symbol: 'bottle2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.stop();

      });
      //Edge binding end

   })("bottle2");
   //Edge symbol end:'bottle2'

   //=========================================================
   
   //Edge symbol: 'bottle1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bottle1");
   //Edge symbol end:'bottle1'

   //=========================================================
   
   //Edge symbol: 'gameArea'
   (function(symbolName) {   
   
   })("gameArea");
   //Edge symbol end:'gameArea'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1015, function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'man'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 990, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(10);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1872, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop(10);

      });
      //Edge binding end

   })("man");
   //Edge symbol end:'man'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_fishfront2}", "click", function(sym, e) {
         flag=true;
         sym.getSymbol("fishfront2").stop();
         
         $('.fish').css({ "left": e.pageX-190+"px"});
         $('.fish').css({ "top": e.pageY-40+"px"});
         $('.fish').css({ "-webkit-transform": 'rotate(' +90 + 'deg)'});    
         $('.fish').css({ '-moz-transform': 'rotate(' + 90 + 'deg)'});
         
         sym.getComposition().getStage().sym.setVariable("flag","true");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_r1}", "click", function(sym, e) {
         //alert("fd");
         if(sym.getComposition().getStage().sym.getVariable("flag")=="true")
         {
         alert("rk")
         
         sym.getSymbol("fishfront2").play();
         flag=false;
         $('.fish').css({ "left":1354+"px"});
         $('.fish').css({ "top":700+"px"});
         
         $('.fish').css({ "-webkit-transform": 'rotate(' +0 + 'deg)'});    
         $('.fish').css({ '-moz-transform': 'rotate(' + 0 + 'deg)'});
         
         ///var index = sym.getVariable("myques");
         //alert(index.indexOf("Muk;"));
         //alert(sym.getVariable("ranNo"));
         if(sym.getVariable("myopt")[sym.getVariable("ranNo")]=="r1")
         {
         
         
         sym.getVariable("myques").splice(sym.getVariable("ranNo"),1)
         sym.getVariable("myopt").splice(sym.getVariable("ranNo"),1)
         sym.getVariable("mysound").splice(sym.getVariable("ranNo"),1);
         
         
         
         
         sym.$(sym.getVariable("starArray")[sym.getVariable("i")]).css("opacity",'1');
         sym.setVariable("i",sym.getVariable("i")+1);
         
         sym.getVariable('getQues')();
         
         
         
         
         
         
         
         
         
         
         sym.getSymbol("bottle1").$(sym.getVariable("fishs1")[0]).show();
         
         sym.getVariable("fishs1").splice(0,1);
         
         sym.getSymbol("man2").play("c");
         
         
         
         }
         else
         {
         
         sym.getSymbol("man2").play("w");
         EC.Sound.play("wrong");
         
         }
         
         sym.setVariable("flag","false")
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_r2}", "click", function(sym, e) {
         if(sym.getVariable("flag")=="true")
         {
         
         sym.getSymbol("fishfront2").play();
         flag=false;
         $('.fish').css({ "left":1354+"px"});
         $('.fish').css({ "top":700+"px"});
         
         $('.fish').css({ "-webkit-transform": 'rotate(' +0 + 'deg)'});    
         $('.fish').css({ '-moz-transform': 'rotate(' + 0 + 'deg)'});
         
         ///var index = sym.getVariable("myques");
         //alert(index.indexOf("Muk;"));
         //alert(sym.getVariable("ranNo"));
         if(sym.getVariable("myopt")[sym.getVariable("ranNo")]=="r2")
         {
         
         sym.getVariable("myques").splice(sym.getVariable("ranNo"),1)
         sym.getVariable("myopt").splice(sym.getVariable("ranNo"),1)
         sym.getVariable("mysound").splice(sym.getVariable("ranNo"),1);
         
         sym.$(sym.getVariable("starArray")[sym.getVariable("i")]).css("opacity",'1');
         sym.setVariable("i",sym.getVariable("i")+1);
         
         sym.getVariable('getQues')();
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getSymbol("bottle2").$(sym.getVariable("fishs2")[0]).show();
         
         sym.getVariable("fishs2").splice(0,1);
         
         
         
         sym.getSymbol("man2").play("c");
         
         EC.Sound.play("correct");
         
         }
         else
         {
         
         sym.getSymbol("man2").play("w");
         EC.Sound.play("wrong");
         }
         
         sym.setVariable("flag","false")
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_r3}", "click", function(sym, e) {
         if(sym.getVariable("flag")=="true")
         {
         
         sym.getSymbol("fishfront2").play();
         flag=false;
         
         $('.fish').css({ "left":1354+"px"});
         $('.fish').css({ "top":700+"px"});
         
         
         $('.fish').css({ "-webkit-transform": 'rotate(' +0 + 'deg)'});    
         $('.fish').css({ '-moz-transform': 'rotate(' + 0 + 'deg)'});
         
         ///var index = sym.getVariable("myques");
         //alert(index.indexOf("Muk;"));
         //alert(sym.getVariable("ranNo"));
         if(sym.getVariable("myopt")[sym.getVariable("ranNo")]=="r3")
         {
         sym.getVariable("myques").splice(sym.getVariable("ranNo"),1)
         sym.getVariable("myopt").splice(sym.getVariable("ranNo"),1)
         sym.getVariable("mysound").splice(sym.getVariable("ranNo"),1);
         
         
         sym.$(sym.getVariable("starArray")[sym.getVariable("i")]).css("opacity",'1');
         sym.setVariable("i",sym.getVariable("i")+1);
         
         sym.getVariable('getQues')();
         
         
         
         
         
         
         
         sym.getSymbol("bottle3").$(sym.getVariable("fishs3")[0]).show();
         
         sym.getVariable("fishs3").splice(0,1);
         sym.getSymbol("man2").play("c");
         
         EC.Sound.play("correct");
         
         }
         else
         {
         
         sym.getSymbol("man2").play("w");
         EC.Sound.play("wrong");
         }
         
         sym.setVariable("flag","false")
         }

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

})(jQuery, AdobeEdge, "EDGE-7374520");