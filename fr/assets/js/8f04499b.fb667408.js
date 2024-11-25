"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54357"],{592135:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/listbox-get-row-font-style","title":"LISTBOX Get row font style","description":"LISTBOX Get row font style ( { ;} objet ; ligne* ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-row-font-style.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-row-font-style","permalink":"/docs/fr/commands/listbox-get-row-font-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-font-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-row-font-style","title":"LISTBOX Get row font style","slug":"/commands/listbox-get-row-font-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get row color as number","permalink":"/docs/fr/commands/listbox-get-row-color-as-number"},"next":{"title":"LISTBOX Get row height","permalink":"/docs/fr/commands/listbox-get-row-height"}}'),l=t("785893"),r=t("250065");let o={id:"listbox-get-row-font-style",title:"LISTBOX Get row font style",slug:"/commands/listbox-get-row-font-style",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX Get row font style"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objet"})," ; ",(0,l.jsx)(n.em,{children:"ligne"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Op\xe9rateur"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,l.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objet"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,l.jsx)(n.br,{}),"Variable (si * est omis)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ligne"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de ligne"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"R\xe9sultat"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Valeur de style"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne uniquement avec les list box de type tableau."]}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"LISTBOX Get row font style"})," retourne le style de police d\u2019une ligne ou d\u2019une cellule de la list box d\xe9sign\xe9e par les param\xe8tres ",(0,l.jsx)(n.em,{children:"objet"})," et ",(0,l.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,l.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable. Vous pouvez d\xe9signer comme param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," une list box ou une colonne de list box :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["si ",(0,l.jsx)(n.em,{children:"objet"})," d\xe9signe une list box, la commande retourne le style de la ligne"]}),"\n",(0,l.jsxs)(n.li,{children:["si ",(0,l.jsx)(n.em,{children:"objet"})," d\xe9signe une colonne, la commande retourne le style de la cellule"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Passez dans ",(0,l.jsx)(n.em,{children:"ligne"})," le num\xe9ro de la ligne dont vous souhaitez obtenir le style."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," La commande ne tient pas compte de l\u2019\xe9ventuel statut masqu\xe9/affich\xe9 des lignes de la list box."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Attention"}),", un style affect\xe9 \xe0 une ligne n\u2019est pas forc\xe9ment affich\xe9 dans toutes les cellules de ligne (cf. exemple). Si des valeurs de style contradictoires sont d\xe9finies via les propri\xe9t\xe9s de la list box ou de la colonne, un ordre de priorit\xe9 est appliqu\xe9. Pour plus d\u2019informations, reportez-vous au manuel ",(0,l.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Soit la list box suivante :"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:t(82323).Z+"",width:"361",height:"122"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0vStyl:=LISTBOX Get row font style(*;"Col5";3)\n\xa0vStyl2:=LISTBOX Get row font style(*;"List Box";3)\n\xa0\xa0\xa0\xa0\xa0// vStyl contient 1 (Gras)\n\xa0\xa0\xa0\xa0\xa0// vStyl2 contient 6 (Italique + Soulign\xe9)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},82323:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let l={},r=s.createContext(l);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);