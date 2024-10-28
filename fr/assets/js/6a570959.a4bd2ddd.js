"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19147],{781987:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(474848),a=n(28453);const i={id:"load-variables",title:"LOAD VARIABLES",slug:"/commands/load-variables",displayed_sidebar:"docs"},l=void 0,d={id:"commands-legacy/load-variables",title:"LOAD VARIABLES",description:"LOAD VARIABLES ( nomFichier ; variable {; variable2 ; ... ; variableN} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-variables.md",sourceDirName:"commands-legacy",slug:"/commands/load-variables",permalink:"/docs/fr/commands/load-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-variables.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"load-variables",title:"LOAD VARIABLES",slug:"/commands/load-variables",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"CLEAR VARIABLE",permalink:"/docs/fr/commands/clear-variable"},next:{title:"SAVE VARIABLES",permalink:"/docs/fr/commands/save-variables"}},t={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LOAD VARIABLES"})," ( ",(0,r.jsx)(s.em,{children:"nomFichier"})," ; ",(0,r.jsx)(s.em,{children:"variable"})," {; ",(0,r.jsx)(s.em,{children:"variable2"})," ; ... ; ",(0,r.jsx)(s.em,{children:"variableN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"nomFichier"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Document contenant la ou les variable(s) \xe0 lire"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"variable"}),(0,r.jsx)(s.td,{children:"Variable"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Nom de(s) variable(s) devant recevoir les valeurs"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"LOAD VARIABLES"})," charge une ou plusieurs variable(s) depuis le document d\xe9sign\xe9 par ",(0,r.jsx)(s.em,{children:"document"}),". Ce document doit avoir \xe9t\xe9 cr\xe9\xe9 \xe0 l'aide de la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/save-variables",children:"SAVE VARIABLES"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Les variables ",(0,r.jsx)(s.em,{children:"variable, variable2...variableN"})," sont soit cr\xe9\xe9es, soit r\xe9\xe9crites si elles existent d\xe9j\xe0."]}),"\n",(0,r.jsxs)(s.p,{children:['Si vous passez une cha\xeene vide ("") dans ',(0,r.jsx)(s.em,{children:"document"}),", une bo\xeete de dialogue standard d'ouverture de fichiers appara\xeet, permettant \xe0 l'utilisateur de s\xe9lectionner le document \xe0 ouvrir. Dans ce cas, la variable syst\xe8me Document contiendra le nom du document choisi."]}),"\n",(0,r.jsx)(s.p,{children:"Dans le cadre de bases compil\xe9es, les variables utilis\xe9es doivent \xeatre du m\xeame type que celles charg\xe9es du disque."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"ATTENTION :"})," Cette commande ne traite pas les variables de type Tableau. Pour cela, vous devez utiliser les commandes du th\xe8me BLOB."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:"L'exemple suivant charge trois variables d'un document nomm\xe9 PrefsUti :"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0LOAD VARIABLES("PrefsUti";VSNom;VLCode;VGIconPict)\n'})}),"\n",(0,r.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(s.p,{children:"La variable syst\xe8me OK prend la valeur 1 si les variables ont \xe9t\xe9 correctement charg\xe9es, sinon elle prend la valeur 0."}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/variable-to-blob",children:"VARIABLE TO BLOB"})]})]})}function m(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var r=n(296540);const a={},i=r.createContext(a);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);