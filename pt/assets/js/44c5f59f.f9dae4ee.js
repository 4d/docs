"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27021"],{863968:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>i,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/document-to-blob","title":"DOCUMENT TO BLOB","description":"DOCUMENT TO BLOB ( documento ; BLOB )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/document-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/document-to-blob","permalink":"/docs/pt/20-R7/commands/document-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdocument-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"document-to-blob","title":"DOCUMENT TO BLOB","slug":"/commands/document-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM BLOB","permalink":"/docs/pt/20-R7/commands/delete-from-blob"},"next":{"title":"ENCRYPT BLOB","permalink":"/docs/pt/20-R7/commands/encrypt-blob"}}'),d=n("785893"),t=n("250065");let s={id:"document-to-blob",title:"DOCUMENT TO BLOB",slug:"/commands/document-to-blob",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Tratamento de erros",id:"tratamento-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"DOCUMENT TO BLOB"})," ( ",(0,d.jsx)(o.em,{children:"documento"})," ; ",(0,d.jsx)(o.em,{children:"BLOB"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Par\xe2metro"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"documento"}),(0,d.jsx)(o.td,{children:"Text"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Nome do documento gerado"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Blob"}),(0,d.jsx)(o.td,{children:"Blob"}),(0,d.jsx)(o.td,{children:"\u2194"}),(0,d.jsx)(o.td,{children:"Campo ou vari\xe1vel de tipo BLOB a receber o documento"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{}),(0,d.jsx)(o.td,{}),(0,d.jsx)(o.td,{}),(0,d.jsx)(o.td,{children:"Conte\xfado do documento"})]})]})]}),"\n",(0,d.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["DOCUMENT TO BLOB carrega todo o conte\xfado do ",(0,d.jsx)(o.em,{children:"documento"})," em ",(0,d.jsx)(o.em,{children:"blob"}),". Voc\xea deve passar o nome de um documento existente que n\xe3o esteja aberto, caso contr\xe1rio um erro ser\xe1 gerado. Para deixar o usu\xe1rio escolher o documento a ser carregado para o BLOB, use o comando ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/open-document",children:"Open document"})," e vari\xe1vel de processo do ",(0,d.jsx)(o.em,{children:"documento"})," (ver exemplo)."]}),"\n",(0,d.jsx)(o.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(o.p,{children:"Voc\xea escreve um Sistema de Informa\xe7\xe3o que permite rapidamente armazenar e recuperar documentos. Em um formul\xe1rio de entrada de dados, voc\xea cria um bot\xe3o que permite carregar um documento em um campo BLOB. O m\xe9todo para este bot\xe3o pode ser:"}),"\n",(0,d.jsx)(o.pre,{children:(0,d.jsx)(o.code,{className:"language-4d",children:'\xa0$vhDocRef:=Open document("")\xa0// Selecionar um documento\n\xa0If(OK=1)\xa0// Se um documento foi selecionado\n\xa0\xa0\xa0\xa0CLOSE DOCUMENT($vhDocRef)\xa0// N\xe3o necessitamos manter aberto\n\xa0\xa0\xa0\xa0DOCUMENT TO BLOB(Document;[SuTabla]SuCampoBLOB)\xa0// Carregar o documento\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0// Controlar erro\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,d.jsx)(o.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,d.jsx)(o.p,{children:"OK \xe9 definido como 1 se o documento foi carregado corretamente, caso contr\xe1rio, OK \xe9 definido como 0 e um erro \xe9 gerado."}),"\n",(0,d.jsx)(o.h2,{id:"tratamento-de-erros",children:"Tratamento de erros"}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"Se voc\xea tentar carregar (em um BLOB), um documento que n\xe3o existe ou que j\xe1 est\xe1 aberto por outro processo ou aplicativo, o erro adequado do Gerenciador de Arquivos \xe9 gerado."}),"\n",(0,d.jsx)(o.li,{children:"Um erro de E / S pode ocorrer se o documento est\xe1 bloqueado, localizado em um volume fechado, ou se houver problema na leitura do documento."}),"\n",(0,d.jsx)(o.li,{children:"Se n\xe3o houver mem\xf3ria suficiente para carregar o documento, um erro -108 \xe9 gerado."}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:["Em cada caso, voc\xea pode interceptar o erro usando um m\xe9todo de interrup\xe7\xe3o ",(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,d.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/blob-to-document",children:"BLOB TO DOCUMENT"}),(0,d.jsx)(o.br,{}),"\n",(0,d.jsx)(o.a,{href:"/docs/pt/20-R7/commands/open-document",children:"Open document"})]}),"\n",(0,d.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"N\xfamero do comando"}),(0,d.jsx)(o.td,{children:"525"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Thread-seguro"}),(0,d.jsx)(o.td,{children:"\u2713"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(o.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return c},a:function(){return s}});var r=n(667294);let d={},t=r.createContext(d);function s(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);