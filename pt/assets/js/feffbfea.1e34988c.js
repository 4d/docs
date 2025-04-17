"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76248"],{762519:function(e,o,a){a.r(o),a.d(o,{default:()=>l,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>t,contentTitle:()=>c});var n=JSON.parse('{"id":"commands-legacy/blob-to-picture","title":"BLOB TO PICTURE","description":"BLOB TO PICTURE ( imagemBlob ; imagem {; codec} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/blob-to-picture.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-picture","permalink":"/docs/pt/commands/blob-to-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-picture.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"blob-to-picture","title":"BLOB TO PICTURE","slug":"/commands/blob-to-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Imagens","permalink":"/docs/pt/commands/theme/Pictures"},"next":{"title":"COMBINE PICTURES","permalink":"/docs/pt/commands/combine-pictures"}}'),r=a("785893"),i=a("250065");let s={id:"blob-to-picture",title:"BLOB TO PICTURE",slug:"/commands/blob-to-picture",displayed_sidebar:"docs"},c=void 0,d={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let o={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"BLOB TO PICTURE"})," ( ",(0,r.jsx)(o.em,{children:"imagemBlob"})," ; ",(0,r.jsx)(o.em,{children:"imagem"})," {; ",(0,r.jsx)(o.em,{children:"codec"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"imagemBlob"}),(0,r.jsx)(o.td,{children:"Blob"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Blob que cont\xe9m uma imagem"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"imagem"}),(0,r.jsx)(o.td,{children:"Picture"}),(0,r.jsx)(o.td,{children:"\u2190"}),(0,r.jsx)(o.td,{children:"Imagem do BLOB"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"codec"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Codec de identifica\xe7\xe3o de Imagem"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"O comando BLOB TO PICTURE insere uma imagem armazenada em um BLOB em um campo ou vari\xe1vel imagem 4D, sem importar seu formato original."}),"\n",(0,r.jsxs)(o.p,{children:["Este comando es similar ao comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/read-picture-file",children:"READ PICTURE FILE"}),", simplesmente se aplica a um BLOB ao inv\xe9s de um arquivo. Isto permite mostrar imagens armazenadas em formato nativo nos BLOBs. Pode carregar uma imagem em um BLOB utilizando, por exemplo, o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/document-to-blob",children:"DOCUMENT TO BLOB"})," ou ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/picture-to-blob",children:"PICTURE TO BLOB"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["No par\xe2metro ",(0,r.jsx)(o.em,{children:"imagemBlob"})," se passa o campo ou imagem BLOB que cont\xe9m a imagem. A imagem pode estar em qualquer formato compat\xedvel nativamente por 4D ou compat\xedvel com QuickTime. Pode obter a lista de formatos dispon\xedveis utilizando o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),". Se passa o par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"codec"}),", 4D utilizar\xe1 o valor neste par\xe2metro para decodificar o BLOB (ver o funcionamento espec\xedfico do comando com este terceiro par\xe2metro a continua\xe7\xe3o)."]}),"\n",(0,r.jsxs)(o.p,{children:["Passe no par\xe2metro ",(0,r.jsx)(o.em,{children:"imagem"})," a vari\xe1vel ou o campo 4D de tipo imagem o qual deve mostrar a imagem."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota:"})," O formato interno da imagem se conserva dentro da vari\xe1vel ou campo 4D."]}),"\n",(0,r.jsxs)(o.p,{children:["Depois da execu\xe7\xe3o do comando, ",(0,r.jsx)(o.em,{children:"imagem"})," cont\xe9m a imagem a mostrar em 4D."]}),"\n",(0,r.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,r.jsx)(o.em,{children:"codec"})," lhe permite especificar o codec a utilizar para a decodifica\xe7\xe3o do BLOB."]}),"\n",(0,r.jsxs)(o.p,{children:["Se passar em ",(0,r.jsx)(o.em,{children:"codec"})," um codec reconhecido por 4D (devolvido pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"})," ), se aplica ao BLOB e a imagem se devolve no campo ou vari\xe1vel imagem."]}),"\n",(0,r.jsxs)(o.p,{children:["Se passar em ",(0,r.jsx)(o.em,{children:"codec"})," um codec n\xe3o reconhecido por 4D, um novo codec se registra dinamicamente com o identificador passado no par\xe2metro. 4D devolve uma imagem que encapsula o BLOB e a vari\xe1vel OK toma o valor 1. Neste caso, para recuperar o BLOB dever\xe1 utilizar o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/picture-to-blob",children:"PICTURE TO BLOB"})," com o mesmo identificador personalizado. Este mecanismo em particular pode ser utilizado para cumprir com duas necessidades espec\xedficas:"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"encapsulado de um BLOB (que n\xe3o \xe9 uma imagem) em uma imagem,"}),"\n",(0,r.jsx)(o.li,{children:"carrega uma imagem sem utilizar um codec."}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:'A implementa\xe7\xe3o destes mecanismos permite, mais especificamente, a cria\xe7\xe3o de "arrays de BLOBs " via arrays de imagem. Esta t\xe9cnica deve ser utilizada com precau\xe7\xe3o porque como os arrays s\xe3o carregados completamente na mem\xf3ria, trabalhar com BLOBs de grande tamanho pode afetar o funcionamento da aplica\xe7\xe3o.'}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota"}),": Um BLOB criado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/commands/variable-to-blob",children:"VARIABLE TO BLOB"}),' se administra automaticamente; n\xe3o \xe9 necess\xe1rio passar um codec para encapsul\xe1-lo j\xe1 que o BLOB est\xe1 "assinado". Neste caso, para a opera\xe7\xe3o contr\xe1ria, dever\xe1 passar ".4DVarBlog" como identificador de codec ao comando ',(0,r.jsx)(o.a,{href:"/docs/pt/commands/picture-to-blob",children:"PICTURE TO BLOB"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,r.jsx)(o.p,{children:"Se o comando se executa corretamente, a vari\xe1vel sistema OK toma o valor 1. Se a convers\xe3o falhar (QuickTime n\xe3o est\xe1 instalado, o BLOB n\xe3o contiver uma imagem leg\xedvel, par\xe2metro codec reconhecido mas n\xe3o validado pelo BLOB , etc.), OK toma o valor 0 e o campo ou vari\xe1vel imagem 4D \xe9 devolvido vazio."}),"\n",(0,r.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/picture-to-blob",children:"PICTURE TO BLOB"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/commands/read-picture-file",children:"READ PICTURE FILE"})]}),"\n",(0,r.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"682"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2713"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(o.td,{children:"OK"})]})]})]})]})}function l(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return c},a:function(){return s}});var n=a(667294);let r={},i=n.createContext(r);function s(e){let o=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);