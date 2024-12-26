"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["13013"],{27797:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/generate-digest","title":"Generate digest","description":"Generate digest ( param ; algorithm {; *} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/generate-digest.md","sourceDirName":"commands-legacy","slug":"/commands/generate-digest","permalink":"/docs/commands/generate-digest","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgenerate-digest.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"generate-digest","title":"Generate digest","slug":"/commands/generate-digest","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Choose","permalink":"/docs/commands/choose"},"next":{"title":"Generate password hash","permalink":"/docs/commands/generate-password-hash"}}'),r=s("785893"),d=s("250065");let i={id:"generate-digest",title:"Generate digest",slug:"/commands/generate-digest",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Generate digest"})," ( ",(0,r.jsx)(n.em,{children:"param"})," ; ",(0,r.jsx)(n.em,{children:"algorithm"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"param"}),(0,r.jsx)(n.td,{children:"Blob, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Blob or text for which to get digest key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"algorithm"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Algorithm used to return key: 0 = MD5 Digest, 1 = SHA1 Digest, 2 = 4D digest, 3 = SHA-256 digest, 4 = SHA-512 digest"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Encode digest in Base64URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Value of digest key"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Generate digest"})," command returns the digest key of a BLOB or text after application of an encryption algorithm."]}),"\n",(0,r.jsxs)(n.p,{children:["Pass a Text or BLOB field or variable in the ",(0,r.jsx)(n.em,{children:"param"})," parameter. The ",(0,r.jsx)(n.strong,{children:"Generate digest"})," function returns the digest key as a string."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.em,{children:"algorithm"})," parameter, pass a value designating which hash function to use. Use one of the following constants, found in the ",(0,r.jsx)(n.em,{children:"Digest Type"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"_o_4D REST digest"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"*** Obsolete constant ***"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MD5 digest"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Message Digest 5"})," algorithm. A series of 128 bits returned as a string of 32 hexadecimal characters."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SHA1 digest"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Secure Hash 1"})," algorithm. A series of 160 bits returned as a string of 40 hexadecimal characters."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SHA256 digest"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"(SHA-2 family) SHA-256 is a series of 256 bits returned as a string of 64 hexadecimal characters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SHA512 digest"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"(SHA-2 family) SHA-512 is a series of 512 bits returned as a string of 128 hexadecimal characters."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," It is not recommended to use MD5 and SHA algorithms to handle passwords; if you need to check passwords, you are advised to use ",(0,r.jsx)(n.a,{href:"/docs/commands/generate-password-hash",children:"Generate password hash"})," and ",(0,r.jsx)(n.a,{href:"/docs/commands/verify-password-hash",children:"Verify password hash"})," commands."]}),"\n",(0,r.jsxs)(n.p,{children:["By default if the ",(0,r.jsx)(n.em,{children:"*"})," parameter is omitted, the returned digest is encoded in hexadecimal. Pass the ",(0,r.jsx)(n.em,{children:"*"})," parameter if you want it to be encoded in Base64URL."]}),"\n",(0,r.jsx)(n.p,{children:"The value returned for the same object is the same on all the platforms (macOS/Windows). The calculation is performed based on the representation in UTF-8 of the text passed in the parameter."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' If you use the command with an empty text/BLOB, it does not return void but a string value (for example "d41d8cd98f00b204e9800998ecf8427e" for MD5).']}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"This example compares two images using the MD5 algorithm:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict1;$vPict2 : Picture\n\xa0var $FirstBlob;$SecondBlob : Blob\n\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo1.png")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0READ PICTURE FILE("c:\\\\myPhotos\\\\photo2.png")\n\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict1;$FirstBlob;".png")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PICTURE TO BLOB($vPict2;$SecondBlob;".png")\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_1:=Generate digest($FirstBlob;MD5 digest)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MD5_2:=Generate digest($SecondBlob;MD5 digest)\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($MD5_1#$MD5_2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("These two images are different.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("These two images are identical.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"These examples illustrate how to retrieve the digest key of a text:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)\n\xa0\xa0// $key1 is "e4d909c290d0fb1ca068ffaddf22cbd0"\n\xa0$key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)\n\xa0\xa0// $key2 is "408d94384216f890ff7a0c3528e8bed1e0b01621"\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/base64-decode",children:"BASE64 DECODE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/base64-encode",children:"BASE64 ENCODE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/generate-password-hash",children:"Generate password hash"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Secured Protocol"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/web-validate-digest",children:"WEB Validate digest"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1147"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let r={},d=t.createContext(r);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);