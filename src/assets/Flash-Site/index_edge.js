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
            id:'load_bara',
            type:'group',
            rect:['241px','-1150px','784','1217','auto','auto'],
            c:[
            {
               id:'loadline',
               type:'image',
               rect:['372px','198px','142px','765px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"loadline.png",'0px','0px']
            },
            {
               id:'loading2',
               type:'image',
               rect:['296px','932px','286px','110px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"loading2.gif",'0px','0px']
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
            id:'kathaikal',
            type:'image',
            rect:['200px','-84.2%','217px','605px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"kathaikal.png",'0px','0px']
         },
         {
            id:'eyes',
            type:'image',
            rect:['436px','-683px','230px','641px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"eyes.png",'0px','0px']
         },
         {
            id:'pupils',
            display:'none',
            type:'rect',
            rect:['214','164','auto','auto','auto','auto']
         },
         {
            id:'eye',
            display:'none',
            type:'rect',
            rect:['320px','58px','auto','auto','auto','auto'],
            userClass:"eye"
         },
         {
            id:'paadalgal2',
            type:'image',
            rect:['892px','-471px','249px','460px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"paadalgal2.png",'0px','0px']
         },
         {
            id:'sorkal',
            type:'image',
            rect:['451px','-628px','249px','605px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"sorkal.png",'0px','0px']
         },
         {
            id:'sorkalCopy',
            type:'image',
            rect:['451px','-628px','249px','605px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"sorkal.png",'0px','0px']
         },
         {
            id:'solvangi',
            type:'image',
            rect:['1078px','-738px','230px','727px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"solvangi.png",'0px','0px']
         },
         {
            id:'vilayatu',
            type:'image',
            rect:['61px','-445px','344px','457px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"vilayatu.png",'0px','0px']
         },
         {
            id:'elakanam',
            type:'image',
            rect:['782px','-806px','301px','752px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"elakanam.png",'0px','0px']
         },
         {
            id:'menu_bg',
            type:'rect',
            rect:['315px','-295px','872px','478px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'eq_pause',
            display:'none',
            type:'image',
            rect:['0','0','700px','248px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"equalizer.gif",'0px','0px']
         },
         {
            id:'eq_play',
            display:'none',
            type:'image',
            rect:['0','0','700px','248px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"equalizer.gif",'0px','0px']
         },
         {
            id:'sound',
            display:'none',
            type:'text',
            rect:['140','696px','auto','auto','auto','auto'],
            text:"Sound",
            font:['Arial, Helvetica, sans-serif',13,"rgba(0,0,0,1)","700","none",""]
         },
         {
            id:'fct',
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
         },
         {
            id:'eluthukal2',
            type:'image',
            rect:['683px','-457px','202px','368px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"eluthukal.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'pupils',
            symbolName:'pupils'
         },
         {
            id:'eye',
            symbolName:'Symbol_1'
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
         "${_elakanam}": [
            ["style", "height", '752px'],
            ["style", "top", '-806px'],
            ["style", "left", '782px'],
            ["style", "width", '301px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-106.64%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_loading2}": [
            ["style", "height", '110px'],
            ["style", "top", '932px'],
            ["style", "left", '296px'],
            ["style", "width", '286px']
         ],
         "${_sorkalCopy}": [
            ["style", "top", '-628px'],
            ["style", "height", '605px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '451px'],
            ["style", "width", '249px']
         ],
         "${_rights}": [
            ["style", "top", '51.36%'],
            ["style", "width", '60.47%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "font-weight", '700'],
            ["style", "height", '13.28%'],
            ["style", "opacity", '1'],
            ["style", "left", '49.1%'],
            ["style", "font-size", '10px']
         ],
         "${_shape208}": [
            ["style", "top", '-6px'],
            ["style", "height", '101.56%'],
            ["style", "background-size", [100,'auto'], {valueTemplate:'@@0@@% @@1@@'} ],
            ["style", "left", '-10px'],
            ["style", "width", '101.52%']
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
         "${_sorkal}": [
            ["style", "top", '-628px'],
            ["style", "height", '605px'],
            ["style", "left", '451px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '249px']
         ],
         "${_logorect}": [
            ["style", "top", '31.56%'],
            ["style", "height", '36.87%'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0%'],
            ["style", "width", '110.38%']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_fct}": [
            ["style", "display", 'block']
         ],
         "${_vilayatu}": [
            ["style", "top", '-445px'],
            ["style", "height", '457px'],
            ["style", "left", '61px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '344px']
         ],
         "${_pupils}": [
            ["style", "top", '266px'],
            ["transform", "scaleY", '0.6'],
            ["style", "display", 'none'],
            ["style", "left", '461px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_solvangi}": [
            ["style", "height", '727px'],
            ["style", "top", '-738px'],
            ["style", "left", '1111px'],
            ["style", "width", '230px']
         ],
         "${_loadline}": [
            ["style", "top", '198px'],
            ["style", "left", '372px']
         ],
         "${_fct_logo}": [
            ["style", "top", '0px'],
            ["style", "height", '28px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_annai_no}": [
            ["style", "top", '37.18%'],
            ["style", "font-size", '10px'],
            ["style", "opacity", '1'],
            ["style", "font-weight", '700'],
            ["style", "height", '14.75%'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '49.1%'],
            ["style", "width", '52.64%']
         ],
         "${_eye}": [
            ["style", "top", '147px'],
            ["transform", "scaleY", '0.19608'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.19608'],
            ["style", "left", '384px'],
            ["style", "display", 'none']
         ],
         "${_eluthukal2}": [
            ["style", "top", '-457px'],
            ["style", "height", '368px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '677px'],
            ["style", "width", '202px']
         ],
         "${_menu_bg}": [
            ["style", "top", '-450px'],
            ["color", "background-color", 'rgba(239,239,239,1.00)'],
            ["style", "height", '427px'],
            ["style", "opacity", '0'],
            ["style", "left", '264px'],
            ["style", "width", '945px']
         ],
         "${_eyes}": [
            ["style", "height", '641px'],
            ["style", "top", '-683px'],
            ["style", "left", '436px'],
            ["style", "width", '230px']
         ],
         "${_eq_play}": [
            ["style", "top", '692px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "overflow", 'visible'],
            ["style", "height", '25px'],
            ["style", "opacity", '0'],
            ["style", "left", '182px'],
            ["style", "width", '63px']
         ],
         "${_eq_pause}": [
            ["style", "top", '692px'],
            ["style", "height", '25px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '182px'],
            ["style", "width", '63px']
         ],
         "${_load_bara}": [
            ["style", "top", '-1178px'],
            ["style", "left", '241px']
         ],
         "${_logo_batch}": [
            ["style", "left", '3.66%'],
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "max-width", 'none'],
            ["style", "width", '1366px']
         ],
         "${_paadalgal2}": [
            ["style", "height", '460px'],
            ["style", "top", '-466px'],
            ["style", "left", '892px'],
            ["style", "width", '249px']
         ],
         "${_sound}": [
            ["style", "top", '703px'],
            ["style", "font-weight", '700'],
            ["style", "display", 'none'],
            ["style", "font-size", '13px']
         ],
         "${_kathaikal}": [
            ["style", "height", '605px'],
            ["style", "top", '-84.24%'],
            ["style", "left", '200px'],
            ["style", "width", '217px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 91626,
         autoPlay: true,
         labels: {
            "slow": 2250,
            "stage_rev": 6185,
            "hide menu": 30000,
            "pause": 88750,
            "play": 89000,
            "sorkal_on": 89394,
            "sorkal_off": 89894,
            "vilayatu_on": 90867,
            "vilayatu_off": 91216,
            "ezhuthu_on": 91356
         },
         timeline: [
            { id: "eid24", tween: [ "style", "${_sidecolor}", "opacity", '1', { fromValue: '1'}], position: 1529, duration: 0 },
            { id: "eid747", tween: [ "style", "${_sound}", "top", '703px', { fromValue: '703px'}], position: 2175, duration: 0 },
            { id: "eid793", tween: [ "style", "${_eluthukal2}", "left", '677px', { fromValue: '677px'}], position: 91356, duration: 0 },
            { id: "eid449", tween: [ "color", "${_menu_bg}", "background-color", 'rgba(239,239,239,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(239,239,239,1.00)'}], position: 8750, duration: 0 },
            { id: "eid770", tween: [ "style", "${_eye}", "display", 'block', { fromValue: 'none'}], position: 4587, duration: 0 },
            { id: "eid773", tween: [ "style", "${_eye}", "display", 'none', { fromValue: 'block'}], position: 6185, duration: 0 },
            { id: "eid80", tween: [ "style", "${_vilayatu}", "top", '-196px', { fromValue: '-445px'}], position: 3500, duration: 250 },
            { id: "eid82", tween: [ "style", "${_vilayatu}", "top", '-89px', { fromValue: '-196px'}], position: 3750, duration: 417 },
            { id: "eid84", tween: [ "style", "${_vilayatu}", "top", '-183px', { fromValue: '-89px'}], position: 4167, duration: 420 },
            { id: "eid153", tween: [ "style", "${_vilayatu}", "top", '-89px', { fromValue: '-183px'}], position: 6185, duration: 127 },
            { id: "eid152", tween: [ "style", "${_vilayatu}", "top", '-196px', { fromValue: '-89px'}], position: 6312, duration: 126 },
            { id: "eid151", tween: [ "style", "${_vilayatu}", "top", '-445px', { fromValue: '-196px'}], position: 6438, duration: 75 },
            { id: "eid184", tween: [ "style", "${_vilayatu}", "top", '-173px', { fromValue: '-445px'}], position: 30000, duration: 0 },
            { id: "eid778", tween: [ "style", "${_vilayatu}", "top", '-143px', { fromValue: '-173px'}], position: 90889, duration: 111 },
            { id: "eid779", tween: [ "style", "${_vilayatu}", "top", '-183px', { fromValue: '-143px'}], position: 91000, duration: 97 },
            { id: "eid782", tween: [ "style", "${_vilayatu}", "top", '-173px', { fromValue: '-183px'}], position: 91097, duration: 98 },
            { id: "eid744", tween: [ "style", "${_eq_pause}", "height", '25px', { fromValue: '25px'}], position: 2175, duration: 0 },
            { id: "eid745", tween: [ "style", "${_eq_pause}", "height", '25px', { fromValue: '25px'}], position: 88750, duration: 0 },
            { id: "eid740", tween: [ "style", "${_eq_pause}", "height", '25px', { fromValue: '25px'}], position: 89129, duration: 0 },
            { id: "eid785", tween: [ "style", "${_sorkalCopy}", "top", '-236px', { fromValue: '-628px'}], position: 3000, duration: 250 },
            { id: "eid786", tween: [ "style", "${_sorkalCopy}", "top", '-128px', { fromValue: '-236px'}], position: 3250, duration: 1337 },
            { id: "eid787", tween: [ "style", "${_sorkalCopy}", "top", '-236px', { fromValue: '-128px'}], position: 6185, duration: 198 },
            { id: "eid788", tween: [ "style", "${_sorkalCopy}", "top", '-628px', { fromValue: '-236px'}], position: 6383, duration: 37 },
            { id: "eid789", tween: [ "style", "${_sorkalCopy}", "top", '-128px', { fromValue: '-628px'}], position: 30000, duration: 0 },
            { id: "eid790", tween: [ "style", "${_sorkalCopy}", "top", '-86px', { fromValue: '-128px'}], position: 89394, duration: 124 },
            { id: "eid791", tween: [ "style", "${_sorkalCopy}", "top", '-154px', { fromValue: '-86px'}], position: 89518, duration: 127 },
            { id: "eid792", tween: [ "style", "${_sorkalCopy}", "top", '-128px', { fromValue: '-154px'}], position: 89645, duration: 101 },
            { id: "eid72", tween: [ "style", "${_sorkal}", "top", '-236px', { fromValue: '-628px'}], position: 3000, duration: 250 },
            { id: "eid73", tween: [ "style", "${_sorkal}", "top", '-128px', { fromValue: '-236px'}], position: 3250, duration: 1337 },
            { id: "eid158", tween: [ "style", "${_sorkal}", "top", '-236px', { fromValue: '-128px'}], position: 6185, duration: 198 },
            { id: "eid157", tween: [ "style", "${_sorkal}", "top", '-628px', { fromValue: '-236px'}], position: 6383, duration: 37 },
            { id: "eid727", tween: [ "style", "${_sorkal}", "top", '-128px', { fromValue: '-628px'}], position: 30000, duration: 0 },
            { id: "eid534", tween: [ "style", "${_sorkal}", "top", '-86px', { fromValue: '-128px'}], position: 89394, duration: 124 },
            { id: "eid535", tween: [ "style", "${_sorkal}", "top", '-154px', { fromValue: '-86px'}], position: 89518, duration: 127 },
            { id: "eid536", tween: [ "style", "${_sorkal}", "top", '-128px', { fromValue: '-154px'}], position: 89645, duration: 101 },
            { id: "eid335", tween: [ "style", "${_paadalgal2}", "top", '-94px', { fromValue: '-466px'}], position: 2865, duration: 135 },
            { id: "eid336", tween: [ "style", "${_paadalgal2}", "top", '-18px', { fromValue: '-94px'}], position: 3000, duration: 611 },
            { id: "eid337", tween: [ "style", "${_paadalgal2}", "top", '-72px', { fromValue: '-18px'}], position: 3611, duration: 389 },
            { id: "eid338", tween: [ "style", "${_paadalgal2}", "top", '-98px', { fromValue: '-72px'}], position: 4000, duration: 167 },
            { id: "eid339", tween: [ "style", "${_paadalgal2}", "top", '-72px', { fromValue: '-98px'}], position: 4167, duration: 420 },
            { id: "eid343", tween: [ "style", "${_paadalgal2}", "top", '-89px', { fromValue: '-72px'}], position: 6185, duration: 155 },
            { id: "eid347", tween: [ "style", "${_paadalgal2}", "top", '-97px', { fromValue: '-89px'}], position: 6340, duration: 80 },
            { id: "eid344", tween: [ "style", "${_paadalgal2}", "top", '-72px', { fromValue: '-97px'}], position: 6420, duration: 93 },
            { id: "eid340", tween: [ "style", "${_paadalgal2}", "top", '-18px', { fromValue: '-72px'}], position: 6514, duration: 217 },
            { id: "eid341", tween: [ "style", "${_paadalgal2}", "top", '-94px', { fromValue: '-18px'}], position: 6731, duration: 341 },
            { id: "eid342", tween: [ "style", "${_paadalgal2}", "top", '-466px', { fromValue: '-94px'}], position: 7073, duration: 75 },
            { id: "eid346", tween: [ "style", "${_paadalgal2}", "top", '-72px', { fromValue: '-466px'}], position: 30000, duration: 0 },
            { id: "eid641", tween: [ "style", "${_eq_pause}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid642", tween: [ "style", "${_eq_pause}", "display", 'block', { fromValue: 'none'}], position: 2175, duration: 0 },
            { id: "eid687", tween: [ "style", "${_eq_pause}", "display", 'block', { fromValue: 'block'}], position: 88750, duration: 0 },
            { id: "eid728", tween: [ "style", "${_eq_pause}", "display", 'block', { fromValue: 'block'}], position: 88877, duration: 0 },
            { id: "eid729", tween: [ "style", "${_eq_pause}", "display", 'block', { fromValue: 'block'}], position: 89000, duration: 0 },
            { id: "eid712", tween: [ "style", "${_eq_pause}", "display", 'block', { fromValue: 'block'}], position: 89129, duration: 0 },
            { id: "eid32", tween: [ "style", "${_logo_batch}", "opacity", '1', { fromValue: '0.000000'}], position: 1829, duration: 346 },
            { id: "eid718", tween: [ "style", "${_eq_play}", "display", 'block', { fromValue: 'none'}], position: 88877, duration: 0 },
            { id: "eid730", tween: [ "style", "${_eq_play}", "display", 'block', { fromValue: 'block'}], position: 89000, duration: 0 },
            { id: "eid731", tween: [ "style", "${_eq_play}", "display", 'none', { fromValue: 'block'}], position: 89129, duration: 0 },
            { id: "eid774", tween: [ "style", "${_pupils}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid756", tween: [ "style", "${_pupils}", "display", 'none', { fromValue: 'none'}], position: 4587, duration: 0, easing: "easeOutExpo" },
            { id: "eid762", tween: [ "style", "${_pupils}", "display", 'none', { fromValue: 'none'}], position: 6185, duration: 0 },
            { id: "eid763", tween: [ "style", "${_pupils}", "display", 'block', { fromValue: 'none'}], position: 88750, duration: 0 },
            { id: "eid659", tween: [ "style", "${_sound}", "display", 'block', { fromValue: 'none'}], position: 2175, duration: 0 },
            { id: "eid76", tween: [ "style", "${_solvangi}", "top", '-198px', { fromValue: '-738px'}], position: 3250, duration: 250 },
            { id: "eid77", tween: [ "style", "${_solvangi}", "top", '-98px', { fromValue: '-198px'}], position: 3500, duration: 1087 },
            { id: "eid155", tween: [ "style", "${_solvangi}", "top", '-198px', { fromValue: '-98px'}], position: 6185, duration: 471 },
            { id: "eid154", tween: [ "style", "${_solvangi}", "top", '-738px', { fromValue: '-198px'}], position: 6656, duration: 108 },
            { id: "eid199", tween: [ "style", "${_solvangi}", "top", '-98px', { fromValue: '-738px'}], position: 30000, duration: 0 },
            { id: "eid90", tween: [ "style", "${_load_bara}", "top", '-776px', { fromValue: '-1178px'}], position: 0, duration: 250 },
            { id: "eid91", tween: [ "style", "${_load_bara}", "top", '-614px', { fromValue: '-776px'}], position: 279, duration: 1055 },
            { id: "eid92", tween: [ "style", "${_load_bara}", "top", '-1150px', { fromValue: '-614px'}], position: 1334, duration: 166 },
            { id: "eid28", tween: [ "style", "${_sidecolor}", "top", '-1.43%', { fromValue: '-106.64%'}], position: 1529, duration: 471 },
            { id: "eid87", tween: [ "style", "${_elakanam}", "top", '-238px', { fromValue: '-806px'}], position: 3750, duration: 250 },
            { id: "eid88", tween: [ "style", "${_elakanam}", "top", '-144px', { fromValue: '-238px'}], position: 4000, duration: 587 },
            { id: "eid150", tween: [ "style", "${_elakanam}", "top", '-238px', { fromValue: '-144px'}], position: 6185, duration: 55 },
            { id: "eid149", tween: [ "style", "${_elakanam}", "top", '-806px', { fromValue: '-238px'}], position: 6240, duration: 24 },
            { id: "eid183", tween: [ "style", "${_elakanam}", "top", '-144px', { fromValue: '-806px'}], position: 30000, duration: 0 },
            { id: "eid752", tween: [ "style", "${_fct}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid753", tween: [ "style", "${_fct}", "display", 'block', { fromValue: 'none'}], position: 2175, duration: 0 },
            { id: "eid30", tween: [ "style", "${_sidecolor}", "left", '0%', { fromValue: '0%'}], position: 1529, duration: 0 },
            { id: "eid708", tween: [ "style", "${_eq_pause}", "opacity", '0.26009485467536', { fromValue: '1'}], position: 88750, duration: 127 },
            { id: "eid722", tween: [ "style", "${_eq_pause}", "opacity", '1', { fromValue: '0.26009485467536'}], position: 89000, duration: 129 },
            { id: "eid38", tween: [ "style", "${_eluthukal2}", "top", '-127px', { fromValue: '-457px'}], position: 2250, duration: 135 },
            { id: "eid39", tween: [ "style", "${_eluthukal2}", "top", '-35px', { fromValue: '-127px'}], position: 2385, duration: 2203 },
            { id: "eid169", tween: [ "style", "${_eluthukal2}", "top", '-127px', { fromValue: '-35px'}], position: 6185, duration: 1488 },
            { id: "eid168", tween: [ "style", "${_eluthukal2}", "top", '-457px', { fromValue: '-127px'}], position: 7673, duration: 91 },
            { id: "eid191", tween: [ "style", "${_eluthukal2}", "top", '-35px', { fromValue: '-457px'}], position: 30000, duration: 0 },
            { id: "eid796", tween: [ "style", "${_eluthukal2}", "top", '-5px', { fromValue: '-35px'}], position: 91356, duration: 121 },
            { id: "eid797", tween: [ "style", "${_eluthukal2}", "top", '-35px', { fromValue: '-5px'}], position: 91477, duration: 149 },
            { id: "eid423", tween: [ "style", "${_menu_bg}", "opacity", '1', { fromValue: '0'}], position: 8574, duration: 81 },
            { id: "eid44", tween: [ "style", "${_kathaikal}", "top", '-19.66%', { fromValue: '-84.24%'}], position: 2385, duration: 282 },
            { id: "eid45", tween: [ "style", "${_kathaikal}", "top", '-12.76%', { fromValue: '-19.66%'}], position: 2667, duration: 1921 },
            { id: "eid173", tween: [ "style", "${_kathaikal}", "top", '-19.66%', { fromValue: '-12.76%'}], position: 6185, duration: 1289 },
            { id: "eid172", tween: [ "style", "${_kathaikal}", "top", '-84.24%', { fromValue: '-19.66%'}], position: 7474, duration: 189 },
            { id: "eid192", tween: [ "style", "${_kathaikal}", "top", '-12.76%', { fromValue: '-84.24%'}], position: 30000, duration: 0 },
            { id: "eid49", tween: [ "style", "${_eyes}", "top", '-363px', { fromValue: '-683px'}], position: 2667, duration: 198 },
            { id: "eid52", tween: [ "style", "${_eyes}", "top", '-275px', { fromValue: '-363px'}], position: 2865, duration: 1722 },
            { id: "eid165", tween: [ "style", "${_eyes}", "top", '-363px', { fromValue: '-275px'}], position: 6185, duration: 1042 },
            { id: "eid164", tween: [ "style", "${_eyes}", "top", '-683px', { fromValue: '-363px'}], position: 7227, duration: 120 },
            { id: "eid198", tween: [ "style", "${_eyes}", "top", '-275px', { fromValue: '-683px'}], position: 30000, duration: 0 },
            { id: "eid742", tween: [ "style", "${_eq_pause}", "width", '63px', { fromValue: '63px'}], position: 2175, duration: 0 },
            { id: "eid746", tween: [ "style", "${_eq_pause}", "width", '63px', { fromValue: '63px'}], position: 88750, duration: 0 },
            { id: "eid741", tween: [ "style", "${_eq_pause}", "width", '63px', { fromValue: '63px'}], position: 89129, duration: 0 },
            { id: "eid717", tween: [ "style", "${_eq_play}", "opacity", '0', { fromValue: '0'}], position: 88877, duration: 0 },
            { id: "eid719", tween: [ "style", "${_eq_play}", "opacity", '0', { fromValue: '0'}], position: 89000, duration: 0 }         ]
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
},
"Symbol_1": {
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
      rect: ['0px','0px','235px','235px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy',
      stroke: [10,'rgba(232,232,232,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['0px','0px','0px','0px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy2',
      stroke: [10,'rgba(232,232,232,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['20px','41px','82px','82px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse7',
      stroke: [10,'rgb(62, 26, 26)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['23px','49px','42px','42px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse8',
      stroke: [10,'rgb(62, 26, 26)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse7}": [
            ["style", "top", '41px'],
            ["style", "height", '82px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '82px']
         ],
         "${symbolSelector}": [
            ["style", "height", '255px'],
            ["style", "width", '255px']
         ],
         "${_EllipseCopy}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '10px'],
            ["color", "border-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_EllipseCopy2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(255,255,255,0)'],
            ["style", "left", '0px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '0px'],
            ["color", "border-color", 'rgba(255,255,255,0)'],
            ["style", "border-width", '10px'],
            ["style", "width", '0px']
         ],
         "${_Ellipse8}": [
            ["style", "top", '49px'],
            ["style", "height", '42px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '23px'],
            ["style", "width", '42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "color", "${_EllipseCopy}", "border-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "color", "${_EllipseCopy}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 }         ]
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
