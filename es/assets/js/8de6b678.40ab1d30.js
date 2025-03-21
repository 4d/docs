"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59661"],{709125:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"FormObjects/propertiesFooters","title":"Pies","description":"Mostrar pies","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/FormObjects/properties_Footers.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesFooters","permalink":"/docs/es/FormObjects/propertiesFooters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Footers.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"propertiesFooters","title":"Pies"},"sidebar":"docs","previous":{"title":"Entrada","permalink":"/docs/es/FormObjects/propertiesEntry"},"next":{"title":"Rejillas","permalink":"/docs/es/FormObjects/propertiesGridlines"}}'),r=n("785893"),o=n("250065");let i={id:"propertiesFooters",title:"Pies"},a=void 0,l={},d=[{value:"Mostrar pies",id:"mostrar-pies",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objetos soportados",id:"objetos-soportados",level:4},{value:"Altura",id:"altura",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:4},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objetos soportados",id:"objetos-soportados-1",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"mostrar-pies",children:"Mostrar pies"}),"\n",(0,r.jsxs)(s.p,{children:["Esta propiedad se utiliza para mostrar u ocultar ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-footers",children:"los pies de columna listbox"}),". Hay un pie de p\xe1gina por columna; cada pie de p\xe1gina se configura por separado."]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"showFooters"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"true, false"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados",children:"Objetos soportados"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"altura",children:"Altura"}),"\n",(0,r.jsxs)(s.p,{children:["Esta propiedad se utiliza para definir la altura de l\xednea de un pie de list box en ",(0,r.jsx)(s.strong,{children:"p\xedxeles"})," o ",(0,r.jsx)(s.strong,{children:"l\xedneas de texto"})," (cuando se muestra). Ambos tipos de unidades pueden utilizarse en el mismo list box:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"P\xedxel"})," - el valor de la altura se aplica directamente a la l\xednea en cuesti\xf3n, independientemente del tama\xf1o de la fuente contenida en las columnas. Si una fuente es demasiado grande, el texto se trunca. Adem\xe1s, las im\xe1genes se truncan o cambian de tama\xf1o seg\xfan su formato."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"L\xednea"})," - la altura se calcula teniendo en cuenta el tama\xf1o de la fuente de la l\xednea en cuesti\xf3n."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:'Si se define m\xe1s de un tama\xf1o, 4D utiliza el mayor. Por ejemplo, si una l\xednea contiene "Verdana 18", "Geneva 12" y "Arial 9", 4D utiliza "Verdana 18" para determinar la altura de la l\xednea (por ejemplo, 25 p\xedxeles). Esta altura se multiplica por el n\xfamero de l\xedneas definidas.'}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Este c\xe1lculo no tiene en cuenta el tama\xf1o de las im\xe1genes ni los estilos aplicados a las fuentes."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"En macOS, la altura de l\xednea puede ser incorrecta si el usuario introduce caracteres que no est\xe1n disponibles en la fuente seleccionada. Cuando esto ocurre, se utiliza un tipo de letra sustituto, lo que puede provocar variaciones en el tama\xf1o."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Esta propiedad tambi\xe9n puede definirse din\xe1micamente mediante el comando ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html",children:"LISTBOX SET FOOTERS HEIGHT"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:'Conversi\xf3n de unidades: cuando se pasa de una unidad a otra, 4D las convierte autom\xe1ticamente y muestra el resultado en la Lista de propiedades. Por ejemplo, si la fuente utilizada es "Lucida grande 24", una altura de "1 l\xednea" se convierte en "30 p\xedxeles" y una altura de "60 p\xedxeles" se convierte en "2 l\xedneas".'}),"\n",(0,r.jsx)(s.p,{children:"Tenga en cuenta que la conversi\xf3n de ida y vuelta puede conducir a un resultado final diferente del valor inicial debido a los c\xe1lculos autom\xe1ticos realizados por 4D. Esto se ilustra en las siguientes secuencias:"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"(fuente Arial 18)"}),": 52 p\xedxeles -> 2 l\xedneas -> 40 p\xedxeles\n",(0,r.jsx)(s.em,{children:"(font Arial 12)"}),": 3 p\xedxeles -> 0,4 l\xednea redondeada a 1 l\xednea -> 19 p\xedxeles"]}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo-json",children:"Ejemplo JSON"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:' "List Box": {\n  "type": "listbox",\n  "showFooters": true,\n  "footerHeight": "44px",  \n  ...\n  }\n'})}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"footerHeight"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"decimales positivos +px | em"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-1",children:"Objetos soportados"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesHeaders",children:"Encabezados"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-footers",children:"Pies List box"})]})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return i}});var t=n(667294);let r={},o=t.createContext(r);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);