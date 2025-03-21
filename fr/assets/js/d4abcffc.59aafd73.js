"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14311"],{318167:function(e,t,s){s.r(t),s.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>o});var n=JSON.parse('{"id":"commands-legacy/object-is-styled-text","title":"OBJECT Is styled text","description":"OBJECT Is styled text ( { ;} objet* ) : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-is-styled-text.md","sourceDirName":"commands-legacy","slug":"/commands/object-is-styled-text","permalink":"/docs/fr/20-R7/commands/object-is-styled-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-is-styled-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-is-styled-text","title":"OBJECT Is styled text","slug":"/commands/object-is-styled-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get visible","permalink":"/docs/fr/20-R7/commands/object-get-visible"},"next":{"title":"OBJECT MOVE","permalink":"/docs/fr/20-R7/commands/object-move"}}'),r=s("785893"),i=s("250065");let l={id:"object-is-styled-text",title:"OBJECT Is styled text",slug:"/commands/object-is-styled-text",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let t={br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT Is styled text"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"objet"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Op\xe9rateur"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(t.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objet"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(t.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Vrai si l\u2019objet est un texte en multistyle, Faux sinon"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"OBJECT Is styled text"})," retourne ",(0,r.jsx)(t.strong,{children:"Vrai"}),' si l\u2019option "Multistyle" est coch\xe9e pour l\u2019objet ou les objets d\xe9sign\xe9(s) par les param\xe8tres ',(0,r.jsx)(t.em,{children:"objet"})," et ",(0,r.jsx)(t.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:['L\u2019option "Multistyle" permet d\u2019utiliser des zones de texte riche (rich text) comportant des variations de style individuelles. Pour plus d\u2019informations, reportez-vous \xe0 la section ',(0,r.jsx)(t.em,{children:"Multistyle (Zone de texte riche)"})," dans le manuel ",(0,r.jsx)(t.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:['Les objets multistyles peuvent \xeatre g\xe9r\xe9s par programmation \xe0 l\u2019aide des commandes du th\xe8me "',(0,r.jsx)(t.em,{children:"Texte multistyle"}),'".']}),"\n",(0,r.jsxs)(t.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(t.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(t.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(t.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note :"})," La commande ",(0,r.jsx)(t.strong,{children:"OBJECT Is styled text"})," retourne ",(0,r.jsx)(t.strong,{children:"Vrai"})," lorsqu'elle est appliqu\xe9e \xe0 une zone 4D Write Pro."]}),"\n",(0,r.jsx)(t.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(t.p,{children:'Un formulaire comporte un champ repr\xe9sent\xe9 par deux objets diff\xe9rents, l\u2019un avec la propri\xe9t\xe9 "Multistyle" coch\xe9e, l\u2019autre sans cette propri\xe9t\xe9 coch\xe9e. Vous pouvez \xe9crire :'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0$Style:=OBJECT Is styled text(*;"Texte_styl\xe9")\n\xa0\xa0\xa0\xa0\xa0// retourne Vrai (l\u2019option "Multistyle" est coch\xe9e)\n\xa0\n\xa0$Style:=OBJECT Is styled text(*;"Texte_brut")\n\xa0\xa0\xa0\xa0\xa0// retourne Faux (l\u2019option "Multistyle" n\u2019est coch\xe9e)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Texte multistyle"})}),"\n",(0,r.jsx)(t.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(t.td,{children:"1261"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return l}});var n=s(667294);let r={},i=n.createContext(r);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);