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
            rect:['-4px','-63px','1370px','940px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px'],
            transform:[[],[],[],['1','1.25745']]
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
            transform:[[],[],[],['1','0.9209']],
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
               rect:['47.4%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['47.7%','37.2%','52.6%','14.8%','auto','auto'],
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
            rect:['221px','0px','1110px','840px','auto','auto'],
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
            rect:['456px','131px','766px','34px','auto','auto'],
            text:"glq;fSk; tpLgl;l vOj;Jf;fis  ,izj;jy;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',35,"rgba(253,123,22,1.00)","800","none","normal"]
         },
         {
            id:'pin',
            type:'group',
            rect:['262px','124px','192','39','auto','auto'],
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
               id:'box4',
               type:'group',
               rect:['77px','326px','290px','295px','auto','auto'],
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
                  id:'answrd4',
                  type:'text',
                  rect:['49px','196px','auto','auto','auto','auto'],
                  text:"e",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox4',
                  type:'rect',
                  rect:['82px','199px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line4',
                  type:'text',
                  rect:['91px','192px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img4',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20870.png",'0px','0px']
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
                  id:'answrd3',
                  type:'text',
                  rect:['15px','197px','auto','auto','auto','auto'],
                  text:"el . k;",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox3',
                  type:'rect',
                  rect:['74px','196px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line3',
                  type:'text',
                  rect:['83px','189px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img3',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20865.png",'0px','0px']
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
                  id:'answrd2',
                  type:'text',
                  rect:['17px','199px','auto','auto','auto','auto'],
                  text:"efu ..",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox2',
                  type:'rect',
                  rect:['104px','197px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line2',
                  type:'text',
                  rect:['113px','190px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img2',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20860.png",'0px','0px']
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
                  id:'answrd1',
                  type:'text',
                  rect:['29px','198px','auto','auto','auto','auto'],
                  text:"e . k;<br>",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox1',
                  type:'rect',
                  rect:['63px','197px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line1',
                  type:'text',
                  rect:['72px','188px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img1',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20855.png",'0px','0px']
               }]
            }]
         },
         {
            id:'letters',
            type:'group',
            rect:['378px','701px','834px','39','auto','auto'],
            c:[
            {
               id:'letter4',
               type:'text',
               rect:['294px','9px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"l",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'letter3',
               type:'text',
               rect:['447px','9px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"d",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'letter2',
               type:'text',
               rect:['594px','9px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"k;",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'letter1',
               type:'text',
               rect:['137px','9px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            }]
         },
         {
            id:'home',
            type:'image',
            rect:['295px','43px','71px','71px','auto','auto'],
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
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_box2}": [
            ["style", "top", '10px'],
            ["style", "height", '295px'],
            ["style", "left", '398px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_box4}": [
            ["style", "top", '326px'],
            ["style", "height", '295px'],
            ["style", "left", '77px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
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
         "${_menu_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '840px'],
            ["style", "left", '221px'],
            ["style", "width", '1110px']
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
            ["style", "left", '-51px'],
            ["style", "border-width", '2px']
         ],
         "${_ansbox3}": [
            ["style", "top", '196px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '74px'],
            ["style", "width", '46px']
         ],
         "${_pin}": [
            ["style", "top", '124px'],
            ["style", "left", '262px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pinselga}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_img4}": [
            ["style", "height", '222px'],
            ["style", "top", '-32px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_fct}": [
            ["style", "display", 'block'],
            ["style", "left", '74px'],
            ["style", "top", '827px']
         ],
         "${_fill_line3}": [
            ["style", "top", '189px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '83px'],
            ["style", "height", '51px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_answrd4}": [
            ["style", "top", '196px'],
            ["style", "left", '49px'],
            ["style", "font-size", '45px']
         ],
         "${_fwd}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_fill_line2}": [
            ["style", "top", '190px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '113px'],
            ["style", "height", '51px']
         ],
         "${_logo_batch}": [
            ["style", "opacity", '1'],
            ["style", "left", '3.66%'],
            ["transform", "scaleY", '0.9209']
         ],
         "${_answrd1}": [
            ["style", "top", '198px'],
            ["style", "left", '29px'],
            ["style", "font-size", '45px']
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
         "${_padangal}": [
            ["style", "top", '216px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '426px'],
            ["style", "display", 'block'],
            ["style", "left", '286px'],
            ["style", "width", '950px']
         ],
         "${_img2}": [
            ["style", "height", '222px'],
            ["style", "top", '-32px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_ansbox2}": [
            ["style", "top", '197px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '104px'],
            ["style", "width", '46px']
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
         "${_img1}": [
            ["style", "top", '-32px'],
            ["style", "height", '222px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_letter4}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "left", '294px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '40px']
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
            ["style", "border-width", '2px'],
            ["style", "left", '-51px']
         ],
         "${_fill_line1}": [
            ["style", "top", '188px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '72px'],
            ["style", "height", '51px']
         ],
         "${_ansbox4}": [
            ["style", "top", '199px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '82px'],
            ["style", "width", '46px']
         ],
         "${_letter1}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "left", '137px'],
            ["style", "cursor", 'pointer'],
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
            ["style", "height", '258px'],
            ["style", "top", '-127px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_home}": [
            ["style", "top", '43px'],
            ["style", "height", '71px'],
            ["style", "left", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_answrd2}": [
            ["style", "top", '199px'],
            ["style", "left", '17px'],
            ["style", "font-size", '45px']
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
         "${_fill_line4}": [
            ["style", "top", '192px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '91px'],
            ["style", "height", '51px']
         ],
         "${_box1}": [
            ["style", "top", '10px'],
            ["style", "height", '295px'],
            ["style", "left", '77px'],
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
            ["style", "left", '47.4%'],
            ["style", "width", '60.47%']
         ],
         "${_greetings}": [
            ["style", "top", '0px'],
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
         "${_answrd3}": [
            ["style", "top", '197px'],
            ["style", "left", '15px'],
            ["style", "font-size", '45px']
         ],
         "${_box3}": [
            ["style", "top", '10px'],
            ["style", "height", '295px'],
            ["style", "left", '718px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_star}": [
            ["style", "top", '-25px'],
            ["style", "display", 'none'],
            ["style", "height", '568px'],
            ["style", "left", '-137px'],
            ["style", "width", '820px']
         ],
         "${_puthisali}": [
            ["style", "top", '235px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["color", "color", 'rgba(251,2,2,1)'],
            ["style", "font-weight", '900'],
            ["style", "left", '192px'],
            ["style", "font-size", '40px']
         ],
         "${_wrapper}": [
            ["style", "top", '-63px'],
            ["transform", "scaleY", '1.25745'],
            ["style", "height", '940px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '-4px'],
            ["style", "width", '1370px']
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
            ["style", "left", '-51px'],
            ["style", "border-width", '2px']
         ],
         "${_ansbox1}": [
            ["style", "top", '197px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '63px'],
            ["style", "width", '46px']
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
            ["style", "border-width", '2px'],
            ["style", "left", '-51px']
         ],
         "${_answrd2Copy2}": [
            ["style", "top", '165px'],
            ["style", "height", '132px'],
            ["style", "width", 'auto'],
            ["style", "left", '-4px'],
            ["style", "font-size", '45px']
         ],
         "${_img3}": [
            ["style", "top", '-32px'],
            ["style", "height", '222px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_letter2}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "left", '594px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '40px']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '456px'],
            ["style", "font-size", '35px'],
            ["style", "top", '131px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "opacity", '1'],
            ["style", "width", '766px']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "width", '52.64%'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '14.75%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '47.66%'],
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
            ["style", "height", '860px'],
            ["style", "width", '1366px']
         ],
         "${_letter3}": [
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "left", '447px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '40px']
         ],
         "${_letters}": [
            ["style", "display", 'block'],
            ["style", "top", '774px'],
            ["style", "left", '464px'],
            ["style", "width", '834px']
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
         duration: 900,
         autoPlay: false,
         labels: {
            "greet": 125,
            "star": 233
         },
         timeline: [
            { id: "eid42", tween: [ "style", "${_padangal}", "height", '426px', { fromValue: '426px'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_padangal}", "width", '950px', { fromValue: '950px'}], position: 0, duration: 0 },
            { id: "eid49", tween: [ "style", "${_padangal}", "left", '286px', { fromValue: '286px'}], position: 0, duration: 0 },
            { id: "eid51", tween: [ "style", "${_letters}", "top", '774px', { fromValue: '774px'}], position: 0, duration: 0 },
            { id: "eid44", tween: [ "style", "${_letters}", "left", '412px', { fromValue: '464px'}], position: 0, duration: 56 },
            { id: "eid36", tween: [ "style", "${_padangal}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid2", tween: [ "style", "${_padangal}", "display", 'none', { fromValue: 'none'}], position: 900, duration: 0 },
            { id: "eid37", tween: [ "style", "${_letters}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid50", tween: [ "style", "${_padangal}", "top", '216px', { fromValue: '216px'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "style", "${_puthisali}", "display", 'block', { fromValue: 'none'}], position: 233, duration: 0 },
            { id: "eid35", tween: [ "style", "${_greetings}", "display", 'block', { fromValue: 'none'}], position: 185, duration: 0 },
            { id: "eid28", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 233, duration: 0 },
            { id: "eid29", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 259, duration: 0 },
            { id: "eid30", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 286, duration: 0 },
            { id: "eid31", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 312, duration: 0 },
            { id: "eid32", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 348, duration: 0 },
            { id: "eid1", tween: [ "style", "${_pa_small}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
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
