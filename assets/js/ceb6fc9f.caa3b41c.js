/*! For license information please see ceb6fc9f.caa3b41c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91895],{78102:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=s(474848),t=s(28453);const r={id:"shared",title:"Shared objects and collections"},c=void 0,a={id:"Concepts/shared",title:"Shared objects and collections",description:"Shared objects and shared collections are specific objects and collections whose contents are shared between processes. In contrast to interprocess variables, shared objects and shared collections have the advantage of being compatible with preemptive 4D processes: they can be passed by reference as parameters to commands such as New process or CALL WORKER.",source:"@site/versioned_docs/version-20-R5/Concepts/shared.md",sourceDirName:"Concepts",slug:"/Concepts/shared",permalink:"/docs/20-R5/Concepts/shared",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fshared.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"shared",title:"Shared objects and collections"},sidebar:"docs",previous:{title:"Parameters",permalink:"/docs/20-R5/Concepts/parameters"},next:{title:"Classes",permalink:"/docs/20-R5/Concepts/classes"}},i={},l=[{value:"Using shared objects or collections",id:"using-shared-objects-or-collections",level:2},{value:"Modification",id:"modification",level:3},{value:"Read",id:"read",level:3},{value:"Duplication",id:"duplication",level:3},{value:"Storage",id:"storage",level:3},{value:"Use...End use",id:"useend-use",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Shared objects"})," and ",(0,o.jsx)(n.strong,{children:"shared collections"})," are specific ",(0,o.jsx)(n.a,{href:"/docs/20-R5/Concepts/object",children:"objects"})," and ",(0,o.jsx)(n.a,{href:"/docs/20-R5/Concepts/collection",children:"collections"})," whose contents are shared between processes. In contrast to ",(0,o.jsx)(n.a,{href:"/docs/20-R5/Concepts/variables#interprocess-variables",children:"interprocess variables"}),", shared objects and shared collections have the advantage of being compatible with ",(0,o.jsx)(n.strong,{children:"preemptive 4D processes"}),": they can be passed by reference as parameters to commands such as ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page317.html",children:(0,o.jsx)(n.code,{children:"New process"})})," or ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1389.html",children:(0,o.jsx)(n.code,{children:"CALL WORKER"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Shared objects and shared collections are stored in standard ",(0,o.jsx)(n.a,{href:"/docs/20-R5/Concepts/object",children:(0,o.jsx)(n.code,{children:"Object"})})," and ",(0,o.jsx)(n.a,{href:"/docs/20-R5/Concepts/collection",children:(0,o.jsx)(n.code,{children:"Collection"})})," type variables, but must be instantiated using specific commands:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["to create a shared object, use the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1471.html",children:(0,o.jsx)(n.code,{children:"New shared object"})})," command or call the ",(0,o.jsx)(n.a,{href:"/docs/20-R5/API/ClassClass#new",children:(0,o.jsx)(n.code,{children:"new()"})})," function of a ",(0,o.jsx)(n.a,{href:"/docs/20-R5/Concepts/classes#shared-classes",children:"shared class"}),","]}),"\n",(0,o.jsxs)(n.li,{children:["to create a shared collection, use the ",(0,o.jsx)(n.a,{href:"/docs/20-R5/API/CollectionClass#new-shared-collection",children:(0,o.jsx)(n.code,{children:"New shared collection"})})," command."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Shared objects and collections can only contain scalar values or other shared objects and collections. However, shared objects and collections can be set as properties of standard (not shared) objects or collections."}),"\n",(0,o.jsxs)(n.p,{children:["In order to modify a shared object/collection, the ",(0,o.jsx)(n.strong,{children:"Use...End use"})," structure must be called. Reading a shared object/collection value does not require ",(0,o.jsx)(n.strong,{children:"Use...End use"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["A unique, global catalog returned by the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1525.html",children:(0,o.jsx)(n.code,{children:"Storage"})})," command is always available throughout the application and its components, and can be used to store all shared objects and collections."]}),"\n",(0,o.jsx)(n.h2,{id:"using-shared-objects-or-collections",children:"Using shared objects or collections"}),"\n",(0,o.jsxs)(n.p,{children:["Once instantiated with the ",(0,o.jsx)(n.code,{children:"New shared object"})," or ",(0,o.jsx)(n.code,{children:"New shared collection"})," commands, shared object/collection properties and elements can be modified or read from any process of the application, under certain conditions."]}),"\n",(0,o.jsx)(n.h3,{id:"modification",children:"Modification"}),"\n",(0,o.jsx)(n.p,{children:"Modifications can be applied to shared objects and shared collections:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"adding or removing object properties,"}),"\n",(0,o.jsx)(n.li,{children:"adding or editing values (provided they are supported in shared objects), including other shared objects or collections (which creates a shared group, see below)."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Keep in mind that objects or collections set as the content of a shared object or collection must themselves be shared."})}),"\n",(0,o.jsxs)(n.p,{children:["All modification instructions in a shared object or collection require to be protected inside a ",(0,o.jsx)(n.a,{href:"#use-end-use",children:(0,o.jsx)(n.code,{children:"Use...End use"})})," block, otherwise an error is generated."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' $s_obj:=New shared object("prop1";"alpha")\n Use($s_obj)\n    $s_obj.prop1:="omega"\n End Use\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For conveniency, all ",(0,o.jsx)(n.a,{href:"/docs/20-R5/API/CollectionClass",children:"collection functions"})," that modify the shared object or collection insert an internal ",(0,o.jsx)(n.code,{children:"Use...End use"})," block so you do not have to code it yourself. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$col:=New shared collection()\n$col.push("alpha") //.push() internally triggers Use/End use, so no need to do it yourselves\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If you need to execute several modifications on the same collection, you can protect all modifications with a single ",(0,o.jsx)(n.code,{children:"Use...End use"})," so that modifications are performed atomically."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'$col:=Storage.mySharedCollection\nUse($col)\n\t$col[0]:="omega" //modifying an element requires to be performed inside Use/End use\n\t$col.push("alpha") //.push() internally triggers Use/End use, but we want to do both modifications atomically\nEnd Use\n'})}),"\n",(0,o.jsxs)(n.p,{children:["A shared object/collection can only be modified by one process at a time. ",(0,o.jsx)(n.code,{children:"Use"})," locks the shared object/collection from other threads, while ",(0,o.jsx)(n.code,{children:"End use"})," unlocks the shared object/collection (if the locking counter is at 0, see below). . Trying to modify a shared object/collection without at least one ",(0,o.jsx)(n.code,{children:"Use...End use"})," generates an error. When a process calls ",(0,o.jsx)(n.code,{children:"Use...End use"})," on a shared object/collection that is already in use by another process, it is simply put on hold until the ",(0,o.jsx)(n.code,{children:"End use"})," unlocks it (no error is generated). Consequently, instructions within ",(0,o.jsx)(n.code,{children:"Use...End use"})," structures should execute quickly and unlock the elements as soon as possible. Thus, it is strongly advised to avoid modifying a shared object or collection directly from the interface, e.g. through a dialog box."]}),"\n",(0,o.jsxs)(n.p,{children:["Assigning shared objects/collections to properties or elements of other shared objects/collections is allowed and creates ",(0,o.jsx)(n.strong,{children:"shared groups"}),". A shared group is automatically created when a shared object/collection is set as property value or element of another shared object/collection. Shared groups allow nesting shared objects and collections but enforce additional rules:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Calling ",(0,o.jsx)(n.code,{children:"Use"})," on a shared object/collection belonging to a group locks properties/elements of all shared objects/collections of the group and increments its locking counter. Calling ",(0,o.jsx)(n.code,{children:"End use"})," decrements the locking counter of the group and when the counter is at 0, all the linked shared objects/collections are unlocked."]}),"\n",(0,o.jsx)(n.li,{children:"A shared object/collection can only belong to one shared group. An error is returned if you try to set an already grouped shared object/collection to a different group."}),"\n",(0,o.jsx)(n.li,{children:"Grouped shared objects/collections cannot be ungrouped. Once included in a shared group, a shared object/collection is linked permanently to that group during the whole session. Even if all references of an object/collection are removed from the parent object/collection, they will remain linked."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Please refer to example 2 for an illustration of shared group rules."}),"\n",(0,o.jsx)(n.h3,{id:"read",children:"Read"}),"\n",(0,o.jsxs)(n.p,{children:["Reading properties or elements of a shared object/collection is allowed without having to call the ",(0,o.jsx)(n.code,{children:"Use...End use"})," structure, even if the shared object/collection is in use by another process."]}),"\n",(0,o.jsxs)(n.p,{children:["However, it is necessary to read a shared object/collection within ",(0,o.jsx)(n.code,{children:"Use...End use"})," when several values are linked together and must be read at once, for consistency reasons."]}),"\n",(0,o.jsx)(n.h3,{id:"duplication",children:"Duplication"}),"\n",(0,o.jsxs)(n.p,{children:["Calling ",(0,o.jsx)(n.code,{children:"OB Copy"})," with a shared object (or with an object containing shared object(s) as properties) is possible, but will return a standard (not shared) object including its contained objects (if any)."]}),"\n",(0,o.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Storage"})," is a unique shared object, automatically available on each application and machine. This shared object is returned by the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1525.html",children:(0,o.jsx)(n.code,{children:"Storage"})})," command. You can use this object to reference all shared objects/collections defined during the session that you want to be available from any preemptive or standard processes."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that, unlike standard shared objects, the ",(0,o.jsx)(n.code,{children:"storage"})," object does not create a shared group when shared objects/collections are added as its properties. This exception allows the ",(0,o.jsx)(n.strong,{children:"Storage"})," object to be used without locking all connected shared objects or collections."]}),"\n",(0,o.jsxs)(n.p,{children:["For more information, refer to the ",(0,o.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1525.html",children:(0,o.jsx)(n.code,{children:"Storage"})})," command description."]}),"\n",(0,o.jsx)(n.h2,{id:"useend-use",children:"Use...End use"}),"\n",(0,o.jsxs)(n.p,{children:["The formal syntax of the ",(0,o.jsx)(n.code,{children:"Use...End use"})," structure is:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" Use(Shared_object_or_Shared_collection)\n    statement(s)\n End use\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Use...End use"})," structure defines a sequence of statements that will execute tasks on the ",(0,o.jsx)(n.em,{children:"Shared_object_or_Shared_collection"})," parameter under the protection of an internal semaphore. ",(0,o.jsx)(n.em,{children:"Shared_object_or_Shared_collection"})," can be any valid shared object or shared collection."]}),"\n",(0,o.jsxs)(n.p,{children:["Shared objects and shared collections are designed to allow communication between processes, in particular, ",(0,o.jsx)(n.strong,{children:"preemptive 4D processes"}),". They can be passed by reference as parameters from a process to another one. Surrounding modifications on shared objects or shared collections by the ",(0,o.jsx)(n.code,{children:"Use...End use"})," keywords is mandatory to prevent concurrent access between processes."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Once the ",(0,o.jsx)(n.strong,{children:"Use"})," line is successfully executed, all ",(0,o.jsx)(n.em,{children:"Shared_object_or_Shared_collection"})," properties/elements are locked for all other process in write access until the corresponding ",(0,o.jsx)(n.code,{children:"End use"})," line is executed."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"statement(s)"})," sequence can execute any modification on the Shared_object_or_Shared_collection properties/elements without risk of concurrent access."]}),"\n",(0,o.jsxs)(n.li,{children:["If another shared object or collection is added as a property of the ",(0,o.jsx)(n.em,{children:"Shared_object_or_Shared_collection"})," parameter, they become connected within the same shared group."]}),"\n",(0,o.jsxs)(n.li,{children:["If another process tries to access one of the ",(0,o.jsx)(n.em,{children:"Shared_object_or_Shared_collection"})," properties or connected properties while a ",(0,o.jsx)(n.strong,{children:"Use...End use"})," sequence is being executed, it is automatically put on hold and waits until the current sequence is terminated."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.strong,{children:"End use"})," line unlocks the ",(0,o.jsx)(n.em,{children:"Shared_object_or_Shared_collection"})," properties and all objects of the same group."]}),"\n",(0,o.jsxs)(n.li,{children:["Several ",(0,o.jsx)(n.strong,{children:"Use...End use"})," structures can be nested in the 4D code. In the case of a group, each ",(0,o.jsx)(n.strong,{children:"Use"})," increments the locking counter of the group and each ",(0,o.jsx)(n.strong,{children:"End use"})," decrements it; all properties/elements will be released only when the last ",(0,o.jsx)(n.strong,{children:"End use"})," call sets the locking counter to 0."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["The following functions automatically trigger an internal ",(0,o.jsx)(n.strong,{children:"Use/End use"}),", making an explicit call to the structure unnecessary when the function is executed:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/20-R5/API/CollectionClass",children:"collection functions"})," that modify shared collections"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/20-R5/Concepts/classes#shared-functions",children:"shared functions"})," (defined in ",(0,o.jsx)(n.a,{href:"/docs/20-R5/Concepts/classes#shared-classes",children:"shared classes"}),")."]}),"\n"]})]}),"\n",(0,o.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsx)(n.p,{children:"You want to launch several processes that perform an inventory task on different products and update the same shared object. The main process instantiates an empty shared object and then, launches the other processes, passing the shared object and the products to count as parameters:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' ARRAY TEXT($_items;0)\n ... //fill the array with items to count\n $nbItems:=Size of array($_items)\n var $inventory : Object\n $inventory:=New shared object\n Use($inventory)\n    $inventory.nbItems:=$nbItems\n End use\n\n  //Create processes\n For($i;1;$nbItems)\n    $ps:=New process("HowMany";0;"HowMany_"+$_items{$i};$_items{$i};$inventory)\n  //$inventory object sent by reference\n End for\n'})}),"\n",(0,o.jsx)(n.p,{children:'In the "HowMany" method, inventory is done and the $inventory shared object is updated as soon as possible:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\t//HowMany\n #DECLARE ($what : Text ; $inventory : Object)\n\n $count:=CountMethod($what) //method to count products\n Use($inventory) //use shared object\n    $inventory[$what]:=$count  //save the results for this item\n End use\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.p,{children:"The following examples highlight specific rules when handling shared groups:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" $ob1:=New shared object\n $ob2:=New shared object\n Use($ob1)\n    $ob1.a:=$ob2  //group 1 is created\n End use\n\n $ob3:=New shared object\n $ob4:=New shared object\n Use($ob3)\n    $ob3.a:=$ob4  //group 2 is created\n End use\n\n Use($ob1) //use an object from group 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 already belongs to another group\n  //assignment is not allowed\n End use\n\n Use($ob3)\n    $ob3.a:=Null //remove any reference to $ob4 from group 2\n End use\n\n Use($ob1) //use an object from group 1\n    $ob1.b:=$ob4  //ERROR\n  //$ob4 still belongs to group 2\n  //assignment is not allowed\n End use\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,n,s)=>{var o=s(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var o,r={},l=null,d=null;for(o in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,o)&&!i.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:t,type:e,key:l,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var o=s(296540);const t={},r=o.createContext(t);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);