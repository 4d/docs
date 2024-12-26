"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43965"],{12548:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>a,assets:()=>d,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/set-help-menu","title":"SET HELP MENU","description":"SET HELP MENU ( menuCol )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-help-menu.md","sourceDirName":"commands-legacy","slug":"/commands/set-help-menu","permalink":"/docs/commands/set-help-menu","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-help-menu.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-help-menu","title":"SET HELP MENU","slug":"/commands/set-help-menu","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELEASE MENU","permalink":"/docs/commands/release-menu"},"next":{"title":"SET MENU BAR","permalink":"/docs/commands/set-menu-bar"}}'),r=t("785893"),i=t("250065");let o={id:"set-help-menu",title:"SET HELP MENU",slug:"/commands/set-help-menu",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET HELP MENU"})," ( ",(0,r.jsx)(n.em,{children:"menuCol"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuCol"}),(0,r.jsx)(n.td,{children:"Collection"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Collection of menu objects"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SET HELP MENU"})," command allows you to replace the default 4D ",(0,r.jsx)(n.strong,{children:"Help"})," menu with the ",(0,r.jsx)(n.em,{children:"menuCol"})," collection of menu items in the application mode."]}),"\n",(0,r.jsxs)(n.p,{children:["This command replaces the default ",(0,r.jsx)(n.strong,{children:"Help"})," menu of the application mode in all 4D environments: interpreted, compiled, merged, single-user and client/server."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'The "Help" label itself is managed by the system and cannot be customized with this command.'}),"\n",(0,r.jsx)(n.li,{children:"Customized Help menus do not support submenus, checkmarks, styles, or icons."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"menuCol"}),", pass a collection of menu objects defining all items of the customized Help menu. Each menu object can contain the following properties:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Property"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"title"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Menu item name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"method"}),(0,r.jsxs)(n.td,{children:["Text | ",(0,r.jsx)(n.a,{href:"https://developer.4d.com/docs/API/FunctionClass#about-4dfunction-objects",children:"4D.Function"})]}),(0,r.jsx)(n.td,{children:'Project method name or 4D formula object to execute when the menu item is selected. When this property is used, the "action" property should not be passed (otherwise "method" is ignored).'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"worker"}),(0,r.jsx)(n.td,{children:"Text | Number"}),(0,r.jsxs)(n.td,{children:['Name of the worker or Number of the process to handle the "method" code execution. Several configurations are supported, depending on the the "worker" property value:',(0,r.jsx)(n.br,{}),' if it is a worker name (Text), 4D uses or creates this worker to execute the "method" (equivalent to ',(0,r.jsx)(n.a,{href:"/docs/commands/call-worker",children:"CALL WORKER"}),") if it is a process number, 4D uses this process if it exists, otherwise it does nothing (equivalent to ",(0,r.jsx)(n.a,{href:"/docs/commands/call-worker",children:"CALL WORKER"}),") if it is undefined and the application displays a current dialog (frontmost dialog), 4D uses the process of this dialog (equivalent to ",(0,r.jsx)(n.a,{href:"/docs/commands/call-form",children:"CALL FORM"}),") if it is undefined and the application does not display a current dialog, 4D calls and uses the worker 1 (4D remote/single-user) or the worker ",(0,r.jsx)(n.em,{children:"4D_server_interface"})," (4D Server)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"action"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Standard Action"}),' to execute when the menu item is selected. When this property is used, the "method" property is ignored if passed.']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutKey"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"Shortcut key of the item (to call with Ctrl/Command key)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutShift"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["True to add the ",(0,r.jsx)(n.strong,{children:"Shift"})," key to the item shortcut"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shortcutAlt"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsxs)(n.td,{children:["True to add the ",(0,r.jsx)(n.strong,{children:"Alt/Option"})," key to the item shortcut"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The customized ",(0,r.jsx)(n.strong,{children:"Help"})," menu will display items in the same order as the collection."]}),"\n",(0,r.jsxs)(n.p,{children:["To insert a separator line, pass ",(0,r.jsx)(n.strong,{children:"null"})," or an empty object in the collection."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["You want to customize the ",(0,r.jsx)(n.strong,{children:"Help"})," menu for your application:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0$col.push(New object("title";"Knowledge base";"worker";"workerHlp";"method";"methodHlp";"shortcutAlt";True;"shortcutKey";"Y"))\n\xa0$col.push(Null)\xa0//to add a separation line\n\xa0$col.push(New object("title";"Tools";"action";ak msc;"shortcutShift";True;"shortcutKey";"Y"))\n\xa0SET HELP MENU($col)\n\xa0SET ABOUT("About this application";"m_about")\xa0//to replace \'About 4D\' on Windows\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(873717).Z+"",width:"276",height:"100"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/set-about",children:"SET ABOUT"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1801"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},873717:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);