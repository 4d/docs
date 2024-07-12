/*! For license information please see cb2d977c.480dba10.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44584],{921113:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(474848),r=n(28453);const o={id:"propertiesFooters",title:"Pies"},i=void 0,a={id:"FormObjects/propertiesFooters",title:"Pies",description:"Mostrar pies",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormObjects/properties_Footers.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesFooters",permalink:"/docs/es/19/FormObjects/propertiesFooters",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Footers.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"propertiesFooters",title:"Pies"},sidebar:"docs",previous:{title:"Entrada",permalink:"/docs/es/19/FormObjects/propertiesEntry"},next:{title:"Rejillas",permalink:"/docs/es/19/FormObjects/propertiesGridlines"}},l={},d=[{value:"Mostrar pies",id:"mostrar-pies",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objetos soportados",id:"objetos-soportados",level:4},{value:"Altura",id:"altura",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:4},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objetos soportados",id:"objetos-soportados-1",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"mostrar-pies",children:"Mostrar pies"}),"\n",(0,t.jsxs)(s.p,{children:["Esta propiedad se utiliza para mostrar u ocultar ",(0,t.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview#list-box-footers",children:"los pies de columna listbox"}),". Hay un pie de p\xe1gina por columna; cada pie de p\xe1gina se configura por separado."]}),"\n",(0,t.jsx)(s.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Nombre"}),(0,t.jsx)(s.th,{children:"Tipos de datos"}),(0,t.jsx)(s.th,{children:"Valores posibles"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"showFooters"}),(0,t.jsx)(s.td,{children:"boolean"}),(0,t.jsx)(s.td,{children:"true, false"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"objetos-soportados",children:"Objetos soportados"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h2,{id:"altura",children:"Altura"}),"\n",(0,t.jsxs)(s.p,{children:["Esta propiedad se utiliza para definir la altura de l\xednea de un pie de list box en ",(0,t.jsx)(s.strong,{children:"p\xedxeles"})," o ",(0,t.jsx)(s.strong,{children:"l\xedneas de texto"})," (cuando se muestra). Ambos tipos de unidades pueden utilizarse en el mismo list box:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"P\xedxel"})," - el valor de la altura se aplica directamente a la l\xednea en cuesti\xf3n, independientemente del tama\xf1o de la fuente contenida en las columnas. Si una fuente es demasiado grande, el texto se trunca. Adem\xe1s, las im\xe1genes se truncan o cambian de tama\xf1o seg\xfan su formato."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"L\xednea"})," - la altura se calcula teniendo en cuenta el tama\xf1o de la fuente de la l\xednea en cuesti\xf3n."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Si se define m\xe1s de un tama\xf1o, 4D utiliza el mayor. Por ejemplo, si una l\xednea contiene "Verdana 18", "Geneva 12" y "Arial 9", 4D utiliza "Verdana 18" para determinar la altura de la l\xednea (por ejemplo, 25 p\xedxeles). Esta altura se multiplica por el n\xfamero de l\xedneas definidas.'}),"\n",(0,t.jsx)(s.li,{children:"Este c\xe1lculo no tiene en cuenta el tama\xf1o de las im\xe1genes ni los estilos aplicados a las fuentes."}),"\n",(0,t.jsx)(s.li,{children:"En macOS, la altura de l\xednea puede ser incorrecta si el usuario introduce caracteres que no est\xe1n disponibles en la fuente seleccionada. Cuando esto ocurre, se utiliza un tipo de letra sustituto, lo que puede provocar variaciones en el tama\xf1o."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["This property can also be set dynamically using the ",(0,t.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html",children:"LISTBOX SET FOOTERS HEIGHT"})," command."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:'Conversi\xf3n de unidades: cuando se pasa de una unidad a otra, 4D las convierte autom\xe1ticamente y muestra el resultado en la Lista de propiedades. Por ejemplo, si la fuente utilizada es "Lucida grande 24", una altura de "1 l\xednea" se convierte en "30 p\xedxeles" y una altura de "60 p\xedxeles" se convierte en "2 l\xedneas".'}),"\n",(0,t.jsx)(s.p,{children:"Tenga en cuenta que la conversi\xf3n de ida y vuelta puede conducir a un resultado final diferente del valor inicial debido a los c\xe1lculos autom\xe1ticos realizados por 4D. Esto se ilustra en las siguientes secuencias:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"(font Arial 18)"}),": 52 pixels -> 2 lines -> 40 pixels ",(0,t.jsx)(s.em,{children:"(font Arial 12)"}),": 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels"]}),"\n",(0,t.jsx)(s.h4,{id:"ejemplo-json",children:"Ejemplo JSON"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:' "List Box": {\n  "type": "listbox",\n  "showFooters": true,\n  "footerHeight": "44px",  \n  ...\n  }\n'})}),"\n",(0,t.jsx)(s.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Nombre"}),(0,t.jsx)(s.th,{children:"Tipos de datos"}),(0,t.jsx)(s.th,{children:"Valores posibles"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"footerHeight"}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"decimales positivos +px | em"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"objetos-soportados-1",children:"Objetos soportados"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,t.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesHeaders",children:"Encabezados"})," - ",(0,t.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview#list-box-footers",children:"Pies List box"})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var t,o={},d=null,c=null;for(t in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,t)&&!l.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:r,type:e,key:d,ref:c,props:o,_owner:a.current}}s.Fragment=o,s.jsx=d,s.jsxs=d},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>a});var t=n(296540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);