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
               rect:['49.1%','51.4%','60.5%','13.3%','auto','auto'],
               opacity:1,
               text:"All Rights Reserved.",
               align:"left",
               font:['Arial, Helvetica, sans-serif',10,"rgba(0,0,0,1)","700","none","normal"]
            },
            {
               id:'annai_no',
               type:'text',
               rect:['49.1%','37.2%','52.6%','14.8%','auto','auto'],
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
            id:'oo_small',
            type:'group',
            rect:['305px','124px','53px','54','auto','auto'],
            c:[
            {
               id:'rect_oo',
               type:'rect',
               rect:['0px','0px','74px','52px','auto','auto'],
               clip:['rect(0px 82px 52px 0px)'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(252,125,27,1.00)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'text_oo',
               type:'text',
               rect:['19px','-6px','41px','52px','auto','auto'],
               text:"X",
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
               id:'tholan',
               type:'group',
               rect:['640px','633px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'tholan_rect',
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
                  id:'tholan__img',
                  type:'image',
                  rect:['0px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201929.png",'0px','0px']
               },
               {
                  id:'tholan_txt',
                  type:'text',
                  rect:['55px','201px','auto','auto','auto','auto'],
                  text:"Njhod;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'tholi',
               type:'group',
               rect:['330px','633px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'tholi_rect',
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
                  id:'tholi_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201924.jpg",'0px','0px']
               },
               {
                  id:'tholi_txt',
                  type:'text',
                  rect:['53px','201px','auto','auto','auto','auto'],
                  text:"Njhop",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'thodu',
               type:'group',
               rect:['17px','632px','227','189px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'thodu_rect',
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
                  id:'thodu_img',
                  type:'image',
                  rect:['0','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201919.png",'0px','0px']
               },
               {
                  id:'thodu_txt',
                  type:'text',
                  rect:['64px','201px','auto','auto','auto','auto'],
                  text:"NjhL",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'soru',
               type:'group',
               rect:['640px','323px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'soru_rect',
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
                  id:'soru_img',
                  type:'image',
                  rect:['0px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201909.png",'0px','0px']
               },
               {
                  id:'soru_txt',
                  type:'text',
                  rect:['81px','201px','auto','auto','auto','auto'],
                  text:"NrhW",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'kolam',
               type:'group',
               rect:['330px','322px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'kolam_rect',
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
                  id:'kolam_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201904.png",'0px','0px']
               },
               {
                  id:'kolam_txt',
                  type:'text',
                  rect:['39px','203px','auto','auto','auto','auto'],
                  text:"Nfhyk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'komali',
               type:'group',
               rect:['16px','322px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'komali_rect',
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
                  id:'komali_img',
                  type:'image',
                  rect:['0','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201914.png",'0px','0px']
               },
               {
                  id:'komali_txt',
                  type:'text',
                  rect:['66px','201px','auto','auto','auto','auto'],
                  text:"Nfhkhsp",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'kodu',
               type:'group',
               rect:['642px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'kodu_rect',
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
                  id:'kodu_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201899.png",'0px','0px']
               },
               {
                  id:'kodu_txt',
                  type:'text',
                  rect:['42px','201px','auto','auto','auto','auto'],
                  text:"NfhL",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'koil',
               type:'group',
               rect:['330px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'koil_rect',
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
                  id:'koil_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201894.png",'0px','0px']
               },
               {
                  id:'koil_txt',
                  type:'text',
                  rect:['48px','201px','auto','auto','auto','auto'],
                  text:"Nfhapy;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'koli',
               type:'group',
               rect:['17px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'koli_rect',
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
                  id:'koli_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201889.png",'0px','0px']
               },
               {
                  id:'koli_txt',
                  type:'text',
                  rect:['66px','202px','auto','auto','auto','auto'],
                  text:"Nfhop",
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
         "${_thodu}": [
            ["style", "top", '632px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '17px']
         ],
         "${_tholan_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '236px'],
            ["style", "left", '49px'],
            ["style", "font-size", '51px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_tholi_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '236px'],
            ["style", "left", '65px'],
            ["style", "font-size", '51px']
         ],
         "${_kodu_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '237px'],
            ["style", "left", '65px'],
            ["style", "font-size", '51px']
         ],
         "${_soru_rect}": [
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
         "${_tholi_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_cloud1}": [
            ["style", "top", '-118px'],
            ["style", "height", '258px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_pinselga2}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '2px'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
         ],
         "${_soru_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '0px'],
            ["style", "width", '267px']
         ],
         "${_koli}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_soru_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '239px'],
            ["style", "left", '67px'],
            ["style", "font-size", '51px']
         ],
         "${_home}": [
            ["style", "top", '37px'],
            ["style", "height", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '293px'],
            ["style", "width", '71px']
         ],
         "${_koli_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '237px'],
            ["style", "left", '63px'],
            ["style", "font-size", '51px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "width", '60.47%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", 'bold'],
            ["style", "height", '13.28%'],
            ["style", "opacity", '1'],
            ["style", "left", '49.1%'],
            ["style", "font-size", '10px']
         ],
         "${_tholi}": [
            ["style", "top", '633px'],
            ["style", "height", '295px'],
            ["style", "left", '330px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_tholi_rect}": [
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
         "${_thodu_rect}": [
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
         "${_koli_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '6px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1.00)'],
            ["style", "border-width", '2px'],
            ["style", "left", '-11px']
         ],
         "${_fwd2}": [
            ["style", "top", '11px'],
            ["style", "height", '17px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_kodu_rect}": [
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
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '423px'],
            ["style", "font-size", '38px'],
            ["style", "top", '134px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "width", '659px'],
            ["style", "opacity", '1']
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
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '20px'],
            ["style", "width", '249px']
         ],
         "${_tholan_rect}": [
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
         "${_kodu_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_panam_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '55px'],
            ["style", "font-size", '51px']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_pin2}": [
            ["style", "top", '657px'],
            ["style", "left", '345px'],
            ["style", "cursor", 'pointer']
         ],
         "${_komali}": [
            ["style", "top", '322px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '16px']
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
         "${_komali_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '240px'],
            ["style", "left", '32px'],
            ["style", "font-size", '51px']
         ],
         "${_tholan}": [
            ["style", "height", '295px'],
            ["style", "top", '633px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_komali_rect}": [
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
         "${_soru}": [
            ["style", "top", '323px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '640px']
         ],
         "${_rect_oo}": [
            ["color", "background-color", 'rgba(252,125,27,1)'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["style", "height", '52px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(251,136,35,1.00)',100],['rgba(202,198,198,1.00)',100]]]],
            ["style", "clip", [0,82,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '74px']
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
         "${_cloud2}": [
            ["style", "top", '-127px'],
            ["style", "height", '258px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_koil_rect}": [
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
         "${_kolam}": [
            ["style", "top", '322px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '330px']
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
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_eyes_12}": [
            ["style", "top", '-42px'],
            ["style", "height", '182px'],
            ["style", "left", '589px'],
            ["style", "width", '182px']
         ],
         "${_koil}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_kodu}": [
            ["style", "top", '10px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '642px']
         ],
         "${_kolam_txt}": [
            ["style", "top", '240px'],
            ["style", "font-size", '51px'],
            ["style", "left", '45px'],
            ["style", "height", '52px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "clip", [-18.66650390625,345.666748046875,49,-10.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '339px']
         ],
         "${_koil_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_kolam_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_komali_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "width", '267px']
         ],
         "${_text_oo}": [
            ["style", "-webkit-transform-origin", [50,62], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '19px'],
            ["style", "font-size", '50px'],
            ["style", "top", '-6px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '52px'],
            ["style", "line-height", '50px'],
            ["style", "word-spacing", '0px'],
            ["style", "width", '41px']
         ],
         "${_tholan__img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '0px'],
            ["style", "width", '267px']
         ],
         "${_panthu_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '64px'],
            ["style", "font-size", '51px']
         ],
         "${_thodu_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "width", '267px']
         ],
         "${_oo_small}": [
            ["style", "left", '305px'],
            ["style", "top", '124px']
         ],
         "${_thodu_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '237px'],
            ["style", "left", '64px'],
            ["style", "font-size", '51px']
         ],
         "${_pinselga}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '2px'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
         ],
         "${_koli_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_kolam_rect}": [
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
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "font-size", '10px'],
            ["style", "opacity", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "height", '14.75%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '49.1%'],
            ["style", "width", '52.64%']
         ],
         "${_koil_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '237px'],
            ["style", "left", '45px'],
            ["style", "font-size", '51px']
         ],
         "${_fwd}": [
            ["style", "top", '11px'],
            ["style", "height", '17px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "left", '0px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '1370px']
         ],
         "${_pin}": [
            ["style", "top", '185px'],
            ["style", "left", '344px'],
            ["style", "cursor", 'pointer']
         ],
         "${_menu_wrapper}": [
            ["style", "height", '717px'],
            ["style", "top", '2px'],
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
            { id: "eid236", tween: [ "style", "${_tholi_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "color", "${_komali_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1529, duration: 13 },
            { id: "eid80", tween: [ "color", "${_komali_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1599, duration: 0 },
            { id: "eid38", tween: [ "color", "${_komali_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1600, duration: 0 },
            { id: "eid53", tween: [ "style", "${_soru_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1922, duration: 14 },
            { id: "eid54", tween: [ "style", "${_soru_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1993, duration: 0 },
            { id: "eid248", tween: [ "style", "${_koil_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid210", tween: [ "style", "${_kolam_txt}", "width", '339px', { fromValue: '339px'}], position: 26, duration: 0 },
            { id: "eid29", tween: [ "style", "${_kodu_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1367, duration: 14 },
            { id: "eid30", tween: [ "style", "${_kodu_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1438, duration: 0 },
            { id: "eid31", tween: [ "color", "${_kodu_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1367, duration: 14 },
            { id: "eid32", tween: [ "color", "${_kodu_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1438, duration: 0 },
            { id: "eid43", tween: [ "color", "${_kolam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1721, duration: 14 },
            { id: "eid44", tween: [ "color", "${_kolam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1792, duration: 0 },
            { id: "eid57", tween: [ "color", "${_thodu_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2063, duration: 14 },
            { id: "eid58", tween: [ "color", "${_thodu_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2134, duration: 0 },
            { id: "eid35", tween: [ "style", "${_komali_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1529, duration: 13 },
            { id: "eid79", tween: [ "style", "${_komali_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1599, duration: 0 },
            { id: "eid36", tween: [ "style", "${_komali_rect}", "border-width", '2px', { fromValue: '2px'}], position: 1600, duration: 0 },
            { id: "eid243", tween: [ "style", "${_kolam_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid240", tween: [ "style", "${_soru_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_soru_txt}", "left", '67px', { fromValue: '67px'}], position: 26, duration: 0 },
            { id: "eid262", tween: [ "style", "${_komali_txt}", "left", '32px', { fromValue: '32px'}], position: 26, duration: 0 },
            { id: "eid266", tween: [ "style", "${_koil_txt}", "left", '45px', { fromValue: '45px'}], position: 26, duration: 0 },
            { id: "eid63", tween: [ "color", "${_tholi_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2212, duration: 14 },
            { id: "eid64", tween: [ "color", "${_tholi_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2283, duration: 0 },
            { id: "eid71", tween: [ "style", "${_tholan_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2360, duration: 14 },
            { id: "eid72", tween: [ "style", "${_tholan_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2431, duration: 0 },
            { id: "eid232", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid234", tween: [ "style", "${_tholan_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid264", tween: [ "style", "${_koli_txt}", "top", '237px', { fromValue: '237px'}], position: 26, duration: 0 },
            { id: "eid260", tween: [ "style", "${_kolam_txt}", "left", '45px', { fromValue: '45px'}], position: 26, duration: 0 },
            { id: "eid206", tween: [ "style", "${_kolam_txt}", "clip", [-18.66650390625,345.666748046875,49,-10.66650390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-18.66650390625,345.666748046875,49,-10.66650390625]}], position: 26, duration: 0 },
            { id: "eid69", tween: [ "color", "${_tholan_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2360, duration: 14 },
            { id: "eid70", tween: [ "color", "${_tholan_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2431, duration: 0 },
            { id: "eid245", tween: [ "style", "${_komali_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid259", tween: [ "style", "${_soru_txt}", "top", '239px', { fromValue: '239px'}], position: 26, duration: 0 },
            { id: "eid14", tween: [ "color", "${_koli_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1000, duration: 14 },
            { id: "eid16", tween: [ "color", "${_koli_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1071, duration: 0 },
            { id: "eid250", tween: [ "style", "${_koli_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid261", tween: [ "style", "${_kolam_txt}", "top", '240px', { fromValue: '240px'}], position: 26, duration: 0 },
            { id: "eid263", tween: [ "style", "${_komali_txt}", "top", '240px', { fromValue: '240px'}], position: 26, duration: 0 },
            { id: "eid249", tween: [ "style", "${_koil_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid269", tween: [ "style", "${_kodu_txt}", "top", '237px', { fromValue: '237px'}], position: 26, duration: 0 },
            { id: "eid251", tween: [ "style", "${_koli_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid244", tween: [ "style", "${_komali_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_tholi_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2212, duration: 14 },
            { id: "eid66", tween: [ "style", "${_tholi_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2283, duration: 0 },
            { id: "eid238", tween: [ "style", "${_thodu_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid216", tween: [ "style", "${_kolam_txt}", "font-size", '51px', { fromValue: '51px'}], position: 26, duration: 0 },
            { id: "eid27", tween: [ "color", "${_kodu_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1367, duration: 14 },
            { id: "eid28", tween: [ "color", "${_kodu_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1438, duration: 0 },
            { id: "eid23", tween: [ "style", "${_koil_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1152, duration: 14 },
            { id: "eid24", tween: [ "style", "${_koil_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1223, duration: 0 },
            { id: "eid55", tween: [ "color", "${_soru_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1922, duration: 14 },
            { id: "eid56", tween: [ "color", "${_soru_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1993, duration: 0 },
            { id: "eid207", tween: [ "style", "${_kolam_txt}", "height", '52px', { fromValue: '52px'}], position: 26, duration: 0 },
            { id: "eid21", tween: [ "color", "${_koil_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1152, duration: 14 },
            { id: "eid22", tween: [ "color", "${_koil_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1223, duration: 0 },
            { id: "eid12", tween: [ "style", "${_koli_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1000, duration: 14 },
            { id: "eid19", tween: [ "style", "${_koli_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1071, duration: 0 },
            { id: "eid265", tween: [ "style", "${_koli_txt}", "left", '63px', { fromValue: '63px'}], position: 26, duration: 0 },
            { id: "eid51", tween: [ "color", "${_soru_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1922, duration: 14 },
            { id: "eid52", tween: [ "color", "${_soru_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1993, duration: 0 },
            { id: "eid237", tween: [ "style", "${_thodu_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid246", tween: [ "style", "${_kodu_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_koil_txt}", "font-size", '51px', { fromValue: '51px'}], position: 26, duration: 0 },
            { id: "eid235", tween: [ "style", "${_tholi_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid239", tween: [ "style", "${_soru_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid247", tween: [ "style", "${_kodu_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid267", tween: [ "style", "${_koil_txt}", "top", '237px', { fromValue: '237px'}], position: 26, duration: 0 },
            { id: "eid8", tween: [ "color", "${_koli_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1000, duration: 14 },
            { id: "eid20", tween: [ "color", "${_koli_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1071, duration: 0 },
            { id: "eid41", tween: [ "style", "${_kolam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1721, duration: 14 },
            { id: "eid42", tween: [ "style", "${_kolam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1792, duration: 0 },
            { id: "eid25", tween: [ "color", "${_koil_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1152, duration: 14 },
            { id: "eid26", tween: [ "color", "${_koil_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1223, duration: 0 },
            { id: "eid268", tween: [ "style", "${_kodu_txt}", "left", '65px', { fromValue: '65px'}], position: 26, duration: 0 },
            { id: "eid241", tween: [ "style", "${_kolam_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid59", tween: [ "style", "${_thodu_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2063, duration: 14 },
            { id: "eid60", tween: [ "style", "${_thodu_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2134, duration: 0 },
            { id: "eid73", tween: [ "color", "${_tholan_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2360, duration: 14 },
            { id: "eid74", tween: [ "color", "${_tholan_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2431, duration: 0 },
            { id: "eid61", tween: [ "color", "${_thodu_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2063, duration: 14 },
            { id: "eid62", tween: [ "color", "${_thodu_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2134, duration: 0 },
            { id: "eid33", tween: [ "color", "${_komali_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1529, duration: 13 },
            { id: "eid76", tween: [ "color", "${_komali_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1599, duration: 0 },
            { id: "eid34", tween: [ "color", "${_komali_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1600, duration: 0 },
            { id: "eid39", tween: [ "color", "${_kolam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1721, duration: 14 },
            { id: "eid40", tween: [ "color", "${_kolam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1792, duration: 0 },
            { id: "eid233", tween: [ "style", "${_tholan_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid270", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 26, duration: 0 },
            { id: "eid67", tween: [ "color", "${_tholi_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2212, duration: 14 },
            { id: "eid68", tween: [ "color", "${_tholi_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2283, duration: 0 }         ]
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
