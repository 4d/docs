"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64245"],{265541:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"MSC/verify","title":"Verify Page","description":"You use this page to verify data integrity. The verification can be carried out on records and/or indexes.","source":"@site/versioned_docs/version-20-R7/MSC/verify.md","sourceDirName":"MSC","slug":"/MSC/verify","permalink":"/docs/20-R7/MSC/verify","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Fverify.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"verify","title":"Verify Page","sidebar_label":"Verify Page"},"sidebar":"docs","previous":{"title":"Activity analysis Page","permalink":"/docs/20-R7/MSC/analysis"},"next":{"title":"Backup Page","permalink":"/docs/20-R7/MSC/backup"}}'),s=i("785893"),r=i("250065");let o={id:"verify",title:"Verify Page",sidebar_label:"Verify Page"},a=void 0,d={},l=[{value:"Actions",id:"actions",level:2},{value:"Open log file",id:"open-log-file",level:2},{value:"Details",id:"details",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You use this page to verify data integrity. The verification can be carried out on records and/or indexes.\nThis page only checks the data integrity. If errors are found and repairs are needed, you will be advised to use the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/MSC/repair",children:"Repair page"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(n.p,{children:"The page contains action buttons that provide direct access to the verification functions."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the database is encrypted, verification includes validation of encrypted data consistency. If no valid data key has already been provided, a dialog requesting the passphrase or the data key is displayed."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Verify the records and the indexes:"})," Starts the total data verification procedure."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Verify the records only"}),": Starts the verification procedure for records only (indexes are not verified)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Verify the indexes only"}),": Starts the verification procedure for indexes only (records are not verified)."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Verification of records and indexes can also be carried out in detail mode, table by table (see the Details section below)."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"open-log-file",children:"Open log file"}),"\n",(0,s.jsxs)(n.p,{children:["Regardless of the verification requested, 4D generates a log file in the ",(0,s.jsx)(n.code,{children:"Logs"})," folder of the application. This file lists all the verifications carried out and indicates any errors encountered, when applicable ([OK] is displayed when the verification is correct). It is created in XML format and is named: ",(0,s.jsx)(n.em,{children:"ApplicationName"}),(0,s.jsx)(n.em,{children:"Verify_Log"}),(0,s.jsx)(n.em,{children:"yyyy-mm-dd hh-mm-ss"}),".xml where:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"ApplicationName"}),' is the name of the project file without any extension, for example "Invoices",']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"yyyy-mm-dd hh-mm-ss"}),' is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".']}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When you click on the ",(0,s.jsx)(n.strong,{children:"Open log file"})," button, 4D displays the most recent log file in the default browser of the machine."]}),"\n",(0,s.jsx)(n.h2,{id:"details",children:"Details"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Table list"})," button displays a detailed page that can be used to view and select the actual records and indexes to be checked:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(789213).Z+"",width:"882",height:"666"})}),"\n",(0,s.jsx)(n.p,{children:"Specifying the items to be verified lets you save time during the verification procedure."}),"\n",(0,s.jsxs)(n.p,{children:["The main list displays all the tables of the database. For each table, you can limit the verification to the records and/or indexes. Expand the contents of a table or the indexed fields and select/deselect the checkboxes as desired. By default, everything is selected. You can also use the ",(0,s.jsx)(n.strong,{children:"Select all"}),", ",(0,s.jsx)(n.strong,{children:"Deselect all"}),", ",(0,s.jsx)(n.strong,{children:"All records"})," and ",(0,s.jsx)(n.strong,{children:"All indexes"})," shortcut buttons."]}),"\n",(0,s.jsx)(n.p,{children:'For each row of the table, the "Action" column indicates the operations to be carried out. When the table is expanded, the "Records" and "Indexed fields" rows indicate the number of items concerned.'}),"\n",(0,s.jsx)(n.p,{children:'The "Status" column displays the verification status of each item using symbols:'}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.img,{src:i(861244).Z+"",width:"32",height:"32"})}),(0,s.jsx)(n.th,{children:"Verification carried out with no problem"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:i(34397).Z+"",width:"32",height:"32"})}),(0,s.jsx)(n.td,{children:"Verification carried out, problems encountered"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:i(191708).Z+"",width:"32",height:"32"})}),(0,s.jsx)(n.td,{children:"Verification partially carried out"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.img,{src:i(273921).Z+"",width:"32",height:"32"})}),(0,s.jsx)(n.td,{children:"Verification not carried out"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.strong,{children:"Verify"})," to begin the verification or on ",(0,s.jsx)(n.strong,{children:"Standard"})," to go back to the standard page."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Open log file"})," button can be used to display the log file in the default browser of the machine (see ",(0,s.jsx)(n.a,{href:"#open-log-file",children:"Open log file"})," above)."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The standard page will not take any modifications made on the detailed page into account: when you click on a verification button on the standard page, all the items are verified. On the other hand, the settings made on the detailed page are kept from one session to another."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},273921:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAyxJREFUWAntVktrU0EUnpv3q6YkBgIRQhZiQ3FTalfFhQvFlYouXdimtCkIbty4LRQq/oGkWbnopgiK1CCIBn+AxDxWpoU0fYTYJBiaV/P0G9uETO6NnXu37YXLnXNmznzfnNdcQi6fi+4BQa4DQqHQNUEQXuGd7nQ6nna7Pa5Wq/MqlSrdarW+Y/xmYWGhyLsvN4FIJKJJpVIr2PiFy+XSWq1WrcFgIDqdjpycnJB6vU4KhUI9l8u1sGZ1aWlpjYcEN4H19fW3FovlsdfrNWu12pF7UyLJZLJcq9XWlpeXV0cuPJvgIgC334G7t2ZmZoz/A++BVatVEo1G65BvwBOZnl7qq5JSDuu63e5zj8cjAj8+PiYHBweEAg4+JpOJ2O32JuyeDOqlxrwEZsfGxhh7JBxJJBK1/f39jVgsVgcYM4/1FiTmFKOUEHgJ2Ghsi8Vi/93b2yOohM8+n+8pwtNqNBrM9giVgIq4yiglBI2EjlHhZAJy4Nv29raBmYCAuS0k5z0AqfV6PTNdLpc7KNEdRikhnEsAp6S+vSthSwKBwG24OTwxMWEcns/n81UQfDesH5a5QjBsRGWc/BbIfZqcnDSjJzBL0ul0A6ePoQIizISEoIhAMBjUAvwDeoJlGBxV0To8PDxCVB5J4IlU54ZAZHGqeIhSs9hsNmZ6d3e3AfAsyM3Oz88fMZMjBEUEEPf7DoeDqUtaITh9AXGfhuvzI/BEakUhwAmv4x5guijK8g/KEdj84JSNIg+AwDjKjJZh/0SVSkWPi+lnX8E5UEQAGf4lm83+HsQAmUaz2SwM6njGjBt5DHprACigD7g1Gs0VvL/m5ubo5SP7UUQAndELpPcIhQvl1kYb1mD8cnFxMSCXgWwC4XBYj2zfwe3ocjqd//Bw95N4PF5BCB74/f6vckjIroJMJjOFZDP3wCmY0WgkbrfbDG88o7KcRzYBgFB3izDOdKN/lUQWpwrZBFDrP3A1N/H/19+SXsXogmVUx0ZfyTkQH4XDENk/jW74EaEwwSNd5IAO8mv8Da9wmDNLFBGgO2xubupKpdJNDK3wSlxuB2RYXAoX2gN/AddTRky3uT9tAAAAAElFTkSuQmCC"},34397:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAnt0sENABAMhWHEWh2oE3WgDsYA2gtJXX7HJzz5qjUWAggggAACnwV61G9mK8pfM1U9+mZ2qYhkW1e5u4fnRpgWhjwg/QPZzAqnQxUCCCCAAAI1AhspZwlZmOIJVwAAAABJRU5ErkJggg=="},191708:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAkJJREFUWAntVrtKA0EUnV0TXwQfiYhFjJWmUxsRbC0s/RML8SeEkMI/sUxhK4iN2hkbjYIiJpogUYnuOmfk7o67M7NjgiCYbW6yc+45Z+6dxzLWf/oV+OsVaOzsLPp7e0M/8Qk88mxyXBOovr295jnsqH5zXbE1ARzwIo/nm/gxpjUAcT/lVsaWF4bTufEVGxMkDjzykA8ekwmlgUB8qZhJT02wsaX50SQT38SBF3nFTJIJJ+oOvUP5xMw5SfD4PmudXrQ79eZxLj+74WxtvdFYVJw5IW3n4Ym1Tqqvrs9Ws6XSGeVQjFVgslA45wRHLzf3bcZFg4eTqiphEke+4OF8gjcgC3+EVsN3LImUKuE67qbne/ui57zs8swhTrhoxSQppjQAgJWJ+0cvPT3pojLdiENHa8DGxMvVXWNkbibbrXiigUQTAMiPZdnlFGMFCGhsRwCy6znBKcZ2AQ3IEVsOC67De46yy2P0G+8xDpy8RWlcF60MoAJitfMFJ3quYMN7LEjggFdAlK8SW2BVfqLuYg0YK2AUxyFzeduwOazInypqDSSJ45BpV2uDiL2YUBqwEced4KZSecReTMQM2IrjeM3u7jYRezERM/BYqxV5SVdH8tNWxyu2nMmE4OF8glexCGIGcGU6H95667T63HlofqUkrG6dCeSDB3yqqxjk2m0YfpQsZHClqr4DohOS24eZC/F3byNXLh9GsfRfawAAYWLAPcD3gelKJTJEMoE2YuYmcTlP+/u3v4q1wv2Bf1OBT4kWIelsqx4WAAAAAElFTkSuQmCC"},861244:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAfpJREFUWAljYBgFoyEwGgI0DgHrTc+18VnBhE+SUjnrLS/6/v//f9Fy87MAXGbRzAFAy/s5mBjSNCX4mZkZGZficgQjLpdRIg61PFVbUpCbhYmR4euvPwxXX3789vf//+jjvlIbkM2megigWw6yjJuNhUGSlxMYIAxTQq/+ZyPJAcA4JDqUsFkOsuzV15//nn389p71H4vDam3GX8gOwGu4zebnDgz//09hZGN1Pewh+hxZIzobn+X333x+z/qfxeKAv9gddH04o8B203P7/wz/twrzcKr///37lO2O15LommF8oOV9wPCFxzlMHORzfJaD1GF1AMjn/xj/b9MU4+dSFuZmkRHgFsflCKjP02AJjhTLQWoxosB223OtP3/+n9cQ42MT5ESkl2efvv9+8uHrS0ZWVjNYdJAb7DBHYnUAKNHZbnm+hJOVxV9bnJ+bCZiNYADmiP/srOYMv/6WkhvsMPOwOgAkSMgRj99//cXBwsRAbrATdAAhR7z88vONMBebCKiQgQFiEhxMLTKNMAFZFMoGh8RmYHSwAaNDQoAbyT4U1eRaDjIErwNACgg5ghLLiXIAPkdQajnRDsBwBDB3vPn+i2AhA9JHCBCMAmQDYNHBysIU9OvPv6+4ildkPVRngxxhufl5l8PGVypUN3zUwNEQGA2BgQgBAH6SPzdNKo9/AAAAAElFTkSuQmCC"},789213:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/MSC_Verify-8011610125009120b0db711841a97965.png"},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var t=i(667294);let s={},r=t.createContext(s);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);