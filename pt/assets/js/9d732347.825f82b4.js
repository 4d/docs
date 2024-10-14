"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4912],{904437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(474848),o=t(28453);const i={id:"vp-get-print-info",title:"VP Get print info"},s=void 0,a={id:"ViewPro/commands/vp-get-print-info",title:"VP Get print info",description:"VP Get print info ( vpAreaName Integer } ) : Object",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-print-info.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-print-info",permalink:"/docs/pt/ViewPro/commands/vp-get-print-info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-print-info.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-print-info",title:"VP Get print info"},sidebar:"docs",previous:{title:"VP Get names",permalink:"/docs/pt/ViewPro/commands/vp-get-names"},next:{title:"VP Get row attributes",permalink:"/docs/pt/ViewPro/commands/vp-get-row-attributes"}},d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get print info"})," ( vpAreaName : Text { ; sheet : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultados"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto com informa\xe7\xe3o de impress\xe3o"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get print info"})," command returns an object containing the print attributes of the ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Passe o nome da \xe1rea 4D View Pro em ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,r.jsxs)(n.p,{children:["In the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet (counting begins at 0) whose printing attributes you want returned.  Se omitido ou se voc\xea passar ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", a planilha atual ser\xe1 usada."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este c\xf3digo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$pinfo:=VP Get print info("ViewProArea")\n'})}),"\n",(0,r.jsxs)(n.p,{children:["... returns the print attributes of the 4D View Pro area set in the ",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'{\nbestFitColumns:false,\nbestFitRows:false,\nblackAndWhite:false,\ncentering:0,\ncolumnEnd:8,\ncolumnStart:0,\nfirstPageNumber:1,\nfitPagesTall:1,\nfitPagesWide:1,\nfooterCenter:"&BS.H.I.E.L.D. &A Sales Per Region",\nfooterCenterImage:,\nfooterLeft:,\nfooterLeftImage:,\nfooterRight:"page &P of &N",\nfooterRightImage:,\nheaderCenter:,\nheaderCenterImage:,\nheaderLeft:"&G",\nheaderLeftImage:logo.png,\nheaderRight:,\nheaderRightImage:,\nmargin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},\norientation:2,\npageOrder:0,\npageRange:,\npaperSize:{width:850,height:1100,kind:1},\nqualityFactor:2,\nrepeatColumnEnd:-1,\nrepeatColumnStart:-1,\nrepeatRowEnd:-1,\nrepeatRowStart:-1,\nrowEnd:24,\nrowStart:0,\nshowBorder:false,\nshowColumnHeader:0,\nshowGridLine:false,\nshowRowHeader:0,\nuseMax:true,\nwatermark:[],\nzoomFactor:1\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/configuring#print-attributes",children:"4D View Pro Print Attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-set-print-info",children:"VP SET PRINT INFO"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(296540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);