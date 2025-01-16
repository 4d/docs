"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73205"],{87813:function(e,a,n){n.r(a),n.d(a,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"ViewPro/advanced-programming","title":"Advanced programming with Javascript","description":"A 4D View Pro Area is a Web Area form object that uses the embedded web rendering engine. As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the WA Evaluate Javascript 4D command.","source":"@site/versioned_docs/version-20-R7/ViewPro/advanced-programming.md","sourceDirName":"ViewPro","slug":"/ViewPro/advanced-programming","permalink":"/docs/20-R7/ViewPro/advanced-programming","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"advanced-programming","title":"Advanced programming with Javascript"},"sidebar":"docs","previous":{"title":"Classes","permalink":"/docs/20-R7/ViewPro/classes"},"next":{"title":"Commands","permalink":"/docs/20-R7/ViewPro/commands"}}'),t=n("785893"),i=n("250065");let s={id:"advanced-programming",title:"Advanced programming with Javascript"},o=void 0,d={},c=[{value:"Hands-on example: Hiding the Ribbon",id:"hands-on-example-hiding-the-ribbon",level:2},{value:"Calling SpreadJS Javascript methods",id:"calling-spreadjs-javascript-methods",level:2},{value:"Example",id:"example",level:4},{value:"4D View Pro Tips repository",id:"4d-view-pro-tips-repository",level:2}];function l(e){let a={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["A 4D View Pro Area is a ",(0,t.jsx)(a.a,{href:"/docs/20-R7/FormObjects/webAreaOverview",children:"Web Area form object"})," that uses the ",(0,t.jsx)(a.a,{href:"/docs/20-R7/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"embedded web rendering engine"}),". As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the ",(0,t.jsx)(a.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1029.html",children:(0,t.jsx)(a.code,{children:"WA Evaluate Javascript"})})," 4D command."]}),"\n",(0,t.jsxs)(a.p,{children:["Since 4D View Pro is powered by the ",(0,t.jsx)(a.a,{href:"https://developer.mescius.com/spreadjs",children:"SpreadJS spreadsheet solution"}),", you can also call SpreadJS Javascript methods in 4D View Pro areas."]}),"\n",(0,t.jsx)(a.h2,{id:"hands-on-example-hiding-the-ribbon",children:"Hands-on example: Hiding the Ribbon"}),"\n",(0,t.jsxs)(a.p,{children:["Since 4D View Pro is a web area, you can select a webpage element and modify its behavior using Javascript. The following example hides the spreadJS ",(0,t.jsx)(a.a,{href:"/docs/20-R7/ViewPro/configuring#ribbon",children:"Ribbon"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:"//Button's object method\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"calling-spreadjs-javascript-methods",children:"Calling SpreadJS Javascript methods"}),"\n",(0,t.jsx)(a.p,{children:"You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets."}),"\n",(0,t.jsxs)(a.p,{children:["4D has a built-in ",(0,t.jsx)(a.code,{children:"Utils.spread"})," property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,t.jsx)(a.a,{href:"https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Workbook",children:"Workbook methods"}),"."]}),"\n",(0,t.jsx)(a.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(a.p,{children:"The following code undoes the last action in the spreadsheet:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,t.jsx)(a.h2,{id:"4d-view-pro-tips-repository",children:"4D View Pro Tips repository"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Feel free to clone it and experiment with the project."]})]})}function p(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return o},a:function(){return s}});var r=n(667294);let t={},i=r.createContext(t);function s(e){let a=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);