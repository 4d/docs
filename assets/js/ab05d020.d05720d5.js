/*! For license information please see ab05d020.d05720d5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53957],{332781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(474848),r=t(28453);const i={id:"variant",title:"Variant"},s=void 0,o={id:"Concepts/variant",title:"Variant",description:"Variant is a variable type which allows encapsulating data of any valid regular type in a variable. Typically, this variable type can be used to write generic code returning or receiving values for which the type is not known. This is the case for example for code handling object attributes.",source:"@site/versioned_docs/version-19/Concepts/dt_variant.md",sourceDirName:"Concepts",slug:"/Concepts/variant",permalink:"/docs/19/Concepts/variant",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_variant.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"variant",title:"Variant"},sidebar:"docs",previous:{title:"Time",permalink:"/docs/19/Concepts/time"},next:{title:"Variables",permalink:"/docs/19/Concepts/variables"}},l={},c=[];function d(e){const n={blockquote:"blockquote",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Variant is a variable type which allows encapsulating data of any valid regular type in a variable. Typically, this variable type can be used to write generic code returning or receiving values for which the type is not known. This is the case for example for code handling object attributes."}),"\n",(0,a.jsx)(n.p,{children:"A variant type variable can contain a value of the following data types:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"BLOB"}),"\n",(0,a.jsx)(n.li,{children:"boolean"}),"\n",(0,a.jsx)(n.li,{children:"collection"}),"\n",(0,a.jsx)(n.li,{children:"date"}),"\n",(0,a.jsx)(n.li,{children:"longint"}),"\n",(0,a.jsx)(n.li,{children:"object"}),"\n",(0,a.jsx)(n.li,{children:"picture"}),"\n",(0,a.jsx)(n.li,{children:"pointer"}),"\n",(0,a.jsx)(n.li,{children:"real"}),"\n",(0,a.jsx)(n.li,{children:"text"}),"\n",(0,a.jsx)(n.li,{children:"time"}),"\n",(0,a.jsx)(n.li,{children:"null"}),"\n",(0,a.jsx)(n.li,{children:"undefined"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Arrays cannot be stored in variant variables."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In both interpreted and in compiled modes, a same variant variable can be assigned contents of different types. Unlike regular variable types, the variant variable content type is different from the variant variable type itself. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'C_VARIANT($variant)\n\n$variant:="hello world"\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 2 (Is text)\n\n$variant:=42\n$vtype:=Type($variant) // 12 (Is variant)\n$vtypeVal:=Value type($variant) // 1 (Is real)\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can use variant variables wherever variables are expected, you only need to make sure than the variable content data type is of the expected type. When accessing variant variables, only their current value is taken into account. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'C_VARIANT($v)\n$v:="hello world"\n$v2:=$v //assign variable to another variable\n\n$t:=Type($v) // 12 (Is variant)\n$t2:=Type($v2) // 2 (Is text)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Variant can be used to declare method parameters ($0, $1,...) that can be of various types. In this case, you can build your code by testing the parameter value type, for example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"C_VARIANT($1)\nCase of\n: (Value type($1)=Is longint)\n...\n: (Value type($1)=Is text)\n...\nEnd case\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"When variant variables are not necessary (i.e. when the data type is known), it is recommended to use regular typed variables. Regular typed variables provide better performance, make code more clear and are helpful for the compiler to prevent bugs related to passing unexpected data types."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var a=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,i={},c=null,d=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,a)&&!l.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===i[a]&&(i[a]=n[a]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(296540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);