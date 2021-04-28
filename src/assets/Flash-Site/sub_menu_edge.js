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
            id:'shape208',
            type:'image',
            rect:['-10px','-6px','101.5%','101.6%','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"shape208.svg",'0%','0%','100%','auto']
         },
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
            id:'menu_bg',
            type:'rect',
            rect:['315px','-295px','872px','478px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'m1',
            type:'group',
            rect:['399','232','727','42','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'menu1',
               type:'text',
               rect:['71px','0px','641px','42px','auto','auto'],
               text:"glq;fSk; xypAk; cr;rupg;Gk;",
               align:"left",
               font:['baminiplain, Arial, sans-serif',38,"rgba(0,0,0,1)","800","none","normal"]
            },
            {
               id:'bullet1',
               type:'rect',
               rect:['0px','9px','25px','25px','auto','auto'],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'m2',
            type:'group',
            rect:['399','233px','727','42','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'menu2',
               type:'text',
               rect:['74px','0px','641px','42px','auto','auto'],
               text:"glq;fSk; xypAk; ,izj;jy;",
               align:"left",
               font:['baminiplain, Arial, sans-serif',38,"rgba(0,0,0,1)","800","none","normal"]
            },
            {
               id:'bullet2',
               type:'rect',
               rect:['0px','8px','25px','25px','auto','auto'],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'m3',
            type:'group',
            rect:['399','233px','775','42','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'menu3',
               type:'text',
               rect:['71px','0px','843px','42px','auto','auto'],
               text:"glq;fSk; tpLgl;l vOj;Jf;fis ,izj;jy;",
               align:"left",
               font:['baminiplain, Arial, sans-serif',38,"rgba(0,0,0,1)","800","none","normal"]
            },
            {
               id:'bullet3',
               type:'rect',
               rect:['0px','8px','25px','25px','auto','auto'],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'m4',
            type:'group',
            rect:['399','233px','727','42','auto','auto'],
            cursor:['pointer'],
            c:[
            {
               id:'menu4',
               type:'text',
               rect:['71px','0px','641px','42px','auto','auto'],
               text:"glq;fSk; Xir cr;rupg;Gk;",
               align:"left",
               font:['baminiplain, Arial, sans-serif',38,"rgba(0,0,0,1)","800","none","normal"]
            },
            {
               id:'bullet4',
               type:'rect',
               rect:['0px','8px','25px','25px','auto','auto'],
               fill:["rgba(0,0,0,1.00)"],
               stroke:[0,"rgb(0, 0, 0)","solid"]
            }]
         },
         {
            id:'fctCopy',
            display:'none',
            type:'group',
            rect:['55','732','227','28','auto','auto'],
            c:[
            {
               id:'fct_2Copy',
               type:'group',
               rect:['0px','0px','258px','26px','auto','auto'],
               cursor:['pointer'],
               c:[
               {
                  id:'txt_fctCopy',
                  type:'text',
                  rect:['90px','7px','auto','auto','auto','auto'],
                  text:"Flow Chart Technologies",
                  align:"left",
                  font:['Arial, Helvetica, sans-serif',11,"rgba(0,0,0,1)","bold","none","normal"]
               },
               {
                  id:'fct_logoCopy',
                  type:'image',
                  rect:['59px','0px','30px','28px','auto','auto'],
                  fill:["rgba(0,0,0,0)",im+"fct_logo.png",'0px','0px']
               }]
            },
            {
               id:'pwd_fctCopy',
               type:'text',
               rect:['0px','8px','auto','auto','auto','auto'],
               text:"Powered by :",
               align:"left",
               font:['Arial, Helvetica, sans-serif',9,"rgba(0,0,0,1)","700","none",""]
            }]
         },
         {
            id:'home',
            display:'none',
            type:'image',
            rect:['284px','27px','77px','77px','auto','auto'],
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
            ["style", "top", '-628px'],
            ["style", "height", '605px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '20px'],
            ["style", "width", '249px']
         ],
         "${_m1}": [
            ["style", "top", '-236px'],
            ["style", "opacity", '0'],
            ["style", "left", '318px'],
            ["style", "cursor", 'pointer']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_m2}": [
            ["style", "top", '-236px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '316px']
         ],
         "${_pwd_fctCopy}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_menu4}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '0px'],
            ["style", "font-weight", '800'],
            ["style", "left", '71px'],
            ["style", "width", '641px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '42px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "font-size", '38px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'none'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_menu3}": [
            ["style", "line-height", '40px'],
            ["style", "font-weight", '800'],
            ["style", "left", '71px'],
            ["style", "font-size", '38px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '42px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "width", '843px']
         ],
         "${_cloud1}": [
            ["style", "top", '-258px'],
            ["style", "height", '258px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_fct_2Copy}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_bullet1}": [
            ["style", "top", '9px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["gradient", "background-image", [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]]],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '25px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_menu_bg}": [
            ["style", "top", '-288px'],
            ["color", "background-color", 'rgba(239,239,239,1.00)'],
            ["style", "height", '427px'],
            ["style", "opacity", '0'],
            ["style", "left", '282px'],
            ["style", "width", '945px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-106.64%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_cloud2}": [
            ["style", "top", '-258px'],
            ["style", "height", '258px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_home}": [
            ["style", "top", '38px'],
            ["style", "display", 'none'],
            ["style", "height", '60px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '297px'],
            ["style", "width", '60px']
         ],
         "${_eyes_12}": [
            ["style", "top", '-186px'],
            ["style", "height", '182px'],
            ["style", "left", '589px'],
            ["style", "width", '182px']
         ],
         "${_logorect}": [
            ["style", "top", '31.56%'],
            ["style", "height", '36.87%'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0%'],
            ["style", "width", '110.38%']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "width", '60.47%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", '700'],
            ["style", "height", '13.28%'],
            ["style", "opacity", '1'],
            ["style", "left", '46.3%'],
            ["style", "font-size", '10px']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_shape208}": [
            ["style", "top", '-6px'],
            ["style", "height", '101.56%'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '-10px'],
            ["style", "width", '101.52%']
         ],
         "${_fctCopy}": [
            ["style", "display", 'none']
         ],
         "${_fct_logoCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '28px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_bullet3}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '8px'],
            ["style", "border-style", 'solid'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '25px'],
            ["gradient", "background-image", [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "max-width", 'none'],
            ["style", "width", '1366px']
         ],
         "${_wrapper}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "left", '0px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "width", '1370px']
         ],
         "${_bullet4}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "top", '8px'],
            ["style", "border-style", 'solid'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '25px'],
            ["gradient", "background-image", [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_bullet2}": [
            ["style", "top", '8px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-style", 'solid'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '25px'],
            ["gradient", "background-image", [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]]],
            ["style", "left", '0px'],
            ["style", "width", '25px']
         ],
         "${_txt_fctCopy}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_m4}": [
            ["style", "top", '-71px'],
            ["style", "opacity", '0'],
            ["style", "left", '318px'],
            ["style", "cursor", 'pointer']
         ],
         "${_menu1}": [
            ["style", "line-height", '40px'],
            ["style", "font-weight", '800'],
            ["style", "left", '71px'],
            ["style", "width", '641px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '42px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "font-size", '38px']
         ],
         "${_logo_batch}": [
            ["style", "left", '3.66%'],
            ["style", "opacity", '0']
         ],
         "${_menu2}": [
            ["style", "line-height", '40px'],
            ["style", "font-weight", '800'],
            ["style", "left", '74px'],
            ["style", "width", '641px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'left'],
            ["style", "height", '42px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "font-size", '38px']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "font-size", '10px'],
            ["style", "opacity", '1'],
            ["style", "font-weight", '700'],
            ["style", "height", '14.75%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '46.3%'],
            ["style", "width", '52.64%']
         ],
         "${_m3}": [
            ["style", "top", '-168px'],
            ["style", "opacity", '0'],
            ["style", "left", '318px'],
            ["style", "cursor", 'pointer']
         ],
         "${_menu_wrapper}": [
            ["style", "top", '-744px'],
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
         duration: 90000,
         autoPlay: true,
         labels: {
            "slow": 2250,
            "b1_on": 9860,
            "b1_off": 10162,
            "b2_on": 10500,
            "b2_off": 10802,
            "b3_on": 11000,
            "b3_off": 11302,
            "b4_on": 11500,
            "b4_off": 11802,
            "hide menu": 30000,
            "sorkal_on": 89394,
            "sorkal_off": 89894
         },
         timeline: [
            { id: "eid467", tween: [ "style", "${_m3}", "opacity", '1', { fromValue: '0'}], position: 1863, duration: 250 },
            { id: "eid349", tween: [ "style", "${_eyes_12}", "top", '-42px', { fromValue: '-186px'}], position: 627, duration: 236 },
            { id: "eid352", tween: [ "style", "${_eyes_12}", "top", '-199px', { fromValue: '-42px'}], position: 30000, duration: 0 },
            { id: "eid28", tween: [ "style", "${_sidecolor}", "top", '-1.43%', { fromValue: '-106.64%'}], position: 500, duration: 127 },
            { id: "eid594", tween: [ "transform", "${_bullet3}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 11000, duration: 250 },
            { id: "eid605", tween: [ "transform", "${_bullet3}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 11302, duration: 0 },
            { id: "eid478", tween: [ "style", "${_m4}", "opacity", '1', { fromValue: '0'}], position: 2113, duration: 141 },
            { id: "eid537", tween: [ "color", "${_bullet2}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 10500, duration: 0 },
            { id: "eid589", tween: [ "color", "${_bullet2}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 10802, duration: 0 },
            { id: "eid454", tween: [ "style", "${_m1}", "opacity", '1', { fromValue: '0.000000'}], position: 1613, duration: 250 },
            { id: "eid365", tween: [ "style", "${_cloud2}", "top", '-42px', { fromValue: '-258px'}], position: 863, duration: 167 },
            { id: "eid367", tween: [ "style", "${_cloud2}", "top", '-127px', { fromValue: '-42px'}], position: 1030, duration: 104 },
            { id: "eid368", tween: [ "style", "${_cloud2}", "top", '-127px', { fromValue: '-127px'}], position: 1134, duration: 64 },
            { id: "eid404", tween: [ "style", "${_cloud2}", "top", '-293px', { fromValue: '-127px'}], position: 30000, duration: 0 },
            { id: "eid672", tween: [ "style", "${_m2}", "left", '316px', { fromValue: '316px'}], position: 2750, duration: 0 },
            { id: "eid660", tween: [ "style", "${_m1}", "left", '318px', { fromValue: '318px'}], position: 2750, duration: 0 },
            { id: "eid592", tween: [ "color", "${_bullet3}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 11000, duration: 0 },
            { id: "eid601", tween: [ "color", "${_bullet3}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 11302, duration: 0 },
            { id: "eid663", tween: [ "style", "${_m4}", "left", '318px', { fromValue: '318px'}], position: 2522, duration: 0 },
            { id: "eid692", tween: [ "style", "${_home}", "left", '297px', { fromValue: '297px'}], position: 1909, duration: 0 },
            { id: "eid549", tween: [ "style", "${_m3}", "top", '-168px', { fromValue: '-168px'}], position: 0, duration: 0 },
            { id: "eid468", tween: [ "style", "${_m3}", "top", '419px', { fromValue: '317px'}], position: 1863, duration: 250 },
            { id: "eid574", tween: [ "style", "${_m3}", "top", '423px', { fromValue: '419px'}], position: 2113, duration: 299 },
            { id: "eid658", tween: [ "style", "${_m3}", "top", '423px', { fromValue: '423px'}], position: 2412, duration: 0 },
            { id: "eid24", tween: [ "style", "${_sidecolor}", "opacity", '1', { fromValue: '1'}], position: 500, duration: 0 },
            { id: "eid449", tween: [ "color", "${_menu_bg}", "background-color", 'rgba(239,239,239,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,239,239,1.00)'}], position: 1613, duration: 0 },
            { id: "eid656", tween: [ "style", "${_fctCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid655", tween: [ "style", "${_fctCopy}", "display", 'block', { fromValue: 'none'}], position: 827, duration: 0 },
            { id: "eid547", tween: [ "style", "${_m4}", "top", '-71px', { fromValue: '-71px'}], position: 0, duration: 0 },
            { id: "eid477", tween: [ "style", "${_m4}", "top", '502px', { fromValue: '418px'}], position: 2113, duration: 283 },
            { id: "eid568", tween: [ "style", "${_m4}", "top", '505px', { fromValue: '502px'}], position: 2396, duration: 16 },
            { id: "eid671", tween: [ "style", "${_m4}", "top", '-68px', { fromValue: '505px'}], position: 30000, duration: 0 },
            { id: "eid518", tween: [ "transform", "${_bullet1}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 9860, duration: 250 },
            { id: "eid585", tween: [ "transform", "${_bullet1}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 10162, duration: 0 },
            { id: "eid681", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'none'}], position: 863, duration: 0 },
            { id: "eid421", tween: [ "style", "${_menu_bg}", "top", '221px', { fromValue: '-288px'}], position: 1363, duration: 155 },
            { id: "eid625", tween: [ "style", "${_menu_bg}", "top", '187px', { fromValue: '221px'}], position: 1518, duration: 95 },
            { id: "eid627", tween: [ "style", "${_menu_bg}", "top", '-529px', { fromValue: '187px'}], position: 30000, duration: 0 },
            { id: "eid411", tween: [ "style", "${_menu_wrapper}", "top", '-744px', { fromValue: '-744px'}], position: 0, duration: 0 },
            { id: "eid390", tween: [ "style", "${_menu_wrapper}", "top", '2px', { fromValue: '-697px'}], position: 1198, duration: 165 },
            { id: "eid545", tween: [ "style", "${_menu_wrapper}", "top", '-752px', { fromValue: '2px'}], position: 30000, duration: 0 },
            { id: "eid30", tween: [ "style", "${_sidecolor}", "left", '0%', { fromValue: '0%'}], position: 500, duration: 0 },
            { id: "eid629", tween: [ "style", "${_home}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid630", tween: [ "style", "${_home}", "display", 'block', { fromValue: 'none'}], position: 1363, duration: 0 },
            { id: "eid551", tween: [ "style", "${_m2}", "top", '-236px', { fromValue: '-236px'}], position: 0, duration: 0 },
            { id: "eid461", tween: [ "style", "${_m2}", "top", '330px', { fromValue: '253px'}], position: 1613, duration: 250 },
            { id: "eid577", tween: [ "style", "${_m2}", "top", '334px', { fromValue: '330px'}], position: 1863, duration: 549 },
            { id: "eid669", tween: [ "style", "${_m2}", "top", '-225px', { fromValue: '334px'}], position: 30000, duration: 0 },
            { id: "eid358", tween: [ "style", "${_cloud1}", "top", '-54px', { fromValue: '-258px'}], position: 863, duration: 167 },
            { id: "eid360", tween: [ "style", "${_cloud1}", "top", '-117px', { fromValue: '-54px'}], position: 1030, duration: 103 },
            { id: "eid362", tween: [ "style", "${_cloud1}", "top", '-118px', { fromValue: '-117px'}], position: 1134, duration: 64 },
            { id: "eid407", tween: [ "style", "${_cloud1}", "top", '-330px', { fromValue: '-118px'}], position: 30000, duration: 0 },
            { id: "eid538", tween: [ "gradient", "${_bullet2}", "background-image", [50,50,false,'closest-corner',[['rgba(234,217,59,1.00)',0],['rgba(229,189,17,1.00)',56],['rgba(253,132,25,1.00)',100]]], { fromValue: [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]]}], position: 10500, duration: 250 },
            { id: "eid590", tween: [ "gradient", "${_bullet2}", "background-image", [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]], { fromValue: [50,50,false,'closest-corner',[['rgba(234,217,59,1.00)',0],['rgba(229,189,17,1.00)',56],['rgba(253,132,25,1.00)',100]]]}], position: 10802, duration: 0 },
            { id: "eid32", tween: [ "style", "${_logo_batch}", "opacity", '1', { fromValue: '0.000000'}], position: 627, duration: 200 },
            { id: "eid608", tween: [ "gradient", "${_bullet4}", "background-image", [50,50,false,'closest-corner',[['rgba(234,217,59,1.00)',0],['rgba(229,189,17,1.00)',56],['rgba(253,132,25,1.00)',100]]], { fromValue: [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]]}], position: 11500, duration: 250 },
            { id: "eid609", tween: [ "gradient", "${_bullet4}", "background-image", [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]], { fromValue: [50,50,false,'closest-corner',[['rgba(234,217,59,1.00)',0],['rgba(229,189,17,1.00)',56],['rgba(253,132,25,1.00)',100]]]}], position: 11802, duration: 0 },
            { id: "eid606", tween: [ "color", "${_bullet4}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 11500, duration: 0 },
            { id: "eid607", tween: [ "color", "${_bullet4}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 11802, duration: 0 },
            { id: "eid520", tween: [ "gradient", "${_bullet1}", "background-image", [50,50,false,'closest-corner',[['rgba(234,217,59,1.00)',0],['rgba(229,189,17,1.00)',56],['rgba(253,132,25,1.00)',100]]], { fromValue: [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]]}], position: 9860, duration: 250 },
            { id: "eid584", tween: [ "gradient", "${_bullet1}", "background-image", [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]], { fromValue: [50,50,false,'closest-corner',[['rgba(234,217,59,1.00)',0],['rgba(229,189,17,1.00)',56],['rgba(253,132,25,1.00)',100]]]}], position: 10162, duration: 0 },
            { id: "eid553", tween: [ "style", "${_m1}", "top", '-236px', { fromValue: '-236px'}], position: 0, duration: 0 },
            { id: "eid571", tween: [ "style", "${_m1}", "top", '257px', { fromValue: '253px'}], position: 1613, duration: 799 },
            { id: "eid670", tween: [ "style", "${_m1}", "top", '-149px', { fromValue: '253px'}], position: 30000, duration: 0 },
            { id: "eid423", tween: [ "style", "${_menu_bg}", "opacity", '1', { fromValue: '0'}], position: 1437, duration: 81 },
            { id: "eid539", tween: [ "transform", "${_bullet2}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 10500, duration: 250 },
            { id: "eid591", tween: [ "transform", "${_bullet2}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 10802, duration: 0 },
            { id: "eid610", tween: [ "transform", "${_bullet4}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 11500, duration: 250 },
            { id: "eid611", tween: [ "transform", "${_bullet4}", "rotateZ", '0deg', { fromValue: '-45deg'}], position: 11802, duration: 0 },
            { id: "eid657", tween: [ "style", "${_m3}", "left", '318px', { fromValue: '318px'}], position: 2750, duration: 0 },
            { id: "eid440", tween: [ "style", "${_menu_sorkal}", "top", '-172px', { fromValue: '-654px'}], position: 1518, duration: 95 },
            { id: "eid443", tween: [ "style", "${_menu_sorkal}", "top", '-654px', { fromValue: '-172px'}], position: 30000, duration: 0 },
            { id: "eid593", tween: [ "gradient", "${_bullet3}", "background-image", [50,50,false,'closest-corner',[['rgba(234,217,59,1.00)',0],['rgba(229,189,17,1.00)',56],['rgba(253,132,25,1.00)',100]]], { fromValue: [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]]}], position: 11000, duration: 250 },
            { id: "eid604", tween: [ "gradient", "${_bullet3}", "background-image", [50,50,false,'closest-corner',[['rgba(3,3,3,1.00)',0],['rgba(3,3,3,1.00)',100]]], { fromValue: [50,50,false,'closest-corner',[['rgba(234,217,59,1.00)',0],['rgba(229,189,17,1.00)',56],['rgba(253,132,25,1.00)',100]]]}], position: 11302, duration: 0 },
            { id: "eid509", tween: [ "color", "${_bullet1}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 9860, duration: 0 },
            { id: "eid583", tween: [ "color", "${_bullet1}", "background-color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 10162, duration: 0 },
            { id: "eid457", tween: [ "style", "${_m2}", "opacity", '1', { fromValue: '0'}], position: 1613, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-7869254");
