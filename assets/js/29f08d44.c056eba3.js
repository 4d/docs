"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92012"],{288755:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-group-access","title":"SET GROUP ACCESS","description":"SET GROUP ACCESS {( groups )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-group-access.md","sourceDirName":"commands-legacy","slug":"/commands/set-group-access","permalink":"/docs/commands/set-group-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-group-access.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-group-access","title":"SET GROUP ACCESS","slug":"/commands/set-group-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is user deleted","permalink":"/docs/commands/is-user-deleted"},"next":{"title":"Set group properties","permalink":"/docs/commands/set-group-properties"}}'),t=n("785893"),o=n("250065");let c={id:"set-group-access",title:"SET GROUP ACCESS",slug:"/commands/set-group-access",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET GROUP ACCESS"})," {( ",(0,t.jsx)(s.em,{children:"groups"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"groups"}),(0,t.jsx)(s.td,{children:"Collection"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Name of group(s) to which the 4D user account must belong during the session"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"SET GROUP ACCESS"})," command modifies the memberships of the 4D user account for the current session. It resets any former group membership and sets the new memberships to the listed ",(0,t.jsx)(s.em,{children:"groups"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The scope of this command is the current session. Calling ",(0,t.jsx)(s.a,{href:"/docs/commands/change-current-user",children:"CHANGE CURRENT USER"})," afterwards for example would reset defined memberships."]}),"\n",(0,t.jsx)(s.li,{children:"This command can only be called from 4D remote or 4D single-user applications. It is not allowed on 4D Server."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Pass in the ",(0,t.jsx)(s.em,{children:"groups"})," parameter a collection of existing group name(s) to which the 4D user account must belong (if a group name does not exist, it is ignored). If you pass an empty collection, the 4D user account will no longer belong to any group."]}),"\n",(0,t.jsxs)(s.p,{children:["If you omit the ",(0,t.jsx)(s.em,{children:"groups"})," parameter, the memberships of the 4D user account are reset to the group memberships stored on disk."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"}),' When a group membership provides access to a "serialized" feature (e.g. a plug-in), a corresponding license is used and will remain attached to the 4D user account until the end of the session, even if the ',(0,t.jsx)(s.strong,{children:"SET GROUP ACCESS"})," command is called and group membership cancelled."]}),"\n",(0,t.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:'You want to promote the current user to the "admin" and "plugins" groups for the session:'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0$groups:=New collection("admin";"plugins")\n\xa0SET GROUP ACCESS($groups)\n'})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/get-group-access",children:"Get group access"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/get-plugin-access",children:"Get plugin access"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/set-plugin-access",children:"SET PLUGIN ACCESS"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/set-user-alias",children:"SET USER ALIAS"})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"1737"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2713"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Forbidden on the server"}),(0,t.jsx)(s.td,{})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return c}});var r=n(667294);let t={},o=r.createContext(t);function c(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);