"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11353"],{285131:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/timestamp","title":"Timestamp","description":"Timestamp : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/timestamp.md","sourceDirName":"commands-legacy","slug":"/commands/timestamp","permalink":"/docs/fr/commands/timestamp","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftimestamp.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"timestamp","title":"Timestamp","slug":"/commands/timestamp","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Time string","permalink":"/docs/fr/commands/time-string"},"next":{"title":"Year of","permalink":"/docs/fr/commands/year-of"}}'),i=n("785893"),r=n("250065");let o={id:"timestamp",title:"Timestamp",slug:"/commands/timestamp",displayed_sidebar:"docs"},a=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let s={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Timestamp"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"R\xe9sultat"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Heure courante au format ISO avec millisecondes"})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"Timestamp"}),' retourne l\'heure UTC courante au format ISO avec millisecondes, i.e. aaaa-MM-jjTHH:mm:ss.SSSZ. Notez que le caract\xe8re "Z" indique le fuseau horaire GMT.']}),"\n",(0,i.jsxs)(s.p,{children:["Chaque heure retourn\xe9e par ",(0,i.jsx)(s.strong,{children:"Timestamp"})," est exprim\xe9e selon le standard ISO 8601. Pour plus d'informations sur ce standard, veuillez consulter ",(0,i.jsx)(s.a,{href:"https://fr.wikipedia.org/wiki/ISO%5F8601",children:"la page qui lui est consacr\xe9e"})," sur Wikipedia."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note :"})," Cette fonction n'est pas adapt\xe9e aux fonctions de chronom\xe9trage. Si vous souhaitez mesurer le temps \xe9coul\xe9, il est pr\xe9f\xe9rable d'utiliser la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/milliseconds",children:"Milliseconds"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez utiliser ",(0,i.jsx)(s.strong,{children:"Timestamp"})," dans un fichier journal pour savoir pr\xe9cis\xe9ment \xe0 quel moment les \xe9v\xe9nements se produisent. Comme le montre l'exemple ci-dessous, il est possible que plusieurs op\xe9rations s'ex\xe9cutent durant la m\xeame seconde :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0$vhDocRef:=Append document("TimestampProject.log")\n\xa0$logWithTimestamp:=Timestamp+Char(Tab)+"Journal avec timestamp"+Char(Carriage return)\n\xa0SEND PACKET($vhDocRef;String($logWithTimestamp))\n'})}),"\n",(0,i.jsx)(s.p,{children:"R\xe9sultat :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-RAW",children:"2016-12-12T13:31:29.477Z\xa0\xa0 Journal avec timestamp2016-12-12T13:31:29.478Z\xa0\xa0 Connection of user12016-12-12T13:31:29.486Z\xa0\xa0 ERROR - Exception of type 'System exception'2016-12-12T13:31:29.492Z\xa0\xa0 Click on button16842016-12-12T13:31:29.502Z\xa0\xa0 [SP_HELP- 1 rows] Command processed2016-12-12T13:31:29.512Z\xa0\xa0 [SP_HELP- 5 rows] Result set fetched\n"})}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/commands/milliseconds",children:"Milliseconds"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/string",children:"String"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/commands/time",children:"Time"})]})]})}function m(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return o}});var t=n(667294);let i={},r=t.createContext(i);function o(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);