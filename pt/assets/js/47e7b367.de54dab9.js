"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57285"],{64599:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"WritePro/commands-legacy/wp-text-range","title":"WP Text range","description":"WP Text range ( wpArea ; inicioFaixa ; fimFaixa ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-text-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-text-range","permalink":"/docs/pt/20-R7/WritePro/commands/wp-text-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-text-range.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-text-range","title":"WP Text range","slug":"/WritePro/commands/wp-text-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP TABLE SPLIT CELLS","permalink":"/docs/pt/20-R7/WritePro/commands/wp-table-split-cells"},"next":{"title":"WP USE PAGE SETUP","permalink":"/docs/pt/20-R7/WritePro/commands/wp-use-page-setup"}}'),t=n("785893"),o=n("250065");let i={id:"wp-text-range",title:"WP Text range",slug:"/WritePro/commands/wp-text-range",displayed_sidebar:"docs"},s=void 0,d={},c=[{value:"Compatibilidade",id:"compatibilidade",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WP Text range"})," ( ",(0,t.jsx)(r.em,{children:"wpArea"})," ; ",(0,t.jsx)(r.em,{children:"inicioFaixa"})," ; ",(0,t.jsx)(r.em,{children:"fimFaixa"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"wpArea"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Objeto vari\xe1vel ou campo 4D Write Pro"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"inicioFaixa"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"In\xedcio offset da faixa de texto"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"fimFaixa"}),(0,t.jsx)(r.td,{children:"Integer"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Final offset da faixa texto"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Resultado"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Faixa de objeto"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"compatibilidade",children:"Compatibilidade"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WP Text range"})," recebeu o nome ",(0,t.jsx)(r.strong,{children:"WP Get range"})," em vers\xf5es anteriores de 4D Write Pro. Foi renomeado para maior clareza."]}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["O novo comando ",(0,t.jsx)(r.strong,{children:"WP Text range d"}),"evolve um novo objeto de faixa de texto (objFaixa) que contem a sele\xe7\xe3o entre ",(0,t.jsx)(r.em,{children:"faixaInicio"})," e ",(0,t.jsx)(r.em,{children:"faixaFim"})," na \xe1rea ",(0,t.jsx)(r.em,{children:"wpArea"})," 4D Write Pro."]}),"\n",(0,t.jsxs)(r.p,{children:["Um ",(0,t.jsx)(r.strong,{children:"4D Write Pro objeto de faixa de texto"})," pode ser usado para manejar atributos numa sele\xe7\xe3o de texto (com os comandos ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," e ",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"}),"). Para saber mais consulte o par\xe1grafo ",(0,t.jsx)(r.em,{children:"Comandos de sele\xe7\xe3o de faixa"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Pode passar em ",(0,t.jsx)(r.em,{children:"alvoObj"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"uma range, ou"}),"\n",(0,t.jsx)(r.li,{children:"um elemento (tabela/ linha / par\xe1grafo / imagem inline/corpo/cabe\xe7alho/rodap\xe9/se\xe7\xe3o/subse\xe7\xe3o), ou"}),"\n",(0,t.jsx)(r.li,{children:"um documento 4D Write Pro"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Se nenhum objeto v\xe1lido for passado no par\xe2metro ",(0,t.jsx)(r.em,{children:"targetObj"}),", uma rangeObj vazia for retornada."]}),"\n",(0,t.jsxs)(r.p,{children:["Em ",(0,t.jsx)(r.em,{children:"faixaInicio"})," e ",(0,t.jsx)(r.em,{children:"faixaFim"}),", passe os valores correspondentes a posi\xe7\xe3o dos primeiros e \xfaltimos caracteres a selecionar no documento. Pode passar wk start text em ",(0,t.jsx)(r.em,{children:"faixaInicio"}),(0,t.jsx)(r.br,{}),"\npara definir o come\xe7o do documento e wk end text em ",(0,t.jsx)(r.em,{children:"faixaFim"})," para definir o final do documento. Lembre que um documento 4D Write Pro n\xe3o s\xf3 cont\xe9m texto vis\xedvel, como tamb\xe9m as etiquetas de formato que s\xe3o inclu\xeddas na faixa."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Nota:"})," Se passar um elemento de refer\xeancia tabela, linha, par\xe1grafo, imagem inline, corpo, cabe\xe7alho, se\xe7\xe3o ou subse\xe7\xe3o objeto de cabe\xe7alho ou rodap\xe9 em ",(0,t.jsx)(r.em,{children:"wpArea"}),", ",(0,t.jsx)(r.em,{children:"faixaInicio"})," e ",(0,t.jsx)(r.em,{children:"faixaFim"})," ser\xe1 relativo ao \xedndice inicial e final do elemento da range. Por exemplo, se um cabe\xe7alho for passado, , wk start text designa o caractere que inicia o cabe\xe7alho e wk end text o caractere que termina o cabe\xe7alho; se um elemento de refer\xeancia da tabela for passado, o comando vai retoranr uma range de texto relativa \xe0s refer\xeancias de tabela de ",(0,t.jsx)(r.em,{children:"targetObj"})," se a se\xe7\xe3o for passada ",(0,t.jsx)(r.em,{children:"startRange"})," e ",(0,t.jsx)(r.em,{children:"endRange"})," s\xe3o relativas ao corpo do documento (\xe1rea pai da range criada de uma se\xe7\xe3o). Ver exemplo 2."]}),"\n",(0,t.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(r.p,{children:"Se quiser selecionar uma faixa de 12 caracteres come\xe7ando desde o principio do campo 4D Write Pro. O campo se mostra em um objeto de formul\xe1rio:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(413993).Z+"",width:"603",height:"196"})}),"\n",(0,t.jsx)(r.p,{children:"Se executar:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'\xa0$range2:=WP Get range([SAMPLE]WP;wk start text;12)\n\xa0WP SELECT(*;"WParea";$range2)\n'})}),"\n",(0,t.jsx)(r.p,{children:"...o resultado \xe9:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(25027).Z+"",width:"603",height:"198"})}),"\n",(0,t.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(r.p,{children:"Se quiser criar uma range (faixa de sele\xe7\xe3o) de uma se\xe7\xe3o:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0var $wpRange : Object\n\xa0$wpRange:=WP Text range(wpSection;1;11)\xa0//retorna uma range feita dos primeiros 10 caracteres da se\xe7\xe3o\n\xa0\xa0//se a se\xe7\xe3o iniciar em 100 no documento:\n\xa0\xa0//$wpRange.start = 100\n\xa0\xa0//$wpRange.end = 111\n"})}),"\n",(0,t.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-bookmark-range",children:"WP Bookmark range"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-body",children:"WP Get body"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-paragraph-range",children:"WP Paragraph range"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-picture-range",children:"WP Picture range"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-select",children:"WP SELECT"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-selection-range",children:"WP Selection range"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-table-range",children:"WP Table range"})]})]})}function m(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},413993:function(e,r,n){n.d(r,{Z:function(){return a}});let a=n.p+"assets/images/pict2644268.en-1f5cd9c238dde217c7beab80540aeddf.png"},25027:function(e,r,n){n.d(r,{Z:function(){return a}});let a=n.p+"assets/images/pict2644270.en-6eab3e080c831e71cafd90566e5a7c7d.png"},250065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return i}});var a=n(667294);let t={},o=a.createContext(t);function i(e){let r=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);