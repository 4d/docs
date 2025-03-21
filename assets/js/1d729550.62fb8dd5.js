"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87434"],{515894:function(e,r,n){n.r(r),n.d(r,{default:()=>l,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/receive-buffer","title":"RECEIVE BUFFER","description":"RECEIVE BUFFER ( receiveVar )","source":"@site/versioned_docs/version-20-R8/commands-legacy/receive-buffer.md","sourceDirName":"commands-legacy","slug":"/commands/receive-buffer","permalink":"/docs/commands/receive-buffer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-buffer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"receive-buffer","title":"RECEIVE BUFFER","slug":"/commands/receive-buffer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET SERIAL PORT MAPPING","permalink":"/docs/commands/get-serial-port-mapping"},"next":{"title":"RECEIVE PACKET","permalink":"/docs/commands/receive-packet"}}'),s=n("785893"),i=n("250065");let a={id:"receive-buffer",title:"RECEIVE BUFFER",slug:"/commands/receive-buffer",displayed_sidebar:"docs"},c=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"RECEIVE BUFFER"})," ( ",(0,s.jsx)(r.em,{children:"receiveVar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"receiveVar"}),(0,s.jsx)(r.td,{children:"Text"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Variable to receive data"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["RECEIVE BUFFER reads the serial port that was previously opened with ",(0,s.jsx)(r.a,{href:"/docs/commands/set-channel",children:"SET CHANNEL"}),". The serial port has a buffer that fills with characters until a command reads from the buffer. RECEIVE BUFFER gets the characters from the serial buffer, put them into ",(0,s.jsx)(r.em,{children:"receiveVar"})," then clears the buffer. If there are no characters in the buffer, then ",(0,s.jsx)(r.em,{children:"receiveVar"})," will contain nothing."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"On Windows"}),(0,s.jsx)(r.br,{}),"\nThe Windows serial port buffer is limited in size to 10 Kbytes. This means that the buffer can overflow. When it is full and new characters are received, the new characters replace the oldest characters. The old characters are lost; therefore, it is essential that the buffer is read quickly when new characters are received."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"On Mac OS"}),(0,s.jsx)(r.br,{}),"\nThe macOS serial port buffer capacity is, in theory, unlimited (depending on the available memory). If the buffer is full and new characters are received, the new characters replace the oldest characters. The old characters are lost; therefore, it is essential that the buffer is read quickly when new characters are received."]}),"\n",(0,s.jsxs)(r.p,{children:["RECEIVE BUFFER is different from ",(0,s.jsx)(r.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"})," in that it takes whatever is in the buffer and then immediately returns. ",(0,s.jsx)(r.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"})," waits until it finds a specific character or until a given number of characters are in the buffer."]}),"\n",(0,s.jsxs)(r.p,{children:["During the execution of RECEIVE BUFFER, the user can interrupt the reception by pressing ",(0,s.jsx)(r.strong,{children:"Ctrl-Alt-Shift"})," (Windows) or ",(0,s.jsx)(r.strong,{children:"Command-Option-Shift"})," (Macintosh). This interruption generates an error -9994 that you can catch with an error-handling method installed using ",(0,s.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(r.p,{children:["The project method LISTEN TO SERIAL PORT uses ",(0,s.jsx)(r.strong,{children:"RECEIVE BUFFER"})," to get text from the serial port and accumulate it into a an interprocess variable:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// LISTEN TO SERIAL PORT\n\xa0\xa0// Opening the serial port\n\xa0SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)\n\xa0<>IP_Listen_Serial_Port:=True\n\xa0While(<>IP_Listen_Serial_Port)\n\xa0\xa0\xa0\xa0RECEIVE BUFFER($vtBuffer)\n\xa0\xa0\xa0\xa0If((Length($vtBuffer)+Length(<>vtBuffer))>MAXTEXTLEN)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0<>vtBuffer:=""\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0<>vtBuffer:=<>vtBuffer+$Buffer\n\xa0End while\n'})}),"\n",(0,s.jsxs)(r.p,{children:["At this point, any other process can read the interprocess ",(0,s.jsx)(r.em,{children:"\u25CAvtBuffer"})," to work with the data coming from the serial port."]}),"\n",(0,s.jsx)(r.p,{children:"To stop listening to the serial port, just execute:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// Stop listening to the serial port\n\xa0\u25CAIP_Listen_Serial_Port:=False\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Note that access to the interprocess ",(0,s.jsx)(r.em,{children:"\u25CAvtBuffer"})," variable should be protected by a semaphore, so that processes will not conflict. See the command ",(0,s.jsx)(r.a,{href:"/docs/commands/semaphore",children:"Semaphore"})," for more information."]}),"\n",(0,s.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/semaphore",children:"Semaphore"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/set-channel",children:"SET CHANNEL"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/commands/use-character-set",children:"USE CHARACTER SET"})]}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"172"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2713"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Modifies variables"}),(0,s.jsx)(r.td,{children:"error"})]})]})]})]})}function l(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return a}});var t=n(667294);let s={},i=t.createContext(s);function a(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);