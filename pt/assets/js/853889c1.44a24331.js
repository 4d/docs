"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36167"],{336687:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>A,metadata:()=>o,assets:()=>d,toc:()=>i,contentTitle:()=>a});var o=JSON.parse('{"id":"commands/form-load","title":"FORM LOAD","description":"FORM LOAD ( {aTable ;} form {; formData}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/form-load.md","sourceDirName":"commands","slug":"/commands/form-load","permalink":"/docs/pt/commands/form-load","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fform-load.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"form-load","title":"FORM LOAD","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM LAST PAGE","permalink":"/docs/pt/commands/form-last-page"},"next":{"title":"FORM NEXT PAGE","permalink":"/docs/pt/commands/form-next-page"}}'),t=r("785893"),s=r("250065");let A={id:"form-load",title:"FORM LOAD",displayed_sidebar:"docs"},a=void 0,d={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"formData",id:"formdata",level:5},{value:"Printing data",id:"printing-data",level:5},{value:"Parsing form contents",id:"parsing-form-contents",level:5},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Exemplo 2",id:"exemplo-2-1",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FORM LOAD"})," ( {",(0,t.jsx)(n.em,{children:"aTable"})," ;} ",(0,t.jsx)(n.em,{children:"form"})," {; ",(0,t.jsx)(n.em,{children:"formData"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Tabela"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table form to load (if omitted, load a project form)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"form"}),(0,t.jsx)(n.td,{children:"Text, Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Name (string) of form (project or table), ora POSIX path (string) to a .json file describing the form, or an object describing the form to open"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formData"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Data to associate to the form"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"If passed = command applies to host database when it is executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"FORM LOAD"})," command is used to load the ",(0,t.jsx)(n.em,{children:"form"})," in memory in the current process along with ",(0,t.jsx)(n.em,{children:"formData"})," (optional) in order to print its data or parse its contents.The ",(0,t.jsx)(n.strong,{children:"FORM LOAD"})," command is used to load the ",(0,t.jsx)(n.em,{children:"form"})," in memory in the current process along with ",(0,t.jsx)(n.em,{children:"formData"})," (optional) in order to print its data or parse its contents.The ",(0,t.jsx)(n.strong,{children:"FORM LOAD"})," command is used to load the ",(0,t.jsx)(n.em,{children:"form"})," in memory in the current process along with ",(0,t.jsx)(n.em,{children:"formData"})," (optional) in order to print its data or parse its contents. There can only be one current form per process."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.em,{children:"form"})," parameter, you can pass:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the name of a form, or"}),"\n",(0,t.jsx)(n.li,{children:"the path (in POSIX syntax) to a valid .json file containing a description of the form to use, or"}),"\n",(0,t.jsx)(n.li,{children:"an object containing a description of the form."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When the command is executed from a component, it loads the component forms by default. If you pass the ",(0,t.jsx)(n.em,{children:"*"})," parameter, the method loads the host database forms."]}),"\n",(0,t.jsx)(n.h5,{id:"formdata",children:"formData"}),"\n",(0,t.jsxs)(n.p,{children:["Optionally, you can pass parameters to the ",(0,t.jsx)(n.em,{children:"form"})," using either the ",(0,t.jsx)(n.em,{children:"formData"})," object or the form class object automatically instantiated by 4D if you have ",(0,t.jsx)(n.a,{href:"/docs/pt/FormEditor/propertiesForm#form-class",children:"associated a user class to the form"}),". Any properties of the form data object will then be available from within the form context through the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/form",children:"Form"})," command.\nAny properties of the form data object will then be available from within the form context through the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/form",children:"Form"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["Para obter informa\xe7\xf5es detalhadas sobre o objeto de dados do formul\xe1rio, consulte o comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/dialog",children:(0,t.jsx)(n.code,{children:"DIALOG"})}),"."]}),"\n",(0,t.jsx)(n.h5,{id:"printing-data",children:"Printing data"}),"\n",(0,t.jsxs)(n.p,{children:["In order to be able to execute this command, a print job must be opened beforehand using the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/open-printing-job",children:"OPEN PRINTING JOB"})," command. The ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/open-printing-job",children:"OPEN PRINTING JOB"})," command makes an implicit call to the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/form-unload",children:"FORM UNLOAD"})," command, so in this context it is necessary to execute ",(0,t.jsx)(n.strong,{children:"FORM LOAD"}),". Once loaded, this ",(0,t.jsx)(n.em,{children:"form"})," becomes the current printing form. All the object management commands, and in particular the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/print-object",children:"Print object"})," command, work with this form."]}),"\n",(0,t.jsxs)(n.p,{children:["If a printing form has already been loaded beforehand (via a previous call to the ",(0,t.jsx)(n.strong,{children:"FORM LOAD"})," command), it is closed and replaced by ",(0,t.jsx)(n.em,{children:"form"}),". You can open and close several project forms in the same print session. Changing the printing form via the ",(0,t.jsx)(n.strong,{children:"FORM LOAD"})," command does not generate page breaks. It is up to the developer to manage page breaks."]}),"\n",(0,t.jsxs)(n.p,{children:["Only the ",(0,t.jsxs)(n.a,{href:"/docs/pt/Events/onLoad",children:[(0,t.jsx)(n.code,{children:"On Load"})," form event"]})," is executed during the opening of the project form, as well as any object methods of the form. Other form events are ignored. O evento formul\xe1rio ",(0,t.jsx)(n.a,{href:"/docs/pt/Events/onUnload",children:(0,t.jsx)(n.code,{children:"On Unload"})})," \xe9 executado no final da impress\xe3o."]}),"\n",(0,t.jsx)(n.p,{children:'To preserve the graphic consistency of forms, it is recommended to apply the "Printing" appearance property regardless of the platform.'}),"\n",(0,t.jsxs)(n.p,{children:["The current printing form is automatically closed when the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/close-printing-job",children:"CLOSE PRINTING JOB"})," command is called."]}),"\n",(0,t.jsx)(n.h5,{id:"parsing-form-contents",children:"Parsing form contents"}),"\n",(0,t.jsxs)(n.p,{children:["This consists in loading an off-screen form for parsing purposes. To do this, just call ",(0,t.jsx)(n.strong,{children:"FORM LOAD"})," outside the context of a print job. In this case, form events are not executed."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FORM LOAD"})," can be used with the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/form-get-objects",children:"FORM GET OBJECTS"})," and ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/object-get-type",children:"OBJECT Get type"})," commands in order to perform any type of processing on the form contents. You must then call the ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/form-unload",children:"FORM UNLOAD"})," command in order to release the form from memory."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that in all cases, the form on screen remains loaded (it is not affected by the ",(0,t.jsx)(n.strong,{children:"FORM LOAD"})," command) so it is not necessary to reload it after calling ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/form-unload",children:"FORM UNLOAD"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Reminder:"})," In the off-screen context, do not forget to call ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/form-unload",children:"FORM UNLOAD"})," to avoid any risk of memory overflow."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(n.p,{children:"Calling a project form in a print job:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN PRINTING JOB\n\xa0FORM LOAD("print_form")\n\xa0\xa0// execution of events and object methods\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Calling a table form in a print job:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN PRINTING JOB\n\xa0FORM LOAD([People];"print_form")\n\xa0\xa0// execution of events and object methods\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,t.jsx)(n.p,{children:"Parsing of form contents to carry out processing on text input areas:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0FORM LOAD([People];"my_form")\n\xa0\xa0// selection of form without execution of events or methods\n\xa0FORM GET OBJECTS(arrObjNames;arrObjPtrs;arrPages;*)\n\xa0For($i;1;Size of array(arrObjNames))\n\xa0\xa0\xa0\xa0If(OBJECT Get type(*;arrObjNames{$i})=Object type text input)\n\xa0\xa0//\u2026 processing\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0FORM UNLOAD\xa0//do not forget to unload the form\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"The following example returns the number of objects on a JSON form:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(objectsArray;0)\xa0//sort form items into arrays\n\xa0ARRAY POINTER(variablesArray;0)\n\xa0ARRAY INTEGER(pagesArray;0)\n\xa0\n\xa0FORM LOAD("/RESOURCES/OutputForm.json")\xa0//load the form\n\xa0FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)\n\xa0\n\xa0ALERT("The form contains "+String(size of array(objectsArray))+" objects")\xa0//return the object count\n'})}),"\n",(0,t.jsx)(n.p,{children:"the result shown is:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(559153).Z+"",width:"532",height:"298"})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-2-1",children:"Exemplo 2"}),"\n",(0,t.jsxs)(n.p,{children:["You want to print a form containing a list box. During the ",(0,t.jsx)(n.em,{children:"on load"})," event, you want the contents of the list box to be modified."]}),"\n",(0,t.jsx)(n.p,{children:"1. In the printing method, you write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $formData : Object\n\xa0var $over : Boolean\n\xa0var $full : Boolean\n\xa0\n\xa0OPEN PRINTING JOB\n\xa0$formData:=New object\n\xa0$formData.LBcollection:=New collection()\n\xa0...\xa0//fill the collection with data\n\xa0\n\xa0FORM LOAD("GlobalForm";$formData)\xa0//store the collection in $formData\n\xa0$over:=False\n\xa0Repeat\n\xa0\xa0\xa0\xa0$full:=Print object(*;"LB")\xa0// the datasource of this "LB" listbox is Form.LBcollection\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"LB";lk printing is over;$over)\n\xa0\xa0\xa0\xa0If(Not($over))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0\xa0\xa0\xa0End if\n\xa0Until($over)\n\xa0FORM UNLOAD\n\xa0CLOSE PRINTING JOB\n'})}),"\n",(0,t.jsx)(n.p,{children:"2. In the form method, you can write:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0var $o : Object\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For each($o;Form.LBcollection)\xa0//LBcollection is available\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$o.reference:=Uppercase($o.reference)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for each\n\xa0End case\n"})}),"\n",(0,t.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/current-form-name",children:"Current form name"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/form-unload",children:"FORM UNLOAD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/listbox-get-objects",children:"LISTBOX GET OBJECTS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/object-get-type",children:"OBJECT Get type"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/print-object",children:"Print object"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1103"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"&cross;"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},559153:function(e,n,r){r.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return A}});var o=r(667294);let t={},s=o.createContext(t);function A(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:A(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);