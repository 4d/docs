"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87846"],{890609:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>i});var n=JSON.parse('{"id":"FormObjects/propertiesPrint","title":"Imprimir","description":"Impress\xe3o quadro","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-18/FormObjects/properties_Print.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesPrint","permalink":"/docs/pt/18/FormObjects/propertiesPrint","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"propertiesPrint","title":"Imprimir"},"sidebar":"docs","previous":{"title":"Plug-ins","permalink":"/docs/pt/18/FormObjects/propertiesPlugIns"},"next":{"title":"Gama de valores","permalink":"/docs/pt/18/FormObjects/propertiesRangeOfValues"}}'),o=r("785893"),s=r("250065");let i={id:"propertiesPrint",title:"Imprimir"},a=void 0,c={},l=[{value:"Impress\xe3o quadro",id:"impress\xe3o-quadro",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4}];function d(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"impress\xe3o-quadro",children:"Impress\xe3o quadro"}),"\n",(0,o.jsx)(t.p,{children:"This property handles the print mode for objects whose size can vary from one record to another depending on their contents. Estes objetos podem ser definidos para imprimir com uma moldura fixa ou vari\xe1vel. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object."}),"\n",(0,o.jsx)(t.p,{children:"You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Print object"})," and ",(0,o.jsx)(t.code,{children:"Print form"})," commands do not support this property."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"As op\xe7\xf5es de impress\xe3o s\xe3o:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Variable"})," option / ",(0,o.jsx)(t.strong,{children:"Print Variable Frame"})," checked: 4D enlarges or reduces the form object area in order to print all the subrecords."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Fixed (Truncation)"})," option / ",(0,o.jsx)(t.strong,{children:"Print Variable Frame"})," unchecked: 4D only prints the contents that appear in the object area. O formul\xe1rio s\xf3 \xe9 impresso uma vez e os conte\xfados n\xe3o impressos s\xe3o ignorados."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Fixed (Multiple Records)"})," (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["This property can be set by programming using the ",(0,o.jsx)(t.code,{children:"OBJECT SET PRINT VARIABLE FRAME"})," command."]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Nome"}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:"Tipo de dados"}),(0,o.jsx)(t.th,{children:"Valores poss\xedveis"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"printFrame"}),(0,o.jsx)(t.td,{style:{textAlign:"center"},children:"string"}),(0,o.jsx)(t.td,{children:'"fixed", "variable", (apenas subformul\xe1rio) "fixedMultiple"'})]})})]}),"\n",(0,o.jsx)(t.h4,{id:"objectos-suportados",children:"Objectos suportados"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/pt/18/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/18/FormObjects/subformOverview",children:"Subforms"})," (list subforms only) - ",(0,o.jsx)(t.a,{href:"/docs/pt/18/FormObjects/writeProAreaOverview",children:"4D Write Pro areas"})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return i}});var n=r(667294);let o={},s=n.createContext(o);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);