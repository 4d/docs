"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73844"],{484981:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-header","title":"WP Get header","description":"WP Get header ( objFaixa ) | (docWP ; indiceSecao {; subsecaoTipo} )  -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-header.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-header","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-header.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-header","title":"WP Get header","slug":"/WritePro/commands/wp-get-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get frame","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-frame"},"next":{"title":"WP Get links","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-links"}}'),o=r("785893"),a=r("250065");let d={id:"wp-get-header",title:"WP Get header",slug:"/WritePro/commands/wp-get-header",displayed_sidebar:"docs"},s=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"WP Get header"})," ( ",(0,o.jsx)(n.em,{children:"objFaixa"})," ) | (",(0,o.jsx)(n.em,{children:"docWP"})," ; ",(0,o.jsx)(n.em,{children:"indiceSecao"})," {; ",(0,o.jsx)(n.em,{children:"subsecaoTipo"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objFaixa"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Faixa 4D Write Pro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"docWP"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Documento 4D Write Pro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"indiceSecao"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Indice se\xe7\xe3o"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"subsecaoTipo"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Tipo sub-se\xe7\xe3o (wk first page, wk left page ou wk right page)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Cabe\xe7alho 4D Write Pro"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"WP Get header"})," devolve um cabe\xe7alho associado a faixa ",(0,o.jsx)(n.em,{children:"objFaixa"})," ou ao ",(0,o.jsx)(n.em,{children:"indiceSecao"})," do documento ",(0,o.jsx)(n.em,{children:"wpDoc"}),". Se n\xe3o encontrar nenhum cabe\xe7alho com respeito aos par\xe2metros, o comando devovle Null."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Com a primeira sintaxe (utilizando o par\xe2metro ",(0,o.jsx)(n.em,{children:"objFaix"}),"a), o comando devolve o cabe\xe7alho da primeira p\xe1gina da faixa. Se uma subse\xe7\xe3o estiver ativa na p\xe1gina, o comando devolve o cabe\xe7alho da subse\xe7\xe3o ativa, portanto sempre devolve o cabe\xe7alho vis\xedvel."]}),"\n",(0,o.jsxs)(n.li,{children:["Com a segunda sintaxe (utilizando o par\xe2metro ",(0,o.jsx)(n.em,{children:"wpDoc"}),"), o comando devolve o cabe\xe7alho da se\xe7\xe3o ",(0,o.jsx)(n.em,{children:"indiceSecao"})," especificada (o valor ",(0,o.jsx)(n.em,{children:"indiceSecao"})," deve ser >=1).",(0,o.jsx)(n.br,{}),"\nSe for passada o par\xe2metro ",(0,o.jsx)(n.em,{children:"tipoSubSecao"}),", o comando devolve o cabe\xe7alho associado ao tipo de subse\xe7\xe3o especificado. Pode passar uma das constantes abaixo no par\xe2metro ",(0,o.jsx)(n.em,{children:"tipoSubSecao"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk first page"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"1"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk left page"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"2"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"wk right page"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Se n\xe3o for especificado o ",(0,o.jsx)(n.em,{children:"tipoSubSecao"}),", se devolver\xe1 o cabe\xe7alho da se\xe7\xe3o principal. Nesse caso, se uma subse\xe7\xe3o estiver activa, o objeto de cabe\xe7alho da se\xe7\xe3o principal est\xe1 ",(0,o.jsx)(n.em,{children:"indefinido"})," (o cabe\xe7alho da se\xe7\xe3o principal s\xf3 est\xe1 dispon\xedvel se n\xe3o tiver nenhuma subse\xe7\xe3o wk first page ou wk left page ativa)."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Se quiser copiar o cabe\xe7alho da primeira p\xe1gina de um documento 4D Write Pro aos cabe\xe7alhos de todas as p\xe1ginas de outro documento 4D Write Pro:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0var $headerSource;$rangeSource;$tempoc;$headerTarget;$rangeTarget : Object\n\xa0\n\xa0$headerSource:=WP Get header([TEMPLATES]WPtemplate;1;wk first page)\xa0//obter o cabe\xe7alho da primeira p\xe1gina da se\xe7\xe3o 1\n\xa0$rangeSource:=WP Text range($headerSource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$headerTarget:=WP Get header([Docs]MyWPDoc;1)\xa0//todas as p\xe1ginas da se\xe7\xe3o 1\n\xa0$rangeTarget:=WP Text range($headerTarget;wk start text;wk end text)\n\xa0\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.em,{children:"Utilizar uma \xe1rea 4D Write Pro"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-delete-header",children:"WP DELETE HEADER "}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-new-header",children:"WP New header"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return d}});var t=r(667294);let o={},a=t.createContext(o);function d(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);