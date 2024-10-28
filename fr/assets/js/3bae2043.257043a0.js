"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19031],{180518:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(474848),r=s(28453);const i={id:"php-set-option",title:"PHP SET OPTION",slug:"/commands/php-set-option",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/php-set-option",title:"PHP SET OPTION",description:"PHP SET OPTION ( option ; valeur {; *} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/php-set-option.md",sourceDirName:"commands-legacy",slug:"/commands/php-set-option",permalink:"/docs/fr/commands/php-set-option",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-set-option.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"php-set-option",title:"PHP SET OPTION",slug:"/commands/php-set-option",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"PHP GET OPTION",permalink:"/docs/fr/commands/php-get-option"},next:{title:"APPEND DATA TO PASTEBOARD",permalink:"/docs/fr/commands/append-data-to-pasteboard"}},l={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PHP SET OPTION"})," ( ",(0,t.jsx)(n.em,{children:"option"})," ; ",(0,t.jsx)(n.em,{children:"valeur"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"option"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d\u2019option \xe0 d\xe9finir"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valeur"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nouvelle valeur de l\u2019option"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si pass\xe9 : la modification ne s\u2019applique qu\u2019\xe0 l\u2019appel suivant"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.admonition,{title:"Compatibilit\xe9",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PHP est obsol\xe8te dans 4D"}),". Il est d\xe9sormais recommand\xe9 d'utiliser la classe ",(0,t.jsx)(n.a,{href:"/docs/fr/API/SystemWorkerClass",children:(0,t.jsx)(n.code,{children:"4D.SystemWorker"})}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"PHP SET OPTION"})," permet de d\xe9finir des options sp\xe9cifiques avant un appel \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/php-execute",children:"PHP Execute"}),". La port\xe9e de cette commande est le process courant."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"option"})," une constante du th\xe8me ",(0,t.jsx)(n.em,{children:"PHP"})," d\xe9signant l\u2019option \xe0 modifier et dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"valeur"}),", la nouvelle valeur de l\u2019option."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PHP raw result"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:["D\xe9finition du mode de traitement des en-t\xeates HTTP renvoy\xe9s par PHP dans le r\xe9sultat de l\u2019ex\xe9cution lorsque ce r\xe9sultat est de type texte (lorsque le r\xe9sultat est de type BLOB, les en-t\xeates sont toujours conserv\xe9s).",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"Valeur(s) possible(s)"})," : Bool\xe9en. Faux (valeur par d\xe9faut) = supprimer les en-t\xeates HTTP du r\xe9sultat. Vrai = conserver les en-t\xeates HTTP."]})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, ",(0,t.jsx)(n.strong,{children:"PHP SET OPTION"})," d\xe9finit l\u2019option pour tous les appels \xe0 ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/php-execute",children:"PHP Execute"})," ult\xe9rieurs du process. Si vous souhaitez la d\xe9finir pour le prochain appel uniquement, passez le param\xe8tre \xe9toile (",(0,t.jsx)(n.em,{children:"*"}),")."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/php-execute",children:"PHP Execute"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/php-get-option",children:"PHP GET OPTION"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var t=s(296540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);