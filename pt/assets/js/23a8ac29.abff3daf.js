"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85877"],{540008:function(e,o,r){r.r(o),r.d(o,{default:()=>c,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>m,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/form-screenshot","title":"FORM SCREENSHOT","description":"FORM SCREENSHOT ( {{tabela ;} nomeForm ;} imagForm {; pagNum} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-screenshot.md","sourceDirName":"commands-legacy","slug":"/commands/form-screenshot","permalink":"/docs/pt/commands/form-screenshot","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-screenshot.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-screenshot","title":"FORM SCREENSHOT","slug":"/commands/form-screenshot","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM PREVIOUS PAGE","permalink":"/docs/pt/commands/form-previous-page"},"next":{"title":"FORM SET ENTRY ORDER","permalink":"/docs/pt/commands/form-set-entry-order"}}'),s=r("785893"),a=r("250065");let d={id:"form-screenshot",title:"FORM SCREENSHOT",slug:"/commands/form-screenshot",displayed_sidebar:"docs"},t=void 0,i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"FORM SCREENSHOT"})," ( {{",(0,s.jsx)(o.em,{children:"tabela"})," ;} ",(0,s.jsx)(o.em,{children:"nomeForm"})," ;} ",(0,s.jsx)(o.em,{children:"imagForm"})," {; ",(0,s.jsx)(o.em,{children:"pagNum"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tabela"}),(0,s.jsx)(o.td,{children:"Table"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Tabela do formul\xe1rio"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"nomeForm"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome do formul\xe1rio"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"imagForm"}),(0,s.jsx)(o.td,{children:"Picture"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsxs)(o.td,{children:["Imagem do formul\xe1rio em execu\xe7\xe3o se o primeiro par\xe2metro se omite, ou",(0,s.jsx)(o.br,{}),"Imagem do formul\xe1rio no editor de formul\xe1rios se passar um nome de formul\xe1rio"]})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"pagNum"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"N\xfamero de p\xe1gina do formul\xe1rio"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"FORM SCREENSHOT"})," retorna um formul\xe1rio em forma de imagem. Este comando aceita duas sintaxes diferentes: em fun\xe7\xe3o da sintaxe utilizada, voc\xea obt\xe9m ou uma imagem do formul\xe1rio em execu\xe7\xe3o ou uma imagem do formul\xe1rio no editor de formul\xe1rios."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["FORM SCREENSHOT ( ",(0,s.jsx)(o.em,{children:"imagF"})," ",(0,s.jsx)(o.em,{children:"orm"})," )",(0,s.jsx)(o.br,{}),"\nEsta sintaxe permite obter uma captura de tela exata da p\xe1gina atual do formul\xe1rio em execu\xe7\xe3o ou carregado sob o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/form-load",children:"FORM LOAD"}),": a imagem retorna no par\xe2metro   ",(0,s.jsx)(o.em,{children:"imagForm"})," cont\xe9m todos os objetos vis\xedveis do formul\xe1rio com os valores atuais dos campos e das vari\xe1veis do formul\xe1rio, subformul\xe1rio, etc. O formul\xe1rio \xe9 retornado em sua totalidade, sem considerar o tamanho da janela que o contenha.",(0,s.jsx)(o.br,{}),"\nConsidere que esta sintaxe s\xf3 funciona com formul\xe1rios de entrada."]}),"\n",(0,s.jsxs)(o.li,{children:["FORM SCREENSHOT ( {",(0,s.jsx)(o.em,{children:"tabela"})," ;} nomeForm; ",(0,s.jsx)(o.em,{children:"imagForm"}),"{; ",(0,s.jsx)(o.em,{children:"pagNum"}),"} )",(0,s.jsx)(o.br,{}),'\nEsta sintaxe permite obter uma captura de tela (screensho) de um formul\xe1rio "modelo" do modo como \xe9 exibido no Editor de formul\xe1rios. Todos os objetos vis\xedveis s\xe3o desenhados da mesma forma que no editor; os comandos consideram os formul\xe1rios herdados e os objetos localizados na p\xe1gina 0.',(0,s.jsx)(o.br,{}),"\nSe deseja uma captura de tela de um formul\xe1rio tabela, passe a tabela do formul\xe1rio no par\xe2metro ",(0,s.jsx)(o.em,{children:"tabela"})," e depois seu nome como uma string em ",(0,s.jsx)(o.em,{children:"nomeForm"}),". Para um formul\xe1rio projeto, passe diretamente o nome do formul\xe1rio em ",(0,s.jsx)(o.em,{children:"nomeForm"}),".",(0,s.jsx)(o.br,{}),"\nAutomaticamente, o comando retorna uma captura de tela da p\xe1gina 1 do formul\xe1rio. Se apenas deseja uma imagem da p\xe1gina 0, ou de qualquer outra p\xe1gina do formul\xe1rio, passe o n\xfamero de p\xe1gina no par\xe2metro ",(0,s.jsx)(o.em,{children:"pagNum"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"\xc0reas Web n\xe3o s\xe3o geradas na screenshot retornada."}),"\n",(0,s.jsxs)(o.li,{children:["J\xe1 que os primeiros dois par\xe2metros do comando s\xe3o opcionais, n\xe3o \xe9 poss\xedvel passar uma fun\xe7\xe3o retornando um ponteiro, tal como ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/current-form-table",children:"Current form table"}),"-> ou ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/table",children:"Table"}),'->, diretamente como argumento. Apesar dessa sintaxe funcionar em modo interpretado, seria rejeitada durante a compila\xe7\xe3o, ent\xe3o use uma vari\xe1vel ponteiro intermedi\xe1ria nesse caso. Para saber mais, veja "',(0,s.jsx)(o.em,{children:"Direct use of commands returning pointers"}),'".']}),"\n"]}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/form-load",children:"FORM LOAD"})}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"940"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return t},a:function(){return d}});var n=r(667294);let s={},a=n.createContext(s);function d(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);