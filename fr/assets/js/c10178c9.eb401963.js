"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59149"],{725341:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/change-string","title":"Change string","description":"Change string ( source ; nouveau ; positionD\xe9part ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/change-string.md","sourceDirName":"commands-legacy","slug":"/commands/change-string","permalink":"/docs/fr/commands/change-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"change-string","title":"Change string","slug":"/commands/change-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"String","permalink":"/docs/fr/category/string"},"next":{"title":"Char","permalink":"/docs/fr/commands/char"}}'),t=r("785893"),i=r("250065");let d={id:"change-string",title:"Change string",slug:"/commands/change-string",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Change string"})," ( ",(0,t.jsx)(n.em,{children:"source"})," ; ",(0,t.jsx)(n.em,{children:"nouveau"})," ; ",(0,t.jsx)(n.em,{children:"positionD\xe9part"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"source"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cha\xeene de d\xe9part"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nouveau"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nouveaux caract\xe8res"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"positionD\xe9part"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Position de d\xe9part du remplacement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Cha\xeene r\xe9sultante"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Change string"})," retourne une cha\xeene r\xe9sultant du remplacement des caract\xe8res, dans la cha\xeene ",(0,t.jsx)(n.em,{children:"source"}),", \xe0 partir de ",(0,t.jsx)(n.em,{children:"positionD\xe9part"}),", par la cha\xeene ",(0,t.jsx)(n.em,{children:"nouveau"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"nouveau"}),' est une cha\xeene vide (""), ',(0,t.jsx)(n.strong,{children:"Change string"})," retourne ",(0,t.jsx)(n.em,{children:"source"})," inchang\xe9. ",(0,t.jsx)(n.strong,{children:"Change string"})," retourne toujours une cha\xeene de la m\xeame longueur que ",(0,t.jsx)(n.em,{children:"source"}),". Si ",(0,t.jsx)(n.em,{children:"positionD\xe9part"})," est inf\xe9rieur ou sup\xe9rieur \xe0 la longueur de ",(0,t.jsx)(n.em,{children:"source"}),", ",(0,t.jsx)(n.strong,{children:"Change string"})," retourne ",(0,t.jsx)(n.em,{children:"source"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["La fonction ",(0,t.jsx)(n.strong,{children:"Change string"})," est diff\xe9rente de ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/insert-string",children:"Insert string"})," car elle remplace des caract\xe8res au lieu de les ins\xe9rer."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["L'exemple suivant illustre l'utilisation de ",(0,t.jsx)(n.strong,{children:"Change string"}),". Les r\xe9sultats sont affect\xe9s \xe0 la variable ",(0,t.jsx)(n.em,{children:"vR\xe9sultat"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vR\xe9sultat:=Change string("Acme";"CME";2)\xa0// vR\xe9sultat est \xe9gal \xe0 "ACME"\n\xa0vR\xe9sultat:=Change string("novembre";"d\xe9c";1)\xa0// vR\xe9sultat est \xe9gal \xe0 "d\xe9cembre"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/delete-string",children:"Delete string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/insert-string",children:"Insert string"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/replace-string",children:"Replace string"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"234"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);