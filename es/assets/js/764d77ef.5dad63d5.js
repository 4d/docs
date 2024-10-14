"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69535],{739640:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=r(474848),n=r(28453);const i={id:"propertiesPrint",title:"Imprimir"},t=void 0,a={id:"FormObjects/propertiesPrint",title:"Imprimir",description:"Impresi\xf3n marco",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/FormObjects/properties_Print.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPrint",permalink:"/docs/es/20-R5/FormObjects/propertiesPrint",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"propertiesPrint",title:"Imprimir"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/es/20-R5/FormObjects/propertiesPlugIns"},next:{title:"Rango de valores",permalink:"/docs/es/20-R5/FormObjects/propertiesRangeOfValues"}},l={},d=[{value:"Impresi\xf3n marco",id:"impresi\xf3n-marco",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objetos soportados",id:"objetos-soportados",level:4}];function c(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"impresi\xf3n-marco",children:"Impresi\xf3n marco"}),"\n",(0,s.jsx)(o.p,{children:"Esta propiedad gestiona el modo de impresi\xf3n de los objetos cuyo tama\xf1o puede variar de un registro a otro en funci\xf3n de su contenido. Estos objetos pueden configurarse para imprimirse con un marco fijo o variable. Los objetos de marco fijo se imprimen dentro de los l\xedmites del objeto tal y como fue creado en el formulario. Los objetos de marco variable se expanden durante la impresi\xf3n para incluir todo el contenido del objeto. Tenga en cuenta que el ancho de los objetos impresos como tama\xf1o variable no se ve afectado por esta propiedad; s\xf3lo la altura var\xeda autom\xe1ticamente en funci\xf3n del contenido del objeto."}),"\n",(0,s.jsx)(o.p,{children:"No se puede colocar m\xe1s de un objeto de marco variable uno al lado del otro en un formulario. Puede colocar objetos de marco no variable a ambos lados de un objeto que se imprimir\xe1 con un tama\xf1o variable siempre que el objeto de marco variable sea al menos una l\xednea m\xe1s largo que el objeto de al lado y que todos los objetos est\xe9n alineados en la parte superior. Si no se respeta esta condici\xf3n, el contenido de los otros campos se repetir\xe1 para cada corte horizontal del objeto marco variable."}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Los comandos ",(0,s.jsx)(o.code,{children:"objeto Print"})," y ",(0,s.jsx)(o.code,{children:"Print form"})," no soportan esta propiedad."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Las opciones de impresi\xf3n son:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:["La opci\xf3n ",(0,s.jsx)(o.strong,{children:"Variable"})," / ",(0,s.jsx)(o.strong,{children:"Imprimir marco variable"})," marcada: 4D ampl\xeda o reduce el \xe1rea del objeto del formulario para imprimir todos los subregistros."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Opci\xf3n fija (truncamiento)"})," / ",(0,s.jsx)(o.strong,{children:"Imprimir marco variable"})," no seleccionada: 4D s\xf3lo imprime el contenido que aparece en el \xe1rea del objeto. El formulario s\xf3lo se imprime una vez y el contenido no impreso se ignora."]}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Fijo (M\xfaltiples Registros)"})," (s\xf3lo subformularios): se mantiene el tama\xf1o inicial del \xe1rea del subformulario pero 4D imprime el formulario varias veces para imprimir todos los registros."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Esta propiedad puede definirse por programaci\xf3n utilizando el comando ",(0,s.jsx)(o.code,{children:"OBJECT SET PRINT VARIABLE FRAME"}),"."]}),"\n"]}),"\n",(0,s.jsx)(o.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{style:{textAlign:"center"},children:"Nombre"}),(0,s.jsx)(o.th,{style:{textAlign:"center"},children:"Tipos de datos"}),(0,s.jsx)(o.th,{children:"Valores posibles"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{style:{textAlign:"center"},children:"printFrame"}),(0,s.jsx)(o.td,{style:{textAlign:"center"},children:"string"}),(0,s.jsx)(o.td,{children:'"fixed", "variable", (subformulario \xfanicamente) "fixedMultiple"'})]})})]}),"\n",(0,s.jsx)(o.h4,{id:"objetos-soportados",children:"Objetos soportados"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/es/20-R5/FormObjects/inputOverview",children:"Entrada"})," - ",(0,s.jsx)(o.a,{href:"/docs/es/20-R5/FormObjects/subformOverview",children:"Subformularios"})," (s\xf3lo subformularios lista) - ",(0,s.jsx)(o.a,{href:"/docs/es/20-R5/FormObjects/writeProAreaOverview",children:"\xc1reas 4D Write Pro"})]})]})}function m(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>t,x:()=>a});var s=r(296540);const n={},i=s.createContext(n);function t(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);