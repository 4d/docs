"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77691"],{964555:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/st-get-content-type","title":"ST Get content type","description":"ST Get content type ( { ;} objet {; d\xe9butS\xe9l {; finS\xe9l {; d\xe9butBloc {; finBloc*}}}} ) : Integer","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-get-content-type.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-content-type","permalink":"/docs/fr/20-R8/commands/st-get-content-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-content-type.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-get-content-type","title":"ST Get content type","slug":"/commands/st-get-content-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST GET ATTRIBUTES","permalink":"/docs/fr/20-R8/commands/st-get-attributes"},"next":{"title":"ST Get expression","permalink":"/docs/fr/20-R8/commands/st-get-expression"}}'),r=t("785893"),d=t("250065");let i={id:"st-get-content-type",title:"ST Get content type",slug:"/commands/st-get-content-type",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let n={br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST Get content type"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," {; ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," {; ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," {; ",(0,r.jsx)(n.em,{children:"d\xe9butBloc"})," {; ",(0,r.jsx)(n.em,{children:"finBloc"}),"}}}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9butS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"D\xe9but de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"finS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Fin de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9butBloc"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"D\xe9but de position du premier type de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"finBloc"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Fin de position du premier type de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"R\xe9sultat"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Type de contenu"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ST Get content type"})," retourne le type de contenu pr\xe9sent dans le champ ou la variable de texte multistyle d\xe9sign\xe9(e) par le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). A l\u2019ex\xe9cution, si l\u2019objet a le focus, la commande retourne les informations de l\u2019objet en cours d'\xe9dition ; si l\u2019objet n'a pas le focus, la commande retourne les informations de la source de donn\xe9es de l\u2019objet (variable ou champ).",(0,r.jsx)(n.br,{}),"\nSi vous omettez le param\xe8tre ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable. A l\u2019ex\xe9cution, la commande retourne les informations de la variable ou du champ."]}),"\n",(0,r.jsxs)(n.p,{children:["Les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," permettent de d\xe9signer une s\xe9lection de texte dans ",(0,r.jsx)(n.em,{children:"objet"}),". Les valeurs ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," expriment une s\xe9lection de texte brut, sans tenir compte des balises de style \xe9ventuellement pr\xe9sentes dans le texte."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si vous passez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.strong,{children:"ST Get content type"})," \xe9value le contenu situ\xe9 \xe0 l\u2019int\xe9rieur de cette s\xe9lection."]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous passez uniquement ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," ou si la valeur de ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," est sup\xe9rieure au nombre total de caract\xe8res dans l\u2019",(0,r.jsx)(n.em,{children:"objet"}),", le contenu situ\xe9 entre ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et la fin du texte est \xe9valu\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous omettez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", le contenu situ\xe9 \xe0 l\u2019int\xe9rieur de la s\xe9lection courante de texte est \xe9valu\xe9."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D propose des constantes pr\xe9d\xe9finies afin de d\xe9signer automatiquement des bornes de s\xe9lection dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),'. Ces constantes sont plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re du texte contenu dans l\u2019objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re du texte contenu dans l\u2019objet"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Vous devez passer un nom d\u2019objet dans ",(0,r.jsx)(n.em,{children:"objet"})," pour pouvoir utiliser cette constante. Si vous passez une r\xe9f\xe9rence de variable ou de champ, la commande s\u2019appliquera \xe0 l\u2019ensemble du texte de l\u2019objet."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," est sup\xe9rieur \xe0 ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," (hormis si ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," vaut 0), la commande ne fait rien et la variable ",(0,r.jsx)(n.em,{children:"OK"})," prend la valeur 0."]}),"\n",(0,r.jsxs)(n.p,{children:["Les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"d\xe9butBloc"})," et ",(0,r.jsx)(n.em,{children:"finBloc"})," permettent de r\xe9cup\xe9rer la position du premier et du dernier caract\xe8re du premier bloc homog\xe8ne identifi\xe9 dans l\u2019objet ou la s\xe9lection de l\u2019objet. Par exemple, si la s\xe9lection contient une expression puis du texte brut, ",(0,r.jsx)(n.em,{children:"d\xe9butBloc"})," et ",(0,r.jsx)(n.em,{children:"finBloc"})," retourneront les bornes de l\u2019expression. Vous pouvez effectuer une boucle afin de traiter tous les blocs de la s\xe9lection."]}),"\n",(0,r.jsxs)(n.p,{children:['La commande retourne une valeur d\xe9signant le type de contenu identifi\xe9. Vous pouvez comparer cette valeur aux constantes suivantes, plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Expression type"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"La s\xe9lection contient uniquement une r\xe9f\xe9rence d\u2019expression"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Mixed type"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"La s\xe9lection contient au moins deux types de contenus diff\xe9rents"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Picture type"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"6"}),(0,r.jsx)(n.td,{children:"La s\xe9lection contient uniquement une image (zones 4D Write Pro uniquement)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Plain type"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"La s\xe9lection contient du texte et aucune r\xe9f\xe9rence"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Unknown tag type"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"La s\xe9lection contient uniquement une balise de type inconnu"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST URL type"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"La s\xe9lection contient uniquement une r\xe9f\xe9rence d\u2019URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST User type"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"La s\xe9lection contient uniquement une r\xe9f\xe9rence personnalis\xe9e"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:"Vous souhaitez afficher des commandes d\u2019un menu contextuel en fonction du type de contenu s\xe9lectionn\xe9 dans la zone."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0//on r\xe9cup\xe8re la s\xe9lection\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET HIGHLIGHT(*;"myText";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Contextual click&(Macintosh control down=False))\xa0//appel du menu contextuel\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(startSel=endSel)\xa0//pas de contenu s\xe9lectionn\xe9\n\xa0\xa0//on active uniquement certaines commandes\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISABLE MENU ITEM(<>menu_STYLEDTEXT;2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISABLE MENU ITEM(<>menu_STYLEDTEXT;4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\xa0//on lit le type de contenu\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CT_Texttype:=ST Get content type(*;"myText";startSel;endSel)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\xa0//traitement des diff\xe9rents types\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(CT_Texttype=ST URL type)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ENABLE MENU ITEM(<>menu_STYLEDTEXT;7)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(CT_Texttype=ST Expression type)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0MOUSE POSITION($xCoord;$yCoord;$StateButton)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$AlphaVar:=Dynamic pop up menu(<>menu_STYLEDTEXT;"";$xCoord;$yCoord)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0startSel:=-3\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0endSel:=-3\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0End case\n'})}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1286"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);