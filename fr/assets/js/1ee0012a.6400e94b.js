/*! For license information please see 1ee0012a.6400e94b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35352],{154879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(474848),l=t(28453);const s={id:"vp-import-from-blob",title:"VP IMPORT FROM BLOB"},d=void 0,i={id:"ViewPro/commands/vp-import-from-blob",title:"VP IMPORT FROM BLOB",description:"VP IMPORT FROM BLOB ( vpAreaName 4D.blob { ; paramObj : Object} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-import-from-blob.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-import-from-blob",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-import-from-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-from-blob.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-import-from-blob",title:"VP IMPORT FROM BLOB"},sidebar:"docs",previous:{title:"VP IMPORT DOCUMENT",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-import-document"},next:{title:"VP IMPORT FROM OBJECT",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-import-from-object"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP IMPORT FROM BLOB"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"vpBlob"})," : 4D.blob { ; ",(0,r.jsx)(n.em,{children:"paramObj"})," : Object} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpBlob"}),(0,r.jsx)(n.td,{children:"4D.Blob"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Blob contenant un document 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paramObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Options d'import"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.code,{children:"VP IMPORT FROM BLOB"})," importe ",(0,r.jsx)(n.em,{children:"vpBlob"})," dans la zone 4D View Pro ",(0,r.jsx)(n.em,{children:"vpAreaName"})," et remplace son contenu. ",(0,r.jsx)(n.em,{children:"vpBlob"})," doit contenir un document 4D View Pro pr\xe9c\xe9demment enregistr\xe9 en tant que Blob soit en utilisant la commande ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-export-to-blob",children:"VP EXPORT TO BLOB"})," soit via l'interface 4D View Pro."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"paramObj"}),", you can pass several properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formula"}),(0,r.jsx)(n.td,{children:"4D.Function"}),(0,r.jsxs)(n.td,{children:["Callback method to be launched when the import has completed. See ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"calcOnDemand"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Whether to calculate formulas only when they are demanded, default=false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dynamicReferences"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Whether to calculate functions with dynamic reference, default=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fullRecalc"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Indique si le calcul doit \xeatre effectu\xe9 apr\xe8s le chargement des donn\xe9es json, la valeur par d\xe9faut est faux."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeFormulas"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the formula when loading, default=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeStyles"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the style when loading, default=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"includeUnusedStyles"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"Whether to include the unused name style when converting excel xml to the json, default=true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"openMode"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsxs)(n.td,{children:["can be: ",(0,r.jsx)(n.br,{}),"0: normal open mode, without lazy and incremental. When opening document, UI and UI event could be refreshed and responsive at specific time points. ",(0,r.jsx)(n.br,{}),"1: lazy open mode. When opening document, only the active sheet will be loaded directly. Other sheets will be loaded only when they are be used. Other sheets will be loaded only when they are be used. ",(0,r.jsx)(n.br,{}),"2: incremental open mode."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Les param\xe8tres suivants peuvent \xeatre utilis\xe9s dans la m\xe9thode de rappel :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Param\xe8tres"}),(0,r.jsx)(n.th,{style:{textAlign:"left"}}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param1"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Nom de l'objet 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param2"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"4D.Blob"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Le blob import\xe9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param3"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["A reference to the command's ",(0,r.jsx)(n.em,{children:"paramObj"})," parameter"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"param4"}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"object"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Objet retourn\xe9 par la m\xe9thode avec un message de statut"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".success"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"boolean"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Vrai si l'import est r\xe9ussi, Faux sinon."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".errorCode"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"integer"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Code d'erreur."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:".errorMessage"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Message d'erreur."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:'Vous souhaitez importer dans la "ViewProArea" un document 4D View Pro pr\xe9c\xe9demment enregistr\xe9 en tant que Blob dans la premi\xe8re entit\xe9 de la dataclass Table.'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $myBlobDocument : 4D.Blob :=ds.Table.all().first().blob\nVP IMPORT FROM BLOB("ViewProArea"; $myBlobDocument)\n\n'})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-export-to-blob",children:"VP EXPORT TO BLOB"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,r)&&!o.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:c,ref:a,props:s,_owner:i.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const l={},s=r.createContext(l);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);