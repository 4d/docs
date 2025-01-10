"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14233"],{732221:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>s,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-picture-range","title":"WP Picture range","description":"WP Picture range ( faixaObj ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-picture-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-picture-range","permalink":"/docs/pt/WritePro/commands/wp-picture-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-picture-range.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-picture-range","title":"WP Picture range","slug":"/WritePro/commands/wp-picture-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Paragraph range","permalink":"/docs/pt/WritePro/commands/wp-paragraph-range"},"next":{"title":"WP PRINT","permalink":"/docs/pt/WritePro/commands/wp-print"}}'),a=n("785893"),i=n("250065");let s={id:"wp-picture-range",title:"WP Picture range",slug:"/WritePro/commands/wp-picture-range",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Compatibilidade",id:"compatibilidade",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"WP Picture range"})," ( ",(0,a.jsx)(r.em,{children:"faixaObj"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"faixaObj"}),(0,a.jsx)(r.td,{children:"Object"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Faixa do Objeto (range) do qual pegar as imagens"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Resultado"}),(0,a.jsx)(r.td,{children:"Object"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"Faixa de objeto contendo apenas imagens"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"compatibilidade",children:"Compatibilidade"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"WP Picture range"})," era chamado ",(0,a.jsx)(r.strong,{children:"WP Get pictures"})," em vers\xf5es anteriores de 4D Write Pro. Foi renomeado para ter mais claridade.."]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["O novo comando ",(0,a.jsx)(r.strong,{children:"WP Picture range"})," devolve uma faixa de objeto espec\xedfica que se refere unicamente as imagens contidas em ",(0,a.jsx)(r.em,{children:"faixaObj"}),(0,a.jsx)(r.br,{}),"\nque foi passada como par\xe2metro. A gama de objetos imagem devolvida deve ser utilizado por ",(0,a.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," e ",(0,a.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," para manejar os atributos imagem unicamente."]}),"\n",(0,a.jsxs)(r.p,{children:["Em ",(0,a.jsx)(r.em,{children:"faixaObj"}),", pode passar:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"uma faixa, ou"}),"\n",(0,a.jsx)(r.li,{children:"um elemento (tabela / fila / par\xe1grafo / cabe\xe7alho / rodap\xe9 / corpo/se\xe7\xe3o/subse\xe7\xe3o)"}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(r.p,{children:"Se quiser mudar apenas a cor da borda das imagens:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0$oPicts:=WP Picture range($oSelection)\n\xa0WP SET ATTRIBUTES($oPicts;wk border color;"blue")\n'})}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.em,{children:"Gerenciar Imagens"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.em,{children:"Utilizar os comandos do tema Texto com estilo"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-add-picture",children:"WP Add picture"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-insert-picture",children:"WP INSERT PICTURE"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-paragraph-range",children:"WP Paragraph range"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-selection-range",children:"WP Selection range"}),(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"/docs/pt/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return s}});var t=n(667294);let a={},i=t.createContext(a);function s(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);