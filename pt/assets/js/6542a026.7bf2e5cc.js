"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55670"],{127458:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/st-set-text","title":"ST SET TEXT","description":"ST SET TEXT ( { ;} objeto ; novoTexto {; inicioSel {; fimSel*}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-set-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-text","permalink":"/docs/pt/20-R7/commands/st-set-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-set-text","title":"ST SET TEXT","slug":"/commands/st-set-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET PLAIN TEXT","permalink":"/docs/pt/20-R7/commands/st-set-plain-text"},"next":{"title":"Subrecords","permalink":"/docs/pt/20-R7/category/subrecords"}}'),s=n("785893"),i=n("250065");let r={id:"st-set-text",title:"ST SET TEXT",slug:"/commands/st-set-text",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"ST SET TEXT"})," ( {* ;} ",(0,s.jsx)(o.em,{children:"objeto"})," ; ",(0,s.jsx)(o.em,{children:"novoTexto"})," {; ",(0,s.jsx)(o.em,{children:"inicioSel"})," {; ",(0,s.jsx)(o.em,{children:"fimSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"*"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 uma vari\xe1vel ou campo"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"any"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Nome de objeto (se * for especificado) ou campo ou vari\xe1vel Texto (se * for omitido)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"novoText"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Texto a inserir"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"inicioSel"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"In\xedcio da sele\xe7\xe3o"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"fimSel"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Final da sele\xe7\xe3o"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando OBJECT SET STYLED TEXT insere o texto passado no par\xe2metro ",(0,s.jsx)(o.em,{children:"novoTexto"})," no campo ou vari\xe1vel de texto com estilo designado pelo par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"}),". Este comando s\xf3 \xe9 aplicado ao texto sem formato do par\xe2metro de ",(0,s.jsx)(o.em,{children:"objeto"}),", sem modificar as etiquetas de estilo que contenha. Se pode utilizar para modificar por programa\xe7\xe3o, texto com estilo na tela."]}),"\n",(0,s.jsx)(o.h5,{id:""}),"\n",(0,s.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Durante a execu\xe7\xe3o, se o objeto tem o foco, o comando s\xf3 se aplica ao objeto que est\xe1 sendo editado e n\xe3o a sua fonte de dados (campo ou vari\xe1vel). As mudan\xe7as s\xf3 se transferem a fonte (e a qualquer outro objeto com esta mesma fonte) quando o objeto que se est\xe1 editando se valida, seja por perder o foco ou com a tecla ",(0,s.jsx)(o.strong,{children:"Intro"}),". Quando o objeto n\xe3o tem o foco, o comando se aplica diretamente a fonte de dados e as mudan\xe7as s\xe3o imediatamente transferidos a outros objetos com a mesma fonte.",(0,s.jsx)(o.br,{}),"\nSe omitido o par\xe2metro ",(0,s.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,s.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel e se passa uma referencia de campo ou vari\xe1vel em vez de uma cadeia. O comando se aplica diretamente ao campo ou a vari\xe1vel e as mudan\xe7as s\xe3o transferidas imediatamente a todos os objetos que utilizam esta fonte, incluindo o objeto com o foco."]}),"\n",(0,s.jsx)(o.h5,{id:"-1"}),"\n",(0,s.jsxs)(o.p,{children:["Em ",(0,s.jsx)(o.em,{children:"novoTexto"}),", passe o texto a inserir. O comando ST SET TEXT est\xe1 desenhado para trabalhar com texto enriquecido (multi estilo) com etiquetas de tipo ",(0,s.jsxs)(o.span,{children:[". Em todos os demais casos (particularmente, quando trabalha com texto plano que contenha os caracteres <, > ou &), deve utilizar o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),'. Se passa texto plano com os caracteres <, > ou & ao comando ST SET TEXT, o comando no faz nada. Este princ\xedpio de funcionamento \xe9 necess\xe1rio porque se inserir diretamente uma cadeia como "a<b" dentro de um texto enriquecido, n\xe3o vai distorcionar a an\xe1lise interna das etiquetas ',(0,s.jsxs)(o.span,{children:['. Neste caso, o caractere "<" deve ser previamente codificado como "<", o qual pode ser feito utilizando o comando ',(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})," (ver tamb\xe9m o exemplo deste comando)."]})]})]}),"\n",(0,s.jsxs)(o.p,{children:["Os par\xe2metros opcionais ",(0,s.jsx)(o.em,{children:"inicioSel"})," e ",(0,s.jsx)(o.em,{children:"fimSel"})," permitem designar uma sele\xe7\xe3o de texto no objeto. Os valores de ",(0,s.jsx)(o.em,{children:"inicioSel"})," e ",(0,s.jsx)(o.em,{children:"fimSel"})," oferecem uma sele\xe7\xe3o de texto sem formato, sem levar em considera\xe7\xe3o nenhum tipo de etiquetas de estilo no texto. A a\xe7\xe3o do comando var\xeda segundo os par\xe2metros opcionais ",(0,s.jsx)(o.em,{children:"inicioSel"})," e ",(0,s.jsx)(o.em,{children:"fimSel"}),":"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Se omite ",(0,s.jsx)(o.em,{children:"inicioSel"})," e ",(0,s.jsx)(o.em,{children:"fimSel"}),", ST SET TEXT substitui todo o texto do objeto por ",(0,s.jsx)(o.em,{children:"novoTexto"}),","]}),"\n",(0,s.jsxs)(o.li,{children:["Se passa unicamente ",(0,s.jsx)(o.em,{children:"inicioSel"})," ou se os valores de ",(0,s.jsx)(o.em,{children:"inicioSel"})," e ",(0,s.jsx)(o.em,{children:"fimSel"})," s\xe3o iguais, ST SET TEXT insere o texto ",(0,s.jsx)(o.em,{children:"novoTexto"})," em ",(0,s.jsx)(o.em,{children:"objeto"})," a partir de ",(0,s.jsx)(o.em,{children:"inicioSel"}),","]}),"\n",(0,s.jsxs)(o.li,{children:["Se passa ambos ",(0,s.jsx)(o.em,{children:"inicioSel"})," e ",(0,s.jsx)(o.em,{children:"fimSel"}),", ST SET TEXT substitui o texto sem formato definido para estes limites com o texto ",(0,s.jsx)(o.em,{children:"novoTexto"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["Pode passar 0 em ",(0,s.jsx)(o.em,{children:"fimSel"})," para designar automaticamente o \xfaltimo caractere do texto (passe 1 em ",(0,s.jsx)(o.em,{children:"inicioSel"})," para designar o primeiro caractere do texto)."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["4D oferece constantes pr\xe9 definidas de maneira que possa designar automaticamente os limites de sele\xe7\xe3o nos par\xe2metros ",(0,s.jsx)(o.em,{children:"inicioSel"})," e ",(0,s.jsx)(o.em,{children:"fimSel"}),'. Estas constantes se encontram no tema "',(0,s.jsx)(o.em,{children:"Texto multi estilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Constante"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{children:"Valor"}),(0,s.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"ST End highlight"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"-1001"}),(0,s.jsx)(o.td,{children:"Designa o \xfaltimo caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"ST End text"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"0"}),(0,s.jsx)(o.td,{children:"Designa o \xfaltimo caractere do texto contido no objeto"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"ST Start highlight"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"-1000"}),(0,s.jsx)(o.td,{children:"Designa o primeiro caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"ST Start text"}),(0,s.jsx)(o.td,{children:"Inteiro longo"}),(0,s.jsx)(o.td,{children:"1"}),(0,s.jsx)(o.td,{children:"Designa o primeiro caractere do texto contido no objeto"})]})]})]}),"\n",(0,s.jsxs)(o.p,{children:["(*) Deve passar um nome de objeto em ",(0,s.jsx)(o.em,{children:"objeto"})," para poder utilizar esta constante. Se passar uma refer\xeancia a um campo ou vari\xe1vel, o comando se aplica a todo o texto do objeto."]}),"\n",(0,s.jsxs)(o.p,{children:["Se ",(0,s.jsx)(o.em,{children:"inicioSel"})," \xe9 superior a ",(0,s.jsx)(o.em,{children:"fimSel"}),", o texto n\xe3o se modifica e a vari\xe1vel OK toma o valor 0."]}),"\n",(0,s.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,s.jsx)(o.p,{children:"Depois de executar este comando, a vari\xe1vel OK toma o valor 1 se n\xe3o \xe9 apresento nenhum erro; do contr\xe1rio, toma o valor 0. Este \xe9 o caso particularmente quando as etiquetas de estilo n\xe3o s\xe3o avaliados corretamente (etiquetas incorretas ou faltantes)."}),"\n",(0,s.jsx)(o.p,{children:"No caso de erro, n\xe3o modifica a vari\xe1vel. Quando ocorre um erro em uma vari\xe1vel quando se est\xe1 avaliando o texto, 4D transforma o texto em texto plano; como resultado, os caracteres <, > e & s\xe3o convertidas em entidades HTML."}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"Se quer substituir o texto com estilo selecionado pelo usu\xe1rio com o conte\xfado de uma vari\xe1vel."}),"\n",(0,s.jsx)(o.p,{children:"Este \xe9 o texto selecionado:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(223908).Z+"",width:"460",height:"51"})}),"\n",(0,s.jsx)(o.p,{children:"O conte\xfado armazenado no campo \xe9 o seguinte:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{src:n(374289).Z+"",width:"403",height:"55"})}),"\n",(0,s.jsx)(o.p,{children:"Depois da execu\xe7\xe3o de este c\xf3digo:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0vtempo:="Demonstra\xe7\xe3o"\n\xa0GET HIGHLIGHT([Productos]Notas;vInicio;vFim)\n\xa0ST SET TEXT([Produtos]Notas;vtemp;vInicio;vFim)\n'})}),"\n",(0,s.jsx)(o.p,{children:"O campo e seu conte\xfado s\xe3o os seguintes:"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.img,{src:n(369949).Z+"",width:"453",height:"45"})," ",(0,s.jsx)(o.img,{src:n(690634).Z+"",width:"403",height:"76"})]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsxs)(o.p,{children:["Consulte o exemplo do comando ",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),"."]}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/st-get-plain-text",children:"ST Get plain text"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/st-get-text",children:"ST Get text"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.a,{href:"/docs/pt/20-R7/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"})]}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1115"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2717"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},223908:function(e,o,n){n.d(o,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAAzCAIAAACVCq+pAAAFVElEQVR42u2dva4VNxCAz4lSI4pIqdKnTslrpOAN0vAOEU8Q0VDlYYCCUCClhpoKdCMhXiA5wmJj+Wc8a3vs9d7vE0J7vGN77J2d4+Ofude7j+8uAABgw3ezFQAAODM4WQAAQ3CyAACGfD9bgR28fPFqtgoAACG/Pv7tn0/vc3dXcrI3Xr95O1sFAID/efr0d1lgMSd7449nf85WAfrzy5O/BtTy9/NHsxsKZ+PL5w+yAHOyAACG4GRDrl/Zm2W21kOVGVDFbci5yqizwmDk0kZqcijT3aVzY0eNVDjtZH/48efbvyBFKEW+a8HVo0tp28W/X9FnqatIUMCox2ZxvhZ14ZqisUBnutM73E6B6U2rY7052cs3e8p9rKAxezvTFaBpg9m6pd16cyVPb9pCJZuSdbJ3H9/dxqd30aFbf9Dq7roU97+f4sv4iZvMXacTva7rnbFu33W+EQeScaKfN1lC8HR9ybjMXEoyl1+FIJBsSK7Jgc5J/ZN3t2uhrlxRSTWCjDkZR25+wE9362OB5C1xS9kW0GIZoT83MxDsREgXnlEdSjMO5P1cxdchp16dPcRVX3ZarFD7JW9+xf6vfkc6sm8kG3hG9zFwx0mZji5VoPhU5EeVsw9ZMlf1JXLTRSsRBHLVWRiKpq7iLc3T8e86nxi7SD/dTdRuMnHidh2X5mcM+vzy7cd7cB1/iebS/Yu4wJb+F8w4aEVsuhqb7GIPyaJGWuysGpVIC1/OORpV3OJznUnFM1kdu88fV2qKnfVDJlevrH9wV9lSYTjcoioE9OqounKq7aGLVnWWWVdjr/KLFEaydYPQ2DVv/rrvFIFD7qOJk+WLztMrm+b3eTy+68sqOw0uZg+9V7F9F2wd1k9/dUwWvpKetPtUrJJZDz74kTJFBzvi37D6eYMKxhxV6NUzhy222iaLtZs+/dUp75NtnDTI5W0ps9pn7TWspY1G1t+/W9dSu91Cwrj1aENaoQfstuVZf2fL9jCydut3cMw7vm8kGzjcbUzqzwYkZYKtBV26xv/oLuLEpGQue50OxRmfulzJlY1GnRu7NydZ3Dagwa1WbQtW/m4B/2CCckgb5NJnjFuXs5/tMQUL6+1dkdMkUKO9nF61J5s80mJn1ajkOvjHewsvX7x6/eZtLnaBxTfS0iPZtfQndgFMof0d+fL5w4OHPwlRuDhWm2UhD3VK/QGsGfOOLHniK0n3zlrdQ62lP2NMGM+Yd4SRLACAIUs62fE7ojTHKCeqBwCHZUknO5KRHnNXXb5wi5LKvHGYqPbAUQD3AZxsgSVmNi0OHQJAFxZe+NobqSjOIgccSh5iyYXzSVa6S584BFdSk2S8LjnSVS6UlN9wzXbXIAqJL6/pWID7yapOtiJS0UUXgkiWSTplOWxgrrTk8f/4oGqyrtxJFU236LtU/zhwqQA5Vp0u6PImdwnDM9KnKI+QT2/IsPhGAMdn1ZFskuI6jGahRpapXpuKKR6xPeCyUk7nA6oKcBBO5WSLUdOLIYhkmb1BjFpiFy0UxGshVQHGs+p0QRHl2z4s1NYRvE8XHdyfeNCI6aeDAU7MqiPZithamhBEskzybq7SithF/o/xorbKSMlxmKgu/b+3YwHuLUs62eLGgF0Z46CC8UffD+oLrPjrHcndBTn5oKKcvEYNfV0VVehlAM7Hkk4WdjElyCb7CgAcONnzM8XZ4WEBHKdd+AIAOAI4WQAAQ3CyAACG4GQBAAzByQIAGIKTBQAwBCcLAGAIThYAwBCcLACAIThZAABDcLIAAIbgZAEADMHJAgAYgpMFADAEJwsAYAhOFgDAkP8AlFw+Xl9vXMoAAAAASUVORK5CYII="},374289:function(e,o,n){n.d(o,{Z:function(){return t}});let t="data:image/png;base64,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"},369949:function(e,o,n){n.d(o,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcUAAAAtCAIAAABQw+eIAAAFiElEQVR42u2cTW7VMBDHE8QRkLgC92HBDTgG6gkQew4DLBALLlDWrIqKhLhAeWogNePx5G97HMfp/6eqei+xPR+2J/548Xx7cz0RQgip5klvBQgh5CQ87a0AxMcPn3qrQAghkpevXv/88W39OkY8vfD5y9feKhBCyANXV2/ElWHi6YW37973VoEQQv7y+9d3cYXrp4QQ4gPj6QPzPblZemu9qzKHspdkUdC87dL21GSUhifj6bPnLy5/4oqR377bgjnApbT1w909eJYyQYYCjTzWC9CiOaK34g9aVeY6jjmVfnCsoLWjdfdMCwVGWj+d/lVG6msBldnr6a7AQUxbEy899hxuOYEVYb34mtPdOS0UUOLp7c31ZdR5G/3OPxyKLneXK8v/8EqYJry4prl1eolg8chS0+vTJmwBse/ExTCvWoJwepgyLjN1Rc0VijASqIakTBY6q/qrd9fPhqxUUaoaImMqjVqnYUhV9YnTG7UsMtrphQiRRfgBz1Wgklr7WfZOwKwIqREDsNOJ9GGuzc6bUq+s9caip8z+ZYOOT0UQXL6KyKumcYyeBrFz1ZFs6hmbcq6dMiV6iiKyITpVrFr+9H/TcR87ILI2byG1g+szBU08zBtfXD/HT7tU34vTi9mo+jRNlZPKJQxBVIpdUWBv6qlveLW4tRidTlgRdzSkB+XqM2lNVC3Kt3/p+1FLHCxwMUJNeF0HL2Idx3HoHo4WkWJ7TVtScm39xV3QUmOQW6PqofwG3hUBfQeVDouX2mXlFLfeplolx6dlQ8s4Cq+h2XeOv2C7suOCd/e19qamhT43BmWOEptatD6ks6wYvYob6e9VbFk5yORyatlWnfej1KDpvmwK0uuxry6xnYZ4WodP/Isl7mDUlDP5NRZGR+HIlVXcg5DV+allW7V+f1o560/lrSmzuO3m1srQW8y2/uHdMkub/tjFGEEcfEh1ZAwbxbrqPkJdsFtvl2pFx6citq4jzXA6r6YRm/suHgy/xr4LIwVysViHzRXMslzqEn6lzpXuTaUs2wNVUeWGM3FchMi1mVG1wl4EiEXYuXJVyiJVuFBGbG17VVzKkzUllz2wN6WrJvv2LxlPRdQLv6YCop0GuZLrNceLZdsLqVx2aZsXjVCLWIGbYAi1ZcWf7ZibW36u7chnxNKCqkEqq0alensrlclSFe9HIiVYDtg18NZi6wxKj+H7pgpDT/ZPoD8hg3KGeOoeO0YPRqPrT8ignCGeEkLIEThhPBXvtBWXUJ+mhV3g9cewZ03I0ThVPD1rENnTrixZ4v3L1kLjLXV1k52QXpwqnp513XAIu2qUHMJAQjYZLJ6mBkTgHD9+93/NqI591M9qgYYIO4sqxUhjaKsKzdIn9IahiZo4vphyi6qkXRcr4a8F5+gki03HEtKUwc4/rWF2PUhGzThvna8zYQfn2GnUc4nULJv6zNrL+OpP9mJZqbdTELfgLsXrtzgjIV4MNj4tOx5ps0xEFp6xxiJfE1qA/2C7ryFezYMQnEc0Pt0HZM2hspDiLaOYzbdgDzhTvgMOJyWkC4ynzthDoRk4OMdOg5SA67MmQGbue7syh4FUJSdmsPn+5HE8UpmsAsCOvdtxVkcINC46hOc628nwpVtC6nlE41P3g5pSJ/oYIpCDc+w06t2U0IITd8LZ9Ka24AG98eFGlZ7PdRoh+zBkPEVOPAJ3kIoPasLPgkISIIf3ZB29A573k3uukuHArOOC1ELKTqLKOiGMG1OkKUPG093g1rAXvjMDXCirj+wJ46kFe6MXXTzJ6iM7M95+FCGEHBPGU0II8YHxlBBCfGA8JYQQHxhPCSHEB8ZTQgjxgfGUEEJ8YDwlhBAfGE8JIcQHxlNCCPGB8ZQQQnxgPCWEEB/+ABRKNc20zKNlAAAAAElFTkSuQmCC"},690634:function(e,o,n){n.d(o,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return r}});var t=n(667294);let s={},i=t.createContext(s);function r(e){let o=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);