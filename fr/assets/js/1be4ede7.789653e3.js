"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6959"],{705289:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"Concepts/boolean","title":"Boolean","description":"Un champ, une variable ou une expression de type bool\xe9en peut \xeatre soit VRAI soit FAUX.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/Concepts/dt_boolean.md","sourceDirName":"Concepts","slug":"/Concepts/boolean","permalink":"/docs/fr/Concepts/boolean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"boolean","title":"Boolean"},"sidebar":"docs","previous":{"title":"BLOB","permalink":"/docs/fr/Concepts/blob"},"next":{"title":"Collection","permalink":"/docs/fr/Concepts/collection"}}'),t=s("785893"),l=s("250065");let o={id:"boolean",title:"Boolean"},d=void 0,i={},c=[{value:"Fonctions bool\xe9ennes",id:"fonctions-bool\xe9ennes",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Op\xe9rateurs logiques",id:"op\xe9rateurs-logiques",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Un champ, une variable ou une expression de type bool\xe9en peut \xeatre soit VRAI soit FAUX."}),"\n",(0,t.jsx)(n.h2,{id:"fonctions-bool\xe9ennes",children:"Fonctions bool\xe9ennes"}),"\n",(0,t.jsxs)(n.p,{children:["Les fonctions bool\xe9ennes de 4D traitent des valeurs telles que ",(0,t.jsx)(n.code,{children:"Vrai"}),", ",(0,t.jsx)(n.code,{children:"Faux"})," et ",(0,t.jsx)(n.code,{children:"Non"})," dans le th\xe8me ",(0,t.jsx)(n.strong,{children:"Bool\xe9ens"})," consacr\xe9. Pour plus d'informations, veuillez vous reporter \xe0 la description de ces commandes."]}),"\n",(0,t.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"L'exemple suivant retourne Vrai dans la variable monBool\xe9en si l'utilisateur a cliqu\xe9 sur le bouton monBouton et Faux s'il n'a pas cliqu\xe9 dessus. . Lorsqu'un bouton re\xe7oit un clic, la variable du bouton prend la valeur 1."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" If(monBouton=1) // Si le bouton a re\xe7u un clic\n    monBool\xe9en:=True// monBool\xe9en prend la valeur True\n Else // Si le bouton n'a pas re\xe7u de clic,\n    monBool\xe9en:=False //monBool\xe9en prend la valeur False\n End if\n"})}),"\n",(0,t.jsx)(n.p,{children:"L'exemple ci-dessus peut \xeatre simplifi\xe9 et \xe9crit en une seule ligne ."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"monBool\xe9en:=(monBouton=1)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"op\xe9rateurs-logiques",children:"Op\xe9rateurs logiques"}),"\n",(0,t.jsx)(n.p,{children:"4D supporte deux op\xe9rateurs logiques : l'op\xe9rateur d'intersection (AND) et l'op\xe9rateur de r\xe9union inclusive (OR). Le AND logique retourne TRUE si les deux expressions sont VRAIES. Le OR logique retourne TRUE si au moins une des expressions est VRAIE. Le tableau suivant d\xe9crit les op\xe9rateurs logiques :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe9ration"}),(0,t.jsx)(n.th,{children:"Syntaxe"}),(0,t.jsx)(n.th,{children:"Retourne"}),(0,t.jsx)(n.th,{children:"Expression"}),(0,t.jsx)(n.th,{children:"Valeur"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AND"}),(0,t.jsx)(n.td,{children:"Bool\xe9en & Bool\xe9en"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:'("A" = "A") & (15 # 3)'}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:'("A" = "B") & (15 # 3)'}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:'("A" = "B") & (15 = 3)'}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"OR"}),(0,t.jsx)(n.td,{children:"Bool\xe9en & Bool\xe9en"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:'("A" = "A") | (15 # 3)'}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:'("A" = "B") |  (15 # 3)'}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:'("A" = "B") |  (15 = 3)'}),(0,t.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:'Voici la "table de v\xe9rit\xe9" pour l\'op\xe9rateur logique "AND" :'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Expr1"}),(0,t.jsx)(n.th,{children:"Expr2"}),(0,t.jsx)(n.th,{children:"Expr1 & Expr2"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"False"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:'Voici la "table de v\xe9rit\xe9" pour l\'op\xe9rateur logique "OR" :'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Expr1"}),(0,t.jsx)(n.th,{children:"Expr2"}),(0,t.jsx)(n.th,{children:"Expr1 | Expr2"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"True"}),(0,t.jsx)(n.td,{children:"True"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"False"}),(0,t.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Astuce :"}),' Si vous devez calculer une r\xe9union exclusive (le "Ou" exclusif) entre Expr1 et Expr2, \xe9crivez :']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Dans les contextes bool\xe9ens, le langage 4D prend \xe9galement en charge les ",(0,t.jsx)(n.a,{href:"/docs/fr/Concepts/operators#short-circuit-operators",children:"op\xe9rateurs de court-circuit"})," (",(0,t.jsx)(n.code,{children:"&&"})," et ",(0,t.jsx)(n.code,{children:"||"}),") et le concept de ",(0,t.jsx)(n.a,{href:"/docs/fr/Concepts/operators#truthy-and-falsy",children:"truthy et falsy"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var r=s(667294);let t={},l=r.createContext(t);function o(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);