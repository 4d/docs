"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66315"],{622437:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/object-set-placeholder","title":"OBJECT SET PLACEHOLDER","description":"OBJECT SET PLACEHOLDER ( { ;} object ; placeholderText* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-set-placeholder.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-placeholder","permalink":"/docs/commands/object-set-placeholder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-placeholder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-placeholder","title":"OBJECT SET PLACEHOLDER","slug":"/commands/object-set-placeholder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET MULTILINE","permalink":"/docs/commands/object-set-multiline"},"next":{"title":"OBJECT SET PRINT VARIABLE FRAME","permalink":"/docs/commands/object-set-print-variable-frame"}}'),r=n("785893"),o=n("250065");let i={id:"object-set-placeholder",title:"OBJECT SET PLACEHOLDER",slug:"/commands/object-set-placeholder",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT SET PLACEHOLDER"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," ; ",(0,r.jsx)(t.em,{children:"placeholderText"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"placeholderText"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Placeholder text associated with object"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"OBJECT SET PLACEHOLDER"})," command associates placeholder text with the object(s) designated by the ",(0,r.jsx)(t.em,{children:"object"})," and ",(0,r.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,r.jsxs)(t.p,{children:["For more information about placeholder text, refer to the ",(0,r.jsx)(t.em,{children:"Design Reference"})," manual."]}),"\n",(0,r.jsxs)(t.p,{children:["If placeholder text is already associated with the object through the Property List, this text is replaced in the current process by the contents of the ",(0,r.jsx)(t.em,{children:"placeholderText"})," parameter."]}),"\n",(0,r.jsxs)(t.p,{children:["Passing the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"placeholderText"}),", pass the help text or indication that must appear when the object is empty."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The ",(0,r.jsx)(t.strong,{children:"OBJECT SET PLACEHOLDER"})," command does not support the insertion of xliff references into the placeholder text. This is only possible for placeholder text that is defined using the Property List."]}),"\n",(0,r.jsx)(t.p,{children:'This command can only be used with form objects of the variable, field or combo box type. You can associate placeholder text with Alpha and Text type values. You can also associate it with Date or Time type data if the form object is given the "Blank if null" property.'}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:'You want to display "Search" as placeholder text in a combo box:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0OBJECT SET PLACEHOLDER(*;"search_combo";"Search")\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(533428).Z+"",width:"146",height:"30"})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/commands/object-get-placeholder",children:"OBJECT Get placeholder"})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},533428:function(e,t,n){n.d(t,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAAAeCAIAAABIa9B6AAADMElEQVR42u2aW2saQRTHZ9MUAquLWNBslIApNVZMKEhgTUmblq34UqEP9bmfoLQP7WOj/QT9AoVC3/Jo+2CDJFKoFopPSa2xaErqpRoallVLLzFmb417sSEr6nbN/FhwOJ4Zd/bPmTlzXISiKADRG2Na3wCkF6BsumSc/0gV9hOfv3/Za2h9P6NMaY/uoZfTfO7ukts3YxYbEYrb2z7WWpjhvAc3aj21UWYpHF1/clttrwcv3k2i4H5gTmzsLJKMZuFwWOupjT7Ur7aq69m9q2uf9mWDSPa2SCSi9aRGn0OVV1fGtZ7FmeOw3YdBFLIVN6PJKteyLoTm8D78RC29WjAGCCc25Ofzn3LYVqsbojTJZUskwUKIZNWid3JFgNu1nuXI0RpEtNEmg4FvYQ4YH4NgILLZqHw6Y1l2ox0TvZOI5bkTh7BsVt7HP+xyX03PBwkLvwyCaVDaRTmHZm4tleVKZrZF0muXDIJ5fJLBIT0hl80b8jEPPbp1/MRr6Vh1KkAuY+y2l8g0cTeKE2SQALxaObeFC8pGHfMFQ4werGZluy/oF2vTyGasN0Kkkd04CxV3X7ZMvTKYlASgTj/pZIMjnmaUw5p10CjF4ln+y2kr4yBKWwwuoZdhys7pRNfKlHXWL4sng4twsCd5u9UGCnUa4Gd4+R3IIimAObye6kax5nUDeUrJKCqkLUxgbWr9EHTPrKmLBNvUwcm95KXknFA2a1aKDQxDAYYaQXU70+x40A0hbWEDSzEeZpkySf0hUko/EPG1Xm7JHBiL2KHrIHKp67F4lG8x6QabO6DewMVEjN3tBCMx48qkNlbzwGS1mZQDMmvsfH1V8O+kJJC/KM9t8dIBaRs/biscuijXKSUvXjIjCNJWfRiEnBa+lPz2W/eKFaMco5nSfm1y7ObTV68fXhcbYXFr2LT+kUq++fqndeosE8o2bA76sZ5JZFtZWdF6UqPP6UPqBCSywf/bhkD/ZYMMASibLmn1Y2+Db27pkk60bVXq8BWgIXBnZkKV/+OXyVuXL8iMwnGb+tmu/IaRN1gePU/00Ct4xRLyuUwTklqJIBtEX8AI0yVQNl1yBNiDeNH5/jTWAAAAAElFTkSuQmCC"},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var s=n(667294);let r={},o=s.createContext(r);function i(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);