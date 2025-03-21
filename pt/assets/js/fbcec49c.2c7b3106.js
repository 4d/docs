"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40537"],{100325:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-row-count","title":"VP Get row count","description":"VP Get row count ( vpAreaName Integer } ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-row-count.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-row-count","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-get-row-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-row-count.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-row-count","title":"VP Get row count"},"sidebar":"docs","previous":{"title":"VP Get row attributes","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-get-row-attributes"},"next":{"title":"VP Get selection","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-get-selection"}}'),o=t("785893"),s=t("250065");let d={id:"vp-get-row-count",title:"VP Get row count"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Get row count"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,o.jsx)(n.em,{children:"sheet"})," : Integer } ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro no formul\xe1rio"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheet"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultados"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"N\xfamero total de linhas"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP Get row count"})," command returns the total number of rows from the designated ",(0,o.jsx)(n.em,{children:"sheet"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Em ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da propriedade da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,o.jsxs)(n.p,{children:["You can define where to get the row count in the optional ",(0,o.jsx)(n.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0). Se omitido ou se voc\xea passar ",(0,o.jsx)(n.code,{children:"vk current sheet"}),", a planilha atual ser\xe1 usada."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"O c\xf3digo seguinte retorna o n\xfamero de linhas na \xe1rea 4D View Pro:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $rowCount : Integer\n$rowCount:=VP Get row count("ViewProarea")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-column-count",children:"VP Get column count"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-column-count",children:"VP SET COLUMN COUNT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let o={},s=r.createContext(o);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);