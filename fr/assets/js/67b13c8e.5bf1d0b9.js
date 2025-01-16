"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5419"],{481846:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"commands-legacy/is-waiting-mouse-up","title":"Is waiting mouse up","description":"Is waiting mouse up  : Boolean","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/is-waiting-mouse-up.md","sourceDirName":"commands-legacy","slug":"/commands/is-waiting-mouse-up","permalink":"/docs/fr/commands/is-waiting-mouse-up","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-waiting-mouse-up.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-waiting-mouse-up","title":"Is waiting mouse up","slug":"/commands/is-waiting-mouse-up","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"In header","permalink":"/docs/fr/commands/in-header"},"next":{"title":"Outside call","permalink":"/docs/fr/commands/outside-call"}}'),s=t("785893"),o=t("250065");let r={id:"is-waiting-mouse-up",title:"Is waiting mouse up",slug:"/commands/is-waiting-mouse-up",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is waiting mouse up"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Vrai si l'objet est en attente d'un rel\xe2chement souris, Faux sinon"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Is waiting mouse up"})," retourne ",(0,s.jsx)(n.strong,{children:"Vrai"})," si l'objet courant a \xe9t\xe9 cliqu\xe9 et que le bouton de la souris n'a pas \xe9t\xe9 rel\xe2ch\xe9, alors que la fen\xeatre contenant l'objet a le focus. Sinon la commande retourne ",(0,s.jsx)(n.strong,{children:"Faux"}),", en particulier si la fen\xeatre contenant l'objet a perdu le focus avant que le bouton soit rel\xe2ch\xe9."]}),"\n",(0,s.jsxs)(n.p,{children:["Cette commande doit \xeatre appel\xe9e dans le contexte de l'objet courant. Elle est destin\xe9e \xe0 \xeatre utilis\xe9e conjointement avec l'\xe9v\xe9nement formulaire On Mouse Up, disponible pour les champs et variables Image. Elle permet de g\xe9rer par programmation les cas o\xf9 l'utilisateur clique et commence \xe0 effectuer un glisser dans une zone image (champ ou variable), et que cette action est interrompue par un \xe9v\xe9nement ext\xe9rieur, comme par exemple l'affichage d'une bo\xeete de dialogue d'alerte. Dans ce cas, l'\xe9tat interne de l'objet peut \xeatre suspendu ind\xe9finiment car il attend l'\xe9v\xe9nement On Mouse Up qui n'arrive jamais. Pour \xe9viter ce probl\xe8me, vous devez prot\xe9ger votre code de d\xe9placement de souris \xe0 l'aide de la commande ",(0,s.jsx)(n.strong,{children:"Is waiting mouse up"})," qui vous assure de son ex\xe9cution dans un contexte valide."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Le code suivant peut \xeatre utilis\xe9 pour g\xe9rer le suivi de la souris dans un objet image :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//M\xe9thode objet de l'objet image\n\xa0var vLtracking : Integer\xa0//drapeau du mode Suivi\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Attente rel\xe2chement clic)\xa0// le bouton de la souris n'a pas \xe9t\xe9 rel\xe2ch\xe9\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=1\xa0//nous sommes en mode Suivi\n\xa0\xa0//... Ecrivez ici le code d'initialisation pour la fonction de Suivi\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=On Mouse Move)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(vLtracking=1)\xa0//nous sommes en mode Suivi\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Not(Is waiting mouse up))\xa0// on n'aura jamais le rel\xe2chement de la souris\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=0\xa0// on stoppe le mode Suivi\n\xa0\xa0//... Ecrivez ici le code pour le traitement ou l'annulation de l'action de suivi\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\xa0//l'objet est toujours en attente du rel\xe2chement de la souris\n\xa0\xa0//... Ecrivez ici le code pour le suivi\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0:(Form event code=Sur rel\xe2chement bouton)\xa0// le bouton de la souris a \xe9t\xe9 rel\xe2ch\xe9\n\xa0\xa0//... Ecrivez ici le code pour le suivi du rel\xe2chement souris\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0vLtracking:=0\xa0//Fin du suivi\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/commands/form-event-code",children:"Form event code"})}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1422"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(667294);let s={},o=i.createContext(s);function r(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);