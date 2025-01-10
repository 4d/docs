"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19070"],{239986:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/resize-form-window","title":"RESIZE FORM WINDOW","description":"RESIZE FORM WINDOW ( largeur ; hauteur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resize-form-window.md","sourceDirName":"commands-legacy","slug":"/commands/resize-form-window","permalink":"/docs/fr/commands/resize-form-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresize-form-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resize-form-window","title":"RESIZE FORM WINDOW","slug":"/commands/resize-form-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDUCE RESTORE WINDOW","permalink":"/docs/fr/commands/reduce-restore-window"},"next":{"title":"SET WINDOW DOCUMENT ICON","permalink":"/docs/fr/commands/set-window-document-icon"}}'),t=r("785893"),i=r("250065");let d={id:"resize-form-window",title:"RESIZE FORM WINDOW",slug:"/commands/resize-form-window",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RESIZE FORM WINDOW"})," ( ",(0,t.jsx)(n.em,{children:"largeur"})," ; ",(0,t.jsx)(n.em,{children:"hauteur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"largeur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Pixels \xe0 ajouter ou soustraire \xe0 la largeur courante de la fen\xeatre formulaire"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hauteur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Pixels \xe0 ajouter ou soustraire \xe0 la hauteur courante de la fen\xeatre formulaire"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"RESIZE FORM WINDOW"})," permet de modifier la taille de la fen\xeatre du formulaire courant."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans les param\xe8tres ",(0,t.jsx)(n.em,{children:"largeur"})," et ",(0,t.jsx)(n.em,{children:"hauteur"})," le nombre de pixels que vous souhaitez ajouter aux dimensions courantes de la fen\xeatre. Pour ne pas modifier une dimension, passez 0 dans le param\xe8tre correspondant. Pour r\xe9duire une dimension, passez une valeur n\xe9gative dans ",(0,t.jsx)(n.em,{children:"largeur"})," et ",(0,t.jsx)(n.em,{children:"hauteur"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande produit exactement le m\xeame r\xe9sultat qu\u2019un redimensionnement manuel de la fen\xeatre \xe0 l\u2019aide de la case de redimensionnement (si le type de fen\xeatre le permet). Par cons\xe9quent, la commande tient compte des propri\xe9t\xe9s de redimensionnement des objets et des contraintes de taille d\xe9finies dans les propri\xe9t\xe9s du formulaire : si par exemple la commande entra\xeene un redimensionnement de la fen\xeatre sup\xe9rieur \xe0 la taille maximale du formulaire, elle n\u2019a pas d\u2019effet."}),"\n",(0,t.jsxs)(n.p,{children:["A noter que ce fonctionnement est diff\xe9rent de celui de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-window-rect",children:"SET WINDOW RECT"}),", qui ne tient pas compte des propri\xe9t\xe9s du formulaire ni de son contenu en cas de redimensionnement de la fen\xeatre."]}),"\n",(0,t.jsxs)(n.p,{children:["A noter \xe9galement que cette commande ne modifie pas forc\xe9ment les dimensions du formulaire lui-m\xeame. Pour modifier par programmation la taille d\u2019un formulaire, reportez-vous \xe0 la description de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-set-size",children:"FORM SET SIZE"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Soit la fen\xeatre suivante (les champs et l'encadrement ont pour propri\xe9t\xe9 de redimensionnement horizontal \u201CAgrandir\u201D) :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(396493).Z+"",width:"395",height:"284"})}),"\n",(0,t.jsx)(n.p,{children:"Apr\xe8s l'ex\xe9cution de cette ligne :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0RESIZE FORM WINDOW(25;0)\n"})}),"\n",(0,t.jsx)(n.p,{children:"... la fen\xeatre a l'apparence suivante :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(81350).Z+"",width:"431",height:"284"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-get-properties",children:"FORM GET PROPERTIES"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/form-set-size",children:"FORM SET SIZE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-window-rect",children:"SET WINDOW RECT"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"890"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},396493:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict39548.fr-48df939b042ee1aeb9526ff050ddaeae.png"},81350:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict39549.fr-7e63a867f14a94d3a493fb33c2bebb9f.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);