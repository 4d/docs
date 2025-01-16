"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41610"],{39593:function(e,o,n){n.r(o),n.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>t,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/convert-picture","title":"CONVERT PICTURE","description":"CONVERT PICTURE ( imagem ; codec {; compressao} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/convert-picture.md","sourceDirName":"commands-legacy","slug":"/commands/convert-picture","permalink":"/docs/pt/commands/convert-picture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fconvert-picture.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"convert-picture","title":"CONVERT PICTURE","slug":"/commands/convert-picture","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COMBINE PICTURES","permalink":"/docs/pt/commands/combine-pictures"},"next":{"title":"CREATE THUMBNAIL","permalink":"/docs/pt/commands/create-thumbnail"}}'),s=n("785893"),d=n("250065");let a={id:"convert-picture",title:"CONVERT PICTURE",slug:"/commands/convert-picture",displayed_sidebar:"docs"},i=void 0,c={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"CONVERT PICTURE"})," ( ",(0,s.jsx)(o.em,{children:"imagem"})," ; ",(0,s.jsx)(o.em,{children:"codec"})," {; ",(0,s.jsx)(o.em,{children:"compressao"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"imagem"}),(0,s.jsx)(o.td,{children:"Picture"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Imagem a ser convertida"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"Imagem convertida"}),(0,s.jsx)(o.td,{}),(0,s.jsx)(o.td,{})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"codec"}),(0,s.jsx)(o.td,{children:"Text"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Codec de identifica\xe7\xe3o de Imagem"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"compressao"}),(0,s.jsx)(o.td,{children:"Real"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Qualidade da compress\xe3o"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando CONVERT PICTURE converte ",(0,s.jsx)(o.em,{children:"imagem"})," em um novo tipo."]}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro ",(0,s.jsx)(o.em,{children:"codec"})," indica o tipo de imagem a gerar. Um codec pode ser uma extens\xe3o (por exemplo, \u201C.gif\u201D), um tipo Mime (por exemplo, \u201Cimage/jpeg\u201D).",(0,s.jsx)(o.br,{}),"\nPode obter uma lista de codecs dispon\xedveis utilizando o comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se o campo ou vari\xe1vel ",(0,s.jsx)(o.em,{children:"imagem"})," \xe9 de tipo composto (se por exemplo for o resultado da a\xe7\xe3o copiar -pegar), s\xf3 a informa\xe7\xe3o correspondente ao tipo codec se conserva na imagem resultante."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," Se o tipo de ",(0,s.jsx)(o.em,{children:"codec"})," solicitado \xe9 o mesmo que o tipo original da ",(0,s.jsx)(o.em,{children:"imagem"}),', n\xe3o se realiza nenhuna convers\xe3o e a imagem se devolve "tal qual" (exceto quando se utiliza o par\xe2metro ',(0,s.jsx)(o.em,{children:"compressao"}),", ver a continua\xe7\xe3o)."]}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,s.jsx)(o.em,{children:"compressao"}),", se for passada, permite definir a qualidade de compress\xe3o a aplicar a imagem resultante quando se utiliza um Codec compat\xedvel. Em ",(0,s.jsx)(o.em,{children:"compressao"}),", passe um valor entre 0 e 1 para especificar a qualidade da compress\xe3o, onde 0 \xe9 a qualidade mais med\xedocre (alta compress\xe3o) e 1 a melhor qualidade (compress\xe3o baixa). Este par\xe2metro s\xf3 \xe9 considerado quando o codec for compat\xedvel com a compress\xe3o (por exemplo JPEG o HDPhoto) e for compat\xedvel com os APIs WIC e ImageIO. Portanto, n\xe3o pode ser utilizado com Codecs administrados por QuickTime unicamente. Para maior informa\xe7\xe3o sobre os APIs de gest\xe3o de imagem em 4D, consulte a se\xe7\xe3o ",(0,s.jsx)(o.em,{children:"Imagens"}),". Por padr\xe3o, se omitir o par\xe2metro ",(0,s.jsx)(o.em,{children:"compressao"}),", se aplica a melhor qualidade (compress\xe3o =1)."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," Se quiser chamar ",(0,s.jsx)(o.strong,{children:"CONVERT PICTURE"})," com o tipo de imagem que n\xe3o for compat\xedvel em vers\xf5es 4D de 64-bits (tais como PICT), tenha certeza de que a convers\xe3o \xe9 realizada em uma vers\xe3o 4D de 32-bits, na qual o tipo original \xe9 compat\xedvel. Para saber mais, veja a p\xe1gina ",(0,s.jsx)(o.em,{children:"Mudar de vers\xf5es 32-bits a vers\xf5es 64-bits"}),"."]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"Convers\xe3o da imagem vpFoto ao formato jpeg:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0CONVERT PICTURE(vpFoto;".jpg")\n'})}),"\n",(0,s.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Convers\xe3o de uma imagem com qualidade de 60%:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0CONVERT PICTURE(vPicture;".JPG";0.6)\n'})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/picture-codec-list",children:"PICTURE CODEC LIST"})}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1002"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return a}});var r=n(667294);let s={},d=r.createContext(s);function a(e){let o=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);