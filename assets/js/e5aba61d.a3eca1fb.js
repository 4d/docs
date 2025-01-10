"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99338"],{599671:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-get-help-tip","title":"OBJECT Get help tip","description":"OBJECT Get help tip ( { ;} object* ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-help-tip.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-help-tip","permalink":"/docs/commands/object-get-help-tip","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-help-tip.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-help-tip","title":"OBJECT Get help tip","slug":"/commands/object-get-help-tip","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get format","permalink":"/docs/commands/object-get-format"},"next":{"title":"OBJECT Get horizontal alignment","permalink":"/docs/commands/object-get-horizontal-alignment"}}'),i=n("785893"),r=n("250065");let c={id:"object-get-help-tip",title:"OBJECT Get help tip",slug:"/commands/object-get-help-tip",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"OBJECT Get help tip"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Help message of object"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"OBJECT Get help tip"})," command returns the help message associated with the object(s) designated by the ",(0,i.jsx)(t.em,{children:"object"})," and ",(0,i.jsx)(t.em,{children:"*"})," parameters for the current process."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,i.jsxs)(t.p,{children:["The command returns the current help message associated with the object, as it is defined in Design mode or for the process using the ",(0,i.jsx)(t.a,{href:"/docs/commands/object-set-help-tip",children:"OBJECT SET HELP TIP"})," command. The string returned shows the message as it appears when the form is executed. If it contains variable items (xliff ",(0,i.jsx)(t.em,{children:"resname"})," or 4D references), they are interpreted according to the context."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"The title of a picture button is stored as a help message. This title is stored in an xliff file and differs according to the current language of the application:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0OBJECT SET HELP TIP(*;"button1";":xliff:btn_discover")\n\xa0$helpmessage:=OBJECT Get help tip(*;"button1")\n\xa0\xa0// $helpmessage contains for example "D\xe9couvrir" with a French 4D and "Discover" with an English 4D.\n'})}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/commands/object-set-help-tip",children:"OBJECT SET HELP TIP"})}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1182"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return c}});var s=n(667294);let i={},r=s.createContext(i);function c(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);