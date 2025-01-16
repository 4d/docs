"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99023"],{332520:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/highlight-text","title":"HIGHLIGHT TEXT","description":"HIGHLIGHT TEXT ( { ;} objet ; d\xe9butS\xe9l ; finS\xe9l* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/highlight-text.md","sourceDirName":"commands-legacy","slug":"/commands/highlight-text","permalink":"/docs/fr/20-R7/commands/highlight-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhighlight-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"highlight-text","title":"HIGHLIGHT TEXT","slug":"/commands/highlight-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GOTO OBJECT","permalink":"/docs/fr/20-R7/commands/goto-object"},"next":{"title":"Is editing text","permalink":"/docs/fr/20-R7/commands/is-editing-text"}}'),i=s("785893"),r=s("250065");let d={id:"highlight-text",title:"HIGHLIGHT TEXT",slug:"/commands/highlight-text",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HIGHLIGHT TEXT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"d\xe9butS\xe9l"})," ; ",(0,i.jsx)(n.em,{children:"finS\xe9l"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) ",(0,i.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"Field, Variable, any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Champ ou variable saisissable (si * est omis)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"d\xe9butS\xe9l"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nouvelle position de d\xe9but de s\xe9lection de texte"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"finS\xe9l"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nouvelle position de fin de s\xe9lection de texte"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"HIGHLIGHT TEXT"})," s\xe9lectionne une partie du texte dans ",(0,i.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," d\xe9signe le nom d\u2019un objet (une cha\xeene). Si vous ne passez pas le param\xe8tre ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," d\xe9signe un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene de caract\xe8res mais la r\xe9f\xe9rence du champ ou de la variable (champs ou variables de formulaire uniquement)."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"objet"})," n'est pas l'objet en cours de modification, il r\xe9cup\xe8re le focus."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Cette commande ne peut pas \xeatre utilis\xe9e avec des champs situ\xe9s dans un sous-formulaire."]}),"\n",(0,i.jsxs)(n.p,{children:["Le param\xe8tre ",(0,i.jsx)(n.em,{children:"d\xe9butS\xe9l"})," repr\xe9sente la position du premier caract\xe8re \xe0 s\xe9lectionner, et le param\xe8tre ",(0,i.jsx)(n.em,{children:"finS\xe9l"})," repr\xe9sente la position du dernier caract\xe8re \xe0 s\xe9lectionner plus un. Si ",(0,i.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,i.jsx)(n.em,{children:"finS\xe9l"})," sont identiques, le point d'insertion est plac\xe9 devant le caract\xe8re sp\xe9cifi\xe9 par ",(0,i.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et aucun caract\xe8re n'est s\xe9lectionn\xe9."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"finS\xe9l"})," est sup\xe9rieur au nombre de caract\xe8res pr\xe9sents dans l'objet, tous les caract\xe8res compris entre ",(0,i.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et la fin du texte sont s\xe9lectionn\xe9s."]}),"\n",(0,i.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant s\xe9lectionne tous les caract\xe8res dans le champ saisissable ",(0,i.jsx)(n.em,{children:"[Produits]Notes"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0HIGHLIGHT TEXT([Produits]Notes;1;Length([Produits]Notes)+1)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant place le point d'insertion au d\xe9but du champ ",(0,i.jsx)(n.em,{children:"[Produits]Notes"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0HIGHLIGHT TEXT([Produits]Notes;1;1)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsxs)(n.p,{children:["L'exemple suivant place le point d'insertion \xe0 la fin du champ ",(0,i.jsx)(n.em,{children:"[Produits]Notes"})," :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0$vLen:=Length([Produits]Notes)+1\n\xa0HIGHLIGHT TEXT([Produits]Notes;$vLen;$vLen)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,i.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de la commande ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/20-R7/commands/get-highlight",children:"GET HIGHLIGHT"})}),"\n",(0,i.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(n.td,{children:"210"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);