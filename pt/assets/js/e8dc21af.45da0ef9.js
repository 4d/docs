/*! For license information please see e8dc21af.45da0ef9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27561],{248463:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>t});var s=n(474848),r=n(28453);const l={id:"collection",title:"Collection"},a=void 0,i={id:"Concepts/collection",title:"Collection",description:"Cole\xe7\xf5es s\xe3o listas ordenadas de valores de tipos diferentes ou n\xe3o (texto, n\xfamero, objeto, booleano, cole\xe7\xe3o ou null).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/pt/19/Concepts/collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Par\xe2metros",permalink:"/docs/pt/19/Concepts/boolean"},next:{title:"Date",permalink:"/docs/pt/19/Concepts/date"}},c={},t=[{value:"Inicializa\xe7\xe3o",id:"inicializa\xe7\xe3o",level:2},{value:"Cole\xe7\xe3o regular ou partilhada",id:"cole\xe7\xe3o-regular-ou-partilhada",level:3},{value:"Fun\xe7\xf5es de Collection",id:"fun\xe7\xf5es-de-collection",level:2},{value:"par\xe2metro caminoPropriedade",id:"par\xe2metro-caminopropriedade",level:3}];function d(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Cole\xe7\xf5es s\xe3o listas ordenadas de valores de tipos diferentes ou n\xe3o (texto, n\xfamero, objeto, booleano, cole\xe7\xe3o ou null)."}),"\n",(0,s.jsxs)(o.p,{children:["Para gerenciar as vari\xe1veis de tipo Cole\xe7\xe3o se deve utilizar a nota\xe7\xe3o de objetos (ver  ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Concepts/object#syntax-basics",children:"Syntax basics"}),")."]}),"\n",(0,s.jsx)(o.p,{children:"Para acessar a um elemento de cole\xe7\xe3o, \xe9 necess\xe1rio passar o n\xfamero do elemento dentro de par\xeanteses rectos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,s.jsx)(o.p,{children:"Pode passar toda express\xe3o 4D v\xe1lida que devolva um inteiro positivo na express\xe3o. Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" myCollection[5]  //aceso ao 6\xba elemento da cole\xe7\xe3o\n myCollection[$var]\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Aten\xe7\xe3o:"})," os elementos da cole\xe7\xe3o est\xe3o numerados desde 0."]}),"\n",(0,s.jsx)(o.p,{children:"Pode atribuir um valor a um elemento da cole\xe7\xe3o ou obter o valor de um elemento da cole\xe7\xe3o utilizando a nota\xe7\xe3o de objetos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' myCol[10]:="My new element"\n $myVar:=myCol[0]\n'})}),"\n",(0,s.jsx)(o.p,{children:"Se atribuir um \xedndice de elemento que ultrapasse o \xfaltimo elemento existente da cole\xe7\xe3o, a cole\xe7\xe3o se redimensiona automaticamente e a todos os novos elementos intermedi\xe1rios se lhes atribui um valor nulo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,s.jsx)(o.h2,{id:"inicializa\xe7\xe3o",children:"Inicializa\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["Collections must have been initialized, for example using the ",(0,s.jsx)(o.code,{children:"New collection"})," command, otherwise trying to read or modify their elements will generate a syntax error."]}),"\n",(0,s.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" var $colVar : Collection //cria\xe7\xe3o de uma vari\xe1vel 4D de tipo cole\xe7\xe3o\n $colVar:=New collection //initializa\xe7\xe3o da cole\xe7\xe3o e atribui\xe7\xe3o \xe0 vari\xe1vel 4D\n"})}),"\n",(0,s.jsx)(o.h3,{id:"cole\xe7\xe3o-regular-ou-partilhada",children:"Cole\xe7\xe3o regular ou partilhada"}),"\n",(0,s.jsx)(o.p,{children:"Pode criar dois tipos de cole\xe7\xf5es:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["regular (non-shared) collections, using the ",(0,s.jsx)(o.a,{href:"/docs/pt/19/API/CollectionClass#new-collection",children:(0,s.jsx)(o.code,{children:"New collection"})})," command. Essas cole\xe7\xf5es podem ser editadas sem qualquer controle de acesso espec\xedfico mas n\xe3o podem ser compartilhadas entre processos."]}),"\n",(0,s.jsxs)(o.li,{children:["cole\xe7\xf5es compartidas, utilizando o comando ",(0,s.jsx)(o.code,{children:"New shared collection"}),". Essas cole\xe7\xf5es podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Concepts/shared#useend-use",children:(0,s.jsx)(o.code,{children:"Use... End use"})})," structures."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["For more information, refer to the ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Concepts/shared",children:"Shared objects and collections"})," section."]}),"\n",(0,s.jsx)(o.h2,{id:"fun\xe7\xf5es-de-collection",children:"Fun\xe7\xf5es de Collection"}),"\n",(0,s.jsxs)(o.p,{children:["As refer\xeancias a cole\xe7\xf5es 4D se beneficiam de m\xe9todos especiais (as vezes chamados ",(0,s.jsx)(o.em,{children:"fun\xe7\xf5es membro"}),"). As fun\xe7\xf5es de cole\xe7\xe3o est\xe3o listadas na se\xe7\xe3o ",(0,s.jsx)(o.a,{href:"/docs/pt/19/API/CollectionClass",children:"Class API Reference"}),"."]}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"$newCol:=$col.copy() //c\xf3pia de $col a $newCol\n$col.push(10;100) //adiciona 10 e 100 para a cole\xe7\xe3o\n"})}),"\n",(0,s.jsx)(o.p,{children:"Alguns m\xe9todos retornam a cole\xe7\xe3o original depois de moficia\xe7\xe3o, para que possa rodar as chamadas em sequ\xeancia:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,s.jsx)(o.h3,{id:"par\xe2metro-caminopropriedade",children:"par\xe2metro caminoPropriedade"}),"\n",(0,s.jsxs)(o.p,{children:["V\xe1rios m\xe9todos aceitam uma ",(0,s.jsx)(o.em,{children:"propertyPath"})," como par\xe2metro. Este par\xe2metro significa:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'um nome de objeto propriedade por exemplo "Sobrenome"'}),"\n",(0,s.jsx)(o.li,{children:'ou uma rota de propriedades de objeto, ou seja, uma sequ\xeancia hier\xe1rquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".'}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Warning:"}),' When using functions and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:']}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //erro\n'})})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,o,n)=>{var s=n(296540),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function t(e,o,n){var s,l={},t=null,d=null;for(s in void 0!==n&&(t=""+n),void 0!==o.key&&(t=""+o.key),void 0!==o.ref&&(d=o.ref),o)a.call(o,s)&&!c.hasOwnProperty(s)&&(l[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===l[s]&&(l[s]=o[s]);return{$$typeof:r,type:e,key:t,ref:d,props:l,_owner:i.current}}o.Fragment=l,o.jsx=t,o.jsxs=t},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>i});var s=n(296540);const r={},l=s.createContext(r);function a(e){const o=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:o},e.children)}}}]);