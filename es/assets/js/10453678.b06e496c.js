"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58300"],{231090:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>c,metadata:()=>l,assets:()=>i,toc:()=>d,contentTitle:()=>a});var l=JSON.parse('{"id":"ViewPro/commands/vp-set-formulas","title":"VP SET FORMULAS","description":"VP SET FORMULAS ( rangeObj Collection )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-formulas.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-formulas","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-formulas.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-formulas","title":"VP SET FORMULAS"},"sidebar":"docs","previous":{"title":"VP SET FORMULA","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-formula"},"next":{"title":"VP SET FROZEN PANES","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-frozen-panes"}}'),r=s("785893"),o=s("250065");let c={id:"vp-set-formulas",title:"VP SET FORMULAS"},a=void 0,i={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function t(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET FORMULAS"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"formulasCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objeto de rango de celda"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formulasCol"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Colecci\xf3n de f\xf3rmulas"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP SET FORMULAS"})," asigna una colecci\xf3n de f\xf3rmulas que comienzan en el rango de celdas especificado."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pase un rango de la celda (creada con ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-cell",children:"VP Cell"}),") cuya f\xf3rmula desea especificar. Si ",(0,r.jsx)(n.em,{children:"rangeObj"})," incluye varios rangos, s\xf3lo se utiliza el primer rango."]}),"\n",(0,r.jsxs)(n.p,{children:["El par\xe1metro ",(0,r.jsx)(n.em,{children:"formulasCol"})," es una colecci\xf3n bidimensional:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"La colecci\xf3n de primer nivel contiene subcolecciones de f\xf3rmulas. Cada subcolecci\xf3n define una l\xednea."}),"\n",(0,r.jsx)(n.li,{children:"Cada subcolecci\xf3n define los valores de las celdas para la l\xednea. Los valores deben ser elementos textuales que contengan las f\xf3rmulas a asignar a las celdas."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Si la f\xf3rmula es una cadena, utilice el punto ",(0,r.jsx)(n.code,{children:"."})," como separador num\xe9rico y la coma ",(0,r.jsx)(n.code,{children:","})," como separador de par\xe1metros.\nSi se utiliza un m\xe9todo 4D, debe estar permitido con el comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-allowed-methods",children:(0,r.jsx)(n.code,{children:"VP SET ALLOWED METHODS"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Las f\xf3rmulas de ",(0,r.jsx)(n.em,{children:"rangeObj"}),' se eliminan sustituy\xe9ndolas por una cadena vac\xeda ("").']}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$formulas:=New collection\n$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // Primera l\xednea\n$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Segunda l\xednea\n\n \nVP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Definir las celdas con las f\xf3rmulas\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"myMethod"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"$0:=$1*3.33\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(803716).Z+"",width:"977",height:"474"})}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Para eliminar las f\xf3rmulas:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$formulas:=New collection\n$formulas.push(New collection("";"")) // primera colecci\xf3n\n$formulas.push(New collection("";"")) // segunda colecci\xf3n\n \nVP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Asignar a celdas\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-formulas",children:"VP Get Formulas"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-values",children:"VP GET VALUES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},803716:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/cmd_vpSetFormulas-d9a5e529fd8008034b0694f768bb2bbb.PNG"},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var l=s(667294);let r={},o=l.createContext(r);function c(e){let n=l.useContext(o);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);