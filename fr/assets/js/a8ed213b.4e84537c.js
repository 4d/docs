"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53243"],{185007:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"Events/onRowResize","title":"On Row Resize","description":"| Code | Peut \xeatre appel\xe9 par                                    | D\xe9finition                                                            |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/Events/onRowResize.md","sourceDirName":"Events","slug":"/Events/onRowResize","permalink":"/docs/fr/Events/onRowResize","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonRowResize.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onRowResize","title":"On Row Resize"},"sidebar":"docs","previous":{"title":"On Row Moved","permalink":"/docs/fr/Events/onRowMoved"},"next":{"title":"On Scroll","permalink":"/docs/fr/Events/onScroll"}}'),s=t("785893"),i=t("250065");let d={id:"onRowResize",title:"On Row Resize"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"60"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/fr/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})}),(0,s.jsx)(n.td,{children:"La hauteur d'une ligne est modifi\xe9e par un utilisateur avec la souris"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque la hauteur d'une ligne est modifi\xe9e par un utilisateur dans un document 4D View Pro. Dans ce contexte, l'",(0,s.jsx)(n.a,{href:"/docs/fr/Events/overview#event-object",children:"objet \xe9v\xe9nement"})," retourn\xe9 par la commande ",(0,s.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"entier long"}),(0,s.jsx)(n.td,{children:"60"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:'"On Row Resize"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"range"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Plage de cellules des lignes dont les hauteurs ont chang\xe9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"header"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:'"True" si la ligne de la colonne d\'en-t\xeate (premi\xe8re ligne) est redimensionn\xe9e, sinon false'})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Row Resize)\n    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))\n End if\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);