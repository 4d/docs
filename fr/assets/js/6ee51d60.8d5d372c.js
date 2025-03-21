"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39727"],{622355:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>i,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/form-get-current-page","title":"FORM Get current page","description":"FORM Get current page {( * )} : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/form-get-current-page.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-current-page","permalink":"/docs/fr/commands/form-get-current-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-current-page.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-get-current-page","title":"FORM Get current page","slug":"/commands/form-get-current-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM Get color scheme","permalink":"/docs/fr/commands/form-get-color-scheme"},"next":{"title":"FORM GET ENTRY ORDER","permalink":"/docs/fr/commands/form-get-entry-order"}}'),s=r("785893"),o=r("250065");let a={id:"form-get-current-page",title:"FORM Get current page",slug:"/commands/form-get-current-page",displayed_sidebar:"docs"},c=void 0,d={},i=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Get current page"})," {( * )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Op\xe9rateur"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Retourner le num\xe9ro de la page du sous-formulaire courant"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de la page courante du formulaire courant"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Get current page"})," retourne le num\xe9ro de la page courante du formulaire actuellement affich\xe9 ou du formulaire courant charg\xe9 via la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-load",children:"FORM LOAD"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Le param\xe8tre ",(0,s.jsx)(n.em,{children:"*"})," est utile lorsque la commande est appel\xe9e dans le contexte d\u2019un sous-formulaire en page contenant plusieurs pages. Dans ce cas, si vous passez ce param\xe8tre, la commande retourne le num\xe9ro de la page courante du sous-formulaire courant (celui qui a appel\xe9 la commande). Par d\xe9faut, si le param\xe8tre ",(0,s.jsx)(n.em,{children:"*"})," est omis, la commande s\u2019applique toujours au formulaire parent."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Alors que vous \xeates en train d'utiliser un formulaire, si vous choisissez une commande de menu ou si le formulaire re\xe7oit un appel d'un autre process, vous voulez que des actions diff\xe9rentes soient effectu\xe9es en fonction de la page du formulaire affich\xe9e. Vous pouvez alors \xe9crire :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode formulaire [maTable];"monFormulaire"\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNum\xe9roMenu:=Menu selected>>16\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlNum\xe9roCmde:=Menu selected\xa0&\xa00xFFFF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNum\xe9roMenu=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNum\xe9roCmde=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Effectuer une action appropri\xe9e pour la page 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Effectuer une action appropri\xe9e pour la page 2\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNum\xe9roCmde=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlNum\xe9roMenu=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Outside Call)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Fournir une r\xe9ponse appropri\xe9e pour la page 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Fournir une r\xe9ponse appropri\xe9e pour la page 2\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// ...\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-first-page",children:"FORM FIRST PAGE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-goto-page",children:"FORM GOTO PAGE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-last-page",children:"FORM LAST PAGE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-next-page",children:"FORM NEXT PAGE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-previous-page",children:"FORM PREVIOUS PAGE"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"276"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var t=r(667294);let s={},o=t.createContext(s);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);