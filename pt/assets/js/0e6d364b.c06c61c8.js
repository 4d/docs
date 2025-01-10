"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49063"],{924940:function(e,n,o){o.r(n),o.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>c,assets:()=>d,toc:()=>r,contentTitle:()=>l});var c=JSON.parse('{"id":"commands-legacy/clickcount","title":"Clickcount","description":"Clickcount  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/clickcount.md","sourceDirName":"commands-legacy","slug":"/commands/clickcount","permalink":"/docs/pt/commands/clickcount","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclickcount.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"clickcount","title":"Clickcount","slug":"/commands/clickcount","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CALL SUBFORM CONTAINER","permalink":"/docs/pt/commands/call-subform-container"},"next":{"title":"Contextual click","permalink":"/docs/pt/commands/contextual-click"}}'),s=o("785893"),t=o("250065");let i={id:"clickcount",title:"Clickcount",slug:"/commands/clickcount",displayed_sidebar:"docs"},l=void 0,d={},r=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Clickcount"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de cliques consecutivos"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"Clickcount"})," devolve, no contexto de um evento clique, o n\xfamero de vezes que o usu\xe1rio fez clique de maneira repetida com o mesmo bot\xe3o do mouse. Normalmente, este comando devolve 2 para um clique duplo."]}),"\n",(0,s.jsx)(n.p,{children:"Este comando lhe permite detectar um duplo clique nos cabe\xe7alhos ou rodap\xe9s de list box e igualmente gerenciar as sequ\xeancias de triplos cliques ou mais."}),"\n",(0,s.jsxs)(n.p,{children:["Cada clique com um bot\xe3o do mouse gera um evento clique separado. Por exemplo, se um usu\xe1rio clica duas vezes, um evento \xe9 gerado para o primeiro clique no qual ",(0,s.jsx)(n.strong,{children:"Clickcount"})," devolve 1; logo outro evento \xe9 gerado pelo segundo clique, no qual ",(0,s.jsx)(n.strong,{children:"Clickcount"})," devolve 2."]}),"\n",(0,s.jsx)(n.p,{children:"Este comando s\xf3 deve ser utilizado no contexto do evento formul\xe1rio On Clicked, On Header Click ou On Footer Click. Portanto, \xe9 necess\xe1rio verificar em modo Desenho que o evento correspondente foi selecionado corretamente nas propriedades do formul\xe1rio e/ou para o objeto espec\xedfico."}),"\n",(0,s.jsxs)(n.p,{children:["Quando ambos eventos formul\xe1rio On Clicked e On Double Clicked est\xe3o ativados, a seguinte sequ\xeancia ser\xe1 devolvida por ",(0,s.jsx)(n.strong,{children:"Clickcount"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 no evento On Clicked"}),"\n",(0,s.jsx)(n.li,{children:"2 no evento On Double Clicked"}),"\n",(0,s.jsx)(n.li,{children:"2+n no evento On Clicked"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"A estrutura de c\xf3digo seguinte pode ser colocada em um cabe\xe7alho de listbox para gerenciar cliques simples e duplos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Header Click)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Clickcount=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//single-click action\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Clickcount=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\xa0//double-click action\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"As etiquetas n\xe3o s\xe3o edit\xe1veis mas o s\xe3o depois de um triplo-clique. Se deseja permitir aos usu\xe1rios editar as etiquetas, pode escrever o m\xe9todo objeto seguinte:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Clickcount=3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OBJECT SET ENTERABLE(*;"Label";True)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0EDIT ITEM(*;"Label")\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1332"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return i}});var c=o(667294);let s={},t=c.createContext(s);function i(e){let n=c.useContext(t);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);