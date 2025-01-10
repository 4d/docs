"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3830"],{647625:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/form-set-entry-order","title":"FORM SET ENTRY ORDER","description":"FORM SET ENTRY ORDER ( nomsObjets {; numPage} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/form-set-entry-order.md","sourceDirName":"commands-legacy","slug":"/commands/form-set-entry-order","permalink":"/docs/fr/commands/form-set-entry-order","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-set-entry-order.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-set-entry-order","title":"FORM SET ENTRY ORDER","slug":"/commands/form-set-entry-order","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM SCREENSHOT","permalink":"/docs/fr/commands/form-screenshot"},"next":{"title":"FORM SET HORIZONTAL RESIZING","permalink":"/docs/fr/commands/form-set-horizontal-resizing"}}'),i=r("785893"),t=r("250065");let o={id:"form-set-entry-order",title:"FORM SET ENTRY ORDER",slug:"/commands/form-set-entry-order",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"FORM SET ENTRY ORDER"})," ( ",(0,i.jsx)(s.em,{children:"nomsObjets"})," {; ",(0,i.jsx)(s.em,{children:"numPage"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Param\xe8tre"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"nomsObjets"}),(0,i.jsx)(s.td,{children:"Text array"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Tableau des noms d'objets dans l'ordre de saisie souhait\xe9"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"numPage"}),(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Num\xe9ro de la page dont vous voulez fixer l'ordre de saisie (page courante si omis)"})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["La commande ",(0,i.jsx)(s.strong,{children:"FORM SET ENTRY ORDER"})," permet de fixer dynamiquement l'ordre de saisie du formulaire courant pour le process en cours, bas\xe9 sur le tableau ",(0,i.jsx)(s.em,{children:"nomsObjets"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Passez dans ",(0,i.jsx)(s.em,{children:"nomsObjets"})," un tableau contenant les noms des objets du formulaire \xe0 inclure dans l'ordre de saisie. L'ordre des objets dans le tableau d\xe9finit l'ordre de saisie. Tout objet valide du formulaire sur le formulaire courant peut \xeatre list\xe9. Un objet est valide si :"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["il a la propri\xe9t\xe9 ",(0,i.jsx)(s.strong,{children:"focusable"})," (",(0,i.jsx)(s.strong,{children:"Note :"})," La commande ignore la propri\xe9t\xe9 ",(0,i.jsx)(s.strong,{children:"Tabulable"})," des objets),"]}),"\n",(0,i.jsx)(s.li,{children:"il existe sur le formulaire (son nom est d\xe9fini),"}),"\n",(0,i.jsxs)(s.li,{children:["il est utilis\xe9 sur la page courante (ou sur la page ",(0,i.jsx)(s.em,{children:"numPage"}),", voir ci-dessous). Gardez \xe0 l'esprit qu'une page de formulaire inclut les objets de la page 0 et les objets du formulaire h\xe9rit\xe9."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Si un objet invalide est d\xe9tect\xe9 \xe0 l'utilisation, il est simplement ignor\xe9 et 4D essaiera d'utiliser l'objet valide suivant dans le tableau ",(0,i.jsx)(s.em,{children:"nomsObjets"}),". Vous pouvez connaitre l'ordre de saisie actuel de la page courante (bas\xe9 sur les objets valides) en utilisant la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/form-get-entry-order",children:"FORM GET ENTRY ORDER"})," avec le param\xe8tre *."]}),"\n",(0,i.jsxs)(s.p,{children:["Optionnellement, vous pouvez passer le ",(0,i.jsx)(s.em,{children:"numPage"})," de la page pour laquelle vous fixez l'ordre de saisie. Si omis, la commande s'applique \xe0 la page courante."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notes :"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["L'ordre de saisie d'un sous-formulaire est d\xe9fini dans le sous-formulaire lui-m\xeame. Vous devez appeler la commande ",(0,i.jsx)(s.strong,{children:"FORM SET ENTRY ORDER"})," dans le contexte du sous-formulaire."]}),"\n",(0,i.jsxs)(s.li,{children:["Cette commande ne d\xe9finit pas le premier objet cibl\xe9 sur le formulaire \xe0 l'utilisation. Si vous souhaitez fixer un premier objet dans l'ordre de saisie, vous devez utiliser la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/goto-object",children:"GOTO OBJECT"})," dans l'\xe9v\xe9nement formulaire Sur chargement. Si vous utilisez la commande ",(0,i.jsx)(s.a,{href:"/docs/fr/commands/object-duplicate",children:"OBJECT DUPLICATE"}),", vous pouvez fixer l'objet dupliqu\xe9 en premi\xe8re position en passant la constante Objet Premier ordre saisie dans le param\xe8tre ",(0,i.jsx)(s.em,{children:"reli\xe9A"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"A propos de l'ordre de saisie des donn\xe9es"}),(0,i.jsx)(s.br,{}),"\nL'ordre de saisie des donn\xe9es est l'ordre dans lequel les champs, les sous-formulaires et tous les autres objets actifs, sont s\xe9lectionn\xe9s quand l'utilisateur utilise la touche ",(0,i.jsx)(s.strong,{children:"Tabulation"})," ou le Retour chariot sur le formulaire. L'ordre de saisie invers\xe9 est \xe9galement disponible en appuyant sur les touches ",(0,i.jsx)(s.strong,{children:"Maj+Tabulation"})," ou ",(0,i.jsx)(s.strong,{children:"Maj+Retour chariot"}),". L'ordre de saisie peut \xeatre d\xe9fini par d\xe9faut ou modifi\xe9 dans l'Editeur de formulaire. Pour plus d'informations, r\xe9f\xe9rez-vous \xe0 la section ",(0,i.jsx)(s.em,{children:"Modifier l'ordre de saisie"})," dans le manuel ",(0,i.jsx)(s.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(s.p,{children:"Vous souhaitez fixer l'ordre de saisie des objets du formulaire en vous basant sur leur nom :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY TEXT(tabNames;0)\n\xa0\n\xa0FORM GET OBJECTS(tabNames;Form current page+Form inherited)\xa0//on r\xe9cup\xe8re les noms des objets du formulaire\n\xa0SORT ARRAY(tabNames;>)\xa0//on trie les noms par ordre alphab\xe9tique ascendant\n\xa0FORM SET ENTRY ORDER(tabNames)\xa0//on utilise cet ordre alphab\xe9tique comme ordre de saisie\n\xa0\xa0//les objets non-focusables sont ignor\xe9s\n"})}),"\n",(0,i.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/docs/fr/commands/form-get-entry-order",children:"FORM GET ENTRY ORDER"})}),"\n",(0,i.jsx)(s.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(s.td,{children:"1468"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Thread safe"}),(0,i.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return d},a:function(){return o}});var n=r(667294);let i={},t=n.createContext(i);function o(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);