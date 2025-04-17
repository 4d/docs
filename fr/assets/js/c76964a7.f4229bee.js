"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85782"],{756832:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands/form-event","title":"FORM Event","description":"FORM Event : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/form-event.md","sourceDirName":"commands","slug":"/commands/form-event","permalink":"/docs/fr/20-R8/commands/form-event","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fform-event.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-event","title":"FORM Event","slug":"/commands/form-event","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXECUTE METHOD IN SUBFORM","permalink":"/docs/fr/20-R8/commands/execute-method-in-subform"},"next":{"title":"Form event code","permalink":"/docs/fr/20-R8/commands/form-event-code"}}'),s=t("785893"),i=t("250065");let d={id:"form-event",title:"FORM Event",slug:"/commands/form-event",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Objet \xe9v\xe9nement"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Event"})," returns an object containing information about the form event that has just occurred.",(0,s.jsx)(n.strong,{children:"FORM Event"})," retourne un objet contenant des informations sur l'\xe9v\xe9nement formulaire qui vient de se produire. Habituellement, vous utiliserez ",(0,s.jsx)(n.strong,{children:"FORM Event"})," \xe0 partir d'une m\xe9thode formulaire ou objet."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Objet retourn\xe9"})}),"\n",(0,s.jsx)(n.p,{children:"Chaque objet retourn\xe9 contient les principales propri\xe9t\xe9s suivantes :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Propri\xe9t\xe9"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectName"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Nom de l'objet g\xe9n\xe9rant l'\xe9v\xe9nement - Non inclus si l'\xe9v\xe9nement est d\xe9clench\xe9 par le formulaire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"code"}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"Valeur num\xe9rique de l'\xe9v\xe9nement formulaire."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"text"}),(0,s.jsxs)(n.td,{children:['Nom de l\'\xe9v\xe9nement de formulaire (par exemple "On After Edit"). Voir la section ',(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/Events/overview",children:(0,s.jsx)(n.strong,{children:"Ev\xe9nements formulaire"})}),"."]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Par exemple, dans le cas d'un clic sur un bouton, l'objet contient les propri\xe9t\xe9s suivantes :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"code":4,"description":"On Clicked","objectName":"Button2"}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["L'objet \xe9v\xe9nement peut contenir des propri\xe9t\xe9s suppl\xe9mentaires, en fonction de l'objet pour lequel l'\xe9v\xe9nement se produit. Pour les objets ",(0,s.jsx)(n.em,{children:"eventObj"})," g\xe9n\xe9r\xe9s sur:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["des objets de type list box ou colonne de list box, voir ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/FormObjects/listboxOverview#additional-properties",children:"cette section"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["des zones 4D View Pro, voir \xe9v\xe9nement formumaire ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/Events/onVpReady",children:"on VP Ready"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," S'il n'y a pas d'\xe9v\xe9nement courant, ",(0,s.jsx)(n.strong,{children:"FORM Event"})," renvoie un objet null."]}),"\n",(0,s.jsx)(n.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,s.jsx)(n.p,{children:"Vous souhaitez g\xe9rer l'\xe9v\xe9nement On Clicked sur un bouton :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(FORM Event.code=On Clicked)\n\xa0\xa0\xa0\xa0...\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,s.jsx)(n.p,{children:"Si vous d\xe9finissez le nom de l'objet colonne avec un v\xe9ritable nom d'attribut d'une dataclass comme ceci :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(300828).Z+"",width:"431",height:"268"})}),"\n",(0,s.jsx)(n.p,{children:"Vous pouvez trier la colonne \xe0 l'aide de l'\xe9v\xe9nement On Header Click :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Form.event:=FORM Event\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Header Click)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0if(Form.event.columnName="lastname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,s.jsxs)(n.p,{children:["Vous voulez g\xe9rer On Display Details sur un objet list box avec une m\xe9thode d\xe9finie dans la propri\xe9t\xe9 ",(0,s.jsx)(n.em,{children:"Meta info expression"})," :"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(69222).Z+"",width:"422",height:"84"})}),"\n",(0,s.jsxs)(n.p,{children:["La m\xe9thode ",(0,s.jsx)(n.em,{children:"setColor"})," :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $event;$0;$meta : Object\n\xa0$event:=FORM Event\n\xa0$meta:=New object\n\xa0\n\xa0Case of\n\xa0\xa0\xa0\xa0:($event.code=On Display Detail)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($event.isRowSelected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$meta.fill:="lightblue"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n\xa0$0:=$meta\n'})}),"\n",(0,s.jsx)(n.p,{children:"La zone de liste r\xe9sultante lorsque des lignes sont s\xe9lectionn\xe9es :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(330696).Z+"",width:"632",height:"368"})}),"\n",(0,s.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/Events/overview",children:"Form Events"}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R8/commands/form-event-code",children:"Form event code"})]}),"\n",(0,s.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1606"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},330696:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843808.en-d5022e04aa921899a8dc7614a89d4749.png"},69222:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843812.en-874890b37ad8804c02c83679ce1aacf5.png"},300828:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict4843820.en-d5c4f9cba04d8d5d5511b6696deb32e7.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);