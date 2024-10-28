"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6425],{299051:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=s(474848),r=s(28453);const a={id:"get-picture-from-pasteboard",title:"GET PICTURE FROM PASTEBOARD",slug:"/commands/get-picture-from-pasteboard",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/get-picture-from-pasteboard",title:"GET PICTURE FROM PASTEBOARD",description:"GET PICTURE FROM PASTEBOARD ( image )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-picture-from-pasteboard.md",sourceDirName:"commands-legacy",slug:"/commands/get-picture-from-pasteboard",permalink:"/docs/fr/commands/get-picture-from-pasteboard",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-from-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-picture-from-pasteboard",title:"GET PICTURE FROM PASTEBOARD",slug:"/commands/get-picture-from-pasteboard",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET PASTEBOARD DATA TYPE",permalink:"/docs/fr/commands/get-pasteboard-data-type"},next:{title:"Get text from pasteboard",permalink:"/docs/fr/commands/get-text-from-pasteboard"}},i={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"GET PICTURE FROM PASTEBOARD"})," ( ",(0,n.jsx)(t.em,{children:"image"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Param\xe8tre"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"image"}),(0,n.jsx)(t.td,{children:"Picture"}),(0,n.jsx)(t.td,{children:"\u2190"}),(0,n.jsx)(t.td,{children:"Image extraite du conteneur de donn\xe9es"})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"GET PICTURE FROM PASTEBOARD"})," retourne l'image pr\xe9sente dans le conteneur de donn\xe9es dans le champ ou la variable ",(0,n.jsx)(t.em,{children:"image"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note :"})," Dans le cadre d'une op\xe9ration de copier/coller, le conteneur de donn\xe9es correspond au Presse-papiers."]}),"\n",(0,n.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,n.jsx)(t.p,{children:"Ci-dessous, la m\xe9thode objet d'un bouton affecte l'image au format jpeg ou gif pr\xe9sente dans le conteneur de donn\xe9es, s'il y en a une, au champ [Employ\xe9s]Photo :"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0If((Pasteboard data size("com.4d.private.picture.jfif")>0)|(Pasteboard data size("com.4d.private.picture.gif")>0))\n\xa0\xa0\xa0\xa0GET PICTURE FROM PASTEBOARD([Employ\xe9s]Photo)\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Le Presse-papiers ne contient pas d\'image.")\n\xa0End if\n'})}),"\n",(0,n.jsx)(t.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,n.jsx)(t.p,{children:"Si l'image est correctement extraite, OK prend la valeur 1. Sinon, OK prend la valeur 0."}),"\n",(0,n.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/fr/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/fr/commands/get-text-from-pasteboard",children:"Get text from pasteboard"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/fr/commands/pasteboard-data-size",children:"Pasteboard data size"})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>o});var n=s(296540);const r={},a=n.createContext(r);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);