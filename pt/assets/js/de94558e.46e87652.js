"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14458"],{536463:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>a});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-table-dirty-rows","title":"VP Get table dirty rows","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-table-dirty-rows.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-table-dirty-rows","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-table-dirty-rows","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-dirty-rows.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-table-dirty-rows","title":"VP Get table dirty rows"},"sidebar":"docs","previous":{"title":"VP Get table column index","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-table-column-index"},"next":{"title":"VP Get table range","permalink":"/docs/pt/20-R6/ViewPro/commands/vp-get-table-range"}}'),s=t("785893"),d=t("250065");let i={id:"vp-get-table-dirty-rows",title:"VP Get table dirty rows"},a=void 0,l={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R8"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get table dirty rows"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text { ; ",(0,s.jsx)(n.em,{children:"reset"})," : Boolean {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }} ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome da tabela"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"reset"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:'True para apagar o estado "dirty" da tabela atual, False para mant\xea-lo igual. Padr\xe3o=True'}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Collection of objects with all the items modified since the last reset"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get table dirty rows"})," command returns a collection of ",(0,s.jsx)(n.em,{children:"dirty row"})," objects, containing items that were modified since the last reset in the specified ",(0,s.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"tableName"}),", pass the name of the table for which you want to get the dirty rows. Somente as colunas modificadas vinculadas a um [contexto de dados] (vp-set-data-context.md) ser\xe3o levadas em considera\xe7\xe3o."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, calling the command will clear the ",(0,s.jsx)(n.em,{children:"dirty"})," status from the current table. Para manter este estado intacto, passe ",(0,s.jsx)(n.code,{children:"False"})," no par\xe2metro ",(0,s.jsx)(n.em,{children:"reset"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"sheet"}),", passe o \xedndice da folha de destino. Se nenhum indice for especcificado ou se passar -1, o comando se aplica a folha atual."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A indexa\xe7\xe3o come\xe7a em 0."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each ",(0,s.jsx)(n.em,{children:"dirty row"})," object in the returned collection contains the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"item"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Objeto modificado da linha modificada"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"originalItem"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Objeto antes da modifica\xe7\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"row"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"\xcdndice da linha modificada"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"tableName"})," is not found or if it does not contain a modified column, the command returns an empty collection."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Pretende contar o n\xfamero de linhas editadas:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $dirty : Collection\n$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)\nVP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-find-table",children:"VP Find table"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-table-column-attributes",children:"VP SET TABLE COLUMN ATTRIBUTES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-resize-table",children:"VP RESIZE TABLE"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);