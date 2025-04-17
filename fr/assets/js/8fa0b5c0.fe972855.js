"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86972"],{890795:function(e,n,s){s.r(n),s.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/object-set-drag-and-drop-options","title":"OBJECT SET DRAG AND DROP OPTIONS","description":"OBJECT SET DRAG AND DROP OPTIONS ( { ;} objet ; glissable ; glissableAuto ; d\xe9posable ; d\xe9posableAuto* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-set-drag-and-drop-options.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-drag-and-drop-options","permalink":"/docs/fr/commands/object-set-drag-and-drop-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-drag-and-drop-options.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-set-drag-and-drop-options","title":"OBJECT SET DRAG AND DROP OPTIONS","slug":"/commands/object-set-drag-and-drop-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET DATA SOURCE","permalink":"/docs/fr/commands/object-set-data-source"},"next":{"title":"OBJECT SET ENABLED","permalink":"/docs/fr/commands/object-set-enabled"}}'),r=s("785893"),i=s("250065");let d={id:"object-set-drag-and-drop-options",title:"OBJECT SET DRAG AND DROP OPTIONS",slug:"/commands/object-set-drag-and-drop-options",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET DRAG AND DROP OPTIONS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"glissable"})," ; ",(0,r.jsx)(n.em,{children:"glissableAuto"})," ; ",(0,r.jsx)(n.em,{children:"d\xe9posable"})," ; ",(0,r.jsx)(n.em,{children:"d\xe9posableAuto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"glissable"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Glissable = Vrai, sinon Faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"glissableAuto"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Glisser automatique = Vrai, sinon Faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9posable"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"D\xe9posable = Vrai, sinon Faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9posableAuto"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"D\xe9poser automatique = Vrai, sinon Faux"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"OBJECT SET DRAG AND DROP OPTIONS"})," permet de d\xe9finir ou de modifier dynamiquement les options de glisser-d\xe9poser pour l\u2019objet ou les objets d\xe9sign\xe9(s) par les param\xe8tres ",(0,r.jsx)(n.em,{children:"objet"})," et ",(0,r.jsx)(n.em,{children:"*"})," pour le process courant."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,r.jsx)(n.p,{children:"Passez dans chaque param\xe8tre un bool\xe9en indiquant si l\u2019option correspondante est active ou inactive :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"glissable"})," = Vrai : objet glissable en mode programm\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"glissableAuto"})," = Vrai (utilisable uniquement avec les champs et variables texte, combo box et list box) : objet glissable en mode automatique."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"d\xe9posable"})," = Vrai : objet acceptant le d\xe9poser en mode programm\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"d\xe9posableAuto"})," = Vrai (utilisable uniquement avec les champs et variables image, texte, combo box et list box) : objet acceptant le d\xe9poser en mode automatique."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"D\xe9finition d\u2019une zone de texte en glisser-d\xe9poser auto :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET DRAG AND DROP OPTIONS(*;"Comments";False;True;False;True)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/object-get-drag-and-drop-options",children:"OBJECT GET DRAG AND DROP OPTIONS"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1183"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);