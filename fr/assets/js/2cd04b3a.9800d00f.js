"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65282"],{406575:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/object-set-value","title":"OBJECT SET VALUE","description":"OBJECT SET VALUE ( nomObjet ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-value.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-value","permalink":"/docs/fr/20-R7/commands/object-set-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-value","title":"OBJECT SET VALUE","slug":"/commands/object-set-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET TITLE","permalink":"/docs/fr/20-R7/commands/object-set-title"},"next":{"title":"OBJECT SET VERTICAL ALIGNMENT","permalink":"/docs/fr/20-R7/commands/object-set-vertical-alignment"}}'),t=s("785893"),l=s("250065");let d={id:"object-set-value",title:"OBJECT SET VALUE",slug:"/commands/object-set-value",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET VALUE"})," ( ",(0,t.jsx)(n.em,{children:"nomObjet"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomObjet"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom de l'objet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nouvelle valeur des sources de donn\xe9es de l'objet de formulaire"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET VALUE"})," fixe la ",(0,t.jsx)(n.em,{children:"valeur"})," des sources de donn\xe9es courantes pour les objets formulaires d\xe9sign\xe9s par le param\xe8tre ",(0,t.jsx)(n.em,{children:"nomObjet"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Dans le param\xe8tre nomObjet, passez le nom d'un objet formulaire (une chaine). Vous pouvez d\xe9finir la valeur de plusieurs objets formulaires \xe0 l'aide du caract\xe8re g\xe9n\xe9rique (\u201C@\u201D)."}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"valeur"})," vous permet de passer une nouvelle valeur (de tout type) pour les sources de donn\xe9es de l'objet formulaire."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," : Si les sources de donn\xe9es sont une expression non assignable, ",(0,t.jsx)(n.strong,{children:"OBJECT SET VALUE"})," ne fait rien. Pour plus d'informations, consultez ",(0,t.jsx)(n.em,{children:"expressions assignables vs non-assignables"})," ."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez lire la valeur des sources de donn\xe9es d'un objet formulaire, lire son nom et d\xe9finir une nouvelle valeur :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $value : Variant\n\xa0\n\xa0$value:=OBJECT Get value(OBJECT Get name(Object current))\xa0//v\xe9rifier la valeur d\xe9finie\xa0\n\xa0\n\xa0OBJECT SET VALUE(OBJECT Get name(Object current);$value+10)\xa0//trouver le nom de l'objet formulaire et d\xe9finir la valeur \xe0 50\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-get-value",children:"OBJECT Get value"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1742"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var r=s(667294);let t={},l=r.createContext(t);function d(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);