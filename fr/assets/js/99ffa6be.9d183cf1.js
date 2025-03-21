"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51790"],{758486:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>c,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/get-string-resource","title":"Get string resource","description":"Get string resource ( resNum {; resFichier} ) : Text","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-string-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-string-resource","permalink":"/docs/fr/commands/get-string-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-string-resource.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-string-resource","title":"Get string resource","slug":"/commands/get-string-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get resource properties","permalink":"/docs/fr/commands/get-resource-properties"},"next":{"title":"Get text resource","permalink":"/docs/fr/commands/get-text-resource"}}'),t=r("785893"),i=r("250065");let c={id:"get-string-resource",title:"Get string resource",slug:"/commands/get-string-resource",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Get string resource"})," ( ",(0,t.jsx)(s.em,{children:"resNum"})," {; ",(0,t.jsx)(s.em,{children:"resFichier"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resNum"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de ressource"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"resFichier"}),(0,t.jsx)(s.td,{children:"Time"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Num\xe9ro de r\xe9f\xe9rence de fichier de ressources ou tous les fichiers de ressources ouverts si ce param\xe8tre est omis"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"R\xe9sultat"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Contenu de la ressource STR"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"Get string resource"}),' retourne la cha\xeene stock\xe9e dans la ressource cha\xeene ("STR ") dont vous avez pass\xe9 le num\xe9ro d\'ID dans ',(0,t.jsx)(s.em,{children:"resNum"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Si la ressource n'est pas trouv\xe9e, une cha\xeene vide est retourn\xe9e et la variable syst\xe8me OK prend la valeur 0 (z\xe9ro)."}),"\n",(0,t.jsxs)(s.p,{children:["Si vous passez un num\xe9ro de r\xe9f\xe9rence de fichier de ressources valide dans ",(0,t.jsx)(s.em,{children:"resFichier"}),", la ressource est recherch\xe9e dans ce fichier uniquement. Si vous ne passez pas le param\xe8tre ",(0,t.jsx)(s.em,{children:"resFichier"}),", c'est la premi\xe8re occurrence de la ressource rencontr\xe9e dans la cha\xeene des fichiers de ressources qui sera retourn\xe9e."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note :"})," Une ressource cha\xeene peut contenir jusqu'\xe0 255 caract\xe8res."]}),"\n",(0,t.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"L'exemple suivant affiche le contenu de la ressource cha\xeene d'ID=20911 qui doit se trouver dans au moins un des fichiers de ressources ouverts :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0ALERT(Get string resource(20911))\n"})}),"\n",(0,t.jsx)(s.h2,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(s.p,{children:"La variable syst\xe8me OK prend la valeur 1 si la ressource est trouv\xe9e, sinon elle prend la valeur 0 (z\xe9ro)."}),"\n",(0,t.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-indexed-string",children:"Get indexed string"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/get-text-resource",children:"Get text resource"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/string-list-to-array",children:"STRING LIST TO ARRAY"})]}),"\n",(0,t.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(s.td,{children:"506"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifie les variables"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return c}});var n=r(667294);let t={},i=n.createContext(t);function c(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);