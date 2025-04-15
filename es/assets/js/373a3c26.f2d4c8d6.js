"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52281"],{991092:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>r});var s=JSON.parse('{"id":"commands/set-window-document-icon","title":"SET WINDOW DOCUMENT ICON","description":"SET WINDOW DOCUMENT ICON ( winRef )SET WINDOW DOCUMENT ICON ( winRef ; image )SET WINDOW DOCUMENT ICON ( winRef ; file )SET WINDOW DOCUMENT ICON (  winRef ; image ; file )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/set-window-document-icon.md","sourceDirName":"commands","slug":"/commands/set-window-document-icon","permalink":"/docs/es/commands/set-window-document-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fset-window-document-icon.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-window-document-icon","title":"SET WINDOW DOCUMENT ICON","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESIZE FORM WINDOW","permalink":"/docs/es/commands/resize-form-window"},"next":{"title":"SET WINDOW RECT","permalink":"/docs/es/commands/set-window-rect"}}'),t=i("785893"),o=i("250065");let d={id:"set-window-document-icon",title:"SET WINDOW DOCUMENT ICON",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET WINDOW DOCUMENT ICON"})," ( ",(0,t.jsx)(n.em,{children:"winRef"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"SET WINDOW DOCUMENT ICON"})," ( ",(0,t.jsx)(n.em,{children:"winRef"})," ; ",(0,t.jsx)(n.em,{children:"image"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"SET WINDOW DOCUMENT ICON"})," ( ",(0,t.jsx)(n.em,{children:"winRef"})," ; ",(0,t.jsx)(n.em,{children:"file"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"SET WINDOW DOCUMENT ICON"})," (  ",(0,t.jsx)(n.em,{children:"winRef"})," ; ",(0,t.jsx)(n.em,{children:"image"})," ; ",(0,t.jsx)(n.em,{children:"file"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metros"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"winRef"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia de la ventana"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"image"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Custom icon"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file"}),(0,t.jsx)(n.td,{children:"4D.File, 4D.Folder"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"File path or folder path"})]})]})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Lanzamiento"}),(0,t.jsx)(n.th,{children:"Modificaciones"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R7"}),(0,t.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando ",(0,t.jsx)(n.code,{children:"SET WINDOW DOCUMENT ICON"})," permite definir un icono para las ventanas en aplicaciones multiventana utilizando una ",(0,t.jsx)(n.em,{children:"image"})," y/o un ",(0,t.jsx)(n.em,{children:"file"})," con la referencia de ventana ",(0,t.jsx)(n.em,{children:"winRef"}),". The icon will be visible within the window itself and on the windows taskbar to help users identify and navigate different windows."]}),"\n",(0,t.jsxs)(n.p,{children:["In the case of an MDI application on Windows, you can pass ",(0,t.jsx)(n.code,{children:"-1"})," in ",(0,t.jsx)(n.em,{children:"winRef"})," to set the icon of the main window. In other contexts (macOS or ",(0,t.jsx)(n.a,{href:"/docs/es/Menus/sdi",children:"SDI application"})," on Windows), using -1 does nothing."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If only ",(0,t.jsx)(n.em,{children:"file"})," is passed, the window uses the icon corresponding to the file type and the file\u2019s path is displayed in the window\u2019s menu."]}),"\n",(0,t.jsxs)(n.li,{children:["If only ",(0,t.jsx)(n.em,{children:"image"})," is passed, 4D does not show the path and the passed image is used for the window icon."]}),"\n",(0,t.jsxs)(n.li,{children:["If both ",(0,t.jsx)(n.em,{children:"file"})," and ",(0,t.jsx)(n.em,{children:"image"})," are passed, the file\u2019s path is displayed in the window\u2019s menu and the passed image is used for the window icon."]}),"\n",(0,t.jsxs)(n.li,{children:["If only ",(0,t.jsx)(n.em,{children:"winRef"})," is passed or ",(0,t.jsx)(n.em,{children:"image"})," is empty, the icon is removed on macOS and the default icon is displayed on Windows (application icon)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"In this example, we want to create four windows:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the application icon on Windows and no icon on macOS (default state when no ",(0,t.jsx)(n.em,{children:"image"})," or ",(0,t.jsx)(n.em,{children:"file"})," is used)."]}),"\n",(0,t.jsx)(n.li,{children:'Utilice un icono "user".'}),"\n",(0,t.jsx)(n.li,{children:"Associate a document with the window (this uses its file type icon)."}),"\n",(0,t.jsx)(n.li,{children:"Customize the icon associated with the document."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $winRef : Integer\n var $userImage : Picture\n var $file : 4D.File\n \n  // 1- Open "Contact" form\n $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)\n SET WINDOW DOCUMENT ICON($winRef)\n DIALOG("Contact";*)\n \n  // 2- Open "Contact" form with "user" icon\n $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)\n BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent();$userImage)\n SET WINDOW DOCUMENT ICON($winRef;$userImage)\n DIALOG("Contact";*)\n \n  // 3- Open "Contact" form associated with the document "user"\n $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)\n $file:=File("/RESOURCES/files/user.txt")\n SET WINDOW DOCUMENT ICON($winRef;$file)\n DIALOG("Contact";*)\n \n  // 4- Open "Contact" form associated with the document "user" with "user" icon\n $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)\n BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent();$userImage)\n $file:=File("/RESOURCES/files/user.txt")\n SET WINDOW DOCUMENT ICON($winRef;$userImage;$file)\n DIALOG("Contact";*)\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/create-entity-selection",children:"Create entity selection"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return d}});var s=i(667294);let t={},o=s.createContext(t);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);