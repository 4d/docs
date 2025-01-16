"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23466"],{593638:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-show-print-lines","title":"VP SET SHOW PRINT LINES","description":"VP SET SHOW PRINT LINES ( vpAreaName Boolean}{; sheet : Integer} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-show-print-lines.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-show-print-lines","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-show-print-lines","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-show-print-lines.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-show-print-lines","title":"VP SET SHOW PRINT LINES"},"sidebar":"docs","previous":{"title":"VP SET SHEET OPTIONS","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-sheet-options"},"next":{"title":"VP SET TABLE COLUMN ATTRIBUTES","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-table-column-attributes"}}'),i=s("785893"),r=s("250065");let o={id:"vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP SET SHOW PRINT LINES"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text {; visible : Boolean}{; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"visible"}),(0,i.jsx)(n.td,{children:"Par\xe2metros"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Linhas de impress\xe3o apresentadas se True (padr\xe3o), ocultas se False"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP SET SHOW PRINT LINES"})," command  sets whether to display print preview lines in a spreadsheet.."]}),"\n",(0,i.jsxs)(n.p,{children:["Em ",(0,i.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro."]}),"\n",(0,i.jsxs)(n.p,{children:["Em ",(0,i.jsx)(n.em,{children:"visible"}),", passe ",(0,i.jsx)(n.code,{children:"True"})," para exibir as linhas de impress\xe3o e ",(0,i.jsx)(n.code,{children:"False"})," para ocult\xe1-las. ",(0,i.jsx)(n.code,{children:"True"})," \xe9 passado por padr\xe3o."]}),"\n",(0,i.jsxs)(n.p,{children:["Em ",(0,i.jsx)(n.em,{children:"sheet"}),", passe o \xedndice da folha de destino. Se nenhum \xedndice for especificado, o comando se aplica \xe0 folha atual."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A indexa\xe7\xe3o come\xe7a em 0."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The position of a spreadsheet's print lines varies according to that spreadsheet's page breaks."}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"O c\xf3digo a seguir exibe linhas de impress\xe3o na segunda folha de um documento:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'VP SET SHOW PRINT LINES("ViewProArea";True;1)\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"set-show-print-lines",src:s(746961).Z+"",width:"1340",height:"844"})}),"\n",(0,i.jsx)(n.p,{children:"Com uma quebra de p\xe1gina:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"set-show-print-lines-with-page-break",src:s(593210).Z+"",width:"1340",height:"844"})}),"\n",(0,i.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-show-print-lines",children:"4D Get show print lines"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},593210:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-set-show-print-lines-page-break-97bd2bcc1240ad96dc5e8ea5e3d455c1.png"},746961:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-set-show-print-lines-3554e1084d22cfbcd438e14c685db7d9.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var t=s(667294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);