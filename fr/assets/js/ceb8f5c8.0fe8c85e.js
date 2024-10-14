"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30963],{256608:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=s(474848),t=s(28453);const o={id:"stepper",title:"Stepper"},n=void 0,c={id:"FormObjects/stepper",title:"Stepper",description:"Un stepper permet \xe0 l'utilisateur de faire d\xe9filer des valeurs num\xe9riques, des dur\xe9es (heures) ou des dates par des \xe9tapes pr\xe9-d\xe9finies en cliquant sur les boutons de direction.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/FormObjects/stepper.md",sourceDirName:"FormObjects",slug:"/FormObjects/stepper",permalink:"/docs/fr/20-R5/FormObjects/stepper",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fstepper.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"stepper",title:"Stepper"},sidebar:"docs",previous:{title:"Image statique",permalink:"/docs/fr/20-R5/FormObjects/staticPicture"},next:{title:"Sous-formulaire",permalink:"/docs/fr/20-R5/FormObjects/subformOverview"}},d={},l=[{value:"Utilisation du stepper",id:"utilisation-du-stepper",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2}];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Un stepper permet \xe0 l'utilisateur de faire d\xe9filer des valeurs num\xe9riques, des dur\xe9es (heures) ou des dates par des \xe9tapes pr\xe9-d\xe9finies en cliquant sur les boutons de direction."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(530708).A+"",width:"285",height:"61"})}),"\n",(0,i.jsx)(r.h2,{id:"utilisation-du-stepper",children:"Utilisation du stepper"}),"\n",(0,i.jsx)(r.p,{children:"La variable associ\xe9e \xe0 l\u2019objet peut \xeatre affect\xe9e \xe0 une zone saisissable (champ ou variable) afin de stocker ou modifier la valeur courante de l\u2019objet."}),"\n",(0,i.jsx)(r.p,{children:"Un stepper peut \xeatre directement associ\xe9 \xe0 une variable num\xe9rique, heure ou date."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Pour les valeurs de type heure, les propri\xe9t\xe9s Minimum, Maximum et Pas repr\xe9sentent des secondes. Par exemple, pour d\xe9finir un stepper de 8h00 \xe0 18h00 avec des pas de 10 minutes :\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesScale#minium",children:"minimum"})," = 28 800 (8*60*60)"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesScale#maximum",children:"maximum"})," = 64 800 (18*60*60)"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesScale#step",children:"step"})," = 600 (10*60)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["For values of the date type, the value entered in the ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesScale#step",children:"step"})," property represents days. Les propri\xe9t\xe9s Minimum et Maximum sont ignor\xe9es."]}),"\n"]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/Concepts/variables#declaring-variables",children:"declare it explicitly"})," as ",(0,i.jsx)(r.code,{children:"Time"})," or ",(0,i.jsx)(r.code,{children:"Date"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["For more information, please refer to ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/progressIndicator#using-indicators",children:"Using indicators"}),' in the "Progress Indicator" page.']}),"\n",(0,i.jsx)(r.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesAction#execute-object-method",children:"Execute object method"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#expression-type",children:"Expression Type"}),' (only "integer", "number", "date", or "time") - ',(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesHelp#help-tip",children:"Help Tip"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesScale#maximum",children:"Maximum"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesScale#minimum",children:"Minimum"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesScale#step",children:"Step"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})]}),"\n",(0,i.jsx)(r.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/progressIndicator",children:"progress indicators"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/ruler",children:"rulers"})}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},530708:(e,r,s)=>{s.d(r,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var i=s(296540);const t={},o=i.createContext(t);function n(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);