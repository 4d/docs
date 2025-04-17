"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9107"],{172173:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/focus-object","title":"Focus object","description":"Focus object  : Pointer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/focus-object.md","sourceDirName":"commands-legacy","slug":"/commands/focus-object","permalink":"/docs/fr/20-R8/commands/focus-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffocus-object.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"focus-object","title":"Focus object","slug":"/commands/focus-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Caps lock down","permalink":"/docs/fr/20-R8/commands/caps-lock-down"},"next":{"title":"Get Application color scheme","permalink":"/docs/fr/20-R8/commands/get-application-color-scheme"}}'),o=t("785893"),r=t("250065");let i={id:"focus-object",title:"Focus object",slug:"/commands/focus-object",displayed_sidebar:"docs"},c=void 0,l={},d=[{value:"Note de compatibilit\xe9",id:"note-de-compatibilit\xe9",level:2},{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Focus object"}),"  : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Param\xe8tre"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"R\xe9sultat"}),(0,o.jsx)(n.td,{children:"Pointer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Pointeur vers l\u2019objet ayant le focus"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"note-de-compatibilit\xe9",children:"Note de compatibilit\xe9"}),"\n",(0,o.jsxs)(n.p,{children:["Cette commande est conserv\xe9e pour des raisons de compatibilit\xe9 uniquement. A compter de la version 12 de 4D, il est conseill\xe9 d'utiliser la commande ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-get-pointer",children:"OBJECT Get pointer"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Focus object"})," retourne un pointeur vers l\u2019objet ayant le focus dans le formulaire courant. Si aucun objet n\u2019a le focus, la commande retourne ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/is-nil-pointer",children:"Is nil pointer"}),". Vous pouvez utiliser ",(0,o.jsx)(n.strong,{children:"Focus object"})," pour effectuer une action dans un formulaire sans savoir quel objet est actuellement s\xe9lectionn\xe9. N'oubliez pas auparavant de tester si l'objet est du type voulu, \xe0 l'aide de la fonction ",(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/type",children:"Type"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note :"})," Lorsqu\u2019elle est utilis\xe9e avec une list box, la fonction ",(0,o.jsx)(n.strong,{children:"Focus object"})," retourne un pointeur vers la list box ou la colonne de la list box en fonction du contexte. Pour plus d'informations, reportez-vous \xe0 la section ",(0,o.jsx)(n.em,{children:"Gestion programm\xe9e des objets de type List box"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Cette commande ne peut pas \xeatre utilis\xe9e sur les champs dans les sous-formulaires."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note :"})," Cette commande n'a de sens qu'en cours de saisie. Son utilisation hors de ce contexte g\xe9n\xe8re des messages d'erreur."]}),"\n",(0,o.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,o.jsx)(n.p,{children:"L'exemple suivant est une m\xe9thode objet pour un bouton. Cette m\xe9thode passe les donn\xe9es de l'objet courant en majuscules. L'objet doit \xeatre de type Texte ou Alpha (type 0 ou 24) :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0$pointeur :=Focus object\xa0//Obtenir le pointeur vers le dernier objet\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Nil($pointeur))\xa0//Aucun objet n'a le focus\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0:((Type($pointeur->)=Is alpha field)|(Type($pointeur->)=Est une variable cha\xeene))\n\xa0\xa0//S'il s'agit d'un objet de type Texte ou Alpha\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pointeur->:=Uppercase($pointeur->)\xa0//Mettre les donn\xe9es en majuscules\n\xa0End case\n"})}),"\n",(0,o.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/fr/20-R8/commands/object-get-pointer",children:"OBJECT Get pointer"})}),"\n",(0,o.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,o.jsx)(n.td,{children:"278"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);