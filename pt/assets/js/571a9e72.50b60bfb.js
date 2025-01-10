"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94405"],{844261:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-set-font","title":"OBJECT SET FONT","description":"OBJECT SET FONT ( { ;} objeto ; fonte* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-font.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-font","permalink":"/docs/pt/commands/object-set-font","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-font","title":"OBJECT SET FONT","slug":"/commands/object-set-font","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FOCUS RECTANGLE INVISIBLE","permalink":"/docs/pt/commands/object-set-focus-rectangle-invisible"},"next":{"title":"OBJECT SET FONT SIZE","permalink":"/docs/pt/commands/object-set-font-size"}}'),t=o("785893"),d=o("250065");let r={id:"object-set-font",title:"OBJECT SET FONT",slug:"/commands/object-set-font",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT SET FONT"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"fonte"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome de objeto (se* \xe9 especificado) ou Campo ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fonte"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome da fonte ou n\xfamero da fonte"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["OBJECT SET FONT mostra ",(0,t.jsx)(n.em,{children:"objeto"})," utilizando a fonte especificada no par\xe2metro ",(0,t.jsx)(n.em,{children:"fonte"}),". O par\xe2metro ",(0,t.jsx)(n.em,{children:"fonte"})," deve conter um nome de fonte v\xe1lido."]}),"\n",(0,t.jsxs)(n.p,{children:["Se especificar o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica um nome de objeto (uma cadeia) em ",(0,t.jsx)(n.em,{children:"objeto"}),". Se omite o par\xe2metro opcional *, indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se especifica uma refer\xeancia de um campo ou de uma vari\xe1vel (objetos campo ou vari\xe1vel unicamente) ao inv\xe9s de uma string."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": Se usar este comando em um objeto que use uma folha de estilo, a refer\xeancia \xe0 folha de estilo \xe9 apagada automaticamente do objeto - mesmo se atribuir os mesmos atributos que da folha de estilo."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsxs)(n.p,{children:["O exemplo a segior define a fonte de um bot\xe3o chamado ",(0,t.jsx)(n.em,{children:"bOK"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT(bOK;"Arial")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:'O exemplo a seguir define a fonte para todos os objetos de formul\xe1rio cujo nome contenha "info":'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT(*;"@info@";"Times")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,t.jsxs)(n.p,{children:["O seguinte exemplo utiliza a op\xe7\xe3o especial ",(0,t.jsx)(n.em,{children:"%password"}),', desenhada para a entrada e visualiza\xe7\xe3o de campos de tipo \u201Csenha\u201D. Quando passe "%password" no par\xe2metro ',(0,t.jsx)(n.em,{children:"fonte"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"cada caractere introduzido no objeto \xe9 mostrado com o mesmo s\xedmbolo,"}),"\n",(0,t.jsx)(n.li,{children:'as a\xe7\xf5es "copiar" e "colar" se desativam no objeto.'}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," pode utilizar a op\xe7\xe3o ",(0,t.jsx)(n.em,{children:"%password"})," com os objetos de tipo campo, vari\xe1vel e combo box."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET FONT([Users]Password;"%password")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/font-file",children:"Font file"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/font-list",children:"FONT LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Intera\xe7\xe3o de comandos gen\xe9ricos com textos multi estilos"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/object-get-font",children:"OBJECT Get font"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/object-set-font-size",children:"OBJECT SET FONT SIZE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"164"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return r}});var s=o(667294);let t={},d=s.createContext(t);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);