"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65867"],{450898:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"commands-legacy/sax-open-xml-element-arrays","title":"SAX OPEN XML ELEMENT ARRAYS","description":"SAX OPEN XML ELEMENT ARRAYS ( document ; tag {; attribNamesArray ; attribValuesArray} {; attribNamesArray2 ; attribValuesArray2 ; ... ; attribNamesArrayN ; attribValuesArrayN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/sax-open-xml-element-arrays.md","sourceDirName":"commands-legacy","slug":"/commands/sax-open-xml-element-arrays","permalink":"/docs/commands/sax-open-xml-element-arrays","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsax-open-xml-element-arrays.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sax-open-xml-element-arrays","title":"SAX OPEN XML ELEMENT ARRAYS","slug":"/commands/sax-open-xml-element-arrays","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SAX OPEN XML ELEMENT","permalink":"/docs/commands/sax-open-xml-element"},"next":{"title":"SAX SET XML DECLARATION","permalink":"/docs/commands/sax-set-xml-declaration"}}'),s=r("785893"),a=r("250065");let l={id:"sax-open-xml-element-arrays",title:"SAX OPEN XML ELEMENT ARRAYS",slug:"/commands/sax-open-xml-element-arrays",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," ( ",(0,s.jsx)(n.em,{children:"document"})," ; ",(0,s.jsx)(n.em,{children:"tag"})," {; ",(0,s.jsx)(n.em,{children:"attribNamesArray"})," ; ",(0,s.jsx)(n.em,{children:"attribValuesArray"}),"} {; ",(0,s.jsx)(n.em,{children:"attribNamesArray2"})," ; ",(0,s.jsx)(n.em,{children:"attribValuesArray2"})," ; ... ; ",(0,s.jsx)(n.em,{children:"attribNamesArrayN"})," ; ",(0,s.jsx)(n.em,{children:"attribValuesArrayN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"document"}),(0,s.jsx)(n.td,{children:"Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of open document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tag"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name of element to open"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"attribNamesArray"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array of attribute names"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"attribValuesArray"}),(0,s.jsx)(n.td,{children:"Text array, Array integer, Date array, Real array, Picture array, Boolean array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array of attribute values"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," command is used to add a new element in the XML document whose reference is passed in ",(0,s.jsx)(n.em,{children:"document"})," as well as, optionally, attributes and their values in the form of arrays."]}),"\n",(0,s.jsxs)(n.p,{children:["Except for the support of arrays (see below), this command is identical to ",(0,s.jsx)(n.a,{href:"/docs/commands/sax-open-xml-element",children:"SAX OPEN XML ELEMENT"}),". Please refer to the description of this command for more information about its operation."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," accepts arrays of the date, number, Boolean and picture type as ",(0,s.jsx)(n.em,{children:"attribValuesArray"})," parameter(s). 4D automatically carries out the necessary conversions; you can configure these conversions using the ",(0,s.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["Optionally, the ",(0,s.jsx)(n.strong,{children:"SAX OPEN XML ELEMENT ARRAYS"})," command can be used to pass pairs of attributes and attribute values in the form of arrays in the ",(0,s.jsx)(n.em,{children:"attribNamesArray"})," and ",(0,s.jsx)(n.em,{children:"attribValuesArray"})," parameters."]}),"\n",(0,s.jsx)(n.p,{children:"The arrays must have been created previously and operate in attribute/attribute value pairs. You can pass as many pairs of arrays, and as many items in each pair, as you want."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY STRING(80;tAttrNames;2)\n\xa0ARRAY STRING(80;tAttrValues;2)\n\xa0vElement:="Book"\n\xa0tAttrNames{1}:="Font"\n\xa0tAttrValues{1}:="Arial"\n\xa0tAttrNames{2}:="Style"\n\xa0tAttrValues{2}:="Bold"\n\xa0SAX OPEN XML ELEMENT ARRAYS($DocRef;vElement;tAttrNames;tAttrValues)\n'})}),"\n",(0,s.jsx)(n.p,{children:"... will write in the document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-XML",children:'<Book Font="Arial" Style="Bold">\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/sax-close-xml-element",children:"SAX CLOSE XML ELEMENT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/sax-open-xml-element",children:"SAX OPEN XML ELEMENT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/xml-set-options",children:"XML SET OPTIONS"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"921"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(667294);let s={},a=t.createContext(s);function l(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);