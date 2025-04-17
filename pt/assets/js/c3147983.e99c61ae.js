"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96178"],{159504:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-picture-formats","title":"GET PICTURE FORMATS","description":"GET PICTURE FORMATS ( imagem ; codecID )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-picture-formats.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-formats","permalink":"/docs/pt/commands/get-picture-formats","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-formats.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-picture-formats","title":"GET PICTURE FORMATS","slug":"/commands/get-picture-formats","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get picture file name","permalink":"/docs/pt/commands/get-picture-file-name"},"next":{"title":"GET PICTURE FROM LIBRARY","permalink":"/docs/pt/commands/get-picture-from-library"}}'),o=n("785893"),t=n("250065");let d={id:"get-picture-formats",title:"GET PICTURE FORMATS",slug:"/commands/get-picture-formats",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"GET PICTURE FORMATS"})," ( ",(0,o.jsx)(s.em,{children:"imagem"})," ; ",(0,o.jsx)(s.em,{children:"codecID"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"imagem"}),(0,o.jsx)(s.td,{children:"Picture"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Imagem a analisar"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"codecID"}),(0,o.jsx)(s.td,{children:"Text array"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"ID de codec de imagem"})]})]})]}),"\n",(0,o.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Tema:"})," Imagens"]}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"GET PICTURE FORMATS"})," devolve um array de todos os IDs codec contidos na ",(0,o.jsx)(s.em,{children:"imagem"})," passada como par\xe2metro."]}),"\n",(0,o.jsxs)(s.p,{children:["No par\xe2metro ",(0,o.jsx)(s.em,{children:"imagem"}),", se passa uma vari\xe1vel imagem cujos formatos deseja que sejam devolvidos no array ",(0,o.jsx)(s.em,{children:"codecIDs"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Os identificadores codec devolvidos s\xe3o definidos por 4D exatamente da mesma maneira que para o comando ",(0,o.jsx)(s.strong,{children:"PICTURE CODEC LIST"}),(0,o.jsx)(s.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),". Podem ser devolvidos das seguintes formas:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'Como extens\xf5es (por exemplo, ".gif")'}),"\n",(0,o.jsx)(s.li,{children:"Como tipos Mime (por exemplo, \u201Cimage/jpeg\u201D)"}),"\n",(0,o.jsx)(s.li,{children:"Como c\xf3digos QuickTime de 4 caracteres"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Notas:"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Os seguintes codecs, manejados internamente por 4D, sempre s\xe3o devolvidos como extens\xf5es: JPEG, PNG, TIFF, GIF, BMP, SVG, PDF, EMF."}),"\n",(0,o.jsxs)(s.li,{children:["Os c\xf3digos QuickTime de 4 caracteres podem ser devolvidos nos bancos de dados onde a op\xe7\xe3o de compatibilidade QuickTime support tenha sido definida (utilizando o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),"). Entretanto, QuickTime j\xe1 n\xe3o \xe9 compat\xedvel com 4D e n\xe3o \xe9 recomendado o uso de codecs QuickTime."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Para saber mais sobre os IDs codec imagen, consulte ",(0,o.jsx)(s.em,{children:"Imagens"})]}),"\n",(0,o.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"Se quiser saber os formatos de imagem armazenados em um campo para o registro atual:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY TEXT($aTPictureFormats;0)\n\xa0\xa0//Obter todos os formatos salvos\n\xa0GET PICTURE FORMATS([Employees]Photo;$aTPictureFormats)\n"})}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1406"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return d}});var r=n(667294);let o={},t=r.createContext(o);function d(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);