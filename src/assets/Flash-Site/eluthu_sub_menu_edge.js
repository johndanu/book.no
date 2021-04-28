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
            fill:["rgba(0,0,0,0)",im+"eluthukalmenu.png",'0px','0px']
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
            id:'ee',
            display:'none',
            type:'group',
            rect:['985px','267px','136','145','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            c:[
            {
               id:'ee_rect',
               display:'none',
               type:'rect',
               rect:['0px','6px','136px','134px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'ee_txt',
               display:'none',
               type:'text',
               rect:['37px','16px','auto','100px','auto','auto'],
               text:"Q",
               align:"left",
               font:['baminiplain, Arial, sans-serif',120,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'e',
            display:'none',
            type:'group',
            rect:['783px','269px','136','145','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            c:[
            {
               id:'e_rect',
               display:'none',
               type:'rect',
               rect:['0px','6px','136px','134px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'e_txt',
               display:'none',
               type:'text',
               rect:['18px','21px','auto','100px','auto','auto'],
               text:"r",
               align:"left",
               font:['baminiplain, Arial, sans-serif',110,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'ahh',
            display:'none',
            type:'group',
            rect:['581px','267px','136','145','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            c:[
            {
               id:'ahh_rect',
               display:'none',
               type:'rect',
               rect:['0px','6px','136px','134px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'ahh_txt',
               display:'none',
               type:'text',
               rect:['5px','16px','auto','100px','auto','auto'],
               text:"q",
               align:"left",
               font:['baminiplain, Arial, sans-serif',105,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'ah',
            display:'none',
            type:'group',
            rect:['377px','267px','136','145','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            c:[
            {
               id:'ah_rect',
               display:'none',
               type:'rect',
               rect:['0px','6px','136px','134px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'ah_txt',
               display:'none',
               type:'text',
               rect:['11px','16px','auto','100px','auto','auto'],
               text:"f",
               align:"left",
               font:['baminiplain, Arial, sans-serif',105,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'aee',
            display:'none',
            type:'group',
            rect:['985px','465px','136','145','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            c:[
            {
               id:'aee_rect',
               display:'none',
               type:'rect',
               rect:['0px','6px','136px','134px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'aee_txt',
               display:'none',
               type:'text',
               rect:['28px','16px','auto','100px','auto','auto'],
               text:"e",
               align:"left",
               font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'ae',
            display:'none',
            type:'group',
            rect:['783px','467px','136','145','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            c:[
            {
               id:'ae_rect',
               display:'none',
               type:'rect',
               rect:['0px','6px','136px','134px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'ae_txt',
               display:'none',
               type:'text',
               rect:['28px','14px','auto','100px','auto','auto'],
               text:"j",
               align:"left",
               font:['baminiplain, Arial, sans-serif',130,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'ouu',
            display:'none',
            type:'group',
            rect:['581px','465px','136','145','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            c:[
            {
               id:'ouu_rect',
               display:'none',
               type:'rect',
               rect:['0px','6px','136px','134px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'ouu_txt',
               display:'none',
               type:'text',
               rect:['5px','21px','auto','100px','auto','auto'],
               text:"z",
               align:"left",
               font:['baminiplain, Arial, sans-serif',115,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'ou',
            display:'none',
            type:'group',
            rect:['377px','467px','136','145','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            c:[
            {
               id:'ou_rect',
               display:'none',
               type:'rect',
               rect:['0px','6px','136px','134px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(73,70,70,1)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'ou_txt',
               display:'none',
               type:'text',
               rect:['5px','21px','auto','100px','auto','auto'],
               text:"l",
               align:"left",
               font:['baminiplain, Arial, sans-serif',115,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'header',
            type:'text',
            rect:['441px','131px','659px','34px','auto','auto'],
            text:"vOj;Jf;fis fz;Lgpbj;jy;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',40,"rgba(253,123,22,1.00)","800","none","normal"]
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
               rect:['2px','0px','auto','auto','auto','auto'],
               text:"Kd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',32,"rgba(0,0,0,1.00)","800","none","normal"]
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
               rect:['1px','0px','auto','auto','auto','auto'],
               text:"Kd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',32,"rgba(0,0,0,1.00)","800","none","normal"]
            }]
         },
         {
            id:'home',
            display:'none',
            type:'image',
            rect:['290px','34px','71px','71px','auto','auto'],
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
         "${_aee_rect}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(48,112,255,1)'],
            ["style", "left", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]]
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
            ["style", "left", '31px'],
            ["style", "font-size", '105px'],
            ["style", "top", '23px'],
            ["style", "opacity", '0.015625'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_aee}": [
            ["style", "top", '465px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '985px']
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
         "${_fct}": [
            ["style", "display", 'none'],
            ["style", "left", '85px']
         ],
         "${_rev}": [
            ["style", "height", '19px'],
            ["style", "top", '7px'],
            ["style", "left", '158px'],
            ["style", "width", '19px']
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
            ["style", "left", '34px'],
            ["style", "font-size", '110px'],
            ["style", "top", '23px'],
            ["style", "opacity", '0.015625'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
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
         "${_ouu_rect}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(255,199,31,1)'],
            ["style", "left", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]]
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
         "${_ah}": [
            ["style", "top", '267px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '145px'],
            ["style", "opacity", '0.015625'],
            ["style", "left", '377px'],
            ["style", "width", '137px']
         ],
         "${_ah_rect}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(255,80,80,1)'],
            ["style", "left", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]]
         ],
         "${_ou_rect}": [
            ["color", "background-color", 'rgba(47,150,23,1)'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_munselga}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '2px'],
            ["style", "font-size", '32px']
         ],
         "${_ae_rect}": [
            ["color", "background-color", 'rgba(240,27,233,1)'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
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
            ["style", "opacity", '0.015625'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
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
         "${_fct_logo}": [
            ["style", "height", '28px'],
            ["style", "top", '0px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_ee_rect}": [
            ["color", "background-color", 'rgba(142,219,43,1)'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
         "${_cloud2Copy}": [
            ["style", "height", '258px'],
            ["style", "top", '-258px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_ee}": [
            ["style", "top", '267px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '985px']
         ],
         "${_munselga2}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '0px'],
            ["style", "left", '1px'],
            ["style", "font-size", '32px']
         ],
         "${_ahh_rect}": [
            ["color", "background-color", 'rgba(253,22,123,1)'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "top", '6px']
         ],
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
         "${_ahh_txt}": [
            ["style", "-webkit-transform-origin", [50,46], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,46],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '27px'],
            ["style", "font-size", '105px'],
            ["style", "top", '23px'],
            ["style", "opacity", '0.015625'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
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
         "${_rev2}": [
            ["style", "top", '7px'],
            ["style", "height", '19px'],
            ["style", "left", '158px'],
            ["style", "width", '19px']
         ],
         "${_e_rect}": [
            ["style", "top", '6px'],
            ["color", "background-color", 'rgba(171,82,249,1)'],
            ["style", "left", '0px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(209,209,209,1.00)',0],['rgba(216,216,216,1.00)',100]]]]
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
         "${_ouu}": [
            ["style", "top", '465px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '581px']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
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
            ["style", "opacity", '0.015625'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_ae}": [
            ["style", "top", '467px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '783px']
         ],
         "${_e}": [
            ["style", "top", '269px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0.015625'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '783px']
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
            ["style", "opacity", '0.015625'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_mun}": [
            ["style", "top", '200px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '470px']
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
            ["style", "left", '33px'],
            ["style", "font-size", '115px'],
            ["style", "top", '23px'],
            ["style", "opacity", '0.015625'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "height", '100px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '100px']
         ],
         "${_ahh}": [
            ["style", "top", '267px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '71px'],
            ["style", "opacity", '0.015625'],
            ["style", "left", '581px'],
            ["style", "width", '65px']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-654px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
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
            ["style", "left", '470px']
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
            ["style", "left", '12px'],
            ["style", "font-size", '120px'],
            ["style", "top", '16px'],
            ["style", "opacity", '0.015625'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
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
            ["style", "left", '45.64%'],
            ["style", "font-size", '10px']
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
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'none'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_ou}": [
            ["style", "top", '467px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "height", '71px'],
            ["style", "opacity", '0.015625'],
            ["style", "left", '377px'],
            ["style", "width", '71px']
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
            { id: "eid439", tween: [ "style", "${_ae}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid464", tween: [ "style", "${_ae}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid536", tween: [ "style", "${_ah_txt}", "left", '31px', { fromValue: '31px'}], position: 1500, duration: 0 },
            { id: "eid528", tween: [ "style", "${_ouu_txt}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid529", tween: [ "style", "${_ahh_rect}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid378", tween: [ "style", "${_mun2}", "left", '1022px', { fromValue: '470px'}], position: 1176, duration: 250 },
            { id: "eid555", tween: [ "style", "${_ah}", "height", '71px', { fromValue: '145px'}], position: 1426, duration: 74 },
            { id: "eid394", tween: [ "style", "${_mun2}", "top", '648px', { fromValue: '648px'}], position: 1426, duration: 0 },
            { id: "eid446", tween: [ "style", "${_ah_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid471", tween: [ "style", "${_ah_txt}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid521", tween: [ "style", "${_ouu}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid537", tween: [ "style", "${_ah_txt}", "top", '23px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid451", tween: [ "style", "${_e}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid476", tween: [ "style", "${_e}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid443", tween: [ "style", "${_aee_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_aee_txt}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid550", tween: [ "style", "${_ou}", "width", '71px', { fromValue: '71px'}], position: 1500, duration: 0 },
            { id: "eid433", tween: [ "style", "${_ou}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid458", tween: [ "style", "${_ou}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid447", tween: [ "style", "${_ah_rect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid472", tween: [ "style", "${_ah_rect}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid519", tween: [ "style", "${_ee_txt}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid450", tween: [ "style", "${_ahh_rect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid475", tween: [ "style", "${_ahh_rect}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid510", tween: [ "style", "${_ae}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid444", tween: [ "style", "${_aee_rect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid469", tween: [ "style", "${_aee_rect}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid556", tween: [ "style", "${_ah}", "width", '65px', { fromValue: '137px'}], position: 1426, duration: 74 },
            { id: "eid455", tween: [ "style", "${_ee_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid480", tween: [ "style", "${_ee_txt}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid552", tween: [ "style", "${_ahh}", "width", '65px', { fromValue: '65px'}], position: 1500, duration: 0 },
            { id: "eid437", tween: [ "style", "${_ouu_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid462", tween: [ "style", "${_ouu_txt}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid1", tween: [ "style", "${_menu_sorkal}", "top", '-172px', { fromValue: '-654px'}], position: 986, duration: 95 },
            { id: "eid509", tween: [ "style", "${_e_rect}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid436", tween: [ "style", "${_ouu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid461", tween: [ "style", "${_ouu}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid546", tween: [ "style", "${_e_txt}", "top", '23px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid453", tween: [ "style", "${_e_rect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid478", tween: [ "style", "${_e_rect}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid513", tween: [ "style", "${_ee_rect}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid532", tween: [ "style", "${_ahh_txt}", "left", '27px', { fromValue: '27px'}], position: 1500, duration: 0 },
            { id: "eid395", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid545", tween: [ "style", "${_e_txt}", "left", '34px', { fromValue: '34px'}], position: 1500, duration: 0 },
            { id: "eid435", tween: [ "style", "${_ou_rect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid460", tween: [ "style", "${_ou_rect}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid551", tween: [ "style", "${_ahh}", "height", '71px', { fromValue: '71px'}], position: 1500, duration: 0 },
            { id: "eid544", tween: [ "style", "${_ou_txt}", "left", '33px', { fromValue: '33px'}], position: 1500, duration: 0 },
            { id: "eid517", tween: [ "style", "${_aee_txt}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid377", tween: [ "style", "${_mun2}", "opacity", '1', { fromValue: '0'}], position: 1176, duration: 250 },
            { id: "eid13", tween: [ "style", "${_cloud1}", "top", '-54px', { fromValue: '-258px'}], position: 331, duration: 167 },
            { id: "eid14", tween: [ "style", "${_cloud1}", "top", '-117px', { fromValue: '-54px'}], position: 498, duration: 103 },
            { id: "eid15", tween: [ "style", "${_cloud1}", "top", '-118px', { fromValue: '-117px'}], position: 602, duration: 64 },
            { id: "eid452", tween: [ "style", "${_e_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "style", "${_e_txt}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid71", tween: [ "style", "${_header}", "left", '407px', { fromValue: '407px'}], position: 2133, duration: 0 },
            { id: "eid524", tween: [ "style", "${_ou}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid445", tween: [ "style", "${_ah}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid470", tween: [ "style", "${_ah}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid442", tween: [ "style", "${_aee}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid467", tween: [ "style", "${_aee}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid391", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid449", tween: [ "style", "${_ahh_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid474", tween: [ "style", "${_ahh_txt}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid520", tween: [ "style", "${_ahh_txt}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid392", tween: [ "style", "${_header}", "font-size", '38px', { fromValue: '38px'}], position: 1398, duration: 0 },
            { id: "eid526", tween: [ "style", "${_ah_txt}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid17", tween: [ "style", "${_eyes_12}", "top", '-42px', { fromValue: '-186px'}], position: 95, duration: 236 },
            { id: "eid530", tween: [ "style", "${_e_txt}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid516", tween: [ "style", "${_ou_txt}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid525", tween: [ "style", "${_ouu_rect}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid543", tween: [ "style", "${_ou_txt}", "top", '23px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid518", tween: [ "style", "${_ee}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid541", tween: [ "style", "${_ee_txt}", "top", '16px', { fromValue: '16px'}], position: 1500, duration: 0 },
            { id: "eid533", tween: [ "style", "${_ahh_txt}", "top", '23px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid514", tween: [ "style", "${_ah}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid454", tween: [ "style", "${_ee}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid479", tween: [ "style", "${_ee}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid527", tween: [ "style", "${_ahh}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid438", tween: [ "style", "${_ouu_rect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid463", tween: [ "style", "${_ouu_rect}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid127", tween: [ "style", "${_mun}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_mun}", "display", 'block', { fromValue: 'none'}], position: 1176, duration: 0 },
            { id: "eid128", tween: [ "style", "${_mun}", "display", 'block', { fromValue: 'block'}], position: 1426, duration: 0 },
            { id: "eid272", tween: [ "style", "${_mun}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid273", tween: [ "style", "${_mun}", "display", 'none', { fromValue: 'block'}], position: 2133, duration: 0 },
            { id: "eid295", tween: [ "style", "${_mun}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid367", tween: [ "style", "${_mun}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid456", tween: [ "style", "${_ee_rect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid481", tween: [ "style", "${_ee_rect}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid507", tween: [ "style", "${_ah_rect}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid132", tween: [ "style", "${_mun}", "opacity", '1', { fromValue: '0'}], position: 1176, duration: 250 },
            { id: "eid6", tween: [ "style", "${_menu_wrapper}", "top", '-744px', { fromValue: '-744px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_menu_wrapper}", "top", '2px', { fromValue: '-697px'}], position: 666, duration: 165 },
            { id: "eid434", tween: [ "style", "${_ou_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid459", tween: [ "style", "${_ou_txt}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid34", tween: [ "style", "${_header}", "opacity", '1', { fromValue: '0.000000'}], position: 831, duration: 155 },
            { id: "eid369", tween: [ "style", "${_home}", "display", 'block', { fromValue: 'none'}], position: 831, duration: 0 },
            { id: "eid531", tween: [ "style", "${_ou_rect}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid522", tween: [ "style", "${_aee}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid370", tween: [ "style", "${_mun2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid371", tween: [ "style", "${_mun2}", "display", 'block', { fromValue: 'none'}], position: 1176, duration: 0 },
            { id: "eid372", tween: [ "style", "${_mun2}", "display", 'block', { fromValue: 'block'}], position: 1426, duration: 0 },
            { id: "eid373", tween: [ "style", "${_mun2}", "display", 'block', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid374", tween: [ "style", "${_mun2}", "display", 'none', { fromValue: 'block'}], position: 2133, duration: 0 },
            { id: "eid375", tween: [ "style", "${_mun2}", "display", 'block', { fromValue: 'none'}], position: 15000, duration: 0 },
            { id: "eid376", tween: [ "style", "${_mun2}", "display", 'none', { fromValue: 'block'}], position: 21000, duration: 0 },
            { id: "eid540", tween: [ "style", "${_ee_txt}", "left", '12px', { fromValue: '12px'}], position: 1500, duration: 0 },
            { id: "eid554", tween: [ "style", "${_fct}", "left", '85px', { fromValue: '85px'}], position: 1500, duration: 0 },
            { id: "eid549", tween: [ "style", "${_ou}", "height", '71px', { fromValue: '71px'}], position: 1500, duration: 0 },
            { id: "eid508", tween: [ "style", "${_ae_rect}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid512", tween: [ "style", "${_e}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid72", tween: [ "style", "${_header}", "top", '151px', { fromValue: '151px'}], position: 2133, duration: 0 },
            { id: "eid441", tween: [ "style", "${_ae_rect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid466", tween: [ "style", "${_ae_rect}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid448", tween: [ "style", "${_ahh}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid473", tween: [ "style", "${_ahh}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid9", tween: [ "style", "${_cloud2Copy}", "top", '-42px', { fromValue: '-258px'}], position: 331, duration: 167 },
            { id: "eid10", tween: [ "style", "${_cloud2Copy}", "top", '-127px', { fromValue: '-42px'}], position: 498, duration: 104 },
            { id: "eid11", tween: [ "style", "${_cloud2Copy}", "top", '-127px', { fromValue: '-127px'}], position: 602, duration: 64 },
            { id: "eid523", tween: [ "style", "${_aee_rect}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid440", tween: [ "style", "${_ae_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid465", tween: [ "style", "${_ae_txt}", "display", 'block', { fromValue: 'none'}], position: 1081, duration: 0 },
            { id: "eid511", tween: [ "style", "${_ae_txt}", "opacity", '1', { fromValue: '0.015625'}], position: 1081, duration: 419 },
            { id: "eid136", tween: [ "style", "${_mun}", "left", '1022px', { fromValue: '470px'}], position: 1176, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-2577926");
