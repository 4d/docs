"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10726],{18538:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(474848),t=r(28453);const i={id:"vp-name",title:"VP Name"},d=void 0,a={id:"ViewPro/commands/vp-name",title:"VP Name",description:"VP Name ( vpAreaName Text { ; sheet Object",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-name.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-name",permalink:"/docs/fr/ViewPro/commands/vp-name",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-name",title:"VP Name"},sidebar:"docs",previous:{title:"N",permalink:"/docs/fr/commands-legacy/N"},next:{title:"VP NEW DOCUMENT",permalink:"/docs/fr/ViewPro/commands/vp-new-document"}},o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Name"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"rangeName"})," : Text { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }  ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom de plage existante"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Emplacement de la plage (si omis, feuille courante)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Plage nomm\xe9e"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Name"})," command returns a new range object referencing a named range."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro. Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"rangeName"})," parameter specifies an existing named cell range."]}),"\n",(0,s.jsxs)(n.p,{children:["In the optional ",(0,s.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where ",(0,s.jsx)(n.em,{children:"rangeName"})," is defined. Si le param\xe8tre est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante ou l'int\xe9gralit\xe9 du classeur (workbook) \xe0 l'aide des constantes suivantes :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:'Vous souhaitez assigner une valeur \xe0 une plage nomm\xe9e "Total".'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// name the B5 cell as Total\nVP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")\n$name:=VP Name("ViewProArea";"Total")\nVP SET NUM VALUE($name;285;"$#,###.00")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-add-range-name",children:"VP ADD RANGE NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-all",children:"VP ALL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-column",children:"VP Column"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-names",children:"VP Get names"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-remove-name",children:"VP REMOVE NAME"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-row",children:"VP Row"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var s=r(296540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);