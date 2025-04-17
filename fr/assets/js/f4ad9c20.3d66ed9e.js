"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55236"],{656867:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>r,metadata:()=>o,assets:()=>i,toc:()=>a,contentTitle:()=>c});var o=JSON.parse('{"id":"aikit/asynchronous-call","title":"Asynchronous Call","description":"If you do not want to wait for the OpenAPI response when making a request to its API, you need to use asynchronous code.","source":"@site/versioned_docs/version-20-R9/aikit/asynchronous-call.md","sourceDirName":"aikit","slug":"/aikit/asynchronous-call","permalink":"/docs/fr/aikit/asynchronous-call","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20aikit%2Fasynchronous-call.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"asynchronous-call","title":"Asynchronous Call"},"sidebar":"docs","previous":{"title":"4D-AIKit","permalink":"/docs/fr/aikit/overview"},"next":{"title":"Providers","permalink":"/docs/fr/aikit/compatible-openai"}}'),t=n("785893"),l=n("250065");let r={id:"asynchronous-call",title:"Asynchronous Call"},c="Asynchronous Call",i={},a=[{value:"Examples of Usage",id:"examples-of-usage",level:2},{value:"model list",id:"model-list",level:3},{value:"chat completions",id:"chat-completions",level:3}];function d(e){let s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"asynchronous-call",children:"Asynchronous Call"})}),"\n",(0,t.jsx)(s.p,{children:"If you do not want to wait for the OpenAPI response when making a request to its API, you need to use asynchronous code."}),"\n",(0,t.jsxs)(s.p,{children:["You must provide a ",(0,t.jsx)(s.code,{children:"4D.Formula"})," to receive the result. See ",(0,t.jsx)(s.a,{href:"/docs/fr/aikit/Classes/openaiparameters",children:"OpenAIParameters"})," for a list of them."]}),"\n",(0,t.jsxs)(s.p,{children:["The asynchronous method is based on ",(0,t.jsx)(s.a,{href:"https://developer.4d.com/docs/API/HTTPRequestClass",children:"4D.HTTPRequest"}),", so the response will be received within the current process."]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:["\u26A0\uFE0F If your process ends at the conclusion of the current method (e.g., using New process, or playing in the method editor), the callback formula might not be called asynchronously. In such cases, consider using ",(0,t.jsx)(s.code,{children:"CALL WORKER"})," or ",(0,t.jsx)(s.code,{children:"CALL FORM"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"examples-of-usage",children:"Examples of Usage"}),"\n",(0,t.jsx)(s.h3,{id:"model-list",children:"model list"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"$client.models.list({formula: Formula(MyReceiveMethod($1))})\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$1"})," will be an instance of ",(0,t.jsx)(s.a,{href:"/docs/fr/aikit/Classes/openaimodellistresult",children:"OpenAIModelListResult"}),", so ",(0,t.jsx)(s.code,{children:"MyReceiveMethod"})," method could be:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'#DECLARE($result: cs.AIKit.OpenAIModelListResult)\n\nIf($result.success)\n\n   Form.models:=$result.models\n\nElse\n\n  Alert($result.errors.formula(Formula(JSON Stringify($1))).join("\\n"))\n\nEnd if\n'})}),"\n",(0,t.jsx)(s.h3,{id:"chat-completions",children:"chat completions"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'var $messages:=[{role: "system"; content: "You are a helpful assistant."}]\n$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})\n\n$client.chat.completions.create($messages; { onResponse: Formula(MyChatCompletionsReceiveMethod($1))})\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$1"})," will be an instance of ",(0,t.jsx)(s.a,{href:"/docs/fr/aikit/Classes/openaichatcompletionsresult",children:"OpenAIChatCompletionsResult"}),", so ",(0,t.jsx)(s.code,{children:"MyChatCompletionsReceiveMethod"})," method could be:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)\n\nASSERT($result.success) // We use onResponse here, callback receive only if success\nForm.assistantMessage:=$result.choices[0].text\n"})})]})}function u(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return r}});var o=n(667294);let t={},l=o.createContext(t);function r(e){let s=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(l.Provider,{value:s},e.children)}}}]);