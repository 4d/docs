"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53543"],{751338:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"commands/form-event","title":"FORM Event","description":"FORM Event : Object","source":"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R7/commands/form-event.md","sourceDirName":"commands","slug":"/commands/form-event","permalink":"/docs/ja/commands/form-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fform-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-event","title":"FORM Event","slug":"/commands/form-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE METHOD IN SUBFORM","permalink":"/docs/ja/commands/execute-method-in-subform"},"next":{"title":"Form event code","permalink":"/docs/ja/commands/form-event-code"}}'),r=t("785893"),i=t("250065");let c={id:"form-event",title:"FORM Event",slug:"/commands/form-event",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"\u8AAC\u660E",id:"\u8AAC\u660E",level:4},{value:"\u4F8B\u984C 1",id:"\u4F8B\u984C-1",level:4},{value:"\u4F8B\u984C 2",id:"\u4F8B\u984C-2",level:4},{value:"\u4F8B\u984C 3",id:"\u4F8B\u984C-3",level:4},{value:"\u53C2\u7167",id:"\u53C2\u7167",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"FORM Event"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5F15\u6570"}),(0,r.jsx)(n.th,{children:"\u578B"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"\u8AAC\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u623B\u308A\u5024"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"\u30A4\u30D9\u30F3\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"\u8AAC\u660E",children:"\u8AAC\u660E"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,r.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred. Usually, you will use ",(0,r.jsx)(n.strong,{children:"FORM Event"})," from within a form or object method."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8FD4\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8"})}),"\n",(0,r.jsx)(n.p,{children:"Each returned object includes the following main properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u30D7\u30ED\u30D1\u30C6\u30A3"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"\u578B"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"\u30A4\u30D9\u30F3\u30C8\u3092\u30C8\u30EA\u30AC\u30FC\u3057\u3066\u3044\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3002\u30D5\u30A9\u30FC\u30E0\u306B\u3088\u3063\u3066\u30C8\u30EA\u30AC\u30FC\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306B\u306F\u542B\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{children:"\u30D5\u30A9\u30FC\u30E0\u30A4\u30D9\u30F3\u30C8\u306E\u6570\u5024\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Name of the form event (",(0,r.jsx)(n.em,{children:"e.g."}),' "On After Edit"). See the ',(0,r.jsx)(n.a,{href:"/docs/ja/Events/overview",children:(0,r.jsx)(n.strong,{children:"Form Events"})})," section."]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"For example, in the case of a click on a button, the object contains the following properties:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{"code":4,"description":"On Clicked","objectName":"Button2"}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The event object can contain additional properties, depending on the object for which the event occurs. For ",(0,r.jsx)(n.em,{children:"eventObj"})," objects generated on:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["List box or list box column objects, see the ",(0,r.jsx)(n.em,{children:"list box documentation on developer.4d.com"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["4D View Pro areas, see ",(0,r.jsx)(n.em,{children:"On VP Ready form event"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If there is no current event, ",(0,r.jsx)(n.strong,{children:"FORM Event"})," returns a null object."]}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-1",children:"\u4F8B\u984C 1"}),"\n",(0,r.jsx)(n.p,{children:"You want to handle the On Clicked event on a button:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If(FORM Event.code=On Clicked)\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-2",children:"\u4F8B\u984C 2"}),"\n",(0,r.jsx)(n.p,{children:"If you set the column object name with a real attribute name of a dataclass like this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(801828).Z+"",width:"431",height:"268"})}),"\n",(0,r.jsx)(n.p,{children:"You can sort the column using the On Header Click event:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0Form.event:=FORM Event\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Header Click)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0if(Form.event.columnName="lastname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h4,{id:"\u4F8B\u984C-3",children:"\u4F8B\u984C 3"}),"\n",(0,r.jsxs)(n.p,{children:["You want to handle the On Display Details on a list box object with a method set in the ",(0,r.jsx)(n.em,{children:"Meta info expression"})," property:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(288862).Z+"",width:"422",height:"84"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"setColor"})," method:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $event;$0;$meta : Object\n\xa0$event:=FORM Event\n\xa0$meta:=New object\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($event.code=On Display Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($event.isRowSelected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$meta.fill:="lightblue"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0$0:=$meta\n'})}),"\n",(0,r.jsx)(n.p,{children:"The resulting list box when rows are selected:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(199056).Z+"",width:"632",height:"368"})}),"\n",(0,r.jsx)(n.h4,{id:"\u53C2\u7167",children:"\u53C2\u7167"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ja/Events/overview",children:"Form Events"}),"\n",(0,r.jsx)(n.a,{href:"/docs/ja/commands/form-event-code",children:"Form event code"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},199056:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict4843808.en-d5022e04aa921899a8dc7614a89d4749.png"},288862:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict4843812.en-874890b37ad8804c02c83679ce1aacf5.png"},801828:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/pict4843820.en-d5c4f9cba04d8d5d5511b6696deb32e7.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var s=t(667294);let r={},i=s.createContext(r);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);