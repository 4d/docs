"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50593"],{995482:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>p,assets:()=>d,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"ViewPro/advanced-programming","title":"Advanced programming with Javascript","description":"A 4D View Pro Area is a Web Area form object that uses the embedded web rendering engine. As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the WA Evaluate Javascript 4D command.","source":"@site/versioned_docs/version-20/ViewPro/advanced-programming.md","sourceDirName":"ViewPro","slug":"/ViewPro/advanced-programming","permalink":"/docs/20/ViewPro/advanced-programming","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"advanced-programming","title":"Advanced programming with Javascript"},"sidebar":"docs","previous":{"title":"Classes","permalink":"/docs/20/ViewPro/classes"},"next":{"title":"Developing Components","permalink":"/docs/20/Extensions/develop-components"}}'),r=a("785893"),i=a("250065");let o={id:"advanced-programming",title:"Advanced programming with Javascript"},s=void 0,d={},c=[{value:"Hands-on example: Hiding the Ribbon",id:"hands-on-example-hiding-the-ribbon",level:2},{value:"Calling SpreadJS Javascript methods",id:"calling-spreadjs-javascript-methods",level:2},{value:"Example",id:"example",level:4},{value:"4D View Pro Tips repository",id:"4d-view-pro-tips-repository",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["A 4D View Pro Area is a ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/webAreaOverview",children:"Web Area form object"})," that uses the ",(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"embedded web rendering engine"}),". As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1029.html",children:(0,r.jsx)(n.code,{children:"WA Evaluate Javascript"})})," 4D command."]}),"\n",(0,r.jsxs)(n.p,{children:["Since 4D View Pro is powered by the ",(0,r.jsx)(n.a,{href:"https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html",children:"SpreadJS spreadsheet solution"}),", you can also call SpreadJS Javascript methods in 4D View Pro areas."]}),"\n",(0,r.jsx)(n.h2,{id:"hands-on-example-hiding-the-ribbon",children:"Hands-on example: Hiding the Ribbon"}),"\n",(0,r.jsxs)(n.p,{children:["Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. The following example hides the spreadJS ",(0,r.jsx)(n.a,{href:"/docs/20/ViewPro/configuring#ribbon",children:"Ribbon"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"//Button's object method\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"calling-spreadjs-javascript-methods",children:"Calling SpreadJS Javascript methods"}),"\n",(0,r.jsx)(n.p,{children:"You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets."}),"\n",(0,r.jsxs)(n.p,{children:["4D has a built-in ",(0,r.jsx)(n.code,{children:"Utils.spread"})," property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,r.jsx)(n.a,{href:"https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html",children:"Workbook methods"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following code undoes the last action in the spreadsheet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"4d-view-pro-tips-repository",children:"4D View Pro Tips repository"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Feel free to clone it and experiment with the project."]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return o}});var t=a(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);