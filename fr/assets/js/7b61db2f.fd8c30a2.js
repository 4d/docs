"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67358"],{637843:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"commands-legacy/st-set-attributes","title":"ST SET ATTRIBUTES","description":"ST SET ATTRIBUTES ( { ;} objet ; d\xe9butS\xe9l ; finS\xe9l ; nomAttribut ; valeurAttribut {; nomAttribut2 ; valeurAttribut2 ; ... ; nomAttributN ; valeurAttributN*} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-set-attributes.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-attributes","permalink":"/docs/fr/commands/st-set-attributes","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-attributes.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-set-attributes","title":"ST SET ATTRIBUTES","slug":"/commands/st-set-attributes","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST INSERT URL","permalink":"/docs/fr/commands/st-insert-url"},"next":{"title":"ST SET OPTIONS","permalink":"/docs/fr/commands/st-set-options"}}'),r=t("785893"),i=t("250065");let l={id:"st-set-attributes",title:"ST SET ATTRIBUTES",slug:"/commands/st-set-attributes",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST SET ATTRIBUTES"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," ; ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," ; ",(0,r.jsx)(n.em,{children:"nomAttribut"})," ; ",(0,r.jsx)(n.em,{children:"valeurAttribut"})," {; ",(0,r.jsx)(n.em,{children:"nomAttribut2"})," ; ",(0,r.jsx)(n.em,{children:"valeurAttribut2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"nomAttributN"})," ; ",(0,r.jsx)(n.em,{children:"valeurAttributN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene) ",(0,r.jsx)(n.br,{}),"Si omis, objet est une variable ou un champ"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Variable ou champ Texte (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9butS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"D\xe9but de la nouvelle s\xe9lection de texte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"finS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Fin de la nouvelle s\xe9lection de texte"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomAttribut"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Attribut \xe0 d\xe9finir"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valeurAttribut"}),(0,r.jsx)(n.td,{children:"Text, Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nouvelle valeur d\u2019attribut"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ST SET ATTRIBUTES"})," permet de modifier un ou plusieurs attribut(s) de style dans le ou les objet(s) de formulaire d\xe9sign\xe9(s) par ",(0,r.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:""}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). A l'ex\xe9cution, si l'objet a le focus, la commande s'applique uniquement \xe0 l'objet en cours d'\xe9dition et non \xe0 sa source de donn\xe9es (variable ou champ). Les modifications ne sont report\xe9es dans la source (et donc dans les \xe9ventuels autres objets utilisant la m\xeame source) que lorsque l'objet en cours d'\xe9dition est valid\xe9 via une perte de focus ou la touche ",(0,r.jsx)(n.strong,{children:"Entr\xe9e"}),". Si l'objet n'a pas le focus, la commande s'applique directement \xe0 la source de donn\xe9es et les modifications sont imm\xe9diatement r\xe9percut\xe9es aux \xe9ventuels autres objets utilisant la m\xeame source.",(0,r.jsx)(n.br,{}),"\nSi vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable. La commande s'applique directement au champ ou \xe0 la variable et les modifications sont r\xe9percut\xe9es \xe0 tous les objets utilisant cette source, y compris l'objet ayant le focus."]}),"\n",(0,r.jsx)(n.h5,{id:"-1"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Vous pouvez utiliser les attributs de style avec des champs de type Texte uniquement. Les champs de type Alpha ayant une longueur pr\xe9d\xe9finie, l\u2019ajout d\u2019\xe9ventuelles balises de style entra\xeenerait des pertes de donn\xe9es."]}),"\n",(0,r.jsxs)(n.p,{children:["La d\xe9finition d\u2019un attribut s\u2019effectue via l\u2019insertion ou la modification de balises HTML de style dans \xe0 l\u2019int\xe9rieur du texte (pour plus d'informations sur ce point, reportez-vous au manuel ",(0,r.jsx)(n.em,{children:"Mode D\xe9veloppement"}),"). A noter que ",(0,r.jsx)(n.strong,{children:"ST SET ATTRIBUTES"})," ins\xe8re des balises de style dans tous les cas, m\xeame si ",(0,r.jsx)(n.em,{children:"objet"})," d\xe9signe des objets texte de formulaire n\u2019ayant pas la propri\xe9t\xe9 Multistyle."]}),"\n",(0,r.jsxs)(n.p,{children:["Les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," permettent de d\xe9signer la s\xe9lection de texte \xe0 laquelle appliquer la ou les modification(s) de style \xe0 l\u2019int\xe9rieur de l\u2019",(0,r.jsx)(n.em,{children:"objet"}),". Passez dans ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," la position du premier caract\xe8re \xe0 modifier et dans ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," la position plus un du dernier caract\xe8re \xe0 modifier. Vous pouvez passer 0 dans ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," afin de d\xe9signer automatiquement le dernier caract\xe8re du texte (passez 1 dans ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," pour d\xe9signer le premier caract\xe8re).",(0,r.jsx)(n.br,{}),"\nSi la valeur de ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," est sup\xe9rieure au nombre de caract\xe8res de l\u2019objet, tous les caract\xe8res entre ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et la fin du texte seront modifi\xe9s. Si ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," est sup\xe9rieur \xe0 ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," (hormis si ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," vaut 0), la commande ne fait rien et la variable OK prend la valeur 0.",(0,r.jsx)(n.br,{}),"\nLes valeurs ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," ne tiennent pas compte des balises de style \xe9ventuellement d\xe9j\xe0 pr\xe9sentes dans la zone. Elles sont \xe9valu\xe9es sur la base du texte brut (texte duquel les balises de style ont \xe9t\xe9 filtr\xe9es).",(0,r.jsx)(n.br,{}),"\n4D propose des constantes pr\xe9d\xe9finies afin de d\xe9signer automatiquement des bornes de s\xe9lection dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),'. Ces constantes sont plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re du texte contenu dans l\u2019objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re du texte contenu dans l\u2019objet"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Vous devez passer un nom d\u2019objet dans ",(0,r.jsx)(n.em,{children:"objet"})," pour pouvoir utiliser cette constante. Si vous passez une r\xe9f\xe9rence de variable ou de champ, la commande s\u2019appliquera \xe0 l\u2019ensemble du texte de l\u2019objet."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"nomAttribut"})," et ",(0,r.jsx)(n.em,{children:"valeurAttribut"})," respectivement le nom et la valeur de l\u2019attribut \xe0 modifier. Vous pouvez passer autant de paires attribut/valeur que vous souhaitez. Pour d\xe9finir le param\xe8tre ",(0,r.jsx)(n.em,{children:"nomAttribut"}),", utilisez les constantes pr\xe9d\xe9finies plac\xe9es dans le th\xe8me ",(0,r.jsx)(n.em,{children:"Attributs de texte multistyle"}),". La valeur \xe0 passer dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"valeurAttribut"})," d\xe9pend du param\xe8tre ",(0,r.jsx)(n.em,{children:"nomAttribut"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Attribute background color"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"8"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=Valeur hexad\xe9cimale ou nom de couleur HTML (Windows uniquement)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Attribute bold style"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=0 : pas d'attribut gras pour la s\xe9lection",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=1 : attribut gras pour la s\xe9lection"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Attribute font name"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=Nom de la famille de police (cha\xeene)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Attribute italic style"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=0 : pas d'attribut italique pour la s\xe9lection",(0,r.jsx)(n.br,{})," ",(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=1 : attribut italique pour la s\xe9lection"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Attribute strikethrough style"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=0 : pas d'attribut barr\xe9 pour la s\xe9lection",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=1 : attribut barr\xe9 pour la s\xe9lection"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Attribute text color"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"7"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=Valeur hexad\xe9cimale ou nom de couleur HTML"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Attribute text size"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=Nombre de points (num\xe9rique)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Attribute underline style"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=0 : pas d'attribut soulign\xe9 pour la s\xe9lection",(0,r.jsx)(n.br,{})," ",(0,r.jsx)(n.em,{children:"valeurAttribut"}),"=1 : attribut soulign\xe9 pour la s\xe9lection"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Couleurs"}),(0,r.jsx)(n.br,{}),"\nSi vous passez la constante Attribute text color ou Attribute background color dans ",(0,r.jsx)(n.em,{children:"nomAttribut"}),", vous devez passer dans ",(0,r.jsx)(n.em,{children:"valeurAttribut"})," une cha\xeene contenant soit un nom de couleur HTML soit une valeur de couleur hexad\xe9cimale :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Nom de couleur HTML"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Valeur hexad\xe9cimale"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Aqua"}),(0,r.jsx)(n.td,{children:"#00FFFF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Black"}),(0,r.jsx)(n.td,{children:"#000000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Blue"}),(0,r.jsx)(n.td,{children:"#0000FF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fushia"}),(0,r.jsx)(n.td,{children:"#FF00FF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Gray"}),(0,r.jsx)(n.td,{children:"#808080"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Green"}),(0,r.jsx)(n.td,{children:"#008000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Lime"}),(0,r.jsx)(n.td,{children:"#00FF00"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Maroon"}),(0,r.jsx)(n.td,{children:"#800000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Navy"}),(0,r.jsx)(n.td,{children:"#000080"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Olive"}),(0,r.jsx)(n.td,{children:"#808000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Purple"}),(0,r.jsx)(n.td,{children:"#800080"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Red"}),(0,r.jsx)(n.td,{children:"#FF0000"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Silver"}),(0,r.jsx)(n.td,{children:"#C0C0C0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Teal"}),(0,r.jsx)(n.td,{children:"#008080"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"White"}),(0,r.jsx)(n.td,{children:"#FFFFFF"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Yellow"}),(0,r.jsx)(n.td,{children:"#FFFF00"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Dans cet exemple, nous modifions la taille, la couleur de texte ainsi que les attributs gras et soulign\xe9 des caract\xe8res 2 \xe0 4 du champ :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ST SET ATTRIBUTES([MaTable]MonChamp;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,r.jsx)(n.p,{children:"A l\u2019issue de l\u2019ex\xe9cution de cette commande, la variable OK prend la valeur 1 si aucune erreur n\u2019a \xe9t\xe9 rencontr\xe9e et 0 dans le cas contraire. C\u2019est le cas notamment lorsque l\u2019\xe9valuation des balises de style \xe9choue (balise incorrecte ou manquante)."}),"\n",(0,r.jsx)(n.p,{children:"A noter qu\u2019en cas d\u2019erreur, la variable n\u2019est pas modifi\xe9e. Lorsqu\u2019une erreur se produit sur une variable lors de l\u2019\xe9valuation du texte, 4D transforme le texte en texte brut ; par cons\xe9quent, les caract\xe8res <, > et & seront convertis en entit\xe9s HTML."}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/font-list",children:"FONT LIST"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-get-attributes",children:"ST GET ATTRIBUTES"})]}),"\n",(0,r.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1093"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);