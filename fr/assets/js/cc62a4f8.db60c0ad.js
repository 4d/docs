"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50966"],{710513:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"FormObjects/propertiesRangeOfValues","title":"Plage de valeurs","description":"La valeur par d\xe9faut","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/FormObjects/properties_RangeOfValues.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesRangeOfValues","permalink":"/docs/fr/19/FormObjects/propertiesRangeOfValues","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_RangeOfValues.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"propertiesRangeOfValues","title":"Plage de valeurs"},"sidebar":"docs","previous":{"title":"Impression","permalink":"/docs/fr/19/FormObjects/propertiesPrint"},"next":{"title":"Options de redimensionnement","permalink":"/docs/fr/19/FormObjects/propertiesResizingOptions"}}'),i=r("785893"),t=r("250065");let l={id:"propertiesRangeOfValues",title:"Plage de valeurs"},a=void 0,o={},d=[{value:"La valeur par d\xe9faut",id:"la-valeur-par-d\xe9faut",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4},{value:"Exclusion",id:"exclusion",level:2},{value:"Grammaire JSON",id:"grammaire-json-1",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-1",level:4},{value:"Obligation",id:"obligation",level:2},{value:"Grammaire JSON",id:"grammaire-json-2",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-2",level:4}];function c(e){let s={a:"a",blockquote:"blockquote",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"la-valeur-par-d\xe9faut",children:"La valeur par d\xe9faut"}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez attribuer une valeur par d\xe9faut \xe0 saisir dans un objet Zone de saisie. Cette propri\xe9t\xe9 est utile par exemple lorsque la ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesObject#variable-or-expression",children:"source de donn\xe9es"})," de la zone de saisie est un champ : la valeur par d\xe9faut est saisie lors du premier affichage d'un nouvel enregistrement. Vous pouvez modifier la valeur, sauf si la zone de saisie a \xe9t\xe9 d\xe9finie comme ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesEntry#enterable",children:"non saisissable"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["La valeur par d\xe9faut ne peut \xeatre utilis\xe9e que si le ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesObject#expression-type",children:"type de source de donn\xe9es"})," est :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"text/string"}),"\n",(0,i.jsx)(s.li,{children:"number/integer"}),"\n",(0,i.jsx)(s.li,{children:"date"}),"\n",(0,i.jsx)(s.li,{children:"time"}),"\n",(0,i.jsx)(s.li,{children:"boolean"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"4D fournit des balises pour g\xe9n\xe9rer des valeurs par d\xe9faut pour la date, l'heure et le num\xe9ro de s\xe9quence. La date et l'heure proviennent de la date et de l'heure du syst\xe8me. 4D g\xe9n\xe8re automatiquement les num\xe9ros de s\xe9quence n\xe9cessaires. Le tableau ci-dessous indique la balise \xe0 utiliser pour g\xe9n\xe9rer automatiquement des valeurs par d\xe9faut :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Balise"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"#D"}),(0,i.jsx)(s.td,{children:"Date courante"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"#H"}),(0,i.jsx)(s.td,{children:"Heure courante"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"#N"}),(0,i.jsx)(s.td,{children:"Num\xe9ro de s\xe9quence"})]})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Vous pouvez utiliser un num\xe9ro de s\xe9quence pour cr\xe9er un num\xe9ro unique pour chaque enregistrement de la table dans le fichier de donn\xe9es courant. Un num\xe9ro de s\xe9quence est un entier qui est g\xe9n\xe9r\xe9 pour chaque nouvel enregistrement. Les num\xe9ros commencent \xe0 un (1) et s'incr\xe9mentent de un (1). Un num\xe9ro de s\xe9quence n'est jamais r\xe9p\xe9t\xe9, m\xeame si l'enregistrement auquel il est attribu\xe9 est supprim\xe9 de la table. Chaque table poss\xe8de son propre compteur interne de num\xe9ros de s\xe9quence. Pour plus d'informations, voir le paragraphe ",(0,i.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029",children:"Autoincrement"}),"."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Ne pas confondre cette propri\xe9t\xe9 avec la propri\xe9t\xe9",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDataSource#default-list-of-values",children:'"Valeurs par d\xe9faut'}),'" qui permet de remplir une colonne de listbox avec des valeurs statiques.']}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Nom"}),(0,i.jsx)(s.th,{children:"Type de donn\xe9es"}),(0,i.jsx)(s.th,{children:"Valeurs possibles"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"defaultValue"}),(0,i.jsx)(s.td,{children:"string, number, date, time, boolean"}),(0,i.jsx)(s.td,{children:'Toute valeur et/ou une balise : "#D", "#H", "#N"'})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"objets-pris-en-charge",children:"Objets pris en charge"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Zone de saisie"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"exclusion",children:"Exclusion"}),"\n",(0,i.jsx)(s.p,{children:"Permet de d\xe9finir une liste dont les valeurs ne peuvent pas \xeatre saisies dans l'objet. Si une valeur exclue est saisie, elle n'est pas accept\xe9e et un message d'erreur s'affiche."}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Si une \xe9num\xe9ration sp\xe9cifi\xe9e est hi\xe9rarchique, seuls les \xe9l\xe9ments du premier niveau sont pris en compte."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"grammaire-json-1",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Nom"}),(0,i.jsx)(s.th,{children:"Type de donn\xe9es"}),(0,i.jsx)(s.th,{children:"Valeurs possibles"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"excludedList"}),(0,i.jsx)(s.td,{children:"list"}),(0,i.jsx)(s.td,{children:"Une liste de valeurs \xe0 exclure."})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"objets-pris-en-charge-1",children:"Objets pris en charge"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Input"})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"obligation",children:"Obligation"}),"\n",(0,i.jsx)(s.p,{children:"Limite les entr\xe9es valides aux \xe9l\xe9ments de la liste. Par exemple, vous pouvez souhaiter utiliser une liste pour les titres de postes afin que les entr\xe9es valides soient limit\xe9es aux intitul\xe9s qui ont \xe9t\xe9 approuv\xe9s par la direction."}),"\n",(0,i.jsxs)(s.p,{children:["La cr\xe9ation d'une liste obligatoire n'affiche pas automatiquement la liste lorsque le champ est s\xe9lectionn\xe9. Si vous souhaitez afficher la liste requise, assignez la m\xeame liste \xe0 la propri\xe9t\xe9 ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDataSource#choice-list",children:"Choice List"}),". Cependant, contrairement \xe0 la propri\xe9t\xe9 ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDataSource#choice-list",children:"Choice List"}),", lorsqu'une liste obligatoire est d\xe9finie, la saisie au clavier n'est plus possible, seule la s\xe9lection d'une valeur de liste \xe0 l'aide du pop-up menu est autoris\xe9e. Si des \xe9num\xe9rations diff\xe9rentes sont d\xe9finies \xe0 l'aide des propri\xe9t\xe9s ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," et Obligation, la propri\xe9t\xe9 Obligation est prioritaire."]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Si une \xe9num\xe9ration sp\xe9cifi\xe9e est hi\xe9rarchique, seuls les \xe9l\xe9ments du premier niveau sont pris en compte."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"grammaire-json-2",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Nom"}),(0,i.jsx)(s.th,{children:"Type de donn\xe9es"}),(0,i.jsx)(s.th,{children:"Valeurs possibles"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"requiredList"}),(0,i.jsx)(s.td,{children:"list"}),(0,i.jsx)(s.td,{children:"Une liste de valeurs obligatoires."})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"objets-pris-en-charge-2",children:"Objets pris en charge"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})," - ",(0,i.jsx)(s.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Input"})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return l}});var n=r(667294);let i={},t=n.createContext(i);function l(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);