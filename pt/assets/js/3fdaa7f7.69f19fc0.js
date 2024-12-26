"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77398"],{542796:function(e,o,a){a.r(o),a.d(o,{metadata:()=>n,contentTitle:()=>t,default:()=>p,assets:()=>i,toc:()=>l,frontMatter:()=>d});var n=JSON.parse('{"id":"Concepts/blob","title":"BLOB","description":"- O campo, a vari\xe1vel ou a express\xe3o BLOB (Binary Large OBjects) \xe9 uma s\xe9rie cont\xedgua de bytes que pode ser tratada como um \xfanico objeto ou cujos bytes podem ser endere\xe7ados individualmente. Um BLOB pode estar vazio (comprimento nulo) ou conter at\xe9 2147483647 bytes (2 GB).","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/Concepts/dt_blob.md","sourceDirName":"Concepts","slug":"/Concepts/blob","permalink":"/docs/pt/18/Concepts/blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_blob.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"blob","title":"BLOB"},"sidebar":"docs","previous":{"title":"Tipos de dados","permalink":"/docs/pt/18/Concepts/data-types"},"next":{"title":"Par\xe2metros","permalink":"/docs/pt/18/Concepts/boolean"}}'),r=a("785893"),s=a("250065");let d={id:"blob",title:"BLOB"},t=void 0,i={},l=[{value:"Passagem de par\xe2metros, ponteiros e resultados de fun\xe7\xf5es",id:"passagem-de-par\xe2metros-ponteiros-e-resultados-de-fun\xe7\xf5es",level:2},{value:"Operador de atribui\xe7\xe3o",id:"operador-de-atribui\xe7\xe3o",level:2},{value:"Endere\xe7amento do conte\xfado de um BLOB",id:"endere\xe7amento-do-conte\xfado-de-um-blob",level:2}];function m(e){let o={blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"O campo, a vari\xe1vel ou a express\xe3o BLOB (Binary Large OBjects) \xe9 uma s\xe9rie cont\xedgua de bytes que pode ser tratada como um \xfanico objeto ou cujos bytes podem ser endere\xe7ados individualmente. Um BLOB pode estar vazio (comprimento nulo) ou conter at\xe9 2147483647 bytes (2 GB)."}),"\n"]}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Por padr\xe3o, 4D define o tamanho m\xe1ximo de blob para 2\xa0GB, mas este limite de tamanho pode ser menor, dependendo do seu Sistema Operacional e da quantidade de espa\xe7o dispon\xedvel."}),"\n"]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Um BLOB \xe9 carregado na mem\xf3ria na sua totalidade. Uma vari\xe1vel BLOB \xe9 mantida e existe apenas na mem\xf3ria. Um campo BLOB \xe9 carregado na mem\xf3ria desde o disco, como o resto do registro ao que pertence."}),"\n",(0,r.jsxs)(o.li,{children:["Como os outros tipos de campo que podem reter uma grande quantidade de dados (tais como tipo de campo Imagem), os campos BLOB n\xe3o s\xe3o duplicados na mem\xf3ria quando um registro for modificado. Consequentemente o resultado devolvido pelos comandos ",(0,r.jsx)(o.code,{children:"Old"})," e ",(0,r.jsx)(o.code,{children:"Modified"})," n\xe3o \xe9 significativo quando for aplicado a um campo BLOB."]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"passagem-de-par\xe2metros-ponteiros-e-resultados-de-fun\xe7\xf5es",children:"Passagem de par\xe2metros, ponteiros e resultados de fun\xe7\xf5es"}),"\n",(0,r.jsx)(o.p,{children:"BLOBs 4D podem ser passados como par\xe2metros para comandos 4D ou rotinas de plugin que esperam por par\xe2metros BLOB. Os BLOBS tamb\xe9m pode ser passado como par\xe2metros para um m\xe9todo usu\xe1rio ou ser retornado como um resultado de fun\xe7\xe3o."}),"\n",(0,r.jsx)(o.p,{children:"Para passar um BLOB para seus pr\xf3prios m\xe9todos, voc\xea tamb\xe9m pode definir um ponteiro para a BLOB e passar o ponteiro como par\xe2metro."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Exemplos:"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"  Declarar uma vari\xe1vel do tipo BLOB\n C_BLOB(anyBlobVar)\n  ` O BLOB \xe9 passado como par\xe2metro para um comando 4D\n SET BLOB SIZE(anyBlobVar;1024*1024)\n  ` O BLOB \xe9 passado como par\xe2metro para uma rotina externa\n $errCode:=Do Something With This BLOB(anyBlobVar)\n  ` O BLOB \xe9 passado como par\xe2metro para um m\xe9todo que retorna um BLOB\n C_BLOB(retrieveBlob)\n retrieveBlob:=Fill_Blob(anyBlobVar)\n  ` Um ponteiro para o BLOB \xe9 passado como par\xe2metro para um m\xe9todo usu\xe1rio\n COMPUTE BLOB(->anyBlobVar)\n"})}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota para  desenvolvedores de plugins:"}),' um par\xe2metro BLOB se declara como "&O" (a letra "O", n\xe3o o n\xfamero "0").']}),"\n",(0,r.jsx)(o.h2,{id:"operador-de-atribui\xe7\xe3o",children:"Operador de atribui\xe7\xe3o"}),"\n",(0,r.jsx)(o.p,{children:"\xc9 poss\xedvel atribuir BLOBs uns aos outros."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.strong,{children:"Exemplo:"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"  ` Declarar duas vari\xe1veis do tipo BLOB\n C_BLOB(vBlobA; BlobB)\n  ` Definir o tamanho do primeiro BLOB para 10K\n SET BLOB SIZE(vBlobA; 10*1024)\n  ` Atribua o primeiro BLOB ao segundo\n vBlobB:=vBlobA\n"})}),"\n",(0,r.jsx)(o.p,{children:"No entanto, nenhum operador pode ser aplicado a BLOBs."}),"\n",(0,r.jsx)(o.h2,{id:"endere\xe7amento-do-conte\xfado-de-um-blob",children:"Endere\xe7amento do conte\xfado de um BLOB"}),"\n",(0,r.jsx)(o.p,{children:"Voc\xea pode endere\xe7ar cada byte de um BLOB individualmente usando os s\xedmbolos de chaves {...}. Em um BLOB, os bytes s\xe3o numerados de 0 a N-1, onde N \xe9 o tamanho do BLOB. Exemplo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:"  ` Declare uma vari\xe1vel do tipo BLOB\n C_BLOB(vBlob)\n  ` Definir o tamanho do BLOB para 256 bytes\n SET BLOB SIZE(vBlob;256)\n  ` O loop abaixo inicializa os 256 bytes do BLOB a zero\n For(vByte;0;BLOB size(vBlob)-1)\n    vBlob{vByte}:=0\n End for\n"})}),"\n",(0,r.jsx)(o.p,{children:"Porque voc\xea pode endere\xe7ar todos os bytes de um BLOB individualmente, voc\xea pode realmente armazenar o que quiser em uma vari\xe1vel ou campo BLOB."})]})}function p(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,o,a){a.d(o,{Z:function(){return t},a:function(){return d}});var n=a(667294);let r={},s=n.createContext(r);function d(e){let o=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);