"use strict";exports.id=3378,exports.ids=[3378],exports.modules={20805:(a,b,c)=>{c.d(b,{CP:()=>k,HT:()=>m,PB:()=>l,aC:()=>j,lC:()=>h,m:()=>i,tk:()=>g});var d=c(3927),e=c(83939),f=c(61587),g=(0,e.K2)((a,b)=>{let c=a.append("rect");if(c.attr("x",b.x),c.attr("y",b.y),c.attr("fill",b.fill),c.attr("stroke",b.stroke),c.attr("width",b.width),c.attr("height",b.height),b.name&&c.attr("name",b.name),b.rx&&c.attr("rx",b.rx),b.ry&&c.attr("ry",b.ry),void 0!==b.attrs)for(let a in b.attrs)c.attr(a,b.attrs[a]);return b.class&&c.attr("class",b.class),c},"drawRect"),h=(0,e.K2)((a,b)=>{g(a,{x:b.startx,y:b.starty,width:b.stopx-b.startx,height:b.stopy-b.starty,fill:b.fill,stroke:b.stroke,class:"rect"}).lower()},"drawBackgroundRect"),i=(0,e.K2)((a,b)=>{let c=b.text.replace(d.H1," "),e=a.append("text");e.attr("x",b.x),e.attr("y",b.y),e.attr("class","legend"),e.style("text-anchor",b.anchor),b.class&&e.attr("class",b.class);let f=e.append("tspan");return f.attr("x",b.x+2*b.textMargin),f.text(c),e},"drawText"),j=(0,e.K2)((a,b,c,d)=>{let e=a.append("image");e.attr("x",b),e.attr("y",c);let g=(0,f.J)(d);e.attr("xlink:href",g)},"drawImage"),k=(0,e.K2)((a,b,c,d)=>{let e=a.append("use");e.attr("x",b),e.attr("y",c);let g=(0,f.J)(d);e.attr("xlink:href",`#${g}`)},"drawEmbeddedImage"),l=(0,e.K2)(()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),"getNoteRect"),m=(0,e.K2)(()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0}),"getTextObj")},44967:(a,b,c)=>{c.d(b,{o:()=>d});var d=(0,c(83939).K2)(()=>`
  /* Font Awesome icon styling - consolidated */
  .label-icon {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .node .label-icon path {
    fill: currentColor;
    stroke: revert;
    stroke-width: revert;
  }
`,"getIconStyles")},63378:(a,b,c)=>{c.d(b,{diagram:()=>T});var d=c(20805),e=c(44967),f=c(3927),g=c(83939),h=c(75645),i=function(){var a=(0,g.K2)(function(a,b,c,d){for(c=c||{},d=a.length;d--;c[a[d]]=b);return c},"o"),b=[6,8,10,11,12,14,16,17,18],c=[1,9],d=[1,10],e=[1,11],f=[1,12],h=[1,13],i=[1,14],j={trace:(0,g.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:(0,g.K2)(function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return f[h-1];case 2:case 6:case 7:this.$=[];break;case 3:f[h-1].push(f[h]),this.$=f[h-1];break;case 4:case 5:this.$=f[h];break;case 8:d.setDiagramTitle(f[h].substr(6)),this.$=f[h].substr(6);break;case 9:this.$=f[h].trim(),d.setAccTitle(this.$);break;case 10:case 11:this.$=f[h].trim(),d.setAccDescription(this.$);break;case 12:d.addSection(f[h].substr(8)),this.$=f[h].substr(8);break;case 13:d.addTask(f[h-1],f[h]),this.$="task"}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},a(b,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:c,12:d,14:e,16:f,17:h,18:i},a(b,[2,7],{1:[2,1]}),a(b,[2,3]),{9:15,11:c,12:d,14:e,16:f,17:h,18:i},a(b,[2,5]),a(b,[2,6]),a(b,[2,8]),{13:[1,16]},{15:[1,17]},a(b,[2,11]),a(b,[2,12]),{19:[1,18]},a(b,[2,4]),a(b,[2,9]),a(b,[2,10]),a(b,[2,13])],defaultActions:{},parseError:(0,g.K2)(function(a,b){if(b.recoverable)this.trace(a);else{var c=Error(a);throw c.hash=b,c}},"parseError"),parse:(0,g.K2)(function(a){var b=this,c=[0],d=[],e=[null],f=[],h=this.table,i="",j=0,k=0,l=0,m=f.slice.call(arguments,1),n=Object.create(this.lexer),o={};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(o[p]=this.yy[p]);n.setInput(a,o),o.lexer=n,o.parser=this,void 0===n.yylloc&&(n.yylloc={});var q=n.yylloc;f.push(q);var r=n.options&&n.options.ranges;function s(){var a;return"number"!=typeof(a=d.pop()||n.lex()||1)&&(a instanceof Array&&(a=(d=a).pop()),a=b.symbols_[a]||a),a}"function"==typeof o.parseError?this.parseError=o.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,g.K2)(function(a){c.length=c.length-2*a,e.length=e.length-a,f.length=f.length-a},"popStack"),(0,g.K2)(s,"lex");for(var t,u,v,w,x,y,z,A,B,C={};;){if(v=c[c.length-1],this.defaultActions[v]?w=this.defaultActions[v]:(null==t&&(t=s()),w=h[v]&&h[v][t]),void 0===w||!w.length||!w[0]){var D="";for(y in B=[],h[v])this.terminals_[y]&&y>2&&B.push("'"+this.terminals_[y]+"'");D=n.showPosition?"Parse error on line "+(j+1)+":\n"+n.showPosition()+"\nExpecting "+B.join(", ")+", got '"+(this.terminals_[t]||t)+"'":"Parse error on line "+(j+1)+": Unexpected "+(1==t?"end of input":"'"+(this.terminals_[t]||t)+"'"),this.parseError(D,{text:n.match,token:this.terminals_[t]||t,line:n.yylineno,loc:q,expected:B})}if(w[0]instanceof Array&&w.length>1)throw Error("Parse Error: multiple actions possible at state: "+v+", token: "+t);switch(w[0]){case 1:c.push(t),e.push(n.yytext),f.push(n.yylloc),c.push(w[1]),t=null,u?(t=u,u=null):(k=n.yyleng,i=n.yytext,j=n.yylineno,q=n.yylloc,l>0&&l--);break;case 2:if(z=this.productions_[w[1]][1],C.$=e[e.length-z],C._$={first_line:f[f.length-(z||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(z||1)].first_column,last_column:f[f.length-1].last_column},r&&(C._$.range=[f[f.length-(z||1)].range[0],f[f.length-1].range[1]]),void 0!==(x=this.performAction.apply(C,[i,k,j,o,w[1],e,f].concat(m))))return x;z&&(c=c.slice(0,-1*z*2),e=e.slice(0,-1*z),f=f.slice(0,-1*z)),c.push(this.productions_[w[1]][0]),e.push(C.$),f.push(C._$),A=h[c[c.length-2]][c[c.length-1]],c.push(A);break;case 3:return!0}}return!0},"parse")};function k(){this.yy={}}return j.lexer={EOF:1,parseError:(0,g.K2)(function(a,b){if(this.yy.parser)this.yy.parser.parseError(a,b);else throw Error(a)},"parseError"),setInput:(0,g.K2)(function(a,b){return this.yy=b||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,g.K2)(function(){var a=this._input[0];return this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a,a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:(0,g.K2)(function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this.yyleng=this.yytext.length,this},"unput"),more:(0,g.K2)(function(){return this._more=!0,this},"more"),reject:(0,g.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,g.K2)(function(a){this.unput(this.match.slice(a))},"less"),pastInput:(0,g.K2)(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,g.K2)(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,g.K2)(function(){var a=this.pastInput(),b=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},"showPosition"),test_match:(0,g.K2)(function(a,b){var c,d,e;if(this.options.backtrack_lexer&&(e={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(e.yylloc.range=this.yylloc.range.slice(0))),(d=a[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],c=this.performAction.call(this,this.yy,this,b,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack)for(var f in e)this[f]=e[f];return!1},"test_match"),next:(0,g.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var a,b,c,d,e=this._currentRules(),f=0;f<e.length;f++)if((c=this._input.match(this.rules[e[f]]))&&(!b||c[0].length>b[0].length)){if(b=c,d=f,this.options.backtrack_lexer){if(!1!==(a=this.test_match(c,e[f])))return a;if(!this._backtrack)return!1;b=!1;continue}if(!this.options.flex)break}return b?!1!==(a=this.test_match(b,e[d]))&&a:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,g.K2)(function(){var a=this.next();return a||this.lex()},"lex"),begin:(0,g.K2)(function(a){this.conditionStack.push(a)},"begin"),popState:(0,g.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,g.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,g.K2)(function(a){return(a=this.conditionStack.length-1-Math.abs(a||0))>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:(0,g.K2)(function(a){this.begin(a)},"pushState"),stateStackSize:(0,g.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,g.K2)(function(a,b,c,d){switch(c){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}},(0,g.K2)(k,"Parser"),k.prototype=j,j.Parser=k,new k}();i.parser=i;var j="",k=[],l=[],m=[],n=(0,g.K2)(function(){k.length=0,l.length=0,j="",m.length=0,(0,f.IU)()},"clear"),o=(0,g.K2)(function(a){j=a,k.push(a)},"addSection"),p=(0,g.K2)(function(){return k},"getSections"),q=(0,g.K2)(function(){let a=u(),b=0;for(;!a&&b<100;)a=u(),b++;return l.push(...m),l},"getTasks"),r=(0,g.K2)(function(){let a=[];return l.forEach(b=>{b.people&&a.push(...b.people)}),[...new Set(a)].sort()},"updateActors"),s=(0,g.K2)(function(a,b){let c=b.substr(1).split(":"),d=0,e=[];1===c.length?(d=Number(c[0]),e=[]):(d=Number(c[0]),e=c[1].split(","));let f=e.map(a=>a.trim()),g={section:j,type:j,people:f,task:a,score:d};m.push(g)},"addTask"),t=(0,g.K2)(function(a){let b={section:j,type:j,description:a,task:a,classes:[]};l.push(b)},"addTaskOrg"),u=(0,g.K2)(function(){let a=(0,g.K2)(function(a){return m[a].processed},"compileTask"),b=!0;for(let[c,d]of m.entries())a(c),b=b&&d.processed;return b},"compileTasks"),v=(0,g.K2)(function(){return r()},"getActors"),w={getConfig:(0,g.K2)(()=>(0,f.D7)().journey,"getConfig"),clear:n,setDiagramTitle:f.ke,getDiagramTitle:f.ab,setAccTitle:f.SV,getAccTitle:f.iN,setAccDescription:f.EI,getAccDescription:f.m7,addSection:o,getSections:p,getTasks:q,addTask:s,addTaskOrg:t,getActors:v},x=(0,g.K2)(a=>`.label {
    font-family: ${a.fontFamily};
    color: ${a.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${a.textColor}
  }

  .legend {
    fill: ${a.textColor};
    font-family: ${a.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${a.textColor}
  }

  .face {
    ${a.faceColor?`fill: ${a.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${a.mainBkg};
    stroke: ${a.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${a.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${a.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${a.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${a.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${a.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${a.fontFamily};
    font-size: 12px;
    background: ${a.tertiaryColor};
    border: 1px solid ${a.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${a.fillType0?`fill: ${a.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${a.fillType0?`fill: ${a.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${a.fillType0?`fill: ${a.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${a.fillType0?`fill: ${a.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${a.fillType0?`fill: ${a.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${a.fillType0?`fill: ${a.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${a.fillType0?`fill: ${a.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${a.fillType0?`fill: ${a.fillType7}`:""};
  }

  .actor-0 {
    ${a.actor0?`fill: ${a.actor0}`:""};
  }
  .actor-1 {
    ${a.actor1?`fill: ${a.actor1}`:""};
  }
  .actor-2 {
    ${a.actor2?`fill: ${a.actor2}`:""};
  }
  .actor-3 {
    ${a.actor3?`fill: ${a.actor3}`:""};
  }
  .actor-4 {
    ${a.actor4?`fill: ${a.actor4}`:""};
  }
  .actor-5 {
    ${a.actor5?`fill: ${a.actor5}`:""};
  }
  ${(0,e.o)()}
`,"getStyles"),y=(0,g.K2)(function(a,b){return(0,d.tk)(a,b)},"drawRect"),z=(0,g.K2)(function(a,b){let c=a.append("circle").attr("cx",b.cx).attr("cy",b.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),d=a.append("g");function e(a){let c=(0,h.JLW)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(15/2.2);a.append("path").attr("class","mouth").attr("d",c).attr("transform","translate("+b.cx+","+(b.cy+2)+")")}function f(a){let c=(0,h.JLW)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(15/2.2);a.append("path").attr("class","mouth").attr("d",c).attr("transform","translate("+b.cx+","+(b.cy+7)+")")}function i(a){a.append("line").attr("class","mouth").attr("stroke",2).attr("x1",b.cx-5).attr("y1",b.cy+7).attr("x2",b.cx+5).attr("y2",b.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return d.append("circle").attr("cx",b.cx-5).attr("cy",b.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),d.append("circle").attr("cx",b.cx+5).attr("cy",b.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),(0,g.K2)(e,"smile"),(0,g.K2)(f,"sad"),(0,g.K2)(i,"ambivalent"),b.score>3?e(d):b.score<3?f(d):i(d),c},"drawFace"),A=(0,g.K2)(function(a,b){let c=a.append("circle");return c.attr("cx",b.cx),c.attr("cy",b.cy),c.attr("class","actor-"+b.pos),c.attr("fill",b.fill),c.attr("stroke",b.stroke),c.attr("r",b.r),void 0!==c.class&&c.attr("class",c.class),void 0!==b.title&&c.append("title").text(b.title),c},"drawCircle"),B=(0,g.K2)(function(a,b){return(0,d.m)(a,b)},"drawText"),C=(0,g.K2)(function(a,b,c){let e=a.append("g"),f=(0,d.PB)();f.x=b.x,f.y=b.y,f.fill=b.fill,f.width=c.width*b.taskCount+c.diagramMarginX*(b.taskCount-1),f.height=c.height,f.class="journey-section section-type-"+b.num,f.rx=3,f.ry=3,y(e,f),F(c)(b.text,e,f.x,f.y,f.width,f.height,{class:"journey-section section-type-"+b.num},c,b.colour)},"drawSection"),D=-1,E=(0,g.K2)(function(a,b,c){let e=b.x+c.width/2,f=a.append("g");D++,f.append("line").attr("id","task"+D).attr("x1",e).attr("y1",b.y).attr("x2",e).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),z(f,{cx:e,cy:300+(5-b.score)*30,score:b.score});let g=(0,d.PB)();g.x=b.x,g.y=b.y,g.fill=b.fill,g.width=c.width,g.height=c.height,g.class="task task-type-"+b.num,g.rx=3,g.ry=3,y(f,g);let h=b.x+14;b.people.forEach(a=>{let c=b.actors[a].color;A(f,{cx:h,cy:b.y,r:7,fill:c,stroke:"#000",title:a,pos:b.actors[a].position}),h+=10}),F(c)(b.task,f,g.x,g.y,g.width,g.height,{class:"task"},c,b.colour)},"drawTask"),F=function(){function a(a,b,c,e,f,g,h,i){d(b.append("text").attr("x",c+f/2).attr("y",e+g/2+5).style("font-color",i).style("text-anchor","middle").text(a),h)}function b(a,b,c,e,f,g,h,i,j){let{taskFontSize:k,taskFontFamily:l}=i,m=a.split(/<br\s*\/?>/gi);for(let a=0;a<m.length;a++){let i=a*k-k*(m.length-1)/2,n=b.append("text").attr("x",c+f/2).attr("y",e).attr("fill",j).style("text-anchor","middle").style("font-size",k).style("font-family",l);n.append("tspan").attr("x",c+f/2).attr("dy",i).text(m[a]),n.attr("y",e+g/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),d(n,h)}}function c(a,c,e,f,g,h,i,j){let k=c.append("switch"),l=k.append("foreignObject").attr("x",e).attr("y",f).attr("width",g).attr("height",h).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");l.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(a),b(a,k,e,f,g,h,i,j),d(l,i)}function d(a,b){for(let c in b)c in b&&a.attr(c,b[c])}return(0,g.K2)(a,"byText"),(0,g.K2)(b,"byTspan"),(0,g.K2)(c,"byFo"),(0,g.K2)(d,"_setTextAttrs"),function(d){return"fo"===d.textPlacement?c:"old"===d.textPlacement?a:b}}(),G={drawCircle:A,drawSection:C,drawText:B,drawTask:E,initGraphics:(0,g.K2)(function(a){a.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics")},H=(0,g.K2)(function(a){Object.keys(a).forEach(function(b){L[b]=a[b]})},"setConf"),I={},J=0;function K(a){let b=(0,f.D7)().journey,c=b.maxLabelWidth;J=0;let d=60;Object.keys(I).forEach(e=>{let f=I[e].color,g={cx:20,cy:d,r:7,fill:f,stroke:"#000",pos:I[e].position};G.drawCircle(a,g);let h=a.append("text").attr("visibility","hidden").text(e),i=h.node().getBoundingClientRect().width;h.remove();let j=[];if(i<=c)j=[e];else{let b=e.split(" "),d="";h=a.append("text").attr("visibility","hidden"),b.forEach(a=>{let b=d?`${d} ${a}`:a;if(h.text(b),h.node().getBoundingClientRect().width>c){if(d&&j.push(d),d=a,h.text(a),h.node().getBoundingClientRect().width>c){let b="";for(let d of a)b+=d,h.text(b+"-"),h.node().getBoundingClientRect().width>c&&(j.push(b.slice(0,-1)+"-"),b=d);d=b}}else d=b}),d&&j.push(d),h.remove()}j.forEach((c,e)=>{let f={x:40,y:d+7+20*e,fill:"#666",text:c,textMargin:b.boxTextMargin??5},g=G.drawText(a,f).node().getBoundingClientRect().width;g>J&&g>b.leftMargin-g&&(J=g)}),d+=Math.max(20,20*j.length)})}(0,g.K2)(K,"drawActorLegend");var L=(0,f.D7)().journey,M=0,N=(0,g.K2)(function(a,b,c,d){let e,g=(0,f.D7)(),i=g.journey.titleColor,j=g.journey.titleFontSize,k=g.journey.titleFontFamily,l=g.securityLevel;"sandbox"===l&&(e=(0,h.Ltv)("#i"+b));let m="sandbox"===l?(0,h.Ltv)(e.nodes()[0].contentDocument.body):(0,h.Ltv)("body");O.init();let n=m.select("#"+b);G.initGraphics(n);let o=d.db.getTasks(),p=d.db.getDiagramTitle(),q=d.db.getActors();for(let a in I)delete I[a];let r=0;q.forEach(a=>{I[a]={color:L.actorColours[r%L.actorColours.length],position:r},r++}),K(n),M=L.leftMargin+J,O.insert(0,0,M,50*Object.keys(I).length),R(n,o,0);let s=O.getBounds();p&&n.append("text").text(p).attr("x",M).attr("font-size",j).attr("font-weight","bold").attr("y",25).attr("fill",i).attr("font-family",k);let t=s.stopy-s.starty+2*L.diagramMarginY,u=M+s.stopx+2*L.diagramMarginX;(0,f.a$)(n,t,u,L.useMaxWidth),n.append("line").attr("x1",M).attr("y1",4*L.height).attr("x2",u-M-4).attr("y2",4*L.height).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");let v=70*!!p;n.attr("viewBox",`${s.startx} -25 ${u} ${t+v}`),n.attr("preserveAspectRatio","xMinYMin meet"),n.attr("height",t+v+25)},"draw"),O={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:(0,g.K2)(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:(0,g.K2)(function(a,b,c,d){void 0===a[b]?a[b]=c:a[b]=d(c,a[b])},"updateVal"),updateBounds:(0,g.K2)(function(a,b,c,d){let e=(0,f.D7)().journey,h=this,i=0;function j(f){return(0,g.K2)(function(g){i++;let j=h.sequenceItems.length-i+1;h.updateVal(g,"starty",b-j*e.boxMargin,Math.min),h.updateVal(g,"stopy",d+j*e.boxMargin,Math.max),h.updateVal(O.data,"startx",a-j*e.boxMargin,Math.min),h.updateVal(O.data,"stopx",c+j*e.boxMargin,Math.max),"activation"!==f&&(h.updateVal(g,"startx",a-j*e.boxMargin,Math.min),h.updateVal(g,"stopx",c+j*e.boxMargin,Math.max),h.updateVal(O.data,"starty",b-j*e.boxMargin,Math.min),h.updateVal(O.data,"stopy",d+j*e.boxMargin,Math.max))},"updateItemBounds")}(0,g.K2)(j,"updateFn"),this.sequenceItems.forEach(j())},"updateBounds"),insert:(0,g.K2)(function(a,b,c,d){let e=Math.min(a,c),f=Math.max(a,c),g=Math.min(b,d),h=Math.max(b,d);this.updateVal(O.data,"startx",e,Math.min),this.updateVal(O.data,"starty",g,Math.min),this.updateVal(O.data,"stopx",f,Math.max),this.updateVal(O.data,"stopy",h,Math.max),this.updateBounds(e,g,f,h)},"insert"),bumpVerticalPos:(0,g.K2)(function(a){this.verticalPos=this.verticalPos+a,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:(0,g.K2)(function(){return this.verticalPos},"getVerticalPos"),getBounds:(0,g.K2)(function(){return this.data},"getBounds")},P=L.sectionFills,Q=L.sectionColours,R=(0,g.K2)(function(a,b,c){let d=(0,f.D7)().journey,e="",g=c+(2*d.height+d.diagramMarginY),h=0,i="#CCC",j="black",k=0;for(let[c,f]of b.entries()){if(e!==f.section){i=P[h%P.length],k=h%P.length,j=Q[h%Q.length];let g=0,l=f.section;for(let a=c;a<b.length;a++)if(b[a].section==l)g+=1;else break;let m={x:c*d.taskMargin+c*d.width+M,y:50,text:f.section,fill:i,num:k,colour:j,taskCount:g};G.drawSection(a,m,d),e=f.section,h++}let l=f.people.reduce((a,b)=>(I[b]&&(a[b]=I[b]),a),{});f.x=c*d.taskMargin+c*d.width+M,f.y=g,f.width=d.diagramMarginX,f.height=d.diagramMarginY,f.colour=j,f.fill=i,f.num=k,f.actors=l,G.drawTask(a,f,d),O.insert(f.x,f.y,f.x+f.width+d.taskMargin,450)}},"drawTasks"),S={setConf:H,draw:N},T={parser:i,db:w,renderer:S,styles:x,init:(0,g.K2)(a=>{S.setConf(a.journey),w.clear()},"init")}}};