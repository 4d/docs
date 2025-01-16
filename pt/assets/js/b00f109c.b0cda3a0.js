"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37989"],{782335:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/st-compute-expressions","title":"ST COMPUTE EXPRESSIONS","description":"ST COMPUTE EXPRESSIONS ( { ;} objeto {; inicioSel {; fimSel*}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-compute-expressions.md","sourceDirName":"commands-legacy","slug":"/commands/st-compute-expressions","permalink":"/docs/pt/commands/st-compute-expressions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-compute-expressions.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-compute-expressions","title":"ST COMPUTE EXPRESSIONS","slug":"/commands/st-compute-expressions","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Styled Text","permalink":"/docs/pt/category/styled-text"},"next":{"title":"ST FREEZE EXPRESSIONS","permalink":"/docs/pt/commands/st-freeze-expressions"}}'),r=s("785893"),t=s("250065");let i={id:"st-compute-expressions",title:"ST COMPUTE EXPRESSIONS",slug:"/commands/st-compute-expressions",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," {; ",(0,r.jsx)(n.em,{children:"inicioSel"})," {; ",(0,r.jsx)(n.em,{children:"fimSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nome de objeto (se * for especificado) ou",(0,r.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"inicioSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Inicio da sele\xe7\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fimSel"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Fim da sele\xe7\xe3o"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," atualiza as express\xf5es din\xe2micas 4D encontradas no campo ou vari\xe1vel com multi-estilo ou 4D Write Pro definido pelo par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Para obter mais informa\xe7\xe3o sobre as express\xf5es 4D utilizadas em \xe1reas de texto de multi estilo ou 4D Write Pro, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/st-insert-expression",children:"ST INSERT EXPRESSION"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["O comando torna a avaliar o resultado das express\xf5es presentes no ",(0,r.jsx)(n.em,{children:"objeto"})," em fun\xe7\xe3o do contexto atual e mostra o resultado obtido. Por exemplo, se a express\xe3o introduzida \xe9 a hora, o valor se modifica cada vez que se chama ao comando ",(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"}),". As express\xf5es tamb\xe9m se calculam:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"quando se inserem"}),"\n",(0,r.jsx)(n.li,{children:"cuando se carrega o objeto"}),"\n",(0,r.jsxs)(n.li,{children:['quando est\xe3o "congeladas" com o comando ',(0,r.jsx)(n.a,{href:"/docs/pt/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),", se passar o segundo par\xe2metro ",(0,r.jsx)(n.em,{children:"*"}),".\n",(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," N\xe3o modifica o texto com estilo (que cont\xe9m etiquetas ",(0,r.jsx)(n.em,{children:"span"}),"), e sim s\xf3 o texto sem formato mostrado em ",(0,r.jsx)(n.em,{children:"objeto"}),". Os valores calculados n\xe3o se armazenam no texto com estilo, s\xf3 sua refer\xeancia se armazena ali."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,r.jsxs)(n.p,{children:["N\xe3o \xe9 necess\xe1rio que ",(0,r.jsx)(n.em,{children:"objeto"})," tenha o foco, no entanto, o objeto deve estar inclu\xeddo em um formul\xe1rio, ou caso contr\xe1rio o comando ",(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," n\xe3o tem nenhum efeito."]}),"\n",(0,r.jsxs)(n.p,{children:["Nota: Se o objeto designar um documento 4D Write Pro, ser\xe1 computado pelo comando mesmo se n\xe3o tiver sido aberto em um objeto de formul\xe1rio (ver ",(0,r.jsx)(n.em,{children:"Express\xf5es de Imagem"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Os par\xe2metros opcionais ",(0,r.jsx)(n.em,{children:"inicioSel"})," e ",(0,r.jsx)(n.em,{children:"fimSel"})," designam uma sele\xe7\xe3o de texto em ",(0,r.jsx)(n.em,{children:"objeto"}),". Os valores ",(0,r.jsx)(n.em,{children:"inicioSel"})," e ",(0,r.jsx)(n.em,{children:"fimSel"})," expressam uma sele\xe7\xe3o de texto plano, sem ter em conta as etiquetas de estilo ou refer\xeancias que possam estar presentes. Tenha em conta que uma refer\xeancia \xe9 equivalente a um \xfanico caractere."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Se passar ",(0,r.jsx)(n.em,{children:"inicioSel"})," e ",(0,r.jsx)(n.em,{children:"fimSel"}),", ",(0,r.jsx)(n.strong,{children:"ST COMPUTE EXPRESSIONS"})," s\xf3 atualiza as express\xf5es situadas dentro desta sele\xe7\xe3o."]}),"\n",(0,r.jsxs)(n.li,{children:["Se passar unicamente ",(0,r.jsx)(n.em,{children:"inicioSel"})," ou se o valor de ",(0,r.jsx)(n.em,{children:"fimSel"})," \xe9 maior que o n\xfamero total de caracteres no objeto, todas as express\xf5es entre ",(0,r.jsx)(n.em,{children:"inicioSel"})," e o final do texto se calculam."]}),"\n",(0,r.jsxs)(n.li,{children:["Se omite ",(0,r.jsx)(n.em,{children:"inicioSel"})," e ",(0,r.jsx)(n.em,{children:"fimSel"}),", todas as express\xf5es inclu\xeddas na sele\xe7\xe3o usu\xe1rio de ",(0,r.jsx)(n.em,{children:"objeto"})," se calculam.\n4D oferece constantes pr\xe9 definidas para que possa designar automaticamente os limites de sele\xe7\xe3o nos par\xe2metros ",(0,r.jsx)(n.em,{children:"inicioSel"})," e ",(0,r.jsx)(n.em,{children:"fimSel"}),'. Estas constantes se encontram no tema "',(0,r.jsx)(n.em,{children:"Texto multi estilo"}),'":']}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"Designa o \xfaltimo caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Designa o \xfaltimo caractere do texto contido no objeto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"Designa o primeiro caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Designa o primeiro caractere do texto contido no objeto"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Deve passar um nome de objeto em ",(0,r.jsx)(n.em,{children:"objeto"})," para poder utilizar esta constante. Se passar uma refer\xeancia de campo ou de vari\xe1vel, o comando se aplica a todo o texto do objeto."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": se ",(0,r.jsx)(n.em,{children:"inicioSel"})," \xe9 maior que ",(0,r.jsx)(n.em,{children:"fimSel"})," (exceto quando ",(0,r.jsx)(n.em,{children:"fimSel"})," \xe9 0), o comando n\xe3o faz nada e a vari\xe1vel ",(0,r.jsx)(n.em,{children:"OK"})," toma o valor 0."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Voc\xea deseja atualizar as refer\xeancias inclu\xeddas na sele\xe7\xe3o de texto:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ST COMPUTE EXPRESSIONS(*;"myText";ST Start highlight;ST End highlight)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1285"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var o=s(667294);let r={},t=o.createContext(r);function i(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);