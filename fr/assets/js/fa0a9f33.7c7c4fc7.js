"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18101"],{120361:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"commands-legacy/milliseconds","title":"Milliseconds","description":"Milliseconds  : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/milliseconds.md","sourceDirName":"commands-legacy","slug":"/commands/milliseconds","permalink":"/docs/fr/commands/milliseconds","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmilliseconds.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"milliseconds","title":"Milliseconds","slug":"/commands/milliseconds","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Day of","permalink":"/docs/fr/commands/day-of"},"next":{"title":"Month of","permalink":"/docs/fr/commands/month-of"}}'),t=s("785893"),r=s("250065");let l={id:"milliseconds",title:"Milliseconds",slug:"/commands/milliseconds",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Milliseconds"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Nombre de millisecondes (1000\xe8me de seconde) \xe9coul\xe9es depuis le d\xe9marrage de la machine"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Milliseconds"})," retourne le nombre de millisecondes (1 milliseconde = 1/1000\xe8me de seconde) \xe9coul\xe9es depuis le d\xe9marrage de la machine."]}),"\n",(0,t.jsx)(n.p,{children:"La valeur retourn\xe9e est un entier long sign\xe9 allant jusqu'\xe0 2^31 (environ 2 milliards de millisecondes ou 24 jours). Lorsque la machine est lanc\xe9e depuis plus de 24 jours, la valeur devient n\xe9gative."}),"\n",(0,t.jsx)(n.p,{children:"Le but de la commande est de mesurer de courtes p\xe9riodes de temps avec une tr\xe8s grande pr\xe9cision. Une plage de 24 jours est suffisamment longue pour effectuer des comparaisons, mais il est important de prendre des pr\xe9cautions. Lors de la comparaison de valeurs, travaillez syst\xe9matiquement avec les diff\xe9rences entre les valeurs. Ne comparez jamais les valeurs directement, l'une d'elles pouvant \xeatre n\xe9gative et l'autre positive."}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Le code suivant attend jusqu'\xe0 5 secondes qu'un enregistrement soit d\xe9verrouill\xe9 :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If(Locked([Table_1]))\n\xa0\xa0\xa0\xa0$starttime:=Milliseconds\n\xa0\xa0\xa0\xa0Repeat\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELAY PROCESS(Current process;15)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LOAD RECORD([Table_1])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$waittime:=Milliseconds-$starttime\n\xa0\xa0\xa0\xa0Until(Not(Locked([Table_1]))|(Process aborted)|($waittime>5000))\xa0//patientez 5 secondes maximum\n\xa0End if\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Pensez \xe0 toujours comparer la diff\xe9rence entre deux appels de ",(0,t.jsx)(n.strong,{children:"Milliseconds"})," tel qu'indiqu\xe9 ci-dessus, et \xe0 ne jamais faire de comparaison directe, comme par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0(Milliseconds>($starttime+5000))\xa0// ne suivez jamais cet exemple, l'une des valeurs pouvant \xeatre positive et l'autre n\xe9gative\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/current-time",children:"Current time"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/tickcount",children:"Tickcount"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/timestamp",children:"Timestamp"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var i=s(667294);let t={},r=i.createContext(t);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);