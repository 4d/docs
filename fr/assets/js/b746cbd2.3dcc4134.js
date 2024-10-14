"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43797],{396564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(474848),r=t(28453);const o={id:"onAfterKeystroke",title:"On After Keystroke"},i=void 0,l={id:"Events/onAfterKeystroke",title:"On After Keystroke",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                       | D\xe9finition                                                                                                                                          |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onAfterKeystroke.md",sourceDirName:"Events",slug:"/Events/onAfterKeystroke",permalink:"/docs/fr/20/Events/onAfterKeystroke",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonAfterKeystroke.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onAfterKeystroke",title:"On After Keystroke"},sidebar:"docs",previous:{title:"On After Edit",permalink:"/docs/fr/20/Events/onAfterEdit"},next:{title:"On After Sort",permalink:"/docs/fr/20/Events/onAfterSort"}},d={},c=[{value:"Description",id:"description",level:2},{value:"S\xe9quence d&#39;entr\xe9e",id:"s\xe9quence-dentr\xe9e",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"28"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,s.jsxs)(n.td,{children:["Un caract\xe8re est sur le point d'\xeatre saisi dans l'objet qui a le focus. ",(0,s.jsx)(n.code,{children:"Get edited text"})," retourne le texte de l'objet, ",(0,s.jsx)(n.strong,{children:"y compris"})," ce caract\xe8re."]})]})})]}),"\n",(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Modifications"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18 R5"}),(0,s.jsx)(n.td,{children:"- Prise en charge dans les list box non saisissables - L'\xe9v\xe9nement est d\xe9sormais d\xe9clench\xe9 apr\xe8s la validation IME"})]})})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On After Keystroke"})," peut g\xe9n\xe9ralement \xeatre remplac\xe9 par l'\xe9v\xe9nement ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/onAfterEdit",children:(0,s.jsx)(n.code,{children:"On After Edit"})})," (voir ci-dessous)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Apr\xe8s avoir s\xe9lectionn\xe9 les propri\xe9t\xe9s d'\xe9v\xe9nement ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/onBeforeKeystroke",children:(0,s.jsx)(n.code,{children:"On Before Keystroke"})})," et ",(0,s.jsx)(n.code,{children:"On After Keystroke"})," pour un objet, vous pouvez d\xe9tecter et g\xe9rer les frappes au sein de l'objet, en utilisant la commande ",(0,s.jsx)(n.code,{children:"FORM event"})," qui renverra ",(0,s.jsx)(n.code,{children:"On Before Keystroke"})," puis ",(0,s.jsx)(n.code,{children:"On After Keystroke"})," (pour plus d'informations, veuillez reportez-vous \xe0 la description de la commande ",(0,s.jsx)(n.code,{children:"Get edited text"}),")."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Ces \xe9v\xe9nements sont \xe9galement activ\xe9s par des commandes de langage qui simulent une action utilisateur telle que ",(0,s.jsx)(n.code,{children:"POST KEY"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,s.jsx)(n.code,{children:"On After Keystroke"})," n'est pas g\xe9n\xe9r\xe9 :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["dans la m\xe9thode ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"des colonnes de list box"}),", sauf lorsqu'une cellule est en cours d'\xe9dition (cependant elle est g\xe9n\xe9r\xe9e dans tous les cas dans la m\xe9thode de ",(0,s.jsx)(n.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"list box"}),"),"]}),"\n",(0,s.jsxs)(n.li,{children:["lorsque les modifications utilisateur ne sont pas effectu\xe9es \xe0 l'aide du clavier (coller, glisser-d\xe9poser, case \xe0 cocher, liste d\xe9roulante, combo box). Pour traiter ces \xe9v\xe9nements, vous devez utiliser ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/onAfterEdit",children:(0,s.jsx)(n.code,{children:"On After Edit"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"s\xe9quence-dentr\xe9e",children:"S\xe9quence d'entr\xe9e"}),"\n",(0,s.jsxs)(n.p,{children:["Lorsqu'une entr\xe9e n\xe9cessite une s\xe9quence de frappes clavier, les \xe9v\xe9nements ",(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/onBeforeKeystroke",children:(0,s.jsx)(n.code,{children:"On Before Keystroke"})})," et [",(0,s.jsx)(n.code,{children:"On After Keystroke event"}),"] sont g\xe9n\xe9r\xe9s uniquement lorsque l'entr\xe9e est enti\xe8rement valid\xe9e par l'utilisateur. La commande ",(0,s.jsx)(n.code,{children:"Keystroke"})," retourne le caract\xe8re valid\xe9. Ce cas se produit principalement :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'lors de l\'utilisation de touches "mortes" telles que ^ ou ~: les \xe9v\xe9nements ne sont g\xe9n\xe9r\xe9s que lorsque le caract\xe8re \xe9tendu est \xe9ventuellement saisi (par exemple "\xea" ou \xf1),'}),"\n",(0,s.jsx)(n.li,{children:"lorsqu'un IME (Input method editor) affiche une bo\xeete de dialogue interm\xe9diaire o\xf9 l'utilisateur peut saisir une combinaison de caract\xe8res : les \xe9v\xe9nements sont g\xe9n\xe9r\xe9s uniquement lorsque la bo\xeete de dialogue IME est valid\xe9e."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20/Events/onBeforeKeystroke",children:"On Before Keystroke"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(296540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);