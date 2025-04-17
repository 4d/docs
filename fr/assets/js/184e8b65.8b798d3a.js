"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49415"],{467908:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"commands-legacy/set-menu-item-icon","title":"SET MENU ITEM ICON","description":"SET MENU ITEM ICON ( menu ; ligneMenu ; refIc\xf4ne {; process} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-menu-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-icon","permalink":"/docs/fr/commands/set-menu-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-icon.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-menu-item-icon","title":"SET MENU ITEM ICON","slug":"/commands/set-menu-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM","permalink":"/docs/fr/commands/set-menu-item"},"next":{"title":"SET MENU ITEM MARK","permalink":"/docs/fr/commands/set-menu-item-mark"}}'),r=s("785893"),t=s("250065");let d={id:"set-menu-item-icon",title:"SET MENU ITEM ICON",slug:"/commands/set-menu-item-icon",displayed_sidebar:"docs"},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",code:"code",em:"em",filesystem:"filesystem",h2:"h2",li:"li",p:"p",pre:"pre",relativepathname:"relativepathname",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET MENU ITEM ICON"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"ligneMenu"})," ; ",(0,r.jsx)(n.em,{children:"refIc\xf4ne"})," {; ",(0,r.jsx)(n.em,{children:"process"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de menu ou Num\xe9ro de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ligneMenu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de ligne de menu ou -1 pour la derni\xe8re ligne ajout\xe9e au menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"refIc\xf4ne"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nom ou num\xe9ro de l\u2019image \xe0 associer \xe0 la ligne de menu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"process"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Num\xe9ro de process"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"SET MENU ITEM ICON"})," permet de modifier l\u2019ic\xf4ne associ\xe9e \xe0 la ligne de menu d\xe9sign\xe9e par les param\xe8tres ",(0,r.jsx)(n.em,{children:"menu"})," et ",(0,r.jsx)(n.em,{children:"ligneMenu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer dans ",(0,r.jsx)(n.em,{children:"menu"})," un identifiant unique de menu (",(0,r.jsx)(n.a,{href:"#",title:"R\xe9f\xe9rence unique de menu (16 caract\xe8res alphanum\xe9riques)",children:"RefMenu"}),") ou un num\xe9ro de menu. Si vous passez un identifiant unique, la commande s\u2019appliquera \xe0 toutes les instances du menu dans tous les process. Dans ce cas, le param\xe8tre ",(0,r.jsx)(n.em,{children:"process"})," est ignor\xe9 s\u2019il est pass\xe9. Si vous passez un num\xe9ro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez d\xe9signer un autre process, passez son num\xe9ro dans le param\xe8tre facultatif ",(0,r.jsx)(n.em,{children:"process"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez passer -1 dans ",(0,r.jsx)(n.em,{children:"ligneMenu"})," afin de d\xe9signer la derni\xe8re ligne ajout\xe9e au menu."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"refIc\xf4ne"})," l'image devant \xeatre utilis\xe9e comme ic\xf4ne. Vous pouvez utiliser une r\xe9f\xe9rence de fichier image ou (base de donn\xe9es binaires uniquement) une image issue de la biblioth\xe8que."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["R\xe9f\xe9rence de fichier image. Deux syntaxes sont prises en charge :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["path:",(0,r.jsx)(n.filesystem,{})]})," ",(0,r.jsx)(n.em,{children:"(recommand\xe9),"}),' par exemple "path:/RESOURCES/icon.png". Pour plus d\'informations, reportez-vous au pragraphe ',(0,r.jsx)(n.em,{children:"Chemins des filesystem"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["file:",(0,r.jsx)(n.relativepathname,{})]})," ",(0,r.jsx)(n.em,{children:"(obsol\xe8te),"}),' par exemple "file:icon.png". L\'image doit se trouver dans le dossier ',(0,r.jsx)(n.strong,{children:"Resources"})," de la base."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Image de la biblioth\xe8que (bases de donn\xe9es binaires uniquement) : vous pouvez passer soit le nom soit le num\xe9ro de l' image. Il est g\xe9n\xe9ralement pr\xe9f\xe9rable d\u2019utiliser le num\xe9ro plut\xf4t que le nom, car les num\xe9ros d\u2019images sont des identifiants uniques, ce qui n\u2019est pas le cas des noms."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Il est recomand\xe9 d'utiliser des chemins vers des fichiers image, \xe9tant donn\xe9 que la biblioth\xe8que d'images est obsol\xe8te et n'est plus support\xe9e dans les projets 4D. De plus, la syntaxe ",(0,r.jsxs)(n.em,{children:["file:",(0,r.jsx)(n.relativepathname,{})]})," est obsol\xe8te, il est donc recommand\xe9 d'utiliser le chemin ",(0,r.jsxs)(n.em,{children:["path:",(0,r.jsx)(n.filesystem,{children:"."})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Utilisation d'une image se trouvant dans le dossier Resources de la base :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET MENU ITEM ICON($RefMenu;2;"Path:/RESOURCES/french.lproj/spot.png")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/get-menu-item-icon",children:"GET MENU ITEM ICON"})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"984"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var i=s(667294);let r={},t=i.createContext(r);function d(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);