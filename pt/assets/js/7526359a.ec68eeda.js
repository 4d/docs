"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56452"],{333563:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/qr-set-info-row","title":"QR SET INFO ROW","description":"QR SET INFO ROW ( area ; linha ; ocultar )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-info-row.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-info-row","permalink":"/docs/pt/commands/qr-set-info-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-info-row.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-info-row","title":"QR SET INFO ROW","slug":"/commands/qr-set-info-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET INFO COLUMN","permalink":"/docs/pt/commands/qr-set-info-column"},"next":{"title":"QR SET REPORT KIND","permalink":"/docs/pt/commands/qr-set-report-kind"}}'),i=r("785893"),t=r("250065");let a={id:"qr-set-info-row",title:"QR SET INFO ROW",slug:"/commands/qr-set-info-row",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QR SET INFO ROW"})," ( ",(0,i.jsx)(n.em,{children:"area"})," ; ",(0,i.jsx)(n.em,{children:"linha"})," ; ",(0,i.jsx)(n.em,{children:"ocultar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"area"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Refer\xeancia da \xe1rea criada"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"linha"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Designa a Linha"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ocultar"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"0=exibir, 1=ocultar"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando QR SET INFO ROW mostra/oculta a fila cuja refer\xeancia se passa em ",(0,i.jsx)(n.em,{children:"linha"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"linha"})," designa a linha a modificar:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["se ",(0,i.jsx)(n.em,{children:"linha"})," for igual a -1, o t\xedtulo do relat\xf3rio se afeta,"]}),"\n",(0,i.jsxs)(n.li,{children:["se ",(0,i.jsx)(n.em,{children:"linha"})," for igual a -2, o detalhe do relat\xf3rio se afeta,"]}),"\n",(0,i.jsxs)(n.li,{children:["se ",(0,i.jsx)(n.em,{children:"linha"})," for igual a -3, o total general do relat\xf3rio se afeta,"]}),"\n",(0,i.jsxs)(n.li,{children:["se ",(0,i.jsx)(n.em,{children:"linha"})," for um inteiro positivo, designa a linha do subtotal correspondente."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Pode utilizar as constantes do tema ",(0,i.jsx)(n.em,{children:"QR Filas para propriedades"})," para designar o elemento de linha (",(0,i.jsx)(n.em,{children:"qr title"}),"= -1, ",(0,i.jsx)(n.em,{children:"qr detail"}),"=-2, ",(0,i.jsx)(n.em,{children:"qr grand total"}),"=-3)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"oculta"})," especifica se a linha est\xe1 vis\xedvel ou oculta:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["se ",(0,i.jsx)(n.em,{children:"oculta"})," for igual a 1, a linha est\xe1 oculta;"]}),"\n",(0,i.jsxs)(n.li,{children:["se ",(0,i.jsx)(n.em,{children:"oculta"})," for igual a 0, a linha \xe9 vis\xedvel."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Se passa um n\xfamero de \xe1rea inv\xe1lido, se gera o erro -9850.",(0,i.jsx)(n.br,{}),"\nSe o par\xe2metro linha for incorreto, se gera o erro -9852."]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"A instru\xe7\xe3o a seguir oculta o conte\xfado da linha detalhe:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0QR SET INFO ROW(area;qr detail;1)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/commands/qr-get-info-column",children:"QR GET INFO COLUMN"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/qr-get-info-row",children:"QR Get info row"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/qr-set-info-column",children:"QR SET INFO COLUMN"})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var s=r(667294);let i={},t=s.createContext(i);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);