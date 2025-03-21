"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62392"],{433790:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>o,assets:()=>i,toc:()=>a,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/object-get-subform-container-value","title":"OBJECT Get subform container value","description":"OBJECT Get subform container value  : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-subform-container-value.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-subform-container-value","permalink":"/docs/pt/20-R7/commands/object-get-subform-container-value","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-subform-container-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-subform-container-value","title":"OBJECT Get subform container value","slug":"/commands/object-get-subform-container-value","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SUBFORM CONTAINER SIZE","permalink":"/docs/pt/20-R7/commands/object-get-subform-container-size"},"next":{"title":"OBJECT Get text orientation","permalink":"/docs/pt/20-R7/commands/object-get-text-orientation"}}'),r=t("785893"),s=t("250065");let c={id:"object-get-subform-container-value",title:"OBJECT Get subform container value",slug:"/commands/object-get-subform-container-value",displayed_sidebar:"docs"},d=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT Get subform container value"}),"  : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Current value of the subform container data source"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OBJECT Get subform container value"})," command returns the current value of the data source bound with the subform container displayed in the parent form."]}),"\n",(0,r.jsxs)(n.p,{children:["This command can only be used in the context of a form used as a subform. In any other context, it returns ",(0,r.jsx)(n.strong,{children:"Undefined"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the data source is an expression, the command returns the current value of the expression, evaluated since the last form event cycle."}),"\n",(0,r.jsx)(n.li,{children:"If the data source is an array, the command returns the array index (integer)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more information on bound variables and form/subform interaction, see ",(0,r.jsx)(n.em,{children:"Managing the bound variable"})," on developer.4d.com."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Given a main form and a subform that both have an Input form object:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(879317).Z+"",width:"417",height:"121"})}),"\n",(0,r.jsxs)(n.p,{children:["Inside the main form, the Input object and the Subform object are bound to the ",(0,r.jsx)(n.em,{children:"Form.numeric"})," expression of type Numeric."]}),"\n",(0,r.jsxs)(n.p,{children:["The main form's Input object and the subform's Input object both have the ",(0,r.jsx)(n.em,{children:"On Data Change"})," property set via the Property list."]}),"\n",(0,r.jsx)(n.p,{children:"The subform's Form Method contains the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If(Form event code=On bound variable change)\n\xa0\xa0\xa0\xa0Form.displayNumeric:=OBJECT Get subform container value\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"And inside the subform, the Input text's object method contains the following code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0OBJECT SET SUBFORM CONTAINER VALUE(Form.displayNumeric)\n"})}),"\n",(0,r.jsx)(n.p,{children:"As a result, at runtime, updating the value of the main form's Input object also updates the value of the subform's Input object, and vice versa."}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/form",children:"Form"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-get-pointer",children:"OBJECT Get pointer"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-set-subform-container-value",children:"OBJECT SET SUBFORM CONTAINER VALUE"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1785"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},879317:function(e,n,t){t.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return c}});var o=t(667294);let r={},s=o.createContext(r);function c(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);