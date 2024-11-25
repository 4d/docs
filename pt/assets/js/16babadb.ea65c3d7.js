"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98079"],{401850:function(e,o,n){n.r(o),n.d(o,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/object-set-font-size","title":"OBJECT SET FONT SIZE","description":"OBJECT SET FONT SIZE ( { ;} objeto ; tamanho* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-font-size.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-font-size","permalink":"/docs/pt/commands/object-set-font-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-font-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-font-size","title":"OBJECT SET FONT SIZE","slug":"/commands/object-set-font-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET FONT","permalink":"/docs/pt/commands/object-set-font"},"next":{"title":"OBJECT SET FONT STYLE","permalink":"/docs/pt/commands/object-set-font-style"}}'),s=n("785893"),r=n("250065");let a={id:"object-set-font-size",title:"OBJECT SET FONT SIZE",slug:"/commands/object-set-font-size",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OBJECT SET FONT SIZE"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ; ",(0,s.jsx)(o.em,{children:"tamanho"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se* \xe9 especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tamanho"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Tamanho da fonte em pontos"})]})]})]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["OBJECT SET FONT SIZE define o tamanho da fonte dos objetos de formul\xe1rio especificados por ",(0,s.jsx)(o.em,{children:"objeto"})," utilizando o tamanho de fonte que se passa em ",(0,s.jsx)(o.em,{children:"tamanho"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se especificar o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica um nome de objeto (uma string) em ",(0,s.jsx)(o.em,{children:"objeto"}),". Se omite o par\xe2metro opcional *, indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, voc\xea especifica uma refer\xeancia de um campo ou de uma vari\xe1vel (objetos campo ou vari\xe1vel unicamente) ao inv\xe9s de uma string. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,s.jsx)(o.em,{children:"Propriedades dos objetos"})]}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.em,{children:"tamanho"})," pode ser qualquer inteiro entre 1 e 255. Se o tamanho de fonte exato no existe, os caracteres s\xe3o redimensionados proporcionalmente."]}),"\n",(0,s.jsx)(o.p,{children:"A \xe1rea para o objeto, como se definiu no formul\xe1rio, deve ser suficientemente grande para mostrar os dados no novo tamanho. Do contr\xe1rio, o texto pode ser truncado ou n\xe3o ser visualizado."}),"\n",(0,s.jsx)(o.p,{children:"Nota: Se usar este comando ou um objeto que esteja usando uma folha de estilo, a refer\xeancia para a folha de estilo \xe9 apagada automaticamente do objeto - mesmo se atribuir os mesmos atributtos \xe0 folha de estilo."}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(o.p,{children:["O exemplo a seguir define o tamanho de fonte para uma vari\xe1vel chamada ",(0,s.jsx)(o.em,{children:"vtInfo"}),":"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0OBJECT SET FONT SIZE(vtInfo;14)\n"})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:'O exemplo a seguir define o tamanho de fonte para todos os objetos de formul\xe1rio cujo nome come\xe7a por "hl":'}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0OBJECT SET FONT SIZE(*;"hl@";14)\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"Intera\xe7\xe3o de comandos gen\xe9ricos com textos multi estilos"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-get-font-size",children:"OBJECT Get font size"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-set-font",children:"OBJECT SET FONT"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/commands/object-set-font-style",children:"OBJECT SET FONT STYLE"})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return a}});var t=n(667294);let s={},r=t.createContext(s);function a(e){let o=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);