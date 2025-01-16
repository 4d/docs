"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15430"],{169832:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/wa-run-offscreen-area","title":"WA Run offscreen area","description":"WA Run offscreen area ( parameters ) : any","source":"@site/versioned_docs/version-20-R8/commands-legacy/wa-run-offscreen-area.md","sourceDirName":"commands-legacy","slug":"/commands/wa-run-offscreen-area","permalink":"/docs/commands/wa-run-offscreen-area","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-run-offscreen-area.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wa-run-offscreen-area","title":"WA Run offscreen area","slug":"/commands/wa-run-offscreen-area","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA REFRESH CURRENT URL","permalink":"/docs/commands/wa-refresh-current-url"},"next":{"title":"WA SET EXTERNAL LINKS FILTERS","permalink":"/docs/commands/wa-set-external-links-filters"}}'),t=s("785893"),a=s("250065");let d={id:"wa-run-offscreen-area",title:"WA Run offscreen area",slug:"/commands/wa-run-offscreen-area",displayed_sidebar:"docs"},c=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",customproperty:"customproperty",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WA Run offscreen area"})," ( ",(0,t.jsx)(n.em,{children:"parameters"})," ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"parameters"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Object containing the web area's attributes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:".result property of the onEvent object, or Null if does not return a value"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"WA Run offscreen area"})," command creates a web area in memory which can be used to automatically load and parse web pages."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This command uses the embedded web rendering engine."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"parameters"})," object, pass any of the following optional properties. These properties will be available through the ",(0,t.jsx)(n.a,{href:"/docs/commands/this",children:"This"})," command within the ",(0,t.jsx)(n.em,{children:"onEvent"})," method and reference the instance:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Property"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"url"}),(0,t.jsx)(n.td,{children:"text | file object"}),(0,t.jsx)(n.td,{children:"The URL or file to be loaded in the web area. If omitted or null, a blank page is loaded."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsxs)(n.td,{children:["The name of the web area. If omitted or null, a generic name is assigned (",(0,t.jsx)(n.em,{children:"e.g"}),"., OffscreenArea1)."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onEvent"}),(0,t.jsx)(n.td,{children:"object (formula)"}),(0,t.jsxs)(n.td,{children:["A callback method that will be launched when the web area is ready. It can be either:",(0,t.jsx)(n.br,{})," an ",(0,t.jsx)(n.em,{children:"onEvent"})," function of a class, or a ",(0,t.jsx)(n.a,{href:"/docs/commands/formula",children:"Formula"})," object  By default, the callback method is called on the On Load, On Unload, On End URL Loading, On URL Loading Error, or On Timer events."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"autoQuit"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["True (default value) if the command must stop the formula execution when the On End URL Loading or On URL Loading Error events occur.",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.br,{}),"If false, you must use the ",(0,t.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"})," or ",(0,t.jsx)(n.a,{href:"/docs/commands/accept",children:"ACCEPT"})," commands in the callback method or project methods called with the $4d object to close the web area."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeout"}),(0,t.jsx)(n.td,{children:"real"}),(0,t.jsx)(n.td,{children:"Maximum time (expressed in seconds) before the area automatically closes if no event is generated. If set to 0, no limitation is applied. Default value: 60"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"result"}),(0,t.jsx)(n.td,{children:"mixed"}),(0,t.jsx)(n.td,{children:"Result of the processing to be returned (if any)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.customproperty,{})}),(0,t.jsx)(n.td,{children:"mixed"}),(0,t.jsx)(n.td,{children:"Any custom attribute to be available in the callback or $4d method."})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The following property is automatically added by the command if necessary:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Property"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Description"})})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeoutReached"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Added with ",(0,t.jsx)(n.strong,{children:"true"})," value if timeout has been exceeded"]})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["If a null value is passed in ",(0,t.jsx)(n.em,{children:"parameters"}),", a blank web area will be created and then automatically closed."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The offscreen web area is only available during the execution of the ",(0,t.jsx)(n.strong,{children:"WA Run offscreen area"})," command. It will automatically be destroyed once execution has ended."]}),"\n",(0,t.jsxs)(n.li,{children:["4D methods can be called from the JavaScript code executed in a web area. See ",(0,t.jsx)(n.em,{children:"Accessing 4D methods"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The following commands can be used in the callback method:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/accept",children:"ACCEPT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/set-timer",children:"SET TIMER"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-evaluate-javascript",children:"WA Evaluate JavaScript"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-execute-javascript-function",children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-get-current-url",children:"WA Get current URL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-get-last-url-error",children:"WA GET LAST URL ERROR"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-get-page-content",children:"WA Get page content"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-get-page-title",children:"WA Get page title"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-open-url",children:"WA OPEN URL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-refresh-current-url",children:"WA REFRESH CURRENT URL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/commands/wa-stop-loading-url",children:"WA STOP LOADING URL"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You want to create and handle an offscreen web area using a function of your OffscreenArea class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$config:=cs.OffscreenArea.new()\n\xa0$result:=WA Run offscreen area($config)\n\xa0If($config.timeoutReached)\xa0//automatically returned in case of timeout\n\xa0\xa0\xa0\xa0ALERT("Timeout reached")\n\xa0End if\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"OffscreenArea class"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0Class constructor\n\xa0This.url:=File("/RESOURCES/compute.html")\n\xa0This.area:="myWAOffscreen"\n\xa0\n\xa0Function onEvent\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event.code=On End URL Loading)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0This.result:=WA Evaluate JavaScript(*;This.area;"myJSMethod();")\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsxs)(n.p,{children:["The OK system variable is set to 0 if the timeout has been reached or the ",(0,t.jsx)(n.a,{href:"/docs/commands/cancel",children:"CANCEL"})," was called in ",(0,t.jsx)(n.em,{children:"onEvent"}),", otherwise it is set to 1."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/form-event",children:"FORM Event"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Programmed management of Web Areas"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/wa-open-web-inspector",children:"WA OPEN WEB INSPECTOR"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1727"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let t={},a=r.createContext(t);function d(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);