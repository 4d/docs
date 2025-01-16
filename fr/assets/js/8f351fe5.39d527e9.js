"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80766"],{802595:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-picture-from-library","title":"GET PICTURE FROM LIBRARY","description":"GET PICTURE FROM LIBRARY ( refImage | nomImage ; image )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-picture-from-library.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-from-library","permalink":"/docs/fr/20-R7/commands/get-picture-from-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-from-library.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-picture-from-library","title":"GET PICTURE FROM LIBRARY","slug":"/commands/get-picture-from-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE FORMATS","permalink":"/docs/fr/20-R7/commands/get-picture-formats"},"next":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/fr/20-R7/commands/get-picture-keywords"}}'),i=n("785893"),t=n("250065");let l={id:"get-picture-from-library",title:"GET PICTURE FROM LIBRARY",slug:"/commands/get-picture-from-library",displayed_sidebar:"docs"},d=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"GET PICTURE FROM LIBRARY"})," ( refImage | nomImage ; ",(0,i.jsx)(r.em,{children:"image"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Param\xe8tre"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"refImage | nomImage"}),(0,i.jsx)(r.td,{children:"Entier long, Cha\xeene"}),(0,i.jsx)(r.td,{children:"\u2192"}),(0,i.jsx)(r.td,{children:"Num\xe9ro de r\xe9f\xe9rence ou Nom d'une image de la biblioth\xe8que d\u2019images"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"image"}),(0,i.jsx)(r.td,{children:"Picture"}),(0,i.jsx)(r.td,{children:"\u2190"}),(0,i.jsx)(r.td,{children:"Image de la biblioth\xe8que d'images"})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["La commande ",(0,i.jsx)(r.strong,{children:"GET PICTURE FROM LIBRARY"})," retourne dans ",(0,i.jsx)(r.em,{children:"image"})," l'image de la biblioth\xe8que dont vous avez pass\xe9 le num\xe9ro de r\xe9f\xe9rence dans ",(0,i.jsx)(r.em,{children:"refImage"})," ou le nom dans ",(0,i.jsx)(r.em,{children:"nomImage"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["S'il n'existe pas d'image de ce num\xe9ro ou de ce nom dans la biblioth\xe8que d'images, ",(0,i.jsx)(r.strong,{children:"GET PICTURE FROM LIBRARY"})," ne modifie pas le param\xe8tre ",(0,i.jsx)(r.em,{children:"image"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,i.jsxs)(r.p,{children:["L\u2019exemple suivant retourne dans la variable ",(0,i.jsx)(r.em,{children:"vgMonImage"})," l\u2019image dont la r\xe9f\xe9rence est stock\xe9e dans la variable locale ",(0,i.jsx)(r.em,{children:"$vlRefImage"})," :"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:"\xa0GET PICTURE FROM LIBRARY($vlRefImage;vgMonImage)\n"})}),"\n",(0,i.jsx)(r.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,i.jsxs)(r.p,{children:["L\u2019exemple suivant retourne dans la variable ",(0,i.jsx)(r.em,{children:"$DDcom_Prot_MonImage"}),' l\u2019image nomm\xe9e "DDcom_Prot_Bouton1" stock\xe9e dans la Biblioth\xe8que d\u2019images :']}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-4d",children:'\xa0GET PICTURE FROM LIBRARY("DDcom_Prot_Bouton1";$DDcom_Prot_MonImage)\n'})}),"\n",(0,i.jsx)(r.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,i.jsxs)(r.p,{children:["Reportez-vous au troisi\xe8me exemple de la commande ",(0,i.jsx)(r.a,{href:"/docs/fr/20-R7/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,i.jsx)(r.p,{children:"La variable syst\xe8me OK prend la valeur 1 si l\u2019image existe dans la biblioth\xe8que d\u2019images. Sinon, elle prend la valeur z\xe9ro."}),"\n",(0,i.jsx)(r.h4,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,i.jsx)(r.p,{children:"S'il n'y a pas assez de m\xe9moire pour retourner l\u2019image, l'erreur \u2013108 est g\xe9n\xe9r\xe9e. Vous pouvez intercepter cette erreur avec une m\xe9thode de gestion d'erreurs."}),"\n",(0,i.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/fr/20-R7/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/20-R7/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"}),(0,i.jsx)(r.br,{}),"\n",(0,i.jsx)(r.a,{href:"/docs/fr/20-R7/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]}),"\n",(0,i.jsx)(r.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{}),(0,i.jsx)(r.th,{})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Num\xe9ro de commande"}),(0,i.jsx)(r.td,{children:"565"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Thread safe"}),(0,i.jsx)(r.td,{children:"\u2717"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Modifie les variables"}),(0,i.jsx)(r.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return l}});var s=n(667294);let i={},t=s.createContext(i);function l(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);