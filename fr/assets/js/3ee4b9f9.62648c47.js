"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91500"],{126638:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"Events/onDragOver","title":"On Drag Over","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | D\xe9finition                                     |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Events/onDragOver.md","sourceDirName":"Events","slug":"/Events/onDragOver","permalink":"/docs/fr/20-R7/Events/onDragOver","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDragOver.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onDragOver","title":"On Drag Over"},"sidebar":"docs","previous":{"title":"On Double Clicked","permalink":"/docs/fr/20-R7/Events/onDoubleClicked"},"next":{"title":"On Drop","permalink":"/docs/fr/20-R7/Events/onDrop"}}'),s=r("785893"),o=r("250065");let i={id:"onDragOver",title:"On Drag Over"},c=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"21"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/FormObjects/tabControl",children:"Tab control"})]}),(0,s.jsx)(n.td,{children:"Les donn\xe9es peuvent \xeatre d\xe9pos\xe9es sur un objet"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Drag Over"})," est envoy\xe9 \xe0 plusieurs reprises \xe0 l'objet de destination lorsque le pointeur de la souris est d\xe9plac\xe9 sur l'objet. G\xe9n\xe9ralement, en r\xe9ponse \xe0 cet \xe9v\xe9nement :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Vous r\xe9cup\xe9rez les donn\xe9es et les signatures pr\xe9sentes dans le conteneur (via la commande ",(0,s.jsx)(n.code,{children:"GET PASTEBOARD DATA"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"En fonction de la nature et du type de donn\xe9es dans le conteneur, vous acceptez ou refusez le glisser-d\xe9poser."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To ",(0,s.jsx)(n.strong,{children:"accept"})," the drag, the destination object method must return 0 (zero).\nTo ",(0,s.jsx)(n.strong,{children:"reject"})," the drag, the object method must return -1 (minus one).\nLors d'un \xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Drag Over"}),", 4D traite la m\xe9thode objet comme une fonction. Si aucun r\xe9sultat n'est retourn\xe9, 4D suppose que le glissement est accept\xe9."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous acceptez le glissement, l'objet de destination est mis en surbrillance. Si vous refusez le glissement, la destination n'est pas mise en surbrillance. Accepter le glissement ne signifie pas que les donn\xe9es d\xe9plac\xe9es vont \xeatre ins\xe9r\xe9es dans l'objet de destination. Cela signifie seulement que si le bouton de la souris \xe9tait rel\xe2ch\xe9 \xe0 ce stade, l'objet de destination accepterait les donn\xe9es gliss\xe9es et l'\xe9v\xe9nement ",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/Events/onDrop",children:(0,s.jsx)(n.code,{children:"On Drop"})}),"\\\\` serait d\xe9clench\xe9."]}),"\n",(0,s.jsxs)(n.p,{children:["Si vous ne traitez pas l'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Drag Over"})," pour un objet d\xe9posable, cet objet sera mis en surbrillance pour toutes les op\xe9rations de glissement, quels que soient la nature et le type des donn\xe9es d\xe9plac\xe9es."]}),"\n",(0,s.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Drag Over"})," est le moyen par lequel vous contr\xf4lez la premi\xe8re phase d'une op\xe9ration de glisser-d\xe9poser. Vous pouvez non seulement tester si les donn\xe9es d\xe9plac\xe9es sont d'un type compatible avec l'objet de destination, puis accepter ou rejeter le glissement; vous pouvez simultan\xe9ment avertir l'utilisateur de ce fait, car 4D met en \xe9vidence (ou non) l'objet de destination, en fonction de votre d\xe9cision."]}),"\n",(0,s.jsxs)(n.p,{children:["Le code g\xe9rant un \xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On Drag Over"})," doit \xeatre court et s'ex\xe9cuter rapidement, car cet \xe9v\xe9nement est envoy\xe9 \xe0 plusieurs reprises \xe0 l'objet de destination courant, en raison des mouvements de la souris."]}),"\n",(0,s.jsx)(n.h3,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"//Destination object method\n #DECLARE : Integer\n If(Form event code=On Drag Over)\n    //returns 0 by default\n    ...\n    If($DataType=Is picture)\n       return -1\n    End if\n    ...\n End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/Events/onBeginDragOver",children:(0,s.jsx)(n.code,{children:"On Begin Drag Over"})})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);