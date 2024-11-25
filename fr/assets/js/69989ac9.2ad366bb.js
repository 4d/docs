"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89175"],{877809:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>o,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-set-headers-height","title":"LISTBOX SET HEADERS HEIGHT","description":"LISTBOX SET HEADERS HEIGHT ( { ;} objet ; hauteur {; unit\xe9*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-headers-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-headers-height","permalink":"/docs/fr/commands/listbox-set-headers-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-headers-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-headers-height","title":"LISTBOX SET HEADERS HEIGHT","slug":"/commands/listbox-set-headers-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET GRID COLOR","permalink":"/docs/fr/commands/listbox-set-grid-color"},"next":{"title":"LISTBOX SET HIERARCHY","permalink":"/docs/fr/commands/listbox-set-hierarchy"}}'),i=s("785893"),r=s("250065");let d={id:"listbox-set-headers-height",title:"LISTBOX SET HEADERS HEIGHT",slug:"/commands/listbox-set-headers-height",displayed_sidebar:"docs"},l=void 0,a={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SET HEADERS HEIGHT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objet"})," ; ",(0,i.jsx)(n.em,{children:"hauteur"})," {; ",(0,i.jsx)(n.em,{children:"unit\xe9"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Param\xe8tre"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Op\xe9rateur"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,i.jsx)(n.br,{}),"Si omis, objet est une variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objet"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,i.jsx)(n.br,{}),"Variable (si * est omis"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hauteur"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Hauteur de la ligne"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"unit\xe9"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Unit\xe9 de la valeur de hauteur : ",(0,i.jsx)(n.br,{}),"0 ou omis = pixels, 1 = lignes"]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["La commande ",(0,i.jsx)(n.strong,{children:"LISTBOX SET HEADERS HEIGHT"})," permet de modifier par programmation la hauteur de la ligne d\u2019en-t\xeate de la list box d\xe9sign\xe9e par les param\xe8tres ",(0,i.jsx)(n.em,{children:"objet"})," et ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,i.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,i.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez d\xe9signer indiff\xe9remment la list box ou tout en-t\xeate de la list box."}),"\n",(0,i.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"hauteur"})," la hauteur \xe0 d\xe9finir. Par d\xe9faut, si vous omettez le param\xe8tre ",(0,i.jsx)(n.em,{children:"unit\xe9"}),", cette hauteur est exprim\xe9e en pixels. Pour modifier l\u2019unit\xe9, vous pouvez passer dans le param\xe8tre ",(0,i.jsx)(n.em,{children:"unit\xe9"})," l\u2019une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,i.jsx)(n.em,{children:"List box"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Valeur"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk lines"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"La hauteur d\xe9signe un nombre de lignes. 4D calcule la hauteur d\u2019une ligne en fonction de la police."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk pixels"}),(0,i.jsx)(n.td,{children:"Entier long"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"La hauteur est un nombre de pixels (d\xe9faut)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Les en-t\xeates doivent respecter une hauteur minimale, d\xe9finie par le syst\xe8me d\u2019exploitation. Cette hauteur est de 24 pixels sous Windows et 17 pixels sous Mac OS. Si vous passez une hauteur inf\xe9rieure, la hauteur minimale est appliqu\xe9e."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note :"})," Pour plus d\u2019informations sur le calcul des hauteurs de lignes, reportez-vous au manuel ",(0,i.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-headers-height",children:"LISTBOX Get headers height"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);