"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3734"],{813455:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"FormObjects/propertiesHeaders","title":"Encabezados","description":"Mostrar encabezados","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/FormObjects/properties_Headers.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesHeaders","permalink":"/docs/es/FormObjects/propertiesHeaders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Headers.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"propertiesHeaders","title":"Encabezados"},"sidebar":"docs","previous":{"title":"Rejillas","permalink":"/docs/es/FormObjects/propertiesGridlines"},"next":{"title":"Ayuda","permalink":"/docs/es/FormObjects/propertiesHelp"}}'),r=s("785893"),t=s("250065");let o={id:"propertiesHeaders",title:"Encabezados"},l=void 0,i={},d=[{value:"Mostrar encabezados",id:"mostrar-encabezados",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objetos soportados",id:"objetos-soportados",level:4},{value:"Altura",id:"altura",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:4},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objetos soportados",id:"objetos-soportados-1",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"mostrar-encabezados",children:"Mostrar encabezados"}),"\n",(0,r.jsxs)(n.p,{children:["Esta propiedad se utiliza para mostrar u ocultar ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-headers",children:"los encabezados de columna listbox"}),". Hay un encabezado por columna; cada encabezado se configura por separado."]}),"\n",(0,r.jsx)(n.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipos de datos"}),(0,r.jsx)(n.th,{children:"Valores posibles"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"showHeaders"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"true, false"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"objetos-soportados",children:"Objetos soportados"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"altura",children:"Altura"}),"\n",(0,r.jsxs)(n.p,{children:["Esta propiedad se utiliza para definir la altura de l\xednea de un encabezado de list box en ",(0,r.jsx)(n.strong,{children:"p\xedxeles"})," o ",(0,r.jsx)(n.strong,{children:"l\xedneas de texto"})," (cuando se muestra). Ambos tipos de unidades pueden utilizarse en el mismo list box:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"P\xedxel"})," - el valor de la altura se aplica directamente a la l\xednea en cuesti\xf3n, independientemente del tama\xf1o de la fuente contenida en las columnas. Si una fuente es demasiado grande, el texto se trunca. Adem\xe1s, las im\xe1genes se truncan o cambian de tama\xf1o seg\xfan su formato."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"L\xednea"})," - la altura se calcula teniendo en cuenta el tama\xf1o de la fuente de la l\xednea en cuesti\xf3n."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Si se define m\xe1s de un tama\xf1o, 4D utiliza el mayor. Por ejemplo, si una l\xednea contiene "Verdana 18", "Geneva 12" y "Arial 9", 4D utiliza "Verdana 18" para determinar la altura de la l\xednea (por ejemplo, 25 p\xedxeles). Esta altura se multiplica por el n\xfamero de l\xedneas definidas.'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Este c\xe1lculo no tiene en cuenta el tama\xf1o de las im\xe1genes ni los estilos aplicados a las fuentes."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"En macOS, la altura de l\xednea puede ser incorrecta si el usuario introduce caracteres que no est\xe1n disponibles en la fuente seleccionada. Cuando esto ocurre, se utiliza un tipo de letra sustituto, lo que puede provocar variaciones en el tama\xf1o."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This property can also be set dynamically using the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html",children:"LISTBOX SET HEADERS HEIGHT"})," command."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Conversi\xf3n de unidades: cuando se pasa de una unidad a otra, 4D las convierte autom\xe1ticamente y muestra el resultado en la Lista de propiedades. Por ejemplo, si la fuente utilizada es "Lucida grande 24", una altura de "1 l\xednea" se convierte en "30 p\xedxeles" y una altura de "60 p\xedxeles" se convierte en "2 l\xedneas".'}),"\n",(0,r.jsx)(n.p,{children:"Tenga en cuenta que la conversi\xf3n de ida y vuelta puede conducir a un resultado final diferente del valor inicial debido a los c\xe1lculos autom\xe1ticos realizados por 4D. Esto se ilustra en las siguientes secuencias:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"(fuente Arial 18)*: 52 p\xedxeles -> 2 l\xedneas -> 40 p\xedxeles"}),"\n",(0,r.jsx)(n.li,{children:"(fuente Arial 12)*: 3 p\xedxeles -> 0,4 l\xednea redondeada a 1 l\xednea -> 19 p\xedxeles"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-json",children:"Ejemplo JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:' "List Box": {\n  "type": "listbox",\n  "showHeaders": true,\n  "headerHeight": "22px",  \n  ...\n  }\n'})}),"\n",(0,r.jsx)(n.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nombre"}),(0,r.jsx)(n.th,{children:"Tipos de datos"}),(0,r.jsx)(n.th,{children:"Valores posibles"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"headerHeight"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"decimales positivos +px | em"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"objetos-soportados-1",children:"Objetos soportados"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/propertiesFooters",children:"Pies"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-headers",children:"Encabezados List box"})]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var a=s(667294);let r={},t=a.createContext(r);function o(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);