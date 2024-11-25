"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70739"],{410201:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-table-theme","title":"VP SET TABLE THEME","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-table-theme.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-table-theme","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-table-theme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-table-theme.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-table-theme","title":"VP SET TABLE THEME"},"sidebar":"docs","previous":{"title":"VP SET TABLE COLUMN ATTRIBUTES","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-table-column-attributes"},"next":{"title":"VP SET TEXT VALUE","permalink":"/docs/es/20-R6/ViewPro/commands/vp-set-text-value"}}'),s=t("785893"),a=t("250065");let l={id:"vp-set-table-theme",title:"VP SET TABLE THEME"},i=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lanzamiento"}),(0,s.jsx)(n.th,{children:"Modificaciones"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R8"}),(0,s.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET TABLE THEME"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,s.jsx)(n.em,{children:"options"})," : cs.ViewPro.TableTheme )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de la tabla"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Propiedades del tema de la tabla a modificar"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP SET TABLE THEME"})," modifica el tema actual de ",(0,s.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro y en ",(0,s.jsx)(n.em,{children:"tableName"}),", el nombre de la tabla a modificar."]}),"\n",(0,s.jsxs)(n.p,{children:["En el par\xe1metro ",(0,s.jsx)(n.em,{children:"options"}),", pase un objeto de la ",(0,s.jsxs)(n.a,{href:"/docs/es/20-R6/ViewPro/classes#tabletheme",children:["clase",(0,s.jsx)(n.code,{children:"cs.ViewPro.TableTheme"})]})," que contenga las propiedades del tema a modificar."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Desea definir un tema predefinido en una tabla:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n$param.theme:="medium2"\nVP SET TABLE THEME("ViewProArea"; "myTable"; $param)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Quiere tener esta representaci\xf3n de columna alternativa:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(600411).Z+"",width:"647",height:"202"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n\n// Activar el renderizado de columnas band\n$param.bandColumns:=True\n$param.bandRows:=False\n\n// Crear el objeto tema con estilos de encabezado y columna\n$param.theme:=cs.ViewPro.TableThemeOptions.new()\n\nvar $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle\n\n$styleHeader:=cs.ViewPro.TableStyle.new()\n$styleHeader.backColor:="Gold"\n$styleHeader.foreColor:="#03045E"\n$param.theme.headerRowStyle:=$styleHeader\n\n$styleColumn1:=cs.ViewPro.TableStyle.new()\n$styleColumn1.backColor:="SkyBlue"\n$styleColumn1.foreColor:="#03045E"\n$param.theme.firstColumnStripStyle:=$styleColumn1\n\n$styleColumn2:=cs.ViewPro.TableStyle.new()\n$styleColumn2.backColor:="LightCyan"\n$styleColumn2.foreColor:="#03045E"\n$param.theme.secondColumnStripStyle:=$styleColumn2\n\nVP SET TABLE THEME("ViewProArea"; "myTable"; $param)\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R6/ViewPro/commands/vp-get-table-theme",children:"VP Get table theme"})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},600411:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/col-bandering-f0c15f4b037ddc2207b496243af3ba28.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(667294);let s={},a=r.createContext(s);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);