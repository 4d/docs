"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23912"],{888008:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>i,frontMatter:()=>o});var d=JSON.parse('{"id":"commands-legacy/base64-encode","title":"BASE64 ENCODE","description":"BASE64 ENCODE ( \xe0Encoder {; encod\xe9}{; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/base64-encode.md","sourceDirName":"commands-legacy","slug":"/commands/base64-encode","permalink":"/docs/fr/commands/base64-encode","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbase64-encode.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"base64-encode","title":"BASE64 ENCODE","slug":"/commands/base64-encode","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BASE64 DECODE","permalink":"/docs/fr/commands/base64-decode"},"next":{"title":"Choose","permalink":"/docs/fr/commands/choose"}}'),r=s("785893"),t=s("250065");let o={id:"base64-encode",title:"BASE64 ENCODE",slug:"/commands/base64-encode",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"BASE64 ENCODE"})," ( \xe0Encoder {; ",(0,r.jsx)(n.em,{children:"encod\xe9"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\xe0Encoder"}),(0,r.jsx)(n.td,{children:"Blob, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valeur \xe0 encoder"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur encod\xe9e (si le param\xe8tre encod\xe9 est omis)"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"encod\xe9"}),(0,r.jsx)(n.td,{children:"Blob, Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valeur encod\xe9e"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Encoder au format Base64URL"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"BASE64 ENCODE"})," encode la valeur texte ou BLOB pass\xe9e dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"\xe0Encoder"})," en Base64 ou Base64URL."]}),"\n",(0,r.jsxs)(n.p,{children:["L'encodage Base64 modifie les donn\xe9es cod\xe9es de 8 octets pour ne garder que 7 octets utiles au maximum.",(0,r.jsx)(n.br,{}),"\nCet encodage est requis, par exemple, pour g\xe9rer des blobs \xe0 l'aide de xml. Bas64URL est une alternative qui encode avec un traitement sp\xe9cifique pour les URL et les noms de fichiers (voir ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc4648#section-5",children:"rfc4648"}),")."]}),"\n",(0,r.jsx)(n.p,{children:"Dans \xe0Encoder, passez une valeur texte ou blob \xe0 encoder."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Lorsque vous passez une valeur texte, la commande encode la repr\xe9sentation utf-8 du texte."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre ",(0,r.jsx)(n.em,{children:"encod\xe9"}),", il re\xe7oit sous forme de texte ou de blob le contenu encod\xe9 de \xe0Encoder \xe0 l\u2019issue de l\u2019ex\xe9cution de la commande. Dans ce cas, le param\xe8tre \xe0Encoder lui-m\xeame n\u2019est pas modifi\xe9 par la commande."]}),"\n",(0,r.jsx)(n.p,{children:"Si vous omettez le param\xe8treencod\xe9, la commande modifie directement le param\xe8tre \xe0Encoder."}),"\n",(0,r.jsxs)(n.p,{children:["Par d\xe9faut, si le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," est omis, la commande utilise un encodage Base64. Si vous passez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", la commande utilise un encodage Base64URL."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/base64-decode",children:"BASE64 DECODE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/generate-digest",children:"Generate digest"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Pr\xe9sentation des commandes XML DOM"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/xml-decode",children:"XML DECODE"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var d=s(667294);let r={},t=d.createContext(r);function o(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);