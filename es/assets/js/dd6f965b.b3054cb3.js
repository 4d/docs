"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90011],{543665:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(474848),d=r(28453);const o={id:"qr-find-column",title:"QR Find column",slug:"/commands/qr-find-column",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/qr-find-column",title:"QR Find column",description:"QR Find column ( area ; expresion ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-find-column.md",sourceDirName:"commands-legacy",slug:"/commands/qr-find-column",permalink:"/docs/es/commands/qr-find-column",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-find-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-find-column",title:"QR Find column",slug:"/commands/qr-find-column",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR EXECUTE COMMAND",permalink:"/docs/es/commands/qr-execute-command"},next:{title:"QR Get area property",permalink:"/docs/es/commands/qr-get-area-property"}},t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function a(e){const n={br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR Find column"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"expresion"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"expresion"}),(0,s.jsx)(n.td,{children:"Text, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Objeto de columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de columna"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando QR Find column devuelve el n\xfamero de la primera columna cuyo contenido corresponde a la ",(0,s.jsx)(n.em,{children:"expresion"})," pasada en par\xe1metro."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"expresion"})," puede ser una cadena o un puntero."]}),"\n",(0,s.jsx)(n.p,{children:"QR Find column devuelve \u20131 si no se encuentra nada."}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente c\xf3digo permite recuperar el n\xfamero de la columna que contiene el campo [G.NQR Tests]Trimestre y borra esa columna:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$NumColumn:=QR Find column(MiArea;->[G.NQR Tests]Trimestre)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["o:",(0,s.jsx)(n.br,{}),'\n$NumColumn:=QR Find column (MiArea; "[G.NQR Tests]Trimestre")']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If($NumColumn#-1)\n\xa0\xa0\xa0\xa0QR DELETE COLUMN(MiArea;$NumColumn)\n\xa0End if\n"})})]})}function m(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var s=r(296540);const d={},o=s.createContext(d);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);