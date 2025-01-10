"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25390"],{204792:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/storage","title":"Storage","description":"Storage  : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/storage.md","sourceDirName":"commands-legacy","slug":"/commands/storage","permalink":"/docs/pt/commands/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstorage.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"storage","title":"Storage","slug":"/commands/storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Values","permalink":"/docs/pt/commands/ob-values"},"next":{"title":"On a Series","permalink":"/docs/pt/category/on-a-series"}}'),n=r("785893"),t=r("250065");let a={id:"storage",title:"Storage",slug:"/commands/storage",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Storage"}),"  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Resultado"}),(0,n.jsx)(o.td,{children:"Object"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Cat\xe1logo de objetos compartidos e cole\xe7\xf5es compartidas registrados"})]})})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O m\xe9todo ",(0,n.jsx)(o.strong,{children:"Storage"})," devolve um cat\xe1logo de objetos compartidos registrados ou cole\xe7\xf5es compartidas dispon\xedveis para todos os processos na m\xe1quina ou componente atual."]}),"\n",(0,n.jsxs)(o.p,{children:["O cat\xe1logo devolvido por ",(0,n.jsx)(o.strong,{children:"Storage"})," \xe9 criado automaticamente por 4D e est\xe1 dispon\xedvel para todos os processos do banco de dados, inclu\xeddos os processos preemptivos. Existe um cat\xe1logo ",(0,n.jsx)(o.strong,{children:"Storage"})," por m\xe1quina e componente: em uma aplica\xe7\xe3o cliente/servidor, h\xe1 um objeto compartido ",(0,n.jsx)(o.strong,{children:"Storage"})," no servidor e um objeto compartido ",(0,n.jsx)(o.strong,{children:"Storage"})," em cada aplica\xe7\xe3o 4D remota; se o banco de dados usar componentes, h\xe1 um objeto ",(0,n.jsx)(o.strong,{children:"Storage"})," por componente."]}),"\n",(0,n.jsxs)(o.p,{children:["Utilize o cat\xe1logo ",(0,n.jsx)(o.strong,{children:"Storage"})," para fazer refer\xeancia a qualquer objeto compartido ou cole\xe7\xe3o compartida que deseje utilizar desde qualquer processo preemptivo ou padr\xe3o. Para registrar um objeto compartido ou uma cole\xe7\xe3o compartida no cat\xe1logo, agregue su a refer\xeancia ao objeto compartido devolvido por ",(0,n.jsx)(o.strong,{children:"Storage"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Como o cat\xe1logo devolvido por ",(0,n.jsx)(o.strong,{children:"Storage"})," \xe9 um o",(0,n.jsx)(o.em,{children:"bjeto compartido"}),", segue as regras descritas na se\xe7\xe3o ",(0,n.jsx)(o.em,{children:"Objetos compartidos e Cole\xe7\xf5es compartidas"}),", mas com algumas caracter\xedsticas espec\xedficas:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Este objeto s\xf3 pode conter objetos compartidos e cole\xe7\xf5es compartidas. Tentar agregar outros tipos de valores (objetos n\xe3o compartidos ou cole\xe7\xf5es, nulos, valores escalares) gerar\xe1 um erro."}),"\n",(0,n.jsxs)(o.li,{children:["Para agregar uma propriedade a este objeto deve estar rodeado pela estrutura ",(0,n.jsx)(o.em,{children:"Use...End use"}),", do contr\xe1rio, se devolve um erro. Entretanto, \xe9 poss\xedvel ler um atributo fora de uma estrutura ",(0,n.jsx)(o.em,{children:"Use...End use"}),"."]}),"\n",(0,n.jsxs)(o.li,{children:["Quando estiver rodeado pela estrutura ",(0,n.jsx)(o.em,{children:"Use...End use"}),", os atributos de primeiro n\xedvel de ",(0,n.jsx)(o.strong,{children:"Storage"})," est\xe3o bloqueados para outros processos."]}),"\n",(0,n.jsxs)(o.li,{children:["Diferente dos objetos compartidos padr\xe3o, o objeto devolvido por ",(0,n.jsx)(o.strong,{children:"Storage"})," NAO compartir\xe1 seu ",(0,n.jsx)(o.em,{children:"identificador de bloqueio"})," com objetos compartidos ou cole\xe7\xf5es agregadas como atributos (para mais informa\xe7\xe3o, consulte ",(0,n.jsx)(o.em,{children:"Identificador de bloqueio (Locking identifier)"}),")."]}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsxs)(o.p,{children:["Una pr\xe1tica comum poderia ser inicializar o objeto ",(0,n.jsx)(o.strong,{children:"Storage"})," em :"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.counters:=New shared object("customers";0;"invoices";0)\n\xa0End use\n'})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,n.jsxs)(o.p,{children:["Este exemplo mostra uma forma padr\xe3o de estabelecer valores de ",(0,n.jsx)(o.strong,{children:"Armazenamento"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0Use(Storage)\n\xa0\xa0\xa0\xa0Storage.mydata:=New shared object\n\xa0\xa0\xa0\xa0Use(Storage.mydata)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.mydata.prop1:="Smith"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.mydata.prop2:=100\n\xa0\xa0\xa0\xa0End use\n\xa0End use\n'})}),"\n",(0,n.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Storage"})," permite implementar um singleton com uma ",(0,n.jsx)(o.em,{children:"inicializa\xe7\xe3o lenta"}),", como \xe9 mostrada no exemplo abaixo."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota:"})," para mais informa\xe7\xe3o sobre os padr\xf5es de singleton, pode consultar esta p\xe1gina de ",(0,n.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Singleton%5Fpattern",children:"Wikipedia"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0var $0 : Integer\n\xa0var $counterValue : Integer\n\xa0var counter : Object\xa0//cria uma refer\xeancia ao contador para o processo\n\xa0\n\xa0If(counter=Null)\xa0//Se esta refer\xeancia for nula, obtenha if de Storage\n\xa0\xa0\xa0\xa0Use(Storage)\xa0// O uso de armazenamento s\xf3 \xe9 necess\xe1rio uma vez!\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Storage.counter=Null)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Storage.counter:=New shared object("operation";0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0counter:=Storage.counter\xa0//Obter a refer\xeancia de objeto compartido contador\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n\xa0Use(counter)\xa0//use diretamente o contador de objetos compartidos (n\xe3o necessita usar Storage!)\n\xa0\xa0\xa0\xa0counter.operation:=counter.operation+1\n\xa0\xa0\xa0\xa0$counterValue:=counter.operation\n\xa0End use\n\xa0\n\xa0$0:=$counterValue\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"Objetos compartidos e Cole\xe7\xf5es compartidas"})}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"1525"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return a}});var s=r(667294);let n={},t=s.createContext(n);function a(e){let o=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);