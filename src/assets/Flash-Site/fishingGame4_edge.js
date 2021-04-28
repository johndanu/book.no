/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['baminiplain, Arial, sans-serif']='<link rel=\"stylesheet\" media=\"screen\" title=\"\" href=\"font/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />';
   fonts['MyCustomFont']='<style type=\"text/css\">@font-face {  font-family: MyCustomFont;  src: url(\'font/Baamini.ttf\'); /* Edit this line */}</style>';
   fonts['MyCustomFont2']='<style type=\"text/css\">@font-face {  font-family: MyCustomFont2;  src: url(\'font/Baamini.ttf\'); /* Edit this line */}</style>';
   fonts['myfont']='@font-face {  font-family: MyCustomFont;  src: url(\'font/Baamini.ttf\');';
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
            rect:['0px','0px','1370px','768px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px']
         },
         {
            id:'sidecolor',
            type:'image',
            rect:['0%','-107%','3.7%','102.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sidecolor.png",'0px','0px']
         },
         {
            id:'logo_batch',
            type:'group',
            rect:['3.7%','79.2%','13.4%','14.7%','auto','auto'],
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
               rect:['46.5%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['46.5%','37.2%','52.6%','14.8%','auto','auto'],
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
            id:'menu_wrapper',
            type:'image',
            rect:['221px','2px','1373px','933px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_wrapper.png",'0px','0px']
         },
         {
            id:'home',
            type:'image',
            rect:['293px','37px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
         },
         {
            id:'fct',
            display:'none',
            type:'group',
            rect:['55','732','227','28','auto','auto'],
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
            id:'gameStage',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'finishSym3',
            display:'none',
            type:'rect',
            rect:['729','417','auto','auto','auto','auto']
         },
         {
            id:'vilayattu2Copy',
            type:'image',
            rect:['19px','-654px','249px','606px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"vilayattu2.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'gameStage',
            symbolName:'game_sym_stage'
         },
         {
            id:'pupils',
            symbolName:'pupils'
         },
         {
            id:'finishSym3',
            symbolName:'finishSym'
         }
         ]
      },
   states: {
      "Base State": {
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1370px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.43%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_finishSym3}": [
            ["style", "top", '121px'],
            ["style", "overflow", 'visible'],
            ["transform", "scaleX", '1.00495'],
            ["style", "left", '246px'],
            ["style", "display", 'none']
         ],
         "${_home}": [
            ["style", "top", '37px'],
            ["style", "height", '71px'],
            ["style", "left", '293px'],
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
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "font-size", '10px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "height", '13.28%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.5%'],
            ["style", "width", '60.47%']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_fct}": [
            ["style", "display", 'none']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_menu_wrapper}": [
            ["style", "top", '2px'],
            ["style", "height", '717px'],
            ["style", "left", '221px'],
            ["style", "width", '1055px']
         ],
         "${_cloud2}": [
            ["style", "height", '258px'],
            ["style", "top", '-127px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_gameStage}": [
            ["style", "left", '245px'],
            ["style", "top", '121px']
         ],
         "${_panthu_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '64px'],
            ["style", "font-size", '51px']
         ],
         "${_vilayattu2Copy}": [
            ["style", "height", '606px'],
            ["style", "top", '-174px'],
            ["style", "left", '19px'],
            ["style", "width", '249px']
         ],
         "${_logo_batch}": [
            ["style", "left", '3.66%'],
            ["style", "opacity", '1']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "width", '52.64%'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '14.75%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.5%'],
            ["style", "font-size", '10px']
         ],
         "${_cloud1}": [
            ["style", "height", '258px'],
            ["style", "top", '-118px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_fct_logo}": [
            ["style", "height", '28px'],
            ["style", "top", '0px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '100%']
         ],
         "${_pantham_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '53px'],
            ["style", "font-size", '51px']
         ],
         "${_panam_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '55px'],
            ["style", "font-size", '51px']
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
         duration: 1599,
         autoPlay: true,
         labels: {
            "on_1": 1000,
            "off_1": 1071,
            "on_2": 1152,
            "off_2": 1223,
            "on_3": 1367,
            "off_3": 1438,
            "on_4": 1528,
            "off_4": 1599
         },
         timeline: [
            { id: "eid104", tween: [ "transform", "${_finishSym3}", "scaleX", '1.00495', { fromValue: '1.00495'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_finishSym3}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_finishSym3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_gameStage}", "top", '121px', { fromValue: '121px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid93", tween: [ "style", "${_gameStage}", "left", '245px', { fromValue: '245px'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid99", tween: [ "style", "${_finishSym3}", "top", '121px', { fromValue: '121px'}], position: 0, duration: 0 }         ]
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
"man": {
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
      id: 'man',
      type: 'image',
      rect: ['0px','0px','97px','159px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/man2.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-167px','-58px','263px','218px','auto','auto'],
      id: 'cap',
      fill: ['rgba(0,0,0,0)','images/cap3.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-152px','-46px','249px','209px','auto','auto'],
      id: 'cap2',
      fill: ['rgba(0,0,0,0)','images/cap22.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_man}": [
            ["style", "top", '0px'],
            ["style", "height", '159px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '97px']
         ],
         "${_cap}": [
            ["style", "top", '-58px'],
            ["style", "display", 'none'],
            ["style", "height", '218px'],
            ["style", "opacity", '1'],
            ["style", "left", '-167px'],
            ["style", "width", '263px']
         ],
         "${_cap2}": [
            ["style", "top", '-46px'],
            ["style", "height", '209px'],
            ["style", "display", 'none'],
            ["style", "left", '-152px'],
            ["style", "width", '249px']
         ],
         "${symbolSelector}": [
            ["style", "height", '159px'],
            ["style", "width", '97px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1872,
         autoPlay: true,
         labels: {
            "c": 91,
            "w": 998
         },
         timeline: [
            { id: "eid487", tween: [ "style", "${_cap2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid488", tween: [ "style", "${_cap2}", "display", 'block', { fromValue: 'none'}], position: 996, duration: 0 },
            { id: "eid482", tween: [ "style", "${_cap}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid483", tween: [ "style", "${_cap}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid484", tween: [ "style", "${_cap}", "display", 'block', { fromValue: 'none'}], position: 82, duration: 0 },
            { id: "eid486", tween: [ "style", "${_cap}", "display", 'none', { fromValue: 'block'}], position: 994, duration: 0 },
            { id: "eid485", tween: [ "style", "${_man}", "display", 'none', { fromValue: 'block'}], position: 82, duration: 0 }         ]
      }
   }
},
"game_sym_stage": {
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
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','1010px','575px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'bg',
      type: 'image',
      rect: ['-45px','-33px','1103px','628px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg2.png','0px','0px']
   },
   {
      rect: ['815px','193px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star0',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['815px','146px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star1',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['815px','101px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star2',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['815px','56px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star3',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['815px','11px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star4',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['865px','193px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star5',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['865px','146px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star6',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['865px','101px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star7',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['865px','56px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star8',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['865px','11px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star9',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['910px','192px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star10',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['910px','145px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star11',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['910px','100px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star12',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['910px','55px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star13',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['910px','10px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star14',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['956px','192px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star15',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['956px','145px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star16',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['956px','100px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star17',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['956px','55px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star18',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      rect: ['956px','10px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star19',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star5.png','0px','0px']
   },
   {
      id: 'man2',
      type: 'rect',
      rect: ['76','134','auto','auto','auto','auto']
   },
   {
      id: 'ship4',
      type: 'image',
      rect: ['-299px','206px','620px','255px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ship3.png','0px','0px']
   },
   {
      id: 'f6Copy2',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      id: 'f6Copy',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      id: 'f6',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_1',
      type: 'rect',
      rect: ['-216','397','auto','auto','auto','auto']
   },
   {
      id: 'bottle1',
      type: 'rect',
      rect: ['324','249','auto','auto','auto','auto']
   },
   {
      id: 'bottle2',
      type: 'rect',
      rect: ['508','249','auto','auto','auto','auto']
   },
   {
      id: 'bottle3',
      type: 'rect',
      rect: ['691','249','auto','auto','auto','auto']
   },
   {
      rect: ['0px','1px','1010px','575px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'hide',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'fishfront2',
      type: 'rect',
      rect: ['464','442','auto','auto','auto','auto'],
      userClass: 'fish'
   },
   {
      rect: ['507px','49px','122px','39px','auto','auto'],
      font: ['baamini',30,'rgba(12,59,66,1.00)','700','none',''],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'Text',
      text: 'kjpg;Gfs;',
      cursor: ['pointer'],
      type: 'text'
   },
   {
      rect: ['635px','41px','61px','39px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRect',
      stroke: [3,'rgba(122,217,249,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(24,62,82,1.00)']
   },
   {
      rect: ['643px','42px','52px','39px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',30,'rgba(255,255,255,1)','bold','none','normal'],
      align: 'center',
      id: 'mark',
      text: '00',
      cursor: ['pointer'],
      type: 'text'
   },
   {
      rect: ['180px','19px','311px','116px','auto','auto'],
      id: 'bait',
      userClass: 'bite',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/bait-013.png','0px','0px']
   },
   {
      id: 'r1',
      type: 'rect',
      rect: ['345','115','auto','auto','auto','auto']
   },
   {
      id: 'r2',
      type: 'rect',
      rect: ['345','115','auto','auto','auto','auto']
   },
   {
      id: 'r3',
      type: 'rect',
      rect: ['345','115','auto','auto','auto','auto']
   },
   {
      rect: ['1074px','408px','220px','116px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'startpos',
      stroke: [5,'rgb(255, 255, 255)','none'],
      type: 'rect',
      fill: ['rgba(70,201,95,1.00)']
   }],
   symbolInstances: [
   {
      id: 'f6Copy2',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f6Copy',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'man2',
      symbolName: 'man'
   },
   {
      id: 'f6',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'bottle2',
      symbolName: 'bottle2'
   },
   {
      id: 'bottle3',
      symbolName: 'bottle3'
   },
   {
      id: 'Symbol_1',
      symbolName: 'Symbol_1'
   },
   {
      id: 'bottle1',
      symbolName: 'bottle1'
   },
   {
      id: 'fishfront2',
      symbolName: 'fishfront'
   },
   {
      id: 'r1',
      symbolName: 'r1'
   },
   {
      id: 'r2',
      symbolName: 'r1'
   },
   {
      id: 'r3',
      symbolName: 'r1'
   }   ]
   },
   states: {
      "Base State": {
         "${_man2}": [
            ["style", "left", '210px'],
            ["style", "top", '132px']
         ],
         "${_hide}": [
            ["style", "top", '1px'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px'],
            ["style", "opacity", '0'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_startpos}": [
            ["color", "background-color", 'rgba(70,201,95,1)']
         ],
         "${_star9}": [
            ["style", "top", '11px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '865px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_fishfront2}": [
            ["style", "left", '969px'],
            ["style", "top", '453px']
         ],
         "${_star15}": [
            ["style", "top", '192px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '956px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star11}": [
            ["style", "top", '145px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '910px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_f6Copy2}": [
            ["style", "top", '489px'],
            ["transform", "scaleY", '0.23743'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.23743'],
            ["style", "opacity", '1'],
            ["style", "left", '71px']
         ],
         "${_star4}": [
            ["style", "top", '11px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '815px'],
            ["style", "width", '40px']
         ],
         "${_f6Copy}": [
            ["style", "top", '441px'],
            ["transform", "scaleY", '0.23743'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.23743'],
            ["style", "opacity", '1'],
            ["style", "left", '439px']
         ],
         "${_mark}": [
            ["style", "line-height", '44px'],
            ["style", "left", '643px'],
            ["style", "font-size", '30px'],
            ["style", "top", '42px'],
            ["style", "text-align", 'center'],
            ["style", "width", '52px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_star0}": [
            ["style", "top", '193px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "opacity", '0.25'],
            ["style", "height", '39px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '815px'],
            ["style", "width", '40px']
         ],
         "${_star3}": [
            ["style", "top", '56px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '815px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star12}": [
            ["style", "top", '100px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '910px'],
            ["style", "width", '40px']
         ],
         "${_star19}": [
            ["style", "top", '10px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '956px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star14}": [
            ["style", "top", '10px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '910px'],
            ["style", "width", '40px']
         ],
         "${_star8}": [
            ["style", "top", '56px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '865px'],
            ["style", "width", '40px']
         ],
         "${_star17}": [
            ["style", "top", '100px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '956px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '575px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '1010px']
         ],
         "${_r1}": [
            ["style", "top", '118px'],
            ["transform", "scaleY", '2.31667'],
            ["style", "left", '356px'],
            ["transform", "scaleX", '0.83459']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_star5}": [
            ["style", "top", '193px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '865px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_r2}": [
            ["style", "top", '121px'],
            ["transform", "scaleX", '0.91729'],
            ["transform", "scaleY", '2.38691'],
            ["style", "left", '542px']
         ],
         "${_star7}": [
            ["style", "top", '101px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '865px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star1}": [
            ["style", "top", '146px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '815px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_r3}": [
            ["style", "top", '117px'],
            ["transform", "scaleX", '1.02'],
            ["transform", "scaleY", '2.38691'],
            ["style", "left", '721px']
         ],
         "${_f6}": [
            ["style", "top", '480px'],
            ["transform", "scaleY", '0.23743'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.23743'],
            ["style", "opacity", '1'],
            ["style", "left", '801px']
         ],
         "${_star6}": [
            ["style", "top", '146px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '865px'],
            ["style", "width", '40px']
         ],
         "${_ship4}": [
            ["style", "height", '255px'],
            ["style", "top", '206px'],
            ["style", "left", '-299px'],
            ["style", "width", '620px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(24,62,82,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '61px'],
            ["style", "top", '41px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '39px'],
            ["color", "border-color", 'rgb(122, 217, 249)'],
            ["style", "left", '635px'],
            ["style", "border-width", '3px']
         ],
         "${_Symbol_1}": [
            ["style", "top", '417px']
         ],
         "${_bg}": [
            ["style", "height", '628px'],
            ["style", "top", '-33px'],
            ["style", "left", '-45px'],
            ["style", "width", '1103px']
         ],
         "${_star10}": [
            ["style", "top", '192px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '910px'],
            ["style", "width", '40px']
         ],
         "${_Text}": [
            ["style", "font-size", '30px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(12,59,66,1)'],
            ["style", "font-family", 'baamini'],
            ["style", "left", '507px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star18}": [
            ["style", "top", '55px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '956px'],
            ["style", "width", '40px']
         ],
         "${_star16}": [
            ["style", "top", '145px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '956px'],
            ["style", "width", '40px']
         ],
         "${_bait}": [
            ["style", "top", '19px'],
            ["style", "height", '116px'],
            ["style", "left", '180px'],
            ["style", "width", '311px']
         ],
         "${_star2}": [
            ["style", "top", '101px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '815px'],
            ["style", "width", '40px']
         ],
         "${_star13}": [
            ["style", "top", '55px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '910px'],
            ["subproperty", "filter.saturate", '1']
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
            { id: "eid82", tween: [ "style", "${_hide}", "border-top-right-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid81", tween: [ "style", "${_hide}", "border-top-left-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid83", tween: [ "style", "${_hide}", "border-bottom-right-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "style", "${_r2}", "left", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_r3}", "left", '721px', { fromValue: '721px'}], position: 0, duration: 0 },
            { id: "eid109", tween: [ "transform", "${_r2}", "scaleX", '0.91729', { fromValue: '0.91729'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "transform", "${_r3}", "scaleX", '1.02', { fromValue: '1.02'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "style", "${_hide}", "border-bottom-left-radius", [10,10], { valueTemplate: '@@0@@px @@1@@px', fromValue: [10,10]}], position: 0, duration: 0 }         ]
      }
   }
},
"r1": {
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
      rect: ['0px','0px','133px','140px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [5,'rgb(255, 255, 255)','none'],
      type: 'rect',
      fill: ['rgba(37,224,72,0)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '140px'],
            ["style", "width", '133px']
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
"bottle1": {
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
      id: 'pond',
      type: 'image',
      rect: ['0px','0px','174px','161px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pond2.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f2'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f1'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f3'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f5'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f6'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f4'
   },
   {
      font: ['MyCustomFont2',51,'rgba(57,55,55,1)','bold','none','normal'],
      type: 'text',
      id: 'TextCopy8',
      text: 'x',
      align: 'left',
      rect: ['66px','70px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'f1',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f2',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f3',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f5',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f4',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f6',
      symbolName: 'Symbol_1_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_f2}": [
            ["style", "top", '60px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '-26deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '31px'],
            ["style", "display", 'none']
         ],
         "${_f6}": [
            ["style", "top", '-16px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-6px'],
            ["style", "display", 'none']
         ],
         "${_pond}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_TextCopy8}": [
            ["style", "top", '71px'],
            ["style", "font-family", 'MyCustomFont2'],
            ["style", "left", '69px'],
            ["color", "color", 'rgba(0,47,55,1.00)']
         ],
         "${_f5}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '51px'],
            ["style", "display", 'none']
         ],
         "${_f1}": [
            ["style", "top", '60px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-24px'],
            ["style", "display", 'none']
         ],
         "${_f4}": [
            ["style", "top", '25px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '-0.29007'],
            ["style", "opacity", '0.5'],
            ["style", "left", '5px'],
            ["style", "display", 'none']
         ],
         "${_f3}": [
            ["style", "top", '12px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-48px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '161px'],
            ["style", "width", '174px']
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
            { id: "eid475", tween: [ "style", "${_f1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid285", tween: [ "style", "${_f3}", "left", '-48px', { fromValue: '-48px'}], position: 0, duration: 0 },
            { id: "eid476", tween: [ "style", "${_f3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid253", tween: [ "transform", "${_f1}", "rotateZ", '5deg', { fromValue: '5deg'}], position: 0, duration: 0 },
            { id: "eid478", tween: [ "style", "${_f6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid456", tween: [ "style", "${_f1}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid259", tween: [ "transform", "${_f3}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid474", tween: [ "style", "${_f2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid469", tween: [ "style", "${_f5}", "left", '51px', { fromValue: '51px'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "style", "${_f1}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid234", tween: [ "transform", "${_f2}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_TextCopy8}", "left", '69px', { fromValue: '69px'}], position: 0, duration: 0 },
            { id: "eid275", tween: [ "transform", "${_f6}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid473", tween: [ "style", "${_f4}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_f5}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_TextCopy8}", "top", '71px', { fromValue: '71px'}], position: 0, duration: 0 },
            { id: "eid298", tween: [ "transform", "${_f4}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid465", tween: [ "style", "${_f3}", "top", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "style", "${_f4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid241", tween: [ "transform", "${_f2}", "rotateZ", '-26deg', { fromValue: '-26deg'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "color", "${_TextCopy8}", "color", 'rgba(0,47,55,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,47,55,1.00)'}], position: 0, duration: 0 },
            { id: "eid457", tween: [ "style", "${_f6}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "transform", "${_f3}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid453", tween: [ "style", "${_f2}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid463", tween: [ "style", "${_f2}", "left", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
            { id: "eid305", tween: [ "transform", "${_f4}", "scaleX", '-0.29007', { fromValue: '-0.29007'}], position: 0, duration: 0 },
            { id: "eid460", tween: [ "style", "${_f6}", "left", '-6px', { fromValue: '-6px'}], position: 0, duration: 0 },
            { id: "eid470", tween: [ "style", "${_f6}", "top", '-16px', { fromValue: '-16px'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "transform", "${_f3}", "rotateZ", '5deg', { fromValue: '5deg'}], position: 0, duration: 0 },
            { id: "eid472", tween: [ "style", "${_f4}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid266", tween: [ "transform", "${_f5}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid467", tween: [ "style", "${_f1}", "left", '-24px', { fromValue: '-24px'}], position: 0, duration: 0 },
            { id: "eid455", tween: [ "style", "${_f3}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid454", tween: [ "style", "${_f5}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid274", tween: [ "transform", "${_f6}", "rotateZ", '5deg', { fromValue: '5deg'}], position: 0, duration: 0 },
            { id: "eid479", tween: [ "style", "${_f5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid299", tween: [ "transform", "${_f4}", "rotateZ", '5deg', { fromValue: '5deg'}], position: 0, duration: 0 },
            { id: "eid267", tween: [ "transform", "${_f5}", "rotateZ", '5deg', { fromValue: '5deg'}], position: 0, duration: 0 },
            { id: "eid245", tween: [ "style", "${_f2}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid247", tween: [ "transform", "${_f1}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid452", tween: [ "style", "${_f4}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid249", tween: [ "transform", "${_f1}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid268", tween: [ "transform", "${_f5}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "transform", "${_f2}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid273", tween: [ "transform", "${_f6}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_1": {
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
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','1625px','185px','auto','auto'],
      fill: ['rgba(139,36,36,0.00)',[270,[['rgba(12,155,195,0.36)',1],['rgba(12,155,195,0.22)',13],['rgba(11,148,193,0.46)',46],['rgba(7,117,183,0.86)',100]]]]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '185px'],
            ["style", "width", '1625px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(139,36,36,0.00)'],
            ["style", "top", '0px'],
            ["gradient", "background-image", [270,[['rgba(12,155,195,0.36)',1],['rgba(12,155,195,0.22)',13],['rgba(11,148,193,0.46)',46],['rgba(7,117,183,0.86)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '1625px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2015,
         autoPlay: true,
         timeline: [
            { id: "eid84", tween: [ "style", "${_Rectangle}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle}", "top", '-7px', { fromValue: '0px'}], position: 0, duration: 2015 }         ]
      }
   }
},
"Symbol_1_1": {
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
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish4',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish42.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish5',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish52.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish6',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish62.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish7',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish72.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish8',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish82.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish9',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish92.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish10',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish102.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish11',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish112.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish12',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish122.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish13',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish132.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish14',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish142.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish15',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish152.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish16',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish162.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish17',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish172.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish18',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish182.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish19',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish192.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish20',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish202.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fish2fish8}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish14}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish20}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish12}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish5}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish18}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '121px'],
            ["style", "width", '175px']
         ],
         "${_fish2fish15}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish13}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish7}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish6}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish10}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish16}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish9}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish19}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish17}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish11}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ],
         "${_fish2fish4}": [
            ["style", "top", '-2px'],
            ["style", "left", '-1px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1130,
         autoPlay: true,
         labels: {
            "p": 200
         },
         timeline: [
            { id: "eid33", tween: [ "style", "${_fish2fish15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_fish2fish15}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid18", tween: [ "style", "${_fish2fish15}", "display", 'none', { fromValue: 'block'}], position: 820, duration: 0 },
            { id: "eid29", tween: [ "style", "${_fish2fish19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_fish2fish19}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid22", tween: [ "style", "${_fish2fish19}", "display", 'none', { fromValue: 'block'}], position: 1065, duration: 0 },
            { id: "eid31", tween: [ "style", "${_fish2fish17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_fish2fish17}", "display", 'block', { fromValue: 'none'}], position: 900, duration: 0 },
            { id: "eid20", tween: [ "style", "${_fish2fish17}", "display", 'none', { fromValue: 'block'}], position: 960, duration: 0 },
            { id: "eid34", tween: [ "style", "${_fish2fish14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_fish2fish14}", "display", 'block', { fromValue: 'none'}], position: 705, duration: 0 },
            { id: "eid17", tween: [ "style", "${_fish2fish14}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid36", tween: [ "style", "${_fish2fish12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_fish2fish12}", "display", 'block', { fromValue: 'none'}], position: 610, duration: 0 },
            { id: "eid15", tween: [ "style", "${_fish2fish12}", "display", 'none', { fromValue: 'block'}], position: 665, duration: 0 },
            { id: "eid38", tween: [ "style", "${_fish2fish10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_fish2fish10}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid13", tween: [ "style", "${_fish2fish10}", "display", 'none', { fromValue: 'block'}], position: 550, duration: 0 },
            { id: "eid32", tween: [ "style", "${_fish2fish16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_fish2fish16}", "display", 'block', { fromValue: 'none'}], position: 820, duration: 0 },
            { id: "eid19", tween: [ "style", "${_fish2fish16}", "display", 'none', { fromValue: 'block'}], position: 900, duration: 0 },
            { id: "eid37", tween: [ "style", "${_fish2fish11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_fish2fish11}", "display", 'block', { fromValue: 'none'}], position: 550, duration: 0 },
            { id: "eid14", tween: [ "style", "${_fish2fish11}", "display", 'none', { fromValue: 'block'}], position: 610, duration: 0 },
            { id: "eid27", tween: [ "style", "${_fish2fish5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_fish2fish5}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid8", tween: [ "style", "${_fish2fish5}", "display", 'none', { fromValue: 'block'}], position: 290, duration: 0 },
            { id: "eid28", tween: [ "style", "${_fish2fish20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "style", "${_fish2fish20}", "display", 'block', { fromValue: 'none'}], position: 1065, duration: 0 },
            { id: "eid5", tween: [ "style", "${_fish2fish20}", "display", 'none', { fromValue: 'block'}], position: 1130, duration: 0 },
            { id: "eid42", tween: [ "style", "${_fish2fish6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_fish2fish6}", "display", 'block', { fromValue: 'none'}], position: 290, duration: 0 },
            { id: "eid9", tween: [ "style", "${_fish2fish6}", "display", 'none', { fromValue: 'block'}], position: 340, duration: 0 },
            { id: "eid41", tween: [ "style", "${_fish2fish7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_fish2fish7}", "display", 'block', { fromValue: 'none'}], position: 340, duration: 0 },
            { id: "eid10", tween: [ "style", "${_fish2fish7}", "display", 'none', { fromValue: 'block'}], position: 390, duration: 0 },
            { id: "eid45", tween: [ "style", "${_fish2fish4}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_fish2fish4}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid40", tween: [ "style", "${_fish2fish8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid49", tween: [ "style", "${_fish2fish8}", "display", 'block', { fromValue: 'none'}], position: 390, duration: 0 },
            { id: "eid11", tween: [ "style", "${_fish2fish8}", "display", 'none', { fromValue: 'block'}], position: 450, duration: 0 },
            { id: "eid39", tween: [ "style", "${_fish2fish9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_fish2fish9}", "display", 'block', { fromValue: 'none'}], position: 450, duration: 0 },
            { id: "eid12", tween: [ "style", "${_fish2fish9}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid30", tween: [ "style", "${_fish2fish18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_fish2fish18}", "display", 'block', { fromValue: 'none'}], position: 960, duration: 0 },
            { id: "eid21", tween: [ "style", "${_fish2fish18}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid35", tween: [ "style", "${_fish2fish13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid54", tween: [ "style", "${_fish2fish13}", "display", 'block', { fromValue: 'none'}], position: 665, duration: 0 },
            { id: "eid16", tween: [ "style", "${_fish2fish13}", "display", 'none', { fromValue: 'block'}], position: 705, duration: 0 }         ]
      }
   }
},
"fishfront": {
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
      id: 'fishin',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto'],
      userClass: 'fishin'
   }],
   symbolInstances: [
   {
      id: 'fishin',
      symbolName: 'fishh'
   }   ]
   },
   states: {
      "Base State": {
         "${_fishin}": [
            ["motion", "location", '100px 48px']
         ],
         "${symbolSelector}": [
            ["style", "height", '96px'],
            ["style", "width", '200px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15587,
         autoPlay: true,
         labels: {
            "myrelease": 15018
         },
         timeline: [
            { id: "eid102", tween: [ "motion", "${_fishin}", [[190.01,17.01,0,0],[-59.86,77,-192.05,0,-306.41,0],[-301.93,-15,-212.28,0,-240.9,0],[-499.18,78,-212.68,0,-209.95,0],[-714.46,19,-614.89,-228,-160.64,-59.57],[-1145.33,127.33,0,0]]], position: 38, duration: 14961 },
            { id: "eid115", tween: [ "motion", "${_fishin}", [[-1145.33,127.33,0,0],[-1249.53,77.21,-57.91,-82.85,-81.84,-117.09],[-1241.32,-9.98,0,0]]], position: 15014, duration: 573 }         ]
      }
   }
},
"fishh": {
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
      rect: ['112px','8px','142px','79px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['100px','44px','11px','11px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse3',
      stroke: [2,'rgba(162,157,157,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(223,231,224,1.00)']
   },
   {
      id: 'fish00013',
      type: 'image',
      rect: ['0px','0px','200px','96px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/fish/fish0001.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00023',
      fill: ['rgba(0,0,0,0)','images/fish/fish0002.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00032',
      fill: ['rgba(0,0,0,0)','images/fish/fish0003.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00042',
      fill: ['rgba(0,0,0,0)','images/fish/fish0004.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00052',
      fill: ['rgba(0,0,0,0)','images/fish/fish0005.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00062',
      fill: ['rgba(0,0,0,0)','images/fish/fish0006.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00072',
      fill: ['rgba(0,0,0,0)','images/fish/fish0007.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00082',
      fill: ['rgba(0,0,0,0)','images/fish/fish0008.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00092',
      fill: ['rgba(0,0,0,0)','images/fish/fish0009.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00093',
      fill: ['rgba(0,0,0,0)','images/fish/fish0009.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00112',
      fill: ['rgba(0,0,0,0)','images/fish/fish0011.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00122',
      fill: ['rgba(0,0,0,0)','images/fish/fish0012.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00132',
      fill: ['rgba(0,0,0,0)','images/fish/fish0013.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00142',
      fill: ['rgba(0,0,0,0)','images/fish/fish0014.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00152',
      fill: ['rgba(0,0,0,0)','images/fish/fish0015.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00172',
      fill: ['rgba(0,0,0,0)','images/fish/fish0017.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00182',
      fill: ['rgba(0,0,0,0)','images/fish/fish0018.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00192',
      fill: ['rgba(0,0,0,0)','images/fish/fish0019.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','200px','96px','auto','auto'],
      id: 'fish00202',
      fill: ['rgba(0,0,0,0)','images/fish/fish0020.png','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [5,'rgb(255, 255, 255)','none'],
      rect: ['5px','6px','87px','55px','auto','auto'],
      fill: ['rgba(37,224,72,0.00)']
   },
   {
      userClass: 'ques_txt',
      rect: ['108px','34px','112px','36px','auto','auto'],
      type: 'text',
      align: 'center',
      id: 'ques_txt',
      text: 'm',
      font: ['MyCustomFont2',23,'rgba(255,255,255,1)','bold','none','normal'],
      transform: []
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fish00112}": [
            ["style", "display", 'none']
         ],
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(37,224,72,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '5px'],
            ["style", "width", '115px'],
            ["style", "top", '15px'],
            ["style", "display", 'block'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '63px'],
            ["style", "left", '99px']
         ],
         "${_fish00062}": [
            ["style", "display", 'none']
         ],
         "${_fish00122}": [
            ["style", "display", 'none']
         ],
         "${_fish00082}": [
            ["style", "display", 'none']
         ],
         "${_fish00032}": [
            ["style", "display", 'none']
         ],
         "${_fish00202}": [
            ["style", "display", 'none']
         ],
         "${_Ellipse3}": [
            ["color", "background-color", 'rgba(223,231,224,1.00)'],
            ["style", "top", '44px'],
            ["color", "border-color", 'rgba(162,157,157,1.00)'],
            ["style", "left", '100px'],
            ["style", "border-width", '2px']
         ],
         "${_fish00132}": [
            ["style", "display", 'none']
         ],
         "${_fish00172}": [
            ["style", "display", 'none']
         ],
         "${_fish00182}": [
            ["style", "display", 'none']
         ],
         "${_fish00052}": [
            ["style", "display", 'none']
         ],
         "${_fish00192}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '96px'],
            ["style", "overflow", 'visible'],
            ["style", "width", '200px']
         ],
         "${_fish00152}": [
            ["style", "display", 'none']
         ],
         "${_fish00093}": [
            ["style", "display", 'none']
         ],
         "${_fish00023}": [
            ["style", "display", 'none']
         ],
         "${_ques_txt}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "line-height", '31px'],
            ["transform", "scaleY", '1'],
            ["style", "top", '34px'],
            ["style", "height", '36px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '108px'],
            ["style", "font-size", '23px']
         ],
         "${_fish00092}": [
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["style", "min-width", '0px'],
            ["style", "height", '38px'],
            ["transform", "scaleX", '1'],
            ["style", "top", '34px'],
            ["style", "left", '92px'],
            ["style", "width", '125px']
         ],
         "${_fish00142}": [
            ["style", "display", 'none']
         ],
         "${_Rectangle2}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(37,224,72,0.00)'],
            ["style", "height", '55px'],
            ["style", "border-style", 'none'],
            ["style", "left", '5px'],
            ["style", "width", '87px']
         ],
         "${_fish00042}": [
            ["style", "display", 'none']
         ],
         "${_fish00072}": [
            ["style", "display", 'none']
         ],
         "${_fish00013}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 915,
         autoPlay: true,
         timeline: [
            { id: "eid30", tween: [ "style", "${_fish00093}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_fish00093}", "display", 'block', { fromValue: 'none'}], position: 445, duration: 0 },
            { id: "eid32", tween: [ "style", "${_fish00093}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid11", tween: [ "style", "${_fish00042}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_fish00042}", "display", 'block', { fromValue: 'none'}], position: 155, duration: 0 },
            { id: "eid14", tween: [ "style", "${_fish00042}", "display", 'none', { fromValue: 'block'}], position: 205, duration: 0 },
            { id: "eid46", tween: [ "style", "${_fish00152}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_fish00152}", "display", 'block', { fromValue: 'none'}], position: 675, duration: 0 },
            { id: "eid49", tween: [ "style", "${_fish00152}", "display", 'none', { fromValue: 'block'}], position: 725, duration: 0 },
            { id: "eid67", tween: [ "style", "${_Ellipse2}", "border-width", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid36", tween: [ "style", "${_fish00122}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_fish00122}", "display", 'block', { fromValue: 'none'}], position: 550, duration: 0 },
            { id: "eid38", tween: [ "style", "${_fish00122}", "display", 'none', { fromValue: 'block'}], position: 585, duration: 0 },
            { id: "eid27", tween: [ "style", "${_fish00092}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_fish00092}", "display", 'block', { fromValue: 'none'}], position: 395, duration: 0 },
            { id: "eid29", tween: [ "style", "${_fish00092}", "display", 'none', { fromValue: 'block'}], position: 445, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Ellipse2}", "height", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid71", tween: [ "style", "${_Ellipse2}", "width", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Ellipse2}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_fish00202}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "style", "${_fish00202}", "display", 'block', { fromValue: 'none'}], position: 875, duration: 0 },
            { id: "eid77", tween: [ "color", "${_Ellipse2}", "border-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_fish00072}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_fish00072}", "display", 'block', { fromValue: 'none'}], position: 295, duration: 0 },
            { id: "eid23", tween: [ "style", "${_fish00072}", "display", 'none', { fromValue: 'block'}], position: 345, duration: 0 },
            { id: "eid54", tween: [ "style", "${_fish00182}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_fish00182}", "display", 'block', { fromValue: 'none'}], position: 760, duration: 0 },
            { id: "eid56", tween: [ "style", "${_fish00182}", "display", 'none', { fromValue: 'block'}], position: 845, duration: 0 },
            { id: "eid65", tween: [ "style", "${_Ellipse2}", "display", 'none', { fromValue: 'block'}], position: 915, duration: 0 },
            { id: "eid6", tween: [ "style", "${_fish00023}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_fish00023}", "display", 'block', { fromValue: 'none'}], position: 55, duration: 0 },
            { id: "eid10", tween: [ "style", "${_fish00023}", "display", 'none', { fromValue: 'block'}], position: 100, duration: 0 },
            { id: "eid39", tween: [ "style", "${_fish00132}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_fish00132}", "display", 'block', { fromValue: 'none'}], position: 585, duration: 0 },
            { id: "eid41", tween: [ "style", "${_fish00132}", "display", 'none', { fromValue: 'block'}], position: 625, duration: 0 },
            { id: "eid50", tween: [ "style", "${_fish00172}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_fish00172}", "display", 'block', { fromValue: 'none'}], position: 725, duration: 0 },
            { id: "eid53", tween: [ "style", "${_fish00172}", "display", 'none', { fromValue: 'block'}], position: 780, duration: 0 },
            { id: "eid76", tween: [ "color", "${_Ellipse2}", "background-color", 'rgba(37,224,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(37,224,72,1.00)'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_fish00082}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "style", "${_fish00082}", "display", 'block', { fromValue: 'none'}], position: 345, duration: 0 },
            { id: "eid26", tween: [ "style", "${_fish00082}", "display", 'none', { fromValue: 'block'}], position: 395, duration: 0 },
            { id: "eid57", tween: [ "style", "${_fish00192}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid58", tween: [ "style", "${_fish00192}", "display", 'block', { fromValue: 'none'}], position: 845, duration: 0 },
            { id: "eid59", tween: [ "style", "${_fish00192}", "display", 'none', { fromValue: 'block'}], position: 885, duration: 0 },
            { id: "eid5", tween: [ "style", "${_fish00013}", "display", 'none', { fromValue: 'block'}], position: 55, duration: 0 },
            { id: "eid33", tween: [ "style", "${_fish00112}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "style", "${_fish00112}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid35", tween: [ "style", "${_fish00112}", "display", 'none', { fromValue: 'block'}], position: 550, duration: 0 },
            { id: "eid18", tween: [ "style", "${_fish00062}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_fish00062}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid20", tween: [ "style", "${_fish00062}", "display", 'none', { fromValue: 'block'}], position: 295, duration: 0 },
            { id: "eid8", tween: [ "style", "${_fish00032}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_fish00032}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0 },
            { id: "eid13", tween: [ "style", "${_fish00032}", "display", 'none', { fromValue: 'block'}], position: 155, duration: 0 },
            { id: "eid15", tween: [ "style", "${_fish00052}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid16", tween: [ "style", "${_fish00052}", "display", 'block', { fromValue: 'none'}], position: 205, duration: 0 },
            { id: "eid17", tween: [ "style", "${_fish00052}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid42", tween: [ "style", "${_fish00142}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_fish00142}", "display", 'block', { fromValue: 'none'}], position: 625, duration: 0 },
            { id: "eid45", tween: [ "style", "${_fish00142}", "display", 'none', { fromValue: 'block'}], position: 675, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Ellipse2}", "left", '99px', { fromValue: '99px'}], position: 0, duration: 0 }         ]
      }
   }
},
"bottle3": {
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
      id: 'pondCopy2',
      type: 'image',
      rect: ['38px','9px','174px','161px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pond2.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f13'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f14'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f16'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f18'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f17'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f15'
   },
   {
      font: ['MyCustomFont2',51,'rgba(57,55,55,1)','bold','none','normal'],
      type: 'text',
      id: 'TextCopy6',
      text: 'xs',
      align: 'left',
      rect: ['112px','79px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'f13',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f18',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f17',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f16',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f15',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f14',
      symbolName: 'Symbol_1_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_f17}": [
            ["style", "top", '-3px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-10px'],
            ["style", "display", 'none']
         ],
         "${_f13}": [
            ["style", "top", '60px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '-26deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '26px'],
            ["style", "display", 'none']
         ],
         "${_pondCopy2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_f14}": [
            ["style", "top", '58px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-23px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '161px'],
            ["style", "width", '174px']
         ],
         "${_f18}": [
            ["style", "top", '9px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '42px'],
            ["style", "display", 'none']
         ],
         "${_f15}": [
            ["style", "top", '28px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '-0.29007'],
            ["style", "opacity", '0.5'],
            ["style", "left", '4px'],
            ["style", "display", 'none']
         ],
         "${_TextCopy6}": [
            ["style", "top", '71px'],
            ["style", "font-family", 'MyCustomFont2'],
            ["style", "left", '51px'],
            ["color", "color", 'rgba(0,47,55,1.00)']
         ],
         "${_f16}": [
            ["style", "top", '20px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-48px'],
            ["style", "display", 'none']
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
            { id: "eid216", tween: [ "style", "${_pondCopy2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_TextCopy6}", "top", '71px', { fromValue: '71px'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "color", "${_TextCopy6}", "color", 'rgba(0,47,55,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,47,55,1.00)'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_TextCopy6}", "left", '51px', { fromValue: '51px'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_f13}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid413", tween: [ "style", "${_f16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid448", tween: [ "style", "${_f17}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid415", tween: [ "style", "${_f13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid213", tween: [ "style", "${_pondCopy2}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid450", tween: [ "style", "${_f16}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid446", tween: [ "style", "${_f18}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid447", tween: [ "style", "${_f14}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid410", tween: [ "style", "${_f15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid409", tween: [ "style", "${_f14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid451", tween: [ "style", "${_f15}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid412", tween: [ "style", "${_f18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid411", tween: [ "style", "${_f17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"bottle2": {
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
      id: 'pondCopy',
      type: 'image',
      rect: ['0px','0px','174px','161px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pond2.png','0px','0px']
   },
   {
      font: ['MyCustomFont2',51,'rgba(57,55,55,1)','bold','none','normal'],
      type: 'text',
      id: 'TextCopy7',
      text: 'X',
      align: 'center',
      rect: ['64px','70px','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f7'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f8'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f10'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f12'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f11'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['147','174','auto','auto','auto','auto'],
      id: 'f9'
   }],
   symbolInstances: [
   {
      id: 'f11',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f10',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f12',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f7',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f8',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f9',
      symbolName: 'Symbol_1_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_f8}": [
            ["style", "top", '58px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-23px'],
            ["style", "display", 'none']
         ],
         "${_f11}": [
            ["style", "top", '-3px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-10px'],
            ["style", "display", 'none']
         ],
         "${_f10}": [
            ["style", "top", '20px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-48px'],
            ["style", "display", 'none']
         ],
         "${_pondCopy}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_f12}": [
            ["style", "top", '9px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '42px'],
            ["style", "display", 'none']
         ],
         "${_f9}": [
            ["style", "top", '28px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '-0.29007'],
            ["style", "opacity", '0.5'],
            ["style", "left", '4px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '161px'],
            ["style", "width", '174px']
         ],
         "${_f7}": [
            ["style", "top", '60px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '-26deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '26px'],
            ["style", "display", 'none']
         ],
         "${_TextCopy}": [
            ["style", "top", '70px'],
            ["style", "font-family", 'MyCustomFont2'],
            ["style", "left", '61px'],
            ["color", "color", 'rgba(0,47,55,1.00)']
         ],
         "${_TextCopy7}": [
            ["style", "top", '70px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,47,55,1.00)'],
            ["style", "font-family", 'MyCustomFont2'],
            ["style", "left", '67px']
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
            { id: "eid426", tween: [ "style", "${_f12}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid433", tween: [ "style", "${_f7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid423", tween: [ "style", "${_f10}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "color", "${_TextCopy7}", "color", 'rgba(0,47,55,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,47,55,1.00)'}], position: 0, duration: 0 },
            { id: "eid424", tween: [ "style", "${_f7}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid430", tween: [ "style", "${_f9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid432", tween: [ "style", "${_f8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid428", tween: [ "style", "${_f12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid429", tween: [ "style", "${_f11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid427", tween: [ "style", "${_f11}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid425", tween: [ "style", "${_f9}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid121", tween: [ "style", "${_TextCopy7}", "left", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
            { id: "eid422", tween: [ "style", "${_f8}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid431", tween: [ "style", "${_f10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-13970204");
