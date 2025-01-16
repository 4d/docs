"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33401"],{855912:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"ViewPro/commands/vp-set-print-info","title":"VP SET PRINT INFO","description":"VP SET PRINT INFO ( vpAreaName Object { ; sheet : Integer }  )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-print-info.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-print-info","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-print-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-print-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-print-info","title":"VP SET PRINT INFO"},"sidebar":"docs","previous":{"title":"VP SET NUM VALUE","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-num-value"},"next":{"title":"VP SET ROW ATTRIBUTES","permalink":"/docs/pt/20-R7/ViewPro/commands/vp-set-row-attributes"}}'),i=t("785893"),o=t("250065");let s={id:"vp-set-print-info",title:"VP SET PRINT INFO"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP SET PRINT INFO"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,i.jsx)(n.em,{children:"printInfo"})," : Object { ; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"printInfo"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Objeto que cont\xe9m atributos de impress\xe3o"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP SET PRINT INFO"})," command defines the attributes to use when printing the ",(0,i.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Passe o nome da \xe1rea 4D View Pro a ser impressa em ",(0,i.jsx)(n.em,{children:"vpAreaName"}),". Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,i.jsxs)(n.p,{children:["You can pass an object containing definitions for various printing attributes in the ",(0,i.jsx)(n.em,{children:"printInfo"})," parameter. Para ver a lista completa dos atributos dispon\xedveis, consulte ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/configuring#print-attributes",children:"Atributos de impress\xe3o"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In the optional ",(0,i.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet to print (counting begins at 0). Se omitido, a planilha atual ser\xe1 utilizada por padr\xe3o. Voc\xea pode selecionar explicitamente a planilha atual com a seguinte constante:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"O c\xf3digo seguinte imprime uma \xe1rea 4D View Pro num documento PDF:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $printInfo : Object\n\n//declare print attributes object\n$printInfo:=New object\n\n//define print attributes\n$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"\n$printInfo.firstPageNumber:=1\n$printInfo.footerRight:="page &P of &N"\n$printInfo.orientation:=vk print page orientation landscape\n$printInfo.centering:=vk print centering horizontal\n$printInfo.columnStart:=0\n$printInfo.columnEnd:=8\n$printInfo.rowStart:=0\n$printInfo.rowEnd:=24\n\n$printInfo.showGridLine:=True\n\n//Add corporate logo\n$printInfo.headerLeftImage:=logo.png\n$printInfo.headerLeft:="&G"\n\n$printInfo.showRowHeader:=vk print visibility hide\n$printInfo.showColumnHeader:=vk print visibility hide\n$printInfo.fitPagesWide:=1\n$printInfo.fitPagesTall:=1\n\n//print PDF document\nVP SET PRINT INFO ("ViewProArea";$printInfo)\n\n//export the PDF\nVP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))\n'})}),"\n",(0,i.jsx)(n.p,{children:"O PDF:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(325779).Z+"",width:"815",height:"640"})}),"\n",(0,i.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/configuring#print-attributes",children:"Atributos de impress\xe3o 4D View Pro"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-get-print-info",children:"VP Get print info"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/ViewPro/commands/vp-print",children:"VP PRINT"})]})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},325779:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/cmd_vpSetPrintInfo-e383247d68f82d8918fb9f62a1a0039c.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var r=t(667294);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);