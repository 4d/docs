"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40805"],{185692:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-table-theme","title":"VP SET TABLE THEME","description":"History","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-set-table-theme.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-table-theme","permalink":"/docs/ViewPro/commands/vp-set-table-theme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-table-theme.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-table-theme","title":"VP SET TABLE THEME"},"sidebar":"docs","previous":{"title":"VP SET TABLE COLUMN ATTRIBUTES","permalink":"/docs/ViewPro/commands/vp-set-table-column-attributes"},"next":{"title":"VP SET TEXT VALUE","permalink":"/docs/ViewPro/commands/vp-set-text-value"}}'),r=t("785893"),l=t("250065");let a={id:"vp-set-table-theme",title:"VP SET TABLE THEME"},i=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Changes"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R8"}),(0,r.jsx)(n.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET TABLE THEME"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,r.jsx)(n.em,{children:"options"})," : cs.ViewPro.TableTheme {; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Table name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"options"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Table theme properties to modify"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET TABLE THEME"})," command modifies the current theme of the ",(0,r.jsx)(n.em,{children:"tableName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area and in ",(0,r.jsx)(n.em,{children:"tableName"}),", the name of the table to modify."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"options"})," parameter, pass an object of the ",(0,r.jsxs)(n.a,{href:"/docs/ViewPro/classes#tabletheme",children:[(0,r.jsx)(n.code,{children:"cs.ViewPro.TableTheme"})," class"]})," that contains the theme properties to modify."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If no index is specified or if you pass -1, the command applies to the current sheet."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"You want to set a predefined theme to a table:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n$param.theme:="medium2"\nVP SET TABLE THEME("ViewProArea"; "myTable"; $param)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"You want to have this alternate column rendering:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(873700).Z+"",width:"647",height:"202"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n\n// Enable the band column rendering\n$param.bandColumns:=True\n$param.bandRows:=False\n\n// Create the theme object with header and column styles\n$param.theme:=cs.ViewPro.TableThemeOptions.new()\n\nvar $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle\n\n$styleHeader:=cs.ViewPro.TableStyle.new()\n$styleHeader.backColor:="Gold"\n$styleHeader.foreColor:="#03045E"\n$param.theme.headerRowStyle:=$styleHeader\n\n$styleColumn1:=cs.ViewPro.TableStyle.new()\n$styleColumn1.backColor:="SkyBlue"\n$styleColumn1.foreColor:="#03045E"\n$param.theme.firstColumnStripStyle:=$styleColumn1\n\n$styleColumn2:=cs.ViewPro.TableStyle.new()\n$styleColumn2.backColor:="LightCyan"\n$styleColumn2.foreColor:="#03045E"\n$param.theme.secondColumnStripStyle:=$styleColumn2\n\nVP SET TABLE THEME("ViewProArea"; "myTable"; $param)\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-table-theme",children:"VP Get table theme"})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},873700:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/col-bandering-f0c15f4b037ddc2207b496243af3ba28.png"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);