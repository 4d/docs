"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21457"],{702751:function(e,r,i){i.r(r),i.d(r,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"FormEditor/forms","title":"Formulaires","description":"Les formulaires fournissent l\'interface par laquelle les informations sont saisies, modifi\xe9es et imprim\xe9es dans une application de bureau. A l\'aide des formulaires, les utilisateurs peuvent interagir avec les donn\xe9es d\'une base de donn\xe9es et imprimer des rapports. Les formulaires permettent de cr\xe9er des bo\xeetes de dialogue personnalis\xe9es, des palettes ou toute fen\xeatre personnalis\xe9e.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormEditor/forms.md","sourceDirName":"FormEditor","slug":"/FormEditor/forms","permalink":"/docs/fr/20/FormEditor/forms","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fforms.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"forms","title":"Formulaires"},"sidebar":"docs","previous":{"title":"Gestion des groupes et utilisateurs 4D","permalink":"/docs/fr/20/Users/editing"},"next":{"title":"Feuilles de style (style sheets)","permalink":"/docs/fr/20/FormEditor/stylesheets"}}'),n=i("785893"),o=i("250065");let t={id:"forms",title:"Formulaires"},l=void 0,a={},d=[{value:"Cr\xe9ation de formulaires",id:"cr\xe9ation-de-formulaires",level:2},{value:"Formulaire projet et formulaire table",id:"formulaire-projet-et-formulaire-table",level:2},{value:"Pages formulaire",id:"pages-formulaire",level:2},{value:"Formulaires h\xe9rit\xe9s",id:"formulaires-h\xe9rit\xe9s",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function u(e){let r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Les formulaires fournissent l'interface par laquelle les informations sont saisies, modifi\xe9es et imprim\xe9es dans une application de bureau. A l'aide des formulaires, les utilisateurs peuvent interagir avec les donn\xe9es d'une base de donn\xe9es et imprimer des rapports. Les formulaires permettent de cr\xe9er des bo\xeetes de dialogue personnalis\xe9es, des palettes ou toute fen\xeatre personnalis\xe9e."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{src:i(320693).Z+"",width:"1114",height:"896"})}),"\n",(0,n.jsx)(r.p,{children:"Les formulaires peuvent \xe9galement contenir d'autres formulaires gr\xe2ce aux fonctionnalit\xe9s suivantes :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/subformOverview",children:"les objets sous-formulaires"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#inherited-forms",children:"les formulaires h\xe9rit\xe9s"})}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"cr\xe9ation-de-formulaires",children:"Cr\xe9ation de formulaires"}),"\n",(0,n.jsx)(r.p,{children:"Vous pouvez ajouter ou modifier des formulaires 4D \xe0 l'aide des \xe9l\xe9ments suivants :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"L'interface 4D Developer :"})," Cr\xe9ez de nouveaux formulaires \xe0 partir du menu ",(0,n.jsx)(r.strong,{children:"Fichier"})," ou de la fen\xeatre de l' ",(0,n.jsx)(r.strong,{children:"Explorateur"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsxs)(r.strong,{children:["L'\xe9diteur de formulaires ",(0,n.jsx)(r.strong,{children:": Modifiez vos formulaires \xe0 l'aide de l'"}),(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/overview",children:"\xe9diteur de formulaires"})]}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Le code JSON :"})," Cr\xe9ez et concevez vos formulaires \xe0 l'aide de JSON et enregistrez les fichiers de formulaire \xe0 ",(0,n.jsx)(r.a,{href:"/docs/fr/20/Project/architecture#sources-folder",children:"l'emplacement appropri\xe9"}),". Voici un exemple :"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'{\n    "windowTitle": "Hello World",\n    "windowMinWidth": 220,\n    "windowMinHeight": 80,\n    "method": "HWexample",\n    "pages": [\n        null,\n        {\n            "objects": {\n                "text": {\n                "type": "text",\n                "text": "Hello World!",\n                "textAlign": "center",\n                "left": 50,\n                "top": 120,\n                "width": 120,\n                "height": 80\n                },\n                "image": {\n                "type": "picture",\n                "pictureFormat": "scaled",\n                "picture": "/RESOURCES/Images/HW.png",\n                "alignment":"center", \n                "left": 70,\n                "top": 20, \n                "width":75, \n                "height":75        \n                },\n                "button": {\n                "type": "button",\n                "text": "OK",\n                "action": "Cancel",\n                "left": 60,\n                "top": 160,\n\n\n                "width": 100,\n                "height": 20\n                }\n            }\n        }\n    ]\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"formulaire-projet-et-formulaire-table",children:"Formulaire projet et formulaire table"}),"\n",(0,n.jsx)(r.p,{children:"Il existe deux cat\xe9gories de formulaires :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Les formulaires projet"})," - Formulaires ind\xe9pendants qui ne sont rattach\xe9s \xe0 aucune table. Ils sont destin\xe9s plus particuli\xe8rement \xe0 la cr\xe9ation de bo\xeetes de dialogue d'interface et de composants. Les formulaires projet peuvent \xeatre utilis\xe9s pour cr\xe9er des interfaces facilement conformes aux normes du syst\xe8me d'exploitation."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Les formulaires table"})," - Rattach\xe9s \xe0 des tables sp\xe9cifiques et b\xe9n\xe9ficient ainsi de fonctions automatiques utiles pour d\xe9velopper des applications bas\xe9es sur des bases de donn\xe9es. En r\xe8gle g\xe9n\xe9rale, une table poss\xe8de des formulaires d'entr\xe9e et de sortie s\xe9par\xe9s."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"En r\xe8gle g\xe9n\xe9rale, vous s\xe9lectionnez la cat\xe9gorie de formulaire lorsque vous cr\xe9ez le formulaire, mais vous pouvez la modifier par la suite."}),"\n",(0,n.jsx)(r.h2,{id:"pages-formulaire",children:"Pages formulaire"}),"\n",(0,n.jsx)(r.p,{children:"Chaque formulaire est compos\xe9 d'au moins deux pages :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"une page 1 : une page principale, affich\xe9e par d\xe9faut"}),"\n",(0,n.jsx)(r.li,{children:"une page 0 : une page de fond, dont le contenu est affich\xe9 sur une page sur deux."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Vous pouvez cr\xe9er plusieurs pages pour un formulaire d'entr\xe9e. Si le nombre de champs ou de variables est sup\xe9rieur au nombre maximal support\xe9 sur un \xe9cran, vous pouvez cr\xe9er des pages suppl\xe9mentaires pour les afficher. Plusieurs pages vous permettent d'effectuer les op\xe9rations suivantes :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Placez les informations les plus importantes sur la premi\xe8re page et les informations les moins importantes sur les autres pages."}),"\n",(0,n.jsx)(r.li,{children:"Organisez chaque sujet sur sa propre page."}),"\n",(0,n.jsxs)(r.li,{children:["R\xe9duir ou \xe9liminer le d\xe9filement pendant la saisie des donn\xe9es en d\xe9finissant ",(0,n.jsx)(r.a,{href:"../FormEditor/formEditor.html#data-entry-order",children:"l'ordre de saisie"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"Pr\xe9voyez de l'espace autour des \xe9l\xe9ments du formulaire pour un design d'\xe9cran attrayant."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Les pages multiples sont utiles uniquement pour les formulaires d'entr\xe9e. Elles ne sont pas destin\xe9es \xe0 \xeatre imprim\xe9es. Lorsqu'un formulaire de plusieurs pages est imprim\xe9, seule la premi\xe8re page est imprim\xe9e."}),"\n",(0,n.jsx)(r.p,{children:"Il n'y a aucune restriction sur le nombre de pages qu'un formulaire peut contenir. Le m\xeame champ peut appara\xeetre en un nombre de fois illimit\xe9 dans un formulaire et sur autant de pages que vous le souhaitez. Toutefois, plus vous aurez de pages dans un formulaire, plus il sera long \xe0 afficher."}),"\n",(0,n.jsx)(r.p,{children:"Un formulaire multi-pages contient \xe0 la fois une page d'arri\xe8re-plan et plusieurs pages d'affichage. Les objets plac\xe9s sur la page d'arri\xe8re-plan peuvent \xeatre visibles sur toutes les pages d'affichage, mais il ne peuvent \xeatre s\xe9lectionn\xe9s et modifi\xe9s que sur la page d'arri\xe8re-plan. Dans les formulaires multi-pages, vous devez placer votre palette de boutons sur la page d'arri\xe8re-plan. Vous devez \xe9galement inclure un ou plusieurs objets sur la page d'arri\xe8re-plan qui fournissent \xe0 l'utilisateur des outils de navigation de page."}),"\n",(0,n.jsx)(r.h2,{id:"formulaires-h\xe9rit\xe9s",children:"Formulaires h\xe9rit\xe9s"}),"\n",(0,n.jsxs)(r.p,{children:["Les formulaires 4D peuvent utiliser et \xeatre utilis\xe9s comme \xabformulaires h\xe9rit\xe9s\xbb, ce qui signifie que tous les objets du ",(0,n.jsx)(r.em,{children:"Formulaire A"})," peuvent \xeatre utilis\xe9s dans le ",(0,n.jsx)(r.em,{children:"Formulaire B"}),". Dans ce cas, ",(0,n.jsx)(r.em,{children:"Formulaire B"}),' "h\xe9rite" des objets du ',(0,n.jsx)(r.em,{children:"Formulaire A"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Les r\xe9f\xe9rences \xe0 un formulaire h\xe9rit\xe9 est toujours active : si un \xe9l\xe9ment d'un formulaire h\xe9rit\xe9 est modifi\xe9 (par exemple le style des boutons), tous les formulaires qui l\u2019utilisent seront automatiquement modifi\xe9s."}),"\n",(0,n.jsx)(r.p,{children:"Tous les formulaires (formulaires table et formulaires projet) peuvent \xeatre d\xe9sign\xe9s comme un formulaire h\xe9rit\xe9. Cependant, les \xe9l\xe9ments qu'ils contiennent doivent \xeatre compatibles avec une utilisation dans diff\xe9rentes tables de base de donn\xe9es."}),"\n",(0,n.jsx)(r.p,{children:"A l\u2019ex\xe9cution du formulaire, les objets sont charg\xe9s et combin\xe9s dans l\u2019ordre suivant :"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Page z\xe9ro du formulaire h\xe9rit\xe9"}),"\n",(0,n.jsx)(r.li,{children:"Page 1 du formulaire h\xe9rit\xe9"}),"\n",(0,n.jsx)(r.li,{children:"Page z\xe9ro du formulaire ouvert"}),"\n",(0,n.jsx)(r.li,{children:"Page courante du formulaire ouvert."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Cet ordre d\xe9termine ",(0,n.jsx)(r.a,{href:"../FormEditor/formEditor.html#data-entry-order",children:"l'ordre de saisie"})," par d\xe9faut des objets dans le formulaire."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Seules les pages 0 et 1 du formulaire h\xe9rit\xe9 peuvent appara\xeetre dans les autres formulaires."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Les propri\xe9t\xe9s ainsi que la m\xe9thode d\u2019un formulaire ne sont pas prises en compte lorsque celui-ci est utilis\xe9 comme formulaire h\xe9rit\xe9. En revanche, les m\xe9thodes des objets qu\u2019il contient sont appel\xe9es."}),"\n",(0,n.jsxs)(r.p,{children:["Pour d\xe9finir un formulaire h\xe9rit\xe9, les propri\xe9t\xe9s de ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"})," et ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," (pour les formulaires table) doivent \xeatre d\xe9finies dans le formulaire qui h\xe9ritera de quelque chose issue d'un autre formulaire."]}),"\n",(0,n.jsxs)(r.p,{children:["Un formulaire peut h\xe9riter d'un formulaire projet, en d\xe9finissant la propri\xe9t\xe9 ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," sur ",(0,n.jsx)(r.code,{children:"\\&#060;None&#062;"}),' dans la liste des propri\xe9t\xe9s (ou " " dans JSON).']}),"\n",(0,n.jsxs)(r.p,{children:["Pour stopper l\u2019h\xe9ritage d\u2019un formulaire, choisissez l\u2019option ",(0,n.jsx)(r.strong,{children:"<None>"}),' dans la Liste des propri\xe9t\xe9s (ou " " dans JSON) pour la propri\xe9t\xe9 ',(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"}),"."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Il est possible de d\xe9finir un formulaire h\xe9rit\xe9 dans un formulaire qui servira \xe0 son tour de formulaire h\xe9rit\xe9 pour un troisi\xe8me formulaire. La combinaison des objets s\u2019effectue alors de mani\xe8re r\xe9cursive. 4D d\xe9tecte les boucles r\xe9cursives (par exemple si le formulaire [table1]form1 est d\xe9fini comme formulaire h\xe9rit\xe9 de [table1]form1, c\u2019est-\xe0-dire de lui-m\xeame) et interrompt le cha\xeenage des formulaires."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/menu#associated-menu-bar",children:"Associated Menu Bar"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/windowSize#fixed-height",children:"Fixed Height"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/windowSize#fixed-width",children:"Fixed Width"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/markers#form-break",children:"Form Break"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/markers#form-detail",children:"Form Detail"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/markers#form-footer",children:"Form Footer"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/markers#form-header",children:"Form Header"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#form-name",children:"Form Name"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#form-type",children:"Form Type"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#inherited-form-name",children:"Inherited Form Name"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#inherited-form-table",children:"Inherited Form Table"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/windowSize#maximum-height-minimum-height",children:"Maximum Height"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/windowSize#maximum-width-minimum-width",children:"Maximum Width"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/action#method",children:"Method"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/windowSize#maximum-height-minimum-height",children:"Minimum Height"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/windowSize#maximum-width-minimum-width",children:"Minimum Width"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#pages",children:"Pages"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/print#settings",children:"Print Settings"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#published-as-subform",children:"Published as Subform"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#save-geometry",children:"Save Geometry"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormEditor/propertiesForm#window-title",children:"Window Title"})]})]})}function m(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},320693:function(e,r,i){i.d(r,{Z:function(){return s}});let s=i.p+"assets/images/form1-4cd115e2060b296f638be467d18d7b47.png"},250065:function(e,r,i){i.d(r,{Z:function(){return l},a:function(){return t}});var s=i(667294);let n={},o=s.createContext(n);function t(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);