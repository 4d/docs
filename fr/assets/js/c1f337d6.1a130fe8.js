"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55238"],{351005:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/st-insert-url","title":"ST INSERT URL","description":"ST INSERT URL ( { ;} objet ; texteURL ; adresseURL {; d\xe9butS\xe9l {; finS\xe9l*}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/st-insert-url.md","sourceDirName":"commands-legacy","slug":"/commands/st-insert-url","permalink":"/docs/fr/commands/st-insert-url","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-insert-url.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"st-insert-url","title":"ST INSERT URL","slug":"/commands/st-insert-url","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST INSERT EXPRESSION","permalink":"/docs/fr/commands/st-insert-expression"},"next":{"title":"ST SET ATTRIBUTES","permalink":"/docs/fr/commands/st-set-attributes"}}'),r=s("785893"),i=s("250065");let l={id:"st-insert-url",title:"ST INSERT URL",slug:"/commands/st-insert-url",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir aussi",id:"voir-aussi",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ST INSERT URL"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objet"})," ; ",(0,r.jsx)(n.em,{children:"texteURL"})," ; ",(0,r.jsx)(n.em,{children:"adresseURL"})," {; ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," {; ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Op\xe9rateur"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,r.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objet"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,r.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"texteURL"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Libell\xe9 visible de l\u2019URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"adresseURL"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Adresse de l\u2019URL"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"d\xe9butS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"D\xe9but de la s\xe9lection"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"finS\xe9l"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Fin de la s\xe9lection"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"ST INSERT URL"})," ins\xe8re un lien URL dans le champ ou la variable de texte styl\xe9 d\xe9sign\xe9(e) par le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,r.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,r.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"texteURL"}),' le libell\xe9 visible de l\u2019URL, tel qu\u2019il doit appara\xeetre dans l\u2019objet. Par exemple, des libell\xe9s comme "Site Web de 4D" ou "Suivez ce lien pour plus d\u2019informations" peuvent \xeatre utilis\xe9s. Vous pouvez \xe9galement utiliser l\u2019adresse elle-m\xeame, par exemple "',(0,r.jsx)(n.a,{href:"http://www.4d.com",children:"http://www.4d.com"}),'".']}),"\n",(0,r.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"adresseURL"}),' l\u2019adresse compl\xe8te \xe0 laquelle connecter la page du navigateur, par exemple "',(0,r.jsx)(n.a,{href:"http://www.4D.com",children:"http://www.4D.com"}),'".']}),"\n",(0,r.jsxs)(n.p,{children:["Les param\xe8tres optionnels ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," permettent de d\xe9signer une s\xe9lection de texte dans ",(0,r.jsx)(n.em,{children:"objet"}),". Les valeurs ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," expriment une s\xe9lection de texte brut, sans tenir compte des balises de style \xe9ventuellement pr\xe9sentes dans le texte."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si vous passez uniquement ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"}),", ",(0,r.jsx)(n.em,{children:"texteURL"})," est ins\xe9r\xe9 \xe0 l'emplacement sp\xe9cifi\xe9."]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous omettez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.em,{children:"texteURL"})," est ins\xe9r\xe9 \xe0 l\u2019emplacement du curseur."]}),"\n",(0,r.jsxs)(n.li,{children:["Si vous passez ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,r.jsx)(n.strong,{children:"ST INSERT URL"})," remplace le texte situ\xe9 \xe0 l\u2019int\xe9rieur de cette s\xe9lection par ",(0,r.jsx)(n.em,{children:"texteURL"}),". Si la valeur de ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," est sup\xe9rieure au nombre total de caract\xe8res dans l\u2019objet, tous les caract\xe8res entre ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et la fin du texte sont remplac\xe9s par ",(0,r.jsx)(n.em,{children:"texteURL"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["4D propose des constantes pr\xe9d\xe9finies afin de d\xe9signer automatiquement des bornes de s\xe9lection dans les param\xe8tres ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,r.jsx)(n.em,{children:"finS\xe9l"}),'. Ces constantes sont plac\xe9es dans le th\xe8me "',(0,r.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Valeur"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1001"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST End text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re du texte contenu dans l\u2019objet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start highlight"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"-1000"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ST Start text"}),(0,r.jsx)(n.td,{children:"Entier long"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re du texte contenu dans l\u2019objet"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["(*) Vous devez passer un nom d\u2019objet dans ",(0,r.jsx)(n.em,{children:"objet"})," pour pouvoir utiliser cette constante. Si vous passez une r\xe9f\xe9rence de variable ou de champ, la commande s\u2019appliquera \xe0 l\u2019ensemble du texte de l\u2019objet."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si ",(0,r.jsx)(n.em,{children:"d\xe9butS\xe9l"})," est sup\xe9rieur \xe0 ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," (hormis si ",(0,r.jsx)(n.em,{children:"finS\xe9l"})," vaut 0), la commande ne fait rien et la variable ",(0,r.jsx)(n.em,{children:"OK"})," prend la valeur 0."]}),"\n",(0,r.jsxs)(n.p,{children:["Une fois le lien ins\xe9r\xe9, il est actif : l\u2019action ",(0,r.jsx)(n.strong,{children:"Ctrl+clic"})," (Windows) ou ",(0,r.jsx)(n.strong,{children:"Commande+clic"})," (macOS) sur le lien ouvre une page du navigateur par d\xe9faut \xe0 l\u2019adresse d\xe9finie dans le param\xe8tre ",(0,r.jsx)(n.em,{children:"adresseURL"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.p,{children:'Vous souhaitez ins\xe9rer un lien vers le site Web de 4D \xe0 la place de la s\xe9lection de texte dans l\u2019objet "myText" :'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vTitle:="4D Web Site"\n\xa0vURL:="http://www.4d.com/"\n\xa0ST INSERT URL(*;"myText";vTitle;vURL;ST Start highlight;ST End highlight)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-get-url",children:"ST GET URL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/fr/commands/st-insert-expression",children:"ST INSERT EXPRESSION"})]}),"\n",(0,r.jsx)(n.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(n.td,{children:"1280"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifie les variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let r={},i=t.createContext(r);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);