"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64163"],{994219:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>i,contentTitle:()=>a});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-formula","title":"VP SET FORMULA","description":"VP SET FORMULA ( rangeObj Text { ; formatPattern : Text } )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-formula.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-formula","permalink":"/docs/es/ViewPro/commands/vp-set-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-formula","title":"VP SET FORMULA"},"sidebar":"docs","previous":{"title":"VP SET FIELD","permalink":"/docs/es/ViewPro/commands/vp-set-field"},"next":{"title":"VP SET FORMULAS","permalink":"/docs/es/ViewPro/commands/vp-set-formulas"}}'),o=r("785893"),l=r("250065");let d={id:"vp-set-formula",title:"VP SET FORMULA"},a=void 0,c={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP SET FORMULA"})," ( ",(0,o.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,o.jsx)(n.em,{children:"formula"})," : Text { ; ",(0,o.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metros"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"rangeObj"}),(0,o.jsx)(n.td,{children:"Object"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Objeto rango"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"formula"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"F\xf3rmula o m\xe9todo 4D"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"formatPattern"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Formato del campo"}),(0,o.jsx)(n.td,{})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.code,{children:"VP SET FORMULA"})," asigna una f\xf3rmula especificada o un m\xe9todo 4D a un rango de celdas designado."]}),"\n",(0,o.jsxs)(n.p,{children:["En ",(0,o.jsx)(n.em,{children:"rangeObj"}),", pasa un rango de la(s) celda(s) (creada(s) por ejemplo con ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-cell",children:(0,o.jsx)(n.code,{children:"VP Cell"})})," o ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-column",children:(0,o.jsx)(n.code,{children:"VP Column"})}),") cuyo valor desea especificar. Si ",(0,o.jsx)(n.em,{children:"rangeObj"})," incluye varias celdas, la f\xf3rmula especificada se vincular\xe1 en cada celda."]}),"\n",(0,o.jsxs)(n.p,{children:["El par\xe1metro ",(0,o.jsx)(n.em,{children:"formula"})," indica un nombre de f\xf3rmula o de m\xe9todo 4D a asignar a ",(0,o.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Si ",(0,o.jsx)(n.em,{children:"formula"})," es una cadena, utilice el punto ",(0,o.jsx)(n.code,{children:"."})," como separador num\xe9rico y la coma ",(0,o.jsx)(n.code,{children:","})," como separador de par\xe1metros.\nSi se utiliza un m\xe9todo 4D, debe estar permitido con el comando ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-allowed-methods",children:(0,o.jsx)(n.code,{children:"VP SET ALLOWED METHODS"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["El ",(0,o.jsx)(n.em,{children:"formatPattern"})," opcional define un ",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#cell-format",children:"pattern"})," para ",(0,o.jsx)(n.em,{children:"formula"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Se elimina la f\xf3rmula en ",(0,o.jsx)(n.em,{children:"rangeObj"}),' sustituy\xe9ndola por una cadena vac\xeda ("").']}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,o.jsx)(n.p,{children:"Para eliminar la f\xf3rmula:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'VP SET FORMULA(VP Cell("ViewProArea";5;2);"")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'VP SET FORMULA($range; "SUM(A1,B7,C11)") //"," para separar los par\xe1metros\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#cell-format",children:"Cell format"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-formula",children:"VP Get Formula"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var s=r(667294);let o={},l=s.createContext(o);function d(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);