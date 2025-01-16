"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97950"],{714040:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>i,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/append-to-array","title":"APPEND TO ARRAY","description":"APPEND TO ARRAY ( tableau ; valeur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/append-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/append-to-array","permalink":"/docs/fr/commands/append-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fappend-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"append-to-array","title":"APPEND TO ARRAY","slug":"/commands/append-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Arrays","permalink":"/docs/fr/category/arrays"},"next":{"title":"ARRAY BLOB","permalink":"/docs/fr/commands/array-blob"}}'),a=r("785893"),s=r("250065");let l={id:"append-to-array",title:"APPEND TO ARRAY",slug:"/commands/append-to-array",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"APPEND TO ARRAY"})," ( ",(0,a.jsx)(n.em,{children:"tableau"})," ; ",(0,a.jsx)(n.em,{children:"valeur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Param\xe8tre"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tableau"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Tableau auquel ajouter une valeur"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valeur"}),(0,a.jsx)(n.td,{children:"Expression"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Valeur \xe0 ajouter au tableau"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["La commande ",(0,a.jsx)(n.strong,{children:"APPEND TO ARRAY"})," ajoute une nouvelle ligne \xe0 la fin du ",(0,a.jsx)(n.em,{children:"tableau"})," et lui affecte la valeur pass\xe9e dans le param\xe8tre ",(0,a.jsx)(n.em,{children:"valeur"}),". En mode interpr\xe9t\xe9, si le ",(0,a.jsx)(n.em,{children:"tableau"})," n\u2019a pas \xe9t\xe9 d\xe9fini au pr\xe9alable, la commande le cr\xe9e et lui attribue un type en fonction de celui de ",(0,a.jsx)(n.em,{children:"valeur"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Cette commande fonctionne avec tous les types de tableaux : cha\xeene, num\xe9rique, bool\xe9en, date, pointeur et image."}),"\n",(0,a.jsxs)(n.p,{children:["Le type de ",(0,a.jsx)(n.em,{children:"valeur"})," doit correspondre au type du tableau, sinon l\u2019erreur de syntaxe 54 \u201CLes arguments sont incompatibles\u201D est g\xe9n\xe9r\xe9e. Les combinaisons suivantes sont toutefois possibles :"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["un ",(0,a.jsx)(n.em,{children:"tableau"})," de type cha\xeene (Texte ou Alpha) accepte toute ",(0,a.jsx)(n.em,{children:"valeur"})," de type Texte ou Alpha."]}),"\n",(0,a.jsxs)(n.li,{children:["un ",(0,a.jsx)(n.em,{children:"tableau"})," de type num\xe9rique (Entier, Entier long ou R\xe9el) accepte toute ",(0,a.jsx)(n.em,{children:"valeur"})," de type Entier, Entier long, Num\xe9rique ou Heure."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,a.jsx)(n.p,{children:"Le code suivant :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0INSERT IN ARRAY($montableau;Size of array($montableau)+1)\n\xa0$montableau{Size of array($montableau)}:=$mavaleur\n"})}),"\n",(0,a.jsx)(n.p,{children:"... peut \xeatre remplac\xe9 par :"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0APPEND TO ARRAY($montableau;$mavaleur)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/fr/commands/delete-from-array",children:"DELETE FROM ARRAY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/fr/commands/insert-in-array",children:"INSERT IN ARRAY"})]}),"\n",(0,a.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,a.jsx)(n.td,{children:"911"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var t=r(667294);let a={},s=t.createContext(a);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);