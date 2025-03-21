"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24519"],{769311:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"Events/onBeforeKeystroke","title":"On Before Keystroke","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                  | D\xe9finition                                                                                                                                     |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onBeforeKeystroke.md","sourceDirName":"Events","slug":"/Events/onBeforeKeystroke","permalink":"/docs/fr/20/Events/onBeforeKeystroke","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeforeKeystroke.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onBeforeKeystroke","title":"On Before Keystroke"},"sidebar":"docs","previous":{"title":"On Before Data Entry","permalink":"/docs/fr/20/Events/onBeforeDataEntry"},"next":{"title":"On Begin Drag Over","permalink":"/docs/fr/20/Events/onBeginDragOver"}}'),r=n("785893"),i=n("250065");let o={id:"onBeforeKeystroke",title:"On Before Keystroke"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Objets non saisissables",id:"objets-non-saisissables",level:3},{value:"S\xe9quence d&#39;entr\xe9e",id:"s\xe9quence-dentr\xe9e",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function a(e){let s={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Code"}),(0,r.jsx)(s.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(s.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"17"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/20/FormObjects/writeProAreaOverview",children:"Zone 4D Write Pro"})," - ",(0,r.jsx)(s.a,{href:"/docs/fr/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - Formulaire - ",(0,r.jsx)(s.a,{href:"/docs/fr/20/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(s.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," ",(0,r.jsx)(s.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"Colonne de list box"})]}),(0,r.jsxs)(s.td,{children:["Un caract\xe8re est sur le point d'\xeatre saisi dans l'objet qui a le focus. ",(0,r.jsx)(s.code,{children:"Get edited text"})," retourne le texte de l'objet, ",(0,r.jsx)(s.strong,{children:"sans"})," ce caract\xe8re."]})]})})]}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18 R5"}),(0,r.jsx)(s.td,{children:"- Prise en charge dans les list box non saisissables - L'\xe9v\xe9nement est d\xe9sormais d\xe9clench\xe9 apr\xe8s la validation IME"})]})})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["Apr\xe8s avoir s\xe9lectionn\xe9 les \xe9v\xe9nements ",(0,r.jsx)(s.code,{children:"On Before Keystroke"})," et ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Events/onAfterKeystroke",children:(0,r.jsx)(s.code,{children:"On After Keystroke event"})})," pour un objet, vous pouvez d\xe9tecter et g\xe9rer les frappes au sein de l'objet, en utilisant la commande ",(0,r.jsx)(s.code,{children:"Form event"})," qui retournera ",(0,r.jsx)(s.code,{children:"On Before Keystroke"})," puis ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Events/onAfterKeystroke",children:(0,r.jsx)(s.code,{children:"On After Keystroke"})})," (pour plus d'informations, veuillez vous reporter \xe0 la description de la commande ",(0,r.jsx)(s.code,{children:"Get edited text"}),"). Dans l'\xe9v\xe9nement ",(0,r.jsx)(s.code,{children:"On Before Keystroke"}),", la commande ",(0,r.jsx)(s.code,{children:"FILTER KEYSTROKE"})," peut \xeatre utilis\xe9e pour filtrer les caract\xe8res typ\xe9s."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Ces \xe9v\xe9nements sont \xe9galement activ\xe9s par des commandes de langage qui simulent une action utilisateur telle que ",(0,r.jsx)(s.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["L'\xe9v\xe9nement ",(0,r.jsx)(s.code,{children:"On Before Keystroke"})," n'est pas g\xe9n\xe9r\xe9 :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["dans une m\xe9thode ",(0,r.jsx)(s.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"colonnes de list box"}),", sauf lorsqu'une cellule est en cours d'\xe9dition (cependant elle est g\xe9n\xe9r\xe9e dans tous les cas dans la m\xe9thode de ",(0,r.jsx)(s.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"list box"}),"),"]}),"\n",(0,r.jsxs)(s.li,{children:["lorsque les modifications utilisateur ne sont pas effectu\xe9es \xe0 l'aide du clavier (coller, glisser-d\xe9poser, case \xe0 cocher, liste d\xe9roulante, combo box). Pour traiter ces \xe9v\xe9nements, vous devez utiliser ",(0,r.jsx)(s.a,{href:"/docs/fr/20/Events/onAfterEdit",children:(0,r.jsx)(s.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"objets-non-saisissables",children:"Objets non saisissables"}),"\n",(0,r.jsxs)(s.p,{children:["L'\xe9v\xe9nement ",(0,r.jsx)(s.code,{children:"On Before Keystroke"})," peut \xeatre g\xe9n\xe9r\xe9 dans des objets non saisissables, par exemple dans une list box m\xeame si les cellules de la list box ne sont pas saisissables ou si les lignes ne peuvent pas \xeatre s\xe9lectionn\xe9es. Cela vous permet de cr\xe9er des interfaces dans lesquelles l'utilisateur peut faire d\xe9filer dynamiquement jusqu'\xe0 une ligne sp\xe9cifique dans une list box en saisissant les premi\xe8res lettres d'une valeur. Dans le cas o\xf9 les cellules de la list box sont saisissables, vous pouvez utiliser la commande ",(0,r.jsx)(s.code,{children:"Is editing text"})," pour savoir si l'utilisateur saisit r\xe9ellement du texte dans une cellule ou s'il utilise la fonction de saisie pr\xe9dictive, puis ex\xe9cutez le code appropri\xe9."]}),"\n",(0,r.jsx)(s.h3,{id:"s\xe9quence-dentr\xe9e",children:"S\xe9quence d'entr\xe9e"}),"\n",(0,r.jsxs)(s.p,{children:["Lorsqu'une entr\xe9e n\xe9cessite une s\xe9quence de frappes clavier, les \xe9v\xe9nements ``On Before Keystroke",(0,r.jsxs)(s.a,{href:"/docs/fr/20/Events/onAfterKeystroke",children:[(0,r.jsx)(s.code,{children:"et ["}),"On After Keystroke"]}),"] sont g\xe9n\xe9r\xe9s uniquement lorsque la saisie est enti\xe8rement valid\xe9e par l'utilisateur. La commande ",(0,r.jsx)(s.code,{children:"Keystroke"})," retourne le caract\xe8re valid\xe9. Ce cas se produit principalement :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'lors de l\'utilisation de touches "mortes" telles que ^ ou ~: les \xe9v\xe9nements ne sont g\xe9n\xe9r\xe9s que lorsque le caract\xe8re \xe9tendu est \xe9ventuellement saisi (par exemple "\xea" ou \xf1),'}),"\n",(0,r.jsx)(s.li,{children:"lorsqu'un IME (Input method editor) affiche une bo\xeete de dialogue interm\xe9diaire o\xf9 l'utilisateur peut saisir une combinaison de caract\xe8res : les \xe9v\xe9nements sont g\xe9n\xe9r\xe9s uniquement lorsque la bo\xeete de dialogue IME est valid\xe9e."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/20/Events/onAfterKeystroke",children:"On After Keystroke"}),"."]})]})}function u(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return o}});var t=n(667294);let r={},i=t.createContext(r);function o(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);