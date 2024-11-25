"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41015"],{830109:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>d,default:()=>p,assets:()=>c,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-print-info","title":"VP SET PRINT INFO","description":"VP SET PRINT INFO ( vpAreaName Object { ; sheet : Integer }  )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-print-info.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-print-info","permalink":"/docs/es/ViewPro/commands/vp-set-print-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-print-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-print-info","title":"VP SET PRINT INFO"},"sidebar":"docs","previous":{"title":"VP SET NUM VALUE","permalink":"/docs/es/ViewPro/commands/vp-set-num-value"},"next":{"title":"VP SET ROW ATTRIBUTES","permalink":"/docs/es/ViewPro/commands/vp-set-row-attributes"}}'),t=i("785893"),o=i("250065");let s={id:"vp-set-print-info",title:"VP SET PRINT INFO"},d=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET PRINT INFO"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,t.jsx)(n.em,{children:"printInfo"})," : Object { ; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"printInfo"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto que contiene los atributos de impresi\xf3n"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"VP SET PRINT INFO"})," define los atributos que se utilizar\xe1n al imprimir ",(0,t.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase el nombre del \xe1rea 4D View Pro en ",(0,t.jsx)(n.em,{children:"vpAreaName"}),". Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede pasar un objeto que contenga las definiciones para varios atributos de impresi\xf3n en el par\xe1metro ",(0,t.jsx)(n.em,{children:"printInfo"}),". Para ver la lista completa de los atributos disponibles, consulte ",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#print-attributes",children:"Atributos de impresi\xf3n"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica a imprimir (la numeraci\xf3n comienza en 0). Si se omite, se utiliza por defecto la hoja de c\xe1lculo actual. Puede seleccionar expl\xedcitamente la hoja de c\xe1lculo actual con la siguiente constante:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"El siguiente c\xf3digo imprimir\xe1 un \xe1rea 4D View Pro en un documento PDF:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'var $printInfo : Object\n\n//declarar atributos de impresi\xf3n objeto\n$printInfo:=New object\n\n//definir atributos de impresi\xf3n\n$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"\n$printInfo.firstPageNumber:=1\n$printInfo.footerRight:="page &P of &N"\n$printInfo.orientation:=vk print page orientation landscape\n$printInfo.centering:=vk print centering horizontal\n$printInfo.columnStart:=0\n$printInfo.columnEnd:=8\n$printInfo.rowStart:=0\n$printInfo.rowEnd:=24\n\n$printInfo.showGridLine:=True\n\n//Agregar logotipo corporativo\n$printInfo.headerLeftImage:=logo.png\n$printInfo.headerLeft:="&G"\n\n$printInfo.showRowHeader:=vk print visibility hide\n$printInfo.showColumnHeader:=vk print visibility hide\n$printInfo.fitPagesWide:=1\n$printInfo.fitPagesTall:=1\n\n//imprimir documento PDF\nVP SET PRINT INFO ("ViewProArea";$printInfo)\n\n//exportar el PDF\nVP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))\n'})}),"\n",(0,t.jsx)(n.p,{children:"El PDF:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(659510).Z+"",width:"815",height:"640"})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/configuring#print-attributes",children:"4D View Pro print attributes"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-print-info",children:"VP Get print info"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-print",children:"VP PRINT"})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},659510:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/cmd_vpSetPrintInfo-e383247d68f82d8918fb9f62a1a0039c.PNG"},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return s}});var r=i(667294);let t={},o=r.createContext(t);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);