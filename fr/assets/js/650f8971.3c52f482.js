"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48235],{263960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(474848),i=n(28453);const r={id:"is-editing-text",title:"Is editing text",slug:"/commands/is-editing-text",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/is-editing-text",title:"Is editing text",description:"Is editing text  -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/is-editing-text.md",sourceDirName:"commands-legacy",slug:"/commands/is-editing-text",permalink:"/docs/fr/commands/is-editing-text",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-editing-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"is-editing-text",title:"Is editing text",slug:"/commands/is-editing-text",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"HIGHLIGHT TEXT",permalink:"/docs/fr/commands/highlight-text"},next:{title:"Keystroke",permalink:"/docs/fr/commands/keystroke"}},a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Is editing text"}),"  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Vrai si le texte est en cours de saisie, sinon faux"})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"Is editing text"})," retourne ",(0,s.jsx)(t.strong,{children:"Vrai"})," si l'utilisateur saisit des valeurs dans un objet de formulaire d'entr\xe9e, et ",(0,s.jsx)(t.strong,{children:"Faux"})," dans tous les autres cas."]}),"\n",(0,s.jsx)(t.p,{children:"Cette commande est principalement destin\xe9e \xe0 distinguer, dans le code lanc\xe9 par l'\xe9v\xe9nement formulaire Sur avant frappe clavier, la saisie de donn\xe9es utilisateur et l'utilisation de touches de raccourcis. Par exemple, vous pouvez choisir d'ex\xe9cuter un code diff\xe9rent selon que l'utilisateur appuie sur une touche pour saisir du texte dans une cellule, ou pour faire d\xe9filer la listbox."}),"\n",(0,s.jsxs)(t.p,{children:["La commande ",(0,s.jsx)(t.strong,{children:"Is editing text"})," peut \xeatre utilis\xe9e uniquement avec les objets de formulaire suivants :"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"zone de saisie"}),"\n",(0,s.jsx)(t.li,{children:"listbox (saisissable et non saisissable)"}),"\n",(0,s.jsx)(t.li,{children:"combo box"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Avec d'autres objets, la commande retourne toujours ",(0,s.jsx)(t.strong,{children:"Faux"}),". Elle ne peut notamment pas \xeatre utilis\xe9e avec des zones 4D Write Pro et 4D View Pro."]}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"Pour permettre \xe0 l'utilisateur de s\xe9lectionner une ligne commen\xe7ant par la lettre ou le num\xe9ro saisi(e) dans une listbox saisissable :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event.code=On Before Keystroke)\xa0//une touche est enfonc\xe9e\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is editing text)\xa0//le texte est saisi\n\xa0\xa0// vous rejetez certains caract\xe8res\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Keystroke="+")|(Keystroke="-")|(Keystroke="/")|(Keystroke="*")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0//rien n\'est en cours de saisie, fonctionnalit\xe9 raccourci\xa0d\xe9filement\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$charCode:=Keystroke\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$char:=Majuscule($charCode)\xa0// supprime les accents\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:((($char>="A")&($char<="Z"))|(($char>="0")&($char<="9")))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//S\xe9lectionne une ligne commen\xe7ant par la lettre ou le num\xe9ro saisi(e)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($charCode>=Left arrow key)&($charCode<=Down arrow key)\xa0// fl\xe8ches gauche/droite/haut/bas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0FILTER KEYSTROKE("")\xa0\xa0// d\xe9sactive les actions des fl\xe8ches\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/commands/get-edited-text",children:"Get edited text"})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var s=n(296540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);