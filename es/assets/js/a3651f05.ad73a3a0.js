"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50654"],{662023:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>a,toc:()=>i,contentTitle:()=>c});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-data-context","title":"WP Get data context","description":"WP Get data context ( wpDoc ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-data-context.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-data-context","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-data-context","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-data-context.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-data-context","title":"WP Get data context","slug":"/WritePro/commands/wp-get-data-context","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get breaks","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-breaks"},"next":{"title":"WP Get element by ID","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-element-by-id"}}'),d=n("785893"),r=n("250065");let s={id:"wp-get-data-context",title:"WP Get data context",slug:"/WritePro/commands/wp-get-data-context",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function l(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"WP Get data context"})," ( ",(0,d.jsx)(t.em,{children:"wpDoc"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Par\xe1metro"}),(0,d.jsx)(t.th,{children:"Tipo"}),(0,d.jsx)(t.th,{}),(0,d.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"wpDoc"}),(0,d.jsx)(t.td,{children:"Object"}),(0,d.jsx)(t.td,{children:"\u2192"}),(0,d.jsx)(t.td,{children:"Documento 4D Write Pro"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"Resultado"}),(0,d.jsx)(t.td,{children:"Object"}),(0,d.jsx)(t.td,{children:"\u2190"}),(0,d.jsx)(t.td,{children:"Objeto de contexto de datos"})]})]})]}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,d.jsx)(t.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(t.p,{children:["El comando ",(0,d.jsx)(t.strong,{children:"WP Get data context"})," devuelve el contexto de datos del documento wpDoc. Los contextos de datos se definen con el comando ",(0,d.jsx)(t.a,{href:"/docs/es/20-R7/WritePro/commands/wp-set-data-context",children:"WP SET DATA CONTEXT"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["En ",(0,d.jsx)(t.em,{children:"wpDoc"}),", pase el documento 4D Write Pro cuyo contexto de datos desea obtener."]}),"\n",(0,d.jsx)(t.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(t.p,{children:"Puede obtener un contexto de datos de un documento y reutilizarlo en otro m\xe9todo dentro del mismo proceso."}),"\n",(0,d.jsx)(t.p,{children:"El siguiente m\xe9todo establece un contexto de datos:"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// method1\n\xa0var $person: Object\n\xa0var $wpArea : Object\n\xa0\n\xa0$wpArea:=WP New()\n\xa0\n\xa0\xa0// Crear el objeto person\n\xa0$person:=New object()\n\xa0$person.firstName:="John"\n\xa0$person.lastName:="Doe"\n\xa0\n\xa0\xa0// Definir el contexto utilizando el objeto person\n\xa0WP SET DATA CONTEXT($wpArea;$person)\n\xa0\n\xa0method2($wpArea)\xa0//llamar al otro m\xe9todo\n'})}),"\n",(0,d.jsx)(t.p,{children:"method2 podr\xeda ser algo as\xed:"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//method2\n\xa0#DECLARE($document Object)\n\xa0var $context : Object\n\xa0\n\xa0$context:=WP Get data context($document)\n\xa0ALERT(JSON Stringify($context))\xa0// Muestra {"firstName":"John","lastName":"Doe"}\n'})}),"\n",(0,d.jsx)(t.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"/docs/es/20-R7/WritePro/commands/wp-set-data-context",children:"WP SET DATA CONTEXT"})})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var o=n(667294);let d={},r=o.createContext(d);function s(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);