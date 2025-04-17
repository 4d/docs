"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5645"],{256604:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/wa-get-preference","title":"WA GET PREFERENCE","description":"WA GET PREFERENCE ( { ;} objet ; s\xe9lecteur ; valeur* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-get-preference.md","sourceDirName":"commands-legacy","slug":"/commands/wa-get-preference","permalink":"/docs/fr/20-R8/commands/wa-get-preference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-get-preference.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-get-preference","title":"WA GET PREFERENCE","slug":"/commands/wa-get-preference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Get page title","permalink":"/docs/fr/20-R8/commands/wa-get-page-title"},"next":{"title":"WA GET URL FILTERS","permalink":"/docs/fr/20-R8/commands/wa-get-url-filters"}}'),s=r("785893"),d=r("250065");let i={id:"wa-get-preference",title:"WA GET PREFERENCE",slug:"/commands/wa-get-preference",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WA GET PREFERENCE"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objet"})," ; ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,s.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objet"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"s\xe9lecteur"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pr\xe9f\xe9rence \xe0 lire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"valeur"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valeur courante de la pr\xe9f\xe9rence"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"WA GET PREFERENCE"})," permet de lire la valeur courante d\u2019une pr\xe9f\xe9rence dans la zone Web d\xe9sign\xe9e par les param\xe8tres ",(0,s.jsx)(n.em,{children:"*"})," et ",(0,s.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"s\xe9lecteur"}),' la pr\xe9f\xe9rence \xe0 lire. Vous pouvez passer l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me "',(0,s.jsx)(n.em,{children:"Zone Web"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable contextual menu"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Autoriser l\u2019affichage du menu contextuel standard dans la zone Web. Par d\xe9faut (n'importe quelle machine) = Faux."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable Java applets"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Autoriser l\u2019ex\xe9cution d\u2019applets Java dans la zone Web. Par d\xe9faut (machine syst\xe8me) = Vrai. Par d\xe9faut (machine int\xe9gr\xe9e) = toujours Faux, ne peut pas \xeatre activ\xe9."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable JavaScript"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Autoriser l\u2019ex\xe9cution de code JavaScript dans la zone Web. Par d\xe9faut (machine syst\xe8me) = Vrai. Par d\xe9faut (machine int\xe9gr\xe9e) = toujours Vrai, ne peut pas \xeatre d\xe9sactiv\xe9."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable plugins"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Autoriser l\u2019installation de plug-ins dans la zone Web. Par d\xe9faut (machine syst\xe8me) = Vrai. Par d\xe9faut (machine int\xe9gr\xe9e) = toujours Faux, ne peut pas \xeatre activ\xe9."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable URL drop"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"101"}),(0,s.jsx)(n.td,{children:"Autoriser le d\xe9poser d'URLs ou de fichiers dans la zone Web. Par d\xe9faut (n'importe quelle machine) = Faux."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"WA enable Web inspector"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"100"}),(0,s.jsx)(n.td,{children:"Autoriser l\u2019affichage de l\u2019inspecteur Web dans la zone. Par d\xe9faut (n'importe quelle machine) = Faux."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,s.jsx)(n.em,{children:"valeur"})," une variable devant recevoir la valeur courante de la pr\xe9f\xe9rence. Le type de la variable d\xe9pend de la pr\xe9f\xe9rence. La variable ",(0,s.jsx)(n.em,{children:"valeur"})," est toujours de type bool\xe9en : elle contient Vrai si la pr\xe9f\xe9rence est active et Faux sinon."]}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/wa-set-preference",children:"WA SET PREFERENCE"})}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1042"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);