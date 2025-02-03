"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92248"],{500108:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>s});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-attributes","title":"WP GET ATTRIBUTES","description":"WP GET ATTRIBUTES ( rangoObj ; nomAtrib ; valorAtrib {; nomAtrib2 ; valorAtrib2 ; ... ; nomAtribN ; valorAtribN} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-get-attributes.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-attributes","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-attributes","title":"WP GET ATTRIBUTES","slug":"/WritePro/commands/wp-get-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP FREEZE FORMULAS","permalink":"/docs/es/20-R7/WritePro/commands/wp-freeze-formulas"},"next":{"title":"WP Get body","permalink":"/docs/es/20-R7/WritePro/commands/wp-get-body"}}'),o=n("785893"),i=n("250065");let a={id:"wp-get-attributes",title:"WP GET ATTRIBUTES",slug:"/WritePro/commands/wp-get-attributes",displayed_sidebar:"docs"},s=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"WP GET ATTRIBUTES"})," ( ",(0,o.jsx)(r.em,{children:"rangoObj"})," ; ",(0,o.jsx)(r.em,{children:"nomAtrib"})," ; ",(0,o.jsx)(r.em,{children:"valorAtrib"})," {; ",(0,o.jsx)(r.em,{children:"nomAtrib2"})," ; ",(0,o.jsx)(r.em,{children:"valorAtrib2"})," ; ... ; ",(0,o.jsx)(r.em,{children:"nomAtribN"})," ; ",(0,o.jsx)(r.em,{children:"valorAtribN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe1metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"rangoObj"}),(0,o.jsx)(r.td,{children:"Object"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"nomAtrib"}),(0,o.jsx)(r.td,{children:"Text"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Nombre del atributo a obtener"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"valorAtrib"}),(0,o.jsx)(r.td,{children:"Texto, N\xfamero, Array, Collection, Imagen, Fecha"}),(0,o.jsx)(r.td,{children:"\uD83E\uDC58"}),(0,o.jsx)(r.td,{children:"Valor actual de atributo para el rango de texto."})]})]})]}),"\n",(0,o.jsx)(r.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["El comando ",(0,o.jsx)(r.strong,{children:"WP GET ATTRIBUTES"})," devuelve el valor de todo atributo en un rango, encabezado, cuerpo, pie, tabla o documento 4D Write Pro. Este comando le permite acceder a todo tipo de atributos internos 4D Write Pro: car\xe1cter, p\xe1rrafo, documento, tabla o imagen."]}),"\n",(0,o.jsxs)(r.p,{children:["En ",(0,o.jsx)(r.em,{children:"rangoObj"}),", puede pasar:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"un rango, o"}),"\n",(0,o.jsx)(r.li,{children:"un elemento (encabezado / pie de p\xe1gina / cuerpo / tabla / p\xe1rrafo / imagen anclada o en l\xednea / secci\xf3n /subsecci\xf3n/ hoja de estilo) o"}),"\n",(0,o.jsx)(r.li,{children:"un documento 4D Write Pro"}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Para obtener una lista completa de los atributos a pasar en ",(0,o.jsx)(r.em,{children:"nomAtrib"}),", as\xed como tambi\xe9n sus respectivos valores, por favor consulte la secci\xf3n ",(0,o.jsx)(r.em,{children:"Atributos 4D Write Pro"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"Si hay diferentes valores para el mismo atributo en el elemento pasado como par\xe1metro, el comando devuelve:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"para valores num\xe9ricos, wk mixed"}),"\n",(0,o.jsxs)(r.li,{children:["para un array, un array vac\xedo (paradas de tabulaciones, color si ",(0,o.jsx)(r.em,{children:"valorAttib"})," est\xe1 definido como array), con la excepci\xf3n de wk text shadow offset para el cual el valor array siempre contendr\xe1 2 entradas que pueden definirse por separado como wk mixed si cualquier desplazamiento horizontal o vertical (o ambos) se combinan."]}),"\n",(0,o.jsx)(r.li,{children:"para valores cadena, una cadena vac\xeda"}),"\n",(0,o.jsx)(r.li,{children:"para valores imagen, una imagen vac\xeda."}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota"}),": si ",(0,o.jsx)(r.em,{children:"rangoObj"})," contiene un p\xe1rrafo y una hoja de estilo de caracteres, se devuelve el nombre de la hoja de estilo del p\xe1rrafo."]}),"\n",(0,o.jsx)(r.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(r.p,{children:"Usted quiere conseguir el color de fondo del \xe1rea seleccionada:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0$range:=WP Selection range(*;"WParea")\n\xa0WP GET ATTRIBUTES($range;wk background color;$bcol)\n'})}),"\n",(0,o.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.em,{children:"Atributos 4D Write Pro"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.em,{children:"Constantes 4D Write Pro"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/WritePro/commands/wp-reset-attributes",children:"WP RESET ATTRIBUTES"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})]})]})}function m(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return s},a:function(){return a}});var t=n(667294);let o={},i=t.createContext(o);function a(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);