"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51446"],{327024:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>i,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/ob-class","title":"OB Class","description":"OB Class ( objet ) : any","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-class.md","sourceDirName":"commands-legacy","slug":"/commands/ob-class","permalink":"/docs/fr/commands/ob-class","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-class.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-class","title":"OB Class","slug":"/commands/ob-class","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"New shared object","permalink":"/docs/fr/commands/new-shared-object"},"next":{"title":"OB Copy","permalink":"/docs/fr/commands/ob-copy"}}'),r=n("785893"),l=n("250065");let o={id:"ob-class",title:"OB Class",slug:"/commands/ob-class",displayed_sidebar:"docs"},c=void 0,d={},i=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"OB Class"})," ( ",(0,r.jsx)(s.em,{children:"objet"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"objet"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Objet dont la classe doit \xeatre retourn\xe9e"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"R\xe9sultat"}),(0,r.jsx)(s.td,{children:"Null, Object"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Classe de l'objet"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"OB Class"})," retourne la classe de l'",(0,r.jsx)(s.em,{children:"objet"})," pass\xe9 en param\xe8tre. Dans 4D, tous les objets sont h\xe9rit\xe9s de l'objet classe. Si ",(0,r.jsx)(s.em,{children:"objet"})," est un objet inexistant, ",(0,r.jsx)(s.strong,{children:"OB Class"})," retourne null."]}),"\n",(0,r.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"Vous avez cr\xe9\xe9 la classe Polygone :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0//Classe : Polygone\n\xa0Class constructor\n\xa0var $1;$2 : Integer\n\xa0This.area:=$1*$2\n"})}),"\n",(0,r.jsx)(s.p,{children:"Puis, dans une m\xe9thode, vous pouvez saisir :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0var $poly;$class : Object\n\xa0$poly:=cs.Polygone.new(4;3)\n\xa0$class:=OB Class($poly)\xa0//$class contient Classe : Polygone\n"})}),"\n",(0,r.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/commands/ob-instance-of",children:"OB Instance of"})}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1730"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return o}});var t=n(667294);let r={},l=t.createContext(r);function o(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);