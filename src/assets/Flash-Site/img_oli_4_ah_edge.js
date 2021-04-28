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
            id:'ah_small',
            type:'group',
            rect:['305px','124px','53px','54','auto','auto'],
            c:[
            {
               id:'rect_ah',
               type:'rect',
               rect:['0px','0px','66px','52px','auto','auto'],
               cursor:['pointer'],
               borderRadius:["10px","10px","10px","10px"],
               fill:["rgba(252,125,27,1.00)",[50,50,true,'farthest-corner',[['rgba(255,255,255,1.00)',0],['rgba(203,199,199,1.00)',100]]]],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            },
            {
               id:'text_ah',
               type:'text',
               rect:['6px','0px','41px','52px','auto','auto'],
               text:"m",
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
               rect:['24px','4px','auto','auto','auto','auto'],
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
               id:'pandham',
               type:'group',
               rect:['640px','631px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'pandham_rect',
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
                  id:'pandham__img',
                  type:'image',
                  rect:['0px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20669.png",'0px','0px']
               },
               {
                  id:'pandham_txt',
                  type:'text',
                  rect:['55px','201px','auto','auto','auto','auto'],
                  text:"ge;jk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'vattam',
               type:'group',
               rect:['327px','631px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'vattam_rect',
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
                  id:'vattam_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20836.png",'0px','0px']
               },
               {
                  id:'vattam_txt',
                  type:'text',
                  rect:['53px','201px','auto','auto','auto','auto'],
                  text:"tl;lk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'naham',
               type:'group',
               rect:['19px','631px','227','189px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'naham_rect',
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
                  id:'naham_img',
                  type:'image',
                  rect:['0','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20855.png",'0px','0px']
               },
               {
                  id:'naham_txt',
                  type:'text',
                  rect:['64px','201px','auto','auto','auto','auto'],
                  text:"efk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'thandham',
               type:'group',
               rect:['640px','321px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'thandham_rect',
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
                  id:'thandham_img',
                  type:'image',
                  rect:['0px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20899.png",'0px','0px']
               },
               {
                  id:'thandham_txt',
                  type:'text',
                  rect:['81px','201px','auto','auto','auto','auto'],
                  text:"je;jk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'kadam',
               type:'group',
               rect:['327px','321px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'kadam_rect',
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
                  id:'kadam_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20788.png",'0px','0px']
               },
               {
                  id:'kadam_txt',
                  type:'text',
                  rect:['39px','203px','auto','auto','auto','auto'],
                  text:"flk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'nagaram',
               type:'group',
               rect:['17px','321px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'nagaram_rect',
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
                  id:'nagaram_img',
                  type:'image',
                  rect:['0','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20860.png",'0px','0px']
               },
               {
                  id:'nagaram_txt',
                  type:'text',
                  rect:['66px','201px','auto','auto','auto','auto'],
                  text:"efuk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'palam',
               type:'group',
               rect:['637px','10px','290px','295px','auto','auto'],
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
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20679.png",'0px','0px']
               },
               {
                  id:'palam_txt',
                  type:'text',
                  rect:['42px','201px','auto','auto','auto','auto'],
                  text:"gok;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'appalam',
               type:'group',
               rect:['327px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'app_rect',
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
                  id:'app_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%201435.png",'0px','0px']
               },
               {
                  id:'app_txt',
                  type:'text',
                  rect:['48px','201px','auto','auto','auto','auto'],
                  text:"mg;gsk;",
                  align:"left",
                  font:['baminiplain, Arial, sans-serif',51,"rgba(0,0,0,1)","bold","none","normal"]
               }]
            },
            {
               id:'kappal',
               type:'group',
               rect:['17px','10px','290px','295px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'kap_rect',
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
                  id:'kap_img',
                  type:'image',
                  rect:['-1px','15px','267px','212px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"image%20773.png",'0px','0px']
               },
               {
                  id:'kap_txt',
                  type:'text',
                  rect:['66px','202px','auto','auto','auto','auto'],
                  text:"fg;gy;",
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
               rect:['24px','4px','auto','auto','auto','auto'],
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
         "${_pandham}": [
            ["style", "top", '631px'],
            ["style", "height", '295px'],
            ["style", "left", '640px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_palam_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '238px'],
            ["style", "left", '82px'],
            ["style", "font-size", '51px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_thandham}": [
            ["style", "top", '321px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '640px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'block'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_kadam}": [
            ["style", "top", '321px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '327px']
         ],
         "${_cloud1}": [
            ["style", "top", '-118px'],
            ["style", "height", '258px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_pinselga2}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
         ],
         "${_app_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '238px'],
            ["style", "left", '36px'],
            ["style", "font-size", '51px']
         ],
         "${_appalam}": [
            ["style", "height", '295px'],
            ["style", "left", '327px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_home}": [
            ["style", "top", '37px'],
            ["style", "height", '71px'],
            ["style", "left", '293px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_eyes_12}": [
            ["style", "top", '-42px'],
            ["style", "height", '182px'],
            ["style", "left", '589px'],
            ["style", "width", '182px']
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
         "${_naham_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '234px'],
            ["style", "left", '72px'],
            ["style", "font-size", '51px']
         ],
         "${_kap_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '238px'],
            ["style", "left", '62px'],
            ["style", "font-size", '51px']
         ],
         "${_nagaram_rect}": [
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
         "${_kadam_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '232px'],
            ["style", "left", '84px'],
            ["style", "font-size", '51px']
         ],
         "${_panthu_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '64px'],
            ["style", "font-size", '51px']
         ],
         "${_thandham_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '0px'],
            ["style", "width", '267px']
         ],
         "${_nagaram_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "width", '267px']
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
         "${_pandham_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '234px'],
            ["style", "left", '76px'],
            ["style", "font-size", '51px']
         ],
         "${_kadam_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '100%']
         ],
         "${_pandham_rect}": [
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
         "${_vattam_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "left", '0px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '1370px']
         ],
         "${_panam_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '55px'],
            ["style", "font-size", '51px']
         ],
         "${_vattam}": [
            ["style", "top", '631px'],
            ["style", "height", '295px'],
            ["style", "left", '327px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
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
         "${_pinselga}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '4px'],
            ["style", "left", '24px'],
            ["style", "font-size", '34px']
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
         "${_kappal}": [
            ["style", "height", '295px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '290px']
         ],
         "${_fwd}": [
            ["style", "top", '11px'],
            ["style", "height", '17px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_nagaram_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '232px'],
            ["style", "left", '61px'],
            ["style", "font-size", '51px']
         ],
         "${_kap_rect}": [
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
         "${_app_rect}": [
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
         "${_app_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_pantham_txtCopy}": [
            ["style", "top", '201px'],
            ["style", "left", '53px'],
            ["style", "font-size", '51px']
         ],
         "${_vattam_rect}": [
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
         "${_thandham_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '232px'],
            ["style", "left", '73px'],
            ["style", "font-size", '51px']
         ],
         "${_logorect}": [
            ["style", "top", '31.56%'],
            ["style", "height", '36.87%'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "left", '0%'],
            ["style", "width", '110.38%']
         ],
         "${_naham_rect}": [
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
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_pandham__img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "left", '0px'],
            ["style", "width", '267px']
         ],
         "${_naham}": [
            ["style", "top", '631px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '19px']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_kadam_rect}": [
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
         "${_rect_ah}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(252,125,27,1)'],
            ["style", "left", '0px'],
            ["style", "height", '52px'],
            ["gradient", "background-image", [50,50,true,'farthest-corner',[['rgba(251,136,35,1.00)',100],['rgba(202,198,198,1.00)',100]]]],
            ["style", "cursor", 'pointer'],
            ["style", "width", '66px']
         ],
         "${_nagaram}": [
            ["style", "top", '321px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '17px']
         ],
         "${_naham_img}": [
            ["style", "height", '212px'],
            ["style", "top", '15px'],
            ["style", "width", '267px']
         ],
         "${_thandham_rect}": [
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
         "${_menu_sorkal}": [
            ["style", "top", '-172px'],
            ["style", "height", '605px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '20px'],
            ["style", "width", '249px']
         ],
         "${_ah_small}": [
            ["style", "left", '305px'],
            ["style", "top", '124px']
         ],
         "${_kap_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
         ],
         "${_text_ah}": [
            ["style", "-webkit-transform-origin", [50,62], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,62],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "letter-spacing", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '6px'],
            ["style", "font-size", '50px'],
            ["style", "top", '0px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '52px'],
            ["style", "line-height", '50px'],
            ["style", "word-spacing", '0px'],
            ["style", "width", '41px']
         ],
         "${_palam}": [
            ["style", "top", '10px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '637px']
         ],
         "${_vattam_txt}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "top", '234px'],
            ["style", "left", '63px'],
            ["style", "font-size", '51px']
         ],
         "${_palam_rect}": [
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
         "${_palam_img}": [
            ["style", "top", '15px'],
            ["style", "height", '212px'],
            ["style", "left", '-1px'],
            ["style", "width", '267px']
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
         "${_fwd2}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_logo_batch}": [
            ["style", "left", '3.66%'],
            ["style", "opacity", '1']
         ],
         "${_fct_logo}": [
            ["style", "height", '28px'],
            ["style", "top", '0px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
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
            { id: "eid109", tween: [ "style", "${_app_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "style", "${_thandham_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "style", "${_kadam_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "color", "${_palam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1367, duration: 14 },
            { id: "eid32", tween: [ "color", "${_palam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1438, duration: 0 },
            { id: "eid107", tween: [ "style", "${_palam_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_kap_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1000, duration: 14 },
            { id: "eid19", tween: [ "style", "${_kap_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1071, duration: 0 },
            { id: "eid129", tween: [ "style", "${_vattam_txt}", "top", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_naham_txt}", "top", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
            { id: "eid71", tween: [ "style", "${_pandham_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2360, duration: 14 },
            { id: "eid72", tween: [ "style", "${_pandham_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2431, duration: 0 },
            { id: "eid39", tween: [ "color", "${_kadam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1721, duration: 14 },
            { id: "eid40", tween: [ "color", "${_kadam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1792, duration: 0 },
            { id: "eid69", tween: [ "color", "${_pandham_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2360, duration: 14 },
            { id: "eid70", tween: [ "color", "${_pandham_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2431, duration: 0 },
            { id: "eid97", tween: [ "style", "${_vattam_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_pandham_txt}", "top", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
            { id: "eid91", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "color", "${_kadam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1721, duration: 14 },
            { id: "eid44", tween: [ "color", "${_kadam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1792, duration: 0 },
            { id: "eid59", tween: [ "style", "${_naham_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2063, duration: 14 },
            { id: "eid60", tween: [ "style", "${_naham_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2134, duration: 0 },
            { id: "eid105", tween: [ "style", "${_nagaram_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "color", "${_thandham_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1922, duration: 14 },
            { id: "eid56", tween: [ "color", "${_thandham_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1993, duration: 0 },
            { id: "eid94", tween: [ "style", "${_pandham_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid57", tween: [ "color", "${_naham_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2063, duration: 14 },
            { id: "eid58", tween: [ "color", "${_naham_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2134, duration: 0 },
            { id: "eid29", tween: [ "style", "${_palam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1367, duration: 14 },
            { id: "eid30", tween: [ "style", "${_palam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1438, duration: 0 },
            { id: "eid128", tween: [ "style", "${_vattam_txt}", "left", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid25", tween: [ "color", "${_app_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1152, duration: 14 },
            { id: "eid26", tween: [ "color", "${_app_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1223, duration: 0 },
            { id: "eid126", tween: [ "style", "${_naham_txt}", "left", '72px', { fromValue: '72px'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_thandham_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1922, duration: 14 },
            { id: "eid54", tween: [ "style", "${_thandham_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1993, duration: 0 },
            { id: "eid100", tween: [ "style", "${_naham_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "color", "${_nagaram_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1529, duration: 13 },
            { id: "eid80", tween: [ "color", "${_nagaram_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1599, duration: 0 },
            { id: "eid38", tween: [ "color", "${_nagaram_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1600, duration: 0 },
            { id: "eid14", tween: [ "color", "${_kap_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1000, duration: 14 },
            { id: "eid16", tween: [ "color", "${_kap_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1071, duration: 0 },
            { id: "eid113", tween: [ "style", "${_kap_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid33", tween: [ "color", "${_nagaram_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1529, duration: 13 },
            { id: "eid76", tween: [ "color", "${_nagaram_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1599, duration: 0 },
            { id: "eid34", tween: [ "color", "${_nagaram_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1600, duration: 0 },
            { id: "eid131", tween: [ "style", "${_pandham_txt}", "left", '76px', { fromValue: '76px'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "color", "${_pandham_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2360, duration: 14 },
            { id: "eid74", tween: [ "color", "${_pandham_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2431, duration: 0 },
            { id: "eid21", tween: [ "color", "${_app_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1152, duration: 14 },
            { id: "eid22", tween: [ "color", "${_app_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1223, duration: 0 },
            { id: "eid111", tween: [ "style", "${_app_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_kadam_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "color", "${_kap_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 1000, duration: 14 },
            { id: "eid20", tween: [ "color", "${_kap_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 1071, duration: 0 },
            { id: "eid108", tween: [ "style", "${_palam_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid35", tween: [ "style", "${_nagaram_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1529, duration: 13 },
            { id: "eid79", tween: [ "style", "${_nagaram_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1599, duration: 0 },
            { id: "eid36", tween: [ "style", "${_nagaram_rect}", "border-width", '2px', { fromValue: '2px'}], position: 1600, duration: 0 },
            { id: "eid106", tween: [ "style", "${_nagaram_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_kap_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid65", tween: [ "style", "${_vattam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 2212, duration: 14 },
            { id: "eid66", tween: [ "style", "${_vattam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 2283, duration: 0 },
            { id: "eid23", tween: [ "style", "${_app_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1152, duration: 14 },
            { id: "eid24", tween: [ "style", "${_app_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1223, duration: 0 },
            { id: "eid67", tween: [ "color", "${_vattam_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2212, duration: 14 },
            { id: "eid68", tween: [ "color", "${_vattam_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2283, duration: 0 },
            { id: "eid99", tween: [ "style", "${_naham_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid63", tween: [ "color", "${_vattam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 2212, duration: 14 },
            { id: "eid64", tween: [ "color", "${_vattam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 2283, duration: 0 },
            { id: "eid51", tween: [ "color", "${_thandham_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1922, duration: 14 },
            { id: "eid52", tween: [ "color", "${_thandham_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1993, duration: 0 },
            { id: "eid96", tween: [ "style", "${_pandham_rect}", "width", '284px', { fromValue: '284px'}], position: 0, duration: 0 },
            { id: "eid98", tween: [ "style", "${_vattam_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "style", "${_kadam_rect}", "border-width", '3px', { fromValue: '2px'}], position: 1721, duration: 14 },
            { id: "eid42", tween: [ "style", "${_kadam_rect}", "border-width", '2px', { fromValue: '3px'}], position: 1792, duration: 0 },
            { id: "eid61", tween: [ "color", "${_naham_rect}", "border-color", 'rgba(255,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(179,179,179,1)'}], position: 2063, duration: 14 },
            { id: "eid62", tween: [ "color", "${_naham_rect}", "border-color", 'rgba(179,179,179,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,0,0,1.00)'}], position: 2134, duration: 0 },
            { id: "eid27", tween: [ "color", "${_palam_txt}", "color", 'rgba(210,15,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1)'}], position: 1367, duration: 14 },
            { id: "eid28", tween: [ "color", "${_palam_txt}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,15,255,1.00)'}], position: 1438, duration: 0 },
            { id: "eid132", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid102", tween: [ "style", "${_thandham_rect}", "height", '290px', { fromValue: '290px'}], position: 0, duration: 0 }         ]
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
