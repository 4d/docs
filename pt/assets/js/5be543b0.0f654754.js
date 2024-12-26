"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29800"],{796335:function(e,a,n){n.r(a),n.d(a,{metadata:()=>s,contentTitle:()=>o,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/load-list","title":"Load list","description":"Load list ( nomeLista ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/load-list.md","sourceDirName":"commands-legacy","slug":"/commands/load-list","permalink":"/docs/pt/commands/load-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fload-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"load-list","title":"Load list","slug":"/commands/load-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LIST OF CHOICE LISTS","permalink":"/docs/pt/commands/list-of-choice-lists"},"next":{"title":"New list","permalink":"/docs/pt/commands/new-list"}}'),t=n("785893"),i=n("250065");let r={id:"load-list",title:"Load list",slug:"/commands/load-list",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let a={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Load list"})," ( ",(0,t.jsx)(a.em,{children:"nomeLista"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Par\xe2metro"}),(0,t.jsx)(a.th,{children:"Tipo"}),(0,t.jsx)(a.th,{}),(0,t.jsx)(a.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"nomeLista"}),(0,t.jsx)(a.td,{children:"Text"}),(0,t.jsx)(a.td,{children:"\u2192"}),(0,t.jsx)(a.td,{children:"Nome de uma lista criada no Editor de listas do ambiente Desenho"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Resultado"}),(0,t.jsx)(a.td,{children:"Integer"}),(0,t.jsx)(a.td,{children:"\u2190"}),(0,t.jsx)(a.td,{children:"N\xfamero de refer\xeancia da lista criada recentemente"})]})]})]}),"\n",(0,t.jsx)(a.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(a.p,{children:["Load list cria uma lista hier\xe1rquica cujo conte\xfado \xe9 copiado da lista passada em ",(0,t.jsx)(a.em,{children:"nomeLista"}),". Depois retorna o n\xfamero de refer\xeancia da lista criada recentemente."]}),"\n",(0,t.jsxs)(a.p,{children:["Para ter certeza de que a lista especificada por ",(0,t.jsx)(a.em,{children:"nomeLista"})," existe, utilize a fun\xe7\xe3o ",(0,t.jsx)(a.a,{href:"/docs/pt/commands/is-a-list",children:"Is a list"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"Note que a nova lista \xe9 uma c\xf3pia da lista definida no ambiente Desenho. Portanto, qualquer modifica\xe7\xe3o realizada \xe0 nova lista n\xe3o afetar\xe1 a lista definida no ambiente Desenho. Da mesma maneira, toda modifica\xe7\xe3o posterior \xe0 lista definida no ambiente Desenho n\xe3o afetar\xe1 a lista que acaba de criar."}),"\n",(0,t.jsxs)(a.p,{children:["Se modificar a lista criada recentemente e deseja guardar as mudan\xe7as de forma permanente, chame ao comando ",(0,t.jsx)(a.a,{href:"/docs/pt/commands/save-list",title:"SAVE LIST",children:"SAVE LIST"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["Lembre chamar ",(0,t.jsx)(a.a,{href:"/docs/pt/commands/clear-list",title:"CLEAR LIST",children:"CLEAR LIST"})," para apagar a lista criada quando tenha terminado. Do contr\xe1rio, permanecer\xe1 em mem\xf3ria at\xe9 o final da sess\xe3o de trabalho ou at\xe9 que o processo no qual foi criada termine ou seja abortado."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Dica:"})," se associar uma lista a um objeto de formul\xe1rio (lista hier\xe1rquica, aba, ou menu hier\xe1rquico) utilizando Lista de valores na janela de Lista de propriedades, n\xe3o necessita chamar Load list ou ",(0,t.jsx)(a.a,{href:"/docs/pt/commands/clear-list",title:"CLEAR LIST",children:"CLEAR LIST"})," no m\xe9todo do objeto. 4D carrega e apaga a lista automaticamente pra voc\xea."]}),"\n",(0,t.jsx)(a.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsxs)(a.p,{children:["Voc\xea cria um banco para o mercado internacional e necessita mudar aos diferentes idiomas enquanto utiliza o banco. Em um formul\xe1rio, apresenta uma lista hier\xe1rquica, chamada ",(0,t.jsx)(a.em,{children:"hlList"}),", que oferece uma lista de op\xe7\xf5es padr\xe3o. No ambiente Desenho, voc\xea preparou v\xe1rias listas, tais como \u201COp\xe7\xf5es EN\u201D para a vers\xe3o em ingl\xeas, \u201COp\xe7\xf5es FR\u201D para a vers\xe3o em franc\xeas, \u201COp\xe7\xf5es ES\u201D para a vers\xe3o em espanhol, etc. Adicionalmente, voc\xea mant\xe9m uma vari\xe1vel interprocesso chamada\u25CA",(0,t.jsx)(a.em,{children:"gsIdiomaAtual"}),", onde armazena um c\xf3digo de linguagem de 2 caracteres, como \u201CEN\u201D para a vers\xe3o em ingl\xeas, \u201CFR\u201D para a ver\xe3o em franc\xeas, \u201CES\u201D para a ver\xe3o em espanhol, etc. Para ter certeza de que se carregue a lista correta utilizando o idioma selecionado atualmente, pode escrever:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de objeto da lista hier\xe1rquica hlList\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var hlList : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hlList:=Load list("Std Options"+\u25CAgsIdiomaAtual)\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hlList;*)\n\xa0End case\n'})}),"\n",(0,t.jsx)(a.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs/pt/commands/clear-list",children:"CLEAR LIST"}),(0,t.jsx)(a.br,{}),"\n",(0,t.jsx)(a.a,{href:"/docs/pt/commands/is-a-list",children:"Is a list"}),(0,t.jsx)(a.br,{}),"\n",(0,t.jsx)(a.a,{href:"/docs/pt/commands/save-list",children:"SAVE LIST"})]}),"\n",(0,t.jsx)(a.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{}),(0,t.jsx)(a.th,{})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"N\xfamero do comando"}),(0,t.jsx)(a.td,{children:"383"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"Thread-seguro"}),(0,t.jsx)(a.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return o},a:function(){return r}});var s=n(667294);let t={},i=s.createContext(t);function r(e){let a=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);