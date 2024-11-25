"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15000"],{444276:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>l,assets:()=>c,toc:()=>i,frontMatter:()=>d});var t=JSON.parse('{"id":"ViewPro/commands/vp-flush-commands","title":"VP FLUSH COMMANDS","description":"VP FLUSH COMMANDS (  vpAreaName : Text )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-flush-commands.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-flush-commands","permalink":"/docs/pt/ViewPro/commands/vp-flush-commands","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-flush-commands.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-flush-commands","title":"VP FLUSH COMMANDS"},"sidebar":"docs","previous":{"title":"VP Find table","permalink":"/docs/pt/ViewPro/commands/vp-find-table"},"next":{"title":"VP Font to object","permalink":"/docs/pt/ViewPro/commands/vp-font-to-object"}}'),s=o("785893"),r=o("250065");let d={id:"vp-flush-commands",title:"VP FLUSH COMMANDS"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4}];function m(e){let n={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP FLUSH COMMANDS"})," (  ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP FLUSH COMMANDS"})," command immediately executes stored commands and clears the command buffer."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,s.jsxs)(n.p,{children:["Para aumentar o desempenho e reduzir o n\xfamero de solicita\xe7\xf5es enviadas, os comandos do 4D View Pro chamados pelo desenvolvedor s\xe3o armazenados em um buffer de comando. Quando chamado, ",(0,s.jsx)(n.code,{children:"VP FLUSH COMMANDS"})," executa os comandos como um lote ao sair do m\xe9todo e esvazia o conte\xfado do buffer de comandos."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Voc\xea deseja rastrear a execu\xe7\xe3o dos comandos e esvaziar o buffer de comandos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")\n VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")\n \n VP FLUSH COMMANDS(("ViewProArea1")\n TRACE\n'})})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var t=o(667294);let s={},r=t.createContext(s);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);