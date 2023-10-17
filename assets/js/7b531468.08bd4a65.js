"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34051],{603905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>A});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),A=a,h=u["".concat(s,".").concat(A)]||u[A]||p[A]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},243292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"verify",title:"Verify Page",sidebar_label:"Verify Page"},l=void 0,s={unversionedId:"MSC/verify",id:"version-20/MSC/verify",title:"Verify Page",description:"You use this page to verify data integrity. The verification can be carried out on records and/or indexes.",source:"@site/versioned_docs/version-20/MSC/verify.md",sourceDirName:"MSC",slug:"/MSC/verify",permalink:"/docs/20/MSC/verify",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fverify.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"verify",title:"Verify Page",sidebar_label:"Verify Page"},sidebar:"docs",previous:{title:"Activity analysis Page",permalink:"/docs/20/MSC/analysis"},next:{title:"Backup Page",permalink:"/docs/20/MSC/backup"}},c={},d=[{value:"Actions",id:"actions",level:2},{value:"Open log file",id:"open-log-file",level:2},{value:"Details",id:"details",level:2}],p={toc:d};function u(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)("wrapper",a({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You use this page to verify data integrity. The verification can be carried out on records and/or indexes.\nThis page only checks the data integrity. If errors are found and repairs are needed, you will be advised to use the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/20/MSC/repair"}),"Repair page"),"."),(0,r.kt)("h2",a({},{id:"actions"}),"Actions"),(0,r.kt)("p",null,"The page contains action buttons that provide direct access to the verification functions."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the database is encrypted, verification includes validation of encrypted data consistency. If no valid data key has already been provided, a dialog requesting the passphrase or the data key is displayed. ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Verify the records and the indexes:")," Starts the total data verification procedure."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Verify the records only"),": Starts the verification procedure for records only (indexes are not verified)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Verify the indexes only"),": Starts the verification procedure for indexes only (records are not verified).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Verification of records and indexes can also be carried out in detail mode, table by table (see the Details section below).")),(0,r.kt)("h2",a({},{id:"open-log-file"}),"Open log file"),(0,r.kt)("p",null,"Regardless of the verification requested, 4D generates a log file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Logs")," folder of the application. This file lists all the verifications carried out and indicates any errors encountered, when applicable (","[OK]"," is displayed when the verification is correct). It is created in XML format and is named: ",(0,r.kt)("em",{parentName:"p"},"ApplicationName"),(0,r.kt)("em",{parentName:"p"},"Verify_Log"),(0,r.kt)("em",{parentName:"p"},"yyyy-mm-dd hh-mm-ss"),".xml where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ApplicationName"),' is the name of the project file without any extension, for example "Invoices",'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"yyyy-mm-dd hh-mm-ss"),' is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".')),(0,r.kt)("p",null,"When you click on the ",(0,r.kt)("strong",{parentName:"p"},"Open log file")," button, 4D displays the most recent log file in the default browser of the machine."),(0,r.kt)("h2",a({},{id:"details"}),"Details"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Table list")," button displays a detailed page that can be used to view and select the actual records and indexes to be checked: "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(206701).Z,width:"882",height:"666"})),(0,r.kt)("p",null,"Specifying the items to be verified lets you save time during the verification procedure. "),(0,r.kt)("p",null,"The main list displays all the tables of the database. For each table, you can limit the verification to the records and/or indexes. Expand the contents of a table or the indexed fields and select/deselect the checkboxes as desired. By default, everything is selected. You can also use the ",(0,r.kt)("strong",{parentName:"p"},"Select all"),", ",(0,r.kt)("strong",{parentName:"p"},"Deselect all"),", ",(0,r.kt)("strong",{parentName:"p"},"All records")," and ",(0,r.kt)("strong",{parentName:"p"},"All indexes")," shortcut buttons. "),(0,r.kt)("p",null,'For each row of the table, the "Action" column indicates the operations to be carried out. When the table is expanded, the "Records" and "Indexed fields" rows indicate the number of items concerned. '),(0,r.kt)("p",null,'The "Status" column displays the verification status of each item using symbols:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),(0,r.kt)("img",{src:n(204964).Z,width:"32",height:"32"})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Verification carried out with no problem"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("img",{src:n(551464).Z,width:"32",height:"32"})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Verification carried out, problems encountered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("img",{src:n(609427).Z,width:"32",height:"32"})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Verification partially carried out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("img",{src:n(363454).Z,width:"32",height:"32"})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Verification not carried out")))),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"Verify")," to begin the verification or on ",(0,r.kt)("strong",{parentName:"p"},"Standard")," to go back to the standard page. "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Open log file")," button can be used to display the log file in the default browser of the machine (see ",(0,r.kt)("a",a({parentName:"p"},{href:"#open-log-file"}),"Open log file")," above)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The standard page will not take any modifications made on the detailed page into account: when you click on a verification button on the standard page, all the items are verified. On the other hand, the settings made on the detailed page are kept from one session to another.")))}u.isMDXComponent=!0},363454:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAyxJREFUWAntVktrU0EUnpv3q6YkBgIRQhZiQ3FTalfFhQvFlYouXdimtCkIbty4LRQq/oGkWbnopgiK1CCIBn+AxDxWpoU0fYTYJBiaV/P0G9uETO6NnXu37YXLnXNmznzfnNdcQi6fi+4BQa4DQqHQNUEQXuGd7nQ6nna7Pa5Wq/MqlSrdarW+Y/xmYWGhyLsvN4FIJKJJpVIr2PiFy+XSWq1WrcFgIDqdjpycnJB6vU4KhUI9l8u1sGZ1aWlpjYcEN4H19fW3FovlsdfrNWu12pF7UyLJZLJcq9XWlpeXV0cuPJvgIgC334G7t2ZmZoz/A++BVatVEo1G65BvwBOZnl7qq5JSDuu63e5zj8cjAj8+PiYHBweEAg4+JpOJ2O32JuyeDOqlxrwEZsfGxhh7JBxJJBK1/f39jVgsVgcYM4/1FiTmFKOUEHgJ2Ghsi8Vi/93b2yOohM8+n+8pwtNqNBrM9giVgIq4yiglBI2EjlHhZAJy4Nv29raBmYCAuS0k5z0AqfV6PTNdLpc7KNEdRikhnEsAp6S+vSthSwKBwG24OTwxMWEcns/n81UQfDesH5a5QjBsRGWc/BbIfZqcnDSjJzBL0ul0A6ePoQIizISEoIhAMBjUAvwDeoJlGBxV0To8PDxCVB5J4IlU54ZAZHGqeIhSs9hsNmZ6d3e3AfAsyM3Oz88fMZMjBEUEEPf7DoeDqUtaITh9AXGfhuvzI/BEakUhwAmv4x5guijK8g/KEdj84JSNIg+AwDjKjJZh/0SVSkWPi+lnX8E5UEQAGf4lm83+HsQAmUaz2SwM6njGjBt5DHprACigD7g1Gs0VvL/m5ubo5SP7UUQAndELpPcIhQvl1kYb1mD8cnFxMSCXgWwC4XBYj2zfwe3ocjqd//Bw95N4PF5BCB74/f6vckjIroJMJjOFZDP3wCmY0WgkbrfbDG88o7KcRzYBgFB3izDOdKN/lUQWpwrZBFDrP3A1N/H/19+SXsXogmVUx0ZfyTkQH4XDENk/jW74EaEwwSNd5IAO8mv8Da9wmDNLFBGgO2xubupKpdJNDK3wSlxuB2RYXAoX2gN/AddTRky3uT9tAAAAAElFTkSuQmCC"},551464:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAnt0sENABAMhWHEWh2oE3WgDsYA2gtJXX7HJzz5qjUWAggggAACnwV61G9mK8pfM1U9+mZ2qYhkW1e5u4fnRpgWhjwg/QPZzAqnQxUCCCCAAAI1AhspZwlZmOIJVwAAAABJRU5ErkJggg=="},609427:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAkJJREFUWAntVrtKA0EUnV0TXwQfiYhFjJWmUxsRbC0s/RML8SeEkMI/sUxhK4iN2hkbjYIiJpogUYnuOmfk7o67M7NjgiCYbW6yc+45Z+6dxzLWf/oV+OsVaOzsLPp7e0M/8Qk88mxyXBOovr295jnsqH5zXbE1ARzwIo/nm/gxpjUAcT/lVsaWF4bTufEVGxMkDjzykA8ekwmlgUB8qZhJT02wsaX50SQT38SBF3nFTJIJJ+oOvUP5xMw5SfD4PmudXrQ79eZxLj+74WxtvdFYVJw5IW3n4Ym1Tqqvrs9Ws6XSGeVQjFVgslA45wRHLzf3bcZFg4eTqiphEke+4OF8gjcgC3+EVsN3LImUKuE67qbne/ui57zs8swhTrhoxSQppjQAgJWJ+0cvPT3pojLdiENHa8DGxMvVXWNkbibbrXiigUQTAMiPZdnlFGMFCGhsRwCy6znBKcZ2AQ3IEVsOC67De46yy2P0G+8xDpy8RWlcF60MoAJitfMFJ3quYMN7LEjggFdAlK8SW2BVfqLuYg0YK2AUxyFzeduwOazInypqDSSJ45BpV2uDiL2YUBqwEced4KZSecReTMQM2IrjeM3u7jYRezERM/BYqxV5SVdH8tNWxyu2nMmE4OF8glexCGIGcGU6H95667T63HlofqUkrG6dCeSDB3yqqxjk2m0YfpQsZHClqr4DohOS24eZC/F3byNXLh9GsfRfawAAYWLAPcD3gelKJTJEMoE2YuYmcTlP+/u3v4q1wv2Bf1OBT4kWIelsqx4WAAAAAElFTkSuQmCC"},204964:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAfpJREFUWAljYBgFoyEwGgI0DgHrTc+18VnBhE+SUjnrLS/6/v//f9Fy87MAXGbRzAFAy/s5mBjSNCX4mZkZGZficgQjLpdRIg61PFVbUpCbhYmR4euvPwxXX3789vf//+jjvlIbkM2megigWw6yjJuNhUGSlxMYIAxTQq/+ZyPJAcA4JDqUsFkOsuzV15//nn389p71H4vDam3GX8gOwGu4zebnDgz//09hZGN1Pewh+hxZIzobn+X333x+z/qfxeKAv9gddH04o8B203P7/wz/twrzcKr///37lO2O15LommF8oOV9wPCFxzlMHORzfJaD1GF1AMjn/xj/b9MU4+dSFuZmkRHgFsflCKjP02AJjhTLQWoxosB223OtP3/+n9cQ42MT5ESkl2efvv9+8uHrS0ZWVjNYdJAb7DBHYnUAKNHZbnm+hJOVxV9bnJ+bCZiNYADmiP/srOYMv/6WkhvsMPOwOgAkSMgRj99//cXBwsRAbrATdAAhR7z88vONMBebCKiQgQFiEhxMLTKNMAFZFMoGh8RmYHSwAaNDQoAbyT4U1eRaDjIErwNACgg5ghLLiXIAPkdQajnRDsBwBDB3vPn+i2AhA9JHCBCMAmQDYNHBysIU9OvPv6+4ildkPVRngxxhufl5l8PGVypUN3zUwNEQGA2BgQgBAH6SPzdNKo9/AAAAAElFTkSuQmCC"},206701:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/MSC_Verify-8011610125009120b0db711841a97965.png"}}]);