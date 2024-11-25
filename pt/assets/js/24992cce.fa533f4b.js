"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66482"],{918737:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>A,default:()=>l,assets:()=>a,toc:()=>i,frontMatter:()=>d});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-text","title":"WP Get text","description":"WP Get text ( objAlvo {; expressoes} ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-text.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-text","permalink":"/docs/pt/WritePro/commands/wp-get-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-text","title":"WP Get text","slug":"/WritePro/commands/wp-get-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get subsection","permalink":"/docs/pt/WritePro/commands/wp-get-subsection"},"next":{"title":"WP Get view properties","permalink":"/docs/pt/WritePro/commands/wp-get-view-properties"}}'),r=n("785893"),o=n("250065");let d={id:"wp-get-text",title:"WP Get text",slug:"/WritePro/commands/wp-get-text",displayed_sidebar:"docs"},A=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get text"})," ( ",(0,r.jsx)(t.em,{children:"objAlvo"})," {; ",(0,r.jsx)(t.em,{children:"expressoes"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe2metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objAlvo"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Range ou elemento ou documento 4D Write Pro"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expressoes"}),(0,r.jsx)(t.td,{children:"Number"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Instru\xe7\xf5es para avalia\xe7\xe3o de express\xf5es"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Resultado"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Texto do objRange"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(t.p,{children:["O comando ",(0,r.jsx)(t.strong,{children:"WP Get text"})," recupera o conte\xfado de texto de um documento 4D Write Pro dentro do ",(0,r.jsx)(t.em,{children:"objRange"})," especificado."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get text"})," s\xf3 devolve texto sem formato. Todo estilo aplicado (negrito, cursiva, etc.) ser\xe1 ignorado."]}),"\n",(0,r.jsxs)(t.p,{children:["No par\xe2metro ",(0,r.jsx)(t.em,{children:"objRange"}),", passe um objeto que contenha:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"uma range, ou"}),"\n",(0,r.jsx)(t.li,{children:"um elemento (tabela / par\xe1grafo / corpo / cabe\xe7alho / rodap\xe9), ou"}),"\n",(0,r.jsx)(t.li,{children:"um documento 4D Write Pro"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Nota:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Se passar um documento 4D Write Pro em ",(0,r.jsx)(t.em,{children:"objAlvo"}),", o comando s\xf3 retorna o texto do elemento corpo do documento"]}),"\n",(0,r.jsxs)(t.li,{children:["Se passar uma subse\xe7\xe3o em ",(0,r.jsx)(t.em,{children:"objRange"}),", o comando retorna o texto da se\xe7\xe3o pai."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["O par\xe2metro opcional ",(0,r.jsx)(t.em,{children:"express\xf5es"})," d\xe1 instru\xe7\xf5es para a avalia\xe7\xe3o de expres\xf5es 4D dentro de ",(0,r.jsx)(t.em,{children:"objRange"}),".(para saber mais ",(0,r.jsx)(t.em,{children:"Gest\xe3o de f\xf3rmulas"})," ). As op\xe7\xf5es s\xe3o:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constante"}),(0,r.jsx)(t.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk expressions as source"}),(0,r.jsx)(t.td,{children:"\xc9 devolvida a string original de refer\xeancias de express\xe3o 4D."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk expressions as space"}),(0,r.jsx)(t.td,{children:"Cada refer\xeancia \xe9 devolvida como um caractere de espa\xe7o n\xe3o disruptivo."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk expressions as value"}),(0,r.jsx)(t.td,{children:"As refer\xeancias de express\xe3o 4D s\xe3o devolvidas em seu formul\xe1rio avaliado. (Como padr\xe3o se a op\xe7\xe3o n\xe3o for passada)."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Importante"}),": somente o texto sem formato com wk expressions as space \xe9 consistente com os \xedndices de range (faixa) de texto utilizados pelos comandos WP ou ST, j\xe1 que os comandos WP e ST sempre assumem o tamanho de express\xe3o= 1 caractere."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Notas"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Se ",(0,r.jsx)(t.em,{children:"objRango"}),' contiver im\xe1gens, as imagens s\xe3o ignoradas e devolvidas como caracteres espaciais ("").']}),"\n",(0,r.jsxs)(t.li,{children:["Se ",(0,r.jsx)(t.em,{children:"objRango"})," contiver tabelas, o conte\xfado de cada c\xe9lula se trata como par\xe1grafos individuais e s\xe3o devolvidas como texto separado por abas. As filas est\xe3o separadas por retornos de carro."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(t.p,{children:"Para recuperar o texto neste documento:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(768145).Z+"",width:"538",height:"123"})}),"\n",(0,r.jsx)(t.p,{children:"pode escrever:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0$range:=WP Text range(myDoc2;wk start text;wk end text)\n\xa0vText:=WP Get text($range;wk expressions as value)\xa0//devolve "Al\xf4 mundo! Hoje \xe9: 06/03/18."\n\xa0vText2:=WP Get text($range;wk expressions as source)\xa0//devolve "Al\xf4 mundo! Hoje \xe9: Current date."\n\xa0vText3:=WP Get text($range;wk expressions as space)\xa0//devolve "Al\xf4 mundo! Hoje \xe9:\xa0 ."\n'})}),"\n",(0,r.jsx)(t.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Gest\xe3o de f\xf3rmulas"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/pt/WritePro/commands/wp-set-text",children:"WP SET TEXT"})]})]})}function l(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},768145:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,t,n){n.d(t,{Z:function(){return A},a:function(){return d}});var s=n(667294);let r={},o=s.createContext(r);function d(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function A(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);