"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1093],{775977:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var l=s(474848),r=s(28453);const t={id:"vp-get-values",title:"VP Get values"},o=void 0,i={id:"ViewPro/commands/vp-get-values",title:"VP Get values",description:"VP Get values ( rangeObj Collection",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-values.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-values",permalink:"/docs/es/ViewPro/commands/vp-get-values",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-values.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-values",title:"VP Get values"},sidebar:"docs",previous:{title:"VP Get value",permalink:"/docs/es/ViewPro/commands/vp-get-value"},next:{title:"VP Get workbook options",permalink:"/docs/es/ViewPro/commands/vp-get-workbook-options"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP Get values"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metros"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Objeto rango"}),(0,l.jsx)(n.td,{})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Result"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"<-"}),(0,l.jsx)(n.td,{children:"Colecci\xf3n de valores"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.code,{children:"VP Get values"}),"  recupera los valores del ",(0,l.jsx)(n.em,{children:"rangeObj"})," designado."]}),"\n",(0,l.jsxs)(n.p,{children:["En ",(0,l.jsx)(n.em,{children:"rangeObj"}),", pase un rango cuyos valores desea recuperar. Si ",(0,l.jsx)(n.em,{children:"rangeObj"})," incluye varios rangos, s\xf3lo se utiliza el primer rango."]}),"\n",(0,l.jsxs)(n.p,{children:["La colecci\xf3n devuelta por ",(0,l.jsx)(n.code,{children:"VP Get values"})," contiene una colecci\xf3n bidimensional:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Cada elemento de la colecci\xf3n de primer nivel representa una l\xednea y contiene una subcolecci\xf3n de valores"}),"\n",(0,l.jsx)(n.li,{children:"Cada subcolecci\xf3n contiene los valores de las celdas de la l\xednea. Los valores pueden ser enteros, reales, booleanos, texto, objeto o null. Si un valor es de tipo fecha u hora, se devuelve en un objeto con las siguientes propiedades:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propiedad"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"value"}),(0,l.jsx)(n.td,{children:"Fecha"}),(0,l.jsx)(n.td,{children:"Valor de la celda (excepto - time)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"time"}),(0,l.jsx)(n.td,{children:"Real"}),(0,l.jsx)(n.td,{children:"Valor hora (en segundos) si el valor es del tipo de fecha js"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Las fechas o las horas son consideradas como un datetime y se completan de la siguiente manera:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"valor de tipo hora - la parte fecha se completa como 30 de diciembre de 1899"}),"\n",(0,l.jsx)(n.li,{children:"valor de tipo date - la parte de la hora se completa como medianoche (00:00:00:000)"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(n.p,{children:"Quiere obtener los valores de C4 a G6:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(841968).A+"",width:"629",height:"221"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))\n// $result[0]=[4,5,null,hello,world]\n// $result[1]=[6,7,8,9,null]\n// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-formulas",children:"VP Get formulas"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-value",children:"VP Get value"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},841968:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/cmd_vpGetValues-260c1d0b895e13be413a70052a3d640e.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var l=s(296540);const r={},t=l.createContext(r);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);