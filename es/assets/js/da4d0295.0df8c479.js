"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4409"],{145246:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands/form-event","title":"FORM Event","description":"FORM Event : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands/form-event.md","sourceDirName":"commands","slug":"/commands/form-event","permalink":"/docs/es/commands/form-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fform-event.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"form-event","title":"FORM Event","slug":"/commands/form-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE METHOD IN SUBFORM","permalink":"/docs/es/commands/execute-method-in-subform"},"next":{"title":"Form event code","permalink":"/docs/es/commands/form-event-code"}}'),s=t("785893"),o=t("250065");let i={id:"form-event",title:"FORM Event",slug:"/commands/form-event",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Objeto evento"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred. Usually, you will use ",(0,s.jsx)(n.strong,{children:"FORM Event"})," from within a form or object method."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Objeto devuelto"})}),"\n",(0,s.jsx)(n.p,{children:"Each returned object includes the following main properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Propiedad"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nombre del objeto que desencadena el evento - No se incluye si el evento lo desencadena el formulario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"Valor num\xe9rico del evento de formulario."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:["Name of the form event (",(0,s.jsx)(n.em,{children:"e.g."}),' "On After Edit"). See the ',(0,s.jsx)(n.a,{href:"/docs/es/Events/overview",children:(0,s.jsx)(n.strong,{children:"Form Events"})})," section."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"For example, in the case of a click on a button, the object contains the following properties:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"code":4,"description":"On Clicked","objectName":"Button2"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The event object can contain additional properties, depending on the object for which the event occurs. For ",(0,s.jsx)(n.em,{children:"eventObj"})," objects generated on:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["List box or list box column objects, see ",(0,s.jsx)(n.a,{href:"/docs/es/FormObjects/listboxOverview#additional-properties",children:"this section"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["4D View Pro areas, see ",(0,s.jsx)(n.a,{href:"/docs/es/Events/onVpReady",children:"On VP Ready form event"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If there is no current event, ",(0,s.jsx)(n.strong,{children:"FORM Event"})," returns a null object."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"You want to handle the On Clicked event on a button:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(FORM Event.code=On Clicked)\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"If you set the column object name with a real attribute name of a dataclass like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(356513).Z+"",width:"431",height:"268"})}),"\n",(0,s.jsx)(n.p,{children:"You can sort the column using the On Header Click event:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Form.event:=FORM Event\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Header Click)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0if(Form.event.columnName="lastname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["You want to handle the On Display Details on a list box object with a method set in the ",(0,s.jsx)(n.em,{children:"Meta info expression"})," property:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(645149).Z+"",width:"422",height:"84"})}),"\n",(0,s.jsxs)(n.p,{children:["El m\xe9todo ",(0,s.jsx)(n.em,{children:"setColor"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $event;$0;$meta : Object\n\xa0$event:=FORM Event\n\xa0$meta:=New object\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($event.code=On Display Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($event.isRowSelected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$meta.fill:="lightblue"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0$0:=$meta\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resulting list box when rows are selected:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(968162).Z+"",width:"632",height:"368"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/Events/overview",children:"Form Events"}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1606"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},968162:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843808.en-d5022e04aa921899a8dc7614a89d4749.png"},645149:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843812.en-874890b37ad8804c02c83679ce1aacf5.png"},356513:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843820.en-d5c4f9cba04d8d5d5511b6696deb32e7.png"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);