"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97532"],{127781:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/open-font-picker","title":"OPEN FONT PICKER","description":"OPEN FONT PICKER","source":"@site/versioned_docs/version-20-R7/commands-legacy/open-font-picker.md","sourceDirName":"commands-legacy","slug":"/commands/open-font-picker","permalink":"/docs/20-R7/commands/open-font-picker","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fopen-font-picker.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"open-font-picker","title":"OPEN FONT PICKER","slug":"/commands/open-font-picker","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OPEN COLOR PICKER","permalink":"/docs/20-R7/commands/open-color-picker"},"next":{"title":"SCREEN COORDINATES","permalink":"/docs/20-R7/commands/screen-coordinates"}}'),s=t("785893"),r=t("250065");let i={id:"open-font-picker",title:"OPEN FONT PICKER",slug:"/commands/open-font-picker",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"OPEN FONT PICKER"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(n.table,{children:(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Does not require any parameters"}),(0,s.jsx)(n.th,{})]})})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"OPEN FONT PICKER"})," command displays the system font picker dialog box."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This is a modal dialog box under Windows but not under OS X."]}),"\n",(0,s.jsxs)(n.p,{children:['When the user selects a font and/or a style and validates the dialog box, the changes are applied to the current text selection in the object with the focus, if the "Allow Font/Color Picker" property is checked for this object (see the ',(0,s.jsx)(n.em,{children:"Design Reference"})," manual). Otherwise, the command does nothing."]}),"\n",(0,s.jsx)(n.p,{children:"If the font was changed, the On After Edit form event is generated for the object ."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"In a form, you want to add a button to display the font picker in order to allow users to modify the font or style of a Text variable area. Make sure that:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'the Text variable has the "Allow font/color picker" property checked .'}),"\n",(0,s.jsx)(n.li,{children:'the "Focusable" property for the button has been unchecked.'}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here is the button code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO OBJECT(textVar)\xa0//gives the variable the focus\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OPEN FONT PICKER\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/open-color-picker",children:"OPEN COLOR PICKER"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1303"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var o=t(667294);let s={},r=o.createContext(s);function i(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);