"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4193"],{825762:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-table-theme","title":"VP Get table theme","description":"History","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-get-table-theme.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-table-theme","permalink":"/docs/20-R6/ViewPro/commands/vp-get-table-theme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-theme.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-table-theme","title":"VP Get table theme"},"sidebar":"docs","previous":{"title":"VP Get table range","permalink":"/docs/20-R6/ViewPro/commands/vp-get-table-range"},"next":{"title":"VP Get tables","permalink":"/docs/20-R6/ViewPro/commands/vp-get-tables"}}'),r=n("785893"),a=n("250065");let d={id:"vp-get-table-theme",title:"VP Get table theme"},l=void 0,i={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let t={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.details,{children:[(0,r.jsx)(t.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Release"}),(0,r.jsx)(t.th,{children:"Changes"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"19 R8"}),(0,r.jsx)(t.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Get table theme"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(t.em,{children:"tableName"})," : Text {; ",(0,r.jsx)(t.em,{children:"sheet"})," : Integer } ) : cs.ViewPro.TableTheme"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tableName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Table name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sheet"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Result"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/20-R6/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"Current table theme property values"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP Get table theme"})," command returns the current theme propertie values of the ",(0,r.jsx)(t.em,{children:"tableName"}),". A table theme can be set using the ",(0,r.jsx)(t.a,{href:"/docs/20-R6/ViewPro/commands/vp-create-table",children:(0,r.jsx)(t.code,{children:"VP CREATE TABLE"})})," or ",(0,r.jsx)(t.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-table-theme",children:(0,r.jsx)(t.code,{children:"VP SET TABLE THEME"})})," commands, or through the interface."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area and in ",(0,r.jsx)(t.em,{children:"tableName"}),", the name of the table."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"sheet"}),", pass the index of the target sheet. If no index is specified or if you pass -1, the command applies to the current sheet."]}),"\n",(0,r.jsxs)(t.p,{children:["The command returns an object of the ",(0,r.jsx)(t.a,{href:"/docs/20-R6/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})," class with properties and values that describe the current table theme."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["The command returns a full ",(0,r.jsx)(t.code,{children:"theme"})," object even if a ",(0,r.jsx)(t.a,{href:"https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes",children:"native SpreadJS theme"})," name was used to define the theme."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n$param.theme:="dark10" //use of a native theme name\n\nVP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)\n$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")\n$result:=Asserted(Value type($vTheme.theme)=Is object) //true\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R6/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-table-theme",children:"VP SET TABLE THEME"})]})]})}function o(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var s=n(667294);let r={},a=s.createContext(r);function d(e){let t=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);