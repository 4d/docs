"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2827],{733418:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=o(474848),s=o(28453);const t={id:"vp-column",title:"VP Column"},d=void 0,c={id:"ViewPro/commands/vp-column",title:"VP Column",description:"VP Column ( vpAreaName Integer ; columnCount Integer } ) : Object",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-column.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-column",permalink:"/docs/pt/20-R6/ViewPro/commands/vp-column",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-column.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-column",title:"VP Column"},sidebar:"docs",previous:{title:"VP Cells",permalink:"/docs/pt/20-R6/ViewPro/commands/vp-cells"},next:{title:"VP COLUMN AUTOFIT",permalink:"/docs/pt/20-R6/ViewPro/commands/vp-column-autofit"}},i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Column"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"column"}),": Integer ; ",(0,r.jsx)(n.em,{children:"columnCount"})," : Integer { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"column"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice de coluna"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"N\xfamero de colunas"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto intervalo de c\xe9lulas"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"VP Column"})," retorna um novo objeto de intervalo que faz refer\xeancia a uma coluna ou colunas espec\xedficas."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"column"})," define a primeira coluna do intervalo de colunas. Passar o \xedndice da coluna (a contagem come\xe7a em 0) neste par\xe2metro. Se o intervalo contiver v\xe1rias colunas, voc\xea tamb\xe9m dever\xe1 usar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"columnCount"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"columnCount"})," permite que voc\xea defina o n\xfamero total de colunas do intervalo. ",(0,r.jsx)(n.em,{children:"columnCount"})," deve ser maior que 0. Se for omitido, o valor ser\xe1 definido como 1 por padr\xe3o e um intervalo de tipo de coluna ser\xe1 criado."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"sheet"}),", pode designar uma folha espec\xedfica onde o intervalo ser\xe1 definido (a contagem come\xe7a em 0). Se for omitido ou se passar vk current sheet, \xe9 utilizada a folha de c\xe1lculo atual."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser definir um objeto de intervalo para a coluna mostrada abaixo (na planilha atual):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:o(668554).A+"",width:"379",height:"195"})}),"\n",(0,r.jsx)(n.p,{children:"O c\xf3digo seria:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' $column:=VP Column("ViewProArea";3) // coluna D\n'})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-all",children:"VP All"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-name",children:"VP Name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-row",children:"VP Row"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-column-attributes",children:"VP SET COLUMN ATTRIBUTES"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},668554:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/cmd_vpColumn-ae7b6c9ee31383d694ba627d58f6842f.PNG"},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>c});var r=o(296540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);