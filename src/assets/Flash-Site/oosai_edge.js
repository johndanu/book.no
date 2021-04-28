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
               rect:['46.3%','51.4%','60.5%','13.3%','auto','auto'],
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
            id:'cloud2',
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
               id:'aee',
               type:'group',
               rect:['614px','91px','136','145','auto','auto'],
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
                  rect:['28px','14px','auto','100px','auto','auto'],
                  text:"V",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',120,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ae',
               type:'group',
               rect:['412px','93px','136','145','auto','auto'],
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
                  rect:['27px','17px','auto','100px','auto','auto'],
                  text:"v",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',120,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ouu',
               type:'group',
               rect:['210px','91px','136','145','auto','auto'],
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
               type:'group',
               rect:['6px','91px','136','145','auto','auto'],
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
                  rect:['10px','21px','151px','100px','auto','auto'],
                  text:"c",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',115,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ow',
               type:'group',
               rect:['614px','257px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'ow_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'ow_txt',
                  type:'text',
                  rect:['7px','14px','auto','100px','auto','auto'],
                  text:"xs",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',80,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'oo',
               type:'group',
               rect:['412px','259px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'oo_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'oo_txt',
                  type:'text',
                  rect:['29px','3px','auto','100px','auto','auto'],
                  text:"X",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',110,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'o',
               type:'group',
               rect:['210px','257px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'o_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'o_txt',
                  type:'text',
                  rect:['27px','5px','auto','100px','auto','auto'],
                  text:"x",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',110,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'i',
               type:'group',
               rect:['6px','257px','136','145','auto','auto'],
               cursor:['pointer'],
               opacity:1,
               c:[
               {
                  id:'i_rect',
                  type:'rect',
                  rect:['0px','6px','136px','134px','auto','auto'],
                  cursor:['pointer'],
                  borderRadius:["10px","10px","10px","10px"],
                  fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
                  stroke:[0,"rgb(0, 0, 0)","solid"]
               },
               {
                  id:'i_txt',
                  type:'text',
                  rect:['20px','7px','116px','100px','auto','auto'],
                  text:"I",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',110,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ee',
               type:'group',
               rect:['614px','-72px','136','145','auto','auto'],
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
                  rect:['35px','16px','auto','100px','auto','auto'],
                  text:"&lt;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',120,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'e',
               type:'group',
               rect:['412px','-70px','136','145','auto','auto'],
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
                  rect:['17px','16px','auto','100px','auto','auto'],
                  text:",",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',110,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ahh',
               type:'group',
               rect:['210px','-72px','136','145','auto','auto'],
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
                  rect:['5px','9px','auto','100px','auto','auto'],
                  text:"M",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',105,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            },
            {
               id:'ah',
               type:'group',
               rect:['6px','-72px','136','145','auto','auto'],
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
                  rect:['10px','9px','auto','100px','auto','auto'],
                  text:"m",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',105,"rgba(0,0,0,1)","700","none","normal"],
                  transform:[]
               }]
            }]
         },
         {
            id:'header',
            type:'text',
            rect:['419px','131px','659px','34px','auto','auto'],
            text:"glq;fSk; Xir cr;rupg;Gk;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',38,"rgba(253,123,22,1.00)","800","none","normal"]
         },
         {
            id:'home',
            type:'image',
            rect:['289px','34px','71px','71px','auto','auto'],
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
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "left", '0px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '1370px']
         ],
         "${_ahh_rect}": [
            ["color", "background-color", 'rgba(253,22,123,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
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
            ["style", "left", '10px'],
            ["style", "font-size", '105px'],
            ["style", "top", '9px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_aee}": [
            ["style", "top", '91px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
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
         "${_ow_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '7px'],
            ["style", "font-size", '80px'],
            ["style", "top", '14px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_ee_rect}": [
            ["color", "background-color", 'rgba(142,219,43,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_ae}": [
            ["style", "top", '93px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_ou}": [
            ["style", "top", '91px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '6px']
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
            ["style", "left", '17px'],
            ["style", "font-size", '110px'],
            ["style", "top", '16px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_ah}": [
            ["style", "top", '-72px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '6px']
         ],
         "${_oo_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '29px'],
            ["style", "font-size", '110px'],
            ["style", "top", '3px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_o_rect}": [
            ["color", "background-color", 'rgba(255,45,31,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_logo_batch}": [
            ["style", "left", '3.66%'],
            ["style", "opacity", '1']
         ],
         "${_ou_rect}": [
            ["color", "background-color", 'rgba(47,150,23,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_ah_rect}": [
            ["color", "background-color", 'rgba(255,80,80,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_ae_rect}": [
            ["color", "background-color", 'rgba(240,27,233,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
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
            ["style", "font-size", '120px'],
            ["style", "top", '14px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_cloud1}": [
            ["style", "top", '-118px'],
            ["style", "height", '258px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_ouu_rect}": [
            ["color", "background-color", 'rgba(255,199,31,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_oo}": [
            ["style", "top", '259px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_i_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '20px'],
            ["style", "font-size", '110px'],
            ["style", "top", '7px'],
            ["transform", "scaleY", '1'],
            ["style", "line-height", '100px'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "width", '116px']
         ],
         "${_fct}": [
            ["style", "display", 'none']
         ],
         "${_e}": [
            ["style", "top", '-70px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '412px']
         ],
         "${_aee_rect}": [
            ["color", "background-color", 'rgba(48,112,255,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_e_rect}": [
            ["color", "background-color", 'rgba(171,82,249,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.43%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_cloud2}": [
            ["style", "top", '-127px'],
            ["style", "height", '258px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_home}": [
            ["style", "top", '34px'],
            ["style", "height", '71px'],
            ["style", "left", '289px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_ow_rect}": [
            ["color", "background-color", 'rgba(255,53,110,1.00)'],
            ["style", "top", '6px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_eyes_12}": [
            ["style", "top", '-42px'],
            ["style", "height", '182px'],
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
         "${_oo_rect}": [
            ["color", "background-color", 'rgba(55,206,13,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_ouu}": [
            ["style", "top", '91px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '210px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "width", '60.47%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", 'bold'],
            ["style", "height", '13.28%'],
            ["style", "opacity", '1'],
            ["style", "left", '46.3%'],
            ["style", "font-size", '10px']
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
            ["style", "top", '9px'],
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
         "${_i_rect}": [
            ["color", "background-color", 'rgba(203,62,189,1.00)'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_sorkal}": [
            ["style", "top", '270px'],
            ["style", "height", '366px'],
            ["style", "left", '371px'],
            ["style", "width", '799px']
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
            ["style", "left", '10px'],
            ["style", "font-size", '115px'],
            ["style", "top", '21px'],
            ["transform", "scaleY", '1'],
            ["style", "width", '116px'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '20px'],
            ["style", "width", '249px']
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
            ["style", "left", '27px'],
            ["style", "font-size", '120px'],
            ["style", "top", '17px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
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
         "${_ahh}": [
            ["style", "top", '-72px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '210px']
         ],
         "${_ee}": [
            ["style", "top", '-72px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
         ],
         "${_ow}": [
            ["style", "top", '257px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '614px']
         ],
         "${_i}": [
            ["style", "top", '257px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '6px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'none'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
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
            ["style", "left", '35px'],
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
            ["style", "left", '419px'],
            ["style", "font-size", '38px'],
            ["style", "top", '131px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "width", '659px'],
            ["style", "opacity", '1']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "font-size", '10px'],
            ["style", "opacity", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "height", '14.75%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '46.3%'],
            ["style", "width", '52.64%']
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
         "${_o}": [
            ["style", "top", '257px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '210px']
         ],
         "${_o_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '27px'],
            ["style", "font-size", '110px'],
            ["style", "top", '5px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
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
         duration: 12918,
         autoPlay: true,
         labels: {
            "ah_on": 4000,
            "ahh_on": 4750,
            "e_on": 5500,
            "ee_on": 6250,
            "ou_on": 7000,
            "ouu_on": 7750,
            "ae_on": 8500,
            "aee_on": 9250,
            "i_on": 10000,
            "o_on": 10750,
            "oo_on": 11500,
            "ow_on": 12250
         },
         timeline: [
            { id: "eid10", tween: [ "color", "${_ee_rect}", "background-color", 'rgba(142,219,43,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,219,43,1.00)'}], position: 6584, duration: 0 },
            { id: "eid13", tween: [ "color", "${_ou_rect}", "background-color", 'rgba(47,150,23,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(47,150,23,1.00)'}], position: 7334, duration: 0 },
            { id: "eid40", tween: [ "color", "${_oo_rect}", "background-color", 'rgba(55,206,13,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(55,206,13,1.00)'}], position: 11834, duration: 0 },
            { id: "eid16", tween: [ "color", "${_ouu_rect}", "background-color", 'rgba(255,199,31,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,199,31,1.00)'}], position: 8084, duration: 0 },
            { id: "eid1", tween: [ "color", "${_ah_rect}", "background-color", 'rgba(255,80,80,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,80,80,1.00)'}], position: 4334, duration: 0 },
            { id: "eid11", tween: [ "gradient", "${_ee_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 6250, duration: 334 },
            { id: "eid12", tween: [ "gradient", "${_ee_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 6584, duration: 334 },
            { id: "eid26", tween: [ "gradient", "${_i_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 10000, duration: 334 },
            { id: "eid27", tween: [ "gradient", "${_i_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 10334, duration: 334 },
            { id: "eid19", tween: [ "color", "${_ae_rect}", "background-color", 'rgba(240,27,233,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(240,27,233,1.00)'}], position: 8834, duration: 0 },
            { id: "eid17", tween: [ "gradient", "${_ouu_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 7750, duration: 334 },
            { id: "eid18", tween: [ "gradient", "${_ouu_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 8084, duration: 334 },
            { id: "eid22", tween: [ "color", "${_aee_rect}", "background-color", 'rgba(48,112,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(48,112,255,1.00)'}], position: 9584, duration: 0 },
            { id: "eid5", tween: [ "gradient", "${_ahh_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 4750, duration: 334 },
            { id: "eid6", tween: [ "gradient", "${_ahh_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 5084, duration: 334 },
            { id: "eid2", tween: [ "gradient", "${_ah_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 4000, duration: 334 },
            { id: "eid3", tween: [ "gradient", "${_ah_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 4334, duration: 334 },
            { id: "eid14", tween: [ "gradient", "${_ou_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 7000, duration: 334 },
            { id: "eid15", tween: [ "gradient", "${_ou_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 7334, duration: 334 },
            { id: "eid35", tween: [ "gradient", "${_ow_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 12250, duration: 334 },
            { id: "eid36", tween: [ "gradient", "${_ow_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 12584, duration: 334 },
            { id: "eid20", tween: [ "gradient", "${_ae_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 8500, duration: 334 },
            { id: "eid21", tween: [ "gradient", "${_ae_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 8834, duration: 334 },
            { id: "eid39", tween: [ "color", "${_o_rect}", "background-color", 'rgba(255,45,31,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,45,31,1.00)'}], position: 11084, duration: 0 },
            { id: "eid29", tween: [ "gradient", "${_o_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 10750, duration: 334 },
            { id: "eid30", tween: [ "gradient", "${_o_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 11084, duration: 334 },
            { id: "eid32", tween: [ "gradient", "${_oo_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 11500, duration: 334 },
            { id: "eid33", tween: [ "gradient", "${_oo_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 11834, duration: 334 },
            { id: "eid8", tween: [ "gradient", "${_e_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 5500, duration: 334 },
            { id: "eid9", tween: [ "gradient", "${_e_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 5834, duration: 334 },
            { id: "eid38", tween: [ "color", "${_i_rect}", "background-color", 'rgba(203,62,189,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(203,62,189,1.00)'}], position: 10334, duration: 0 },
            { id: "eid4", tween: [ "color", "${_ahh_rect}", "background-color", 'rgba(253,22,123,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(253,22,123,1.00)'}], position: 5084, duration: 0 },
            { id: "eid23", tween: [ "gradient", "${_aee_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]}], position: 9250, duration: 334 },
            { id: "eid24", tween: [ "gradient", "${_aee_rect}", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]], { fromValue: [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 9584, duration: 334 },
            { id: "eid42", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "color", "${_e_rect}", "background-color", 'rgba(171,82,249,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,82,249,1.00)'}], position: 5834, duration: 0 },
            { id: "eid43", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "color", "${_ow_rect}", "background-color", 'rgba(255,53,110,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,53,110,1.00)'}], position: 12584, duration: 0 }         ]
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
      fill: ['rgba(0,0,0,0)','images/eyeb23.png','0px','0px']
   },
   {
      id: 'eyeb1',
      type: 'image',
      rect: ['-6px','-49px','65px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/eyeb13.png','0px','0px']
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
})(jQuery, AdobeEdge, "EDGE-3243262");
