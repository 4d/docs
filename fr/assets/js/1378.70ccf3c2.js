(self.webpackChunk=self.webpackChunk||[]).push([[1378],{497375:function(t){t.exports=function(){"use strict";return function(t,e){var n=e.prototype,i=n.format;n.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return i.bind(this)(t);var s=this.$utils(),r=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return s.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return s.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return s.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return i.bind(this)(r)}}}()},690445:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,i=/\d\d/,s=/\d\d?/,r=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},c=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],d=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,i=a.meridiem;if(i){for(var s=1;s<=24;s+=1)if(t.indexOf(i(s,0,e))>-1){n=s>12;break}}else n=t===(e?"pm":"PM");return n},h={A:[r,function(t){this.afternoon=u(t,!1)}],a:[r,function(t){this.afternoon=u(t,!0)}],Q:[n,function(t){this.month=3*(t-1)+1}],S:[n,function(t){this.milliseconds=100*+t}],SS:[i,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[s,c("seconds")],ss:[s,c("seconds")],m:[s,c("minutes")],mm:[s,c("minutes")],H:[s,c("hours")],h:[s,c("hours")],HH:[s,c("hours")],hh:[s,c("hours")],D:[s,c("day")],DD:[i,c("day")],Do:[r,function(t){var e=a.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var i=1;i<=31;i+=1)e(i).replace(/\[|\]/g,"")===t&&(this.day=i)}],w:[s,c("week")],ww:[i,c("week")],M:[s,c("month")],MM:[i,c("month")],MMM:[r,function(t){var e=d("months"),n=(d("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[r,function(t){var e=d("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,c("year")],YY:[i,function(t){this.year=o(t)}],YYYY:[/\d{4}/,c("year")],Z:l,ZZ:l};function f(n){var i,s;i=n,s=a&&a.formats;for(var r=(n=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,i){var r=i&&i.toUpperCase();return n||s[i]||t[i]||s[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),o=r.length,c=0;c<o;c+=1){var l=r[c],d=h[l],u=d&&d[0],f=d&&d[1];r[c]=f?{regex:u,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,i=0;n<o;n+=1){var s=r[n];if("string"==typeof s)i+=s.length;else{var a=s.regex,c=s.parser,l=t.slice(i),d=a.exec(l)[0];c.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var i=e.prototype,s=i.parse;i.parse=function(t){var e=t.date,i=t.utc,r=t.args;this.$u=i;var o=r[1];if("string"==typeof o){var c=!0===r[2],l=!0===r[3],d=c||l,u=r[2];l&&(u=r[2]),a=this.$locale(),!c&&u&&(a=n.Ls[u]),this.$d=function(t,e,n,i){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var s=f(e)(t),r=s.year,a=s.month,o=s.day,c=s.hours,l=s.minutes,d=s.seconds,u=s.milliseconds,h=s.zone,y=s.week,m=new Date,k=o||(r||a?1:m.getDate()),p=r||m.getFullYear(),g=0;r&&!a||(g=a>0?a-1:m.getMonth());var b,v=c||0,T=l||0,x=d||0,w=u||0;return h?new Date(Date.UTC(p,g,k,v,T,x,w+60*h.offset*1e3)):n?new Date(Date.UTC(p,g,k,v,T,x,w)):(b=new Date(p,g,k,v,T,x,w),y&&(b=i(b).week(y).toDate()),b)}catch(t){return new Date("")}}(e,o,i,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&e!=this.format(o)&&(this.$d=new Date("")),a={}}else if(o instanceof Array)for(var h=o.length,y=1;y<=h;y+=1){r[1]=o[y-1];var m=n.apply(this,r);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}y===h&&(this.$d=new Date(""))}else s.call(this,t)}}}()},468313:function(t){t.exports=function(){"use strict";var t="day";return function(e,n,i){var s=function(e){return e.add(4-e.isoWeekday(),t)},r=n.prototype;r.isoWeekYear=function(){return s(this).year()},r.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),t);var n,r,a,o=s(this),c=(n=this.isoWeekYear(),a=4-(r=(this.$u?i.utc:i)().year(n).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(a+=7),r.add(a,t));return o.diff(c,"week")+1},r.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var a=r.startOf;r.startOf=function(t,e){var n=this.$utils(),i=!!n.u(e)||e;return"isoweek"===n.p(t)?i?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):a.bind(this)(t,e)}}}()},901378:(t,e,n)=>{"use strict";n.d(e,{diagram:()=>q});var i=n(416750),s=n(974353),r=n(468313),a=n(690445),o=n(497375),c=n(338328),l=n(126312),d=(n(842838),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],n=[1,25],i=[1,26],s=[1,27],r=[1,28],a=[1,29],o=[1,30],c=[1,31],l=[1,9],d=[1,10],u=[1,11],h=[1,12],f=[1,13],y=[1,14],m=[1,15],k=[1,16],p=[1,18],g=[1,19],b=[1,20],v=[1,21],T=[1,22],x=[1,24],w=[1,32],_={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",19:"dateFormat",20:"inclusiveEndDates",21:"topAxis",22:"axisFormat",23:"tickInterval",24:"excludes",25:"includes",26:"todayMarker",27:"title",28:"acc_title",29:"acc_title_value",30:"acc_descr",31:"acc_descr_value",32:"acc_descr_multiline_value",33:"section",35:"taskTxt",36:"taskData",37:"click",38:"callbackname",39:"callbackargs",40:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:i.setWeekday("monday");break;case 9:i.setWeekday("tuesday");break;case 10:i.setWeekday("wednesday");break;case 11:i.setWeekday("thursday");break;case 12:i.setWeekday("friday");break;case 13:i.setWeekday("saturday");break;case 14:i.setWeekday("sunday");break;case 15:i.setDateFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 16:i.enableInclusiveEndDates(),this.$=r[o].substr(18);break;case 17:i.TopAxis(),this.$=r[o].substr(8);break;case 18:i.setAxisFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 19:i.setTickInterval(r[o].substr(13)),this.$=r[o].substr(13);break;case 20:i.setExcludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 21:i.setIncludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 22:i.setTodayMarker(r[o].substr(12)),this.$=r[o].substr(12);break;case 24:i.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 25:this.$=r[o].trim(),i.setAccTitle(this.$);break;case 26:case 27:this.$=r[o].trim(),i.setAccDescription(this.$);break;case 28:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 30:i.addTask(r[o-1],r[o]),this.$="task";break;case 31:this.$=r[o-1],i.setClickEvent(r[o-1],r[o],null);break;case 32:this.$=r[o-2],i.setClickEvent(r[o-2],r[o-1],r[o]);break;case 33:this.$=r[o-2],i.setClickEvent(r[o-2],r[o-1],null),i.setLink(r[o-2],r[o]);break;case 34:this.$=r[o-3],i.setClickEvent(r[o-3],r[o-2],r[o-1]),i.setLink(r[o-3],r[o]);break;case 35:this.$=r[o-2],i.setClickEvent(r[o-2],r[o],null),i.setLink(r[o-2],r[o-1]);break;case 36:this.$=r[o-3],i.setClickEvent(r[o-3],r[o-1],r[o]),i.setLink(r[o-3],r[o-2]);break;case 37:this.$=r[o-1],i.setLink(r[o-1],r[o]);break;case 38:case 44:this.$=r[o-1]+" "+r[o];break;case 39:case 40:case 42:this.$=r[o-2]+" "+r[o-1]+" "+r[o];break;case 41:case 43:this.$=r[o-3]+" "+r[o-2]+" "+r[o-1]+" "+r[o]}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:i,14:s,15:r,16:a,17:o,18:c,19:l,20:d,21:u,22:h,23:f,24:y,25:m,26:k,27:p,28:g,30:b,32:v,33:T,34:23,35:x,37:w},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:33,11:17,12:n,13:i,14:s,15:r,16:a,17:o,18:c,19:l,20:d,21:u,22:h,23:f,24:y,25:m,26:k,27:p,28:g,30:b,32:v,33:T,34:23,35:x,37:w},t(e,[2,5]),t(e,[2,6]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),{29:[1,34]},{31:[1,35]},t(e,[2,27]),t(e,[2,28]),t(e,[2,29]),{36:[1,36]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),{38:[1,37],40:[1,38]},t(e,[2,4]),t(e,[2,25]),t(e,[2,26]),t(e,[2,30]),t(e,[2,31],{39:[1,39],40:[1,40]}),t(e,[2,37],{38:[1,41]}),t(e,[2,32],{40:[1,42]}),t(e,[2,33]),t(e,[2,35],{39:[1,43]}),t(e,[2,34]),t(e,[2,36])],defaultActions:{},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],s=[null],r=[],a=this.table,o="",c=0,l=0,d=r.slice.call(arguments,1),u=Object.create(this.lexer),h={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(h.yy[f]=this.yy[f]);u.setInput(t,h.yy),h.yy.lexer=u,h.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var y=u.yylloc;r.push(y);var m=u.options&&u.options.ranges;"function"==typeof h.yy.parseError?this.parseError=h.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var k,p,g,b,v,T,x,w,_,$={};;){if(p=n[n.length-1],this.defaultActions[p]?g=this.defaultActions[p]:(null==k&&(_=void 0,"number"!=typeof(_=i.pop()||u.lex()||1)&&(_ instanceof Array&&(_=(i=_).pop()),_=e.symbols_[_]||_),k=_),g=a[p]&&a[p][k]),void 0===g||!g.length||!g[0]){var D="";for(v in w=[],a[p])this.terminals_[v]&&v>2&&w.push("'"+this.terminals_[v]+"'");D=u.showPosition?"Parse error on line "+(c+1)+":\n"+u.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==k?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(D,{text:u.match,token:this.terminals_[k]||k,line:u.yylineno,loc:y,expected:w})}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+k);switch(g[0]){case 1:n.push(k),s.push(u.yytext),r.push(u.yylloc),n.push(g[1]),k=null,l=u.yyleng,o=u.yytext,c=u.yylineno,y=u.yylloc;break;case 2:if(T=this.productions_[g[1]][1],$.$=s[s.length-T],$._$={first_line:r[r.length-(T||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(T||1)].first_column,last_column:r[r.length-1].last_column},m&&($._$.range=[r[r.length-(T||1)].range[0],r[r.length-1].range[1]]),void 0!==(b=this.performAction.apply($,[o,l,c,h.yy,g[1],s,r].concat(d))))return b;T&&(n=n.slice(0,-1*T*2),s=s.slice(0,-1*T),r=r.slice(0,-1*T)),n.push(this.productions_[g[1]][0]),s.push($.$),r.push($._$),x=a[n[n.length-2]][n[n.length-1]],n.push(x);break;case 3:return!0}}return!0}},$={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),28;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),30;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 40;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 38;case 22:return 39;case 23:this.begin("click");break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return"date";case 43:return 27;case 44:return"accDescription";case 45:return 33;case 46:return 35;case 47:return 36;case 48:return":";case 49:return 6;case 50:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}};function D(){this.yy={}}return _.lexer=$,D.prototype=_,_.Parser=D,new D}());d.parser=d;const u=d;s.extend(r),s.extend(a),s.extend(o);let h,f="",y="",m="",k=[],p=[],g={},b=[],v=[],T="",x="";const w=["active","done","crit","milestone"];let _=[],$=!1,D=!1,C="sunday",S=0;const E=function(t,e,n,i){return!i.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&n.includes("weekends"))||(!!n.includes(t.format("dddd").toLowerCase())||n.includes(t.format(e.trim()))))},A=function(t,e,n,i){if(!n.length||t.manualEndTime)return;let r,a;r=t.startTime instanceof Date?s(t.startTime):s(t.startTime,e,!0),r=r.add(1,"d"),a=t.endTime instanceof Date?s(t.endTime):s(t.endTime,e,!0);const[o,c]=M(r,a,e,n,i);t.endTime=o.toDate(),t.renderEndTime=c},M=function(t,e,n,i,s){let r=!1,a=null;for(;t<=e;)r||(a=e.toDate()),r=E(t,n,i,s),r&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,a]},Y=function(t,e,n){n=n.trim();const i=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(null!==i){let t=null;for(const n of i.groups.ids.split(" ")){let e=N(n);void 0!==e&&(!t||e.endTime>t.endTime)&&(t=e)}if(t)return t.endTime;const e=new Date;return e.setHours(0,0,0,0),e}let r=s(n,e.trim(),!0);if(r.isValid())return r.toDate();{c.l.debug("Invalid date:"+n),c.l.debug("With date format:"+e.trim());const t=new Date(n);if(void 0===t||isNaN(t.getTime())||t.getFullYear()<-1e4||t.getFullYear()>1e4)throw new Error("Invalid date:"+n);return t}},L=function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},I=function(t,e,n,i=!1){n=n.trim();const r=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(null!==r){let t=null;for(const n of r.groups.ids.split(" ")){let e=N(n);void 0!==e&&(!t||e.startTime<t.startTime)&&(t=e)}if(t)return t.startTime;const e=new Date;return e.setHours(0,0,0,0),e}let a=s(n,e.trim(),!0);if(a.isValid())return i&&(a=a.add(1,"d")),a.toDate();let o=s(t);const[c,l]=L(n);if(!Number.isNaN(c)){const t=o.add(c,l);t.isValid()&&(o=t)}return o.toDate()};let O=0;const W=function(t){return void 0===t?(O+=1,"task"+O):t};let F,P,B=[];const z={},N=function(t){const e=z[t];return B[e]},G=function(){const t=function(t){const e=B[t];let n="";switch(B[t].raw.startTime.type){case"prevTaskEnd":{const t=N(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":n=Y(0,f,B[t].raw.startTime.startData),n&&(B[t].startTime=n)}return B[t].startTime&&(B[t].endTime=I(B[t].startTime,f,B[t].raw.endTime.data,$),B[t].endTime&&(B[t].processed=!0,B[t].manualEndTime=s(B[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),A(B[t],f,p,k))),B[t].processed};let e=!0;for(const[n,i]of B.entries())t(n),e=e&&i.processed;return e},H=function(t,e){t.split(",").forEach((function(t){let n=N(t);void 0!==n&&n.classes.push(e)}))},j=function(t,e){_.push((function(){const n=document.querySelector(`[id="${t}"]`);null!==n&&n.addEventListener("click",(function(){e()}))}),(function(){const n=document.querySelector(`[id="${t}-text"]`);null!==n&&n.addEventListener("click",(function(){e()}))}))},U={getConfig:()=>(0,c.c)().gantt,clear:function(){b=[],v=[],T="",_=[],O=0,F=void 0,P=void 0,B=[],f="",y="",x="",h=void 0,m="",k=[],p=[],$=!1,D=!1,S=0,g={},(0,c.v)(),C="sunday"},setDateFormat:function(t){f=t},getDateFormat:function(){return f},enableInclusiveEndDates:function(){$=!0},endDatesAreInclusive:function(){return $},enableTopAxis:function(){D=!0},topAxisEnabled:function(){return D},setAxisFormat:function(t){y=t},getAxisFormat:function(){return y},setTickInterval:function(t){h=t},getTickInterval:function(){return h},setTodayMarker:function(t){m=t},getTodayMarker:function(){return m},setAccTitle:c.s,getAccTitle:c.g,setDiagramTitle:c.q,getDiagramTitle:c.t,setDisplayMode:function(t){x=t},getDisplayMode:function(){return x},setAccDescription:c.b,getAccDescription:c.a,addSection:function(t){T=t,b.push(t)},getSections:function(){return b},getTasks:function(){let t=G();let e=0;for(;!t&&e<10;)t=G(),e++;return v=B,v},addTask:function(t,e){const n={section:T,type:T,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),s={};R(i,s,w);for(let r=0;r<i.length;r++)i[r]=i[r].trim();switch(i.length){case 1:s.id=W(),s.startTime={type:"prevTaskEnd",id:t},s.endTime={data:i[0]};break;case 2:s.id=W(),s.startTime={type:"getStartDate",startData:i[0]},s.endTime={data:i[1]};break;case 3:s.id=W(i[0]),s.startTime={type:"getStartDate",startData:i[1]},s.endTime={data:i[2]}}return s}(P,e);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=P,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=S,S++;const s=B.push(n);P=n.id,z[n.id]=s-1},findTaskById:N,addTaskOrg:function(t,e){const n={section:T,type:T,description:t,task:t,classes:[]},i=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),r={};R(i,r,w);for(let s=0;s<i.length;s++)i[s]=i[s].trim();let a="";switch(i.length){case 1:r.id=W(),r.startTime=t.endTime,a=i[0];break;case 2:r.id=W(),r.startTime=Y(0,f,i[0]),a=i[1];break;case 3:r.id=W(i[0]),r.startTime=Y(0,f,i[1]),a=i[2]}return a&&(r.endTime=I(r.startTime,f,a,$),r.manualEndTime=s(a,"YYYY-MM-DD",!0).isValid(),A(r,f,p,k)),r}(F,e);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,F=n,v.push(n)},setIncludes:function(t){k=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return k},setExcludes:function(t){p=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return p},setClickEvent:function(t,e,n){t.split(",").forEach((function(t){!function(t,e,n){if("loose"!==(0,c.c)().securityLevel)return;if(void 0===e)return;let i=[];if("string"==typeof n){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<i.length;t++){let e=i[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),i[t]=e}}0===i.length&&i.push(t),void 0!==N(t)&&j(t,(()=>{c.u.runFunc(e,...i)}))}(t,e,n)})),H(t,"clickable")},setLink:function(t,e){let n=e;"loose"!==(0,c.c)().securityLevel&&(n=(0,i.Jf)(e)),t.split(",").forEach((function(t){void 0!==N(t)&&(j(t,(()=>{window.open(n,"_self")})),g[t]=n)})),H(t,"clickable")},getLinks:function(){return g},bindFunctions:function(t){_.forEach((function(e){e(t)}))},parseDuration:L,isInvalidDate:E,setWeekday:function(t){C=t},getWeekday:function(){return C}};function R(t,e,n){let i=!0;for(;i;)i=!1,n.forEach((function(n){const s=new RegExp("^\\s*"+n+"\\s*$");t[0].match(s)&&(e[n]=!0,t.shift(1),i=!0)}))}const V={monday:l.ABi,tuesday:l.PGu,wednesday:l.GuW,thursday:l.Mol,friday:l.TUC,saturday:l.rGn,sunday:l.YPH},Z=(t,e)=>{let n=[...t].map((()=>-1/0)),i=[...t].sort(((t,e)=>t.startTime-e.startTime||t.order-e.order)),s=0;for(const r of i)for(let t=0;t<n.length;t++)if(r.startTime>=n[t]){n[t]=r.endTime,r.order=t+e,t>s&&(s=t);break}return s};let X;const q={parser:u,db:U,renderer:{setConf:function(){c.l.debug("Something is calling, setConf, remove the call")},draw:function(t,e,n,i){const r=(0,c.c)().gantt,a=(0,c.c)().securityLevel;let o;"sandbox"===a&&(o=(0,l.Ltv)("#i"+e));const d="sandbox"===a?(0,l.Ltv)(o.nodes()[0].contentDocument.body):(0,l.Ltv)("body"),u="sandbox"===a?o.nodes()[0].contentDocument:document,h=u.getElementById(e);X=h.parentElement.offsetWidth,void 0===X&&(X=1200),void 0!==r.useWidth&&(X=r.useWidth);const f=i.db.getTasks();let y=[];for(const s of f)y.push(s.type);y=function(t){const e={},n=[];for(let i=0,s=t.length;i<s;++i)Object.prototype.hasOwnProperty.call(e,t[i])||(e[t[i]]=!0,n.push(t[i]));return n}(y);const m={};let k=2*r.topPadding;if("compact"===i.db.getDisplayMode()||"compact"===r.displayMode){const t={};for(const n of f)void 0===t[n.section]?t[n.section]=[n]:t[n.section].push(n);let e=0;for(const n of Object.keys(t)){const i=Z(t[n],e)+1;e+=i,k+=i*(r.barHeight+r.barGap),m[n]=i}}else{k+=f.length*(r.barHeight+r.barGap);for(const t of y)m[t]=f.filter((e=>e.type===t)).length}h.setAttribute("viewBox","0 0 "+X+" "+k);const p=d.select(`[id="${e}"]`),g=(0,l.w7C)().domain([(0,l.jkA)(f,(function(t){return t.startTime})),(0,l.T9B)(f,(function(t){return t.endTime}))]).rangeRound([0,X-r.leftPadding-r.rightPadding]);f.sort((function(t,e){const n=t.startTime,i=e.startTime;let s=0;return n>i?s=1:n<i&&(s=-1),s})),function(t,n,a){const o=r.barHeight,d=o+r.barGap,h=r.topPadding,f=r.leftPadding;(0,l.m4Y)().domain([0,y.length]).range(["#00B9FA","#F95002"]).interpolate(l.bEH);(function(t,e,n,a,o,l,d,u){if(0===d.length&&0===u.length)return;let h,f;for(const{startTime:i,endTime:s}of l)(void 0===h||i<h)&&(h=i),(void 0===f||s>f)&&(f=s);if(!h||!f)return;if(s(f).diff(s(h),"year")>5)return void c.l.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");const y=i.db.getDateFormat(),m=[];let k=null,b=s(h);for(;b.valueOf()<=f;)i.db.isInvalidDate(b,y,d,u)?k?k.end=b:k={start:b,end:b}:k&&(m.push(k),k=null),b=b.add(1,"d");p.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",(function(t){return"exclude-"+t.start.format("YYYY-MM-DD")})).attr("x",(function(t){return g(t.start)+n})).attr("y",r.gridLineStartPadding).attr("width",(function(t){const e=t.end.add(1,"day");return g(e)-g(t.start)})).attr("height",o-e-r.gridLineStartPadding).attr("transform-origin",(function(e,i){return(g(e.start)+n+.5*(g(e.end)-g(e.start))).toString()+"px "+(i*t+.5*o).toString()+"px"})).attr("class","exclude-range")})(d,h,f,0,a,t,i.db.getExcludes(),i.db.getIncludes()),function(t,e,n,s){let a=(0,l.l78)(g).tickSize(-s+e+r.gridLineStartPadding).tickFormat((0,l.DCK)(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(null!==o){const t=o[1],e=o[2],n=i.db.getWeekday()||r.weekday;switch(e){case"millisecond":a.ticks(l.t6C.every(t));break;case"second":a.ticks(l.ucG.every(t));break;case"minute":a.ticks(l.wXd.every(t));break;case"hour":a.ticks(l.Agd.every(t));break;case"day":a.ticks(l.UAC.every(t));break;case"week":a.ticks(V[n].every(t));break;case"month":a.ticks(l.Ui6.every(t))}}if(p.append("g").attr("class","grid").attr("transform","translate("+t+", "+(s-50)+")").call(a).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let n=(0,l.tlR)(g).tickSize(-s+e+r.gridLineStartPadding).tickFormat((0,l.DCK)(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(null!==o){const t=o[1],e=o[2],s=i.db.getWeekday()||r.weekday;switch(e){case"millisecond":n.ticks(l.t6C.every(t));break;case"second":n.ticks(l.ucG.every(t));break;case"minute":n.ticks(l.wXd.every(t));break;case"hour":n.ticks(l.Agd.every(t));break;case"day":n.ticks(l.UAC.every(t));break;case"week":n.ticks(V[s].every(t));break;case"month":n.ticks(l.Ui6.every(t))}}p.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(f,h,0,a),function(t,n,s,a,o,d,u){const h=[...new Set(t.map((t=>t.order)))].map((e=>t.find((t=>t.order===e))));p.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",(function(t,e){return t.order*n+s-2})).attr("width",(function(){return u-r.rightPadding/2})).attr("height",n).attr("class",(function(t){for(const[e,n]of y.entries())if(t.type===n)return"section section"+e%r.numberSectionStyles;return"section section0"}));const f=p.append("g").selectAll("rect").data(t).enter(),m=i.db.getLinks();f.append("rect").attr("id",(function(t){return t.id})).attr("rx",3).attr("ry",3).attr("x",(function(t){return t.milestone?g(t.startTime)+a+.5*(g(t.endTime)-g(t.startTime))-.5*o:g(t.startTime)+a})).attr("y",(function(t,e){return t.order*n+s})).attr("width",(function(t){return t.milestone?o:g(t.renderEndTime||t.endTime)-g(t.startTime)})).attr("height",o).attr("transform-origin",(function(t,e){return e=t.order,(g(t.startTime)+a+.5*(g(t.endTime)-g(t.startTime))).toString()+"px "+(e*n+s+.5*o).toString()+"px"})).attr("class",(function(t){const e="task";let n="";t.classes.length>0&&(n=t.classes.join(" "));let i=0;for(const[a,o]of y.entries())t.type===o&&(i=a%r.numberSectionStyles);let s="";return t.active?t.crit?s+=" activeCrit":s=" active":t.done?s=t.crit?" doneCrit":" done":t.crit&&(s+=" crit"),0===s.length&&(s=" task"),t.milestone&&(s=" milestone "+s),s+=i,s+=" "+n,e+s})),f.append("text").attr("id",(function(t){return t.id+"-text"})).text((function(t){return t.task})).attr("font-size",r.fontSize).attr("x",(function(t){let e=g(t.startTime),n=g(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(g(t.endTime)-g(t.startTime))-.5*o),t.milestone&&(n=e+o);const i=this.getBBox().width;return i>n-e?n+i+1.5*r.leftPadding>u?e+a-5:n+a+5:(n-e)/2+e+a})).attr("y",(function(t,e){return t.order*n+r.barHeight/2+(r.fontSize/2-2)+s})).attr("text-height",o).attr("class",(function(t){const e=g(t.startTime);let n=g(t.endTime);t.milestone&&(n=e+o);const i=this.getBBox().width;let s="";t.classes.length>0&&(s=t.classes.join(" "));let a=0;for(const[o,l]of y.entries())t.type===l&&(a=o%r.numberSectionStyles);let c="";return t.active&&(c=t.crit?"activeCritText"+a:"activeText"+a),t.done?c=t.crit?c+" doneCritText"+a:c+" doneText"+a:t.crit&&(c=c+" critText"+a),t.milestone&&(c+=" milestoneText"),i>n-e?n+i+1.5*r.leftPadding>u?s+" taskTextOutsideLeft taskTextOutside"+a+" "+c:s+" taskTextOutsideRight taskTextOutside"+a+" "+c+" width-"+i:s+" taskText taskText"+a+" "+c+" width-"+i}));if("sandbox"===(0,c.c)().securityLevel){let t;t=(0,l.Ltv)("#i"+e);const n=t.nodes()[0].contentDocument;f.filter((function(t){return void 0!==m[t.id]})).each((function(t){var e=n.querySelector("#"+t.id),i=n.querySelector("#"+t.id+"-text");const s=e.parentNode;var r=n.createElement("a");r.setAttribute("xlink:href",m[t.id]),r.setAttribute("target","_top"),s.appendChild(r),r.appendChild(e),r.appendChild(i)}))}}(t,d,h,f,o,0,n),function(t,e){let n=0;const i=Object.keys(m).map((t=>[t,m[t]]));p.append("g").selectAll("text").data(i).enter().append((function(t){const e=t[0].split(c.e.lineBreakRegex),n=-(e.length-1)/2,i=u.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("dy",n+"em");for(const[s,r]of e.entries()){const t=u.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttribute("alignment-baseline","central"),t.setAttribute("x","10"),s>0&&t.setAttribute("dy","1em"),t.textContent=r,i.appendChild(t)}return i})).attr("x",10).attr("y",(function(s,r){if(!(r>0))return s[1]*t/2+e;for(let a=0;a<r;a++)return n+=i[r-1][1],s[1]*t/2+n*t+e})).attr("font-size",r.sectionFontSize).attr("class",(function(t){for(const[e,n]of y.entries())if(t[0]===n)return"sectionTitle sectionTitle"+e%r.numberSectionStyles;return"sectionTitle"}))}(d,h),function(t,e,n,s){const a=i.db.getTodayMarker();if("off"===a)return;const o=p.append("g").attr("class","today"),c=new Date,l=o.append("line");l.attr("x1",g(c)+t).attr("x2",g(c)+t).attr("y1",r.titleTopMargin).attr("y2",s-r.titleTopMargin).attr("class","today"),""!==a&&l.attr("style",a.replace(/,/g,";"))}(f,0,0,a)}(f,X,k),(0,c.i)(p,k,X,r.useMaxWidth),p.append("text").text(i.db.getDiagramTitle()).attr("x",X/2).attr("y",r.titleTopMargin).attr("class","titleText")}},styles:t=>`\n  .mermaid-main-font {\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .exclude-range {\n    fill: ${t.excludeBkgColor};\n  }\n\n  .section {\n    stroke: none;\n    opacity: 0.2;\n  }\n\n  .section0 {\n    fill: ${t.sectionBkgColor};\n  }\n\n  .section2 {\n    fill: ${t.sectionBkgColor2};\n  }\n\n  .section1,\n  .section3 {\n    fill: ${t.altSectionBkgColor};\n    opacity: 0.2;\n  }\n\n  .sectionTitle0 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle1 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle2 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle3 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle {\n    text-anchor: start;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n\n  /* Grid and axis */\n\n  .grid .tick {\n    stroke: ${t.gridColor};\n    opacity: 0.8;\n    shape-rendering: crispEdges;\n  }\n\n  .grid .tick text {\n    font-family: ${t.fontFamily};\n    fill: ${t.textColor};\n  }\n\n  .grid path {\n    stroke-width: 0;\n  }\n\n\n  /* Today line */\n\n  .today {\n    fill: none;\n    stroke: ${t.todayLineColor};\n    stroke-width: 2px;\n  }\n\n\n  /* Task styling */\n\n  /* Default task */\n\n  .task {\n    stroke-width: 2;\n  }\n\n  .taskText {\n    text-anchor: middle;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .taskTextOutsideRight {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: start;\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n\n  .taskTextOutsideLeft {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: end;\n  }\n\n\n  /* Special case clickable */\n\n  .task.clickable {\n    cursor: pointer;\n  }\n\n  .taskText.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideLeft.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideRight.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n\n  /* Specific task settings for the sections*/\n\n  .taskText0,\n  .taskText1,\n  .taskText2,\n  .taskText3 {\n    fill: ${t.taskTextColor};\n  }\n\n  .task0,\n  .task1,\n  .task2,\n  .task3 {\n    fill: ${t.taskBkgColor};\n    stroke: ${t.taskBorderColor};\n  }\n\n  .taskTextOutside0,\n  .taskTextOutside2\n  {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n  .taskTextOutside1,\n  .taskTextOutside3 {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n\n  /* Active task */\n\n  .active0,\n  .active1,\n  .active2,\n  .active3 {\n    fill: ${t.activeTaskBkgColor};\n    stroke: ${t.activeTaskBorderColor};\n  }\n\n  .activeText0,\n  .activeText1,\n  .activeText2,\n  .activeText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Completed task */\n\n  .done0,\n  .done1,\n  .done2,\n  .done3 {\n    stroke: ${t.doneTaskBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneText0,\n  .doneText1,\n  .doneText2,\n  .doneText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Tasks on the critical line */\n\n  .crit0,\n  .crit1,\n  .crit2,\n  .crit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.critBkgColor};\n    stroke-width: 2;\n  }\n\n  .activeCrit0,\n  .activeCrit1,\n  .activeCrit2,\n  .activeCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.activeTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneCrit0,\n  .doneCrit1,\n  .doneCrit2,\n  .doneCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n    cursor: pointer;\n    shape-rendering: crispEdges;\n  }\n\n  .milestone {\n    transform: rotate(45deg) scale(0.8,0.8);\n  }\n\n  .milestoneText {\n    font-style: italic;\n  }\n  .doneCritText0,\n  .doneCritText1,\n  .doneCritText2,\n  .doneCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .activeCritText0,\n  .activeCritText1,\n  .activeCritText2,\n  .activeCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .titleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.titleColor||t.textColor};\n    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);\n  }\n`}}}]);