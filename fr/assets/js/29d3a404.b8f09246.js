"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25795"],{969972:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/object-get-subform-container-size","title":"OBJECT GET SUBFORM CONTAINER SIZE","description":"OBJECT GET SUBFORM CONTAINER SIZE ( largeur ; hauteur )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-subform-container-size.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-subform-container-size","permalink":"/docs/fr/20-R7/commands/object-get-subform-container-size","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-subform-container-size.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-subform-container-size","title":"OBJECT GET SUBFORM CONTAINER SIZE","slug":"/commands/object-get-subform-container-size","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SUBFORM","permalink":"/docs/fr/20-R7/commands/object-get-subform"},"next":{"title":"OBJECT Get subform container value","permalink":"/docs/fr/20-R7/commands/object-get-subform-container-value"}}'),s=r("785893"),o=r("250065");let i={id:"object-get-subform-container-size",title:"OBJECT GET SUBFORM CONTAINER SIZE",slug:"/commands/object-get-subform-container-size",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT GET SUBFORM CONTAINER SIZE"})," ( ",(0,s.jsx)(n.em,{children:"largeur"})," ; ",(0,s.jsx)(n.em,{children:"hauteur"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"largeur"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Largeur de l\u2019objet sous-formulaire"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hauteur"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Hauteur de l\u2019objet sous-formulaire"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"OBJECT GET SUBFORM CONTAINER SIZE"})," retourne la ",(0,s.jsx)(n.em,{children:"largeur"})," et la ",(0,s.jsx)(n.em,{children:"hauteur"}),' (en pixels) d\u2019un objet sous-formulaire "courant", affich\xe9 dans le formulaire parent.']}),"\n",(0,s.jsxs)(n.p,{children:["Cette commande doit \xeatre appel\xe9e depuis la m\xe9thode d\u2019un formulaire utilis\xe9 en sous-formulaire et affich\xe9 dans un objet sous-formulaire. Elle retourne la ",(0,s.jsx)(n.em,{children:"largeur"})," et la ",(0,s.jsx)(n.em,{children:"hauteur"})," de l\u2019objet contenant le sous-formulaire."]}),"\n",(0,s.jsx)(n.p,{children:"Cette commande est utile par exemple dans le cas o\xf9 des objets du sous-formulaire doivent \xeatre d\xe9plac\xe9s et/ou redimensionn\xe9s en fonction des caract\xe9ristiques de l\u2019objet sous-formulaire lui-m\xeame. Dans l\u2019\xe9v\xe9nement formulaire On Load ou On Resize, le sous-formulaire peut appeler cette commande pour calculer la place dont il dispose afin d\u2019afficher son contenu."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si la commande est appel\xe9e depuis un formulaire qui n\u2019est pas en cours d\u2019utilisation en tant que sous-formulaire, elle retourne la taille courante de la fen\xeatre du formulaire."}),"\n",(0,s.jsxs)(n.li,{children:["Si la commande est appel\xe9e en-dehors du contexte de l\u2019affichage l\u2019\xe9cran (par exemple lors de l\u2019impression du formulaire), elle retourne 0 dans ",(0,s.jsx)(n.em,{children:"largeur"})," et ",(0,s.jsx)(n.em,{children:"hauteur"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-get-subform",children:"OBJECT GET SUBFORM"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-set-subform",children:"OBJECT SET SUBFORM"})]}),"\n",(0,s.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,s.jsx)(n.td,{children:"1148"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);