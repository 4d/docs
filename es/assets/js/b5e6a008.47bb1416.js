"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61158],{577993:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=n(474848),s=n(28453);const t={id:"add-to-date",title:"Add to date",slug:"/commands/add-to-date",displayed_sidebar:"docs"},r=void 0,c={id:"commands-legacy/add-to-date",title:"Add to date",description:"Add to date ( fecha ; a\xf1os ; meses ; d\xedas ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/add-to-date.md",sourceDirName:"commands-legacy",slug:"/commands/add-to-date",permalink:"/docs/es/commands/add-to-date",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadd-to-date.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"add-to-date",title:"Add to date",slug:"/commands/add-to-date",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"On Web Legacy Close Session database method",permalink:"/docs/es/commands/on-web-legacy-close-session-database-method"},next:{title:"Current date",permalink:"/docs/es/commands/current-date"}},o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function i(e){const d={code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.p,{children:[(0,a.jsx)(d.strong,{children:"Add to date"})," ( ",(0,a.jsx)(d.em,{children:"fecha"})," ; ",(0,a.jsx)(d.em,{children:"a\xf1os"})," ; ",(0,a.jsx)(d.em,{children:"meses"})," ; ",(0,a.jsx)(d.em,{children:"d\xedas"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(d.table,{children:[(0,a.jsx)(d.thead,{children:(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.th,{children:"Par\xe1metro"}),(0,a.jsx)(d.th,{children:"Tipo"}),(0,a.jsx)(d.th,{}),(0,a.jsx)(d.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(d.tbody,{children:[(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"fecha"}),(0,a.jsx)(d.td,{children:"Date"}),(0,a.jsx)(d.td,{children:"\u2192"}),(0,a.jsx)(d.td,{children:"Fecha a la cual a\xf1adir d\xedas, meses y a\xf1os"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"a\xf1os"}),(0,a.jsx)(d.td,{children:"Integer"}),(0,a.jsx)(d.td,{children:"\u2192"}),(0,a.jsx)(d.td,{children:"N\xfamero de a\xf1os a a\xf1adir a la fecha"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"meses"}),(0,a.jsx)(d.td,{children:"Integer"}),(0,a.jsx)(d.td,{children:"\u2192"}),(0,a.jsx)(d.td,{children:"N\xfamero de meses a a\xf1adir a la fecha"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"d\xedas"}),(0,a.jsx)(d.td,{children:"Integer"}),(0,a.jsx)(d.td,{children:"\u2192"}),(0,a.jsx)(d.td,{children:"N\xfamero de d\xedas a a\xf1adir a la fecha"})]}),(0,a.jsxs)(d.tr,{children:[(0,a.jsx)(d.td,{children:"Resultado"}),(0,a.jsx)(d.td,{children:"Date"}),(0,a.jsx)(d.td,{children:"\u2190"}),(0,a.jsx)(d.td,{children:"Fecha resultante"})]})]})]}),"\n",(0,a.jsx)(d.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(d.p,{children:["El comando Add to date a\xf1ade ",(0,a.jsx)(d.em,{children:"a\xf1os"}),", ",(0,a.jsx)(d.em,{children:"meses,"})," y ",(0,a.jsx)(d.em,{children:"d\xedas"})," a la fecha pasada en ",(0,a.jsx)(d.em,{children:"fecha"}),", luego devuelve la fecha resultante."]}),"\n",(0,a.jsxs)(d.p,{children:["Aunque usted puede utilizar los ",(0,a.jsx)(d.em,{children:"Operadores de fechas"})," para a\xf1adir d\xedas a una fecha, Add to date le permite r\xe1pidamente a\xf1adir meses y a\xf1os sin tener que lidiar con el n\xfamero de d\xedas al mes o a\xf1os bisiestos (como lo har\xeda cuando utiliza el operador + en fechas)."]}),"\n",(0,a.jsx)(d.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-4d",children:"\xa0\xa0// Esta l\xednea calcula la fecha dentro de un a\xf1o, el mismo d\xeda\n\xa0$vdInUna\xf1o:=Add to date(Current date;1;0;0)\n\xa0\n\xa0\xa0// Esta l\xednea calcula la fecha el pr\xf3ximo mes, el mismo d\xeda\n\xa0$vdProximoMes:=Add to date(Current date;0;1;0)\n\xa0\n\xa0\xa0// Esta l\xednea hace lo mismo que $vdMa\xf1ana:=Current date+1\n\xa0$vdMa\xf1ana:=Add to date(Current date;0;0;1)\n"})})]})}function h(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>r,x:()=>c});var a=n(296540);const s={},t=a.createContext(s);function r(e){const d=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:d},e.children)}}}]);