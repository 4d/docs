"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91284"],{764651:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>t,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"ViewPro/commands/vp-set-values","title":"VP SET VALUES","description":"VP SET VALUES ( rangeObj Collection )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/ViewPro/commands/vp-set-values.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-values","permalink":"/docs/es/ViewPro/commands/vp-set-values","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-values.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-values","title":"VP SET VALUES"},"sidebar":"docs","previous":{"title":"VP SET VALUE","permalink":"/docs/es/ViewPro/commands/vp-set-value"},"next":{"title":"VP SET WORKBOOK OPTIONS","permalink":"/docs/es/ViewPro/commands/vp-set-workbook-options"}}'),r=s("785893"),a=s("250065");let i={id:"vp-set-values",title:"VP SET VALUES"},c=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET VALUES"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"valuesCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto rango"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valuesCol"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de valores"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP SET VALUES"})," asigna una colecci\xf3n de valores comenzando en el rango de celdas especificado."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pase un rango de celda (creada con ",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-cell",children:(0,r.jsx)(n.code,{children:"VP Cell"})}),") cuyo valor desea especificar. La celda definida en ",(0,r.jsx)(n.em,{children:"rangeObj"})," se utiliza para determinar el punto de partida."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"rangeObj"})," no es un rango de celdas, s\xf3lo se utilizar\xe1 la primera celda del rango."]}),"\n",(0,r.jsxs)(n.li,{children:["Si ",(0,r.jsx)(n.em,{children:"rangeObj"})," incluye varios rangos, s\xf3lo se utilizar\xe1 la primera celda del primer rango."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"valuesCol"})," es bidimensional:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"La colecci\xf3n de primer nivel contiene subcolecciones de valores. Cada subcolecci\xf3n define una l\xednea. Pasa una colecci\xf3n vac\xeda para saltar una l\xednea."}),"\n",(0,r.jsx)(n.li,{children:"Cada subcolecci\xf3n define los valores de las celdas para la l\xednea. Los valores pueden ser enteros, reales, booleanos, texto, fecha, null u objeto. Si el valor es un objeto, puede tener las siguientes propiedades:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Integer, Real, Boolean, Text, Date, Null"}),(0,r.jsx)(n.td,{children:"Valor de la celda (excepto - time)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"time"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"Valor hora (en segundos)"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$param:=New collection\n$param.push(New collection(1;2;3;False)) //primera l\xednea, 4 valores\n$param.push(New collection) //segunda l\xednea, sin tocar\n$param.push(New collection(4;5;Null;"hello";"world")) // tercera l\xednea, 5 valores\n$param.push(New collection(6;7;8;9)) //cuarta l\xednea, 4 valores\n$param.push(New collection(Null;New object("value";Current date;"time";42))) //quinta l\xednea, 1 valor\n   \nVP SET VALUES(VP Cell("ViewProArea";2;1);$param)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(846752).Z+"",width:"756",height:"270"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-values",children:"VP Get Values"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},846752:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/cmd_vpSetValues-b67ff95f1ff17766f7646ad11eff9028.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var l=s(667294);let r={},a=l.createContext(r);function i(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);