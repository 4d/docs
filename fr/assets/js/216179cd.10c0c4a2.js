"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50403"],{673997:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"Concepts/date","title":"Date","description":"Les variables, champs ou expressions de type Date peuvent \xeatre compris entre 1/1/100 et 31/12/32767.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Concepts/dt_date.md","sourceDirName":"Concepts","slug":"/Concepts/date","permalink":"/docs/fr/Concepts/date","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_date.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"date","title":"Date"},"sidebar":"docs","previous":{"title":"Collection","permalink":"/docs/fr/Concepts/collection"},"next":{"title":"Null et Undefined","permalink":"/docs/fr/Concepts/null-undefined"}}'),d=t("785893"),r=t("250065");let i={id:"date",title:"Date"},l=void 0,a={},c=[{value:"Constantes litt\xe9rales de type date",id:"constantes-litt\xe9rales-de-type-date",level:2},{value:"Op\xe9rateurs sur les dates",id:"op\xe9rateurs-sur-les-dates",level:2}];function o(e){let n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Les variables, champs ou expressions de type Date peuvent \xeatre compris entre 1/1/100 et 31/12/32767."}),"\n",(0,d.jsx)(n.p,{children:"Bien que le mode de repr\xe9sentation des dates puisse fonctionner avec des dates jusqu'\xe0 l'ann\xe9e 32 767, certaines op\xe9rations passant par le syst\xe8me imposent une limite inf\xe9rieure."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note :"})," Dans le manuel de r\xe9f\xe9rence du langage 4D, les param\xe8tres de type Date dans les descriptions des commandes sont appel\xe9s Date, sauf sp\xe9cification explicite."]}),"\n",(0,d.jsx)(n.h2,{id:"constantes-litt\xe9rales-de-type-date",children:"Constantes litt\xe9rales de type date"}),"\n",(0,d.jsx)(n.p,{children:"Une constante litt\xe9rale de type date est comprise entre deux points d'exclamation (!\u2026!). Une date doit \xeatre structur\xe9e avec le format ISO (!YYYY-MM-DD!). Voici quelques exemples de constantes dates :"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"!1976-01-01!\n!2004-09-29!\n!2015-12-31!\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Une date nulle s\u2019\xe9crit ",(0,d.jsx)(n.em,{children:"!00-00-00!"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Astuce :"})," L'\xe9diteur de code comprend un raccourci pour saisir une date nulle. Pour entrer une date nulle, tapez un point d\u2019exclamation (!) et appuyez sur Entr\xe9e."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notes :"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Pour des raisons de compatibilit\xe9, 4D accepte la saisie de dates en utilisant le format du syst\xe8me avec des ann\xe9es sur deux chiffres, telles que !12/04/98!. Une ann\xe9e sur deux chiffres est suppos\xe9e appartenir au XXe ou au XXIe si\xe8cle si elle est respectivement sup\xe9rieure ou inf\xe9rieure \xe0 30, sauf si ce param\xe8tre par d\xe9faut a \xe9t\xe9 modifi\xe9 \xe0 l'aide de la commande ",(0,d.jsx)(n.code,{children:"SET DEFAULT CENTURY"}),"."]}),"\n",(0,d.jsx)(n.li,{children:'Si vous avez coch\xe9 l\'option "Utiliser langage fran\xe7ais et param\xe8tres r\xe9gionaux syst\xe8me" (cf. Page M\xe9thodes), vous devez utiliser le format de date d\xe9fini dans votre syst\xe8me. G\xe9n\xe9ralement dans un environnement fran\xe7ais, une date est saisie sous la forme jour/mois/ann\xe9e, une barre oblique "/" s\xe9parant les valeurs.'}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-dates",children:"Op\xe9rateurs sur les dates"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Op\xe9ration"}),(0,d.jsx)(n.th,{children:"Syntaxe"}),(0,d.jsx)(n.th,{children:"Retourne"}),(0,d.jsx)(n.th,{children:"Expression"}),(0,d.jsx)(n.th,{children:"Valeur"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Diff\xe9rence"}),(0,d.jsx)(n.td,{children:"Date - Date"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - !2017-01-01!"}),(0,d.jsx)(n.td,{children:"19"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Addition"}),(0,d.jsx)(n.td,{children:"Date + Num\xe9rique"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"!2017-01-20! + 9"}),(0,d.jsx)(n.td,{children:"!2017-01-29!"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Soustraction"}),(0,d.jsx)(n.td,{children:"Date - Num\xe9rique"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"!2017-01-20! - 9"}),(0,d.jsx)(n.td,{children:"!2017-01-11!"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Egalit\xe9"}),(0,d.jsx)(n.td,{children:"Date = Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! = !2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,d.jsx)(n.td,{children:"Date # Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,d.jsx)(n.td,{children:"Date > Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! > !2017-01-20!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! > !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,d.jsx)(n.td,{children:"Date < Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! < !2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,d.jsx)(n.td,{children:"Date >= Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! >=!2017-01-01!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-01!>=!2017-01-20!"}),(0,d.jsx)(n.td,{children:"False"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,d.jsx)(n.td,{children:"Date <= Date"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-20!"}),(0,d.jsx)(n.td,{children:"True"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{children:"!2017-01-20! <= !2017-01-01!"}),(0,d.jsx)(n.td,{children:"False"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);