"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15655],{480658:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>u});var r=s(474848),t=s(28453);const d={id:"time",title:"Time"},i=void 0,l={id:"Concepts/time",title:"Time",description:"Les variables, champs ou expressions de type Heure (Time) peuvent \xeatre compris entre 0000 et 596 00000.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Concepts/dt_time.md",sourceDirName:"Concepts",slug:"/Concepts/time",permalink:"/docs/fr/20/Concepts/time",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_time.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"time",title:"Time"},sidebar:"docs",previous:{title:"String",permalink:"/docs/fr/20/Concepts/string"},next:{title:"Variant",permalink:"/docs/fr/20/Concepts/variant"}},c={},u=[{value:"Constantes litt\xe9rales de type heure",id:"constantes-litt\xe9rales-de-type-heure",level:2},{value:"Op\xe9rateurs sur les heures",id:"op\xe9rateurs-sur-les-heures",level:2},{value:"Exemple 1",id:"exemple-1",level:3},{value:"Exemple 2",id:"exemple-2",level:3}];function h(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Les variables, champs ou expressions de type Heure (Time) peuvent \xeatre compris entre 00:00:00 et 596 000:00:00."}),"\n",(0,r.jsx)(n.p,{children:"Les heures sont stock\xe9es dans un format de 24 heures."}),"\n",(0,r.jsx)(n.p,{children:"Une valeur de type Heure peut \xeatre utilis\xe9e en tant que num\xe9rique. Le nombre correspondant est le nombre de secondes que cette valeur repr\xe9sente \xe0 partir de minuit (00:00:00)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Dans le manuel de ",(0,r.jsx)(n.em,{children:"r\xe9f\xe9rence du langage 4D"}),", les param\xe8tres de type Heure dans les descriptions des commandes sont appel\xe9s Heure, sauf sp\xe9cification explicite."]}),"\n",(0,r.jsx)(n.h2,{id:"constantes-litt\xe9rales-de-type-heure",children:"Constantes litt\xe9rales de type heure"}),"\n",(0,r.jsx)(n.p,{children:"Une constante heure est incluse entre deux points d\u2019interrogation (?...?)."}),"\n",(0,r.jsx)(n.p,{children:"Avec une version fran\xe7aise de 4D, une heure est structur\xe9e sous la forme heure:minute:seconde, deux points (:) s\xe9parant les valeurs. Les heures sont stock\xe9es dans un format de 24 heures."}),"\n",(0,r.jsx)(n.p,{children:"Voici quelques exemples de constantes litt\xe9rales de type heure :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"?00:00:00? // minuit\n?09:30:00? // 9:30 du matin\n?13:01:59? // 13 heures, 1 minute et 59 secondes\n"})}),"\n",(0,r.jsx)(n.p,{children:"Une heure nulle s\u2019\xe9crit ?00:00:00?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Astuce :"})," L'\xe9diteur de code propose un raccourci pour saisir une date nulle. Pour cela, tapez un point d'interrogation (?) et appuyez sur la touche Entr\xe9e."]}),"\n",(0,r.jsx)(n.h2,{id:"op\xe9rateurs-sur-les-heures",children:"Op\xe9rateurs sur les heures"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Op\xe9ration"}),(0,r.jsx)(n.th,{children:"Syntaxe"}),(0,r.jsx)(n.th,{children:"Retourne"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valeur"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Addition"}),(0,r.jsx)(n.td,{children:"Heure + Heure"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"?02:03:04? + ?01:02:03?"}),(0,r.jsx)(n.td,{children:"?03:05:07?"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Soustraction"}),(0,r.jsx)(n.td,{children:"Heure \u2013 Heure"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"?02:03:04? \u2013 ?01:02:03?"}),(0,r.jsx)(n.td,{children:"?01:01:01?"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Addition"}),(0,r.jsx)(n.td,{children:"Heure + Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"?02:03:04? + 65"}),(0,r.jsx)(n.td,{children:"7449"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Soustraction"}),(0,r.jsx)(n.td,{children:"Heure \u2013 Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"?02:03:04? \u2013 65"}),(0,r.jsx)(n.td,{children:"7319"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Multiplication"}),(0,r.jsx)(n.td,{children:"Heure * Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"?02:03:04? * 2"}),(0,r.jsx)(n.td,{children:"14768"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Division"}),(0,r.jsx)(n.td,{children:"Heure / Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"?02:03:04? / 2"}),(0,r.jsx)(n.td,{children:"3692"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Division enti\xe8re"}),(0,r.jsx)(n.td,{children:"Heure \\ Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"?02:03:04? \\ 2"}),(0,r.jsx)(n.td,{children:"3692"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modulo"}),(0,r.jsx)(n.td,{children:"Heure % Heure"}),(0,r.jsx)(n.td,{children:"Time"}),(0,r.jsx)(n.td,{children:"?20:10:00? % ?04:20:00?"}),(0,r.jsx)(n.td,{children:"?02:50:00?"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modulo"}),(0,r.jsx)(n.td,{children:"Heure % Nombre"}),(0,r.jsx)(n.td,{children:"Number"}),(0,r.jsx)(n.td,{children:"?02:03:04? % 2"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Egalit\xe9"}),(0,r.jsx)(n.td,{children:"Heure = Heure"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"?01:02:03? = ?01:02:03?"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"?01:02:03? = ?01:02:04?"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"In\xe9galit\xe9"}),(0,r.jsx)(n.td,{children:"Heure # Heure"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"?01:02:03? # ?01:02:04?"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"?01:02:03? # ?01:02:03?"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sup\xe9rieur \xe0"}),(0,r.jsx)(n.td,{children:"Heure > Heure"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"?01:02:04? > ?01:02:03?"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"?01:02:03? > ?01:02:03?"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inf\xe9rieur \xe0"}),(0,r.jsx)(n.td,{children:"Heure < Heure"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"?01:02:03? < ?01:02:04?"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"?01:02:03? < ?01:02:03?"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sup\xe9rieur ou \xe9gal \xe0"}),(0,r.jsx)(n.td,{children:"Heure >= Heure"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"?01:02:03? >=?01:02:03?"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"?01:02:03? >=?01:02:04?"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Inf\xe9rieur ou \xe9gal \xe0"}),(0,r.jsx)(n.td,{children:"Heure <= Heure"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"?01:02:03? <=?01:02:03?"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"?01:02:04? <=?01:02:03?"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez combiner des expressions de type heure et de type num\xe9rique \xe0 l'aide des fonctions ",(0,r.jsx)(n.code,{children:"Time"})," et ",(0,r.jsx)(n.code,{children:"Time string"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez combiner des expressions Time et Number \xe0 l'aide des fonctions ",(0,r.jsx)(n.code,{children:"Time"})," ou ",(0,r.jsx)(n.code,{children:"Current time"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"    // La ligne suivante assigne \xe0 la variable $vlSecondes le nombre de secondes qui, dans une heure \xe0 partir de maintenant, se seront \xe9coul\xe9es depuis minuit\n $vlSeconds:=Current time+3600\n  // La ligne suivante assigne \xe0 la variable $vhBient\xf4t l'heure qu'il sera dans une heure\n $vhSoon:=Time(Current time+3600)\n"})}),"\n",(0,r.jsx)(n.p,{children:"La seconde ligne peut \xe9galement \xeatre \xe9crite de la fa\xe7on suivante :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"  // La ligne suivante assigne \xe0 la variable $vhBient\xf4t l'heure qu'il sera dans une heure\n $vhSoon:=Current time+?01:00:00?\n"})}),"\n",(0,r.jsx)(n.h3,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(n.p,{children:"L'op\xe9rateur Modulo permet notamment d'ajouter des heures en tenant compte du format sur 24 heures d'une journ\xe9e :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$t1:=?23:00:00? $t1:=?23:00:00? // avec une addition simple, $t2 vaut ?25:30:00?\n$t2:=($t1 +?02:30:00?)%?24:00:00? // $t2 vaut ?01:30:00? // Il est 23 heures\n  // Nous souhaitons ajouter 2 heures et demi\n$t2:=$t1 +?02:30:00?\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(296540);const t={},d=r.createContext(t);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);