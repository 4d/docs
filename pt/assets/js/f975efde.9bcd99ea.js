"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21080],{212763:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>t,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var n=o(474848),s=o(28453);const d={id:"throw",title:"throw",slug:"/commands/throw",displayed_sidebar:"docs"},a=void 0,i={id:"commands-legacy/throw",title:"throw",description:"throw ( errorCode {; descri\xe7\xe3o} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/throw.md",sourceDirName:"commands-legacy",slug:"/commands/throw",permalink:"/docs/pt/commands/throw",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fthrow.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"throw",title:"throw",slug:"/commands/throw",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET ASSERT ENABLED",permalink:"/docs/pt/commands/set-assert-enabled"},next:{title:"JSON Parse",permalink:"/docs/pt/commands/json-parse"}},t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"<strong>throw(errorCode{; description})</strong>",id:"throwerrorcode-description",level:5},{value:"<strong>throw(errorObj)</strong>",id:"throwerrorobj",level:5},{value:"<strong>throw</strong>",id:"throw",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"throw"})," ( ",(0,n.jsx)(r.em,{children:"errorCode"})," {; ",(0,n.jsx)(r.em,{children:"descri\xe7\xe3o"}),"} )\xa0",(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.em,{children:"throw"})," {( ",(0,n.jsx)(r.em,{children:"erroObj"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Par\xe2metro"}),(0,n.jsx)(r.th,{children:"Tipo"}),(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"errorCode"}),(0,n.jsx)(r.td,{children:"Integer"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Um inteiro longo representando o c\xf3digo de erro"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"descri\xe7\xe3o"}),(0,n.jsx)(r.td,{children:"Text"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Um texto fornecendo uma descri\xe7\xe3o do erro"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"throw {( erroObj )}"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Par\xe2metro"}),(0,n.jsx)(r.td,{children:"Tipo"}),(0,n.jsx)(r.td,{children:"Descri\xe7\xe3o"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"erroObj"}),(0,n.jsx)(r.td,{children:"Object"}),(0,n.jsx)(r.td,{children:"\u2192"}),(0,n.jsx)(r.td,{children:"Um objeto contendo propriedades para construir o erro"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O comando ",(0,n.jsx)(r.strong,{children:"throw"})," cria um erro que ser\xe1 lan\xe7ado inmediatamente ou quando o m\xe9todo que o chamar o devolva a seu chamador (modo diferido)."]}),"\n",(0,n.jsx)(r.p,{children:"Quando se encuentrar com uma situa\xe7\xe3o em seu c\xf3digo 4D em que surja uma condi\xe7\xe3o de erro, pode utilizar o comando throw para lan\xe7ar expl\xedcitamente um erro e dar uma mensagem de erro espec\xedfica ou um n\xfamero de erro. Isso pode ser \xfatil para assinalar condi\xe7\xf5es excepcionais ou entradas inv\xe1lidas."}),"\n",(0,n.jsxs)(r.p,{children:["Os erros lan\xe7ados utilizando o comando ",(0,n.jsx)(r.strong,{children:"throw"})," s\xe3o gestionados pelo runtime de 4D como qualquer erro normal: se mostrar o di\xe1logo de erro padr\xe3o a menos que se tenha instalado um m\xe9todo de intercep\xe7\xe3o utilizando o comando ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"O comando admite tr\xeas sintaxes:"}),"\n",(0,n.jsx)(r.h5,{id:"throwerrorcode-description",children:(0,n.jsx)(r.strong,{children:"throw(errorCode{; description})"})}),"\n",(0,n.jsxs)(r.p,{children:["Especifica o c\xf3digo de erro e um texto de descri\xe7\xe3o opcional, o erro se lan\xe7a imediatamente.",(0,n.jsx)(r.br,{}),"\nSe n\xe3o indicar nenhuma descri\xe7\xe3o, se preenche com:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"C\xf3digo de erro (errorCode): (host) na aplica\xe7\xe3o local"}),"\n",(0,n.jsx)(r.li,{children:"C\xf3digo de erro (errorCode): (C00x) em um componente"}),"\n"]}),"\n",(0,n.jsx)(r.h5,{id:"throwerrorobj",children:(0,n.jsx)(r.strong,{children:"throw(errorObj)"})}),"\n",(0,n.jsxs)(r.p,{children:["O objeto ",(0,n.jsx)(r.em,{children:"errorObj"})," permite obter informa\xe7\xe3o de erro mais detalhada e controlar a gest\xe3o de erros. Pode conter as seguintes propriedades, assim como toda propriedade personalizada \xe0 que possa fazer refer\xeancia \xe0 propriedade ",(0,n.jsx)(r.strong,{children:"message"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Pode conter as seguintes propriedades, assim como toda propriedade personalizada a que possa fazer refer\xeancia utilizando marcadores de posi\xe7\xe3o dentro da propriedade message."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"propriedade"})}),(0,n.jsx)(r.th,{children:(0,n.jsxs)(r.strong,{children:["tipo",(0,n.jsx)(r.br,{})]})}),(0,n.jsx)(r.th,{children:(0,n.jsx)(r.strong,{children:"descri\xe7\xe3o"})})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"componentSignature"}),(0,n.jsx)(r.td,{children:"text"}),(0,n.jsxs)(r.td,{children:["Assinatura de quatro letras para identificar de forma \xfanica a origem do erro. Se n\xe3o indicar ",(0,n.jsx)(r.strong,{children:"componentSignature"}),', o comando utilizar "host" para o banco de dados host, e "C001", "C002", ... para os componentes.']})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"errCode"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsxs)(r.td,{children:["C\xf3digo de erro.",(0,n.jsx)(r.br,{})," Se n\xe3o indicar ",(0,n.jsx)(r.strong,{children:"errCode"}),", o comando utiliza -1."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"message"}),(0,n.jsx)(r.td,{children:"text"}),(0,n.jsxs)(r.td,{children:["Descri\xe7\xe3o do erro.",(0,n.jsx)(r.br,{})," A ",(0,n.jsx)(r.strong,{children:"mensagem"})," pode conter marcadores de posi\xe7\xe3o que ser\xe3o substitu\xeddos por propriedades personalizadas adicionadas ao objeto errorObj. Cada marcador de posi\xe7\xe3o deve especificar-se utilizando chaves {} terminando o nome da propriedade a utilizar. Se a ",(0,n.jsx)(r.strong,{children:"mensagem"}),' n\xe3o for indicada ou for uma string vazia, o comando buscar\xe1 uma descri\xe7\xe3o nos arquivos xliff da base de dados atual com um renome construido assuim: ERR_{component}_{code}".']})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"deferred"}),(0,n.jsx)(r.td,{children:"boolean"}),(0,n.jsx)(r.td,{children:"True se o erro deve diferir-se quando voltar o m\xe9todo atual. O valor por padr\xe3o \xe9 false."})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["Quando se utilizar esta sintaxe, o objeto ",(0,n.jsx)(r.em,{children:"errorObj"})," se devolve em \xdaltimos erros."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Nota:"})," \xe9 poss\xedvel chamar o comando v\xe1rias vezes no mesmo projeto para gerar v\xe1rios erros. Pode usar a op\xe7\xe3o diferida para enviar todos os erros de vez."]}),"\n",(0,n.jsx)(r.h5,{id:"throw",children:(0,n.jsx)(r.strong,{children:"throw"})}),"\n",(0,n.jsxs)(r.p,{children:["Lan\xe7a todos os erros atuais em ",(0,n.jsx)(r.strong,{children:"modo diferido"}),", o que significa que se adicionar\xe3o a uma pilha e ser\xe3o geridas quando voltar ao m\xe9todo que os chama. Isso se faz tipicamente desde dentro de uma retrochamada ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Em uma aplica\xe7\xe3o"}),": quando se produz um erro, se adiciona \xe0 pilha de erros e se chama ao m\xe9todo ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})," da aplica\xe7\xe3o ao final do m\xe9todo atual. A fun\xe7\xe3o ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/last-errors",children:"Last errors"})," devolve a pilha de erros."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Como consequ\xeancia, em um componente:"})," a pilha de erros pode ser enviada \xe0 aplica\xe7\xe3o local e se chama ao m\xe9todo ",(0,n.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})," da aplica\xe7\xe3o local."]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'\xa0var $code : Integer\n\xa0var $description : text\n\xa0$code:=50042\xa0//C\xf3digo personalizado\n\xa0$description:=\u201cThis is a custom error\u201d\n\xa0throw($code ;$description)\xa0//\xa0 Lan\xe7a um erro com a mensagem "This is a custom error" e errCode = 50042\n'})}),"\n",(0,n.jsx)(r.h4,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'throw({errCode: 1; message: "This an error"}) // Lan\xe7a um erro com a mensagem errCode = 1 e a mensagem "This an error"\n'})}),"\n",(0,n.jsx)(r.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'throw({errCode: 1}) // Lan\xe7a um erro com\xa0 errCode = 1 e a mensagem "Error code: 1 (host)"\n'})}),"\n",(0,n.jsx)(r.h4,{id:"example-4",children:"Example 4"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'throw({message: "This an error"}) //\xa0Lan\xe7a um erro com errCode = -1 e a mensagem "This is my error"\n'})}),"\n",(0,n.jsx)(r.h4,{id:"example-5",children:"Example 5"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'throw({message: "This is my error"; deferred: True}) // Lan\xe7a um erro com a mensagem "This is my error" e errCode = -1 em modo diferido\n'})}),"\n",(0,n.jsx)(r.h4,{id:"example-6",children:"Example 6"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-4d",children:'throw({componentSignature: "xbox"; errCode: 600; name: "myFileName"; path: "myFilePath"; deferred: True})// Lan\xe7a um erro com a mensagem "File myFileName not found (myFilePath)" em modo diferido.\n'})}),"\n",(0,n.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/commands/assert",children:"ASSERT"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/commands/last-errors",children:"Last errors"}),(0,n.jsx)(r.br,{}),"\n",(0,n.jsx)(r.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>a,x:()=>i});var n=o(296540);const s={},d=n.createContext(s);function a(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);