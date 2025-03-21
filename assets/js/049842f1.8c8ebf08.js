"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86809"],{919046:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/spell-checking","title":"SPELL CHECKING","description":"SPELL CHECKING","source":"@site/versioned_docs/version-20-R7/commands-legacy/spell-checking.md","sourceDirName":"commands-legacy","slug":"/commands/spell-checking","permalink":"/docs/20-R7/commands/spell-checking","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-checking.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"spell-checking","title":"SPELL CHECKING","slug":"/commands/spell-checking","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL CHECK TEXT","permalink":"/docs/20-R7/commands/spell-check-text"},"next":{"title":"SPELL Get current dictionary","permalink":"/docs/20-R7/commands/spell-get-current-dictionary"}}'),r=n("785893"),o=n("250065");let c={id:"spell-checking",title:"SPELL CHECKING",slug:"/commands/spell-checking",displayed_sidebar:"docs"},i=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"SPELL CHECKING"})}),"\n\n\n\n\n\n\n\n",(0,r.jsx)(t.table,{children:(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Does not require any parameters"}),(0,r.jsx)(t.th,{})]})})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"SPELL CHECKING"})," command triggers the spell check of the field or variable having the focus in the currently displayed form. The object checked must be of the string or text type."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"}),' If you want to trigger the spellcheck by clicking a button in the form, make sure that this button does not have the "Focusable" property set.']}),"\n",(0,r.jsxs)(t.p,{children:["Spell checking starts with the first word of the field or variable. If an unknown word is detected, the spell check dialog box appears (for more information, refer to the Design Reference manual of 4D). 4D uses the current dictionary (corresponding to the language of the application) unless you have used the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})," command."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Warning:"})," The ",(0,r.jsx)(t.strong,{children:"SPELL CHECKING"})," command affects the text that is being entered in the form, and not the associated data source (field or variable). This means that if you call this command from the On Data Change or On Losing Focus form events (not recommended), it will not affect the stored text since 4D has already assigned the entered text to the data source at this point. In this case, you need to assign the edited result to the data source yourself, using the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/get-edited-text",children:"Get edited text"})," command. For example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0If(Form event code=On Data Change)\n\xa0\xa0\xa0\xa0SPELL CHECKING\n\xa0\xa0\xa0\xa0theVariable:=Get edited text\n\xa0End if\n"})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/spell-check-text",children:"SPELL CHECK TEXT"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/spell-set-current-dictionary",children:"SPELL SET CURRENT DICTIONARY"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"900"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return c}});var s=n(667294);let r={},o=s.createContext(r);function c(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);