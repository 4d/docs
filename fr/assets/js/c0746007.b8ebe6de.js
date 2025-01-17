"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14046"],{574324:function(e,s,r){r.r(s),r.d(s,{default:()=>d,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"FormObjects/staticPicture","title":"Image statique","description":"Les images statiques sont des objets statiques pouvant \xeatre utilis\xe9es \xe0 des fins diverses dans les formulaires 4D, notamment comme d\xe9cor, arri\xe8re-plan ou interface utilisateur :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormObjects/staticPicture.md","sourceDirName":"FormObjects","slug":"/FormObjects/staticPicture","permalink":"/docs/fr/20/FormObjects/staticPicture","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FstaticPicture.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"staticPicture","title":"Image statique"},"sidebar":"docs","previous":{"title":"S\xe9parateur","permalink":"/docs/fr/20/FormObjects/splitters"},"next":{"title":"Stepper","permalink":"/docs/fr/20/FormObjects/stepper"}}'),i=r("785893"),n=r("250065");let o={id:"staticPicture",title:"Image statique"},a=void 0,c={},l=[{value:"Format et emplacement",id:"format-et-emplacement",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function u(e){let s={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Les images statiques sont des ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/formObjectsOverview#active-and-static-objects",children:"objets statiques"})," pouvant \xeatre utilis\xe9es \xe0 des fins diverses dans les formulaires 4D, notamment comme d\xe9cor, arri\xe8re-plan ou interface utilisateur :"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:r(504016).Z+"",width:"312",height:"332"})}),"\n",(0,i.jsx)(s.p,{children:"Les images statiques sont stock\xe9es \xe0 l\u2019ext\xe9rieur des formulaires et ins\xe9r\xe9es par r\xe9f\xe9rence. Dans l'\xe9diteur de formules, les objets image statique sont cr\xe9\xe9es par copier-coller ou par glisser-d\xe9poser."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Si vous placez une image statique dans la page 0 d\u2019un formulaire multi-pages, elle appara\xeetra comme \xe9l\xe9ment d\u2019arri\xe8re-plan de toutes les pages. Vous pouvez \xe9galement l\u2019inclure dans un formulaire h\xe9rit\xe9, qui s'applique \xe0 l'arri\xe8re-plan de diff\xe9rents autres formulaires. Dans les deux cas, votre application s\u2019ex\xe9cutera plus rapidement."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"format-et-emplacement",children:"Format et emplacement"}),"\n",(0,i.jsx)(s.p,{children:"L'image d'origine doit \xeatre stock\xe9e dans un format g\xe9r\xe9 nativement par 4D (4D reconna\xeet les principaux formats d'image : JPEG, PNG, BMP, SVG, GIF, etc.)."}),"\n",(0,i.jsx)(s.p,{children:"Deux emplacements principaux peuvent \xeatre utilis\xe9s pour le chemin d'image statique :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["dans le dossier ",(0,i.jsx)(s.strong,{children:"Resources"}),' du projet. Convient lorsque vous souhaitez partager des images statiques entre plusieurs formulaires du projet. Dans ce cas, le chemin d\'acc\xe8s est dans le "/RESOURCES/<picture path>".']}),"\n",(0,i.jsxs)(s.li,{children:["dans un dossier d'images (nomm\xe9 ",(0,i.jsx)(s.strong,{children:"Images"}),' par exemple) dans le dossier du formulaire. Convient lorsque les images statiques sont utilis\xe9es uniquement dans le formulaire et/ou lorsque vous souhaitez pouvoir d\xe9placer ou dupliquer le formulaire entier dans un ou plusieurs projets. Dans ce cas, le chemin d\'acc\xe8s est "<\\picture path>" et est r\xe9solu \xe0 partir de la racine du dossier du formulaire.']}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesObject#css-class",children:"CSS Class"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesPicture#display",children:"Affichage"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dim. horizontal"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesObject#object-name",children:"Nom"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesPicture#pathname",children:"Pathname"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dim. vertical"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"}),"  - ",(0,i.jsx)(s.a,{href:"/docs/fr/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]})]})}function d(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},504016:function(e,s,r){r.d(s,{Z:function(){return t}});let t=r.p+"assets/images/StaticPict-a25104204af88c0c0efe292951248788.png"},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return o}});var t=r(667294);let i={},n=t.createContext(i);function o(e){let s=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);