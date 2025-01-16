"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89942"],{650022:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/change-licenses","title":"CHANGE LICENSES","description":"CHANGE LICENSES","source":"@site/versioned_docs/version-20-R8/commands-legacy/change-licenses.md","sourceDirName":"commands-legacy","slug":"/commands/change-licenses","permalink":"/docs/commands/change-licenses","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fchange-licenses.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"change-licenses","title":"CHANGE LICENSES","slug":"/commands/change-licenses","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Licenses","permalink":"/docs/category/licenses"},"next":{"title":"Create deployment license","permalink":"/docs/commands/create-deployment-license"}}'),i=s("785893"),a=s("250065");let c={id:"change-licenses",title:"CHANGE LICENSES",slug:"/commands/change-licenses",displayed_sidebar:"docs"},r=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"CHANGE LICENSES"})}),"\n\n\n\n\n\n\n\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Does not require any parameters"}),(0,i.jsx)(n.th,{})]})})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The CHANGE LICENSES command displays the 4D License Manager dialog box."}),"\n",(0,i.jsx)(n.p,{children:"This command can only be used with 4D single-user applications and cannot be called from a component. When passwords are enabled, this command can only be executed by the Designer or Administrator; it does nothing when it is called by users that do not have appropriate access rights."}),"\n",(0,i.jsxs)(n.p,{children:["Using the License Manager dialog box, a user can activate plug-ins or the Web server on the machine where it is executed. In 4D, you can display this dialog box by selecting the ",(0,i.jsx)(n.strong,{children:"License Manager..."})," command in the ",(0,i.jsx)(n.strong,{children:"Help"})," menu."]}),"\n",(0,i.jsx)(n.p,{children:"CHANGE LICENSES is a convenient way to activate licenses and add expansion numbers in a compiled single-user 4D application distributed to customers. 4D developers or IS managers can use this command to distribute a 4D application and let users enter their license without sending an update of the application each time."}),"\n",(0,i.jsxs)(n.p,{children:["For more information about this dialog box, refer to the ",(0,i.jsx)(n.em,{children:"Installation and activation"})," section in the ",(0,i.jsx)(n.em,{children:"4D Installation Guide"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"In a custom configuration or preferences dialog box, you include a button whose associated method is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Object method for bLicense button\n\xa0CHANGE LICENSES\n"})}),"\n",(0,i.jsx)(n.p,{children:"This way a user can activate licenses without having to modify the database."}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/license-info",children:"License info"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/is-license-available",children:"Is license available"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"637"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Forbidden on the server"}),(0,i.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return c}});var t=s(667294);let i={},a=t.createContext(i);function c(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);