"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65092],{318583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=n(474848),o=n(28453);const c={id:"focus-object",title:"Focus object",slug:"/commands/focus-object",displayed_sidebar:"docs"},i=void 0,r={id:"commands-legacy/focus-object",title:"Focus object",description:"Focus object  -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/focus-object.md",sourceDirName:"commands-legacy",slug:"/commands/focus-object",permalink:"/docs/fr/commands/focus-object",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffocus-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"focus-object",title:"Focus object",slug:"/commands/focus-object",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Caps lock down",permalink:"/docs/fr/commands/caps-lock-down"},next:{title:"Get application color scheme",permalink:"/docs/fr/commands/get-application-color-scheme"}},l={},d=[{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:4},{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Focus object"}),"  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tre"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Pointer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Pointeur vers l\u2019objet ayant le focus"})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,s.jsx)(t.h4,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,s.jsxs)(t.p,{children:["Cette commande est conserv\xe9e pour des raisons de compatibilit\xe9 uniquement. A compter de la version 12 de 4D, il est conseill\xe9 d'utiliser la commande ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/object-get-pointer",children:"OBJECT Get pointer"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Focus object"})," retourne un pointeur vers l\u2019objet ayant le focus dans le formulaire courant. Si aucun objet n\u2019a le focus, la commande retourne ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/is-nil-pointer",children:"Is nil pointer"}),". Vous pouvez utiliser ",(0,s.jsx)(t.strong,{children:"Focus object"})," pour effectuer une action dans un formulaire sans savoir quel objet est actuellement s\xe9lectionn\xe9. N'oubliez pas auparavant de tester si l'objet est du type voulu, \xe0 l'aide de la fonction ",(0,s.jsx)(t.a,{href:"/docs/fr/commands/type",children:"Type"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note :"})," Lorsqu\u2019elle est utilis\xe9e avec une list box, la fonction ",(0,s.jsx)(t.strong,{children:"Focus object"})," retourne un pointeur vers la list box ou la colonne de la list box en fonction du contexte. Pour plus d'informations, reportez-vous \xe0 la section ",(0,s.jsx)(t.em,{children:"Gestion programm\xe9e des objets de type List box"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Cette commande ne peut pas \xeatre utilis\xe9e sur les champs dans les sous-formulaires."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note :"})," Cette commande n'a de sens qu'en cours de saisie. Son utilisation hors de ce contexte g\xe9n\xe8re des messages d'erreur."]}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"L'exemple suivant est une m\xe9thode objet pour un bouton. Cette m\xe9thode passe les donn\xe9es de l'objet courant en majuscules. L'objet doit \xeatre de type Texte ou Alpha (type 0 ou 24) :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0$pointeur :=Focus object\xa0//Obtenir le pointeur vers le dernier objet\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Nil($pointeur))\xa0//Aucun objet n'a le focus\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0:((Type($pointeur->)=Is alpha field)|(Type($pointeur->)=Est une variable cha\xeene))\n\xa0\xa0//S'il s'agit d'un objet de type Texte ou Alpha\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pointeur->:=Uppercase($pointeur->)\xa0//Mettre les donn\xe9es en majuscules\n\xa0End case\n"})}),"\n",(0,s.jsx)(t.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/docs/fr/commands/object-get-pointer",children:"OBJECT Get pointer"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(296540);const o={},c=s.createContext(o);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);