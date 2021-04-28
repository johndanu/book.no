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
            rect:['0px','3px','1370px','809px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px'],
            transform:[[],[],[],['1','1.19113']]
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
            transform:[[],[],[],['1','0.89633']],
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
               rect:['46.5%','52%','58.7%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['46.8%','37%','46.5%','13.3%','auto','auto'],
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
            id:'greeting',
            type:'group',
            rect:['498','184','546','502','auto','auto'],
            c:[
            {
               id:'star',
               display:'none',
               type:'image',
               rect:['361px','169px','820px','568px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"star.png",'0px','0px']
            },
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
            }]
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
            rect:['463px','125px','659px','34px','auto','auto'],
            text:"glq;fSk; xypAk; ,izj;jy;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',38,"rgba(253,123,22,1.00)","800","none","normal"]
         },
         {
            id:'pin',
            type:'group',
            rect:['275px','128px','192','39','auto','auto'],
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
            id:'padangal',
            type:'group',
            rect:['301px','194px','916px','494px','auto','auto'],
            c:[
            {
               id:'box5',
               type:'group',
               rect:['398px','321px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'rect5',
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
                  id:'ans5',
                  type:'rect',
                  rect:['-10px','199px','212px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgb(179, 179, 179)","solid"]
               },
               {
                  id:'img5',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201167.png",'0px','0px']
               }]
            },
            {
               id:'box4',
               type:'group',
               rect:['77px','321px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'rect4',
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
                  id:'ans4',
                  type:'rect',
                  rect:['-17px','199px','212px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgb(179, 179, 179)","solid"]
               },
               {
                  id:'img4',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201470.png",'0px','0px']
               }]
            },
            {
               id:'box3',
               type:'group',
               rect:['718px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'rect3',
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
                  id:'ans3',
                  type:'rect',
                  rect:['-15px','197px','212px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgb(179, 179, 179)","solid"]
               },
               {
                  id:'img3',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201162.png",'0px','0px']
               }]
            },
            {
               id:'box2',
               type:'group',
               rect:['398px','10px','290px','295px','auto','auto'],
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
                  id:'ans2',
                  type:'rect',
                  rect:['-15px','199px','212px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgb(179, 179, 179)","solid"]
               },
               {
                  id:'img2',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201172.png",'0px','0px']
               }]
            },
            {
               id:'box1',
               type:'group',
               rect:['77px','10px','290px','295px','auto','auto'],
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
                  id:'ans1',
                  type:'rect',
                  rect:['-15px','199px','212px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgb(179, 179, 179)","solid"]
               },
               {
                  id:'img1',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201627.jpg",'0px','0px']
               }]
            }]
         },
         {
            id:'words',
            type:'group',
            rect:['378px','701px','834px','39','auto','auto'],
            c:[
            {
               id:'wrd5',
               type:'text',
               rect:['636px','-1px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"Mok;",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'wrd4',
               type:'text',
               rect:['70px','10px','auto','25px','auto','auto'],
               cursor:['pointer'],
               text:"Mykuk;",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'wrd3',
               type:'text',
               rect:['277px','9px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"Muk;",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'wrd2',
               type:'text',
               rect:['432px','2px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"MAjk;",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'wrd1',
               type:'text',
               rect:['-61px','9px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"ML",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            }]
         },
         {
            id:'home',
            type:'image',
            rect:['294px','49px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
         },
         {
            id:'fct',
            type:'group',
            rect:['55px','732px','227','28','auto','auto'],
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
         "${_puthisali}": [
            ["style", "top", '275px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["color", "color", 'rgba(251,2,2,1)'],
            ["style", "font-weight", '900'],
            ["style", "left", '186px'],
            ["style", "font-size", '40px']
         ],
         "${_box2}": [
            ["style", "top", '10px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '398px'],
            ["style", "width", '290px']
         ],
         "${_ans5}": [
            ["style", "top", '199px'],
            ["style", "height", '38px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '-10px'],
            ["style", "width", '212px']
         ],
         "${_wrd5}": [
            ["style", "top", '-1px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '636px'],
            ["style", "font-size", '40px']
         ],
         "${_box4}": [
            ["style", "top", '321px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '77px'],
            ["style", "width", '290px']
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
         "${_wrd4}": [
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "height", '25px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '70px'],
            ["style", "font-size", '40px']
         ],
         "${_rect3}": [
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
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_pinselga}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '4px'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
         ],
         "${_padangal}": [
            ["style", "top", '203px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '426px'],
            ["style", "display", 'block'],
            ["style", "left", '301px'],
            ["style", "width", '950px']
         ],
         "${_fct}": [
            ["style", "left", '58px'],
            ["style", "top", '828px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_rect5}": [
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
         "${_fwd}": [
            ["style", "top", '11px'],
            ["style", "height", '17px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_wrd2}": [
            ["style", "top", '2px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '432px'],
            ["style", "font-size", '40px']
         ],
         "${_img2}": [
            ["style", "top", '-32px'],
            ["style", "height", '222px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_wrd1}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-61px'],
            ["style", "font-size", '40px']
         ],
         "${_cloud1}": [
            ["style", "top", '-118px'],
            ["style", "height", '258px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_words}": [
            ["style", "display", 'block'],
            ["style", "top", '771px'],
            ["style", "left", '463px'],
            ["style", "width", '834px']
         ],
         "${_img1}": [
            ["style", "height", '222px'],
            ["style", "top", '-32px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_box5}": [
            ["style", "top", '321px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '398px'],
            ["style", "width", '290px']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_logo_batch}": [
            ["style", "opacity", '1'],
            ["style", "left", '3.66%'],
            ["transform", "scaleY", '0.89633']
         ],
         "${_ans2}": [
            ["style", "top", '199px'],
            ["style", "height", '38px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '-15px'],
            ["style", "width", '212px']
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
            ["style", "top", '49px'],
            ["style", "height", '71px'],
            ["style", "left", '294px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_img5}": [
            ["style", "height", '222px'],
            ["style", "top", '-32px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
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
         "${_wrapper}": [
            ["style", "top", '3px'],
            ["transform", "scaleY", '1.19113'],
            ["style", "height", '809px'],
            ["style", "left", '0px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '1370px']
         ],
         "${_box1}": [
            ["style", "top", '10px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '77px'],
            ["style", "width", '290px']
         ],
         "${_rights}": [
            ["style", "top", '52.04%'],
            ["style", "width", '58.71%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", 'bold'],
            ["style", "height", '13.29%'],
            ["style", "opacity", '1'],
            ["style", "left", '46.45%'],
            ["style", "font-size", '10px']
         ],
         "${_greetings}": [
            ["style", "top", '41px'],
            ["style", "display", 'none'],
            ["style", "height", '502px'],
            ["style", "left", '0px'],
            ["style", "width", '546px']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
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
         "${_box3}": [
            ["style", "top", '10px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '718px'],
            ["style", "width", '290px']
         ],
         "${_star}": [
            ["style", "top", '-10px'],
            ["style", "height", '610px'],
            ["style", "display", 'none'],
            ["style", "left", '-170px'],
            ["style", "width", '900px']
         ],
         "${_wrd3}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '277px'],
            ["style", "font-size", '40px']
         ],
         "${_ans4}": [
            ["style", "top", '199px'],
            ["style", "height", '38px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '-17px'],
            ["style", "width", '212px']
         ],
         "${_img4}": [
            ["style", "top", '-32px'],
            ["style", "height", '222px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '20px'],
            ["style", "width", '249px']
         ],
         "${_rect4}": [
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
         "${_img3}": [
            ["style", "height", '222px'],
            ["style", "top", '-32px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_pa_small}": [
            ["style", "top", '108px'],
            ["style", "left", '301px'],
            ["style", "display", 'none']
         ],
         "${_ans3}": [
            ["style", "top", '197px'],
            ["style", "height", '38px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '-15px'],
            ["style", "width", '212px']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '463px'],
            ["style", "font-size", '38px'],
            ["style", "top", '125px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "width", '659px'],
            ["style", "opacity", '1']
         ],
         "${_annai_no}": [
            ["style", "top", '36.97%'],
            ["style", "font-size", '10px'],
            ["style", "opacity", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "height", '13.3%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '46.83%'],
            ["style", "width", '46.49%']
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
         "${_ans1}": [
            ["style", "top", '199px'],
            ["style", "height", '38px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '-15px'],
            ["style", "width", '212px']
         ],
         "${_pin}": [
            ["style", "top", '128px'],
            ["style", "left", '275px'],
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
         duration: 1250,
         autoPlay: false,
         labels: {
            "greet": 900,
            "star": 996
         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_greetings}", "display", 'block', { fromValue: 'none'}], position: 948, duration: 0 },
            { id: "eid81", tween: [ "style", "${_puthisali}", "top", '275px', { fromValue: '275px'}], position: 1139, duration: 0 },
            { id: "eid65", tween: [ "style", "${_padangal}", "top", '203px', { fromValue: '203px'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_greetings}", "top", '41px', { fromValue: '41px'}], position: 1139, duration: 0 },
            { id: "eid1", tween: [ "style", "${_pa_small}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_padangal}", "display", 'none', { fromValue: 'block'}], position: 900, duration: 0 },
            { id: "eid39", tween: [ "style", "${_puthisali}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_puthisali}", "display", 'block', { fromValue: 'none'}], position: 996, duration: 0 },
            { id: "eid62", tween: [ "style", "${_padangal}", "width", '950px', { fromValue: '950px'}], position: 0, duration: 0 },
            { id: "eid75", tween: [ "style", "${_star}", "height", '610px', { fromValue: '610px'}], position: 1139, duration: 0 },
            { id: "eid73", tween: [ "style", "${_fct}", "top", '828px', { fromValue: '828px'}], position: 0, duration: 0 },
            { id: "eid72", tween: [ "style", "${_fct}", "left", '58px', { fromValue: '58px'}], position: 0, duration: 0 },
            { id: "eid74", tween: [ "style", "${_star}", "width", '900px', { fromValue: '900px'}], position: 1139, duration: 0 },
            { id: "eid83", tween: [ "style", "${_puthisali}", "left", '186px', { fromValue: '186px'}], position: 1139, duration: 0 },
            { id: "eid66", tween: [ "style", "${_words}", "left", '463px', { fromValue: '463px'}], position: 0, duration: 0 },
            { id: "eid60", tween: [ "style", "${_padangal}", "height", '426px', { fromValue: '426px'}], position: 0, duration: 0 },
            { id: "eid77", tween: [ "style", "${_star}", "top", '-10px', { fromValue: '-10px'}], position: 1139, duration: 0 },
            { id: "eid7", tween: [ "style", "${_words}", "display", 'none', { fromValue: 'block'}], position: 900, duration: 0 },
            { id: "eid20", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 996, duration: 0 },
            { id: "eid22", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 1022, duration: 0 },
            { id: "eid23", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 1049, duration: 0 },
            { id: "eid24", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 1075, duration: 0 },
            { id: "eid28", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 1111, duration: 0 },
            { id: "eid27", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 1177, duration: 0 },
            { id: "eid26", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 1215, duration: 0 },
            { id: "eid25", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid76", tween: [ "style", "${_star}", "left", '-170px', { fromValue: '-170px'}], position: 1139, duration: 0 },
            { id: "eid67", tween: [ "style", "${_words}", "top", '771px', { fromValue: '771px'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 1139, duration: 0 },
            { id: "eid36", tween: [ "color", "${_puthisali}", "color", 'rgba(157,1,251,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,2,2,1)'}], position: 996, duration: 53 }         ]
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
