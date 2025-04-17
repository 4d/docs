"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31265"],{219709:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/method-set-access-mode","title":"METHOD SET ACCESS MODE","description":"METHOD SET ACCESS MODE ( mode )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/method-set-access-mode.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-access-mode","permalink":"/docs/fr/commands/method-set-access-mode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-access-mode.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"method-set-access-mode","title":"METHOD SET ACCESS MODE","slug":"/commands/method-set-access-mode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD RESOLVE PATH","permalink":"/docs/fr/commands/method-resolve-path"},"next":{"title":"METHOD SET ATTRIBUTE","permalink":"/docs/fr/commands/method-set-attribute"}}'),d=t("785893"),r=t("250065");let c={id:"method-set-access-mode",title:"METHOD SET ACCESS MODE",slug:"/commands/method-set-access-mode",displayed_sidebar:"docs"},o=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD SET ACCESS MODE"})," ( ",(0,d.jsx)(n.em,{children:"mode"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Param\xe8tre"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"mode"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Mode d\u2019acc\xe8s aux objets verrouill\xe9s"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["La commande ",(0,d.jsx)(n.strong,{children:"METHOD SET ACCESS MODE"})," vous permet de d\xe9finir le comportement de 4D lorsque vous tentez d\u2019acc\xe9der en \xe9criture \xe0 un objet d\xe9j\xe0 charg\xe9 en modification par un autre utilisateur ou process.La port\xe9e de cette commande est la session."]}),"\n",(0,d.jsxs)(n.p,{children:["Passez dans ",(0,d.jsx)(n.em,{children:"mode"})," une des constantes suivantes du th\xe8me ",(0,d.jsx)(n.em,{children:"Acc\xe8s objets d\xe9veloppement"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Valeur"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked abort"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Le chargement de l\u2019objet est abandonn\xe9 (fonctionnement par d\xe9faut)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked confirm"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"4D affiche une bo\xeete de dialogue vous permettant de choisir de r\xe9essayer ou d\u2019abandonner. En mode distant, cette option n\u2019est pas prise en charge (le chargement est abandonn\xe9)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On object locked retry"}),(0,d.jsx)(n.td,{children:"Entier long"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"4D tente de charger l\u2019objet jusqu\u2019\xe0 ce qu\u2019il soit lib\xe9r\xe9"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,d.jsx)(n.td,{children:"1191"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var s=t(667294);let d={},r=s.createContext(d);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);