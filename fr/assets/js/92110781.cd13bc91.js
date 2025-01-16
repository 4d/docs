"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85885"],{681727:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/generate-uuid","title":"Generate UUID","description":"Generate UUID : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/generate-uuid.md","sourceDirName":"commands-legacy","slug":"/commands/generate-uuid","permalink":"/docs/fr/20-R7/commands/generate-uuid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-uuid.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"generate-uuid","title":"Generate UUID","slug":"/commands/generate-uuid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Generate password hash","permalink":"/docs/fr/20-R7/commands/generate-password-hash"},"next":{"title":"GET MACRO PARAMETER","permalink":"/docs/fr/20-R7/commands/get-macro-parameter"}}'),s=t("785893"),d=t("250065");let i={id:"generate-uuid",title:"Generate UUID",slug:"/commands/generate-uuid",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function l(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Generate UUID"})," : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nouvel UUID sous forme de texte non-canonique (32 caract\xe8res)"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Generate UUID"})," retourne un nouvel identifiant UUID de 32 caract\xe8res sous forme non-canonique."]}),"\n",(0,s.jsx)(n.p,{children:"Un UUID est un nombre d\u2019une taille de 16 octets (128 bits). Il contient 32 caract\xe8res hexad\xe9cimaux. Il peut \xeatre exprim\xe9 sous forme non canonique (suite de 32 lettres [A-F, a-f] et/ou chiffres [0-9], par exemple 550e8400e29b41d4a716446655440000) ou sous forme canonique (groupes de 8,4,4,4,12, par exemple 550e8400-e29b-41d4-a716-446655440000)."}),"\n",(0,s.jsxs)(n.p,{children:["Dans 4D, les num\xe9ros UUID peuvent \xeatre stock\xe9s dans des champs. Pour plus d'informations, reportez-vous \xe0 la section ",(0,s.jsx)(n.em,{children:"Format UUID"})," dans le manuel ",(0,s.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"G\xe9n\xe9ration d\u2019un UUID dans une variable :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var MonUUID : Text\n\xa0MonUUID:=Generate UUID\n"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1066"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);