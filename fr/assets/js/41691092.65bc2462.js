"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56579],{753601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=t(474848),i=t(28453);const s={id:"vp-set-print-info",title:"VP SET PRINT INFO"},o=void 0,d={id:"ViewPro/commands/vp-set-print-info",title:"VP SET PRINT INFO",description:"VP SET PRINT INFO ( vpAreaName Object { ; sheet : Integer }  )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-set-print-info.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-print-info",permalink:"/docs/fr/ViewPro/commands/vp-set-print-info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-print-info.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-print-info",title:"VP SET PRINT INFO"},sidebar:"docs",previous:{title:"VP SET NUM VALUE",permalink:"/docs/fr/ViewPro/commands/vp-set-num-value"},next:{title:"VP SET ROW ATTRIBUTES",permalink:"/docs/fr/ViewPro/commands/vp-set-row-attributes"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET PRINT INFO"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"printInfo"})," : Object { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nom de la zone 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"printInfo"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet contenant les attributs d'impression"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille (feuille courante si omis)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET PRINT INFO"})," command defines the attributes to use when printing the ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Pass the name of the 4D View Pro area to print in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". Si vous passez un nom inexistant, une erreur est retourn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:["You can pass an object containing definitions for various printing attributes in the ",(0,r.jsx)(n.em,{children:"printInfo"})," parameter. To view the full list of the available attributes, see ",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#print-attributes",children:"Print Attributes"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet to print (counting begins at 0). Si le param\xe8tre est omis, la feuille courante est utilis\xe9e par d\xe9faut. Vous pouvez s\xe9lectionner explicitement la feuille courante \xe0 l'aide de la constante suivante :"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Le code suivant imprimera une nouvelle zone 4D View Pro dans un document PDF :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $printInfo : Object\n\n//declare print attributes object\n$printInfo:=New object\n\n//define print attributes\n$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"\n$printInfo.firstPageNumber:=1\n$printInfo.footerRight:="page &P of &N"\n$printInfo.orientation:=vk print page orientation landscape\n$printInfo.centering:=vk print centering horizontal\n$printInfo.columnStart:=0\n$printInfo.columnEnd:=8\n$printInfo.rowStart:=0\n$printInfo.rowEnd:=24\n\n$printInfo.showGridLine:=True\n\n//Add corporate logo\n$printInfo.headerLeftImage:=logo.png\n$printInfo.headerLeft:="&G"\n\n$printInfo.showRowHeader:=vk print visibility hide\n$printInfo.showColumnHeader:=vk print visibility hide\n$printInfo.fitPagesWide:=1\n$printInfo.fitPagesTall:=1\n\n//print PDF document\nVP SET PRINT INFO ("ViewProArea";$printInfo)\n\n//export the PDF\nVP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))\n'})}),"\n",(0,r.jsx)(n.p,{children:"Le PDF :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(180021).A+"",width:"815",height:"640"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/configuring#print-attributes",children:"4D View Pro print attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-convert-to-picture",children:"VP Convert to picture"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-print-info",children:"VP Get print info"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-print",children:"VP PRINT"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},180021:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cmd_vpSetPrintInfo-e383247d68f82d8918fb9f62a1a0039c.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(296540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);