"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7018"],{821398:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/maximize-window","title":"MAXIMIZE WINDOW","description":"MAXIMIZE WINDOW {( window )}","source":"@site/versioned_docs/version-20-R7/commands-legacy/maximize-window.md","sourceDirName":"commands-legacy","slug":"/commands/maximize-window","permalink":"/docs/commands/maximize-window","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmaximize-window.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"maximize-window","title":"MAXIMIZE WINDOW","slug":"/commands/maximize-window","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is window reduced","permalink":"/docs/commands/is-window-reduced"},"next":{"title":"MINIMIZE WINDOW","permalink":"/docs/commands/minimize-window"}}'),s=i("785893"),o=i("250065");let d={id:"maximize-window",title:"MAXIMIZE WINDOW",slug:"/commands/maximize-window",displayed_sidebar:"docs"},r=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"On Windows",id:"on-windows",level:5},{value:"On Mac OS",id:"on-mac-os",level:5},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MAXIMIZE WINDOW"})," {( ",(0,s.jsx)(n.em,{children:"window"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"window"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Window reference number or if omitted, all current process frontmost windows (Windows) or current process frontmost window (Mac OS)"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The MAXIMIZE WINDOW command triggers the expansion of the window whose reference number was passed in ",(0,s.jsx)(n.em,{children:"window"}),". If this parameter is omitted, the effect is the same but is applied to all the frontmost windows of the current process (Windows) or to the frontmost window of the current process (Mac OS)."]}),"\n",(0,s.jsxs)(n.p,{children:["This command has the same effect as a click on the zoom box of a 4D application window. Windows you want to maximize must have a zoom box. If the ",(0,s.jsx)(n.em,{children:"window"})," type does not have a zoom box, the command does nothing."]}),"\n",(0,s.jsxs)(n.p,{children:["A later click on the zoom box or a call to the ",(0,s.jsx)(n.a,{href:"/docs/commands/minimize-window",children:"MINIMIZE WINDOW"})," command reduces the window to its initial size. On Windows, a call to ",(0,s.jsx)(n.a,{href:"/docs/commands/minimize-window",children:"MINIMIZE WINDOW"})," without parameters sets the size of all application windows to their initial sizes."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"window"})," is already maximized, the command does nothing."]}),"\n",(0,s.jsx)(n.h5,{id:"on-windows",children:"On Windows"}),"\n",(0,s.jsxs)(n.p,{children:["The size of the window is increased to match the current size of the application window (MDI mode) or the screen (SDI mode). The maximized window is set to be the frontmost window. If you do not pass the ",(0,s.jsx)(n.em,{children:"window"})," parameter, the command is applied to all the application windows."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(752790).Z+"",width:"23",height:"23"})}),"\n",(0,s.jsx)(n.p,{children:"Windows zoom box"}),"\n",(0,s.jsx)(n.p,{children:"In cases where the command is applied to a window whose size is subject to constraints (for example, a form window):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'If no size constraint is in conflict with the target size, the window is "maximized" (i.e., it is restored to the size of the application window (MDI mode) or the screen (SDI mode); its title bar and borders are hidden, and its control buttons - minimize, restore and close - are moved to the right of the application menu bar).'}),"\n",(0,s.jsx)(n.li,{children:'If at least one size constraint is in conflict (for example, if the width of the MDI window is 100 and the form window\'s maximum width is set to 80), the window is not "maximized", but only restored to its maximum allowed size. This size is defined either by the MDI window, or by the constraint. This way, the interface remains consistent when windows with constraints are resized.'}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"on-mac-os",children:"On Mac OS"}),"\n",(0,s.jsxs)(n.p,{children:["The size of the window is increased to match the size of its contents. If you do not pass the ",(0,s.jsx)(n.em,{children:"window"})," parameter, the command is applied to the frontmost window of the current process."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(274059).Z+"",width:"16",height:"16"})}),"\n",(0,s.jsx)(n.p,{children:"Zoom box on Mac OS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The zoom is based on the contents of the window; so, the command must be called in a context where the contents of the window are defined, for example in a form method. Otherwise, the command does nothing."}),"\n",(0,s.jsx)(n.li,{children:'The window is set to its "maximum" size. If the window is actually a form whose size was defined in the form properties, the window size is set to those values.'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"This example sets the window size of your form to full screen when it is opened. To achieve this, the following code is placed in the form method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// In the Form method\n\xa0\n\xa0MAXIMIZE WINDOW\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"This example illustrates how size constraints are handled on Windows (MDI mode). The following form has a size constraint (maximum width=400):"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(311569).Z+"",width:"799",height:"541"})}),"\n",(0,s.jsx)(n.p,{children:"The method of the button contains simply:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0MAXIMIZE WINDOW(Current form window)\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this context, when the user clicks on the button:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(553297).Z+"",width:"956",height:"817"})}),"\n",(0,s.jsx)(n.p,{children:'... the window is not "maximized"; only its height is increased:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(331959).Z+"",width:"956",height:"817"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/is-window-maximized",children:"Is window maximized"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/minimize-window",children:"MINIMIZE WINDOW"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/reduce-restore-window",children:"REDUCE RESTORE WINDOW"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},311569:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pict1476223.en-6fcfc45cca5e638f0ce9433ae82a7387.png"},553297:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pict1476225.en-101842d018a2e2faa7c97ba83b5612fa.png"},331959:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pict1476363.en-f892d8aae0f3bd31e9af72721834c4ff.png"},752790:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAIAAABvSEP3AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0tMgMt9asAAAMOSURBVHiclVUxaBVBEJ3Z3Us06kcSbVKonbWCIBbaaymCiIKNqaxEsbEROwVbRVALGwsLm9gLYivYWmlIoaLmJ/n/3+3u7PhmL4mgEMmx/Lvb3Xnz5r25/UyXv9JOr1L+mgiUZXZaXyzMnDk22LPb7QjtzfuVK4/Wf7bEdP7z4o3B0SODR4vpx6qOWm0jpawxk3MUk+2WmrtN2j9jw6RLB2eGz27OLn2Tcw/WDEVfHbr9tJuf4+BpONKVEXUJ8QriuViYKiVREYpCXdRxR2tjGQ6H++jLuycn915a2ijh17pONzTVAIibQIBrPDvHnsk7GwHPjpy9cnBYtbH8bb0XIZALuK2NdXWMYOTRSYeExgVFJRsKOjGDENmMVF7F6vWukhAfei5YXhkpso1aergwvb2ox6+PtKhjsOYtj+yGnIg3OeP/rcmFGbYwb81AA7t14J+s7JT/jyJqO4uixi0um1cbjWQpZueFe22M2mWTozNr8MupWvbp8QwctzA27+wq9trgAaKCDqyhumBpIJzTjSzMihghrVUIGwSpKz0Xt8kFhaCXpoJRpQqlNdjK931Gtsm6Ko77WvpupLArULUJ/oE8POqz2R5ncYbTY5XKqIaJJwEfpax/dGmqujasu2rmDSLOdrGrEMWwSKpHNVMpLD1KsBqsc0zFZC3b+wcXqgXUV2EtbNggZ/gAxAYpjPbb5DIVtrigqbnuy4L0it1ajdDeEbhb5TCzhErWLBXdW/v7ysXUtXIql8W7u7btFwYKhtS2qBU1XJPTJJL3SKunb42RurBxwUjMkbhTilqTZRZjAYFVN1B8cBUlxjjpnEfXCSbNFjFjYCq0pERsEIVxMuRMOapEKYCU9Kd3R5MyP1j9PiSN1DUAVvMUWjozR6zNPPoVhaRiWkgm+97b4eEDlQvOE/y+/bD68s7sxTsfl7+uhWYahBzZl8AMtc1OIQdq+IyLCDqtkNecDs+l1/dP4NAkGjBdk9nQvrgcz57av42i/16oAOmvPA8/8xTT1W5HwXaSoK9MXrAV+z9Q/xs9LuXjZb+iggAAAABJRU5ErkJggg=="},274059:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kGGA0tMgMt9asAAAKLSURBVHiclZLfa9NQFMdv2sT2Jm2SxTRr615s3VZnnGWMwqiKYicMHCJIGWw+uRe3R/+I/QHiZPg62Zj4MEEHUmHbw9qJUrpfdJ2gMpvNbWFN2jT9mXqzleKrl3Phnsvn3vP9Hg4mSRL4n4X/m2xsbMRisXg8nk6nURoIBAYGBiKRSG9vb4vBWhVmZ2cXFhY4jgsGg95LXgwD2d9SKpWSZTkajY6NjTUrGIZxTs9Mz4RuhgaHBm+IQY7jMWDIp6ed17s+L8WmX7xqNBqjo6OItKATUjI/P+8RPUKfgHmBQhxMTEWfTY2ouGTtAHyfyyu65+bmEIZgHO1EIqHiObrbfmxPZXK7UtG++vML+iz843WhrMv2irW7kZdz6+vroihakKTV+ArZA3GXXLft5UpbuUqGIAEKpZrJ19J1mMHdMgzAlbVlBJsV9k62faF2QdDffzxgKECRksdl+lv8lNbLIKeCRw86ann2+9a2Kck07TBcHPDwDsEFWAgcJMCA9ayFRqHcIGygnXMU+cYvpm5WQLvn8jW77ZB1up5PDNGQc1DON2/fIf7JyOO8pioF1C3VbjsK+EQEmx5CXWG9qEGcdJIszThRMJA2o41lWJqmePKCo6QVQ/5w88Ht0N36H14rVSHuZOk2lqIZcBYXKJbhSOgo6VXjyHWr/07TtN/nv9/5dCXxUuCFi22CxQonx8eRA61aAuVyQVN2EtmIf9Lvu1KpVLDNzU0kl6bpD0uLycPFDpG46vO7+Xbcgh8en+zuZ/Z3yj3s8PDQQ1VVzUagaTkfEoZhJCm79m05m/+qVQ8wC0ZDr9veF+6/53a7FUVpDl8ymWxNIoSQoiiCIGq12vkNEqxpmq7rLeYvGRYwZYbVLwwAAAAASUVORK5CYII="},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return d}});var t=i(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);