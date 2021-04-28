/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['baminiplain, Arial, sans-serif']='<link rel=\"stylesheet\" media=\"screen\" title=\"\" href=\"font/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />';
   fonts['MyCustomFont']='';
   fonts['allura, cursive']='<script src=\"http://use.edgefonts.net/allura:n4:all.js\"></script>';
   fonts['josefin-slab, serif']='<script src=\"http://use.edgefonts.net/josefin-slab:n4,n7,i3,n3,i4,n1,i7,i1,i6,n6:all.js\"></script>';
   fonts['baamini']='';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'wrapper',
            type:'image',
            rect:['0px','100px','1366px','568px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px'],
            transform:[[],[],[],['1','1.35177']]
         },
         {
            id:'eyes_12',
            type:'image',
            rect:['589px','-186px','182px','182px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"eyes_12.png",'0px','0px']
         },
         {
            id:'pupils',
            type:'rect',
            rect:['214','164','auto','auto','auto','auto']
         },
         {
            id:'menu_wrapper',
            type:'image',
            rect:['221px','12px','1055px','717px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_wrapper.png",'0px','0px']
         },
         {
            id:'bg2',
            type:'image',
            rect:['256px','175px','708px','529px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"vg.png",'0px','0px']
         },
         {
            id:'sidecolor',
            type:'image',
            rect:['0%','-1.2%','3.7%','101.5%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sidecolor.png",'0px','0px']
         },
         {
            id:'logo_batch',
            type:'group',
            rect:['3.7%','79.2%','13.4%','14.7%','auto','auto'],
            transform:[[],[],[],['1','0.9209']],
            c:[
            {
               id:'logorect',
               type:'rect',
               rect:['0%','31.6%','110.4%','36.9%','auto','auto'],
               fill:["rgba(255,255,255,1.00)"],
               stroke:[0,"rgba(0,0,0,1)","none"]
            },
            {
               id:'rights',
               type:'text',
               rect:['46.9%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['46.9%','37.2%','52.6%','14.8%','auto','auto'],
               opacity:1,
               text:"Annai.no © 2013",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none",""]
            },
            {
               id:'annailogo',
               type:'image',
               rect:['0%','0%','46.5%','100%','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"annailogo.png",'0px','0px']
            }]
         },
         {
            id:'cloud1',
            type:'image',
            rect:['1017px','-258px','510px','510px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cloud1.png",'0px','0px']
         },
         {
            id:'cloud2',
            type:'image',
            rect:['48px','-258px','510px','510px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cloud2.png",'0px','0px']
         },
         {
            id:'pa_small',
            display:'none',
            type:'group',
            rect:['301px','108px','53px','54','auto','auto'],
            c:[
            {
               id:'rect_pa',
               type:'rect',
               rect:['0px','0px','53px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(252,125,27,1.00)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'text_pa',
               type:'text',
               rect:['10px','2px','41px','52px','auto','auto'],
               text:"g",
               align:"left",
               font:['baminiplain, Arial, sans-serif',60,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'header',
            type:'text',
            rect:['469px','129px','560px','34px','auto','auto'],
            text:"glq;fSk; xypAk; tpisahl;L ",
            align:"center",
            font:['baminiplain, Arial, sans-serif',35,"rgba(253,123,22,1.00)","800","none","normal"]
         },
         {
            id:'pin',
            type:'group',
            rect:['256px','130px','192','39','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'fwd',
               type:'image',
               rect:['0px','11px','19px','17px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"fwd.png",'0px','0px']
            },
            {
               id:'pinselga',
               type:'text',
               rect:['24px','4px','auto','auto','auto','auto'],
               text:"gpd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',30,"rgba(0,0,0,1.00)","800","none","normal"]
            }]
         },
         {
            id:'home',
            type:'image',
            rect:['292px','48px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
         },
         {
            id:'fct',
            type:'group',
            rect:['74px','727px','227','28','auto','auto'],
            c:[
            {
               id:'fct_2',
               type:'group',
               rect:['0px','0px','258px','26px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'txt_fct',
                  type:'text',
                  rect:['90px','7px','auto','auto','auto','auto'],
                  text:"Flow Chart Technologies",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',11,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'fct_logo',
                  type:'image',
                  rect:['59px','0px','30px','28px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"fct_logo.png",'0px','0px']
               }]
            },
            {
               id:'pwd_fct',
               type:'text',
               rect:['0px','8px','auto','auto','auto','auto'],
               text:"Powered by :",
               align:"left",
               font:['Arial, Helvetica, sans-serif',9,"rgba(0,0,0,1)","700","none",""]
            }]
         },
         {
            id:'girl2',
            type:'image',
            rect:['986px','212px','255px','487px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"girl2.png",'0px','0px']
         },
         {
            id:'star0',
            type:'image',
            rect:['1001px','509px','65px','63px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"star2.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'star1',
            type:'image',
            rect:['1083px','509px','65px','63px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"star2.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'star2',
            type:'image',
            rect:['1154px','507px','65px','63px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"star2.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'star3',
            type:'image',
            rect:['1001px','597px','65px','63px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"star2.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'star4',
            type:'image',
            rect:['1077px','598px','65px','63px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"star2.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'star5',
            type:'image',
            rect:['1152px','598px','65px','63px','auto','auto'],
            opacity:0.25,
            fill:["rgba(0,0,0,0)",im+"star2.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'RoundRect2',
            type:'rect',
            rect:['1009px','364px','199px','116px','auto','auto'],
            borderRadius:["5px 5px","5px 5px","5px 5px","5px 5px"],
            fill:["rgba(25,23,23,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'mark_text',
            type:'text',
            rect:['1019px','374px','182px','42px','auto','auto'],
            text:"kjpg;ngz;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',35,"rgba(255,255,255,1.00)","bold","none","normal"]
         },
         {
            id:'mark',
            type:'text',
            tag:'h3',
            rect:['1014px','417px','192px','41px','auto','auto'],
            text:"00",
            align:"center",
            userClass:"mark",
            font:['Arial, Helvetica, sans-serif',50,"rgba(255,255,255,1.00)","700","none","normal"]
         },
         {
            id:'vilayattu2',
            type:'image',
            rect:['19px','-172px','249px','605px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"vilayattu2.png",'0px','0px']
         },
         {
            id:'finishSymCopy',
            display:'none',
            type:'rect',
            rect:['271px','216px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'pupils',
            symbolName:'pupils'
         },
         {
            id:'finishSymCopy',
            symbolName:'finishSym'
         }
         ]
      },
   states: {
      "Base State": {
         "${_wrapper}": [
            ["style", "top", '100px'],
            ["transform", "scaleY", '1.35177'],
            ["style", "height", '568px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1366px']
         ],
         "${_girl2}": [
            ["style", "top", '212px'],
            ["style", "left", '986px']
         ],
         "${_rect_pa}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(252,125,27,1)'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '52px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(251,136,35,1.00)',100],['rgba(202,198,198,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '53px']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_pinselga}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_fct}": [
            ["style", "display", 'block'],
            ["style", "left", '74px'],
            ["style", "top", '727px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_fwd}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_mark}": [
            ["style", "line-height", '59px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '1014px'],
            ["style", "font-size", '50px'],
            ["style", "top", '417px'],
            ["style", "text-align", 'center'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "width", '192px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '364px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '1009px'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_cloud1}": [
            ["style", "height", '258px'],
            ["style", "top", '-118px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_pa_small}": [
            ["style", "top", '108px'],
            ["style", "left", '301px'],
            ["style", "display", 'none']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.25%'],
            ["style", "height", '101.5%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_cloud2}": [
            ["style", "height", '258px'],
            ["style", "top", '-127px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_home}": [
            ["style", "top", '48px'],
            ["style", "height", '71px'],
            ["style", "left", '292px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_eyes_12}": [
            ["style", "height", '182px'],
            ["style", "top", '-42px'],
            ["style", "left", '589px'],
            ["style", "width", '182px']
         ],
         "${_logorect}": [
            ["style", "top", '31.56%'],
            ["style", "height", '36.87%'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0%'],
            ["style", "width", '110.38%']
         ],
         "${_menu_wrapper}": [
            ["style", "top", '12px'],
            ["style", "height", '717px'],
            ["style", "left", '221px'],
            ["style", "width", '1055px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "font-size", '10px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "height", '13.28%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.85%'],
            ["style", "width", '60.47%']
         ],
         "${_star3}": [
            ["style", "top", '597px'],
            ["style", "width", '65px'],
            ["style", "height", '63px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '1001px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_star5}": [
            ["style", "top", '598px'],
            ["style", "width", '65px'],
            ["style", "height", '63px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '1152px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_bg2}": [
            ["style", "left", '256px'],
            ["style", "top", '175px']
         ],
         "${_star0}": [
            ["style", "top", '509px'],
            ["style", "width", '65px'],
            ["style", "height", '63px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '1001px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star2}": [
            ["style", "top", '507px'],
            ["style", "width", '65px'],
            ["style", "height", '63px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '1154px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star1}": [
            ["style", "top", '509px'],
            ["style", "width", '65px'],
            ["style", "height", '63px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '1083px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_fct_logo}": [
            ["style", "height", '28px'],
            ["style", "top", '0px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "width", '52.64%'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '14.75%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.86%'],
            ["style", "font-size", '10px']
         ],
         "${_text_pa}": [
            ["style", "-webkit-transform-origin", [50,62], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '10px'],
            ["style", "font-size", '60px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '52px'],
            ["style", "width", '41px'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '50px']
         ],
         "${_vilayattu2}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "left", '19px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_answrd2Copy2}": [
            ["style", "top", '165px'],
            ["style", "height", '132px'],
            ["style", "width", 'auto'],
            ["style", "left", '-4px'],
            ["style", "font-size", '45px']
         ],
         "${_finishSymCopy}": [
            ["style", "top", '131px'],
            ["style", "left", '246px'],
            ["style", "display", 'none']
         ],
         "${_mark_text}": [
            ["style", "line-height", '48px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '1019px'],
            ["style", "width", '182px'],
            ["style", "top", '374px'],
            ["style", "text-align", 'center'],
            ["style", "height", '42px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "font-size", '35px']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '469px'],
            ["style", "font-size", '35px'],
            ["style", "top", '129px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "opacity", '1'],
            ["style", "width", '560px']
         ],
         "${_Text}": [
            ["style", "top", '-1px'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(252,114,7,1)'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "left", '233px'],
            ["style", "font-size", '40px']
         ],
         "${_logo_batch}": [
            ["style", "opacity", '1'],
            ["style", "left", '3.66%'],
            ["transform", "scaleY", '0.9209']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1366px']
         ],
         "${_star4}": [
            ["style", "top", '598px'],
            ["style", "width", '65px'],
            ["style", "height", '63px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '1077px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_pin}": [
            ["style", "top", '130px'],
            ["style", "left", '256px'],
            ["style", "cursor", 'pointer']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "gameWin": 30,
            "greet": 125,
            "star": 233
         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_finishSymCopy}", "top", '131px', { fromValue: '131px'}], position: 30, duration: 0 },
            { id: "eid10", tween: [ "style", "${_finishSymCopy}", "left", '246px', { fromValue: '246px'}], position: 30, duration: 0 },
            { id: "eid1", tween: [ "style", "${_pa_small}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid49", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_finishSymCopy}", "display", 'none', { fromValue: 'none'}], position: 15, duration: 0 },
            { id: "eid5", tween: [ "style", "${_finishSymCopy}", "display", 'block', { fromValue: 'none'}], position: 30, duration: 0 }         ]
      }
   }
},
"pupils": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'eyeb2',
      type: 'image',
      rect: ['88px','0','30px','32px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/eyeb2.png','0px','0px']
   },
   {
      id: 'eyeb1',
      type: 'image',
      rect: ['-6px','-49px','65px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/eyeb1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_eyeb1}": [
            ["style", "top", '-48px'],
            ["style", "left", '11px']
         ],
         "${_eyeb2}": [
            ["style", "top", '5px'],
            ["style", "left", '97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '16px'],
            ["style", "width", '103px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid17", tween: [ "style", "${_eyeb2}", "left", '120px', { fromValue: '97px'}], position: 0, duration: 2000, easing: "easeOutExpo" },
            { id: "eid34", tween: [ "style", "${_eyeb1}", "top", '-49px', { fromValue: '-48px'}], position: 0, duration: 2000, easing: "easeOutExpo" },
            { id: "eid22", tween: [ "style", "${_eyeb1}", "left", '50px', { fromValue: '11px'}], position: 0, duration: 2000, easing: "easeOutExpo" }         ]
      }
   }
},
"flower": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['24px','0px','3px','422px','auto','auto'],
      id: 'String',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,18,149,1.00)']
   },
   {
      id: 'simpleFlower',
      type: 'rect',
      rect: ['0','399','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'simpleFlower',
      symbolName: 'simpleFlower'
   }   ]
   },
   states: {
      "Base State": {
         "${_String}": [
            ["style", "top", '0px'],
            ["style", "left", '24px'],
            ["color", "background-color", 'rgba(0,18,149,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '449px'],
            ["style", "width", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"simpleFlower": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','50px','50px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'background',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,0,0,1)']
   },
   {
      type: 'image',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'flower3',
      rect: ['0px','0px','50px','50px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/flower3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_flower3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_background}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"decorateTheOutdoorsText": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['josefin-slab, serif',42,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'decorate',
      text: 'decorate',
      align: 'center',
      rect: ['0px','0px','160px','42px','auto','auto']
   },
   {
      font: ['allura, cursive',24,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'outdoors',
      text: 'the outdoors',
      align: 'right',
      rect: ['0px','29px','148px','22px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_outdoors}": [
            ["style", "top", '29px'],
            ["style", "text-align", 'right'],
            ["style", "height", '22px'],
            ["style", "font-family", 'allura, cursive'],
            ["style", "left", '-148px'],
            ["style", "width", '148px']
         ],
         "${_decorate}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'josefin-slab, serif'],
            ["style", "left", '160px'],
            ["style", "font-size", '42px']
         ],
         "${symbolSelector}": [
            ["style", "height", '51px'],
            ["style", "width", '160px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid52", tween: [ "style", "${_outdoors}", "left", '0px', { fromValue: '-148px'}], position: 0, duration: 750, easing: "easeOutQuad" },
            { id: "eid50", tween: [ "style", "${_decorate}", "left", '0px', { fromValue: '160px'}], position: 0, duration: 750, easing: "easeOutQuad" }         ]
      }
   }
},
"swingingFlower": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'flower',
      type: 'rect',
      rect: ['0','1','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flower',
      symbolName: 'flower'
   }   ]
   },
   states: {
      "Base State": {
         "${_flower}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "width", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2043.41796875,
         autoPlay: false,
         labels: {
            "center": 1500
         },
         timeline: [
            { id: "eid32", tween: [ "transform", "${_flower}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid47", tween: [ "transform", "${_flower}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 943, duration: 0, easing: "easeInQuad" },
            { id: "eid29", tween: [ "transform", "${_flower}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 1000, duration: 500, easing: "easeInQuad" },
            { id: "eid30", tween: [ "transform", "${_flower}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1500, duration: 500, easing: "easeOutQuad" }         ]
      }
   }
},
"gameFlower": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'flowerClickZone',
      type: 'group',
      rect: ['0','0','50','50','auto','auto'],
      c: [
      {
         rect: ['0px','0px','50px','50px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         userClass: 'bg',
         id: 'background',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,0,0,1)','images/pic1.png','0px','0px']
      }]
   },
   {
      rect: ['0px','0px','50px','50px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'myquestion',
      stroke: [3,'rgb(255, 236, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(255,0,0,1)','images/flow.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_myquestion}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px']
         ],
         "${_flowerClickZone}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["style", "cursor", 'auto'],
            ["style", "left", '0px']
         ],
         "${_background}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '50px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3111,
         autoPlay: false,
         labels: {
            "reveal": 500,
            "flipback": 1000,
            "spin": 2204,
            "done": 3111
         },
         timeline: [
            { id: "eid373", tween: [ "style", "${_myquestion}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "transform", "${_flowerClickZone}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 99 },
            { id: "eid104", tween: [ "transform", "${_flowerClickZone}", "scaleY", '1', { fromValue: '0'}], position: 599, duration: 97 },
            { id: "eid107", tween: [ "transform", "${_flowerClickZone}", "scaleY", '0', { fromValue: '1'}], position: 1750, duration: 88 },
            { id: "eid106", tween: [ "transform", "${_flowerClickZone}", "scaleY", '1', { fromValue: '0'}], position: 1838, duration: 90 },
            { id: "eid378", tween: [ "transform", "${_myquestion}", "scaleY", '0', { fromValue: '1'}], position: 500, duration: 99 },
            { id: "eid381", tween: [ "transform", "${_myquestion}", "scaleY", '1', { fromValue: '0'}], position: 1793, duration: 99 },
            { id: "eid371", tween: [ "style", "${_flowerClickZone}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid372", tween: [ "style", "${_flowerClickZone}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid383", tween: [ "style", "${_myquestion}", "display", 'none', { fromValue: 'block'}], position: 2204, duration: 0 },
            { id: "eid99", tween: [ "transform", "${_flowerClickZone}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 2204, duration: 907 }         ]
      }
   }
},
"background": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','100%','600px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(164,124,225,1.00)',[270,[['rgba(185,150,239,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(164,124,225,1.00)'],
            ["style", "height", '600px'],
            ["gradient", "background-image", [270,[['rgba(185,150,239,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '100%']
         ],
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"cascadingFlowers": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'falling6',
      type: 'rect',
      rect: ['36','-24','auto','auto','auto','auto']
   },
   {
      id: 'falling5',
      type: 'rect',
      rect: ['36','-24','auto','auto','auto','auto']
   },
   {
      id: 'falling4',
      type: 'rect',
      rect: ['36','-24','auto','auto','auto','auto']
   },
   {
      id: 'falling3',
      type: 'rect',
      rect: ['36','-24','auto','auto','auto','auto']
   },
   {
      id: 'falling2',
      type: 'rect',
      rect: ['36','-24','auto','auto','auto','auto']
   },
   {
      id: 'falling1',
      type: 'rect',
      rect: ['36','-24','auto','auto','auto','auto']
   },
   {
      id: 'falling0',
      type: 'rect',
      rect: ['353','79','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'falling0',
      symbolName: 'swingingFlower'
   },
   {
      id: 'falling3',
      symbolName: 'swingingFlower'
   },
   {
      id: 'falling2',
      symbolName: 'swingingFlower'
   },
   {
      id: 'falling1',
      symbolName: 'swingingFlower'
   },
   {
      id: 'falling4',
      symbolName: 'swingingFlower'
   },
   {
      id: 'falling5',
      symbolName: 'swingingFlower'
   },
   {
      id: 'falling6',
      symbolName: 'swingingFlower'
   }   ]
   },
   states: {
      "Base State": {
         "${_falling3}": [
            ["style", "top", '-450px'],
            ["style", "left", '110px']
         ],
         "${_falling0}": [
            ["style", "top", '-450px'],
            ["style", "left", '30px']
         ],
         "${_falling6}": [
            ["style", "top", '-450px'],
            ["style", "left", '45px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '160px'],
            ["style", "overflow", 'visible']
         ],
         "${_falling1}": [
            ["style", "top", '-450px'],
            ["style", "left", '95px']
         ],
         "${_falling4}": [
            ["style", "top", '-450px'],
            ["style", "left", '70px']
         ],
         "${_falling5}": [
            ["style", "top", '-450px'],
            ["style", "left", '20px']
         ],
         "${_falling2}": [
            ["style", "top", '-450px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: false,
         timeline: [
            { id: "eid46", tween: [ "style", "${_falling3}", "top", '-63px', { fromValue: '-450px'}], position: 3000, duration: 750, easing: "easeOutBounce" },
            { id: "eid36", tween: [ "style", "${_falling6}", "top", '-205px', { fromValue: '-450px'}], position: 500, duration: 750, easing: "easeOutBounce" },
            { id: "eid40", tween: [ "style", "${_falling2}", "top", '-155px', { fromValue: '-450px'}], position: 1500, duration: 750, easing: "easeOutBounce" },
            { id: "eid38", tween: [ "style", "${_falling4}", "top", '-132px', { fromValue: '-450px'}], position: 1000, duration: 750, easing: "easeOutBounce" },
            { id: "eid42", tween: [ "style", "${_falling0}", "top", '-297px', { fromValue: '-450px'}], position: 2000, duration: 750, easing: "easeOutBounce" },
            { id: "eid44", tween: [ "style", "${_falling5}", "top", '-87px', { fromValue: '-450px'}], position: 2500, duration: 750, easing: "easeOutBounce" },
            { id: "eid34", tween: [ "style", "${_falling1}", "top", '-260px', { fromValue: '-450px'}], position: 0, duration: 750, easing: "easeOutBounce" }         ]
      }
   }
},
"gameBoard": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      id: 'flower11',
      type: 'rect',
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower10',
      type: 'rect',
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower9',
      type: 'rect',
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower8',
      type: 'rect',
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower7',
      type: 'rect',
      rect: ['260','259','auto','auto','auto','auto']
   },
   {
      id: 'flower6',
      type: 'rect',
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower5',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower4',
      type: 'rect',
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower3',
      type: 'rect',
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower2',
      type: 'rect',
      rect: ['260','259','auto','auto','auto','auto']
   },
   {
      id: 'flower1',
      type: 'rect',
      rect: ['226','150','auto','auto','auto','auto']
   },
   {
      id: 'flower0',
      type: 'rect',
      userClass: 'df',
      rect: ['226','150','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'flower8',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower10',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower4',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower11',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower5',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower2',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower1',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower6',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower3',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower9',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower7',
      symbolName: 'gameFlower'
   },
   {
      id: 'flower0',
      symbolName: 'gameFlower'
   }   ]
   },
   states: {
      "Base State": {
         "${_flower7}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '236px'],
            ["style", "left", '599px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower9}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '413px'],
            ["style", "left", '241px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower2}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '61px'],
            ["style", "left", '416px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower10}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '413px'],
            ["style", "left", '594px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower3}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '61px'],
            ["style", "left", '594px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower4}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '236px'],
            ["style", "left", '62px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower11}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '413px'],
            ["style", "left", '416px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower0}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '60px'],
            ["style", "left", '62px'],
            ["transform", "scaleY", '3.373']
         ],
         "${symbolSelector}": [
            ["style", "height", '531px'],
            ["style", "width", '711px']
         ],
         "${_flower5}": [
            ["style", "top", '236px'],
            ["transform", "scaleY", '3.373'],
            ["transform", "scaleX", '3.373'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '241px']
         ],
         "${_flower1}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '60px'],
            ["style", "left", '241px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower8}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '413px'],
            ["style", "left", '62px'],
            ["transform", "scaleY", '3.373']
         ],
         "${_flower6}": [
            ["transform", "scaleX", '3.373'],
            ["style", "top", '236px'],
            ["style", "left", '421px'],
            ["transform", "scaleY", '3.373']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid534", tween: [ "style", "${_flower5}", "left", '241px', { fromValue: '241px'}], position: 0, duration: 0 },
            { id: "eid527", tween: [ "style", "${_flower4}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "transform", "${_flower8}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid535", tween: [ "style", "${_flower9}", "left", '241px', { fromValue: '241px'}], position: 0, duration: 0 },
            { id: "eid448", tween: [ "transform", "${_flower9}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid464", tween: [ "transform", "${_flower6}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid473", tween: [ "transform", "${_flower5}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid526", tween: [ "style", "${_flower0}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
            { id: "eid465", tween: [ "transform", "${_flower6}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid433", tween: [ "transform", "${_flower0}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid461", tween: [ "transform", "${_flower1}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid520", tween: [ "style", "${_flower11}", "top", '413px', { fromValue: '413px'}], position: 0, duration: 0 },
            { id: "eid519", tween: [ "style", "${_flower8}", "top", '413px', { fromValue: '413px'}], position: 0, duration: 0 },
            { id: "eid536", tween: [ "style", "${_flower1}", "left", '241px', { fromValue: '241px'}], position: 0, duration: 0 },
            { id: "eid529", tween: [ "style", "${_flower3}", "left", '594px', { fromValue: '594px'}], position: 0, duration: 0 },
            { id: "eid514", tween: [ "style", "${_flower9}", "top", '413px', { fromValue: '413px'}], position: 0, duration: 0 },
            { id: "eid533", tween: [ "style", "${_flower2}", "left", '416px', { fromValue: '416px'}], position: 0, duration: 0 },
            { id: "eid504", tween: [ "style", "${_flower4}", "top", '236px', { fromValue: '236px'}], position: 0, duration: 0 },
            { id: "eid523", tween: [ "style", "${_flower7}", "top", '236px', { fromValue: '236px'}], position: 0, duration: 0 },
            { id: "eid493", tween: [ "style", "${_flower0}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid532", tween: [ "style", "${_flower11}", "left", '416px', { fromValue: '416px'}], position: 0, duration: 0 },
            { id: "eid530", tween: [ "style", "${_flower10}", "left", '594px', { fromValue: '594px'}], position: 0, duration: 0 },
            { id: "eid445", tween: [ "transform", "${_flower11}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid531", tween: [ "style", "${_flower6}", "left", '421px', { fromValue: '421px'}], position: 0, duration: 0 },
            { id: "eid472", tween: [ "transform", "${_flower5}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid436", tween: [ "transform", "${_flower3}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid444", tween: [ "transform", "${_flower11}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid506", tween: [ "style", "${_flower5}", "top", '236px', { fromValue: '236px'}], position: 0, duration: 0 },
            { id: "eid432", tween: [ "transform", "${_flower0}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid501", tween: [ "style", "${_flower2}", "top", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid457", tween: [ "transform", "${_flower7}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "transform", "${_flower4}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid508", tween: [ "style", "${_flower6}", "top", '236px', { fromValue: '236px'}], position: 0, duration: 0 },
            { id: "eid502", tween: [ "style", "${_flower3}", "top", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid456", tween: [ "transform", "${_flower7}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid521", tween: [ "style", "${_flower10}", "top", '413px', { fromValue: '413px'}], position: 0, duration: 0 },
            { id: "eid453", tween: [ "transform", "${_flower2}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid441", tween: [ "transform", "${_flower10}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid452", tween: [ "transform", "${_flower2}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "transform", "${_flower9}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid525", tween: [ "style", "${_flower8}", "left", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
            { id: "eid528", tween: [ "style", "${_flower7}", "left", '599px', { fromValue: '599px'}], position: 0, duration: 0 },
            { id: "eid437", tween: [ "transform", "${_flower3}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid440", tween: [ "transform", "${_flower10}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid489", tween: [ "style", "${_flower1}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid476", tween: [ "transform", "${_flower8}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid469", tween: [ "transform", "${_flower4}", "scaleY", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 },
            { id: "eid460", tween: [ "transform", "${_flower1}", "scaleX", '3.373', { fromValue: '3.373'}], position: 0, duration: 0 }         ]
      }
   }
},
"finishSym": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'finishSymin',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['-1px','0px','1010px','575px','auto','auto'],
      fill: ['rgba(255,255,255,0.99)']
   },
   {
      id: 'st',
      type: 'rect',
      rect: ['64','-14','auto','auto','auto','auto']
   },
   {
      id: 'greetings',
      type: 'image',
      rect: ['200px','9px','610px','561px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/greetings.png','0px','0px']
   },
   {
      font: ['baamini',45,'rgba(0,0,0,1)','700','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Gj;jprhyp',
      align: 'center',
      rect: ['404px','261px','200px','60px','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'st',
      symbolName: 'st'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "line-height", '53px'],
            ["style", "font-weight", '700'],
            ["style", "left", '404px'],
            ["style", "width", '200px'],
            ["style", "top", '261px'],
            ["style", "text-align", 'center'],
            ["style", "height", '60px'],
            ["style", "font-family", 'baamini'],
            ["style", "font-size", '45px']
         ],
         "${_greetings}": [
            ["style", "top", '9px'],
            ["style", "height", '561px'],
            ["style", "left", '200px'],
            ["style", "width", '610px']
         ],
         "${_finishSymin}": [
            ["style", "top", '0px'],
            ["style", "height", '575px'],
            ["color", "background-color", 'rgba(255,255,255,0.99)'],
            ["style", "left", '-1px'],
            ["style", "width", '1010px']
         ],
         "${symbolSelector}": [
            ["style", "height", '575px'],
            ["style", "width", '1010px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"st": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'star',
      type: 'image',
      rect: ['0px','0px','882px','598px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/star.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_star}": [
            ["style", "top", '0px'],
            ["style", "height", '598px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '882px']
         ],
         "${symbolSelector}": [
            ["style", "height", '598px'],
            ["style", "width", '882px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 60,
         autoPlay: true,
         timeline: [
            { id: "eid132", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 39, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7374520");
