"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37847"],{726196:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/get-application-color-scheme","title":"Get application color scheme","description":"Get application color scheme {( * )} : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-application-color-scheme.md","sourceDirName":"commands-legacy","slug":"/commands/get-application-color-scheme","permalink":"/docs/commands/get-application-color-scheme","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-application-color-scheme.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-application-color-scheme","title":"Get application color scheme","slug":"/commands/get-application-color-scheme","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Focus object","permalink":"/docs/commands/focus-object"},"next":{"title":"GET FIELD TITLES","permalink":"/docs/commands/get-field-titles"}}'),c=t("785893"),o=t("250065");let r={id:"get-application-color-scheme",title:"Get application color scheme",slug:"/commands/get-application-color-scheme",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Get application color scheme"})," {( * )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"*"}),(0,c.jsx)(n.td,{children:"Operator"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Returns color scheme of host database"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Function result"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2190"}),(0,c.jsx)(n.td,{children:"Current application color scheme"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.strong,{children:"Get application color scheme"})," command returns the name of the actual color scheme in use at the application level."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"Note:"}),' On Windows, this command always returns "light".']}),"\n",(0,c.jsx)(n.p,{children:"The actual color scheme is defined by:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["a call to the ",(0,c.jsx)(n.a,{href:"/docs/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," command;"]}),"\n",(0,c.jsxs)(n.li,{children:["if ",(0,c.jsx)(n.a,{href:"/docs/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"}),' was not called or called with "inherited" parameter value, the Settings (host database Settings in case of a component);']}),"\n",(0,c.jsx)(n.li,{children:'if settings set to "inherited", the OS user preferences.'}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.em,{children:"*"})," parameter is useful when the command is called from a component: when it is passed, the command returns the color scheme of the host database."]}),"\n",(0,c.jsxs)(n.p,{children:["Please refer to the ",(0,c.jsx)(n.a,{href:"/docs/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})," command description for details about color scheme names."]}),"\n",(0,c.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:"\xa0var $colorScheme : Text\n\xa0\n\xa0\xa0// Retrieve the colorScheme of the host database\n\xa0$colorScheme:=Get application color scheme(*)\n"})}),"\n",(0,c.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/commands/form-get-color-scheme",children:"FORM Get color scheme"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/commands/set-application-color-scheme",children:"SET APPLICATION COLOR SCHEME"})]}),"\n",(0,c.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Command number"}),(0,c.jsx)(n.td,{children:"1763"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Thread safe"}),(0,c.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let c={},o=s.createContext(c);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);