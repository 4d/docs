"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32025"],{46620:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-table-theme","title":"VP SET TABLE THEME","description":"Historia","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-set-table-theme.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-table-theme","permalink":"/docs/es/ViewPro/commands/vp-set-table-theme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-table-theme.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-set-table-theme","title":"VP SET TABLE THEME"},"sidebar":"docs","previous":{"title":"VP SET TABLE COLUMN ATTRIBUTES","permalink":"/docs/es/ViewPro/commands/vp-set-table-column-attributes"},"next":{"title":"VP SET TEXT VALUE","permalink":"/docs/es/ViewPro/commands/vp-set-text-value"}}'),r=t("785893"),a=t("250065");let l={id:"vp-set-table-theme",title:"VP SET TABLE THEME"},i=void 0,d={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function c(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R8"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET TABLE THEME"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : cs.ViewPro.TableTheme {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de la tabla"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Propiedades del tema de la tabla a modificar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP SET TABLE THEME"})," modifica el tema actual de ",(0,r.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro y en ",(0,r.jsx)(n.em,{children:"tableName"}),", el nombre de la tabla a modificar."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"options"}),", pase un objeto de la ",(0,r.jsxs)(n.a,{href:"/docs/es/ViewPro/classes#tabletheme",children:["clase",(0,r.jsx)(n.code,{children:"cs.ViewPro.TableTheme"})]})," que contenga las propiedades del tema a modificar."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"sheet"}),", pase el \xedndice de la hoja objetivo. Si no se especifica ning\xfan \xedndice o si pasa -1, el comando se aplica a la hoja actual."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Desea definir un tema predefinido en una tabla:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n$param.theme:="medium2"\nVP SET TABLE THEME("ViewProArea"; "myTable"; $param)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Quiere tener esta representaci\xf3n de columna alternativa:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(186059).Z+"",width:"647",height:"202"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n\n// Activar el renderizado de columnas band\n$param.bandColumns:=True\n$param.bandRows:=False\n\n// Crear el objeto tema con estilos de encabezado y columna\n$param.theme:=cs.ViewPro.TableThemeOptions.new()\n\nvar $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle\n\n$styleHeader:=cs.ViewPro.TableStyle.new()\n$styleHeader.backColor:="Gold"\n$styleHeader.foreColor:="#03045E"\n$param.theme.headerRowStyle:=$styleHeader\n\n$styleColumn1:=cs.ViewPro.TableStyle.new()\n$styleColumn1.backColor:="SkyBlue"\n$styleColumn1.foreColor:="#03045E"\n$param.theme.firstColumnStripStyle:=$styleColumn1\n\n$styleColumn2:=cs.ViewPro.TableStyle.new()\n$styleColumn2.backColor:="LightCyan"\n$styleColumn2.foreColor:="#03045E"\n$param.theme.secondColumnStripStyle:=$styleColumn2\n\nVP SET TABLE THEME("ViewProArea"; "myTable"; $param)\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-table-theme",children:"VP Get table theme"})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},186059:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/col-bandering-f0c15f4b037ddc2207b496243af3ba28.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var s=t(667294);let r={},a=s.createContext(r);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);