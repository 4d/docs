"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63963"],{733050:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-is-font-style-supported","title":"WP Is font style supported","description":"WP Is font style supported ( objCible ; stylePoliceWP ) -> R\xe9sultat","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-is-font-style-supported.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-is-font-style-supported","permalink":"/docs/fr/WritePro/commands/wp-is-font-style-supported","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-is-font-style-supported.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-is-font-style-supported","title":"WP Is font style supported","slug":"/WritePro/commands/wp-is-font-style-supported","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Insert table","permalink":"/docs/fr/WritePro/commands/wp-insert-table"},"next":{"title":"WP New","permalink":"/docs/fr/WritePro/commands/wp-new"}}'),r=n("785893"),i=n("250065");let l={id:"wp-is-font-style-supported",title:"WP Is font style supported",slug:"/WritePro/commands/wp-is-font-style-supported",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4}];function a(e){let t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Is font style supported"})," ( ",(0,r.jsx)(t.em,{children:"objCible"})," ; ",(0,r.jsx)(t.em,{children:"stylePoliceWP"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Param\xe8tre"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objCible"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Plage ou \xe9l\xe9ment"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"stylePoliceWP"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Constante de style de police"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"R\xe9sultat"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Vrai si le style est pris en charge dans tout ou partie de objCible, Faux sinon"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["La commande ",(0,r.jsx)(t.strong,{children:"WP Is font style supported"})," retourne Vrai si le style ",(0,r.jsx)(t.em,{children:"stylePoliceWP"})," est pris en charge par au moins une partie du texte inclus dans ",(0,r.jsx)(t.em,{children:"objCible"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Dans ",(0,r.jsx)(t.em,{children:"objCible"}),", vous pouvez passer :"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"une plage, ou"}),"\n",(0,r.jsx)(t.li,{children:"un \xe9l\xe9ment (tableau / ligne / paragraphe / image en ligne / en-t\xeate / corps / pied de page)."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Dans ",(0,r.jsx)(t.em,{children:"stylePoliceWP"}),', vous pouvez passer une des constantes de style suivantes, plac\xe9es dans le th\xe8me "4D Write Pro" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constante"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Valeur"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk font bold"}),(0,r.jsx)(t.td,{children:"Cha\xeene"}),(0,r.jsx)(t.td,{children:"fontBold"}),(0,r.jsxs)(t.td,{children:["D\xe9finit la graisse du texte (d\xe9pend des styles de police disponibles). Valeurs possibles :",(0,r.jsx)(t.br,{}),"wk true pour passer en style gras les caract\xe8res s\xe9lectionn\xe9s ; avec la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk true est retourn\xe9e si au moins un des caract\xe8res s\xe9lectionn\xe9s prend en charge le style de police gras. wk false (d\xe9faut) pour supprimer le style gras des caract\xe8res s\xe9lectionn\xe9s s'il y en a ; avec la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk false est retourn\xe9e si aucun des caract\xe8res s\xe9lectionn\xe9s ne prend en charge le style de police gras."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk font italic"}),(0,r.jsx)(t.td,{children:"Cha\xeene"}),(0,r.jsx)(t.td,{children:"fontItalic"}),(0,r.jsxs)(t.td,{children:["D\xe9finit le style italique du texte (d\xe9pend des styles de police disponibles). Valeurs possibles :",(0,r.jsx)(t.br,{}),"wk true pour passer en style italique ou oblique les caract\xe8res s\xe9lectionn\xe9s ; avec la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk true est retourn\xe9e si au moins un des caract\xe8res s\xe9lectionn\xe9s prend en charge le style de police italique ou oblique. wk false (d\xe9faut) pour supprimer le style italique ou oblique des caract\xe8res s\xe9lectionn\xe9s s'il y en a ; avec la commande ",(0,r.jsx)(t.a,{href:"/docs/fr/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),", wk false est retourn\xe9e si aucun des caract\xe8res s\xe9lectionn\xe9s ne prend en charge le style de police italique ou oblique."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk text linethrough style"}),(0,r.jsx)(t.td,{children:"Cha\xeene"}),(0,r.jsx)(t.td,{children:"textLinethroughStyle"}),(0,r.jsxs)(t.td,{children:["D\xe9finit le style du texte barr\xe9. Valeurs possibles :",(0,r.jsx)(t.br,{}),"wk none (d\xe9faut) : pas d'effet texte barr\xe9 wk solid : dessine une ligne pleine sur le texte s\xe9lectionn\xe9wk dotted : dessine une ligne en pointill\xe9s sur le texte s\xe9lectionn\xe9wk dashed : dessine une ligne en tirets sur le texte s\xe9lectionn\xe9wk double : dessine une ligne double sur le texte s\xe9lectionn\xe9wk semi transparent : att\xe9nue la ligne sur le texte s\xe9lectionn\xe9. Peut \xeatre combin\xe9 \xe0 un autre style de ligne. wk word : dessine une ligne sur les mots uniquement (exclut les blancs). Peut \xeatre combin\xe9 \xe0 un autre style de ligne."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk text underline style"}),(0,r.jsx)(t.td,{children:"Cha\xeene"}),(0,r.jsx)(t.td,{children:"textUnderlineStyle"}),(0,r.jsxs)(t.td,{children:["D\xe9finit le style du trait de soulignement. Valeurs possibles :",(0,r.jsx)(t.br,{}),"wk none (d\xe9faut) : pas de soulignement wk solid : dessine un trait pleinwk dotted : dessine un trait en pointill\xe9swk dashed : dessine un trait en tiretswk double : dessine un trait doublewk semi transparent : att\xe9nue le trait. Peut \xeatre combin\xe9 \xe0 un autre style de ligne. wk word : dessine le trait sur les mots uniquement (exclut les blancs). Peut \xeatre combin\xe9 \xe0 un autre style de trait."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Typiquement, cette commande permet aux d\xe9veloppeurs d'impl\xe9menter des objets d'interface personnalis\xe9s, comme un pop-up menu proposant des options de style en fonction du texte s\xe9lectionn\xe9."})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return l}});var s=n(667294);let r={},i=s.createContext(r);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);