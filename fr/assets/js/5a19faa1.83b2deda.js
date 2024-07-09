/*! For license information please see 5a19faa1.83b2deda.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11042],{111052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=t(474848),r=t(28453);const d={id:"date",title:"Date"},i=void 0,l={id:"Concepts/date",title:"Date",description:"Les variables, champs ou expressions de type Date peuvent \xeatre compris entre 1/1/100 et 31/12/32767.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Concepts/dt_date.md",sourceDirName:"Concepts",slug:"/Concepts/date",permalink:"/docs/fr/20-R4/Concepts/date",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"date",title:"Date"},sidebar:"docs",previous:{title:"Collection",permalink:"/docs/fr/20-R4/Concepts/collection"},next:{title:"Null et Undefined",permalink:"/docs/fr/20-R4/Concepts/null-undefined"}},a={},c=[{value:"Constantes litt\xe9rales de type date",id:"Constantes-litt\xe9rales-de-type-date",level:2},{value:"Op\xe9rateurs sur les dates",id:"Op\xe9rateurs-sur-les-dates",level:2}];function o(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Les variables, champs ou expressions de type Date peuvent \xeatre compris entre 1/1/100 et 31/12/32767."}),"\n",(0,s.jsx)(n.p,{children:"Bien que le mode de repr\xe9sentation des dates puisse fonctionner avec des dates jusqu'\xe0 l'ann\xe9e 32 767, certaines op\xe9rations passant par le syst\xe8me imposent une limite inf\xe9rieure."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Dans le manuel de r\xe9f\xe9rence du langage 4D, les param\xe8tres de type Date dans les descriptions des commandes sont appel\xe9s Date, sauf sp\xe9cification explicite."]}),"\n",(0,s.jsx)(n.h2,{id:"Constantes-litt\xe9rales-de-type-date",children:"Constantes litt\xe9rales de type date"}),"\n",(0,s.jsx)(n.p,{children:"Une constante litt\xe9rale de type date est comprise entre deux points d'exclamation (!\u2026!). Une date doit \xeatre structur\xe9e avec le format ISO (!YYYY-MM-DD!). Voici quelques exemples de constantes dates :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Une date nulle s\u2019\xe9crit ",(0,s.jsx)(n.em,{children:"!00-00-00!"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Astuce :"})," L'\xe9diteur de code comprend un raccourci pour saisir une date nulle. Pour cela, tapez un point d\u2019exclamation (!) et appuyez sur la touche Entr\xe9e."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pour des raisons de compatibilit\xe9, 4D accepte la saisie de dates en utilisant le format du syst\xe8me avec des ann\xe9es sur deux chiffres, telles que !12/04/98!. Dans ce cas, le programme consid\xe8re qu\u2019elle appartient au XXe ou au XXIe si\xe8cle selon qu'elle est sup\xe9rieure ou inf\xe9rieure \xe0 30, sauf si ce fonctionnement par d\xe9faut a \xe9t\xe9 modifi\xe9 \xe0 l'aide de la commande ",(0,s.jsx)(n.code,{children:"SET DEFAULT CENTURY"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'Si vous avez coch\xe9 l\'option "Utiliser langage fran\xe7ais et param\xe8tres r\xe9gionaux syst\xe8me" (cf. Page M\xe9thodes), vous devez utiliser le format de date d\xe9fini dans votre syst\xe8me. G\xe9n\xe9ralement dans un environnement fran\xe7ais, une date est saisie sous la forme jour/mois/ann\xe9e, une barre oblique "/" s\xe9parant les valeurs.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"Op\xe9rateurs-sur-les-dates",children:"Op\xe9rateurs sur les dates"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Op\xe9ration"}),(0,s.jsx)(n.th,{children:"Syntaxe"}),(0,s.jsx)(n.th,{children:"Retourne"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Diff\xe9rence"}),(0,s.jsx)(n.td,{children:"Date - Date"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,s.jsx)(n.td,{children:"19"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Addition"}),(0,s.jsx)(n.td,{children:"Date + Num\xe9rique"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"!2017-01-20! + 9"}),(0,s.jsx)(n.td,{children:"!2017-01-29!"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Soustraction"}),(0,s.jsx)(n.td,{children:"Date - Num\xe9rique"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"!2017-01-20! - 9"}),(0,s.jsx)(n.td,{children:"!2017-01-11!"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Egalit\xe9"}),(0,s.jsx)(n.td,{children:"Date = Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! = !2017-01-01!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,s.jsx)(n.td,{children:"Date # Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,s.jsx)(n.td,{children:"Date > Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! > !2017-01-01!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! > !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,s.jsx)(n.td,{children:"Date < Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,s.jsx)(n.td,{children:"Date >= Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! >=!2017-01-01!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-01!>=!2017-01-20!"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,s.jsx)(n.td,{children:"Date <= Date"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-20!"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-01!"}),(0,s.jsx)(n.td,{children:"False"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,d={},c=null,o=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:o,props:d,_owner:l.current}}n.Fragment=d,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(296540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);