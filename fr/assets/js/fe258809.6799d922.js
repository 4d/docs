"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92347"],{347231:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"aikit/Classes/openaivision","title":"OpenAIVision","description":"Helper for vision stuff.","source":"@site/versioned_docs/version-20-R9/aikit/Classes/OpenAIVision.md","sourceDirName":"aikit/Classes","slug":"/aikit/Classes/openaivision","permalink":"/docs/fr/aikit/Classes/openaivision","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20aikit%2FClasses%2FOpenAIVision.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"openaivision","title":"OpenAIVision"},"sidebar":"docs","previous":{"title":"OpenAIResult","permalink":"/docs/fr/aikit/Classes/openairesult"},"next":{"title":"OpenAIVisionHelper","permalink":"/docs/fr/aikit/Classes/openaivisionhelper"}}'),r=i("785893"),l=i("250065");let t={id:"openaivision",title:"OpenAIVision"},a="OpenAIVision",d={},c=[{value:"Functions",id:"functions",level:2},{value:"create()",id:"create",level:3},{value:"Example Usage",id:"example-usage",level:4},{value:"fromFile()",id:"fromfile",level:3},{value:"Example Usage",id:"example-usage-1",level:4},{value:"fromPicture()",id:"frompicture",level:3},{value:"Example Usage",id:"example-usage-2",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"openaivision",children:"OpenAIVision"})}),"\n",(0,r.jsx)(n.p,{children:"Helper for vision stuff."}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"create",children:"create()"}),"\n",(0,r.jsxs)(n.p,{children:["*",(0,r.jsx)(n.em,{children:"create"}),"(",(0,r.jsx)(n.em,{children:"imageURL"})," : Text) : OpenAIVisionHelper"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"imageURL"})}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"The URL of the image to analyze."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/aikit/Classes/openaivisionhelper",children:"OpenAIVisionHelper"})}),(0,r.jsx)(n.td,{children:"A helper instance for analyzing the image."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $helper:=$client.chat.vision.create("http://example.com/image.jpg")\nvar $result:=$helper.prompt("Could you describe it?")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"fromfile",children:"fromFile()"}),"\n",(0,r.jsxs)(n.p,{children:["*",(0,r.jsx)(n.em,{children:"fromFile"}),"(",(0,r.jsx)(n.em,{children:"imageFile"})," : 4D.File) : OpenAIVisionHelper"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"imageFile"})}),(0,r.jsx)(n.td,{children:"4D.File"}),(0,r.jsx)(n.td,{children:"The image file to analyze."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/aikit/Classes/openaivisionhelper",children:"OpenAIVisionHelper"})}),(0,r.jsx)(n.td,{children:"A helper instance for analyzing the image."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-usage-1",children:"Example Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $helper:=$client.chat.vision.fromFile(Folder(fk resource foldres).file("image.png"))\nvar $result:=$helper.prompt("Could you describe it?")\n'})}),"\n",(0,r.jsx)(n.h3,{id:"frompicture",children:"fromPicture()"}),"\n",(0,r.jsxs)(n.p,{children:["*",(0,r.jsx)(n.em,{children:"fromPicture"}),"(",(0,r.jsx)(n.em,{children:"image"})," : Picture) : OpenAIVisionHelper"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"image"})}),(0,r.jsx)(n.td,{children:"Picture"}),(0,r.jsx)(n.td,{children:"The image to analyze."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/aikit/Classes/openaivisionhelper",children:"OpenAIVisionHelper"})}),(0,r.jsx)(n.td,{children:"A helper instance for analyzing the image."})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example-usage-2",children:"Example Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $helper:=$client.chat.vision.fromPicture($image)\nvar $result:=$helper.prompt("Could you describe it?")\n'})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return t}});var s=i(667294);let r={},l=s.createContext(r);function t(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);