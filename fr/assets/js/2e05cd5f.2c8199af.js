"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28682"],{248842:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/listbox-set-row-color","title":"LISTBOX SET ROW COLOR","description":"LISTBOX SET ROW COLOR ( { ;} objet ; ligne ; couleur {; typeCouleur*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-row-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-color","permalink":"/docs/fr/commands/listbox-set-row-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-color.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-row-color","title":"LISTBOX SET ROW COLOR","slug":"/commands/listbox-set-row-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET PROPERTY","permalink":"/docs/fr/commands/listbox-set-property"},"next":{"title":"LISTBOX SET ROW FONT STYLE","permalink":"/docs/fr/commands/listbox-set-row-font-style"}}'),l=s("785893"),o=s("250065");let t={id:"listbox-set-row-color",title:"LISTBOX SET ROW COLOR",slug:"/commands/listbox-set-row-color",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX SET ROW COLOR"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objet"})," ; ",(0,l.jsx)(n.em,{children:"ligne"})," ; ",(0,l.jsx)(n.em,{children:"couleur"})," {; ",(0,l.jsx)(n.em,{children:"typeCouleur"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Op\xe9rateur"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objet"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ligne"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de ligne"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"couleur"}),(0,l.jsx)(n.td,{children:"Text, Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Valeur de couleur RVB"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"typeCouleur"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Listbox couleur de police (d\xe9faut) ou Listbox couleur de fond"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne uniquement avec les list box de type tableau."]}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"LISTBOX SET ROW COLOR"})," vous permet de d\xe9finir une couleur pour une ligne ou une cellule de la list box tableau d\xe9sign\xe9e par les param\xe8tres ",(0,l.jsx)(n.em,{children:"objet"})," et ",(0,l.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,l.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez d\xe9signer comme param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," une list box ou une colonne de list box :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["si ",(0,l.jsx)(n.em,{children:"objet"})," d\xe9signe une list box, la commande s\u2019applique \xe0 la ligne"]}),"\n",(0,l.jsxs)(n.li,{children:["si ",(0,l.jsx)(n.em,{children:"objet"})," d\xe9signe une colonne, la commande s\u2019applique \xe0 la cellule situ\xe9e \xe0 l\u2019intersection colonne/ligne"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Passez dans ",(0,l.jsx)(n.em,{children:"ligne"})," le num\xe9ro de la ligne \xe0 laquelle la nouvelle couleur doit \xeatre appliqu\xe9e."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," La commande ne tient pas compte de l\u2019\xe9ventuel statut masqu\xe9/affich\xe9 des lignes de la list box."]}),"\n",(0,l.jsxs)(n.p,{children:["Passez dans ",(0,l.jsx)(n.em,{children:"couleur"})," une valeur de couleur RVB. Pour plus d\u2019informations sur les couleurs RVB, reportez-vous \xe0 la description de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),". Si vous souhaitez que la ligne h\xe9rite du param\xe9trage de couleur d\xe9fini au niveau sup\xe9rieur, passez la constante lk inherited dans ",(0,l.jsx)(n.em,{children:"couleur"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Passez la constante lk background color ou lk font color dans le param\xe8tre ",(0,l.jsx)(n.em,{children:"typeCouleur"})," selon que vous souhaitez appliquer la couleur en tant que couleur de fond ou couleur de police de la ligne. Si vous omettez ce param\xe8tre, la couleur est appliqu\xe9e en tant que couleur de police."]}),"\n",(0,l.jsxs)(n.p,{children:["Cette commande modifie les valeurs pr\xe9sentes dans les tableaux de couleurs \xe9ventuellement d\xe9finis pour la colonne ou la listbox. Si ces tableaux ne sont pas d\xe9j\xe0 d\xe9finis, la commande cr\xe9e des tableaux dynamiques auxquels vous pourrez acc\xe9der \xe0 l\u2019aide de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-array",children:"LISTBOX Get array"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si des valeurs de couleur contradictoires sont d\xe9finies via les propri\xe9t\xe9s de la list box ou de la colonne, un ordre de priorit\xe9 est appliqu\xe9. Pour plus d\u2019informations, reportez-vous au manuel ",(0,l.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Dans une list box tableau, on souhaite d\xe9finir des param\xe9trages de couleur pour une ligne et pour une cellule de cette ligne :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0\xa0\xa0\xa0// D\xe9finition de la couleur de police pour la cellule\xa0\n\xa0LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")\n\xa0\n\xa0\xa0\xa0\xa0\xa0// D\xe9finition de la couleur de fond et de police pour la ligne 3\n\xa0LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)\n\xa0LISTBOX SET ROW COLOR(*;"List Box";3;"blue")\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(486727).Z+"",width:"363",height:"122"})}),"\n",(0,l.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"List box"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-row-color",children:"LISTBOX Get row color"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-row-color-as-number",children:"LISTBOX Get row color as number"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})]}),"\n",(0,l.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,l.jsx)(n.td,{children:"1270"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},486727:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let l={},o=r.createContext(l);function t(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);