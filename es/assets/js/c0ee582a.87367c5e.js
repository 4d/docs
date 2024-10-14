"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1192],{932099:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=i(474848),r=i(28453);const s={id:"print",title:"Imprimir"},d=void 0,o={id:"FormEditor/print",title:"Imprimir",description:"Settings",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormEditor/properties_Print.md",sourceDirName:"FormEditor",slug:"/FormEditor/print",permalink:"/docs/es/19/FormEditor/print",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"print",title:"Imprimir"},sidebar:"docs",previous:{title:"Men\xfa",permalink:"/docs/es/19/FormEditor/menu"},next:{title:"Tama\xf1o de la ventana",permalink:"/docs/es/19/FormEditor/windowSize"}},a={},l=[{value:"Settings",id:"settings",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}];function c(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,t.jsx)(n.p,{children:"Permite definir los par\xe1metros de impresi\xf3n espec\xedficos para el formulario. Esta funcionalidad es \xfatil para ver los l\xedmites de p\xe1ginas de impresi\xf3n en el editor de formularios."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compatibilidad:"})," aunque estos par\xe1metros se tengan en cuenta cuando se imprime el formulario en modo Aplicaci\xf3n, se desaconseja confiar en esta funcionalidad para almacenar los par\xe1metros de impresi\xf3n del formulario, debido a las limitaciones relativas a la plataforma y al driver. Es muy recomendable utilizar los comandos 4D ",(0,t.jsx)(n.code,{children:"Print settings to BLOB"}),"/",(0,t.jsx)(n.code,{children:"BLOB to print settings"})," que son m\xe1s poderosos."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Puede modificar los siguientes par\xe1metros de impresi\xf3n:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Formato del papel"}),"\n",(0,t.jsx)(n.li,{children:"Orientaci\xf3n del papel"}),"\n",(0,t.jsx)(n.li,{children:"Escala de la p\xe1gina"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Las opciones disponibles dependen de la configuraci\xf3n del sistema."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nombre"}),(0,t.jsx)(n.th,{children:"Tipos de datos"}),(0,t.jsx)(n.th,{children:"Valores posibles"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pageFormat"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Propiedades de impresi\xf3n disponibles: paperName, paperWidth, paperHeight, orientation, scale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paperName"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'"A4", "US Letter"...'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paperWidth"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Utilizado si no se encuentra un papel llamado paperName. Requiere sufijo de unidad: pt, in, mm, cm."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paperHeight"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Utilizado si no se encuentra un papel llamado paperName. Requiere sufijo de unidad: pt, in, mm, cm."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"orientation"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'"landscape" (por defecto es "portrait")'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scale"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"m\xednimo: 0"})]})]})]}),"\n",(0,t.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(296540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);