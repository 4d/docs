"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79271"],{152449:function(e,r,n){n.r(r),n.d(r,{default:()=>l,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands/form","title":"Formul\xe1rio","description":"Form  : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/form.md","sourceDirName":"commands","slug":"/commands/form","permalink":"/docs/pt/20-R8/commands/form","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fform.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form","title":"Formul\xe1rio","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current form name","permalink":"/docs/pt/20-R8/commands/current-form-name"},"next":{"title":"FORM Convert to dynamic","permalink":"/docs/pt/20-R8/commands/form-convert-to-dynamic"}}'),s=n("785893"),o=n("250065");let d={id:"form",title:"Formul\xe1rio",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Commands (DIALOG...)",id:"commands-dialog",level:3},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3},{value:"Table form",id:"table-form",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function A(e){let r={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Form"}),"  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Resultado"}),(0,s.jsx)(r.td,{children:"Object"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"Form data of the current form"})]})})]}),"\n",(0,s.jsxs)(r.details,{children:[(0,s.jsx)(r.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Release"}),(0,s.jsx)(r.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"20 R8"}),(0,s.jsx)(r.td,{children:"Form class support"})]})})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"Form"})," command returns the object associated with the current form (instantiated from the ",(0,s.jsx)(r.em,{children:"formData"})," parameter or the user class assigned in the Form editor).The ",(0,s.jsx)(r.strong,{children:"Form"})," command returns the object associated with the current form (instantiated from the ",(0,s.jsx)(r.em,{children:"formData"})," parameter or the user class assigned in the Form editor).The ",(0,s.jsx)(r.strong,{children:"Form"})," command returns the object associated with the current form (instantiated from the ",(0,s.jsx)(r.em,{children:"formData"})," parameter or the user class assigned in the Form editor).The ",(0,s.jsx)(r.strong,{children:"Form"})," command returns the object associated with the current form (instantiated from the ",(0,s.jsx)(r.em,{children:"formData"})," parameter or the user class assigned in the Form editor).The ",(0,s.jsx)(r.strong,{children:"Form"})," command returns the object associated with the current form (instantiated from the ",(0,s.jsx)(r.em,{children:"formData"})," parameter or the user class assigned in the Form editor).The ",(0,s.jsx)(r.strong,{children:"Form"})," command returns the object associated with the current form (instantiated from the ",(0,s.jsx)(r.em,{children:"formData"})," parameter or the user class assigned in the Form editor).The ",(0,s.jsx)(r.strong,{children:"Form"})," command returns the object associated with the current form (instantiated from the ",(0,s.jsx)(r.em,{children:"formData"})," parameter or the user class assigned in the Form editor).The ",(0,s.jsx)(r.strong,{children:"Form"})," command returns the object associated with the current form (instantiated from the ",(0,s.jsx)(r.em,{children:"formData"})," parameter or the user class assigned in the Form editor). 4D automatically associates an object to the current form in the following cases:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["o formul\xe1rio atual foi carregado por um dos comandos ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R8/commands/dialog",children:(0,s.jsx)(r.code,{children:"DIALOG"})}),", ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R8/commands/print-form",children:(0,s.jsx)(r.code,{children:"Print form"})})," ou ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R8/commands/form-load",children:(0,s.jsx)(r.code,{children:"FORM LOAD"})}),","]}),"\n",(0,s.jsx)(r.li,{children:"the current form is a subform,"}),"\n",(0,s.jsx)(r.li,{children:"a table form is currently displayed on screen."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"commands-dialog",children:"Commands (DIALOG...)"}),"\n",(0,s.jsxs)(r.p,{children:["If the current form is being displayed or loaded by a call to the ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R8/commands/dialog",children:"DIALOG"}),", ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R8/commands/print-form",children:(0,s.jsx)(r.code,{children:"Print form"})}),", or ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R8/commands/form-load",children:(0,s.jsx)(r.code,{children:"FORM LOAD"})})," commands, ",(0,s.jsx)(r.strong,{children:"Form"})," returns either:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["the ",(0,s.jsx)(r.em,{children:"formData"})," object passed as parameter to this command, if any,"]}),"\n",(0,s.jsxs)(r.li,{children:["ou, um objeto instanciado da ",(0,s.jsx)(r.a,{href:"/docs/pt/20-R8/FormEditor/propertiesForm#form-class",children:"classe de usu\xe1rio associada ao formul\xe1rio"}),", se houver,"]}),"\n",(0,s.jsx)(r.li,{children:"or, an empty object."}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,s.jsx)(r.p,{children:"If the current form is a subform, the returned object depends on the parent container variable:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Form"})," returns the object associated with the table form displayed on screen.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Form"})," returns the object associated with the table form displayed on screen.",(0,s.jsx)(r.br,{}),"\nIn the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:" (OBJECT Get pointer(Object subform container))->  \n"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["If the variable associated to the parent container has not been typed as an object, ",(0,s.jsx)(r.strong,{children:"Form"})," returns an empty object, maintained by 4D in the subform context."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["For more information, please refer to the ",(0,s.jsx)(r.em,{children:"Page subforms"})," section."]}),"\n",(0,s.jsx)(r.h3,{id:"table-form",children:"Table form"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Form"})," returns the object associated with the table form displayed on screen.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.strong,{children:"Form"})," returns the object associated with the table form displayed on screen.",(0,s.jsx)(r.br,{}),"\nIn the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property: ",(0,s.jsx)(r.strong,{children:"Form"})," returns the object associated with the table form displayed on screen.",(0,s.jsx)(r.br,{}),"\nIn the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Propriedade"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Tipo"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Description"})})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"parentForm"}),(0,s.jsx)(r.td,{children:"object"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Form"})," object of the parent output form"]})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(r.p,{children:'In a form displaying the record of a person, a "Check children" button opens a dialog to verify/modify the names and ages of their children:'}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(587415).Z+"",width:"748",height:"423"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"}),' The "Children" object field is represented only to show its structure for this example.']}),"\n",(0,s.jsx)(r.p,{children:"In the verification form, you have assigned some Form object properties to inputs:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(746377).Z+"",width:"744",height:"275"})}),"\n",(0,s.jsx)(r.p,{children:'Here is the code for the "Check children" button:'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:' var $win;$n;$i : Integer\n var $save : Boolean\n ARRAY OBJECT($children;0)\n OB GET ARRAY([Person]Children;"children";$children) //get the children collection\n $save:=False //initialize the save variable\n \n $n:=Size of array($children)\n If($n>0)\n    $win:=Open form window("Edit_Children";Movable form dialog box)\n    SET WINDOW TITLE("Check children for "+[Person]Name)\n    For($i;1;$n) //for each child\n       DIALOG("Edit_Children";$children{$i}) //displays dialog filled with values\n       If(OK=1) //the user clicked OK\n          $save:=True\n       End if\n    End for\n    If($save=True)\n       [Person]Children:=[Person]Children //forces object field update\n    End if\n    CLOSE WINDOW($win)\n Else\n    ALERT("No child to check.")\n End if\n'})}),"\n",(0,s.jsx)(r.p,{children:"The form displays information for each child:"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:n(237425).Z+"",width:"522",height:"268"})}),"\n",(0,s.jsx)(r.p,{children:"If values are edited and the OK button is clicked, the field is updated (the parent record must be saved afterwards)."}),"\n",(0,s.jsx)(r.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/pt/20-R8/commands/dialog",children:"DIALOG"})}),"\n",(0,s.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Command number"}),(0,s.jsx)(r.td,{children:"1466"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread safe"}),(0,s.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},237425:function(e,r,n){n.d(r,{Z:function(){return t}});let t="data:image/png;base64,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"},746377:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/pict3541682.en-ab83dd431b22f336d46bb1e38b0e80aa.png"},587415:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/pict3542015.en-70421813b1ccd4fa2f297bcd1aedfc54.png"},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var t=n(667294);let s={},o=t.createContext(s);function d(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);