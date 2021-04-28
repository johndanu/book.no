/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


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
            id:'sdsd2',
            type:'image',
            rect:['-356px','-50px','1924px','818px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sdsd2.png",'0px','0px']
         },
         {
            id:'bright-animated-star-shining-at-night',
            type:'image',
            rect:['95px','50px','26px','23px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bright-animated-star-shining-at-night.gif",'0px','0px']
         },
         {
            id:'bright-animated-star-shining-at-nightCopy',
            type:'image',
            rect:['1149px','136px','44px','39px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bright-animated-star-shining-at-night.gif",'0px','0px']
         },
         {
            id:'moon2',
            type:'image',
            rect:['458px','0px','450px','450px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"moon2.png",'0px','0px']
         },
         {
            id:'title',
            type:'image',
            rect:['148px','195px','1070px','377px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"title.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_moon2}": [
            ["style", "top", '0px'],
            ["style", "height", '450px'],
            ["style", "left", '458px'],
            ["style", "width", '450px']
         ],
         "${_sdsd2}": [
            ["style", "top", '-50px'],
            ["style", "height", '818px'],
            ["style", "left", '-356px'],
            ["style", "width", '1924px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1366px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_bright-animated-star-shining-at-night}": [
            ["style", "top", '50px'],
            ["style", "height", '23px'],
            ["style", "left", '95px'],
            ["style", "width", '26px']
         ],
         "${_bright-animated-star-shining-at-nightCopy}": [
            ["style", "height", '39px'],
            ["style", "top", '136px'],
            ["style", "left", '1149px'],
            ["style", "width", '44px']
         ],
         "${_title}": [
            ["style", "top", '195px'],
            ["style", "height", '377px'],
            ["style", "left", '148px'],
            ["style", "width", '1070px']
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-24858344");
