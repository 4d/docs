"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56984"],{484210:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"FormObjects/tabControl","title":"Onglets","description":"Un onglet cr\xe9e un objet qui permet \xe0 l\u2019utilisateur de choisir entre plusieurs \xe9crans virtuels affich\xe9s dans les limites de l\u2019onglet. L\u2019utilisateur acc\xe8de \xe0 chaque \xe9cran en cliquant sur l\u2019onglet correspondant.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/FormObjects/tabControl.md","sourceDirName":"FormObjects","slug":"/FormObjects/tabControl","permalink":"/docs/fr/20/FormObjects/tabControl","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"tabControl","title":"Onglets"},"sidebar":"docs","previous":{"title":"Sous-formulaire","permalink":"/docs/fr/20/FormObjects/subformOverview"},"next":{"title":"Text","permalink":"/docs/fr/20/FormObjects/text"}}'),l=t("785893"),r=t("250065");let i={id:"tabControl",title:"Onglets"},o=void 0,a={},c=[{value:"Exemple JSON :",id:"exemple-json-",level:3},{value:"Ajouter les intitul\xe9s dans un onglet",id:"ajouter-les-intitul\xe9s-dans-un-onglet",level:2},{value:"Utilisation d&#39;un objet",id:"utilisation-dun-objet",level:3},{value:"Utiliser une \xe9num\xe9ration",id:"utiliser-une-\xe9num\xe9ration",level:3},{value:"Utiliser un tableau texte",id:"utiliser-un-tableau-texte",level:3},{value:"Fonctionnalit\xe9s de Goto page",id:"fonctionnalit\xe9s-de-goto-page",level:2},{value:"Commande FORM GOTO PAGE",id:"commande-form-goto-page",level:3},{value:"Action Goto Page",id:"action-goto-page",level:3},{value:"Propri\xe9t\xe9s prises en charge",id:"propri\xe9t\xe9s-prises-en-charge",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Un onglet cr\xe9e un objet qui permet \xe0 l\u2019utilisateur de choisir entre plusieurs \xe9crans virtuels affich\xe9s dans les limites de l\u2019onglet. L\u2019utilisateur acc\xe8de \xe0 chaque \xe9cran en cliquant sur l\u2019onglet correspondant."}),"\n",(0,l.jsx)(n.p,{children:"Le formulaire multi-pages suivant utilise un onglet :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(557636).Z+"",width:"600",height:"534"})}),"\n",(0,l.jsx)(n.p,{children:"Pour passer d\u2019un \xe9cran \xe0 l\u2019autre, l\u2019utilisateur clique simplement sur l\u2019onglet correspondant."}),"\n",(0,l.jsxs)(n.p,{children:["Un onglet peut \xeatre utilis\xe9, entre autres, pour g\xe9rer la navigation entre les pages d\u2019un formulaire multi-pages. Dans ce cas, la commande ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page247.html",children:(0,l.jsx)(n.code,{children:"FORM GOTO PAGE"})})," ou l\u2019action standard ",(0,l.jsx)(n.code,{children:"gotoPage"})," devra \xeatre appel\xe9e lorsque l\u2019utilisateur cliquera sur l\u2019onglet."]}),"\n",(0,l.jsx)(n.p,{children:"Un onglet peut aussi \xeatre utilis\xe9 pour contr\xf4ler les donn\xe9es qui sont affich\xe9es dans un sous-formulaire. On peut, par exemple, impl\xe9menter un rolodex \xe0 l\u2019aide d\u2019un onglet. Chaque onglet afficherait alors une des lettres de l\u2019alphabet et l\u2019action de l\u2019onglet serait de charger les informations correspondantes \xe0 la lettre sur lequel l\u2019utilisateur a cliqu\xe9."}),"\n",(0,l.jsx)(n.p,{children:"Chaque onglet peut afficher des intitul\xe9s ou des intitul\xe9s et des petites ic\xf4nes. Si vous placez des ic\xf4nes, elles apparaissent \xe0 gauche de chaque intitul\xe9. Voici un exemple d\u2019onglet qui utilise des ic\xf4nes :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(242013).Z+"",width:"599",height:"510"})}),"\n",(0,l.jsx)(n.p,{children:"Lorsque vous cr\xe9ez un onglet, 4D g\xe8re l\u2019espacement et le placement des onglets. Vous n\u2019avez \xe0 fournir \xe0 4D que les intitul\xe9s sous la forme d\u2019un tableau ou les ic\xf4nes et intitul\xe9s sous la forme d\u2019une \xe9num\xe9ration hi\xe9rarchique."}),"\n",(0,l.jsx)(n.p,{children:"Si l\u2019onglet est assez large, il affiche les intitul\xe9s et les ic\xf4nes. S\u2019il ne peut pas afficher toutes les ic\xf4nes \xe0 la fois, il place des fl\xe8ches de d\xe9filement \xe0 droite du dernier onglet visible. S\u2019il ne peut pas afficher toutes les ic\xf4nes \xe0 la fois, il place des fl\xe8ches de d\xe9filement \xe0 droite du dernier onglet visible. Les fl\xe8ches de d\xe9filement permettent \xe0 l\u2019utilisateur de faire d\xe9filer des onglets vers la droite ou vers la gauche."}),"\n",(0,l.jsx)(n.p,{children:"Sous macOS, les onglets peuvent \xeatre orient\xe9s, en plus de la position standard (en haut), \xe0 droite, \xe0 gauche ou en bas."}),"\n",(0,l.jsx)(n.h3,{id:"exemple-json-",children:"Exemple JSON :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'    "myTab": {\n        "type": "tab",\n        "left": 60, \n        "top": 160,  \n        "width": 100,   \n        "height": 20,   \n        "labelsPlacement": "bottom" //d\xe9finit l\'orientation\n    }\n'})}),"\n",(0,l.jsx)(n.h2,{id:"ajouter-les-intitul\xe9s-dans-un-onglet",children:"Ajouter les intitul\xe9s dans un onglet"}),"\n",(0,l.jsx)(n.p,{children:"Pour fournir les \xe9tiquettes d'un onglet, vous pouvez utiliser :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"un objet"}),"\n",(0,l.jsx)(n.li,{children:"une liste d\xe9roulante"}),"\n",(0,l.jsx)(n.li,{children:"un tableau"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"utilisation-dun-objet",children:"Utilisation d'un objet"}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez affecter un ",(0,l.jsx)(n.a,{href:"/docs/fr/20/Concepts/object",children:"objet"})," encapsulant une ",(0,l.jsx)(n.a,{href:"/docs/fr/20/Concepts/collection",children:"collection"})," comme ",(0,l.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesObject#variable-or-expression",children:"source de donn\xe9es"})," de l'onglet. Cet objet doit avoir les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"values"})}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"Obligatoire - Collection de valeurs scalaires. Seules les valeurs de type cha\xeene sont prises en charge. Si elle est invalide, vide ou non d\xe9finie, l'onglet est vide"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"index"})}),(0,l.jsx)(n.td,{children:"number"}),(0,l.jsxs)(n.td,{children:["Indice de la page de l'onglet en cours (valeur comprise entre 0 et ",(0,l.jsx)(n.code,{children:"collection.length-1"}),")"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"currentValue"})}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"Valeur courante s\xe9lectionn\xe9e"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"Le code d'initialisation doit \xeatre ex\xe9cut\xe9 avant que le formulaire ne soit pr\xe9sent\xe9 \xe0 l'utilisateur."}),"\n",(0,l.jsxs)(n.p,{children:["Dans l'exemple suivant, ",(0,l.jsx)(n.code,{children:"Form.tabControl"})," a \xe9t\xe9 d\xe9fini comme ",(0,l.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesObject#variable-or-expression",children:"expression"})," de l'onglet. Vous pouvez associer l'",(0,l.jsxs)(n.a,{href:"#goto-page-action",children:["action standard ",(0,l.jsx)(n.code,{children:"gotoPage"})]})," \xe0 l'objet form :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'Form.tabControl:=New object\nForm.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //d\xe9marrage \xe0 la page 3\n'})}),"\n",(0,l.jsx)(n.h3,{id:"utiliser-une-\xe9num\xe9ration",children:"Utiliser une \xe9num\xe9ration"}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez associer \xe0 l\u2019onglet ",(0,l.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesDataSource#choice-list-static-list",children:"une liste de valeurs"}),", accessible via une collection (liste statique) ou un pointeur JSON vers une liste json (\"$ref\"). Les ic\xf4nes associ\xe9es \xe0 des \xe9l\xe9ments de liste dans l'\xe9diteur de listes seront affich\xe9es dans l'onglet."]}),"\n",(0,l.jsx)(n.h3,{id:"utiliser-un-tableau-texte",children:"Utiliser un tableau texte"}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez cr\xe9er un tableau Texte qui contient les noms de chaque page du formulaire. Le code doit \xeatre ex\xe9cut\xe9 avant que le formulaire soit pr\xe9sent\xe9 \xe0 l\u2019utilisateur. Par exemple, vous pouvez placer ce code dans l\u2019\xe9v\xe9nement formulaire ",(0,l.jsx)(n.code,{children:"Sur chargement"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Vous pouvez \xe9galement stocker les noms des pages dans une liste hi\xe9rarchique et utiliser la commande ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page288.html",children:"LIST TO ARRAY"})," pour charger les valeurs dans le tableau."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"fonctionnalit\xe9s-de-goto-page",children:"Fonctionnalit\xe9s de Goto page"}),"\n",(0,l.jsx)(n.h3,{id:"commande-form-goto-page",children:"Commande FORM GOTO PAGE"}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez utiliser la commande ",(0,l.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page247.html",children:(0,l.jsx)(n.code,{children:"FORM GOTO PAGE"})})," dans la m\xe9thode de l\u2019onglet pour naviguer parmi les pages du formulaire :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"FORM GOTO PAGE(arrPages)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Cette commande est ex\xe9cut\xe9e dans l\u2019\xe9v\xe9nement formulaire ",(0,l.jsx)(n.a,{href:"/docs/fr/20/Events/onClicked",children:(0,l.jsx)(n.code,{children:"Sur clic"})}),". Il est pr\xe9f\xe9rable d\u2019effacer le tableau dans l\u2019\xe9v\xe9nement formulaire ",(0,l.jsx)(n.a,{href:"/docs/fr/20/Events/onUnload",children:(0,l.jsx)(n.code,{children:"Sur lib\xe9ration"})}),"."]}),"\n",(0,l.jsx)(n.p,{children:"Vous pouvez, par exemple, \xe9crire le code suivant :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n'})}),"\n",(0,l.jsx)(n.h3,{id:"action-goto-page",children:"Action Goto Page"}),"\n",(0,l.jsxs)(n.p,{children:["Lorsque vous associez l\u2019",(0,l.jsx)(n.a,{href:"/docs/fr/20/FormObjects/propertiesAction#standard-action",children:"action standard"})," ",(0,l.jsx)(n.code,{children:"gotoPage"})," \xe0 un objet de type Onglet, 4D affiche automatiquement la page du formulaire correspondant au num\xe9ro de l\u2019onglet s\xe9lectionn\xe9."]}),"\n",(0,l.jsx)(n.p,{children:"Par exemple, si l\u2019utilisateur clique sur le 3e onglet, 4D affichera la page 3 du formulaire courant (si elle existe)."}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s-prises-en-charge",children:"Propri\xe9t\xe9s prises en charge"}),"\n",(0,l.jsx)(n.p,{children:"Par exemple, si l\u2019utilisateur clique sur le 3e onglet, 4D affichera la page 3 du formulaire courant (si elle existe)."})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},557636:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},242013:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);