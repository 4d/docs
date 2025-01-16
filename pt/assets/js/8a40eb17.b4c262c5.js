"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90169"],{547345:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-set-attributes","title":"WP SET ATTRIBUTES","description":"WP SET ATTRIBUTES ( faixaObj ; atribNome ; atribValor {; atribNome2 ; atribValor2 ; ... ; atribNomeN ; atribValorN} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-set-attributes.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-set-attributes","permalink":"/docs/pt/20-R7/WritePro/commands/wp-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-set-attributes","title":"WP SET ATTRIBUTES","slug":"/WritePro/commands/wp-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Selection range","permalink":"/docs/pt/20-R7/WritePro/commands/wp-selection-range"},"next":{"title":"WP SET DATA CONTEXT","permalink":"/docs/pt/20-R7/WritePro/commands/wp-set-data-context"}}'),a=n("785893"),s=n("250065");let i={id:"wp-set-attributes",title:"WP SET ATTRIBUTES",slug:"/WritePro/commands/wp-set-attributes",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," ( ",(0,a.jsx)(t.em,{children:"faixaObj"})," ; ",(0,a.jsx)(t.em,{children:"atribNome"})," ; ",(0,a.jsx)(t.em,{children:"atribValor"})," {; ",(0,a.jsx)(t.em,{children:"atribNome2"})," ; ",(0,a.jsx)(t.em,{children:"atribValor2"})," ; ... ; ",(0,a.jsx)(t.em,{children:"atribNomeN"})," ; ",(0,a.jsx)(t.em,{children:"atribValorN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Par\xe2metro"}),(0,a.jsx)(t.th,{children:"Tipo"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"faixaObj"}),(0,a.jsx)(t.td,{children:"Object"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Range ou elemento de 4D Write Pro documento"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"atribNome"}),(0,a.jsx)(t.td,{children:"Text"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Nome do atributo a estabelecer"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"atribValor"}),(0,a.jsx)(t.td,{children:"Text, Number, Object, Collection, Picture, Date"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Novo valor do atributo"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(t.p,{children:["O novo comando ",(0,a.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," lhe permite estabelecer o valor de qualquer atributo em uma faixa, um elemento ou um documento. Este comando lhe permite acessar a qualquer tipo de atributo interno 4D Write Pro: caractere, par\xe1grafo, documento, tabela ou imagem."]}),"\n",(0,a.jsx)(t.p,{children:"No primeiro par\xe2metro, pode passar:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"uma faixa, ou"}),"\n",(0,a.jsx)(t.li,{children:"um elemento (cabe\xe7alho /rodap\xe9 /corpo /tabela /fila /par\xe1grafo /ancorado ou imagem inline/se\xe7\xe3o-subse\xe7\xe3o/folha de estilo) ou"}),"\n",(0,a.jsx)(t.li,{children:"um documento 4D Write Pro"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Em ",(0,a.jsx)(t.em,{children:"nomAtrib"}),", passe o nome do atributo a definir para o objetivo e em ",(0,a.jsx)(t.em,{children:"valorAtrib"}),", passe o novo valor a definir. Para obter uma lista completa dos atributos a passar em ",(0,a.jsx)(t.em,{children:"nomAtrib"}),", assim como seus respectivos valores, por favor consulte a se\xe7\xe3o ",(0,a.jsx)(t.em,{children:"Atributos 4D Write Pro"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Pode passar tantos pares de ",(0,a.jsx)(t.em,{children:"nomAtrib"}),"/ ",(0,a.jsx)(t.em,{children:"valorAtrib"})," quantos queira."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Nota:"})," se necessitar definir v\xe1rios atributos para o mesmo objetivo, est\xe1 otimizado para utilizar uma s\xf3 chamada a ",(0,a.jsx)(t.strong,{children:"WP SET ATTRIBUTES"})," com todos os pares de atributos/valores, ao inv\xe9s de chamar v\xe1rias vezes a ",(0,a.jsx)(t.strong,{children:"WP SET ATTRIBUTES"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(t.p,{children:"Nesta \xe1rea 4D Write Pro, selecione uma palavra:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(950062).Z+"",width:"497",height:"286"})}),"\n",(0,a.jsx)(t.p,{children:"Se executar o seguinte c\xf3digo:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0$range:=WP Get selection(*;"WParea")\xa0//obter a faixa selecionada\n\xa0\n\xa0\xa0// definir o deslocamento da sombra em pt para o texto selecionado\n\xa0WP SET ATTRIBUTES($range;wk text shadow offset;1)\n\xa0\xa0//set the paragraph padding\n\xa0WP SET ATTRIBUTES($range;wk padding;1)\n\xa0\xa0//define uma borda para\xa0 10 pt\n\xa0WP SET ATTRIBUTES($range;wk border style;wk solid)\n\xa0WP SET ATTRIBUTES($range;wk border width;10)\n\xa0\xa0//define as cores das bordas\n\xa0WP SET ATTRIBUTES($range;wk border color;"blue";wk border color bottom;"#00FA9A";wk border color right;"#00FA9A")\n'})}),"\n",(0,a.jsx)(t.p,{children:"Obtem o seguinte resultado:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(634021).Z+"",width:"497",height:"416"})}),"\n",(0,a.jsx)(t.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(t.p,{children:"Este exemplo ilustra o uso das constantes wk inside e wk outside:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0$wpRange:=WP Get selection(writeProdoc)\n\xa0WP SET ATTRIBUTES($wpRange;wk border style+wk inside;wk dotted)\n\xa0WP SET ATTRIBUTES($wpRange;wk border style+wk outside;wk solid)\n\xa0WP SET ATTRIBUTES($wpRange;wk border color+wk outside;"#00FA9A")\n'})}),"\n",(0,a.jsx)(t.p,{children:"Supondo que todo o conte\xfado foi selecionado, o resultado \xe9:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(442439).Z+"",width:"519",height:"282"})}),"\n",(0,a.jsx)(t.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(t.p,{children:"Se qioser estabelecer uma imagem de fundo para o documento:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0var WParea : Object\n\xa0WParea:=WP New\n\xa0\n\xa0READ PICTURE FILE("C:\\\\Pictures\\\\boats.jpg";$picture)\n\xa0\n\xa0WP SET ATTRIBUTES(WParea;wk background image;$picture)\n'})}),"\n",(0,a.jsx)(t.p,{children:"O resultado \xe9:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(467377).Z+"",width:"929",height:"1209"})}),"\n",(0,a.jsx)(t.p,{children:"Se quiser estabelecer uma imagem de fundo que cubra toda a \xe1rea de impress\xe3o:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0var WParea : Object\n\xa0WParea:=WP New\n\xa0\n\xa0READ PICTURE FILE("C:\\\\Pictures\\\\boats.jpg";$picture)\n\xa0\n\xa0WP SET ATTRIBUTES(WParea;wk background image;$picture)\n\xa0WP SET ATTRIBUTES(WParea;wk background clip;wk paper box)\n\xa0WP SET ATTRIBUTES(WParea;wk background origin;wk paper box)\n'})}),"\n",(0,a.jsx)(t.p,{children:"O resultado \xe9:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(688952).Z+"",width:"930",height:"1208"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Nota"}),": O valor de paper box \xe9 aplic\xe1vel apenas aos documentos e se\xe7\xf5es."]}),"\n",(0,a.jsx)(t.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsx)(t.p,{children:"Se quiser estabelecer abas em intervalos variados e criar caracteres diferentes como o caractere inicial"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0$tab1:=New object()\n\xa0$tab1[wk type]:=wk left\n\xa0$tab1[wk offset]:="3cm"\n\xa0$tab1[wk leading]:=""\n\xa0\n\xa0$tab2:=New object()\n\xa0$tab2[wk type]:=wk center\n\xa0$tab2[wk offset]:="8cm"\n\xa0$tab2[wk leading]:=""\n\xa0\n\xa0$tab3:=New object()\n\xa0$tab3[wk type]:=wk right\n\xa0$tab3[wk offset]:="12cm"\n\xa0$tab3[wk leading]:="."\n\xa0\n\xa0$_tabs:=New collection($tab1;$tab2;$tab3)\n\xa0WP SET ATTRIBUTES(wpArea;wk tabs;$_tabs)\n'})}),"\n",(0,a.jsx)(t.p,{children:"O resultado \xe9:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(313840).Z+"",width:"903",height:"280"})}),"\n",(0,a.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Atributos 4D Write Pro"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/pt/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"wp-reset-attributes.md",children:"WP RESET ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},950062:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict2643639.en-bc19ba21b2a04a6458119054fbb3c295.png"},634021:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict2643642.en-0233353f6bad20669469ae6fdbefc392.png"},442439:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict2821715.en-7c7e1af2be6980c3402bb508c021fb75.png"},467377:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict3514231.en-46d2c539799f5d0e85d2c69910adf85f.png"},688952:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict3514233.en-e2399b1a60b8eff205d2192ae0493b08.png"},313840:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict4251559.en-0b3a188b2a5dbc3152eccb4ef3f4aee6.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var r=n(667294);let a={},s=r.createContext(a);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);