"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9652"],{206197:function(e,o,n){n.r(o),n.d(o,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-footer","title":"WP Get footer","description":"WP Get footer ( objFaixa ) | (docWP ; indiceSecao {; subtipoSecao} )  -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-footer.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-footer","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-footer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-footer","title":"WP Get footer","slug":"/WritePro/commands/wp-get-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get elements","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-elements"},"next":{"title":"WP Get formulas","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-formulas"}}'),t=n("785893"),d=n("250065");let s={id:"wp-get-footer",title:"WP Get footer",slug:"/WritePro/commands/wp-get-footer",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"WP Get footer"})," ( ",(0,t.jsx)(o.em,{children:"objFaixa"})," ) | (",(0,t.jsx)(o.em,{children:"docWP"})," ; ",(0,t.jsx)(o.em,{children:"indiceSecao"})," {; ",(0,t.jsx)(o.em,{children:"subtipoSecao"}),"} )  -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objFaixa"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Faixa do 4D Write Pro"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"docWP"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Documento 4D Write Pro"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"indiceSecao"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"\xcdndice de Se\xe7\xe3o"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"subtipoSecao"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Subtipo de se\xe7\xe3o (wk first page, wk left page ou wk right page)"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Resultado"}),(0,t.jsx)(o.td,{children:"Object"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Rodap\xe9 4D Write Pro"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.strong,{children:"WP Get footer"})," devolveo rodap\xe9 de p\xe1gina associado a faixa ",(0,t.jsx)(o.em,{children:"objfaixa"})," ou ao ",(0,t.jsx)(o.em,{children:"indiceSe\xe7\xe3o"})," especificado do documento ",(0,t.jsx)(o.em,{children:"wpDoc"}),". ]. Se n\xe3o for encontrado nenhum rodap\xe9 relativo aos par\xe2metros, o comando devolve Null."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Com a primeira sintaxe (utilizando o par\xe2metro ",(0,t.jsx)(o.em,{children:"objfaixa"}),"), o comando devolve o rodap\xe9 da primeira p\xe1gina da faixa. Se uma subse\xe7\xe3o estiver ativa na p\xe1gina, o comando devolve o rodap\xe9 da subse\xe7\xe3o ativa, portanto sempre devolve o rodap\xe9 de p\xe1gina vis\xedvel."]}),"\n",(0,t.jsxs)(o.li,{children:["Com a segunda sintaxe (utilizando o par\xe2metro ",(0,t.jsx)(o.em,{children:"wpDoc"}),"), o comando devolve o rodap\xe9 da se\xe7\xe3o ",(0,t.jsx)(o.em,{children:"indiceSe\xe7\xe3o"})," especificada (o valor ",(0,t.jsx)(o.em,{children:"indiceSecao"})," deve ser >=1).",(0,t.jsx)(o.br,{}),"\nSe for passado o par\xe2metro ",(0,t.jsx)(o.em,{children:"tipoSubSecao"}),", o comando devolve o rodap\xe9 de p\xe1gina associado ao tipo de subse\xe7\xe3o especificado. Pode passar uma das constantes abaixo no par\xe2metro ",(0,t.jsx)(o.em,{children:"tipoSubSecao"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Constante"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{children:"Valor"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"wk first page"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"1"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"wk left page"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"2"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"wk right page"}),(0,t.jsx)(o.td,{children:"Inteiro longo"}),(0,t.jsx)(o.td,{children:"3"})]})]})]}),"\n",(0,t.jsxs)(o.p,{children:["Se n\xe3o for especificado ",(0,t.jsx)(o.em,{children:"tipoSubSe\xe7\xe3o"}),", se devolver\xe1 o rodap\xe9 de p\xe1gina da se\xe7\xe3o principal. Nesse caso, se uma subse\xe7\xe3o estiver ativa, o objeto de rodap\xe9 de p\xe1gina da se\xe7\xe3o principal n\xe3o est\xe1 definido (o rodap\xe9 de p\xe1gina da se\xe7\xe3o principal s\xf3 est\xe1 dispon\xedvel se n\xe3o houver nenhuma subse\xe7\xe3o wk first page ou wk left page ativa)."]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Se quiser copiar o rodap\xe9 da primeira p\xe1gina de um documento 4D Write Pro nos rodap\xe9s de todas as p\xe1ginas de outro documento 4D Write Pro:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:"\xa0var $footerSource;$rangeSource;$tempoc;$footerTarget;$rangeTarget : Object\n\xa0\n\xa0$footerSource:=WP Get footer([TEMPLATES]WPtemplate;1;wk first page)\xa0//obt\xe9m o rodap\xe9 da primeira p\xe1gina da se\xe7\xe3o 1\n\xa0$rangeSource:=WP Text range($footerSource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$footerTarget:=WP Get footer([Docs]MyWPDoc;1)\xa0//todas as p\xe1ginas da se\xe7\xe3o 1\n\xa0$rangeTarget:=WP Text range($footerTarget;wk start text;wk end text)\n\xa0\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.em,{children:"Utilizar uma \xe1rea 4D Write Pro"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-delete-footer",children:"WP DELETE FOOTER"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-frame",children:"WP Get frame"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function p(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return s}});var r=n(667294);let t={},d=r.createContext(t);function s(e){let o=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);