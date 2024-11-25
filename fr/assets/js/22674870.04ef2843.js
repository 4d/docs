"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54220"],{988300:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-set-row-font-style","title":"LISTBOX SET ROW FONT STYLE","description":"LISTBOX SET ROW FONT STYLE ( { ;} objet ; ligne ; style* )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-row-font-style.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-font-style","permalink":"/docs/fr/commands/listbox-set-row-font-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-font-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-row-font-style","title":"LISTBOX SET ROW FONT STYLE","slug":"/commands/listbox-set-row-font-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ROW COLOR","permalink":"/docs/fr/commands/listbox-set-row-color"},"next":{"title":"LISTBOX SET ROW HEIGHT","permalink":"/docs/fr/commands/listbox-set-row-height"}}'),l=s("785893"),i=s("250065");let d={id:"listbox-set-row-font-style",title:"LISTBOX SET ROW FONT STYLE",slug:"/commands/listbox-set-row-font-style",displayed_sidebar:"docs"},r=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX SET ROW FONT STYLE"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objet"})," ; ",(0,l.jsx)(n.em,{children:"ligne"})," ; ",(0,l.jsx)(n.em,{children:"style"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Op\xe9rateur"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) Si omis, objet est une variable"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objet"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nom d'objet (si * est sp\xe9cifi\xe9) ou Variable (si * est omis)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ligne"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Num\xe9ro de ligne"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"style"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Style de police"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Cette commande fonctionne uniquement avec les list box de type tableau."]}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"LISTBOX SET ROW FONT STYLE"})," vous permet de d\xe9finir un style de police pour une ligne ou une cellule de la list box tableau d\xe9sign\xe9e par les param\xe8tres ",(0,l.jsx)(n.em,{children:"objet"})," et ",(0,l.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,l.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas ce param\xe8tre, vous indiquez que le param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," est une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de variable."]}),"\n",(0,l.jsxs)(n.p,{children:["Vous pouvez d\xe9signer comme param\xe8tre ",(0,l.jsx)(n.em,{children:"objet"})," une list box ou une colonne de list box :"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["si ",(0,l.jsx)(n.em,{children:"objet"})," d\xe9signe une list box, la commande s\u2019applique \xe0 la ligne"]}),"\n",(0,l.jsxs)(n.li,{children:["si ",(0,l.jsx)(n.em,{children:"objet"})," d\xe9signe une colonne, la commande s\u2019applique \xe0 la cellule situ\xe9e \xe0 l\u2019intersection colonne/ligne"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Passez dans ",(0,l.jsx)(n.em,{children:"ligne"})," le num\xe9ro de la ligne \xe0 laquelle le nouveau style doit \xeatre appliqu\xe9."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," La commande ne tient pas compte de l\u2019\xe9ventuel statut masqu\xe9/affich\xe9 des lignes de la list box."]}),"\n",(0,l.jsxs)(n.p,{children:["Passez dans ",(0,l.jsx)(n.em,{children:"style"})," une valeur de style. Vous devez utiliser une ou une combinaison de constante(s) du th\xe8me ",(0,l.jsx)(n.em,{children:"Styles de caract\xe8res"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constante"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Valeur"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Bold"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"1"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Italic"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"2"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Plain"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"0"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Underline"}),(0,l.jsx)(n.td,{children:"Entier long"}),(0,l.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Si un tableau de styles de police a \xe9t\xe9 associ\xe9 \xe0 la list box ou \xe0 la colonne, seul l\u2019\xe9l\xe9ment correspondant \xe0 la ligne sera modifi\xe9. Autrement dit, dans ce cas, l\u2019ex\xe9cution de la commande produit le m\xeame effet que la modification d\u2019un \xe9l\xe9ment du tableau de styles de police.",(0,l.jsx)(n.br,{}),"\nSi aucun tableau de styles de police n\u2019a \xe9t\xe9 associ\xe9 \xe0 la list box ou \xe0 la colonne, il est cr\xe9\xe9 dynamiquement lors de l\u2019appel de la commande. Vous pourrez y acc\xe9der \xe0 l\u2019aide de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-array",children:"LISTBOX Get array"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si des propri\xe9t\xe9s de style contradictoires sont d\xe9finies pour la colonne ou la list box, un ordre de priorit\xe9 est appliqu\xe9. Pour plus d\u2019informations, reportez-vous au manuel ",(0,l.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Comme les tableaux de style des colonnes ont priorit\xe9 sur le tableau de style de la list box, la commande, si elle est appliqu\xe9e \xe0 une list box, n\u2019aura d\u2019effet que si aucun tableau de style n\u2019a \xe9t\xe9 affect\xe9 aux colonnes."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,l.jsx)(n.p,{children:"Soit une list box tableau ayant les caract\xe9ristiques suivantes :"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["un tableau de styles de police est associ\xe9 \xe0 la list box (",(0,l.jsx)(n.em,{children:"ArrGlobalStyle"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["un tableau de styles de police est associ\xe9 \xe0 la colonne 5 (",(0,l.jsx)(n.em,{children:"ArrCol5Style"}),")"]}),"\n",(0,l.jsx)(n.li,{children:"les autres colonnes n\u2019ont pas de tableau de style"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROW FONT STYLE(*;"Col5";3;Bold)\n\xa0\xa0\xa0\xa0\xa0// \xe9quivaut \xe0 ArrCol5Style{3}:=Gras\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(780969).Z+"",width:"361",height:"122"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROW FONT STYLE(*;"List Box";3;Italic+Underline)\n\xa0\xa0\xa0\xa0\xa0// \xe9quivaut \xe0 ArrGlobalStyle{3}:=Italique+Soulign\xe9\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(82323).Z+"",width:"361",height:"122"})}),"\n",(0,l.jsx)(n.p,{children:"Apr\xe8s la deuxi\xe8me instruction, toutes les cellules de la troisi\xe8me ligne passent en italique et soulign\xe9 sauf celle de la colonne 5, qui reste en gras uniquement (les tableaux de colonnes sont prioritaires sur les tableaux de list box)."}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-get-row-font-style",children:"LISTBOX Get row font style"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/fr/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},780969:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAAB6CAIAAADyLDWYAAAEbklEQVR42u3cz04bVxTAYU/Fk1SAqqhP4D5BXAllQ7fZwTJ+iO66gWXYZYsVKVIk+wnKE3TVsGPpBygsKjozdjEmf9p71My91/0+KZFtsPRjJI7GY3ya2dv3z777dgSQYq/9d3h4mDsjzf39fdM0uSs0l0jzYLrZsbe3lzsjzWw2Oz4+zl2huUSaB3B3d7dcLr/JnQFUyewAIswOIMLsACLMDiDi8exYnDY/nF//yycmffPXo1mz5jycdwAhs7fv73snDw+dzLv7H87Gm/vdnfHZh+7x+cloPB4/+eZhXV5eatasOVfz7e3tzc3NZnasilZtW7fnJ/2t9pG2cfX/k2/Odqw1a9Y8vNXs+MxflF7//tvo6uKgma4H24vR6Pnr+bummbTVz3OdI32ZZs2aB/SFv0ZvC1+XkJhCs2bNA/nMtdL9w+9HFz9vXcNdnE5G7fnSaHK6yB2tWbPm/B5d7+heP3WeXqdpHzl7uE7zcMVm65uzvT7UrFlz/mul1Xh8rGuhWfPONK9mh7/vACLMDiDC7AAizA4goumulf75R+4MoBpHR0fL5dL7LJo1a07jfRYgzuwAIswOIMLsACLMDiDCvlLNmjVHOO8AQuwr1axZcxL7SjVr1hxhX2kBNGuuttm+0uw0a66y2b5SzZqLVH6zfaWaNWtOYl+pZs1FqK7Z52iBOLMDiDA7gAizA4iwrxRIY1+pZs1FqK7Z+yxAnNkBRJgdQITZAUSYHUCEfaWad7W5D2mayGdOw0/8D4qrOc7OO9hZi3cXAz/x/8W+Us072TzfRH/qI+198fqB/qsPtz/xRMd5m32lmne7eT0+/v7N6u89/p3sbq9utbX9Vzc/1qC/ktUdZ/tKC6B5MKvXIReTZuvlyP6rN2eXB9PpwaSbHG9e7efO3Cj+ONtXmp3mIXS/if2Jxa8lzYd/UvRxtq9U8842HzzbXBPY//Gn9s7V9Jd14eK8/wmuz19Or9qRMm9fu1xNX65/qsdPzKb842xfqeZdbd5cMP04uw9dfXkTv2nefqLjvM2+Us2ai1Bds8/RAnFmBxBhdgARZgcQYV8pkMa+Us2ai1Bds/dZgDizA4gwO4AIswOIMDuACPtKNWvWHOG8Awixr1SzZs1J7CvVrFlzhH2lBdCsudpm+0qz06y5ymb7SjVrLlL5zfaVatasOYl9pZo1F6G6Zp+jBeLMDiDC7AAizA4gwr5SII19pZo1F6G6Zu+zAHFmBxBhdgARZgcQYXYAEfaVatasOcJ5BxBiX6lmzZqT2FeqWbPmCPtKC6BZc7XN9pVmp1lzlc32lWrWXKTym+0r1axZcxL7SjVrLkJ1zT5HC8SZHUCE2QFEmB1AhH2lQBr7SjVrLkJ1zd5nAeLMDiDC7AAizA4gwuwAIuwr1axZc4TzDiDEvlLNmjUnsa9Us2bNEfaVFkCz5mqb7SvNTrPmKpvtK9WsuUjlN9tXqlmz5iT2lWrWXITqmn2OFogzO4AIswOIMDuACPtKgTSrfaV/AYrZWz8jO3dFAAAAAElFTkSuQmCC"},82323:function(e,n,s){s.d(n,{Z:function(){return t}});let t="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var t=s(667294);let l={},i=t.createContext(l);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);