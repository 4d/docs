"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80805"],{223335:function(e,r,s){s.r(r),s.d(r,{default:()=>d,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"FormObjects/staticPicture","title":"Image statique","description":"Les images statiques sont des objets statiques pouvant \xeatre utilis\xe9es \xe0 des fins diverses dans les formulaires 4D, notamment comme d\xe9cor, arri\xe8re-plan ou interface utilisateur :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/staticPicture.md","sourceDirName":"FormObjects","slug":"/FormObjects/staticPicture","permalink":"/docs/fr/19/FormObjects/staticPicture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FstaticPicture.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"staticPicture","title":"Image statique"},"sidebar":"docs","previous":{"title":"S\xe9parateur","permalink":"/docs/fr/19/FormObjects/splitters"},"next":{"title":"Stepper","permalink":"/docs/fr/19/FormObjects/stepper"}}'),i=s("785893"),n=s("250065");let o={id:"staticPicture",title:"Image statique"},a=void 0,c={},l=[{value:"Format et emplacement",id:"format-et-emplacement",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function u(e){let r={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["Les images statiques sont des ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/formObjectsOverview#active-and-static-objects",children:"objets statiques"})," pouvant \xeatre utilis\xe9es \xe0 des fins diverses dans les formulaires 4D, notamment comme d\xe9cor, arri\xe8re-plan ou interface utilisateur :"]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{src:s(804792).Z+"",width:"312",height:"332"})}),"\n",(0,i.jsx)(r.p,{children:"Les images statiques sont stock\xe9es \xe0 l\u2019ext\xe9rieur des formulaires et ins\xe9r\xe9es par r\xe9f\xe9rence. Dans l'\xe9diteur de formules, les objets image statique sont cr\xe9\xe9es par copier-coller ou par glisser-d\xe9poser."}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Si vous placez une image statique dans la page 0 d\u2019un formulaire multi-pages, elle appara\xeetra comme \xe9l\xe9ment d\u2019arri\xe8re-plan de toutes les pages. Vous pouvez \xe9galement l\u2019inclure dans un formulaire h\xe9rit\xe9, qui s'applique \xe0 l'arri\xe8re-plan de diff\xe9rents autres formulaires. Dans les deux cas, votre application s\u2019ex\xe9cutera plus rapidement."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"format-et-emplacement",children:"Format et emplacement"}),"\n",(0,i.jsx)(r.p,{children:"L'image d'origine doit \xeatre stock\xe9e dans un format g\xe9r\xe9 nativement par 4D (4D reconna\xeet les principaux formats d'image : JPEG, PNG, BMP, SVG, GIF, etc.)."}),"\n",(0,i.jsx)(r.p,{children:"Deux emplacements principaux peuvent \xeatre utilis\xe9s pour le chemin d'image statique :"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["in the ",(0,i.jsx)(r.strong,{children:"Resources"}),' folder of the project. Appropriate when you want to share static pictures between several forms in the project. Dans ce cas, le chemin d\'acc\xe8s est dans le "/RESOURCES/<picture path>".']}),"\n",(0,i.jsxs)(r.li,{children:["dans un dossier d'images (nomm\xe9 ",(0,i.jsx)(r.strong,{children:"Images"}),' par exemple) dans le dossier du formulaire. Convient lorsque les images statiques sont utilis\xe9es uniquement dans le formulaire et/ou lorsque vous souhaitez pouvoir d\xe9placer ou dupliquer le formulaire entier dans un ou plusieurs projets. Dans ce cas, le chemin d\'acc\xe8s est "<\\picture path>" et est r\xe9solu \xe0 partir de la racine du dossier du formulaire.']}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#css-class",children:"CSS Class"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesPicture#display",children:"Affichage"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dim. horizontal"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#object-name",children:"Nom"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesPicture#pathname",children:"Pathname"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dim. vertical"})," - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"}),"  - ",(0,i.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]})]})}function d(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},804792:function(e,r,s){s.d(r,{Z:function(){return t}});let t=s.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"},250065:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return o}});var t=s(667294);let i={},n=t.createContext(i);function o(e){let r=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);