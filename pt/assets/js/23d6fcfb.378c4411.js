/*! For license information please see 23d6fcfb.378c4411.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98585],{843898:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var s=n(474848),l=n(28453);const r={id:"collection",title:"Collection"},t=void 0,i={id:"Concepts/collection",title:"Collection",description:"Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/dt_collection.md",sourceDirName:"Concepts",slug:"/Concepts/collection",permalink:"/docs/pt/18/Concepts/collection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_collection.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"collection",title:"Collection"},sidebar:"docs",previous:{title:"Par\xe2metros",permalink:"/docs/pt/18/Concepts/boolean"},next:{title:"Date",permalink:"/docs/pt/18/Concepts/date"}},c={},a=[{value:"Inicializa\xe7\xe3o",id:"Inicializa\xe7\xe3o",level:2},{value:"Cole\xe7\xe3o regular ou partilhada",id:"Cole\xe7\xe3o-regular-ou-partilhada",level:3},{value:"M\xe9todos de cole\xe7\xe3o",id:"M\xe9todos-de-cole\xe7\xe3o",level:2},{value:"par\xe2metro caminoPropriedade",id:"par\xe2metro-caminoPropriedade",level:3}];function d(e){const o={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Collections are ordered lists of values of similar or mixed types (text, number, object, boolean, collection, or null)."}),"\n",(0,s.jsxs)(o.p,{children:["To manage Collection type variables you must use object notation (see ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/object#syntax-basics",children:"Syntax basics"}),")."]}),"\n",(0,s.jsx)(o.p,{children:"Para acessar a um elemento de cole\xe7\xe3o, \xe9 necess\xe1rio passar o n\xfamero do elemento dentro de par\xeanteses rectos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"collectionRef[expression]\n"})}),"\n",(0,s.jsx)(o.p,{children:"You can pass any valid 4D expression which returns a positive integer in expression. Exemplos:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" myCollection[5]  //aceso ao 6\xba elemento da cole\xe7\xe3o\n myCollection[$var]\n"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Aten\xe7\xe3o:"})," os elementos da cole\xe7\xe3o est\xe3o numerados desde 0."]}),"\n",(0,s.jsx)(o.p,{children:"You can assign a value to a collection element or get a collection element value using object notation:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' myCol[10]:="My new element"\n $myVar:=myCol[0]\n'})}),"\n",(0,s.jsx)(o.p,{children:"Se atribuir um \xedndice de elemento que ultrapasse o \xfaltimo elemento existente da cole\xe7\xe3o, a cole\xe7\xe3o se redimensiona automaticamente e a todos os novos elementos intermedi\xe1rios se lhes atribui um valor nulo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' C_COLLECTION(myCol)\n myCol:=New collection("A";"B")\n myCol[5]:="Z"\n  //myCol[2]=null\n  //myCol[3]=null\n  //myCol[4]=null\n'})}),"\n",(0,s.jsx)(o.h2,{id:"Inicializa\xe7\xe3o",children:"Inicializa\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["Collections must have been initialized, for example using the ",(0,s.jsx)(o.code,{children:"New collection"})," command, otherwise trying to read or modify their elements will generate a syntax error."]}),"\n",(0,s.jsx)(o.p,{children:"Exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" C_COLLECTION($colVar) //creation of collection type 4D variable\n $colVar:=New collection //initialization of the collection and assignment to the 4D variable\n"})}),"\n",(0,s.jsx)(o.h3,{id:"Cole\xe7\xe3o-regular-ou-partilhada",children:"Cole\xe7\xe3o regular ou partilhada"}),"\n",(0,s.jsx)(o.p,{children:"Pode criar dois tipos de cole\xe7\xf5es:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["regular (non-shared) collections, using the ",(0,s.jsx)(o.code,{children:"New collection"})," command. Essas cole\xe7\xf5es podem ser editadas sem qualquer controle de acesso espec\xedfico mas n\xe3o podem ser compartilhadas entre processos."]}),"\n",(0,s.jsxs)(o.li,{children:["shared collections, using the ",(0,s.jsx)(o.code,{children:"New shared collection"})," command. Essas cole\xe7\xf5es podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by ",(0,s.jsx)(o.code,{children:"Use...End use"})," structures. For more information, refer to the ",(0,s.jsx)(o.a,{href:"/docs/pt/18/Concepts/shared",children:"Shared objects and collections"})," section."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"M\xe9todos-de-cole\xe7\xe3o",children:"M\xe9todos de cole\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["4D collection references benefit from special methods (sometimes named ",(0,s.jsx)(o.em,{children:"member functions"}),"). Thanks to object notation, these methods can be applied to collection references using the following syntax:"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:"{$result:=}myCollection.memberFunction( {params} )"}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Note that, even if it does not have parameters, a member function must be called with () parenthesis, otherwise a syntax error is generated."}),"\n",(0,s.jsx)(o.p,{children:"Por exemplo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"$newCol:=$col.copy() //c\xf3pia de $col a $newCol\n$col.push(10;100) //adiciona 10 e 100 para a cole\xe7\xe3o\n"})}),"\n",(0,s.jsx)(o.p,{children:"Some methods return the original collection after modification, so that you can run the calls in a sequence:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:" $col:=New collection(5;20)\n $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]\n"})}),"\n",(0,s.jsx)(o.h3,{id:"par\xe2metro-caminoPropriedade",children:"par\xe2metro caminoPropriedade"}),"\n",(0,s.jsxs)(o.p,{children:["V\xe1rios m\xe9todos aceitam um ",(0,s.jsx)(o.em,{children:"propertyPath"})," como par\xe2metro. Este par\xe2metro significa:"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:'um nome de objeto propriedade por exemplo "Sobrenome"'}),"\n",(0,s.jsx)(o.li,{children:'ou uma rota de propriedades de objeto, ou seja, uma sequ\xeancia hier\xe1rquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".'}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Warning:"}),' When using methods and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:']}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:' $vmin:=$col.min("My.special.property") //indefinido\n $vmin:=$col.min(["My.special.property"]) //erro\n'})})]})}function p(e={}){const{wrapper:o}={...(0,l.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,o,n)=>{var s=n(296540),l=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,o,n){var s,r={},a=null,d=null;for(s in void 0!==n&&(a=""+n),void 0!==o.key&&(a=""+o.key),void 0!==o.ref&&(d=o.ref),o)t.call(o,s)&&!c.hasOwnProperty(s)&&(r[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps)void 0===r[s]&&(r[s]=o[s]);return{$$typeof:l,type:e,key:a,ref:d,props:r,_owner:i.current}}o.Fragment=r,o.jsx=a,o.jsxs=a},474848:(e,o,n)=>{e.exports=n(221020)},28453:(e,o,n)=>{n.d(o,{R:()=>t,x:()=>i});var s=n(296540);const l={},r=s.createContext(l);function t(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);