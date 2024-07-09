/*! For license information please see 33318491.c4c12e08.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5323],{149050:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(474848),n=s(28453);const i={id:"tabControl",title:"Onglets"},o=void 0,l={id:"FormObjects/tabControl",title:"Onglets",description:"Un onglet cr\xe9e un objet qui permet \xe0 l\u2019utilisateur de choisir entre plusieurs \xe9crans virtuels affich\xe9s dans les limites de l\u2019onglet. L\u2019utilisateur acc\xe8de \xe0 chaque \xe9cran en cliquant sur l\u2019onglet correspondant.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/docs/fr/18/FormObjects/tabControl",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"tabControl",title:"Onglets"},sidebar:"docs",previous:{title:"Sous-formulaire",permalink:"/docs/fr/18/FormObjects/subformOverview"},next:{title:"Text",permalink:"/docs/fr/18/FormObjects/text"}},a={},c=[{value:"Exemple JSON",id:"Exemple-JSON",level:3},{value:"Ajouter les intitul\xe9s dans un onglet",id:"Ajouter-les-intitul\xe9s-dans-un-onglet",level:2},{value:"G\xe9rer les onglets par programmation",id:"G\xe9rer-les-onglets-par-programmation",level:2},{value:"Commande FORM GOTO PAGE",id:"Commande-FORM-GOTO-PAGE",level:3},{value:"Action Goto Page",id:"Action-Goto-Page",level:3},{value:"Propri\xe9t\xe9s prises en charge",id:"Propri\xe9t\xe9s-prises-en-charge",level:2}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Un onglet cr\xe9e un objet qui permet \xe0 l\u2019utilisateur de choisir entre plusieurs \xe9crans virtuels affich\xe9s dans les limites de l\u2019onglet. L\u2019utilisateur acc\xe8de \xe0 chaque \xe9cran en cliquant sur l\u2019onglet correspondant."}),"\n",(0,t.jsx)(r.p,{children:"Le formulaire multi-pages suivant utilise un onglet :"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(46704).A+"",width:"600",height:"534"})}),"\n",(0,t.jsx)(r.p,{children:"Pour passer d\u2019un \xe9cran \xe0 l\u2019autre, l\u2019utilisateur clique simplement sur l\u2019onglet correspondant."}),"\n",(0,t.jsxs)(r.p,{children:["Un onglet peut \xeatre utilis\xe9, entre autres, pour g\xe9rer la navigation entre les pages d\u2019un formulaire multi-pages. Dans ce cas, la commande ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html",children:"FORM GOTO PAGE"})," ou l\u2019action standard ",(0,t.jsx)(r.code,{children:"gotoPage"})," devra \xeatre appel\xe9e lorsque l\u2019utilisateur cliquera sur l\u2019onglet."]}),"\n",(0,t.jsx)(r.p,{children:"Un onglet peut aussi \xeatre utilis\xe9 pour contr\xf4ler les donn\xe9es qui sont affich\xe9es dans un sous-formulaire. On peut, par exemple, impl\xe9menter un rolodex \xe0 l\u2019aide d\u2019un onglet. Chaque onglet afficherait alors une des lettres de l\u2019alphabet et l\u2019action de l\u2019onglet serait de charger les informations correspondantes \xe0 la lettre sur lequel l\u2019utilisateur a cliqu\xe9."}),"\n",(0,t.jsx)(r.p,{children:"Chaque onglet peut afficher des intitul\xe9s ou des intitul\xe9s et des petites ic\xf4nes. Si vous placez des ic\xf4nes, elles apparaissent \xe0 gauche de chaque intitul\xe9. Voici un exemple d\u2019onglet qui utilise des ic\xf4nes :"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(316555).A+"",width:"599",height:"510"})}),"\n",(0,t.jsx)(r.p,{children:"Lorsque vous cr\xe9ez un onglet, 4D g\xe8re l\u2019espacement et le placement des onglets. Vous n\u2019avez \xe0 fournir \xe0 4D que les intitul\xe9s sous la forme d\u2019un tableau ou les ic\xf4nes et intitul\xe9s sous la forme d\u2019une \xe9num\xe9ration hi\xe9rarchique."}),"\n",(0,t.jsx)(r.p,{children:"Si l\u2019onglet est assez large, il affiche les intitul\xe9s et les ic\xf4nes. S\u2019il ne peut pas afficher toutes les ic\xf4nes \xe0 la fois, il place des fl\xe8ches de d\xe9filement \xe0 droite du dernier onglet visible. S\u2019il ne peut pas afficher toutes les ic\xf4nes \xe0 la fois, il place des fl\xe8ches de d\xe9filement \xe0 droite du dernier onglet visible. Les fl\xe8ches de d\xe9filement permettent \xe0 l\u2019utilisateur de faire d\xe9filer des onglets vers la droite ou vers la gauche."}),"\n",(0,t.jsx)(r.p,{children:"Sous macOS, les onglets peuvent \xeatre orient\xe9s, en plus de la position standard (en haut), \xe0 droite, \xe0 gauche ou en bas."}),"\n",(0,t.jsx)(r.h3,{id:"Exemple-JSON",children:"Exemple JSON"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define the direction\n }\n'})}),"\n",(0,t.jsx)(r.h2,{id:"Ajouter-les-intitul\xe9s-dans-un-onglet",children:"Ajouter les intitul\xe9s dans un onglet"}),"\n",(0,t.jsx)(r.p,{children:"Pour placer des intitul\xe9s dans un onglet, plusieurs possibilit\xe9s se pr\xe9sentent \xe0 vous :"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Vous pouvez associer \xe0 l\u2019onglet ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDataSource#choice-list-static-list",children:"une liste de valeurs"}),", accessible via une collection (liste statique) ou un pointeur JSON (\"$ref\") vers une liste json. Les ic\xf4nes associ\xe9es \xe0 des \xe9l\xe9ments de liste dans l'\xe9diteur de listes seront affich\xe9es dans l'onglet."]}),"\n",(0,t.jsxs)(r.li,{children:["Vous pouvez cr\xe9er un tableau Texte qui contient les noms de chaque page du formulaire. Le code doit \xeatre ex\xe9cut\xe9 avant que le formulaire soit pr\xe9sent\xe9 \xe0 l\u2019utilisateur. Par exemple, vous pouvez placer ce code dans l\u2019\xe9v\xe9nement formulaire ",(0,t.jsx)(r.code,{children:"Sur chargement"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n'})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Vous pouvez aussi stocker les noms des pages dans une liste hi\xe9rarchique et utiliser la commande ",(0,t.jsx)(r.code,{children:"Load list"})," pour charger les valeurs dans le tableau."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"G\xe9rer-les-onglets-par-programmation",children:"G\xe9rer les onglets par programmation"}),"\n",(0,t.jsx)(r.h3,{id:"Commande-FORM-GOTO-PAGE",children:"Commande FORM GOTO PAGE"}),"\n",(0,t.jsxs)(r.p,{children:["Vous pouvez utiliser la commande ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html",children:"FORM GOTO PAGE"})," dans la m\xe9thode objet de l\u2019onglet pour naviguer parmi les pages du formulaire :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"FORM GOTO PAGE(arrPages)\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Cette commande devra \xeatre ex\xe9cut\xe9e dans l\u2019\xe9v\xe9nement formulaire ",(0,t.jsx)(r.code,{children:"Sur clic"}),". Il est pr\xe9f\xe9rable d\u2019effacer le tableau dans l\u2019\xe9v\xe9nement formulaire ",(0,t.jsx)(r.code,{children:"Sur lib\xe9ration"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Vous pouvez, par exemple, \xe9crire le code suivant :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n'})}),"\n",(0,t.jsx)(r.h3,{id:"Action-Goto-Page",children:"Action Goto Page"}),"\n",(0,t.jsxs)(r.p,{children:["Lorsque vous associez l\u2019",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesAction#standard-action",children:"action standard"})," ",(0,t.jsx)(r.code,{children:"gotoPage"})," \xe0 un objet de type Onglet, 4D affiche automatiquement la page du formulaire correspondant au num\xe9ro de l\u2019onglet s\xe9lectionn\xe9."]}),"\n",(0,t.jsx)(r.p,{children:"Par exemple, si l\u2019utilisateur clique sur le 3e onglet, 4D affichera la page 3 du formulaire courant (si elle existe)."}),"\n",(0,t.jsx)(r.h2,{id:"Propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#bold",children:"Gras"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bas"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDataSource#choice-list-static-list",children:"Combo box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#css-class",children:"Classe"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#expression-type",children:"Type d'expression"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#font",children:"Police"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#font-size",children:"Taille"}),"  - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Hauteur"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesHelp#help-tip",children:"Message d'aide"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dim. horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#italic",children:"Italique"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Gauche"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#object-name",children:"Nom"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Droite"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesAction#standard-action",children:"Action standard "})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesAppearance#tab-control-direction",children:"Orientation onglets"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Haut"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesText#underline",children:"Soulign\xe9"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dim. vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable ou Expression"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesDisplay#visibility",children:"Visibilit\xe9"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Largeur"})]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,r,s)=>{var t=s(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var t,i={},c=null,d=null;for(t in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:c,ref:d,props:i,_owner:l.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},474848:(e,r,s)=>{e.exports=s(221020)},46704:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},316555:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>l});var t=s(296540);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);