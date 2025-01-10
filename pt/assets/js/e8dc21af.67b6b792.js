"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36488"],{305643:function(e,o,n){n.r(o),n.d(o,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"Concepts/collection","title":"Collection","description":"Cole\xe7\xf5es s\xe3o listas ordenadas de valores de tipos diferentes ou n\xe3o (texto, n\xfamero, objeto, booleano, cole\xe7\xe3o ou null).","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/dt_collection.md","sourceDirName":"Concepts","slug":"/Concepts/collection","permalink":"/docs/pt/19/Concepts/collection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"collection","title":"Collection"},"sidebar":"docs","previous":{"title":"Par\xe2metros","permalink":"/docs/pt/19/Concepts/boolean"},"next":{"title":"Date","permalink":"/docs/pt/19/Concepts/date"}}'),l=n("785893"),a=n("250065");let r={id:"collection",title:"Collection"},i=void 0,c={},t=[{value:"Inicializa\xe7\xe3o",id:"inicializa\xe7\xe3o",level:2},{value:"Cole\xe7\xe3o regular ou partilhada",id:"cole\xe7\xe3o-regular-ou-partilhada",level:3},{value:"Fun\xe7\xf5es de Collection",id:"fun\xe7\xf5es-de-collection",level:2},{value:"par\xe2metro propertyPath",id:"par\xe2metro-propertypath",level:3}];function d(e){let o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.p,{children:"Cole\xe7\xf5es s\xe3o listas ordenadas de valores de tipos diferentes ou n\xe3o (texto, n\xfamero, objeto, booleano, cole\xe7\xe3o ou null)."}),"\n",(0,l.jsxs)(o.p,{children:["Para gerenciar as vari\xe1veis de tipo Cole\xe7\xe3o se deve utilizar a nota\xe7\xe3o de objetos (ver  ",(0,l.jsx)(o.a,{href:"/docs/pt/19/Concepts/object#syntax-basics",children:"Syntax basics"}),")."]}),"\n",(0,l.jsx)(o.p,{children:"Para acessar a um elemento de cole\xe7\xe3o, \xe9 necess\xe1rio passar o n\xfamero do elemento dentro de par\xeanteses rectos:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,l.jsx)(o.p,{children:"Pode passar toda express\xe3o 4D v\xe1lida que devolva um inteiro positivo na express\xe3o. Exemplos:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:" myCollection[5]  //aceso ao 6\xba elemento da cole\xe7\xe3o\n myCollection[$var]\n"})}),"\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.strong,{children:"Aten\xe7\xe3o:"})," os elementos da cole\xe7\xe3o est\xe3o numerados desde 0."]}),"\n",(0,l.jsx)(o.p,{children:"Pode atribuir um valor a um elemento da cole\xe7\xe3o ou obter o valor de um elemento da cole\xe7\xe3o utilizando a nota\xe7\xe3o de objetos:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:' myCol[10]:="My new element"\n $myVar:=myCol[0]\n'})}),"\n",(0,l.jsx)(o.p,{children:"Se atribuir um \xedndice de elemento que ultrapasse o \xfaltimo elemento existente da cole\xe7\xe3o, a cole\xe7\xe3o se redimensiona automaticamente e a todos os novos elementos intermedi\xe1rios se lhes atribui um valor nulo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,l.jsx)(o.h2,{id:"inicializa\xe7\xe3o",children:"Inicializa\xe7\xe3o"}),"\n",(0,l.jsxs)(o.p,{children:["Cole\xe7\xf5es devem ter sido inicializadas, por exemplo, usando o comando ",(0,l.jsx)(o.code,{children:"New collection"}),", caso contr\xe1rio, tentar ler ou modificar seus elementos gerar\xe1 um erro de sintaxe."]}),"\n",(0,l.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:" var $colVar : Collection //cria\xe7\xe3o de uma vari\xe1vel 4D de tipo cole\xe7\xe3o\n $colVar:=New collection //initializa\xe7\xe3o da cole\xe7\xe3o e atribui\xe7\xe3o \xe0 vari\xe1vel 4D\n"})}),"\n",(0,l.jsx)(o.h3,{id:"cole\xe7\xe3o-regular-ou-partilhada",children:"Cole\xe7\xe3o regular ou partilhada"}),"\n",(0,l.jsx)(o.p,{children:"Pode criar dois tipos de cole\xe7\xf5es:"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["cole\xe7\xf5es regulares (n\xe3o compartilhadas) usando o comando ",(0,l.jsx)(o.a,{href:"/docs/pt/19/API/CollectionClass#new-collection",children:(0,l.jsx)(o.code,{children:"New collection"})}),". Essas cole\xe7\xf5es podem ser editadas sem qualquer controle de acesso espec\xedfico mas n\xe3o podem ser compartilhadas entre processos."]}),"\n",(0,l.jsxs)(o.li,{children:["cole\xe7\xf5es compartidas, utilizando o comando ",(0,l.jsx)(o.code,{children:"New shared collection"}),". Essas cole\xe7\xf5es podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by ",(0,l.jsx)(o.a,{href:"/docs/pt/19/Concepts/shared#useend-use",children:(0,l.jsx)(o.code,{children:"Use... End use"})})," structures."]}),"\n"]}),"\n",(0,l.jsxs)(o.p,{children:["Para saber mais, consulte a se\xe7\xe3o ",(0,l.jsx)(o.a,{href:"/docs/pt/19/Concepts/shared",children:"Objetos e cole\xe7\xf5es compartidos"}),"."]}),"\n",(0,l.jsx)(o.h2,{id:"fun\xe7\xf5es-de-collection",children:"Fun\xe7\xf5es de Collection"}),"\n",(0,l.jsxs)(o.p,{children:["As refer\xeancias a cole\xe7\xf5es 4D se beneficiam de m\xe9todos especiais (as vezes chamados ",(0,l.jsx)(o.em,{children:"fun\xe7\xf5es membro"}),"). As fun\xe7\xf5es de cole\xe7\xe3o est\xe3o listadas na se\xe7\xe3o ",(0,l.jsx)(o.a,{href:"/docs/pt/19/API/CollectionClass",children:"Class API Reference"}),"."]}),"\n",(0,l.jsx)(o.p,{children:"Por exemplo:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:"$newCol:=$col.copy() //c\xf3pia de $col a $newCol\n$col.push(10;100) //adiciona 10 e 100 para a cole\xe7\xe3o\n"})}),"\n",(0,l.jsx)(o.p,{children:"Alguns m\xe9todos retornam a cole\xe7\xe3o original depois de moficia\xe7\xe3o, para que possa rodar as chamadas em sequ\xeancia:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,l.jsx)(o.h3,{id:"par\xe2metro-propertypath",children:"par\xe2metro propertyPath"}),"\n",(0,l.jsxs)(o.p,{children:["V\xe1rios m\xe9todos aceitam uma ",(0,l.jsx)(o.em,{children:"propertyPath"})," como par\xe2metro. Este par\xe2metro significa:"]}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsx)(o.li,{children:'um nome de objeto propriedade por exemplo "Sobrenome"'}),"\n",(0,l.jsx)(o.li,{children:'ou uma rota de propriedades de objeto, ou seja, uma sequ\xeancia hier\xe1rquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".'}),"\n"]}),"\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.strong,{children:"Advert\xeancia:"}),' ao usar fun\xe7\xf5es e par\xe2metros propertyPath, n\xe3o se pode usar ".", "[ ]", ou espa\xe7os nos nomes das propriedades, dado que isso impedir\xe1 que 4D analise corretamente o caminho:']}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //erro\n'})})]})}function p(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return r}});var s=n(667294);let l={},a=s.createContext(l);function r(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);