"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11590"],{655214:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"WritePro/commands-legacy/wp-selection-range","title":"WP Selection range","description":"WP Selection range ( { ;} wpArea* ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-selection-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-selection-range","permalink":"/docs/es/WritePro/commands/wp-selection-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-selection-range.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-selection-range","title":"WP Selection range","slug":"/WritePro/commands/wp-selection-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SELECT","permalink":"/docs/es/WritePro/commands/wp-select"},"next":{"title":"WP SET ATTRIBUTES","permalink":"/docs/es/WritePro/commands/wp-set-attributes"}}'),i=r("785893"),t=r("250065");let s={id:"wp-selection-range",title:"WP Selection range",slug:"/WritePro/commands/wp-selection-range",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Compatibilidad",id:"compatibilidad",level:4},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Selection range"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"wpArea"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, wpArea es un nombre de objeto de formulario(cadena). Si se omite, wpArea es un campo de objeto o variable."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wpArea"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del objeto de formulario (si * se especifica) o variable de objeto 4D Write Pro o campo (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Rango de objeto"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(n.h4,{id:"compatibilidad",children:"Compatibilidad"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Selection range"})," fue nombrado ",(0,i.jsx)(n.strong,{children:"WP Get selection"})," en versiones anteriores de 4D Write Pro. Ha sido renombrado por claridad."]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"WP Selection range"})," devuelve un nuevo objeto de rango de texto o un objeto imagen basado en el texto seleccionado actualmente en el \xe1rea ",(0,i.jsx)(n.em,{children:"wpArea"})," de 4D Write Pro."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que ",(0,i.jsx)(n.em,{children:"wpArea"})," es un nombre de objeto de formulario (cadena). Si no pasa este par\xe1metro, indica que ",(0,i.jsx)(n.em,{children:"wpArea"})," es una variable o campo objeto 4D Write Pro. Si no se pasa un \xe1rea 4D Write Pro en el par\xe1metro ",(0,i.jsx)(n.em,{children:"wpArea"}),", se devuelve un objeto vac\xedo."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": este comando s\xf3lo puede utilizarse si ",(0,i.jsx)(n.em,{children:"wpArea"})," est\xe1 asociada con un objeto de formulario (es decir, se muestra en el formulario/p\xe1gina actual)."]}),"\n",(0,i.jsxs)(n.p,{children:["Si se selecciona una imagen anclada (imagen en una ubicaci\xf3n fija) en ",(0,i.jsx)(n.em,{children:"wpArea"}),", ",(0,i.jsx)(n.strong,{children:"WP Selection range"})," devuelve un objeto de referencia de imagen y no un objeto rango (para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-add-picture",children:"WP Add picture"}),". De lo contrario, ",(0,i.jsx)(n.strong,{children:"WP Selection range"})," devuelve un nuevo objeto de rango. Para mayor informaci\xf3n sobre objetos de rango, consulte ",(0,i.jsx)(n.em,{children:"Comandos de gesti\xf3n de rangos"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"Usted desea obtener el texto seleccionado de un \xe1rea 4D Write Pro:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Selection range(*;"WParea")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-paragraph-range",children:"WP Paragraph range"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-picture-range",children:"WP Picture range"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var o=r(667294);let i={},t=o.createContext(i);function s(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);