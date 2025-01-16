"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57305"],{805509:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"WritePro/commands/wp-get-attributes","title":"WP Get attributes","description":"WP Get attributes ( targetObj ; attribName ; attribValue {; attribName2 ; attribValue2 ; ... ; attribNameN ; attribValueN} )WP Get attributes ( targetObj ; attribColl ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands/wp-get-attributes.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-get-attributes","permalink":"/docs/es/WritePro/commands/wp-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-get-attributes.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-attributes","title":"WP Get attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP FREEZE FORMULAS","permalink":"/docs/es/WritePro/commands/wp-freeze-formulas"},"next":{"title":"WP Get body","permalink":"/docs/es/WritePro/commands/wp-get-body"}}'),i=r("785893"),s=r("250065");let a={id:"wp-get-attributes",title:"WP Get attributes",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"WP Get attributes"})," ( ",(0,i.jsx)(t.em,{children:"targetObj"})," ; ",(0,i.jsx)(t.em,{children:"attribName"})," ; ",(0,i.jsx)(t.em,{children:"attribValue"})," {; ",(0,i.jsx)(t.em,{children:"attribName2"})," ; ",(0,i.jsx)(t.em,{children:"attribValue2"})," ; ... ; ",(0,i.jsx)(t.em,{children:"attribNameN"})," ; ",(0,i.jsx)(t.em,{children:"attribValueN"}),"} )",(0,i.jsx)(t.br,{}),(0,i.jsx)(t.strong,{children:"WP Get attributes"})," ( ",(0,i.jsx)(t.em,{children:"targetObj"})," ; ",(0,i.jsx)(t.em,{children:"attribColl"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Par\xe1metros"}),(0,i.jsx)(t.th,{children:"Tipo"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"targetObj"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Range or element or 4D Write Pro document"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attribName"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Name of attribute to get"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attribValue"}),(0,i.jsx)(t.td,{children:"Text, Number, Array, Collection, Picture, Date"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Current value of attribute for the target"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attribColl"}),(0,i.jsx)(t.td,{children:"Collection"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Collection of attribute names to get"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resultado"}),(0,i.jsx)(t.td,{children:"Object"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Attribute names and values"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"WP Get attributes"})," command returns the value of any attribute in a 4D Write Pro range, header, body, footer, table, or document. This command gives you access to any kind of 4D Write Pro internal attributes: character, paragraph, document, table, or image."]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.em,{children:"targetObj"}),", you can pass:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"un rango, o"}),"\n",(0,i.jsx)(t.li,{children:"un elemento (encabezado / pie de p\xe1gina / cuerpo / tabla / p\xe1rrafo / imagen anclada / secci\xf3n / subsecci\xf3n / hoja de estilo), o"}),"\n",(0,i.jsx)(t.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.em,{children:"attribName"}),", pass the name of the attribute you want to retrieve."]}),"\n",(0,i.jsxs)(t.p,{children:["You can also pass a collection of attribute names in ",(0,i.jsx)(t.em,{children:"attribColl"}),", in which case the command will return an object containing the attribute names passed in ",(0,i.jsx)(t.em,{children:"attribColl"})," along with their corresponding values."]}),"\n",(0,i.jsxs)(t.p,{children:["For a comprehensive list of attributes to pass, as well as their scope and values, please refer to the ",(0,i.jsx)(t.em,{children:"4D Write Pro Attributes"})," section."]}),"\n",(0,i.jsx)(t.p,{children:"If there are different values for the same attribute in the element passed as a parameter, the command returns:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"for numerical values, wk mixed"}),"\n",(0,i.jsxs)(t.li,{children:["for an array, an empty array (tab stops, color if ",(0,i.jsx)(t.em,{children:"attribValue"})," is defined as array), with an exception for wk text shadow offset for which the array value will always contain 2 entries which may be set separately to wk mixed if either horizontal offset or vertical offset (or both) are mixed."]}),"\n",(0,i.jsx)(t.li,{children:"for string values, an empty string"}),"\n",(0,i.jsx)(t.li,{children:"for picture values, an empty picture."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": If ",(0,i.jsx)(t.em,{children:"targetObj"})," contains a paragraph and a character style sheets, the paragraph style sheet name is returned."]}),"\n",(0,i.jsx)(t.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(t.p,{children:"You want to get the background color of the selected area:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:' $range:=WP Selection range(*;"WParea")\n WP Get attributes($range;wk background color;$bcol)\n'})}),"\n",(0,i.jsx)(t.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsx)(t.p,{children:"You want to get the font size, background color and border style of the selected area using a collection:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:' $range:=WP Selection range(*;"WParea")\n $collection:=New collection(wk font size; wk background color; wk border style)\n $attributes:=WP Get attributes($range; $collection)\n \n'})}),"\n",(0,i.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-reset-attributes",children:"WP RESET ATTRIBUTES"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return a}});var n=r(667294);let i={},s=n.createContext(i);function a(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);