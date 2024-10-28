"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27751],{877348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(474848),d=t(28453);const s={id:"vp-set-column-attributes",title:"VP SET COLUMN ATTRIBUTES"},i=void 0,l={id:"ViewPro/commands/vp-set-column-attributes",title:"VP SET COLUMN ATTRIBUTES",description:"VP SET COLUMN ATTRIBUTES ( rangeObj Object)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/ViewPro/commands/vp-set-column-attributes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-column-attributes",permalink:"/docs/fr/ViewPro/commands/vp-set-column-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-column-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-set-column-attributes",title:"VP SET COLUMN ATTRIBUTES"},sidebar:"docs",previous:{title:"VP SET CELL STYLE",permalink:"/docs/fr/ViewPro/commands/vp-set-cell-style"},next:{title:"VP SET COLUMN COUNT",permalink:"/docs/fr/ViewPro/commands/vp-set-column-count"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET COLUMN ATTRIBUTES"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object  ; ",(0,r.jsx)(n.em,{children:"propertyObj"})," : Object)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tres"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet plage"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"propertyObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Objet contenant des propri\xe9t\xe9s de colonnes"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET COLUMN ATTRIBUTES"})," command  applies the attributes defined in the ",(0,r.jsx)(n.em,{children:"propertyObj"})," to the columns in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range. Si la plage contient des colonnes et des lignes, les attributs s'appliquent uniquement aux colonnes."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"propertyObj"})," parameter lets you specify the attributes to apply to the columns in the ",(0,r.jsx)(n.em,{children:"rangeObj"}),". Ces attributs sont :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"width"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Largeur de colonne exprim\xe9e en pixels"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pageBreak"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Vrai pour ins\xe9rer un saut de page avant la premi\xe8re colonne de la plage, sinon faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"visible"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Vrai si la colonne est visible, sinon faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"resizable"}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:"Vrai si la colonne peut \xeatre redimensionn\xe9e, sinon faux"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"header"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Texte de l'en-t\xeate de la colonne"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Pour modifier la taille de la deuxi\xe8me colonne et d\xe9finir un en-t\xeate, le code suivant :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_OBJECT($column;$properties)\n \n$column:=VP Column("ViewProArea";1) //column B\n$properties:=New object("width";100;"header";"Hello World")\n \nVP SET COLUMN ATTRIBUTES($column;$properties)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(798982).A+"",width:"632",height:"64"})}),"\n",(0,r.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-column",children:"VP Column"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-column-attributes",children:"VP Get column attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-get-row-attributes",children:"VP Get row attributes"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-row-attributes",children:"VP SET ROW ATTRIBUTES"})]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},798982:(e,n,t)=>{t.d(n,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(296540);const d={},s=r.createContext(d);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);