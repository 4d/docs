/*! For license information please see c110acf0.d2c7eda0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82650],{895015:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=r(474848),t=r(28453);const l={id:"boolean",title:"Boolean"},o=void 0,d={id:"Concepts/boolean",title:"Boolean",description:"Un champ, une variable ou une expression de type bool\xe9en peut \xeatre soit VRAI soit FAUX.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/fr/20/Concepts/boolean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/fr/20/Concepts/blob"},next:{title:"Collection",permalink:"/docs/fr/20/Concepts/collection"}},i={},c=[{value:"Fonctions bool\xe9ennes",id:"Fonctions-bool\xe9ennes",level:2},{value:"Exemple",id:"Exemple",level:3},{value:"Op\xe9rateurs logiques",id:"Op\xe9rateurs-logiques",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Un champ, une variable ou une expression de type bool\xe9en peut \xeatre soit VRAI soit FAUX."}),"\n",(0,s.jsx)(n.h2,{id:"Fonctions-bool\xe9ennes",children:"Fonctions bool\xe9ennes"}),"\n",(0,s.jsxs)(n.p,{children:["Les fonctions bool\xe9ennes de 4D traitent des valeurs telles que ",(0,s.jsx)(n.code,{children:"Vrai"}),", ",(0,s.jsx)(n.code,{children:"Faux"})," et ",(0,s.jsx)(n.code,{children:"Non"})," dans le th\xe8me ",(0,s.jsx)(n.strong,{children:"Bool\xe9ens"})," consacr\xe9. Pour plus d'informations, veuillez vous reporter \xe0 la description de ces commandes."]}),"\n",(0,s.jsx)(n.h3,{id:"Exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"L'exemple suivant retourne Vrai dans la variable monBool\xe9en si l'utilisateur a cliqu\xe9 sur le bouton monBouton et Faux s'il n'a pas cliqu\xe9 dessus. . Lorsqu'un bouton re\xe7oit un clic, la variable du bouton prend la valeur 1."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" If(monBouton=1) // Si le bouton a re\xe7u un clic\n    monBool\xe9en:=True// monBool\xe9en prend la valeur True\n Else // Si le bouton n'a pas re\xe7u de clic,\n    monBool\xe9en:=False //monBool\xe9en prend la valeur False\n End if\n"})}),"\n",(0,s.jsx)(n.p,{children:"L'exemple ci-dessus peut \xeatre simplifi\xe9 et \xe9crit en une seule ligne ."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"monBool\xe9en:=(monBouton=1)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"Op\xe9rateurs-logiques",children:"Op\xe9rateurs logiques"}),"\n",(0,s.jsx)(n.p,{children:"4D supporte deux op\xe9rateurs logiques : l'op\xe9rateur d'intersection (AND) et l'op\xe9rateur de r\xe9union inclusive (OR). Le AND logique retourne TRUE si les deux expressions sont VRAIES. Le OR logique retourne TRUE si au moins une des expressions est VRAIE. Le tableau suivant d\xe9crit les op\xe9rateurs logiques :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Op\xe9ration"}),(0,s.jsx)(n.th,{children:"Syntaxe"}),(0,s.jsx)(n.th,{children:"Retourne"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AND"}),(0,s.jsx)(n.td,{children:"Bool\xe9en & Bool\xe9en"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'("A" = "A") & (15 # 3)'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'("A" = "B") & (15 # 3)'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'("A" = "B") & (15 = 3)'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OU"}),(0,s.jsx)(n.td,{children:"Bool\xe9en & Bool\xe9en"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'("A" = "A") | (15 # 3)'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'("A" = "B") |  (15 # 3)'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'("A" = "B") |  (15 = 3)'}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'Voici la "table de v\xe9rit\xe9" pour l\'op\xe9rateur logique "AND" :'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Expr1"}),(0,s.jsx)(n.th,{children:"Expr2"}),(0,s.jsx)(n.th,{children:"Expr1 & Expr2"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'Voici la "table de v\xe9rit\xe9" pour l\'op\xe9rateur logique "OR" :'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Expr1"}),(0,s.jsx)(n.th,{children:"Expr2"}),(0,s.jsx)(n.th,{children:"Expr1 | Expr2"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Astuce :"}),' Si vous devez calculer une r\xe9union exclusive (le "Ou" exclusif) entre Expr1 et Expr2, \xe9crivez :']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Dans les contextes bool\xe9ens, le langage 4D prend \xe9galement en charge les ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Concepts/operators#short-circuit-operators",children:"op\xe9rateurs de court-circuit"})," (",(0,s.jsx)(n.code,{children:"&&"})," et ",(0,s.jsx)(n.code,{children:"||"}),") et le concept de ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Concepts/operators#truthy-and-falsy",children:"truthy et falsy"}),"."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,l={},c=null,a=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,s)&&!i.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:a,props:l,_owner:d.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(296540);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);