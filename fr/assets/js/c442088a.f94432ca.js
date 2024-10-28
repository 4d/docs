"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22009],{596698:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=s(474848),r=s(28453);const o={id:"trace",title:"TRACE",slug:"/commands/trace",displayed_sidebar:"docs"},a=void 0,d={id:"commands-legacy/trace",title:"TRACE",description:"TRACE",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trace.md",sourceDirName:"commands-legacy",slug:"/commands/trace",permalink:"/docs/fr/commands/trace",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrace.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"trace",title:"TRACE",slug:"/commands/trace",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"This",permalink:"/docs/fr/commands/this"},next:{title:"Type",permalink:"/docs/fr/commands/type"}},i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4}];function l(e){const n={br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"TRACE"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"TRACE"})," est utilis\xe9e, lors du d\xe9veloppement des bases, pour tracer des m\xe9thodes, c'est-\xe0-dire contr\xf4ler leur ex\xe9cution pas \xe0 pas."]}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"TRACE"})," affiche le d\xe9bogueur de 4D dans le process courant. La fen\xeatre du ",(0,t.jsx)(n.em,{children:"D\xe9bogueur"})," appara\xeet d\xe8s que la commande est appel\xe9e, avant l'ex\xe9cution de la ligne de code suivante, et reste affich\xe9e pour l'ex\xe9cution de chaque ligne de code. Vous pouvez \xe9galement appeler manuellement le d\xe9bogueur en utilisant la combinaison ",(0,t.jsx)(n.strong,{children:"Alt+Maj+clic droit"})," sous Windows ou ",(0,t.jsx)(n.strong,{children:"Control+Option+Commande+clic"})," sous Mac OS pendant l'ex\xe9cution du code."]}),"\n",(0,t.jsx)(n.p,{children:"Dans les bases compil\xe9es, cette commande est ignor\xe9e."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"4D Server :"})," Si vous appelez ",(0,t.jsx)(n.strong,{children:"TRACE"})," depuis une m\xe9thode projet ex\xe9cut\xe9e en tant que Proc\xe9dure stock\xe9e, la fen\xeatre du d\xe9bogueur appara\xeetra sur le poste serveur."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Conseil :"})," N'appelez pas ",(0,t.jsx)(n.strong,{children:"TRACE"})," lorsque vous utilisez un formulaire pour lequel les \xe9v\xe9nements On Activate et On Deactivate ont \xe9t\xe9 s\xe9lectionn\xe9s. En effet, chaque fois que la fen\xeatre du d\xe9bogueur appara\xeetra, les \xe9v\xe9nements formulaire seront activ\xe9s et cela cr\xe9era une boucle sans fin entre les \xe9v\xe9nements et le d\xe9bogueur. De m\xeame, si vous appelez la commande ",(0,t.jsx)(n.strong,{children:"TRACE"})," depuis une m\xe9thode formulaire ou objet ex\xe9cut\xe9e pendant la mise \xe0 jour du formulaire \xe0 l'\xe9cran, vous devrez \xe9galement faire face \xe0 un probl\xe8me de r\xe9p\xe9tition sans fin de la s\xe9quence mises \xe0 jour du formulaire/apparitions de la fen\xeatre du d\xe9bogueur.",(0,t.jsx)(n.br,{}),"\nSi vous vous retrouvez dans une telle situation, pour en sortir, utilisez la combinaison ",(0,t.jsx)(n.strong,{children:"Maj+clic"})," sur le bouton ",(0,t.jsx)(n.strong,{children:"Reprendre ex\xe9cution"})," du d\xe9bogueur. Tous les appels ult\xe9rieurs \xe0 ",(0,t.jsx)(n.strong,{children:"TRACE"})," dans le process seront ignor\xe9s."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:["Dans le code suivant, la variable process ",(0,t.jsx)(n.em,{children:"CREER_LANG"})," doit \xeatre \xe9gale \xe0 \u201cUS\u201d ou \u201cFR\u201d. Si ce n'est pas le cas, la m\xe9thode projet DEBUG est appel\xe9e :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// ...\n\xa0Case of\n\xa0\xa0\xa0\xa0:(CREER_LANG="US")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBHCmdNom:=[Commandes]CM US Nom\n\xa0\xa0\xa0\xa0:(CREER_LANG="FR")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vsBHCmdNom:=[Commandes]CM FR Nom\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DEBUG("Valeur de CREER_LANG incorrecte")\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.p,{children:"La m\xe9thode projet DEBUG est list\xe9e ci-dessous :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9thode projet DEBUG\n\xa0\xa0// DEBUG (Texte)\n\xa0\xa0// DEBUG (Informations suppl\xe9mentaires de d\xe9bogage)\n\xa0\n\xa0var $1 : Text\n\xa0\n\xa0If(\u25cavbDebugOn)\xa0// Variable interprocess d\xe9finie dans la m\xe9thode base Sur ouverture\n\xa0\xa0\xa0\xa0If(Is compiled mode)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Count parameters>=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT($1+Char(13)+"Appelez le concepteur au 05 05 05 05")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0TRACE\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var t=s(296540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);