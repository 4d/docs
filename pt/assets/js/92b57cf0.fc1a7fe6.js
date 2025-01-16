"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63440"],{710891:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>t,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"ViewPro/commands/vp-print","title":"VP PRINT","description":"VP PRINT ( vpAreaName Integer } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-print.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-print","permalink":"/docs/pt/ViewPro/commands/vp-print","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-print.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-print","title":"VP PRINT"},"sidebar":"docs","previous":{"title":"VP PASTE FROM OBJECT","permalink":"/docs/pt/ViewPro/commands/vp-paste-from-object"},"next":{"title":"R","permalink":"/docs/pt/commands-legacy/R"}}'),r=s("785893"),i=s("250065");let t={id:"vp-print",title:"VP PRINT"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP PRINT"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text  { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"VP PRINT"})," abre uma janela de di\xe1logo de impress\xe3o para imprimir ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Par\xe2metro O comando abrir\xe1 a janela de di\xe1logo de impress\xe3o do sistema onde a impressora pode ser especificada e as propriedades da p\xe1gina podem ser definidas."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["As propriedades definidas na janela de di\xe1logo de impress\xe3o s\xe3o para o papel de impressora, elas n\xe3o s\xe3o as propriedades de impress\xe3o para a \xe1rea 4D View Pro. As propriedades de impress\xe3o das \xe1reas 4D View Pro s\xe3o definidas com o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"}),". \xc9 altamente recomend\xe1vel que as propriedades tanto para impressora quanto para correspond\xeancia 4D View Pro, caso contr\xe1rio, o documento impresso pode n\xe3o corresponder \xe0s suas expectativas."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet to print (counting begins at 0). Se omitido, a folha atual ser\xe1 usada como padr\xe3o. Voc\xea pode selecionar explicitamente a planilha atual ou toda a planilha com as seguintes constantes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["As \xe1reas do 4D View Pro s\xf3 podem ser impressas com o comando ",(0,r.jsx)(n.code,{children:"VP PRINT"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Os comandos do tema de linguagem 4D ",(0,r.jsx)(n.strong,{children:"Impress\xe3o"})," n\xe3o s\xe3o compat\xedveis com o ",(0,r.jsx)(n.code,{children:"VP PRINT"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Esse comando \xe9 destinado a impress\xe3o individual pelo usu\xe1rio final. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the ",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"})," method."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"O seguinte c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' VP PRINT("myVPArea")\n'})}),"\n",(0,r.jsx)(n.p,{children:"... abre uma janela de di\xe1logo de impress\xe3o:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(511594).Z+"",width:"747",height:"660"})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-document",children:"VP EXPORT DOCUMENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},511594:function(e,n,s){s.d(n,{Z:function(){return o}});let o=s.p+"assets/images/cmd_vpPrint-2d4304e96d5c2169b69457627cd893fc.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return t}});var o=s(667294);let r={},i=o.createContext(r);function t(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);