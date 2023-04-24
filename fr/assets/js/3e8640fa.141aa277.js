"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67531],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(v,i(i({ref:r},c),{},{components:t})):n.createElement(v,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38456:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});t(67294);var n=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"advanced-programming",title:"Programmation avanc\xe9e avec Javascript"},l=void 0,p={unversionedId:"ViewPro/advanced-programming",id:"version-19-R8/ViewPro/advanced-programming",title:"Programmation avanc\xe9e avec Javascript",description:"Une zone 4D View Pro est un objet de formulaire de zone Web qui utilise le moteur de rendu Web int\xe9gr\xe9. En tant que telle, elle se comporte comme n'importe quelle autre zone Web, \xe0 laquelle vous pouvez faire ex\xe9cuter du code Javascript en appelant la commande 4D WA Evaluate Javascript.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R8/ViewPro/advanced-programming.md",sourceDirName:"ViewPro",slug:"/ViewPro/advanced-programming",permalink:"/docs/fr/19-R8/ViewPro/advanced-programming",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fadvanced-programming.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"advanced-programming",title:"Programmation avanc\xe9e avec Javascript"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/fr/19-R8/ViewPro/classes"},next:{title:"Composants de d\xe9veloppement",permalink:"/docs/fr/19-R8/Extensions/develop-components"}},s={},c=[{value:"Exemple concret : masquer le ruban",id:"exemple-concret--masquer-le-ruban",level:2},{value:"Appeler des m\xe9thodes JavaScript de SpreadJS",id:"appeler-des-m\xe9thodes-javascript-de-spreadjs",level:2},{value:"Exemple",id:"exemple",level:4},{value:"D\xe9p\xf4t 4D View Pro Tips",id:"d\xe9p\xf4t-4d-view-pro-tips",level:2}],u={toc:c};function d(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Une zone 4D View Pro est un ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/webAreaOverview"}),"objet de formulaire de zone Web")," qui utilise le ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19-R8/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine"}),"moteur de rendu Web int\xe9gr\xe9"),". En tant que telle, elle se comporte comme n'importe quelle autre zone Web, \xe0 laquelle vous pouvez faire ex\xe9cuter du code Javascript en appelant la commande 4D ",(0,n.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page1029.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"WA Evaluate Javascript")),"."),(0,n.kt)("p",null,"Etant donn\xe9 que 4D View Pro est aliment\xe9 par la ",(0,n.kt)("a",a({parentName:"p"},{href:"https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html"}),"solution de feuille de calcul SpreadJS"),", vous pouvez \xe9galement appeler les m\xe9thodes Javascript de SpreadJS dans les zones 4D View Pro."),(0,n.kt)("h2",a({},{id:"exemple-concret--masquer-le-ruban"}),"Exemple concret : masquer le ruban"),(0,n.kt)("p",null,"4D View Pro \xe9tant une zone Web, vous pouvez s\xe9lectionner un \xe9l\xe9ment de page Web et modifier son comportement \xe0 l'aide de Javascript. L'exemple suivant permet de masquer le ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/fr/19-R8/ViewPro/configuring#ribbon"}),"ruban")," spreadJS :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),"//M\xe9thode objet du bouton\n\nvar $js; $answer : Text\n\n$js:=\"document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');\"\n\n$js+=\"window.dispatchEvent(new Event('resize'));\"\n\n$answer:=WA Evaluate JavaScript(*; \"ViewProArea\"; $js)\n")),(0,n.kt)("h2",a({},{id:"appeler-des-m\xe9thodes-javascript-de-spreadjs"}),"Appeler des m\xe9thodes JavaScript de SpreadJS"),(0,n.kt)("p",null,"Vous pouvez exploiter la biblioth\xe8que de m\xe9thodes Javascript de SpreadJS et les appeler directement pour g\xe9rer vos feuilles de calcul."),(0,n.kt)("p",null,"4D dispose d'une propri\xe9t\xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},"Utils.spread")," int\xe9gr\xe9e qui pointe vers la feuille de calcul (\xe9galement appel\xe9e workbook) dans la zone 4D View Pro, ce qui simplifie l'appel des ",(0,n.kt)("a",a({parentName:"p"},{href:"https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html"}),"m\xe9thodes de Workbook")," SpreadJS."),(0,n.kt)("h4",a({},{id:"exemple"}),"Exemple"),(0,n.kt)("p",null,"Le code suivant annule la derni\xe8re action dans la feuille de calcul :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-4d"}),'WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")\n')),(0,n.kt)("h2",a({},{id:"d\xe9p\xf4t-4d-view-pro-tips"}),"D\xe9p\xf4t 4D View Pro Tips"),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/4d-depot/4D-View-Pro-Tips"}),"4D-View-Pro-Tips")," est un d\xe9p\xf4t GitHub qui contient un projet rempli de fonctions utiles pour vous permettre de g\xe9rer les images flottantes, de trier les colonnes ou les lignes, de cr\xe9er une culture personnalis\xe9e, et bien plus encore ! N'h\xe9sitez pas \xe0 le cloner et \xe0 l'exp\xe9rimenter !"))}d.isMDXComponent=!0}}]);