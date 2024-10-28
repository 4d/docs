"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16680],{868093:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var a=s(474848),n=s(28453);const t={id:"blob-to-list",title:"BLOB to list",slug:"/commands/blob-to-list",displayed_sidebar:"docs"},r=void 0,d={id:"commands-legacy/blob-to-list",title:"BLOB to list",description:"BLOB to list ( BLOB {; offset} ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-list.md",sourceDirName:"commands-legacy",slug:"/commands/blob-to-list",permalink:"/docs/pt/commands/blob-to-list",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"blob-to-list",title:"BLOB to list",slug:"/commands/blob-to-list",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"BLOB to integer",permalink:"/docs/pt/commands/blob-to-integer"},next:{title:"BLOB to longint",permalink:"/docs/pt/commands/blob-to-longint"}},i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"BLOB to list"})," ( ",(0,a.jsx)(o.em,{children:"BLOB"})," {; ",(0,a.jsx)(o.em,{children:"offset"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Blob"}),(0,a.jsx)(o.td,{children:"Blob"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"BLOB que cont\xe9m uma lista hier\xe1rquica"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"offset"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2194"}),(0,a.jsx)(o.td,{children:"Offset no BLOB (expressado em bytes)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{}),(0,a.jsx)(o.td,{}),(0,a.jsx)(o.td,{}),(0,a.jsx)(o.td,{children:"Novo offset depois da leitura"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Resultado"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Refer\xeancia da lista criada recentemente"})]})]})]}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando BLOB to list cria uma lista hier\xe1rquica com os dados armazenados no BLOB blob no o offset de bytes (a partir de zero) especificado pelo ",(0,a.jsx)(o.em,{children:"offset"})," e retorna um n\xfamero de refer\xeancia de lista hier\xe1rquica para essa nova lista."]}),"\n",(0,a.jsxs)(o.p,{children:["Os dados do BLOB devem ser coerentes com o comando. Normalmente, voc\xea ir\xe1 usar BLOBs que voc\xea previamente preenchou utilizando o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/list-to-blob",children:"LIST TO BLOB"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Se voc\xea n\xe3o especificar o par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"offset"}),", os dados da lista s\xe3o lidos a partir do in\xedcio do BLOB. Se voc\xea lidar com um BLOB em que diversas vari\xe1veis ou listas tenham sido armazenados, voc\xea deve passar o par\xe2metro de deslocamento e, al\xe9m disso, voc\xea deve passar uma vari\xe1vel num\xe9rica. Antes da chamada, defina essa vari\xe1vel num\xe9rica para o deslocamento apropriado. Ap\xf3s a chamada, a mesma vari\xe1vel num\xe9rica retorna o deslocamento da pr\xf3xima vari\xe1vel armazenada dentro do BLOB."]}),"\n",(0,a.jsx)(o.p,{children:"Ap\xf3s a chamada, se a lista hier\xe1rquica foi criado com sucesso, a vari\xe1vel OK \xe9 definida como 1. Se a opera\xe7\xe3o n\xe3o p\xf4de ser executada, a vari\xe1vel OK \xe9 definido como 0, por exemplo, se n\xe3o havia mem\xf3ria suficiente."}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota sobre a independ\xeancia de plataforma"}),": BLOB to list e ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/list-to-blob",children:"LIST TO BLOB"})," usam um formato interno de 4D para o processamento de listas armazenadas em BLOBs. Como benef\xedcio, voc\xea n\xe3o precisa se preocupar com a troca de bytes entre as plataformas ao usar esses dois comandos. Em outras palavras, um BLOB criado no Windows usando os dois comandos podem ser reutilizados em Macintosh e vice-versa."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(o.p,{children:"Neste exemplo, o m\xe9todo do formul\xe1rio para um formul\xe1rio de entrada de dados extrai uma lista de um campo BLOB antes que o formul\xe1rio seja exibido na tela, e armazena-lo de volta no campo BLOB se a entrada de dados for validada:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de formulario [Coisas para fazer];"Entrada"\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hList:=BLOB to list([Coisas para fazer]Ideias)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0hList:=New list\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hList;*)\n\xa0\n\xa0\xa0\xa0\xa0:(bValidate=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LIST TO BLOB(hList;[Coisas para fazer]Ideias)\n\xa0\n\xa0End case\n'})}),"\n",(0,a.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,a.jsx)(o.p,{children:"A vari\xe1vel OK recebe o valor 1 se a lista for criada corretamente, caso contr\xe1rio recebe o valor 0."}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"/docs/pt/commands/list-to-blob",children:"LIST TO BLOB"})})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>d});var a=s(296540);const n={},t=a.createContext(n);function r(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(t.Provider,{value:o},e.children)}}}]);