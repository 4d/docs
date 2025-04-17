"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88904"],{912142:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/change-password","title":"CHANGE PASSWORD","description":"CHANGE PASSWORD ( password )","source":"@site/versioned_docs/version-20-R8/commands-legacy/change-password.md","sourceDirName":"commands-legacy","slug":"/commands/change-password","permalink":"/docs/20-R8/commands/change-password","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-password.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"change-password","title":"CHANGE PASSWORD","slug":"/commands/change-password","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CHANGE CURRENT USER","permalink":"/docs/20-R8/commands/change-current-user"},"next":{"title":"Current user","permalink":"/docs/20-R8/commands/current-user"}}'),t=s("785893"),d=s("250065");let a={id:"change-password",title:"CHANGE PASSWORD",slug:"/commands/change-password",displayed_sidebar:"docs"},o=void 0,c={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CHANGE PASSWORD"})," ( ",(0,t.jsx)(n.em,{children:"password"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"password"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"New password"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["CHANGE PASSWORD changes the password of the current user. This command replaces the current password with the new password you pass in ",(0,t.jsx)(n.em,{children:"password"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Warning:"})," Password are case-sensitive."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following example allows the user to change his or her password."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0CHANGE CURRENT USER\xa0// Present user with password dialog\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$pw1:=Request("Enter new password for "+Current user)\n\xa0\xa0// The password should be at least five characters long\n\xa0\xa0\xa0\xa0If(((OK=1)&($pw1#""))&(Length($pw1)>5))\n\xa0\xa0// Make sure the password has been entered correctly\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pw2:=Request("Enter password again")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If((OK=1)&($pw1=$pw2))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CHANGE PASSWORD($pw2)\xa0// Change the password\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/change-current-user",children:"CHANGE CURRENT USER"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/object-set-font",children:"OBJECT SET FONT"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"186"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var r=s(667294);let t={},d=r.createContext(t);function a(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);