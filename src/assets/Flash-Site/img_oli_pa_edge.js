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
            id:'pa_small',
            type:'group',
            rect:['305px','124px','53px','54','auto','auto'],
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
               font:['baminiplain, Arial, sans-serif',50,"rgba(0,0,0,1)","700","none","normal"],
               transform:[]
            }]
         },
         {
            id:'header',
            type:'text',
            rect:['423px','134px','659px','34px','auto','auto'],
            text:"glq;fSk; xypAk; cr;rupg;Gk;",
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
               rect:['24px','4px','auto','auto','auto','auto'],
               text:"gpd;nry;f",
               align:"center",
               font:['baminiplain, Arial, sans-serif',30,"rgba(0,0,0,1.00)","800","none","normal"]
            }]
         },
         {
            id:'padangal',
            type:'group',
            rect:['274px','227px','950px','426px','auto','auto'],
            c:[
            {
               id:'panam',
               type:'group',
               rect:['640px','643px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'panam_rect',
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
                  id:'panam__img',
                  type:'image',
                  rect:['-1px','16px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20674.jpg",'0px','0px']
               },
               {
                  id:'panam_txt',
                  type:'text',
                  rect:['55px','201px','auto','auto','auto','auto'],
                  text:"gzk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'pantham',
               type:'group',
               rect:['330px','643px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'pantham_rect',
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
                  id:'pantham_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20669.png",'0px','0px']
               },
               {
                  id:'pantham_txt',
                  type:'text',
                  rect:['53px','201px','auto','auto','auto','auto'],
                  text:"ge;jk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'panthu',
               type:'group',
               rect:['50px','556px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'panthu_rect',
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
                  id:'panthu_img',
                  type:'image',
                  rect:['-34px','103px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20664.png",'0px','0px']
               },
               {
                  id:'panthu_txt',
                  type:'text',
                  rect:['64px','201px','auto','auto','auto','auto'],
                  text:"ge;J",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'pal',
               type:'group',
               rect:['640px','327px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'pal_rect',
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
                  id:'pal_img',
                  type:'image',
                  rect:['0px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20689.png",'0px','0px']
               },
               {
                  id:'pal_txt',
                  type:'text',
                  rect:['81px','201px','auto','auto','auto','auto'],
                  text:"gy;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'pallam',
               type:'group',
               rect:['334px','320px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'pallam_rect',
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
                  id:'pallam_img',
                  type:'image',
                  rect:['-4px','24px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20684.png",'0px','0px']
               },
               {
                  id:'pallam_txt',
                  type:'text',
                  rect:['39px','203px','auto','auto','auto','auto'],
                  text:"gs;sk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'palam',
               type:'group',
               rect:['16px','327px','227','189px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'palam_rect',
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
                  id:'palam_img',
                  type:'image',
                  rect:['0','17px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20679.png",'0px','0px']
               },
               {
                  id:'palam_txt',
                  type:'text',
                  rect:['66px','201px','auto','auto','auto','auto'],
                  text:"gok;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'pambaram',
               type:'group',
               rect:['640px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'pam_rect',
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
                  id:'pam_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20659.png",'0px','0px']
               },
               {
                  id:'pam_txt',
                  type:'text',
                  rect:['42px','201px','auto','auto','auto','auto'],
                  text:"gk;guk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'pattam',
               type:'group',
               rect:['330px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'pat_rect',
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
                  id:'pat_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20654.png",'0px','0px']
               },
               {
                  id:'pat_txt',
                  type:'text',
                  rect:['48px','201px','auto','auto','auto','auto'],
                  text:"gl;lk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'padam',
               type:'group',
               rect:['17px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'pad_rect',
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
                  id:'pad_img',
                  type:'image',
                  rect:['19px','32px','227px','180px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20648.png",'0px','0px'],
                  transform:[[],[],[],['1.17778','1.17778']]
               },
               {
                  id:'pad_txt',
                  type:'text',
                  rect:['66px','202px','auto','auto','auto','auto'],
                  text:"glk;",
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
            rect:['344px','659px','192','39','auto','auto'],
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
               font:['baminiplain, Arial, sans-serif',30,"rgba(0,0,0,1.00)","800","none","normal"]
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
         "${_pallam_txt}": [
            ["style", "top", '246px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '52px'],
            ["style", "font-size", '51px']
         ],
         "${_palam}": [
            ["style", "top", '327px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '16px']
         ],
         "${_palam_txt}": [
            ["style", "top", '239px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '81px'],
            ["style", "font-size", '51px']
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
         "${_panthu}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_pat_rect}": [
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
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_panthu_txt}": [
            ["style", "top", '320px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '39px'],
            ["style", "font-size", '51px']
         ],
         "${_pat_txt}": [
            ["style", "top", '236px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '67px'],
            ["style", "font-size", '51px']
         ],
         "${_pal_rect}": [
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
         "${_cloud1}": [
            ["style", "height", '258px'],
            ["style", "top", '-118px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_pa_small}": [
            ["style", "left", '305px'],
            ["style", "top", '124px']
         ],
         "${_pal_txt}": [
            ["style", "top", '239px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '98px'],
            ["style", "font-size", '51px']
         ],
         "${_panam_rect}": [
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
         "${_pallam}": [
            ["style", "top", '320px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_pantham_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_home}": [
            ["style", "top", '37px'],
            ["style", "height", '71px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '293px'],
            ["style", "width", '71px']
         ],
         "${_eyes_12}": [
            ["style", "height", '182px'],
            ["style", "top", '-42px'],
            ["style", "left", '589px'],
            ["style", "width", '182px']
         ],
         "${_pad_txt}": [
            ["style", "top", '236px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '82px'],
            ["style", "font-size", '51px']
         ],
         "${_pat_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_pallam_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '13px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "border-width", '2px'],
            ["style", "left", '-15px']
         ],
         "${_pam_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_pad_img}": [
            ["style", "top", '32px'],
            ["transform", "scaleY", '1.17778'],
            ["style", "height", '180px'],
            ["transform", "scaleX", '1.17778'],
            ["style", "left", '19px'],
            ["style", "width", '227px']
         ],
         "${_panthu_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '64px'],
            ["style", "font-size", '51px']
         ],
         "${_pal_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '0px'],
            ["style", "width", '267px']
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
            ["style", "font-size", '50px'],
            ["style", "top", '2px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '52px'],
            ["style", "width", '41px'],
            ["style", "word-spacing", '0px'],
            ["style", "line-height", '50px']
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
            ["style", "width", '1366px']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "left", '20px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_panthu_img}": [
            ["style", "top", '103px'],
            ["style", "height", '212px'],
            ["style", "left", '-34px'],
            ["style", "width", '267px']
         ],
         "${_pantham_rect}": [
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
         "${_panam_txt}": [
            ["style", "top", '233px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '70px'],
            ["style", "font-size", '51px']
         ],
         "${_pinselga}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_padangal}": [
            ["style", "top", '227px'],
            ["style", "overflow", 'auto'],
            ["style", "height", '426px'],
            ["style", "left", '274px'],
            ["style", "width", '950px']
         ],
         "${_pallam_img}": [
            ["style", "height", '212px'],
            ["style", "top", '24px'],
            ["style", "left", '-4px'],
            ["style", "width", '267px']
         ],
         "${_pad_rect}": [
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
         "${_fwd}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_pantham_txt}": [
            ["style", "top", '233px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '66px'],
            ["style", "font-size", '51px']
         ],
         "${_panam}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_pattam}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_cloud2}": [
            ["style", "height", '258px'],
            ["style", "top", '-127px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
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
         "${_logorect}": [
            ["style", "top", '31.56%'],
            ["style", "height", '36.87%'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0%'],
            ["style", "width", '110.38%']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.43%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_fwd2}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_pambaram}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_pinselga2}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_pin2}": [
            ["style", "top", '659px'],
            ["style", "left", '344px'],
            ["style", "cursor", 'pointer']
         ],
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '0px'],
            ["style", "width", '1370px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "font-size", '10px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "opacity", '1'],
            ["style", "height", '13.28%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.3%'],
            ["style", "width", '60.47%']
         ],
         "${_pam_rect}": [
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
         "${_panthu_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "border-top-left-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [25,26], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '94px'],
            ["style", "border-bottom-left-radius", [25,25], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '290px'],
            ["color", "border-color", 'rgba(179,179,179,1)'],
            ["style", "border-width", '2px'],
            ["style", "left", '-44px']
         ],
         "${_palam_rect}": [
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
         "${_panam__img}": [
            ["style", "top", '16px'],
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
         "${_padam}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_pantham}": [
            ["style", "top", '643px'],
            ["style", "height", '295px'],
            ["style", "left", '330px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_fct}": [
            ["style", "display", 'none']
         ],
         "${_pantham_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '53px'],
            ["style", "font-size", '51px']
         ],
         "${_palam_img}": [
            ["style", "height", '212px'],
            ["style", "top", '17px'],
            ["style", "width", '267px']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "width", '52.64%'],
            ["style", "opacity", '1'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "height", '14.75%'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '46.3%'],
            ["style", "font-size", '10px']
         ],
         "${_pam_txt}": [
            ["style", "top", '236px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '65px'],
            ["style", "font-size", '51px']
         ],
         "${_pal}": [
            ["style", "top", '327px'],
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_fct_logo}": [
            ["style", "top", '0px'],
            ["style", "height", '28px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
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
            { id: "eid23", tween: [ "style", "${_pat_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1152, duration: 14 },
            { id: "eid24", tween: [ "style", "${_pat_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1223, duration: 0 },
            { id: "eid35", tween: [ "style", "${_palam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1529, duration: 13 },
            { id: "eid79", tween: [ "style", "${_palam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1599, duration: 0 },
            { id: "eid36", tween: [ "style", "${_palam_rect}", "border-width", '2px', { fromValue: '2px'}], position: 1600, duration: 0 },
            { id: "eid159", tween: [ "style", "${_pantham_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid182", tween: [ "style", "${_pantham_txt}", "left", '66px', { fromValue: '66px'}], position: 800, duration: 0 },
            { id: "eid168", tween: [ "style", "${_pallam_txt}", "left", '52px', { fromValue: '52px'}], position: 800, duration: 0 },
            { id: "eid154", tween: [ "style", "${_panthu_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 },
            { id: "eid37", tween: [ "color", "${_palam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1529, duration: 13 },
            { id: "eid80", tween: [ "color", "${_palam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1599, duration: 0 },
            { id: "eid38", tween: [ "color", "${_palam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1600, duration: 0 },
            { id: "eid147", tween: [ "style", "${_palam_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 },
            { id: "eid139", tween: [ "style", "${_pam_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 },
            { id: "eid69", tween: [ "color", "${_panam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2360, duration: 14 },
            { id: "eid70", tween: [ "color", "${_panam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2431, duration: 0 },
            { id: "eid135", tween: [ "style", "${_pat_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 },
            { id: "eid173", tween: [ "style", "${_panthu_rect}", "top", '94px', { fromValue: '94px'}], position: 800, duration: 0 },
            { id: "eid171", tween: [ "style", "${_panthu_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid162", tween: [ "style", "${_pallam_rect}", "left", '-15px', { fromValue: '-15px'}], position: 800, duration: 0 },
            { id: "eid165", tween: [ "style", "${_palam_txt}", "left", '81px', { fromValue: '81px'}], position: 800, duration: 0 },
            { id: "eid152", tween: [ "style", "${_pal_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 },
            { id: "eid8", tween: [ "color", "${_pad_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1000, duration: 14 },
            { id: "eid20", tween: [ "color", "${_pad_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1071, duration: 0 },
            { id: "eid136", tween: [ "style", "${_pat_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid160", tween: [ "style", "${_panam_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 },
            { id: "eid143", tween: [ "style", "${_pat_txt}", "top", '236px', { fromValue: '236px'}], position: 800, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pantham_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2212, duration: 14 },
            { id: "eid66", tween: [ "style", "${_pantham_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2283, duration: 0 },
            { id: "eid31", tween: [ "color", "${_pam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1367, duration: 14 },
            { id: "eid32", tween: [ "color", "${_pam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1438, duration: 0 },
            { id: "eid140", tween: [ "style", "${_pam_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid39", tween: [ "color", "${_pallam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1721, duration: 14 },
            { id: "eid40", tween: [ "color", "${_pallam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1792, duration: 0 },
            { id: "eid29", tween: [ "style", "${_pam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1367, duration: 14 },
            { id: "eid30", tween: [ "style", "${_pam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1438, duration: 0 },
            { id: "eid170", tween: [ "style", "${_pal_txt}", "top", '239px', { fromValue: '239px'}], position: 800, duration: 0 },
            { id: "eid181", tween: [ "style", "${_panthu_txt}", "top", '320px', { fromValue: '320px'}], position: 800, duration: 0 },
            { id: "eid55", tween: [ "color", "${_pal_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1922, duration: 14 },
            { id: "eid56", tween: [ "color", "${_pal_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1993, duration: 0 },
            { id: "eid71", tween: [ "style", "${_panam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2360, duration: 14 },
            { id: "eid72", tween: [ "style", "${_panam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2431, duration: 0 },
            { id: "eid144", tween: [ "style", "${_pat_txt}", "left", '67px', { fromValue: '67px'}], position: 800, duration: 0 },
            { id: "eid185", tween: [ "style", "${_panthu_txt}", "left", '39px', { fromValue: '39px'}], position: 800, duration: 0 },
            { id: "eid63", tween: [ "color", "${_pantham_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2212, duration: 14 },
            { id: "eid64", tween: [ "color", "${_pantham_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2283, duration: 0 },
            { id: "eid27", tween: [ "color", "${_pam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1367, duration: 14 },
            { id: "eid28", tween: [ "color", "${_pam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1438, duration: 0 },
            { id: "eid41", tween: [ "style", "${_pallam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1721, duration: 14 },
            { id: "eid42", tween: [ "style", "${_pallam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1792, duration: 0 },
            { id: "eid114", tween: [ "style", "${_pad_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid180", tween: [ "style", "${_pantham_txt}", "top", '233px', { fromValue: '233px'}], position: 800, duration: 0 },
            { id: "eid177", tween: [ "style", "${_panam_txt}", "top", '233px', { fromValue: '233px'}], position: 800, duration: 0 },
            { id: "eid59", tween: [ "style", "${_panthu_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2063, duration: 14 },
            { id: "eid60", tween: [ "style", "${_panthu_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2134, duration: 0 },
            { id: "eid184", tween: [ "style", "${_panam_txt}", "left", '70px', { fromValue: '70px'}], position: 800, duration: 0 },
            { id: "eid150", tween: [ "style", "${_pallam_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 },
            { id: "eid167", tween: [ "style", "${_pallam_txt}", "top", '246px', { fromValue: '246px'}], position: 800, duration: 0 },
            { id: "eid67", tween: [ "color", "${_pantham_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2212, duration: 14 },
            { id: "eid68", tween: [ "color", "${_pantham_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2283, duration: 0 },
            { id: "eid186", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 800, duration: 0 },
            { id: "eid166", tween: [ "style", "${_palam_txt}", "top", '239px', { fromValue: '239px'}], position: 800, duration: 0 },
            { id: "eid43", tween: [ "color", "${_pallam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1721, duration: 14 },
            { id: "eid44", tween: [ "color", "${_pallam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1792, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pad_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1000, duration: 14 },
            { id: "eid19", tween: [ "style", "${_pad_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1071, duration: 0 },
            { id: "eid53", tween: [ "style", "${_pal_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1922, duration: 14 },
            { id: "eid54", tween: [ "style", "${_pal_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1993, duration: 0 },
            { id: "eid14", tween: [ "color", "${_pad_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1000, duration: 14 },
            { id: "eid16", tween: [ "color", "${_pad_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1071, duration: 0 },
            { id: "eid148", tween: [ "style", "${_palam_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid57", tween: [ "color", "${_panthu_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2063, duration: 14 },
            { id: "eid58", tween: [ "color", "${_panthu_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2134, duration: 0 },
            { id: "eid161", tween: [ "style", "${_panam_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid25", tween: [ "color", "${_pat_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1152, duration: 14 },
            { id: "eid26", tween: [ "color", "${_pat_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1223, duration: 0 },
            { id: "eid164", tween: [ "style", "${_pallam_rect}", "top", '13px', { fromValue: '13px'}], position: 800, duration: 0 },
            { id: "eid51", tween: [ "color", "${_pal_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1922, duration: 14 },
            { id: "eid52", tween: [ "color", "${_pal_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1993, duration: 0 },
            { id: "eid21", tween: [ "color", "${_pat_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1152, duration: 14 },
            { id: "eid22", tween: [ "color", "${_pat_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1223, duration: 0 },
            { id: "eid151", tween: [ "style", "${_pallam_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid174", tween: [ "style", "${_panthu_rect}", "left", '-44px', { fromValue: '-44px'}], position: 800, duration: 0 },
            { id: "eid86", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "color", "${_panthu_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2063, duration: 14 },
            { id: "eid62", tween: [ "color", "${_panthu_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2134, duration: 0 },
            { id: "eid33", tween: [ "color", "${_palam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1529, duration: 13 },
            { id: "eid76", tween: [ "color", "${_palam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1599, duration: 0 },
            { id: "eid34", tween: [ "color", "${_palam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1600, duration: 0 },
            { id: "eid158", tween: [ "style", "${_pantham_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 },
            { id: "eid169", tween: [ "style", "${_pal_txt}", "left", '98px', { fromValue: '98px'}], position: 800, duration: 0 },
            { id: "eid73", tween: [ "color", "${_panam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2360, duration: 14 },
            { id: "eid74", tween: [ "color", "${_panam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2431, duration: 0 },
            { id: "eid153", tween: [ "style", "${_pal_rect}", "height", '290px', { fromValue: '290px'}], position: 800, duration: 0 },
            { id: "eid113", tween: [ "style", "${_pad_rect}", "width", '284px', { fromValue: '284px'}], position: 800, duration: 0 }         ]
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
