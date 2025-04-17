"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86567"],{266338:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"ViewPro/commands/vp-import-from-object","title":"VP IMPORT FROM OBJECT","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/ViewPro/commands/vp-import-from-object.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-import-from-object","permalink":"/docs/pt/ViewPro/commands/vp-import-from-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-import-from-object.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-import-from-object","title":"VP IMPORT FROM OBJECT"},"sidebar":"docs","previous":{"title":"VP IMPORT FROM BLOB","permalink":"/docs/pt/ViewPro/commands/vp-import-from-blob"},"next":{"title":"VP INSERT COLUMNS","permalink":"/docs/pt/ViewPro/commands/vp-insert-columns"}}'),s=r("785893"),o=r("250065");let d={id:"vp-import-from-object",title:"VP IMPORT FROM OBJECT"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"20 R9"}),(0,s.jsxs)(n.td,{children:["Support of ",(0,s.jsx)(n.em,{children:"paramObj"})," parameter"]})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP IMPORT FROM OBJECT"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text  { ; ",(0,s.jsx)(n.em,{children:"viewPro"})," : Object { ; ",(0,s.jsx)(n.em,{children:"paramObj"})," : Object} } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"viewPro"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objecto 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paramObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"(Optional) import options"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP IMPORT FROM OBJECT"})," command imports and displays the ",(0,s.jsx)(n.em,{children:"viewPro"})," 4D View Pro object in the ",(0,s.jsx)(n.em,{children:"vpAreaName"})," 4D View Pro area. O documento importado substitui qualquer dado j\xe1 inserido na \xe1rea"]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro. Se passar um nome que n\xe3o existe, \xe9 devolvido um erro."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"viewPro"}),", passe um objeto 4D View Pro v\xe1lido. Esse objeto pode ter sido criado usando [VP Export to object] (vp-export-to-object.md) ou manualmente. Para mais informa\xe7\xf5es sobre objetos 4D View Pro, consulte a se\xe7\xe3o ",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/configuring#4d-view-pro-object",children:"4D View Pro"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An error is returned if the ",(0,s.jsx)(n.em,{children:"viewPro"})," object is invalid."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"paramObj"}),", you can pass the following property:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propriedade"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"formula"}),(0,s.jsx)(n.td,{children:"4D. Function"}),(0,s.jsxs)(n.td,{children:["(Optional) Callback function to be executed when the object is loaded and all 4D custom functions have responded. Veja ",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-document#passing-a-callback-method-formula",children:"Passando um m\xe9todo de callback (f\xf3rmula)"}),"."]})]})})]}),"\n",(0,s.jsx)(n.p,{children:"Os seguintes par\xe2metros podem ser usados no m\xe9todo de retorno de chamada:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param1"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"O nome do objeto de \xe1rea 4D View Pro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param2"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Reserved for compatibility, this parameter is always empty"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param3"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsxs)(n.td,{children:["Uma refer\xeancia ao par\xe2metro ",(0,s.jsx)(n.em,{children:"paramObj"})," do comando"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param4"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"Um objeto devolvido pelo m\xe9todo com uma mensagem de estado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".success"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"True"})," if import was successful, ",(0,s.jsx)(n.code,{children:"False"})," otherwise"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".errorCode"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"C\xf3digo de erro"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:".errorMessage"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Mensagem de erro"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The callback function specified in the ",(0,s.jsx)(n.code,{children:"formula"})," attribute is triggered after all ",(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/formulas#4d-functions",children:"4D custom functions"})," within the imported content have completed their calculations. This ensures that any dependent processes, such as document modifications or exports, are performed only after all formula-based computations are fully resolved."]})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"You want to import a spreadsheet that was previously saved in an object field, and trigger a callback function after all 4D custom functions have responded:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'QUERY([VPWorkBooks];[VPWorkBooks]ID=10)\n\nVP IMPORT FROM OBJECT("ViewProArea1"; [VPWorkBooks]SPBook; {formula: Formula(onImportComplete)})\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"// Method 'onImportComplete'\n#DECLARE($name : Text; $path : Text; $paramObj : Object; $status : Object)\n   ALERT(\"The document has been imported, and all custom functions have finished processing.\")\n"})}),"\n",(0,s.jsx)(n.h2,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-export-to-object",children:"VP Export to object"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);