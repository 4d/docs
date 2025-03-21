"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79029"],{252454:function(e,r,n){n.r(r),n.d(r,{default:()=>c,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-text-keywords","title":"GET TEXT KEYWORDS","description":"GET TEXT KEYWORDS ( text ; arrKeywords {; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-text-keywords.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-keywords","permalink":"/docs/commands/get-text-keywords","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-keywords.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-text-keywords","title":"GET TEXT KEYWORDS","slug":"/commands/get-text-keywords","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Delete string","permalink":"/docs/commands/delete-string"},"next":{"title":"Insert string","permalink":"/docs/commands/insert-string"}}'),s=n("785893"),a=n("250065");let i={id:"get-text-keywords",title:"GET TEXT KEYWORDS",slug:"/commands/get-text-keywords",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GET TEXT KEYWORDS"})," ( ",(0,s.jsx)(r.em,{children:"text"})," ; ",(0,s.jsx)(r.em,{children:"arrKeywords"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Original text"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"arrKeywords"}),(0,s.jsx)(r.td,{children:"Text array"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Array containing keywords"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"*"}),(0,s.jsx)(r.td,{children:"Operator"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"If passed = unique words"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"GET TEXT KEYWORDS"})," command splits all the ",(0,s.jsx)(r.em,{children:"text"})," into individual words and creates an item in the ",(0,s.jsx)(r.em,{children:"arrKeywords"})," text array for each word."]}),"\n",(0,s.jsxs)(r.p,{children:["4D uses the same algorithm to break up text into individual words that it does to build a ",(0,s.jsx)(r.em,{children:"Keywords index"}),". It is based on the ICU library. For more information about how text is separated into words, refer to the following address: ",(0,s.jsx)(r.a,{href:"http://userguide.icu-project.org/boundaryanalysis",children:"http://userguide.icu-project.org/boundaryanalysis"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"}),' At the request of users, we introduced an exception for French and Italian: the apostrophe (\') followed by either a vowel or the letter "h" is considered as a word separator. For example, the strings "L\'homme" or "l\'arbre" are split into "L\u2019"+"homme" and "l\'"+"arbre".']}),"\n",(0,s.jsxs)(r.p,{children:["The algorithm used differs according to whether or not the ",(0,s.jsx)(r.strong,{children:"Consider only non-alphanumeric chars for keywords"})," option is checked in the ",(0,s.jsx)(r.a,{href:"/docs/settings/database#text-comparison",children:"Database settings"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["In the ",(0,s.jsx)(r.em,{children:"text"})," parameter, pass the original text to be split into words. This can be styled text, in which case style tags are ignored."]}),"\n",(0,s.jsxs)(r.p,{children:["For the ",(0,s.jsx)(r.em,{children:"arrKeywords"})," parameter, the command fills this text array with the words extracted from the text."]}),"\n",(0,s.jsxs)(r.p,{children:["If you pass the optional ",(0,s.jsx)(r.em,{children:"*"})," parameter, the command only stores each different keyword once in ",(0,s.jsx)(r.em,{children:"arrKeywords"}),". By default, if this parameter is omitted, all the words extracted from the text are stored in the array, even when they appear more than once."]}),"\n",(0,s.jsx)(r.p,{children:'This command gives you a simple way to search records containing large amounts of text with the assurance of using the same keywords as 4D. For example, imagine you have a text containing "10,000 Jean-Pierre BC45". If this text is split into the keywords "10,000" + "Jean" + "Pierre" + "BC45", then the array contains 4 elements. Then it is easy to loop through this array by programming to find records containing one or more of these keywords using the % operator (see examples).'}),"\n",(0,s.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(r.p,{children:["In a form with a search area, users can enter one or more word(s). When a user validates this form, we look for records where the ",(0,s.jsx)(r.em,{children:"MyField"})," field contains at least one of the words entered by the user."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// vSearch is the variable of the search area in the form\n\xa0GET TEXT KEYWORDS(vSearch;arrSearch;*)\n\xa0\xa0//* in case a user enters the same word more than once\n\xa0CREATE SET([MyTable];"Totalfound")\n\xa0$n:=Size of array(arrSearch)\n\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0QUERY([MyTable];[MyTable]MyField % arrSearch{$i})\n\xa0\xa0\xa0\xa0CREATE SET(([MyTable];"found")\n\xa0\xa0\xa0\xa0UNION("Totalfound";"found";"Totalfound")\n\xa0End for\n\xa0USE SET("Totalfound")\n'})}),"\n",(0,s.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(r.p,{children:["In the same form as before, we look for records where the ",(0,s.jsx)(r.em,{children:"MyField"})," field contains all the words entered by the user."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// vSearch is the variable of the search area in the form\n\xa0GET TEXT KEYWORDS(vSearch;arrSearch;*)\n\xa0$n:=Size of array(arrSearch)\n\xa0QUERY([MyTable];[MyTable]MyField >=0;*)\n\xa0\xa0// initializing search = all records\n\xa0For($i;1;$n)\n\xa0\xa0\xa0\xa0QUERY([MyTable];&;[MyTable]MyField % arrSearch{$i};*)\n\xa0\xa0// add criterion\n\xa0End for\n\xa0QUERY([MyTable])\xa0//search\n"})}),"\n",(0,s.jsx)(r.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(r.p,{children:"To count words in a text:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0GET TEXT KEYWORDS(vText;arrWords)\xa0// all words\n\xa0$n:=Size of array(arrWords)\n\xa0GET TEXT KEYWORDS(vText;arrWords;*)\xa0// different words\n\xa0$m:=Size of array(arrWords)\n\xa0ALERT("This text contains "+String($n)+" separate words among "+String($m))\n'})}),"\n",(0,s.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/commands/distinct-values",children:"DISTINCT VALUES"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"1141"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return i}});var t=n(667294);let s={},a=t.createContext(s);function i(e){let r=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);