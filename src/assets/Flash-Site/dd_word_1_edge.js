/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Bamini Bold\'']='<link rel=\"stylesheet\" media=\"screen\" title=\"\" href=\"font/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />';
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
               rect:['45.6%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['45.6%','37.2%','52.6%','14.8%','auto','auto'],
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
            display:'none',
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
            id:'cloud2Copy',
            type:'image',
            rect:['48px','-258px','510px','510px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cloud2.png",'0px','0px']
         },
         {
            id:'menu_wrapper',
            type:'image',
            rect:['221px','-697px','1373px','933px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_wrapper.png",'0px','0px']
         },
         {
            id:'sorkal',
            type:'group',
            rect:['371px','270px','799px','366px','auto','auto'],
            c:[
            {
               id:'pa',
               display:'none',
               type:'group',
               rect:['0px','0px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'pa_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'pa_txt',
                  type:'text',
                  rect:['24px','15px','auto','100px','auto','auto'],
                  text:"g",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ma',
               display:'none',
               type:'group',
               rect:['99px','60px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ma_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ma_txt',
                  type:'text',
                  rect:['26px','15px','auto','100px','auto','auto'],
                  text:"k",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ka',
               display:'none',
               type:'group',
               rect:['99px','60px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ka_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ka_txt',
                  type:'text',
                  rect:['22px','15px','auto','100px','auto','auto'],
                  text:"f",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'sa',
               display:'none',
               type:'group',
               rect:['99px','60px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'sa_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'sa_txt',
                  type:'text',
                  rect:['24px','15px','auto','100px','auto','auto'],
                  text:"r",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'va',
               display:'none',
               type:'group',
               rect:['99px','60px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'va_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'va_txt',
                  type:'text',
                  rect:['12px','14px','auto','100px','auto','auto'],
                  text:"t",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'na',
               display:'none',
               type:'group',
               rect:['99px','60px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'na_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'na_txt',
                  type:'text',
                  rect:['30px','9px','auto','100px','auto','auto'],
                  text:"e",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'tha',
               display:'none',
               type:'group',
               rect:['99px','60px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'tha_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'tha_txt',
                  type:'text',
                  rect:['24px','9px','auto','100px','auto','auto'],
                  text:"j",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            }]
         },
         {
            id:'header',
            type:'text',
            rect:['441px','131px','659px','34px','auto','auto'],
            text:"glq;fSk; xypAk; ,izj;jy;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',40,"rgba(253,123,22,1.00)","800","none","normal"]
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
            id:'mun',
            display:'none',
            type:'group',
            rect:['1022px','200px','177','33','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'rev',
               type:'image',
               rect:['158px','7px','19px','19px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"rev.png",'0px','0px']
            },
            {
               id:'munselga',
               type:'text',
               rect:['9px','0px','auto','auto','auto','auto'],
               text:"Kd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',30,"rgba(0,0,0,1.00)","800","none","normal"]
            }]
         },
         {
            id:'mun2',
            display:'none',
            type:'group',
            rect:['1022px','200px','177','33','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'rev2',
               type:'image',
               rect:['158px','7px','19px','19px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"rev.png",'0px','0px']
            },
            {
               id:'munselga2',
               type:'text',
               rect:['9px','0px','auto','auto','auto','auto'],
               text:"Kd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',30,"rgba(0,0,0,1.00)","800","none","normal"]
            }]
         },
         {
            id:'home',
            display:'none',
            type:'image',
            rect:['290px','34px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
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
         "${_tha_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '20px'],
            ["style", "font-size", '149px'],
            ["style", "top", '13px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_pa_rect}": [
            ["color", "background-color", 'rgba(253,123,22,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_na_rect}": [
            ["color", "background-color", 'rgba(0,108,17,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
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
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_ka_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '20px'],
            ["style", "font-size", '149px'],
            ["style", "top", '23px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_va_rect}": [
            ["color", "background-color", 'rgba(31,241,255,0.79)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_rev}": [
            ["style", "height", '19px'],
            ["style", "top", '7px'],
            ["style", "left", '158px'],
            ["style", "width", '19px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'none'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_ma_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '22px'],
            ["style", "font-size", '149px'],
            ["style", "top", '23px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_menu_wrapper}": [
            ["style", "height", '717px'],
            ["style", "top", '-744px'],
            ["style", "left", '221px'],
            ["style", "width", '1055px']
         ],
         "${_ma_rect}": [
            ["color", "background-color", 'rgba(78,219,58,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_va_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '12px'],
            ["style", "font-size", '130px'],
            ["style", "top", '14px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_va_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '9px'],
            ["style", "font-size", '149px'],
            ["style", "top", '23px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_fct}": [
            ["style", "display", 'none']
         ],
         "${_munselga}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '9px'],
            ["style", "font-size", '30px']
         ],
         "${_sa_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '24px'],
            ["style", "font-size", '130px'],
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_va}": [
            ["style", "top", '160px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '235px'],
            ["style", "cursor", 'pointer']
         ],
         "${_cloud1}": [
            ["style", "height", '258px'],
            ["style", "top", '-258px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_fct_logo}": [
            ["style", "top", '0px'],
            ["style", "height", '28px'],
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
            ["style", "left", '45.64%'],
            ["style", "font-size", '10px']
         ],
         "${_cloud2Copy}": [
            ["style", "height", '258px'],
            ["style", "top", '-258px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_sa}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '235px'],
            ["style", "cursor", 'pointer']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '407px'],
            ["style", "font-size", '38px'],
            ["style", "top", '151px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "opacity", '0'],
            ["style", "width", '659px']
         ],
         "${_tha}": [
            ["style", "top", '210px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '235px'],
            ["style", "cursor", 'pointer']
         ],
         "${_rev2}": [
            ["style", "top", '7px'],
            ["style", "height", '19px'],
            ["style", "left", '158px'],
            ["style", "width", '19px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.43%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_sa_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '20px'],
            ["style", "font-size", '149px'],
            ["style", "top", '23px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_home}": [
            ["style", "top", '34px'],
            ["style", "display", 'none'],
            ["style", "height", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '290px'],
            ["style", "width", '71px']
         ],
         "${_na}": [
            ["style", "top", '210px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '235px'],
            ["style", "cursor", 'pointer']
         ],
         "${_eyes_12}": [
            ["style", "height", '182px'],
            ["style", "top", '-186px'],
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
         "${_pa}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "font-size", '10px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "height", '13.28%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45.64%'],
            ["style", "width", '60.47%']
         ],
         "${_sorkal}": [
            ["style", "height", '366px'],
            ["style", "top", '270px'],
            ["style", "left", '371px'],
            ["style", "width", '799px']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_mun}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '120px']
         ],
         "${_tha_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '24px'],
            ["style", "font-size", '130px'],
            ["style", "top", '9px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_pa_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '24px'],
            ["style", "font-size", '130px'],
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_ma_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '26px'],
            ["style", "font-size", '130px'],
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_sa_rect}": [
            ["color", "background-color", 'rgba(255,240,22,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_munselga2}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '0px'],
            ["style", "left", '9px'],
            ["style", "font-size", '30px']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-654px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1370px']
         ],
         "${_na_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '30px'],
            ["style", "font-size", '130px'],
            ["style", "top", '9px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_na_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '23px'],
            ["style", "font-size", '149px'],
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_pa_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '27px'],
            ["style", "font-size", '149px'],
            ["style", "top", '23px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_mun2}": [
            ["style", "top", '648px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '120px']
         ],
         "${_tha_rect}": [
            ["color", "background-color", 'rgba(111,77,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_ka_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '22px'],
            ["style", "font-size", '130px'],
            ["style", "top", '15px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_ma}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '235px'],
            ["style", "cursor", 'pointer']
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
         "${_ka_rect}": [
            ["color", "background-color", 'rgba(253,22,231,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_ka}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '235px'],
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
         duration: 21000,
         autoPlay: true,
         labels: {
            "pinselga": 1081,
            "pa_on": 15000,
            "pa_off": 15805,
            "on_ma": 16419,
            "on_ka": 17250,
            "on_sa": 18000,
            "on_va": 18750,
            "on_na": 19500,
            "on_tha": 20250
         },
         timeline: [
            { id: "eid37", tween: [ "gradient", "${_ma_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 16419, duration: 334 },
            { id: "eid140", tween: [ "gradient", "${_ma_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 16753, duration: 334 },
            { id: "eid61", tween: [ "style", "${_sa}", "left", '627px', { fromValue: '235px'}], position: 1081, duration: 169 },
            { id: "eid110", tween: [ "color", "${_sa_rect}", "background-color", 'rgba(255,240,22,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,240,22,1.00)'}], position: 18334, duration: 0 },
            { id: "eid17", tween: [ "style", "${_eyes_12}", "top", '-42px', { fromValue: '-186px'}], position: 95, duration: 236 },
            { id: "eid171", tween: [ "style", "${_na}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid164", tween: [ "style", "${_na}", "display", 'none', { fromValue: 'none'}], position: 618, duration: 0 },
            { id: "eid157", tween: [ "style", "${_na}", "display", 'none', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid150", tween: [ "style", "${_na}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid178", tween: [ "style", "${_na}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid288", tween: [ "style", "${_na}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid319", tween: [ "style", "${_na}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid137", tween: [ "color", "${_pa_rect}", "background-color", 'rgba(253,123,22,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,123,22,1.00)'}], position: 15334, duration: 0 },
            { id: "eid13", tween: [ "style", "${_cloud1}", "top", '-54px', { fromValue: '-258px'}], position: 331, duration: 167 },
            { id: "eid14", tween: [ "style", "${_cloud1}", "top", '-117px', { fromValue: '-54px'}], position: 498, duration: 103 },
            { id: "eid15", tween: [ "style", "${_cloud1}", "top", '-118px', { fromValue: '-117px'}], position: 602, duration: 64 },
            { id: "eid176", tween: [ "style", "${_pa}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_pa}", "display", 'none', { fromValue: 'none'}], position: 618, duration: 0 },
            { id: "eid162", tween: [ "style", "${_pa}", "display", 'none', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid155", tween: [ "style", "${_pa}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid183", tween: [ "style", "${_pa}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid293", tween: [ "style", "${_pa}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid315", tween: [ "style", "${_pa}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid60", tween: [ "style", "${_sa}", "opacity", '1', { fromValue: '0'}], position: 1081, duration: 95 },
            { id: "eid108", tween: [ "color", "${_ma_rect}", "background-color", 'rgba(78,219,58,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(78,219,58,1.00)'}], position: 16753, duration: 0 },
            { id: "eid51", tween: [ "style", "${_ka}", "top", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
            { id: "eid52", tween: [ "style", "${_ka}", "top", '0px', { fromValue: '0px'}], position: 1270, duration: 0 },
            { id: "eid72", tween: [ "style", "${_header}", "top", '151px', { fromValue: '151px'}], position: 2133, duration: 0 },
            { id: "eid378", tween: [ "style", "${_mun2}", "left", '1022px', { fromValue: '120px'}], position: 1176, duration: 250 },
            { id: "eid101", tween: [ "style", "${_tha}", "left", '518px', { fromValue: '235px'}], position: 1081, duration: 169 },
            { id: "eid66", tween: [ "style", "${_sa}", "top", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
            { id: "eid67", tween: [ "style", "${_sa}", "top", '0px', { fromValue: '0px'}], position: 1270, duration: 0 },
            { id: "eid380", tween: [ "style", "${_mun2}", "top", '648px', { fromValue: '648px'}], position: 1426, duration: 0 },
            { id: "eid87", tween: [ "style", "${_na}", "top", '210px', { fromValue: '210px'}], position: 1250, duration: 0 },
            { id: "eid88", tween: [ "style", "${_na}", "top", '210px', { fromValue: '210px'}], position: 1270, duration: 0 },
            { id: "eid391", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid392", tween: [ "style", "${_header}", "font-size", '38px', { fromValue: '38px'}], position: 1081, duration: 0 },
            { id: "eid136", tween: [ "style", "${_mun}", "left", '1022px', { fromValue: '120px'}], position: 1176, duration: 250 },
            { id: "eid40", tween: [ "style", "${_ma}", "left", '211px', { fromValue: '235px'}], position: 1081, duration: 169 },
            { id: "eid112", tween: [ "color", "${_na_rect}", "background-color", 'rgba(0,108,17,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,108,17,1.00)'}], position: 19834, duration: 0 },
            { id: "eid35", tween: [ "style", "${_ma}", "opacity", '1', { fromValue: '0'}], position: 1081, duration: 95 },
            { id: "eid76", tween: [ "style", "${_va}", "left", '109px', { fromValue: '235px'}], position: 1081, duration: 169 },
            { id: "eid71", tween: [ "style", "${_header}", "left", '407px', { fromValue: '407px'}], position: 2133, duration: 0 },
            { id: "eid48", tween: [ "gradient", "${_ka_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 17250, duration: 334 },
            { id: "eid142", tween: [ "gradient", "${_ka_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 17584, duration: 334 },
            { id: "eid113", tween: [ "color", "${_tha_rect}", "background-color", 'rgba(111,77,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(111,77,255,1.00)'}], position: 20584, duration: 0 },
            { id: "eid173", tween: [ "style", "${_sa}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid166", tween: [ "style", "${_sa}", "display", 'none', { fromValue: 'none'}], position: 618, duration: 0 },
            { id: "eid159", tween: [ "style", "${_sa}", "display", 'none', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid152", tween: [ "style", "${_sa}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid180", tween: [ "style", "${_sa}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid290", tween: [ "style", "${_sa}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid318", tween: [ "style", "${_sa}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid9", tween: [ "style", "${_cloud2Copy}", "top", '-42px', { fromValue: '-258px'}], position: 331, duration: 167 },
            { id: "eid10", tween: [ "style", "${_cloud2Copy}", "top", '-127px', { fromValue: '-42px'}], position: 498, duration: 104 },
            { id: "eid11", tween: [ "style", "${_cloud2Copy}", "top", '-127px', { fromValue: '-127px'}], position: 602, duration: 64 },
            { id: "eid103", tween: [ "gradient", "${_tha_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 20250, duration: 334 },
            { id: "eid148", tween: [ "gradient", "${_tha_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 20584, duration: 334 },
            { id: "eid46", tween: [ "style", "${_ka}", "left", '419px', { fromValue: '235px'}], position: 1081, duration: 169 },
            { id: "eid132", tween: [ "style", "${_mun}", "opacity", '1', { fromValue: '0'}], position: 1176, duration: 250 },
            { id: "eid370", tween: [ "style", "${_mun2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid371", tween: [ "style", "${_mun2}", "display", 'block', { fromValue: 'none'}], position: 1176, duration: 0 },
            { id: "eid372", tween: [ "style", "${_mun2}", "display", 'block', { fromValue: 'block'}], position: 1426, duration: 0 },
            { id: "eid373", tween: [ "style", "${_mun2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid374", tween: [ "style", "${_mun2}", "display", 'none', { fromValue: 'block'}], position: 2133, duration: 0 },
            { id: "eid375", tween: [ "style", "${_mun2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid376", tween: [ "style", "${_mun2}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid45", tween: [ "style", "${_ka}", "opacity", '1', { fromValue: '0'}], position: 1081, duration: 95 },
            { id: "eid127", tween: [ "style", "${_mun}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_mun}", "display", 'block', { fromValue: 'none'}], position: 1176, duration: 0 },
            { id: "eid128", tween: [ "style", "${_mun}", "display", 'block', { fromValue: 'block'}], position: 1426, duration: 0 },
            { id: "eid272", tween: [ "style", "${_mun}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid273", tween: [ "style", "${_mun}", "display", 'none', { fromValue: 'block'}], position: 2133, duration: 0 },
            { id: "eid295", tween: [ "style", "${_mun}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid367", tween: [ "style", "${_mun}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid174", tween: [ "style", "${_ka}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_ka}", "display", 'none', { fromValue: 'none'}], position: 618, duration: 0 },
            { id: "eid160", tween: [ "style", "${_ka}", "display", 'none', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid153", tween: [ "style", "${_ka}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid181", tween: [ "style", "${_ka}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid291", tween: [ "style", "${_ka}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid317", tween: [ "style", "${_ka}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_menu_sorkal}", "top", '-172px', { fromValue: '-654px'}], position: 986, duration: 95 },
            { id: "eid98", tween: [ "style", "${_tha}", "top", '210px', { fromValue: '210px'}], position: 1250, duration: 0 },
            { id: "eid99", tween: [ "style", "${_tha}", "top", '210px', { fromValue: '210px'}], position: 1270, duration: 0 },
            { id: "eid63", tween: [ "gradient", "${_sa_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 18000, duration: 334 },
            { id: "eid145", tween: [ "gradient", "${_sa_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 18334, duration: 334 },
            { id: "eid6", tween: [ "style", "${_menu_wrapper}", "top", '-744px', { fromValue: '-744px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_menu_wrapper}", "top", '2px', { fromValue: '-697px'}], position: 666, duration: 165 },
            { id: "eid34", tween: [ "style", "${_header}", "opacity", '1', { fromValue: '0.000000'}], position: 831, duration: 155 },
            { id: "eid369", tween: [ "style", "${_home}", "display", 'block', { fromValue: 'none'}], position: 831, duration: 0 },
            { id: "eid30", tween: [ "style", "${_pa}", "opacity", '1', { fromValue: '0'}], position: 1081, duration: 95 },
            { id: "eid75", tween: [ "style", "${_va}", "opacity", '1', { fromValue: '0'}], position: 1081, duration: 95 },
            { id: "eid81", tween: [ "style", "${_va}", "top", '210px', { fromValue: '210px'}], position: 1250, duration: 0 },
            { id: "eid82", tween: [ "style", "${_va}", "top", '210px', { fromValue: '210px'}], position: 1270, duration: 0 },
            { id: "eid172", tween: [ "style", "${_va}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "style", "${_va}", "display", 'none', { fromValue: 'none'}], position: 618, duration: 0 },
            { id: "eid158", tween: [ "style", "${_va}", "display", 'none', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid151", tween: [ "style", "${_va}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid179", tween: [ "style", "${_va}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid289", tween: [ "style", "${_va}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid321", tween: [ "style", "${_va}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid111", tween: [ "color", "${_va_rect}", "background-color", 'rgba(31,241,255,0.79)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(31,241,255,0.79)'}], position: 19084, duration: 0 },
            { id: "eid170", tween: [ "style", "${_tha}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_tha}", "display", 'none', { fromValue: 'none'}], position: 618, duration: 0 },
            { id: "eid156", tween: [ "style", "${_tha}", "display", 'none', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid149", tween: [ "style", "${_tha}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid177", tween: [ "style", "${_tha}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid287", tween: [ "style", "${_tha}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid320", tween: [ "style", "${_tha}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid377", tween: [ "style", "${_mun2}", "opacity", '1', { fromValue: '0'}], position: 1176, duration: 250 },
            { id: "eid89", tween: [ "style", "${_na}", "opacity", '1', { fromValue: '0'}], position: 1081, duration: 95 },
            { id: "eid90", tween: [ "style", "${_na}", "left", '316px', { fromValue: '235px'}], position: 1081, duration: 169 },
            { id: "eid78", tween: [ "gradient", "${_va_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 18750, duration: 334 },
            { id: "eid146", tween: [ "gradient", "${_va_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 19084, duration: 334 },
            { id: "eid25", tween: [ "gradient", "${_pa_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 15000, duration: 334 },
            { id: "eid138", tween: [ "gradient", "${_pa_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 15334, duration: 334 },
            { id: "eid100", tween: [ "style", "${_tha}", "opacity", '1', { fromValue: '0'}], position: 1081, duration: 95 },
            { id: "eid92", tween: [ "gradient", "${_na_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 19500, duration: 334 },
            { id: "eid147", tween: [ "gradient", "${_na_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 19834, duration: 334 },
            { id: "eid43", tween: [ "style", "${_ma}", "top", '0px', { fromValue: '0px'}], position: 1250, duration: 0 },
            { id: "eid393", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'none'}], position: 331, duration: 0, easing: "easeOutExpo" },
            { id: "eid175", tween: [ "style", "${_ma}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid168", tween: [ "style", "${_ma}", "display", 'none', { fromValue: 'none'}], position: 618, duration: 0 },
            { id: "eid161", tween: [ "style", "${_ma}", "display", 'none', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid154", tween: [ "style", "${_ma}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid182", tween: [ "style", "${_ma}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid292", tween: [ "style", "${_ma}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid316", tween: [ "style", "${_ma}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-2577926");
