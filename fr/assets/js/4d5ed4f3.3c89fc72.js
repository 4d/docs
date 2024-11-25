"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36071"],{72827:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>p,assets:()=>l,toc:()=>i,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/set-picture-to-pasteboard","title":"SET PICTURE TO PASTEBOARD","description":"SET PICTURE TO PASTEBOARD ( image )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-picture-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/set-picture-to-pasteboard","permalink":"/docs/fr/commands/set-picture-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-picture-to-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-picture-to-pasteboard","title":"SET PICTURE TO PASTEBOARD","slug":"/commands/set-picture-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET FILE TO PASTEBOARD","permalink":"/docs/fr/commands/set-file-to-pasteboard"},"next":{"title":"SET TEXT TO PASTEBOARD","permalink":"/docs/fr/commands/set-text-to-pasteboard"}}'),r=n("785893"),a=n("250065");let o={id:"set-picture-to-pasteboard",title:"SET PICTURE TO PASTEBOARD",slug:"/commands/set-picture-to-pasteboard",displayed_sidebar:"docs"},d=void 0,l={},i=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET PICTURE TO PASTEBOARD"})," ( ",(0,r.jsx)(s.em,{children:"image"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"image"}),(0,r.jsx)(s.td,{children:"Picture"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Image \xe0 placer dans le conteneur de donn\xe9es"})]})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"SET PICTURE TO PASTEBOARD"})," place dans le conteneur de donn\xe9es une copie de l'image que vous avez pass\xe9e dans ",(0,r.jsx)(s.em,{children:"image"}),". Les donn\xe9es \xe9ventuellement pr\xe9sentes dans le conteneur sont pr\xe9alablement effac\xe9es."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note :"})," Dans le cadre d'une op\xe9ration de copier/coller, le conteneur de donn\xe9es correspond au Presse-papiers."]}),"\n",(0,r.jsx)(s.p,{children:"L'image est transport\xe9e dans son format natif (jpeg, tif, png, etc.)."}),"\n",(0,r.jsxs)(s.p,{children:["Apr\xe8s avoir plac\xe9 l'image dans le conteneur, vous pouvez la r\xe9cup\xe9rer \xe0 l'aide de la commande ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"})," ou par exemple ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-pasteboard-data",children:"GET PASTEBOARD DATA"}),'("com.4d.private.picture.gif";...).']}),"\n",(0,r.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsxs)(s.p,{children:["Dans une fen\xeatre flottante, vous affichez un formulaire contenant le tableau ",(0,r.jsx)(s.em,{children:"tabNomEmploy\xe9s"})," qui liste les noms des employ\xe9s stock\xe9s dans la table [Employ\xe9s]. Chaque fois que vous cliquez sur un nom, vous voulez copier la photographie de l'employ\xe9 dans le Presse-papiers. Dans la m\xe9thode objet du tableau, vous \xe9crivez :"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0If(tabNomEmploy\xe9s#0)\n\xa0\xa0\xa0\xa0QUERY([Employ\xe9s];[Employ\xe9s]Nom=tabNomEmploy\xe9s{tabNomEmploy\xe9s})\n\xa0\xa0\xa0\xa0If(Picture size([Employ\xe9s]Photo)>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PICTURE TO PASTEBOARD([Employ\xe9s]Photo)\xa0// Copier la photo de l'employ\xe9e\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR PASTEBOARD\xa0// Aucune photo trouv\xe9e ou aucun enregistrement trouv\xe9\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,r.jsx)(s.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(s.p,{children:"Si une copie de l'image est correctement coll\xe9e dans le conteneur, la variable syst\xe8me OK prend la valeur 1. S'il n'y a pas assez de m\xe9moire pour coller l'image dans le Presse-papiers, la variable syst\xe8me OK prend la valeur 0, mais aucune erreur n'est g\xe9n\xe9r\xe9e."}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/append-data-to-pasteboard",children:"APPEND DATA TO PASTEBOARD"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/get-picture-from-pasteboard",children:"GET PICTURE FROM PASTEBOARD"})]})]})}function p(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var t=n(667294);let r={},a=t.createContext(r);function o(e){let s=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);