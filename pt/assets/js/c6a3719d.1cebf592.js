"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39627"],{800290:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>a,assets:()=>d,toc:()=>i,contentTitle:()=>l});var a=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-range","title":"WP Table range","description":"WP Table range ( objFaixa ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-table-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-range","permalink":"/docs/pt/20-R7/WritePro/commands/wp-table-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-range.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-table-range","title":"WP Table range","slug":"/WritePro/commands/wp-table-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP TABLE MERGE CELLS","permalink":"/docs/pt/20-R7/WritePro/commands/wp-table-merge-cells"},"next":{"title":"WP TABLE SPLIT CELLS","permalink":"/docs/pt/20-R7/WritePro/commands/wp-table-split-cells"}}'),r=t("785893"),o=t("250065");let s={id:"wp-table-range",title:"WP Table range",slug:"/WritePro/commands/wp-table-range",displayed_sidebar:"docs"},l=void 0,d={},i=[{value:"Compatibilidade",id:"compatibilidade",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Table range"})," ( ",(0,r.jsx)(n.em,{children:"objFaixa"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objFaixa"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"faixa de objetos ou elemento do documento 4D Write Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Objeto de Faixa contendo apenas tabelas"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"compatibilidade",children:"Compatibilidade"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WP Table range"})," era chamada ",(0,r.jsx)(n.strong,{children:"WP Create table range"})," em vers\xf5es anteriores de 4D Write Pro. Foi renomeada por raz\xf5es de claridade."]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"WP Table range"})," devolve um objeto de range que trata s\xf3 as tabelas contidas em ",(0,r.jsx)(n.em,{children:"objRange"})," passado como par\xe2metro. Devolver\xe1 uma range de wk type table, mesmo se ",(0,r.jsx)(n.em,{children:"objRange"})," passado como par\xe2metro n\xe3o contiver uma tabela. O objeto de range de tabela devolvido pode ser utilizado por ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," e ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," para manejar os atributos que s\xe3o aplicados \xe0s tabelas e aos conte\xfados da tabela."]}),"\n",(0,r.jsxs)(n.p,{children:["No par\xe2metro ",(0,r.jsx)(n.em,{children:"objRange"}),", pode passar:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"uma range ou"}),"\n",(0,r.jsx)(n.li,{children:"um elemento (corpo / cabe\xe7alho / rodap\xe9 / par\xe1grafo/se\xe7\xe3o/subse\xe7\xe3o), ou"}),"\n",(0,r.jsx)(n.li,{children:"um documento 4D Write Pro"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser modificar a apar\xeancia das tabelas contidas na range tabela:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0tableRange:=WP Table range(myDoc)\n\xa0\xa0//atributos tabela\n\xa0WP SET ATTRIBUTES(tableRange;wk border style;wk solid;wk border color;"Blue";wk border width;"3px")\n\xa0WP SET ATTRIBUTES(tableRange;wk table align;wk center)\n\xa0\xa0// atributos texto \xa0\xa0\n\xa0WP SET ATTRIBUTES(tableRange;wk font size;12)\n\xa0WP SET ATTRIBUTES(tableRange;wk text transform;wk capitalize)\n\xa0WP SET ATTRIBUTES(tableRange;wk font bold;wk true)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-elements",children:"WP Get elements"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var a=t(667294);let r={},o=a.createContext(r);function s(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);