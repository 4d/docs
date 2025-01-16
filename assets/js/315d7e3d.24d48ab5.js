"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14824"],{753381:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/spell-set-current-dictionary","title":"SPELL SET CURRENT DICTIONARY","description":"SPELL SET CURRENT DICTIONARY ( dictionary )","source":"@site/versioned_docs/version-20-R7/commands-legacy/spell-set-current-dictionary.md","sourceDirName":"commands-legacy","slug":"/commands/spell-set-current-dictionary","permalink":"/docs/20-R7/commands/spell-set-current-dictionary","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-set-current-dictionary.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"spell-set-current-dictionary","title":"SPELL SET CURRENT DICTIONARY","slug":"/commands/spell-set-current-dictionary","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SPELL GET DICTIONARY LIST","permalink":"/docs/20-R7/commands/spell-get-dictionary-list"},"next":{"title":"String","permalink":"/docs/20-R7/category/string"}}'),s=i("785893"),r=i("250065");let c={id:"spell-set-current-dictionary",title:"SPELL SET CURRENT DICTIONARY",slug:"/commands/spell-set-current-dictionary",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SPELL SET CURRENT DICTIONARY"})," ( ",(0,s.jsx)(n.em,{children:"dictionary"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dictionary"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"ID, Name, or Language code of dictionary to use for spell-check"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SPELL SET CURRENT DICTIONARY"})," command causes the replacement of the current dictionary with the one specified by the ",(0,s.jsx)(n.em,{children:"dictionary"})," parameter. The current dictionary is used for the built-in spell-check feature in 4D (for more information, refer to the 4D ",(0,s.jsx)(n.em,{children:"Design Reference"})," manual) as well as the one in the 4D Write Pro. The modification of the current dictionary is reflected immediately in all the processes of the database for the session, as well as in the 4D Write Pro areas."]}),"\n",(0,s.jsx)(n.p,{children:"4D uses:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Windows - the Hunspell dictionary corresponding to the application language,"}),"\n",(0,s.jsx)(n.li,{children:"Mac - the native spell checker."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," For Mac, you can use the Hunspell dictionary via the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command. For more information, see the ",(0,s.jsx)(n.em,{children:"Spellcheck configuration"})," section in the ",(0,s.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.em,{children:"dictionary"})," parameter to change the dictionary. You can pass either:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a Hunspell dictionary ID number (returned by the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/spell-get-dictionary-list",children:"SPELL GET DICTIONARY LIST"})," command),"]}),"\n",(0,s.jsx)(n.li,{children:"a Hunspell dictionary name (corresponding to the file name of the Hunspell dictionary, with or without its extension),"}),"\n",(0,s.jsx)(n.li,{children:'a BCP 47, ISO 639-1 or ISO 639-2 language code. For example, with the BCP 47 language code "en-US" indicates American English and "en-GB" specifies British English. These codes are redirected internally to the corresponding current dictionary (Hunspell or native Mac).'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Compatibility note:"}),' In previous versions of 4D, "Cordial" dictionaries were supported. For compatibility, it is still possible to pass a "Cordial" dictionary number in the ',(0,s.jsx)(n.em,{children:"dictionary"}),' parameter (value or constant from the "',(0,s.jsx)(n.em,{children:"Dictionaries"}),'" theme). In this case, however, the dictionary is redirected internally to an equivalent Hunspell dictionary (or the native Mac dictionary).']}),"\n",(0,s.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"dictionary"})," is loaded correctly, the system variable OK is set to 1; otherwise, it is set to 0 and an error is returned."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:'Loading of the "fr-classic" dictionary found in the Hunspell folder:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0SPELL SET CURRENT DICTIONARY("fr-classic")\n\xa0\xa0// SPELL SET CURRENT DICTIONARY ("FR-classic.dic") is valid\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/spell-checking",children:"SPELL CHECKING"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/spell-get-current-dictionary",children:"SPELL Get current dictionary"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/spell-get-dictionary-list",children:"SPELL GET DICTIONARY LIST"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"904"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return c}});var t=i(667294);let s={},r=t.createContext(s);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);