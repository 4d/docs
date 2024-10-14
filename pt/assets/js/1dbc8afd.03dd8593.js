"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59490],{255557:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(474848),i=n(28453);const r={id:"vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES"},o=void 0,d={id:"ViewPro/commands/vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES",description:"VP SET SHOW PRINT LINES ( vpAreaName Boolean}{; sheet : Integer} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-set-show-print-lines.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-show-print-lines",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-set-show-print-lines",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-show-print-lines.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES"},sidebar:"docs",previous:{title:"VP SET SHEET OPTIONS",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-set-sheet-options"},next:{title:"VP SET TABLE COLUMN ATTRIBUTES",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-set-table-column-attributes"}},a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"VP SET SHOW PRINT LINES"})," ( ",(0,t.jsx)(s.em,{children:"vpAreaName"})," : Text {; visible : Boolean}{; ",(0,t.jsx)(s.em,{children:"sheet"})," : Integer} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"vpAreaName"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"visible"}),(0,t.jsx)(s.td,{children:"Par\xe2metros"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"Linhas de impress\xe3o apresentadas se True (padr\xe3o), ocultas se False"}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sheet"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"->"}),(0,t.jsx)(s.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"VP SET SHOW PRINT LINES"})," command  sets whether to display print preview lines in a spreadsheet.."]}),"\n",(0,t.jsxs)(s.p,{children:["Em ",(0,t.jsx)(s.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro."]}),"\n",(0,t.jsxs)(s.p,{children:["Em ",(0,t.jsx)(s.em,{children:"visible"}),", passe ",(0,t.jsx)(s.code,{children:"True"})," para exibir as linhas de impress\xe3o e ",(0,t.jsx)(s.code,{children:"False"})," para ocult\xe1-las. ",(0,t.jsx)(s.code,{children:"True"})," \xe9 passado por padr\xe3o."]}),"\n",(0,t.jsxs)(s.p,{children:["Em ",(0,t.jsx)(s.em,{children:"sheet"}),", passe o \xedndice da folha de destino. Se nenhum \xedndice for especificado, o comando se aplica \xe0 folha atual."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"A indexa\xe7\xe3o come\xe7a em 0."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The position of a spreadsheet's print lines varies according to that spreadsheet's page breaks."}),"\n",(0,t.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(s.p,{children:"O c\xf3digo a seguir exibe linhas de impress\xe3o na segunda folha de um documento:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'VP SET SHOW PRINT LINES("ViewProArea";True;1)\n\n'})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"set-show-print-lines",src:n(191343).A+"",width:"1340",height:"844"})}),"\n",(0,t.jsx)(s.p,{children:"Com uma quebra de p\xe1gina:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"set-show-print-lines-with-page-break",src:n(603277).A+"",width:"1340",height:"844"})}),"\n",(0,t.jsx)(s.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-get-show-print-lines",children:"4D Get show print lines"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},603277:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/vp-set-show-print-lines-page-break-97bd2bcc1240ad96dc5e8ea5e3d455c1.png"},191343:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/vp-set-show-print-lines-3554e1084d22cfbcd438e14c685db7d9.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var t=n(296540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);