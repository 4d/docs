"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49747"],{959442:function(e,n,t){t.r(n),t.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/st-get-plain-text","title":"ST Get plain text","description":"ST Get plain text ( { ;} objeto {; refMode*} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/st-get-plain-text.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-plain-text","permalink":"/docs/pt/commands/st-get-plain-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-plain-text.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"st-get-plain-text","title":"ST Get plain text","slug":"/commands/st-get-plain-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST GET OPTIONS","permalink":"/docs/pt/commands/st-get-options"},"next":{"title":"ST Get text","permalink":"/docs/pt/commands/st-get-text"}}'),o=t("785893"),r=t("250065");let d={id:"st-get-plain-text",title:"ST Get plain text",slug:"/commands/st-get-plain-text",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"ST Get plain text"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," {; ",(0,o.jsx)(n.em,{children:"refMode"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 uma vari\xe1vel ou campo."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de objeto (se * \xe9 especificado) ou Vari\xe1vel ou campo (se * \xe9 omitido)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"refMode"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Mode for handling references found in the text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Texto sem tags"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.em,{children:"OBJECT Get plain text"})," remove as etiquetas de estilo da vari\xe1vel ou campo de texto designado pelos par\xe2metros ",(0,o.jsx)(n.em,{children:"*"})," e ",(0,o.jsx)(n.em,{children:"objeto"})," e devolve o texto plano."]}),"\n",(0,o.jsx)(n.h3,{id:""}),"\n",(0,o.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Durante a execu\xe7\xe3o se o objeto tem o foco, o comando devolve informa\xe7\xe3o sobre o objeto que est\xe1 sendo editado, no entanto, quando o objeto n\xe3o tem o foco, o comando devolve informa\xe7\xe3o sobre a fonte de dados (campo ou vari\xe1vel) do objeto."]}),"\n",(0,o.jsxs)(n.p,{children:["Se omite o par\xe2metro ",(0,o.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, passe uma referencia campo ou vari\xe1vel em vez de uma cadeia e durante a execu\xe7\xe3o, o comando devolve informa\xe7\xe3o sobre este campo ou vari\xe1vel."]}),"\n",(0,o.jsx)(n.h3,{id:"-1"}),"\n",(0,o.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"modoRef"})," indica a forma em que as refer\xeancias que se encontram em ",(0,o.jsx)(n.em,{children:"objeto"})," devem ser devolvidas. Em ",(0,o.jsx)(n.em,{children:"modoRef"}),', passe uma das seguintes constantes, que se encontram no tema "',(0,o.jsx)(n.em,{children:"Texto multi estilo"}),'" (pode passar uma s\xf3 constante ou uma combina\xe7\xe3o):']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST 4D Expressions as sources"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"2"}),(0,o.jsx)(n.td,{children:"\xc9 devolvida a cadeia original das refer\xeancias de express\xf5es 4D"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST 4D Expressions as values"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"As refer\xeancias de express\xf5es 4D se devolvem em sua forma avaliada (funcionamento por padr\xe3o nos formul\xe1rios)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST References as spaces"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{children:"Cada refer\xeancia se devolve como um caractere espa\xe7o sem separa\xe7\xe3o (funcionamento por padr\xe3o, utilizado pelos outros comandos)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST Tags as plain text"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"64"}),(0,o.jsxs)(n.td,{children:["O r\xf3tulo da etiqueta se devolve em texto plano. Por exemplo para o tag '",(0,o.jsx)(n.img,{src:"test.jpg",alt:"picture"}),'my picture\', o texto plano \xe9 "my picture" (funcionamento por padr\xe3o nos formul\xe1rios)']})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST Tags as XML code"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"128"}),(0,o.jsxs)(n.td,{children:["O c\xf3digo XML da etiqueta se devolve em texto plano. Por exemplo para o tag '",(0,o.jsx)(n.img,{src:"test.jpg",alt:"picture"}),"my picture', o texto plano \xe9 '",(0,o.jsx)(n.img,{src:"test.jpg",alt:"picture"}),"my picture'"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST Text displayed with 4D Expression sources"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"86"}),(0,o.jsxs)(n.td,{children:["Devolve o texto tal e como se mostra nos formul\xe1rios com a cadeia de origem das express\xf5es 4D.",(0,o.jsx)(n.br,{}),"Corresponde a combina\xe7\xe3o pr\xe9 definida das constantes 2+4+16+64."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST Text displayed with 4D Expression values"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"85"}),(0,o.jsxs)(n.td,{children:["Devolve o texto tal e como \xe9 mostrado nos formul\xe1rios com as express\xf5es 4D em sua forma avaliada.",(0,o.jsx)(n.br,{}),"Corresponde a combina\xe7\xe3o pr\xe9 definida das constantes 1+4+16+64."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST URL as labels"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"4"}),(0,o.jsx)(n.td,{children:'A etiqueta vis\xedvel dos URLs se devolve, por exemplo "Visite nosso web site" (funcionamento por padr\xe3o nos formul\xe1rios)'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST URL as links"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"8"}),(0,o.jsxs)(n.td,{children:['\xc9 devolvido o link, por exemplo "',(0,o.jsx)(n.a,{href:"http://www.4d.com",children:"http://www.4d.com"}),'"']})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST User links as labels"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"16"}),(0,o.jsx)(n.td,{children:"\xc9 devolvida a etiqueta vis\xedvel do link usu\xe1rio (funcionamento por padr\xe3o nos formul\xe1rios)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"ST User links as links"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"32"}),(0,o.jsx)(n.td,{children:"\xc9 devolvido o conte\xfado do link usu\xe1rio"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Dado que o texto plano segue sendo o mesmo, independentemente dos valores passados \u200B\u200Bno par\xe2metro ",(0,o.jsx)(n.em,{children:"modoRef"}),", o par\xe2metro ",(0,o.jsx)(n.em,{children:"modoRef"})," opcional s\xf3 \xe9 \xfatil quando o texto cont\xe9m refer\xeancias."]}),"\n",(0,o.jsx)(n.li,{children:"Se um documento 4D Write Pro conter tabelas, o conte\xfado de cada c\xe9lula \xe9 tratado como par\xe1grafos individuais e retornados como texto separadamente por tabula\xe7\xf5es. Linhas s\xe3o separadas por retornos de carro."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsxs)(n.p,{children:['Voc\xea est\xe1 procurando o texto "muito bem" entre os valores de um campo de texto multiestilo. O valor foi guardado da seguinte forma: "O clima est\xe1 muito bem ',(0,o.jsx)(n.strong,{children:"hoje"}),'".']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([Comments];ST Get plain text([Comments]Weather)="@muito bem@")\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," Neste contexto, a seguinte instru\xe7\xe3o n\xe3o dar\xe1 o resultado desejado porque o texto est\xe1 guardado com etiquetas de estilo:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY([Comments];[Comments]Weather="@muitobem@")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(n.p,{children:'Dado o seguinte texto localizado na \xe1rea multi estilo "MyArea":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-RAW",children:"It is now   Go to the 4D site or Open a window\n"})}),"\n",(0,o.jsx)(n.p,{children:"Este texto \xe9 mostrado:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(100058).Z+"",width:"348",height:"43"})}),"\n",(0,o.jsx)(n.p,{children:"\xc9 executado o seguinte c\xf3digo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$txt :=ST Get plain text(*;"myArea";ST References as spaces)\n\xa0\xa0// $txt = "agora\xa0\xa0\xa0 ou " (espa\xe7os)\n\xa0$txt :=ST Get plain text(*;"myArea";ST 4D Expressions as values)\n\xa0\xa0// $txt = "atualmente 15:48:19\xa0 ou\xa0 "\n\xa0$txt :=ST Get plain text(*;"myArea";ST 4D Expressions as sources)\n\xa0\xa0// $txt = "\xe9 agora a hora atual ou\xa0 "\n\xa0$txt :=ST Get plain text(*;"myArea";ST URL as links)\n\xa0\xa0//$txt = "\xe9 agora http://www.4d.com or\xa0 "\n\xa0$txt :=ST Get plain text(*;"myArea";ST Text displayed with 4D Expression values)\n\xa0\xa0//$txt = "\xe9 agora 15:48:19 ir ao site de 4D ou abrir uma janela"\n\xa0$txt :=ST Get plain text(*;"myArea";ST Text displayed with 4D Expression sources)\n\xa0\xa0//$txt = "\xe9 atualmente Hora atual ir ao site de 4D ou abrir uma janela"\n\xa0$txt :=ST Get plain text(*;"myArea";ST User links as labels)\n\xa0\xa0//$txt = "\xe9 agora ou Abrir uma janela"\n\xa0$txt :=ST Get plain text(*;"myArea";ST User links as links)\n\xa0\xa0//$txt = "\xe9 agora ou openW"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(n.p,{children:"Depois de executar este comando, a vari\xe1vel OK toma o valor 1 se n\xe3o \xe9 apresento nenhum erro; do contr\xe1rio, toma o valor 0. Este \xe9 o caso particularmente quando as etiquetas de estilo n\xe3o s\xe3o avaliados corretamente (etiquetas incorretas ou faltantes)."}),"\n",(0,o.jsx)(n.p,{children:"No caso de erro, n\xe3o modifica a vari\xe1vel. Quando ocorre um erro em uma vari\xe1vel quando se est\xe1 avaliando o texto, 4D transforma o texto em texto plano; como resultado, os caracteres <, > e & s\xe3o convertidas em entidades HTML."}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/commands/st-get-text",children:"ST Get text"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/st-set-plain-text",children:"ST SET PLAIN TEXT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/st-set-text",children:"ST SET TEXT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/commands/text-to-array",children:"TEXT TO ARRAY"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1092"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(n.td,{children:"OK"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},100058:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let o={},r=s.createContext(o);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);