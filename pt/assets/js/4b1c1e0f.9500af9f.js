"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50595"],{270423:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>s,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/qr-get-document-property","title":"QR Get document property","description":"QR Get document property ( area ; propriedade ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-document-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-document-property","permalink":"/docs/pt/commands/qr-get-document-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-document-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-document-property","title":"QR Get document property","slug":"/commands/qr-get-document-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET DESTINATION","permalink":"/docs/pt/commands/qr-get-destination"},"next":{"title":"QR Get drop column","permalink":"/docs/pt/commands/qr-get-drop-column"}}'),o=n("785893"),t=n("250065");let s={id:"qr-get-document-property",title:"QR Get document property",slug:"/commands/qr-get-document-property",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"QR Get document property"})," ( ",(0,o.jsx)(r.em,{children:"area"})," ; ",(0,o.jsx)(r.em,{children:"propriedade"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"area"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"propriedade"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"1 = Di\xe1logo de Impress\xe3o, 2 = Unidade de documento"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Resultado"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2190"}),(0,o.jsx)(r.td,{children:"Valor da propriedade"})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O comando QR Get document property permite recuperar o estado mostrado para a caixa de di\xe1logo de impress\xe3o ou a unidade utilizada para o documento presente na ",(0,o.jsx)(r.em,{children:"area"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Em ",(0,o.jsx)(r.em,{children:"propriedade"})," pode utilizar uma das constantes do tema ",(0,o.jsx)(r.em,{children:"QR Propriedades de documento"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Constante"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{children:"Valor"}),(0,o.jsx)(r.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"qr field separator"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"3"}),(0,o.jsx)(r.td,{children:"C\xf3digo de caracteres do separador de campos. O valor padr\xe3o \xe9 a vari\xe1vel do sistema FldDelimit (Tab por padr\xe3o)."})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"qr printing dialog"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"1"}),(0,o.jsx)(r.td,{children:"Visualiza\xe7\xe3o da caixa de di\xe1logo de impress\xe3o: Se valor = 0, a caixa de di\xe1logo de impress\xe3o n\xe3o se mostra antes da impress\xe3o. Se valor = 1, a caixa de di\xe1logo de impress\xe3o se mostra antes da impress\xe3o (valor por padr\xe3o)."})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"qr record separator"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"4"}),(0,o.jsx)(r.td,{children:"C\xf3digo de caracteres do separador de registros. O valor por padr\xe3o \xe9 a vari\xe1vel de sistema RecDelimit (Retorno de carro por padr\xe3o)."})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"qr unit"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"2"}),(0,o.jsx)(r.td,{children:"Unidade de documento: Se valor = 0, a unidade do documento \xe9 em pontos. Se valor = 1, a unidade do documento \xe9 o cent\xedmetro. Se valor = 2, a unidade do documento \xe9 a polegada."})]})]})]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Se ",(0,o.jsx)(r.em,{children:"propriedade"})," for igual a 1, o comando aplica para a visualiza\xe7\xe3o da caixa de di\xe1logo de impress\xe3o.\n- Se valor for igual a 1, a caixa de di\xe1logo de impress\xe3o se mostra antes da impress\xe3o.",(0,o.jsx)(r.br,{}),"\n- Se valor for igual a 0, a caixa de di\xe1logo de impress\xe3o n\xe3o se mostra antes da impress\xe3o.",(0,o.jsx)(r.br,{}),"\nO valor por padr\xe3o \xe9 1."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Se a ",(0,o.jsx)(r.em,{children:"propriedade"})," for igual a 2, o comando aplica \xe0 unidade do documento."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["- Se valor for igual a 0, a unidade do documento \xe9 o ponto.",(0,o.jsx)(r.br,{}),"\n- Se valor for igual a 1, a unidade do documento \xe9 o cent\xedmetro.",(0,o.jsx)(r.br,{}),"\n- Se valor for igual a 2, a unidade do documento \xe9 a polegada."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passa um n\xfamero de ",(0,o.jsx)(r.em,{children:"area"})," inv\xe1lido, se gera o erro -9850.",(0,o.jsx)(r.br,{}),"\nSe passa um valor incorreto do par\xe2metro ",(0,o.jsx)(r.em,{children:"propriedade"}),", se gera o erro -9852."]}),"\n",(0,o.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/pt/commands/qr-set-document-property",children:"QR SET DOCUMENT PROPERTY"})}),"\n",(0,o.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"773"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return s}});var d=n(667294);let o={},t=d.createContext(o);function s(e){let r=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),d.createElement(t.Provider,{value:r},e.children)}}}]);