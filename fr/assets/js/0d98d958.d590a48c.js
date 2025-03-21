"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53484"],{740739:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>o});var s=JSON.parse('{"id":"commands/set-window-document-icon","title":"SET WINDOW DOCUMENT ICON","description":"SET WINDOW DOCUMENT ICON ( winRef )SET WINDOW DOCUMENT ICON ( winRef ; image )SET WINDOW DOCUMENT ICON ( winRef ; file )SET WINDOW DOCUMENT ICON (  winRef ; image ; file )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands/set-window-document-icon.md","sourceDirName":"commands","slug":"/commands/set-window-document-icon","permalink":"/docs/fr/20-R7/commands/set-window-document-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fset-window-document-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-window-document-icon","title":"SET WINDOW DOCUMENT ICON","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESIZE FORM WINDOW","permalink":"/docs/fr/20-R7/commands/resize-form-window"},"next":{"title":"SET WINDOW RECT","permalink":"/docs/fr/20-R7/commands/set-window-rect"}}'),t=i("785893"),d=i("250065");let r={id:"set-window-document-icon",title:"SET WINDOW DOCUMENT ICON",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function a(e){let n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET WINDOW DOCUMENT ICON"})," ( ",(0,t.jsx)(n.em,{children:"winRef"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"SET WINDOW DOCUMENT ICON"})," ( ",(0,t.jsx)(n.em,{children:"winRef"})," ; ",(0,t.jsx)(n.em,{children:"image"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"SET WINDOW DOCUMENT ICON"})," ( ",(0,t.jsx)(n.em,{children:"winRef"})," ; ",(0,t.jsx)(n.em,{children:"file"})," )",(0,t.jsx)(n.br,{}),(0,t.jsx)(n.strong,{children:"SET WINDOW DOCUMENT ICON"})," (  ",(0,t.jsx)(n.em,{children:"winRef"})," ; ",(0,t.jsx)(n.em,{children:"image"})," ; ",(0,t.jsx)(n.em,{children:"file"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"winRef"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de r\xe9f\xe9rence de la fen\xeatre"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"image"}),(0,t.jsx)(n.td,{children:"Picture"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Ic\xf4ne personnalis\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"file"}),(0,t.jsx)(n.td,{children:"4D.File, 4D.Folder"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Chemin d'acc\xe8s du fichier ou du dossier"})]})]})]}),"\n",(0,t.jsxs)(n.details,{children:[(0,t.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Release"}),(0,t.jsx)(n.th,{children:"Modifications"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20 R7"}),(0,t.jsx)(n.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SET WINDOW DOCUMENT ICON"})," command allows you to define an icon for windows in multi-window applications using either an ",(0,t.jsx)(n.em,{children:"image"})," and/or ",(0,t.jsx)(n.em,{children:"file"})," with the window reference ",(0,t.jsx)(n.em,{children:"winRef"}),". The icon will be visible within the window itself and on the windows taskbar to help users identify and navigate different windows."]}),"\n",(0,t.jsxs)(n.p,{children:["In the case of an MDI application on Windows, you can pass ",(0,t.jsx)(n.code,{children:"-1"})," in ",(0,t.jsx)(n.em,{children:"winRef"})," to set the icon of the main window. In other contexts (macOS or ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/Menus/sdi",children:"SDI application"})," on Windows), using -1 does nothing."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If only ",(0,t.jsx)(n.em,{children:"file"})," is passed, the window uses the icon corresponding to the file type and the file\u2019s path is displayed in the window\u2019s menu."]}),"\n",(0,t.jsxs)(n.li,{children:["If only ",(0,t.jsx)(n.em,{children:"image"})," is passed, 4D does not show the path and the passed image is used for the window icon."]}),"\n",(0,t.jsxs)(n.li,{children:["If both ",(0,t.jsx)(n.em,{children:"file"})," and ",(0,t.jsx)(n.em,{children:"image"})," are passed, the file\u2019s path is displayed in the window\u2019s menu and the passed image is used for the window icon."]}),"\n",(0,t.jsxs)(n.li,{children:["If only ",(0,t.jsx)(n.em,{children:"winRef"})," is passed or ",(0,t.jsx)(n.em,{children:"image"})," is empty, the icon is removed on macOS and the default icon is displayed on Windows (application icon)."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Dans cet exemple, nous voulons cr\xe9er quatre fen\xeatres :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Utilisez l'ic\xf4ne de l'application sous Windows et aucune ic\xf4ne sur macOS (\xe9tat par d\xe9faut quand aucune ",(0,t.jsx)(n.em,{children:"image"})," ou ",(0,t.jsx)(n.em,{children:"file"})," n'est utilis\xe9e)."]}),"\n",(0,t.jsx)(n.li,{children:'Utilisez une ic\xf4ne "user".'}),"\n",(0,t.jsx)(n.li,{children:"Associer un document \xe0 la fen\xeatre ( cela utilise l'ic\xf4ne du type de fichier correspondant)."}),"\n",(0,t.jsx)(n.li,{children:"Personnaliser l'ic\xf4ne associ\xe9e au document."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $winRef : Integer\n var $userImage : Picture\n var $file : 4D.File\n \n  // 1- Open "Contact" form\n $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)\n SET WINDOW DOCUMENT ICON($winRef)\n DIALOG("Contact";*)\n \n  // 2- Open "Contact" form with "user" icon\n $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)\n BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent();$userImage)\n SET WINDOW DOCUMENT ICON($winRef;$userImage)\n DIALOG("Contact";*)\n \n  // 3- Open "Contact" form associated with the document "user"\n $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)\n $file:=File("/RESOURCES/files/user.txt")\n SET WINDOW DOCUMENT ICON($winRef;$file)\n DIALOG("Contact";*)\n \n  // 4- Open "Contact" form associated with the document "user" with "user" icon\n $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)\n BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent();$userImage)\n $file:=File("/RESOURCES/files/user.txt")\n SET WINDOW DOCUMENT ICON($winRef;$userImage;$file)\n DIALOG("Contact";*)\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/create-entity-selection",children:"Create entity selection"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var s=i(667294);let t={},d=s.createContext(t);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);