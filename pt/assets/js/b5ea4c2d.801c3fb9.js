"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36914"],{660685:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/object-get-events","title":"OBJECT GET EVENTS","description":"OBJECT GET EVENTS ( { ;} objeto ; arrEvents* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-events.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-events","permalink":"/docs/pt/commands/object-get-events","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-events.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-events","title":"OBJECT GET EVENTS","slug":"/commands/object-get-events","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get enterable","permalink":"/docs/pt/commands/object-get-enterable"},"next":{"title":"OBJECT Get filter","permalink":"/docs/pt/commands/object-get-filter"}}'),t=n("785893"),s=n("250065");let a={id:"object-get-events",title:"OBJECT GET EVENTS",slug:"/commands/object-get-events",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"OBJECT GET EVENTS"})," ( {* ;} ",(0,t.jsx)(o.em,{children:"objeto"})," ; ",(0,t.jsx)(o.em,{children:"arrEvents"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"*"}),(0,t.jsx)(o.td,{children:"Operador"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objeto"}),(0,t.jsx)(o.td,{children:"any"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsxs)(o.td,{children:['Nome de objeto "" para designar o formul\xe1rio (se for especificado *) ou',(0,t.jsx)(o.br,{}),"Campo ou vari\xe1vel (se for omitido *)"]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"arrEvents"}),(0,t.jsx)(o.td,{children:"Integer array"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Array de eventos desativados"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.strong,{children:"OBJECT GET EVENTS"})," permite obter a configura\xe7\xe3o atual dos eventos formul\xe1rio do formul\xe1rio, do objeto ou dos objetos designado(s) pelos par\xe2metros ",(0,t.jsx)(o.em,{children:"objeto"})," e ",(0,t.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Os eventos formul\xe1rio se podem ativar/desativar, j\xe1 seja utilizando a lista de propriedades ou utilizando o comando ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/object-set-events",children:"OBJECT SET EVENTS"})," \xe9 chamado no processo atual."]}),"\n",(0,t.jsxs)(o.p,{children:["Se passar o par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"*"})," indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passa uma refer\xeancia de campo ou vari\xe1vel no lugar de uma cadeia (campo ou vari\xe1vel objeto unicamente).",(0,t.jsx)(o.br,{}),"\nPara obter a configura\xe7\xe3o dos eventos do formul\xe1rio para o pr\xf3prio formul\xe1rio, passe o par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"*"}),' e uma cadeia vazia "" em ',(0,t.jsx)(o.em,{children:"objeto"}),": neste caso, voc\xea designa o formul\xe1rio atual."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota:"})," Se deseja obter os eventos de um subformul\xe1rio relacionados com uma tabela, s\xf3 pode ser utilizada a sintaxe baseada no nome do objeto."]}),"\n",(0,t.jsxs)(o.p,{children:["Passe um array inteiro longo no par\xe2metro ",(0,t.jsx)(o.em,{children:"arrEvents"}),'. Quando se executa o comando, se atribui o tamanho a este array automaticamente e recebe todos os eventos formul\xe1rio pr\xe9-definidos ou personalizados que foram ativados para o objeto ou o formul\xe1rio. Pode comparar os valores recebidos com as constantes do tema "',(0,t.jsx)(o.em,{children:"Form event"}),'".']}),"\n",(0,t.jsxs)(o.p,{children:["Tenha em conta que o array ",(0,t.jsx)(o.em,{children:"arrEvents"})," se devolve vazio sem que nenhum m\xe9todo objeto esteja associado ao objeto ou se nenhum m\xe9todo formul\xe1rio se associa ao formul\xe1rio."]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Voc\xea quer ativar dois eventos e obter a lista de eventos para um objeto:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0ARRAY LONGINT($ArrCurrentEvents;0)\n\xa0ARRAY LONGINT($ArrEnabled;2)\n\xa0$ArrEnabled{1}:=On Header Click\n\xa0$ArrEnabled{2}:=On Footer Click\n\xa0OBJECT SET EVENTS(*;"Col1";$ArrEnabled;Enable events others unchanged)\n\xa0OBJECT GET EVENTS(*;"Col1";$ArrCurrentEvents)\n'})}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/commands/object-set-events",children:"OBJECT SET EVENTS"})}),"\n",(0,t.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"1238"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return a}});var r=n(667294);let t={},s=r.createContext(t);function a(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);