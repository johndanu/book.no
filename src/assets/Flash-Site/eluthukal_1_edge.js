/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['baminiplain, Arial, sans-serif']='<link rel=\"stylesheet\" media=\"screen\" title=\"\" href=\"font/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />';
   fonts['MyCustomFont']='<style type=\"text/css\">@font-face {  font-family: MyCustomFont;  src: url(\'font/Baamini.ttf\'); /* Edit this line */}</style>';


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
            rect:['-2px','91px','1370px','586px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px'],
            transform:[[],[],[],['1','1.31064']]
         },
         {
            id:'sidecolor',
            type:'image',
            rect:['-0.1%','-107%','3.7%','102.6%','auto','auto'],
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
               rect:['46.3%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['47.4%','37.2%','52.6%','14.8%','auto','auto'],
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
            rect:['18px','-628px','249px','605px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"eluthukalmenu.png",'0px','0px']
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
            rect:['221px','0px','1055px','717px','auto','auto'],
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
            rect:['621px','104px','302px','46px','auto','auto'],
            text:"vOj;Jf;fs;",
            align:"center",
            font:['MyCustomFont',45,"rgba(253,123,22,1.00)","700","none","normal"],
            transform:[[],[],[],['1.09593']]
         },
         {
            id:'home',
            type:'image',
            rect:['294px','41px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
         },
         {
            id:'fct',
            type:'group',
            rect:['87px','730px','227','28','auto','auto'],
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
            id:'Rectangle',
            type:'rect',
            rect:['269px','160px','947px','60px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[1,"rgba(92,32,32,1.00)","solid"]
         },
         {
            id:'Text2Copy11',
            type:'text',
            rect:['339px','169px','40px','auto','auto','auto'],
            text:"m",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy10',
            type:'text',
            rect:['400px','169px','45px','auto','auto','auto'],
            text:"M",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy9',
            type:'text',
            rect:['470px','169px','34px','auto','auto','auto'],
            text:",",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy8',
            type:'text',
            rect:['533px','169px','22px','auto','auto','auto'],
            text:"&lt;",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy7',
            type:'text',
            rect:['578px','169px','46px','auto','auto','auto'],
            text:"c",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy6',
            type:'text',
            rect:['640px','169px','50px','auto','auto','auto'],
            text:"C",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy5',
            type:'text',
            rect:['723px','169px','26px','auto','auto','auto'],
            text:"v",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy4',
            type:'text',
            rect:['800px','169px','26px','auto','auto','auto'],
            text:"V",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy3',
            type:'text',
            rect:['880px','169px','35px','auto','auto','auto'],
            text:"I",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy2',
            type:'text',
            rect:['967px','168px','30px','auto','auto','auto'],
            text:"x",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2Copy',
            type:'text',
            rect:['1057px','169px','30px','auto','auto','auto'],
            text:"X",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['1135px','169px','66px','auto','auto','auto'],
            text:"xs",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8984)","bold","none","normal"]
         },
         {
            id:'Text3',
            type:'text',
            rect:['286px','169px','28px','auto','auto','auto'],
            text:"/",
            align:"center",
            font:['MyCustomFont',44,"rgba(255,55,0,0.8945)","bold","none","normal"]
         },
         {
            id:'content',
            type:'rect',
            rect:['11','60','971px','1189px','auto','auto'],
            sizeRange:['200px','','',''],
            source:['200px','','','']
         },
         {
            id:'Rectangle3Copy5',
            type:'rect',
            rect:['388px','160px','69px','731px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle3Copy4',
            type:'rect',
            rect:['514px','160px','56px','731px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle3Copy3',
            type:'rect',
            rect:['628px','160px','67px','731px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle3Copy2',
            type:'rect',
            rect:['772px','160px','72px','731px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle3Copy',
            type:'rect',
            rect:['929px','160px','92px','731px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle3',
            type:'rect',
            rect:['1114px','160px','102px','731px','auto','auto'],
            fill:["rgba(192,192,192,0.00)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['269px','160px','61px','60px','auto','auto'],
            fill:["rgba(192,192,192,0)"],
            stroke:[1,"rgb(0, 0, 0)","solid"]
         }],
         symbolInstances: [
         {
            id:'pupils',
            symbolName:'pupils'
         },
         {
            id:'content',
            symbolName:'Symbol_1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "left", '18px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '160px'],
            ["style", "left", '269px'],
            ["style", "width", '61px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '1057px'],
            ["style", "width", 'auto']
         ],
         "${_Text2}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '1135px'],
            ["style", "width", 'auto']
         ],
         "${_Rectangle3Copy4}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '160px'],
            ["style", "border-width", '1px'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '514px'],
            ["style", "width", '56px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_fct}": [
            ["style", "display", 'block'],
            ["style", "left", '87px'],
            ["style", "top", '730px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '640px'],
            ["style", "width", 'auto']
         ],
         "${_content}": [
            ["style", "top", '223px'],
            ["style", "min-width", '200px'],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'scroll'],
            ["transform", "scaleX", '1'],
            ["style", "height", '462px'],
            ["style", "left", '269px'],
            ["style", "width", '971px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '160px'],
            ["style", "border-width", '1px'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '1114px'],
            ["style", "width", '102px']
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
         "${_menu_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '717px'],
            ["style", "left", '221px'],
            ["style", "width", '1055px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '880px'],
            ["style", "width", 'auto']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_Rectangle3Copy5}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '160px'],
            ["style", "border-width", '1px'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '388px'],
            ["style", "width", '69px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.43%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '-0.15%'],
            ["style", "width", '3.67%']
         ],
         "${_cloud2}": [
            ["style", "height", '258px'],
            ["style", "top", '-127px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_Text3}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '286px'],
            ["style", "width", 'auto']
         ],
         "${_logo_batch}": [
            ["style", "left", '3.66%'],
            ["style", "opacity", '1']
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
         "${_Text2Copy2}": [
            ["style", "top", '168px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '967px'],
            ["style", "width", 'auto']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '800px'],
            ["style", "width", 'auto']
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
         "${_Text2Copy8}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '533px'],
            ["style", "width", 'auto']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '160px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '60px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "left", '269px'],
            ["style", "width", '947px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '723px'],
            ["style", "width", 'auto']
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
         "${_Text2Copy10}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '400px'],
            ["style", "width", 'auto']
         ],
         "${_Text2Copy7}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '578px'],
            ["style", "width", 'auto']
         ],
         "${_Text2Copy9}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '470px'],
            ["style", "width", 'auto']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '160px'],
            ["style", "border-width", '1px'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '772px'],
            ["style", "width", '72px']
         ],
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '160px'],
            ["style", "border-width", '1px'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '628px'],
            ["style", "width", '67px']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(192,192,192,0)'],
            ["style", "top", '160px'],
            ["style", "border-width", '1px'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '929px'],
            ["style", "width", '92px']
         ],
         "${_home}": [
            ["style", "top", '41px'],
            ["style", "height", '71px'],
            ["style", "left", '294px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_wrapper}": [
            ["style", "top", '91px'],
            ["transform", "scaleY", '1.31064'],
            ["style", "height", '586px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '-2px'],
            ["style", "width", '1370px']
         ],
         "${_Text2Copy11}": [
            ["style", "top", '169px'],
            ["color", "color", 'rgba(251,0,0,1)'],
            ["style", "left", '339px'],
            ["style", "width", 'auto']
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
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "width", '52.64%'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '14.75%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '47.42%'],
            ["style", "font-size", '10px']
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
            ["style", "width", '1366px']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '700'],
            ["style", "left", '621px'],
            ["style", "font-size", '45px'],
            ["style", "top", '104px'],
            ["style", "width", '302px'],
            ["transform", "scaleY", '1'],
            ["style", "opacity", '1'],
            ["style", "height", '46px'],
            ["style", "font-family", 'MyCustomFont'],
            ["transform", "scaleX", '1.09593'],
            ["style", "text-align", 'center']
         ],
         "${_pa_small}": [
            ["style", "top", '108px'],
            ["style", "left", '301px'],
            ["style", "display", 'none']
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
            { id: "eid49", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 56, duration: 0 },
            { id: "eid1", tween: [ "style", "${_pa_small}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
"handOver": {
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
      rect: ['0px','0px','56px','56px','auto','auto'],
      type: 'rect',
      stroke: [1,'rgb(0, 0, 0)','none'],
      id: 'hoverBox',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(9,103,71,0.23)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hoverBox}": [
            ["color", "background-color", 'rgba(4,166,125,1.00)'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '56px'],
            ["style", "top", '0px'],
            ["style", "height", '56px'],
            ["color", "border-color", 'rgba(255,159,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "border-style", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '56px'],
            ["style", "width", '56px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: true,
         labels: {
            "over": 55,
            "out": 1130
         },
         timeline: [
            { id: "eid2029", tween: [ "style", "${_hoverBox}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1890", tween: [ "style", "${_hoverBox}", "opacity", '1', { fromValue: '0'}], position: 55, duration: 560 },
            { id: "eid1896", tween: [ "style", "${_hoverBox}", "opacity", '0', { fromValue: '1'}], position: 1130, duration: 620 },
            { id: "eid1963", tween: [ "color", "${_hoverBox}", "background-color", 'rgba(68,231,180,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(4,166,125,1.00)'}], position: 0, duration: 55 },
            { id: "eid2030", tween: [ "color", "${_hoverBox}", "background-color", 'rgba(66,216,178,0.16)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(68,231,180,1.00)'}], position: 55, duration: 560 },
            { id: "eid75", tween: [ "color", "${_hoverBox}", "border-color", 'rgba(255,159,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,159,0,1.00)'}], position: 0, duration: 0 }         ]
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
   resizeInstances: true,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'RectangleCopy',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','117px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy2',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','234px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy3',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','355px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy4',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','355px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy5',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','355px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy6',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','355px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy7',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','355px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy8',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','355px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy9',
      stroke: [1,'rgba(92,32,32,1.00)','solid'],
      rect: ['0px','355px','950px','60px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['0px','-3px','61px','1081px','auto','auto'],
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['128px','0px','67px','731px','auto','auto'],
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy2',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['262px','0px','61px','731px','auto','auto'],
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy3',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['395px','0px','67px','731px','auto','auto'],
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy4',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['531px','0px','75px','731px','auto','auto'],
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy8',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['679px','0px','75px','731px','auto','auto'],
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy5',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      rect: ['846px','0px','103px','731px','auto','auto'],
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'f;',
      align: 'center',
      rect: ['1px','8px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy22',
      text: 'f',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy23',
      text: 'fh',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy24',
      text: 'fp',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy25',
      text: 'fP',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy26',
      text: 'F',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy27',
      text: '$',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy28',
      text: 'nf',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy29',
      text: 'Nf',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy30',
      text: 'if',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy31',
      text: 'nfh',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy32',
      text: 'Nfh',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy33',
      text: 'nfs',
      cursor: ['nesw-resize'],
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy45',
      text: 'q',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy44',
      text: 'qh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy43',
      text: 'qp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy42',
      text: 'qP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','500','none','normal'],
      type: 'text',
      id: 'Text4Copy41',
      text: 'ஙு',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy40',
      text: 'q+',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy39',
      text: 'nq',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy38',
      text: 'Nq',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy37',
      text: 'iq',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy36',
      text: 'nqh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy35',
      text: 'Nqh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy34',
      text: 'nqs',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy57',
      text: 'r',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy56',
      text: 'rh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy55',
      text: 'rp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy54',
      text: 'rP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy53',
      text: 'R',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy52',
      text: '#',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy51',
      text: 'nr',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy50',
      text: 'Nr',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy49',
      text: 'ir',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy48',
      text: 'nrh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy47',
      text: 'Nrh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy46',
      text: 'nrs',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy69',
      text: 'Q',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy68',
      text: 'Qh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy67',
      text: 'Qp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy66',
      text: 'QP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','100','none','normal'],
      type: 'text',
      id: 'Text4Copy65',
      text: 'ஞு',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','200','none','normal'],
      type: 'text',
      id: 'Text4Copy64',
      text: 'ஞூ',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy63',
      text: 'nQ',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy62',
      text: 'NQ',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy61',
      text: 'iQ',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy60',
      text: 'nQh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy59',
      text: 'NQh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy58',
      text: 'nQs',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy81',
      text: 'l',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy80',
      text: 'lh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy79',
      text: 'b',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy78',
      text: 'B',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy77',
      text: 'L',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy76',
      text: '^',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy75',
      text: 'nl',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy74',
      text: 'Nl',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy73',
      text: 'il',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy72',
      text: 'nlh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy71',
      text: 'Nlh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy70',
      text: 'nls',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy93',
      text: 'z',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy92',
      text: 'zh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy91',
      text: 'zp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy90',
      text: 'zP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy89',
      text: 'Z',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy88',
      text: 'Z}',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy87',
      text: 'nz',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy86',
      text: 'Nz',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy85',
      text: 'iz',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy84',
      text: 'nzh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy83',
      text: 'Nzh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy82',
      text: 'nzs',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy105',
      text: 'j',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy104',
      text: 'jh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy103',
      text: 'jp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy102',
      text: 'jP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy101',
      text: 'J',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy100',
      text: 'J}<br>',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy99',
      text: 'nj',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy98',
      text: 'Nj',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy97',
      text: 'ij',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy96',
      text: 'njh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy95',
      text: 'Njh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy94',
      text: 'njs',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy117',
      text: 'e',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy116',
      text: 'eh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy115',
      text: 'ep',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy114',
      text: 'eP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy113',
      text: 'E',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy112',
      text: 'E}',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy111',
      text: 'ne',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy110',
      text: 'Ne',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy109',
      text: 'ie',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy108',
      text: 'neh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy107',
      text: 'Neh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy106',
      text: 'nes',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy129',
      text: 'g',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy128',
      text: 'gh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy127',
      text: 'gp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy126',
      text: 'gP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy125',
      text: 'G',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy124',
      text: 'g+',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy123',
      text: 'ng',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy122',
      text: 'Ng',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy121',
      text: 'ig',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy120',
      text: 'ngh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy119',
      text: 'Ngh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy118',
      text: 'ngs',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy141',
      text: 'k',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy140',
      text: 'kh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy139',
      text: 'kp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy138',
      text: 'kP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy137',
      text: 'K',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy136',
      text: '%',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy135',
      text: 'nk',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy134',
      text: 'Nk',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy133',
      text: 'ik',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy132',
      text: 'nkh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy131',
      text: 'Nkh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy130',
      text: 'nks',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy153',
      text: 'a',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy152',
      text: 'ah',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy151',
      text: 'ap',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy150',
      text: 'aP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy149',
      text: 'A',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy148',
      text: 'a+',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy147',
      text: 'na',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy146',
      text: 'Na',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy145',
      text: 'ia',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy144',
      text: 'nah',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy143',
      text: 'Nah',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy142',
      text: 'nas',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy165',
      text: 'u',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy164',
      text: 'uh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy163',
      text: 'up',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy162',
      text: 'uP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy161',
      text: 'U',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy160',
      text: '&amp;',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy159',
      text: 'nu',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy158',
      text: 'Nu',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy157',
      text: 'iu',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy156',
      text: 'nuh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy155',
      text: 'Nuh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy154',
      text: 'nus',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy',
      text: 'q;',
      align: 'center',
      rect: ['0px','126px','63px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy2',
      text: 'r;',
      align: 'center',
      rect: ['1px','124px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy3',
      text: 'Q;',
      align: 'center',
      rect: ['2px','183px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy10',
      text: 'j;',
      align: 'center',
      rect: ['2px','362px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy11',
      text: 'e;',
      align: 'center',
      rect: ['2px','428px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy12',
      text: 'g;',
      align: 'center',
      rect: ['2px','489px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy13',
      text: 'k;',
      align: 'center',
      rect: ['0px','550px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy14',
      text: 'a;',
      align: 'center',
      rect: ['0px','609px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy15',
      text: 'u;',
      align: 'center',
      rect: ['0px','670px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy16',
      text: 'y;',
      align: 'center',
      rect: ['0px','729px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy17',
      text: 't;',
      align: 'center',
      rect: ['0px','788px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy18',
      text: 'o;',
      align: 'center',
      rect: ['0px','847px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy19',
      text: 's;',
      align: 'center',
      rect: ['0px','907px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy20',
      text: 'w;',
      align: 'center',
      rect: ['0px','967px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy21',
      text: 'd;',
      align: 'center',
      rect: ['0px','1026px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy4',
      text: 'l;',
      align: 'center',
      rect: ['17px','243px','auto','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy5',
      text: 'z;',
      align: 'center',
      rect: ['7px','306px','auto','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy177',
      text: 'y',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy176',
      text: 'yh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy175',
      text: 'yp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy174',
      text: 'yP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy173',
      text: 'Y',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy172',
      text: 'Y}',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy171',
      text: 'ny',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy170',
      text: 'Ny',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy169',
      text: 'iy',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy168',
      text: 'nyh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy167',
      text: 'Nyh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy166',
      text: 'nys',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy189',
      text: 't',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy188',
      text: 'th',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy187',
      text: 'tp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy186',
      text: 'tP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy185',
      text: 'T',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy184',
      text: 't+',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy183',
      text: 'nt',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy182',
      text: 'Nt',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy181',
      text: 'it',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy180',
      text: 'nth',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy179',
      text: 'Nth',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy178',
      text: 'nts',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy201',
      text: 'o',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy200',
      text: 'oh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy199',
      text: 'op',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy198',
      text: 'oP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy197',
      text: 'O',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy196',
      text: '*',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy195',
      text: 'no',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy194',
      text: 'No',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy193',
      text: 'io',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy192',
      text: 'noh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy191',
      text: 'Noh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy190',
      text: 'nos',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy213',
      text: 's',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy212',
      text: 'sh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy211',
      text: 'sp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy210',
      text: 'sP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy209',
      text: 'S',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy208',
      text: '@',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy207',
      text: 'ns',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy206',
      text: 'Ns',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy205',
      text: 'is',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy204',
      text: 'nsh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy203',
      text: 'Nsh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy202',
      text: 'nss',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy225',
      text: 'w',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy224',
      text: 'wh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy223',
      text: 'wp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy222',
      text: 'wP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy221',
      text: 'W',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy220',
      text: 'W}',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy219',
      text: 'nw',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy218',
      text: 'Nw',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy217',
      text: 'iw',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy216',
      text: 'nwh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy215',
      text: 'Nwh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy214',
      text: 'nws',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy237',
      text: 'd',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy236',
      text: 'dh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy235',
      text: 'dp',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy234',
      text: 'dP',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy233',
      text: 'D',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy232',
      text: 'D}',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy231',
      text: 'nd',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy230',
      text: 'Nd',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy229',
      text: 'id',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy228',
      text: 'ndh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy227',
      text: 'Ndh',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      font: ['MyCustomFont',44,'rgba(255,55,0,0.8906)','bold','none','normal'],
      type: 'text',
      id: 'Text4Copy226',
      text: 'nds',
      align: 'center',
      rect: ['1px','68px','61px','auto','auto','auto']
   },
   {
      id: 'kaa',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'ka',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'ki',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'kee',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'ku',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'koo',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'ke',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'kea',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'kai',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'ko',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'kko',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'kov',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nga',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'sa',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nya',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'da',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Na',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ngaa',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'saa',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy39',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy51',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy63',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ngi',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'si',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy40',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy52',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy64',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'ngee',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'see',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nyee',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'dee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Nee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ngu',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'su',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nyu',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'du',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Nu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ngoo',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'soo',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nyoo',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'doo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Noo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nge',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'se',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nye',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'de',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Ne',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ngea',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'sea',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nyea',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'dea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Nea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ngai',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nyai',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'dai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Nai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ngo',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'so',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nyo',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'do',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'No',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'nggo',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'sso',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nyyo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'ddo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'NNo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'ngov',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'sov',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   },
   {
      id: 'nyov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'dov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'Nov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'na',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy96',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy95',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'nee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'noo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ne',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'no',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'nNo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'nov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'pa',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'paa',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'pi',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'pee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'pu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'poo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'pe',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'pea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'pai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'po',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'ppo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'pov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'ma',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy108',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy107',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'mee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'mu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'moo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'me',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'mea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'mai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'mo',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'mmo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'mov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'ra',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy120',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy119',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'ree',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ru',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'roo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 're',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'rea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'rai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ro',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'rro',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'rov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'ya',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy144',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy143',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'yee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'yu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'yoo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'ye',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'yea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'yai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'yo',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'yyo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'yov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'la',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'va',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'zha',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'La',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Ra',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy132',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy147',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy159',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy171',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy183',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy131',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy148',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy160',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy172',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'handOverCopy184',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'lee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'vee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'zhee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Lee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Ree',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'lu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'vu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'zhu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Lu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Ru',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'loo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'voo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'zhoo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Loo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Roo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'le',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 've',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'zhe',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Le',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Re',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'lea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'vea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'zhea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Lea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Rea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'lai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'vai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'zhai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Lai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'lo',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'vo',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'zho',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'Lo',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'llo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'vvo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'zzho',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'LLo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'lov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'vov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'zhov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'Lov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'Rai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'Ro',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'RRo',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'Rov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'nna',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy204',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy203',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'nnee',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nnu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nnoo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nne',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nnea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nnai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'nno',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'nnno',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'nnov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'output',
      rect: ['260px','88px','auto','auto','auto','auto']
   },
   {
      id: 'tha',
      type: 'rect',
      rect: ['63px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy8',
      type: 'rect',
      rect: ['127px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'handOverCopy7',
      type: 'rect',
      rect: ['190px','237px','auto','auto','auto','auto']
   },
   {
      id: 'thu',
      type: 'rect',
      rect: ['303px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'thoo',
      type: 'rect',
      rect: ['366px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'the',
      type: 'rect',
      rect: ['438px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'thea',
      type: 'rect',
      rect: ['513px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'thai',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'tho',
      type: 'rect',
      rect: ['62px','237px','auto','auto','auto','auto']
   },
   {
      id: 'ttho',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'thov',
      type: 'rect',
      rect: ['62px','177px','auto','auto','auto','auto']
   },
   {
      id: 'theeCopy',
      type: 'rect',
      rect: ['246px','237px','auto','auto','auto','auto'],
      transform: [[0,0],[],[],['1','1.07143']]
   },
   {
      id: 'sai',
      type: 'rect',
      rect: ['62px','1px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'soo',
      symbolName: 'handOver'
   },
   {
      id: 'ngee',
      symbolName: 'handOver'
   },
   {
      id: 'roo',
      symbolName: 'handOver'
   },
   {
      id: 'poo',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy63',
      symbolName: 'handOver'
   },
   {
      id: 'noo',
      symbolName: 'handOver'
   },
   {
      id: 'koo',
      symbolName: 'handOver'
   },
   {
      id: 'loo',
      symbolName: 'handOver'
   },
   {
      id: 'nge',
      symbolName: 'handOver'
   },
   {
      id: 'nNo',
      symbolName: 'handOver'
   },
   {
      id: 'nnno',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy8',
      symbolName: 'handOver'
   },
   {
      id: 'ngu',
      symbolName: 'handOver'
   },
   {
      id: 'voo',
      symbolName: 'handOver'
   },
   {
      id: 'Lee',
      symbolName: 'handOver'
   },
   {
      id: 'Nee',
      symbolName: 'handOver'
   },
   {
      id: 'Roo',
      symbolName: 'handOver'
   },
   {
      id: 'Nea',
      symbolName: 'handOver'
   },
   {
      id: 'ye',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy51',
      symbolName: 'handOver'
   },
   {
      id: 'ngai',
      symbolName: 'handOver'
   },
   {
      id: 'Loo',
      symbolName: 'handOver'
   },
   {
      id: 'vvo',
      symbolName: 'handOver'
   },
   {
      id: 'doo',
      symbolName: 'handOver'
   },
   {
      id: 'vu',
      symbolName: 'handOver'
   },
   {
      id: 'ngo',
      symbolName: 'handOver'
   },
   {
      id: 'su',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy132',
      symbolName: 'handOver'
   },
   {
      id: 'zhee',
      symbolName: 'handOver'
   },
   {
      id: 'thu',
      symbolName: 'handOver'
   },
   {
      id: 'rea',
      symbolName: 'handOver'
   },
   {
      id: 'mee',
      symbolName: 'handOver'
   },
   {
      id: 'pea',
      symbolName: 'handOver'
   },
   {
      id: 'nea',
      symbolName: 'handOver'
   },
   {
      id: 'mea',
      symbolName: 'handOver'
   },
   {
      id: 'ree',
      symbolName: 'handOver'
   },
   {
      id: 'see',
      symbolName: 'handOver'
   },
   {
      id: 'yea',
      symbolName: 'handOver'
   },
   {
      id: 'vee',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy7',
      symbolName: 'handOver'
   },
   {
      id: 'vea',
      symbolName: 'handOver'
   },
   {
      id: 'yee',
      symbolName: 'handOver'
   },
   {
      id: 'nnu',
      symbolName: 'handOver'
   },
   {
      id: 'sea',
      symbolName: 'handOver'
   },
   {
      id: 'ka',
      symbolName: 'handOver'
   },
   {
      id: 'pi',
      symbolName: 'handOver'
   },
   {
      id: 'llo',
      symbolName: 'handOver'
   },
   {
      id: 'nyai',
      symbolName: 'handOver'
   },
   {
      id: 'na',
      symbolName: 'handOver'
   },
   {
      id: 'si',
      symbolName: 'handOver'
   },
   {
      id: 'la',
      symbolName: 'handOver'
   },
   {
      id: 'sa',
      symbolName: 'handOver'
   },
   {
      id: 'ra',
      symbolName: 'handOver'
   },
   {
      id: 'pa',
      symbolName: 'handOver'
   },
   {
      id: 'va',
      symbolName: 'handOver'
   },
   {
      id: 'ki',
      symbolName: 'handOver'
   },
   {
      id: 'kee',
      symbolName: 'handOver'
   },
   {
      id: 'sai',
      symbolName: 'handOver'
   },
   {
      id: 'thea',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy40',
      symbolName: 'handOver'
   },
   {
      id: 'thov',
      symbolName: 'handOver'
   },
   {
      id: 'ttho',
      symbolName: 'handOver'
   },
   {
      id: 'tho',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy159',
      symbolName: 'handOver'
   },
   {
      id: 'the',
      symbolName: 'handOver'
   },
   {
      id: 'thoo',
      symbolName: 'handOver'
   },
   {
      id: 'zhe',
      symbolName: 'handOver'
   },
   {
      id: 'output',
      symbolName: 'output'
   },
   {
      id: 'nnov',
      symbolName: 'handOver'
   },
   {
      id: 'NNo',
      symbolName: 'handOver'
   },
   {
      id: 'nne',
      symbolName: 'handOver'
   },
   {
      id: 'nno',
      symbolName: 'handOver'
   },
   {
      id: 'nnai',
      symbolName: 'handOver'
   },
   {
      id: 'nnea',
      symbolName: 'handOver'
   },
   {
      id: 'nnoo',
      symbolName: 'handOver'
   },
   {
      id: 'nnee',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy131',
      symbolName: 'handOver'
   },
   {
      id: 'nyee',
      symbolName: 'handOver'
   },
   {
      id: 'Na',
      symbolName: 'handOver'
   },
   {
      id: 're',
      symbolName: 'handOver'
   },
   {
      id: 'La',
      symbolName: 'handOver'
   },
   {
      id: 'ngi',
      symbolName: 'handOver'
   },
   {
      id: 'Ra',
      symbolName: 'handOver'
   },
   {
      id: 'nyea',
      symbolName: 'handOver'
   },
   {
      id: 'zhea',
      symbolName: 'handOver'
   },
   {
      id: 'nna',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy147',
      symbolName: 'handOver'
   },
   {
      id: 'Rov',
      symbolName: 'handOver'
   },
   {
      id: 'RRo',
      symbolName: 'handOver'
   },
   {
      id: 'Ro',
      symbolName: 'handOver'
   },
   {
      id: 'Rai',
      symbolName: 'handOver'
   },
   {
      id: 'ngaa',
      symbolName: 'handOver'
   },
   {
      id: 'Lov',
      symbolName: 'handOver'
   },
   {
      id: 'ngea',
      symbolName: 'handOver'
   },
   {
      id: 'da',
      symbolName: 'handOver'
   },
   {
      id: 'nu',
      symbolName: 'handOver'
   },
   {
      id: 'sso',
      symbolName: 'handOver'
   },
   {
      id: 'Noo',
      symbolName: 'handOver'
   },
   {
      id: 'LLo',
      symbolName: 'handOver'
   },
   {
      id: 'zzho',
      symbolName: 'handOver'
   },
   {
      id: 'thai',
      symbolName: 'handOver'
   },
   {
      id: 'zho',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy64',
      symbolName: 'handOver'
   },
   {
      id: 'vo',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy107',
      symbolName: 'handOver'
   },
   {
      id: 'ro',
      symbolName: 'handOver'
   },
   {
      id: 'Rea',
      symbolName: 'handOver'
   },
   {
      id: 'mu',
      symbolName: 'handOver'
   },
   {
      id: 'so',
      symbolName: 'handOver'
   },
   {
      id: 'no',
      symbolName: 'handOver'
   },
   {
      id: 'mo',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy120',
      symbolName: 'handOver'
   },
   {
      id: 'zhai',
      symbolName: 'handOver'
   },
   {
      id: 'nga',
      symbolName: 'handOver'
   },
   {
      id: 'lai',
      symbolName: 'handOver'
   },
   {
      id: 'lo',
      symbolName: 'handOver'
   },
   {
      id: 'ko',
      symbolName: 'handOver'
   },
   {
      id: 'Lea',
      symbolName: 'handOver'
   },
   {
      id: 'lea',
      symbolName: 'handOver'
   },
   {
      id: 'nyov',
      symbolName: 'handOver'
   },
   {
      id: 'du',
      symbolName: 'handOver'
   },
   {
      id: 'tha',
      symbolName: 'handOver'
   },
   {
      id: 'ddo',
      symbolName: 'handOver'
   },
   {
      id: 'ya',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy96',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy144',
      symbolName: 'handOver'
   },
   {
      id: 'rro',
      symbolName: 'handOver'
   },
   {
      id: 'theeCopy',
      symbolName: 'handOver'
   },
   {
      id: 'zhoo',
      symbolName: 'handOver'
   },
   {
      id: 'ngov',
      symbolName: 'handOver'
   },
   {
      id: 'pee',
      symbolName: 'handOver'
   },
   {
      id: 'ngoo',
      symbolName: 'handOver'
   },
   {
      id: 'Lai',
      symbolName: 'handOver'
   },
   {
      id: 'zhu',
      symbolName: 'handOver'
   },
   {
      id: 'Nai',
      symbolName: 'handOver'
   },
   {
      id: 'kko',
      symbolName: 'handOver'
   },
   {
      id: 'Ree',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy172',
      symbolName: 'handOver'
   },
   {
      id: 'lee',
      symbolName: 'handOver'
   },
   {
      id: 'ppo',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy39',
      symbolName: 'handOver'
   },
   {
      id: 'No',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy119',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy160',
      symbolName: 'handOver'
   },
   {
      id: 'mmo',
      symbolName: 'handOver'
   },
   {
      id: 'moo',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy171',
      symbolName: 'handOver'
   },
   {
      id: 'Lo',
      symbolName: 'handOver'
   },
   {
      id: 'nggo',
      symbolName: 'handOver'
   },
   {
      id: 'rai',
      symbolName: 'handOver'
   },
   {
      id: 'yov',
      symbolName: 'handOver'
   },
   {
      id: 'yyo',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy148',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy204',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy52',
      symbolName: 'handOver'
   },
   {
      id: 'do',
      symbolName: 'handOver'
   },
   {
      id: 'Nov',
      symbolName: 'handOver'
   },
   {
      id: 'saa',
      symbolName: 'handOver'
   },
   {
      id: 'vai',
      symbolName: 'handOver'
   },
   {
      id: 'nyo',
      symbolName: 'handOver'
   },
   {
      id: 'paa',
      symbolName: 'handOver'
   },
   {
      id: 'kai',
      symbolName: 'handOver'
   },
   {
      id: 'yai',
      symbolName: 'handOver'
   },
   {
      id: 'pu',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy184',
      symbolName: 'handOver'
   },
   {
      id: 'nyoo',
      symbolName: 'handOver'
   },
   {
      id: 'nai',
      symbolName: 'handOver'
   },
   {
      id: 'lu',
      symbolName: 'handOver'
   },
   {
      id: 'ku',
      symbolName: 'handOver'
   },
   {
      id: 'ne',
      symbolName: 'handOver'
   },
   {
      id: 'me',
      symbolName: 'handOver'
   },
   {
      id: 'le',
      symbolName: 'handOver'
   },
   {
      id: 'ke',
      symbolName: 'handOver'
   },
   {
      id: 'yoo',
      symbolName: 'handOver'
   },
   {
      id: 'yu',
      symbolName: 'handOver'
   },
   {
      id: 'po',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy143',
      symbolName: 'handOver'
   },
   {
      id: 've',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy203',
      symbolName: 'handOver'
   },
   {
      id: 'zha',
      symbolName: 'handOver'
   },
   {
      id: 'se',
      symbolName: 'handOver'
   },
   {
      id: 'kaa',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy108',
      symbolName: 'handOver'
   },
   {
      id: 'pe',
      symbolName: 'handOver'
   },
   {
      id: 'ma',
      symbolName: 'handOver'
   },
   {
      id: 'mov',
      symbolName: 'handOver'
   },
   {
      id: 'lov',
      symbolName: 'handOver'
   },
   {
      id: 'ru',
      symbolName: 'handOver'
   },
   {
      id: 'nov',
      symbolName: 'handOver'
   },
   {
      id: 'nyu',
      symbolName: 'handOver'
   },
   {
      id: 'pov',
      symbolName: 'handOver'
   },
   {
      id: 'sov',
      symbolName: 'handOver'
   },
   {
      id: 'rov',
      symbolName: 'handOver'
   },
   {
      id: 'Ru',
      symbolName: 'handOver'
   },
   {
      id: 'yo',
      symbolName: 'handOver'
   },
   {
      id: 'mai',
      symbolName: 'handOver'
   },
   {
      id: 'vov',
      symbolName: 'handOver'
   },
   {
      id: 'Nu',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy183',
      symbolName: 'handOver'
   },
   {
      id: 'Lu',
      symbolName: 'handOver'
   },
   {
      id: 'nee',
      symbolName: 'handOver'
   },
   {
      id: 'Ne',
      symbolName: 'handOver'
   },
   {
      id: 'nyyo',
      symbolName: 'handOver'
   },
   {
      id: 'Le',
      symbolName: 'handOver'
   },
   {
      id: 'nya',
      symbolName: 'handOver'
   },
   {
      id: 'kea',
      symbolName: 'handOver'
   },
   {
      id: 'nye',
      symbolName: 'handOver'
   },
   {
      id: 'de',
      symbolName: 'handOver'
   },
   {
      id: 'pai',
      symbolName: 'handOver'
   },
   {
      id: 'dai',
      symbolName: 'handOver'
   },
   {
      id: 'dov',
      symbolName: 'handOver'
   },
   {
      id: 'dee',
      symbolName: 'handOver'
   },
   {
      id: 'dea',
      symbolName: 'handOver'
   },
   {
      id: 'Re',
      symbolName: 'handOver'
   },
   {
      id: 'handOverCopy95',
      symbolName: 'handOver'
   },
   {
      id: 'kov',
      symbolName: 'handOver'
   },
   {
      id: 'zhov',
      symbolName: 'handOver'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text4Copy133}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '583px'],
            ["style", "width", '70px']
         ],
         "${_moo}": [
            ["transform", "scaleX", '1.21429'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '366px']
         ],
         "${_kko}": [
            ["style", "top", '1px'],
            ["style", "left", '772px'],
            ["transform", "scaleX", '1.64286']
         ],
         "${_ngov}": [
            ["style", "top", '60px'],
            ["style", "left", '869px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.82143']
         ],
         "${_ngai}": [
            ["style", "top", '60px'],
            ["style", "left", '592px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.48214']
         ],
         "${_Text4Copy13}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '550px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_lov}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.82143'],
            ["style", "left", '868px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_handOverCopy147}": [
            ["transform", "scaleX", '1.26786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '127px'],
            ["style", "top", '782px']
         ],
         "${_handOverCopy63}": [
            ["style", "top", '297px'],
            ["style", "left", '127px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.26786']
         ],
         "${_pi}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '190px']
         ],
         "${_Text4Copy94}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '105px'],
            ["style", "left", '846px'],
            ["style", "font-size", '40px']
         ],
         "${_kai}": [
            ["style", "top", '1px'],
            ["style", "left", '591px'],
            ["transform", "scaleX", '1.48214']
         ],
         "${_roo}": [
            ["style", "top", '662px'],
            ["style", "left", '366px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.21429']
         ],
         "${_mov}": [
            ["transform", "scaleX", '1.82143'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '868px']
         ],
         "${_ngoo}": [
            ["style", "top", '60px'],
            ["style", "left", '366px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.21429']
         ],
         "${_Text4Copy143}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '86px'],
            ["style", "left", '757px'],
            ["style", "font-size", '40px']
         ],
         "${_ngi}": [
            ["style", "top", '60px'],
            ["style", "left", '190px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_handOverCopy171}": [
            ["style", "top", '900px'],
            ["style", "left", '127px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.26786']
         ],
         "${_mai}": [
            ["transform", "scaleX", '1.48214'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '592px']
         ],
         "${_Text4Copy126}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '246px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy191}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '86px'],
            ["style", "left", '757px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy118}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '105px'],
            ["style", "left", '846px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy222}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '244px'],
            ["style", "font-size", '40px']
         ],
         "${_RectangleCopy9}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '1016px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '62px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "left", '0px'],
            ["style", "width", '947px']
         ],
         "${_ki}": [
            ["style", "top", '1px'],
            ["style", "left", '190px'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy148}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '64px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy49}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '70px'],
            ["style", "left", '580px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy153}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '63px'],
            ["style", "font-size", '40px']
         ],
         "${_mmo}": [
            ["transform", "scaleX", '1.64286'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '772px']
         ],
         "${_Le}": [
            ["style", "top", '900px'],
            ["style", "left", '438px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.33929']
         ],
         "${_handOverCopy7}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '190px'],
            ["style", "top", '360px']
         ],
         "${_Lu}": [
            ["style", "top", '900px'],
            ["style", "left", '303px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy65}": [
            ["style", "line-height", '34px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-weight", '100'],
            ["style", "left", '303px'],
            ["style", "width", '57px'],
            ["style", "top", '191px'],
            ["style", "text-align", 'center'],
            ["style", "height", '27px'],
            ["style", "font-size", '28px']
         ],
         "${_RectangleCopy6}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '659px'],
            ["style", "left", '0px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '947px']
         ],
         "${_dea}": [
            ["transform", "scaleX", '1.30357'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '513px']
         ],
         "${_loo}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.21429'],
            ["style", "left", '366px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy113}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '303px'],
            ["style", "width", '58px']
         ],
         "${_Text4Copy182}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '505px'],
            ["style", "width", '69px']
         ],
         "${_Text4Copy131}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '758px'],
            ["style", "width", '86px']
         ],
         "${_zhov}": [
            ["transform", "scaleX", '1.82143'],
            ["style", "top", '841px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '868px']
         ],
         "${_Lov}": [
            ["style", "top", '900px'],
            ["style", "left", '868px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.82143']
         ],
         "${_Text4Copy68}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '123px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy163}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '190px'],
            ["style", "width", '55px']
         ],
         "${_yoo}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.21429'],
            ["style", "left", '366px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Lea}": [
            ["style", "top", '900px'],
            ["style", "left", '513px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.30357']
         ],
         "${_Text4Copy36}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '667px'],
            ["style", "width", '74px']
         ],
         "${_Text4Copy100}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '64px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy205}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '583px'],
            ["style", "width", '70px']
         ],
         "${_va}": [
            ["style", "top", '782px'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.03571']
         ],
         "${_vvo}": [
            ["transform", "scaleX", '1.64286'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '772px'],
            ["style", "top", '782px']
         ],
         "${_sai}": [
            ["style", "top", '119px'],
            ["transform", "scaleX", '1.48214'],
            ["style", "left", '591px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_handOverCopy159}": [
            ["transform", "scaleX", '1.26786'],
            ["style", "top", '841px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '127px']
         ],
         "${_le}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.33929'],
            ["style", "left", '438px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy70}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '105px'],
            ["style", "left", '846px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy147}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '431px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy82}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '847px'],
            ["style", "width", '105px']
         ],
         "${_Text4Copy56}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '61px'],
            ["style", "left", '123px'],
            ["style", "font-size", '40px']
         ],
         "${_sea}": [
            ["style", "top", '118px'],
            ["transform", "scaleX", '1.30357'],
            ["style", "left", '513px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_Text4Copy146}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '69px'],
            ["style", "left", '505px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy14}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '609px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_yo}": [
            ["style", "top", '602px'],
            ["transform", "scaleX", '1.66071'],
            ["style", "left", '680px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy183}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '431px'],
            ["style", "width", '70px']
         ],
         "${_Text4Copy166}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '105px'],
            ["style", "left", '846px'],
            ["style", "font-size", '40px']
         ],
         "${_RectangleCopy4}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '419px'],
            ["style", "left", '0px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '947px']
         ],
         "${_pa}": [
            ["style", "top", '483px'],
            ["transform", "scaleX", '1.03571'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '57px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '60px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "left", '0px'],
            ["style", "width", '947px']
         ],
         "${_Text4Copy103}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '190px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy151}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '190px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy50}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '69px'],
            ["style", "left", '505px'],
            ["style", "font-size", '40px']
         ],
         "${_ttho}": [
            ["transform", "scaleX", '1.64286'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '772px'],
            ["style", "top", '360px']
         ],
         "${_Text4Copy52}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '64px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Ne}": [
            ["style", "top", '297px'],
            ["style", "left", '438px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.33929']
         ],
         "${_Text4Copy173}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '303px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy42}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '245px'],
            ["style", "width", '57px']
         ],
         "${_Text4Copy29}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '69px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '505px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy211}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '188px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy58}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '846px'],
            ["style", "width", '105px']
         ],
         "${_Text4Copy31}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '74px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '667px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy106}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '846px'],
            ["style", "width", '105px']
         ],
         "${_Text4Copy170}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '69px'],
            ["style", "left", '505px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy66}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '246px'],
            ["style", "width", '57px']
         ],
         "${_su}": [
            ["style", "top", '118px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '303px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_kaa}": [
            ["style", "top", '1px'],
            ["style", "left", '127px'],
            ["transform", "scaleX", '1.26786']
         ],
         "${_zho}": [
            ["transform", "scaleX", '1.66071'],
            ["style", "top", '841px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '680px']
         ],
         "${_Text4Copy22}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "width", '58px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '63px'],
            ["style", "cursor", 'auto'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy123}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '431px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy115}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '190px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy28}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '70px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '434px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy174}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '246px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy127}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '190px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy234}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '244px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy224}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '61px'],
            ["style", "left", '122px'],
            ["style", "font-size", '40px']
         ],
         "${_rov}": [
            ["style", "top", '662px'],
            ["style", "left", '868px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.82143']
         ],
         "${_ve}": [
            ["transform", "scaleX", '1.33929'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '438px'],
            ["style", "top", '782px']
         ],
         "${_Text4Copy175}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '190px'],
            ["style", "font-size", '40px']
         ],
         "${_vu}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '303px'],
            ["style", "top", '782px']
         ],
         "${_Text4Copy194}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '69px'],
            ["style", "left", '505px'],
            ["style", "font-size", '40px']
         ],
         "${_nnea}": [
            ["transform", "scaleX", '1.30357'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '513px'],
            ["style", "top", '1019px']
         ],
         "${_tho}": [
            ["transform", "scaleX", '1.66071'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '680px'],
            ["style", "top", '361px']
         ],
         "${_handOverCopy183}": [
            ["style", "top", '960px'],
            ["transform", "scaleX", '1.26786'],
            ["style", "left", '127px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy}": [
            ["color", "color", 'rgba(255,6,29,1.00)'],
            ["style", "top", '66px'],
            ["style", "left", '0px'],
            ["style", "width", '63px']
         ],
         "${_zzho}": [
            ["transform", "scaleX", '1.64286'],
            ["style", "top", '842px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '772px']
         ],
         "${_Text4Copy63}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '431px'],
            ["style", "width", '70px']
         ],
         "${_nyee}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '246px'],
            ["style", "top", '177px']
         ],
         "${_la}": [
            ["transform", "scaleX", '1.03571'],
            ["style", "top", '722px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '63px']
         ],
         "${_Text4Copy35}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '757px'],
            ["style", "width", '86px']
         ],
         "${_Text4Copy169}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '583px'],
            ["style", "font-size", '40px']
         ],
         "${_nai}": [
            ["transform", "scaleX", '1.48214'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '591px'],
            ["style", "top", '422px']
         ],
         "${_Text4Copy17}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '788px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_handOverCopy96}": [
            ["transform", "scaleX", '1.26786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '127px'],
            ["style", "top", '422px']
         ],
         "${_ye}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.33929'],
            ["style", "left", '438px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy119}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '86px'],
            ["style", "left", '758px'],
            ["style", "font-size", '40px']
         ],
         "${_mu}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '303px']
         ],
         "${_handOverCopy132}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.26786'],
            ["style", "left", '127px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Ree}": [
            ["style", "top", '960px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '246px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy160}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '364px'],
            ["style", "width", '64px']
         ],
         "${_Text4Copy21}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '1026px'],
            ["style", "left", '1px'],
            ["style", "width", '61px']
         ],
         "${_handOverCopy95}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '190px'],
            ["style", "top", '422px']
         ],
         "${_Text4Copy132}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '670px'],
            ["style", "width", '74px']
         ],
         "${_Text4Copy61}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '580px'],
            ["style", "width", '70px']
         ],
         "${_nnov}": [
            ["transform", "scaleX", '1.82143'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '868px'],
            ["style", "top", '1019px']
         ],
         "${_Text4Copy193}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '583px'],
            ["style", "font-size", '40px']
         ],
         "${_NNo}": [
            ["style", "top", '298px'],
            ["style", "left", '772px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.64286']
         ],
         "${_zhoo}": [
            ["transform", "scaleX", '1.21429'],
            ["style", "top", '842px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '366px']
         ],
         "${_Re}": [
            ["style", "top", '960px'],
            ["transform", "scaleX", '1.33929'],
            ["style", "left", '438px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy235}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '188px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy231}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '431px'],
            ["style", "width", '70px']
         ],
         "${_handOverCopy107}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '190px']
         ],
         "${_Text4Copy41}": [
            ["style", "top", '76px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '28px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '304px'],
            ["style", "width", '54px']
         ],
         "${_pov}": [
            ["transform", "scaleX", '1.82143'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '868px']
         ],
         "${_Text4Copy185}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '301px'],
            ["style", "width", '58px']
         ],
         "${_Text4Copy86}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '506px'],
            ["style", "width", '69px']
         ],
         "${_Text4Copy76}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '64px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy24}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '58px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '191px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Nu}": [
            ["style", "top", '297px'],
            ["style", "left", '303px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_ppo}": [
            ["transform", "scaleX", '1.64286'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '772px']
         ],
         "${_Lee}": [
            ["style", "top", '900px'],
            ["style", "left", '246px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy136}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '364px'],
            ["style", "width", '64px']
         ],
         "${_Text4Copy129}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '63px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy83}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '756px'],
            ["style", "width", '86px']
         ],
         "${_Text4Copy165}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '63px'],
            ["style", "width", '58px']
         ],
         "${_ddo}": [
            ["transform", "scaleX", '1.64286'],
            ["style", "top", '238px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '772px']
         ],
         "${_lo}": [
            ["style", "top", '723px'],
            ["transform", "scaleX", '1.66071'],
            ["style", "left", '680px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_no}": [
            ["transform", "scaleX", '1.66071'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '680px'],
            ["style", "top", '423px']
         ],
         "${_Text4Copy225}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '61px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy4}": [
            ["style", "top", '243px'],
            ["style", "left", '17px'],
            ["color", "color", 'rgba(251,0,0,1.00)']
         ],
         "${_Ro}": [
            ["style", "top", '960px'],
            ["transform", "scaleX", '1.66071'],
            ["style", "left", '680px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_zhea}": [
            ["transform", "scaleX", '1.30357'],
            ["style", "top", '842px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '513px']
         ],
         "${_Text4Copy195}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '431px'],
            ["style", "font-size", '40px']
         ],
         "${_noo}": [
            ["transform", "scaleX", '1.21429'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '366px'],
            ["style", "top", '422px']
         ],
         "${_Text4Copy112}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '364px'],
            ["style", "width", '64px']
         ],
         "${_Text4Copy237}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '61px'],
            ["style", "width", '58px']
         ],
         "${_nnai}": [
            ["transform", "scaleX", '1.48214'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '592px'],
            ["style", "top", '1019px']
         ],
         "${_dai}": [
            ["transform", "scaleX", '1.48214'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '592px']
         ],
         "${_Text4Copy114}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '246px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy3}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '183px'],
            ["style", "left", '2px'],
            ["style", "width", '61px']
         ],
         "${_kea}": [
            ["style", "top", '1px'],
            ["style", "left", '512px'],
            ["transform", "scaleX", '1.30357']
         ],
         "${_tha}": [
            ["style", "top", '360px'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.14286'],
            ["transform", "scaleX", '1.03571']
         ],
         "${_Text4Copy125}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '303px'],
            ["style", "font-size", '40px']
         ],
         "${_handOverCopy39}": [
            ["transform", "scaleX", '1.26786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '127px'],
            ["style", "top", '177px']
         ],
         "${_yu}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '303px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_koo}": [
            ["style", "top", '1px'],
            ["style", "left", '365px'],
            ["transform", "scaleX", '1.21429']
         ],
         "${_ku}": [
            ["style", "top", '1px'],
            ["style", "clip", [0,56,56,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '303px'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy122}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '69px'],
            ["style", "left", '505px'],
            ["style", "font-size", '40px']
         ],
         "${_soo}": [
            ["style", "top", '119px'],
            ["transform", "scaleX", '1.21429'],
            ["style", "left", '366px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_Text4Copy204}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '670px'],
            ["style", "width", '74px']
         ],
         "${_Text4Copy25}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '57px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '246px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy184}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '364px'],
            ["style", "width", '64px']
         ],
         "${_Text4Copy198}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '244px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy92}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '123px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy116}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '124px'],
            ["style", "width", '61px']
         ],
         "${_RRo}": [
            ["style", "top", '959px'],
            ["transform", "scaleX", '1.64286'],
            ["style", "left", '772px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy81}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '63px'],
            ["style", "font-size", '40px']
         ],
         "${_lea}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.30357'],
            ["style", "left", '513px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_mo}": [
            ["transform", "scaleX", '1.66071'],
            ["style", "top", '543px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '680px']
         ],
         "${_Text4Copy39}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '434px'],
            ["style", "width", '70px']
         ],
         "${_paa}": [
            ["transform", "scaleX", '1.26786'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '127px']
         ],
         "${_Text4Copy207}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '431px'],
            ["style", "width", '70px']
         ],
         "${_Text4Copy48}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '74px'],
            ["style", "left", '667px'],
            ["style", "font-size", '40px']
         ],
         "${_de}": [
            ["transform", "scaleX", '1.33929'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '438px']
         ],
         "${_handOverCopy51}": [
            ["transform", "scaleX", '1.26786'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '127px']
         ],
         "${_Text4Copy227}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '757px'],
            ["style", "width", '86px']
         ],
         "${_Text4Copy208}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '364px'],
            ["style", "width", '64px']
         ],
         "${_Text4Copy144}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '74px'],
            ["style", "left", '670px'],
            ["style", "font-size", '40px']
         ],
         "${_nnee}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '246px'],
            ["style", "top", '1019px']
         ],
         "${_Text4Copy75}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '431px'],
            ["style", "font-size", '40px']
         ],
         "${_thoo}": [
            ["transform", "scaleX", '1.21429'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '366px'],
            ["style", "top", '360px']
         ],
         "${_Text4Copy72}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '74px'],
            ["style", "left", '667px'],
            ["style", "font-size", '40px']
         ],
         "${_ngee}": [
            ["style", "top", '60px'],
            ["style", "left", '246px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy172}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '64px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy5}": [
            ["style", "top", '306px'],
            ["style", "left", '7px'],
            ["color", "color", 'rgba(251,0,0,1.00)']
         ],
         "${_Text4Copy187}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '188px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy215}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '86px'],
            ["style", "left", '757px'],
            ["style", "font-size", '40px']
         ],
         "${_nyu}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '303px'],
            ["style", "top", '177px']
         ],
         "${_Text4Copy229}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '583px'],
            ["style", "width", '70px']
         ],
         "${_handOverCopy184}": [
            ["style", "top", '960px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '190px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Lo}": [
            ["style", "top", '900px'],
            ["style", "left", '680px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.66071']
         ],
         "${_Ru}": [
            ["style", "top", '961px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '303px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_nyo}": [
            ["transform", "scaleX", '1.66071'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '680px'],
            ["style", "top", '177px']
         ],
         "${_handOverCopy203}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '190px'],
            ["style", "top", '1019px']
         ],
         "${_Text4Copy59}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '758px'],
            ["style", "width", '86px']
         ],
         "${_si}": [
            ["style", "top", '119px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '190px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_nov}": [
            ["transform", "scaleX", '1.82143'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '868px'],
            ["style", "top", '422px']
         ],
         "${_yyo}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.64286'],
            ["style", "left", '772px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_nggo}": [
            ["style", "top", '60px'],
            ["style", "left", '773px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.64286']
         ],
         "${_Text4Copy101}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '303px'],
            ["style", "font-size", '40px']
         ],
         "${_ke}": [
            ["style", "top", '1px'],
            ["style", "left", '437px'],
            ["transform", "scaleX", '1.33929']
         ],
         "${_output}": [
            ["style", "display", 'none'],
            ["style", "left", '260px'],
            ["style", "top", '88px']
         ],
         "${_Text4Copy23}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '61px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '123px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Rectangle3Copy5}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '-3px'],
            ["style", "left", '845px'],
            ["style", "height", '1081px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '102px']
         ],
         "${_thov}": [
            ["transform", "scaleX", '1.82143'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '868px'],
            ["style", "top", '360px']
         ],
         "${_Text4Copy188}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '122px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy64}": [
            ["style", "line-height", '34px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-weight", '200'],
            ["style", "left", '364px'],
            ["style", "width", '64px'],
            ["style", "top", '192px'],
            ["style", "text-align", 'center'],
            ["style", "height", '27px'],
            ["style", "font-size", '28px']
         ],
         "${_Text4Copy51}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '70px'],
            ["style", "left", '431px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy189}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '61px'],
            ["style", "width", '58px']
         ],
         "${_Text4}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "left", '1px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy67}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '191px'],
            ["style", "width", '58px']
         ],
         "${_ne}": [
            ["transform", "scaleX", '1.33929'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '438px'],
            ["style", "top", '422px']
         ],
         "${_Text4Copy228}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '670px'],
            ["style", "width", '74px']
         ],
         "${_doo}": [
            ["transform", "scaleX", '1.21429'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '366px']
         ],
         "${_ko}": [
            ["style", "top", '1px'],
            ["style", "left", '679px'],
            ["transform", "scaleX", '1.66071']
         ],
         "${_Text4Copy167}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '86px'],
            ["style", "left", '757px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy53}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '56px'],
            ["style", "left", '303px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy18}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '847px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Nai}": [
            ["style", "top", '297px'],
            ["style", "left", '592px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.48214']
         ],
         "${_Text4Copy104}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '61px'],
            ["style", "left", '124px'],
            ["style", "font-size", '40px']
         ],
         "${_Nee}": [
            ["style", "top", '297px'],
            ["style", "left", '246px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_rai}": [
            ["style", "top", '662px'],
            ["style", "left", '592px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.48214']
         ],
         "${_Text4Copy109}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '583px'],
            ["style", "width", '70px']
         ],
         "${_Text4Copy181}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '583px'],
            ["style", "width", '70px']
         ],
         "${_pai}": [
            ["transform", "scaleX", '1.48214'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '591px']
         ],
         "${_ngea}": [
            ["style", "top", '60px'],
            ["style", "left", '513px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.30357']
         ],
         "${_se}": [
            ["style", "top", '118px'],
            ["transform", "scaleX", '1.33929'],
            ["style", "left", '438px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_Rectangle3Copy3}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '-3px'],
            ["style", "left", '359px'],
            ["style", "height", '1081px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '67px']
         ],
         "${_Text4Copy95}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '86px'],
            ["style", "left", '758px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy57}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '58px'],
            ["style", "left", '63px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy139}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '190px'],
            ["style", "width", '55px']
         ],
         "${_ree}": [
            ["style", "top", '662px'],
            ["style", "left", '246px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '-3px'],
            ["style", "left", '119px'],
            ["style", "height", '1081px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '69px']
         ],
         "${_Text4Copy47}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '86px'],
            ["style", "left", '757px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy221}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '301px'],
            ["style", "font-size", '40px']
         ],
         "${_lu}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '303px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy214}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '105px'],
            ["style", "left", '845px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy55}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '58px'],
            ["style", "left", '191px'],
            ["style", "font-size", '40px']
         ],
         "${_nyov}": [
            ["transform", "scaleX", '1.82143'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '868px'],
            ["style", "top", '177px']
         ],
         "${_dov}": [
            ["transform", "scaleX", '1.82143'],
            ["style", "top", '238px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '868px']
         ],
         "${_thu}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '303px'],
            ["style", "top", '360px']
         ],
         "${_sa}": [
            ["transform", "scaleX", '1.03571'],
            ["style", "top", '119px'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '63px']
         ],
         "${_RectangleCopy7}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '779px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '60px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "left", '0px'],
            ["style", "width", '947px']
         ],
         "${_Text4Copy98}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '69px'],
            ["style", "left", '505px'],
            ["style", "font-size", '40px']
         ],
         "${_nge}": [
            ["style", "top", '60px'],
            ["style", "left", '438px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.33929']
         ],
         "${_Text4Copy32}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '86px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '758px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Rea}": [
            ["style", "top", '960px'],
            ["transform", "scaleX", '1.30357'],
            ["style", "left", '513px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_yea}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.30357'],
            ["style", "left", '513px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_nnno}": [
            ["transform", "scaleX", '1.64286'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '772px'],
            ["style", "top", '1018px']
         ],
         "${_handOverCopy8}": [
            ["transform", "scaleX", '1.26786'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '127px'],
            ["style", "top", '360px']
         ],
         "${_Text4Copy137}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '303px'],
            ["style", "width", '58px']
         ],
         "${_Text4Copy105}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '63px'],
            ["style", "font-size", '40px']
         ],
         "${_rea}": [
            ["style", "top", '662px'],
            ["style", "left", '513px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.30357']
         ],
         "${_zhee}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '842px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '246px']
         ],
         "${_Text4Copy177}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '63px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy77}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '56px'],
            ["style", "left", '303px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy236}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '122px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy15}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '670px'],
            ["style", "left", '1px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy135}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '431px'],
            ["style", "width", '70px']
         ],
         "${_Text4Copy201}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '61px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy138}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '246px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy93}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '63px'],
            ["style", "width", '58px']
         ],
         "${_ma}": [
            ["style", "top", '542px'],
            ["transform", "scaleX", '1.03571'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text6}": [
            ["style", "text-align", '']
         ],
         "${_Text4Copy71}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '86px'],
            ["style", "left", '756px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy142}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '105px'],
            ["style", "left", '846px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy171}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '431px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy43}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '191px'],
            ["style", "width", '58px']
         ],
         "${_Text4Copy89}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '302px'],
            ["style", "width", '55px']
         ],
         "${_nNo}": [
            ["transform", "scaleX", '1.64286'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '772px'],
            ["style", "top", '422px']
         ],
         "${_Text4Copy226}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '845px'],
            ["style", "width", '105px']
         ],
         "${_Text4Copy45}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '63px'],
            ["style", "width", '58px']
         ],
         "${_zhe}": [
            ["transform", "scaleX", '1.33929'],
            ["style", "top", '842px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '438px']
         ],
         "${_nyoo}": [
            ["transform", "scaleX", '1.21429'],
            ["transform", "scaleY", '1.06095'],
            ["style", "left", '366px'],
            ["style", "top", '177px']
         ],
         "${_Text4Copy232}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '364px'],
            ["style", "width", '64px']
         ],
         "${_Text4Copy54}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '57px'],
            ["style", "left", '246px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy149}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '303px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy111}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '431px'],
            ["style", "width", '70px']
         ],
         "${_Text4Copy152}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '61px'],
            ["style", "left", '124px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy164}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '124px'],
            ["style", "width", '61px']
         ],
         "${_nyai}": [
            ["transform", "scaleX", '1.48214'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '592px'],
            ["style", "top", '177px']
         ],
         "${_nya}": [
            ["style", "top", '177px'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.03571']
         ],
         "${_see}": [
            ["style", "top", '118px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '246px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_ka}": [
            ["style", "top", '1px'],
            ["style", "left", '63px'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy20}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '967px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_nea}": [
            ["transform", "scaleX", '1.30357'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '513px'],
            ["style", "top", '422px']
         ],
         "${_Text4Copy220}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '64px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy124}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '64px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy176}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '61px'],
            ["style", "left", '124px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy128}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '61px'],
            ["style", "left", '124px'],
            ["style", "font-size", '40px']
         ],
         "${_nee}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '246px'],
            ["style", "top", '422px']
         ],
         "${_re}": [
            ["style", "top", '662px'],
            ["style", "left", '438px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.33929']
         ],
         "${_kee}": [
            ["style", "top", '1px'],
            ["style", "left", '246px'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_sso}": [
            ["style", "top", '118px'],
            ["transform", "scaleX", '1.64286'],
            ["style", "left", '772px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_theeCopy}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '360px'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '246px']
         ],
         "${_zhu}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '842px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '303px']
         ],
         "${_ngo}": [
            ["style", "top", '60px'],
            ["style", "left", '680px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.66071']
         ],
         "${_Text4Copy78}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '246px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy16}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '729px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy209}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '301px'],
            ["style", "width", '58px']
         ],
         "${_Text4Copy2}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '124px'],
            ["style", "left", '1px'],
            ["style", "width", '61px']
         ],
         "${_nnu}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '303px'],
            ["style", "top", '1020px']
         ],
         "${_yov}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.82143'],
            ["style", "left", '868px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_ru}": [
            ["style", "top", '662px'],
            ["style", "left", '303px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy73}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '579px'],
            ["style", "font-size", '40px']
         ],
         "${_handOverCopy143}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '190px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_pea}": [
            ["transform", "scaleX", '1.30357'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '513px']
         ],
         "${_Text4Copy230}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '505px'],
            ["style", "width", '69px']
         ],
         "${_nne}": [
            ["transform", "scaleX", '1.33929'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '438px'],
            ["style", "top", '1019px']
         ],
         "${_Text4Copy88}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '364px'],
            ["style", "width", '64px']
         ],
         "${_po}": [
            ["transform", "scaleX", '1.66071'],
            ["style", "top", '484px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '680px']
         ],
         "${_Text4Copy40}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '365px'],
            ["style", "width", '64px']
         ],
         "${_na}": [
            ["style", "top", '422px'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.03571']
         ],
         "${_pe}": [
            ["transform", "scaleX", '1.33929'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '438px']
         ],
         "${_kov}": [
            ["style", "top", '1px'],
            ["style", "left", '868px'],
            ["transform", "scaleX", '1.82143']
         ],
         "${_handOverCopy64}": [
            ["style", "top", '297px'],
            ["style", "left", '190px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy33}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '105px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '846px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Roo}": [
            ["style", "top", '961px'],
            ["transform", "scaleX", '1.21429'],
            ["style", "left", '366px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy190}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '105px'],
            ["style", "left", '846px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy200}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '61px'],
            ["style", "left", '122px'],
            ["style", "font-size", '40px']
         ],
         "${_handOverCopy40}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '190px'],
            ["style", "top", '177px']
         ],
         "${_Text4Copy69}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '63px'],
            ["style", "width", '58px']
         ],
         "${_nga}": [
            ["transform", "scaleX", '1.03571'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '63px'],
            ["style", "top", '60px']
         ],
         "${_nyyo}": [
            ["transform", "scaleX", '1.64286'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '772px'],
            ["style", "top", '177px']
         ],
         "${_Text4Copy102}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '246px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy197}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '301px'],
            ["style", "font-size", '40px']
         ],
         "${_do}": [
            ["transform", "scaleX", '1.66071'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '680px']
         ],
         "${_Text4Copy206}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '505px'],
            ["style", "width", '69px']
         ],
         "${_mea}": [
            ["transform", "scaleX", '1.30357'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '513px']
         ],
         "${_handOverCopy119}": [
            ["style", "top", '662px'],
            ["style", "left", '190px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_vov}": [
            ["transform", "scaleX", '1.82143'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '868px'],
            ["style", "top", '782px']
         ],
         "${_Text4Copy90}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '249px'],
            ["style", "width", '50px']
         ],
         "${_Text4Copy117}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '63px'],
            ["style", "width", '58px']
         ],
         "${_sov}": [
            ["style", "top", '118px'],
            ["transform", "scaleX", '1.82143'],
            ["style", "left", '868px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_Nov}": [
            ["style", "top", '298px'],
            ["style", "left", '868px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.82143']
         ],
         "${_Text4Copy196}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '64px'],
            ["style", "left", '364px'],
            ["style", "font-size", '40px']
         ],
         "${_Noo}": [
            ["style", "top", '297px'],
            ["style", "left", '366px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.21429']
         ],
         "${_vo}": [
            ["transform", "scaleX", '1.66071'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '680px'],
            ["style", "top", '782px']
         ],
         "${_Text4Copy145}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '583px'],
            ["style", "font-size", '40px']
         ],
         "${_nna}": [
            ["style", "top", '1019px'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.03571']
         ],
         "${_nyea}": [
            ["transform", "scaleX", '1.30357'],
            ["transform", "scaleY", '1.03571'],
            ["style", "left", '513px'],
            ["style", "top", '177px']
         ],
         "${_Text4Copy217}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '583px'],
            ["style", "font-size", '40px']
         ],
         "${_rro}": [
            ["style", "top", '662px'],
            ["style", "left", '772px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.64286']
         ],
         "${_mee}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '246px']
         ],
         "${_Text4Copy30}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '70px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '580px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy87}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '431px'],
            ["style", "width", '70px']
         ],
         "${_Text4Copy154}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '846px'],
            ["style", "width", '105px']
         ],
         "${_Text4Copy140}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '124px'],
            ["style", "width", '61px']
         ],
         "${_llo}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.64286'],
            ["style", "left", '772px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy159}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '431px'],
            ["style", "width", '70px']
         ],
         "${_Text4Copy141}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '63px'],
            ["style", "width", '58px']
         ],
         "${_Text4Copy157}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '583px'],
            ["style", "width", '70px']
         ],
         "${_voo}": [
            ["transform", "scaleX", '1.21429'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '366px'],
            ["style", "top", '782px']
         ],
         "${_vee}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '246px'],
            ["style", "top", '782px']
         ],
         "${_ngaa}": [
            ["style", "top", '60px'],
            ["style", "left", '127px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.26786']
         ],
         "${_handOverCopy172}": [
            ["style", "top", '900px'],
            ["style", "left", '190px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_nu}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '303px'],
            ["style", "top", '422px']
         ],
         "${_thai}": [
            ["transform", "scaleX", '1.48214'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '592px'],
            ["style", "top", '360px']
         ],
         "${symbolSelector}": [
            ["style", "height", '1140px'],
            ["style", "width", '952px'],
            ["style", "overflow", 'scroll']
         ],
         "${_Text4Copy233}": [
            ["style", "top", '1028px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '301px'],
            ["style", "width", '58px']
         ],
         "${_Text4Copy44}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '123px'],
            ["style", "width", '61px']
         ],
         "${_lee}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '246px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_du}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '303px']
         ],
         "${_Text4Copy130}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '846px'],
            ["style", "width", '105px']
         ],
         "${_zhai}": [
            ["transform", "scaleX", '1.48214'],
            ["style", "top", '841px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '592px']
         ],
         "${_handOverCopy148}": [
            ["transform", "scaleX", '1.01786'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '190px'],
            ["style", "top", '782px']
         ],
         "${_Text4Copy121}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '583px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy62}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '505px'],
            ["style", "width", '69px']
         ],
         "${_Text4Copy180}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '670px'],
            ["style", "width", '74px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '-3px'],
            ["style", "border-width", '1px'],
            ["style", "height", '1081px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy91}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '189px'],
            ["style", "width", '58px']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '-3px'],
            ["style", "left", '245px'],
            ["style", "height", '1081px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '56px']
         ],
         "${_Text4Copy155}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '757px'],
            ["style", "width", '86px']
         ],
         "${_Text4Copy37}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '580px'],
            ["style", "width", '70px']
         ],
         "${_vea}": [
            ["transform", "scaleX", '1.30357'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '513px'],
            ["style", "top", '782px']
         ],
         "${_Text4Copy162}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '246px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy168}": [
            ["style", "top", '730px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '74px'],
            ["style", "left", '670px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy10}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '362px'],
            ["style", "left", '2px'],
            ["style", "width", '61px']
         ],
         "${_Ra}": [
            ["transform", "scaleX", '1.03571'],
            ["style", "top", '960px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '63px']
         ],
         "${_handOverCopy144}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.26786'],
            ["style", "left", '127px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy120}": [
            ["style", "top", '490px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '74px'],
            ["style", "left", '670px'],
            ["style", "font-size", '40px']
         ],
         "${_LLo}": [
            ["style", "top", '899px'],
            ["style", "left", '772px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.64286']
         ],
         "${_Text4Copy96}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '74px'],
            ["style", "left", '670px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy38}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '505px'],
            ["style", "width", '69px']
         ],
         "${_dee}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '246px']
         ],
         "${_Text4Copy74}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '69px'],
            ["style", "left", '505px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy199}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '188px'],
            ["style", "font-size", '40px']
         ],
         "${_yai}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.48214'],
            ["style", "left", '592px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_RectangleCopy3}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '295px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '60px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "left", '0px'],
            ["style", "width", '947px']
         ],
         "${_Text4Copy19}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '907px'],
            ["style", "left", '0px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy107}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '758px'],
            ["style", "width", '86px']
         ],
         "${_Rectangle3Copy8}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '-3px'],
            ["style", "left", '660px'],
            ["style", "height", '1081px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '92px']
         ],
         "${_RectangleCopy8}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '897px'],
            ["style", "left", '0px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '947px']
         ],
         "${_Text4Copy192}": [
            ["style", "top", '850px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '74px'],
            ["style", "left", '670px'],
            ["style", "font-size", '40px']
         ],
         "${_vai}": [
            ["transform", "scaleX", '1.48214'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '592px'],
            ["style", "top", '782px']
         ],
         "${_Text4Copy79}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '58px'],
            ["style", "left", '190px'],
            ["style", "font-size", '40px']
         ],
         "${_the}": [
            ["transform", "scaleX", '1.33929'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '438px'],
            ["style", "top", '360px']
         ],
         "${_nnoo}": [
            ["transform", "scaleX", '1.21429'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '366px'],
            ["style", "top", '1020px']
         ],
         "${_Text4Copy80}": [
            ["style", "top", '246px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '61px'],
            ["style", "left", '122px'],
            ["style", "font-size", '40px']
         ],
         "${_handOverCopy204}": [
            ["transform", "scaleX", '1.26786'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '127px'],
            ["style", "top", '1019px']
         ],
         "${_ro}": [
            ["style", "top", '663px'],
            ["style", "left", '680px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.66071']
         ],
         "${_ngu}": [
            ["style", "top", '60px'],
            ["style", "left", '304px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.01786']
         ],
         "${_Text4Copy46}": [
            ["style", "top", '127px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "width", '105px'],
            ["style", "left", '846px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy210}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '244px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy218}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '69px'],
            ["style", "left", '505px'],
            ["style", "font-size", '40px']
         ],
         "${_Lai}": [
            ["style", "top", '900px'],
            ["style", "left", '592px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.48214']
         ],
         "${_RectangleCopy5}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '539px'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '60px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "left", '0px'],
            ["style", "width", '947px']
         ],
         "${_Rectangle3Copy4}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '-3px'],
            ["style", "left", '503px'],
            ["style", "height", '1081px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '72px']
         ],
         "${_Text4Copy134}": [
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '505px'],
            ["style", "width", '69px']
         ],
         "${_poo}": [
            ["transform", "scaleX", '1.21429'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '366px']
         ],
         "${_da}": [
            ["style", "top", '237px'],
            ["transform", "scaleX", '1.03571'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.07143']
         ],
         "${_Text4Copy178}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '846px'],
            ["style", "width", '105px']
         ],
         "${_Text4Copy150}": [
            ["style", "top", '610px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '246px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy12}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '489px'],
            ["style", "left", '2px'],
            ["style", "width", '61px']
         ],
         "${_Loo}": [
            ["style", "top", '901px'],
            ["style", "left", '366px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.21429']
         ],
         "${_handOverCopy52}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '237px'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '190px']
         ],
         "${_Text4Copy110}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '505px'],
            ["style", "width", '69px']
         ],
         "${_Text4Copy179}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '757px'],
            ["style", "width", '86px']
         ],
         "${_saa}": [
            ["style", "top", '119px'],
            ["transform", "scaleX", '1.26786'],
            ["style", "left", '127px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_Text4Copy216}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '74px'],
            ["style", "left", '670px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy27}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '64px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '364px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy202}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '845px'],
            ["style", "width", '105px']
         ],
         "${_Text4Copy97}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '583px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy203}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '757px'],
            ["style", "width", '86px']
         ],
         "${_pu}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '303px']
         ],
         "${_thea}": [
            ["transform", "scaleX", '1.30357'],
            ["transform", "scaleY", '1.14286'],
            ["style", "left", '513px'],
            ["style", "top", '360px']
         ],
         "${_Text4Copy108}": [
            ["style", "top", '430px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '670px'],
            ["style", "width", '74px']
         ],
         "${_La}": [
            ["transform", "scaleX", '1.03571'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '63px'],
            ["style", "top", '900px']
         ],
         "${_handOverCopy131}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '190px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_ra}": [
            ["transform", "scaleX", '1.03571'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '63px'],
            ["style", "top", '662px']
         ],
         "${_handOverCopy108}": [
            ["transform", "scaleX", '1.26786'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '127px']
         ],
         "${_Text4Copy11}": [
            ["color", "color", 'rgba(251,0,0,1.00)'],
            ["style", "top", '428px'],
            ["style", "left", '2px'],
            ["style", "width", '61px']
         ],
         "${_No}": [
            ["style", "top", '298px'],
            ["style", "left", '680px'],
            ["transform", "scaleY", '1.03571'],
            ["transform", "scaleX", '1.66071']
         ],
         "${_Text4Copy34}": [
            ["style", "top", '68px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '846px'],
            ["style", "width", '105px']
         ],
         "${_me}": [
            ["transform", "scaleX", '1.33929'],
            ["style", "top", '542px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '438px']
         ],
         "${_nno}": [
            ["transform", "scaleX", '1.66071'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '680px'],
            ["style", "top", '1019px']
         ],
         "${_Text4Copy186}": [
            ["style", "top", '790px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '244px'],
            ["style", "width", '55px']
         ],
         "${_Text4Copy85}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '579px'],
            ["style", "width", '70px']
         ],
         "${_yee}": [
            ["style", "top", '601px'],
            ["transform", "scaleX", '1.01786'],
            ["style", "left", '246px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_nye}": [
            ["transform", "scaleX", '1.33929'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '438px'],
            ["style", "top", '177px']
         ],
         "${_Text4Copy26}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "width", '54px'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "left", '304px'],
            ["style", "cursor", 'nesw-resize'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy213}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '61px'],
            ["style", "width", '58px']
         ],
         "${_RectangleCopy2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "top", '174px'],
            ["style", "left", '0px'],
            ["color", "border-color", 'rgb(92, 32, 32)'],
            ["style", "height", '60px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '1px'],
            ["style", "width", '947px']
         ],
         "${_Nea}": [
            ["style", "top", '297px'],
            ["style", "left", '513px'],
            ["transform", "scaleY", '1.07143'],
            ["transform", "scaleX", '1.30357']
         ],
         "${_Rai}": [
            ["style", "top", '960px'],
            ["transform", "scaleX", '1.48214'],
            ["style", "left", '592px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_lai}": [
            ["style", "top", '722px'],
            ["transform", "scaleX", '1.48214'],
            ["style", "left", '592px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_Text4Copy158}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '505px'],
            ["style", "width", '69px']
         ],
         "${_Text4Copy223}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '55px'],
            ["style", "left", '188px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy99}": [
            ["style", "top", '367px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '431px'],
            ["style", "font-size", '40px']
         ],
         "${_Text4Copy212}": [
            ["style", "top", '908px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '122px'],
            ["style", "width", '61px']
         ],
         "${_Text4Copy84}": [
            ["style", "top", '306px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '664px'],
            ["style", "width", '74px']
         ],
         "${_handOverCopy120}": [
            ["style", "top", '662px'],
            ["style", "left", '127px'],
            ["transform", "scaleY", '1.05357'],
            ["transform", "scaleX", '1.26786']
         ],
         "${_Text4Copy161}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '303px'],
            ["style", "width", '58px']
         ],
         "${_Text4Copy156}": [
            ["style", "top", '670px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "font-size", '40px'],
            ["style", "left", '670px'],
            ["style", "width", '74px']
         ],
         "${_zha}": [
            ["style", "top", '842px'],
            ["transform", "scaleX", '1.03571'],
            ["style", "left", '63px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_handOverCopy160}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '842px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '190px']
         ],
         "${_Rov}": [
            ["style", "top", '960px'],
            ["transform", "scaleX", '1.82143'],
            ["style", "left", '868px'],
            ["transform", "scaleY", '1.05357']
         ],
         "${_ya}": [
            ["transform", "scaleX", '1.03571'],
            ["style", "top", '601px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '63px']
         ],
         "${_so}": [
            ["style", "top", '118px'],
            ["transform", "scaleX", '1.66071'],
            ["style", "left", '680px'],
            ["transform", "scaleY", '1.03571']
         ],
         "${_Text4Copy60}": [
            ["style", "top", '186px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1.00)'],
            ["style", "font-size", '40px'],
            ["style", "left", '667px'],
            ["style", "width", '74px']
         ],
         "${_Text4Copy219}": [
            ["style", "top", '967px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(38,1,1,1)'],
            ["style", "width", '70px'],
            ["style", "left", '431px'],
            ["style", "font-size", '40px']
         ],
         "${_pee}": [
            ["transform", "scaleX", '1.01786'],
            ["style", "top", '483px'],
            ["transform", "scaleY", '1.05357'],
            ["style", "left", '246px']
         ],
         "${_Na}": [
            ["transform", "scaleX", '1.03571'],
            ["transform", "scaleY", '1.07143'],
            ["style", "left", '63px'],
            ["style", "top", '297px']
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
            { id: "eid1341", tween: [ "style", "${_Text4Copy185}", "left", '301px', { fromValue: '301px'}], position: 0, duration: 0 },
            { id: "eid1549", tween: [ "style", "${_Text4Copy63}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid3121", tween: [ "style", "${_Ra}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid1958", tween: [ "transform", "${_kko}", "scaleX", '1.64286', { fromValue: '1.64286'}], position: 0, duration: 0 },
            { id: "eid2667", tween: [ "transform", "${_nyee}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid1750", tween: [ "style", "${_Text4Copy84}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid581", tween: [ "color", "${_Text4Copy39}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2685", tween: [ "style", "${_nyo}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid3053", tween: [ "style", "${_ve}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid2709", tween: [ "style", "${_Nov}", "top", '298px', { fromValue: '298px'}], position: 0, duration: 0 },
            { id: "eid1585", tween: [ "style", "${_Text4Copy95}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid1595", tween: [ "style", "${_Text4Copy180}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid3425", tween: [ "transform", "${_thea}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid2970", tween: [ "style", "${_lee}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid2882", tween: [ "transform", "${_handOverCopy96}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid1070", tween: [ "style", "${_Text4Copy50}", "left", '505px', { fromValue: '505px'}], position: 0, duration: 0 },
            { id: "eid1682", tween: [ "style", "${_Text4Copy116}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid2598", tween: [ "transform", "${_ngea}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid1723", tween: [ "style", "${_Text4Copy211}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid3085", tween: [ "style", "${_handOverCopy171}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1538", tween: [ "style", "${_Text4Copy78}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid2972", tween: [ "style", "${_lo}", "top", '723px', { fromValue: '723px'}], position: 0, duration: 0 },
            { id: "eid2596", tween: [ "transform", "${_ngoo}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid2888", tween: [ "transform", "${_no}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid3421", tween: [ "style", "${_tho}", "top", '361px', { fromValue: '361px'}], position: 0, duration: 0 },
            { id: "eid1717", tween: [ "style", "${_Text4Copy50}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid2614", tween: [ "style", "${_soo}", "top", '119px', { fromValue: '119px'}], position: 0, duration: 0 },
            { id: "eid2935", tween: [ "style", "${_rai}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid572", tween: [ "color", "${_Text4Copy58}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1591", tween: [ "style", "${_Text4Copy133}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid2874", tween: [ "transform", "${_nea}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid1934", tween: [ "transform", "${_kea}", "scaleX", '1.30357', { fromValue: '1.30357'}], position: 0, duration: 0 },
            { id: "eid1664", tween: [ "style", "${_Text4Copy64}", "top", '192px', { fromValue: '192px'}], position: 0, duration: 0 },
            { id: "eid1240", tween: [ "style", "${_Text4Copy133}", "left", '583px', { fromValue: '583px'}], position: 0, duration: 0 },
            { id: "eid1029", tween: [ "style", "${_Text4Copy28}", "left", '434px', { fromValue: '434px'}], position: 0, duration: 0 },
            { id: "eid1552", tween: [ "style", "${_RectangleCopy9}", "top", '1016px', { fromValue: '1016px'}], position: 0, duration: 0 },
            { id: "eid1673", tween: [ "style", "${_Text4Copy162}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid580", tween: [ "color", "${_Text4Copy66}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1011", tween: [ "style", "${_Rectangle3Copy3}", "width", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
            { id: "eid1533", tween: [ "style", "${_Text4Copy62}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid1596", tween: [ "style", "${_Text4Copy40}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid3087", tween: [ "style", "${_handOverCopy172}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1588", tween: [ "style", "${_Text4Copy119}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid3094", tween: [ "style", "${_Lu}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1675", tween: [ "style", "${_Text4Copy55}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid3050", tween: [ "style", "${_vee}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid2885", tween: [ "style", "${_handOverCopy95}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid3038", tween: [ "style", "${_yu}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid2588", tween: [ "transform", "${_nga}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid570", tween: [ "color", "${_Text4Copy47}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1566", tween: [ "style", "${_Text4Copy80}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid1644", tween: [ "style", "${_Text4Copy220}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid3437", tween: [ "style", "${_handOverCopy8}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid3122", tween: [ "style", "${_handOverCopy183}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid1032", tween: [ "style", "${_Text4Copy87}", "left", '431px', { fromValue: '431px'}], position: 0, duration: 0 },
            { id: "eid3102", tween: [ "style", "${_Le}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid3099", tween: [ "style", "${_Loo}", "top", '901px', { fromValue: '901px'}], position: 0, duration: 0 },
            { id: "eid1530", tween: [ "style", "${_Text4Copy32}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid2594", tween: [ "transform", "${_nge}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid609", tween: [ "color", "${_Text4Copy48}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1902", tween: [ "transform", "${_kaa}", "scaleX", '1.26786', { fromValue: '1.26786'}], position: 0, duration: 0 },
            { id: "eid964", tween: [ "style", "${_Text4Copy78}", "width", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
            { id: "eid938", tween: [ "style", "${_Text4Copy79}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid1903", tween: [ "style", "${_kaa}", "left", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid1481", tween: [ "style", "${_Text4Copy53}", "width", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid932", tween: [ "style", "${_Text4Copy91}", "left", '189px', { fromValue: '189px'}], position: 0, duration: 0 },
            { id: "eid3051", tween: [ "style", "${_vu}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid1741", tween: [ "style", "${_Text4Copy189}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid3109", tween: [ "style", "${_Lai}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1738", tween: [ "style", "${_Text4Copy97}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid1101", tween: [ "style", "${_Text4Copy59}", "width", '86px', { fromValue: '86px'}], position: 0, duration: 0 },
            { id: "eid1998", tween: [ "style", "${_kai}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid3327", tween: [ "transform", "${_nno}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid1906", tween: [ "transform", "${_ki}", "scaleX", '1.01786', { fromValue: '1.01786'}], position: 0, duration: 0 },
            { id: "eid1695", tween: [ "style", "${_Text4Copy39}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid1564", tween: [ "style", "${_Text4Copy111}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid1993", tween: [ "style", "${_kee}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid573", tween: [ "color", "${_Text4Copy56}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid776", tween: [ "style", "${_Text4Copy22}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid3044", tween: [ "style", "${_yov}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid1484", tween: [ "style", "${_Text4Copy89}", "width", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
            { id: "eid1082", tween: [ "style", "${_Text4Copy49}", "left", '580px', { fromValue: '580px'}], position: 0, duration: 0 },
            { id: "eid1627", tween: [ "style", "${_Text4Copy206}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid3065", tween: [ "style", "${_handOverCopy159}", "top", '841px', { fromValue: '841px'}], position: 0, duration: 0 },
            { id: "eid1599", tween: [ "style", "${_Text4Copy56}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid1661", tween: [ "style", "${_Text4Copy106}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid2606", tween: [ "style", "${_si}", "top", '119px', { fromValue: '119px'}], position: 0, duration: 0 },
            { id: "eid2873", tween: [ "style", "${_nov}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid934", tween: [ "style", "${_Text4Copy91}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid1746", tween: [ "style", "${_Text4Copy43}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid1545", tween: [ "style", "${_Text4Copy153}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid1668", tween: [ "style", "${_Text4Copy74}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid2037", tween: [ "transform", "${_ngo}", "scaleX", '1.66071', { fromValue: '1.66071'}], position: 0, duration: 0 },
            { id: "eid3440", tween: [ "style", "${_tha}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid1754", tween: [ "style", "${_Text4Copy107}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid1561", tween: [ "style", "${_Text4Copy41}", "top", '76px', { fromValue: '76px'}], position: 0, duration: 0 },
            { id: "eid1563", tween: [ "style", "${_Text4Copy152}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid1681", tween: [ "style", "${_Text4Copy31}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1005", tween: [ "style", "${_Text4Copy27}", "left", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid2045", tween: [ "transform", "${_ngea}", "scaleX", '1.30357', { fromValue: '1.30357'}], position: 0, duration: 0 },
            { id: "eid979", tween: [ "style", "${_Text4Copy77}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0 },
            { id: "eid1670", tween: [ "style", "${_Text4Copy122}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid2590", tween: [ "transform", "${_nggo}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid1537", tween: [ "style", "${_Text4Copy232}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid2620", tween: [ "style", "${_sea}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid1603", tween: [ "style", "${_Text4Copy198}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid3058", tween: [ "style", "${_vo}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid565", tween: [ "color", "${_Text4Copy60}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1524", tween: [ "style", "${_Text4Copy200}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid1612", tween: [ "style", "${_Rectangle3Copy}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
            { id: "eid2576", tween: [ "transform", "${_ngov}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid1534", tween: [ "style", "${_Text4Copy207}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid3628", tween: [ "style", "${_pov}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid1992", tween: [ "style", "${_ki}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid1733", tween: [ "style", "${_Text4Copy154}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid1694", tween: [ "style", "${_Text4Copy179}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid1729", tween: [ "style", "${_Text4Copy66}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid1687", tween: [ "style", "${_Text4Copy26}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1611", tween: [ "style", "${_Text4Copy191}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid1594", tween: [ "style", "${_Text4Copy79}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid2705", tween: [ "style", "${_Nai}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid1656", tween: [ "style", "${_Text4Copy128}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid2070", tween: [ "style", "${_ngi}", "left", '190px', { fromValue: '190px'}], position: 0, duration: 0 },
            { id: "eid1526", tween: [ "style", "${_Text4Copy237}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid1624", tween: [ "style", "${_Text4Copy209}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid2694", tween: [ "style", "${_Na}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid2965", tween: [ "style", "${_handOverCopy132}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid2867", tween: [ "style", "${_nNo}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid2082", tween: [ "style", "${_ngu}", "left", '304px', { fromValue: '304px'}], position: 0, duration: 0 },
            { id: "eid3429", tween: [ "style", "${_thoo}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid1571", tween: [ "style", "${_Text4Copy210}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid1688", tween: [ "style", "${_Text4Copy27}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid3142", tween: [ "style", "${_Rea}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid2612", tween: [ "style", "${_su}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid2912", tween: [ "style", "${_ma}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid1701", tween: [ "style", "${_Text4Copy115}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid2699", tween: [ "style", "${_Nee}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid1529", tween: [ "style", "${_Text4Copy96}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid1920", tween: [ "transform", "${_koo}", "scaleX", '1.21429', { fromValue: '1.21429'}], position: 0, duration: 0 },
            { id: "eid2630", tween: [ "style", "${_so}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid1996", tween: [ "style", "${_kaa}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid564", tween: [ "color", "${_Text4Copy32}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1730", tween: [ "style", "${_Text4Copy126}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid768", tween: [ "style", "${_Text4Copy45}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid1514", tween: [ "style", "${_Rectangle3Copy}", "height", '1081px', { fromValue: '1081px'}], position: 0, duration: 0 },
            { id: "eid1541", tween: [ "style", "${_Rectangle3Copy5}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
            { id: "eid1702", tween: [ "style", "${_Text4Copy82}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid1913", tween: [ "style", "${_ku}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0 },
            { id: "eid602", tween: [ "color", "${_Text4Copy51}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1544", tween: [ "style", "${_Text4Copy155}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid1697", tween: [ "style", "${_Text4Copy38}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid3043", tween: [ "style", "${_ye}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid2905", tween: [ "style", "${_handOverCopy108}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid1635", tween: [ "style", "${_Text4Copy94}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid3384", tween: [ "style", "${_ka}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid1120", tween: [ "style", "${_Text4Copy82}", "left", '847px', { fromValue: '847px'}], position: 0, duration: 0 },
            { id: "eid1708", tween: [ "style", "${_Text4Copy112}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid1536", tween: [ "style", "${_Text4Copy130}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid1580", tween: [ "style", "${_Text4Copy227}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid2707", tween: [ "style", "${_No}", "top", '298px', { fromValue: '298px'}], position: 0, duration: 0 },
            { id: "eid2589", tween: [ "style", "${_nga}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid567", tween: [ "color", "${_Text4Copy44}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid3138", tween: [ "style", "${_Re}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid3091", tween: [ "style", "${_Lee}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1735", tween: [ "style", "${_Text4Copy139}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid2592", tween: [ "transform", "${_ngu}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid2062", tween: [ "transform", "${_nga}", "scaleX", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid2911", tween: [ "style", "${_handOverCopy107}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid2929", tween: [ "style", "${_rea}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid3365", tween: [ "style", "${_nno}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid1621", tween: [ "style", "${_Rectangle3Copy3}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
            { id: "eid766", tween: [ "style", "${_Text4Copy81}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid975", tween: [ "style", "${_Text4Copy26}", "left", '304px', { fromValue: '304px'}], position: 0, duration: 0 },
            { id: "eid566", tween: [ "color", "${_Text4Copy54}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid957", tween: [ "style", "${_Text4Copy90}", "left", '249px', { fromValue: '249px'}], position: 0, duration: 0 },
            { id: "eid1866", tween: [ "style", "${_Rectangle3Copy5}", "width", '102px', { fromValue: '102px'}], position: 0, duration: 0 },
            { id: "eid809", tween: [ "style", "${_Text4Copy92}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid1671", tween: [ "style", "${_Text4Copy226}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid1663", tween: [ "style", "${_Text4Copy71}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid3071", tween: [ "style", "${_zhea}", "top", '842px', { fromValue: '842px'}], position: 0, duration: 0 },
            { id: "eid1006", tween: [ "style", "${_Text4Copy100}", "left", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid2088", tween: [ "style", "${_ngea}", "left", '513px', { fromValue: '513px'}], position: 0, duration: 0 },
            { id: "eid3080", tween: [ "style", "${_zhov}", "top", '841px', { fromValue: '841px'}], position: 0, duration: 0 },
            { id: "eid3436", tween: [ "style", "${_handOverCopy7}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid2059", tween: [ "transform", "${_ngaa}", "scaleX", '1.26786', { fromValue: '1.26786'}], position: 0, duration: 0 },
            { id: "eid2676", tween: [ "transform", "${_nye}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid1597", tween: [ "style", "${_Rectangle3Copy8}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
            { id: "eid1749", tween: [ "style", "${_Text4Copy35}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid3428", tween: [ "style", "${_the}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid939", tween: [ "style", "${_Text4Copy55}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid3374", tween: [ "style", "${_Rectangle3Copy4}", "left", '503px', { fromValue: '503px'}], position: 0, duration: 0 },
            { id: "eid1606", tween: [ "style", "${_Text4Copy197}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid1482", tween: [ "style", "${_Text4Copy65}", "width", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid1628", tween: [ "style", "${_Text4Copy184}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid808", tween: [ "style", "${_Text4Copy23}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid3307", tween: [ "transform", "${_nne}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid2056", tween: [ "transform", "${_ngi}", "scaleX", '1.01786', { fromValue: '1.01786'}], position: 0, duration: 0 },
            { id: "eid1602", tween: [ "style", "${_Text4Copy129}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid1740", tween: [ "style", "${_Text4Copy127}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid601", tween: [ "color", "${_Text4Copy35}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1731", tween: [ "style", "${_Text4Copy85}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid1574", tween: [ "style", "${_Text4Copy171}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid953", tween: [ "style", "${_Text4Copy66}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid1586", tween: [ "style", "${_Text4Copy186}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid2647", tween: [ "style", "${_sso}", "left", '772px', { fromValue: '772px'}], position: 0, duration: 0 },
            { id: "eid2909", tween: [ "style", "${_mai}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid1711", tween: [ "style", "${_Text4Copy37}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid1122", tween: [ "style", "${_Text4Copy95}", "left", '758px', { fromValue: '758px'}], position: 0, duration: 0 },
            { id: "eid1543", tween: [ "style", "${_Text4Copy185}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid1127", tween: [ "style", "${_Text4Copy101}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid3323", tween: [ "transform", "${_handOverCopy203}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid2933", tween: [ "style", "${_ree}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid1108", tween: [ "style", "${_Text4Copy32}", "left", '758px', { fromValue: '758px'}], position: 0, duration: 0 },
            { id: "eid1583", tween: [ "style", "${_Text4Copy137}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid742", tween: [ "style", "${_Text4Copy65}", "font-size", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid1911", tween: [ "style", "${_kee}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid3311", tween: [ "transform", "${_nnai}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid1592", tween: [ "style", "${_Text4Copy108}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid812", tween: [ "style", "${_Text4Copy68}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid1087", tween: [ "style", "${_Text4Copy73}", "left", '579px', { fromValue: '579px'}], position: 0, duration: 0 },
            { id: "eid821", tween: [ "style", "${_Rectangle3Copy}", "width", '69px', { fromValue: '69px'}], position: 0, duration: 0 },
            { id: "eid1704", tween: [ "style", "${_Text4Copy156}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid3363", tween: [ "style", "${_handOverCopy203}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid3362", tween: [ "style", "${_nna}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid1726", tween: [ "style", "${_Text4Copy145}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid1520", tween: [ "style", "${_Rectangle3Copy3}", "height", '1081px', { fromValue: '1081px'}], position: 0, duration: 0 },
            { id: "eid3135", tween: [ "style", "${_Roo}", "top", '961px', { fromValue: '961px'}], position: 0, duration: 0 },
            { id: "eid3056", tween: [ "style", "${_vai}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid3361", tween: [ "style", "${_nnov}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid1991", tween: [ "style", "${_koo}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid3357", tween: [ "style", "${_nnai}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid2042", tween: [ "transform", "${_ngai}", "scaleX", '1.48214', { fromValue: '1.48214'}], position: 0, duration: 0 },
            { id: "eid637", tween: [ "style", "${_Text4Copy81}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid3565", tween: [ "style", "${_nai}", "left", '591px', { fromValue: '591px'}], position: 0, duration: 0 },
            { id: "eid1689", tween: [ "style", "${_Text4Copy29}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1625", tween: [ "style", "${_Text4Copy208}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid1254", tween: [ "style", "${_RectangleCopy}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid3418", tween: [ "transform", "${_thov}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid1610", tween: [ "style", "${_Text4Copy192}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid978", tween: [ "style", "${_Text4Copy53}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0 },
            { id: "eid2048", tween: [ "transform", "${_nge}", "scaleX", '1.33929', { fromValue: '1.33929'}], position: 0, duration: 0 },
            { id: "eid3632", tween: [ "style", "${_paa}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid3637", tween: [ "style", "${_pai}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid2003", tween: [ "style", "${_Text4Copy33}", "width", '105px', { fromValue: '105px'}], position: 0, duration: 0 },
            { id: "eid1550", tween: [ "style", "${_Text4Copy149}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid1528", tween: [ "style", "${_Text4Copy93}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid1560", tween: [ "style", "${_Text4Copy175}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid574", tween: [ "color", "${_Text4Copy33}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid3119", tween: [ "style", "${_Lov}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1660", tween: [ "style", "${_Text4Copy234}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid2886", tween: [ "transform", "${_nee}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid2698", tween: [ "style", "${_handOverCopy64}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid1734", tween: [ "style", "${_Text4Copy148}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid1577", tween: [ "style", "${_Text4Copy168}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid2076", tween: [ "style", "${_ngee}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid1699", tween: [ "style", "${_Text4Copy178}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid1722", tween: [ "style", "${_Text4Copy104}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid2913", tween: [ "style", "${_mo}", "top", '543px', { fromValue: '543px'}], position: 0, duration: 0 },
            { id: "eid810", tween: [ "style", "${_Text4Copy104}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid2908", tween: [ "style", "${_mee}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid3426", tween: [ "style", "${_thea}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid2639", tween: [ "style", "${_saa}", "left", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid600", tween: [ "color", "${_Text4Copy46}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2049", tween: [ "transform", "${_ngoo}", "scaleX", '1.21429', { fromValue: '1.21429'}], position: 0, duration: 0 },
            { id: "eid2586", tween: [ "transform", "${_ngee}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid1619", tween: [ "style", "${_Text4Copy125}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid1667", tween: [ "style", "${_RectangleCopy4}", "top", '419px', { fromValue: '419px'}], position: 0, duration: 0 },
            { id: "eid2646", tween: [ "style", "${_se}", "left", '438px', { fromValue: '438px'}], position: 0, duration: 0 },
            { id: "eid1252", tween: [ "style", "${_RectangleCopy4}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid1607", tween: [ "style", "${_Text4Copy195}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid1747", tween: [ "style", "${_Text4Copy114}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid2001", tween: [ "style", "${_kko}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid1669", tween: [ "style", "${_Text4Copy159}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid1394", tween: [ "style", "${_Text4Copy202}", "left", '845px', { fromValue: '845px'}], position: 0, duration: 0 },
            { id: "eid1634", tween: [ "style", "${_Text4Copy225}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid1575", tween: [ "style", "${_Text4Copy170}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid2581", tween: [ "style", "${_ngi}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid1124", tween: [ "style", "${_Text4Copy47}", "left", '757px', { fromValue: '757px'}], position: 0, duration: 0 },
            { id: "eid1720", tween: [ "style", "${_Text4Copy100}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid603", tween: [ "color", "${_Text4Copy52}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid765", tween: [ "style", "${_Text4Copy22}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid1654", tween: [ "style", "${_Text4Copy161}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid1736", tween: [ "style", "${_Text4Copy69}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid2578", tween: [ "transform", "${_ngo}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid1028", tween: [ "style", "${_Text4Copy39}", "left", '434px', { fromValue: '434px'}], position: 0, duration: 0 },
            { id: "eid2881", tween: [ "style", "${_nai}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid2937", tween: [ "style", "${_roo}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid1665", tween: [ "style", "${_Text4Copy150}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid591", tween: [ "color", "${_Text4Copy42}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1123", tween: [ "style", "${_Text4Copy59}", "left", '758px', { fromValue: '758px'}], position: 0, duration: 0 },
            { id: "eid579", tween: [ "color", "${_Text4Copy53}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid777", tween: [ "style", "${_Text4Copy45}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid592", tween: [ "color", "${_Text4Copy23}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1088", tween: [ "style", "${_Rectangle3Copy8}", "left", '660px', { fromValue: '660px'}], position: 0, duration: 0 },
            { id: "eid1249", tween: [ "style", "${_RectangleCopy6}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid2638", tween: [ "style", "${_sa}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid937", tween: [ "style", "${_Text4Copy43}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid1626", tween: [ "style", "${_Text4Copy141}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid2608", tween: [ "style", "${_see}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid606", tween: [ "color", "${_Text4Copy27}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2026", tween: [ "style", "${_Text4Copy22}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
            { id: "eid1725", tween: [ "style", "${_Text4Copy49}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid3356", tween: [ "style", "${_nnno}", "top", '1018px', { fromValue: '1018px'}], position: 0, duration: 0 },
            { id: "eid3441", tween: [ "style", "${_theeCopy}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid2641", tween: [ "style", "${_see}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid2673", tween: [ "style", "${_nyoo}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid3052", tween: [ "style", "${_voo}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid577", tween: [ "color", "${_Text4Copy38}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2869", tween: [ "style", "${_na}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid3364", tween: [ "style", "${_handOverCopy204}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid2964", tween: [ "style", "${_llo}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid3422", tween: [ "transform", "${_tho}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid1340", tween: [ "style", "${_Text4Copy187}", "left", '188px', { fromValue: '188px'}], position: 0, duration: 0 },
            { id: "eid1742", tween: [ "style", "${_Text4Copy61}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid1617", tween: [ "style", "${_Text4Copy67}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid1031", tween: [ "style", "${_Text4Copy51}", "left", '431px', { fromValue: '431px'}], position: 0, duration: 0 },
            { id: "eid3431", tween: [ "style", "${_thu}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid569", tween: [ "color", "${_Text4Copy30}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid598", tween: [ "color", "${_Text4Copy67}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1558", tween: [ "style", "${_Text4Copy176}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid1245", tween: [ "style", "${_RectangleCopy3}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid1542", tween: [ "style", "${_RectangleCopy2}", "top", '174px', { fromValue: '174px'}], position: 0, duration: 0 },
            { id: "eid763", tween: [ "style", "${_Text4Copy105}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid3325", tween: [ "transform", "${_nnee}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid1647", tween: [ "style", "${_Text4Copy229}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid2966", tween: [ "style", "${_lov}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid2932", tween: [ "style", "${_ra}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid1685", tween: [ "style", "${_Text4Copy70}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid1126", tween: [ "style", "${_Text4Copy103}", "width", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
            { id: "eid1547", tween: [ "style", "${_RectangleCopy8}", "top", '897px', { fromValue: '897px'}], position: 0, duration: 0 },
            { id: "eid1601", tween: [ "style", "${_Text4Copy165}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid3034", tween: [ "style", "${_handOverCopy144}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid2669", tween: [ "style", "${_nyu}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid1010", tween: [ "style", "${_Text4Copy76}", "left", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid1095", tween: [ "style", "${_Text4Copy71}", "width", '86px', { fromValue: '86px'}], position: 0, duration: 0 },
            { id: "eid2930", tween: [ "style", "${_handOverCopy119}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid2879", tween: [ "style", "${_noo}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid607", tween: [ "color", "${_Text4Copy45}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid779", tween: [ "style", "${_Text4Copy69}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid1614", tween: [ "style", "${_Text4Copy72}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid1659", tween: [ "style", "${_Text4Copy235}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid1743", tween: [ "style", "${_Text4Copy109}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid949", tween: [ "style", "${_Text4Copy102}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid2582", tween: [ "transform", "${_ngaa}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid3317", tween: [ "transform", "${_nnea}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid2906", tween: [ "style", "${_mmo}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid2973", tween: [ "style", "${_lai}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid1342", tween: [ "style", "${_Rectangle3Copy3}", "left", '359px', { fromValue: '359px'}], position: 0, duration: 0 },
            { id: "eid1999", tween: [ "style", "${_ko}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid1994", tween: [ "style", "${_ke}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid1527", tween: [ "style", "${_Text4Copy105}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid3049", tween: [ "style", "${_handOverCopy148}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid943", tween: [ "style", "${_Text4Copy24}", "left", '191px', { fromValue: '191px'}], position: 0, duration: 0 },
            { id: "eid894", tween: [ "style", "${_Rectangle3Copy2}", "width", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid1562", tween: [ "style", "${_Text4Copy174}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid576", tween: [ "color", "${_Text4Copy24}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1693", tween: [ "style", "${_Text4Copy42}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid1109", tween: [ "style", "${_Text4Copy35}", "left", '757px', { fromValue: '757px'}], position: 0, duration: 0 },
            { id: "eid1613", tween: [ "style", "${_Text4Copy190}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid2701", tween: [ "style", "${_Noo}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid2677", tween: [ "style", "${_nye}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid1344", tween: [ "style", "${_Text4Copy186}", "left", '244px', { fromValue: '244px'}], position: 0, duration: 0 },
            { id: "eid2078", tween: [ "style", "${_nga}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid1718", tween: [ "style", "${_Text4Copy89}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid3630", tween: [ "style", "${_pee}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid3074", tween: [ "style", "${_zhai}", "top", '841px', { fromValue: '841px'}], position: 0, duration: 0 },
            { id: "eid1946", tween: [ "style", "${_kai}", "left", '591px', { fromValue: '591px'}], position: 0, duration: 0 },
            { id: "eid1684", tween: [ "style", "${_Text4Copy25}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid3116", tween: [ "style", "${_LLo}", "top", '899px', { fromValue: '899px'}], position: 0, duration: 0 },
            { id: "eid2692", tween: [ "transform", "${_ddo}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid1554", tween: [ "style", "${_Text4Copy92}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid1253", tween: [ "style", "${_RectangleCopy7}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid2004", tween: [ "transform", "${_kov}", "scaleX", '1.82143', { fromValue: '1.82143'}], position: 0, duration: 0 },
            { id: "eid1125", tween: [ "style", "${_Text4Copy104}", "left", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
            { id: "eid3321", tween: [ "transform", "${_handOverCopy204}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid583", tween: [ "color", "${_Text4Copy36}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1589", tween: [ "style", "${_Text4Copy215}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid1009", tween: [ "style", "${_Text4Copy64}", "left", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid2663", tween: [ "transform", "${_handOverCopy40}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid940", tween: [ "style", "${_Text4Copy79}", "left", '190px', { fromValue: '190px'}], position: 0, duration: 0 },
            { id: "eid968", tween: [ "style", "${_Text4Copy101}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0 },
            { id: "eid1609", tween: [ "style", "${_Text4Copy193}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid3359", tween: [ "style", "${_nnee}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid2927", tween: [ "style", "${_re}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid2872", tween: [ "transform", "${_nov}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid3634", tween: [ "style", "${_pe}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid3383", tween: [ "transform", "${_ka}", "scaleX", '1.01786', { fromValue: '1.01786'}], position: 0, duration: 0 },
            { id: "eid1630", tween: [ "style", "${_Text4Copy143}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid2633", tween: [ "style", "${_sso}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid1004", tween: [ "style", "${_Text4Copy52}", "left", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid822", tween: [ "style", "${_Rectangle3Copy}", "left", '119px', { fromValue: '119px'}], position: 0, duration: 0 },
            { id: "eid3077", tween: [ "style", "${_zzho}", "top", '842px', { fromValue: '842px'}], position: 0, duration: 0 },
            { id: "eid1247", tween: [ "style", "${_RectangleCopy8}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid1658", tween: [ "style", "${_Text4Copy236}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid1081", tween: [ "style", "${_Text4Copy85}", "left", '579px', { fromValue: '579px'}], position: 0, duration: 0 },
            { id: "eid3036", tween: [ "style", "${_ya}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid1907", tween: [ "style", "${_ki}", "left", '190px', { fromValue: '190px'}], position: 0, duration: 0 },
            { id: "eid593", tween: [ "color", "${_Text4Copy43}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1618", tween: [ "style", "${_Text4Copy73}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid1238", tween: [ "style", "${_Text4Copy109}", "left", '583px', { fromValue: '583px'}], position: 0, duration: 0 },
            { id: "eid1719", tween: [ "style", "${_Text4Copy60}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid2703", tween: [ "style", "${_Ne}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid1007", tween: [ "style", "${_Text4Copy88}", "left", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid1237", tween: [ "style", "${_Text4Copy97}", "left", '583px', { fromValue: '583px'}], position: 0, duration: 0 },
            { id: "eid3124", tween: [ "style", "${_handOverCopy184}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid1567", tween: [ "style", "${_Text4Copy48}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid2968", tween: [ "style", "${_handOverCopy131}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid1581", tween: [ "style", "${_Text4Copy75}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid2579", tween: [ "style", "${_ngo}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid1251", tween: [ "style", "${_RectangleCopy9}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid3083", tween: [ "style", "${_La}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1008", tween: [ "style", "${_Text4Copy40}", "left", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid2068", tween: [ "style", "${_ngo}", "left", '680px', { fromValue: '680px'}], position: 0, duration: 0 },
            { id: "eid3039", tween: [ "style", "${_yoo}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid2910", tween: [ "style", "${_mov}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid1632", tween: [ "style", "${_Text4Copy230}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid1636", tween: [ "style", "${_Text4Copy53}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid1631", tween: [ "style", "${_Text4Copy202}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid1752", tween: [ "style", "${_Text4Copy58}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid2074", tween: [ "style", "${_ngai}", "left", '592px', { fromValue: '592px'}], position: 0, duration: 0 },
            { id: "eid1686", tween: [ "style", "${_Text4Copy157}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid1745", tween: [ "style", "${_RectangleCopy}", "top", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid2904", tween: [ "style", "${_me}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid811", tween: [ "style", "${_Text4Copy80}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid3358", tween: [ "style", "${_nnoo}", "top", '1020px', { fromValue: '1020px'}], position: 0, duration: 0 },
            { id: "eid1707", tween: [ "style", "${_Text4Copy142}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid599", tween: [ "color", "${_Text4Copy50}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1590", tween: [ "style", "${_Text4Copy182}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid3171", tween: [ "style", "${_Ro}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid1479", tween: [ "style", "${_Text4Copy26}", "width", '54px', { fromValue: '54px'}], position: 0, duration: 0 },
            { id: "eid1716", tween: [ "style", "${_Text4Copy54}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid2969", tween: [ "style", "${_le}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid1516", tween: [ "style", "${_Rectangle3Copy4}", "height", '1081px', { fromValue: '1081px'}], position: 0, duration: 0 },
            { id: "eid1648", tween: [ "style", "${_Text4Copy213}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid1236", tween: [ "style", "${_Text4Copy145}", "left", '583px', { fromValue: '583px'}], position: 0, duration: 0 },
            { id: "eid2597", tween: [ "style", "${_ngoo}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid1995", tween: [ "style", "${_kov}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid3070", tween: [ "style", "${_zhe}", "top", '842px', { fromValue: '842px'}], position: 0, duration: 0 },
            { id: "eid1739", tween: [ "style", "${_Text4Copy218}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid1084", tween: [ "style", "${_Text4Copy61}", "left", '580px', { fromValue: '580px'}], position: 0, duration: 0 },
            { id: "eid764", tween: [ "style", "${_Text4Copy93}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid1705", tween: [ "style", "${_Text4Copy146}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid1642", tween: [ "style", "${_Text4Copy228}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid2066", tween: [ "style", "${_ngov}", "left", '869px', { fromValue: '869px'}], position: 0, duration: 0 },
            { id: "eid2926", tween: [ "style", "${_ro}", "top", '663px', { fromValue: '663px'}], position: 0, duration: 0 },
            { id: "eid1649", tween: [ "style", "${_Text4Copy44}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid3417", tween: [ "style", "${_thov}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid1480", tween: [ "style", "${_Text4Copy41}", "width", '54px', { fromValue: '54px'}], position: 0, duration: 0 },
            { id: "eid3420", tween: [ "style", "${_ttho}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid571", tween: [ "color", "${_Text4Copy25}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid575", tween: [ "color", "${_Text4Copy29}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2593", tween: [ "style", "${_ngu}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid1483", tween: [ "style", "${_Text4Copy77}", "width", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid1950", tween: [ "transform", "${_ko}", "scaleX", '1.66071', { fromValue: '1.66071'}], position: 0, duration: 0 },
            { id: "eid3430", tween: [ "transform", "${_thoo}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid1748", tween: [ "style", "${_Text4Copy124}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_output}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1539", tween: [ "style", "${_RectangleCopy7}", "top", '779px', { fromValue: '779px'}], position: 0, duration: 0 },
            { id: "eid3438", tween: [ "transform", "${_handOverCopy8}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid1066", tween: [ "style", "${_Text4Copy29}", "left", '505px', { fromValue: '505px'}], position: 0, duration: 0 },
            { id: "eid1525", tween: [ "style", "${_Text4Copy134}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid960", tween: [ "style", "${_Text4Copy54}", "width", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid3373", tween: [ "style", "${_Rectangle3Copy4}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
            { id: "eid2963", tween: [ "style", "${_la}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid1246", tween: [ "style", "${_RectangleCopy5}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid594", tween: [ "color", "${_Text4Copy62}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid897", tween: [ "style", "${_Text4Copy90}", "width", '50px', { fromValue: '50px'}], position: 0, duration: 0 },
            { id: "eid3629", tween: [ "style", "${_pu}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid562", tween: [ "color", "${_Text4Copy31}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1715", tween: [ "style", "${_Text4Copy51}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid3636", tween: [ "style", "${_po}", "top", '484px', { fromValue: '484px'}], position: 0, duration: 0 },
            { id: "eid596", tween: [ "color", "${_Text4Copy64}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2617", tween: [ "style", "${_se}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid2936", tween: [ "style", "${_rov}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid1629", tween: [ "style", "${_Text4Copy203}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid3633", tween: [ "style", "${_pea}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid1097", tween: [ "style", "${_Text4Copy95}", "width", '86px', { fromValue: '86px'}], position: 0, duration: 0 },
            { id: "eid1570", tween: [ "style", "${_RectangleCopy5}", "top", '539px', { fromValue: '539px'}], position: 0, duration: 0 },
            { id: "eid2878", tween: [ "transform", "${_noo}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid1727", tween: [ "style", "${_Text4Copy188}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid3423", tween: [ "transform", "${_thai}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid1945", tween: [ "transform", "${_kai}", "scaleX", '1.48214', { fromValue: '1.48214'}], position: 0, duration: 0 },
            { id: "eid2033", tween: [ "transform", "${_ngov}", "scaleX", '1.82143', { fromValue: '1.82143'}], position: 0, duration: 0 },
            { id: "eid585", tween: [ "color", "${_Text4Copy34}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2653", tween: [ "style", "${_saa}", "top", '119px', { fromValue: '119px'}], position: 0, duration: 0 },
            { id: "eid936", tween: [ "style", "${_Text4Copy24}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid1559", tween: [ "style", "${_Text4Copy113}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid2599", tween: [ "style", "${_ngea}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid3076", tween: [ "style", "${_zho}", "top", '841px', { fromValue: '841px'}], position: 0, duration: 0 },
            { id: "eid3319", tween: [ "transform", "${_nna}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid2584", tween: [ "transform", "${_ngai}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid3631", tween: [ "style", "${_pi}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid1244", tween: [ "style", "${_Rectangle3Copy5}", "left", '845px', { fromValue: '845px'}], position: 0, duration: 0 },
            { id: "eid1582", tween: [ "style", "${_Text4Copy30}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid3055", tween: [ "style", "${_vea}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid3112", tween: [ "style", "${_Lo}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid1709", tween: [ "style", "${_Text4Copy160}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid1921", tween: [ "style", "${_koo}", "left", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid815", tween: [ "style", "${_Text4Copy68}", "left", '123px', { fromValue: '123px'}], position: 0, duration: 0 },
            { id: "eid3174", tween: [ "style", "${_Rai}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid1071", tween: [ "style", "${_Text4Copy86}", "left", '506px', { fromValue: '506px'}], position: 0, duration: 0 },
            { id: "eid1690", tween: [ "style", "${_Text4Copy166}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid2902", tween: [ "style", "${_mu}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid2880", tween: [ "transform", "${_nai}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid3045", tween: [ "style", "${_yo}", "top", '602px', { fromValue: '602px'}], position: 0, duration: 0 },
            { id: "eid941", tween: [ "style", "${_Text4Copy55}", "left", '191px', { fromValue: '191px'}], position: 0, duration: 0 },
            { id: "eid1643", tween: [ "style", "${_Text4Copy221}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid3415", tween: [ "style", "${_ku}", "clip", [0,56,56,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,56,56,0]}], position: 0, duration: 0 },
            { id: "eid1587", tween: [ "style", "${_Text4Copy205}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid1676", tween: [ "style", "${_RectangleCopy3}", "top", '295px', { fromValue: '295px'}], position: 0, duration: 0 },
            { id: "eid2708", tween: [ "style", "${_NNo}", "top", '298px', { fromValue: '298px'}], position: 0, duration: 0 },
            { id: "eid1568", tween: [ "style", "${_Text4Copy131}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid1572", tween: [ "style", "${_Text4Copy172}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid1674", tween: [ "style", "${_Text4Copy135}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid3419", tween: [ "transform", "${_ttho}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid2682", tween: [ "style", "${_nyai}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid1275", tween: [ "style", "${_RectangleCopy9}", "height", '62px', { fromValue: '62px'}], position: 0, duration: 0 },
            { id: "eid3173", tween: [ "style", "${_RRo}", "top", '959px', { fromValue: '959px'}], position: 0, duration: 0 },
            { id: "eid2649", tween: [ "style", "${_sov}", "left", '868px', { fromValue: '868px'}], position: 0, duration: 0 },
            { id: "eid2005", tween: [ "style", "${_kov}", "left", '868px', { fromValue: '868px'}], position: 0, duration: 0 },
            { id: "eid3309", tween: [ "transform", "${_nnno}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid806", tween: [ "style", "${_Text4Copy44}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid942", tween: [ "style", "${_Text4Copy43}", "left", '191px', { fromValue: '191px'}], position: 0, duration: 0 },
            { id: "eid3313", tween: [ "transform", "${_nnoo}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid2583", tween: [ "style", "${_ngaa}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid2693", tween: [ "style", "${_ddo}", "top", '238px', { fromValue: '238px'}], position: 0, duration: 0 },
            { id: "eid944", tween: [ "style", "${_Text4Copy67}", "left", '191px', { fromValue: '191px'}], position: 0, duration: 0 },
            { id: "eid1721", tween: [ "style", "${_Text4Copy136}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid1107", tween: [ "style", "${_Text4Copy35}", "width", '86px', { fromValue: '86px'}], position: 0, duration: 0 },
            { id: "eid3060", tween: [ "style", "${_vov}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid2668", tween: [ "style", "${_nyee}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid2931", tween: [ "style", "${_ru}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid1680", tween: [ "style", "${_Text4Copy24}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid3040", tween: [ "style", "${_yyo}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid1615", tween: [ "style", "${_Text4Copy99}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid2934", tween: [ "style", "${_rro}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid2086", tween: [ "style", "${_ngoo}", "left", '366px', { fromValue: '366px'}], position: 0, duration: 0 },
            { id: "eid3432", tween: [ "transform", "${_thu}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid1645", tween: [ "style", "${_Text4Copy164}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid1700", tween: [ "style", "${_Text4Copy57}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid1608", tween: [ "style", "${_Text4Copy194}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid956", tween: [ "style", "${_Rectangle3Copy2}", "left", '245px', { fromValue: '245px'}], position: 0, duration: 0 },
            { id: "eid1712", tween: [ "style", "${_Text4Copy102}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid1086", tween: [ "style", "${_Text4Copy37}", "left", '580px', { fromValue: '580px'}], position: 0, duration: 0 },
            { id: "eid1622", tween: [ "style", "${_Text4Copy151}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid963", tween: [ "style", "${_Text4Copy42}", "width", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid1546", tween: [ "style", "${_Text4Copy222}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid2704", tween: [ "style", "${_Nea}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid1698", tween: [ "style", "${_Text4Copy59}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid1927", tween: [ "style", "${_ke}", "left", '437px', { fromValue: '437px'}], position: 0, duration: 0 },
            { id: "eid1553", tween: [ "style", "${_Text4Copy45}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid1555", tween: [ "style", "${_Text4Copy110}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid947", tween: [ "style", "${_Text4Copy25}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid946", tween: [ "style", "${_Text4Copy103}", "left", '190px', { fromValue: '190px'}], position: 0, duration: 0 },
            { id: "eid2643", tween: [ "style", "${_si}", "left", '190px', { fromValue: '190px'}], position: 0, duration: 0 },
            { id: "eid1548", tween: [ "style", "${_Text4Copy187}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid1099", tween: [ "style", "${_Text4Copy32}", "width", '86px', { fromValue: '86px'}], position: 0, duration: 0 },
            { id: "eid605", tween: [ "color", "${_Text4Copy49}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid962", tween: [ "style", "${_Text4Copy25}", "width", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid604", tween: [ "color", "${_Text4Copy28}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1105", tween: [ "style", "${_Text4Copy47}", "width", '86px', { fromValue: '86px'}], position: 0, duration: 0 },
            { id: "eid2928", tween: [ "style", "${_handOverCopy120}", "top", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid1926", tween: [ "transform", "${_ke}", "scaleX", '1.33929', { fromValue: '1.33929'}], position: 0, duration: 0 },
            { id: "eid1540", tween: [ "style", "${_Text4Copy117}", "top", '430px', { fromValue: '430px'}], position: 0, duration: 0 },
            { id: "eid3066", tween: [ "style", "${_handOverCopy160}", "top", '842px', { fromValue: '842px'}], position: 0, duration: 0 },
            { id: "eid3315", tween: [ "transform", "${_nnov}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid1744", tween: [ "style", "${_Text4Copy90}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid2655", tween: [ "transform", "${_handOverCopy39}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid2587", tween: [ "style", "${_ngee}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid3128", tween: [ "style", "${_Ree}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid1662", tween: [ "style", "${_Text4Copy233}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid762", tween: [ "style", "${_Text4Copy69}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid3626", tween: [ "style", "${_pa}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid1584", tween: [ "style", "${_Text4Copy118}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid1556", tween: [ "style", "${_Text4Copy177}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid2595", tween: [ "style", "${_nge}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid2664", tween: [ "style", "${_handOverCopy40}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid1532", tween: [ "style", "${_Text4Copy88}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid1522", tween: [ "style", "${_Rectangle3Copy2}", "height", '1081px', { fromValue: '1081px'}], position: 0, duration: 0 },
            { id: "eid582", tween: [ "color", "${_Text4Copy68}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1655", tween: [ "style", "${_Text4Copy214}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid608", tween: [ "color", "${_Text4Copy40}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1067", tween: [ "style", "${_Text4Copy74}", "left", '505px', { fromValue: '505px'}], position: 0, duration: 0 },
            { id: "eid1641", tween: [ "style", "${_Text4Copy36}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid2644", tween: [ "style", "${_su}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0 },
            { id: "eid2967", tween: [ "style", "${_lu}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid3639", tween: [ "style", "${_sai}", "left", '591px', { fromValue: '591px'}], position: 0, duration: 0 },
            { id: "eid1557", tween: [ "style", "${_Text4Copy87}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid1551", tween: [ "style", "${_Text4Copy121}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid2884", tween: [ "transform", "${_handOverCopy95}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid1646", tween: [ "style", "${_Text4Copy219}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid1755", tween: [ "style", "${_Text4Copy103}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid952", tween: [ "style", "${_Text4Copy54}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid1653", tween: [ "style", "${_Text4Copy183}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid3063", tween: [ "style", "${_zha}", "top", '842px', { fromValue: '842px'}], position: 0, duration: 0 },
            { id: "eid1691", tween: [ "style", "${_Text4Copy33}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid1578", tween: [ "style", "${_Text4Copy132}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid2034", tween: [ "transform", "${_nggo}", "scaleX", '1.64286', { fromValue: '1.64286'}], position: 0, duration: 0 },
            { id: "eid3329", tween: [ "transform", "${_nnu}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid1090", tween: [ "style", "${_Rectangle3Copy8}", "width", '92px', { fromValue: '92px'}], position: 0, duration: 0 },
            { id: "eid807", tween: [ "style", "${_Text4Copy56}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid2672", tween: [ "transform", "${_nyoo}", "scaleY", '1.06095', { fromValue: '1.06095'}], position: 0, duration: 0 },
            { id: "eid1518", tween: [ "style", "${_Rectangle3Copy8}", "height", '1081px', { fromValue: '1081px'}], position: 0, duration: 0 },
            { id: "eid971", tween: [ "style", "${_Text4Copy65}", "left", '303px', { fromValue: '303px'}], position: 0, duration: 0 },
            { id: "eid1065", tween: [ "style", "${_Text4Copy62}", "left", '505px', { fromValue: '505px'}], position: 0, duration: 0 },
            { id: "eid1732", tween: [ "style", "${_Text4Copy77}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid3366", tween: [ "style", "${_nnu}", "top", '1020px', { fromValue: '1020px'}], position: 0, duration: 0 },
            { id: "eid1710", tween: [ "style", "${_Text4Copy65}", "top", '191px', { fromValue: '191px'}], position: 0, duration: 0 },
            { id: "eid3427", tween: [ "transform", "${_the}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid1103", tween: [ "style", "${_Text4Copy83}", "width", '86px', { fromValue: '86px'}], position: 0, duration: 0 },
            { id: "eid1012", tween: [ "style", "${_Text4Copy89}", "left", '302px', { fromValue: '302px'}], position: 0, duration: 0 },
            { id: "eid1593", tween: [ "style", "${_Text4Copy181}", "top", '790px', { fromValue: '790px'}], position: 0, duration: 0 },
            { id: "eid767", tween: [ "style", "${_Text4Copy57}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid1345", tween: [ "style", "${_Text4Copy188}", "left", '122px', { fromValue: '122px'}], position: 0, duration: 0 },
            { id: "eid3635", tween: [ "style", "${_ppo}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid2871", tween: [ "style", "${_nu}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid1073", tween: [ "style", "${_Rectangle3Copy4}", "width", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
            { id: "eid2883", tween: [ "style", "${_handOverCopy96}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid1957", tween: [ "style", "${_kko}", "left", '772px', { fromValue: '772px'}], position: 0, duration: 0 },
            { id: "eid3041", tween: [ "style", "${_handOverCopy143}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid2700", tween: [ "style", "${_Nu}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid590", tween: [ "color", "${_Text4Copy26}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1085", tween: [ "style", "${_Text4Copy30}", "left", '580px', { fromValue: '580px'}], position: 0, duration: 0 },
            { id: "eid2577", tween: [ "style", "${_ngov}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid589", tween: [ "color", "${_Text4Copy61}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid778", tween: [ "style", "${_Text4Copy57}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid948", tween: [ "style", "${_Text4Copy42}", "left", '245px', { fromValue: '245px'}], position: 0, duration: 0 },
            { id: "eid3067", tween: [ "style", "${_zhee}", "top", '842px', { fromValue: '842px'}], position: 0, duration: 0 },
            { id: "eid2962", tween: [ "style", "${_loo}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid2903", tween: [ "style", "${_mea}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid3442", tween: [ "transform", "${_theeCopy}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid2580", tween: [ "transform", "${_ngi}", "scaleY", '1.03571', { fromValue: '1.03571'}], position: 0, duration: 0 },
            { id: "eid1620", tween: [ "style", "${_Text4Copy204}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid1569", tween: [ "style", "${_Text4Copy140}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid2971", tween: [ "style", "${_lea}", "top", '722px', { fromValue: '722px'}], position: 0, duration: 0 },
            { id: "eid1531", tween: [ "style", "${_Text4Copy101}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid2652", tween: [ "style", "${_nya}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid1033", tween: [ "style", "${_Text4Copy63}", "left", '431px', { fromValue: '431px'}], position: 0, duration: 0 },
            { id: "eid1880", tween: [ "style", "${_Text6}", "text-align", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid2679", tween: [ "style", "${_nyea}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid1241", tween: [ "style", "${_Text4Copy143}", "left", '757px', { fromValue: '757px'}], position: 0, duration: 0 },
            { id: "eid2656", tween: [ "style", "${_handOverCopy39}", "top", '177px', { fromValue: '177px'}], position: 0, duration: 0 },
            { id: "eid3068", tween: [ "style", "${_zhu}", "top", '842px', { fromValue: '842px'}], position: 0, duration: 0 },
            { id: "eid818", tween: [ "style", "${_Text4Copy92}", "left", '123px', { fromValue: '123px'}], position: 0, duration: 0 },
            { id: "eid965", tween: [ "style", "${_Text4Copy102}", "width", '55px', { fromValue: '55px'}], position: 0, duration: 0 },
            { id: "eid813", tween: [ "style", "${_Text4Copy44}", "left", '123px', { fromValue: '123px'}], position: 0, duration: 0 },
            { id: "eid1604", tween: [ "style", "${_Text4Copy196}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid1652", tween: [ "style", "${_Text4Copy216}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid1633", tween: [ "style", "${_Text4Copy76}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid2868", tween: [ "transform", "${_na}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid819", tween: [ "style", "${_Text4Copy56}", "left", '123px', { fromValue: '123px'}], position: 0, duration: 0 },
            { id: "eid2866", tween: [ "transform", "${_nNo}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid1935", tween: [ "style", "${_kea}", "left", '512px', { fromValue: '512px'}], position: 0, duration: 0 },
            { id: "eid1576", tween: [ "style", "${_Text4Copy169}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid563", tween: [ "color", "${_Text4Copy41}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1639", tween: [ "style", "${_Text4Copy81}", "top", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid1753", tween: [ "style", "${_Text4Copy163}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid587", tween: [ "color", "${_Text4Copy59}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid3048", tween: [ "style", "${_handOverCopy147}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid951", tween: [ "style", "${_Text4Copy78}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid3172", tween: [ "style", "${_Rov}", "top", '960px', { fromValue: '960px'}], position: 0, duration: 0 },
            { id: "eid817", tween: [ "style", "${_Text4Copy80}", "left", '122px', { fromValue: '122px'}], position: 0, duration: 0 },
            { id: "eid1242", tween: [ "style", "${_Text4Copy83}", "left", '756px', { fromValue: '756px'}], position: 0, duration: 0 },
            { id: "eid1657", tween: [ "style", "${_Text4Copy83}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid1093", tween: [ "style", "${_Text4Copy96}", "left", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid1637", tween: [ "style", "${_Text4Copy224}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid961", tween: [ "style", "${_Text4Copy66}", "width", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid611", tween: [ "color", "${_Text4Copy}", "color", 'rgba(255,6,29,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,6,29,1.00)'}], position: 0, duration: 0 },
            { id: "eid1706", tween: [ "style", "${_Text4Copy138}", "top", '550px', { fromValue: '550px'}], position: 0, duration: 0 },
            { id: "eid2084", tween: [ "style", "${_nge}", "left", '438px', { fromValue: '438px'}], position: 0, duration: 0 },
            { id: "eid1605", tween: [ "style", "${_Text4Copy47}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid1030", tween: [ "style", "${_Text4Copy99}", "left", '431px', { fromValue: '431px'}], position: 0, duration: 0 },
            { id: "eid1703", tween: [ "style", "${_Text4Copy201}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid610", tween: [ "color", "${_Text4Copy37}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1092", tween: [ "style", "${_Text4Copy84}", "left", '664px', { fromValue: '664px'}], position: 0, duration: 0 },
            { id: "eid1113", tween: [ "style", "${_Text4Copy71}", "left", '756px', { fromValue: '756px'}], position: 0, duration: 0 },
            { id: "eid3638", tween: [ "style", "${_sai}", "top", '119px', { fromValue: '119px'}], position: 0, duration: 0 },
            { id: "eid3435", tween: [ "transform", "${_handOverCopy7}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid2585", tween: [ "style", "${_ngai}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid2080", tween: [ "style", "${_nggo}", "left", '773px', { fromValue: '773px'}], position: 0, duration: 0 },
            { id: "eid1068", tween: [ "style", "${_Text4Copy98}", "left", '505px', { fromValue: '505px'}], position: 0, duration: 0 },
            { id: "eid3037", tween: [ "style", "${_yea}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid568", tween: [ "color", "${_Text4Copy55}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1650", tween: [ "style", "${_Text4Copy217}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid3059", tween: [ "style", "${_vvo}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid3360", tween: [ "style", "${_nnea}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid1713", tween: [ "style", "${_Text4Copy86}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid3439", tween: [ "transform", "${_tha}", "scaleY", '1.14286', { fromValue: '1.14286'}], position: 0, duration: 0 },
            { id: "eid1239", tween: [ "style", "${_Text4Copy121}", "left", '583px', { fromValue: '583px'}], position: 0, duration: 0 },
            { id: "eid1638", tween: [ "style", "${_Text4Copy91}", "top", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid1672", tween: [ "style", "${_RectangleCopy6}", "top", '659px', { fromValue: '659px'}], position: 0, duration: 0 },
            { id: "eid1714", tween: [ "style", "${_Text4Copy46}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid2870", tween: [ "transform", "${_nu}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid1651", tween: [ "style", "${_Text4Copy123}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid1535", tween: [ "style", "${_Text4Copy}", "top", '66px', { fromValue: '66px'}], position: 0, duration: 0 },
            { id: "eid597", tween: [ "color", "${_Text4Copy65}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid1724", tween: [ "style", "${_Text4Copy98}", "top", '367px', { fromValue: '367px'}], position: 0, duration: 0 },
            { id: "eid2876", tween: [ "transform", "${_ne}", "scaleY", '1.05357', { fromValue: '1.05357'}], position: 0, duration: 0 },
            { id: "eid935", tween: [ "style", "${_Text4Copy67}", "width", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid2000", tween: [ "style", "${_kea}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid741", tween: [ "style", "${_Text4Copy64}", "font-size", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid2875", tween: [ "style", "${_nea}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid1600", tween: [ "style", "${_Text4Copy199}", "top", '850px', { fromValue: '850px'}], position: 0, duration: 0 },
            { id: "eid1598", tween: [ "style", "${_Text4Copy52}", "top", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid1683", tween: [ "style", "${_Text4Copy120}", "top", '490px', { fromValue: '490px'}], position: 0, duration: 0 },
            { id: "eid1069", tween: [ "style", "${_Text4Copy38}", "left", '505px', { fromValue: '505px'}], position: 0, duration: 0 },
            { id: "eid2690", tween: [ "transform", "${_dov}", "scaleY", '1.07143', { fromValue: '1.07143'}], position: 0, duration: 0 },
            { id: "eid1696", tween: [ "style", "${_Text4Copy144}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid1343", tween: [ "style", "${_Text4Copy189}", "left", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid1616", tween: [ "style", "${_Text4Copy23}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid977", tween: [ "style", "${_Text4Copy41}", "left", '304px', { fromValue: '304px'}], position: 0, duration: 0 },
            { id: "eid1692", tween: [ "style", "${_Text4Copy34}", "top", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid1737", tween: [ "style", "${_Text4Copy68}", "top", '186px', { fromValue: '186px'}], position: 0, duration: 0 },
            { id: "eid2877", tween: [ "style", "${_ne}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid1751", tween: [ "style", "${_Text4Copy212}", "top", '908px', { fromValue: '908px'}], position: 0, duration: 0 },
            { id: "eid1997", tween: [ "style", "${_ku}", "top", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid1666", tween: [ "style", "${_Text4Copy231}", "top", '1028px', { fromValue: '1028px'}], position: 0, duration: 0 },
            { id: "eid3047", tween: [ "style", "${_va}", "top", '782px', { fromValue: '782px'}], position: 0, duration: 0 },
            { id: "eid1579", tween: [ "style", "${_Text4Copy167}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid1623", tween: [ "style", "${_Text4Copy28}", "top", '8px', { fromValue: '8px'}], position: 0, duration: 0 },
            { id: "eid584", tween: [ "color", "${_Text4Copy69}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2695", tween: [ "style", "${_handOverCopy63}", "top", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid2072", tween: [ "style", "${_ngaa}", "left", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
            { id: "eid595", tween: [ "color", "${_Text4Copy63}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid3042", tween: [ "style", "${_yee}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid3104", tween: [ "style", "${_Lea}", "top", '900px', { fromValue: '900px'}], position: 0, duration: 0 },
            { id: "eid2591", tween: [ "style", "${_nggo}", "top", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid3069", tween: [ "style", "${_zhoo}", "top", '842px', { fromValue: '842px'}], position: 0, duration: 0 },
            { id: "eid3035", tween: [ "style", "${_yai}", "top", '601px', { fromValue: '601px'}], position: 0, duration: 0 },
            { id: "eid578", tween: [ "color", "${_Text4Copy22}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2636", tween: [ "style", "${_sov}", "top", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid588", tween: [ "color", "${_Text4Copy57}", "color", 'rgba(38,1,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(38,1,1,1.00)'}], position: 0, duration: 0 },
            { id: "eid2907", tween: [ "style", "${_moo}", "top", '542px', { fromValue: '542px'}], position: 0, duration: 0 },
            { id: "eid1677", tween: [ "style", "${_Rectangle3Copy2}", "top", '-3px', { fromValue: '-3px'}], position: 0, duration: 0 },
            { id: "eid1951", tween: [ "style", "${_ko}", "left", '679px', { fromValue: '679px'}], position: 0, duration: 0 },
            { id: "eid2889", tween: [ "style", "${_no}", "top", '423px', { fromValue: '423px'}], position: 0, duration: 0 },
            { id: "eid1027", tween: [ "style", "${_Text4Copy75}", "left", '431px', { fromValue: '431px'}], position: 0, duration: 0 },
            { id: "eid2887", tween: [ "style", "${_nee}", "top", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid1640", tween: [ "style", "${_Text4Copy223}", "top", '967px', { fromValue: '967px'}], position: 0, duration: 0 },
            { id: "eid1573", tween: [ "style", "${_Text4Copy147}", "top", '610px', { fromValue: '610px'}], position: 0, duration: 0 },
            { id: "eid816", tween: [ "style", "${_Text4Copy23}", "left", '123px', { fromValue: '123px'}], position: 0, duration: 0 },
            { id: "eid1248", tween: [ "style", "${_RectangleCopy2}", "width", '947px', { fromValue: '947px'}], position: 0, duration: 0 },
            { id: "eid3627", tween: [ "style", "${_poo}", "top", '483px', { fromValue: '483px'}], position: 0, duration: 0 },
            { id: "eid1565", tween: [ "style", "${_Text4Copy173}", "top", '730px', { fromValue: '730px'}], position: 0, duration: 0 },
            { id: "eid1512", tween: [ "style", "${_Rectangle3Copy5}", "height", '1081px', { fromValue: '1081px'}], position: 0, duration: 0 },
            { id: "eid3131", tween: [ "style", "${_Ru}", "top", '961px', { fromValue: '961px'}], position: 0, duration: 0 },
            { id: "eid2691", tween: [ "style", "${_dov}", "top", '238px', { fromValue: '238px'}], position: 0, duration: 0 },
            { id: "eid1728", tween: [ "style", "${_Text4Copy158}", "top", '670px', { fromValue: '670px'}], position: 0, duration: 0 },
            { id: "eid736", tween: [ "style", "${_Text4Copy41}", "font-size", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid3424", tween: [ "style", "${_thai}", "top", '360px', { fromValue: '360px'}], position: 0, duration: 0 },
            { id: "eid3355", tween: [ "style", "${_nne}", "top", '1019px', { fromValue: '1019px'}], position: 0, duration: 0 },
            { id: "eid2601", tween: [ "style", "${_sa}", "top", '119px', { fromValue: '119px'}], position: 0, duration: 0 }         ]
      }
   }
},
"output": {
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
      rect: ['0px','0px','241px','139px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [4,'rgba(255,175,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['MyCustomFont',40,'rgba(38,1,1,1)','bold','none','normal'],
      type: 'text',
      id: 't1',
      text: 'f;',
      align: 'center',
      rect: ['6px','49px','42px','35px','auto','auto']
   },
   {
      font: ['MyCustomFont',40,'rgba(38,1,1,1)','bold','none','normal'],
      type: 'text',
      id: 't2',
      text: 'm',
      align: 'center',
      rect: ['67px','47px','66px','39px','auto','auto']
   },
   {
      font: ['MyCustomFont',40,'rgba(38,1,1,1)','bold','none','normal'],
      type: 'text',
      id: 't3',
      text: 'f',
      align: 'center',
      rect: ['154px','51px','88px','39px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',29,'rgba(38,1,1,1)','bold','none','normal'],
      type: 'text',
      id: 'Text7Copy',
      text: '+',
      align: 'center',
      rect: ['44px','51px','auto','auto','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',29,'rgba(38,1,1,1)','bold','none','normal'],
      type: 'text',
      id: 'Text7',
      text: '=',
      align: 'center',
      rect: ['130px','50px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_t1}": [
            ["style", "top", '49px'],
            ["style", "height", '35px'],
            ["style", "font-size", '40px'],
            ["style", "left", '6px'],
            ["style", "width", '42px']
         ],
         "${_Text7}": [
            ["style", "top", '50px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '130px'],
            ["style", "font-size", '29px']
         ],
         "${symbolSelector}": [
            ["style", "height", '141px'],
            ["style", "width", '243px']
         ],
         "${_t3}": [
            ["style", "top", '51px'],
            ["style", "text-align", 'center'],
            ["style", "height", '39px'],
            ["style", "width", '88px'],
            ["style", "left", '154px'],
            ["style", "font-size", '40px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-width", '4px'],
            ["color", "border-color", 'rgba(255,175,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '51px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '44px'],
            ["style", "font-size", '29px']
         ],
         "${_t2}": [
            ["style", "top", '47px'],
            ["style", "text-align", 'center'],
            ["style", "height", '39px'],
            ["style", "font-size", '40px'],
            ["style", "left", '67px'],
            ["style", "width", '66px']
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
