"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66229"],{450998:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-add-range-name","title":"VP ADD RANGE NAME","description":"VP ADD RANGE NAME ( rangeObj Text { ; options : Object } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-add-range-name.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-add-range-name","permalink":"/docs/es/ViewPro/commands/vp-add-range-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-range-name.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-add-range-name","title":"VP ADD RANGE NAME"},"sidebar":"docs","previous":{"title":"VP ADD FORMULA NAME","permalink":"/docs/es/ViewPro/commands/vp-add-formula-name"},"next":{"title":"VP ADD SELECTION","permalink":"/docs/es/ViewPro/commands/vp-add-selection"}}'),d=r("785893"),o=r("250065");let a={id:"vp-add-range-name",title:"VP ADD RANGE NAME"},i=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"VP ADD RANGE NAME"})," ( ",(0,d.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,d.jsx)(n.em,{children:"name"})," : Text { ; ",(0,d.jsx)(n.em,{children:"options"})," : Object } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metros"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"rangeObj"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"Objeto rango"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"Nombre de la f\xf3rmula"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"options"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"Opciones de la f\xf3rmula temporal"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.code,{children:"VP ADD RANGE NAME"})," crea o modifica un rango con nombre en el documento abierto."]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"Los rangos nombrados creados por este comando se guardan con el documento."}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"rangeObj"}),", pase el rango que quiere nombrar, y pase el nuevo nombre del rango en ",(0,d.jsx)(n.em,{children:"name"}),". Si el nombre ya se utiliza en el mismo alcance, el nuevo rango nombrado sustituye al existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver m\xe1s adelante)."]}),"\n",(0,d.jsxs)(n.p,{children:["Puede pasar un objeto con las propiedades adicionales para el rango nombrado en ",(0,d.jsx)(n.em,{children:"options"}),". Se soportan las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propiedad"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"scope"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsxs)(n.td,{children:["Alcance del rango. Puede pasar el \xedndice de hojas (el conteo comienza en 0) o usar las siguientes constantes: ",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"vk current sheet"})}),(0,d.jsx)(n.li,{children:(0,d.jsx)(n.code,{children:"vk workbook"})}),"El alcance determina si un nombre de rango es local en una hoja de trabajo determinada (",(0,d.jsx)(n.em,{children:"scope"}),"=sheet index o ",(0,d.jsx)(n.code,{children:"vk current sheet"}),"), o global en todo el libro de trabajo (",(0,d.jsx)(n.em,{children:"scope"}),"=",(0,d.jsx)(n.code,{children:"vk workbook"}),")."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"comment"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"Comentario asociado al rango nombrado"})]})]})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Un rango nombrado es en realidad una f\xf3rmula nombrada que contiene coordenadas. ",(0,d.jsx)(n.code,{children:"VP ADD RANGE NAME"})," facilita la creaci\xf3n de rangos con nombre, pero tambi\xe9n puede utilizar el m\xe9todo ",(0,d.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-formula-name",children:(0,d.jsx)(n.code,{children:"VP ADD FORMULA NAME"})})," para crear rangos temporales."]}),"\n",(0,d.jsxs)(n.li,{children:["Las f\xf3rmulas que definen rangos con nombre pueden recuperarse con el m\xe9todo ",(0,d.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-formula-by-name",children:(0,d.jsx)(n.code,{children:"VP Get formula by name"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"Quiere crear un rango nombrado para un rango de celdas:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'$range:=VP Cell("ViewProArea";2;10)\nVP ADD RANGE NAME($range;"Total1")\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-names",children:"VP Get names"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-name",children:"VP Name"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let d={},o=s.createContext(d);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);