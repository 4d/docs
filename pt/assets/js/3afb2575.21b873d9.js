"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83362"],{97042:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"ViewPro/commands/vp-set-column-count","title":"VP SET COLUMN COUNT","description":"VP SET COLUMN COUNT ( vpAreaName Integer { , sheet : Integer } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-column-count.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-column-count","permalink":"/docs/pt/ViewPro/commands/vp-set-column-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-column-count.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-column-count","title":"VP SET COLUMN COUNT"},"sidebar":"docs","previous":{"title":"VP SET COLUMN ATTRIBUTES","permalink":"/docs/pt/ViewPro/commands/vp-set-column-attributes"},"next":{"title":"VP SET CURRENT SHEET","permalink":"/docs/pt/ViewPro/commands/vp-set-current-sheet"}}'),s=t("785893"),r=t("250065");let c={id:"vp-set-column-count",title:"VP SET COLUMN COUNT"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET COLUMN COUNT"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text , ",(0,s.jsx)(n.em,{children:"columnCount"})," : Integer { , ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columnCount"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"N\xfamero de colunas"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando  define o n\xfamero total de colunas no ",(0,s.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,s.jsxs)(n.p,{children:["Passe o n\xfamero total de colunas no par\xe2metro ",(0,s.jsx)(n.em,{children:"columnCount"}),". ",(0,s.jsx)(n.em,{children:"columnCount"})," deve ser maior que 0."]}),"\n",(0,s.jsxs)(n.p,{children:["In the optional ",(0,s.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the ",(0,s.jsx)(n.em,{children:"columnCount"})," will be applied (counting begins at 0). Se omitido, a planilha atual ser\xe1 utilizada por padr\xe3o. Voc\xea pode selecionar explicitamente a planilha atual com a seguinte constante:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"O c\xf3digo seguinte define cinco colunas na \xe1rea 4D View Pro:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP SET COLUMN COUNT("ViewProArea";5)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(786984).Z+"",width:"904",height:"378"})}),"\n",(0,s.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-column-count",children:"VP Get column count"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-row-count",children:"VP Get row count"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},786984:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/cmd_vpSetColumnCount-db26ffc9ba38377f91bcc05abde136fc.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var o=t(667294);let s={},r=o.createContext(s);function c(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);