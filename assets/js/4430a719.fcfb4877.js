"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89285"],{388487:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>s,assets:()=>h,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"aikit/Classes/openaichathelper","title":"OpenAIChatHelper","description":"The chat helper allow to keep a list of messages in memory and make consecutive prompt.","source":"@site/versioned_docs/version-20-R9/aikit/Classes/OpenAIChatHelper.md","sourceDirName":"aikit/Classes","slug":"/aikit/Classes/openaichathelper","permalink":"/docs/aikit/Classes/openaichathelper","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20aikit%2FClasses%2FOpenAIChatHelper.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"openaichathelper","title":"OpenAIChatHelper"},"sidebar":"docs","previous":{"title":"OpenAIChatCompletionsStreamResult","permalink":"/docs/aikit/Classes/openaichatcompletionsstreamresult"},"next":{"title":"OpenAIChoice","permalink":"/docs/aikit/Classes/openaichoice"}}'),r=t("785893"),i=t("250065");let a={id:"openaichathelper",title:"OpenAIChatHelper"},l="OpenAIChatHelper",h={},c=[{value:"Properties",id:"properties",level:2},{value:"Functions",id:"functions",level:2},{value:"prompt()",id:"prompt",level:3},{value:"Example Usage",id:"example-usage",level:4}];function d(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"openaichathelper",children:"OpenAIChatHelper"})}),"\n",(0,r.jsx)(n.p,{children:"The chat helper allow to keep a list of messages in memory and make consecutive prompt."}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default Value"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"chat"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/aikit/Classes/openaichatapi",children:"OpenAIChatAPI"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"The chat API instance used for communication with OpenAI."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"systemPrompt"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/aikit/Classes/openaimessage",children:"OpenAIMessage"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"The system prompt message that guides the chat assistant's responses."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numberOfMessages"})}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"The maximum number of messages to retain in the chat history."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"parameters"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/aikit/Classes/openaichatcompletionsparameters",children:"OpenAIChatCompletionsParameters"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"The parameters for the OpenAI chat completion request."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"messages"})}),(0,r.jsxs)(n.td,{children:["Collection of ",(0,r.jsx)(n.a,{href:"/docs/aikit/Classes/openaimessage",children:"OpenAIMessage"})]}),(0,r.jsx)(n.td,{children:"[]"}),(0,r.jsx)(n.td,{children:"The collection of messages exchanged in the chat session."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"prompt",children:"prompt()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"prompt"}),"(",(0,r.jsx)(n.em,{children:"prompt"})," : Text) : OpenAIChatCompletionsResult"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"prompt"})}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"The text prompt to send to OpenAI chat."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/aikit/Classes/openaichatcompletionsresult",children:"OpenAIChatCompletionsResult"})}),(0,r.jsx)(n.td,{children:"The completion result returned by the chat."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Sends a user prompt to the chat and returns the corresponding completion result."}),"\n",(0,r.jsx)(n.h4,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4D",children:'var $chatHelper:=$client.chat.create("You are a helpful assistant.")\n\nvar $result:=$chatHelper.prompt("Hello, how can I help you today?")\n$result:=$chatHelper.prompt("Why 42?")\n'})})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);