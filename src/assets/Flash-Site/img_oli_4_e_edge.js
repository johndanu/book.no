/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['baminiplain, Arial, sans-serif']='<link rel=\"stylesheet\" media=\"screen\" title=\"\" href=\"font/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />';


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
               rect:['46.7%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['46.7%','37.2%','52.6%','14.8%','auto','auto'],
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
            rect:['221px','2px','1373px','933px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_wrapper.png",'0px','0px']
         },
         {
            id:'e_small',
            type:'group',
            rect:['305px','124px','53px','54','auto','auto'],
            c:[
            {
               id:'rect_e',
               type:'rect',
               rect:['0px','0px','66px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(252,125,27,1.00)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'text_e',
               type:'text',
               rect:['8px','0px','41px','52px','auto','auto'],
               text:",",
               align:"left",
               font:['baminiplain, Arial, sans-serif',50,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'header',
            type:'text',
            rect:['423px','134px','659px','34px','auto','auto'],
            text:"glq;fSk; Xir cr;rupg;Gk;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',38,"rgba(253,123,22,1.00)","800","none","normal"]
         },
         {
            id:'pin',
            type:'group',
            rect:['344px','185px','192','39','auto','auto'],
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
               rect:['24px','2px','auto','auto','auto','auto'],
               text:"gpd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',34,"rgba(0,0,0,1.00)","800","none","normal"]
            }]
         },
         {
            id:'padangal',
            type:'group',
            rect:['274px','227px','950px','426px','auto','auto'],
            c:[
            {
               id:'singam',
               type:'group',
               rect:['641px','626px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'singam_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgba(179,179,179,1.00)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'singam__img',
                  type:'image',
                  rect:['0px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201543.png",'0px','0px']
               },
               {
                  id:'singam_txt',
                  type:'text',
                  rect:['55px','201px','auto','auto','auto','auto'],
                  text:"rpq;fk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'thiri',
               type:'group',
               rect:['330px','626px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'thiri_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgba(179,179,179,1.00)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'tiri_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201538.png",'0px','0px']
               },
               {
                  id:'thiri_txt',
                  type:'text',
                  rect:['53px','201px','auto','auto','auto','auto'],
                  text:"jphp",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'kattil',
               type:'group',
               rect:['19px','626px','227','189px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'kattil_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgba(179,179,179,1.00)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'kattil_img',
                  type:'image',
                  rect:['0','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201533.png",'0px','0px']
               },
               {
                  id:'kattil_txt',
                  type:'text',
                  rect:['64px','201px','auto','auto','auto','auto'],
                  text:"fl;by;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'kanini',
               type:'group',
               rect:['642px','321px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'kanini_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgba(179,179,179,1.00)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'kanini_img',
                  type:'image',
                  rect:['0px','15px','268px','213px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201523.png",'0px','0px']
               },
               {
                  id:'kanini_txt',
                  type:'text',
                  rect:['81px','201px','auto','auto','auto','auto'],
                  text:"fzpdp",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'anil',
               type:'group',
               rect:['330px','317px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'anil_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgba(179,179,179,1.00)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'anil_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201518.png",'0px','0px']
               },
               {
                  id:'anil_txt',
                  type:'text',
                  rect:['39px','203px','auto','auto','auto','auto'],
                  text:"mzpy;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'milagaai',
               type:'group',
               rect:['19px','317px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'milagaai_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgba(179,179,179,1.00)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'milagaai_img',
                  type:'image',
                  rect:['0','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201528.png",'0px','0px']
               },
               {
                  id:'milagaai_txt',
                  type:'text',
                  rect:['66px','201px','auto','auto','auto','auto'],
                  text:"kpsfha;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'minnal',
               type:'group',
               rect:['642px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'minnal_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgba(179,179,179,1.00)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'minnal_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201513.png",'0px','0px']
               },
               {
                  id:'minnal_txt',
                  type:'text',
                  rect:['42px','201px','auto','auto','auto','auto'],
                  text:"kpd;dy;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'visiri',
               type:'group',
               rect:['330px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'visiri_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgba(179,179,179,1.00)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'visiri_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201508.png",'0px','0px']
               },
               {
                  id:'visiri_txt',
                  type:'text',
                  rect:['48px','201px','auto','auto','auto','auto'],
                  text:"tprpwp",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'kili',
               type:'group',
               rect:['17px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'kili_rect',
                  type:'rect',
                  rect:['-11px','6px','243px','243px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgb(179, 179, 179)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'kili_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201503.png",'0px','0px']
               },
               {
                  id:'kili_txt',
                  type:'text',
                  rect:['66px','202px','auto','auto','auto','auto'],
                  text:"fpsp",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            }]
         },
         {
            id:'home',
            type:'image',
            rect:['293px','37px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
         },
         {
            id:'pin2',
            type:'group',
            rect:['345px','657px','192','39','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'fwd2',
               type:'image',
               rect:['0px','11px','19px','17px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"fwd.png",'0px','0px']
            },
            {
               id:'pinselga2',
               type:'text',
               rect:['24px','2px','auto','auto','auto','auto'],
               text:"gpd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',34,"rgba(0,0,0,1.00)","800","none","normal"]
            }]
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
         }],
         symbolInstances: [
         {
            id:'pupils',
            symbolName:'pupils'
         }
         ]
      },
   states: {
      "Base State": {
         "${_minnal_txt}": [
            ["style", "top", '238px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '51px'],
            ["style", "font-size", '51px']
         ],
         "${_anil_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_text_e}": [
            ["style", "-webkit-transform-origin", [50,62], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '8px'],
            ["style", "font-size", '50px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '52px'],
            ["style", "width", '41px'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '50px']
         ],
         "${_kanini_txt}": [
            ["style", "top", '227px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '53px'],
            ["style", "font-size", '51px']
         ],
         "${_tiri_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_e_small}": [
            ["style", "left", '305px'],
            ["style", "top", '124px']
         ],
         "${_thiri}": [
            ["style", "top", '626px'],
            ["style", "height", '295px'],
            ["style", "left", '330px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_singam_txt}": [
            ["style", "top", '234px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '60px'],
            ["style", "font-size", '51px']
         ],
         "${_rect_e}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(252,125,27,1)'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '52px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(251,136,35,1.00)',100],['rgba(202,198,198,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '66px']
         ],
         "${_kattil_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "border-width", '2px'],
            ["style", "left", '-11px']
         ],
         "${_pinselga2}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '2px'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
         ],
         "${_minnal}": [
            ["style", "top", '10px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '642px']
         ],
         "${_eyes_12}": [
            ["style", "height", '182px'],
            ["style", "top", '-42px'],
            ["style", "left", '589px'],
            ["style", "width", '182px']
         ],
         "${_visiri}": [
            ["style", "height", '295px'],
            ["style", "left", '330px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "font-size", '10px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "height", '13.28%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.69%'],
            ["style", "width", '60.47%']
         ],
         "${_visiri_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "border-width", '2px'],
            ["style", "left", '-11px']
         ],
         "${_singam__img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '0px'],
            ["style", "width", '267px']
         ],
         "${_singam_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "border-width", '2px'],
            ["style", "left", '-11px']
         ],
         "${_anil_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "border-width", '2px'],
            ["style", "left", '-11px']
         ],
         "${_milagaai_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "left", '-11px'],
            ["style", "border-width", '2px']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '423px'],
            ["style", "font-size", '38px'],
            ["style", "top", '134px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "opacity", '1'],
            ["style", "width", '659px']
         ],
         "${_logo_batch}": [
            ["style", "left", '3.66%'],
            ["style", "opacity", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '100%']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1370px']
         ],
         "${_kili_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1.00)'],
            ["style", "left", '-11px'],
            ["style", "border-width", '2px']
         ],
         "${_panam_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '55px'],
            ["style", "font-size", '51px']
         ],
         "${_kanini_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "left", '-11px'],
            ["style", "border-width", '2px']
         ],
         "${_kili_txt}": [
            ["style", "top", '238px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '86px'],
            ["style", "font-size", '51px']
         ],
         "${_pin2}": [
            ["style", "top", '657px'],
            ["style", "left", '345px'],
            ["style", "cursor", 'pointer']
         ],
         "${_minnal_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "left", '-11px'],
            ["style", "border-width", '2px']
         ],
         "${_padangal}": [
            ["style", "top", '227px'],
            ["style", "overflow", 'auto'],
            ["style", "height", '426px'],
            ["style", "left", '274px'],
            ["style", "width", '950px']
         ],
         "${_fct}": [
            ["style", "display", 'none']
         ],
         "${_milagaai_txt}": [
            ["style", "top", '231px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '36px'],
            ["style", "font-size", '51px']
         ],
         "${_kili_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_kattil}": [
            ["style", "top", '626px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '19px']
         ],
         "${_thiri_txt}": [
            ["style", "top", '234px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '95px'],
            ["style", "font-size", '51px']
         ],
         "${_pantham_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '53px'],
            ["style", "font-size", '51px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.43%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_kattil_txt}": [
            ["style", "top", '234px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '56px'],
            ["style", "font-size", '51px']
         ],
         "${_fwd2}": [
            ["style", "top", '11px'],
            ["style", "height", '17px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_minnal_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_thiri_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "left", '-11px'],
            ["style", "border-width", '2px']
         ],
         "${_logorect}": [
            ["style", "top", '31.56%'],
            ["style", "height", '36.87%'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0%'],
            ["style", "width", '110.38%']
         ],
         "${_visiri_txt}": [
            ["style", "top", '238px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '69px'],
            ["style", "font-size", '51px']
         ],
         "${_fct_logo}": [
            ["style", "height", '28px'],
            ["style", "top", '0px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_home}": [
            ["style", "top", '37px'],
            ["style", "height", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '293px'],
            ["style", "width", '71px']
         ],
         "${_kattil_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "width", '267px']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_panthu_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '64px'],
            ["style", "font-size", '51px']
         ],
         "${_cloud1}": [
            ["style", "height", '258px'],
            ["style", "top", '-118px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_kili}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_kanini_img}": [
            ["style", "height", '213px'],
            ["style", "top", '15px'],
            ["style", "left", '0px'],
            ["style", "width", '268px']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_cloud2}": [
            ["style", "height", '258px'],
            ["style", "top", '-127px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_anil}": [
            ["style", "top", '317px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '330px']
         ],
         "${_pinselga}": [
            ["style", "top", '2px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
         ],
         "${_milagaai}": [
            ["style", "top", '317px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '19px']
         ],
         "${_milagaai_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "width", '267px']
         ],
         "${_anil_txt}": [
            ["style", "top", '233px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '55px'],
            ["style", "font-size", '51px']
         ],
         "${_fwd}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_singam}": [
            ["style", "top", '626px'],
            ["style", "height", '295px'],
            ["style", "left", '641px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "width", '52.64%'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '14.75%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.69%'],
            ["style", "font-size", '10px']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_visiri_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_kanini}": [
            ["style", "top", '321px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '642px']
         ],
         "${_pin}": [
            ["style", "top", '185px'],
            ["style", "left", '344px'],
            ["style", "cursor", 'pointer']
         ],
         "${_menu_wrapper}": [
            ["style", "top", '2px'],
            ["style", "height", '717px'],
            ["style", "left", '221px'],
            ["style", "width", '1055px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2431,
         autoPlay: true,
         labels: {
            "on_1": 1000,
            "off_1": 1071,
            "on_2": 1152,
            "off_2": 1223,
            "on_3": 1367,
            "off_3": 1438,
            "on_4": 1528,
            "off_4": 1599,
            "on_5": 1721,
            "off_5": 1792,
            "on_6": 1922,
            "off_6": 1993,
            "on_7": 2063,
            "off_7": 2134,
            "on_8": 2212,
            "off_8": 2283,
            "on_9": 2360,
            "off_9": 2431
         },
         timeline: [
            { id: "eid61", tween: [ "color", "${_kattil_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2063, duration: 14 },
            { id: "eid62", tween: [ "color", "${_kattil_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2134, duration: 0 },
            { id: "eid12", tween: [ "style", "${_kili_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1000, duration: 14 },
            { id: "eid19", tween: [ "style", "${_kili_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1071, duration: 0 },
            { id: "eid57", tween: [ "color", "${_kattil_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2063, duration: 14 },
            { id: "eid58", tween: [ "color", "${_kattil_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2134, duration: 0 },
            { id: "eid65", tween: [ "style", "${_thiri_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2212, duration: 14 },
            { id: "eid66", tween: [ "style", "${_thiri_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2283, duration: 0 },
            { id: "eid14", tween: [ "color", "${_kili_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1000, duration: 14 },
            { id: "eid16", tween: [ "color", "${_kili_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1071, duration: 0 },
            { id: "eid127", tween: [ "style", "${_kattil_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_singam_txt}", "top", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_singam_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "color", "${_visiri_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1152, duration: 14 },
            { id: "eid26", tween: [ "color", "${_visiri_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1223, duration: 0 },
            { id: "eid134", tween: [ "style", "${_visiri_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid138", tween: [ "style", "${_kili_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "color", "${_anil_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1721, duration: 14 },
            { id: "eid40", tween: [ "color", "${_anil_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1792, duration: 0 },
            { id: "eid43", tween: [ "color", "${_anil_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1721, duration: 14 },
            { id: "eid44", tween: [ "color", "${_anil_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1792, duration: 0 },
            { id: "eid23", tween: [ "style", "${_visiri_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1152, duration: 14 },
            { id: "eid24", tween: [ "style", "${_visiri_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1223, duration: 0 },
            { id: "eid121", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_kili_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "color", "${_singam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2360, duration: 14 },
            { id: "eid70", tween: [ "color", "${_singam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2431, duration: 0 },
            { id: "eid161", tween: [ "style", "${_singam_txt}", "left", '60px', { fromValue: '60px'}], position: 0, duration: 0 },
            { id: "eid142", tween: [ "style", "${_anil_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_minnal_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid125", tween: [ "style", "${_thiri_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "color", "${_minnal_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1367, duration: 14 },
            { id: "eid32", tween: [ "color", "${_minnal_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1438, duration: 0 },
            { id: "eid132", tween: [ "style", "${_milagaai_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_kanini_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_singam_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_kanini_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_anil_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid71", tween: [ "style", "${_singam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2360, duration: 14 },
            { id: "eid72", tween: [ "style", "${_singam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2431, duration: 0 },
            { id: "eid124", tween: [ "style", "${_thiri_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_milagaai_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1529, duration: 13 },
            { id: "eid79", tween: [ "style", "${_milagaai_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1599, duration: 0 },
            { id: "eid36", tween: [ "style", "${_milagaai_rect}", "border-width", '2px', { fromValue: '2px'}], position: 1600, duration: 0 },
            { id: "eid59", tween: [ "style", "${_kattil_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2063, duration: 14 },
            { id: "eid60", tween: [ "style", "${_kattil_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2134, duration: 0 },
            { id: "eid139", tween: [ "style", "${_visiri_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "color", "${_milagaai_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1529, duration: 13 },
            { id: "eid76", tween: [ "color", "${_milagaai_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1599, duration: 0 },
            { id: "eid34", tween: [ "color", "${_milagaai_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1600, duration: 0 },
            { id: "eid51", tween: [ "color", "${_kanini_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1922, duration: 14 },
            { id: "eid52", tween: [ "color", "${_kanini_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1993, duration: 0 },
            { id: "eid37", tween: [ "color", "${_milagaai_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1529, duration: 13 },
            { id: "eid80", tween: [ "color", "${_milagaai_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1599, duration: 0 },
            { id: "eid38", tween: [ "color", "${_milagaai_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1600, duration: 0 },
            { id: "eid29", tween: [ "style", "${_minnal_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1367, duration: 14 },
            { id: "eid30", tween: [ "style", "${_minnal_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1438, duration: 0 },
            { id: "eid155", tween: [ "style", "${_anil_txt}", "top", '233px', { fromValue: '233px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "color", "${_thiri_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2212, duration: 14 },
            { id: "eid68", tween: [ "color", "${_thiri_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2283, duration: 0 },
            { id: "eid126", tween: [ "style", "${_kattil_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "color", "${_thiri_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2212, duration: 14 },
            { id: "eid64", tween: [ "color", "${_thiri_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2283, duration: 0 },
            { id: "eid141", tween: [ "style", "${_milagaai_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_kanini_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1922, duration: 14 },
            { id: "eid54", tween: [ "style", "${_kanini_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1993, duration: 0 },
            { id: "eid73", tween: [ "color", "${_singam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2360, duration: 14 },
            { id: "eid74", tween: [ "color", "${_singam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2431, duration: 0 },
            { id: "eid133", tween: [ "style", "${_minnal_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_anil_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1721, duration: 14 },
            { id: "eid42", tween: [ "style", "${_anil_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1792, duration: 0 },
            { id: "eid21", tween: [ "color", "${_visiri_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1152, duration: 14 },
            { id: "eid22", tween: [ "color", "${_visiri_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1223, duration: 0 },
            { id: "eid27", tween: [ "color", "${_minnal_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1367, duration: 14 },
            { id: "eid28", tween: [ "color", "${_minnal_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1438, duration: 0 },
            { id: "eid55", tween: [ "color", "${_kanini_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1922, duration: 14 },
            { id: "eid56", tween: [ "color", "${_kanini_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1993, duration: 0 },
            { id: "eid162", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "color", "${_kili_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1000, duration: 14 },
            { id: "eid20", tween: [ "color", "${_kili_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1071, duration: 0 }         ]
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
