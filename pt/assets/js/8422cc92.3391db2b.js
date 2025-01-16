"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32822"],{109273:function(e,r,o){o.r(r),o.d(r,{default:()=>c,frontMatter:()=>a,metadata:()=>s,assets:()=>t,toc:()=>m,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/print-record","title":"PRINT RECORD","description":"PRINT RECORD ( {;}{* | > } )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/print-record.md","sourceDirName":"commands-legacy","slug":"/commands/print-record","permalink":"/docs/pt/commands/print-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"print-record","title":"PRINT RECORD","slug":"/commands/print-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PRINT OPTION VALUES","permalink":"/docs/pt/commands/print-option-values"},"next":{"title":"PRINT SELECTION","permalink":"/docs/pt/commands/print-selection"}}'),n=o("785893"),i=o("250065");let a={id:"print-record",title:"PRINT RECORD",slug:"/commands/print-record",displayed_sidebar:"docs"},d=void 0,t={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"PRINT RECORD"})," ( {",(0,n.jsx)(r.em,{children:"tabela"}),"}{;}{* | > } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"tabela"}),(0,n.jsx)(r.td,{children:"Table"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Tabela para a qual imprimir o registro, ou Tabela padr\xe3o, caso omitido"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"* | >"}),(0,n.jsx)(r.td,{children:"Operador"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"* to suppress the printing dialog box, or > to not reinitialize print settings"})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["PRINT RECORD imprime o registro atual de ",(0,n.jsx)(r.em,{children:"tabela"}),", sem modificar a sele\xe7\xe3o atual. O formul\xe1rio de sa\xedda atual se utiliza para a impress\xe3o. Se n\xe3o houver registro atual para ",(0,n.jsx)(r.em,{children:"tabela"}),", PRINT RECORD n\xe3o faz nada."]}),"\n",(0,n.jsxs)(r.p,{children:["Pode imprimir sub-formul\xe1rios e objetos externos com o comando PRINT RECORD . Isto n\xe3o \xe9 poss\xedvel com ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/print-form",children:"Print form"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"})," se houver modifica\xe7\xf5es no registro que n\xe3o foram guardadas, este comando imprime os valores dos campos modificados, n\xe3o os valores em disco."]}),"\n",(0,n.jsx)(r.p,{children:"Por padr\xe3o, PRINT RECORD mostra a caixa de di\xe1logo de impress\xe3o antes de imprimir. Se o usu\xe1rio cancela uma das caixas de di\xe1logo de impress\xe3o, o comando se cancela e n\xe3o \xe9 impresso o registro."}),"\n",(0,n.jsxs)(r.p,{children:["Pode eliminar estas caixas de di\xe1logo utilizando o par\xe2metro opcional asterisco (",(0,n.jsx)(r.em,{children:"*"}),") ou o par\xe2metro opcional \u201Cmaior que\u201D (",(0,n.jsx)(r.em,{children:">"}),"):"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["O par\xe2metro ",(0,n.jsx)(r.em,{children:"*"})," produz um trabalho de impress\xe3o utilizando os par\xe2metros de impress\xe3o atual (par\xe2metros por padr\xe3o ou definidos pelos comandos ",(0,n.jsx)(r.em,{children:"_o_PAGE SETUP"})," ou ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"})," )."]}),"\n",(0,n.jsxs)(r.li,{children:["Al\xe9m disso, o par\xe2metro ",(0,n.jsx)(r.em,{children:">"})," produz um trabalho de impress\xe3o sem reinicializar os par\xe2metro de impress\xe3o atual. Este par\xe2metro \xe9 \xfatil para executar v\xe1rias chamadas consecutivas a PRINT RECORD (por exemplo ao interior de um loop) enquanto mant\xe9m os par\xe2metros de impress\xe3o personalizados definidos previamente."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"4D Server:"})," este comando pode ser executado em 4D Server dentro do marco de um procedimento armazenado. Neste contexto:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Tenha certeza de que nenhuma caixa caixa de di\xe1logo apare\xe7a na m\xe1quina servidor (exceto para uma necessidade espec\xedfica). Para fazer isto, \xe9 necess\xe1rio chamar ao comando com o par\xe2metro ",(0,n.jsx)(r.em,{children:"*"})," ou ",(0,n.jsx)(r.em,{children:">"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Em caso de um problema com a impressora (sem papel, impressora desconectada, etc.), n\xe3o gera mensagem de erro."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Aviso:"})," N\xe3o use o comando ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"})," com PRINT RECORD. ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"})," \xe9 reservado exclusivamente para uso combinado com o comando ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/print-form",children:"Print form"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsxs)(r.p,{children:["O exemplo a seguir imprime o registro atual da tabela [Faturas]. O c\xf3digo est\xe1 no m\xe9todo de objeto de um bot\xe3o ",(0,n.jsx)(r.strong,{children:"Imprimir"})," no formul\xe1rio de entrada. Quando o usu\xe1rio clicar no bot\xe3o, o registro se imprime utilizando um formul\xe1rio de sa\xedda criado para este prop\xf3sito."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Faturas];"Print One From Data Entry")\xa0// Sele\xe7\xe3o de formul\xe1rio para impress\xe3o\n\xa0PRINT RECORD([Faturas];*)\xa0// Imprimir as faturas(sem mostrar di\xe1logos de impress\xe3o)\n\xa0FORM SET OUTPUT([Faturas];"Standard Output")\xa0// Restaura\xe7\xe3o do formul\xe1rio de sa\xedda anterior\n'})}),"\n",(0,n.jsx)(r.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsxs)(r.p,{children:["O exemplo a seguir imprime o mesmo registro atual em dois formul\xe1rios diferentes. O c\xf3digo est\xe1 no m\xe9todo de objeto de um bot\xe3o ",(0,n.jsx)(r.strong,{children:"Imprimir"})," no formul\xe1rio de entrada. Voc\xea quer definir par\xe2metros de impress\xe3o personalizados e depois utiliz\xe1-los em dois formul\xe1rios."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0PRINT SETTINGS\xa0//O usu\xe1rio define os par\xe2metros de impress\xe3o\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Empregados];"Detalhado")\xa0//Usar o primeiro formul\xe1rio de impress\xe3o\n\xa0\xa0\xa0\xa0PRINT RECORD([Empregados];>)\xa0//Imprimir utilizando os par\xe2metros definidos pelo usu\xe1rio\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Empregados];"Simple")\xa0//Usar o segundo formul\xe1rio de impress\xe3o\n\xa0\xa0\xa0\xa0PRINT RECORD([Empregados];>)\xa0//Imprimir utilizando os par\xe2metros definidos pelo usu\xe1rio\n\xa0\xa0\xa0\xa0FORM SET OUTPUT([Empregados];"Output")\xa0//Restaurar o formul\xe1rio de sa\xedda por padr\xe3o\n\xa0End if\n'})}),"\n",(0,n.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/pt/commands/print-form",children:"Print form"})}),"\n",(0,n.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"N\xfamero do comando"}),(0,n.jsx)(r.td,{children:"71"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Thread-seguro"}),(0,n.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return d},a:function(){return a}});var s=o(667294);let n={},i=s.createContext(n);function a(e){let r=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);