"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49792],{300320:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>t,toc:()=>m});var n=r(474848),d=r(28453);const s={id:"form-set-entry-order",title:"FORM SET ENTRY ORDER",slug:"/commands/form-set-entry-order",displayed_sidebar:"docs"},a=void 0,t={id:"commands-legacy/form-set-entry-order",title:"FORM SET ENTRY ORDER",description:"FORM SET ENTRY ORDER ( nomeObj {; numPagina} )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-set-entry-order.md",sourceDirName:"commands-legacy",slug:"/commands/form-set-entry-order",permalink:"/docs/pt/commands/form-set-entry-order",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-entry-order.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"form-set-entry-order",title:"FORM SET ENTRY ORDER",slug:"/commands/form-set-entry-order",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"FORM SCREENSHOT",permalink:"/docs/pt/commands/form-screenshot"},next:{title:"FORM SET HORIZONTAL RESIZING",permalink:"/docs/pt/commands/form-set-horizontal-resizing"}},i={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"FORM SET ENTRY ORDER"})," ( ",(0,n.jsx)(o.em,{children:"nomeObj"})," {; ",(0,n.jsx)(o.em,{children:"numPagina"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"nomeObj"}),(0,n.jsx)(o.td,{children:"Text array"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Array de nomes de objeto na sua ordem de entrada esperada"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"numPagina"}),(0,n.jsx)(o.td,{children:"Integer"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"N\xfameros de p\xe1gina para estabelecer a ordem de entrada (p\xe1gina atual se omitido)"})]})]})]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["O comando ",(0,n.jsx)(o.strong,{children:"FORM SET ENTRY ORDER"})," permite definir din\xe2micamente a ordem de entrada do formul\xe1rio atual para o processo atual baseado no array ",(0,n.jsx)(o.em,{children:"nomObjetos"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Passe em ",(0,n.jsx)(o.em,{children:"nomObjetos"})," um array que contenha os nomes dos objetos de formul\xe1rio a incluir na ordem de entrada. A ordem dos objetos no array define a ordem de entrada do formul\xe1rio. Todo objeto de formul\xe1rio v\xe1lido pertencente ao formul\xe1rio atual pode ser listado. Um objeto \xe9 v\xe1lido se:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["tiver a propriedade enfoc\xe1vel (",(0,n.jsx)(o.strong,{children:"Nota"}),": p comando ignora a propriedade ",(0,n.jsx)(o.strong,{children:"Tabul\xe1vel"})," dos objetos),"]}),"\n",(0,n.jsx)(o.li,{children:"existir no formul\xe1rio (seu nome est\xe1 definido),"}),"\n",(0,n.jsxs)(o.li,{children:["for utilizado na p\xe1gina atual (ou na p\xe1gina ",(0,n.jsx)(o.em,{children:"numPag"}),", ver abaixo). Lembre que uma p\xe1gina de formul\xe1rio inclui os objetos da p\xe1gina 0 e os objetos do formul\xe1rio herdado."]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Se for detectado um objeto n\xe3o v\xe1lido em tempo de execu\xe7\xe3o, simplesmente se omite e 4D tentar\xe1 utilizar o seguinte objeto v\xe1lido no array ",(0,n.jsx)(o.em,{children:"nomObjetos"}),". Pode conhecer a ordem de entrada atual da p\xe1gina atual (baseada em objetos v\xe1lidos) utilizando o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/form-get-entry-order",children:"FORM GET ENTRY ORDER"})," com o par\xe0metro *."]}),"\n",(0,n.jsxs)(o.p,{children:["Opcionalmente, pode passar o ",(0,n.jsx)(o.em,{children:"numPag"})," para o qual definir a ordem de entrada. Se for omitido, o comando se aplica \xe0 p\xe1gina atual."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["A ordem de entrada de um subformul\xe1rio \xe9 definida no pr\xf3prio subformul\xe1rio. Deve chamar ao comando ",(0,n.jsx)(o.strong,{children:"FORM SET ENTRY ORDER"})," no contexto de subformul\xe1rio."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Este comando n\xe3o define o primeiro objeto enfoc\xe1vel no formul\xe1rio em tempo de execu\xe7\xe3o. Se quiser definir um primeiro objeto na ordem de entrada, deve utilizar o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/goto-object",children:"GOTO OBJECT"})," no evento On Load de formul\xe1rio. Se utilizar o comando ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/object-duplicate",children:"OBJECT DUPLICATE"}),", pode definir o objeto duplicado como o primeiro passando a constante Object First in entry order no par\xe2metro ",(0,n.jsx)(o.em,{children:"ligadoA"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Sobre a ordem de entrada dos dados"}),(0,n.jsx)(o.br,{}),"\nA ordem de entrada dos dados \xe9 a ordem na qual se selecionam os campos, subformul\xe1rios e todos os demais objetos ativos quando o usu\xe1rio tocar a tecla ",(0,n.jsx)(o.strong,{children:"Tab"})," ou ",(0,n.jsx)(o.strong,{children:"Retorno de carro"})," em um formul\xe1rio. A ordem inversa de entrada de dados tamb\xe9m est\xe1 dispon\xedvel pressionando as teclas ",(0,n.jsx)(o.strong,{children:"Mai\xfascula +Tab"})," ou ",(0,n.jsx)(o.strong,{children:"Mai\xfascula +"})," ",(0,n.jsx)(o.strong,{children:"Retorno de carro"}),". A ordem de entrada pode ser definida como padr\xe3o ou ser modifica no editor de formul\xe1rios. Para mais informa\xe7\xe3o, consulte a se\xe7\xe3o ",(0,n.jsx)(o.em,{children:"Modificar a ordem de entrada dos dados"})," do manual de ",(0,n.jsx)(o.em,{children:"Desenho"}),"."]}),"\n",(0,n.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,n.jsx)(o.p,{children:"Se quiser definir a ordem de entrada dos objetos no formul\xe1rio baseado em seus nomes:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-4d",children:"\xa0ARRAY TEXT(tabNames;0)\n\xa0\n\xa0FORM GET OBJECTS(tabNames;Form current page+Form inherited)\xa0//obtemos os nomes dos objeto de formul\xe1rio\n\xa0SORT ARRAY(tabNames;>)\xa0//classifica os nomes em orden ascendente\n\xa0FORM SET ENTRY ORDER(tabNames)\xa0//utiliza a ordem alfab\xe9tica para a ordem de entrada\n\xa0\xa0//s\xe3o ignorados os objetos n\xe3o enfoc\xe1veis\n"})}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/commands/form-get-entry-order",children:"FORM GET ENTRY ORDER"})})]})}function l(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>a,x:()=>t});var n=r(296540);const d={},s=n.createContext(d);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);