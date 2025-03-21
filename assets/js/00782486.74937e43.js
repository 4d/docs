"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2946"],{543044:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"ORDA/client-server-optimization","title":"Client/Server Optimization","description":"4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. These optimizations speed up the execution of your 4D application by reducing drastically the volume of information transmitted over the network. They include:","source":"@site/versioned_docs/version-20-R8/ORDA/client-server-optimization.md","sourceDirName":"ORDA","slug":"/ORDA/client-server-optimization","permalink":"/docs/ORDA/client-server-optimization","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fclient-server-optimization.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"client-server-optimization","title":"Client/Server Optimization"},"sidebar":"docs","previous":{"title":"Privileges","permalink":"/docs/ORDA/privileges"},"next":{"title":"Glossary","permalink":"/docs/ORDA/glossary"}}'),i=n("785893"),o=n("250065");let r={id:"client-server-optimization",title:"Client/Server Optimization"},a=void 0,l={},c=[{value:"Supported architectures",id:"supported-architectures",level:2},{value:"Optimization context",id:"optimization-context",level:2},{value:"Example",id:"example",level:3},{value:"Reusing the <code>context</code> property",id:"reusing-the-context-property",level:3},{value:"Entity selection-based list box",id:"entity-selection-based-list-box",level:3},{value:"Preconfiguring contexts",id:"preconfiguring-contexts",level:3},{value:"ORDA cache",id:"orda-cache",level:2}];function d(e){let t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"4D provides optimizations for ORDA requests that use entity selections or load entities in client/server architectures. These optimizations speed up the execution of your 4D application by reducing drastically the volume of information transmitted over the network. They include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.strong,{children:"optimization context"})]}),"\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.strong,{children:"ORDA cache"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"supported-architectures",children:"Supported architectures"}),"\n",(0,i.jsx)(t.p,{children:"ORDA client/server architectures that support the optimization are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Server datastores accessed by 4D remote desktop applications through ",(0,i.jsx)(t.a,{href:"/docs/commands/ds",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"ds"})})}),","]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/ORDA/datastores",children:"Remote datastores"}),", accessed via ",(0,i.jsx)(t.a,{href:"/docs/commands/open-datastore",children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"Open datastore"})})})," (client REST requests)."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"optimization-context",children:"Optimization context"}),"\n",(0,i.jsx)(t.p,{children:"The optimization context is based upon the following implementations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. It will be dynamically updated if other attributes are used afterwards. The following methods and functions trigger the learning phase:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/commands/create-entity-selection",children:(0,i.jsx)(t.code,{children:"Create entity selection"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#fromcollection",children:(0,i.jsx)(t.code,{children:"dataClass.fromCollection()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#all",children:(0,i.jsx)(t.code,{children:"dataClass.all()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#get",children:(0,i.jsx)(t.code,{children:"dataClass.get()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#query",children:(0,i.jsx)(t.code,{children:"dataClass.query()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#query",children:(0,i.jsx)(t.code,{children:"entitySelection.query()"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example, in an ",(0,i.jsx)(t.a,{href:"#entity-selection-based-list-box",children:"entity selection-based list box"}),", the learning phase takes place during the display of the first row. the display of the next rows is optimized. The following functions automatically associate the optimization context of the source entity selection to the returned entity selection:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#and",children:(0,i.jsx)(t.code,{children:"entitySelection.and()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#minus",children:(0,i.jsx)(t.code,{children:"entitySelection.minus()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#or",children:(0,i.jsx)(t.code,{children:"entitySelection.or()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#orderby",children:(0,i.jsx)(t.code,{children:"entitySelection.orderBy()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#slice",children:(0,i.jsx)(t.code,{children:"entitySelection.slice()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#drop",children:(0,i.jsx)(t.code,{children:"entitySelection.drop()"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see ",(0,i.jsx)(t.a,{href:"#reusing-the-context-property",children:"Reusing the context property"})," below)."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You can build optimization contexts manually using the ",(0,i.jsx)(t.a,{href:"/docs/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(t.code,{children:"dataStore.setRemoteContextInfo()"})})," function (see ",(0,i.jsx)(t.a,{href:"#preconfiguring-contexts",children:"Preconfiguring contexts"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(617897).Z+"",width:"3439",height:"2018"})}),"\n",(0,i.jsx)(t.admonition,{title:"Compatibility Note",type:"note",children:(0,i.jsxs)(t.p,{children:["Contexts handled in connections established through ",(0,i.jsx)(t.a,{href:"/docs/commands/open-datastore",children:(0,i.jsx)(t.code,{children:"Open datastore"})})," can only be used between similar main versions of 4D. For example, a 4D 20.x remote application can only use contexts of a 4D Server 20.x datastore."]})}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Given the following code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table\n End for each\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in ",(0,i.jsx)(t.em,{children:"$sel"})," from the second iteration of the loop."]}),"\n",(0,i.jsxs)(t.h3,{id:"reusing-the-context-property",children:["Reusing the ",(0,i.jsx)(t.code,{children:"context"})," property"]}),"\n",(0,i.jsxs)(t.p,{children:["You can increase the benefits of the optimization by using the ",(0,i.jsx)(t.strong,{children:"context"}),' property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA functions that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.']}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["You can also create contexts using the ",(0,i.jsx)(t.a,{href:"/docs/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(t.code,{children:".setRemoteContextInfo()"})})," function."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. All ORDA functions that handle entity selections support the ",(0,i.jsx)(t.strong,{children:"context"})," property (for example ",(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#query",children:(0,i.jsx)(t.code,{children:"dataClass.query()"})})," or ",(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#all",children:(0,i.jsx)(t.code,{children:"dataClass.all()"})}),"). Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the ",(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#get",children:(0,i.jsx)(t.code,{children:"dataClass.get()"})})," function)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Example with ",(0,i.jsx)(t.code,{children:"dataClass.query()"}),":"]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n\n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n\n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n\n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n\n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n'})}),"\n",(0,i.jsx)(t.h3,{id:"entity-selection-based-list-box",children:"Entity selection-based list box"}),"\n",(0,i.jsx)(t.p,{children:"Entity selection optimization is automatically applied to entity selection-based list boxes in 4D client/server desktop applications, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server."}),"\n",(0,i.jsxs)(t.p,{children:['A specific "page mode" context is also provided when loading the current entity through the ',(0,i.jsx)(t.strong,{children:"Current item"})," property expression of the list box (see ",(0,i.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#list-box-types",children:"Collection or entity selection type list boxes"}),'). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of ',(0,i.jsx)(t.strong,{children:"Current item"})," expression will create/use the page context (access through ",(0,i.jsx)(t.code,{children:"entitySelection\\[index]"})," will alter the entity selection context)."]}),"\n",(0,i.jsx)(t.p,{children:"Subsequent requests to server sent by entity browsing functions will also support this optimization. The following functions automatically associate the optimization context of the source entity to the returned entity:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntityClass#next",children:(0,i.jsx)(t.code,{children:"entity.next()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntityClass#first",children:(0,i.jsx)(t.code,{children:"entity.first()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntityClass#last",children:(0,i.jsx)(t.code,{children:"entity.last()"})})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/EntityClass#previous",children:(0,i.jsx)(t.code,{children:"entity.previous()"})})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:" $myEntity:=Form.currentElement //current item expression\n  //... do something\n $myEntity:=$myEntity.next() //loads the next entity using the same context\n"})}),"\n",(0,i.jsx)(t.h3,{id:"preconfiguring-contexts",children:"Preconfiguring contexts"}),"\n",(0,i.jsx)(t.p,{children:"An optimization context should be defined for every feature or algorithm of your application, in order to have the best performances. For example, a context can be used for queries on customers, another context for queries on products, etc."}),"\n",(0,i.jsx)(t.p,{children:"If you want to deliver final applications with the highest level of optimization, you can preconfigure your contexts and thus save learning phases by following these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Design your algorithms."}),"\n",(0,i.jsx)(t.li,{children:"Run your application and let the automatic learning mechanism fill the optimization contexts."}),"\n",(0,i.jsxs)(t.li,{children:["Call the ",(0,i.jsx)(t.a,{href:"/docs/API/DataStoreClass#getremotecontextinfo",children:(0,i.jsx)(t.code,{children:"dataStore.getRemoteContextInfo()"})})," or ",(0,i.jsx)(t.a,{href:"/docs/API/DataStoreClass#getallremotecontexts",children:(0,i.jsx)(t.code,{children:"dataStore.getAllRemoteContexts()"})})," function to collect  contexts. You can use the ",(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#getremotecontextattributes",children:(0,i.jsx)(t.code,{children:"entitySelection.getRemoteContextAttributes()"})})," and ",(0,i.jsx)(t.a,{href:"/docs/API/EntityClass#getremotecontextattributes",children:(0,i.jsx)(t.code,{children:"entity.getRemoteContextAttributes()"})})," functions to analyse how your algorithms use attributes."]}),"\n",(0,i.jsxs)(t.li,{children:["In the final step, call the ",(0,i.jsx)(t.a,{href:"/docs/API/DataStoreClass#setremotecontextinfo",children:(0,i.jsx)(t.code,{children:"dataStore.setRemoteContextInfo()"})})," function to build contexts at application startup and ",(0,i.jsx)(t.a,{href:"#reusing-the-context-property",children:"use them"})," in your algorithms."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"orda-cache",children:"ORDA cache"}),"\n",(0,i.jsx)(t.p,{children:"For optimization reasons, data requested from the server via ORDA is loaded in the ORDA remote cache (which is different from the 4D cache). The ORDA cache is organized by dataclass, and expires after 30 seconds."}),"\n",(0,i.jsx)(t.p,{children:"The data contained in the cache is considered as expired when the timeout is reached. Any access to expired data will send a request to the server. Expired data remains in the cache until space is needed."}),"\n",(0,i.jsxs)(t.p,{children:["You can force entity selection data in the ORDA cache to expire at any moment by using the ",(0,i.jsx)(t.a,{href:"/docs/API/EntitySelectionClass#refresh",children:(0,i.jsx)(t.code,{children:"refresh()"})})," function."]}),"\n",(0,i.jsx)(t.p,{children:"By default, the ORDA cache is transparently handled by 4D. However, you can control its contents using the following ORDA class functions:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#setremotecachesettings",children:"dataClass.setRemoteCacheSettings()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#getremotecache",children:"dataClass.getRemoteCache()"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/API/DataClassClass#clearremotecache",children:"dataClass.clearRemoteCache()"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},617897:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var s=n(667294);let i={},o=s.createContext(i);function r(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);