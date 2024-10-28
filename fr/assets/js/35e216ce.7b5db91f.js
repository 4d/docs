"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8403],{221278:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(474848),r=s(28453);const i={id:"spell-checking",title:"SPELL CHECKING",slug:"/commands/spell-checking",displayed_sidebar:"docs"},o=void 0,a={id:"commands-legacy/spell-checking",title:"SPELL CHECKING",description:"SPELL CHECKING",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/spell-checking.md",sourceDirName:"commands-legacy",slug:"/commands/spell-checking",permalink:"/docs/fr/commands/spell-checking",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-checking.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"spell-checking",title:"SPELL CHECKING",slug:"/commands/spell-checking",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SPELL CHECK TEXT",permalink:"/docs/fr/commands/spell-check-text"},next:{title:"SPELL Get current dictionary",permalink:"/docs/fr/commands/spell-get-current-dictionary"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"SPELL CHECKING"})}),"\n\n\n\n\n\n\n\n",(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ne requiert pas de param\xe8tre"}),(0,t.jsx)(n.th,{})]})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SPELL CHECKING"})," d\xe9clenche la v\xe9rification de l\u2019orthographe du champ ou de la variable ayant le focus dans le formulaire affich\xe9 \xe0 l\u2019\xe9cran. L\u2019objet v\xe9rifi\xe9 doit \xeatre de type Alpha ou Texte."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si vous souhaitez d\xe9clencher la correction orthographique \xe0 partir d\u2019un bouton dans le formulaire, assurez-vous qu\u2019il ne dispose pas de la propri\xe9t\xe9 \u201cFocusable\u201d."]}),"\n",(0,t.jsxs)(n.p,{children:["La v\xe9rification d\xe9bute par le premier mot du champ ou de la variable. Si un mot inconnu est d\xe9tect\xe9, la bo\xeete de dialogue de correction appara\xeet (pour plus d\u2019informations, reportez-vous au manuel Mode D\xe9veloppement de 4D). 4D utilise le dictionnaire courant (correspondant \xe0 la langue de l\u2019application) sauf si vous avez utilis\xe9 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," La commande ",(0,t.jsx)(n.strong,{children:"SPELL CHECKING"})," agit sur le texte en cours de saisie dans le formulaire, et non sur sa source de donn\xe9es associ\xe9e (variable ou champ). Ce principe implique que si la commande est appel\xe9e depuis les \xe9v\xe9nements formulaire On Data Change ou On Losing Focus (non recommand\xe9), elle n'aura pas d'effet sur le texte stock\xe9 car \xe0 ce moment, 4D a d\xe9j\xe0 assign\xe9 le texte saisi \xe0 la source de donn\xe9es. Dans ce cas, vous devez alors assigner vous-m\xeame le r\xe9sultat modifi\xe9 \xe0 la source de donn\xe9es, via la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/get-edited-text",children:"Get edited text"}),". Par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=Sur donn\xe9es modifi\xe9es)\n\xa0\xa0\xa0\xa0SPELL CHECKING\n\xa0\xa0\xa0\xa0theVariable:=Get edited text\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/spell-check-text",children:"SPELL CHECK TEXT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(296540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);