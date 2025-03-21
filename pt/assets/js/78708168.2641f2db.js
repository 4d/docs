"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35709"],{650785:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"ViewPro/commands/vp-row","title":"VP Row","description":"VP Row ( vpAreaName Integer { ; rowCount Integer } } ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-row.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-row","permalink":"/docs/pt/ViewPro/commands/vp-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-row.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-row","title":"VP Row"},"sidebar":"docs","previous":{"title":"VP RESUME COMPUTING","permalink":"/docs/pt/ViewPro/commands/vp-resume-computing"},"next":{"title":"VP ROW AUTOFIT","permalink":"/docs/pt/ViewPro/commands/vp-row-autofit"}}'),t=r("785893"),s=r("250065");let i={id:"vp-row",title:"VP Row"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Row"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text; ",(0,t.jsx)(n.em,{children:"row"})," : Integer { ; ",(0,t.jsx)(n.em,{children:"rowCount"})," : Integer { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"row"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\xcdndice de linha"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rowCount"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"N\xfamero de linhas"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultados"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Objeto intervalo de linha(s)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.code,{children:"VP Row"})," retorna um novo objeto de intervalo referenciando uma linha ou linhas."]}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"row"})," parameter defines the first row of the row range. Passar o \xedndice da linha (a contagem come\xe7a em 0) neste par\xe2metro. If the range contains multiple rows, you should also use the optional ",(0,t.jsx)(n.em,{children:"rowCount"})," parameter."]}),"\n",(0,t.jsxs)(n.p,{children:["The optional ",(0,t.jsx)(n.em,{children:"rowCount"})," parameter allows you to define the total number of rows of the range. *rowCount tem de ser superior a 0. Se for omisso, o valor ser\xe1 definido como 1 por padr\xe3o."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"sheet"}),", pode designar uma folha espec\xedfica onde o intervalo ser\xe1 definido (a contagem come\xe7a em 0). Se n\xe3o for especificada, a folha de c\xe1lculo atual \xe9 utilizada por padr\xe3o. Voc\xea pode selecionar explicitamente a planilha atual com a seguinte constante:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Se quiser definir um objeto de intervalo para a linha exibida abaixo (na planilha atual):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(994557).Z+"",width:"517",height:"317"})}),"\n",(0,t.jsx)(n.p,{children:"Voc\xea pode escrever:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'$row:=VP Row("ViewProArea";9) // linha 10\n'})}),"\n",(0,t.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-all",children:"VP All"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-cell",children:"VP Cell"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-cells",children:"VP Cells"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-column",children:"VP Column"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},994557:function(e,n,r){r.d(n,{Z:function(){return o}});let o=r.p+"assets/images/cmd_vpRow-17d159502d78c7ebad52f5f796faa8db.PNG"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var o=r(667294);let t={},s=o.createContext(t);function i(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);