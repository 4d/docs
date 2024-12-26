"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78808"],{374912:function(e,o,r){r.r(o),r.d(o,{metadata:()=>s,contentTitle:()=>t,default:()=>c,assets:()=>i,toc:()=>m,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/form-get-names","title":"FORM GET NAMES","description":"FORM GET NAMES ( {tabela ;} arrayNome {; filtro {; marcador}}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-get-names.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-names","permalink":"/docs/pt/commands/form-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-names.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-get-names","title":"FORM GET NAMES","slug":"/commands/form-get-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM EDIT","permalink":"/docs/pt/commands/form-edit"},"next":{"title":"METHOD Get attribute","permalink":"/docs/pt/commands/method-get-attribute"}}'),n=r("785893"),a=r("250065");let d={id:"form-get-names",title:"FORM GET NAMES",slug:"/commands/form-get-names",displayed_sidebar:"docs"},t=void 0,i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"FORM GET NAMES"})," ( {",(0,n.jsx)(o.em,{children:"tabela"})," ;} ",(0,n.jsx)(o.em,{children:"arrayNome"})," {; ",(0,n.jsx)(o.em,{children:"filtro"})," {; ",(0,n.jsx)(o.em,{children:"marcador"}),"}}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tabela"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Referencia de tabela"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"arrayNome"}),(0,n.jsx)(o.td,{children:"Text array"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Arrays de nomes de formul\xe1rio"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"filtro"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Filtro de nomes"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"marcador"}),(0,n.jsx)(o.td,{children:"Real"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Marcador para vers\xe3o m\xednima a devolver"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Novo valor"}),(0,n.jsx)(o.td,{}),(0,n.jsx)(o.td,{})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"*"}),(0,n.jsx)(o.td,{children:"Operador"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Se passa = o comando \xe9 aplicado a base local quando \xe9 executado desde um componente(par\xe2metro ignorado fora deste contexto)"})]})]})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando ",(0,n.jsx)(o.strong,{children:"FORM GET NAMES"})," enche o array ",(0,n.jsx)(o.em,{children:"arrayNoms"})," com os nomes dos formul\xe1rios da aplica\xe7\xe3o."]}),"\n",(0,n.jsxs)(o.p,{children:["Se o par\xe2metro ",(0,n.jsx)(o.em,{children:"tabela"})," passa, o comando devolve os nomes dos formul\xe1rios tabela associados a esta tabela. Caso este par\xe2metro se omite, o comando devolve os nomes dos formul\xe1rios projeto da base."]}),"\n",(0,n.jsxs)(o.p,{children:["Pode limitar esta lista de formul\xe1rios passando uma cadeia de compara\xe7\xe3o no par\xe2metro ",(0,n.jsx)(o.em,{children:"filtro"}),': neste caso, somente se devolvem os formul\xe1rios cujos nomes correspondem ao filtro. Pode utilizar o caractere @ para definir os filtros de tipo "come\xe7a por", "termina em" ou "cont\xe9m". Se passa uma cadeia vazia, se ignora o par\xe2metro ',(0,n.jsx)(o.em,{children:"filtro"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Tamb\xe9m pode limitar a lista de formul\xe1rios utilizando o par\xe2metro opcional   ",(0,n.jsx)(o.em,{children:"marcador"}),", que permite limitar os formul\xe1rios devolvidos em   ",(0,n.jsx)(o.em,{children:"arrayNome"})," aos que foram modificados depois de um tempo determinado. Como parte de um sistema de controle de vers\xf5es, este par\xe2metro lhe permite atualizar s\xf3 os formul\xe1rios que foram modificados desde a \xfaltima c\xf3pia de seguran\xe7a."]}),"\n",(0,n.jsxs)(o.p,{children:["Este princ\xedpio funciona desta forma: 4D mant\xe9m um contador interno das modifica\xe7\xf5es dos recursos da base. Como os formul\xe1rios s\xe3o recursos, cada vez que um formul\xe1rio \xe9 criado ou salvo, o contador \xe9 incrementado.",(0,n.jsx)(o.br,{}),"\nSe passar o par\xe2metro marcador, o comando devolve, em ",(0,n.jsx)(o.em,{children:"arrayNome"}),", s\xf3 os formul\xe1rios que correspondem aos valores dos marcadores superiores ou iguais ao ",(0,n.jsx)(o.em,{children:"marcador"}),". Al\xe9m disso, se passar uma vari\xe1vel no marcador, o comando devolve o novo valor do contador de modifica\xe7\xe3o, ou seja, o mais alto, nesta vari\xe1vel. Pode guardar este valor e utilizar ele na pr\xf3xima chamada ao comando ",(0,n.jsx)(o.strong,{children:"FORM GET NAMES"})," para recuperar s\xf3 os formul\xe1rios novos ou modificados."]}),"\n",(0,n.jsxs)(o.p,{children:["Se o comando se executa desde um componente, devolve por padr\xe3o os nomes dos formul\xe1rios projeto do componente. Se o par\xe2metro passa ",(0,n.jsx)(o.em,{children:"*"}),", o array conter\xe1 os formul\xe1rios da base local."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," Os formul\xe1rios localizados no lixo n\xe3o s\xe3o listados."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(o.p,{children:"Exemplos de usos t\xedpicos:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// Lista de todos os formul\xe1rios projeto da base\n\xa0FORM GET NAMES(arr_Names)\n\xa0\n\xa0\xa0// Lista de formul\xe1rios da tabela [Empregados]\n\xa0FORM GET NAMES([Empregados] ;arr_Names)\n\xa0\n\xa0\xa0// Lista de formul\xe1rios "input" da tabela [Empregados]\n\xa0FORM GET NAMES([Empregados] ;arr_Names;"input_@")\n\xa0\n\xa0\xa0// Lista de formul\xe1rios projeto espec\xedficos da base\n\xa0FORM GET NAMES(arr_Names;"dialogue_@")\n\xa0\n\xa0\xa0// Lista todos os formul\xe1rios projeto que foram modificados desde a \xfaltima sincroniza\xe7\xe3o\n\xa0\xa0// vMarker cont\xe9m um valor num\xe9rico\n\xa0FORM GET NAMES(arr_Names;"";vMarker)\n\xa0\n\xa0\xa0// Lista de formul\xe1rios tabela desde um componente\n\xa0\xa0// Um ponteiro \xe9 necess\xe1rio porque o nome da tabela \xe9 desconhecido\n\xa0FORM GET NAMES(tablePtr->;arr_Names;*)\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.em,{children:"Formul\xe1rios"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.a,{href:"/docs/pt/commands/method-get-paths-form",children:"METHOD GET PATHS FORM"})]}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"1167"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return t},a:function(){return d}});var s=r(667294);let n={},a=s.createContext(n);function d(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);