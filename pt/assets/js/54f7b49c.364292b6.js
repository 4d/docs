"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28163"],{906155:function(e,t,o){o.r(t),o.d(t,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/method-get-attributes","title":"METHOD GET ATTRIBUTES","description":"METHOD GET ATTRIBUTES ( caminho ; atributos {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-attributes","permalink":"/docs/pt/commands/method-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-attributes","title":"METHOD GET ATTRIBUTES","slug":"/commands/method-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD Get attribute","permalink":"/docs/pt/commands/method-get-attribute"},"next":{"title":"METHOD GET CODE","permalink":"/docs/pt/commands/method-get-code"}}'),s=o("785893"),r=o("250065");let d={id:"method-get-attributes",title:"METHOD GET ATTRIBUTES",slug:"/commands/method-get-attributes",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"METHOD GET ATTRIBUTES"})," ( ",(0,s.jsx)(t.em,{children:"caminho"})," ; ",(0,s.jsx)(t.em,{children:"atributos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe2metro"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"caminho"}),(0,s.jsx)(t.td,{children:"Text, Text array"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Caminho do m\xe9todo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"atributos"}),(0,s.jsx)(t.td,{children:"Object, Object array"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Atributos para m\xe9todos selecionados"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operador"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"se passado = comando aplica para banco de dados local quando executado a partir de um componente (par\xe2metro ignorado fora desse contexto)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(t.p,{children:["O novo comando ",(0,s.jsx)(t.strong,{children:"METHOD GET ATTRIBUTES"})," retorna, em ",(0,s.jsx)(t.em,{children:"atributos"}),", o valor atual de todos os atributos para os m\xe9todos especificados no par\xe2metro ",(0,s.jsx)(t.em,{children:"caminho"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Este comando s\xf3 funciona com m\xe9todos de projeto. Se voc\xea passar um ",(0,s.jsx)(t.em,{children:"caminho"})," inv\xe1lido, um erro \xe9 gerado."]}),"\n",(0,s.jsxs)(t.p,{children:["Em ",(0,s.jsx)(t.em,{children:"caminho"}),", voc\xea pode passar seja um texto que contenha um caminho de m\xe9todo, ou um array de texto que contenha um array de caminhos. \xc9 necess\xe1rio passar o mesmo tipo de par\xe2metro (vari\xe1vel ou array) em ",(0,s.jsx)(t.em,{children:"atributos"}),", a fim de obter os atributos adequados."]}),"\n",(0,s.jsxs)(t.p,{children:["Em ",(0,s.jsx)(t.em,{children:"atributos"}),", passe um objeto ou um array de objetos, dependendo do par\xe2metro passado em ",(0,s.jsx)(t.em,{children:"caminho"}),'. Todos os atributos para o m\xe9todo s\xe3o retornados como propriedades do objeto com os valores de "True" / "False" para atributos booleanos e valores adicionais, se for necess\xe1rio (por exemplo, "scope", "table" para a propriedade 4D M\xf3vel ).']}),"\n",(0,s.jsxs)(t.p,{children:["Se o comando for executado a partir de um componente, aplica-se por padr\xe3o para os m\xe9todos de componentes. Se voc\xea passar o par\xe2metro ",(0,s.jsx)(t.em,{children:"*"}),", acessa os m\xe9todos do banco de dados local."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Nota"}),": a propriedade ",(0,s.jsx)(t.em,{children:"published4DMobile"})," \xe9 obsoleta a partir de 4D v18."]}),"\n",(0,s.jsx)(t.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(t.p,{children:["Se voc\xea quiser obter os atributos do m\xe9todo de projeto ",(0,s.jsx)(t.em,{children:"sendMail"}),", pode escrever:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0var $att : Object\n\xa0METHOD GET ATTRIBUTES("sendMail";$att)\n'})}),"\n",(0,s.jsx)(t.p,{children:"Depois da execu\xe7\xe3o, $att cont\xe9m, por exemplo:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "invisible":false,\n\xa0\xa0\xa0 "publishedWeb":false,\n\xa0\xa0\xa0 "publishedSoap":false,\n\xa0\xa0\xa0 "publishedWsdl":false,\n\xa0\xa0\xa0 "shared":false,\n\xa0\xa0\xa0 "publishedSql":false,\n\xa0\xa0\xa0 "executedOnServer":false,\n\xa0\xa0\xa0 "published4DMobile":{\n\xa0\xa0\xa0 \xa0\xa0\xa0 "scope":"table",\n\xa0\xa0\xa0 \xa0\xa0\xa0 "table":"Table_1"\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/pt/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})}),"\n",(0,s.jsx)(t.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"N\xfamero do comando"}),(0,s.jsx)(t.td,{children:"1334"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Thread-seguro"}),(0,s.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,o){o.d(t,{Z:function(){return a},a:function(){return d}});var n=o(667294);let s={},r=n.createContext(s);function d(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);