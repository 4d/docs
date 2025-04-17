"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28508"],{216067:function(e,s,t){t.r(s),t.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"FormObjects/formObjectsOverview","title":"Objets de formulaire","description":"Vous cr\xe9ez et personnalisez les formulaires de votre application en manipulant les objets qu\'ils contiennent. Vous pouvez ajouter des objets, repositionner des objets, d\xe9finir des propri\xe9t\xe9s d\'objets, appliquer des r\xe8gles m\xe9tier en sp\xe9cifiant des contraintes de saisie de donn\xe9es ou \xe9crire des m\xe9thodes objet qui s\'ex\xe9cutent automatiquement lorsque l\'objet est utilis\xe9.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/FormObjects/formObjects_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/formObjectsOverview","permalink":"/docs/fr/20-R8/FormObjects/formObjectsOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FformObjects_overview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"formObjectsOverview","title":"Objets de formulaire"},"sidebar":"docs","previous":{"title":"Taille de la Fen\xeatre","permalink":"/docs/fr/20-R8/FormEditor/windowSize"},"next":{"title":"Bouton","permalink":"/docs/fr/20-R8/FormObjects/buttonOverview"}}'),n=t("785893"),o=t("250065");let i={id:"formObjectsOverview",title:"Objets de formulaire"},l=void 0,d={},a=[{value:"Objets actifs et statiques",id:"objets-actifs-et-statiques",level:2},{value:"G\xe9rer les objets de formulaire",id:"g\xe9rer-les-objets-de-formulaire",level:2}];function c(e){let s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Vous cr\xe9ez et personnalisez les formulaires de votre application en manipulant les objets qu'ils contiennent. Vous pouvez ajouter des objets, repositionner des objets, d\xe9finir des propri\xe9t\xe9s d'objets, appliquer des r\xe8gles m\xe9tier en sp\xe9cifiant des contraintes de saisie de donn\xe9es ou \xe9crire des m\xe9thodes objet qui s'ex\xe9cutent automatiquement lorsque l'objet est utilis\xe9."}),"\n",(0,n.jsx)(s.h2,{id:"objets-actifs-et-statiques",children:"Objets actifs et statiques"}),"\n",(0,n.jsxs)(s.p,{children:["Les formulaires 4D prennent en charge un grand nombre d'objets ",(0,n.jsx)(s.strong,{children:"actifs"})," et ",(0,n.jsx)(s.strong,{children:"statiques"})," int\xe9gr\xe9s :"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Les objets actifs"})," r\xe9alisent une t\xe2che ou une fonction de l\u2019interface. Les champs sont des objets actifs. Les autres objets actifs \u2014 objets saisissables (variables), combo box, listes d\xe9roulantes, boutons image, etc. \u2014 stockent des donn\xe9es temporairement en m\xe9moire ou effectuent une t\xe2che telle que l'ouverture d'une boite de dialogue, l'impression d'un \xe9tat ou le lancement d'un processus d'arri\xe8re-plan."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Les objets statiques"})," sont g\xe9n\xe9ralement utilis\xe9s pour le d\xe9cor, les libell\xe9s ou encore l'interface graphique du formulaire. A la diff\xe9rence des objets actifs, les objets statiques ne sont pas associ\xe9s \xe0 des variables. A noter qu'il est possible d'ins\xe9rer des \xe9l\xe9ments dynamiques dans les objets statiques."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"g\xe9rer-les-objets-de-formulaire",children:"G\xe9rer les objets de formulaire"}),"\n",(0,n.jsx)(s.p,{children:"Vous pouvez ajouter des objets dans un formulaire de nombreuses mani\xe8res :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsxs)(s.strong,{children:[(0,n.jsx)(s.a,{href:"/docs/fr/20-R8/FormEditor/overview",children:"\xc9diteur de formulaire"})," :"]})," en glissant un objet de la barre d'outils de l'\xe9diteur de formulaire vers le formulaire. Utilisez ensuite la liste de propri\xe9t\xe9s pour indiquer les propri\xe9t\xe9s de l'objet."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"4D language"}),": Commands from the ",(0,n.jsx)(s.code,{children:"Objects (Forms)"})," theme such as ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page1111.html",children:(0,n.jsx)(s.code,{children:"OBJECT DUPLICATE"})})," or ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4dv20/help/command/en/page166.html",children:(0,n.jsx)(s.code,{children:"OBJECT SET FONT STYLE"})})," allow to create and define form objects."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Code JSON dans les formulaires dynamiques :"})," D\xe9finissez les propri\xe9t\xe9s \xe0 l'aide du JSON. Utilisez la propri\xe9t\xe9 ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R8/FormObjects/propertiesObject#type",children:"type"})," pour d\xe9finir le type d'objet puis indiquez ses ",(0,n.jsx)(s.a,{href:"/docs/fr/20-R8/FormObjects/propertiesReference",children:"propri\xe9t\xe9s disponibles"}),".\nExemple d'un objet bouton :"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'	{\n		"type": "button", \n		"style": "bevel", \n		"text": "OK", \n		"action": "Cancel", \n		"left": 60, \n		"top": 160, \n		"width": 100, \n		"height": 20\n	}\n'})})]})}function u(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return l},a:function(){return i}});var r=t(667294);let n={},o=r.createContext(n);function i(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);