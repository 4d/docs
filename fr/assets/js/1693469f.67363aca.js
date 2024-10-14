"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46513],{191598:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(474848),a=n(28453);const o={id:"advanced-programming",title:"Programmation avanc\xe9e avec Javascript"},s=void 0,i={id:"ViewPro/advanced-programming",title:"Programmation avanc\xe9e avec Javascript",description:"Une zone 4D View Pro est un objet de formulaire de zone Web qui utilise le moteur de rendu Web int\xe9gr\xe9. En tant que telle, elle se comporte comme n'importe quelle autre zone Web, et vous pouvez lui faire ex\xe9cuter du code Javascript en appelant la commande 4D WA Evaluate Javascript.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/fr/ViewPro/advanced-programming",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"advanced-programming",title:"Programmation avanc\xe9e avec Javascript"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/fr/ViewPro/classes"},next:{title:"Commandes",permalink:"/docs/fr/ViewPro/commands"}},d={},l=[{value:"Exemple concret : masquer le ruban",id:"exemple-concret--masquer-le-ruban",level:2},{value:"Appeler des m\xe9thodes JavaScript de SpreadJS",id:"appeler-des-m\xe9thodes-javascript-de-spreadjs",level:2},{value:"Exemple",id:"exemple",level:4},{value:"D\xe9p\xf4t 4D View Pro Tips",id:"d\xe9p\xf4t-4d-view-pro-tips",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Une zone 4D View Pro est un ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"objet de formulaire de zone Web"})," qui utilise le ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteur de rendu Web int\xe9gr\xe9"}),". En tant que telle, elle se comporte comme n'importe quelle autre zone Web, et vous pouvez lui faire ex\xe9cuter du code Javascript en appelant la commande 4D ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1029.html",children:(0,t.jsx)(r.code,{children:"WA Evaluate Javascript"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["\xc9tant donn\xe9 que 4D View Pro est aliment\xe9 par la ",(0,t.jsx)(r.a,{href:"https://developer.mescius.com/spreadjs",children:"solution de feuille de calcul SpreadJS"}),", vous pouvez \xe9galement appeler les m\xe9thodes Javascript de SpreadJS dans les zones 4D View Pro."]}),"\n",(0,t.jsx)(r.h2,{id:"exemple-concret--masquer-le-ruban",children:"Exemple concret : masquer le ruban"}),"\n",(0,t.jsxs)(r.p,{children:["4D View Pro \xe9tant une zone Web, vous pouvez s\xe9lectionner un \xe9l\xe9ment de page Web et modifier son comportement \xe0 l'aide de Javascript. L'exemple suivant permet de masquer le ",(0,t.jsx)(r.a,{href:"/docs/fr/ViewPro/configuring#ribbon",children:"ruban"})," spreadJS :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"//M\xe9thode objet du bouton\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"appeler-des-m\xe9thodes-javascript-de-spreadjs",children:"Appeler des m\xe9thodes JavaScript de SpreadJS"}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez exploiter la biblioth\xe8que de m\xe9thodes Javascript de SpreadJS et les appeler directement pour g\xe9rer vos feuilles de calcul."}),"\n",(0,t.jsxs)(r.p,{children:["4D dispose d'une propri\xe9t\xe9 int\xe9gr\xe9e ",(0,t.jsx)(r.code,{children:"Utils.spread"})," qui donne acc\xe8s au document de feuille de calcul (\xe9galement appel\xe9 workbook) \xe0 l'int\xe9rieur de la zone 4D View Pro, ce qui simplifie l'appel des ",(0,t.jsx)(r.a,{href:"https://developer.mescius.com/spreadjs/api/modules/GC.Data",children:"m\xe9thodes de Workbook SpreadJS"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(r.p,{children:"Le code suivant annule la derni\xe8re action dans la feuille de calcul :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n'})}),"\n",(0,t.jsx)(r.h2,{id:"d\xe9p\xf4t-4d-view-pro-tips",children:"D\xe9p\xf4t 4D View Pro Tips"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/4d-depot/4D-View-Pro-Tips",children:"4D-View-Pro-Tips"})," est un d\xe9p\xf4t GitHub qui contient un projet rempli de fonctions utiles pour vous permettre de g\xe9rer les images flottantes, de trier les colonnes ou les lignes, de cr\xe9er une culture personnali N'h\xe9sitez pas \xe0 le cloner et \xe0 l'exp\xe9rimenter !"]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var t=n(296540);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);