"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34128"],{671130:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/set-macro-parameter","title":"SET MACRO PARAMETER","description":"SET MACRO PARAMETER ( seletor ; paramTexto )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-macro-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-macro-parameter","permalink":"/docs/pt/20-R8/commands/set-macro-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-macro-parameter.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-macro-parameter","title":"SET MACRO PARAMETER","slug":"/commands/set-macro-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET ENVIRONMENT VARIABLE","permalink":"/docs/pt/20-R8/commands/set-environment-variable"},"next":{"title":"START MONITORING ACTIVITY","permalink":"/docs/pt/20-R8/commands/start-monitoring-activity"}}'),o=t("785893"),s=t("250065");let d={id:"set-macro-parameter",title:"SET MACRO PARAMETER",slug:"/commands/set-macro-parameter",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Nota",id:"nota",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SET MACRO PARAMETER"})," ( ",(0,o.jsx)(n.em,{children:"seletor"})," ; ",(0,o.jsx)(n.em,{children:"paramTexto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"seletor"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Sele\xe7\xe3o a usar"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"paramText"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Texto enviado"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando SET MACRO PARAMETER insere o texto ",(0,o.jsx)(n.em,{children:"paramText"})," no m\xe9todo desde o qual \xe9 chamado."]}),"\n",(0,o.jsxs)(n.p,{children:["Se for selecionado texto no m\xe9todo, o par\xe2metro ",(0,o.jsx)(n.em,{children:"seletor"})," permite definir se o texto ",(0,o.jsx)(n.em,{children:"paramText"})," deve substituir todo o m\xe9todo ou apenas o texto selecionado. Em ",(0,o.jsx)(n.em,{children:"seletor"}),", pode passar uma das seguintes constantes, do tema \u201C\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Full method text"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"1"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Highlighted method text"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Se nenhum texto tiver sido selecionado, ",(0,o.jsx)(n.em,{children:"paramText"})," \xe9 inserido no m\xe9todo."]}),"\n",(0,o.jsx)(n.h2,{id:"nota",children:"Nota"}),"\n",(0,o.jsxs)(n.p,{children:["Para que os comandos ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-macro-parameter",title:"GET MACRO PARAMETER",children:"GET MACRO PARAMETER"})," e SET MACRO PARAMETER funcionem corretamente, o novo atributo \u201Cversion\u201D deve ser declarado na pr\xf3pria macro desta forma:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<macro name="MyMacro" version="2">\n--- Text of macro ---\n</macro>\n'})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Esta macro cria um novo texto que ser\xe1 devolvido ao m\xe9todo que faz a chamada:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var $texto_entrada : Text\n\xa0var $texto_sa\xedda : Text\n\xa0GET MACRO PARAMETER(Highlighted method text;$texto_entrada)\n\xa0\xa0//Suponha que o texto selecionado seja uma tabela, ex. \u201C[Clientes]\u201D\n\xa0$texto_sa\xedda:=""\n\xa0$texto_sa\xedda:=$texto_sa\xedda+Command name(47)+"("+$texto_entrada+")"\xa0// Selecionar todos ([Clientes])\n\xa0$texto_sa\xedda:=$texto_sa\xedda+"$i:="+Command name(76)+"("+$texto_entrada+")"\xa0// $i:=Records in selection([Clientes])\n\xa0SET MACRO PARAMETER(Highlighted method text;$texto_sa\xedda)\n\xa0\xa0//Substitui o texto selecionado pelo novo c\xf3digo\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-macro-parameter",children:"GET MACRO PARAMETER"})}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"998"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var r=t(667294);let o={},s=r.createContext(o);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);