/*! For license information please see d33148d1.83d635b5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27017],{312340:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(474848),n=t(28453);const o={id:"formObjectsOverview",title:"Form Objects"},i=void 0,l={id:"FormObjects/formObjectsOverview",title:"Form Objects",description:"Vous cr\xe9ez et personnalisez les formulaires de votre application en manipulant les objets qu'ils contiennent. Vous pouvez ajouter des objets, repositionner des objets, d\xe9finir des propri\xe9t\xe9s d'objets, appliquer des r\xe8gles m\xe9tier en sp\xe9cifiant des contraintes de saisie de donn\xe9es ou \xe9crire des m\xe9thodes objet qui s'ex\xe9cutent automatiquement lorsque l'objet est utilis\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/FormObjects/formObjects_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/formObjectsOverview",permalink:"/docs/fr/20-R4/FormObjects/formObjectsOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FformObjects_overview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"formObjectsOverview",title:"Form Objects"},sidebar:"docs",previous:{title:"Window Size",permalink:"/docs/fr/20-R4/FormEditor/windowSize"},next:{title:"Button",permalink:"/docs/fr/20-R4/FormObjects/buttonOverview"}},d={},c=[{value:"Objets actifs et statiques",id:"Objets-actifs-et-statiques",level:2},{value:"G\xe9rer les objets de formulaire",id:"G\xe9rer-les-objets-de-formulaire",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Vous cr\xe9ez et personnalisez les formulaires de votre application en manipulant les objets qu'ils contiennent. Vous pouvez ajouter des objets, repositionner des objets, d\xe9finir des propri\xe9t\xe9s d'objets, appliquer des r\xe8gles m\xe9tier en sp\xe9cifiant des contraintes de saisie de donn\xe9es ou \xe9crire des m\xe9thodes objet qui s'ex\xe9cutent automatiquement lorsque l'objet est utilis\xe9."}),"\n",(0,r.jsx)(s.h2,{id:"Objets-actifs-et-statiques",children:"Objets actifs et statiques"}),"\n",(0,r.jsxs)(s.p,{children:["Les formulaires 4D prennent en charge un grand nombre d'objets ",(0,r.jsx)(s.strong,{children:"actifs"})," et ",(0,r.jsx)(s.strong,{children:"statiques"})," int\xe9gr\xe9s :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Les objets actifs"})," r\xe9alisent une t\xe2che ou une fonction de l\u2019interface. Les champs sont des objets actifs. Les autres objets actifs \u2014 objets saisissables (variables), combo box, listes d\xe9roulantes, boutons image, etc. \u2014 stockent des donn\xe9es temporairement en m\xe9moire ou effectuent une t\xe2che telle que l'ouverture d'une boite de dialogue, l'impression d'un \xe9tat ou le lancement d'un processus d'arri\xe8re-plan."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Les objets statiques"})," sont g\xe9n\xe9ralement utilis\xe9s pour le d\xe9cor, les libell\xe9s ou encore l'interface graphique du formulaire. A la diff\xe9rence des objets actifs, les objets statiques ne sont pas associ\xe9s \xe0 des variables. A noter qu'il est possible d'ins\xe9rer des \xe9l\xe9ments dynamiques dans les objets statiques."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"G\xe9rer-les-objets-de-formulaire",children:"G\xe9rer les objets de formulaire"}),"\n",(0,r.jsx)(s.p,{children:"Vous pouvez ajouter des objets dans un formulaire de nombreuses mani\xe8res :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/20-R4/FormEditor/",children:"\xc9diteur de formulaire"})," :"]})," en glissant un objet de la barre d'outils de l'\xe9diteur de formulaire vers le formulaire. Utilisez ensuite la liste de propri\xe9t\xe9s pour indiquer les propri\xe9t\xe9s de l'objet."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"4D language"}),": Commands from the ",(0,r.jsx)(s.code,{children:"Objects (Forms)"})," theme such as ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1111.html",children:(0,r.jsx)(s.code,{children:"OBJECT DUPLICATE"})})," or ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page166.html",children:(0,r.jsx)(s.code,{children:"OBJECT SET FONT STYLE"})})," allow to create and define form objects."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Code JSON dans les formulaires dynamiques :"})," D\xe9finissez les propri\xe9t\xe9s \xe0 l'aide du JSON. Utilisez la propri\xe9t\xe9 ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R4/FormObjects/propertiesObject#type",children:"type"})," pour d\xe9finir le type d'objet puis indiquez ses ",(0,r.jsx)(s.a,{href:"/docs/fr/20-R4/FormObjects/propertiesReference",children:"propri\xe9t\xe9s disponibles"}),". Exemple d'un objet bouton :"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'    {\n        "type": "button", \n        "style": "bevel", \n        "text": "OK", \n        "action": "Cancel", \n        "left": 60, \n        "top": 160, \n        "width": 100, \n        "height": 20\n    }\n'})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,s,t)=>{var r=t(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var r,o={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(a=s.ref),s)i.call(s,r)&&!d.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:n,type:e,key:c,ref:a,props:o,_owner:l.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var r=t(296540);const n={},o=r.createContext(n);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);