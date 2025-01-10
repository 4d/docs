"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58490"],{893669:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/qr-move-column","title":"QR MOVE COLUMN","description":"QR MOVE COLUMN ( area ; numColuna ; novaPosi\xe7\xe3o )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-move-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-move-column","permalink":"/docs/pt/commands/qr-move-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-move-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-move-column","title":"QR MOVE COLUMN","slug":"/commands/qr-move-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR INSERT COLUMN","permalink":"/docs/pt/commands/qr-insert-column"},"next":{"title":"QR NEW AREA","permalink":"/docs/pt/commands/qr-new-area"}}'),o=s("785893"),t=s("250065");let d={id:"qr-move-column",title:"QR MOVE COLUMN",slug:"/commands/qr-move-column",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"QR MOVE COLUMN"})," ( ",(0,o.jsx)(n.em,{children:"area"})," ; ",(0,o.jsx)(n.em,{children:"numColuna"})," ; ",(0,o.jsx)(n.em,{children:"novaPosi\xe7\xe3o"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"area"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"numColuna"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de coluna"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"novaPosi\xe7\xe3o"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nova posi\xe7\xe3o para a coluna"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"QR MOVE COLUMN"})," move a coluna que se encontra atualmente na posi\xe7\xe3o ",(0,o.jsx)(n.em,{children:"numColuna"})," para a posi\xe7\xe3o ",(0,o.jsx)(n.em,{children:"novaPosi\xe7\xe3o"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Tanto os par\xe2metros ",(0,o.jsx)(n.em,{children:"numColuna"})," e ",(0,o.jsx)(n.em,{children:"novaPosi\xe7\xe3o"})," devem ser n\xfameros v\xe1lidos de coluna (entre 1 e o n\xfamero total de colunas no relat\xf3rio); do contrario, se devolve o erro -9852."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," este comando pode ser usado apenas com os relat\xf3rios em lista."]}),"\n",(0,o.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Se tivesse criado o relat\xf3rio abaixo:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(14625).Z+"",width:"676",height:"196"})}),"\n",(0,o.jsx)(n.p,{children:"Se executar:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0QR MOVE COLUMN(area;3;4)\n"})}),"\n",(0,o.jsx)(n.p,{children:"O resultado ser\xe1:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(40119).Z+"",width:"675",height:"192"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1325"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},14625:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict2569470.en-d5be9d143bb6e93a9019fb35f2364173.png"},40119:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/pict2569472.en-6b0c9a6ead2b092b4d9cfba913f7d59a.png"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var r=s(667294);let o={},t=r.createContext(o);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);