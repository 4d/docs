"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80355"],{368737:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/lowercase","title":"Lowercase","description":"Lowercase ( laCha\xeene {; *} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/lowercase.md","sourceDirName":"commands-legacy","slug":"/commands/lowercase","permalink":"/docs/fr/20-R8/commands/lowercase","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flowercase.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"lowercase","title":"Lowercase","slug":"/commands/lowercase","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Localized string","permalink":"/docs/fr/20-R8/commands/localized-string"},"next":{"title":"Match regex","permalink":"/docs/fr/20-R8/commands/match-regex"}}'),r=s("785893"),a=s("250065");let c={id:"lowercase",title:"Lowercase",slug:"/commands/lowercase",displayed_sidebar:"docs"},l=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Lowercase"})," ( ",(0,r.jsx)(n.em,{children:"laCha\xeene"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"laText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cha\xeene \xe0 convertir en minuscules"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Si pass\xe9 : conserver les accents Si omis : supprimer les accents"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"cha\xeene en minuscules"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Lowercase"})," retourne une cha\xeene de caract\xe8res \xe9gale \xe0 ",(0,r.jsx)(n.em,{children:"laCha\xeene"})," dont tous les caract\xe8res alphab\xe9tiques ont \xe9t\xe9 convertis en minuscules."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"*"}),", s'il est pass\xe9, indique que les \xe9ventuels caract\xe8res accentu\xe9s pr\xe9sents dans ",(0,r.jsx)(n.em,{children:"laCha\xeene"})," doivent \xeatre retourn\xe9s sous forme de minuscules accentu\xe9es. Par d\xe9faut, lorsque ce param\xe8tre est omis, les caract\xe8res accentu\xe9s \u201Cperdent\u201D leur accent une fois la conversion effectu\xe9e."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(n.p,{children:'L\'exemple suivant est une m\xe9thode projet qui met en majuscule (capitale) le premier caract\xe8re de la cha\xeene ou du texte qui lui est pass\xe9(e). Par exemple, Nom := Capitale ("jean") donnerait \xe0 Nom la valeur "Jean" :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9thode projet Capitale\n\xa0\xa0// Capitale ( Cha\xeene ) -> Cha\xeene\n\xa0\xa0// Capitale ( Tout texte ou cha\xeene ) -> texte avec une lettre capitale\n\xa0\n\xa0$0:=Lowercase($1)\n\xa0If(Length($0)>0)\n\xa0\xa0\xa0\xa0$0[[1]]:=Uppercase($0[[1]])\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsxs)(n.p,{children:["Cet exemple compare les r\xe9sultats obtenus suivant que le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"})," a \xe9t\xe9 pass\xe9 ou non :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$lachaine:=Lowercase("D\xc9J\xc0 VU")\xa0// $lachaine vaut \xab deja vu \xbb\n\xa0$lachaine:=Lowercase("D\xc9J\xc0 VU";*)\xa0// $lachaine vaut \xab d\xe9j\xe0 vu \xbb\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/commands/uppercase",children:"Uppercase"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"14"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var t=s(667294);let r={},a=t.createContext(r);function c(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);