"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90711"],{430854:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/current-time","title":"Current time","description":"Current time {( * )} : Time","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/current-time.md","sourceDirName":"commands-legacy","slug":"/commands/current-time","permalink":"/docs/fr/commands/current-time","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-time.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"current-time","title":"Current time","slug":"/commands/current-time","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current date","permalink":"/docs/fr/commands/current-date"},"next":{"title":"Date","permalink":"/docs/fr/commands/date"}}'),s=r("785893"),i=r("250065");let o={id:"current-time",title:"Current time",slug:"/commands/current-time",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Current time"})," {( * )} : Time"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Retourne l'heure courante sur le poste serveur"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Heure courante"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La fonction ",(0,s.jsx)(n.strong,{children:"Current time"})," retourne l'heure courante d\xe9finie dans l'horloge de votre syst\xe8me."]}),"\n",(0,s.jsxs)(n.p,{children:["L'heure courante est toujours comprise entre ",(0,s.jsx)(n.em,{children:"00:00:00"})," et ",(0,s.jsx)(n.em,{children:"23:59:59"}),". Vous pouvez utiliser les fonctions ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/string",children:"String"})," ou ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/time-string",children:"Time string"})," pour convertir en cha\xeene alphanum\xe9rique l'expression de type heure retourn\xe9e par ",(0,s.jsx)(n.strong,{children:"Current time"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server :"})," Si vous passez le param\xe8tre ast\xe9risque (*) \u2014 lors d'une ex\xe9cution sur un poste 4D Client \u2014, la fonction retourne l'heure courante telle que d\xe9finie dans l'horloge du poste serveur."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant vous permet de mesurer la dur\xe9e d'une op\xe9ration. Dans cet exemple, vous voulez chronom\xe9trer la m\xe9thode longueOp\xe9ration :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$vhStartTime:=((Current date-!1980-01-01!)*86400)+Current time\xa0//M\xe9morisez le d\xe9marrage de l'op\xe9ration en secondes \xe9coul\xe9es apr\xe8s le 01/01/1980.\n\xa0longueOp\xe9ration\xa0//Lancez l'op\xe9ration\n\xa0$vhEndTime:=((Current date-!1980-01-01!)*86400)+Current time\n\xa0ALERT(\"L'op\xe9ration a dur\xe9\"+String($vhEndTime-$vhStartTime)+\" secondes.\")\xa0//Affichez la dur\xe9e de l'op\xe9ration\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant extrait les heures, minutes et secondes de l'heure courante :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$vhMaintenant:=Current time\n\xa0ALERT("L\'heure courante est : "+String($vhMaintenant\\3600))\n\xa0ALERT("La minute courante est : "+String(($vhMaintenant\\60)%60))\n\xa0ALERT("La seconde courante est : "+String($vhMaintenant%60))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/milliseconds",children:"Milliseconds"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/string",children:"String"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/tickcount",children:"Tickcount"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var t=r(667294);let s={},i=t.createContext(s);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);