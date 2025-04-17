"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58090"],{666391:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/object-set-enterable","title":"OBJECT SET ENTERABLE","description":"OBJECT SET ENTERABLE ( { ;} objeto ; editavel* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-set-enterable.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-enterable","permalink":"/docs/pt/20-R8/commands/object-set-enterable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-enterable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-enterable","title":"OBJECT SET ENTERABLE","slug":"/commands/object-set-enterable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET ENABLED","permalink":"/docs/pt/20-R8/commands/object-set-enabled"},"next":{"title":"OBJECT SET EVENTS","permalink":"/docs/pt/20-R8/commands/object-set-events"}}'),s=n("785893"),t=n("250065");let d={id:"object-set-enterable",title:"OBJECT SET ENTERABLE",slug:"/commands/object-set-enterable",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT SET ENTERABLE"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ; ",(0,s.jsx)(o.em,{children:"editavel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se* for especificado) ou vari\xe1vel (se * \xe9 omitido)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"editavel"}),(0,s.jsx)(o.td,{children:"Boolean, Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"True se edit\xe1vel; False para n\xe3o edit\xe1vel"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OBJECT SET ENTERABLE"})," torna edit\xe1veis ou n\xe3o edit\xe1veis os objetos de formul\xe1rio especificados por ",(0,s.jsx)(o.em,{children:"objeto"})," e podem estabelecer o atributo ",(0,s.jsx)(o.em,{children:"foc\xe1vel"})]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Note"}),": Um objeto de formul\xe1rio foc\xe1vel pode obter o foco e ativar os eventos de formul\xe1rio ",(0,s.jsx)(o.em,{children:"On Getting focus"})," / ",(0,s.jsx)(o.em,{children:"On Losing focus"})," . Al\xe9m disso, objetos foc\xe1veis de ",(0,s.jsx)(o.strong,{children:"input"})," e ",(0,s.jsx)(o.strong,{children:"\xe1rea 4D Write Pro"})," podem ter seus conte\xfados selecionados e copiados, mesmo se n\xe3o forem edit\xe1veis."]}),"\n",(0,s.jsxs)(o.p,{children:["Se especificar o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (uma string). Se omite o par\xe2metro opcional *, indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 uma tabela, um campo ou uma vari\xe1vel. Neste caso, especifica uma referencia de um campo ou de uma vari\xe1vel (campo ou vari\xe1vel tipo objeto unicamente) ao inv\xe9s de uma string. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o"]}),"\n",(0,s.jsx)(o.p,{children:"Pode passar um valor booleano ou um valor Longint em enterable:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"Booleano - quando enterable/edit\xe1vel for True, o usu\xe1rio pode digitar dados e mover o cursor na \xe1rea."}),"\n",(0,s.jsxs)(o.li,{children:["Quando enterable for False:\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"em bancos bin\xe1rios, o usu\xe1rio n\xe3o pode entrar dados o atributo foc\xe1vel depende da op\xe7\xe3o Foc\xe1vel na lista de propriedades"}),"\n",(0,s.jsx)(o.li,{children:"em Projetos, o usu\xe1rio n\xe3o pode digitar dados e o objeto \xe9 foc\xe1vel."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.li,{children:"Longint - passar um valor longint em edit\xe1vel permite controlar tamb\xe9m a propriedade foc\xe1vel para Inputs e \xe1reas 4D Write Pro. Pode usar uma das constantes abaixo:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Constante"}),(0,s.jsx)(o.th,{children:"Valor"}),(0,s.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"obk enterable"}),(0,s.jsx)(o.td,{children:"1"}),(0,s.jsx)(o.td,{children:"Usu\xe1rios podem entrar valores no objeto."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"obk not enterable"}),(0,s.jsx)(o.td,{children:"0"}),(0,s.jsxs)(o.td,{children:["Usu\xe1rios n\xe3o podem entrar valores no objeto. Use obk not enterable not focusable se quiser remover tamb\xe9m a propriedade ",(0,s.jsx)(o.strong,{children:"focusable"})," para um ",(0,s.jsx)(o.strong,{children:"objeto input"})," ou uma \xe1rea ",(0,s.jsx)(o.strong,{children:"4D Write Pro"})," (outros objetos n\xe3o enterable s\xe3o automaticamente n\xe3o foc\xe1veis)."]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"obk not enterable not focusable"}),(0,s.jsx)(o.td,{children:"2"}),(0,s.jsxs)(o.td,{children:["Usu\xe1rios n\xe3o podem entrar valores no objeto e conte\xfados de ",(0,s.jsx)(o.strong,{children:"objetos inputs"})," e ",(0,s.jsx)(o.strong,{children:"\xe1reas 4D Write Pro"})," n\xe3o podem ser selecionados ou copiadas."]})]})]})]}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OBJECT SET ENTERABLE"})," tamb\xe9m pode ser utilizado para ativar por programa\xe7\xe3o o modo \u201CEdit\xe1vel em lista\u201D para os subformul\xe1rios e formul\xe1rios listados mostrados utilizando os comandos ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/commands/modify-selection",children:"MODIFY SELECTION"})," e ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/commands/display-selection",children:"DISPLAY SELECTION"}),":"]}),"\n",(0,s.jsxs)(o.p,{children:["\u2022 Para os subformul\xe1rios, no par\xe2metro ",(0,s.jsx)(o.em,{children:"areaEntrada"}),", passe o nome da tabela do subformul\xe1rio ou o nome do objeto do subformul\xe1rio, por exemplo: ",(0,s.jsx)(o.strong,{children:"OBJECT SET ENTERABLE"}),'(*;"Subform";True). O comando funciona em subformul\xe1rios s\xf3 se estiver no m\xe9todo formul\xe1rio do subformul\xe1rio;',(0,s.jsx)(o.br,{}),"\n\u2022 Para os formul\xe1rios listados, deve passar o nome da tabela do formul\xe1rio no par\xe2metro ",(0,s.jsx)(o.em,{children:"areaEntrada"}),", por exemplo: OBJECT SET ENTERABLE([MinhaTabela];True)."]}),"\n",(0,s.jsx)(o.p,{children:"Tornar um objeto n\xe3o edit\xe1vel n\xe3o evita que modifique seu valor por programa\xe7\xe3o."}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota"}),": Para fazer a c\xe9lula de uma list box como n\xe3o edit\xe1vel, deve passar o valor -1 para $0 no evento On Before Data Entry, veja ",(0,s.jsx)(o.em,{children:"Gest\xe3o de entrada"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"O exemplo a seguir define um campo de envio, dependendo do peso do pacote. Se o pacote pesa um 1 kilo ou menos, o envio \xe9 realizado atrav\xe9s da Oficina Postal Nacional e o campo n\xe3o \xe9 edit\xe1vel. Do contr\xe1rio, o campo \xe9 edit\xe1vel."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0If([Envio]Peso<=1)\n\xa0\xa0\xa0\xa0[Envio]Empresa:="Correio Nacional"\n\xa0\xa0\xa0\xa0OBJECT SET ENTERABLE([Envio]Empresa;False)\n\xa0Else\n\xa0\xa0\xa0\xa0OBJECT SET ENTERABLE([Envio]Empresa;True)\n\xa0End if\n'})}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Este \xe9 o m\xe9todo de objeto de uma caixa de sele\xe7\xe3o localizada no cabe\xe7alho de uma lista para controlar o modo Entrada em lista:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0var bEditavel : Boolean\n\xa0OBJECT SET ENTERABLE([Tabela1];bEditavel)\n"})}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/commands/object-get-enterable",children:"OBJECT Get enterable"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/commands/object-set-visible",children:"OBJECT SET VISIBLE"})]}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"238"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return a},a:function(){return d}});var r=n(667294);let s={},t=r.createContext(s);function d(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);