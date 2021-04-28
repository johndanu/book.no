/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['baminiplain, Arial, sans-serif']='<link rel=\"stylesheet\" media=\"screen\" title=\"\" href=\"font/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />';
   fonts['MyCustomFont']='@font-face {  font-family: MyCustomFont;  src: url(\'font/Baamini.ttf\'); /* Edit this line */}';


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
            rect:['0px','94px','1370px','578px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px'],
            transform:[[],[],[],['1','1.32766']]
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
            transform:[[],[],[],['1','0.90508']],
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
               rect:['46.3%','51.4%','60.5%','13.3%','auto','auto'],
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
            rect:['221px','2px','1110px','717px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_wrapper.png",'0px','0px']
         },
         {
            id:'mystage',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'a',
            type:'text',
            rect:['1030px','266px','77px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            userClass:"a",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'aa',
            type:'text',
            rect:['1030px','322px','77px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'i',
            type:'text',
            rect:['1030px','379px','77px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'ee',
            type:'text',
            rect:['1030px','435px','77px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'u',
            type:'text',
            rect:['1030px','490px','77px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'oo',
            type:'text',
            rect:['1030px','544px','77px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'e',
            type:'text',
            rect:['1128px','268px','104px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'ea',
            type:'text',
            rect:['1128px','324px','104px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'ai',
            type:'text',
            rect:['1128px','381px','104px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'o',
            type:'text',
            rect:['1128px','435px','104px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'O',
            type:'text',
            rect:['1128px','492px','104px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'av',
            type:'text',
            rect:['1128px','546px','104px','54px','auto','auto'],
            cursor:['pointer'],
            text:"f",
            align:"left",
            font:['MyCustomFont',55,"rgba(255,255,255,1.00)","700","none",""]
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
            id:'pin',
            type:'group',
            rect:['277px','124px','192','39','auto','auto'],
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
            rect:['293px','42px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
         },
         {
            id:'fct',
            type:'group',
            rect:['74px','732px','227','28','auto','auto'],
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
            id:'incorrect',
            type:'rect',
            rect:['329','358','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'mystage',
            symbolName:'mystage'
         },
         {
            id:'pupils',
            symbolName:'pupils'
         },
         {
            id:'incorrect',
            symbolName:'incorrect'
         }
         ]
      },
   states: {
      "Base State": {
         "${_incorrect}": [
            ["style", "top", '466px'],
            ["transform", "scaleY", '0.86139'],
            ["style", "left", '645px'],
            ["transform", "scaleX", '0.86139']
         ],
         "${_e}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1128px'],
            ["style", "font-size", '55px'],
            ["style", "top", '268px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
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
         "${_aa}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1030px'],
            ["style", "font-size", '55px'],
            ["style", "top", '322px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
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
         "${_ee}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1030px'],
            ["style", "font-size", '55px'],
            ["style", "top", '435px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
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
            ["style", "top", '732px']
         ],
         "${_pin}": [
            ["style", "top", '124px'],
            ["style", "left", '277px'],
            ["style", "cursor", 'pointer']
         ],
         "${_O}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1128px'],
            ["style", "font-size", '55px'],
            ["style", "top", '492px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
         ],
         "${_ea}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1128px'],
            ["style", "width", '104px'],
            ["style", "top", '324px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_fwd}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_ai}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1128px'],
            ["style", "font-size", '55px'],
            ["style", "top", '381px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
         ],
         "${_menu_wrapper}": [
            ["style", "top", '2px'],
            ["style", "height", '717px'],
            ["style", "left", '221px'],
            ["style", "width", '1110px']
         ],
         "${_av}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1128px'],
            ["style", "width", '104px'],
            ["style", "top", '546px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_mystage}": [
            ["style", "left", '271px'],
            ["style", "top", '113px']
         ],
         "${_u}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1030px'],
            ["style", "width", '77px'],
            ["style", "top", '490px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_o}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1128px'],
            ["style", "font-size", '55px'],
            ["style", "top", '435px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '104px']
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
         "${_logo_batch}": [
            ["style", "opacity", '1'],
            ["style", "left", '3.66%'],
            ["transform", "scaleY", '0.90508']
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
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
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
            ["style", "top", '42px'],
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
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "font-size", '10px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "height", '13.28%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.3%'],
            ["style", "width", '60.47%']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_wrapper}": [
            ["style", "top", '94px'],
            ["transform", "scaleY", '1.32766'],
            ["style", "height", '578px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1370px']
         ],
         "${_a}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1030px'],
            ["style", "width", '77px'],
            ["style", "top", '266px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_i}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1030px'],
            ["style", "width", '77px'],
            ["style", "top", '379px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_oo}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1030px'],
            ["style", "font-size", '55px'],
            ["style", "top", '544px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
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
         "${_fct_logo}": [
            ["style", "top", '0px'],
            ["style", "height", '28px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1366px']
         ],
         "${_answrd2Copy2}": [
            ["style", "top", '165px'],
            ["style", "height", '132px'],
            ["style", "width", 'auto'],
            ["style", "left", '-4px'],
            ["style", "font-size", '45px']
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
            { id: "eid64", tween: [ "style", "${_mystage}", "top", '113px', { fromValue: '113px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_mystage}", "left", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
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
"mystage": {
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
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      id: 'black_board',
      type: 'image',
      rect: ['178px','124px','524px','369px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/black_board2.png','0px','0px']
   },
   {
      id: 'teacher',
      type: 'image',
      rect: ['9px','104px','271px','489px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/teacher2.png','0px','0px']
   },
   {
      id: 'Ereser',
      type: 'image',
      rect: ['237px','406px','45px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Ereser2.png','0px','0px']
   },
   {
      id: 'board2',
      type: 'image',
      rect: ['710px','103px','288px','472px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/board22.png','0px','0px']
   },
   {
      id: 'thread',
      type: 'image',
      rect: ['260px','71px','346px','65px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/thread2.png','0px','0px']
   },
   {
      font: ['MyCustomFont',55,'rgba(255,99,17,1.00)','700','none',''],
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'vOj;Jf;fis fz;Lgpbj;jy;',
      cursor: ['default'],
      rect: ['162px','13px','735px','33px','auto','auto']
   },
   {
      rect: ['843px','175px','1px','292px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_black_board}": [
            ["style", "top", '124px'],
            ["style", "height", '369px'],
            ["style", "left", '178px'],
            ["style", "width", '524px']
         ],
         "${_thread}": [
            ["style", "top", '71px'],
            ["style", "height", '65px'],
            ["style", "left", '260px'],
            ["style", "width", '346px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,99,17,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '162px'],
            ["style", "width", '735px'],
            ["style", "top", '13px'],
            ["style", "text-align", 'center'],
            ["style", "height", '33px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "cursor", 'default'],
            ["style", "font-size", '55px']
         ],
         "${symbolSelector}": [
            ["style", "height", '575px'],
            ["style", "width", '1010px']
         ],
         "${_teacher}": [
            ["style", "top", '104px'],
            ["style", "height", '489px'],
            ["style", "left", '9px'],
            ["style", "width", '271px']
         ],
         "${_Rectangle}": [
            ["style", "left", '843px']
         ],
         "${_Ereser}": [
            ["style", "top", '406px'],
            ["style", "height", '33px'],
            ["style", "left", '237px'],
            ["style", "width", '45px']
         ],
         "${_board2}": [
            ["style", "top", '103px'],
            ["style", "height", '472px'],
            ["style", "left", '710px'],
            ["style", "width", '288px']
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
"incorrect": {
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
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0004',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0004.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0005',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0005.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0006',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0006.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0007',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0007.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0008',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0008.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0009',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0009.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0010',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0010.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0011',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0011.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0012',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0012.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0013',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0013.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0014',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0014.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0015',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0015.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0016',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0016.png','0px','0px']
   },
   {
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0002',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0002.png','0px','0px']
   },
   {
      rect: ['31px','7px','83px','89px','auto','auto'],
      id: 'incorrect0003',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/incorrect0003.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_incorrect0003}": [
            ["style", "top", '7px'],
            ["style", "height", '89px'],
            ["style", "display", 'none'],
            ["style", "left", '31px'],
            ["style", "width", '83px']
         ],
         "${_incorrect0002}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0012}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0006}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0009}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0004}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0005}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0015}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0008}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0014}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0011}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${symbolSelector}": [
            ["style", "height", '101px'],
            ["style", "width", '141px']
         ],
         "${_incorrect0013}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0010}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0016}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0007}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid342", tween: [ "style", "${_incorrect0006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid346", tween: [ "style", "${_incorrect0006}", "display", 'block', { fromValue: 'none'}], position: 145, duration: 0 },
            { id: "eid371", tween: [ "style", "${_incorrect0006}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid331", tween: [ "style", "${_incorrect0002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid357", tween: [ "style", "${_incorrect0002}", "display", 'block', { fromValue: 'none'}], position: 700, duration: 0 },
            { id: "eid360", tween: [ "style", "${_incorrect0002}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid334", tween: [ "style", "${_incorrect0014}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid354", tween: [ "style", "${_incorrect0014}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0 },
            { id: "eid363", tween: [ "style", "${_incorrect0014}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid337", tween: [ "style", "${_incorrect0011}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid351", tween: [ "style", "${_incorrect0011}", "display", 'block', { fromValue: 'none'}], position: 395, duration: 0 },
            { id: "eid366", tween: [ "style", "${_incorrect0011}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid336", tween: [ "style", "${_incorrect0012}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid352", tween: [ "style", "${_incorrect0012}", "display", 'block', { fromValue: 'none'}], position: 440, duration: 0 },
            { id: "eid365", tween: [ "style", "${_incorrect0012}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid329", tween: [ "style", "${_incorrect0004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid344", tween: [ "style", "${_incorrect0004}", "display", 'block', { fromValue: 'none'}], position: 50, duration: 0 },
            { id: "eid373", tween: [ "style", "${_incorrect0004}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid341", tween: [ "style", "${_incorrect0007}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid347", tween: [ "style", "${_incorrect0007}", "display", 'block', { fromValue: 'none'}], position: 190, duration: 0 },
            { id: "eid370", tween: [ "style", "${_incorrect0007}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid333", tween: [ "style", "${_incorrect0015}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid355", tween: [ "style", "${_incorrect0015}", "display", 'block', { fromValue: 'none'}], position: 615, duration: 0 },
            { id: "eid362", tween: [ "style", "${_incorrect0015}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid339", tween: [ "style", "${_incorrect0009}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid349", tween: [ "style", "${_incorrect0009}", "display", 'block', { fromValue: 'none'}], position: 295, duration: 0 },
            { id: "eid368", tween: [ "style", "${_incorrect0009}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid338", tween: [ "style", "${_incorrect0010}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid350", tween: [ "style", "${_incorrect0010}", "display", 'block', { fromValue: 'none'}], position: 355, duration: 0 },
            { id: "eid367", tween: [ "style", "${_incorrect0010}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid343", tween: [ "style", "${_incorrect0005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid345", tween: [ "style", "${_incorrect0005}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0 },
            { id: "eid372", tween: [ "style", "${_incorrect0005}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid335", tween: [ "style", "${_incorrect0013}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid353", tween: [ "style", "${_incorrect0013}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid364", tween: [ "style", "${_incorrect0013}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid332", tween: [ "style", "${_incorrect0016}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid356", tween: [ "style", "${_incorrect0016}", "display", 'block', { fromValue: 'none'}], position: 655, duration: 0 },
            { id: "eid361", tween: [ "style", "${_incorrect0016}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid330", tween: [ "style", "${_incorrect0003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid358", tween: [ "style", "${_incorrect0003}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid359", tween: [ "style", "${_incorrect0003}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid340", tween: [ "style", "${_incorrect0008}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid348", tween: [ "style", "${_incorrect0008}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid369", tween: [ "style", "${_incorrect0008}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 }         ]
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
