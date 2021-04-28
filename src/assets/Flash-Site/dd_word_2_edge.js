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
               rect:['45.4%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['45.4%','37.2%','52.6%','14.8%','auto','auto'],
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
               id:'ee',
               display:'none',
               type:'group',
               rect:['614px','-3px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ee_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ee_txt',
                  type:'text',
                  rect:['37px','16px','auto','100px','auto','auto'],
                  text:"&lt;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',120,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'e',
               display:'none',
               type:'group',
               rect:['412px','-1px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'e_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'e_txt',
                  type:'text',
                  rect:['18px','21px','auto','100px','auto','auto'],
                  text:",",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',110,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ahh',
               display:'none',
               type:'group',
               rect:['210px','-3px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ahh_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ahh_txt',
                  type:'text',
                  rect:['5px','16px','auto','100px','auto','auto'],
                  text:"M",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',105,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ah',
               display:'none',
               type:'group',
               rect:['6px','-3px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ah_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ah_txt',
                  type:'text',
                  rect:['11px','16px','auto','100px','auto','auto'],
                  text:"m",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',105,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'aee',
               display:'none',
               type:'group',
               rect:['614px','195px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'aee_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'aee_txt',
                  type:'text',
                  rect:['28px','16px','auto','100px','auto','auto'],
                  text:"V",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ae',
               display:'none',
               type:'group',
               rect:['412px','197px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ae_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ae_txt',
                  type:'text',
                  rect:['28px','14px','auto','100px','auto','auto'],
                  text:"v",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ouu',
               display:'none',
               type:'group',
               rect:['210px','195px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ouu_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ouu_txt',
                  type:'text',
                  rect:['5px','21px','auto','100px','auto','auto'],
                  text:"C",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',115,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ou',
               display:'none',
               type:'group',
               rect:['210px','195px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ou_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ou_txt',
                  type:'text',
                  rect:['5px','21px','auto','100px','auto','auto'],
                  text:"c",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',115,"rgba(0,0,0,1)","700","none","normal"],
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
            id:'pin',
            display:'none',
            type:'group',
            rect:['296px','197px','192','39','auto','auto'],
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
               font:['baminiplain, Arial, sans-serif',34,"rgba(0,0,0,1.00)","800","none","normal"]
            }]
         },
         {
            id:'pin2',
            display:'none',
            type:'group',
            rect:['296px','197px','192','39','auto','auto'],
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
               rect:['24px','4px','auto','auto','auto','auto'],
               text:"gpd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',34,"rgba(0,0,0,1.00)","800","none","normal"]
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
         "${_menu_sorkal}": [
            ["style", "top", '-654px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_aee_rect}": [
            ["color", "background-color", 'rgba(48,112,255,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_ee}": [
            ["style", "top", '-3px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_aee}": [
            ["style", "top", '195px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_pin2}": [
            ["style", "top", '644px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1025px']
         ],
         "${_ou}": [
            ["style", "top", '197px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '6px']
         ],
         "${_pinselga}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
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
         "${_ee_rect}": [
            ["color", "background-color", 'rgba(142,219,43,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_ouu_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '5px'],
            ["style", "font-size", '115px'],
            ["style", "top", '21px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_ae}": [
            ["style", "top", '197px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
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
         "${_fwd}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_ah}": [
            ["style", "top", '-3px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '6px']
         ],
         "${_cloud2Copy}": [
            ["style", "height", '258px'],
            ["style", "top", '-258px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'none'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_logo_batch}": [
            ["style", "left", '3.66%'],
            ["style", "opacity", '1']
         ],
         "${_ou_rect}": [
            ["color", "background-color", 'rgba(47,150,23,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
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
         "${_ae_rect}": [
            ["color", "background-color", 'rgba(240,27,233,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_aee_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '28px'],
            ["style", "font-size", '130px'],
            ["style", "top", '16px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_cloud1}": [
            ["style", "height", '258px'],
            ["style", "top", '-258px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_fct}": [
            ["style", "display", 'none']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_pinselga2}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '4px'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
         ],
         "${_ah_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '11px'],
            ["style", "font-size", '105px'],
            ["style", "top", '16px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1370px']
         ],
         "${_logorect}": [
            ["style", "top", '31.56%'],
            ["style", "height", '36.87%'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0%'],
            ["style", "width", '110.38%']
         ],
         "${_fwd2}": [
            ["style", "top", '11px'],
            ["style", "height", '17px'],
            ["style", "left", '0px'],
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
         "${_e_rect}": [
            ["color", "background-color", 'rgba(171,82,249,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_eyes_12}": [
            ["style", "height", '182px'],
            ["style", "top", '-186px'],
            ["style", "left", '589px'],
            ["style", "width", '182px']
         ],
         "${_ou_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '5px'],
            ["style", "font-size", '115px'],
            ["style", "top", '21px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_ahh_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '5px'],
            ["style", "font-size", '105px'],
            ["style", "top", '16px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_ae_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '28px'],
            ["style", "font-size", '130px'],
            ["style", "top", '14px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_sorkal}": [
            ["style", "height", '366px'],
            ["style", "top", '270px'],
            ["style", "left", '371px'],
            ["style", "width", '799px']
         ],
         "${_ouu_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '5px'],
            ["style", "font-size", '115px'],
            ["style", "top", '21px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
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
            ["style", "left", '45.43%'],
            ["style", "width", '60.47%']
         ],
         "${_e}": [
            ["style", "top", '-1px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_ah_rect}": [
            ["color", "background-color", 'rgba(255,80,80,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
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
         "${_ou_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '7px'],
            ["style", "font-size", '115px'],
            ["style", "top", '19px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", 'normal']
         ],
         "${_ouu_rect}": [
            ["color", "background-color", 'rgba(255,199,31,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_ahh}": [
            ["style", "top", '-3px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '210px']
         ],
         "${_ouu}": [
            ["style", "top", '195px'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '210px']
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
         "${_ahh_rect}": [
            ["color", "background-color", 'rgba(253,22,123,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_ee_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '37px'],
            ["style", "font-size", '120px'],
            ["style", "top", '16px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
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
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "width", '52.64%'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '14.75%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '45.43%'],
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
            ["style", "width", '100%']
         ],
         "${_e_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '18px'],
            ["style", "font-size", '110px'],
            ["style", "top", '21px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_pin}": [
            ["style", "top", '198px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1025px']
         ],
         "${_menu_wrapper}": [
            ["style", "height", '717px'],
            ["style", "top", '-744px'],
            ["style", "left", '221px'],
            ["style", "width", '1055px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 27168,
         autoPlay: true,
         labels: {
            "pinselga": 1081,
            "munselga": 1081,
            "ah_on": 21250,
            "ahh_on": 22000,
            "e_on": 22750,
            "ee_on": 23500,
            "ou_on": 24250,
            "ouu_on": 25000,
            "ae_on": 25750,
            "aee_on": 26500
         },
         timeline: [
            { id: "eid266", tween: [ "style", "${_ae}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid281", tween: [ "style", "${_ae}", "display", 'none', { fromValue: 'block'}], position: 14934, duration: 0 },
            { id: "eid327", tween: [ "style", "${_ae}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid337", tween: [ "color", "${_ahh_rect}", "background-color", 'rgba(253,22,123,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,22,123,1.00)'}], position: 22334, duration: 0 },
            { id: "eid17", tween: [ "style", "${_eyes_12}", "top", '-42px', { fromValue: '-186px'}], position: 95, duration: 236 },
            { id: "eid350", tween: [ "gradient", "${_ouu_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 25000, duration: 334 },
            { id: "eid351", tween: [ "gradient", "${_ouu_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 25334, duration: 334 },
            { id: "eid334", tween: [ "gradient", "${_ah_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 21250, duration: 334 },
            { id: "eid335", tween: [ "gradient", "${_ah_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 21584, duration: 334 },
            { id: "eid268", tween: [ "style", "${_ahh}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid284", tween: [ "style", "${_ahh}", "display", 'none', { fromValue: 'block'}], position: 14934, duration: 0 },
            { id: "eid324", tween: [ "style", "${_ahh}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid269", tween: [ "style", "${_ah}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid283", tween: [ "style", "${_ah}", "display", 'none', { fromValue: 'block'}], position: 14934, duration: 0 },
            { id: "eid325", tween: [ "style", "${_ah}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid267", tween: [ "style", "${_aee}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid282", tween: [ "style", "${_aee}", "display", 'none', { fromValue: 'block'}], position: 14934, duration: 0 },
            { id: "eid326", tween: [ "style", "${_aee}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid72", tween: [ "style", "${_header}", "top", '151px', { fromValue: '151px'}], position: 2133, duration: 0 },
            { id: "eid420", tween: [ "style", "${_header}", "font-size", '38px', { fromValue: '38px'}], position: 1613, duration: 0 },
            { id: "eid270", tween: [ "style", "${_e}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid286", tween: [ "style", "${_e}", "display", 'none', { fromValue: 'block'}], position: 14934, duration: 0 },
            { id: "eid323", tween: [ "style", "${_e}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid407", tween: [ "style", "${_ou}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid408", tween: [ "style", "${_ou}", "display", 'none', { fromValue: 'block'}], position: 14934, duration: 0 },
            { id: "eid409", tween: [ "style", "${_ou}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid303", tween: [ "style", "${_pin}", "opacity", '1', { fromValue: '0'}], position: 1268, duration: 184 },
            { id: "eid388", tween: [ "style", "${_pin2}", "left", '296px', { fromValue: '1025px'}], position: 1268, duration: 184 },
            { id: "eid418", tween: [ "color", "${_ou_rect}", "background-color", 'rgba(47,150,23,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(47,150,23,1.00)'}], position: 24584, duration: 0 },
            { id: "eid9", tween: [ "style", "${_cloud2Copy}", "top", '-42px', { fromValue: '-258px'}], position: 331, duration: 167 },
            { id: "eid10", tween: [ "style", "${_cloud2Copy}", "top", '-127px', { fromValue: '-42px'}], position: 498, duration: 104 },
            { id: "eid11", tween: [ "style", "${_cloud2Copy}", "top", '-127px', { fromValue: '-127px'}], position: 602, duration: 64 },
            { id: "eid361", tween: [ "color", "${_ouu_rect}", "background-color", 'rgba(255,199,31,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,199,31,1.00)'}], position: 25334, duration: 0 },
            { id: "eid387", tween: [ "style", "${_pin2}", "opacity", '1', { fromValue: '0'}], position: 1268, duration: 184 },
            { id: "eid271", tween: [ "style", "${_ee}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid285", tween: [ "style", "${_ee}", "display", 'none', { fromValue: 'block'}], position: 14934, duration: 0 },
            { id: "eid322", tween: [ "style", "${_ee}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid365", tween: [ "color", "${_ah_rect}", "background-color", 'rgba(255,80,80,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,80,80,1.00)'}], position: 21584, duration: 0 },
            { id: "eid344", tween: [ "gradient", "${_ee_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 23500, duration: 334 },
            { id: "eid345", tween: [ "gradient", "${_ee_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 23834, duration: 334 },
            { id: "eid360", tween: [ "color", "${_ae_rect}", "background-color", 'rgba(240,27,233,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(240,27,233,1.00)'}], position: 26084, duration: 0 },
            { id: "eid274", tween: [ "style", "${_pin}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid276", tween: [ "style", "${_pin}", "display", 'block', { fromValue: 'none'}], position: 1268, duration: 0 },
            { id: "eid301", tween: [ "style", "${_pin}", "display", 'block', { fromValue: 'block'}], position: 1452, duration: 0 },
            { id: "eid294", tween: [ "style", "${_pin}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid368", tween: [ "style", "${_pin}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid304", tween: [ "style", "${_pin}", "left", '296px', { fromValue: '1025px'}], position: 1268, duration: 184 },
            { id: "eid6", tween: [ "style", "${_menu_wrapper}", "top", '-744px', { fromValue: '-744px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_menu_wrapper}", "top", '2px', { fromValue: '-697px'}], position: 666, duration: 165 },
            { id: "eid338", tween: [ "gradient", "${_ahh_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 22000, duration: 334 },
            { id: "eid339", tween: [ "gradient", "${_ahh_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 22334, duration: 334 },
            { id: "eid356", tween: [ "gradient", "${_aee_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 26500, duration: 334 },
            { id: "eid357", tween: [ "gradient", "${_aee_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 26834, duration: 334 },
            { id: "eid1", tween: [ "style", "${_menu_sorkal}", "top", '-172px', { fromValue: '-654px'}], position: 986, duration: 95 },
            { id: "eid411", tween: [ "gradient", "${_ou_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 24250, duration: 334 },
            { id: "eid412", tween: [ "gradient", "${_ou_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 24584, duration: 334 },
            { id: "eid13", tween: [ "style", "${_cloud1}", "top", '-54px', { fromValue: '-258px'}], position: 331, duration: 167 },
            { id: "eid14", tween: [ "style", "${_cloud1}", "top", '-117px', { fromValue: '-54px'}], position: 498, duration: 103 },
            { id: "eid15", tween: [ "style", "${_cloud1}", "top", '-118px', { fromValue: '-117px'}], position: 602, duration: 64 },
            { id: "eid265", tween: [ "style", "${_ouu}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid280", tween: [ "style", "${_ouu}", "display", 'none', { fromValue: 'block'}], position: 14934, duration: 0 },
            { id: "eid328", tween: [ "style", "${_ouu}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid353", tween: [ "gradient", "${_ae_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 25750, duration: 334 },
            { id: "eid354", tween: [ "gradient", "${_ae_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 26084, duration: 334 },
            { id: "eid359", tween: [ "color", "${_aee_rect}", "background-color", 'rgba(48,112,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(48,112,255,1.00)'}], position: 26834, duration: 0 },
            { id: "eid363", tween: [ "color", "${_ee_rect}", "background-color", 'rgba(142,219,43,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,219,43,1.00)'}], position: 23834, duration: 0 },
            { id: "eid369", tween: [ "style", "${_home}", "display", 'block', { fromValue: 'none'}], position: 831, duration: 0 },
            { id: "eid341", tween: [ "gradient", "${_e_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 22750, duration: 334 },
            { id: "eid342", tween: [ "gradient", "${_e_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 23084, duration: 334 },
            { id: "eid34", tween: [ "style", "${_header}", "opacity", '1', { fromValue: '0.000000'}], position: 831, duration: 155 },
            { id: "eid364", tween: [ "color", "${_e_rect}", "background-color", 'rgba(171,82,249,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,82,249,1.00)'}], position: 23084, duration: 0 },
            { id: "eid381", tween: [ "style", "${_pin2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid383", tween: [ "style", "${_pin2}", "display", 'block', { fromValue: 'none'}], position: 1268, duration: 0 },
            { id: "eid384", tween: [ "style", "${_pin2}", "display", 'block', { fromValue: 'block'}], position: 1452, duration: 0 },
            { id: "eid385", tween: [ "style", "${_pin2}", "display", 'none', { fromValue: 'block'}], position: 15000, duration: 0 },
            { id: "eid386", tween: [ "style", "${_pin2}", "display", 'block', { fromValue: 'none'}], position: 21181, duration: 0 },
            { id: "eid419", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid389", tween: [ "style", "${_pin2}", "top", '644px', { fromValue: '644px'}], position: 1268, duration: 0 },
            { id: "eid421", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'none'}], position: 331, duration: 0, easing: "easeOutExpo" },
            { id: "eid71", tween: [ "style", "${_header}", "left", '407px', { fromValue: '407px'}], position: 2133, duration: 0 }         ]
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
