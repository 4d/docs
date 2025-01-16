"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52390"],{76193:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>s,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>l});var d=JSON.parse('{"id":"commands-legacy/dom-find-xml-element-by-id","title":"DOM Find XML element by ID","description":"DOM Find XML element by ID ( refEl\xe9ment ; id ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/dom-find-xml-element-by-id.md","sourceDirName":"commands-legacy","slug":"/commands/dom-find-xml-element-by-id","permalink":"/docs/fr/commands/dom-find-xml-element-by-id","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-find-xml-element-by-id.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"dom-find-xml-element-by-id","title":"DOM Find XML element by ID","slug":"/commands/dom-find-xml-element-by-id","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Find XML element","permalink":"/docs/fr/commands/dom-find-xml-element"},"next":{"title":"DOM Get first child XML element","permalink":"/docs/fr/commands/dom-get-first-child-xml-element"}}'),r=t("785893"),i=t("250065");let s={id:"dom-find-xml-element-by-id",title:"DOM Find XML element by ID",slug:"/commands/dom-find-xml-element-by-id",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function m(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DOM Find XML element by ID"})," ( ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," ; ",(0,r.jsx)(n.em,{children:"id"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refEl\xe9ment"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence d\u2019\xe9l\xe9ment XML"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"id"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valeur de l\u2019attribut ID de l\u2019\xe9l\xe9ment \xe0 chercher"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de l\u2019\xe9l\xe9ment trouv\xe9 (le cas \xe9ch\xe9ant)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"DOM Find XML element by ID"})," vous permet de rechercher, \xe0 l'int\xe9rieur d'un document XML, l'\xe9l\xe9ment dont l'attribut id est \xe9gal \xe0 la valeur pass\xe9e dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"id"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," la r\xe9f\xe9rence d'un \xe9l\xe9ment du document XML dans lequel vous souhaitez effectuer la recherche. Vous pouvez passer la r\xe9f\xe9rence de l'\xe9l\xe9ment racine ou de tout autre \xe9l\xe9ment, la recherche ne tient pas compte de la position de ",(0,r.jsx)(n.em,{children:"refEl\xe9ment"})," et s'effectue toujours dans la totalit\xe9 du document."]}),"\n",(0,r.jsx)(n.p,{children:"La commande retourne en r\xe9sultat la r\xe9f\xe9rence XML de l\u2019\xe9l\xe9ment trouv\xe9."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Attention :"})," En XML, l\u2019attribut id permet d\u2019associer un identifiant unique \xe0 chaque \xe9l\xe9ment d'un document. La valeur de l\u2019attribut id doit \xeatre un nom XML valide et doit \xeatre unique dans le document XML, tous \xe9l\xe9ments confondus (contrainte de validit\xe9). Le bon fonctionnement de la commande ",(0,r.jsx)(n.strong,{children:"DOM Find XML element by ID"})," requiert que cette contrainte soit respect\xe9e, sinon le r\xe9sultat sera al\xe9atoire (la commande retournera la r\xe9f\xe9rence du premier \xe9l\xe9ment trouv\xe9 dans le document)."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/dom-find-xml-element",children:"DOM Find XML element"})}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1010"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var d=t(667294);let r={},i=d.createContext(r);function s(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);