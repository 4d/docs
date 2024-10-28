"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37412],{69419:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>t,toc:()=>i});var s=r(474848),n=r(28453);const d={id:"new-shared-object",title:"New shared object",slug:"/commands/new-shared-object",displayed_sidebar:"docs"},a=void 0,t={id:"commands-legacy/new-shared-object",title:"New shared object",description:"New shared object {( propriedade ; valor {; propriedade2 ; valor2 ; ... ; propriedadeN ; valorN} )} -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/new-shared-object.md",sourceDirName:"commands-legacy",slug:"/commands/new-shared-object",permalink:"/docs/pt/commands/new-shared-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-shared-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"new-shared-object",title:"New shared object",slug:"/commands/new-shared-object",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"New object",permalink:"/docs/pt/commands/new-object"},next:{title:"OB Class",permalink:"/docs/pt/commands/ob-class"}},c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"New shared object"})," {( ",(0,s.jsx)(o.em,{children:"propriedade"})," ; ",(0,s.jsx)(o.em,{children:"valor"})," {; ",(0,s.jsx)(o.em,{children:"propriedade2"})," ; ",(0,s.jsx)(o.em,{children:"valor2"})," ; ... ; ",(0,s.jsx)(o.em,{children:"propriedadeN"})," ; ",(0,s.jsx)(o.em,{children:"valorN"}),"} )} -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"propriedade"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de propriedade a criar"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"valor"}),(0,s.jsx)(o.td,{children:"Text, Date, Boolean, Pointer, Number, Object"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Valor da propriedade"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Object"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Novo objeto compartido"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"New shared object"})," cria um novo objeto compartido vazio ou pr\xe9-preenchido e devolve sua refer\xeancia. Para agregar ou editar uma propriedade a este objeto deve estar rodeado pela estrutura ",(0,s.jsx)(o.em,{children:"Use...End use"}),", do contr\xe1rio, se devolve um erro. Entretanto \xe9 poss\xedvel ler uma propriedade fora de uma estrutura ",(0,s.jsx)(o.em,{children:"Use...End use"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," para mais informa\xe7\xe3o sobre objetos compartidos, consulte a p\xe1gina ",(0,s.jsx)(o.em,{children:"Objetos compartidos e Cole\xe7\xf5es compartidas"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se n\xe3o passar nenhum par\xe2metro, ",(0,s.jsx)(o.strong,{children:"New shared object"})," cria um objeto vazio e devolve sua refer\xeancia. Deve assignar esta refer\xeancia a uma vari\xe1vel 4D declarada com o comando ",(0,s.jsx)(o.a,{href:"c-object.md",children:"C_OBJECT"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," ",(0,s.jsx)(o.a,{href:"c-object.md",children:"C_OBJECT"})," declara uma vari\xe1vel de tipo ",(0,s.jsx)(o.a,{href:"#",title:"Estruturas de dados como objetos 4D nativos",children:"Objeto"})," mas n\xe3o \xe9 criado um objeto."]}),"\n",(0,s.jsxs)(o.p,{children:["Opcionalmente, pode preencher o novo objeto passando um ou v\xe1rios pares de ",(0,s.jsx)(o.em,{children:"propriedad"}),"e/",(0,s.jsx)(o.em,{children:"valor"})," como par\xe2metros:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["No par\xe2metro ",(0,s.jsx)(o.em,{children:"propriedad"}),"e, passe a etiqueta da propriedad que se criar\xe1 (at\xe9 255 caracteres). Lembre que o par\xe2metro de propriedade \xe9 sens\xedvel a mai\xfasculas e min\xfasculas"]}),"\n",(0,s.jsxs)(o.li,{children:[".No par\xe1metro ",(0,s.jsx)(o.em,{children:"valor"}),", passe o valor que desejar definir para a propriedade. Os objetos compartidos s\xf3 podem conter valores dos tipos abaixo:\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"n\xfamero (real, inteiro longo...) Os valores num\xe9ricos sempre s\xe3o armazenados como reais."}),"\n",(0,s.jsx)(o.li,{children:"texto"}),"\n",(0,s.jsx)(o.li,{children:"booleano"}),"\n",(0,s.jsx)(o.li,{children:"data"}),"\n",(0,s.jsx)(o.li,{children:"hora (armazenado como n\xfamero de milissegundos - real)"}),"\n",(0,s.jsx)(o.li,{children:"null"}),"\n",(0,s.jsx)(o.li,{children:"objeto compartido(*)"}),"\n",(0,s.jsxs)(o.li,{children:["cole\xe7\xe3o compartida(*)",(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.strong,{children:"Nota:"})," diferente dos objetos padr\xe3o (n\xe3o compartidos), os objetos compartidos n\xe3o s\xe3o compat\xedveis com imagens, ponteiros e objetos ou cole\xe7\xf5es que n\xe3o s\xe3o compartidos."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["(*) Quando agregar um objeto ou uma cole\xe7\xe3o compartido a um objeto compartido, compartem o mesmo identificador de bloqueio. Para saber mais sobre este ponto, consulte ",(0,s.jsx)(o.em,{children:"Identificador de bloqueio (Locking identifier)"}),"."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"Se quiser criar um novo objeto compartido pr\xe9-preenchido:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $contact : Object\n\xa0$contact:=New shared object("name";"Smith";"firstname";"John")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Se quiser criar e modificar um objeto compartido. A estrutura deve ser chamada para este objeto:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $s_obj : Object\n\xa0$s_obj:=New shared object("prop1";"alpha")\n\xa0Use($s_obj)\n\xa0\xa0\xa0\xa0$s_obj.prop1:="omega"\n\xa0End use\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/commands/new-object",children:"New object"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"new-shared-collection.md",children:"New shared collection"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.em,{children:"Objetos compartidos e Cole\xe7\xf5es compartidas"})]})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>t});var s=r(296540);const n={},d=s.createContext(n);function a(e){const o=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(d.Provider,{value:o},e.children)}}}]);