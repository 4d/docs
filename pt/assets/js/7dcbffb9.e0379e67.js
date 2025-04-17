"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80232"],{754126:function(e,r,o){o.r(r),o.d(r,{default:()=>c,frontMatter:()=>a,metadata:()=>n,assets:()=>m,toc:()=>i,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/current-form-name","title":"Current form name","description":"Current form name  : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/current-form-name.md","sourceDirName":"commands-legacy","slug":"/commands/current-form-name","permalink":"/docs/pt/20-R8/commands/current-form-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcurrent-form-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"current-form-name","title":"Current form name","slug":"/commands/current-form-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Formul\xe1rios","permalink":"/docs/pt/20-R8/commands/theme/Forms"},"next":{"title":"Formul\xe1rio","permalink":"/docs/pt/20-R8/commands/form"}}'),t=o("785893"),s=o("250065");let a={id:"current-form-name",title:"Current form name",slug:"/commands/current-form-name",displayed_sidebar:"docs"},d=void 0,m={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Current form name"}),"  : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Nome do projeto de formul\xe1rio atual ou tabela formul\xe1rio atual no processo"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O comando ",(0,t.jsx)(r.strong,{children:"Current form name"})," retorna o nome do formul\xe1rio atual definido para o processo. O formul\xe1rio atual pode ser um formul\xe1rio de projeto ou formul\xe1rio de tabela."]}),"\n",(0,t.jsxs)(r.p,{children:["Como padr\xe3o, se n\xe3o tiver chamado o comando ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R8/commands/form-load",children:"FORM LOAD"})," no processo chamado, o formul\xe1rio atual \xe9 aquele sendo exibido ou impresso. Se q tiver chamado o comando ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R8/commands/form-load",children:"FORM LOAD"})," no processo, o formul\xe1rio atual \xe9 aquele estabelecido pelo comando e continua sendo assim at\xe9 chamar ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R8/commands/form-unload",children:"FORM UNLOAD"})," (ou ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R8/commands/close-printing-job",children:"CLOSE PRINTING JOB"}),")."]}),"\n",(0,t.jsx)(r.p,{children:"O comando retorna:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"o nome do formul\xe1rio ou"}),"\n",(0,t.jsx)(r.li,{children:"o nome de arquivo sem a extens\xe3o se o formul\xe1rio atual tiver sido criado por um arquivo json ou"}),"\n",(0,t.jsx)(r.li,{children:'o atributo "nome" se o formul\xe1rio atual for criado por um objeto ou'}),"\n",(0,t.jsx)(r.li,{children:"uma string vazia se n\xe3o houver formul\xe1rio atual definido para o processo"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(r.p,{children:"Em um formul\xe1rio de entrada, ponha o c\xf3digo abaixo em um bot\xe3o:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0var $FormName : Text\n\xa0$win:=Open form window([Members];"Input";Plain form window)\n\xa0DIALOG([Members];"Input")\n\xa0$FormName:=Current form name\n\xa0\xa0// $FormName = "Input"\n\xa0FORM LOAD([Members];"Drag")\n\xa0$FormName:=Current form name\n\xa0\xa0// $FormName = "Drag"\n\xa0\xa0//...\n'})}),"\n",(0,t.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(r.p,{children:"Se quiser obter o formul\xe1rio atual se este for um formul\xe1rio projeto:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0$PointerTable:=Current form table\n\xa0If(Nil($PointerTable))\xa0// este \xe9 um formul\xe1rio projeto\n\xa0\xa0\xa0\xa0$FormName:=Current form name\n\xa0\xa0\xa0\xa0...\xa0// processamento\n\xa0End if\n"})}),"\n",(0,t.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/pt/20-R8/commands/form-load",children:"FORM LOAD"})}),"\n",(0,t.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"1298"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return a}});var n=o(667294);let t={},s=n.createContext(t);function a(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);