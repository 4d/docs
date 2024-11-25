"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92321"],{16628:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>t});var s=JSON.parse('{"id":"API/BlobClass","title":"Blob","description":"La classe Blob vous permet de cr\xe9er et de manipuler des objets blob (4D.Blob).","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/API/BlobClass.md","sourceDirName":"API","slug":"/API/BlobClass","permalink":"/docs/fr/20-R6/API/BlobClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FBlobClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"BlobClass","title":"Blob"},"sidebar":"docs","previous":{"title":"A propos des fonctions de classes","permalink":"/docs/fr/20-R6/API/overview"},"next":{"title":"Class","permalink":"/docs/fr/20-R6/API/ClassClass"}}'),r=l("785893"),i=l("250065");let t={id:"BlobClass",title:"Blob"},d=void 0,o={},c=[{value:"Sommaire",id:"sommaire",level:3},{value:"4D.Blob.new()",id:"4dblobnew",level:2},{value:"Description",id:"description",level:4},{value:".size",id:"size",level:2},{value:"Description",id:"description-1",level:4},{value:".slice()",id:"slice",level:2},{value:"Description",id:"description-2",level:4},{value:"Exemple",id:"exemple",level:4}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["La classe Blob vous permet de cr\xe9er et de manipuler des ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R6/Concepts/blob#blob-types",children:"objets blob"})," (",(0,r.jsx)(n.code,{children:"4D.Blob"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"sommaire",children:"Sommaire"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#4dblobnew",children:[(0,r.jsx)(n.strong,{children:"4D.Blob.new()"})," : 4D.Blob",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"4D.Blob.new"}),"( ",(0,r.jsx)(n.em,{children:"blobScal"})," : Blob ) : 4D.Blob",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"4D.Blob.new"}),"( ",(0,r.jsx)(n.em,{children:"blobObj"})," : 4D.Blob ) : 4D.Blob"]}),(0,r.jsx)(n.br,{}),"cr\xe9e un nouvel objet ",(0,r.jsx)(n.code,{children:"4D.Blob"})," encapsulant optionnellement une copie des donn\xe9es d'un autre blob (blob scalaire ou ",(0,r.jsx)(n.code,{children:"4D.Blob"}),")"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#size",children:[(0,r.jsx)(n.strong,{children:".size"})," : Real"]}),(0,r.jsx)(n.br,{}),"retourne la taille d'un ",(0,r.jsx)(n.code,{children:"4D.Blob"}),", exprim\xe9e en octets."]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#slice",children:[(0,r.jsx)(n.strong,{children:".slice()"})," : 4D.Blob",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".slice"}),"( ",(0,r.jsx)(n.em,{children:"start"})," : Real ) : 4D.Blob",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".slice"}),"( ",(0,r.jsx)(n.em,{children:"start"})," : Real; ",(0,r.jsx)(n.em,{children:"end"})," : Real ) : 4D.Blob"]}),(0,r.jsx)(n.br,{})," cr\xe9e et retourne un ",(0,r.jsx)(n.code,{children:"4D.Blob"})," qui r\xe9f\xe9rence les donn\xe9es d'un sous-ensemble du blob sur lequel il est appel\xe9. Le blob d'origine n'est pas modifi\xe9."]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4dblobnew",children:"4D.Blob.new()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R2"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"4D.Blob.new()"})," : 4D.Blob",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"4D.Blob.new"}),"( ",(0,r.jsx)(n.em,{children:"blobScal"})," : Blob ) : 4D.Blob",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"4D.Blob.new"}),"( ",(0,r.jsx)(n.em,{children:"blobObj"})," : 4D.Blob ) : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"blob"}),(0,r.jsx)(n.td,{children:"Blob ou 4D.Blob"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Blob pour copie"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"4D.Blob"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"Nouveau 4D.Blob"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"4D.Blob.new"})," cr\xe9e un nouvel objet ",(0,r.jsx)(n.code,{children:"4D.Blob"})," encapsulant optionnellement une copie des donn\xe9es d'un autre blob (blob scalaire ou ",(0,r.jsx)(n.code,{children:"4D.Blob"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Si le param\xe8tre ",(0,r.jsx)(n.code,{children:"blob"})," est omis, la fonction retourne un 4D.Blob vide."]}),"\n",(0,r.jsx)(n.h2,{id:"size",children:".size"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".size"})," : Real"]}),"\n",(0,r.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La propri\xe9t\xe9 ",(0,r.jsx)(n.code,{children:".size"})," retourne la taille d'un ",(0,r.jsx)(n.code,{children:"4D.Blob"}),", exprim\xe9e en octets."]}),"\n",(0,r.jsx)(n.h2,{id:"slice",children:".slice()"}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R2"}),(0,r.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".slice()"})," : 4D.Blob",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".slice"}),"( ",(0,r.jsx)(n.em,{children:"start"})," : Real ) : 4D.Blob",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:".slice"}),"( ",(0,r.jsx)(n.em,{children:"start"})," : Real; ",(0,r.jsx)(n.em,{children:"end"})," : Real ) : 4D.Blob"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"start"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsxs)(n.td,{children:["indice du premier octet \xe0 inclure dans le nouveau ",(0,r.jsx)(n.code,{children:"4D.Blob"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"end"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsxs)(n.td,{children:["indice du premier octet qui ne sera pas inclus dans le nouveau ",(0,r.jsx)(n.code,{children:"4D.Blob"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"4D.Blob"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(n.td,{children:["Nouveau ",(0,r.jsx)(n.code,{children:"4D.Blob"})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:".slice()"}),"  cr\xe9e et retourne un ",(0,r.jsx)(n.code,{children:"4D.Blob"})," qui r\xe9f\xe9rence les donn\xe9es d'un sous-ensemble du blob sur lequel il est appel\xe9. Le blob d'origine n'est pas modifi\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.code,{children:"start"})," est un indice dans le blob, indiquant le premier octet \xe0 inclure dans le nouveau ",(0,r.jsx)(n.code,{children:"4D.Blob"}),". Si vous indiquez une valeur n\xe9gative, 4D la traite comme un d\xe9calage de la fin du blob vers le d\xe9but. Par exemple, -10 correspondrait \xe0 l'avant-dernier octet du blob. La valeur par d\xe9faut est 0. Si vous sp\xe9cifiez une valeur pour start qui est sup\xe9rieure \xe0 la taille du blob source, la taille du ",(0,r.jsx)(n.code,{children:"4D.Blob"})," retourn\xe9 est 0, et il ne contient aucune donn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["Le param\xe8tre ",(0,r.jsx)(n.code,{children:"end"})," est un indice dans le blob indiquant le premier octet qui ne sera pas inclus dans le nouveau ",(0,r.jsx)(n.code,{children:"4D.Blob"})," (c'est-\xe0-dire que l'octet situ\xe9 exactement \xe0 cet indice ne sera pas inclus). Si vous indiquez une valeur n\xe9gative, 4D la traite comme un d\xe9calage de la fin du blob vers le d\xe9but. Par exemple, -10 correspondrait \xe0 l'avant-dernier octet du blob. La valeur par d\xe9faut est la taille du blob."]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $myBlob : 4D.Blob\n\n// Stocker du texte dans un 4D.Blob\nCONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)\n$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True\n\n$myString:=Convert to text($myBlob; "UTF-8")\n// $myString contient "Hello, World!"\n\n// Cr\xe9er un nouveau 4D.Blob \xe0 partir de $myBlob\n$myNewBlob:=$myBlob.slice(0; 5)\n\n$myString:=Convert to text($myNewBlob; "UTF-8")\n// $myString contient "Hello"\n'})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return d},a:function(){return t}});var s=l(667294);let r={},i=s.createContext(r);function t(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);