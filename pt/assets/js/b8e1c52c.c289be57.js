"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[86022],{921311:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=n(474848),l=n(28453);const c={id:"collection",title:"Collection"},i=void 0,a={id:"Concepts/collection",title:"Collection",description:"Cole\xe7\xf5es s\xe3o listas ordenadas de valores de tipos diferentes ou n\xe3o (texto, n\xfamero, objeto, booleano, cole\xe7\xe3o ou null).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/pt/20/Concepts/collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Par\xe2metros",permalink:"/docs/pt/20/Concepts/boolean"},next:{title:"Date",permalink:"/docs/pt/20/Concepts/date"}},r={},d=[{value:"Instancia\xe7\xe3o",id:"instancia\xe7\xe3o",level:2},{value:"comando <code>New collection</code>",id:"comando-new-collection",level:3},{value:"operador <code>[]</code>",id:"operador-",level:3},{value:"Cole\xe7\xe3o regular ou partilhada",id:"cole\xe7\xe3o-regular-ou-partilhada",level:3},{value:"Fun\xe7\xf5es de Collection",id:"fun\xe7\xf5es-de-collection",level:2},{value:"par\xe2metro caminoPropriedade",id:"par\xe2metro-caminopropriedade",level:3},{value:"Indefinido",id:"indefinido",level:2}];function t(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Cole\xe7\xf5es s\xe3o listas ordenadas de valores de tipos diferentes ou n\xe3o (texto, n\xfamero, objeto, booleano, cole\xe7\xe3o ou null)."}),"\n",(0,s.jsxs)(o.p,{children:["As vari\xe1veis de tipo ollection s\xe3o gerenciadas usando a ",(0,s.jsx)(o.a,{href:"/docs/pt/20/Concepts/object#properties",children:"nota\xe7\xe3o de objeto"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Para acessar a um elemento de cole\xe7\xe3o, \xe9 necess\xe1rio passar o n\xfamero do elemento dentro de par\xeanteses rectos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,s.jsx)(o.p,{children:"Pode passar toda express\xe3o 4D v\xe1lida que devolva um inteiro positivo na express\xe3o. Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" myCollection[5]  //aceso ao 6\xba elemento da cole\xe7\xe3o\n myCollection[$var]\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Aten\xe7\xe3o:"})," os elementos da cole\xe7\xe3o est\xe3o numerados desde 0."]}),"\n",(0,s.jsx)(o.p,{children:"Pode atribuir um valor a um elemento da cole\xe7\xe3o ou obter o valor de um elemento da cole\xe7\xe3o utilizando a nota\xe7\xe3o de objetos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' myCol[10]:="My new element"\n $myVar:=myCol[0]\n'})}),"\n",(0,s.jsx)(o.p,{children:"Se atribuir um \xedndice de elemento que ultrapasse o \xfaltimo elemento existente da cole\xe7\xe3o, a cole\xe7\xe3o se redimensiona automaticamente e a todos os novos elementos intermedi\xe1rios se lhes atribui um valor nulo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,s.jsx)(o.h2,{id:"instancia\xe7\xe3o",children:"Instancia\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["As cole\xe7\xf5es devem ter sido inicializadas, por exemplo utilizando o comando ",(0,s.jsx)(o.code,{children:"New collection"}),", do contr\xe1rio ao tentar ler ou modificar seus elementos se gerar\xe1 um erro de sintaxe."]}),"\n",(0,s.jsx)(o.p,{children:"A instancia\xe7\xe3o da colec\xe7\xe3o pode ser feita de uma das seguintes formas:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["utilizando o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/20/API/CollectionClass#new-collection",children:(0,s.jsx)(o.code,{children:"New collection"})}),","]}),"\n",(0,s.jsxs)(o.li,{children:["utilizando o operador ",(0,s.jsx)(o.code,{children:"[]"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["V\xe1rios comandos e fun\xe7\xf5es 4D retornam colec\xe7\xf5es, por exemplo ",(0,s.jsx)(o.a,{href:"https://doc.4d.com/4dv19R/help/command/en/page1713.html",children:(0,s.jsx)(o.code,{children:"Get Monitored Activity"})})," ou ",(0,s.jsx)(o.a,{href:"/docs/pt/20/API/CollectionClass#copy",children:(0,s.jsx)(o.code,{children:"collection.copy"})}),". Neste caso, n\xe3o \xe9 necess\xe1rio instanciar explicitamente a cole\xe7\xe3o, a linguagem 4D f\xe1-lo por si."]})}),"\n",(0,s.jsxs)(o.h3,{id:"comando-new-collection",children:["comando ",(0,s.jsx)(o.code,{children:"New collection"})]}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.a,{href:"/docs/pt/20/API/CollectionClass#new-collection",children:(0,s.jsx)(o.code,{children:"New collection"})})," cria uma nova colec\xe7\xe3o vazia ou pr\xe9-preenchida e devolve a sua refer\xeancia."]}),"\n",(0,s.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" var $colVar : Collection //cria\xe7\xe3o de uma vari\xe1vel 4D de tipo cole\xe7\xe3o\n $colVar:=New collection //initializa\xe7\xe3o da cole\xe7\xe3o e atribui\xe7\xe3o \xe0 vari\xe1vel 4D\n"})}),"\n",(0,s.jsxs)(o.h3,{id:"operador-",children:["operador ",(0,s.jsx)(o.code,{children:"[]"})]}),"\n",(0,s.jsxs)(o.p,{children:["O operador ",(0,s.jsx)(o.code,{children:"[]"})," permite-lhe criar uma colec\xe7\xe3o ",(0,s.jsx)(o.strong,{children:"literal"}),". Um literal de cole\xe7\xe3o \xe9 uma lista de zero ou mais express\xf5es, cada uma das quais representa um elemento de cole\xe7\xe3o, entre colchetes (",(0,s.jsx)(o.code,{children:"[]"}),"). Quando cria uma cole\xe7\xe3o utilizando um literal de cole\xe7\xe3o, esta \xe9 instanciada com os valores especificados como seus elementos e o seu comprimento \xe9 definido para o n\xfamero de argumentos especificados."]}),"\n",(0,s.jsxs)(o.p,{children:["J\xe1 que qualquer elemento \xe9 considerado uma express\xe3o, pode criar sub-cole\xe7\xf5es utilizando ",(0,s.jsx)(o.code,{children:"[]"})," em elementos.  Tamb\xe9m \xe9 poss\xedvel criar e referenciar literais de objectos ****."]}),"\n",(0,s.jsx)(o.p,{children:"Se um elemento for indefinido, aparecer\xe1 como Nulo na cole\xe7\xe3o."}),"\n",(0,s.jsx)(o.p,{children:"Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'var $col1; $col2; $users : Collection\n$col1:=[] //colec\xe7\xe3o vazia\n$col2:=[1;2;3;4;5;6] //colec\xe7\xe3o de n\xfameros\n//colec\xe7\xe3o de objectos\n$users:=[{name: "Alice"; \\\n    height: 183; \\\n    eyecolor: "hazel"; \\\n    id: $col2[5]\\\n    }; \\\n    {name: "Bob"; \\\n    height: 172; \\\n    eyecolor: "blue"\\\n}]\n'})}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Se criar um literal de cole\xe7\xe3o que contenha um \xfanico elemento, certifique-se de que n\xe3o utiliza um nome correspondente a um nome de tabela existente, caso contr\xe1rio a sintaxe da tabela ",(0,s.jsx)(o.code,{children:"[tableName]"})," ter\xe1 prioridade."]})}),"\n",(0,s.jsx)(o.h3,{id:"cole\xe7\xe3o-regular-ou-partilhada",children:"Cole\xe7\xe3o regular ou partilhada"}),"\n",(0,s.jsx)(o.p,{children:"Pode criar dois tipos de cole\xe7\xf5es:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["colec\xe7\xf5es regulares (n\xe3o partilhadas), utilizando o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/20/API/CollectionClass#new-collection",children:(0,s.jsx)(o.code,{children:"Nova colec\xe7\xe3o"})})," . Essas cole\xe7\xf5es podem ser editadas sem qualquer controle de acesso espec\xedfico mas n\xe3o podem ser compartilhadas entre processos."]}),"\n",(0,s.jsxs)(o.li,{children:["cole\xe7\xf5es compartidas, utilizando o comando ",(0,s.jsx)(o.code,{children:"New shared collection"}),". Essas cole\xe7\xf5es podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by ",(0,s.jsx)(o.a,{href:"/docs/pt/20/Concepts/shared#useend-use",children:(0,s.jsx)(o.code,{children:"Use... End use"})})," structures."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Para saber mais, consulte a se\xe7\xe3o ",(0,s.jsx)(o.a,{href:"/docs/pt/20/Concepts/shared",children:"Objetos e cole\xe7\xf5es compartidos"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"fun\xe7\xf5es-de-collection",children:"Fun\xe7\xf5es de Collection"}),"\n",(0,s.jsxs)(o.p,{children:["As refer\xeancias a cole\xe7\xf5es 4D se beneficiam de m\xe9todos especiais (as vezes chamados ",(0,s.jsx)(o.em,{children:"fun\xe7\xf5es membro"}),"). As fun\xe7\xf5es de recolhimento est\xe3o listadas na se\xe7\xe3o ",(0,s.jsx)(o.a,{href:"/docs/pt/20/API/CollectionClass",children:"Class API Reference"})," ."]}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"$newCol:=$col.copy() //c\xf3pia de $col a $newCol\n$col.push(10;100) //adiciona 10 e 100 para a cole\xe7\xe3o\n"})}),"\n",(0,s.jsx)(o.p,{children:"Alguns m\xe9todos retornam a cole\xe7\xe3o original depois de moficia\xe7\xe3o, para que possa rodar as chamadas em sequ\xeancia:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,s.jsx)(o.h3,{id:"par\xe2metro-caminopropriedade",children:"par\xe2metro caminoPropriedade"}),"\n",(0,s.jsxs)(o.p,{children:["V\xe1rios m\xe9todos aceitam uma ",(0,s.jsx)(o.em,{children:"propertyPath"})," como par\xe2metro. Este par\xe2metro significa:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'um nome de objeto propriedade por exemplo "Sobrenome"'}),"\n",(0,s.jsx)(o.li,{children:'ou uma rota de propriedades de objeto, ou seja, uma sequ\xeancia hier\xe1rquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".'}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Advert\xeancia:"}),' Ao usar fun\xe7\xf5es e par\xe2metros de propriedadePath, n\xe3o se pode usar ".", "[ ]", ou espa\xe7os nos nomes das propriedades, uma vez que isso impedir\xe1 que 4D analise correctamente o caminho:']}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //erro\n'})}),"\n",(0,s.jsx)(o.h2,{id:"indefinido",children:"Indefinido"}),"\n",(0,s.jsxs)(o.p,{children:["Lendo a propriedade de ",(0,s.jsx)(o.strong,{children:"comprimento"})," de uma cole\xe7\xe3o indefinida produz 0:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"     C_COLLECTION($c) //variable criada, mas nenhuma cole\xe7\xe3o \xe9 definida\n     $size:=$c.length //$size = 0\n"})})]})}function p(e={}){const{wrapper:o}={...(0,l.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>a});var s=n(296540);const l={},c=s.createContext(l);function i(e){const o=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(c.Provider,{value:o},e.children)}}}]);