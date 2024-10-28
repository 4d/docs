"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1801],{121737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(474848),r=t(28453);const o={id:"get-serial-port-mapping",title:"GET SERIAL PORT MAPPING",slug:"/commands/get-serial-port-mapping",displayed_sidebar:"docs"},i=void 0,a={id:"commands-legacy/get-serial-port-mapping",title:"GET SERIAL PORT MAPPING",description:"GET SERIAL PORT MAPPING ( tabNums ; tabLibell\xe9s )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-serial-port-mapping.md",sourceDirName:"commands-legacy",slug:"/commands/get-serial-port-mapping",permalink:"/docs/fr/commands/get-serial-port-mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-serial-port-mapping.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-serial-port-mapping",title:"GET SERIAL PORT MAPPING",slug:"/commands/get-serial-port-mapping",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"New shared collection",permalink:"/docs/fr/commands/new-shared-collection"},next:{title:"RECEIVE BUFFER",permalink:"/docs/fr/commands/receive-buffer"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET SERIAL PORT MAPPING"})," ( ",(0,s.jsx)(n.em,{children:"tabNums"})," ; ",(0,s.jsx)(n.em,{children:"tabLibell\xe9s"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabNums"}),(0,s.jsx)(n.td,{children:"Integer array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Tableau de num\xe9ros de ports s\xe9rie"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabLibell\xe9s"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Tableau de noms de ports s\xe9rie"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"GET SERIAL PORT MAPPING"})," retourne deux tableaux ",(0,s.jsx)(n.em,{children:"tabNums"})," et ",(0,s.jsx)(n.em,{children:"tabLibell\xe9s"})," contenant respectivement la liste des num\xe9ros et des noms des ports s\xe9rie de la machine courante."]}),"\n",(0,s.jsx)(n.p,{children:"Cette commande est utile sous Mac OS X car le syst\xe8me alloue dynamiquement les num\xe9ros des ports s\xe9rie lorsque vous utilisez un adaptateur s\xe9rie USB. A l\u2019aide de cette commande, vous pouvez adresser les ports s\xe9rie \xe9tendus via leur nom (invariable), quel que soit leur num\xe9ro."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note :"})," Cette commande ne retourne pas de valeurs significatives avec les ports standard. Si vous souhaitez adresser un port standard, vous devez passer directement sa valeur (0 ou 1) \xe0 la commande ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"})," (ancien mode de fonctionnement de 4D)."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Cette m\xe9thode projet permet d'adresser le m\xeame port s\xe9rie (sans protocole), quel que soit le num\xe9ro qui lui a \xe9t\xe9 attribu\xe9 :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($tNomPorts;0)\n\xa0ARRAY LONGINT($tNumPorts;0)\n\xa0var $vNumport;$vNumportFinal : Integer\n\xa0\n\xa0\xa0//Conna\xeetre les num\xe9ros actuels des ports s\xe9rie\n\xa0GET SERIAL PORT MAPPING($tNumPorts;$tNomPorts)\n\xa0$vNumport:=Find in array($tNomPorts;vNomport)\n\xa0\xa0// vNomport contient le nom du port \xe0 utiliser, il peut provenir d'une bo\xeete de dialogue,\n\xa0\xa0// d'une valeur stock\xe9e dans un champ, etc.\n\xa0If(tNumPorts{$vNumport}=0)\n\xa0\xa0\xa0\xa0$vNumportFinal:=0\xa0//cas particulier sous Mac OS X\n\xa0Else\n\xa0\xa0\xa0\xa0$vNumportFinal:=tNumPorts{$vNumport}+100\n\xa0End if\n\xa0SET CHANNEL($vNumportFinal;params)\xa0//params contient les param\xe8tres de communication\n\xa0...\xa0//Effectuer ici les op\xe9rations souhait\xe9es\n\xa0SET CHANNEL(11)\xa0//Fermeture du port\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/set-channel",children:"SET CHANNEL"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(296540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);