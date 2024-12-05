"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73072"],{365636:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"commands/form-event","title":"FORM Event","description":"FORM Event : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/form-event.md","sourceDirName":"commands","slug":"/commands/form-event","permalink":"/docs/fr/commands/form-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fform-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-event","title":"FORM Event","slug":"/commands/form-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE METHOD IN SUBFORM","permalink":"/docs/fr/commands/execute-method-in-subform"},"next":{"title":"Form event code","permalink":"/docs/fr/commands/form-event-code"}}'),s=t("785893"),i=t("250065");let o={id:"form-event",title:"FORM Event",slug:"/commands/form-event",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Objet \xe9v\xe9nement"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred. Usually, you will use ",(0,s.jsx)(n.strong,{children:"FORM Event"})," from within a form or object method."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Objet retourn\xe9"})}),"\n",(0,s.jsx)(n.p,{children:"Each returned object includes the following main properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nom de l'objet g\xe9n\xe9rant l'\xe9v\xe9nement - Non inclus si l'\xe9v\xe9nement est d\xe9clench\xe9 par le formulaire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"Valeur num\xe9rique de l'\xe9v\xe9nement formulaire."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:["Name of the form event (",(0,s.jsx)(n.em,{children:"e.g."}),' "On After Edit"). See the ',(0,s.jsx)(n.a,{href:"/docs/fr/Events/overview",children:(0,s.jsx)(n.strong,{children:"Form Events"})})," section."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"For example, in the case of a click on a button, the object contains the following properties:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"code":4,"description":"On Clicked","objectName":"Button2"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The event object can contain additional properties, depending on the object for which the event occurs. For ",(0,s.jsx)(n.em,{children:"eventObj"})," objects generated on:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["List box or list box column objects, see the ",(0,s.jsx)(n.em,{children:"list box documentation on developer.4d.com"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["4D View Pro areas, see ",(0,s.jsx)(n.em,{children:"On VP Ready form event"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If there is no current event, ",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns a null object."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"You want to handle the On Clicked event on a button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(FORM Event.code=On Clicked)\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"If you set the column object name with a real attribute name of a dataclass like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(62361).Z+"",width:"431",height:"268"})}),"\n",(0,s.jsx)(n.p,{children:"You can sort the column using the On Header Click event:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Form.event:=FORM Event\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Header Click)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0if(Form.event.columnName="lastname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsxs)(n.p,{children:["You want to handle the On Display Details on a list box object with a method set in the ",(0,s.jsx)(n.em,{children:"Meta info expression"})," property:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(789046).Z+"",width:"422",height:"84"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"setColor"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $event;$0;$meta : Object\n\xa0$event:=FORM Event\n\xa0$meta:=New object\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($event.code=On Display Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($event.isRowSelected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$meta.fill:="lightblue"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0$0:=$meta\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resulting list box when rows are selected:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(594635).Z+"",width:"632",height:"368"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/Events/overview",children:"Form Events"}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-event-code",children:"Form event code"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},594635:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843808.en-d5022e04aa921899a8dc7614a89d4749.png"},789046:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843812.en-874890b37ad8804c02c83679ce1aacf5.png"},62361:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843820.en-d5c4f9cba04d8d5d5511b6696deb32e7.png"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);