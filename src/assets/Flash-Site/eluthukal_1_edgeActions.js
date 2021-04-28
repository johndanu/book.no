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

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "click", function(sym, e) {
         sym.getSymbol("content").$("output").show();
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
                  //**********************************************SETUP SOUND <START>**********************************************
                  
                  yepnope({
                  
                             load: "http://cdn.edgecommons.org/an/1.1.0/js/min/EdgeCommons.js",
                  
                  
                                     callback: function() {
                  
                           // Load sound manifest (e.g. in creationComplete)
                  
                           var assetsPath = "sound/ezhuthu/";
                  
                           EC.Sound.setup(
                  
                                      [
                  
                  
                  
                  
                  										{src: assetsPath + "ka.mp3|" + assetsPath + "ka.ogg", id:"ka" },
                  
                                                         {src: assetsPath + "kaa.mp3|" + assetsPath + "kaa.ogg", id:'kaa'},
                  
                                                         {src: assetsPath + "ki.mp3|" + assetsPath + "ki.ogg", id:   "ki" },
                  
                                                         {src: assetsPath + "kee.mp3|" + assetsPath + "kee.ogg", id: 'kee'},
                  
                                                         {src: assetsPath + "ku.mp3|" + assetsPath + "ku.ogg", id:   "ku" },
                  
                                                         {src: assetsPath + "koo.mp3|" + assetsPath + "koo.ogg", id: 'koo'},
                  
                                                         {src: assetsPath + "ke.mp3|" + assetsPath + "ke.ogg", id:   "ke" },
                  
                                                         {src: assetsPath + "kea.mp3|" + assetsPath + "kea.ogg", id: 'kea'},
                  
                                                         {src: assetsPath + "kai.mp3|" + assetsPath + "kai.ogg", id: 'kai'},
                  
                                                         {src: assetsPath + "ko.mp3|" + assetsPath + "ko.ogg", id:   "ko" },
                  
                                                         {src: assetsPath + "kko.mp3|" + assetsPath + "kko.ogg", id: 'kko'},
                  
                                                         {src: assetsPath + "kov.mp3|" + assetsPath + "kov.ogg", id: 'kov'},
                  
                  
                  
                                                         {src: assetsPath + "nga.mp3|" + assetsPath + "nga.ogg", id:   "nga" },
                  
                                                         {src: assetsPath + "ngaa.mp3|" + assetsPath + "ngaa.ogg", id: 'ngaa'},
                  
                                                         {src: assetsPath + "ngi.mp3|" + assetsPath + "ngi.ogg", id:   "ngi" },
                  
                                                         {src: assetsPath + "ngee.mp3|" + assetsPath + "ngee.ogg", id: 'ngee'},
                  
                                                         {src: assetsPath + "ngu.mp3|" + assetsPath + "ngu.ogg", id:   "ngu" },
                  
                                                         {src: assetsPath + "ngoo.mp3|" + assetsPath + "ngoo.ogg", id: 'ngoo'},
                  
                                                         {src: assetsPath + "nge.mp3|" + assetsPath + "nge.ogg", id:   "nge" },
                  
                                                         {src: assetsPath + "ngea.mp3|" + assetsPath + "ngea.ogg", id: 'ngea'},
                  
                                                         {src: assetsPath + "ngai.mp3|" + assetsPath + "ngai.ogg", id: 'ngai'},
                  
                                                         {src: assetsPath + "ngo.mp3|" + assetsPath + "ngo.ogg", id:   "ngo" },
                  
                                                         {src: assetsPath + "nggo.mp3|" + assetsPath + "nggo.ogg", id: 'nggo'},
                  
                                                         {src: assetsPath + "ngov.mp3|" + assetsPath + "ngov.ogg", id: 'ngov'},
                  
                  
                  
                                                         {src: assetsPath + "sa.mp3|" + assetsPath + "sa.ogg", id:   "sa" },
                  
                                                         {src: assetsPath + "saa.mp3|" + assetsPath + "saa.ogg", id: 'saa'},
                  
                                                         {src: assetsPath + "si.mp3|" + assetsPath + "si.ogg", id:   "si" },
                  
                                                         {src: assetsPath + "see.mp3|" + assetsPath + "see.ogg", id: 'see'},
                  
                                                         {src: assetsPath + "su.mp3|" + assetsPath + "su.ogg", id:   "su" },
                  
                                                         {src: assetsPath + "soo.mp3|" + assetsPath + "soo.ogg", id: 'soo'},
                  
                                                         {src: assetsPath + "se.mp3|" + assetsPath + "se.ogg", id:   "se" },
                  
                                                         {src: assetsPath + "sea.mp3|" + assetsPath + "sea.ogg", id: 'sea'},
                  
                                                         {src: assetsPath + "sai.mp3|" + assetsPath + "sai.ogg", id: 'sai'},
                  
                                                         {src: assetsPath + "so.mp3|" + assetsPath + "so.ogg", id:   "so" },
                  
                                                         {src: assetsPath + "sso.mp3|" + assetsPath + "sso.ogg", id: 'sso'},
                  
                                                         {src: assetsPath + "sov.mp3|" + assetsPath + "sov.ogg", id: 'sov'},
                  
                  
                  
         										        {src: assetsPath + "gna.mp3|" + assetsPath + "gna.ogg", id:   "gna" },
         
                                                         {src: assetsPath + "gnaa.mp3|" + assetsPath + "gnaa.ogg", id: 'gnaa'},
         
                                                         {src: assetsPath + "gni.mp3|" + assetsPath + "gni.ogg", id:   "gni" },
         
                                                         {src: assetsPath + "gnee.mp3|" + assetsPath + "gnee.ogg", id: 'gnee'},
         
                                                         {src: assetsPath + "gnu.mp3|" + assetsPath + "gnu.ogg", id:   "gnu" },
         
                                                         {src: assetsPath + "gnoo.mp3|" + assetsPath + "gnoo.ogg", id: 'gnoo'},
         
                                                         {src: assetsPath + "gne.mp3|" + assetsPath + "gne.ogg", id:   "gne" },
         
                                                         {src: assetsPath + "gnea.mp3|" + assetsPath + "gnea.ogg", id: 'gnea'},
         
                                                         {src: assetsPath + "gnai.mp3|" + assetsPath + "gnai.ogg", id: 'gnai'},
         
                                                         {src: assetsPath + "gno.mp3|" + assetsPath + "gno.ogg", id:   "gno" },
         
                                                         {src: assetsPath + "gnno.mp3|" + assetsPath + "gnno.ogg", id: 'gnno'},
         
                                                         {src: assetsPath + "gnov.mp3|" + assetsPath + "gnov.ogg", id: 'gnov'},
         
         
         
         												{src: assetsPath + "ta.mp3|" + assetsPath + "ta.ogg", id:   "da" },
         
                                                         {src: assetsPath + "taa.mp3|" + assetsPath + "taa.ogg", id: 'daa'},
         
                                                         {src: assetsPath + "ti.mp3|" + assetsPath + "ti.ogg", id:   "di" },
         
                                                         {src: assetsPath + "tee.mp3|" + assetsPath + "tee.ogg", id: 'dee'},
         
                                                         {src: assetsPath + "tu.mp3|" + assetsPath + "tu.ogg", id:   "du" },
         
                                                         {src: assetsPath + "too.mp3|" + assetsPath + "too.ogg", id: 'doo'},
         
                                                         {src: assetsPath + "te.mp3|" + assetsPath + "te.ogg", id:   "de" },
         
                                                         {src: assetsPath + "tea.mp3|" + assetsPath + "tea.ogg", id: 'dea'},
         
                                                         {src: assetsPath + "tai.mp3|" + assetsPath + "tai.ogg", id: 'dai'},
         
                                                         {src: assetsPath + "to.mp3|" + assetsPath + "to.ogg", id:   "do" },
         
                                                         {src: assetsPath + "tto.mp3|" + assetsPath + "tto.ogg", id: 'ddo'},
         
                                                         {src: assetsPath + "tov.mp3|" + assetsPath + "tov.ogg", id: 'dov'},
         
         
         
         
         		   										{src: assetsPath + "na.mp3|" + assetsPath + "na.ogg", id:   "Na" },
         
                                                         {src: assetsPath + "naa.mp3|" + assetsPath + "naa.ogg", id: 'Naa'},
         
                                                         {src: assetsPath + "ni.mp3|" + assetsPath + "ni.ogg", id:   "Ni" },
         
                                                         {src: assetsPath + "nee.mp3|" + assetsPath + "nee.ogg", id: 'Nee'},
         
                                                         {src: assetsPath + "nu.mp3|" + assetsPath + "nu.ogg", id:   "Nu" },
         
                                                         {src: assetsPath + "noo.mp3|" + assetsPath + "noo.ogg", id: 'Noo'},
         
                                                         {src: assetsPath + "ne.mp3|" + assetsPath + "ne.ogg", id:   "Ne" },
         
                                                         {src: assetsPath + "nea.mp3|" + assetsPath + "nea.ogg", id: 'Nea'},
         
                                                         {src: assetsPath + "nai.mp3|" + assetsPath + "nai.ogg", id: 'Nai'},
         
                                                         {src: assetsPath + "no.mp3|" + assetsPath + "no.ogg", id:   "No" },
         
                                                         {src: assetsPath + "nno.mp3|" + assetsPath + "nno.ogg", id: 'NNo'},
         
                                                         {src: assetsPath + "nov.mp3|" + assetsPath + "nov.ogg", id: 'Nov'},
         
         
         
         
         												{src: assetsPath + "tha.mp3|" + assetsPath + "tha.ogg", id:   "tha" },
         
                                                         {src: assetsPath + "thaa.mp3|" + assetsPath + "thaa.ogg", id: 'thaa'},
         
                                                         {src: assetsPath + "thi.mp3|" + assetsPath + "thi.ogg", id:   "thi" },
         
                                                         {src: assetsPath + "thee.mp3|" + assetsPath + "thee.ogg", id: 'thee'},
         
                                                         {src: assetsPath + "thu.mp3|" + assetsPath + "thu.ogg", id:   "thu" },
         
                                                         {src: assetsPath + "thoo.mp3|" + assetsPath + "thoo.ogg", id: 'thoo'},
         
                                                         {src: assetsPath + "the.mp3|" + assetsPath + "the.ogg", id:   "the" },
         
                                                         {src: assetsPath + "thea.mp3|" + assetsPath + "thea.ogg", id: 'thea'},
         
                                                         {src: assetsPath + "thai.mp3|" + assetsPath + "thai.ogg", id: 'thai'},
         
                                                         {src: assetsPath + "tho.mp3|" + assetsPath + "tho.ogg", id:   "tho" },
         
                                                         {src: assetsPath + "ttho.mp3|" + assetsPath + "ttho.ogg", id: 'thno'},
         
                                                         {src: assetsPath + "thov.mp3|" + assetsPath + "thov.ogg", id: 'thov'},
         
         
         												{src: assetsPath + "_na.mp3|" + assetsPath + "_na.ogg", id:   "_na" },
         
                                                         {src: assetsPath + "_naa.mp3|" + assetsPath + "_naa.ogg", id: '_naa'},
         
                                                         {src: assetsPath + "_ni.mp3|" + assetsPath + "_ni.ogg", id:   "_ni" },
         
                                                         {src: assetsPath + "_nee.mp3|" + assetsPath + "_nee.ogg", id: '_nee'},
         
                                                         {src: assetsPath + "_nu.mp3|" + assetsPath + "_nu.ogg", id:   "_nu" },
         
                                                         {src: assetsPath + "_noo.mp3|" + assetsPath + "_noo.ogg", id: '_noo'},
         
                                                         {src: assetsPath + "_ne.mp3|" + assetsPath + "_ne.ogg", id:   "_ne" },
         
                                                         {src: assetsPath + "_nea.mp3|" + assetsPath + "_nea.ogg", id: '_nea'},
         
                                                         {src: assetsPath + "_nai.mp3|" + assetsPath + "_nai.ogg", id: '_nai'},
         
                                                         {src: assetsPath + "_no.mp3|" + assetsPath + "_no.ogg", id:   "_no" },
         
                                                         {src: assetsPath + "_nno.mp3|" + assetsPath + "_nno.ogg", id: '_nno'},
         
                                                         {src: assetsPath + "_nov.mp3|" + assetsPath + "_nov.ogg", id: '_nov'},
         
         
         
         
         												{src: assetsPath + "pa.mp3|" + assetsPath + "pa.ogg", id:   "pa" },
         
                                                         {src: assetsPath + "paa.mp3|" + assetsPath + "paa.ogg", id: 'paa'},
         
                                                         {src: assetsPath + "pi.mp3|" + assetsPath + "pi.ogg", id:   "pi" },
         
                                                         {src: assetsPath + "pee.mp3|" + assetsPath + "pee.ogg", id: 'pee'},
         
                                                         {src: assetsPath + "pu.mp3|" + assetsPath + "pu.ogg", id:   "pu" },
         
                                                         {src: assetsPath + "poo.mp3|" + assetsPath + "poo.ogg", id: 'poo'},
         
                                                         {src: assetsPath + "pe.mp3|" + assetsPath + "pe.ogg", id:   "pe" },
         
                                                         {src: assetsPath + "pea.mp3|" + assetsPath + "pea.ogg", id: 'pea'},
         
                                                         {src: assetsPath + "pai.mp3|" + assetsPath + "pai.ogg", id: 'pai'},
         
                                                         {src: assetsPath + "po.mp3|" + assetsPath + "po.ogg", id:   "po" },
         
                                                         {src: assetsPath + "pno.mp3|" + assetsPath + "pno.ogg", id: 'pno'},
         
                                                         {src: assetsPath + "pov.mp3|" + assetsPath + "pov.ogg", id: 'pov'},
         
         
         
         
         												{src: assetsPath + "ma.mp3|" + assetsPath + "ma.ogg", id:   "ma" },
         
                                                         {src: assetsPath + "maa.mp3|" + assetsPath + "maa.ogg", id: 'maa'},
         
                                                         {src: assetsPath + "mi.mp3|" + assetsPath + "mi.ogg", id:   "mi" },
         
                                                         {src: assetsPath + "mee.mp3|" + assetsPath + "mee.ogg", id: 'mee'},
         
                                                         {src: assetsPath + "mu.mp3|" + assetsPath + "mu.ogg", id:   "mu" },
         
                                                         {src: assetsPath + "moo.mp3|" + assetsPath + "moo.ogg", id: 'moo'},
         
                                                         {src: assetsPath + "me.mp3|" + assetsPath + "me.ogg", id:   "me" },
         
                                                         {src: assetsPath + "mea.mp3|" + assetsPath + "mea.ogg", id: 'mea'},
         
                                                         {src: assetsPath + "mai.mp3|" + assetsPath + "mai.ogg", id: 'mai'},
         
                                                         {src: assetsPath + "mo.mp3|" + assetsPath + "mo.ogg", id:   "mo" },
         
                                                         {src: assetsPath + "mmo.mp3|" + assetsPath + "mmo.ogg", id: 'mmo'},
         
                                                         {src: assetsPath + "mov.mp3|" + assetsPath + "mov.ogg", id: 'mov'},
         
         
         
         												{src: assetsPath + "ya.mp3|" + assetsPath + "ya.ogg", id:   "ya" },
         
                                                         {src: assetsPath + "yaa.mp3|" + assetsPath + "yaa.ogg", id: 'yaa'},
         
                                                         {src: assetsPath + "yi.mp3|" + assetsPath + "yi.ogg", id:   "yi" },
         
                                                         {src: assetsPath + "yee.mp3|" + assetsPath + "yee.ogg", id: 'yee'},
         
                                                         {src: assetsPath + "yu.mp3|" + assetsPath + "yu.ogg", id:   "yu" },
         
                                                         {src: assetsPath + "yoo.mp3|" + assetsPath + "yoo.ogg", id: 'yoo'},
         
                                                         {src: assetsPath + "ye.mp3|" + assetsPath + "ye.ogg", id:   "ye" },
         
                                                         {src: assetsPath + "yea.mp3|" + assetsPath + "yea.ogg", id: 'yea'},
         
                                                         {src: assetsPath + "yai.mp3|" + assetsPath + "yai.ogg", id: 'yai'},
         
                                                         {src: assetsPath + "yo.mp3|" + assetsPath + "yo.ogg", id:   "yo" },
         
                                                         {src: assetsPath + "yyo.mp3|" + assetsPath + "yyo.ogg", id: 'yno'},
         
                                                         {src: assetsPath + "yov.mp3|" + assetsPath + "yov.ogg", id: 'yov'},
         
         
         
         
         												{src: assetsPath + "ra.mp3|" + assetsPath + "ra.ogg", id:   "ra" },
         
                                                         {src: assetsPath + "raa.mp3|" + assetsPath + "raa.ogg", id: 'raa'},
         
                                                         {src: assetsPath + "ri.mp3|" + assetsPath + "ri.ogg", id:   "ri" },
         
                                                         {src: assetsPath + "ree.mp3|" + assetsPath + "ree.ogg", id: 'ree'},
         
                                                         {src: assetsPath + "ru.mp3|" + assetsPath + "ru.ogg", id:   "ru" },
         
                                                         {src: assetsPath + "roo.mp3|" + assetsPath + "roo.ogg", id: 'roo'},
         
                                                         {src: assetsPath + "re.mp3|" + assetsPath + "re.ogg", id:   "re" },
         
                                                         {src: assetsPath + "rea.mp3|" + assetsPath + "rea.ogg", id: 'rea'},
         
                                                         {src: assetsPath + "rai.mp3|" + assetsPath + "rai.ogg", id: 'rai'},
         
                                                         {src: assetsPath + "ro.mp3|" + assetsPath + "ro.ogg", id:   "ro" },
         
                                                         {src: assetsPath + "rro.mp3|" + assetsPath + "rro.ogg", id: 'rro'},
         
                                                         {src: assetsPath + "rov.mp3|" + assetsPath + "rov.ogg", id: 'rov'},
         
         
         
         											    {src: assetsPath + "la.mp3|" + assetsPath + "la.ogg", id:   "la" },
         
                                                         {src: assetsPath + "laa.mp3|" + assetsPath + "laa.ogg", id: 'laa'},
         
                                                         {src: assetsPath + "li.mp3|" + assetsPath + "li.ogg", id:   "li" },
         
                                                         {src: assetsPath + "lee.mp3|" + assetsPath + "lee.ogg", id: 'lee'},
         
                                                         {src: assetsPath + "lu.mp3|" + assetsPath + "lu.ogg", id:   "lu" },
         
                                                         {src: assetsPath + "loo.mp3|" + assetsPath + "loo.ogg", id: 'loo'},
         
                                                         {src: assetsPath + "le.mp3|" + assetsPath + "le.ogg", id:   "le" },
         
                                                         {src: assetsPath + "lea.mp3|" + assetsPath + "lea.ogg", id: 'lea'},
         
                                                         {src: assetsPath + "lai.mp3|" + assetsPath + "lai.ogg", id: 'lai'},
         
                                                         {src: assetsPath + "lo.mp3|" + assetsPath + "lo.ogg", id:   "lo" },
         
                                                         {src: assetsPath + "llo.mp3|" + assetsPath + "llo.ogg", id: 'llo'},
         
                                                         {src: assetsPath + "lov.mp3|" + assetsPath + "lov.ogg", id: 'lov'},
         
         
         
         
         										        {src: assetsPath + "va.mp3|" + assetsPath + "va.ogg", id:   "va" },
         
                                                         {src: assetsPath + "vaa.mp3|" + assetsPath + "vaa.ogg", id: 'vaa'},
         
                                                         {src: assetsPath + "vi.mp3|" + assetsPath + "vi.ogg", id:   "vi" },
         
                                                         {src: assetsPath + "vee.mp3|" + assetsPath + "vee.ogg", id: 'vee'},
         
                                                         {src: assetsPath + "vu.mp3|" + assetsPath + "vu.ogg", id:   "vu" },
         
                                                         {src: assetsPath + "voo.mp3|" + assetsPath + "voo.ogg", id: 'voo'},
         
                                                         {src: assetsPath + "ve.mp3|" + assetsPath + "ve.ogg", id:   "ve" },
         
                                                         {src: assetsPath + "vea.mp3|" + assetsPath + "vea.ogg", id: 'vea'},
         
                                                         {src: assetsPath + "vai.mp3|" + assetsPath + "vai.ogg", id: 'vai'},
         
                                                         {src: assetsPath + "vo.mp3|" + assetsPath + "vo.ogg", id:   "vo" },
         
                                                         {src: assetsPath + "vvo.mp3|" + assetsPath + "vvo.ogg", id: 'vno'},
         
                                                         {src: assetsPath + "vov.mp3|" + assetsPath + "vov.ogg", id: 'vov'},
         
         
         
         												{src: assetsPath + "zha.mp3|" + assetsPath + "zha.ogg", id:"zha" },
         
                                                         {src: assetsPath + "zhaa.mp3|" + assetsPath + "zhaa.ogg", id:'zhaa'},
         
                                                         {src: assetsPath + "zhi.mp3|" + assetsPath + "zhi.ogg", id:"zhi" },
         
                                                         {src: assetsPath + "zhee.mp3|" + assetsPath + "zhee.ogg", id:'zhee'},
         
                                                         {src: assetsPath + "zhu.mp3|" + assetsPath + "zhu.ogg", id:"zhu" },
         
                                                         {src: assetsPath + "zhoo.mp3|" + assetsPath + "zhoo.ogg", id:'zhoo'},
         
                                                         {src: assetsPath + "zhe.mp3|" + assetsPath + "zhe.ogg", id:"zhe" },
         
                                                         {src: assetsPath + "zhea.mp3|" + assetsPath + "zhea.ogg", id:'zhea'},
         
                                                         {src: assetsPath + "zhai.mp3|" + assetsPath + "zhai.ogg", id: 'zhai'},
         
                                                         {src: assetsPath + "zho.mp3|" + assetsPath + "zho.ogg", id:"zho" },
         
                                                         {src: assetsPath + "zhno.mp3|" + assetsPath + "zhno.ogg", id:'zhno'},
         
                                                         {src: assetsPath + "zhov.mp3|" + assetsPath + "zhov.ogg", id:'zhov'},
         
         
         
                  										{src: assetsPath + "_la.mp3|" + assetsPath + "_la.ogg", id:"_la" },
         
                                                         {src: assetsPath + "_laa.mp3|" + assetsPath + "_laa.ogg", id:'_laa'},
         
                                                         {src: assetsPath + "_li.mp3|" + assetsPath + "_li.ogg", id:"_li" },
         
                                                         {src: assetsPath + "_lee.mp3|" + assetsPath + "_lee.ogg", id:'_lee'},
         
                                                         {src: assetsPath + "_lu.mp3|" + assetsPath + "_lu.ogg", id:"_lu" },
         
                                                         {src: assetsPath + "_loo.mp3|" + assetsPath + "_loo.ogg", id:'_loo'},
         
                                                         {src: assetsPath + "_le.mp3|" + assetsPath + "_le.ogg", id:"_le" },
         
                                                         {src: assetsPath + "_lea.mp3|" + assetsPath + "_lea.ogg", id:'_lea'},
         
                                                         {src: assetsPath + "_lai.mp3|" + assetsPath + "_lai.ogg", id: '_lai'},
         
                                                         {src: assetsPath + "_lo.mp3|" + assetsPath + "_lo.ogg", id:"_lo" },
         
                                                         {src: assetsPath + "_llo.mp3|" + assetsPath + "_llo.ogg", id:'_llo'},
         
                                                         {src: assetsPath + "_lov.mp3|" + assetsPath + "_lov.ogg", id:'_lov'},
         
         
         		 										{src: assetsPath + "_ra.mp3|" + assetsPath + "_ra.ogg", id:"_ra" },
         
                                                         {src: assetsPath + "_raa.mp3|" + assetsPath + "_raa.ogg", id:'_raa'},
         
                                                         {src: assetsPath + "_ri.mp3|" + assetsPath + "_ri.ogg", id:"_ri" },
         
                                                         {src: assetsPath + "_ree.mp3|" + assetsPath + "_ree.ogg", id:'_ree'},
         
                                                         {src: assetsPath + "_ru.mp3|" + assetsPath + "_ru.ogg", id:"_ru" },
         
                                                         {src: assetsPath + "_roo.mp3|" + assetsPath + "_roo.ogg", id:'_roo'},
         
                                                         {src: assetsPath + "_re.mp3|" + assetsPath + "_re.ogg", id:"_re" },
         
                                                         {src: assetsPath + "_rea.mp3|" + assetsPath + "_rea.ogg", id:'_rea'},
         
                                                         {src: assetsPath + "_rai.mp3|" + assetsPath + "_rai.ogg", id: '_rai'},
         
                                                         {src: assetsPath + "_ro.mp3|" + assetsPath + "_ro.ogg", id:"_ro" },
         
                                                         {src: assetsPath + "_rro.mp3|" + assetsPath + "_rro.ogg", id:'_rro'},
         
                                                         {src: assetsPath + "_rov.mp3|" + assetsPath + "_rov.ogg", id:'_rov'},
         
         
         
         												{src: assetsPath + "__na.mp3|" + assetsPath + "__na.ogg", id:"__na" },
         
                                                         {src: assetsPath + "__naa.mp3|" + assetsPath + "__naa.ogg", id:'__naa'},
         
                                                         {src: assetsPath + "__ni.mp3|" + assetsPath + "__ni.ogg", id:"__ni" },
         
                                                         {src: assetsPath + "__nee.mp3|" + assetsPath + "__nee.ogg", id:'__nee'},
         
                                                         {src: assetsPath + "__nu.mp3|" + assetsPath + "__nu.ogg", id:"__nu" },
         
                                                         {src: assetsPath + "__noo.mp3|" + assetsPath + "__noo.ogg", id:'__noo'},
         
                                                         {src: assetsPath + "__ne.mp3|" + assetsPath + "__ne.ogg", id:"__ne" },
         
                                                         {src: assetsPath + "__nea.mp3|" + assetsPath + "__nea.ogg", id:'__nea'},
         
                                                         {src: assetsPath + "__nai.mp3|" + assetsPath + "__nai.ogg", id: '__nai'},
         
                                                         {src: assetsPath + "__no.mp3|" + assetsPath + "__no.ogg", id:"__no" },
         
                                                         {src: assetsPath + "__nno.mp3|" + assetsPath + "__nno.ogg", id:'__nno'},
         
                                                         {src: assetsPath + "__nov.mp3|" + assetsPath + "__nov.ogg", id:'__nov'},
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
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
   
      Symbol.bindElementAction(compId, symbolName, "${_ka}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("f");
         
         EC.Sound.play("ka");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kaa}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("fh");
         
         EC.Sound.play("kaa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ki}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("fp");
         
         
         EC.Sound.play("ki");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("fP");
         
         EC.Sound.play("kee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ku}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("F");
         
         
         
         EC.Sound.play("ku");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nga}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("q");
         
         EC.Sound.play("nga")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngaa}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("qh");
         
         EC.Sound.play("ngaa")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngi}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("qp");
         
         
         EC.Sound.play("ngi")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("qP");
         
         EC.Sound.play("ngee")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("ஙு");
         
         EC.Sound.play("ngu")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sa}", "click", function(sym, e) {
         
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("r");
         
         EC.Sound.play("sa")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_si}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("rp");
         
         
         EC.Sound.play("si");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_see}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("rP");
         
         EC.Sound.play("see");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nyee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("QP");
         
         EC.Sound.play("gnee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("B");
         
         EC.Sound.play("dee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Nee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("zP");
         
         EC.Sound.play("Nee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("eP");
         
         EC.Sound.play("_nee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("kP");
         
         EC.Sound.play("mee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("a;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("aP");
         EC.Sound.play("yee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ree}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("yP");
         
         EC.Sound.play("ree");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("u;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("uP");
         
         EC.Sound.play("lee");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zhee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("oP");
         EC.Sound.play("zhee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("sP");
         
         EC.Sound.play("_lee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ree}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("wP");
         EC.Sound.play("_ree");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nnee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("dP");
         EC.Sound.play("__nee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_su}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("R");
         
         
         EC.Sound.play("su")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ru}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("u;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("U");
         
         EC.Sound.play("ru");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("Y");
         EC.Sound.play("lu");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("T");
         
         EC.Sound.play("vu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zhu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("O");
         
         EC.Sound.play("zhu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("S");
         
         
         EC.Sound.play("_lu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ru}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("W");
         
         
         EC.Sound.play("_ru");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nnu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("D");
         
         EC.Sound.play("__nu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nya}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("Q");
         
         EC.Sound.play("gna");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_da}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("l");
         
         
         EC.Sound.play("da");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Na}", "click", function(sym, e) {
         
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("z");
         
         EC.Sound.play("Na");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_na}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("e");
         
         EC.Sound.play("_na");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ma}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("k");
         sym.getSymbol("output").$("t3").html("k");
         
         
         EC.Sound.play("ma");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ya}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("a");
         
         EC.Sound.play("ya");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ra}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("u;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("u");
         
         EC.Sound.play("ra");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_la}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("y");
         
         
         EC.Sound.play("la");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_va}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("t");
         
         
         EC.Sound.play("va");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zha}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("o");
         
         
         EC.Sound.play("zha");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_La}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("s");
         
         EC.Sound.play("_la");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ra}", "click", function(sym, e) {
         
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("w");
         
         EC.Sound.play("_ra");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nna}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("d");
         
         
         EC.Sound.play("__na");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_du}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("L");
         EC.Sound.play("du");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy39}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("Qh");
         
         
         EC.Sound.play("gnaa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy51}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("lh");
         
         
         EC.Sound.play("daa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy63}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("zh");
         
         
         EC.Sound.play("Naa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy96}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("eh");
         
         EC.Sound.play("_naa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text4Copy128}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
if(e.pageY>=470)
sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );

         
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("f");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy144}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("a;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("ah");
         
         
         EC.Sound.play("yaa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy120}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("u;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("uh");
         
         EC.Sound.play("raa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy132}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("yh");
         
         
         EC.Sound.play("laa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy147}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("th");
         
         
         EC.Sound.play("vaa");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy159}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("oh");
         
         
         EC.Sound.play("zhaa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy171}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("sh");
         
         
         EC.Sound.play("_laa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy183}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("wh");
         
         
         
         EC.Sound.play("_raa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy204}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("dh");
         
         
         
         EC.Sound.play("__naa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy108}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("kh");
         
         EC.Sound.play("maa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy40}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("Q");
         sym.getSymbol("output").$("t3").html("Qp");
         
         
         
         EC.Sound.play("gni");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy52}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("bp");
         
         
         
         EC.Sound.play("di");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy64}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("zp");
         
         
         EC.Sound.play("Ni");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy95}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("gp");
         
         
         EC.Sound.play("_ni");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy107}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("kp");
         
         
         EC.Sound.play("mi");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy143}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("a;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("ap");
         
         
         
         EC.Sound.play("yi");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy119}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("u;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("up");
         
         EC.Sound.play("ri");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy131}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("yp");
         
         EC.Sound.play("li");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy148}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("tp");
         
         EC.Sound.play("vi");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy160}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("op");
         
         
         EC.Sound.play("zhi");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy172}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("sp");
         
         
         EC.Sound.play("_li");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy184}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("wp");
         
         
         
         EC.Sound.play("_ri");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy203}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("dp");
         
         EC.Sound.play("__ni");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_saa}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("rh");
         
         EC.Sound.play("saa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_koo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("$");
         
         EC.Sound.play("koo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngoo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("q+");
         
         EC.Sound.play("ngoo")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_soo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("#");
         
         EC.Sound.play("soo")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_doo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("^");
         
         EC.Sound.play("doo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Noo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("Z}");
         
         EC.Sound.play("Noo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_thoo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("J}");
         
         EC.Sound.play("thoo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_noo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("E}");
         
         EC.Sound.play("_noo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_moo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("%}");
         
         
         EC.Sound.play("moo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yoo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("a;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("a+");
         
         
         EC.Sound.play("yoo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_roo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("u;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("&");
         
         
         EC.Sound.play("roo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_loo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("Y}");
         
         EC.Sound.play("loo");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_voo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("t+");
         
         
         EC.Sound.play("voo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zhoo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("*");
         
         
         EC.Sound.play("zhoo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Loo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("@");
         
         
         EC.Sound.play("_loo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Roo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("W}");
         
         
         EC.Sound.play("_roo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nnoo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("D}");
         
         EC.Sound.play("__noo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy7}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("jp");
         
         EC.Sound.play("thi");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_handOverCopy8}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("jh");
         
         
         EC.Sound.play("thaa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tha}", "click", function(sym, e) {
         
         
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("j");
         
         EC.Sound.play("tha");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_theeCopy}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("jP");
         EC.Sound.play("thee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nyoo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("ஞூ");
         
         EC.Sound.play("gnoo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ke}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("f;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nf");
         EC.Sound.play("ke");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nge}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("q;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nq");
         EC.Sound.play("nge")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_se}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("r;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nr");
         EC.Sound.play("se")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nye}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("Q;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nQ");
         
         EC.Sound.play("gne");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_de}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("l;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nl");
         
         EC.Sound.play("de");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ne}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
                  sym.getSymbol("output").$("t1").html("z;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nz");
         
         EC.Sound.play("Ne");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_the}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
                  sym.getSymbol("output").$("t1").html("j;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nj");
         EC.Sound.play("the");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ne}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("e;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("ne");
         EC.Sound.play("_ne");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_me}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
                  sym.getSymbol("output").$("t1").html("k;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nk");
         
         EC.Sound.play("me");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("a;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("na");
         
         EC.Sound.play("yu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_re}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("u;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nu");
         
         EC.Sound.play("re");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nne}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("v");
         sym.getSymbol("output").$("t3").html("nd");
         
         EC.Sound.play("__ne");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Re}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("w;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nw");
         
         
         EC.Sound.play("_re");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("y;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Ny");
         EC.Sound.play("lea");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("t;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("nt");
         EC.Sound.play("vea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zhea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("o;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("No");
         
         EC.Sound.play("zhea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nnea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("V");
         sym.getSymbol("output").$("t3").html("Nd");
         
         EC.Sound.play("__nea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("w;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Nw");
         
         
         EC.Sound.play("_rea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("s;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("Ns");
         EC.Sound.play("_lea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zhe}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("o;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("no");
         EC.Sound.play("zhe");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ve}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("t;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nt");
         
         EC.Sound.play("ve");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_le}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("y;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("ny");
         
         EC.Sound.play("le");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("u;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Nu");
         
         
         EC.Sound.play("rea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("a;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Na");
         
         EC.Sound.play("yea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ye}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("a;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("na");
         
         
         EC.Sound.play("ye");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
                  sym.getSymbol("output").$("t1").html("e;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Ne");
         EC.Sound.play("_nea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_thea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
                  sym.getSymbol("output").$("t1").html("j;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Nj");
         
         EC.Sound.play("thea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Nea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
                  sym.getSymbol("output").$("t1").html("j;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Nz");
         
         
         EC.Sound.play("Nea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nyea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("Q;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("NQ");
         
         
         EC.Sound.play("gnea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("r;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Nr");
         
         EC.Sound.play("sea")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("f;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Nf");
         
         EC.Sound.play("kea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("q;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("NQ");
         
         EC.Sound.play("ngea")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("l;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Nl");
         
         
         EC.Sound.play("dea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
                  sym.getSymbol("output").$("t1").html("k;");
                  sym.getSymbol("output").$("t2").html("V");
                  sym.getSymbol("output").$("t3").html("Nk");
         
         
         EC.Sound.play("mea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("if");
         
         
         EC.Sound.play("kai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ko}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nfh");
         
         EC.Sound.play("ko");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kko}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nfh");
         EC.Sound.play("kko");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("iq");
         
         EC.Sound.play("ngai")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nyai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("iQ");
         
         
         EC.Sound.play("gnai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("il");
         
         
         EC.Sound.play("dai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nyov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nQs");
         
         
         EC.Sound.play("gnov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nls");
         
         
         EC.Sound.play("dov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Nov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nzs");
         
         EC.Sound.play("Nov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("ie");
         EC.Sound.play("_nai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_no}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("neh");
         
         EC.Sound.play("_no");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("Nkh");
         
         EC.Sound.play("mo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mmo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("nkh");
         // insert code for mouse click here
         
         EC.Sound.play("mmo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nks");
         
         EC.Sound.play("mov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nes");
         EC.Sound.play("_nov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nNo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Neh");
         EC.Sound.play("_nno");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rro}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nyh");
         
         EC.Sound.play("rro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("u;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nus");
         
         
         EC.Sound.play("rov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("a;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nah");
         
         EC.Sound.play("yo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yyo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("a;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nah");
         
         EC.Sound.play("yyo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nks");
         
         EC.Sound.play("yov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Le}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
                  sym.getSymbol("output").$("t1").html("l;");
                  sym.getSymbol("output").$("t2").html("v");
                  sym.getSymbol("output").$("t3").html("nl");
         
         
         
         EC.Sound.play("_le");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("iy");
         
         EC.Sound.play("lai");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("it");
         
         EC.Sound.play("vai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_thai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("ij");
         
         EC.Sound.play("thai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("ik");
         
         EC.Sound.play("mai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_yai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("a;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("af");
         
         EC.Sound.play("yai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("u;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("iu");
         
         EC.Sound.play("rai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ro}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nyh");
         
         
         
         EC.Sound.play("ro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("is");
         
         
         
         EC.Sound.play("_lai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nnai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("id");
         
         EC.Sound.play("__nai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("iw");
         
         
         EC.Sound.play("_rai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nss");
         
         EC.Sound.play("_llov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zhov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nos");
         
         EC.Sound.play("zhov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nts");
         EC.Sound.play("vov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nys");
         
         EC.Sound.play("lov");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_LLo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nsh");
         
         EC.Sound.play("_lli");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zzho}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Noh");
         
         
         EC.Sound.play("zzho");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vvo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nth");
         EC.Sound.play("vvo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_llo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nyh");
         
         EC.Sound.play("llo");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Lo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("s;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nsh");
         
         EC.Sound.play("_lo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nth");
         EC.Sound.play("vo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zho}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("noh");
         
         EC.Sound.play("zho");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("y;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nyh");
         EC.Sound.play("lo");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zhai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("o;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("io");
         
         
         EC.Sound.play("zhai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nds");
         
         EC.Sound.play("sov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("Nqs");
         EC.Sound.play("ngov")
         
         
         
         EC.Sound.play("ngov")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_No}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nzh");
         
         EC.Sound.play("No");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ngo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nqh");
         
         EC.Sound.play("ngo")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Nai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("iz");
         
         
         EC.Sound.play("Nai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nyu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("ஞு");
         
         EC.Sound.play("gnu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Nu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("Z");
         
         EC.Sound.play("Nu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_thov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("njs");
         EC.Sound.play("thov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ttho}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Njh");
         EC.Sound.play("ttho");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tho}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("njh");
         EC.Sound.play("tho");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_output}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nnov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nds");
         
         EC.Sound.play("__nov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nnno}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         {
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         }
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Ndh");
         
         EC.Sound.play("__nno");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nno}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("d;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("ndh");
         
         EC.Sound.play("__no");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ro}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nwh");
         
         
         EC.Sound.play("_ro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RRo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nwh");
         
         
         
         EC.Sound.play("_rro");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("w;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("nws");
         
         
         EC.Sound.play("_rov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_do}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nlh");
         EC.Sound.play("do");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nyo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("NQh");
         
         
         EC.Sound.play("gno");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_so}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nrh");
         
         
         EC.Sound.play("so");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nggo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("q;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nqh");
         
         EC.Sound.play("nggo")

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_NNo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("z;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nzh");
         
         EC.Sound.play("NNo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sso}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Nrh");
         
         
         EC.Sound.play("sso");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_kov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("f;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("Nfs");
         
         EC.Sound.play("kov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nyyo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("Q;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("nQh");
         EC.Sound.play("gno");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ddo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("l;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("nlh");
         
         EC.Sound.play("ddo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_thu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("j;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("J");
         
         
         EC.Sound.play("thu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("e;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("E}");
         
         
         EC.Sound.play("_nu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("k;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("%");
         
         EC.Sound.play("mu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pov}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("xs");
         sym.getSymbol("output").$("t3").html("ngs");
         
         EC.Sound.play("pov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text4Copy49}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pa}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("m");
         sym.getSymbol("output").$("t3").html("g");
         
         EC.Sound.play("pa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_paa}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("M");
         sym.getSymbol("output").$("t3").html("g");
         
         
         
         EC.Sound.play("paa");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pi}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("gp");
         
         
         EC.Sound.play("pi");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("<");
         sym.getSymbol("output").$("t3").html("gP");
         
         
         
         EC.Sound.play("pee");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pu}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("c");
         sym.getSymbol("output").$("t3").html("G");
         
         
         
         EC.Sound.play("pu");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_poo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+10);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("C");
         sym.getSymbol("output").$("t3").html("g}");
         
         
         
         EC.Sound.play("poo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pe}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("v");
         sym.getSymbol("output").$("t3").html("ng");
         
         
         
         EC.Sound.play("pe");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pea}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+15);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("V");
         sym.getSymbol("output").$("t3").html("Ng");
         
         
         EC.Sound.play("pea");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("ig");
         
         
         
         EC.Sound.play("pai");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_po}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("x");
         sym.getSymbol("output").$("t3").html("ngh");
         
         
         
         EC.Sound.play("po");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ppo}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left - sym.$("output").width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("g;");
         sym.getSymbol("output").$("t2").html("X");
         sym.getSymbol("output").$("t3").html("Ngh");
         
         
         EC.Sound.play("ppo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_sai}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width()+17);
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         sym.getSymbol("output").$("t1").html("r;");
         sym.getSymbol("output").$("t2").html("I");
         sym.getSymbol("output").$("t3").html("ir");
         
         EC.Sound.play("sai")
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vee}", "click", function(sym, e) {
         sym.$("output").css('left',sym.$(e.currentTarget).position().left +  sym.$(e.currentTarget).width());
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  +  sym.$(e.currentTarget).height() + sym.getComposition().getStage().$('content').scrollTop() );
         if(e.pageY>=470)
         sym.$("output").css('top', sym.$(e.currentTarget).position().top  - sym.$("output").height()+ sym.getComposition().getStage().$('content').scrollTop() );
         
         
         
         
         sym.getSymbol("output").$("t1").html("t;");
         sym.getSymbol("output").$("t2").html(",");
         sym.getSymbol("output").$("t3").html("tP");
         
         
         
         EC.Sound.play("vee");
         
         

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'handOver'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_hoverBox}", "mouseover", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hoverBox}", "mouseout", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("out");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 615, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("handOver");
   //Edge symbol end:'handOver'

   //=========================================================
   
   //Edge symbol: 'output'
   (function(symbolName) {   
   
   })("output");
   //Edge symbol end:'output'

})(jQuery, AdobeEdge, "EDGE-7374520");