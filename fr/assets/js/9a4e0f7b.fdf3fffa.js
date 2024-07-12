/*! For license information please see 9a4e0f7b.fdf3fffa.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36649],{772117:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=n(474848),a=n(28453);const s={id:"advanced-programming",title:"Programmation avanc\xe9e avec Javascript"},o=void 0,i={id:"ViewPro/advanced-programming",title:"Programmation avanc\xe9e avec Javascript",description:"Une zone 4D View Pro est un objet de formulaire de zone Web qui utilise le moteur de rendu Web int\xe9gr\xe9. As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the WA Evaluate Javascript 4D command.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/fr/20-R5/ViewPro/advanced-programming",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"advanced-programming",title:"Programmation avanc\xe9e avec Javascript"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/fr/20-R5/ViewPro/classes"},next:{title:"Commandes",permalink:"/docs/fr/20-R5/ViewPro/commands"}},d={},c=[{value:"Exemple concret : masquer le ruban",id:"exemple-concret--masquer-le-ruban",level:2},{value:"Appeler des m\xe9thodes JavaScript de SpreadJS",id:"appeler-des-m\xe9thodes-javascript-de-spreadjs",level:2},{value:"Exemple",id:"exemple",level:4},{value:"D\xe9p\xf4t 4D View Pro Tips",id:"d\xe9p\xf4t-4d-view-pro-tips",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Une zone 4D View Pro est un ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/webAreaOverview",children:"objet de formulaire de zone Web"})," qui utilise le ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R5/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu Web int\xe9gr\xe9"}),". As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1029.html",children:(0,t.jsx)(r.code,{children:"WA Evaluate Javascript"})})," 4D command."]}),"\n",(0,t.jsxs)(r.p,{children:["Since 4D View Pro is powered by the ",(0,t.jsx)(r.a,{href:"https://developer.mescius.com/spreadjs",children:"SpreadJS spreadsheet solution"}),", you can also call SpreadJS Javascript methods in 4D View Pro areas."]}),"\n",(0,t.jsx)(r.h2,{id:"exemple-concret--masquer-le-ruban",children:"Exemple concret : masquer le ruban"}),"\n",(0,t.jsxs)(r.p,{children:["4D View Pro \xe9tant une zone Web, vous pouvez s\xe9lectionner un \xe9l\xe9ment de page Web et modifier son comportement \xe0 l'aide de Javascript. L'exemple suivant permet de masquer le ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R5/ViewPro/configuring#ribbon",children:"ruban"})," spreadJS :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"//M\xe9thode objet du bouton\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"appeler-des-m\xe9thodes-javascript-de-spreadjs",children:"Appeler des m\xe9thodes JavaScript de SpreadJS"}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez exploiter la biblioth\xe8que de m\xe9thodes Javascript de SpreadJS et les appeler directement pour g\xe9rer vos feuilles de calcul."}),"\n",(0,t.jsxs)(r.p,{children:["4D has a built-in ",(0,t.jsx)(r.code,{children:"Utils.spread"})," property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS ",(0,t.jsx)(r.a,{href:"https://developer.mescius.com/spreadjs/api/modules/GC.Data",children:"Workbook methods"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(r.p,{children:"Le code suivant annule la derni\xe8re action dans la feuille de calcul :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,t.jsx)(r.h2,{id:"d\xe9p\xf4t-4d-view-pro-tips",children:"D\xe9p\xf4t 4D View Pro Tips"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," est un d\xe9p\xf4t GitHub qui contient un projet rempli de fonctions utiles pour vous permettre de g\xe9rer les images flottantes, de trier les colonnes ou les lignes, de cr\xe9er une culture personnali N'h\xe9sitez pas \xe0 le cloner et \xe0 l'exp\xe9rimenter !"]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,s={},c=null,l=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:c,ref:l,props:s,_owner:i.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(296540);const a={},s=t.createContext(a);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);