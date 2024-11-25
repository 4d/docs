"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99263"],{271949:function(e,o,t){t.r(o),t.d(o,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/method-get-attributes","title":"METHOD GET ATTRIBUTES","description":"METHOD GET ATTRIBUTES ( caminho ; atributos {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/method-get-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-attributes","permalink":"/docs/pt/commands/method-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"method-get-attributes","title":"METHOD GET ATTRIBUTES","slug":"/commands/method-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD Get attribute","permalink":"/docs/pt/commands/method-get-attribute"},"next":{"title":"METHOD GET CODE","permalink":"/docs/pt/commands/method-get-code"}}'),n=t("785893"),r=t("250065");let a={id:"method-get-attributes",title:"METHOD GET ATTRIBUTES",slug:"/commands/method-get-attributes",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"METHOD GET ATTRIBUTES"})," ( ",(0,n.jsx)(o.em,{children:"caminho"})," ; ",(0,n.jsx)(o.em,{children:"atributos"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"caminho"}),(0,n.jsx)(o.td,{children:"Text, Text array"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Caminho do m\xe9todo"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"atributos"}),(0,n.jsx)(o.td,{children:"Object, Object array"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Atributos para m\xe9todos selecionados"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"*"}),(0,n.jsx)(o.td,{children:"Operador"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"se passado = comando aplica para banco de dados local quando executado a partir de um componente (par\xe2metro ignorado fora desse contexto)"})]})]})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O novo comando ",(0,n.jsx)(o.strong,{children:"METHOD GET ATTRIBUTES"})," retorna, em ",(0,n.jsx)(o.em,{children:"atributos"}),", o valor atual de todos os atributos para os m\xe9todos especificados no par\xe2metro ",(0,n.jsx)(o.em,{children:"caminho"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Este comando s\xf3 funciona com m\xe9todos de projeto. Se voc\xea passar um ",(0,n.jsx)(o.em,{children:"caminho"})," inv\xe1lido, um erro \xe9 gerado."]}),"\n",(0,n.jsxs)(o.p,{children:["Em ",(0,n.jsx)(o.em,{children:"caminho"}),", voc\xea pode passar seja um texto que contenha um caminho de m\xe9todo, ou um array de texto que contenha um array de caminhos. \xc9 necess\xe1rio passar o mesmo tipo de par\xe2metro (vari\xe1vel ou array) em ",(0,n.jsx)(o.em,{children:"atributos"}),", a fim de obter os atributos adequados."]}),"\n",(0,n.jsxs)(o.p,{children:["Em ",(0,n.jsx)(o.em,{children:"atributos"}),", passe um objeto ou um array de objetos, dependendo do par\xe2metro passado em ",(0,n.jsx)(o.em,{children:"caminho"}),'. Todos os atributos para o m\xe9todo s\xe3o retornados como propriedades do objeto com os valores de "True" / "False" para atributos booleanos e valores adicionais, se for necess\xe1rio (por exemplo, "scope", "table" para a propriedade 4D M\xf3vel ).']}),"\n",(0,n.jsxs)(o.p,{children:["Se o comando for executado a partir de um componente, aplica-se por padr\xe3o para os m\xe9todos de componentes. Se voc\xea passar o par\xe2metro ",(0,n.jsx)(o.em,{children:"*"}),", acessa os m\xe9todos do banco de dados local."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Nota"}),": a propriedade ",(0,n.jsx)(o.em,{children:"published4DMobile"})," \xe9 obsoleta a partir de 4D v18."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsxs)(o.p,{children:["Se voc\xea quiser obter os atributos do m\xe9todo de projeto ",(0,n.jsx)(o.em,{children:"sendMail"}),", pode escrever:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:'\xa0var $att : Object\n\xa0METHOD GET ATTRIBUTES("sendMail";$att)\n'})}),"\n",(0,n.jsx)(o.p,{children:"Depois da execu\xe7\xe3o, $att cont\xe9m, por exemplo:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "invisible":false,\n\xa0\xa0\xa0 "publishedWeb":false,\n\xa0\xa0\xa0 "publishedSoap":false,\n\xa0\xa0\xa0 "publishedWsdl":false,\n\xa0\xa0\xa0 "shared":false,\n\xa0\xa0\xa0 "publishedSql":false,\n\xa0\xa0\xa0 "executedOnServer":false,\n\xa0\xa0\xa0 "published4DMobile":{\n\xa0\xa0\xa0 \xa0\xa0\xa0 "scope":"table",\n\xa0\xa0\xa0 \xa0\xa0\xa0 "table":"Table_1"\n\xa0\xa0\xa0 }\n}\n'})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,t){t.d(o,{Z:function(){return d},a:function(){return a}});var s=t(667294);let n={},r=s.createContext(n);function a(e){let o=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);