"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45613],{98687:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=r(474848),o=r(28453);const i={id:"print-form",title:"Print form",slug:"/commands/print-form",displayed_sidebar:"docs"},d=void 0,a={id:"commands-legacy/print-form",title:"Print form",description:"Print form ( {tabela ;} formulario {; formData} {; area1{; area2}} ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/print-form.md",sourceDirName:"commands-legacy",slug:"/commands/print-form",permalink:"/docs/pt/commands/print-form",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprint-form.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"print-form",title:"Print form",slug:"/commands/print-form",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"PAGE BREAK",permalink:"/docs/pt/commands/page-break"},next:{title:"PRINT LABEL",permalink:"/docs/pt/commands/print-label"}},t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Print form"})," ( {",(0,s.jsx)(n.em,{children:"tabela"})," ;} ",(0,s.jsx)(n.em,{children:"formulario"})," {; ",(0,s.jsx)(n.em,{children:"formData"}),"} {; ",(0,s.jsx)(n.em,{children:"area1"}),"{; ",(0,s.jsx)(n.em,{children:"area2"}),"}} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabela"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabela a qual pertence o formul\xe1rio, ou tabela padr\xe3o, se omitido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formulario"}),(0,s.jsx)(n.td,{children:"Text, Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Formul\xe1rio a imprimir"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formData"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Data to associate to the form"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area1"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Marcador de impress\xe3o, a \xc1rea de in\xedcio (se area2 \xe9 especificada)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"\xc1rea de fim (se \xe1rea1 for especificada)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Altura da \xe1rea de impress\xe3o"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["Print form simplesmente imprime ",(0,s.jsx)(n.em,{children:"formulario"})," com os valores atuais dos campos e vari\xe1veis. Geralmente este comando se utiliza para imprimir relat\xf3rios muito complexos que necessitem um controle total do processo de impress\xe3o. Print form n\xe3o processa registros, nem quebras ou saltos de p\xe1ginas. Estas opera\xe7\xf5es s\xe3o sua responsabilidade. Print form imprime campos e vari\xe1veis em um marco de tamanho fixo unicamente."]}),"\n",(0,s.jsx)(n.p,{children:"No formul\xe1rio par\xe2metro, pode passar:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"o nome do formul\xe1rio ou"}),"\n",(0,s.jsxs)(n.li,{children:["a rota (em sintaxe POSIX) para um arquivo v\xe1lido .json que contenha uma descri\xe7\xe3o do formul\xe1rio a usar (ver ",(0,s.jsx)(n.em,{children:"Form file path"}),"),"]}),"\n",(0,s.jsx)(n.li,{children:"ou um objeto que contenha uma descri\xe7\xe3o do formul\xe1rio."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Como Print form n\xe3o gera um salto de p\xe1gina depois de imprimir o formul\xe1rio, \xe9 f\xe1cil combinar diferentes formul\xe1rios na mesma p\xe1gina. Ent\xe3o, Print form \xe9 ideal para efetuar tarefas de impress\xe3o completas que envolvam diferentes tabelas e diferentes formul\xe1rios. Para for\xe7ar um salto de p\xe1gina entre formul\xe1rios, utilize o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"}),". Para passar \xe0 seguinte p\xe1gina de um formul\xe1rio cuja altura \xe9 maior que o espa\xe7o dispon\xedvel, chame o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"})," antes do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Podem ser utilizadas tr\xeas sintaxes diferentes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Impress\xe3o da \xe1rea de detalhe"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Sintaxe:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0altura:=Print form(minhaTabela;meuForm)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Neste caso, Print form s\xf3 imprime a \xe1rea de detalhe (a \xe1rea entre a linha cabe\xe7alho e a linha detalhe) do formul\xe1rio."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"impress\xe3o"})," ",(0,s.jsx)(n.strong,{children:"da \xe1rea do formul\xe1rio"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Sintaxes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0altura:=Print form(minhaTabela;meuForm;marcador)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Neste caso, o comando imprimir\xe1 a se\xe7\xe3o designada pelo ",(0,s.jsx)(n.em,{children:"marcador"}),". Passe no par\xe2metro ",(0,s.jsx)(n.em,{children:"marcador"})," uma das constantes do tema ",(0,s.jsx)(n.em,{children:"\xc1rea de formul\xe1rio"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break0"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"300"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break1"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"301"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break2"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"302"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break3"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"303"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break4"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"304"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break5"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"305"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break6"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"306"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break7"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"307"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break8"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"308"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form break9"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"309"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form detail"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form footer"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"100"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"200"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header1"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"201"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header10"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"210"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header2"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"202"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header3"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"203"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header4"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"204"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header5"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"205"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header6"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"206"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header7"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"207"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header8"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"208"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Form header9"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"209"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u2022 impress\xe3o"})," ",(0,s.jsx)(n.strong,{children:"de se\xe7\xe3o"})]}),"\n",(0,s.jsx)(n.p,{children:"Sintaxes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0height:=Print form(myTable;myForm;areaStart;areaEnd)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Neste caso, o comando imprimir\xe1 a se\xe7\xe3o inclu\xedda entre os par\xe2metros ",(0,s.jsx)(n.em,{children:"areaInicio"})," e ",(0,s.jsx)(n.em,{children:"areaFim"})," Par\xe2metros. Os valores introduzidos devem ser expressados em p\xedxels."]}),"\n",(0,s.jsxs)(n.p,{children:["O valor devolvido por Print form indica a altura da \xe1rea de impress\xe3o. Este valor ser\xe1 considerado automaticamente pelo comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/get-printed-height",children:"Get printed height"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"As caixas de di\xe1logo de impress\xe3o n\xe3o aparecem quando utiliza Print form. O relat\xf3rio n\xe3o utiliza os par\xe2metros de impress\xe3o definidos para o formul\xe1rio no ambiente Desenho. H\xe1 duas formas de especificar os par\xe2metros de impress\xe3o antes de efetuar uma s\xe9rie de chamadas a Print form:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Chamar ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-settings",children:"PRINT SETTINGS"}),". Neste caso, voc\xea permite ao usu\xe1rio escolher os par\xe2metros."]}),"\n",(0,s.jsxs)(n.li,{children:["Chamar ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"})," e ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/get-print-option",children:"GET PRINT OPTION"}),".. Neste caso, os par\xe2metros de impress\xe3o se especificam por programa\xe7\xe3o."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Print form gera apenas um evento On Printing Detail para o m\xe9todo de formul\xe1rio."}),"\n",(0,s.jsxs)(n.p,{children:["Print form constr\xf3i cada p\xe1gina impressa na mem\xf3ria. Cada p\xe1gina se imprime quando a p\xe1gina em mem\xf3ria est\xe1 cheia ou quando voc\xea chama a ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"}),". Para ter certeza de que a impress\xe3o da \xfaltima p\xe1gina depois de utilizar Print form, deve concluir com o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"}),". Do contr\xe1rio, se a \xfaltima p\xe1gina n\xe3o estiver cheia, permanece em mem\xf3ria e n\xe3o se imprime."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Aten\xe7\xe3o:"})," Sub-formul\xe1rios n\xe3o s\xe3o impressos com Print form. Para imprimir apenas um formul\xe1rio com esses objetos, use ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-record",children:"PRINT RECORD"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Print form gera s\xf3 um evento On Printing Detail para o m\xe9todo formul\xe1rio."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D Server:"})," Este comando pode ser executado em 4D Server dentro do framework de um procedimento armazenado. Neste contexto:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tenha certeza de que n\xe3o apare\xe7a nenhuma caixa de di\xe1logo na equipe servidor (exceto para um requerimento espec\xedfico)."}),"\n",(0,s.jsx)(n.li,{children:"No caso de um problema relacionado com a impressora (sem papel, impressora desconectada, etc.), n\xe3o \xe9 gerada uma mensagem de erro."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["O exemplo a seguir atua da mesma que forma que o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),". Entretanto, o relat\xf3rio usa um de dois diferentes formul\xe1rios, dependendo se o registro \xe9 para um cheque ou um dep\xf3sito:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Registro])\xa0// Select the records\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0ORDER BY([Registro])\xa0// Ordenar os registros\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PRINT SETTINGS\xa0// Mostrar as caixas de di\xe1logo de impress\xe3o\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlRegistro;1;Records in selection([Registro]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If([Registro]Tipo ="Cheque")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Print form([Registro];"Sa\xeddaCheque")\xa0// Utilize um formul\xe1rio de cheques\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Print form([Registro];"SaidaDeposito")\xa0// Utilizar outro formul\xe1rio de dep\xf3sitos\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0NEXT RECORD([Registro])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0PAGE BREAK\xa0// Tenha certeza de que a \xfaltima p\xe1gina se imprima\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Veja o exemplo do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-print-marker",children:"SET PRINT MARKER"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Este formul\xe1rio se utiliza como di\xe1logo e depois se imprime com modifica\xe7\xf5es:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(313490).A+"",width:"810",height:"558"})}),"\n",(0,s.jsx)(n.p,{children:"O m\xe9todo formulario:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On Printing Detail)\n\xa0\xa0\xa0\xa0Form.lastname:=Uppercase(Form.lastname)\n\xa0\xa0\xa0\xa0Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))\n\xa0\xa0\xa0\xa0Form.request:=Lowercase(Form.request)\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.p,{children:"O c\xf3digo que chama ao di\xe1logo depois imprime seu corpo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$formData:=New object\n\xa0$formData.lastname:="Smith"\n\xa0$formData.firstname:="john"\n\xa0$formData.request:="I need more COFFEE"\n\xa0$win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)\n\xa0DIALOG("Request_obj";$formData)\n\xa0$h:=Print form("Request_var";$formData;Form detail)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/cancel",children:"CANCEL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/page-break",children:"PAGE BREAK"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/print-settings",children:"PRINT SETTINGS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-print-option",children:"SET PRINT OPTION"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},313490:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/pict6264975.en-46a893baeaa9ea703dc9ca1a2c70ff41.png"},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var s=r(296540);const o={},i=s.createContext(o);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);