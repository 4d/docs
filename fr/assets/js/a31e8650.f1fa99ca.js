"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54314"],{111784:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>l,metadata:()=>r,assets:()=>t,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/load-variables","title":"LOAD VARIABLES","description":"LOAD VARIABLES ( nomFichier ; variable {; variable2 ; ... ; variableN} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/load-variables.md","sourceDirName":"commands-legacy","slug":"/commands/load-variables","permalink":"/docs/fr/20-R8/commands/load-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-variables.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"load-variables","title":"LOAD VARIABLES","slug":"/commands/load-variables","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR VARIABLE","permalink":"/docs/fr/20-R8/commands/clear-variable"},"next":{"title":"SAVE VARIABLES","permalink":"/docs/fr/20-R8/commands/save-variables"}}'),i=n("785893"),a=n("250065");let l={id:"load-variables",title:"LOAD VARIABLES",slug:"/commands/load-variables",displayed_sidebar:"docs"},d=void 0,t={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"LOAD VARIABLES"})," ( ",(0,i.jsx)(s.em,{children:"nomFichier"})," ; ",(0,i.jsx)(s.em,{children:"variable"})," {; ",(0,i.jsx)(s.em,{children:"variable2"})," ; ... ; ",(0,i.jsx)(s.em,{children:"variableN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"nomFichier"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Document contenant la ou les variable(s) \xe0 lire"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"variable"}),(0,i.jsx)(s.td,{children:"Variable"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Nom de(s) variable(s) devant recevoir les valeurs"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"LOAD VARIABLES"})," charge une ou plusieurs variable(s) depuis le document d\xe9sign\xe9 par ",(0,i.jsx)(s.em,{children:"document"}),". Ce document doit avoir \xe9t\xe9 cr\xe9\xe9 \xe0 l'aide de la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/save-variables",children:"SAVE VARIABLES"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Les variables ",(0,i.jsx)(s.em,{children:"variable, variable2...variableN"})," sont soit cr\xe9\xe9es, soit r\xe9\xe9crites si elles existent d\xe9j\xe0."]}),"\n",(0,i.jsxs)(s.p,{children:['Si vous passez une cha\xeene vide ("") dans ',(0,i.jsx)(s.em,{children:"document"}),", une bo\xeete de dialogue standard d'ouverture de fichiers appara\xeet, permettant \xe0 l'utilisateur de s\xe9lectionner le document \xe0 ouvrir. Dans ce cas, la variable syst\xe8me Document contiendra le nom du document choisi."]}),"\n",(0,i.jsx)(s.p,{children:"Dans le cadre de bases compil\xe9es, les variables utilis\xe9es doivent \xeatre du m\xeame type que celles charg\xe9es du disque."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"ATTENTION :"})," Cette commande ne traite pas les variables de type Tableau. Pour cela, vous devez utiliser les commandes du th\xe8me BLOB."]}),"\n",(0,i.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:"L'exemple suivant charge trois variables d'un document nomm\xe9 PrefsUti :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0LOAD VARIABLES("PrefsUti";VSNom;VLCode;VGIconPict)\n'})}),"\n",(0,i.jsx)(s.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsx)(s.p,{children:"La variable syst\xe8me OK prend la valeur 1 si les variables ont \xe9t\xe9 correctement charg\xe9es, sinon elle prend la valeur 0."}),"\n",(0,i.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/blob-to-variable",children:"BLOB TO VARIABLE"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/fr/20-R8/commands/variable-to-blob",children:"VARIABLE TO BLOB"})]}),"\n",(0,i.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(s.td,{children:"74"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2713"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Modifie les variables"}),(0,i.jsx)(s.td,{children:"OK, Document"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return l}});var r=n(667294);let i={},a=r.createContext(i);function l(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);