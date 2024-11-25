"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23150"],{777200:function(e,n,o){o.r(n),o.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/form-event","title":"FORM Event","description":"FORM Event : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-event.md","sourceDirName":"commands-legacy","slug":"/commands/form-event","permalink":"/docs/es/commands/form-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-event","title":"FORM Event","slug":"/commands/form-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE METHOD IN SUBFORM","permalink":"/docs/es/commands/execute-method-in-subform"},"next":{"title":"Form event code","permalink":"/docs/es/commands/form-event-code"}}'),s=o("785893"),d=o("250065");let r={id:"form-event",title:"FORM Event",slug:"/commands/form-event",displayed_sidebar:"docs"},l=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Objeto evento"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," devuelve un objeto que contiene informaci\xf3n sobre el evento de formulario que acaba de ocurrir. Por lo general, usar\xe1 ",(0,s.jsx)(n.strong,{children:"FORM Event"})," desde un formulario o m\xe9todo de objeto."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Objeto devuelto"})}),"\n",(0,s.jsx)(n.p,{children:"Cada objeto devuelto incluye las siguientes propiedades principales:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Propiedad"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Tipo"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Descripci\xf3n"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:"Nombre del objeto que desencadena el evento: no se incluye si el evento es desencadenado por el formulario"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"entero largo"}),(0,s.jsxs)(n.td,{children:["Valor num\xe9rico del evento de formulario. Ver ",(0,s.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:'Nombre del evento del formulario (por ejemplo, "On After Edit").'})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Por ejemplo, en el caso de hacer clic en un bot\xf3n, el objeto contiene las siguientes propiedades:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"code":4,"description":"On Clicked","objectName":"Button2"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["El objeto evento puede contener propiedades adicionales, dependiendo del objeto para el cual ocurre el evento. Por ejemplo, los objetos ",(0,s.jsx)(n.em,{children:"eventObj"})," generados en:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["objetos list box o columnas, ver la ",(0,s.jsx)(n.em,{children:"documentaci\xf3n de list box en developer.4d.com"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["\xe1reas 4D View Pro, ver ",(0,s.jsx)(n.em,{children:"Evento formulario On VP Ready"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si no hay un evento actual, ",(0,s.jsx)(n.strong,{children:"FORM Event"})," devuelve un objeto nulo."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Desea manejar el evento On Clicked en un bot\xf3n:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(FORM Event.code=On Clicked)\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Si establece el nombre del objeto columna con un nombre de atributo real de una clase de datos como esta:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(573391).Z+"",width:"431",height:"268"})}),"\n",(0,s.jsx)(n.p,{children:"Puede ordenar la columna utilizando el evento On Header Click:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Form.event:=FORM Event\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Header Click)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0if(Form.event.columnName="lastname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Desea manejar On Display Details en un objeto list box con un m\xe9todo definido en la propiedad ",(0,s.jsx)(n.em,{children:"Meta info expression"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(756799).Z+"",width:"422",height:"84"})}),"\n",(0,s.jsxs)(n.p,{children:["El m\xe9todo ",(0,s.jsx)(n.em,{children:"setColor"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $event;$0;$meta : Object\n\xa0$event:=[#current_title_incod]\n\xa0$meta:=New object\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($event.code=On Display Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($event.isRowSelected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$meta.fill:="lightblue"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0$0:=$meta\n'})}),"\n",(0,s.jsx)(n.p,{children:"El list box resultante cuando se seleccionan las l\xedneas:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(908580).Z+"",width:"632",height:"368"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/form-event-code",children:"Form event code"})})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},908580:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/pict4843808.en-d5022e04aa921899a8dc7614a89d4749.png"},756799:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/pict4843812.en-874890b37ad8804c02c83679ce1aacf5.png"},573391:function(e,n,o){o.d(n,{Z:function(){return t}});let t=o.p+"assets/images/pict4843820.en-d5c4f9cba04d8d5d5511b6696deb32e7.png"},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return r}});var t=o(667294);let s={},d=t.createContext(s);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);