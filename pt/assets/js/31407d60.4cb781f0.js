"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32847"],{816037:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"aikit/Classes/openaiimage","title":"OpenAIImage","description":"The OpenAIImage class represents an image generated by the OpenAI API. It provides properties for accessing the generated image in different formats and methods for converting this image to different types.","source":"@site/versioned_docs/version-20-R9/aikit/Classes/OpenAIImage.md","sourceDirName":"aikit/Classes","slug":"/aikit/Classes/openaiimage","permalink":"/docs/pt/aikit/Classes/openaiimage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20aikit%2FClasses%2FOpenAIImage.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"openaiimage","title":"OpenAIImage"},"sidebar":"docs","previous":{"title":"OpenAIError Class","permalink":"/docs/pt/aikit/Classes/openaierror"},"next":{"title":"OpenAIImageParameters","permalink":"/docs/pt/aikit/Classes/openaiimageparameters"}}'),i=s("785893"),r=s("250065");let a={id:"openaiimage",title:"OpenAIImage"},d="OpenAIImage",l={},o=[{value:"Properties",id:"properties",level:2},{value:"Functions",id:"functions",level:2},{value:"asBlob()",id:"asblob",level:3},{value:"Example Usage",id:"example-usage",level:4},{value:"asPicture()",id:"aspicture",level:3},{value:"Example Usage",id:"example-usage-1",level:4},{value:"saveToDisk()",id:"savetodisk",level:3},{value:"Example Usage",id:"example-usage-2",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"openaiimage",children:"OpenAIImage"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"OpenAIImage"})," class represents an image generated by the OpenAI API. It provides properties for accessing the generated image in different formats and methods for converting this image to different types."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/images/object",children:"https://platform.openai.com/docs/api-reference/images/object"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"url"})}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["The URL of the generated image, if ",(0,i.jsx)(n.code,{children:"response_format"})," is ",(0,i.jsx)(n.code,{children:"url"})," (default)."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"b64_json"})}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsxs)(n.td,{children:["The base64-encoded JSON of the generated image, if ",(0,i.jsx)(n.code,{children:"response_format"})," is ",(0,i.jsx)(n.code,{children:"b64_json"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"revised_prompt"})}),(0,i.jsx)(n.td,{children:"Variant"}),(0,i.jsx)(n.td,{children:"The prompt that was used to generate the image, if there was any revision to the prompt."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.h3,{id:"asblob",children:"asBlob()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"asBlob"}),"() : 4D.Blob"]}),"\n",(0,i.jsx)(n.p,{children:"| Function result| 4D.Blob | Converts the generated image to a blob format based on its URL or base64-encoded JSON. |"}),"\n",(0,i.jsx)(n.h4,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"var $blob:=$image.asBlob()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"aspicture",children:"asPicture()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"asPicture"}),"() : Picture"]}),"\n",(0,i.jsx)(n.p,{children:"| Function result| Picture | Creates a picture object from the blob converted image. |"}),"\n",(0,i.jsx)(n.h4,{id:"example-usage-1",children:"Example Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"var $picture:=$image.asPicture()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"savetodisk",children:"saveToDisk()"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"saveToDisk"}),"(",(0,i.jsx)(n.em,{children:"file"})," : 4D.File) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"file"})}),(0,i.jsx)(n.td,{children:"4D.File"}),(0,i.jsx)(n.td,{children:"The file object where the image will be saved."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsxs)(n.td,{children:["Returns ",(0,i.jsx)(n.code,{children:"True"})," if the image is successfully saved."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Saves the image to disk, attempting to download it first if it is a URL. Returns ",(0,i.jsx)(n.code,{children:"False"})," if it could not retrieve the image data."]}),"\n",(0,i.jsx)(n.h4,{id:"example-usage-2",children:"Example Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'var $success:=$image.saveToDisk(Folder(fk desktop folder).file("image.png"))\n'})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var t=s(667294);let i={},r=t.createContext(i);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);