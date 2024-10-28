"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42812],{212868:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var l=s(474848),r=s(28453);const o={id:"vp-set-formulas",title:"VP SET FORMULAS"},t=void 0,i={id:"ViewPro/commands/vp-set-formulas",title:"VP SET FORMULAS",description:"VP SET FORMULAS ( rangeObj Collection )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-formulas.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-formulas",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-set-formulas",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-formulas.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-formulas",title:"VP SET FORMULAS"},sidebar:"docs",previous:{title:"VP SET FORMULA",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-set-formula"},next:{title:"VP SET FROZEN PANES",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-set-frozen-panes"}},c={},d=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP SET FORMULAS"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,l.jsx)(n.em,{children:"formulasCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tres"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Objet plage de cellules"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formulasCol"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Collection de formules"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"VP SET FORMULAS"})," command assigns a collection of formulas starting at the specified cell range."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell (created with ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-cell",children:"VP Cell"}),") whose formula you want to specify. Si ",(0,l.jsx)(n.em,{children:"rangeObj"})," comprend plusieurs plages, seule la premi\xe8re plage est utilis\xe9e."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"formulasCol"})," is a two-dimensional collection:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"La collection de premier niveau contient des sous-collections de formules. Chaque sous-collection d\xe9finit une ligne."}),"\n",(0,l.jsx)(n.li,{children:"Chaque sous-collection d\xe9finit les valeurs des cellules de la ligne. Les valeurs doivent \xeatre des \xe9l\xe9ments textuels contenant les formules \xe0 associer aux cellules."}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["If the formula is a string, use the period ",(0,l.jsx)(n.code,{children:"."})," as numerical separator and the comma ",(0,l.jsx)(n.code,{children:","})," as parameter separator.\nIf a 4D method is used, it must be allowed with the ",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-allowed-methods",children:(0,l.jsx)(n.code,{children:"VP SET ALLOWED METHODS"})})," command."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["You remove the formulas in ",(0,l.jsx)(n.em,{children:"rangeObj"}),' by replacing them with an empty string ("").']}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$formulas:=New collection\n$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row\n$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row\n\n \nVP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"myMethod"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"$0:=$1*3.33\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(217083).A+"",width:"977",height:"474"})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"Pour supprimer des formules :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$formulas:=New collection\n$formulas.push(New collection("";"")) // first collection\n$formulas.push(New collection("";"")) // second collection\n \nVP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-formulas",children:"VP Get Formulas"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-values",children:"VP GET VALUES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},217083:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/cmd_vpSetFormulas-d9a5e529fd8008034b0694f768bb2bbb.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var l=s(296540);const r={},o=l.createContext(r);function t(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);