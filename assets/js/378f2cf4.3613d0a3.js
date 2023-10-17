"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18754],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var o=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(r),p=n,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},874878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});r(667294);var o=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const a={id:"forms",title:"Forms Page"},s=void 0,l={unversionedId:"Preferences/forms",id:"version-19/Preferences/forms",title:"Forms Page",description:"This page lets you set the default operation and display of the 4D Form editor.",source:"@site/versioned_docs/version-19/Preferences/forms.md",sourceDirName:"Preferences",slug:"/Preferences/forms",permalink:"/docs/19/Preferences/forms",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Preferences%2Fforms.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"forms",title:"Forms Page"},sidebar:"docs",previous:{title:"Structure Page",permalink:"/docs/19/Preferences/structure"},next:{title:"Methods Page",permalink:"/docs/19/Preferences/methods"}},d={},c=[{value:"Move",id:"move",level:2},{value:"Step using keyboard",id:"step-using-keyboard",level:3},{value:"When moving beyond window limits",id:"when-moving-beyond-window-limits",level:3},{value:"Activate auto alignment by default",id:"activate-auto-alignment-by-default",level:3},{value:"New form default display",id:"new-form-default-display",level:2}],u={toc:c};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,o.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page lets you set the default operation and display of the 4D Form editor."),(0,o.kt)("h2",n({},{id:"move"}),"Move"),(0,o.kt)("p",null,"This group of options sets parameters for moving objects using the keyboard or the mouse in the Form editor."),(0,o.kt)("h3",n({},{id:"step-using-keyboard"}),"Step using keyboard"),(0,o.kt)("p",null,"This option allows setting the value (in points) of the step used for moving or resizing an object using the keyboard and the ",(0,o.kt)("strong",{parentName:"p"},"Shift")," key."),(0,o.kt)("h3",n({},{id:"when-moving-beyond-window-limits"}),"When moving beyond window limits"),(0,o.kt)("p",null,"This option allows setting the behavior of the Form editor when moving an object using the mouse beyond window limits."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Autoscroll"),": When this option is checked, this action causes the scroll of the form in the window, as if you clicked on the scroll bars. This behavior is useful for moving objects in large forms."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Start drag and drop"),": When this option is checked, this action is interpreted as a drag and drop. The form window is not modified and the moved object can be dropped in another window (if its contents are compatible), for example, in another form. This behavior is useful for recycling objects among several forms or using object libraries (see ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/19/FormEditor/objectLibrary#creating-and-using-custom-object-libraries"}),"Creating and using custom object libraries"),").")),(0,o.kt)("p",null,"You can configure this option depending on your work habits and development needs."),(0,o.kt)("h3",n({},{id:"activate-auto-alignment-by-default"}),"Activate auto alignment by default"),(0,o.kt)("p",null,"This option activates auto alignment by default in each new window of the Form editor. It is possible to modify this option individually in each window (refer to ",(0,o.kt)("a",n({parentName:"p"},{href:"/docs/19/FormEditor/overview#using-the-magnetic-grid"}),"Using the magnetic grid"),")."),(0,o.kt)("h2",n({},{id:"new-form-default-display"}),"New form default display"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Limits"),", ",(0,o.kt)("strong",{parentName:"li"},"Rulers"),", ...: check items that must be displayed by default in each new window of the Form editor. It is possible to modify the display of each window individually using the ",(0,o.kt)("strong",{parentName:"li"},"Display")," hierarchical menu of the Form editor. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Color for marker lines"),": modifies the color of the marker lines used in the Form editor to define the different areas (header, breaks, detail and footer, etc.). For more information about markers, refer to ",(0,o.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html"}),"Using output control lines"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Default display shield"),": sets which shields to display by default in each new window of the Form editor. For more information about shields, refer to ",(0,o.kt)("a",n({parentName:"li"},{href:"/docs/19/FormEditor/overview#using-shields"}),"Using shields"),".")))}m.isMDXComponent=!0}}]);