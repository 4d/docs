"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47414"],{147398:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/string","title":"String","description":"String ( expression {; format {; addTime}} ) : Text","source":"@site/versioned_docs/version-20-R9/commands-legacy/string.md","sourceDirName":"commands-legacy","slug":"/commands/string","permalink":"/docs/commands/string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstring.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"string","title":"String","slug":"/commands/string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Split string","permalink":"/docs/commands/split-string"},"next":{"title":"Substring","permalink":"/docs/commands/substring"}}'),r=s("785893"),i=s("250065");let d={id:"string",title:"String",slug:"/commands/string",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"String"})," ( ",(0,r.jsx)(n.em,{children:"expression"})," {; ",(0,r.jsx)(n.em,{children:"format"})," {; ",(0,r.jsx)(n.em,{children:"addTime"}),"}} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expression"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Expression for which to return the string form (can be Real, Integer, Long Integer, Date, Time, String, Text, Boolean, Undefined, or Null)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"format"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Display format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"addTime"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Time to add on if expression is a date"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"String form of the expression"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The String command returns the string form of the numeric, Date, Time, string or Boolean expression you pass in ",(0,r.jsx)(n.em,{children:"expression"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not pass the optional ",(0,r.jsx)(n.em,{children:"format"})," parameter, the string is returned with the appropriate default format. If you pass ",(0,r.jsx)(n.em,{children:"format"}),", you can force the result string to be of a specific format."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"addTime"})," parameter adds a time to a date in a combined format. It can only be used when the ",(0,r.jsx)(n.em,{children:"expression"})," parameter is a date (see below)."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Numeric Expressions"}),(0,r.jsx)(n.br,{}),"\nIf ",(0,r.jsx)(n.em,{children:"expression"})," is a numeric expression (Real, Integer, Long Integer), you can pass an optional string format. Following are some examples:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Example"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Result"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Comments"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String(2^15)"}),(0,r.jsx)(n.td,{children:'"32768"'}),(0,r.jsx)(n.td,{children:"Default format"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(2^15;"###,##0 Inhabitants")'}),(0,r.jsx)(n.td,{children:'"32,768 Inhabitants"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(1/3;"##0.00000")'}),(0,r.jsx)(n.td,{children:'"0.33333"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String(1/3)"}),(0,r.jsx)(n.td,{children:'"0.3333333333333"'}),(0,r.jsx)(n.td,{children:"Default format(*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String(Arctan(1)*4)"}),(0,r.jsx)(n.td,{children:'"3.14159265359"'}),(0,r.jsx)(n.td,{children:"Default format(*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(Arctan(1)*4;"##0.00")'}),(0,r.jsx)(n.td,{children:'"3.14"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(-1;"&x")'}),(0,r.jsx)(n.td,{children:'"0xFFFFFFFF"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(-1;"&$")'}),(0,r.jsx)(n.td,{children:'"$FFFFFFFF"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(0 ?+ 7;"&x")'}),(0,r.jsx)(n.td,{children:'"0x0080"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(0 ?+ 7;"&$")'}),(0,r.jsx)(n.td,{children:'"$80"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(0 ?+ 14;"&x")'}),(0,r.jsx)(n.td,{children:'"0x4000"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(0 ?+ 14;"&$")'}),(0,r.jsx)(n.td,{children:'"$4000"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(50.3;"&xml")'}),(0,r.jsx)(n.td,{children:'"50.3"'}),(0,r.jsx)(n.td,{children:'Always "." as decimal separator'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(Num(1=1);"True;;False")'}),(0,r.jsx)(n.td,{children:'"True"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'String(Num(1=2);"True;;False")'}),(0,r.jsx)(n.td,{children:'"False"'}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String(Log(-1))"}),(0,r.jsx)(n.td,{children:'""'}),(0,r.jsx)(n.td,{children:"Undefined number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String(1/0)"}),(0,r.jsx)(n.td,{children:'"INF"'}),(0,r.jsx)(n.td,{children:"Positive infinite number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"String(-1/0)"}),(0,r.jsx)(n.td,{children:'"-INF"'}),(0,r.jsx)(n.td,{children:"Negative infinite number"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*) The algorithm for converting real values into text is based on 13 significant digits."}),"\n",(0,r.jsxs)(n.p,{children:["The format is specified in the same way as it would be for a number field on a form. See the section ",(0,r.jsx)(n.em,{children:"Display formats"})," in the 4D Design Reference manual for more information about formatting numbers. You can also pass the name of a custom style in ",(0,r.jsx)(n.em,{children:"format"}),". The custom style name must be preceded by the ",(0,r.jsx)(n.em,{children:"\u201C|\u201D"})," character."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ",(0,r.jsx)(n.strong,{children:"String"}),' function is not compatible with "Integer 64 bits" type fields in compiled mode.']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Date Expressions"}),(0,r.jsx)(n.br,{}),"\nIf ",(0,r.jsx)(n.em,{children:"expression"})," is a Date expression and if you omit the ",(0,r.jsx)(n.em,{children:"format"})," parameter, the string is returned using the default format specified in the system."]}),"\n",(0,r.jsxs)(n.p,{children:["Otherwise, in the ",(0,r.jsx)(n.em,{children:"format"})," parameter, you can pass:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["either a predefined format available though the following constants of the ",(0,r.jsx)(n.em,{children:"Date Display Formats"})," theme (longint value):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blank if null date"}),(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"To be added to the format constant. Indicates that in the case of a null value, 4D must return an empty string instead of zeros"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Date RFC 1123"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"Fri, 10 Sep 2010 13:07:20 GMT (see Notes)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Internal date abbreviated"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"Dec 29, 2006"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Internal date long"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"December 29, 2006"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Internal date short"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"12/29/2006"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Internal date short special"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"12/29/06 (but 12/29/1896 or 12/29/2096)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ISO Date"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"2006-12-29T00:00:00 (see Notes)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ISO Date GMT"}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:"2010-09-13T16:11:53Z (see Notes)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System date abbreviated"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Sun, Dec 29, 2006"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System date long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"Sunday, December 29, 2006"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System date short"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"12/29/2006"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vsResult:=String(!2023-11-27!)\xa0//"11/27/2023"  \n\xa0$vsResult:=String(!2023-11-27!;Internal date long)\xa0// "November 27, 2023"  \n\xa0$vsResult:=String(!2023-11-27!;ISO Date GMT)\xa0// "2023-11-26T23:00:00Z" in French timezone  \n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["or a ",(0,r.jsx)(n.a,{href:"/docs/Project/date-time-formats",children:"customized format built upon a pattern"})," (string value)",(0,r.jsx)(n.br,{}),"\nExamples:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vsResult:=String(!2023-11-27!;"EEEE d MMMM y GGGG")\xa0//"Monday 27 November 2023 Anno Domini"  \n\xa0$vsResult:=String(!2023-11-27!;"E dd/MM/yyyy zzzz")\xa0//"Mon 27/11/2023 GMT+01:00" in French timezone  \n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Formats can vary depending on system settings."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.em,{children:"addTime"})," parameter"]}),"\nWhen processing Date expressions, you can also pass a time in the ",(0,r.jsx)(n.em,{children:"addTime"})," parameter. This parameter lets you combine a date with a time so that you can generate time stamps in compliance with current standards (ISO Date GMT and Date RFC 1123 constants). These formats are particularly useful in the context of xml and Web processing. The ",(0,r.jsx)(n.em,{children:"addTime"})," parameter can only be used when the ",(0,r.jsx)(n.em,{children:"expression"})," parameter is a date."]}),"\n",(0,r.jsx)(n.p,{children:"This parameter can be used with both predefined or pattern-based date formats. Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$dateTime:=String(!2010-09-09!;ISO date GMT;Current time)\xa0//"2010-09-09T08:30:41Z"\n\xa0$dateTime2:=String(!2023-11-27!;"E dd/MM/yyyy \'at\' hh:mm aa O";?11:15:00?)\xa0//"Mon 27/11/2023 at 11:15 AM GMT+1"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes about combined date/time predefined formats:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The ISO Date GMT format corresponds to the ISO8601 standard, containing a date and a time expressed with respect to the time zone (GMT)."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$mydate:=String(Current date;ISO Date GMT;Current time)\xa0// returns, for instance, 2010-09-13T16:11:53Z  \n"})}),"\n",(0,r.jsxs)(n.p,{children:['Note that the "Z" character at the end indicates the GMT format.',(0,r.jsx)(n.br,{}),"\nIf you do not pass the ",(0,r.jsx)(n.em,{children:"addTime"})," parameter, the command returns the date at midnight (local time) expressed in GMT time, which may cause the date to be moved forward or back depending on the local time zone:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$mydate:=String(!13/09/2010!;ISO Date GMT)\xa0// returns 2010-09-12T22:00:00Z in France  \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The ISO Date format is similar to the ISO Date GMT, except that it expresses the date and time without respect to the time zone. Note that since this format does not comply with the ISO8601 standard, its use should be reserved for very specific purposes."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$mydate:=String(!13/09/2010!;ISO Date)\xa0// returns 2010-09-13T00:00:00 regardless of the time zone  \n\xa0$mydate:=String(Current date;ISO Date;Current time)\xa0// returns 2010-09-13T18:11:53  \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Date RFC 1123 format formats a date/time combination according to the standard defined by RFC 822 and 1123. You need this format for example to set the expiration date for cookies in an HTTP header."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$mydate:=String(Current date;Date RFC 1123;Current time)\xa0// returns, for example Fri, 10 Sep 2010 13:07:20 GMT  \n"})}),"\n",(0,r.jsx)(n.p,{children:"The time expressed takes the time zone into account (GMT zone). If you only pass a date, the command returns the date at midnight (local time) expressed in GMT time which may cause the date to be moved forward or back depending on the local time zone:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$mydate:=String(!2010-09-09!;Date RFC 1123)\xa0// returns Wed, 08 Sep 2010 22:00:00 GMT  \n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Time Expressions"}),(0,r.jsx)(n.br,{}),"\nIf ",(0,r.jsx)(n.em,{children:"expression"})," is a Time expression and if you omit the ",(0,r.jsx)(n.em,{children:"format"})," parameter, the string is returned using the default HH:MM:SS format."]}),"\n",(0,r.jsxs)(n.p,{children:["Otherwise, in the ",(0,r.jsx)(n.em,{children:"format"})," parameter, you can pass:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["either a predefined format available though the following constants of the ",(0,r.jsx)(n.em,{children:"Time Display Formats"})," theme (longint value):"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blank if null time"}),(0,r.jsx)(n.td,{children:"100"}),(0,r.jsx)(n.td,{children:"To be added to the format constant. Indicates that in the case of a null value, 4D must return an empty string instead of zeros"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HH MM"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"01:02"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HH MM AM PM"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"1:02 AM"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HH MM SS"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"01:02:03"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hour min"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"1 hour 2 minutes"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hour min sec"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"1 hour 2 minutes 3 seconds"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ISO time"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsx)(n.td,{children:"0000-00-00T01:02:03. Corresponds to the ISO8601 standard and contains, in theory, a date and a time. Since this format does not support combined dates/times, the date part is filled with 0s. This format expresses the local time."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Min sec"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsx)(n.td,{children:"62 minutes 3 seconds"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MM SS"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"62:03"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System time long"}),(0,r.jsx)(n.td,{children:"11"}),(0,r.jsx)(n.td,{children:"1:02:03 AM HNEC (Mac only)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System time long abbreviated"}),(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"1\u202202\u202203 AM (Mac only)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"System time short"}),(0,r.jsx)(n.td,{children:"9"}),(0,r.jsx)(n.td,{children:"01:02:03"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vsResult:=String(?17:30:45?;HH MM AM PM)\xa0//"5:30 PM"  \n\xa0$vsResult:=String(?17:30:45?;Hour Min Sec)\xa0//"17 hours 30 minutes 45 seconds"  \n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["or a ",(0,r.jsx)(n.a,{href:"/docs/Project/date-time-formats",children:"customized format built upon a pattern"})," (string value)",(0,r.jsx)(n.br,{}),"\nExamples:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vsResult:=String(?17:30:45?;"hh:mm aa O")\xa0//"05:30 PM GMT+1"  \n\xa0$vsResult:=String(?17:30:45?;"\'It is\' K a")\xa0//"It is 5 PM"  \n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"String Expressions"}),(0,r.jsx)(n.br,{}),"\nIf ",(0,r.jsx)(n.em,{children:"expression"})," is of the String or Text type, the command returns the same value as the one passed in the parameter. This can be useful more particularly in generic programming using pointers.",(0,r.jsx)(n.br,{}),"\nIn this case, the ",(0,r.jsx)(n.em,{children:"format"})," parameter, if passed, is ignored."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Boolean Expressions"}),(0,r.jsx)(n.br,{}),"\nIf ",(0,r.jsx)(n.em,{children:"expression"})," is of the Boolean type, the command returns the string \u201CTrue\u201D or \u201CFalse\u201D in the language of the application (for example, \u201CVrai\u201D or \u201CFaux\u201D in a French version of 4D).",(0,r.jsx)(n.br,{}),"\nIn this case, the ",(0,r.jsx)(n.em,{children:"format"})," parameter, if passed, is ignored."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Undefined Expressions"}),(0,r.jsx)(n.br,{}),"\nIf ",(0,r.jsx)(n.em,{children:"expression"})," is evaluated to undefined, the command returns an empty string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be undefined."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Null Expressions"}),(0,r.jsx)(n.br,{}),"\nIf ",(0,r.jsx)(n.em,{children:"expression"}),' is evaluated to Null, the command returns the "null" string. This is useful when you expect the result of an expression (e.g. an object attribute) to be a string, even if it can be null.']}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/bool",children:"Bool"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/date",children:"Date"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/num",children:"Num"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/time-string",children:"Time string"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/timestamp",children:"Timestamp"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);