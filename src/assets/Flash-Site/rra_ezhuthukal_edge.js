/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['baminiplain, Arial, sans-serif']='<link rel=\"stylesheet\" media=\"screen\" title=\"\" href=\"font/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />';
   fonts['MyCustomFont']='@font-face {  font-family: MyCustomFont;  src: url(\'font/Baamini.ttf\'); /* Edit this line */}';
   fonts['baamini']='';


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
            rect:['0px','94px','1370px','578px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wrapper.png",'50%','50%','1366px','768px'],
            transform:[[],[],[],['1','1.32766']]
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
            transform:[[],[],[],['1','0.90508']],
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
            rect:['221px','2px','1110px','717px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_wrapper.png",'0px','0px']
         },
         {
            id:'home',
            type:'image',
            rect:['293px','42px','71px','71px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"home.png",'0px','0px']
         },
         {
            id:'fct',
            type:'group',
            rect:['74px','732px','227','28','auto','auto'],
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
            id:'mystage',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'pin',
            type:'group',
            rect:['277px','124px','192','39','auto','auto'],
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
            },
            {
               id:'header',
               type:'text',
               rect:['194px','-3px','765px','31px','auto','auto'],
               text:"glq;fSk; tpLgl;l vOj;Jf;fis ,izj;jy;",
               align:"center",
               font:['baminiplain, Arial, sans-serif',35,"rgba(253,123,22,1.00)","800","none","normal"]
            }]
         },
         {
            id:'Text3',
            type:'text',
            rect:['0px','8px','auto','auto','auto','auto'],
            text:"w;",
            align:"left",
            font:['baamini',70,"rgba(255,255,255,1)","bold","none","normal"]
         },
         {
            id:'quesText',
            type:'text',
            rect:['109px','6px','115px','auto','auto','auto'],
            text:"m",
            align:"left",
            font:['baamini',70,"rgba(255,255,255,1)","bold","none","normal"]
         },
         {
            id:'Text4Copy3',
            type:'text',
            rect:['56px','7px','auto','auto','auto','auto'],
            text:"+",
            align:"left",
            font:['Arial, Helvetica, sans-serif',55,"rgba(255,255,255,1)","bold","none","normal"]
         },
         {
            id:'Text4Copy2',
            type:'text',
            rect:['210px','8px','auto','auto','auto','auto'],
            text:"=",
            align:"left",
            font:['Arial, Helvetica, sans-serif',55,"rgba(255,255,255,1)","bold","none","normal"]
         },
         {
            id:'dropSym',
            type:'rect',
            rect:['476px','232px','180px','117px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'question',
            type:'text',
            rect:['257px','0px','197px','87px','auto','auto'],
            text:"?",
            align:"center",
            font:['baminiplain, Arial, sans-serif',70,"rgba(255,255,255,1)","bold","none","normal"]
         },
         {
            id:'a',
            type:'text',
            rect:['758px','154px','77px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            userClass:"a",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'aa',
            type:'text',
            rect:['758px','210px','77px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'i',
            type:'text',
            rect:['758px','267px','77px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'ee',
            type:'text',
            rect:['758px','323px','77px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'u',
            type:'text',
            rect:['758px','378px','77px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'oo',
            type:'text',
            rect:['758px','432px','77px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'e',
            type:'text',
            rect:['856px','156px','104px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'ea',
            type:'text',
            rect:['856px','212px','104px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'ai',
            type:'text',
            rect:['856px','269px','104px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'o',
            type:'text',
            rect:['856px','323px','104px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'O',
            type:'text',
            rect:['856px','380px','104px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'av',
            type:'text',
            rect:['856px','434px','104px','54px','auto','auto'],
            cursor:['pointer'],
            align:"left",
            font:['baamini',55,"rgba(255,255,255,1.00)","700","none",""]
         },
         {
            id:'correct',
            type:'rect',
            rect:['356','350','auto','auto','auto','auto']
         },
         {
            id:'incorrect',
            type:'rect',
            rect:['329','358','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'incorrect',
            symbolName:'incorrect'
         },
         {
            id:'mystage',
            symbolName:'mystage'
         },
         {
            id:'pupils',
            symbolName:'pupils'
         },
         {
            id:'correct',
            symbolName:'Symbol_1'
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
         "${_ee}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1028px'],
            ["style", "font-size", '55px'],
            ["style", "top", '428px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '376px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '545px']
         ],
         "${_annailogo}": [
            ["style", "top", '0%'],
            ["style", "left", '-0.03%']
         ],
         "${_txt_fct}": [
            ["style", "top", '7px'],
            ["style", "left", '90px'],
            ["style", "font-size", '11px']
         ],
         "${_pwd_fct}": [
            ["style", "top", '8px'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '0px'],
            ["style", "font-size", '9px']
         ],
         "${_aiCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '856px'],
            ["style", "font-size", '55px'],
            ["style", "top", '269px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pinselga}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '24px'],
            ["style", "font-size", '30px']
         ],
         "${_fct}": [
            ["style", "display", 'block'],
            ["style", "left", '74px'],
            ["style", "top", '732px']
         ],
         "${_uCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '758px'],
            ["style", "width", '77px'],
            ["style", "top", '378px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '310px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '768px'],
            ["style", "width", '1366px']
         ],
         "${_Text4}": [
            ["style", "top", '252px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '429px']
         ],
         "${_ea}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1116px'],
            ["style", "width", '104px'],
            ["style", "top", '317px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_fwd}": [
            ["style", "height", '17px'],
            ["style", "top", '11px'],
            ["style", "left", '0px'],
            ["style", "width", '19px']
         ],
         "${_fct_logo}": [
            ["style", "top", '0px'],
            ["style", "height", '28px'],
            ["style", "left", '59px'],
            ["style", "width", '30px']
         ],
         "${_avCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '856px'],
            ["style", "width", '104px'],
            ["style", "top", '434px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_av}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1116px'],
            ["style", "width", '104px'],
            ["style", "top", '539px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_mystage}": [
            ["style", "left", '266px'],
            ["style", "top", '114px']
         ],
         "${_eeCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '758px'],
            ["style", "font-size", '55px'],
            ["style", "top", '323px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_header}": [
            ["color", "color", 'rgba(253,123,22,1)'],
            ["style", "font-weight", '800'],
            ["style", "left", '194px'],
            ["style", "font-size", '35px'],
            ["style", "top", '-3px'],
            ["style", "text-align", 'center'],
            ["style", "height", '31px'],
            ["style", "opacity", '1'],
            ["style", "width", '765px']
         ],
         "${_oCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '856px'],
            ["style", "font-size", '55px'],
            ["style", "top", '323px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '104px']
         ],
         "${_correct}": [
            ["style", "display", 'block'],
            ["style", "left", '632px'],
            ["style", "top", '464px']
         ],
         "${_cloud1}": [
            ["style", "height", '258px'],
            ["style", "top", '-118px'],
            ["style", "left", '1111px'],
            ["style", "width", '258px']
         ],
         "${_dropSym}": [
            ["style", "top", '355px'],
            ["style", "height", '117px'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "left", '744px'],
            ["style", "width", '180px']
         ],
         "${_aCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '758px'],
            ["style", "width", '77px'],
            ["style", "top", '154px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '377px'],
            ["style", "font-family", 'Arial, Helvetica, sans-serif'],
            ["style", "left", '689px']
         ],
         "${_incorrect}": [
            ["style", "top", '464px'],
            ["transform", "scaleY", '0.86139'],
            ["style", "left", '622px'],
            ["transform", "scaleX", '0.86139']
         ],
         "${_ai}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1116px'],
            ["style", "font-size", '55px'],
            ["style", "top", '374px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
         ],
         "${_e}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1116px'],
            ["style", "font-size", '55px'],
            ["style", "top", '272px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
         ],
         "${_quesText}": [
            ["style", "top", '375px'],
            ["style", "font-size", '70px'],
            ["style", "font-family", 'baamini'],
            ["style", "left", '588px'],
            ["style", "width", '115px']
         ],
         "${_sidecolor}": [
            ["style", "top", '-1.43%'],
            ["style", "height", '102.6%'],
            ["style", "opacity", '1'],
            ["style", "left", '0%'],
            ["style", "width", '3.67%']
         ],
         "${_question}": [
            ["style", "top", '369px'],
            ["style", "width", '180px'],
            ["style", "text-align", 'center'],
            ["style", "line-height", '107px'],
            ["style", "height", '87px'],
            ["style", "font-family", 'baminiplain, Arial, sans-serif'],
            ["style", "left", '736px'],
            ["style", "font-size", '70px']
         ],
         "${_home}": [
            ["style", "top", '42px'],
            ["style", "height", '71px'],
            ["style", "left", '293px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '71px']
         ],
         "${_aaCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '758px'],
            ["style", "font-size", '55px'],
            ["style", "top", '210px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
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
         "${_ooCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '758px'],
            ["style", "font-size", '55px'],
            ["style", "top", '432px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_eaCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '856px'],
            ["style", "width", '104px'],
            ["style", "top", '212px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
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
         "${_u}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1028px'],
            ["style", "width", '77px'],
            ["style", "top", '484px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_fct_2}": [
            ["style", "height", '26px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '258px']
         ],
         "${_eCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '856px'],
            ["style", "font-size", '55px'],
            ["style", "top", '156px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
         ],
         "${_cloud2}": [
            ["style", "height", '258px'],
            ["style", "top", '-127px'],
            ["style", "left", '0px'],
            ["style", "width", '258px']
         ],
         "${_answrd2Copy2}": [
            ["style", "top", '165px'],
            ["style", "height", '132px'],
            ["style", "width", 'auto'],
            ["style", "left", '-4px'],
            ["style", "font-size", '45px']
         ],
         "${_o}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1116px'],
            ["style", "font-size", '55px'],
            ["style", "top", '428px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '104px']
         ],
         "${_pupils}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '0.6'],
            ["style", "left", '593px'],
            ["transform", "scaleX", '0.63107']
         ],
         "${_OCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '856px'],
            ["style", "font-size", '55px'],
            ["style", "top", '380px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
         ],
         "${_a}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1026px'],
            ["style", "width", '77px'],
            ["style", "top", '270px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text3}": [
            ["style", "top", '379px'],
            ["style", "font-family", 'baamini'],
            ["style", "left", '479px'],
            ["style", "font-size", '70px']
         ],
         "${_wrapper}": [
            ["style", "top", '56px'],
            ["transform", "scaleY", '1.32766'],
            ["style", "height", '578px'],
            ["style", "background-position", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "left", '66px'],
            ["style", "width", '1370px']
         ],
         "${_i}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1028px'],
            ["style", "width", '77px'],
            ["style", "top", '372px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text4Copy}": [
            ["style", "top", '251px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '275px']
         ],
         "${_oo}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1028px'],
            ["style", "font-size", '55px'],
            ["style", "top", '537px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_iCopy}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '758px'],
            ["style", "width", '77px'],
            ["style", "top", '267px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'MyCustomFont'],
            ["style", "font-size", '55px'],
            ["style", "cursor", 'pointer']
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
         "${_logo_batch}": [
            ["style", "opacity", '1'],
            ["style", "left", '3.66%'],
            ["transform", "scaleY", '0.90508']
         ],
         "${_aa}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1028px'],
            ["style", "font-size", '55px'],
            ["style", "top", '315px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "width", '77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_O}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '1116px'],
            ["style", "font-size", '55px'],
            ["style", "top", '485px'],
            ["style", "text-align", 'left'],
            ["style", "height", '54px'],
            ["style", "font-family", 'baamini'],
            ["style", "width", '104px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pin}": [
            ["style", "top", '124px'],
            ["style", "left", '277px'],
            ["style", "cursor", 'pointer']
         ],
         "${_menu_wrapper}": [
            ["style", "top", '2px'],
            ["style", "height", '717px'],
            ["style", "left", '219px'],
            ["style", "width", '1110px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "greet": 125,
            "star": 233
         },
         timeline: [
            { id: "eid263", tween: [ "style", "${_u}", "top", '484px', { fromValue: '484px'}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_mystage}", "left", '266px', { fromValue: '266px'}], position: 0, duration: 0 },
            { id: "eid78", tween: [ "style", "${_wrapper}", "top", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid171", tween: [ "style", "${_menu_wrapper}", "left", '219px', { fromValue: '219px'}], position: 0, duration: 0 },
            { id: "eid187", tween: [ "style", "${_mystage}", "top", '114px', { fromValue: '114px'}], position: 0, duration: 0 }         ]
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
"mystage": {
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
      id: 'black_board',
      type: 'image',
      rect: ['178px','124px','524px','369px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/black_board.png','0px','0px']
   },
   {
      id: 'teacher',
      type: 'image',
      rect: ['9px','104px','271px','489px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/teacher.png','0px','0px']
   },
   {
      id: 'Ereser',
      type: 'image',
      rect: ['237px','406px','45px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Ereser.png','0px','0px']
   },
   {
      id: 'board2',
      type: 'image',
      rect: ['710px','103px','288px','472px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/board2.png','0px','0px']
   },
   {
      id: 'thread',
      type: 'image',
      rect: ['260px','71px','346px','65px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/thread.png','0px','0px']
   },
   {
      rect: ['843px','175px','1px','292px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_thread}": [
            ["style", "top", '71px'],
            ["style", "height", '65px'],
            ["style", "left", '260px'],
            ["style", "width", '346px']
         ],
         "${_black_board}": [
            ["style", "top", '124px'],
            ["style", "height", '369px'],
            ["style", "left", '178px'],
            ["style", "width", '524px']
         ],
         "${symbolSelector}": [
            ["style", "height", '575px'],
            ["style", "width", '1010px']
         ],
         "${_teacher}": [
            ["style", "top", '104px'],
            ["style", "height", '489px'],
            ["style", "left", '9px'],
            ["style", "width", '271px']
         ],
         "${_Rectangle}": [
            ["style", "left", '843px']
         ],
         "${_Ereser}": [
            ["style", "top", '406px'],
            ["style", "height", '33px'],
            ["style", "left", '237px'],
            ["style", "width", '45px']
         ],
         "${_board2}": [
            ["style", "top", '103px'],
            ["style", "height", '472px'],
            ["style", "left", '710px'],
            ["style", "width", '288px']
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
         ]
      }
   }
},
"incorrect": {
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
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0004',
      fill: ['rgba(0,0,0,0)','images/incorrect00043.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0005',
      fill: ['rgba(0,0,0,0)','images/incorrect00053.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0006',
      fill: ['rgba(0,0,0,0)','images/incorrect00063.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0007',
      fill: ['rgba(0,0,0,0)','images/incorrect00073.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0008',
      fill: ['rgba(0,0,0,0)','images/incorrect00083.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0009',
      fill: ['rgba(0,0,0,0)','images/incorrect00093.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0010',
      fill: ['rgba(0,0,0,0)','images/incorrect00103.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0011',
      fill: ['rgba(0,0,0,0)','images/incorrect00113.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0012',
      fill: ['rgba(0,0,0,0)','images/incorrect00123.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0013',
      fill: ['rgba(0,0,0,0)','images/incorrect00133.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0014',
      fill: ['rgba(0,0,0,0)','images/incorrect00143.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0015',
      fill: ['rgba(0,0,0,0)','images/incorrect00153.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0016',
      fill: ['rgba(0,0,0,0)','images/incorrect00163.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['20px','-3px','94px','101px','auto','auto'],
      id: 'incorrect0002',
      fill: ['rgba(0,0,0,0)','images/incorrect00023.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['31px','7px','83px','89px','auto','auto'],
      id: 'incorrect0003',
      fill: ['rgba(0,0,0,0)','images/incorrect00033.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_incorrect0006}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0016}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0002}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0015}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0009}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0004}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0005}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0003}": [
            ["style", "top", '7px'],
            ["style", "height", '89px'],
            ["style", "display", 'none'],
            ["style", "left", '31px'],
            ["style", "width", '83px']
         ],
         "${_incorrect0008}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0014}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0011}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${symbolSelector}": [
            ["style", "height", '101px'],
            ["style", "width", '141px']
         ],
         "${_incorrect0013}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0010}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0012}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ],
         "${_incorrect0007}": [
            ["style", "top", '-3px'],
            ["style", "height", '101px'],
            ["style", "display", 'none'],
            ["style", "left", '20px'],
            ["style", "width", '94px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid342", tween: [ "style", "${_incorrect0006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid346", tween: [ "style", "${_incorrect0006}", "display", 'block', { fromValue: 'none'}], position: 145, duration: 0 },
            { id: "eid371", tween: [ "style", "${_incorrect0006}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid331", tween: [ "style", "${_incorrect0002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid357", tween: [ "style", "${_incorrect0002}", "display", 'block', { fromValue: 'none'}], position: 700, duration: 0 },
            { id: "eid360", tween: [ "style", "${_incorrect0002}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid334", tween: [ "style", "${_incorrect0014}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid354", tween: [ "style", "${_incorrect0014}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0 },
            { id: "eid363", tween: [ "style", "${_incorrect0014}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid337", tween: [ "style", "${_incorrect0011}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid351", tween: [ "style", "${_incorrect0011}", "display", 'block', { fromValue: 'none'}], position: 395, duration: 0 },
            { id: "eid366", tween: [ "style", "${_incorrect0011}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid336", tween: [ "style", "${_incorrect0012}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid352", tween: [ "style", "${_incorrect0012}", "display", 'block', { fromValue: 'none'}], position: 440, duration: 0 },
            { id: "eid365", tween: [ "style", "${_incorrect0012}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid329", tween: [ "style", "${_incorrect0004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid344", tween: [ "style", "${_incorrect0004}", "display", 'block', { fromValue: 'none'}], position: 50, duration: 0 },
            { id: "eid373", tween: [ "style", "${_incorrect0004}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid341", tween: [ "style", "${_incorrect0007}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid347", tween: [ "style", "${_incorrect0007}", "display", 'block', { fromValue: 'none'}], position: 190, duration: 0 },
            { id: "eid370", tween: [ "style", "${_incorrect0007}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid333", tween: [ "style", "${_incorrect0015}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid355", tween: [ "style", "${_incorrect0015}", "display", 'block', { fromValue: 'none'}], position: 615, duration: 0 },
            { id: "eid362", tween: [ "style", "${_incorrect0015}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid339", tween: [ "style", "${_incorrect0009}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid349", tween: [ "style", "${_incorrect0009}", "display", 'block', { fromValue: 'none'}], position: 295, duration: 0 },
            { id: "eid368", tween: [ "style", "${_incorrect0009}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid338", tween: [ "style", "${_incorrect0010}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid350", tween: [ "style", "${_incorrect0010}", "display", 'block', { fromValue: 'none'}], position: 355, duration: 0 },
            { id: "eid367", tween: [ "style", "${_incorrect0010}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid343", tween: [ "style", "${_incorrect0005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid345", tween: [ "style", "${_incorrect0005}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0 },
            { id: "eid372", tween: [ "style", "${_incorrect0005}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid335", tween: [ "style", "${_incorrect0013}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid353", tween: [ "style", "${_incorrect0013}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid364", tween: [ "style", "${_incorrect0013}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid332", tween: [ "style", "${_incorrect0016}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid356", tween: [ "style", "${_incorrect0016}", "display", 'block', { fromValue: 'none'}], position: 655, duration: 0 },
            { id: "eid361", tween: [ "style", "${_incorrect0016}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid330", tween: [ "style", "${_incorrect0003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid358", tween: [ "style", "${_incorrect0003}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid359", tween: [ "style", "${_incorrect0003}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid340", tween: [ "style", "${_incorrect0008}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid348", tween: [ "style", "${_incorrect0008}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid369", tween: [ "style", "${_incorrect0008}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 }         ]
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
      type: 'image',
      display: 'none',
      rect: ['0px','8px','129px','82px','auto','auto'],
      id: 'correct0002',
      fill: ['rgba(0,0,0,0)','images/correct00022.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','8px','129px','82px','auto','auto'],
      id: 'correct0003',
      fill: ['rgba(0,0,0,0)','images/correct00032.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','8px','129px','82px','auto','auto'],
      id: 'correct0004',
      fill: ['rgba(0,0,0,0)','images/correct00042.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','8px','129px','82px','auto','auto'],
      id: 'correct0005',
      fill: ['rgba(0,0,0,0)','images/correct00052.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','8px','129px','82px','auto','auto'],
      id: 'correct0006',
      fill: ['rgba(0,0,0,0)','images/correct00062.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','8px','129px','82px','auto','auto'],
      id: 'correct0007',
      fill: ['rgba(0,0,0,0)','images/correct00072.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','8px','129px','82px','auto','auto'],
      id: 'correct0008',
      fill: ['rgba(0,0,0,0)','images/correct00082.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','8px','129px','82px','auto','auto'],
      id: 'correct0009',
      fill: ['rgba(0,0,0,0)','images/correct00092.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_correct0009}": [
            ["style", "top", '8px'],
            ["style", "height", '82px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '129px']
         ],
         "${_correct0002}": [
            ["style", "top", '8px'],
            ["style", "height", '82px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '129px']
         ],
         "${_correct0005}": [
            ["style", "top", '8px'],
            ["style", "height", '82px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '129px']
         ],
         "${_correct0006}": [
            ["style", "top", '8px'],
            ["style", "height", '82px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '129px']
         ],
         "${symbolSelector}": [
            ["style", "height", '101px'],
            ["style", "width", '129px']
         ],
         "${_correct0007}": [
            ["style", "top", '8px'],
            ["style", "height", '82px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '129px']
         ],
         "${_correct0008}": [
            ["style", "top", '8px'],
            ["style", "height", '82px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '129px']
         ],
         "${_correct0003}": [
            ["style", "top", '8px'],
            ["style", "height", '82px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '129px']
         ],
         "${_correct0004}": [
            ["style", "top", '8px'],
            ["style", "height", '82px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '129px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid310", tween: [ "style", "${_correct0002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid311", tween: [ "style", "${_correct0002}", "display", 'block', { fromValue: 'none'}], position: 45, duration: 0 },
            { id: "eid326", tween: [ "style", "${_correct0002}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid306", tween: [ "style", "${_correct0006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid315", tween: [ "style", "${_correct0006}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid322", tween: [ "style", "${_correct0006}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid304", tween: [ "style", "${_correct0008}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid317", tween: [ "style", "${_correct0008}", "display", 'block', { fromValue: 'none'}], position: 355, duration: 0 },
            { id: "eid320", tween: [ "style", "${_correct0008}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid307", tween: [ "style", "${_correct0005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid314", tween: [ "style", "${_correct0005}", "display", 'block', { fromValue: 'none'}], position: 210, duration: 0 },
            { id: "eid323", tween: [ "style", "${_correct0005}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid305", tween: [ "style", "${_correct0007}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid316", tween: [ "style", "${_correct0007}", "display", 'block', { fromValue: 'none'}], position: 300, duration: 0 },
            { id: "eid321", tween: [ "style", "${_correct0007}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid303", tween: [ "style", "${_correct0009}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid318", tween: [ "style", "${_correct0009}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid319", tween: [ "style", "${_correct0009}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid308", tween: [ "style", "${_correct0004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid313", tween: [ "style", "${_correct0004}", "display", 'block', { fromValue: 'none'}], position: 160, duration: 0 },
            { id: "eid324", tween: [ "style", "${_correct0004}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid309", tween: [ "style", "${_correct0003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid312", tween: [ "style", "${_correct0003}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0 },
            { id: "eid325", tween: [ "style", "${_correct0003}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 }         ]
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
