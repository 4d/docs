"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9428"],{252636:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"WritePro/commands/wp-reset-attributes","title":"WP RESET ATTRIBUTES","description":"WP RESET ATTRIBUTES ( targetObj ; attribName {; attribName2 ; ... ; attribNameN} ) WP RESET ATTRIBUTES ( section {; attribName }{; attribName2 ; ... ; attribNameN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands/wp-reset-attributes.md","sourceDirName":"WritePro/commands","slug":"/WritePro/commands/wp-reset-attributes","permalink":"/docs/es/WritePro/commands/wp-reset-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands%2Fwp-reset-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-reset-attributes","title":"WP RESET ATTRIBUTES","slug":"/WritePro/commands/wp-reset-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP PRINT","permalink":"/docs/es/WritePro/commands/wp-print"},"next":{"title":"WP SELECT","permalink":"/docs/es/WritePro/commands/wp-select"}}'),s=n("785893"),i=n("250065");let a={id:"wp-reset-attributes",title:"WP RESET ATTRIBUTES",slug:"/WritePro/commands/wp-reset-attributes",displayed_sidebar:"docs"},o=void 0,c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WP RESET ATTRIBUTES"})," ( ",(0,s.jsx)(t.em,{children:"targetObj"})," ; ",(0,s.jsx)(t.em,{children:"attribName"})," {; ",(0,s.jsx)(t.em,{children:"attribName2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"attribNameN"}),"} )",(0,s.jsx)(t.br,{})," ",(0,s.jsx)(t.strong,{children:"WP RESET ATTRIBUTES"})," ( ",(0,s.jsx)(t.em,{children:"section"})," {; ",(0,s.jsx)(t.em,{children:"attribName"})," }{; ",(0,s.jsx)(t.em,{children:"attribName2"})," ; ... ; ",(0,s.jsx)(t.em,{children:"attribNameN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Par\xe1metros"}),(0,s.jsx)(t.th,{children:"Tipo"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"targetObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sectionOrSubsection"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Section or subsection of a 4D Write Pro document"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"attribName"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Name of attribute(s) to remove"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"WP RESET ATTRIBUTES"})," command  allows you to reset the value of one or more attributes in the range, element, or document passed as parameter. This command can remove any kind of 4D Write Pro internal attribute: character, paragraph, document, table, or image. You can pass the attribute name to be reset in ",(0,s.jsx)(t.em,{children:"attribName"})," or, in the case of a section or a subsection, the ",(0,s.jsx)(t.em,{children:"sectionOrSubsection"})," object can be passed alone and all the attributes are reset at once."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.em,{children:"targetObj"})," parameter, you can pass either:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"un rango, o"}),"\n",(0,s.jsx)(t.li,{children:"an element (header / footer / body / table / paragraph / anchored or inline picture / section / subsection / style sheet), or"}),"\n",(0,s.jsx)(t.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["When an attribute value is removed using the ",(0,s.jsx)(t.strong,{children:"WP RESET ATTRIBUTES"})," command, the default value is applied to ",(0,s.jsx)(t.em,{children:"targetObj"})," or ",(0,s.jsx)(t.em,{children:"sectionOrSubsection"}),". Default values are listed in the ",(0,s.jsx)(t.em,{children:"4D Write Pro Attributes"})," section."]}),"\n",(0,s.jsx)(t.admonition,{title:"Notas",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When ",(0,s.jsx)(t.strong,{children:"WP RESET ATTRIBUTES"})," is applied to a section/sub-section object, attributes are then inherited from the parent section or document."]}),"\n",(0,s.jsxs)(t.li,{children:["When ",(0,s.jsx)(t.strong,{children:"WP RESET ATTRIBUTES"}),' is applied to a style sheet object, the attributes are removed from the style sheet unless it is the default ("Normal") style sheet. In this case, the default value is applied to the attribute (the "Normal" style sheet defines all style sheet attributes).']}),"\n",(0,s.jsxs)(t.li,{children:["When ",(0,s.jsx)(t.em,{children:"sectionOrSubsection"})," is not a section nor a subsection and if no attribute is provided, then an error is raised."]}),"\n"]})}),"\n",(0,s.jsx)(t.p,{children:"If the attribute to be reset was not defined in the element passed as a parameter, the command does nothing."}),"\n",(0,s.jsx)(t.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(t.p,{children:"You want to remove several attributes from the following selection:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(473033).Z+"",width:"604",height:"245"})}),"\n",(0,s.jsx)(t.p,{children:"Puede ejecutar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:' $range:=WP Get selection(*;"WParea")\n WP RESET ATTRIBUTES($range;wk padding)\n WP RESET ATTRIBUTES($range;wk background color)\n WP RESET ATTRIBUTES($range;wk text underline style)\n WP RESET ATTRIBUTES($range;wk margin)\n WP RESET ATTRIBUTES($range;wk border style)\n'})}),"\n",(0,s.jsx)(t.p,{children:"The resulting document is:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(194737).Z+"",width:"604",height:"207"})}),"\n",(0,s.jsx)(t.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"$section:=WP Get section($document; 3)\nWP RESET ATTRIBUTES($section)  // All attributes of the section are removed\n$subSection:=WP Get subsection(WP Get section($document; 3); wk left page)\nWP RESET ATTRIBUTES($subSection) // All attributes of the subSection are removed\n"})}),"\n",(0,s.jsx)(t.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"4D Write Pro Attributes"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/es/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},473033:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict2643861.en-249817caf4357cb34616fea52085590a.png"},194737:function(e,t,n){n.d(t,{Z:function(){return r}});let r=n.p+"assets/images/pict2643863.en-344ec9bcf0a32c4f0ee94247ba15416b.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(667294);let s={},i=r.createContext(s);function a(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);