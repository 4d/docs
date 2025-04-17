"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11786"],{954724:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-table-range","title":"WP Table range","description":"WP Table range ( objRango ) -> Resultado","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/WritePro/commands-legacy/wp-table-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-table-range","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-table-range.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-table-range","title":"WP Table range","slug":"/WritePro/commands/wp-table-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP TABLE MERGE CELLS","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-merge-cells"},"next":{"title":"WP TABLE SPLIT CELLS","permalink":"/docs/es/20-R8/WritePro/commands/wp-table-split-cells"}}'),a=t("785893"),o=t("250065");let s={id:"wp-table-range",title:"WP Table range",slug:"/WritePro/commands/wp-table-range",displayed_sidebar:"docs"},l=void 0,i={},d=[{value:"Compatibilidad",id:"compatibilidad",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP Table range"})," ( ",(0,a.jsx)(n.em,{children:"objRango"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objRango"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Rango o referencia del elemento o documento 4D Write Pro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Objeto rango que contiene tablas \xfanicamente"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"compatibilidad",children:"Compatibilidad"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP Table range"})," fue nombrado ",(0,a.jsx)(n.strong,{children:"WP Create table range"})," en versiones anteriores de 4D Write Pro. Se ha renombrado por claridad."]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WP Table range"})," devuelve un objeto rango que trata solo las tablas contenidas en ",(0,a.jsx)(n.em,{children:"objRango"})," pasado como par\xe1metro. Devolver\xe1 un rango de wk type table, incluso si ",(0,a.jsx)(n.em,{children:"objRango"})," pasado como par\xe1metro no contiene una tabla. El objeto de rango de tabla devuelto puede ser utilizado por ",(0,a.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," y ",(0,a.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," para manejar los atributos que se aplican a las tablas y a los contenidos de la tabla."]}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"objRango"}),", puede pasar:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un rango, o"}),"\n",(0,a.jsx)(n.li,{children:"un elemento (cuerpo / encabezado / pie de p\xe1gina / p\xe1rrafo / secci\xf3n / subsecci\xf3n), o"}),"\n",(0,a.jsx)(n.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Usted desea modificar el aspecto de las tablas en el rango de tabla:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0tableRange:=WP Table range(myDoc)\n\xa0\xa0//atributos tabla\n\xa0WP SET ATTRIBUTES(tableRange;wk border style;wk solid;wk border color;"Blue";wk border width;"3px")\n\xa0WP SET ATTRIBUTES(tableRange;wk table align;wk center)\n\xa0\xa0//atributos texto \xa0\xa0\n\xa0WP SET ATTRIBUTES(tableRange;wk font size;12)\n\xa0WP SET ATTRIBUTES(tableRange;wk text transform;wk capitalize)\n\xa0WP SET ATTRIBUTES(tableRange;wk font bold;wk true)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-get-elements",children:"WP Get elements"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/20-R8/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var r=t(667294);let a={},o=r.createContext(a);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);