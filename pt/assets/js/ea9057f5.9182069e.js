"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78589"],{516051:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>r,metadata:()=>o,assets:()=>s,toc:()=>c,contentTitle:()=>i});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-new-text-box","title":"WP New text box","description":"WP New text box ( wpDoc ; pageNum ) -> Resultado","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-new-text-box.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-new-text-box","permalink":"/docs/pt/WritePro/commands/wp-new-text-box","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-text-box.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-new-text-box","title":"WP New text box","slug":"/WritePro/commands/wp-new-text-box","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New subsection","permalink":"/docs/pt/WritePro/commands/wp-new-subsection"},"next":{"title":"WP Paragraph range","permalink":"/docs/pt/WritePro/commands/wp-paragraph-range"}}'),a=n("785893"),d=n("250065");let r={id:"wp-new-text-box",title:"WP New text box",slug:"/WritePro/commands/wp-new-text-box",displayed_sidebar:"docs"},i=void 0,s={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2}];function x(e){let t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"WP New text box"})," ( ",(0,a.jsx)(t.em,{children:"wpDoc"})," ; ",(0,a.jsx)(t.em,{children:"pageNum"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Par\xe2metro"}),(0,a.jsx)(t.th,{children:"Tipo"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"wpDoc"}),(0,a.jsx)(t.td,{children:"Object"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"Documento 4D Write Pro"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"pageNum"}),(0,a.jsx)(t.td,{children:"Number"}),(0,a.jsx)(t.td,{children:"\u2192"}),(0,a.jsx)(t.td,{children:"N\xfamero de p\xe1gina onde ancorar a caixa de texto"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Resultado"}),(0,a.jsx)(t.td,{children:"Object"}),(0,a.jsx)(t.td,{children:"\u2190"}),(0,a.jsx)(t.td,{children:"Objeto caixa de texto"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,a.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(t.p,{children:["O comando ",(0,a.jsx)(t.strong,{children:"WP New text box"})," cria e retorna um novo objeto caixa de texto na p\xe1gina ",(0,a.jsx)(t.em,{children:"pageNum"})," de ",(0,a.jsx)(t.em,{children:"wpDoc"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Nota:"})," Para saber mais sobre caixas de texto, veja o par\xe1grafo ",(0,a.jsx)(t.em,{children:"Gerenciar caixas de texto"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["No par\xe2metro ",(0,a.jsx)(t.em,{children:"wpDoc"}),", passe um documento 4D Write Pro."]}),"\n",(0,a.jsxs)(t.p,{children:["Em ",(0,a.jsx)(t.em,{children:"pageNum"}),", passe o n\xfamero de p\xe1gina para o qual a caixa de texto deve ser ancorada. Se pageNum < 0 o n\xfamero de p\xe1gina ",(0,a.jsx)(t.strong,{children:"1"})," \xe9 usado (n\xe3o se gera um erro)."]}),"\n",(0,a.jsx)(t.p,{children:"O comando cria um novo elemento caixa de texto com os atributos padr\xe3o abaixo:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"width = 8 cm,"}),"\n",(0,a.jsx)(t.li,{children:"height = auto,"}),"\n",(0,a.jsx)(t.li,{children:"solid black border 1 pt,"}),"\n",(0,a.jsx)(t.li,{children:"padding = 4 pt,"}),"\n",(0,a.jsx)(t.li,{children:"margin = 0 pt,"}),"\n",(0,a.jsx)(t.li,{children:"background color = white,"}),"\n",(0,a.jsx)(t.li,{children:'id = "textBoxN" onde N \xe9 um n\xfamero,'}),"\n",(0,a.jsx)(t.li,{children:"ancorado na frente do corpo no canto esquerdo superior do ret\xe2ngulo de p\xe1gina (imagem, uma caixa de texto pode ser ancorada em modo embebido, ou a uma se\xe7\xe3o, a todas as se\xe7\xf5es ou uma subse\xe7\xe3o em modo p\xe1gina e ao fundo ou camada superior)"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Ver a se\xe7\xe3o ",(0,a.jsx)(t.em,{children:"Atributos 4D Write Pro"})," para descri\xe7\xe3o detalhada desses atributos. ."]}),"\n",(0,a.jsxs)(t.p,{children:["A nova caixa de texto \xe9 renderizada s\xf3 na p\xe1gina ",(0,a.jsx)(t.em,{children:"pageNum,"})," ent\xe3o n\xe3o pode ser renderizada se:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"n\xe3o houver p\xe1gina com o n\xfamero de p\xe1gina passado"}),"\n",(0,a.jsx)(t.li,{children:"o modo de exibi\xe7\xe3o atual est\xe1 embebido ou esbo\xe7o"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Entretanto, a caixa de texto ainda existe e \xe9 propriedade do documento mesmo se n\xe3o renderizada."}),"\n",(0,a.jsx)(t.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(t.p,{children:"Se quiser criar uma caixa de texto padr\xe3o:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0$textBox:=WP New text box(WParea;1)\n"})}),"\n",(0,a.jsx)(t.p,{children:"Resultado:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(306278).Z+"",width:"855",height:"154"})}),"\n",(0,a.jsx)(t.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(t.p,{children:"Se quiser adicionar uma caixa de texto em um modelo de carta, para exibir o endere\xe7o do destinat\xe1rio (que est\xe1 armazenado no contexto):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// #1 create the text box\n\xa0$textBox:=WP New text box(WParea;1)\n\xa0\n\xa0\xa0// #2 define some text box attributes\n\xa0WP SET ATTRIBUTES($textBox;wk id;"AddressArea")\n\xa0WP SET ATTRIBUTES($textBox;wk anchor origin;wk paper box)\n\xa0WP SET ATTRIBUTES($textBox;wk anchor horizontal align;wk left;wk vertical align;wk top)\n\xa0WP SET ATTRIBUTES($textBox;wk anchor horizontal offset;$form.offsetX.values[$form.offsetX.index])\n\xa0WP SET ATTRIBUTES($textBox;wk anchor vertical offset;$form.offsetY.values[$form.offsetY.index])\n\xa0WP SET ATTRIBUTES($textBox;wk width;$form.width.values[$form.width.index])\n\xa0WP SET ATTRIBUTES($textBox;wk height;$form.height.values[$form.height.index])\n\xa0WP SET ATTRIBUTES($textBox;wk padding;$form.padding.values[$form.padding.index])\xa0// margens interiores\n\xa0WP SET ATTRIBUTES($textBox;wk border style;wk dashed;wk border color;"Blue";wk border width;"1pt";wk border radius;"10pt")\n\xa0WP SET ATTRIBUTES($textBox;wk vertical align;wk center)\n\xa0\n\xa0\xa0// #3: define as f\xf3rmulas dentro da caixa de texto\n\xa0WP INSERT FORMULA($textBox;Formula(This.data.fullName);wk append)\n\xa0WP INSERT BREAK($textBox;wk paragraph break;wk append)\n\xa0WP INSERT FORMULA($textBox;Formula(This.data.fullAddress);wk append)\n\xa0\n\xa0\xa0// #4: D\xe1 estilo ao conte\xfado da caixa de texto\n\xa0WP SET ATTRIBUTES($textBox;wk font;"Arial";wk font bold;wk true;wk font size;"18pt")\n'})}),"\n",(0,a.jsx)(t.p,{children:"Result:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(343498).Z+"",width:"787",height:"349"})}),"\n",(0,a.jsx)(t.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/docs/pt/WritePro/commands/wp-delete-text-box",children:"WP DELETE TEXT BOX"})})]})}function l(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},306278:function(e,t,n){n.d(t,{Z:function(){return o}});let o="data:image/png;base64,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"},343498:function(e,t,n){n.d(t,{Z:function(){return o}});let o=n.p+"assets/images/pict6196766.en-d5d2395be47707f47da410df890a3061.png"},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return r}});var o=n(667294);let a={},d=o.createContext(a);function r(e){let t=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);