"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65748],{979984:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(474848),a=i(28453);const o={id:"overview",title:"Overview",sidebar_label:"Overview"},s=void 0,r={id:"MSC/overview",title:"Overview",description:"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop.",source:"@site/versioned_docs/version-19/MSC/overview.md",sourceDirName:"MSC",slug:"/MSC/overview",permalink:"/docs/19/MSC/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Managing 4D users and groups",permalink:"/docs/19/Users/editing"},next:{title:"Information Page",permalink:"/docs/19/MSC/information"}},d={},c=[{value:"Display in maintenance mode",id:"display-in-maintenance-mode",level:2},{value:"Display in standard mode",id:"display-in-standard-mode",level:2},{value:"Feature availability",id:"feature-availability",level:2}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Maintenance and Security Center (MSC) window contains all the tools needed for verification, analysis, maintenance, backup, compacting, and encrypting of data files. The MSC window is available in all 4D applications: 4D single user, 4D Server or 4D Desktop."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The MSC window is not available from a 4D remote connection."]}),"\n",(0,t.jsx)(n.p,{children:"There are several ways to open the MSC window. The way it is accessed also determines the way the application project is opened: in \u201cmaintenance\u201d mode or \u201cstandard\u201d mode. In maintenance mode, the project is not opened by 4D, only its reference is provided to the MSC. In standard mode, the project is opened by 4D."}),"\n",(0,t.jsx)(n.h2,{id:"display-in-maintenance-mode",children:"Display in maintenance mode"}),"\n",(0,t.jsxs)(n.p,{children:["In maintenance mode, only the MSC window is displayed (the project is not opened by the 4D application). This means that projects that are too damaged to be opened in standard mode by 4D can nevertheless be accessed. Moreover, certain operations (compacting, repair, and so on) require the project to be opened in maintenance mode (see ",(0,t.jsx)(n.a,{href:"#feature-availability",children:"Feature availability"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"You can open the MSC in maintenance mode from two locations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"From the standard project opening dialog box"}),"\nThe standard Open dialog includes the ",(0,t.jsx)(n.strong,{children:"Maintenance Security Center"})," option from the menu associated with the ",(0,t.jsx)(n.strong,{children:"Open"})," button:\n",(0,t.jsx)(n.img,{src:i(749139).A+"",width:"748",height:"505"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Help/Maintenance Security Center"})," menu or ",(0,t.jsx)(n.strong,{children:"MSC"})," button in the tool bar (project not open)",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:i(974352).A+"",width:"54",height:"53"}),"\nWhen you call this function, a standard Open file dialog appears so that you can select the ",(0,t.jsx)(n.em,{children:".4DProject"})," or ",(0,t.jsx)(n.em,{children:".4dz"})," file of the to be examined. The project will not be opened by 4D."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"display-in-standard-mode",children:"Display in standard mode"}),"\n",(0,t.jsx)(n.p,{children:"In standard mode, a project is open. In this mode, certain maintenance functions are not available. You have several possibilities for accessing the MSC window:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Help/Maintenance Security Center"})," menu or the ",(0,t.jsx)(n.strong,{children:"MSC"})," button in the 4D toolbar:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:i(974352).A+"",width:"54",height:"53"})]}),"\n",(0,t.jsx)(n.li,{children:"Use the \u201cmsc\u201d standard action that it is possible to associate with a menu command or a form object."}),"\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.code,{children:"OPEN SECURITY CENTER"})," language command."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"feature-availability",children:"Feature availability"}),"\n",(0,t.jsx)(n.p,{children:"Certain MSC functions are not available depending on the MSC opening mode:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Backup function is only available when the project is open (the MSC must have been opened in standard mode)."}),"\n",(0,t.jsx)(n.li,{children:"Data compacting, rollback, restore, repair, and encryption functions can only be used with data files that are not open (the MSC must have been opened in maintenance mode). If these functions are tried while the project is open in standard mode, a dialog warns you that it implies that the application be closed and restarted in maintenance mode."}),"\n",(0,t.jsxs)(n.li,{children:["In encrypted databases, access to encrypted data or to the .journal file requires that a valid encryption data key be provided (see ",(0,t.jsx)(n.a,{href:"/docs/19/MSC/encrypt",children:"Encrypt page"}),"). Otherwise, encrypted data is not visible."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},749139:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/MSC_standardOpen-ef15ff019a0992eb692c97fb75fb9800.png"},974352:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA1CAYAAAAK0RhzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAR5SURBVGhD7ZgPSBtXHMe/0c6V4R901TkdrVmymKHVrnMt1lFrlDgdadfCZgsiw9HObgyHA1e6qQhSpSDoECsrbCKDMiky6MQ/aLoK6hhLR+mSxkZNY0cnyvxTRTD1z+6dv8ZYtULvnTQhHzh4v997HPe59+53907x2+DMMrwQUSzyJe9yG51TwI/aXodPzNPwiXkaXisma7l3zs/DMWjFoPW2cFjgdM7j5V27EL37dSQefBcRkdE0ki+s3HMVW15exr/37+Ge7Q5sd/7GP/cdUKvVSExMRHx8PGZmZjAwMACrVZAdHERISIggGgGVNh77k1PxQkAAnUkaXMX6r7ejp6sNYWFhokRCQgJiY2MR4Haxk5OTojxjcXERdrtdlGSyo6OjUGu0yPnkC7FfClzFyr/6FDU1NQgNDaXMetzFnmR2dhalpaX49mI9/PykPfpcvzwWFhaeKsVQKBTUWk9gYCCWlpaw8OgRZaThK/eexraKPW0p8mbbxGw2G4aHhymSH9nFWBWcmJhAa2srjEYjpqamNq2MPJFdrK+vDyUlJa4Zq66uhslkol75kF0sJSUFaWlpFAHJyclISkqiSD64ifn7+4vvoY1wOp1QqVSIiYkR25vBigs7Dw+4iUVFRWNkZISiteh0OhQVFaGgoECcwY0YHx9HUFAQ/HfsoIw0uIlp9+5Dd3c3RWuJjIykFhAeHk6ttfT39yPildVxUuEmdjA1E6abN8UisRmbvcfYbPX29iLd8BFlpMNN7MWdO/HByY9RV1eH6elpym4Ne+YaGxuRsP8dvPrabspKh5sYQ/3mXiQdSkVlZaX4tb4V7MOZSbF92Psf5lGWD1zFGCnp2dDEJaKiogJjY2OUXcF9Kc4Lu+uGhgY8FDafeZ9/TVl+cBdjHMk6jn0HUlBWVgaLxULZVdhOura2FotLy8gv/Eby/msjZP3ncdd8C79c+REGgwHZ2dmYm5sTvzqam5uhVGtwPPcMjeQL938eGzE18R9+/bkRiwtOsdSbzWboso7h7UNHaAR/tkXsMbdNv8NmuQX9sZMIDA6hrDxsq9h2wvWfx/OGT8zT8Il5Gj4xT0OiWCfKooKhLe6keBXH5QxoozLQZKeEsVCIhbHi4ZZnrOkLxqnLQ9Tx7PCZsZ9a0UPNFYZw49of1Baw1+NUrhnnex/C+oAdXchTUh+TygW+F/Mrx5XTKup8djiIHUCOcNGX3O+y8Tu0GaqQQ+EKcYh5LONiCE01TLgWhynDCy4zpjpbDM21Djgo7mk3IytDTZGA8jNUlZtxRlhmZUbKMewdaMMJpK4Tlg6n4qFHuvYcfmAXLSy7SyheXWrEntNdwjK7CuQKz9HRetdNkAtOYsDhs1W4294JR1cLNO/pKfskepQ/+AvnQTdBqYbmzxbccC8knOAmBmUmsqwXcc52Avk6ym2JHvnlwIVC9xnsRNNzUxVFVMj7Mg54IxN7KOOCVUVXOX8LF7RXUU7ybIl2GFqQ6epvRQyHqujbj3kaPjFPw2vFxOJBbS8C+B/aCLjWUUEFJgAAAABJRU5ErkJggg=="},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(296540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);