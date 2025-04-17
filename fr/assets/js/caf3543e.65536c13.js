"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29790"],{698276:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>l,assets:()=>m,toc:()=>c,contentTitle:()=>i});var l=JSON.parse('{"id":"commands-legacy/dom-set-xml-element-name","title":"DOM SET XML ELEMENT NAME","description":"DOM SET XML ELEMENT NAME ( refEl\xe9ment ; nomEl\xe9ment )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/dom-set-xml-element-name.md","sourceDirName":"commands-legacy","slug":"/commands/dom-set-xml-element-name","permalink":"/docs/fr/commands/dom-set-xml-element-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-set-xml-element-name.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-set-xml-element-name","title":"DOM SET XML ELEMENT NAME","slug":"/commands/dom-set-xml-element-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM SET XML DECLARATION","permalink":"/docs/fr/commands/dom-set-xml-declaration"},"next":{"title":"DOM SET XML ELEMENT VALUE","permalink":"/docs/fr/commands/dom-set-xml-element-value"}}'),t=s("785893"),r=s("250065");let d={id:"dom-set-xml-element-name",title:"DOM SET XML ELEMENT NAME",slug:"/commands/dom-set-xml-element-name",displayed_sidebar:"docs"},i=void 0,m={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DOM SET XML ELEMENT NAME"})," ( ",(0,t.jsx)(n.em,{children:"refEl\xe9ment"})," ; ",(0,t.jsx)(n.em,{children:"nomEl\xe9ment"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"refEl\xe9ment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomEl\xe9ment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nouveau nom de l\u2019\xe9l\xe9ment"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"DOM SET XML ELEMENT NAME"})," permet de modifier le nom de l\u2019\xe9l\xe9ment d\xe9sign\xe9 par ",(0,t.jsx)(n.em,{children:"refEl\xe9ment"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"refEl\xe9ment"})," la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment \xe0 renommer et dans ",(0,t.jsx)(n.em,{children:"nomEl\xe9ment"})," le nouveau nom de l\u2019\xe9l\xe9ment. Bien entendu, la commande se charge de modifier les balises d\u2019ouverture et de fermeture de l\u2019\xe9l\xe9ment."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Soit la source XML suivante :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:"<Book>\n\xa0\xa0\xa0<Title>The Best Seller</Title>\n</Book>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Si le code suivant est ex\xe9cut\xe9, en admettant que ",(0,t.jsx)(n.em,{children:"vRefElem"})," contienne la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment \u2018Book\u2019 :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0DOM SET XML ELEMENT NAME(vRefElem;"BestSeller")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Nous obtenons :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-XML",children:"<BestSeller>\n\xa0\xa0\xa0<Title>The Best Seller</Title>\n</BestSeller>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 ex\xe9cut\xe9e correctement, la variable syst\xe8me OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est g\xe9n\xe9r\xe9e."}),"\n",(0,t.jsx)(n.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsx)(n.p,{children:"Une erreur est g\xe9n\xe9r\xe9e lorsque :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"la r\xe9f\xe9rence de l\u2019\xe9l\xe9ment n\u2019est pas valide"}),"\n",(0,t.jsx)(n.li,{children:"le nouveau nom d\u2019\xe9l\xe9ment n\u2019est pas valide (par exemple, s\u2019il d\xe9bute par un chiffre)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/dom-get-xml-element-name",children:"DOM GET XML ELEMENT NAME"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"867"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var l=s(667294);let t={},r=l.createContext(t);function d(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);