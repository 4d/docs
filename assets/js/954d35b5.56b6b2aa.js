"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20169"],{506608:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>h,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/method-set-attribute","title":"METHOD SET ATTRIBUTE","description":"METHOD SET ATTRIBUTE ( path ; attribType ; attribValue {; attribType2 ; attribValue2 ; ... ; attribTypeN ; attribValueN}{; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/method-set-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/method-set-attribute","permalink":"/docs/commands/method-set-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-set-attribute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-set-attribute","title":"METHOD SET ATTRIBUTE","slug":"/commands/method-set-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD SET ACCESS MODE","permalink":"/docs/commands/method-set-access-mode"},"next":{"title":"METHOD SET ATTRIBUTES","permalink":"/docs/commands/method-set-attributes"}}'),r=n("785893"),d=n("250065");let i={id:"method-set-attribute",title:"METHOD SET ATTRIBUTE",slug:"/commands/method-set-attribute",displayed_sidebar:"docs"},l=void 0,o={},h=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"METHOD SET ATTRIBUTE"})," ( ",(0,r.jsx)(t.em,{children:"path"})," ; ",(0,r.jsx)(t.em,{children:"attribType"})," ; ",(0,r.jsx)(t.em,{children:"attribValue"})," {; ",(0,r.jsx)(t.em,{children:"attribType2"})," ; ",(0,r.jsx)(t.em,{children:"attribValue2"})," ; ... ; ",(0,r.jsx)(t.em,{children:"attribTypeN"})," ; ",(0,r.jsx)(t.em,{children:"attribValueN"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"path"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Path of project method"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribType"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Type of attribute"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"attribValue"}),(0,r.jsx)(t.td,{children:"Boolean, Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"True = select attribute, False = deselect attributeor Folder name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"METHOD SET ATTRIBUTE"})," command sets the value(s) of the ",(0,r.jsx)(t.em,{children:"attribType"})," attribute(s) for the project method designated by the ",(0,r.jsx)(t.em,{children:"path"})," parameter. This command only works with project methods. If you pass an invalid ",(0,r.jsx)(t.em,{children:"path"}),", an error is generated."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"attribType"})," parameter, pass a value indicating the type of attribute to set. You can use the following constants, found in the ",(0,r.jsx)(t.em,{children:"Design Object Access"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute executed on server"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"8"}),(0,r.jsx)(t.td,{children:'Corresponds to the "Execute on server" option'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute folder name"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1024"}),(0,r.jsxs)(t.td,{children:['Name of folder for the method ("folder" attribute). When you pass this constant, you must pass a folder name in ',(0,r.jsx)(t.em,{children:"attribValue"}),":",(0,r.jsx)(t.br,{}),"if this name corresponds to a valid folder, the method is placed in this parent folder,if the folder does not exist, the command does not change anything at the parent folder level,if you pass an empty string, the method is placed at the root level."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute invisible"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:'Corresponds to the "Invisible" option'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute published SOAP"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:'Corresponds to the "Offered as a Web Service" option'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute published SQL"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"7"}),(0,r.jsx)(t.td,{children:'Corresponds to the "Available through SQL" option'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute published Web"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:'Corresponds to the "Available through 4D HTML tags and URLs (4DACTION...)" option'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute published WSDL"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"4"}),(0,r.jsx)(t.td,{children:'Corresponds to the "Published in WSDL" option'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Attribute shared"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"5"}),(0,r.jsx)(t.td,{children:'Corresponds to the "Shared by components and host database" option'})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"attribValue"})," parameter, you can pass either:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"True"})," to select the corresponding option or ",(0,r.jsx)(t.strong,{children:"False"})," to deselect it, or"]}),"\n",(0,r.jsxs)(t.li,{children:["a string (folder name) if you used the Attribute folder name constant in ",(0,r.jsx)(t.em,{children:"attribType"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can pass multiple ",(0,r.jsx)(t.em,{children:"attribType"}),";",(0,r.jsx)(t.em,{children:"attribValue"})," pairs in a single call."]}),"\n",(0,r.jsxs)(t.p,{children:["You can execute this command from a component, but in this case, you must pass the ",(0,r.jsx)(t.em,{children:"*"})," parameter because access to the component code is read-only. If you omit the ",(0,r.jsx)(t.em,{children:"*"})," parameter in this context, the error -9763 is generated."]}),"\n",(0,r.jsx)(t.h3,{id:""}),"\n",(0,r.jsx)(t.p,{children:"This command cannot be executed in compiled mode. When it is called in this mode, it will generate the error -9762."}),"\n",(0,r.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(t.p,{children:'Selection of the "Shared by components and host database" property for the "Choose dialog" project method:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0METHOD SET ATTRIBUTE("Choose dialog";Attribute shared;True)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(t.p,{children:"Setting several attribute/value pairs:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0METHOD SET ATTRIBUTE(vPath;Attribute invisible;vInvisible;Attribute published Web;v4DAction;Attribute published SOAP;vSoap;Attribute published WSDL;vWSDL;Attribute shared;vExported;Attribute published SQL;vSQL;Attribute executed on server;vRemote;Attribute folder name;vFolder;*)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Design Object Access"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/method-get-attribute",children:"METHOD Get attribute"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/commands/method-set-attributes",children:"METHOD SET ATTRIBUTES"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1192"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var s=n(667294);let r={},d=s.createContext(r);function i(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);