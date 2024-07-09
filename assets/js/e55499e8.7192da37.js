/*! For license information please see e55499e8.7192da37.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30227],{515783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var r=n(474848),s=n(28453);const a={id:"vp-get-table-theme",title:"VP Get table theme"},l=void 0,d={id:"ViewPro/commands/vp-get-table-theme",title:"VP Get table theme",description:"History",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-get-table-theme.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-table-theme",permalink:"/docs/ViewPro/commands/vp-get-table-theme",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-table-theme.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-table-theme",title:"VP Get table theme"},sidebar:"docs",previous:{title:"VP Get table range",permalink:"/docs/ViewPro/commands/vp-get-table-range"},next:{title:"VP Get tables",permalink:"/docs/ViewPro/commands/vp-get-tables"}},o={},i=[{value:"Description",id:"Description",level:4},{value:"Example",id:"Example",level:4},{value:"See also",id:"See-also",level:4}];function c(e){const t={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.details,{children:[(0,r.jsx)(t.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Release"}),(0,r.jsx)(t.th,{children:"Changes"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"19 R8"}),(0,r.jsx)(t.td,{children:"Added"})]})})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"VP Get table theme"})," ( ",(0,r.jsx)(t.em,{children:"vpAreaName"})," : Text ; ",(0,r.jsx)(t.em,{children:"tableName"})," : Text ) : cs.ViewPro.TableTheme"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vpAreaName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tableName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"->"}),(0,r.jsx)(t.td,{children:"Table name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Result"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})}),(0,r.jsx)(t.td,{children:"<-"}),(0,r.jsx)(t.td,{children:"Current table theme property values"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"VP Get table theme"})," command returns the current theme propertie values of the ",(0,r.jsx)(t.em,{children:"tableName"}),". A table theme can be set using the ",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-create-table",children:(0,r.jsx)(t.code,{children:"VP CREATE TABLE"})})," or ",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-table-theme",children:(0,r.jsx)(t.code,{children:"VP SET TABLE THEME"})})," commands, or through the interface."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area and in ",(0,r.jsx)(t.em,{children:"tableName"}),", the name of the table."]}),"\n",(0,r.jsxs)(t.p,{children:["The command returns an object of the ",(0,r.jsx)(t.a,{href:"/docs/ViewPro/classes#tabletheme",children:"cs.ViewPro.TableTheme"})," class with properties and values that describe the current table theme."]}),"\n",(0,r.jsx)(t.h4,{id:"Example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["The command returns a full ",(0,r.jsx)(t.code,{children:"theme"})," object even if a ",(0,r.jsx)(t.a,{href:"https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes",children:"native SpreadJS theme"})," name was used to define the theme."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'var $param : cs.ViewPro.TableTheme\n$param:=cs.ViewPro.TableTheme.new()\n$param.theme:="dark10" //use of a native theme name\n\nVP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)\n$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")\n$result:=Asserted(Value type($vTheme.theme)=Is object) //true\n'})}),"\n",(0,r.jsx)(t.h4,{id:"See-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-table-theme",children:"VP SET TABLE THEME"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,c=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:i,ref:c,props:a,_owner:d.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(296540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);