"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56627"],{999879:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"MSC/information","title":"Information Page","description":"The Information page provides information about the 4D and system environments, as well as the database and application files. Each page can be displayed using tab controls at the top of the window.","source":"@site/versioned_docs/version-20/MSC/information.md","sourceDirName":"MSC","slug":"/MSC/information","permalink":"/docs/20/MSC/information","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20MSC%2Finformation.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"information","title":"Information Page","sidebar_label":"Information Page"},"sidebar":"docs","previous":{"title":"MSC","permalink":"/docs/20/MSC/overview"},"next":{"title":"Activity analysis Page","permalink":"/docs/20/MSC/analysis"}}'),s=t("785893"),a=t("250065");let o={id:"information",title:"Information Page",sidebar_label:"Information Page"},r=void 0,d={},c=[{value:"Program",id:"program",level:2},{value:"Tables",id:"tables",level:2},{value:"Data",id:"data",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Information page provides information about the 4D and system environments, as well as the database and application files. Each page can be displayed using tab controls at the top of the window."}),"\n",(0,s.jsx)(n.h2,{id:"program",children:"Program"}),"\n",(0,s.jsxs)(n.p,{children:["This page indicates the name, version and location of the application as well as the active 4D folder (for more information about the active 4D folder, refer to the description of the ",(0,s.jsx)(n.code,{children:"Get 4D folder"})," command in the ",(0,s.jsx)(n.em,{children:"4D Language Reference"})," manual)."]}),"\n",(0,s.jsx)(n.p,{children:"The central part of the window indicates the name and location of the project and data files as well as the log file (if any). The lower part of the window indicates the name of the 4D license holder, the type of license, and the name of the current 4D user."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Display and selection of pathnames"}),": On the ",(0,s.jsx)(n.strong,{children:"Program"})," tab, pathnames are displayed in pop-up menus containing the folder sequence as found on the disk:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.img,{src:t(672666).Z+"",width:"496",height:"190"}),"\nIf you select a menu item (disk or folder), it is displayed in a new system window.\nThe ",(0,s.jsx)(n.strong,{children:"Copy the path"})," command copies the complete pathname as text to the clipboard, using the separators of the current platform."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:'"Licenses" Folder'}),"\nThe ",(0,s.jsx)(n.strong,{children:'"Licenses" Folder'}),' button displays the contents of the active Licenses folder in a new system window. All the license files installed in your 4D environment are grouped together in this folder, on your hard disk. When they are opened with a Web browser, these files display information concerning the licenses they contain and their characteristics.\nThe location of the "Licenses" folder can vary depending on the version of your operating system. For more information about the location of this folder, refer to the ',(0,s.jsx)(n.code,{children:"Get 4D folder"})," command.\n",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," You can also access this folder from the \u201CUpdate License\u201D dialog box (available in the Help menu)."]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tables",children:"Tables"}),"\n",(0,s.jsx)(n.p,{children:"This page provides an overview of the tables in your database:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(118569).Z+"",width:"882",height:"666"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Information on this page is available in both standard and maintenance modes."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The page lists all the tables of the database (including invisible tables) as well as their characteristics:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ID"}),": Internal number of the table."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Tables"}),": Name of the table. Names of deleted tables are displayed with parenthesis (if they are still in the trash)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Records"}),": Total number of records in the table. If a record is damaged or cannot be read, ",(0,s.jsx)(n.em,{children:"Error"})," is displayed instead of the number. In this case, you can consider using the verify and repair tools."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fields"}),": Number of fields in the table. Invisible fields are counted, however, deleted fields are not counted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Indexes"}),": Number of indexes of any kind in the table"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Encryptable"}),": If checked, the ",(0,s.jsx)(n.strong,{children:"Encryptable"}),' attribute is selected for the table at the structure level (see "Encryptable" paragraph in the Design Reference Manual).']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Encrypted"}),": If checked, the records of the table are encrypted in the data file. ",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": Any inconstency between Encryptable and Encrypted options requires that you check the encryption status of the data file in the Encrypt page of the MSC."]})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Address Table Size"}),': Size of the address table for each table. The address table is an internal table which stores one element per record created in the table. It actually links records to their physical address. For performance reasons, it is not resized when records are deleted, thus its size can be different from the current number of records in the table. If this difference is significant, a data compacting operation with the "Compact address table" option checked can be executed to optimize the address table size (see ',(0,s.jsx)(n.a,{href:"/docs/20/MSC/compact",children:"Compact"})," page).\n",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Differences between address table size and record number can also result from an incident during the cache flush."]})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"data",children:"Data"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Data"})," page provides information about the available and used storage space in the data file."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"This page cannot be accessed in maintenance mode"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The information is provided in graph form:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(469081).Z+"",width:"761",height:"583"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'This page does not take into account any data that may be stored outside of the data file (see "External storage").'}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Files that are too fragmented reduce disk, and thus, database performance. If the occupation rate is too low, 4D will indicate this by a warning icon (which is displayed on the Information button and on the tab of the corresponding file type) and specify that compacting is necessary:",(0,s.jsx)(n.img,{src:t(170873).Z+"",width:"75",height:"69"})]}),"\n",(0,s.jsxs)(n.p,{children:["A warning icon is also displayed on the button of the ",(0,s.jsx)(n.a,{href:"/docs/20/MSC/compact",children:"Compact"})," page:\n",(0,s.jsx)(n.img,{src:t(822496).Z+"",width:"76",height:"64"})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},469081:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/MSC_Data-aa469e50a3ad298cd02cf05689e87a71.png"},118569:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/MSC_Tables-7498ec19de595de5fdea35406dbd42e3.png"},822496:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABACAIAAAA/NwYHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAATmSURBVGhD7ZjfaxxVFMf7rA3+QPRB6IMPtipYFc1LHwSr9EH/gOKD7INiYgIaYsiDP2JJ28Q0QWKhlBAaRWssCX0o2abkh43JStolTdBukq2JCWkoZldSF3wQEdl+Zu7Z2dndSdjdubON0/lwGc4999wz57szc+/s7ErdAwQi/UIg0i8EIv1CINIvBCL9gucik8nk1NRUT09Pa2trU1NTXV0dR2w8+BmVOC/xUOTGxkZ/f399ff27W8MoMUTKHG/wSmQkEmloaEBGTU1Ne3v70NDQ/Pz8+vr65uYmR2w8+BklhkjiZaYHeCJycHBQVd/Z2bmwsCDeVMq4dibST6UYJQYP8cwSr270i6RWiq6trQ2Hw+LKgD+dTttFKogkHr9HOjWL5K7jmlDx9PS0uGxsJRKIZxZzvbhvdYpk/VDPoXUNeQI7OjrwWCiRFowSo4KZhYcM2tchnSJZJ6mSZ0z6JolEoqWlZWxsDHl28OBnVOJM1PNJHulrQptIdjz2A+43+0qjWFtba25unpubE33pNDYe/BKRgblkII/e/VObSHZ2LgK7gvRzofrGxsaVlRUUcsReXFyUsVzIQB6ySV8H2kTyBkNx7H7SLyAajfKuE4vFOGKLtwAykIds0teBNpG8qVEcu7z0nRgdHSWGo/SdIAMxZJO+DrSJ5PpQHG8z0s+Ac3viU92TvQdov06fJp4MOMmmpmtBm0jevCnO2g8scKrFxpETHx4IH73PaouTX5CBKWST+Tq4m1fyg/feutBadfHY/Tev7r8Z3Y8x3P7w6o1rDO3QK1nGMzlz/m2u3uy5Pf/99Rrt2rk9dCe/fZOYHfpMlrq6/r46c/F41fDx3WtXnh3vfoyGQTd8bHdj3eEdurqWuk9O9L3Odbt+4QnkJZcvJZeGMeji7P1o7w7dJ0t644lePouYS59X/Z14GUM5MejixFiNjchkHWgTCcW/u1755hBK4iN7eRTtIunixIj0HZT5OtApssh/IZ+8/wYyRroe+GfzlUKROEe7HsRe/fm8SuIenSKhmP+T3336OBqWJ59BEs14JpeG1TOpPAwRMHH6JZnmGs0iYfsvA7di3yNgvPuhf1OvKkkb119EHg1DeRgigLCl6BmZ6Q79ImGrbzy1Ne8MfPYo1bP1Kz2OImm8Hhi/xZf7/rz9h0x2gScigfu28GvdLz90UfqPpx6xxNCQl7jxVSLeh2H3E0ZwPHJSMrrAK5FQ+N31zMdPUvet2RfsYgyR8b5CkeszzxH809eHJJ0LPBSpsH9BP3tkH3UvTzxtF+N4u9J+M5ef/4dIO0tXe6m7pMYUmeyCiooE/kyNn3wqT4lju3zqef5qyjR3VFrkXSEQ6RcCkdswENqVobptVpyew1nLOVtZIg2FoQHpVJLKiZxtq3Y8k3VxrVGjplCoWrlkWH4cs9w2mZH5wcisHHYpmbShUCZ/yUJLF7mFRrNq051jmaZZvKHEMJQis/SsmZEp4BJP7iC9UgUa6BJpP71lF2Pk2phCYRjkdYuljNvV8Ux2p2UXY9jsrM8xDPK6xVLOwmPcdNlzDbTllbNdrXZDrGw2fNkbOH/QxJpeGuWIBOPkgvXEGKWZWHVYNTkbak3KjTcx1phCp3Ee1bHGiqRMka6x1FaCQKRfCET6hUCkXwhE+oVApF+4B0SmUncAz2k1OlDbCAoAAAAASUVORK5CYII="},170873:function(e,n,t){t.d(n,{Z:function(){return i}});let i="data:image/png;base64,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"},672666:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/MSC_popup-3ef7648d9c8e141b600c690356171a0c.png"},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var i=t(667294);let s={},a=i.createContext(s);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);