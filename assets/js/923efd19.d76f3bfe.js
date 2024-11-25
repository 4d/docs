"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32642"],{664593:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/new-data-key","title":"New data key","description":"New data key ( passPhrase ) : Object","source":"@site/versioned_docs/version-20-R7/commands-legacy/new-data-key.md","sourceDirName":"commands-legacy","slug":"/commands/new-data-key","permalink":"/docs/commands/new-data-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-data-key.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-data-key","title":"New data key","slug":"/commands/new-data-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Encrypt data file","permalink":"/docs/commands/encrypt-data-file"},"next":{"title":"Register data key","permalink":"/docs/commands/register-data-key"}}'),a=t("785893"),r=t("250065");let d={id:"new-data-key",title:"New data key",slug:"/commands/new-data-key",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"New data key"})," ( ",(0,a.jsx)(n.em,{children:"passPhrase"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"passPhrase"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Passphrase to use to generate the AES data encryption key"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Function result"}),(0,a.jsx)(n.td,{children:"Object"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Object containing the key (encodedKey property)"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.strong,{children:"New data key"})," command generates a binary data encryption key from the text passed in the ",(0,a.jsx)(n.em,{children:"passPhrase"})," parameter."]}),"\n",(0,a.jsxs)(n.p,{children:["The encoded key can be saved locally, in order to be stored on an removable device, like an USB key (see ",(0,a.jsx)(n.em,{children:"Storing data encryption keys in files"})," in the ",(0,a.jsx)(n.em,{children:"4D Design Reference"}),"). Connecting this device to the machine that hosts the encrypted database will automatically allow the user to access the encrypted data."]}),"\n",(0,a.jsxs)(n.p,{children:["You can pass any character in ",(0,a.jsx)(n.em,{children:"passPhrase"}),". The same ",(0,a.jsx)(n.em,{children:"passPhrase"})," will always produce the same data encryption key."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Returned value"})}),"\n",(0,a.jsx)(n.p,{children:"The returned object contains the following property:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Property"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Type"})}),(0,a.jsx)(n.th,{children:(0,a.jsx)(n.strong,{children:"Description"})})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"encodedKey"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsxs)(n.td,{children:["AES encryption key (SHA 256-bit) generated from the ",(0,a.jsx)(n.em,{children:"passPhrase"})]})]})})]}),"\n",(0,a.jsxs)(n.p,{children:["If an empty string was passed in ",(0,a.jsx)(n.em,{children:"passPhrase"}),", the command returns ",(0,a.jsx)(n.em,{children:"null"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"You want to save an encryption key in a .4DKeyChain file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $dataKey : Object\n\xa0var $passphrase : Text\n\xa0\n\xa0$passphrase:=Request("Enter the passphrase:")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0$dataKey:=New data key($passphrase)\n\xa0\xa0\xa0\xa0TEXT TO DOCUMENT("generatedKey.4DKeyChain";JSON Stringify($dataKey))\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://blog.4d.com/new-4d-commands-to-work-with-encrypted-data/",children:"4D Blog - New 4D commands to work with encrypted data"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/decrypt-data-blob",children:"Decrypt data BLOB"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/discover-data-key",children:"Discover data key"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/encrypt-data-blob",children:"Encrypt data BLOB"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/encrypt-data-file",children:"Encrypt data file"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/register-data-key",children:"Register data key"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var s=t(667294);let a={},r=s.createContext(a);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);