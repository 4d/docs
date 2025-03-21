"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83627"],{275891:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/wa-create-url-history-menu","title":"WA Create URL history menu","description":"WA Create URL history menu ( { ;} object {; direction*} ) : MenuRef","source":"@site/versioned_docs/version-20-R7/commands-legacy/wa-create-url-history-menu.md","sourceDirName":"commands-legacy","slug":"/commands/wa-create-url-history-menu","permalink":"/docs/20-R7/commands/wa-create-url-history-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-create-url-history-menu.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-create-url-history-menu","title":"WA Create URL history menu","slug":"/commands/wa-create-url-history-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Back URL available","permalink":"/docs/20-R7/commands/wa-back-url-available"},"next":{"title":"WA Evaluate JavaScript","permalink":"/docs/20-R7/commands/wa-evaluate-javascript"}}'),r=t("785893"),i=t("250065");let d={id:"wa-create-url-history-menu",title:"WA Create URL history menu",slug:"/commands/wa-create-url-history-menu",displayed_sidebar:"docs"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WA Create URL history menu"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," {; ",(0,r.jsx)(n.em,{children:"direction"}),"} ) : MenuRef"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"direction"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0 or omitted=List of previous URLs, 1=List of next URLs"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"MenuRef"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Menu reference"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"WA Create URL history menu"})," command creates and fills a menu that can be used directly for navigation among the URLs visited during the session in the Web area designated by the ",(0,r.jsx)(n.em,{children:"*"})," and ",(0,r.jsx)(n.em,{children:"object"})," parameters. It can be used to build a custom navigation interface."]}),"\n",(0,r.jsx)(n.p,{children:"The information provided concerns the session; in other words, the navigation carried out in the same Web area as long as the form has not been closed."}),"\n",(0,r.jsxs)(n.p,{children:["Pass a value indicating the list to recover in ",(0,r.jsx)(n.em,{children:"direction"}),". You can use one of the following constants, found in the ",(0,r.jsx)(n.em,{children:"Web Area"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"WA next URLs"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"WA previous URLs"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you omit the ",(0,r.jsx)(n.em,{children:"direction"})," parameter, the value 0 is used."]}),"\n",(0,r.jsxs)(n.p,{children:["Once the menu has been generated, you can display it using the 4D ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"})," command and you can work with it using the standard 4D menu management commands. The string returned by this command contains the URL of the page visited (see example)."]}),"\n",(0,r.jsxs)(n.p,{children:["Call the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/release-menu",children:"RELEASE MENU"})," command to delete a URL history menu when it is no longer useful."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.em,{children:"Compatibility Note:"})," As of 4D v19 R5, this command fills a menu with only the current URL for web areas using the Windows system rendering engine."]})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:'The following code can be associated with a 3D button having a pop-up menu entitled "Previous":'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0//Single click\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WA OPEN BACK URL(WA_area)\n\xa0\xa0//Click on arrow -> display of pop up\n\xa0\xa0\xa0\xa0:(Form event code=On Alternative Click)\n\xa0\xa0//Create a previous history menu\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$Menu:=WA Create URL history menu(WA_area;WA previous URLs)\n\xa0\xa0//Display this menu in a pop-up\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$URL:=Dynamic pop up menu($Menu)\n\xa0\xa0//If an item is selected\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($URL#"")\n\xa0\xa0//Open Web page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0WA OPEN URL(WA_area;$URL)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0//Delete menu to free up memory\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RELEASE MENU($Menu)\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/release-menu",children:"RELEASE MENU"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/wa-get-url-history",children:"WA GET URL HISTORY"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1049"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);