"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23412],{534941:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var r=o(474848),a=o(28453);const s={id:"new-object",title:"New object",slug:"/commands/new-object",displayed_sidebar:"docs"},d=void 0,t={id:"commands-legacy/new-object",title:"New object",description:"New object {( propriedade ; valor {; propriedade2 ; valor2 ; ... ; propriedadeN ; valorN} )} -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-object.md",sourceDirName:"commands-legacy",slug:"/commands/new-object",permalink:"/docs/pt/commands/new-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"new-object",title:"New object",slug:"/commands/new-object",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"OBJECT SET VISIBLE",permalink:"/docs/pt/commands/object-set-visible"},next:{title:"New shared object",permalink:"/docs/pt/commands/new-shared-object"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"New object"})," {( ",(0,r.jsx)(n.em,{children:"propriedade"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," {; ",(0,r.jsx)(n.em,{children:"propriedade2"})," ; ",(0,r.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"propriedadeN"})," ; ",(0,r.jsx)(n.em,{children:"valorN"}),"} )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"propriedade"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome da propriedade a criar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor da propriedade"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Novo objeto linguagem"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"New object"})," cria um novo objeto vazio ou pr\xe9-recheado e devolve sua refer\xeancia."]}),"\n",(0,r.jsxs)(n.p,{children:["Se n\xe3o passar nenhum par\xe2metro, ",(0,r.jsx)(n.strong,{children:"New object"})," cria um objeto vazio e devolve sua refer\xeancia. Deve atribuir esta refer\xeancia a uma vari\xe1vel 4D declarada com ",(0,r.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," ou um campo objeto 4D."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," ",(0,r.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," declara uma vari\xe1vel de tipo ",(0,r.jsx)(n.a,{href:"#",title:"Estruturas de dados como objetos 4D nativos",children:"Objeto"})," mas n\xe3o cria nenhum objeto."]}),"\n",(0,r.jsxs)(n.p,{children:["Opcionalmente, pode prefixar o novo objeto passando um ou v\xe1rios pares ",(0,r.jsx)(n.em,{children:"propriedade"}),"/",(0,r.jsx)(n.em,{children:"valor"})," como par\xe2metros:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"propriedade"}),", passe a etiqueta da propriedad a criar. Note que o par\xe2metro ",(0,r.jsx)(n.em,{children:"propriedade \xe9"})," sens\xedvel a mai\xfasculas e min\xfasculas."]}),"\n",(0,r.jsxs)(n.li,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"valor"}),", passe o valor que deseja definir para a propriedade. V\xe1rios tipos de dados s\xe3o suportados. :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"N\xfamero (real, inteiro...) Valores num\xe9ricos s\xe3o guardados como reais"}),"\n",(0,r.jsx)(n.li,{children:"texto"}),"\n",(0,r.jsx)(n.li,{children:"booleano"}),"\n",(0,r.jsx)(n.li,{children:"ponteiro"}),"\n",(0,r.jsx)(n.li,{children:"blog (4D.Blob)"}),"\n",(0,r.jsx)(n.li,{children:"data"}),"\n",(0,r.jsx)(n.li,{children:"hora"}),"\n",(0,r.jsx)(n.li,{children:"null"}),"\n",(0,r.jsx)(n.li,{children:"imagem"}),"\n",(0,r.jsx)(n.li,{children:"objeto"}),"\n",(0,r.jsx)(n.li,{children:"cole\xe7\xe3o."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Note que:"}),"\n",(0,r.jsxs)(n.p,{children:["Se passar um ponteiro, \xe9 mantido como tal e avaliado quando usar comandos como ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/json-stringify",children:"JSON Stringify"}),","]}),"\n",(0,r.jsxs)(n.p,{children:['datas s\xe3o armazenadas como "yyyy-mm-dd" ou strings com o formato "YYYY-MM-DDTHH:mm:ss.SSSZ", de acordo com as configura\xe7\xf5es de banco de dados "dates inside objects" (veja ',(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidade"}),"). Quando converter datas em texto antes do armazenamento no objeto, por padr\xe3o o programa usa a hora local. Pode modificar esse comportamento usando o seletor Dates inside objects ou o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Se passar uma hora, \xe9 armazenada como o n\xfamero de milissegundos (Real)."}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Este comando pode criar objeto vazios ou cheios:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $obj1 : Object\n\xa0var $obj2 : Object\n\xa0var $obj3 : Object\n\xa0$obj1:=New object\n\xa0\xa0// $obj1 = {}\n\xa0$obj2:=New object("name";"Smith")\n\xa0\xa0// $obj2 = {name:Smith}\n\xa0$obj3:=New object("name";"Smith";"age";40)\n\xa0\xa0// $obj3 = {name:Smith,age:40}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Cria um novo objeto com um objeto como valor de par\xe2metro:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children;$Contact : Object\n\xa0\n\xa0\xa0//Criar um array objeto\n\xa0ARRAY TEXT($arrChildren;3)\n\xa0$arrChildren{1}:="Richard"\n\xa0$arrChildren{2}:="Susan"\n\xa0$arrChildren{3}:="James"\n\xa0OB SET ARRAY($Children;"Children";$arrChildren)\n\xa0\n\xa0\xa0//Inicializar o objeto\n\xa0$Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)\n\xa0\xa0// $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(n.p,{children:"Este comando \xe9 \xfatil para passar objetos como par\xe2metros:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $measures : Object\n\xa0$measures:=Database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsx)(n.p,{children:"Com este comando, pode f\xe1cilmente manejar objetos em loops:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY OBJECT($refs;0)\n\xa0var vCounter : Integer\n\xa0\n\xa0For(vCounter;1;100)\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))\n\xa0End for\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/new-shared-object",children:"New shared object"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>t});var r=o(296540);const a={},s=r.createContext(a);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);