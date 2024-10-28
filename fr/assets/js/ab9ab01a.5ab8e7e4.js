"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99488],{638141:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=s(474848),t=s(28453);const i={id:"set-timeout",title:"SET TIMEOUT",slug:"/commands/set-timeout",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/set-timeout",title:"SET TIMEOUT",description:"SET TIMEOUT ( secondes )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-timeout.md",sourceDirName:"commands-legacy",slug:"/commands/set-timeout",permalink:"/docs/fr/commands/set-timeout",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timeout.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-timeout",title:"SET TIMEOUT",slug:"/commands/set-timeout",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET CHANNEL",permalink:"/docs/fr/commands/set-channel"},next:{title:"USE CHARACTER SET",permalink:"/docs/fr/commands/use-character-set"}},o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET TIMEOUT"})," ( ",(0,r.jsx)(n.em,{children:"secondes"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"secondes"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nombre de secondes jusqu'au timeout"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SET TIMEOUT"})," vous permet de d\xe9finir le temps d'attente maximum pour l'ex\xe9cution d'une commande de communication s\xe9rie. Si la commande ne se termine pas dans le temps ",(0,r.jsx)(n.em,{children:"secondes"})," qui lui est imparti, la communication s\xe9rie est annul\xe9e, l'erreur \u20139990 est g\xe9n\xe9r\xe9e, et la variable syst\xe8me OK prend la valeur 0. Vous pouvez intercepter cette erreur \xe0 l'aide d'une m\xe9thode install\xe9e par la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Notez que le d\xe9lai d\xe9fini repr\xe9sente la dur\xe9e totale permise pour que la commande s'ex\xe9cute, et non le d\xe9lai d'attente entre chaque caract\xe8re re\xe7u. Pour annuler un param\xe9trage pr\xe9c\xe9dent et ne pas sp\xe9cifier de temps d'attente maximum, passez 0 dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"secondes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Les commandes de communication s\xe9rie affect\xe9es par ce param\xe9trage sont les suivantes :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-record",children:"RECEIVE RECORD"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(n.p,{children:["L'exemple suivant fixe le port s\xe9rie devant recevoir des donn\xe9es et le timeout. Les donn\xe9es sont lues \xe0 l'aide de ",(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"}),". Si les donn\xe9es ne sont pas bien re\xe7ues dans le temps d\xe9fini, une erreur survient :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Ouverture du port s\xe9rie\n\xa0SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none)\n\xa0SET TIMEOUT(10)\xa0// Fixer le timeout \xe0 10 secondes\n\xa0ON ERR CALL("INTERCEPTER ERREURS COMMUNICATIONS")\xa0// Traiter les interruptions \xe9ventuelles\n\xa0RECEIVE PACKET(vBuffer;Char(Carriage return))\xa0// Lire jusqu\'au retour chariot\n\xa0If(OK=0)\xa0// Si une erreur survient\n\xa0\xa0\xa0\xa0ALERT("Erreur lors de la r\xe9ception des donn\xe9es.")\xa0// Informer l\'utilisateur\n\xa0Else\n\xa0\xa0\xa0\xa0[Personnes]Nom:=vBuffer\xa0// Sauvegarder les donn\xe9es dans un champ\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-packet",children:"RECEIVE PACKET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-record",children:"RECEIVE RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var r=s(296540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);