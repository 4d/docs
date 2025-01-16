"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75100"],{136165:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>l,assets:()=>t,toc:()=>c,contentTitle:()=>i});var l=JSON.parse('{"id":"API/BlobClass","title":"Blob","description":"A classe Blob permite que voc\xea crie e manipule objetos blob (4D.Blob).","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/API/BlobClass.md","sourceDirName":"API","slug":"/API/BlobClass","permalink":"/docs/pt/API/BlobClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FBlobClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"BlobClass","title":"Blob"},"sidebar":"docs","previous":{"title":"Fun\xe7\xf5es e comandos de classe","permalink":"/docs/pt/API/overview"},"next":{"title":"Class","permalink":"/docs/pt/API/ClassClass"}}'),s=o("785893"),r=o("250065");let d={id:"BlobClass",title:"Blob"},i=void 0,t={},c=[{value:"Resumo",id:"resumo",level:3},{value:"4D. Blob.new()",id:"4d-blobnew",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".size",id:"size",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".slice()",id:"slice",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:"Exemplo",id:"exemplo",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["A classe Blob permite que voc\xea crie e manipule ",(0,s.jsx)(n.a,{href:"/docs/pt/Concepts/blob#blob-types",children:"objetos blob"})," (",(0,s.jsx)(n.code,{children:"4D.Blob"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"resumo",children:"Resumo"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsx)(n.tr,{children:(0,s.jsx)(n.th,{})})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#4dblobnew",children:[(0,s.jsx)(n.strong,{children:"4D.Blob.new()"})," : 4D.Blob",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"4D.Blob.new"}),"( ",(0,s.jsx)(n.em,{children:"blobScal"})," : Blob ) : 4D.Blob",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"4D.Blob.new"}),"( ",(0,s.jsx)(n.em,{children:"blobObj"})," : 4D.Blob ) : 4D.Blob"]}),(0,s.jsx)(n.br,{}),"cria um novo objeto ",(0,s.jsx)(n.code,{children:"4D.Blob"})," que, opcionalmente, encapsula uma c\xf3pia dos dados de outro blob (blob escalar ou ",(0,s.jsx)(n.code,{children:"4D.Blob"}),")"]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#size",children:[(0,s.jsx)(n.strong,{children:".size"})," : Real"]}),(0,s.jsx)(n.br,{}),"retorna o tamanho de um ",(0,s.jsx)(n.code,{children:"4D.Blob"}),", expresso em bytes."]})}),(0,s.jsx)(n.tr,{children:(0,s.jsxs)(n.td,{children:[(0,s.jsxs)(n.a,{href:"#slice",children:[(0,s.jsx)(n.strong,{children:".slice()"})," : 4D.Blob",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:".slice"}),"( ",(0,s.jsx)(n.em,{children:"start"})," : Real ) : 4D.Blob",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:".slice"}),"( ",(0,s.jsx)(n.em,{children:"start"})," : Real; ",(0,s.jsx)(n.em,{children:"end"})," : Real ) : 4D.Blob"]}),(0,s.jsx)(n.br,{})," cria e retorna um ",(0,s.jsx)(n.code,{children:"4D.Blob"})," que faz refer\xeancia a dados de um subconjunto do blob no qual \xe9 chamado. O blob original n\xe3o \xe9 alterado."]})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"4d-blobnew",children:"4D. Blob.new()"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R2"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4D.Blob.new()"})," : 4D.Blob",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"4D.Blob.new"}),"( ",(0,s.jsx)(n.em,{children:"blobScal"})," : Blob ) : 4D.Blob",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"4D.Blob.new"}),"( ",(0,s.jsx)(n.em,{children:"blobObj"})," : 4D.Blob ) : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob or 4D. Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"Blob a copiar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"4D. Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsx)(n.td,{children:"Novo 4D.Blob"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"4D.Blob.new"})," cria um novo objeto ",(0,s.jsx)(n.code,{children:"4D.Blob"})," que, opcionalmente, encapsula uma c\xf3pia dos dados de outro blob (blob escalar ou ",(0,s.jsx)(n.code,{children:"4D.Blob"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Se o par\xe2metro ",(0,s.jsx)(n.code,{children:"blob"})," for omitido, o m\xe9todo retornar\xe1 um 4D.Blob vazio."]}),"\n",(0,s.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".size"})," : Real"]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o-1",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["A propriedade ",(0,s.jsx)(n.code,{children:".size"})," retorna o tamanho de um ",(0,s.jsx)(n.code,{children:"4D.Blob"}),", expresso em bytes."]}),"\n",(0,s.jsx)(n.h2,{id:"slice",children:".slice()"}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R2"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:".slice()"})," : 4D.Blob",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:".slice"}),"( ",(0,s.jsx)(n.em,{children:"start"})," : Real ) : 4D.Blob",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:".slice"}),"( ",(0,s.jsx)(n.em,{children:"start"})," : Real; ",(0,s.jsx)(n.em,{children:"end"})," : Real ) : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{style:{textAlign:"center"}}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"start"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"\xedndice do primeiro byte a incluir no novo 4D. Blob`."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"end"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,s.jsx)(n.td,{children:"\xedndice do primeiro byte que n\xe3o ser\xe1 inclu\xeddo no novo 4D. Blob`"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"4D. Blob"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,s.jsxs)(n.td,{children:["Novo ",(0,s.jsx)(n.code,{children:"4D.Blob"})]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o-2",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:".slice()"}),"  cria e retorna um ",(0,s.jsx)(n.code,{children:"4D.Blob"})," que faz refer\xeancia a dados de um subconjunto do blob no qual \xe9 chamado. O blob original n\xe3o \xe9 alterado."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.code,{children:"start"})," \xe9 um \xedndice no blob que indica o primeiro byte a ser inclu\xeddo no novo ",(0,s.jsx)(n.code,{children:"4D.Blob"}),". Se especificar um valor negativo, 4D trata-o como uma compensa\xe7\xe3o desde o fim da bolha at\xe9 ao in\xedcio. Por exemplo, -10 seria o 10\xba do \xfaltimo byte na bolha. O valor predefinido \xe9 0. Se voc\xea especificar um valor para start que seja maior do que o tamanho do blob de origem, o tamanho do ",(0,s.jsx)(n.code,{children:"4D.Blob"})," retornado ser\xe1 0 e n\xe3o conter\xe1 dados."]}),"\n",(0,s.jsx)(n.p,{children:"O par\xe2metro end \xe9 um \xedndice no blob indicando o primeiro byte que n\xe3o ser\xe1 inclu\xeddo no novo 4D. Blob (ou seja, o byte exactamente neste \xedndice n\xe3o est\xe1 inclu\xeddo). Se especificar um valor negativo, 4D trata-o como uma compensa\xe7\xe3o desde o fim da bolha at\xe9 ao in\xedcio. Por exemplo, -10 seria o 10\xba do \xfaltimo byte na bolha. O valor por defeito \xe9 o tamanho do blob."}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $myBlob : 4D.Blob\n\n// Armazene texto em um 4D.Blob\nCONVERT FROM TEXT("Ol\xe1, Mundo!"; "UTF-8"; $myBlob)\n$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //Verdadeiro\n\n$myString:=Convert to text($myBlob; "UTF-8")\n// $myString cont\xe9m "Ol\xe1, Mundo!"\n\n// Crie um novo 4D.Blob a partir de $myBlob\n$myNewBlob:=$myBlob.slice(0; 5)\n\n$myString:=Convert to text($myNewBlob; "UTF-8")\n// $myString cont\xe9m "Ol\xe1"\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var l=o(667294);let s={},r=l.createContext(s);function d(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);