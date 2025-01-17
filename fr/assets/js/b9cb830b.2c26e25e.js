"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39915"],{971305:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>n,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"FormObjects/comboBoxOverview","title":"Combo Box","description":"Une combo box est semblable \xe0 une liste d\xe9roulante, hormis le fait que cet objet accepte la saisie de texte par l\u2019utilisateur et qu\'elle dispose d\'options suppl\xe9mentaires.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/comboBox_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/comboBoxOverview","permalink":"/docs/fr/19/FormObjects/comboBoxOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"comboBoxOverview","title":"Combo Box"},"sidebar":"docs","previous":{"title":"Case \xe0 cocher","permalink":"/docs/fr/19/FormObjects/checkboxOverview"},"next":{"title":"Liste d\xe9roulante","permalink":"/docs/fr/19/FormObjects/dropdownListOverview"}}'),o=r("785893"),t=r("250065");let n={id:"comboBoxOverview",title:"Combo Box"},l=void 0,c={},a=[{value:"Gestion des combo boxes",id:"gestion-des-combo-boxes",level:2},{value:"Utiliser un objet",id:"utiliser-un-objet",level:3},{value:"Utiliser un tableau",id:"utiliser-un-tableau",level:3},{value:"Utiliser une \xe9num\xe9ration",id:"utiliser-une-\xe9num\xe9ration",level:3},{value:"Options",id:"options",level:2},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function d(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Une combo box est semblable \xe0 une ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview#overview",children:"liste d\xe9roulante"}),", hormis le fait que cet objet accepte la saisie de texte par l\u2019utilisateur et qu'elle dispose d'options suppl\xe9mentaires."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:r(94513).Z+"",width:"173",height:"106"})}),"\n",(0,o.jsx)(s.p,{children:"Fondamentalement, vous devez consid\xe9rer l\u2019objet combo box comme une zone saisissable qui utilise un tableau ou une liste de choix en tant que liste de valeurs par d\xe9faut."}),"\n",(0,o.jsx)(s.h2,{id:"gestion-des-combo-boxes",children:"Gestion des combo boxes"}),"\n",(0,o.jsxs)(s.p,{children:["Utilisez l\u2019\xe9v\xe9nement formulaire ",(0,o.jsx)(s.a,{href:"/docs/fr/19/Events/onDataChange",children:(0,o.jsx)(s.code,{children:"On Data Change"})})," pour g\xe9rer les valeurs saisies, comme pour toute zone de saisie."]}),"\n",(0,o.jsxs)(s.p,{children:["L'initialisation d'une combo box se fait exactement de la m\xeame mani\xe8re que celle d'une ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview#overview",children:"liste d\xe9roulante"})," : en utilisant un objet, un tableau ou une liste de choix."]}),"\n",(0,o.jsx)(s.h3,{id:"utiliser-un-objet",children:"Utiliser un objet"}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Cette fonctionnalit\xe9 n'est disponible que dans les projets 4D."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Un ",(0,o.jsx)(s.a,{href:"/docs/fr/19/Concepts/object",children:"objet "})," encapsulant une ",(0,o.jsx)(s.a,{href:"/docs/fr/19/Concepts/collection",children:"collection "})," peut \xeatre utilis\xe9 comme source de donn\xe9es d'une combo box. Cet objet doit avoir les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Propri\xe9t\xe9"}),(0,o.jsx)(s.th,{children:"Type"}),(0,o.jsx)(s.th,{children:"Description"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"values"})}),(0,o.jsx)(s.td,{children:"Collection"}),(0,o.jsxs)(s.td,{children:["Obligatoire - Collection de valeurs scalaires. Toutes les valeurs doivent \xeatre du m\xeame type. Types pris en charge :",(0,o.jsx)(s.li,{children:"cha\xeenes"}),(0,o.jsx)(s.li,{children:"nombres"}),(0,o.jsx)(s.li,{children:"dates"}),(0,o.jsx)(s.li,{children:"heures"}),"Si elle est vide ou non d\xe9finie, la combo box est vide"]})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:(0,o.jsx)(s.code,{children:"currentValue"})}),(0,o.jsx)(s.td,{children:"identique \xe0 Collection"}),(0,o.jsx)(s.td,{children:"Texte saisi par l'utilisateur"})]})]})]}),"\n",(0,o.jsx)(s.p,{children:"Si l'objet contient d'autres propri\xe9t\xe9s, elles sont ignor\xe9es."}),"\n",(0,o.jsxs)(s.p,{children:["Lorsque l'utilisateur saisit du texte dans la combo box, la propri\xe9t\xe9 ",(0,o.jsx)(s.code,{children:"currentValue"})," de l'objet re\xe7oit le texte saisi."]}),"\n",(0,o.jsx)(s.h3,{id:"utiliser-un-tableau",children:"Utiliser un tableau"}),"\n",(0,o.jsxs)(s.p,{children:["Veuillez vous r\xe9f\xe9rer \xe0 ",(0,o.jsx)(s.strong,{children:"Utiliser un tableau"})," dans la ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview#using-an-array",children:"page liste d\xe9roulante"})," pour obtenir des informations sur l'initialisation du tableau."]}),"\n",(0,o.jsx)(s.p,{children:"Lorsque l'utilisateur saisit du texte dans la combo box, l'\xe9l\xe9ment 0 du tableau re\xe7oit le texte saisi."}),"\n",(0,o.jsx)(s.h3,{id:"utiliser-une-\xe9num\xe9ration",children:"Utiliser une \xe9num\xe9ration"}),"\n",(0,o.jsx)(s.p,{children:"Si vous souhaitez utiliser une combo box pour g\xe9rer les valeurs d'une zone de saisie (champ ou variable \xe9num\xe9r\xe9(e)), 4D vous permet de r\xe9f\xe9rencer directement le champ ou la variable en tant que source de donn\xe9es de l'objet formulaire. Cette possibilit\xe9 facilite la gestion des champs/variables \xe9num\xe9r\xe9(e) s."}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Si vous utilisez une \xe9num\xe9ration hi\xe9rarchique, seul le premier niveau sera affich\xe9 et s\xe9lectionnable."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Pour associer une combo box \xe0 un champ ou \xe0 une variable, il suffit de saisir le nom du champ ou de la variable directement dans le champ ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou Expression"})," de l'objet formulaire dans la liste des propri\xe9t\xe9s."]}),"\n",(0,o.jsx)(s.p,{children:"Lorsque le formulaire est ex\xe9cut\xe9, 4D g\xe8re automatiquement la combo box lors de la saisie ou de l'affichage : lorsque l'utilisateur choisit une valeur, celle-ci est enregistr\xe9e dans le champ ; cette valeur de champ est affich\xe9e dans la combo box lors de l'affichage du formulaire :"}),"\n",(0,o.jsxs)(s.p,{children:["Pour plus d'informations, veuillez consulter ",(0,o.jsx)(s.strong,{children:"Utiliser une \xe9num\xe9ration"})," dans la page ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview#using-a-choice-list",children:"liste d\xe9roulante"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,o.jsx)(s.p,{children:"Les objets de type combo box acceptent deux options sp\xe9cifiques :"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDataSource#automatic-insertion",children:"Insertion automatique"})," : permet d'ajouter automatiquement une valeur \xe0 la source de donn\xe9es lorsque l'utilisateur saisit une valeur qui ne se trouve pas dans la liste associ\xe9e \xe0 la combo box."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesRangeOfValues#excluded-list",children:"Exclusion "})," (liste de valeurs exclues) : permet d'\xe9tablir une liste dont les valeurs ne peuvent pas \xeatre saisies dans la combo box. Si une valeur exclue est saisie, elle n'est pas accept\xe9e et un message d'erreur s'affiche."]}),"\n"]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["La possibilit\xe9 d\u2019associer ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesRangeOfValues#required-list",children:"une liste de valeurs obligatoires"})," n\u2019est pas disponible pour les combo box. Dans une interface, si un objet doit proposer une liste finie de valeurs obligatoires, il faut utiliser un objet de type ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/dropdownListOverview#overview",children:"liste d\xe9roulante"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#alpha-format",children:"Format Alpha"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesText#bold",children:"Gras"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDataSource#choice-list",children:"Liste de choix"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesObject#css-class",children:"Classe"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#date-format",children:"Format de date"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesObject#expression-type",children:"Type d'expression"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesText#font",children:"Police"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesText#font-color",children:"Couleur de police"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesText#font-size",children:"Taille de police"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesHelp#help-tip",children:"Conseil d'aide"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionnement horizontal"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesText#italic",children:"Italique"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesObject#object-name",children:"Nom d'objet"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#time-format",children:"Format de l'heure"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesText#underline",children:"Soulign\xe9"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou expression"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionnement vertical"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"})," - ",(0,o.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},94513:function(e,s,r){r.d(s,{Z:function(){return i}});let i="data:image/png;base64,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"},250065:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return n}});var i=r(667294);let o={},t=i.createContext(o);function n(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);