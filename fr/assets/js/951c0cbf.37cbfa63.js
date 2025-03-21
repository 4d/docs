"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29635"],{246913:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/php-get-full-response","title":"PHP GET FULL RESPONSE","description":"PHP GET FULL RESPONSE ( stdOut {; libell\xe9sErr ; valeursErr} {; chpsEnteteHttp {; valeursEnteteHttp}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/php-get-full-response.md","sourceDirName":"commands-legacy","slug":"/commands/php-get-full-response","permalink":"/docs/fr/20-R7/commands/php-get-full-response","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-get-full-response.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"php-get-full-response","title":"PHP GET FULL RESPONSE","slug":"/commands/php-get-full-response","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PHP Execute","permalink":"/docs/fr/20-R7/commands/php-execute"},"next":{"title":"PHP GET OPTION","permalink":"/docs/fr/20-R7/commands/php-get-option"}}'),r=s("785893"),d=s("250065");let i={id:"php-get-full-response",title:"PHP GET FULL RESPONSE",slug:"/commands/php-get-full-response",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PHP GET FULL RESPONSE"})," ( ",(0,r.jsx)(n.em,{children:"stdOut"})," {; ",(0,r.jsx)(n.em,{children:"libell\xe9sErr"})," ; ",(0,r.jsx)(n.em,{children:"valeursErr"}),"} {; ",(0,r.jsx)(n.em,{children:"chpsEnteteHttp"})," {; ",(0,r.jsx)(n.em,{children:"valeursEnteteHttp"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"stdOut"}),(0,r.jsx)(n.td,{children:"Text, Blob"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Contenu du buffer stdOut"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"libell\xe9sErr"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Libell\xe9s des erreurs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeursErr"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeurs des erreurs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"chpsEnteteHttp"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Noms des en-t\xeates HTTP"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeursEnteteHttp"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeurs des en-t\xeates HTTP"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PHP est obsol\xe8te dans 4D"}),". Il est d\xe9sormais recommand\xe9 d'utiliser la classe ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/API/SystemWorkerClass",children:(0,r.jsx)(n.code,{children:"4D.SystemWorker"})}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"PHP GET FULL RESPONSE"})," vous permet d\u2019obtenir des informations suppl\xe9mentaires sur la r\xe9ponse retourn\xe9e par l\u2019interpr\xe9teur PHP. Cette commande est particuli\xe8rement utile en cas d\u2019erreur survenant au cours de l\u2019ex\xe9cution du script."]}),"\n",(0,r.jsxs)(n.p,{children:["Le script PHP peut \xe9crire des donn\xe9es dans le buffer stdOut (echo, print...). La commande retourne directement ces donn\xe9es dans la variable ",(0,r.jsx)(n.em,{children:"stdOut"})," et applique les m\xeames principes de conversion que ceux d\xe9crits dans la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/php-execute",children:"PHP Execute"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Les tableaux texte synchronis\xe9s ",(0,r.jsx)(n.em,{children:"libell\xe9sErr"})," et ",(0,r.jsx)(n.em,{children:"valeursErr"})," sont remplis lorsque l\u2019ex\xe9cution des scripts PHP provoque des erreurs. Ces tableaux fournissent des informations notamment sur l\u2019origine, le script et la ligne de l\u2019erreur. Ces deux tableaux sont indissociables : si ",(0,r.jsx)(n.em,{children:"libell\xe9sErr"})," est pass\xe9, ",(0,r.jsx)(n.em,{children:"valeursErr"})," doit \xeatre pass\xe9 \xe9galement."]}),"\n",(0,r.jsxs)(n.p,{children:["Comme les \xe9changes entre 4D et l\u2019interpr\xe9teur PHP s\u2019effectuent via FastCGI, l\u2019interpr\xe9teur PHP fonctionne comme s\u2019il \xe9tait appel\xe9 par un serveur HTTP et envoie donc des en-t\xeates HTTP. Vous pouvez r\xe9cup\xe9rer ces en-t\xeates et leurs valeurs dans les tableaux ",(0,r.jsx)(n.em,{children:"champsEnteteHttp"})," et ",(0,r.jsx)(n.em,{children:"valeursEnteteHttp"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/php-execute",children:"PHP Execute"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/20-R7/commands/php-get-option",children:"PHP GET OPTION"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1061"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);