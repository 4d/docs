"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13201],{764994:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var o=n(474848),r=n(28453);const t={id:"st-compute-expressions",title:"ST COMPUTE EXPRESSIONS",slug:"/commands/st-compute-expressions",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/st-compute-expressions",title:"ST COMPUTE EXPRESSIONS",description:"ST COMPUTE EXPRESSIONS ( { ;} objeto {; inicioSel {; fimSel*}} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-compute-expressions.md",sourceDirName:"commands-legacy",slug:"/commands/st-compute-expressions",permalink:"/docs/pt/commands/st-compute-expressions",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-compute-expressions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"st-compute-expressions",title:"ST COMPUTE EXPRESSIONS",slug:"/commands/st-compute-expressions",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Table name",permalink:"/docs/pt/commands/table-name"},next:{title:"ST FREEZE EXPRESSIONS",permalink:"/docs/pt/commands/st-freeze-expressions"}},a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"ST COMPUTE EXPRESSIONS"})," ( {* ;} ",(0,o.jsx)(s.em,{children:"objeto"})," {; ",(0,o.jsx)(s.em,{children:"inicioSel"})," {; ",(0,o.jsx)(s.em,{children:"fimSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"*"}),(0,o.jsx)(s.td,{children:"Operador"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"objeto"}),(0,o.jsx)(s.td,{children:"any"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsxs)(s.td,{children:["Nome de objeto (se * for especificado) ou",(0,o.jsx)(s.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"inicioSel"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Inicio da sele\xe7\xe3o"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"fimSel"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Fim da sele\xe7\xe3o"})]})]})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"ST COMPUTE EXPRESSIONS"})," atualiza as express\xf5es din\xe2micas 4D encontradas no campo ou vari\xe1vel com multi-estilo ou 4D Write Pro definido pelo par\xe2metro ",(0,o.jsx)(s.em,{children:"objeto"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Para obter mais informa\xe7\xe3o sobre as express\xf5es 4D utilizadas em \xe1reas de texto de multi estilo ou 4D Write Pro, consulte a descri\xe7\xe3o do comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/st-insert-expression",children:"ST INSERT EXPRESSION"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["O comando torna a avaliar o resultado das express\xf5es presentes no ",(0,o.jsx)(s.em,{children:"objeto"})," em fun\xe7\xe3o do contexto atual e mostra o resultado obtido. Por exemplo, se a express\xe3o introduzida \xe9 a hora, o valor se modifica cada vez que se chama ao comando ",(0,o.jsx)(s.strong,{children:"ST COMPUTE EXPRESSIONS"}),". As express\xf5es tamb\xe9m se calculam:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"quando se inserem"}),"\n",(0,o.jsx)(s.li,{children:"cuando se carrega o objeto"}),"\n",(0,o.jsxs)(s.li,{children:['quando est\xe3o "congeladas" com o comando ',(0,o.jsx)(s.a,{href:"/docs/pt/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),", se passar o segundo par\xe2metro ",(0,o.jsx)(s.em,{children:"*"}),".\n",(0,o.jsx)(s.strong,{children:"ST COMPUTE EXPRESSIONS"})," N\xe3o modifica o texto com estilo (que cont\xe9m etiquetas ",(0,o.jsx)(s.em,{children:"span"}),"), e sim s\xf3 o texto sem formato mostrado em ",(0,o.jsx)(s.em,{children:"objeto"}),". Os valores calculados n\xe3o se armazenam no texto com estilo, s\xf3 sua refer\xeancia se armazena ali."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Se passar o par\xe2metro opcional ",(0,o.jsx)(s.em,{children:"*"})," indica que o par\xe2metro ",(0,o.jsx)(s.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,o.jsx)(s.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,o.jsxs)(s.p,{children:["N\xe3o \xe9 necess\xe1rio que ",(0,o.jsx)(s.em,{children:"objeto"})," tenha o foco, no entanto, o objeto deve estar inclu\xeddo em um formul\xe1rio, ou caso contr\xe1rio o comando ",(0,o.jsx)(s.strong,{children:"ST COMPUTE EXPRESSIONS"})," n\xe3o tem nenhum efeito."]}),"\n",(0,o.jsxs)(s.p,{children:["Nota: Se o objeto designar um documento 4D Write Pro, ser\xe1 computado pelo comando mesmo se n\xe3o tiver sido aberto em um objeto de formul\xe1rio (ver ",(0,o.jsx)(s.em,{children:"Express\xf5es de Imagem"}),")."]}),"\n",(0,o.jsxs)(s.p,{children:["Os par\xe2metros opcionais ",(0,o.jsx)(s.em,{children:"inicioSel"})," e ",(0,o.jsx)(s.em,{children:"fimSel"})," designam uma sele\xe7\xe3o de texto em ",(0,o.jsx)(s.em,{children:"objeto"}),". Os valores ",(0,o.jsx)(s.em,{children:"inicioSel"})," e ",(0,o.jsx)(s.em,{children:"fimSel"})," expressam uma sele\xe7\xe3o de texto plano, sem ter em conta as etiquetas de estilo ou refer\xeancias que possam estar presentes. Tenha em conta que uma refer\xeancia \xe9 equivalente a um \xfanico caractere."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Se passar ",(0,o.jsx)(s.em,{children:"inicioSel"})," e ",(0,o.jsx)(s.em,{children:"fimSel"}),", ",(0,o.jsx)(s.strong,{children:"ST COMPUTE EXPRESSIONS"})," s\xf3 atualiza as express\xf5es situadas dentro desta sele\xe7\xe3o."]}),"\n",(0,o.jsxs)(s.li,{children:["Se passar unicamente ",(0,o.jsx)(s.em,{children:"inicioSel"})," ou se o valor de ",(0,o.jsx)(s.em,{children:"fimSel"})," \xe9 maior que o n\xfamero total de caracteres no objeto, todas as express\xf5es entre ",(0,o.jsx)(s.em,{children:"inicioSel"})," e o final do texto se calculam."]}),"\n",(0,o.jsxs)(s.li,{children:["Se omite ",(0,o.jsx)(s.em,{children:"inicioSel"})," e ",(0,o.jsx)(s.em,{children:"fimSel"}),", todas as express\xf5es inclu\xeddas na sele\xe7\xe3o usu\xe1rio de ",(0,o.jsx)(s.em,{children:"objeto"})," se calculam.\n4D oferece constantes pr\xe9 definidas para que possa designar automaticamente os limites de sele\xe7\xe3o nos par\xe2metros ",(0,o.jsx)(s.em,{children:"inicioSel"})," e ",(0,o.jsx)(s.em,{children:"fimSel"}),'. Estas constantes se encontram no tema "',(0,o.jsx)(s.em,{children:"Texto multi estilo"}),'":']}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Constante"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{children:"Valor"}),(0,o.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"ST End highlight"}),(0,o.jsx)(s.td,{children:"Inteiro longo"}),(0,o.jsx)(s.td,{children:"-1001"}),(0,o.jsx)(s.td,{children:"Designa o \xfaltimo caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"ST End text"}),(0,o.jsx)(s.td,{children:"Inteiro longo"}),(0,o.jsx)(s.td,{children:"0"}),(0,o.jsx)(s.td,{children:"Designa o \xfaltimo caractere do texto contido no objeto"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"ST Start highlight"}),(0,o.jsx)(s.td,{children:"Inteiro longo"}),(0,o.jsx)(s.td,{children:"-1000"}),(0,o.jsx)(s.td,{children:"Designa o primeiro caractere da sele\xe7\xe3o atual de texto no objeto (*)"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"ST Start text"}),(0,o.jsx)(s.td,{children:"Inteiro longo"}),(0,o.jsx)(s.td,{children:"1"}),(0,o.jsx)(s.td,{children:"Designa o primeiro caractere do texto contido no objeto"})]})]})]}),"\n",(0,o.jsxs)(s.p,{children:["(*) Deve passar um nome de objeto em ",(0,o.jsx)(s.em,{children:"objeto"})," para poder utilizar esta constante. Se passar uma refer\xeancia de campo ou de vari\xe1vel, o comando se aplica a todo o texto do objeto."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota"}),": se ",(0,o.jsx)(s.em,{children:"inicioSel"})," \xe9 maior que ",(0,o.jsx)(s.em,{children:"fimSel"})," (exceto quando ",(0,o.jsx)(s.em,{children:"fimSel"})," \xe9 0), o comando n\xe3o faz nada e a vari\xe1vel ",(0,o.jsx)(s.em,{children:"OK"})," toma o valor 0."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"Voc\xea deseja atualizar as refer\xeancias inclu\xeddas na sele\xe7\xe3o de texto:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0ST COMPUTE EXPRESSIONS(*;"myText";ST Start highlight;ST End highlight)\n'})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]})]})}function m(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var o=n(296540);const r={},t=o.createContext(r);function i(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);