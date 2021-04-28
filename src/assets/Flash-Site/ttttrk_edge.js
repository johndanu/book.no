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
            rect:['0px','0px','1370px','940px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px'],
            transform:[[],[],[],['1','1.34043']]
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
            transform:[[],[],[],['1','0.88082']],
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
               rect:['46.8%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['46.3%','37.2%','52.6%','14.8%','auto','auto'],
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
            id:'menu_sorkal',
            type:'image',
            rect:['20px','-628px','249px','605px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"sorkal.png",'0px','0px']
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
            rect:['221px','2px','1110px','840px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_wrapper.png",'0px','0px']
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
            rect:['439px','127px','793px','17px','auto','auto'],
            text:"glq;fSk; tpLgl;l vOj;Jf;fis ,izj;jy;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',35,"rgba(253,123,22,1.00)","800","none","normal"]
         },
         {
            id:'home',
            type:'image',
            rect:['296px','46px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
         },
         {
            id:'fct',
            type:'group',
            rect:['74px','827px','227','28','auto','auto'],
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
            rect:['272','222','auto','auto','auto','auto']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['308px','829px','974px','144px','auto','auto'],
            fill:["rgba(44,185,225,1.00)"],
            stroke:[5,"rgb(255, 255, 255)","none"]
         },
         {
            id:'RoundRect3',
            type:'rect',
            rect:['272px','797px','1010px','32px','auto','auto'],
            fill:["rgba(255,255,255,1)"],
            stroke:[5,"rgb(255, 255, 255)","none"]
         }],
         symbolInstances: [
         {
            id:'pupils',
            symbolName:'pupils'
         },
         {
            id:'gameStage',
            symbolName:'Symbol_2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1.34043'],
            ["style", "height", '940px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1370px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(44,185,225,0.00)'],
            ["gradient", "background-image", [0,[['rgba(81,199,233,1.00)',0],['rgba(44,185,225,1.00)',100]]]],
            ["style", "width", '974px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.43%'],
            ["style", "height", '102.6%'],
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
            ["style", "top", '46px'],
            ["style", "height", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '296px'],
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
            ["style", "font-weight", 'bold'],
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
            ["style", "left", '46.83%'],
            ["style", "width", '60.47%']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_fct}": [
            ["style", "display", 'block'],
            ["style", "left", '74px'],
            ["style", "top", '827px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_RoundRect3}": [
            ["style", "top", '797px'],
            ["style", "height", '32px'],
            ["style", "left", '272px'],
            ["style", "width", '1010px']
         ],
         "${_menu_wrapper}": [
            ["style", "top", '2px'],
            ["style", "height", '840px'],
            ["style", "left", '221px'],
            ["style", "width", '1110px']
         ],
         "${_logo_batch}": [
            ["style", "opacity", '1'],
            ["style", "left", '3.66%'],
            ["transform", "scaleY", '0.88082']
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
         "${_pa_small}": [
            ["style", "top", '108px'],
            ["style", "left", '301px'],
            ["style", "display", 'none']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "width", '52.64%'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '14.75%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.28%'],
            ["style", "font-size", '10px']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '439px'],
            ["style", "font-size", '35px'],
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["style", "height", '17px'],
            ["style", "opacity", '1'],
            ["style", "width", '793px']
         ],
         "${_cloud1}": [
            ["style", "height", '258px'],
            ["style", "top", '-118px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_answrd2Copy2}": [
            ["style", "top", '165px'],
            ["style", "height", '132px'],
            ["style", "width", 'auto'],
            ["style", "left", '-4px'],
            ["style", "font-size", '45px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '860px'],
            ["style", "width", '1366px']
         ],
         "${_fct_logo}": [
            ["style", "height", '28px'],
            ["style", "top", '0px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
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
            "greet": 125,
            "star": 233
         },
         timeline: [
            { id: "eid1", tween: [ "style", "${_pa_small}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid316", tween: [ "gradient", "${_Rectangle2}", "background-image", [0,[['rgba(81,199,233,1.00)',0],['rgba(44,185,225,1.00)',100]]], { fromValue: [0,[['rgba(81,199,233,1.00)',0],['rgba(44,185,225,1.00)',100]]]}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 56, duration: 0 },
            { id: "eid317", tween: [ "color", "${_Rectangle2}", "background-color", 'rgba(44,185,225,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(44,185,225,0.00)'}], position: 0, duration: 0 }         ]
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
            { id: "eid102", tween: [ "motion", "${_fishin}", [[190.01,17.01,0,0],[-59.86,77,-192.05,0,-306.41,0],[-301.93,-15,-212.28,0,-240.9,0],[-499.18,78,-212.68,0,-209.95,0],[-636.46,42,-420.32,-147.93,-161.61,-56.88],[-832.25,164.97,0,0]]], position: 38, duration: 10930 },
            { id: "eid310", tween: [ "motion", "${_fishin}", [[-832.25,164.97,-543.33,-49.75],[-1145.33,127.33,0,0]]], position: 10968, duration: 4031 },
            { id: "eid115", tween: [ "motion", "${_fishin}", [[-1145.33,127.33,0,0],[-1249.53,77.21,-57.91,-82.85,-81.84,-117.09],[-1216.32,144.02,0,0]]], position: 15014, duration: 573 }         ]
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
      type: 'text',
      rect: ['108px','34px','112px','36px','auto','auto'],
      align: 'center',
      userClass: 'ques_txt',
      id: 'ques_txt',
      text: 'm',
      transform: [],
      font: ['baminiplain, Arial, sans-serif',28,'rgba(255,255,255,1)','bold','none','normal']
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
         "${_fish00072}": [
            ["style", "display", 'none']
         ],
         "${_fish00202}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '96px'],
            ["style", "width", '200px']
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
         "${_Ellipse3}": [
            ["color", "background-color", 'rgba(223,231,224,1.00)'],
            ["style", "top", '44px'],
            ["color", "border-color", 'rgba(162,157,157,1.00)'],
            ["style", "left", '100px'],
            ["style", "border-width", '2px']
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
            ["style", "top", '34px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '36px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "left", '108px'],
            ["style", "font-size", '28px']
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
         "${_fish00032}": [
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
            { id: "eid33", tween: [ "style", "${_fish00112}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "style", "${_fish00112}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid35", tween: [ "style", "${_fish00112}", "display", 'none', { fromValue: 'block'}], position: 550, duration: 0 },
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
            { id: "eid70", tween: [ "style", "${_Ellipse2}", "height", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "style", "${_fish00092}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_fish00092}", "display", 'block', { fromValue: 'none'}], position: 395, duration: 0 },
            { id: "eid29", tween: [ "style", "${_fish00092}", "display", 'none', { fromValue: 'block'}], position: 445, duration: 0 },
            { id: "eid71", tween: [ "style", "${_Ellipse2}", "width", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Ellipse2}", "top", '15px', { fromValue: '15px'}], position: 0, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Ellipse2}", "left", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "color", "${_Ellipse2}", "border-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_fish00072}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_fish00072}", "display", 'block', { fromValue: 'none'}], position: 295, duration: 0 },
            { id: "eid23", tween: [ "style", "${_fish00072}", "display", 'none', { fromValue: 'block'}], position: 345, duration: 0 },
            { id: "eid65", tween: [ "style", "${_Ellipse2}", "display", 'none', { fromValue: 'block'}], position: 915, duration: 0 },
            { id: "eid54", tween: [ "style", "${_fish00182}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_fish00182}", "display", 'block', { fromValue: 'none'}], position: 760, duration: 0 },
            { id: "eid56", tween: [ "style", "${_fish00182}", "display", 'none', { fromValue: 'block'}], position: 845, duration: 0 },
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
            { id: "eid30", tween: [ "style", "${_fish00093}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_fish00093}", "display", 'block', { fromValue: 'none'}], position: 445, duration: 0 },
            { id: "eid32", tween: [ "style", "${_fish00093}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
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
            { id: "eid60", tween: [ "style", "${_fish00202}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "style", "${_fish00202}", "display", 'block', { fromValue: 'none'}], position: 875, duration: 0 }         ]
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
      fill: ['rgba(0,0,0,0)','images/fish2fish4.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish5',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish5.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish6',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish6.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish7',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish7.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish8',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish8.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish9',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish9.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish10',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish10.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish11',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish11.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish12',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish12.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish13',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish13.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish14',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish14.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish15',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish15.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish16',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish16.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish17',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish17.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish18',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish18.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish19',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish19.png','0px','0px']
   },
   {
      rect: ['-1px','-2px','175px','121px','auto','auto'],
      id: 'fish2fish20',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/fish2fish20.png','0px','0px']
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
         "${_fish2fish19}": [
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
         "${_fish2fish4}": [
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
         "${_fish2fish14}": [
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
         "${_fish2fish13}": [
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
      fill: ['rgba(0,0,0,0)','images/pond.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f13',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f14',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f16',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f18',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f17',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f15',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      font: ['baminiplain, Arial, sans-serif',51,'rgba(57,55,55,1)','bold','none','normal'],
      type: 'text',
      id: 'TextCopy6',
      text: ',',
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
            ["style", "top", '70px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "left", '59px'],
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
            { id: "eid212", tween: [ "style", "${_TextCopy6}", "top", '70px', { fromValue: '70px'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "color", "${_TextCopy6}", "color", 'rgba(0,47,55,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,47,55,1.00)'}], position: 0, duration: 0 },
            { id: "eid308", tween: [ "style", "${_TextCopy6}", "left", '59px', { fromValue: '59px'}], position: 0, duration: 0 },
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
      id: 'pond',
      type: 'image',
      rect: ['0px','0px','174px','161px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pond.png','0px','0px']
   },
   {
      font: ['baminiplain, Arial, sans-serif',51,'rgba(57,55,55,1)','bold','none','normal'],
      type: 'text',
      id: 'TextCopy7',
      text: 'M',
      align: 'left',
      rect: ['64px','70px','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f7',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f8',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f10',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f12',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f11',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f9',
      rect: ['147','174','auto','auto','auto','auto']
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
         "${_pond}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
         "${_f7}": [
            ["style", "top", '60px'],
            ["transform", "scaleY", '0.34986'],
            ["transform", "rotateZ", '-26deg'],
            ["transform", "scaleX", '0.34986'],
            ["style", "opacity", '0.5'],
            ["style", "left", '26px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '161px'],
            ["style", "width", '174px']
         ],
         "${_TextCopy7}": [
            ["style", "top", '70px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "left", '54px'],
            ["color", "color", 'rgba(0,47,55,1.00)']
         ],
         "${_TextCopy}": [
            ["style", "top", '70px'],
            ["style", "font-family", 'MyCustomFont2'],
            ["style", "left", '61px'],
            ["color", "color", 'rgba(0,47,55,1.00)']
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
            { id: "eid309", tween: [ "style", "${_TextCopy7}", "left", '54px', { fromValue: '54px'}], position: 0, duration: 0 },
            { id: "eid422", tween: [ "style", "${_f8}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid431", tween: [ "style", "${_f10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
      fill: ['rgba(0,0,0,0)','images/pond.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f2',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f1',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f3',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f5',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f6',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'f4',
      rect: ['147','174','auto','auto','auto','auto']
   },
   {
      font: ['baminiplain, Arial, sans-serif',51,'rgba(57,55,55,1)','bold','none','normal'],
      type: 'text',
      id: 'TextCopy8',
      text: 'm',
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
            ["style", "top", '70px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "left", '58px'],
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
            { id: "eid452", tween: [ "style", "${_f4}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid249", tween: [ "transform", "${_f1}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid259", tween: [ "transform", "${_f3}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid474", tween: [ "style", "${_f2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid469", tween: [ "style", "${_f5}", "left", '51px', { fromValue: '51px'}], position: 0, duration: 0 },
            { id: "eid305", tween: [ "transform", "${_f4}", "scaleX", '-0.29007', { fromValue: '-0.29007'}], position: 0, duration: 0 },
            { id: "eid257", tween: [ "transform", "${_f3}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid307", tween: [ "style", "${_TextCopy8}", "left", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid275", tween: [ "transform", "${_f6}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid473", tween: [ "style", "${_f4}", "top", '25px', { fromValue: '25px'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_f5}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid298", tween: [ "transform", "${_f4}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid465", tween: [ "style", "${_f3}", "top", '12px', { fromValue: '12px'}], position: 0, duration: 0 },
            { id: "eid273", tween: [ "transform", "${_f6}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid241", tween: [ "transform", "${_f2}", "rotateZ", '-26deg', { fromValue: '-26deg'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "color", "${_TextCopy8}", "color", 'rgba(0,47,55,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,47,55,1.00)'}], position: 0, duration: 0 },
            { id: "eid457", tween: [ "style", "${_f6}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid234", tween: [ "transform", "${_f2}", "scaleY", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid453", tween: [ "style", "${_f2}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid463", tween: [ "style", "${_f2}", "left", '31px', { fromValue: '31px'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "style", "${_f1}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid460", tween: [ "style", "${_f6}", "left", '-6px', { fromValue: '-6px'}], position: 0, duration: 0 },
            { id: "eid470", tween: [ "style", "${_f6}", "top", '-16px', { fromValue: '-16px'}], position: 0, duration: 0 },
            { id: "eid268", tween: [ "transform", "${_f5}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
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
            { id: "eid258", tween: [ "transform", "${_f3}", "rotateZ", '5deg', { fromValue: '5deg'}], position: 0, duration: 0 },
            { id: "eid478", tween: [ "style", "${_f6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid456", tween: [ "style", "${_f1}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "transform", "${_f2}", "scaleX", '0.34986', { fromValue: '0.34986'}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "style", "${_f4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"gameArea": {
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
      rect: ['0px','0px','1010px','575px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'bg',
      type: 'image',
      rect: ['-45px','-33px','1103px','628px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg.png','0px','0px']
   },
   {
      id: 'ship4',
      type: 'image',
      rect: ['-299px','206px','620px','255px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ship2.png','0px','0px']
   },
   {
      id: 'waterCopy',
      type: 'rect',
      rect: ['-216','397','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'waterCopy',
      symbolName: 'Symbol_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_bg}": [
            ["style", "top", '-33px'],
            ["style", "height", '628px'],
            ["style", "left", '-45px'],
            ["style", "width", '1103px']
         ],
         "${_waterCopy}": [
            ["transform", "scaleX", '0.96214'],
            ["style", "left", '-230px'],
            ["transform", "scaleY", '0.96214'],
            ["style", "top", '424px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '575px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '1010px']
         ],
         "${_ship4}": [
            ["style", "top", '206px'],
            ["style", "height", '255px'],
            ["style", "left", '-299px'],
            ["style", "width", '620px']
         ],
         "${symbolSelector}": [
            ["style", "height", '575px'],
            ["style", "width", '1010px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 112,
         autoPlay: true,
         timeline: [
            { id: "eid214", tween: [ "style", "${_waterCopy}", "left", '-230px', { fromValue: '-230px'}], position: 112, duration: 0 },
            { id: "eid210", tween: [ "transform", "${_waterCopy}", "scaleX", '0.96214', { fromValue: '0.96214'}], position: 112, duration: 0 },
            { id: "eid215", tween: [ "style", "${_waterCopy}", "top", '424px', { fromValue: '424px'}], position: 112, duration: 0 },
            { id: "eid211", tween: [ "transform", "${_waterCopy}", "scaleY", '0.96214', { fromValue: '0.96214'}], position: 112, duration: 0 }         ]
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
      rect: ['0px','0px','1625px','185px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
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
      fill: ['rgba(0,0,0,0)','images/man.png','0px','0px']
   },
   {
      rect: ['-167px','-58px','263px','218px','auto','auto'],
      id: 'cap',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/cap.png','0px','0px']
   },
   {
      rect: ['-152px','-46px','249px','209px','auto','auto'],
      id: 'cap2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/cap2.png','0px','0px']
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
"Symbol_2": {
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
      id: 'gameArea',
      type: 'rect',
      rect: ['-177px','-132px','auto','auto','auto','auto']
   },
   {
      id: 'man2',
      type: 'rect',
      rect: ['-196px','-88px','auto','auto','auto','auto']
   },
   {
      rect: ['820px','194px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star0',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['820px','147px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star1',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['820px','102px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star2',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['820px','57px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star3',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['820px','12px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star4',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['870px','194px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star5',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['870px','147px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star6',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['870px','102px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star7',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['870px','57px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star8',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['870px','12px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star9',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['915px','193px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star10',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['915px','146px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star11',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['915px','101px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star12',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['915px','56px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star13',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['915px','11px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star14',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['961px','193px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star15',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['961px','146px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star16',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['961px','101px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star17',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['961px','56px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star18',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      rect: ['961px','11px','40px','39px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'star19',
      opacity: 0.25,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/star4.png','0px','0px']
   },
   {
      id: 'f6Copy5',
      type: 'rect',
      rect: ['-125px','-48px','auto','auto','auto','auto']
   },
   {
      id: 'f6Copy4',
      type: 'rect',
      rect: ['-125px','-48px','auto','auto','auto','auto']
   },
   {
      id: 'f6Copy3',
      type: 'rect',
      rect: ['-125px','-48px','auto','auto','auto','auto']
   },
   {
      id: 'bottle1',
      type: 'rect',
      rect: ['52px','27px','auto','auto','auto','auto']
   },
   {
      id: 'bottle2',
      type: 'rect',
      rect: ['236px','27px','auto','auto','auto','auto']
   },
   {
      id: 'bottle3',
      type: 'rect',
      rect: ['419px','27px','auto','auto','auto','auto']
   },
   {
      id: 'fishfront2',
      type: 'rect',
      rect: ['192px','220px','auto','auto','auto','auto'],
      userClass: 'fish'
   },
   {
      font: ['baminiplain, Arial, sans-serif',30,'rgba(12,59,66,1.00)','700','none',''],
      type: 'text',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'TextCopy',
      text: 'kjpg;Gfs;',
      cursor: ['pointer'],
      rect: ['513px','50px','122px','39px','auto','auto']
   },
   {
      rect: ['655px','42px','61px','39px','auto','auto'],
      borderRadius: ['5px 5px','5px 5px','5px 5px','5px 5px'],
      id: 'RoundRectCopy',
      stroke: [3,'rgba(122,217,249,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(24,62,82,1.00)']
   },
   {
      id: 'r1',
      type: 'rect',
      rect: ['73px','-107px','auto','auto','auto','auto']
   },
   {
      id: 'r2',
      type: 'rect',
      rect: ['73px','-107px','auto','auto','auto','auto']
   },
   {
      id: 'r3',
      type: 'rect',
      rect: ['73px','-107px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',30,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'mark',
      text: '00',
      cursor: ['pointer'],
      rect: ['663px','45px','52px','39px','auto','auto']
   },
   {
      rect: ['1098px','459px','220px','116px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'startposCopy2',
      stroke: [5,'rgb(255, 255, 255)','none'],
      type: 'rect',
      fill: ['rgba(70,201,95,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [5,'rgb(255, 255, 255)','none'],
      rect: ['1010px','390px','87px','248px','auto','auto'],
      fill: ['rgba(44,185,225,1.00)']
   },
   {
      rect: ['1010px','369px','36px','200px','auto','auto'],
      borderRadius: ['10px','0px','10px','10px'],
      id: 'RoundRect',
      stroke: [5,'rgb(255, 255, 255)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['1010px','550px','36px','57px','auto','auto'],
      borderRadius: ['10px','10px','20px 20px','0px'],
      id: 'RoundRect2',
      stroke: [5,'rgb(255, 255, 255)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      userClass: 'bite',
      id: 'bait',
      type: 'image',
      rect: ['185px','20px','311px','116px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bait-012.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'f6Copy5',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'gameArea',
      symbolName: 'gameArea'
   },
   {
      id: 'bottle1',
      symbolName: 'bottle1'
   },
   {
      id: 'bottle2',
      symbolName: 'bottle2'
   },
   {
      id: 'f6Copy4',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'f6Copy3',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'bottle3',
      symbolName: 'bottle3'
   },
   {
      id: 'man2',
      symbolName: 'man'
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
            ["style", "left", '172px'],
            ["style", "top", '127px']
         ],
         "${_f6Copy4}": [
            ["style", "top", '432px'],
            ["transform", "scaleY", '0.23743'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.23743'],
            ["style", "opacity", '1'],
            ["style", "left", '444px']
         ],
         "${_bait}": [
            ["style", "height", '116px'],
            ["style", "top", '20px'],
            ["style", "left", '185px'],
            ["style", "width", '311px']
         ],
         "${_star15}": [
            ["style", "top", '193px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '961px'],
            ["style", "width", '40px']
         ],
         "${_star6}": [
            ["style", "top", '147px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '870px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star4}": [
            ["style", "top", '12px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '820px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_mark}": [
            ["style", "line-height", '44px'],
            ["style", "left", '663px'],
            ["style", "font-size", '30px'],
            ["style", "top", '45px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '52px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '550px'],
            ["style", "border-bottom-right-radius", [20,20], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '57px'],
            ["style", "left", '1010px'],
            ["style", "width", '36px']
         ],
         "${_gameArea}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_TextCopy}": [
            ["style", "top", '50px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(12,59,66,1)'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "left", '513px'],
            ["style", "font-size", '30px']
         ],
         "${_bottle1}": [
            ["style", "left", '329px'],
            ["style", "top", '250px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '200px'],
            ["style", "top", '369px'],
            ["style", "left", '1010px'],
            ["style", "width", '36px']
         ],
         "${_star19}": [
            ["style", "top", '11px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '961px'],
            ["style", "width", '40px']
         ],
         "${_star17}": [
            ["style", "top", '101px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '961px'],
            ["style", "width", '40px']
         ],
         "${_star18}": [
            ["style", "top", '56px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '961px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star14}": [
            ["style", "top", '11px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '915px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_bottle3}": [
            ["style", "left", '696px'],
            ["style", "top", '250px']
         ],
         "${_bottle2}": [
            ["style", "left", '513px'],
            ["style", "top", '250px']
         ],
         "${_star8}": [
            ["style", "top", '57px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '870px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star10}": [
            ["style", "top", '193px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '915px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star13}": [
            ["style", "top", '56px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '915px'],
            ["style", "width", '40px']
         ],
         "${_r1}": [
            ["transform", "scaleX", '0.83459'],
            ["style", "top", '119px'],
            ["style", "left", '358px'],
            ["transform", "scaleY", '2.31667']
         ],
         "${_Rectangle}": [
            ["style", "top", '390px'],
            ["color", "background-color", 'rgba(44,185,225,1.00)'],
            ["style", "left", '1010px'],
            ["style", "width", '87px']
         ],
         "${_star7}": [
            ["style", "top", '102px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '870px'],
            ["style", "width", '40px']
         ],
         "${_star3}": [
            ["style", "top", '57px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '820px'],
            ["style", "width", '40px']
         ],
         "${_star11}": [
            ["style", "top", '146px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '915px'],
            ["style", "width", '40px']
         ],
         "${_star1}": [
            ["style", "top", '147px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '820px'],
            ["style", "width", '40px']
         ],
         "${_r3}": [
            ["style", "top", '118px'],
            ["transform", "scaleY", '2.38691'],
            ["style", "left", '726px'],
            ["transform", "scaleX", '0.91479']
         ],
         "${_fishfront2}": [
            ["style", "left", '974px'],
            ["style", "top", '454px']
         ],
         "${_star9}": [
            ["style", "top", '12px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '870px'],
            ["style", "width", '40px']
         ],
         "${_f6Copy5}": [
            ["style", "top", '480px'],
            ["transform", "scaleY", '0.23743'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.23743'],
            ["style", "opacity", '1'],
            ["style", "left", '76px']
         ],
         "${_f6Copy3}": [
            ["style", "top", '471px'],
            ["transform", "scaleY", '0.23743'],
            ["transform", "rotateZ", '5deg'],
            ["transform", "scaleX", '0.23743'],
            ["style", "opacity", '1'],
            ["style", "left", '806px']
         ],
         "${_star5}": [
            ["style", "top", '194px'],
            ["subproperty", "filter.saturate", '1'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '870px'],
            ["style", "width", '40px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(24,62,82,1)'],
            ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-style", 'solid'],
            ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '61px'],
            ["style", "top", '42px'],
            ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '39px'],
            ["color", "border-color", 'rgb(122, 217, 249)'],
            ["style", "border-width", '3px'],
            ["style", "left", '655px']
         ],
         "${_star12}": [
            ["style", "top", '101px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '915px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_star2}": [
            ["style", "top", '102px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '820px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '581px'],
            ["style", "width", '1008px'],
            ["style", "overflow", 'visible']
         ],
         "${_star16}": [
            ["style", "top", '146px'],
            ["style", "width", '40px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '961px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_r2}": [
            ["style", "top", '119px'],
            ["transform", "scaleY", '2.38691'],
            ["style", "left", '542px'],
            ["transform", "scaleX", '0.83459']
         ],
         "${_star0}": [
            ["style", "top", '194px'],
            ["style", "width", '40px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "height", '39px'],
            ["style", "opacity", '0.25'],
            ["style", "left", '820px'],
            ["subproperty", "filter.saturate", '1']
         ],
         "${_startposCopy2}": [
            ["color", "background-color", 'rgba(70,201,95,1)'],
            ["style", "left", '1098px'],
            ["style", "top", '459px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 56,
         autoPlay: true,
         timeline: [
            { id: "eid277", tween: [ "style", "${_f6Copy5}", "left", '76px', { fromValue: '76px'}], position: 0, duration: 0 },
            { id: "eid263", tween: [ "style", "${_f6Copy4}", "left", '444px', { fromValue: '444px'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_fishfront2}", "top", '454px', { fromValue: '454px'}], position: 56, duration: 0 },
            { id: "eid270", tween: [ "style", "${_bottle2}", "left", '513px', { fromValue: '513px'}], position: 0, duration: 0 },
            { id: "eid271", tween: [ "style", "${_bottle2}", "left", '513px', { fromValue: '513px'}], position: 56, duration: 0 },
            { id: "eid272", tween: [ "style", "${_f6Copy3}", "left", '806px', { fromValue: '806px'}], position: 0, duration: 0 },
            { id: "eid261", tween: [ "style", "${_bottle3}", "left", '696px', { fromValue: '696px'}], position: 0, duration: 0 },
            { id: "eid262", tween: [ "style", "${_bottle3}", "left", '696px', { fromValue: '696px'}], position: 56, duration: 0 },
            { id: "eid265", tween: [ "style", "${_man2}", "left", '172px', { fromValue: '172px'}], position: 0, duration: 0 },
            { id: "eid279", tween: [ "style", "${_bottle1}", "left", '329px', { fromValue: '329px'}], position: 0, duration: 0 },
            { id: "eid280", tween: [ "style", "${_bottle1}", "left", '329px', { fromValue: '329px'}], position: 56, duration: 0 },
            { id: "eid171", tween: [ "style", "${_bottle3}", "top", '250px', { fromValue: '250px'}], position: 56, duration: 0 },
            { id: "eid254", tween: [ "style", "${_fishfront2}", "left", '974px', { fromValue: '974px'}], position: 0, duration: 0 },
            { id: "eid255", tween: [ "style", "${_fishfront2}", "left", '974px', { fromValue: '974px'}], position: 56, duration: 0 },
            { id: "eid185", tween: [ "style", "${_bottle1}", "top", '250px', { fromValue: '250px'}], position: 56, duration: 0 },
            { id: "eid177", tween: [ "style", "${_bottle2}", "top", '250px', { fromValue: '250px'}], position: 56, duration: 0 }         ]
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
