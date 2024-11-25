"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43157"],{369576:function(e,s,o){o.r(s),o.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>l,assets:()=>i,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/method-set-attributes","title":"METHOD SET ATTRIBUTES","description":"METHOD SET ATTRIBUTES ( caminho ; atributos {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-set-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-attributes","permalink":"/docs/pt/commands/method-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-set-attributes","title":"METHOD SET ATTRIBUTES","slug":"/commands/method-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ATTRIBUTE","permalink":"/docs/pt/commands/method-set-attribute"},"next":{"title":"METHOD SET CODE","permalink":"/docs/pt/commands/method-set-code"}}'),r=o("785893"),n=o("250065");let d={id:"method-set-attributes",title:"METHOD SET ATTRIBUTES",slug:"/commands/method-set-attributes",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"METHOD SET ATTRIBUTES"})," ( ",(0,r.jsx)(s.em,{children:"caminho"})," ; ",(0,r.jsx)(s.em,{children:"atributos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"caminho"}),(0,r.jsx)(s.td,{children:"Text, Text array"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Caminho dos m\xe9todos"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"atributos"}),(0,r.jsx)(s.td,{children:"Object, Object array"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Atributos a estabelecer para os m\xe9todos selecionados"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operador"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Se passado = comando aplica ao banco de dados host quando executado a partir de um componente (par\xe2metro ignorado fora desse contexto)"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O novo comando ",(0,r.jsx)(s.strong,{children:"METHOD SET ATTRIBUTES"})," permite que voc\xea defina os valores dos ",(0,r.jsx)(s.em,{children:"atributos"})," para os m\xe9todos especificados no par\xe2metro ",(0,r.jsx)(s.em,{children:"caminho"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Em ",(0,r.jsx)(s.em,{children:"caminho"}),", voc\xea pode passar por exemplo um texto que cont\xe9m um caminho de m\xe9todo, ou um array de texto que cont\xe9m uma variedade de caminhos. Voc\xea deve passar o mesmo tipo de par\xe2metro (string ou array) em ",(0,r.jsx)(s.em,{children:"atributos"})," a fim de estabelecer os atributos apropriados. Este comando s\xf3 funciona com m\xe9todos de projeto. Se voc\xea passar um ",(0,r.jsx)(s.em,{children:"caminho"})," inv\xe1lido, \xe9 gerado um erro."]}),"\n",(0,r.jsxs)(s.p,{children:["Em ",(0,r.jsx)(s.em,{children:"atributos"}),", se passa um objeto ou um array de objetos (dependendo do tipo de par\xe2metro passado em ",(0,r.jsx)(s.em,{children:"caminho"}),") que cont\xe9m todos os atributos que voc\xea deseja definir para os m\xe9todos."]}),"\n",(0,r.jsxs)(s.p,{children:["Os atributos de m\xe9todos devem ser definidos com os comandos ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/ob-set",children:"OB SET"})," ou ",(0,r.jsx)(s.a,{href:"/docs/pt/commands/ob-set-array",children:"OB SET ARRAY"}),", com valores True ou False para atributos booleano, ou valores espec\xedficos para atributos estendidos. Somente os atributos que est\xe3o presentes no par\xe2metro ",(0,r.jsx)(s.em,{children:"atributos"})," s\xe3o atualizados nos atributos dos m\xe9todos."]}),"\n",(0,r.jsxs)(s.p,{children:["Se o comando for executado a partir de um componente, o padr\xe3o \xe9 aplicado aos m\xe9todos do componente. Se voc\xea passar o par\xe2metro ",(0,r.jsx)(s.em,{children:"*"}),", ele acessa aos m\xe9todos do banco de dados local."]}),"\n",(0,r.jsx)(s.h5,{id:""}),"\n",(0,r.jsx)(s.p,{children:"Os atributos com suporte s\xe3o:"}),"\n",(0,r.jsxs)(s.p,{children:["[#codeRAW]{",(0,r.jsx)(s.br,{}),'\n"invisible" : false, // true se for vis\xedvel',(0,r.jsx)(s.br,{}),'\n"preemptive" : "capable" // o "incapable" o "indifferent"',(0,r.jsx)(s.br,{}),'\n"publishedWeb" : false, // true se estiver dispon\xedvel atrav\xe9s das tags e URLs 4D',(0,r.jsx)(s.br,{}),'\n"publishedSoap": false, // true se for oferecido como servi\xe7o web',(0,r.jsx)(s.br,{}),'\n"publishedWsdl": false, // true se tiver sido publicado em WSDL',(0,r.jsx)(s.br,{}),'\n"shared" : false, // true se for compartida pelos componentes e o banco local',(0,r.jsx)(s.br,{}),'\n"publishedSql" : false, // true se estiver dispon\xedvel atrav\xe9s de SQL',(0,r.jsx)(s.br,{}),'\n"executedOnServer" : false, // true se for executado no servidor',(0,r.jsx)(s.br,{}),"\n}",(0,r.jsx)(s.br,{}),"\n}[#codeRAW]"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"}),' os atributos "published4DMobile" s\xe3o obsoletos para 4D v18.']}),"\n",(0,r.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(s.p,{children:"Se voc\xea desejar modificar apenas um atributo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0var $attributes : Object\n\xa0OB SET($attributes;"executedOnServer";True)\n\xa0METHOD SET ATTRIBUTES("aMethod";$attributes)\xa0//apenas o atributo "executedOnServer" \xe9 modificado\n'})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/commands/method-get-attributes",children:"METHOD GET ATTRIBUTES"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/commands/method-set-attribute",children:"METHOD SET ATTRIBUTE"})]})]})}function l(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,s,o){o.d(s,{Z:function(){return a},a:function(){return d}});var t=o(667294);let r={},n=t.createContext(r);function d(e){let s=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);