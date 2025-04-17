"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32574"],{857029:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>d,assets:()=>a,toc:()=>c,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/qr-set-document-property","title":"QR SET DOCUMENT PROPERTY","description":"QR SET DOCUMENT PROPERTY ( area ; propriedade ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-set-document-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-document-property","permalink":"/docs/pt/20-R8/commands/qr-set-document-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-document-property.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-document-property","title":"QR SET DOCUMENT PROPERTY","slug":"/commands/qr-set-document-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET DESTINATION","permalink":"/docs/pt/20-R8/commands/qr-set-destination"},"next":{"title":"QR SET HEADER AND FOOTER","permalink":"/docs/pt/20-R8/commands/qr-set-header-and-footer"}}'),t=r("785893"),s=r("250065");let o={id:"qr-set-document-property",title:"QR SET DOCUMENT PROPERTY",slug:"/commands/qr-set-document-property",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR SET DOCUMENT PROPERTY"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"propriedade"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propriedade"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"1=Di\xe1logo de impress\xe3o, 2=Unidade do documento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor da propriedade"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"O comando QR SET DOCUMENT PROPERTY permite mostrar a caixa de di\xe1logo de impress\xe3o ou definir a unidade utilizada pelo documento."}),"\n",(0,t.jsxs)(n.p,{children:["Em ",(0,t.jsx)(n.em,{children:"propriedade"}),", pode passar uma das constantes do tema ",(0,t.jsx)(n.em,{children:"QR Propriedades de documento"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr field separator"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"C\xf3digo de caracteres do separador de campos. O valor padr\xe3o \xe9 a vari\xe1vel do sistema FldDelimit (Tab por padr\xe3o)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr printing dialog"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Visualiza\xe7\xe3o da caixa de di\xe1logo de impress\xe3o: Se valor = 0, a caixa de di\xe1logo de impress\xe3o n\xe3o se mostra antes da impress\xe3o. Se valor = 1, a caixa de di\xe1logo de impress\xe3o se mostra antes da impress\xe3o (valor por padr\xe3o)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr record separator"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"C\xf3digo de caracteres do separador de registros. O valor por padr\xe3o \xe9 a vari\xe1vel de sistema RecDelimit (Retorno de carro por padr\xe3o)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr unit"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Unidade de documento: Se valor = 0, a unidade do documento \xe9 em pontos. Se valor = 1, a unidade do documento \xe9 o cent\xedmetro. Se valor = 2, a unidade do documento \xe9 a polegada."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["se passa um n\xfamero de \xe1rea incorreto, se gera o erro -9850.",(0,t.jsx)(n.br,{}),"\nSe passa um valor incorreto do par\xe2metro propriedade, se gera o erro -9852 ou -9853."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/qr-get-document-property",children:"QR Get document property"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"772"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var d=r(667294);let t={},s=d.createContext(t);function o(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);