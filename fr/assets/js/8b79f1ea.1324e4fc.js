"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5713"],{587666:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>c,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/get-text-resource","title":"Get text resource","description":"Get text resource ( resNum {; resFichier} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-text-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-text-resource","permalink":"/docs/fr/20-R7/commands/get-text-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-text-resource.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-text-resource","title":"Get text resource","slug":"/commands/get-text-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get string resource","permalink":"/docs/fr/20-R7/commands/get-string-resource"},"next":{"title":"Open resource file","permalink":"/docs/fr/20-R7/commands/open-resource-file"}}'),t=r("785893"),i=r("250065");let c={id:"get-text-resource",title:"Get text resource",slug:"/commands/get-text-resource",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Get text resource"})," ( ",(0,t.jsx)(s.em,{children:"resNum"})," {; ",(0,t.jsx)(s.em,{children:"resFichier"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resNum"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de ressource"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFichier"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de fichier de ressources ou tous les fichiers de ressources ouverts si ce param\xe8tre est omis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Contenu de la ressource TEXT"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"Get text resource"}),' retourne le texte stock\xe9 dans la ressource texte ("TEXT") dont vous avez pass\xe9 le num\xe9ro d\'ID dans ',(0,t.jsx)(s.em,{children:"resNum"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Si la ressource n'est pas trouv\xe9e, un texte vide est retourn\xe9 et la variable syst\xe8me OK prend la valeur 0 (z\xe9ro)."}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez un num\xe9ro de r\xe9f\xe9rence de fichier de ressources valide dans ",(0,t.jsx)(s.em,{children:"resFichier"}),", la ressource est recherch\xe9e dans ce fichier uniquement. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"resFichier"}),", c'est la premi\xe8re occurrence de la ressource rencontr\xe9e dans la cha\xeene des fichiers de ressources qui sera retourn\xe9e."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Une ressource texte peut contenir jusqu'\xe0 32 000 caract\xe8res."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"L'exemple suivant affiche le contenu de la ressource texte d'ID=20800 qui doit se trouver dans au moins un des fichiers de ressources ouverts :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0ALERT(Get text resource(20800))\n"})}),"\n",(0,t.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"OK prend la valeur 1 si la ressource est trouv\xe9e, sinon elle prend la valeur 0 (z\xe9ro)."}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/get-string-resource",children:"Get string resource"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/20-R7/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]}),"\n",(0,t.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"504"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return c}});var n=r(667294);let t={},i=n.createContext(t);function c(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);