"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90881"],{755327:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/time-string","title":"Time string","description":"Time string ( secondes ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/time-string.md","sourceDirName":"commands-legacy","slug":"/commands/time-string","permalink":"/docs/fr/20-R7/commands/time-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftime-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"time-string","title":"Time string","slug":"/commands/time-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Time","permalink":"/docs/fr/20-R7/commands/time"},"next":{"title":"Timestamp","permalink":"/docs/fr/20-R7/commands/timestamp"}}'),r=s("785893"),i=s("250065");let d={id:"time-string",title:"Time string",slug:"/commands/time-string",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Time string"})," ( ",(0,r.jsx)(n.em,{children:"secondes"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secondes"}),(0,r.jsx)(n.td,{children:"Integer, Time"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Secondes \xe9coul\xe9es depuis minuit"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Heure sous forme de cha\xeene au format 24 heures"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La fonction ",(0,r.jsx)(n.strong,{children:"Time string"})," retourne sous forme de cha\xeene alphanum\xe9rique sur 24 heures l'expression de type Heure pass\xe9e dans ",(0,r.jsx)(n.em,{children:"secondes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Le format appliqu\xe9 \xe0 la cha\xeene est HH:MM:SS."}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez un nombre de secondes sup\xe9rieur \xe0 celui qu'il y a dans un jour (86 400), ",(0,r.jsx)(n.strong,{children:"Time string"})," continue d'ajouter les heures, les minutes et les secondes. Par exemple, ",(0,r.jsx)(n.strong,{children:"Time string"}),"(86401) retourne 24:00:01."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si vous voulez obtenir sous forme de cha\xeene une expression de type Heure dans des formats plus vari\xe9s, utilisez la fonction ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/string",children:"String"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"L'exemple suivant affiche une bo\xeete de dialogue d'alerte avec le message \u201C46800 secondes repr\xe9sentent 13:00:00\u201D :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("46800 secondes repr\xe9sentent "+Time string(46800))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/string",children:"String"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/time",children:"Time"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"180"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);