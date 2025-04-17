"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33868"],{819855:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/insert-in-blob","title":"INSERT IN BLOB","description":"INSERT IN BLOB ( blob ; d\xe9calage ; nombre {; remplisseur} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/insert-in-blob.md","sourceDirName":"commands-legacy","slug":"/commands/insert-in-blob","permalink":"/docs/fr/commands/insert-in-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Finsert-in-blob.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"insert-in-blob","title":"INSERT IN BLOB","slug":"/commands/insert-in-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPAND BLOB","permalink":"/docs/fr/commands/expand-blob"},"next":{"title":"INTEGER TO BLOB","permalink":"/docs/fr/commands/integer-to-blob"}}'),t=s("785893"),i=s("250065");let d={id:"insert-in-blob",title:"INSERT IN BLOB",slug:"/commands/insert-in-blob",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Note",id:"note",level:3},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"INSERT IN BLOB"})," ( ",(0,t.jsx)(n.em,{children:"blob"})," ; ",(0,t.jsx)(n.em,{children:"d\xe9calage"})," ; ",(0,t.jsx)(n.em,{children:"nombre"})," {; ",(0,t.jsx)(n.em,{children:"remplisseur"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB dans lequel ins\xe9rer les octets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"d\xe9calage"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Position de d\xe9but d'insertion des octets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nombre"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre d'octets \xe0 ins\xe9rer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"remplisseur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valeur d'octet par d\xe9faut (0x00..0xFF) 0x00 si ce param\xe8tre est omis"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"INSERT IN BLOB"})," ins\xe8re le nombre d'octets sp\xe9cifi\xe9 par ",(0,t.jsx)(n.em,{children:"nombre"})," dans le BLOB ",(0,t.jsx)(n.em,{children:"blob"})," \xe0 la position sp\xe9cifi\xe9e par ",(0,t.jsx)(n.em,{children:"d\xe9calage"}),". La taille du BLOB est augment\xe9e de ",(0,t.jsx)(n.em,{children:"nombre"})," d'octets."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous ne passez pas le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"remplisseur"}),", la valeur des octets ins\xe9r\xe9s dans le BLOB est fix\xe9e \xe0 ",(0,t.jsx)(n.em,{children:"0x00"}),". Sinon, les octets prennent la valeur pass\xe9e dans ",(0,t.jsx)(n.em,{children:"remplisseur"})," (modulo 256 \u2014 0..255)."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"d\xe9calage"})," la position (relative \xe0 l'origine du BLOB) de l'insertion."]}),"\n",(0,t.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note de compatibilit\xe9 :"})," Etant donn\xe9 que cette commande modifie le blob pass\xe9 comme param\xe8tre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous \xe0 la page ",(0,t.jsx)(n.em,{children:"Passer des blobs et objets blobs \xe0 des commandes 4D"})," sur developer.4d.com."]}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/delete-from-blob",children:"DELETE FROM BLOB"})}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"559"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);