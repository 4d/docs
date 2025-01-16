"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6838"],{519284:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>r,assets:()=>d,toc:()=>i,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/uppercase","title":"Uppercase","description":"Uppercase ( laCha\xeene {; *} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/uppercase.md","sourceDirName":"commands-legacy","slug":"/commands/uppercase","permalink":"/docs/fr/20-R7/commands/uppercase","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fuppercase.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"uppercase","title":"Uppercase","slug":"/commands/uppercase","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Substring","permalink":"/docs/fr/20-R7/commands/substring"},"next":{"title":"Structure Access","permalink":"/docs/fr/20-R7/category/structure-access"}}'),t=s("785893"),c=s("250065");let a={id:"uppercase",title:"Uppercase",slug:"/commands/uppercase",displayed_sidebar:"docs"},l=void 0,d={},i=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Uppercase"})," ( ",(0,t.jsx)(n.em,{children:"laCha\xeene"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"laText"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cha\xeene \xe0 convertir en majuscules"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si pass\xe9 : conserver les accents Si omis : supprimer les accents"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"cha\xeene en majuscules"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Uppercase"})," retourne une cha\xeene de caract\xe8res \xe9gale \xe0 ",(0,t.jsx)(n.em,{children:"laCha\xeene"})," dont tous les caract\xe8res alphab\xe9tiques ont \xe9t\xe9 convertis en majuscules."]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre facultatif ",(0,t.jsx)(n.em,{children:"*"}),", s'il est pass\xe9, indiqueque les \xe9ventuels caract\xe8res accentu\xe9s pr\xe9sents dans ",(0,t.jsx)(n.em,{children:"laCha\xeene"})," doivent \xeatre retourn\xe9s sous forme de majuscules accentu\xe9es. Par d\xe9faut, lorsque ce param\xe8tre est omis, les caract\xe8res accentu\xe9s \u201Cperdent\u201D leur accent une fois la conversion effectu\xe9e."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Cet exemple compare les r\xe9sultats obtenus suivant que le param\xe8tre * a \xe9t\xe9 pass\xe9 ou non :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$lachaine:=Uppercase("h\xe9l\xe8ne")\xa0// $lachaine vaut \xab HELENE \xbb\n\xa0$lachaine:=Uppercase("h\xe9l\xe8ne";*)\xa0// $lachaine vaut \xab H\xc9L\xc8NE \xbb\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsxs)(n.p,{children:["Reportez-vous \xe0 l'exemple de ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/lowercase",children:"Lowercase"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/lowercase",children:"Lowercase"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"13"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var r=s(667294);let t={},c=r.createContext(t);function a(e){let n=r.useContext(c);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);