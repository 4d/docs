"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39984"],{824965:function(e,r,t){t.r(r),t.d(r,{default:()=>m,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>i});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-attributes","title":"WP GET ATTRIBUTES","description":"WP GET ATTRIBUTES ( faixaObj ; nomeAtrib ; valorAtrib {; nomeAtrib2 ; valorAtrib2 ; ... ; nomeAtribN ; valorAtribN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-attributes.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-attributes","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-attributes","title":"WP GET ATTRIBUTES","slug":"/WritePro/commands/wp-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP FREEZE FORMULAS","permalink":"/docs/pt/20-R7/WritePro/commands/wp-freeze-formulas"},"next":{"title":"WP Get body","permalink":"/docs/pt/20-R7/WritePro/commands/wp-get-body"}}'),o=t("785893"),a=t("250065");let s={id:"wp-get-attributes",title:"WP GET ATTRIBUTES",slug:"/WritePro/commands/wp-get-attributes",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"WP GET ATTRIBUTES"})," ( ",(0,o.jsx)(r.em,{children:"faixaObj"})," ; ",(0,o.jsx)(r.em,{children:"nomeAtrib"})," ; ",(0,o.jsx)(r.em,{children:"valorAtrib"})," {; ",(0,o.jsx)(r.em,{children:"nomeAtrib2"})," ; ",(0,o.jsx)(r.em,{children:"valorAtrib2"})," ; ... ; ",(0,o.jsx)(r.em,{children:"nomeAtribN"})," ; ",(0,o.jsx)(r.em,{children:"valorAtribN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"faixaObj"}),(0,o.jsx)(r.td,{children:"Object"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Faixa do 4D Write Pro ou documento"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"nomeAtrib"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Nome do atributo a obter"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"valorAtrib"}),(0,o.jsx)(r.td,{children:"Texto, N\xfamero, Array, Collection, Imagem, Data"}),(0,o.jsx)(r.td,{children:"\uD83E\uDC58"}),(0,o.jsx)(r.td,{children:"Valor atual do atributo para a faixa de texto"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O novo comando ",(0,o.jsx)(r.strong,{children:"WP GET ATTRIBUTES"})," devolve o valor de qualquer atributo em uma faixa ou documento 4D Write Pro. Este comando lhe permite acessar a todo tipo de atributos internos 4D Write Pro: caractere, par\xe1grafo, documento, tabela ou imagem."]}),"\n",(0,o.jsxs)(r.p,{children:["No ",(0,o.jsx)(r.em,{children:"rangoObj"}),",o, pode passar:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"uma range (faixa de sele\xe7\xe3o)"}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"um elemento de refer\xeancia (cabe\xe7alho / rodap\xe9 / corpo / tabela / par\xe1grafo / imagem ancorada ou inline/se\xe7\xe3o/subse\xe7\xe3o/folha de estilo), ou"}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"um documento 4D Write Pro"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Para obter uma lista completa dos atributos a passar em ",(0,o.jsx)(r.em,{children:"nomAtrib"}),", assim como tamb\xe9m seus respectivos valores, por favor consulte a se\xe7\xe3o ",(0,o.jsx)(r.em,{children:"Atributos 4D Write Pro"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"Se houver diferentes valores para o mismo atributo na faixa ou o documento passado como par\xe2metro, o comando devolve:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"para valores num\xe9ricos, wk mixed"}),"\n",(0,o.jsxs)(r.li,{children:["para um array, um array vazio (paradas de tabula\xe7\xf5es, cor se ",(0,o.jsx)(r.em,{children:"valorAttib"})," estiver definido como array), com a exce\xe7\xe3o de wk text shadow offset para o qual o valor array sempre conter\xe1 2 entradas que podem ser definidas por separado como wk mixed se qualquer deslocamento horizontal ou vertical (ou ambos) s\xe3o combinados."]}),"\n",(0,o.jsx)(r.li,{children:"para valores string, uma sting vazia"}),"\n",(0,o.jsx)(r.li,{children:"para valores imagem, uma imagem vazia."}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota"}),": se ",(0,o.jsx)(r.em,{children:"rangeObj"})," conter um par\xe1grafo e uma folha de estilo de caracteres, se devolve o nome da folha de estilo de par\xe1grafo."]}),"\n",(0,o.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(r.p,{children:"Se quiser obter a cor de fundo da \xe1rea selecionada:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0$range:=WP Selection range(*;"WParea")\n\xa0WP GET ATTRIBUTES($range;wk background color;$bcol)\n'})}),"\n",(0,o.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"Atributos 4D Write Pro"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.em,{children:"Constantes 4D Write Pro"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"wp-reset-attributes.md",children:"WP RESET ATTRIBUTES"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return i},a:function(){return s}});var n=t(667294);let o={},a=n.createContext(o);function s(e){let r=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);