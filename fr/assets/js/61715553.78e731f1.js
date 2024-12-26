"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78709"],{746075:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/time","title":"Time","description":"Time ( valHeure ) : Time","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/time.md","sourceDirName":"commands-legacy","slug":"/commands/time","permalink":"/docs/fr/commands/time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftime.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"time","title":"Time","slug":"/commands/time","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Tickcount","permalink":"/docs/fr/commands/tickcount"},"next":{"title":"Time string","permalink":"/docs/fr/commands/time-string"}}'),t=r("785893"),i=r("250065");let d={id:"time",title:"Time",slug:"/commands/time",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Time"})," ( ",(0,t.jsx)(n.em,{children:"valHeure"})," ) : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valHeure"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur \xe0 retourner sous forme d'heure"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Time"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Heure d\xe9finie par valHeure"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"Time"})," retourne, sous la forme d'une expression de type Heure, l'heure d\xe9finie dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"valHeure"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"valHeure"})," peut contenir soit :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["une cha\xeene contenant une heure exprim\xe9e dans l'un des formats d'heure standard de 4D correspondant \xe0 la langue de votre syst\xe8me (pour plus d'informations, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/string",children:"String"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"un entier long repr\xe9sentant un nombre de secondes \xe9coul\xe9es depuis 00:00:00."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note : Si l'\xe9valuation de l'expression ",(0,t.jsx)(n.em,{children:"valHeure"})," donne une valeur ind\xe9finie, ",(0,t.jsx)(n.strong,{children:"Time"})," retourne une heure vide (00:00:00). Ce fonctionnement est utile lorsque le code attend toujours une heure alors que l'\xe9valuation de ",(0,t.jsx)(n.em,{children:"valHeure"})," peut parfois aboutir au type ",(0,t.jsx)(n.strong,{children:"ind\xe9fini"})," (cas par exemple des attributs d'objets)."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant affiche une bo\xeete de dialogue d'alerte avec le message \u201C1:00 P.M. = 13 heures 0 minute.\u201D :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("1:00 P.M. = "+String(Heure("13:00:00");Heures Minutes))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez exprimer toute valeur num\xe9rique sous forme d\u2019heure :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0vHeure:=Time(10000)\n\xa0\xa0\xa0\xa0\xa0//vHeure vaut 02:46:40\n\xa0vHeure2:=Time((60*60)+(20*60)+5200)\n\xa0\xa0\xa0\xa0\xa0//vHeure2 vaut 02:46:40\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/array-time",children:"ARRAY TIME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/bool",children:"Bool"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/string",children:"String"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/time-string",children:"Time string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/timestamp",children:"Timestamp"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"179"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);