"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50603"],{46635:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/object-get-pointer","title":"OBJECT Get pointer","description":"OBJECT Get pointer {( s\xe9lecteur {; nomObjet {; nomSousFormulaire}})} : Pointer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/object-get-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-pointer","permalink":"/docs/fr/commands/object-get-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-pointer.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"object-get-pointer","title":"OBJECT Get pointer","slug":"/commands/object-get-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get placeholder","permalink":"/docs/fr/commands/object-get-placeholder"},"next":{"title":"OBJECT GET PRINT VARIABLE FRAME","permalink":"/docs/fr/commands/object-get-print-variable-frame"}}'),t=r("785893"),o=r("250065");let i={id:"object-get-pointer",title:"OBJECT Get pointer",slug:"/commands/object-get-pointer",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OBJECT Get pointer"})," {( ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," {; ",(0,t.jsx)(n.em,{children:"nomObjet"})," {; ",(0,t.jsx)(n.em,{children:"nomSousFormulaire"}),"}})} : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s\xe9lecteur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Cat\xe9gorie d\u2019objet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomObjet"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomSousFormulaire"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet sous-formulaire"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Pointer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Pointeur sur la variable de l\u2019objet"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"OBJECT Get pointer"})," retourne un pointeur vers la variable d\u2019un objet de formulaire."]}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande permet de d\xe9signer diff\xe9rents types d'objets en fonction du param\xe8tre ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"}),". Vous pouvez passer dans ce param\xe8tre l\u2019une des constantes suivantes (plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Objets de formulaire (Acc\xe8s)"}),") :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Object current ou ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," omis : Si vous omettez le param\xe8tre ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," ou passez ce s\xe9lecteur, la commande retourne un pointeur vers la variable associ\xe9e \xe0 l\u2019objet courant (objet dont la m\xe9thode est en cours d\u2019ex\xe9cution).",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Note :"})," Ce fonctionnement \xe9quivaut strictement \xe0 celui de la commande historique ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/self",children:"Self"}),". La commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/self",children:"Self"})," est conserv\xe9e pour des raisons de compatibilit\xe9 uniquement."]}),"\n",(0,t.jsxs)(n.li,{children:["Object with focus : Si vous passez ce s\xe9lecteur, la commande retourne un pointeur vers la variable associ\xe9e \xe0 l\u2019objet ayant le focus dans le formulaire. Les deux derniers param\xe8tres optionnels sont ignor\xe9s s\u2019ils sont pass\xe9s.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Note :"})," Ce fonctionnement \xe9quivaut strictement \xe0 celui de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/focus-object",children:"Focus object"}),". La commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/focus-object",children:"Focus object"})," est obsol\xe8te \xe0 compter de 4D v12."]}),"\n",(0,t.jsx)(n.li,{children:"Object subform container : Si vous passez ce s\xe9lecteur, la commande retourne un pointeur vers la variable li\xe9e au conteneur du sous-formulaire. Les deux derniers param\xe8tres optionnels sont ignor\xe9s s\u2019ils sont pass\xe9s. Ce s\xe9lecteur ne peut donc \xeatre utilis\xe9 que dans le contexte d\u2019un formulaire utilis\xe9 comme sous-formulaire, afin d\u2019acc\xe9der \xe0 la variable li\xe9e \xe0 l\u2019objet conteneur."}),"\n",(0,t.jsxs)(n.li,{children:["Object named : Si vous passez ce s\xe9lecteur, vous devez \xe9galement passer le deuxi\xe8me param\xe8tre, ",(0,t.jsx)(n.em,{children:"nomObjet"}),". Dans ce cas, la commande retourne un pointeur vers la variable associ\xe9e \xe0 l\u2019objet dont vous avez pass\xe9 le nom dans ce param\xe8tre.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Note :"})," Si ",(0,t.jsx)(n.em,{children:"nomObjet"}),' correspond \xe0 un sous-formulaire et que l\u2019option "Sous-formulaire liste" est coch\xe9e, la commande retourne un pointeur vers la table du sous-formulaire si une table source est d\xe9finie et Nil dans le cas contraire.']}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"nomSousFormulaire"})," vous permet de r\xe9cup\xe9rer un pointeur vers un objet ",(0,t.jsx)(n.em,{children:"nomObjet"})," n\u2019appartenant pas au contexte courant, c\u2019est-\xe0-dire au formulaire parent. Pour pouvoir utiliser ce param\xe8tre, vous devez avoir pass\xe9 le s\xe9lecteur Object named.",(0,t.jsx)(n.br,{}),"\nLorsque le param\xe8tre ",(0,t.jsx)(n.em,{children:"nomSousFormulaire"})," est pass\xe9, la commande ",(0,t.jsx)(n.strong,{children:"OBJECT Get pointer"})," recherche dans un premier temps l\u2019objet sous-formulaire nomm\xe9 ",(0,t.jsx)(n.em,{children:"nomSousFormulaire"})," dans le formulaire courant, puis recherche \xe0 l\u2019int\xe9rieur de ce sous-formulaire un objet nomm\xe9 ",(0,t.jsx)(n.em,{children:"nomObjet"}),". Si cet objet est trouv\xe9, elle retourne un pointeur vers la variable de cet objet."]}),"\n",(0,t.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsxs)(n.p,{children:['Soit un formulaire "SF" utilis\xe9 deux fois comme sous-formulaire dans le m\xeame formulaire parent. Les objets sous-formulaires sont nomm\xe9s "SF1" et "SF2". Le formulaire "SF" contient un objet nomm\xe9 ',(0,t.jsx)(n.em,{children:"ValeurCourante"}),'. Dans l\u2019\xe9v\xe9nement "Sur chargement" de la m\xe9thode formulaire du formulaire parent, nous souhaitons initialiser l\u2019objet ',(0,t.jsx)(n.em,{children:"ValeurCourante"}),' de SF1 \xe0 "Janvier" et celui de SF2 "F\xe9vrier" :']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Ptr : Pointer\n\xa0$Ptr:=OBJECT Get pointer(Object named;"ValeurCourante";"SF1")\n\xa0$Ptr->:="Janvier"\n\xa0$Ptr:=OBJECT Get pointer(Object named;"ValeurCourante";"SF2")\n\xa0$Ptr->:="F\xe9vrier"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/focus-object",children:"Focus object"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-get-name",children:"OBJECT Get name"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/object-get-subform-container-value",children:"OBJECT Get subform container value"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Objets (Formulaires)"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"Objets de formulaire (Acc\xe8s)"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/self",children:"Self"})]}),"\n",(0,t.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1124"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let t={},o=s.createContext(t);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);