"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77560"],{535851:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"ViewPro/commands/vp-find-table","title":"VP Find table","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-find-table.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-find-table","permalink":"/docs/pt/ViewPro/commands/vp-find-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-find-table.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-find-table","title":"VP Find table"},"sidebar":"docs","previous":{"title":"VP Find","permalink":"/docs/pt/ViewPro/commands/vp-find"},"next":{"title":"VP FLUSH COMMANDS","permalink":"/docs/pt/ViewPro/commands/vp-flush-commands"}}'),d=t("785893"),r=t("250065");let i={id:"vp-find-table",title:"VP Find table"},a=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function o(e){let n={a:"a",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Release"}),(0,d.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"18 R6"}),(0,d.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"VP Find table"})," ( ",(0,d.jsx)(n.em,{children:"rangeObj"})," : Object ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rangeObj"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"Intervalo de c\xe9lulas"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultados"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"<-"}),(0,d.jsx)(n.td,{children:"Nome da tabela"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"VP Find table"})," command returns the name of the table to which to the ",(0,d.jsx)(n.em,{children:"rangeObj"})," cell belongs."]}),"\n",(0,d.jsxs)(n.p,{children:["Em ",(0,d.jsx)(n.em,{children:"rangeObj"}),", passar um objeto de intervalo de c\xe9lulas. Se as c\xe9lulas designadas n\xe3o pertencerem a uma tabela, o comando retornar\xe1 uma string vazia."]}),"\n",(0,d.jsxs)(n.p,{children:["If ",(0,d.jsx)(n.em,{children:"rangeObj"})," is not a cell range or contains multiple ranges, the first cell of the first range is used."]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")\n     $tableName:=VP Find table(FORM Event.range)\n     If ($tableName#"")\n         ALERT("The "+$tableName+" table has been modified.")\n     End if \nEnd if\n'})}),"\n",(0,d.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-get-table-range",children:"VP Get table range"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let d={},r=s.createContext(d);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);