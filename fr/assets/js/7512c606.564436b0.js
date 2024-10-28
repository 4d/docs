"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84487],{894168:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=s(474848),t=s(28453);const i={id:"get-resource-properties",title:"Get resource properties",slug:"/commands/get-resource-properties",displayed_sidebar:"docs"},c=void 0,d={id:"commands-legacy/get-resource-properties",title:"Get resource properties",description:"Get resource properties ( resType ; resNum {; resFichier} ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-resource-properties.md",sourceDirName:"commands-legacy",slug:"/commands/get-resource-properties",permalink:"/docs/fr/commands/get-resource-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-resource-properties",title:"Get resource properties",slug:"/commands/get-resource-properties",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get resource name",permalink:"/docs/fr/commands/get-resource-name"},next:{title:"Get string resource",permalink:"/docs/fr/commands/get-string-resource"}},o={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4}];function a(e){const r={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Get resource properties"})," ( ",(0,n.jsx)(r.em,{children:"resType"})," ; ",(0,n.jsx)(r.em,{children:"resNum"})," {; ",(0,n.jsx)(r.em,{children:"resFichier"}),"} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Param\xe8tre"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"resType"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Type de ressource (4 caract\xe8res)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"resNum"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence de ressource (ID)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"resFichier"}),(0,n.jsx)(r.td,{children:"Time"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence du fichier de ressource ou Tous les fichiers de ressources ouverts si omis"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"R\xe9sultat"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2190"}),(0,n.jsx)(r.td,{children:"Attributs de la ressource"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,n.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Get resource properties"})," retourne les attributs de la ressource dont le type est pass\xe9 dans le param\xe8tre ",(0,n.jsx)(r.em,{children:"resType"})," et le num\xe9ro de r\xe9f\xe9rence dans ",(0,n.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Si vous ne passez pas le param\xe8tre ",(0,n.jsx)(r.em,{children:"resFichier"}),", la ressource est recherch\xe9e dans les fichiers de ressources ouverts. Si vous passez un num\xe9ro de r\xe9f\xe9rence de fichier de ressource dans le param\xe8tre ",(0,n.jsx)(r.em,{children:"resFichier"}),", la ressource n'est recherch\xe9e que dans ce fichier."]}),"\n",(0,n.jsxs)(r.p,{children:["Si la ressource n'existe pas, ",(0,n.jsx)(r.strong,{children:"Get resource properties"})," retourne ",(0,n.jsx)(r.em,{children:"0"})," (z\xe9ro) et la variable OK prend \xe9galement la valeur ",(0,n.jsx)(r.em,{children:"0"})," (z\xe9ro)."]}),"\n",(0,n.jsxs)(r.p,{children:["La valeur num\xe9rique retourn\xe9e par ",(0,n.jsx)(r.strong,{children:"Get resource properties"})," doit \xeatre consid\xe9r\xe9e comme une valeur binaire dont chaque bit a une signification particuli\xe8re. Pour une description des attributs des ressources et leurs effets, r\xe9f\xe9rez-vous \xe0 la commande ."]}),"\n",(0,n.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsxs)(r.p,{children:["R\xe9f\xe9rez-vous \xe0 l'exemple de la commande ",(0,n.jsx)(r.a,{href:"/docs/fr/commands/get-resource-name",children:"Get resource name"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,n.jsx)(r.p,{children:"La variable OK prend la valeur 0 si la ressource n'existe pas, sinon elle prend la valeur 1."})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>d});var n=s(296540);const t={},i=n.createContext(t);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);