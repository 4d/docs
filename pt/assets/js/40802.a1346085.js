"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40802],{640802:(t,e,n)=>{n.d(e,{diagram:()=>O});var i=n(338328),s=n(126312),r=n(903219),a=n(778041),o=n(775263),l=(n(974353),n(416750),n(842838),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[6,8,10,11,12,14,16,17,20,21],n=[1,9],i=[1,10],s=[1,11],r=[1,12],a=[1,13],o=[1,16],l=[1,17],c={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:i.getCommonDb().setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 9:this.$=r[o].trim(),i.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=r[o].trim(),i.getCommonDb().setAccDescription(this.$);break;case 12:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 15:i.addTask(r[o],0,""),this.$=r[o];break;case 16:i.addEvent(r[o].substr(2)),this.$=r[o]}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:n,12:i,14:s,16:r,17:a,18:14,19:15,20:o,21:l},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:18,11:n,12:i,14:s,16:r,17:a,18:14,19:15,20:o,21:l},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,19]},{15:[1,20]},t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),t(e,[2,4]),t(e,[2,9]),t(e,[2,10])],defaultActions:{},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],s=[null],r=[],a=this.table,o="",l=0,c=0,h=r.slice.call(arguments,1),d=Object.create(this.lexer),u={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p]);d.setInput(t,u.yy),u.yy.lexer=d,u.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var y=d.yylloc;r.push(y);var g=d.options&&d.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var f,m,_,b,x,k,v,w,S,$={};;){if(m=n[n.length-1],this.defaultActions[m]?_=this.defaultActions[m]:(null==f&&(S=void 0,"number"!=typeof(S=i.pop()||d.lex()||1)&&(S instanceof Array&&(S=(i=S).pop()),S=e.symbols_[S]||S),f=S),_=a[m]&&a[m][f]),void 0===_||!_.length||!_[0]){var E="";for(x in w=[],a[m])this.terminals_[x]&&x>2&&w.push("'"+this.terminals_[x]+"'");E=d.showPosition?"Parse error on line "+(l+1)+":\n"+d.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(E,{text:d.match,token:this.terminals_[f]||f,line:d.yylineno,loc:y,expected:w})}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+f);switch(_[0]){case 1:n.push(f),s.push(d.yytext),r.push(d.yylloc),n.push(_[1]),f=null,c=d.yyleng,o=d.yytext,l=d.yylineno,y=d.yylloc;break;case 2:if(k=this.productions_[_[1]][1],$.$=s[s.length-k],$._$={first_line:r[r.length-(k||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(k||1)].first_column,last_column:r[r.length-1].last_column},g&&($._$.range=[r[r.length-(k||1)].range[0],r[r.length-1].range[1]]),void 0!==(b=this.performAction.apply($,[o,c,l,u.yy,_[1],s,r].concat(h))))return b;k&&(n=n.slice(0,-1*k*2),s=s.slice(0,-1*k),r=r.slice(0,-1*k)),n.push(this.productions_[_[1]][0]),s.push($.$),r.push($._$),v=a[n[n.length-2]][n[n.length-1]],n.push(v);break;case 3:return!0}}return!0}},h={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}},rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}};function d(){this.yy={}}return c.lexer=h,d.prototype=c,c.Parser=d,new d}());l.parser=l;const c=l;let h="",d=0;const u=[],p=[],y=[],g=()=>i.L,f=function(){u.length=0,p.length=0,h="",y.length=0,(0,i.v)()},m=function(t){h=t,u.push(t)},_=function(){return u},b=function(){let t=w();let e=0;for(;!t&&e<100;)t=w(),e++;return p.push(...y),p},x=function(t,e,n){const i={id:d++,section:h,type:h,task:t,score:e||0,events:n?[n]:[]};y.push(i)},k=function(t){y.find((t=>t.id===d-1)).events.push(t)},v=function(t){const e={section:h,type:h,description:t,task:t,classes:[]};p.push(e)},w=function(){let t=!0;for(const[e,n]of y.entries())y[e].processed,t=t&&n.processed;return t},S={clear:f,getCommonDb:g,addSection:m,getSections:_,getTasks:b,addTask:x,addTaskOrg:v,addEvent:k},$=Object.freeze(Object.defineProperty({__proto__:null,addEvent:k,addSection:m,addTask:x,addTaskOrg:v,clear:f,default:S,getCommonDb:g,getSections:_,getTasks:b},Symbol.toStringTag,{value:"Module"}));!function(){function t(t,e,n,s,r,a,o,l){i(e.append("text").attr("x",n+r/2).attr("y",s+a/2+5).style("font-color",l).style("text-anchor","middle").text(t),o)}function e(t,e,n,s,r,a,o,l,c){const{taskFontSize:h,taskFontFamily:d}=l,u=t.split(/<br\s*\/?>/gi);for(let p=0;p<u.length;p++){const t=p*h-h*(u.length-1)/2,l=e.append("text").attr("x",n+r/2).attr("y",s).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",d);l.append("tspan").attr("x",n+r/2).attr("dy",t).text(u[p]),l.attr("y",s+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),i(l,o)}}function n(t,n,s,r,a,o,l,c){const h=n.append("switch"),d=h.append("foreignObject").attr("x",s).attr("y",r).attr("width",a).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");d.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,s,r,a,o,l,c),i(d,l)}function i(t,e){for(const n in e)n in e&&t.attr(n,e[n])}}();function E(t,e){t.each((function(){var t,n=(0,s.Ltv)(this),i=n.text().split(/(\s+|<br>)/).reverse(),r=[],a=n.attr("y"),o=parseFloat(n.attr("dy")),l=n.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",o+"em");for(let s=0;s<i.length;s++)t=i[i.length-1-s],r.push(t),l.text(r.join(" ").trim()),(l.node().getComputedTextLength()>e||"<br>"===t)&&(r.pop(),l.text(r.join(" ").trim()),r="<br>"===t?[""]:[t],l=n.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))}))}const I=function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${10-e.height} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},L=function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},T=function(t,e,n,i){const s=n%12-1,r=t.append("g");e.section=s,r.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+s);const a=r.append("g"),o=r.append("g"),l=o.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(E,e.width).node().getBBox(),c=i.fontSize&&i.fontSize.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=l.height+1.1*c*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,o.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),I(a,e,s),e},A=function(t,e,n){const i=t.append("g"),s=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(E,e.width).node().getBBox(),r=n.fontSize&&n.fontSize.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),s.height+1.1*r*.5+e.padding},C=function(t,e,n,s,r,a,o,l,c,h,d){var u;for(const p of e){const e={descr:p.task,section:n,number:n,width:150,padding:20,maxHeight:a};i.l.debug("taskNode",e);const l=t.append("g").attr("class","taskWrapper"),y=T(l,e,n,o).height;if(i.l.debug("taskHeight after draw",y),l.attr("transform",`translate(${s}, ${r})`),a=Math.max(a,y),p.events){const e=t.append("g").attr("class","lineWrapper");let i=a;r+=100,i+=M(t,p.events,n,s,r,o),r-=100,e.append("line").attr("x1",s+95).attr("y1",r+a).attr("x2",s+95).attr("y2",r+a+(d?a:h)+c+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s+=200,d&&!(null==(u=o.timeline)?void 0:u.disableMulticolor)&&n++}r-=10},M=function(t,e,n,s,r,a){let o=0;const l=r;r+=100;for(const c of e){const e={descr:c,section:n,number:n,width:150,padding:20,maxHeight:50};i.l.debug("eventNode",e);const l=t.append("g").attr("class","eventWrapper"),h=T(l,e,n,a).height;o+=h,l.attr("transform",`translate(${s}, ${r})`),r=r+10+h}return r=l,o},O={db:$,renderer:{setConf:()=>{},draw:function(t,e,n,r){var a,o;const l=(0,i.c)(),c=l.leftMargin??50;i.l.debug("timeline",r.db);const h=l.securityLevel;let d;"sandbox"===h&&(d=(0,s.Ltv)("#i"+e));const u=("sandbox"===h?(0,s.Ltv)(d.nodes()[0].contentDocument.body):(0,s.Ltv)("body")).select("#"+e);u.append("g");const p=r.db.getTasks(),y=r.db.getCommonDb().getDiagramTitle();i.l.debug("task",p),L(u);const g=r.db.getSections();i.l.debug("sections",g);let f=0,m=0,_=0,b=0,x=50+c,k=50;b=50;let v=0,w=!0;g.forEach((function(t){const e=A(u,{number:v,descr:t,section:v,width:150,padding:20,maxHeight:f},l);i.l.debug("sectionHeight before draw",e),f=Math.max(f,e+20)}));let S=0,$=0;i.l.debug("tasks.length",p.length);for(const[s,I]of p.entries()){const t={number:s,descr:I,section:I.section,width:150,padding:20,maxHeight:m},e=A(u,t,l);i.l.debug("taskHeight before draw",e),m=Math.max(m,e+20),S=Math.max(S,I.events.length);let n=0;for(let i=0;i<I.events.length;i++){const t={descr:I.events[i],section:I.section,number:I.section,width:150,padding:20,maxHeight:50};n+=A(u,t,l)}$=Math.max($,n)}i.l.debug("maxSectionHeight before draw",f),i.l.debug("maxTaskHeight before draw",m),g&&g.length>0?g.forEach((t=>{const e=p.filter((e=>e.section===t)),n={number:v,descr:t,section:v,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:f};i.l.debug("sectionNode",n);const s=u.append("g"),r=T(s,n,v,l);i.l.debug("sectionNode output",r),s.attr("transform",`translate(${x}, 50)`),k+=f+50,e.length>0&&C(u,e,v,x,k,m,l,S,$,f,!1),x+=200*Math.max(e.length,1),k=50,v++})):(w=!1,C(u,p,v,x,k,m,l,S,$,f,!0));const E=u.node().getBBox();i.l.debug("bounds",E),y&&u.append("text").text(y).attr("x",E.width/2-c).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),_=w?f+m+150:m+100;u.append("g").attr("class","lineWrapper").append("line").attr("x1",c).attr("y1",_).attr("x2",E.width+3*c).attr("y2",_).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,i.o)(void 0,u,(null==(a=l.timeline)?void 0:a.padding)??50,(null==(o=l.timeline)?void 0:o.useMaxWidth)??!1)}},parser:c,styles:t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${(t=>{let e="";for(let n=0;n<t.THEME_COLOR_LIMIT;n++)t["lineColor"+n]=t["lineColor"+n]||t["cScaleInv"+n],(0,r.A)(t["lineColor"+n])?t["lineColor"+n]=(0,a.A)(t["lineColor"+n],20):t["lineColor"+n]=(0,o.A)(t["lineColor"+n],20);for(let n=0;n<t.THEME_COLOR_LIMIT;n++){const i=""+(17-3*n);e+=`\n    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} path  {\n      fill: ${t["cScale"+n]};\n    }\n    .section-${n-1} text {\n     fill: ${t["cScaleLabel"+n]};\n    }\n    .node-icon-${n-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+n]};\n    }\n    .section-edge-${n-1}{\n      stroke: ${t["cScale"+n]};\n    }\n    .edge-depth-${n-1}{\n      stroke-width: ${i};\n    }\n    .section-${n-1} line {\n      stroke: ${t["cScaleInv"+n]} ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ${t["cScaleLabel"+n]} ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `}return e})(t)}\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n`}}}]);