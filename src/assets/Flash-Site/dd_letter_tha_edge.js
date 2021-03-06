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
            transform:[[],[],[],['1','1.41986']]
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
            id:'sidecolor',
            type:'image',
            rect:['0%','-107%','3.7%','102.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sidecolor.png",'0px','0px']
         },
         {
            id:'logo_batch',
            type:'group',
            rect:['3.7%','79.2%','13.4%','14.7%','auto','auto'],
            transform:[[],[],[],['1','0.88082']],
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
               rect:['46.9%','51.4%','60.5%','13.3%','auto','auto'],
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
               text:"Annai.no ?? 2013",
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
            rect:['439px','124px','775px','17px','auto','auto'],
            text:"glq;fSk; tpLgl;l vOj;Jf;fis ,izj;jy;",
            align:"center",
            font:['baminiplain, Arial, sans-serif',35,"rgba(253,123,22,1.00)","800","none","normal"]
         },
         {
            id:'pin',
            type:'group',
            rect:['263px','120px','192','39','auto','auto'],
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
               id:'box5',
               type:'group',
               rect:['398px','328px','290px','295px','auto','auto'],
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
                  id:'answrd5',
                  type:'text',
                  rect:['-16px','197px','202px','53px','auto','auto'],
                  text:"j . jk;",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox5',
                  type:'rect',
                  rect:['47px','203px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line5',
                  type:'text',
                  rect:['56px','196px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img5',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20899.png",'0px','0px']
               }]
            },
            {
               id:'box4',
               type:'group',
               rect:['78px','326px','290px','295px','auto','auto'],
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
                  rect:['43px','198px','auto','auto','auto','auto'],
                  text:" . lk;",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox4',
                  type:'rect',
                  rect:['24px','201px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line4',
                  type:'text',
                  rect:['33px','194px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img4',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20894.png",'0px','0px']
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
                  rect:['32px','198px','auto','auto','auto','auto'],
                  text:"j . gp",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox3',
                  type:'rect',
                  rect:['70px','198px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line3',
                  type:'text',
                  rect:['79px','191px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img3',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20889.jpg",'0px','0px']
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
                  rect:['17px','198px','auto','39px','auto','auto'],
                  text:"jl; . k;",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox2',
                  type:'rect',
                  rect:['85px','195px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line2',
                  type:'text',
                  rect:['94px','188px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img2',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20884.png",'0px','0px']
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
                  rect:['7px','196px','auto','auto','auto','auto'],
                  text:"jq; . k;<br>",
                  align:"center",
                  font:['baminiplain, Arial, sans-serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'ansbox1',
                  type:'rect',
                  rect:['82px','196px','46px','38px','auto','auto'],
                  fill:["rgba(245,205,160,1.00)"],
                  stroke:[2,"rgba(245,205,160,1.00)","solid"]
               },
               {
                  id:'fill_line1',
                  type:'text',
                  rect:['91px','189px','auto','51px','auto','auto'],
                  text:"_",
                  align:"center",
                  font:['Georgia, Times New Roman, Times, serif',45,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'img1',
                  type:'image',
                  rect:['-40px','-32px','267px','222px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20879.png",'0px','0px']
               }]
            }]
         },
         {
            id:'letters',
            type:'group',
            rect:['378px','701px','834px','39','auto','auto'],
            c:[
            {
               id:'letter5',
               type:'text',
               rect:['54px','8px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"e;",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'letter4',
               type:'text',
               rect:['717px','8px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"j",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'letter3',
               type:'text',
               rect:['574px','8px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"k;",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'letter2',
               type:'text',
               rect:['214px','8px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"l",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            },
            {
               id:'letter1',
               type:'text',
               rect:['393px','8px','auto','auto','auto','auto'],
               cursor:['pointer'],
               text:"f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',40,"rgba(0,0,0,1)","bold","none","normal"]
            }]
         },
         {
            id:'home',
            type:'image',
            rect:['293px','41px','71px','71px','auto','auto'],
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
         "${_puthisali}": [
            ["style", "top", '235px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["color", "color", 'rgba(251,2,2,1)'],
            ["style", "font-weight", '900'],
            ["style", "left", '192px'],
            ["style", "font-size", '40px']
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
            ["style", "left", '78px'],
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
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_img4}": [
            ["style", "height", '222px'],
            ["style", "top", '-32px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_answrd4}": [
            ["style", "top", '198px'],
            ["style", "left", '43px'],
            ["style", "font-size", '45px']
         ],
         "${_ansbox1}": [
            ["style", "top", '196px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '82px'],
            ["style", "width", '46px']
         ],
         "${_fill_line3}": [
            ["style", "top", '191px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '79px'],
            ["style", "height", '51px']
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
         "${_fill_line5}": [
            ["style", "top", '196px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '56px'],
            ["style", "height", '51px']
         ],
         "${_home}": [
            ["style", "top", '41px'],
            ["style", "height", '71px'],
            ["style", "left", '293px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_box5}": [
            ["style", "top", '328px'],
            ["style", "height", '295px'],
            ["style", "left", '398px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
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
            ["style", "left", '46.85%'],
            ["style", "width", '60.47%']
         ],
         "${_greetings}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '502px'],
            ["style", "left", '0px'],
            ["style", "width", '546px']
         ],
         "${_fill_line4}": [
            ["style", "top", '194px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '33px'],
            ["style", "height", '51px']
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
         "${_img3}": [
            ["style", "top", '-32px'],
            ["style", "height", '222px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_letter2}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "left", '214px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '40px']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '439px'],
            ["style", "font-size", '35px'],
            ["style", "top", '124px'],
            ["style", "text-align", 'center'],
            ["style", "height", '17px'],
            ["style", "opacity", '1'],
            ["style", "width", '775px']
         ],
         "${_logo_batch}": [
            ["style", "opacity", '1'],
            ["style", "left", '3.66%'],
            ["transform", "scaleY", '0.88082']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '860px'],
            ["style", "width", '1366px']
         ],
         "${_letters}": [
            ["style", "display", 'block'],
            ["style", "top", '771px'],
            ["style", "left", '401px'],
            ["style", "width", '834px']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '1.41986'],
            ["style", "height", '940px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1370px']
         ],
         "${_ansbox2}": [
            ["style", "top", '195px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '85px'],
            ["style", "width", '46px']
         ],
         "${_ansbox3}": [
            ["style", "top", '198px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '70px'],
            ["style", "width", '46px']
         ],
         "${_pinselga}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_padangal}": [
            ["style", "top", '202px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '426px'],
            ["style", "display", 'block'],
            ["style", "left", '301px'],
            ["style", "width", '950px']
         ],
         "${_fct}": [
            ["style", "display", 'block'],
            ["style", "left", '74px'],
            ["style", "top", '827px']
         ],
         "${_ansbox5}": [
            ["style", "top", '203px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '47px'],
            ["style", "width", '46px']
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
            ["style", "left", '-51px'],
            ["style", "border-width", '2px']
         ],
         "${_fwd}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_letter3}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "left", '574px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '40px']
         ],
         "${_img1}": [
            ["style", "top", '-32px'],
            ["style", "height", '222px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_letter4}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "left", '717px'],
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
         "${_img5}": [
            ["style", "top", '-32px'],
            ["style", "height", '222px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_logorect}": [
            ["style", "top", '31.56%'],
            ["style", "height", '36.87%'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0%'],
            ["style", "width", '110.38%']
         ],
         "${_fct_logo}": [
            ["style", "height", '28px'],
            ["style", "top", '0px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_answrd3}": [
            ["style", "top", '198px'],
            ["style", "left", '32px'],
            ["style", "font-size", '45px']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_ansbox4}": [
            ["style", "top", '201px'],
            ["color", "background-color", 'rgba(245,205,160,1.00)'],
            ["style", "height", '38px'],
            ["color", "border-color", 'rgba(245,205,160,1.00)'],
            ["style", "left", '24px'],
            ["style", "width", '46px']
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
         "${_fill_line2}": [
            ["style", "top", '188px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '94px'],
            ["style", "height", '51px']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_eyes_12}": [
            ["style", "height", '182px'],
            ["style", "top", '-42px'],
            ["style", "left", '589px'],
            ["style", "width", '182px']
         ],
         "${_img2}": [
            ["style", "height", '222px'],
            ["style", "top", '-32px'],
            ["style", "left", '-40px'],
            ["style", "width", '267px']
         ],
         "${_letter5}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "left", '54px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '40px']
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
         "${_answrd1}": [
            ["style", "top", '196px'],
            ["style", "left", '7px'],
            ["style", "font-size", '45px']
         ],
         "${_answrd2Copy2}": [
            ["style", "top", '165px'],
            ["style", "height", '132px'],
            ["style", "width", 'auto'],
            ["style", "left", '-4px'],
            ["style", "font-size", '45px']
         ],
         "${_fill_line1}": [
            ["style", "top", '189px'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "left", '91px'],
            ["style", "height", '51px']
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
         "${_answrd5}": [
            ["style", "top", '197px'],
            ["style", "height", '53px'],
            ["style", "left", '-16px'],
            ["style", "width", '202px']
         ],
         "${_answrd2}": [
            ["style", "height", '39px'],
            ["style", "top", '198px'],
            ["style", "left", '17px'],
            ["style", "font-size", '45px']
         ],
         "${_letter1}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'center'],
            ["style", "left", '393px'],
            ["style", "cursor", 'pointer'],
            ["style", "font-size", '40px']
         ],
         "${_pin}": [
            ["style", "top", '120px'],
            ["style", "left", '263px'],
            ["style", "cursor", 'pointer']
         ],
         "${_menu_wrapper}": [
            ["style", "top", '2px'],
            ["style", "height", '840px'],
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
            { id: "eid35", tween: [ "style", "${_greetings}", "display", 'block', { fromValue: 'none'}], position: 185, duration: 0 },
            { id: "eid39", tween: [ "style", "${_padangal}", "width", '950px', { fromValue: '950px'}], position: 56, duration: 0 },
            { id: "eid44", tween: [ "style", "${_letters}", "top", '771px', { fromValue: '771px'}], position: 56, duration: 0 },
            { id: "eid34", tween: [ "color", "${_puthisali}", "color", 'rgba(157,1,251,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(251,2,2,1)'}], position: 233, duration: 53 },
            { id: "eid36", tween: [ "style", "${_padangal}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid2", tween: [ "style", "${_padangal}", "display", 'none', { fromValue: 'none'}], position: 900, duration: 0 },
            { id: "eid37", tween: [ "style", "${_letters}", "display", 'none', { fromValue: 'block'}], position: 125, duration: 0 },
            { id: "eid45", tween: [ "style", "${_padangal}", "top", '202px', { fromValue: '202px'}], position: 56, duration: 0 },
            { id: "eid33", tween: [ "style", "${_puthisali}", "display", 'block', { fromValue: 'none'}], position: 233, duration: 0 },
            { id: "eid28", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 233, duration: 0 },
            { id: "eid29", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 259, duration: 0 },
            { id: "eid30", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 286, duration: 0 },
            { id: "eid31", tween: [ "style", "${_star}", "display", 'none', { fromValue: 'block'}], position: 312, duration: 0 },
            { id: "eid32", tween: [ "style", "${_star}", "display", 'block', { fromValue: 'none'}], position: 348, duration: 0 },
            { id: "eid40", tween: [ "style", "${_padangal}", "height", '426px', { fromValue: '426px'}], position: 56, duration: 0 },
            { id: "eid1", tween: [ "style", "${_pa_small}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 56, duration: 0 },
            { id: "eid43", tween: [ "style", "${_letters}", "left", '401px', { fromValue: '401px'}], position: 56, duration: 0 }         ]
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
