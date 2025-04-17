"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12871"],{859907:function(e,t,n){n.r(t),n.d(t,{default:()=>d,frontMatter:()=>a,metadata:()=>i,assets:()=>h,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"aikit/compatible-openai","title":"Providers","description":"Many AI providers propose an OpenAI-like API, so you can use this project to connect to them.","source":"@site/versioned_docs/version-20-R9/aikit/compatible-openai.md","sourceDirName":"aikit","slug":"/aikit/compatible-openai","permalink":"/docs/es/aikit/compatible-openai","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20aikit%2Fcompatible-openai.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"compatible-openai","title":"Providers"},"sidebar":"docs","previous":{"title":"Asynchronous Call","permalink":"/docs/es/aikit/asynchronous-call"},"next":{"title":"OpenAI","permalink":"/docs/es/aikit/Classes/openai"}}'),s=n("785893"),r=n("250065");let a={id:"compatible-openai",title:"Providers"},o="Providers",h={},c=[{value:"Remote",id:"remote",level:2},{value:"Local",id:"local",level:2}];function l(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"providers",children:"Providers"})}),"\n",(0,s.jsx)(t.p,{children:"Many AI providers propose an OpenAI-like API, so you can use this project to connect to them."}),"\n",(0,s.jsxs)(t.p,{children:["To do so you just have to change the original ",(0,s.jsx)(t.code,{children:"baseURL"})," by the service one and use their api key if needed."]}),"\n",(0,s.jsx)(t.h2,{id:"remote",children:"Remote"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Provider"}),(0,s.jsx)(t.th,{children:"Base url"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://mistral.ai/",children:"https://mistral.ai/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://api.mistral.ai/v1",children:"https://api.mistral.ai/v1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.deepseek.com/",children:"https://www.deepseek.com/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://api.deepseek.com",children:"https://api.deepseek.com"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://www.anthropic.com/",children:"https://www.anthropic.com/"})," (claude)"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://api.anthropic.com/v1",children:"https://api.anthropic.com/v1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.api.nvidia.com/",children:"https://docs.api.nvidia.com/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://integrate.api.nvidia.com/v1",children:"https://integrate.api.nvidia.com/v1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://gemini.google.com/",children:"https://gemini.google.com/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://generativelanguage.googleapis.com/v1beta/openai",children:"https://generativelanguage.googleapis.com/v1beta/openai"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://groq.com/",children:"https://groq.com/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://api.groq.com/openai/v1",children:"https://api.groq.com/openai/v1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ai.azure.com/",children:"https://ai.azure.com/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://YOUR_RESOURCE_NAME.openai.azure.com",children:"https://YOUR_RESOURCE_NAME.openai.azure.com"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://www.alibabacloud.com/help/en/model-studio/developer-reference/use-qwen-by-calling-api",children:"https://www.alibabacloud.com/"})," (qwen)"]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://dashscope-intl.aliyuncs.com/compatible-mode/v1",children:"https://dashscope-intl.aliyuncs.com/compatible-mode/v1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.perplexity.ai/",children:"https://www.perplexity.ai/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://api.perplexity.ai",children:"https://api.perplexity.ai"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"local",children:"Local"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Provider"}),(0,s.jsx)(t.th,{children:"Default base url"}),(0,s.jsx)(t.th,{children:"Doc"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ollama.com/",children:"https://ollama.com/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://127.0.0.1:11434/v1",children:"http://127.0.0.1:11434/v1"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ollama.com/blog/openai-compatibility",children:"https://ollama.com/blog/openai-compatibility"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://lmstudio.ai/",children:"https://lmstudio.ai/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://localhost:1234/v1",children:"http://localhost:1234/v1"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://lmstudio.ai/docs/api/endpoints/openai",children:"https://lmstudio.ai/docs/api/endpoints/openai"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://localai.io/",children:"https://localai.io/"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"http://127.0.0.1:8080",children:"http://127.0.0.1:8080"})}),(0,s.jsx)(t.td,{})]})]})]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var i=n(667294);let s={},r=i.createContext(s);function a(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);