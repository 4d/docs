"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58347"],{955729:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/listbox-get-print-information","title":"LISTBOX GET PRINT INFORMATION","description":"LISTBOX GET PRINT INFORMATION ( { ;} objet ; s\xe9lecteur ; info* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-print-information.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-print-information","permalink":"/docs/fr/20-R7/commands/listbox-get-print-information","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-print-information.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-print-information","title":"LISTBOX GET PRINT INFORMATION","slug":"/commands/listbox-get-print-information","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET OBJECTS","permalink":"/docs/fr/20-R7/commands/listbox-get-objects"},"next":{"title":"LISTBOX Get property","permalink":"/docs/fr/20-R7/commands/listbox-get-property"}}'),t=s("785893"),r=s("250065");let l={id:"listbox-get-print-information",title:"LISTBOX GET PRINT INFORMATION",slug:"/commands/listbox-get-print-information",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX GET PRINT INFORMATION"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," ; ",(0,t.jsx)(n.em,{children:"info"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d\u2019objet (cha\xeene) Si omis, objet est une variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nom d'objet (si * sp\xe9cifi\xe9) ou Variable (si * omis)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"s\xe9lecteur"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Information \xe0 obtenir"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valeur courante"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/listbox-get-print-information",children:"LISTBOX GET PRINT INFORMATION"})," retourne des informations courantes relatives \xe0 l\u2019impression de l\u2019objet list box d\xe9sign\xe9 par les param\xe8tres ",(0,t.jsx)(n.em,{children:"objet"})," et ",(0,t.jsx)(n.em,{children:"*"}),". Cette commande permet de contr\xf4ler l\u2019impression du contenu de la list box."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d'objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,t.jsxs)(n.p,{children:["Cette commande doit \xeatre appel\xe9e dans le contexte de l\u2019impression d\u2019une list box via la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-object",children:"Print object"}),". Hors de ce contexte, elle ne retourne pas de valeurs significatives."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," une valeur indiquant l\u2019information \xe0 conna\xeetre et dans ",(0,t.jsx)(n.em,{children:"info"})," une variable de type num\xe9rique ou BLOB. Vous pouvez passer dans ",(0,t.jsx)(n.em,{children:"s\xe9lecteur"})," une des constantes suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"List box"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lk last printed row number"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsxs)(n.td,{children:["Retourne dans ",(0,t.jsx)(n.em,{children:"info"})," le num\xe9ro de la derni\xe8re ligne imprim\xe9e. Permet de conna\xeetre le num\xe9ro de la prochaine ligne \xe0 imprimer. Le num\xe9ro retourn\xe9 peut \xeatre sup\xe9rieur au nombre de lignes effectivement imprim\xe9es si la list box contient des lignes invisibles ou si la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})," a \xe9t\xe9 appel\xe9e. Par exemple, si les lignes 1, 18 et 20 ont \xe9t\xe9 imprim\xe9es, ",(0,t.jsx)(n.em,{children:"info"})," vaut 20."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lk printed height"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsxs)(n.td,{children:["Retourne dans ",(0,t.jsx)(n.em,{children:"info"}),' la hauteur en pixels de l\u2019objet effectivement imprim\xe9 (inclut les en-t\xeates, filets, etc.). Souvenez-vous que si le nombre de lignes \xe0 imprimer est inf\xe9rieur \xe0 la "capacit\xe9" de la list box, sa hauteur est automatiquement r\xe9duite.']})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lk printed rows"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["Retourne dans ",(0,t.jsx)(n.em,{children:"info"})," le nombre de lignes effectivement imprim\xe9es lors du dernier appel \xe0 la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/20-R7/commands/print-object",children:"Print object"}),". Ce nombre inclut les \xe9ventuelles lignes de ruptures ajout\xe9es dans le cadre d\u2019une list box hi\xe9rarchique. Par exemple, ",(0,t.jsx)(n.em,{children:"info"})," vaut 10 si la list box contient 20 lignes et que les lignes impaires ont \xe9t\xe9 masqu\xe9es."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lk printing is over"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:["Retourne dans ",(0,t.jsx)(n.em,{children:"info"})," un bool\xe9en indiquant si la derni\xe8re ligne (visible) de la list box a \xe9t\xe9 effectivement imprim\xe9e. Vrai = la ligne a \xe9t\xe9 imprim\xe9e, Faux sinon."]})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d\u2019informations sur les principes d\u2019impression des list box, reportez-vous au paragraphe ",(0,t.jsx)(n.em,{children:"Gestion des impressions"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Impression jusqu\u2019\xe0 ce que toutes les lignes soient imprim\xe9es :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN PRINTING JOB\n\xa0FORM LOAD("SalesForm")\n\xa0\n\xa0$Over:=False\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"malistbox")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"malistbox";lk printing is over;$Over)\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0Until($Over)\n\xa0\n\xa0CLOSE PRINTING JOB\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Impression d\u2019au moins 500 lignes de la list box, sachant que certaines lignes sont masqu\xe9es :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$GlobalPrinted:=0\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"malistbox")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"malistbox";lk printed rows;$Printed)\n\xa0\xa0\xa0\xa0$GlobalPrinted:=$GlobalPrinted+$Printed\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0Until($GlobalPrinted>=500)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1110"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var i=s(667294);let t={},r=i.createContext(t);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);