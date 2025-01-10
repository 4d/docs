"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24431"],{608573:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>t,toc:()=>i,contentTitle:()=>c});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-freeze-formulas","title":"WP FREEZE FORMULAS","description":"WP FREEZE FORMULAS ( objTarget {; recalcular} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/WritePro/commands-legacy/wp-freeze-formulas.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-freeze-formulas","permalink":"/docs/es/WritePro/commands/wp-freeze-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-freeze-formulas.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-freeze-formulas","title":"WP FREEZE FORMULAS","slug":"/WritePro/commands/wp-freeze-formulas","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Find previous","permalink":"/docs/es/WritePro/commands/wp-find-previous"},"next":{"title":"WP GET ATTRIBUTES","permalink":"/docs/es/WritePro/commands/wp-get-attributes"}}'),a=r("785893"),l=r("250065");let o={id:"wp-freeze-formulas",title:"WP FREEZE FORMULAS",slug:"/WritePro/commands/wp-freeze-formulas",displayed_sidebar:"docs"},c=void 0,t={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WP FREEZE FORMULAS"})," ( ",(0,a.jsx)(n.em,{children:"objTarget"})," {; ",(0,a.jsx)(n.em,{children:"recalcular"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objTarget"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Rango o elemento o documento 4D Write Pro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"recalcular"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Opci\xf3n para controlar el rec\xe1lculo"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"WP FREEZE FORMULAS"}),' "congela" el contenido de las f\xf3rmulas en ',(0,a.jsx)(n.em,{children:"objTarget"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El comando reemplaza cada f\xf3rmula en ",(0,a.jsx)(n.em,{children:"objTarget"})," con su valor calculado (ya sea texto o imagen est\xe1tica). Esto crea un documento port\xe1til ya que solo las referencias de las f\xf3rmulas se guardan en el par\xe1metro ",(0,a.jsx)(n.em,{children:"objTarget"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["En el par\xe1metro ",(0,a.jsx)(n.em,{children:"objTarget"}),", puede pasar:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"un rango, o"}),"\n",(0,a.jsx)(n.li,{children:"un elemento (tabla / l\xednea / celda(s) / p\xe1rrafo / cuerpo / encabezado / pie de p\xe1gina / secci\xf3n / subsecci\xf3n / imagen en l\xednea o anclada / caja de texto), o"}),"\n",(0,a.jsx)(n.li,{children:"un documento 4D Write Pro."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Si ",(0,a.jsx)(n.em,{children:"objTarget"})," designa un \xe1rea fuera de la pantalla donde las f\xf3rmulas no se han calculado previamente, se evaluar\xe1n antes de congelarse. En particular, las f\xf3rmulas no se calculan cuando se carga un documento fuera de pantalla."]}),"\n",(0,a.jsxs)(n.li,{children:["Cuando se pasa una secci\xf3n en ",(0,a.jsx)(n.em,{children:"objTarget"}),", s\xf3lo se congelan las f\xf3rmulas de las im\xe1genes o las f\xf3rmulas de las cajas de texto ancladas a esta secci\xf3n o a todas las secciones. Si est\xe1n ancladas a una p\xe1gina o a la vista anidada, sus f\xf3rmulas no se congelan. Pase el documento en ",(0,a.jsx)(n.em,{children:"objTarget"})," para congelar todas las f\xf3rmulas de los elementos anclados."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"recalcular"})," permite definir si las f\xf3rmulas de ",(0,a.jsx)(n.em,{children:"objTarget"}),' deben ser recalculadas antes de ser congeladas. Puedes pasar una constante del tema "4D Write Pro":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"}),(0,a.jsx)(n.th,{children:"Comentario"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk do not recompute expressions"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"2"}),(0,a.jsx)(n.td,{children:"Especifica que todas las extpresiones en el documento no se vuelvan a calcular para imprimir o congelar."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"wk recompute expressions"}),(0,a.jsx)(n.td,{children:"Entero largo"}),(0,a.jsx)(n.td,{children:"0"}),(0,a.jsx)(n.td,{children:"Indica que todas las expresiones en el documento se vuelvan a calcular antes de imprimir o congelar. (valor por defecto)"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["Por defecto, si se omite ",(0,a.jsx)(n.em,{children:"recalcular"}),", las expresiones se recalculan."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Atenci\xf3n"}),": ",(0,a.jsx)(n.em,{children:"L\xedneas de arrastre"}),", si los hay, se transforman como l\xecneas normales cuando se congela el ",(0,a.jsx)(n.em,{children:"objTarget"}),". Como resultado, si se modifica el tama\xf1o o la orientaci\xf3n de la p\xe1gina, o si se exporta el documento, es posible que se desplacen en la disposici\xf3n resultante."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Para congelar las f\xf3rmulas en un documento sin recalcular:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0WP FREEZE FORMULAS(WriteProArea)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Para congelar todas las f\xf3rmulas en la primera secci\xf3n de un documento:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0WP FREEZE FORMULAS(WP Get section(WriteProArea;1);wk do not recompute expressions)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-compute-formulas",children:"WP COMPUTE FORMULAS"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-get-formulas",children:"WP Get formulas"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/WritePro/commands/wp-insert-formula",children:"WP INSERT FORMULA"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var s=r(667294);let a={},l=s.createContext(a);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);