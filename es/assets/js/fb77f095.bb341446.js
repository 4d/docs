"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38146"],{883598:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-names","title":"VP Get names","description":"VP Get names ( vpAreaName Integer } ) : Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-get-names.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-names","permalink":"/docs/es/ViewPro/commands/vp-get-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-names.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-names","title":"VP Get names"},"sidebar":"docs","previous":{"title":"VP Get frozen panes","permalink":"/docs/es/ViewPro/commands/vp-get-frozen-panes"},"next":{"title":"VP Get print info","permalink":"/docs/es/ViewPro/commands/vp-get-print-info"}}'),t=s("785893"),d=s("250065");let o={id:"vp-get-names",title:"VP Get names"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Colecci\xf3n devuelta",id:"colecci\xf3n-devuelta",level:3},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get names"})," ( vpAreaName : Text { ; scope : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Alcance objetivo (por defecto= hoja actual)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Collection"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Nombres existentes en el alcance definido"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP Get names"}),' devuelve una colecci\xf3n de todos los "nombres" definidos en la hoja actual o en el \xe1mbito designado por el par\xe1metro ',(0,t.jsx)(n.em,{children:"scope"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede definir d\xf3nde obtener los nombres en ",(0,t.jsx)(n.em,{children:"scope"})," utilizando el \xedndice de la hoja (la numeraci\xf3n comienza en 0) o una de las siguientes constantes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk workbook"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"colecci\xf3n-devuelta",children:"Colecci\xf3n devuelta"}),"\n",(0,t.jsx)(n.p,{children:"La colecci\xf3n devuelta contiene un objeto por nombre. Las propiedades de objetos siguientes pueden ser devueltas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propiedad"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result[ ].name"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"nombre de celda o de rango"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result[ ].formula"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"formula"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result[ ].comment"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"Comentario asociado al nombre"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Las propiedades disponibles dependen del tipo de elemento con nombre (celda con nombre, rango con nombre o f\xf3rmula con nombre)."}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $list : Collection\n\n\n$list:=VP Get names("ViewProArea";2) //nombres en la 3a hoja\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-formula-name",children:"VP ADD FORMULA NAME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-range-name",children:"VP ADD RANGE NAME"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-formula-by-name",children:"VP Get formula by name"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var r=s(667294);let t={},d=r.createContext(t);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);