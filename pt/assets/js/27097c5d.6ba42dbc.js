"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85327"],{817650:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-blob-size","title":"SET BLOB SIZE","description":"SET BLOB SIZE ( BLOB ; tamanho {; preenchimento} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-blob-size.md","sourceDirName":"commands-legacy","slug":"/commands/set-blob-size","permalink":"/docs/pt/commands/set-blob-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-blob-size.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-blob-size","title":"SET BLOB SIZE","slug":"/commands/set-blob-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REAL TO BLOB","permalink":"/docs/pt/commands/real-to-blob"},"next":{"title":"TEXT TO BLOB","permalink":"/docs/pt/commands/text-to-blob"}}'),r=o("785893"),t=o("250065");let d={id:"set-blob-size",title:"SET BLOB SIZE",slug:"/commands/set-blob-size",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Nota",id:"nota",level:3},{value:"Tratamento de erro",id:"tratamento-de-erro",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET BLOB SIZE"})," ( ",(0,r.jsx)(n.em,{children:"BLOB"})," ; ",(0,r.jsx)(n.em,{children:"tamanho"})," {; ",(0,r.jsx)(n.em,{children:"preenchimento"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Campo ou vari\xe1vel BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tamanho"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Novo tamanho do BLOB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"preenchimento"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"C\xf3digo ASCII do caractere de preenchimento"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["SET BLOB SIZE redimensiona o BLOB ",(0,r.jsx)(n.em,{children:"blob"})," de acordo com o valor passado no ",(0,r.jsx)(n.em,{children:"tamanho"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea deseja alocar novos bytes para um BLOB e deseja que os bytes sejam inicializados com um valor espec\xedfico, passe o valor (0 .. 255) para o par\xe2metro de ",(0,r.jsx)(n.em,{children:"preenchimento"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"nota",children:"Nota"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota de compatibilidade"}),": como este comando altera o blob passado como par\xe2metro, n\xe3o \xe9 compat\xedvel com objetos blob (tipo 4D.Blob). Ver ",(0,r.jsx)(n.em,{children:"Passing blobs and blob objects to 4D commands"})," em developer.4d.com"]}),"\n",(0,r.jsx)(n.h2,{id:"tratamento-de-erro",children:"Tratamento de erro"}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea n\xe3o pode redimensionar um BLOB devido a mem\xf3ria insuficiente, o erro -108 \xe9 gerado. Voc\xea pode interceptar esse erro usando um m\xe9todo de interrup\xe7\xe3o ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Quando voc\xea est\xe1 no meio de um processo longo ou interprocesso BLOB, \xe9 uma boa id\xe9ia liberar a mem\xf3ria que ocupa. Para isso, escreva:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0SET BLOB SIZE(aProcessBLOB;0)\n\xa0SET BLOB SIZE(\u25CAanInterprocessBLOB;0)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"O exemplo a seguir cria um BLOB de 16K cheios de 0xFF:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0var vxData : Blob\n\xa0SET BLOB SIZE(vxData;16*1024;0xFF)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/blob-size",children:"BLOB size"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"606"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let r={},t=s.createContext(r);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);