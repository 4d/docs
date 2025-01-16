"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78175"],{87813:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"ViewPro/commands/vp-get-show-print-lines","title":"VP Get show print lines","description":"VP Get show print lines ( vpAreaName Integer } ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-get-show-print-lines.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-show-print-lines","permalink":"/docs/es/20-R7/ViewPro/commands/vp-get-show-print-lines","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-show-print-lines.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-get-show-print-lines","title":"VP Get show print lines"},"sidebar":"docs","previous":{"title":"VP Get sheet options","permalink":"/docs/es/20-R7/ViewPro/commands/vp-get-sheet-options"},"next":{"title":"VP Get spans","permalink":"/docs/es/20-R7/ViewPro/commands/vp-get-spans"}}'),i=s("785893"),r=s("250065");let o={id:"vp-get-show-print-lines",title:"VP Get show print lines"},l=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP Get show print lines"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metros"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"\xcdndice de la hoja"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"True si las l\xedneas de impresi\xf3n son visibles, de lo contrario False"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.code,{children:"VP Get show print lines"})," devuelve ",(0,i.jsx)(n.code,{children:"True"})," si las l\xedneas de la vista previa de impresi\xf3n est\xe1n visibles y ",(0,i.jsx)(n.code,{children:"False"})," si est\xe1n ocultas."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro."]}),"\n",(0,i.jsxs)(n.p,{children:["En ",(0,i.jsx)(n.em,{children:"sheet"}),", pase el \xedndice de la hoja objetivo. Si se omite ",(0,i.jsx)(n.em,{children:"sheet"}),", el comando se aplica a la hoja actual."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"La indexaci\xf3n comienza en 0."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente c\xf3digo comprueba si las l\xedneas de vista previa se muestran u ocultan en el documento:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $result : Boolean\n $result:=VP Get show print lines("ViewProArea";1)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R7/ViewPro/commands/vp-set-show-print-lines",children:"VP SET SHOW PRINT LINES"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(667294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);