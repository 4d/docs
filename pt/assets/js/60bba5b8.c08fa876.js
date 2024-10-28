"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24025],{270608:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var t=n(474848),r=n(28453);const d={id:"blob-to-document",title:"BLOB TO DOCUMENT",slug:"/commands/blob-to-document",displayed_sidebar:"docs"},s=void 0,c={id:"commands-legacy/blob-to-document",title:"BLOB TO DOCUMENT",description:"BLOB TO DOCUMENT ( documento ; BLOB )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/blob-to-document.md",sourceDirName:"commands-legacy",slug:"/commands/blob-to-document",permalink:"/docs/pt/commands/blob-to-document",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-document.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"blob-to-document",title:"BLOB TO DOCUMENT",slug:"/commands/blob-to-document",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"BLOB size",permalink:"/docs/pt/commands/blob-size"},next:{title:"BLOB to integer",permalink:"/docs/pt/commands/blob-to-integer"}},a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Tratamento de erros",id:"tratamento-de-erros",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function m(e){const o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"BLOB TO DOCUMENT"})," ( ",(0,t.jsx)(o.em,{children:"documento"})," ; ",(0,t.jsx)(o.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"documento"}),(0,t.jsx)(o.td,{children:"Text"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome do documento gerado"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Blob"}),(0,t.jsx)(o.td,{children:"Blob"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Novo conte\xfado para o documento"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"BLOB TO DOCUMENT"})," reescreve todo o conte\xfado do documento utilizando os dados armazenados no blob..",(0,t.jsx)(o.br,{}),"\nVoc\xea pode passar o nome de um documento existente no ",(0,t.jsx)(o.em,{children:"documento"}),". Se o documento n\xe3o existir, o comando o cria. Se voc\xea passar o nome de um documento existente, certifique-se que ele n\xe3o est\xe1 aberto, caso contr\xe1rio, ser\xe1 gerado um erro. Se voc\xea quiser deixar o usu\xe1rio escolher o documento, use os comandos ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/open-document",children:"Open document"})," ou ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/create-document",children:"Create document"})," e utilize a vari\xe1vel de processo ",(0,t.jsx)(o.em,{children:"documento"})," (ver exemplo)."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota de Compatibilidade:"})," O * opcional (gest\xe3o de resource fork em vers\xf5es antigas de Mac OS) n\xe3o \xe9 mais compat\xedvel com 4D a partir de 4D v16. Para saber mais veja ",(0,t.jsx)(o.em,{children:"Propriedades obsoletas ou removidas"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Voc\xea escreve um Sistema de Informa\xe7\xe3o que permite rapidamente armazenar e recuperar documentos. Em um formul\xe1rio de entrada de dados, voc\xea cria um bot\xe3o que permite salvar um documento que conter\xe1 os dados previamente carregados em um campo BLOB. O m\xe9todo para este bot\xe3o pode ser:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0$vhDocRef:=Create document("")\xa0// Salvar o documento a sua escolha\n\xa0If(OK=1)\xa0// Se um documento j\xe1 foi criado\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// N\xe3o necessitamos mante-lo aberto\n\xa0\xa0\xa0\xa0BLOB TO DOCUMENT(Document;[SuaTabela]SeuCampoBLOB)\xa0// Escrever o conte\xfado do documento\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0// Gerir erro\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(o.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsx)(o.p,{children:"OK \xe9 definido como 1 se o documento est\xe1 escrito corretamente, caso contr\xe1rio, OK \xe9 definido como 0 e um erro \xe9 gerado."}),"\n",(0,t.jsx)(o.h4,{id:"tratamento-de-erros",children:"Tratamento de erros"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Se voc\xea tentar reescrever um documento que n\xe3o existe ou que j\xe1 est\xe1 aberto por outro processo ou aplicativo, o erro adequado do Gerenciador arquivo de \xe9 gerado."}),"\n",(0,t.jsx)(o.li,{children:"O espa\xe7o em disco pode ser insuficiente para escrever o novo conte\xfado do documento."}),"\n",(0,t.jsx)(o.li,{children:"Erros de E / S pode ocorrer durante a reda\xe7\xe3o do documento."}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Em todos os casos, voc\xea pode interceptar o erro usando um m\xe9todo ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/commands/create-document",children:"Create document"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/document-to-blob",children:"DOCUMENT TO BLOB"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/open-document",children:"Open document"})]})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>c});var t=n(296540);const r={},d=t.createContext(r);function s(e){const o=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(d.Provider,{value:o},e.children)}}}]);