"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67241"],{713274:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/method-get-paths-form","title":"METHOD GET PATHS FORM","description":"METHOD GET PATHS FORM ( {laTable ;} tabChemins {; filtre}{; marqueur}{; *} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/method-get-paths-form.md","sourceDirName":"commands-legacy","slug":"/commands/method-get-paths-form","permalink":"/docs/fr/20-R8/commands/method-get-paths-form","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-get-paths-form.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-get-paths-form","title":"METHOD GET PATHS FORM","slug":"/commands/method-get-paths-form","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET PATHS","permalink":"/docs/fr/20-R8/commands/method-get-paths"},"next":{"title":"METHOD OPEN PATH","permalink":"/docs/fr/20-R8/commands/method-open-path"}}'),r=n("785893"),d=n("250065");let l={id:"method-get-paths-form",title:"METHOD GET PATHS FORM",slug:"/commands/method-get-paths-form",displayed_sidebar:"docs"},i=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Exemple 1",id:"exemple-1",level:2},{value:"Exemple 2",id:"exemple-2",level:2},{value:"Exemple 3",id:"exemple-3",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"METHOD GET PATHS FORM"})," ( {",(0,r.jsx)(s.em,{children:"laTable"})," ;} ",(0,r.jsx)(s.em,{children:"tabChemins"})," {; ",(0,r.jsx)(s.em,{children:"filtre"}),"}{; ",(0,r.jsx)(s.em,{children:"marqueur"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"laTable"}),(0,r.jsx)(s.td,{children:"Table"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"R\xe9f\xe9rence de table"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"tabChemins"}),(0,r.jsx)(s.td,{children:"Text array"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Tableau des chemins et noms des m\xe9thodes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"filtre"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Filtrage des noms"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"marqueur"}),(0,r.jsx)(s.td,{children:"Real"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Valeur minimum de marqueur"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Nouvelle valeur courante"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Op\xe9rateur"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Si pass\xe9 = la commande s\u2019applique \xe0 la base h\xf4te lorsqu\u2019elle est ex\xe9cut\xe9e depuis un composant (param\xe8tre ignor\xe9 hors de ce contexte)"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"METHOD GET PATHS FORM"})," remplit le tableau ",(0,r.jsx)(s.em,{children:"tabChemins"})," avec les chemins d\u2019acc\xe8s internes et les noms des m\xe9thodes de tous les objets des formulaires, ainsi que des m\xe9thodes formulaire. Les m\xe9thodes formulaire sont libell\xe9es {formMethod}."]}),"\n",(0,r.jsx)(s.p,{children:"Seuls les objets contenant du code sont list\xe9s. Par exemple, les boutons uniquement associ\xe9s \xe0 une action automatique ne sont pas retourn\xe9s."}),"\n",(0,r.jsxs)(s.p,{children:["Si vous passez le param\xe8tre ",(0,r.jsx)(s.em,{children:"laTable"}),", la commande retourne les objets des formulaires table associ\xe9s \xe0 cette table. Si vous omettez ce param\xe8tre, le commande retourne les objets des formulaires projet de la base."]}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez restreindre la liste des formulaires en passant une cha\xeene de comparaison dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"filtre"}),' : dans ce cas, seuls les formulaires dont le nom correspond au filtre seront retourn\xe9s. Vous pouvez utiliser le caract\xe8re @ afin de d\xe9finir des filtres de type "commence par", "se termine par" ou "contient". Si vous passez une cha\xeene vide, le param\xe8tre ',(0,r.jsx)(s.em,{children:"filtre"})," est ignor\xe9."]}),"\n",(0,r.jsxs)(s.p,{children:["Le param\xe8tre ",(0,r.jsx)(s.em,{children:"marqueur"})," vous permet de ne r\xe9cup\xe9rer que les chemins des m\xe9thodes modifi\xe9es \xe0 compter d\u2019un instant sp\xe9cifique. Dans le cadre d\u2019un syst\xe8me de contr\xf4le de version, ce principe permet de mettre \xe0 jour uniquement les m\xe9thodes modifi\xe9es depuis la deni\xe8re sauvegarde.",(0,r.jsx)(s.br,{}),"\nLe fonctionnement est le suivant : 4D maintient un compteur de modification des m\xe9thodes. A chaque fois qu\u2019une m\xe9thode est cr\xe9\xe9e ou r\xe9enregistr\xe9e, ce compteur est incr\xe9ment\xe9 et sa valeur courante est stock\xe9e dans le marqueur interne de la m\xe9thode. Si vous passez ",(0,r.jsx)(s.em,{children:"marqueur"}),", la commande ne retourne que les m\xe9thodes dont le marqueur est sup\xe9rieur ou \xe9gal \xe0 la valeur pass\xe9e dans ce param\xe8tre. De plus, la commande retourne dans ",(0,r.jsx)(s.em,{children:"marqueur"})," la nouvelle valeur courante du compteur de modification, c\u2019est-\xe0-dire la valeur la plus \xe9lev\xe9e. Si vous stockez cette valeur, il vous suffira de la passer lors de l\u2019appel suivant \xe0 la commande afin de ne r\xe9cup\xe9rer que les m\xe9thodes nouvelles ou modifi\xe9es."]}),"\n",(0,r.jsxs)(s.p,{children:["Si la commande est ex\xe9cut\xe9e depuis un composant, elle retourne par d\xe9faut les chemins des m\xe9thodes du composant. Si vous passez le param\xe8tre ",(0,r.jsx)(s.em,{children:"*"}),", le tableau contiendra les chemins des m\xe9thodes de la base h\xf4te."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," La commande ne liste pas les objets des formulaires h\xe9rit\xe9s ni des sous-formulaires."]}),"\n",(0,r.jsx)(s.p,{children:"Si la commande d\xe9tecte un nom d'objet dupliqu\xe9, l'erreur -9802 est g\xe9n\xe9r\xe9e (\"Chemin d'objet non unique\"). Il est recommand\xe9 dans ce cas d'utiliser le CSM afin de v\xe9rifier la structure de la base de donn\xe9es."}),"\n",(0,r.jsx)(s.h2,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(s.p,{children:'Liste de tous les objets du formulaire "input" de la table [Emp]. A noter que les m\xe9thodes formulaire table (et les m\xe9thodes formulaire projet) sont trait\xe9es comme des objets appartenant au formulaire :'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM([Emp];tabChemins;"input")\n\xa0\xa0// Contenu de tabChemins (par exemple)\n\xa0\xa0// [tableForm]/input/{formMethod} -> M\xe9thode formulaire\n\xa0\xa0// [tableForm]/input/bOK -> M\xe9thode objet\n\xa0\xa0// [tableForm]/input/bCancel -> M\xe9thode objet\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(s.p,{children:'Liste des objets du formulaire projet "dial" :'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM(tabChemins;"dial")\n'})}),"\n",(0,r.jsx)(s.h2,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,r.jsx)(s.p,{children:'Liste de tous les objets des formulaires "input" de la table [Emp] \xe0 partir d\u2019un composant :'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0METHOD GET PATHS FORM(([Emp];tabChemins;"input@";*)\n'})}),"\n",(0,r.jsx)(s.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/fr/20-R8/commands/form-get-names",children:"FORM GET NAMES"})}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1168"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return l}});var t=n(667294);let r={},d=t.createContext(r);function l(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);