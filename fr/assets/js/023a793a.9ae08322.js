"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17025],{256143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=n(474848),s=n(28453);const r={id:"vp-export-to-blob",title:"VP EXPORT TO BLOB"},d=void 0,i={id:"ViewPro/commands/vp-export-to-blob",title:"VP EXPORT TO BLOB",description:"VP EXPORT TO BLOB ( vpAreaName Object )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-export-to-blob.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-export-to-blob",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-export-to-blob",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-export-to-blob.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-export-to-blob",title:"VP EXPORT TO BLOB"},sidebar:"docs",previous:{title:"VP EXPORT DOCUMENT",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-export-document"},next:{title:"VP Export to object",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-export-to-object"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"VP EXPORT TO BLOB"})," ( ",(0,l.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,l.jsx)(t.em,{children:"paramObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Param\xe8tres"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{}),(0,l.jsx)(t.th,{children:"Description"}),(0,l.jsx)(t.th,{})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vpAreaName"}),(0,l.jsx)(t.td,{children:"Text"}),(0,l.jsx)(t.td,{children:"->"}),(0,l.jsx)(t.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,l.jsx)(t.td,{})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"paramObj"}),(0,l.jsx)(t.td,{children:"Object"}),(0,l.jsx)(t.td,{children:"->"}),(0,l.jsx)(t.td,{children:"Options d'export"}),(0,l.jsx)(t.td,{})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:["La commande ",(0,l.jsx)(t.code,{children:"VP EXPORT TO BLOB"})," exporte le document 4D View Pro ",(0,l.jsx)(t.em,{children:"vpAreaName"})," dans un 4D.Blob en fonction des options ",(0,l.jsx)(t.em,{children:"paramObj"}),". Le blob export\xe9 est disponible par le callback export. Exporting and importing 4D View Pro areas as blobs is fast and memory-efficient."]}),"\n",(0,l.jsxs)(t.p,{children:["Dans ",(0,l.jsx)(t.em,{children:"paramObj"}),", vous pouvez passer plusieurs propri\xe9t\xe9s :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(t.th,{children:"Type"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"formula"}),(0,l.jsx)(t.td,{children:"4D.Function"}),(0,l.jsxs)(t.td,{children:["(obligatoire) M\xe9thode de rappel \xe0 lancer lorsque l'exportation est termin\xe9e. See ",(0,l.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passing a callback method (formula)"}),"."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"includeAutoMergedCells"}),(0,l.jsx)(t.td,{children:"Boolean"}),(0,l.jsx)(t.td,{children:"Whether to include the automatically merged cells when saving, default=false."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"includeBindingSource"}),(0,l.jsx)(t.td,{children:"Boolean"}),(0,l.jsx)(t.td,{children:"Whether to include the binding source when saving, default=true."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"includeCalcModelCache"}),(0,l.jsx)(t.td,{children:"Boolean"}),(0,l.jsx)(t.td,{children:"Whether to include the extra data of calculation. Can impact the speed of opening the file, default=false."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"includeEmptyRegionCells"}),(0,l.jsx)(t.td,{children:"Boolean"}),(0,l.jsx)(t.td,{children:"Whether to include any empty cells(cells with no data or only style) outside the used data range, default=true"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"includeFormulas"}),(0,l.jsx)(t.td,{children:"Boolean"}),(0,l.jsx)(t.td,{children:"Whether to include the formula when saving, default=true."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"includeStyles"}),(0,l.jsx)(t.td,{children:"Boolean"}),(0,l.jsx)(t.td,{children:"Whether to include the style when saving, default=true."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"includeUnusedNames"}),(0,l.jsx)(t.td,{children:"Boolean"}),(0,l.jsx)(t.td,{children:"Whether to include the unused custom name when saving, default=true."})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"|saveAsView|Boolean|Whether to apply the format string to exporting value when saving, default=false.|"}),"\n",(0,l.jsx)(t.p,{children:"Les param\xe8tres suivants peuvent \xeatre utilis\xe9s dans la m\xe9thode de rappel :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Param\xe8tres"}),(0,l.jsx)(t.th,{style:{textAlign:"left"}}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"param1"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Nom de l'objet 4D View Pro"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"param2"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4D.blob"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Le blob export\xe9"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"param3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Une r\xe9f\xe9rence au param\xe8tre ",(0,l.jsx)(t.em,{children:"paramObj"})," de la commande"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"param4"}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"object"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Objet retourn\xe9 par la m\xe9thode avec un message de statut"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:".success"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Vrai si l'export est r\xe9ussi, Faux sinon."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:".errorCode"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Code d'erreur."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:".errorMessage"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"text"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Message d'erreur."})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsxs)(t.p,{children:["La commande ",(0,l.jsx)(t.code,{children:"VP EXPORT TO BLOB"})," est asynchrone. Vous devez cr\xe9er une m\xe9thode de callback (nomm\xe9e ",(0,l.jsx)(t.em,{children:"VPBlobCallback"})," dans notre exemple) pour utiliser les r\xe9sultats d'exportation."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-4d",children:'//Exporter le document VP\nVP EXPORT TO BLOB("ViewProArea"; {formula: Formula(VPBlobCallback)})\n'})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-4d",children:"//M\xe9thode VPBlobCallback\n#DECLARE($area : Text; $data : 4D.Blob; $parameters : Object; $status : Object)\nvar $myEntity : cs.myTableEntity\n\nIf ($status.success)\n   // Enregistrer le document dans un tableau\n   $myEntity:=ds.myTable.new()\n   $myEntity.blob:=$data\n   $myEntity.save()\nEnd if\n\n"})}),"\n",(0,l.jsx)(t.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-import-from-blob",children:"VP IMPORT FROM BLOB"})})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var l=n(296540);const s={},r=l.createContext(s);function d(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);