"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86864],{775895:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>t,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var a=s(474848),r=s(28453);const n={id:"print-selection",title:"PRINT SELECTION",slug:"/commands/print-selection",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/print-selection",title:"PRINT SELECTION",description:"PRINT SELECTION ( {;}{* | > } )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-selection.md",sourceDirName:"commands-legacy",slug:"/commands/print-selection",permalink:"/docs/pt/commands/print-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"print-selection",title:"PRINT SELECTION",slug:"/commands/print-selection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"PRINT RECORD",permalink:"/docs/pt/commands/print-record"},next:{title:"PRINT SETTINGS",permalink:"/docs/pt/commands/print-settings"}},t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"PRINT SELECTION"})," ( {",(0,a.jsx)(o.em,{children:"tabela"}),"}{;}{* | > } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tabela"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tabela para a qual imprimir a sele\xe7\xe3o, ou Tabela por padr\xe3o, se for omitido"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"* | >"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"* para apagar as caixas de di\xe1logo de impress\xe3o, ou > para n\xe3o reiniciar as prefer\xeancias de impress\xe3o"})]})]})]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:"PRINT SELECTION imprime a sele\xe7\xe3o atual de tabela. Os registros se imprimem no formul\xe1rio de salida atual da tabela do processo atual. PRINT SELECTION realiza a mesma a\xe7\xe3o que o comando Imprimir do ambiente Usu\xe1rio. Se a sele\xe7\xe3o est\xe1 vazia, PRINT SELECTION n\xe3o faz nada."}),"\n",(0,a.jsx)(o.p,{children:"Por padr\xe3o, PRINT SELECTION mostra as caixas de di\xe1logo de impress\xe3o (na vers\xe3o 32-bits) ou a caixa de di\xe1logo de Formato de Impress\xe3o (na vers\xe3o 4D 64-bits), antes de imprimir. Se o usu\xe1rio cancelar uma das caixas de di\xe1logo de impress\xe3o, o comando se cancela e o relat\xf3rio n\xe3o se imprime. Pode eliminar estas caixas de di\xe1logo utilizando o par\xe2metro opcional asterisco (*) ou o par\xe2metro opcional \u201cmaior que\u201d (>):"}),"\n",(0,a.jsxs)(o.p,{children:["\u2022 O par\xe2metro * provoca um trabalho de impress\xe3o utilizando os par\xe2metros de impress\xe3o atuais (par\xe2metros por padr\xe3o ou aqueles definidos pelos comandos ",(0,a.jsx)(o.em,{children:"_o_PAGE SETUP"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"}),").",(0,a.jsx)(o.br,{}),"\n\u2022 Al\xe9m disso, o par\xe2metro > provoca um trabalho de impress\xe3o sem reiniciar os par\xe2metros de impress\xe3o atuais. Este par\xe2metro \xe9 \xfatil para executar v\xe1rias chamadas sucessivas a PRINT SELECTION (por exemplo ao interior de um loop) conservando os par\xe2metros de impress\xe3o personalizados previamente definidos. Para ver um exemplo de utiliza\xe7\xe3o deste par\xe2metro, consulte a descri\xe7\xe3o do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-record",children:"PRINT RECORD"}),"."]}),"\n",(0,a.jsx)(o.p,{children:"Durante a impress\xe3o, o m\xe9todo de formul\xe1rio de sa\xedda e os m\xe9todos de objeto do formul\xe1rio se executam em fun\xe7\xe3o dos eventos selecionados nas propriedades dos formul\xe1rios e dos objetos, no ambiente Desenho, assim como dos eventos gerados efetivamente:"}),"\n",(0,a.jsxs)(o.p,{children:["* Um evento On Header \xe9 gerado logo antes que a \xe1rea de cabe\xe7alho se imprima.",(0,a.jsx)(o.br,{}),"\n* Um evento On Printing Detail \xe9 gerado logo antes que um registro se imprima.",(0,a.jsx)(o.br,{}),"\n* Um evento On Printing Break \xe9 gerado logo antes que uma \xe1rea de quebra se imprima.",(0,a.jsx)(o.br,{}),"\n* Um evento On Printing Footer \xe9 gerado logo antes que um p\xe9 de p\xe1gina se imprima."]}),"\n",(0,a.jsxs)(o.p,{children:["Pode saber se PRINT SELECTION est\xe1 imprimindo o primeiro cabe\xe7alho provando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/before-selection",children:"Before selection"})," durante um evento On Header. Igualmente pode verificar o \xfaltimo p\xe9 de p\xe1gina, provando End selection durante um evento On Printing Footer. Para maior informa\xe7\xe3o, consulte a descri\xe7\xe3o destes comandos, como tamb\xe9m dos comandos ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"})," e ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/level",children:"Level "}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Para imprimir uma sele\xe7\xe3o ordenada com subtotais ou quebras utilizando PRINT SELECTION, deve primeiro ordenar a sele\xe7\xe3o. Depois, em cada \xe1rea de quebra do relat\xf3rio, incluir uma vari\xe1vel com um m\xe9todo de objeto que atribui o subtotal \xe0 vari\xe1vel . Igualmente pode utilizar fun\xe7\xf5es estat\xedsticas e aritm\xe9ticas como ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/sum",children:"Sum"})," e ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/average",children:"Average"})," para atribuir valores \xe0s vari\xe1veis. Para maior informa\xe7\xe3o, consulte as descri\xe7\xf5es de ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/subtotal",children:"Subtotal"}),", ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/break-level",children:"BREAK LEVEL"})," e ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/accumulate",children:"ACCUMULATE"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Aviso"}),": N\xe3o use ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"})," com o comando PRINT SELECTION. ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"})," \xe9 usada com o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-form",children:"Print form"}),"."]}),"\n",(0,a.jsx)(o.p,{children:"Depois de um chamado a PRINT SELECTION, a vari\xe1vel OK toma o valor 1 se a impress\xe3o for completada. Se a impress\xe3o foi interrompida, a vari\xe1vel OK toma o valor 0 (zero) (por exemplo se o usu\xe1rio clicar em Cancelar nas caixas de di\xe1logo de impress\xe3o)."}),"\n",(0,a.jsx)(o.p,{children:"4D Server: este comando pode ser executado em 4D Server no marco de um procedimento armazenado. Neste contexto:"}),"\n",(0,a.jsxs)(o.p,{children:["* Tenha certeza que nenhuma caixa de di\xe1logo apare\xe7a na m\xe1quina servidor (exceto para uma necessidade espec\xedfica). Para fazer isto, \xe9 necess\xe1rio chamar ao comando com o par\xe2metro * o >.",(0,a.jsx)(o.br,{}),"\n* Em caso de um problema com a impressora (sem papel, impressora desconectada, etc.), n\xe3o \xe9 gerada mensagem de erro."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsxs)(o.p,{children:["O exemplo a seguir seleciona todos os registros na tabela [Pessoas]. O comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/display-selection",children:"DISPLAY SELECTION"})," \xe9 ent\xe3o chamado para mostrar os registros e permitir ao usu\xe1rio selecionar os registros a imprimir. Finalmente, utiliza os registros selecionados com o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/use-set",children:"USE SET"}),", e os imprime com ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0ALL RECORDS([Pessoas])\xa0// Sele\xe7\xe3o de todos os registros\n\xa0DISPLAY SELECTION([Pessoas];*)\xa0// Visualiza\xe7\xe3o dos registros\n\xa0USE SET("UserSet")\xa0// Utilizar unicamente os registros selecionados pelo usu\xe1rio\n\xa0PRINT SELECTION([Pessoas])\xa0// Imprimir os registros selecionados pelo usu\xe1rio\n'})}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.em,{children:"_o_PAGE SETUP"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/accumulate",children:"ACCUMULATE"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/break-level",children:"BREAK LEVEL"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/level",children:"Level "}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/subtotal",children:"Subtotal"})]})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>d});var a=s(296540);const r={},n=a.createContext(r);function i(e){const o=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);