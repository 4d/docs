"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70613],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>u});var a=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var o=a.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},p=function(e){var o=s(e.components);return a.createElement(c.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),u=n,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(k,l(l({ref:o},p),{},{components:t})):a.createElement(k,l({ref:o},p))}));function u(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13644:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});t(67294);var a=t(3905);function n(){return n=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function r(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={id:"collection",title:"Collection"},i=void 0,c={unversionedId:"Concepts/collection",id:"version-20-R3/Concepts/collection",title:"Collection",description:"Cole\xe7\xf5es s\xe3o listas ordenadas de valores de tipos diferentes ou n\xe3o (texto, n\xfamero, objeto, booleano, cole\xe7\xe3o ou null).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/pt/Concepts/collection",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Par\xe2metros",permalink:"/docs/pt/Concepts/boolean"},next:{title:"Date",permalink:"/docs/pt/Concepts/date"}},s={},p=[{value:"Instancia\xe7\xe3o",id:"instancia\xe7\xe3o",level:2},{value:"comando <code>New collection</code>",id:"comando-new-collection",level:3},{value:"operador <code>[]</code>",id:"operador-",level:3},{value:"Cole\xe7\xe3o regular ou partilhada",id:"cole\xe7\xe3o-regular-ou-partilhada",level:3},{value:"Fun\xe7\xf5es de Collection",id:"fun\xe7\xf5es-de-collection",level:2},{value:"par\xe2metro caminoPropriedade",id:"par\xe2metro-caminopropriedade",level:3}],d={toc:p};function m(e){var{components:o}=e,t=r(e,["components"]);return(0,a.kt)("wrapper",n({},d,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cole\xe7\xf5es s\xe3o listas ordenadas de valores de tipos diferentes ou n\xe3o (texto, n\xfamero, objeto, booleano, cole\xe7\xe3o ou null)."),(0,a.kt)("p",null,"Para gerenciar as vari\xe1veis de tipo Cole\xe7\xe3o se deve utilizar a nota\xe7\xe3o de objetos (ver  ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/Concepts/object#syntax-basics"}),"Syntax basics"),")."),(0,a.kt)("p",null,"Para acessar a um elemento de cole\xe7\xe3o, \xe9 necess\xe1rio passar o n\xfamero do elemento dentro de par\xeanteses rectos:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"collectionRef[expression]\n")),(0,a.kt)("p",null,"Pode passar toda express\xe3o 4D v\xe1lida que devolva um inteiro positivo na express\xe3o. Exemplos:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"})," myCollection[5]  //aceso ao 6\xba elemento da cole\xe7\xe3o\n myCollection[$var]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Aten\xe7\xe3o:")," os elementos da cole\xe7\xe3o est\xe3o numerados desde 0."),(0,a.kt)("p",null,"Pode atribuir um valor a um elemento da cole\xe7\xe3o ou obter o valor de um elemento da cole\xe7\xe3o utilizando a nota\xe7\xe3o de objetos:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' myCol[10]:="My new element"\n $myVar:=myCol[0]\n')),(0,a.kt)("p",null,"Se atribuir um \xedndice de elemento que ultrapasse o \xfaltimo elemento existente da cole\xe7\xe3o, a cole\xe7\xe3o se redimensiona automaticamente e a todos os novos elementos intermedi\xe1rios se lhes atribui um valor nulo:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n')),(0,a.kt)("h2",n({},{id:"instancia\xe7\xe3o"}),"Instancia\xe7\xe3o"),(0,a.kt)("p",null,"As cole\xe7\xf5es devem ter sido inicializadas, por exemplo utilizando o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"New collection"),", do contr\xe1rio ao tentar ler ou modificar seus elementos se gerar\xe1 um erro de sintaxe."),(0,a.kt)("p",null,"A instancia\xe7\xe3o da colec\xe7\xe3o pode ser feita de uma das seguintes formas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"utilizando o comando ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/pt/API/CollectionClass#new-collection"}),(0,a.kt)("inlineCode",{parentName:"a"},"New collection")),","),(0,a.kt)("li",{parentName:"ul"},"utilizando o operador ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),".")),(0,a.kt)("admonition",n({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"V\xe1rios comandos e fun\xe7\xf5es 4D retornam colec\xe7\xf5es, por exemplo ",(0,a.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1713.html"}),(0,a.kt)("inlineCode",{parentName:"a"},"Get Monitored Activity"))," ou ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/CollectionClass#copy"}),(0,a.kt)("inlineCode",{parentName:"a"},"collection.copy")),". Neste caso, n\xe3o \xe9 necess\xe1rio instanciar explicitamente a cole\xe7\xe3o, a linguagem 4D f\xe1-lo por si.")),(0,a.kt)("h3",n({},{id:"comando-new-collection"}),"comando ",(0,a.kt)("inlineCode",{parentName:"h3"},"New collection")),(0,a.kt)("p",null,"O comando ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/CollectionClass#new-collection"}),(0,a.kt)("inlineCode",{parentName:"a"},"New collection"))," cria uma nova colec\xe7\xe3o vazia ou pr\xe9-preenchida e devolve a sua refer\xeancia."),(0,a.kt)("p",null,"Exemplos:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"})," var $colVar : Collection //cria\xe7\xe3o de uma vari\xe1vel 4D de tipo cole\xe7\xe3o\n $colVar:=New collection //initializa\xe7\xe3o da cole\xe7\xe3o e atribui\xe7\xe3o \xe0 vari\xe1vel 4D\n")),(0,a.kt)("h3",n({},{id:"operador-"}),"operador ",(0,a.kt)("inlineCode",{parentName:"h3"},"[]")),(0,a.kt)("p",null,"O operador ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," permite-lhe criar uma colec\xe7\xe3o ",(0,a.kt)("strong",{parentName:"p"},"literal"),". Um literal de cole\xe7\xe3o \xe9 uma lista de zero ou mais express\xf5es, cada uma das quais representa um elemento de cole\xe7\xe3o, entre colchetes (",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),"). Quando cria uma cole\xe7\xe3o utilizando um literal de cole\xe7\xe3o, esta \xe9 instanciada com os valores especificados como seus elementos e o seu comprimento \xe9 definido para o n\xfamero de argumentos especificados."),(0,a.kt)("p",null,"J\xe1 que qualquer elemento \xe9 considerado uma express\xe3o, pode criar sub-cole\xe7\xf5es utilizando ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," em elementos.  Tamb\xe9m \xe9 poss\xedvel criar e referenciar literais de objectos ****."),(0,a.kt)("p",null,"Se um elemento for indefinido, aparecer\xe1 como Nulo na cole\xe7\xe3o."),(0,a.kt)("p",null,"Exemplos:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),'var $col1; $col2; $users : Collection\n$col1:=[] //colec\xe7\xe3o vazia\n$col2:=[1;2;3;4;5;6] //colec\xe7\xe3o de n\xfameros\n//colec\xe7\xe3o de objectos\n$users:=[{name: "Alice"; \\\n    height: 183; \\\n    eyecolor: "hazel"; \\\n    id: $col2[5]\\\n    }; \\\n    {name: "Bob"; \\\n    height: 172; \\\n    eyecolor: "blue"\\\n}]\n')),(0,a.kt)("admonition",n({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Se criar um literal de cole\xe7\xe3o que contenha um \xfanico elemento, certifique-se de que n\xe3o utiliza um nome correspondente a um nome de tabela existente, caso contr\xe1rio a sintaxe da tabela ",(0,a.kt)("inlineCode",{parentName:"p"},"[tableName]")," ter\xe1 prioridade.")),(0,a.kt)("h3",n({},{id:"cole\xe7\xe3o-regular-ou-partilhada"}),"Cole\xe7\xe3o regular ou partilhada"),(0,a.kt)("p",null,"Pode criar dois tipos de cole\xe7\xf5es:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"colec\xe7\xf5es regulares (n\xe3o partilhadas), utilizando o comando ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/pt/API/CollectionClass#new-collection"}),(0,a.kt)("inlineCode",{parentName:"a"},"Nova colec\xe7\xe3o"))," . Essas cole\xe7\xf5es podem ser editadas sem qualquer controle de acesso espec\xedfico mas n\xe3o podem ser compartilhadas entre processos."),(0,a.kt)("li",{parentName:"ul"},"cole\xe7\xf5es compartidas, utilizando o comando ",(0,a.kt)("inlineCode",{parentName:"li"},"New shared collection"),". Essas cole\xe7\xf5es podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by ",(0,a.kt)("a",n({parentName:"li"},{href:"/docs/pt/Concepts/shared#useend-use"}),(0,a.kt)("inlineCode",{parentName:"a"},"Use... End use"))," structures.")),(0,a.kt)("p",null,"Para saber mais, consulte a se\xe7\xe3o ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/Concepts/shared"}),"Objetos e cole\xe7\xf5es compartidos"),"."),(0,a.kt)("h2",n({},{id:"fun\xe7\xf5es-de-collection"}),"Fun\xe7\xf5es de Collection"),(0,a.kt)("p",null,"As refer\xeancias a cole\xe7\xf5es 4D se beneficiam de m\xe9todos especiais (as vezes chamados ",(0,a.kt)("em",{parentName:"p"},"fun\xe7\xf5es membro"),"). As fun\xe7\xf5es de recolhimento est\xe3o listadas na se\xe7\xe3o ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/pt/API/CollectionClass"}),"Class API Reference")," ."),(0,a.kt)("p",null,"Por exemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"$newCol:=$col.copy() //c\xf3pia de $col a $newCol\n$col.push(10;100) //adiciona 10 e 100 para a cole\xe7\xe3o\n")),(0,a.kt)("p",null,"Alguns m\xe9todos retornam a cole\xe7\xe3o original depois de moficia\xe7\xe3o, para que possa rodar as chamadas em sequ\xeancia:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"})," $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n")),(0,a.kt)("h3",n({},{id:"par\xe2metro-caminopropriedade"}),"par\xe2metro caminoPropriedade"),(0,a.kt)("p",null,"V\xe1rios m\xe9todos aceitam uma ",(0,a.kt)("em",{parentName:"p"},"propertyPath")," como par\xe2metro. Este par\xe2metro significa:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'um nome de objeto propriedade por exemplo "Sobrenome"'),(0,a.kt)("li",{parentName:"ul"},'ou uma rota de propriedades de objeto, ou seja, uma sequ\xeancia hier\xe1rquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Advert\xeancia:"),' Ao usar fun\xe7\xf5es e par\xe2metros de propriedadePath, n\xe3o se pode usar ".", "',"[ ]",'", ou espa\xe7os nos nomes das propriedades, uma vez que isso impedir\xe1 que 4D analise correctamente o caminho:'),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-4d"}),' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //erro\n')))}m.isMDXComponent=!0}}]);