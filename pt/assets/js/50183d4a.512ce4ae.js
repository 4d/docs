"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61874"],{428824:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/wa-evaluate-javascript","title":"WA Evaluate JavaScript","description":"WA Evaluate JavaScript ( { ;} objeto ; codeJS {; tipo*} )  : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/wa-evaluate-javascript.md","sourceDirName":"commands-legacy","slug":"/commands/wa-evaluate-javascript","permalink":"/docs/pt/commands/wa-evaluate-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-evaluate-javascript.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-evaluate-javascript","title":"WA Evaluate JavaScript","slug":"/commands/wa-evaluate-javascript","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Create URL history menu","permalink":"/docs/pt/commands/wa-create-url-history-menu"},"next":{"title":"WA EXECUTE JAVASCRIPT FUNCTION","permalink":"/docs/pt/commands/wa-execute-javascript-function"}}'),r=t("785893"),d=t("250065");let s={id:"wa-evaluate-javascript",title:"WA Evaluate JavaScript",slug:"/commands/wa-evaluate-javascript",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WA Evaluate JavaScript"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"codeJS"})," {; ",(0,r.jsx)(n.em,{children:"tipo"}),"} )  : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string); se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"codeJS"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"C\xf3digo Java Script"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo ao qual converter o resultado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Date, Time, Object, Pointer, Real, Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Resultado da fun\xe7\xe3o"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando WA Evaluate JavaScript executa na \xe1rea web designada pelos par\xe2metros ",(0,r.jsx)(n.em,{children:"*"})," e ",(0,r.jsx)(n.em,{children:"objeto"})," o c\xf3digo JavaScript passado em ",(0,r.jsx)(n.em,{children:"codeJS"})," e retorna o resultado.. Este comando deve ser chamado depois de carregar a p\xe1gina (o evento de formul\xe1rio On End URL Loading deve ter sido gerado)."]}),"\n",(0,r.jsxs)(n.p,{children:["Por padr\xe3o, o comando devolve o resultado como cadeias. Pode utilizar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"tipo"}),' para especificar a digita\xe7\xe3o do valor devolvido. Para fazer isto, passe uma das seguintes constantes, do tema "',(0,r.jsx)(n.em,{children:"Tipos de campos e vari\xe1veis"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is collection"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Aviso"}),": N\xe3o \xe9 recomendado usar este comando para chamar diretamente uma fun\xe7\xe3o JavaScript que exibe um di\xe1logo (alert(), print()...) porque o usu\xe1rio n\xe3o pode interagir com a \xe1rea Web enquanto o c\xf3digo 4D roda. Se precisar implementar uma interface desse tipo, chame um c\xf3digo como setTimeout(function(){alert();}, 50)) para finalizar a execu\xe7\xe3o do c\xf3digo 4D e permitir intera\xe7\xe3o de usu\xe1rio."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo de c\xf3digo JavaScript faz com que a URL anterior seja mostrada."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$result:=WA Evaluate JavaScript(MinhaWArea;"history.back()")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Este exemplo mostra algumas avalia\xe7\xf5es com convers\xe3o dos valores recebidos."}),"\n",(0,r.jsx)(n.p,{children:"As fun\xe7\xf5es JavaScript se localizam em um arquivo HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-HTML",children:'<!DOCTYPE html>\n<html>\n\xa0\xa0\xa0 <head>\n\xa0\xa0\xa0 \xa0\xa0\xa0 <script>\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalLong(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return 123;\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalText(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return "456";\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalObject(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return {a:1,b:"hello world"};\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalDate(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return new Date();\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 <\/script>\n\xa0\xa0\xa0 </head>\n\xa0\xa0\xa0 <body>\n\xa0\xa0\xa0 \xa0\xa0\xa0 TEST PAGE\n\xa0\xa0\xa0 </body>\n</html>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Escreva no m\xe9todo do formul\xe1rio 4D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Load)\n\xa0\xa0\xa0\xa0WA OPEN URL(*;"Web Area";"C:\\\\myDatabase\\\\index.html")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.p,{children:"Logo pode avaliar o c\xf3digo JavaScript desde 4D:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$Eval1:=WA Evaluate JavaScript(*;"Web Area";"evalLong()";Is longint)\n\xa0\xa0//$Eval1 = 123\n\xa0\xa0//$Eval1 = "123" if type is omitted\n\xa0$Eval2:=WA Evaluate JavaScript(*;"Web Area";"evalText()";Is text)\n\xa0\xa0//$Eval2 = "456"\n\xa0$Eval3:=WA Evaluate JavaScript(*;"Web Area";"evalObject()";Is object)\n\xa0\xa0//$Eval3 = {"a":1,"b":"hello world"}\n\xa0$Eval4:=WA Evaluate JavaScript(*;"Web Area";"evalDate()";Is date)\n\xa0\xa0// $Eval4 = 06/21/13\n\xa0\xa0// $Eval4 = "2013-06-21T14:45:09.694Z" Se o tipo se omite\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/wa-execute-javascript-function",children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1029"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var a=t(667294);let r={},d=a.createContext(r);function s(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);