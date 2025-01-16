"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37556"],{742212:function(e,o,r){r.r(o),r.d(o,{default:()=>c,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/form-set-output","title":"FORM SET OUTPUT","description":"FORM  SET OUTPUT ( {tabela ;} formulario {; formUsuario} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-set-output.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-output","permalink":"/docs/pt/20-R7/commands/form-set-output","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-output.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-set-output","title":"FORM SET OUTPUT","slug":"/commands/form-set-output","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SET INPUT","permalink":"/docs/pt/20-R7/commands/form-set-input"},"next":{"title":"FORM SET SIZE","permalink":"/docs/pt/20-R7/commands/form-set-size"}}'),n=r("785893"),a=r("250065");let t={id:"form-set-output",title:"FORM SET OUTPUT",slug:"/commands/form-set-output",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"FORM  SET OUTPUT"})," ( {",(0,n.jsx)(o.em,{children:"tabela"})," ;} ",(0,n.jsx)(o.em,{children:"formulario"})," {; ",(0,n.jsx)(o.em,{children:"formUsuario"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tabela"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Tabela para a qual vai estabelecer o formul\xe1rio output, ou tabela padr\xe3o, se omitido"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"formulario"}),(0,n.jsx)(o.td,{children:"Text, Object"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nome formul\xe1rio"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"formUsuario"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Nome de formul\xe1rio usu\xe1rio a utilizar"})]})]})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando FORM SET OUTPUT define o formul\xe1rio de salida atual de ",(0,n.jsx)(o.em,{children:"formulario"})," ou ",(0,n.jsx)(o.em,{children:"formUsuario"}),". O formul\xe1rio deve pertencer a ",(0,n.jsx)(o.em,{children:"tabela"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"O par\xe2metro formul\xe1rio \xe9 o formul\xe1rio que ser\xe1 exibido. Passe:"}),"\n",(0,n.jsxs)(o.p,{children:["o nome de um formul\xe1rio;",(0,n.jsx)(o.br,{}),"\na rota (em sintaxe POSIX) para um arquivo json v\xe1lido contendo uma descri\xe7\xe3o doe formul\xe1rio a usar. Veja ",(0,n.jsx)(o.em,{children:"Form file path"}),";",(0,n.jsx)(o.br,{}),"\num objeto que contenha a descri\xe7\xe3o do formul\xe1rio."]}),"\n",(0,n.jsx)(o.p,{children:"O alcance de este comando \xe9 o processo atual. Cada tabela tem seu pr\xf3prio formul\xe1rio de sa\xedda em cada processo."}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota"}),": por raz\xf5es estruturais, este comando n\xe3o \xe9 compat\xedvel com formul\xe1rios de projeto. Se passa um formul\xe1rio de projeto em formul\xe1rio, o comando n\xe3o faz nada."]}),"\n",(0,n.jsx)(o.p,{children:"FORM SET OUTPUT n\xe3o mostra o formul\xe1rio; simplesmente designa o formul\xe1rio que deve imprimir, mostrar, ou utilizar outro comando. Para maior informa\xe7\xe3o sobre a cria\xe7\xe3o de formul\xe1rios, consulte o ."}),"\n",(0,n.jsx)(o.p,{children:"O formul\xe1rio de sa\xedda padr\xe3o \xe9 definido na janela do Explorador no ambiente Desenho para cada tabela. Este formul\xe1rio de sa\xedda padr\xe3o \xe9 utilizado se o comando FORM SET OUTPUT n\xe3o \xe9 utilizado para especificar um formul\xe1rio de sa\xedda, ou se voc\xea especificar um formul\xe1rio que n\xe3o existe."}),"\n",(0,n.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,n.jsx)(o.em,{children:"formUsuario"})," lhe permite especificar um formul\xe1rio usu\xe1rio (que vem desde ",(0,n.jsx)(o.em,{children:"formulario"}),") como formul\xe1rio de sa\xedda padr\xe3o. Se passar um nome de formul\xe1rio de usu\xe1rio correto, este formul\xe1rio ser\xe1 utilizado automaticamente ao inv\xe9s do formul\xe1rio de sa\xedda no processo atual. Isto lhe permite ter simult\xe2neamente diferentes formul\xe1rios de usu\xe1rio personalizados (gerados utilizando o comando ",(0,n.jsx)(o.em,{children:"CREATE USER FORM"}),") e utilizar o que convenha de acordo ao contexto."]}),"\n",(0,n.jsx)(o.p,{children:"Para maior informa\xe7\xe3o sobre formul\xe1rios usu\xe1rio, consulte a se\xe7\xe3o ."}),"\n",(0,n.jsxs)(o.p,{children:["Os formul\xe1rios de sa\xedda s\xe3o utilizados por tr\xeas grupos de comandos. Um grupo mostra uma lista de registros em tela, outro grupo gera relat\xf3rios, e o terceiro grupo exporta dados. Os comandos ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/display-selection",title:"DISPLAY SELECTION",children:"DISPLAY SELECTION"})," e ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/modify-selection",title:"MODIFY SELECTION",children:"MODIFY SELECTION"})," mostram uma lista de registros utilizando um formul\xe1rio de sa\xedda. Utilize o formul\xe1rio de sa\xedda durante a cria\xe7\xe3o de relat\xf3rios com os comandos ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/print-label",title:"PRINT LABEL",children:"PRINT LABEL"})," e ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/print-selection",title:"PRINT SELECTION",children:"PRINT SELECTION"}),". Cada um dos comandos de exporta\xe7\xe3o (",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/export-dif",title:"EXPORT DIF",children:"EXPORT DIF"}),", ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/export-sylk",title:"EXPORT SYLK",children:"EXPORT SYLK"})," e ",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/export-text",title:"EXPORT TEXT",children:"EXPORT TEXT"}),") utiliza tamb\xe9m o formul\xe1rio de sa\xedda."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsxs)(o.p,{children:["O exemplo a seguir mostra um uso t\xedpico de ",(0,n.jsx)(o.strong,{children:"FORM SET OUTPUT"}),".. Note que mesmo que o comando ",(0,n.jsx)(o.strong,{children:"FORM SET OUTPUT"}),". aparece imediatamente antes de que o formul\xe1rio seja utilizado, n\xe3o \xe9 obrigat\xf3rio. Realmente, o comando poderia ser executado em um m\xe9todo completamente diferente, sempre e quando seja executado antes deste m\xe9todo:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET INPUT([Partes];"Entrada partes")\xa0// Sele\xe7\xe3o do formul\xe1rio de entrada\n\xa0FORM SET OUTPUT([Partes];"Lista partes")\xa0// Sele\xe7\xe3o do formul\xe1rio de sa\xedda\n\xa0MODIFY SELECTION([Partes])\xa0// Este comando utiliza ambos formul\xe1rios\n'})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsx)(o.p,{children:"Os exemplos abaixo usam a rota a um formul\xe1rio json para imprimir os registros em uma lista de empregados:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0FORM SET OUTPUT([Personnel];"/RESOURCES/PersonnelForm.json")\n\xa0ALL RECORDS([Personnel])\n\xa0PRINT SELECTION([Personnel])\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/display-selection",children:"DISPLAY SELECTION"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/export-dif",children:"EXPORT DIF"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/export-sylk",children:"EXPORT SYLK"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/export-text",children:"EXPORT TEXT"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/form-set-input",children:"FORM SET INPUT"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/modify-selection",children:"MODIFY SELECTION"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/print-label",children:"PRINT LABEL"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/20-R7/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"54"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return t}});var s=r(667294);let n={},a=s.createContext(n);function t(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);