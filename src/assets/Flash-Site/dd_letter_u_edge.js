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
            rect:['0px','0px','1370px','940px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px'],
            transform:[[],[],[],['1','1.45674']]
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
            transform:[[],[],[],['1','0.91562']],
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
            rect:['439px','128px','765px','17px','auto','auto'],
            text:"glq;fSk; tpLgl;l vOj;Jf;fis ,izj;jy;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',35,"rgba(253,123,22,1.00)","800","none","normal"]
         },
         {
            id:'pin',
            type:'group',
            rect:['266px','128px','192','39','auto','auto'],
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
            id:'greeting',
            type:'group',
            rect:['498','184','546','502','auto','auto'],
            c:[
            {
               id:'greetings',
               display:'none',
               type:'image',
               rect:['0px','0px','616px','566px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"greetings.png",'0px','0px']
            },
            {
               id:'puthisali',
               display:'none',
               type:'text',
               rect:['192px','235px','auto','auto','auto','auto'],
               text:"Gj;jprhyp",
               font:['baminiplain, Arial, sans-serif',40,"rgba(251,2,2,1.00)","900","none",""]
            },
            {
               id:'star',
               display:'none',
               type:'image',
               rect:['361px','169px','820px','568px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"star.png",'0px','0px']
            }]
         },
         {
            id:'padangal',
            type:'group',
            rect:['301px','194px','916px','494px','auto','auto'],
            c:[
            {
               id:'box2',
               type:'group',
               rect:['398px','24px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'rect2',
                  type:'rect',
                  rect:['-51px','-42px','284px','290px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgb(179, 179, 179)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'answrd2',
                  type:'text',
                  rect:['17px','199px','auto','auto','auto','auto'],
                  text:"c . uk;",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox2',
                  type:'rect',
                  rect:['70px','199px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line2',
                  type:'text',
                  rect:['79px','192px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img2',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%202388.png",'0px','0px']
               }]
            },
            {
               id:'box1',
               type:'group',
               rect:['77px','22px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'rect1',
                  type:'rect',
                  rect:['-51px','-42px','284px','290px','auto','auto'],
                  sizeRange:['0px','','',''],
                  borderRadius:["10px 0px","10px 0px","25px 26px","25px 25px"],
                  fill:["rgba(255,255,255,1.00)"],
                  stroke:[2,"rgb(179, 179, 179)","solid"],
                  source:['0px','','',''],
                  transform:[]
               },
               {
                  id:'answrd1',
                  type:'text',
                  rect:['0px','196px','auto','auto','auto','auto'],
                  text:"cy . k;",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox1',
                  type:'rect',
                  rect:['89px','197px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line1',
                  type:'text',
                  rect:['98px','190px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img1',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%202377.png",'0px','0px']
               }]
            }]
         },
         {
            id:'letters',
            type:'group',
            rect:['378px','701px','834px','39','auto','auto'],
            c:[
            {
               id:'letter2',
               type:'text',
               rect:['216px','-20px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"a",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'letter1',
               type:'text',
               rect:['366px','-20px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            }]
         },
         {
            id:'home',
            type:'image',
            rect:['296px','42px','71px','71px','auto','auto'],
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
            id:'vilayattu2',
            type:'image',
            rect:['20px','-262px','249px','605px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"vilayattu2.png",'0px','0px']
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
            ["transform", "scaleY", '1.45674'],
            ["style", "height", '940px'],
            ["style", "left", '0px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '1370px']
         ],
         "${_box2}": [
            ["style", "top", '24px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '398px'],
            ["style", "width", '290px']
         ],
         "${_rect1}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '-42px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgb(179, 179, 179)'],
            ["style", "border-width", '2px'],
            ["style", "left", '-51px']
         ],
         "${_rect_pa}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(252,125,27,1)'],
            ["style", "left", '0px'],
            ["style", "height", '52px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(251,136,35,1.00)',100],['rgba(202,198,198,1.00)',100]]]],
            ["style", "cursor", 'pointer'],
            ["style", "width", '53px']
         ],
         "${_ansbox2}": [
            ["style", "top", '199px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '70px'],
            ["style", "width", '46px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_pinselga}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '4px'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_padangal}": [
            ["style", "top", '204px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '426px'],
            ["style", "display", 'block'],
            ["style", "left", '305px'],
            ["style", "width", '950px']
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
         "${_ansbox1}": [
            ["style", "top", '197px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '89px'],
            ["style", "width", '46px']
         ],
         "${_img2}": [
            ["style", "top", '-32px'],
            ["style", "height", '222px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_cloud1}": [
            ["style", "top", '-118px'],
            ["style", "height", '258px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_pa_small}": [
            ["style", "top", '108px'],
            ["style", "left", '301px'],
            ["style", "display", 'none']
         ],
         "${_img1}": [
            ["style", "height", '222px'],
            ["style", "top", '-32px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_vilayattu2}": [
            ["style", "height", '605px'],
            ["style", "top", '-151px'],
            ["style", "left", '20px'],
            ["style", "width", '249px']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_letter1}": [
            ["style", "top", '-20px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '366px'],
            ["style", "font-size", '40px']
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
            ["style", "top", '42px'],
            ["style", "height", '71px'],
            ["style", "left", '296px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_letters}": [
            ["style", "top", '548px'],
            ["style", "display", 'block'],
            ["style", "left", '342px'],
            ["style", "width", '834px']
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
         "${_fwd}": [
            ["style", "top", '11px'],
            ["style", "height", '17px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_box1}": [
            ["style", "top", '22px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '77px'],
            ["style", "width", '290px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "width", '60.47%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", 'bold'],
            ["style", "height", '13.28%'],
            ["style", "opacity", '1'],
            ["style", "left", '46.29%'],
            ["style", "font-size", '10px']
         ],
         "${_greetings}": [
            ["style", "top", '0px'],
            ["style", "height", '502px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '546px']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_fill_line2}": [
            ["style", "top", '192px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '79px'],
            ["style", "height", '51px']
         ],
         "${_logo_batch}": [
            ["style", "opacity", '1'],
            ["style", "left", '3.66%'],
            ["transform", "scaleY", '0.91562']
         ],
         "${_star}": [
            ["style", "top", '-25px'],
            ["style", "height", '568px'],
            ["style", "display", 'none'],
            ["style", "left", '-137px'],
            ["style", "width", '820px']
         ],
         "${_answrd1}": [
            ["style", "top", '196px'],
            ["style", "left", '0px'],
            ["style", "font-size", '45px']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '439px'],
            ["style", "font-size", '35px'],
            ["style", "top", '128px'],
            ["style", "text-align", 'center'],
            ["style", "height", '17px'],
            ["style", "width", '765px'],
            ["style", "opacity", '1']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '20px'],
            ["style", "width", '249px']
         ],
         "${_rect2}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '-42px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgb(179, 179, 179)'],
            ["style", "left", '-51px'],
            ["style", "border-width", '2px']
         ],
         "${_fill_line1}": [
            ["style", "top", '190px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '98px'],
            ["style", "height", '51px']
         ],
         "${_puthisali}": [
            ["style", "top", '235px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '900'],
            ["color", "color", 'rgba(251,2,2,1)'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "left", '192px'],
            ["style", "font-size", '40px']
         ],
         "${_answrd2}": [
            ["style", "top", '199px'],
            ["style", "left", '17px'],
            ["style", "font-size", '45px']
         ],
         "${_letter2}": [
            ["style", "top", '-20px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '216px'],
            ["style", "font-size", '40px']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
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
            ["style", "line-height", '50px'],
            ["style", "word-spacing", '0px'],
            ["style", "width", '41px']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "font-size", '10px'],
            ["style", "opacity", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "height", '14.75%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '46.28%'],
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
            ["style", "height", '860px'],
            ["style", "width", '1366px']
         ],
         "${_answrd2Copy2}": [
            ["style", "top", '165px'],
            ["style", "height", '132px'],
            ["style", "font-size", '45px'],
            ["style", "left", '-4px'],
            ["style", "width", 'auto']
         ],
         "${_pin}": [
            ["style", "top", '128px'],
            ["style", "left", '266px'],
            ["style", "cursor", 'pointer']
         ],
         "${_menu_wrapper}": [
            ["style", "height", '840px'],
            ["style", "top", '2px'],
            ["style", "left", '221px'],
            ["style", "width", '1110px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 900,
         autoPlay: false,
         labels: {
            "greet": 125,
            "star": 233
         },
         timeline: [
            { id: "eid47", tween: [ "style", "${_padangal}", "height", '426px', { fromValue: '426px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_padangal}", "width", '950px', { fromValue: '950px'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_padangal}", "left", '305px', { fromValue: '305px'}], position: 56, duration: 0 },
            { id: "eid56", tween: [ "style", "${_letters}", "top", '548px', { fromValue: '548px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "style", "${_letters}", "left", '342px', { fromValue: '342px'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "style", "${_puthisali}", "display", 'block', { fromValue: 'none'}], position: 233, duration: 0 },
            { id: "eid37", tween: [ "style", "${_letters}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid54", tween: [ "style", "${_padangal}", "top", '192px', { fromValue: '204px'}], position: 0, duration: 56 },
            { id: "eid36", tween: [ "style", "${_padangal}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid2", tween: [ "style", "${_padangal}", "display", 'none', { fromValue: 'none'}], position: 900, duration: 0 },
            { id: "eid35", tween: [ "style", "${_greetings}", "display", 'block', { fromValue: 'none'}], position: 185, duration: 0 },
            { id: "eid28", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 233, duration: 0 },
            { id: "eid29", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 259, duration: 0 },
            { id: "eid30", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 286, duration: 0 },
            { id: "eid31", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 312, duration: 0 },
            { id: "eid32", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 348, duration: 0 },
            { id: "eid1", tween: [ "style", "${_pa_small}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid34", tween: [ "color", "${_puthisali}", "color", 'rgba(157,1,251,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,2,2,1)'}], position: 233, duration: 53 }         ]
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
})(jQuery, AdobeEdge, "EDGE-7374520");
