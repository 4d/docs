"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60276"],{636474:function(e,r,s){s.r(r),s.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/get-resource","title":"GET RESOURCE","description":"GET RESOURCE ( resTipo ; resNum ; resDados {; resArquivo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-resource.md","sourceDirName":"commands-legacy","slug":"/commands/get-resource","permalink":"/docs/pt/20-R8/commands/get-resource","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-resource.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-resource","title":"GET RESOURCE","slug":"/commands/get-resource","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE RESOURCE","permalink":"/docs/pt/20-R8/commands/get-picture-resource"},"next":{"title":"Get resource name","permalink":"/docs/pt/20-R8/commands/get-resource-name"}}'),o=s("785893"),d=s("250065");let t={id:"get-resource",title:"GET RESOURCE",slug:"/commands/get-resource",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Independ\xeancia de plataforma",id:"independ\xeancia-de-plataforma",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"GET RESOURCE"})," ( ",(0,o.jsx)(r.em,{children:"resTipo"})," ; ",(0,o.jsx)(r.em,{children:"resNum"})," ; ",(0,o.jsx)(r.em,{children:"resDados"})," {; ",(0,o.jsx)(r.em,{children:"resArquivo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"resTipo"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"tipo de resource de 4 caracteres"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"resNum"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"N\xfamero do recurso"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"resDados"}),(0,o.jsx)(r.td,{children:"Blob"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Campo BLOB ou vari\xe1vel para receber os dados"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"Conte\xfados do resource"}),(0,o.jsx)(r.td,{}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"resArquivo"}),(0,o.jsx)(r.td,{children:"Time"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"N\xfamero de refer\xeancia do arquivo Resource, ou todos os arquivos de refer\xeancia abertos, se omitido"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["o comando GET RESOURCE retorna no campo o a vari\xe1vel BLOB ",(0,o.jsx)(r.em,{children:"resDados"})," o conte\xfado do recurso cujo tipo e n\xfamero se passa em ",(0,o.jsx)(r.em,{children:"resTipo"})," e ",(0,o.jsx)(r.em,{children:"resNum"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Importante"}),": deve passar uma string de 4 caracteres em ",(0,o.jsx)(r.em,{children:"resTipo"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Se n\xe3o se encontra o recurso, o par\xe2metro ",(0,o.jsx)(r.em,{children:"resDados"})," n\xe3o muda e a vari\xe1vel OK toma o valor 0 (zero)."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passa um n\xfamero de refer\xeancia de arquivo de recursos v\xe1lido em ",(0,o.jsx)(r.em,{children:"resArquivo"}),", o recurso \xe9 procurado apenas nesse arquivo. Se n\xe3o passa ",(0,o.jsx)(r.em,{children:"resArquivo"}),", a primeira ocorr\xeancia do recurso encontrada na string de arquivos de recursos \xe9 retornada."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota"}),": o tamanho de um recurso pode ser de v\xe1rios megabytes."]}),"\n",(0,o.jsx)(r.h2,{id:"independ\xeancia-de-plataforma",children:"Independ\xeancia de plataforma"}),"\n",(0,o.jsxs)(r.p,{children:['Lembre que trabalha com recursos baseados em Mac OS. Sem importar a plataforma, os valores internos dos recursos como os Inteiros Longos s\xe3o armazenados usando ordena\xe7\xe3o de bytes ("byte ordering") Macintosh. No Windows, para os dados dos recursos padr\xe3o (tais como os recursos listas de cadeias e os recursos imagens) a ordena\xe7\xe3o de bytes \xe9 automaticamente inversa ("byte swapping") quando for necess\xe1rio. Por outra parte, se criar e utilizar suas pr\xf3prias estruturas de dados internas, voc\xea decide se aplica a ordena\xe7\xe3o inversa aos dados que extraiu do BLOB (por exemplo, ao passar Macintosh byte ordering a um comando como ',(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/blob-to-longint",title:"BLOB to longint",children:"BLOB to longint"}),")."]}),"\n",(0,o.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(r.p,{children:"Ver o exemplo do comando SET RESOURCE."}),"\n",(0,o.jsx)(r.h2,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,o.jsx)(r.p,{children:"A vari\xe1vel sistema OK assume o valor 1 se o recurso for encontrado, do contr\xe1rio assume o valor 0 (zero)."}),"\n",(0,o.jsx)(r.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,o.jsxs)(r.p,{children:["Se n\xe3o houver mem\xf3ria suficiente para carregar a imagem, um erro \xe9 gerado. Pode interceptar esse erro com a ajuda de um m\xe9todo de gest\xe3o de erros instalado pelo comando ",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/on-err-call",title:"ON ERR CALL",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.em,{children:"Recursos"})}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"508"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2717"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(r.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return t}});var n=s(667294);let o={},d=n.createContext(o);function t(e){let r=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);