"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48047"],{808865:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>a,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/get-field-titles","title":"GET FIELD TITLES","description":"GET FIELD TITLES ( tabela ; titulosCampos ; numCampos )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-field-titles.md","sourceDirName":"commands-legacy","slug":"/commands/get-field-titles","permalink":"/docs/pt/commands/get-field-titles","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-field-titles.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-field-titles","title":"GET FIELD TITLES","slug":"/commands/get-field-titles","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get application color scheme","permalink":"/docs/pt/commands/get-application-color-scheme"},"next":{"title":"GET TABLE TITLES","permalink":"/docs/pt/commands/get-table-titles"}}'),o=n("785893"),d=n("250065");let r={id:"get-field-titles",title:"GET FIELD TITLES",slug:"/commands/get-field-titles",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"GET FIELD TITLES"})," ( ",(0,o.jsx)(s.em,{children:"tabela"})," ; ",(0,o.jsx)(s.em,{children:"titulosCampos"})," ; ",(0,o.jsx)(s.em,{children:"numCampos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"tabela"}),(0,o.jsx)(s.td,{children:"Table"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Tabela para qual voc\xea deseja encontrar os nomes dos campos"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"titulosCampos"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Nomes atuais dos campos"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"numCampos"}),(0,o.jsx)(s.td,{children:"Integer array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"N\xfameros de Campos"})]})]})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando GET FIELD TITLES preenche os arrays ",(0,o.jsx)(s.em,{children:"titulosCampos"})," e ",(0,o.jsx)(s.em,{children:"numCampos"})," com os nomes e os n\xfameros dos campos da ",(0,o.jsx)(s.em,{children:"Tabela"}),". Os conte\xfados desses dois arrays est\xe3o sincronizados."]}),"\n",(0,o.jsxs)(s.p,{children:["Se o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-field-titles",children:"SET FIELD TITLES"})," for chamado durante a sess\xe3o, GET FIELD TITLES retorna apenas os nomes \u201Cmodificados\u201D e os n\xfameros dos campos definidos utilizando este comando."]}),"\n",(0,o.jsx)(s.p,{children:"Do contr\xe1rio, GET FIELD TITLES retorna os nomes dos campos do banco definidos na janela de Estrutura."}),"\n",(0,o.jsx)(s.p,{children:"Em ambos casos, o comando n\xe3o retorna campos invis\xedveis."}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-table-titles",children:"GET TABLE TITLES"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-field-titles",children:"SET FIELD TITLES"})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return r}});var t=n(667294);let o={},d=t.createContext(o);function r(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);