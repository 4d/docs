"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80376"],{506575:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>n,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/method-get-paths-form","title":"METHOD GET PATHS FORM","description":"METHOD GET PATHS FORM ( {aTabela ;} arrRotas {; filtro}{; marcador}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-paths-form.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-paths-form","permalink":"/docs/pt/20-R8/commands/method-get-paths-form","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-paths-form.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-paths-form","title":"METHOD GET PATHS FORM","slug":"/commands/method-get-paths-form","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET PATHS","permalink":"/docs/pt/20-R8/commands/method-get-paths"},"next":{"title":"METHOD OPEN PATH","permalink":"/docs/pt/20-R8/commands/method-open-path"}}'),a=s("785893"),d=s("250065");let n={id:"method-get-paths-form",title:"METHOD GET PATHS FORM",slug:"/commands/method-get-paths-form",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"METHOD GET PATHS FORM"})," ( {",(0,a.jsx)(o.em,{children:"aTabela"})," ;} ",(0,a.jsx)(o.em,{children:"arrRotas"})," {; ",(0,a.jsx)(o.em,{children:"filtro"}),"}{; ",(0,a.jsx)(o.em,{children:"marcador"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"aTable"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Refer\xeancia de tabela"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"arrRotas"}),(0,a.jsx)(o.td,{children:"Text array"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Arrays de rotas e nomes dos m\xe9todos"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"filtro"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Filtros de nomes"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"marcador"}),(0,a.jsx)(o.td,{children:"Real"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Valor m\xednimo de marcador"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Novo valor atual"}),(0,a.jsx)(o.td,{}),(0,a.jsx)(o.td,{})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Se passado = o comando se aplica \xe0 base local quando se executa desde um componente (par\xe2metro ignorado fora deste contexto)"})]})]})]}),"\n",(0,a.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando ",(0,a.jsx)(o.strong,{children:"METHOD GET PATHS FORM"})," enche o array ",(0,a.jsx)(o.em,{children:"arrRotas"})," com as rotas de acesso internas e os nomes dos m\xe9todos de todos os objetos dos formul\xe1rios assim como tamb\xe9m dos m\xe9todos formul\xe1rio. Os m\xe9todos formul\xe1rio se etiquetam {formMethod}."]}),"\n",(0,a.jsx)(o.p,{children:"Apenas os objetos que contem c\xf3digo s\xe3o listados. Por exemplo, os bot\xf5es que est\xe3o associados somente com uma a\xe7\xe3o padr\xe3o n\xe3o s\xe3o retornados."}),"\n",(0,a.jsxs)(o.p,{children:["Se voc\xea passar o par\xe2metro ",(0,a.jsx)(o.em,{children:"aTabela"}),", o comando retorna os objetos dos formul\xe1rios de tabela associados a esta tabela. Se voc\xea omitir esse par\xe2metro, o comando retorna os objetos de formul\xe1rios do projeto base."]}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea pode limitar esta lista de formul\xe1rios passando uma cadeia de compara\xe7\xe3o no par\xe2metro ",(0,a.jsx)(o.em,{children:"filtro"}),', neste caso, somente os formul\xe1rios cujos nomes correspondam ao filtro ser\xe3o retornados. Voc\xea pode usar o caractere @ para definir filtros de tipo "come\xe7a por", "termina em" ou "cont\xe9m". Se voc\xea passar uma cadeia vazia de caracteres, o par\xe2metro ',(0,a.jsx)(o.em,{children:"filtro"})," \xe9 ignorado."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro de ",(0,a.jsx)(o.em,{children:"marcador"})," permite recuperar m\xe9todos de modifica\xe7\xe3o de rotas de um ponto espec\xedfico. Como parte de um sistema de controle de vers\xe3o, isso significa que voc\xea pode atualizar apenas os m\xe9todos alterados desde o \xfaltimo backup.",(0,a.jsx)(o.br,{}),"\nA opera\xe7\xe3o \xe9 a seguinte: 4D mant\xe9m um contador de m\xe9todos de modifica\xe7\xe3o. Cada vez que um m\xe9todo \xe9 criado ou torna-se a manter, esse contador \xe9 incrementado e seu valor atual \xe9 armazenado no marcador interno do m\xe9todo.",(0,a.jsx)(o.br,{}),"\nSe voc\xea passar o par\xe2metro ",(0,a.jsx)(o.em,{children:"marcador"}),", o comando retornar\xe1 apenas os m\xe9todos cuja pontua\xe7\xe3o for maior ou igual ao valor passado neste par\xe2metro. Al\xe9m disso, o comando retorna em ",(0,a.jsx)(o.em,{children:"marcador"})," o novo valor atual do contador de modifica\xe7\xe3o, ou seja, o valor mais alto. Se voc\xea salvar esse valor, pode voc\xea pode pass\xe1-lo na pr\xf3xima vez que este comando for chamado assim que voc\xea recupera apenas m\xe9todos novos ou modificados."]}),"\n",(0,a.jsxs)(o.p,{children:["Se voc\xea executar esse comando em um componente, retorna por defeito as rotas dos m\xe9todos de componente. Se o par\xe2metro ",(0,a.jsx)(o.em,{children:"*"})," passa, a matriz conter\xe1 as rotas dos m\xe9todos da base local."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota"}),": o comando n\xe3o lista os objetos de formul\xe1rios herdados ou dos sub-formul\xe1rios."]}),"\n",(0,a.jsx)(o.p,{children:'Se o comando detecta um nome de m\xe9todo duplicado, \xe9 gerado o erro -9802 ("Object path not unique"). Neste caso, \xe9 aconselh\xe1vel utilizar o CSM com o prop\xf3sito de verificar a estrutura da base de dados.'}),"\n",(0,a.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(o.p,{children:'Lista de todos os objetos do formul\xe1rio "input" da tabela [Empregados]. Note que os m\xe9todos formul\xe1rio tabela (e os m\xe9todos formul\xe1rio projeto) se processam como objetos que pertencem ao formul\xe1rio:'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM([Employees];arrPaths;"input")\n\xa0\xa0// Conte\xfado de arrPaths (por exemplo)\n\xa0\xa0// [tableForm]/input/{formMethod} -> M\xe9todo formul\xe1rio\n\xa0\xa0// [tableForm]/input/bOK -> M\xe9todo objeto\n\xa0\xa0// [tableForm]/input/bCancel -> M\xe9todo objeto\n'})}),"\n",(0,a.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(o.p,{children:'Lista dos objetos do formul\xe1rio projeto "dial":'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM(arrPaths;"dial")\n'})}),"\n",(0,a.jsx)(o.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(o.p,{children:'Lista de todos os objetos dos formul\xe1rios "input" da tabela [Empregados] a partir de um componente:'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM(([Empregados];arrPaths;"input@";*)\n'})}),"\n",(0,a.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"/docs/pt/20-R8/commands/form-get-names",children:"FORM GET NAMES"})}),"\n",(0,a.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"1168"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return n}});var r=s(667294);let a={},d=r.createContext(a);function n(e){let o=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);