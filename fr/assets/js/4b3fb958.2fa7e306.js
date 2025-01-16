"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40086"],{288117:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/st-insert-expression","title":"ST INSERT EXPRESSION","description":"ST INSERT EXPRESSION ( { ;} objet ; expression {; d\xe9butS\xe9l {; finS\xe9l*}} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-insert-expression.md","sourceDirName":"commands-legacy","slug":"/commands/st-insert-expression","permalink":"/docs/fr/commands/st-insert-expression","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-insert-expression.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-insert-expression","title":"ST INSERT EXPRESSION","slug":"/commands/st-insert-expression","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST GET URL","permalink":"/docs/fr/commands/st-get-url"},"next":{"title":"ST INSERT URL","permalink":"/docs/fr/commands/st-insert-url"}}'),t=s("785893"),i=s("250065");let l={id:"st-insert-expression",title:"ST INSERT EXPRESSION",slug:"/commands/st-insert-expression",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objet"})," ; ",(0,t.jsx)(n.em,{children:"expression"})," {; ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"})," {; ",(0,t.jsx)(n.em,{children:"finS\xe9l"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Op\xe9rateur"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Si sp\xe9cifi\xe9, objet est un nom d'objet (cha\xeene)",(0,t.jsx)(n.br,{}),"Si omis, objet est un champ ou une variable"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nom d'objet (si * est sp\xe9cifi\xe9) ou ",(0,t.jsx)(n.br,{}),"Champ ou variable (si * est omis)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expression"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Expression et (optionnel) format \xe0 ins\xe9rer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"d\xe9butS\xe9l"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"D\xe9but de la s\xe9lection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"finS\xe9l"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Fin de la s\xe9lection"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," ins\xe8re une r\xe9f\xe9rence \xe0 l\u2019",(0,t.jsx)(n.em,{children:"expression"})," dans le champ ou la variable de texte multistyle d\xe9sign\xe9(e) par le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez le param\xe8tre optionnel ",(0,t.jsx)(n.em,{children:"*"}),", vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un nom d\u2019objet (une cha\xeene). Si vous ne passez pas le param\xe8tre, vous indiquez que le param\xe8tre ",(0,t.jsx)(n.em,{children:"objet"})," est un champ ou une variable. Dans ce cas, vous ne passez pas une cha\xeene mais une r\xe9f\xe9rence de champ ou de variable (champ ou variable objet uniquement)."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"expression"})," l\u2019expression 4D \xe0 \xe9valuer dans l\u2019",(0,t.jsx)(n.em,{children:"objet"}),". Une expression 4D valide est une cha\xeene retournant une valeur. ",(0,t.jsx)(n.em,{children:"expression"})," peut \xeatre un champ, une variable, une commande 4D, une instruction retournant une valeur, une m\xe9thode projet, etc."]}),"\n",(0,t.jsx)(n.p,{children:'L\u2019expression doit \xeatre pass\xe9e entre guillemets ("").'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Le param\xe8tre ",(0,t.jsx)(n.em,{children:"expression"})," ne peut pas \xeatre une variable de type Image."]}),"\n",(0,t.jsxs)(n.p,{children:["Si ",(0,t.jsx)(n.em,{children:"expression"})," retourne une valeur contenant des retours chariot et des tabulations, 4D formate le texte en fonction de l\u2019objet h\xe9bergeant l\u2019expression ; les caract\xe8res retours chariot sont interpr\xe9t\xe9s comme des retours \xe0 la ligne."]}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez formater l\u2019expression en incluant une information de formatage dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"expression"}),". Dans ce cas, le param\xe8tre doit \xeatre de la forme :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-RAW",children:'"String(valeur;format)"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["... o\xf9 ",(0,t.jsx)(n.em,{children:"valeur"})," contient l\u2019expression elle-m\xeame et ",(0,t.jsx)(n.em,{children:"format"})," le formatage \xe0 appliquer. Le param\xe8tre ",(0,t.jsx)(n.em,{children:"format"})," peut contenir les valeurs suivantes :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'pour les num\xe9riques : tout format d\u2019affichage num\xe9rique existant ou non, par exemple "###,##"'}),"\n",(0,t.jsxs)(n.li,{children:['pour les dates : un nombre d\xe9signant un format de date existant. Vous pouvez utiliser les constantes du th\xe8me "',(0,t.jsx)(n.em,{children:"Formats d'affichage des dates"}),'", par exemple System date short.']}),"\n",(0,t.jsxs)(n.li,{children:['pour les heures : un nombre d\xe9signant un format d\u2019heure existant. Vous pouvez utiliser les constantes du th\xe8me "',(0,t.jsx)(n.em,{children:"Formats d'affichage des heures"}),'", par exemple System time short.']}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Par exemple :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0"Chaine([Table_1]Champ_1;Syst\xe8me date court)"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Par d\xe9faut, les ",(0,t.jsx)(n.strong,{children:"valeurs"})," des expressions sont affich\xe9es dans les zones de texte multistyle. Vous pouvez forcer l\u2019affichage des ",(0,t.jsx)(n.strong,{children:"r\xe9f\xe9rences"})," \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/st-set-options",children:"ST SET OPTIONS"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Les param\xe8tres optionnels ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,t.jsx)(n.em,{children:"finS\xe9l"})," permettent de d\xe9signer une s\xe9lection de texte dans ",(0,t.jsx)(n.em,{children:"objet"}),". Les valeurs ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,t.jsx)(n.em,{children:"finS\xe9l"})," expriment une s\xe9lection de texte brut, sans tenir compte des balises de style \xe9ventuellement pr\xe9sentes dans le texte."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Si vous passez uniquement ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"}),", le r\xe9sultat de l\u2019expression est ins\xe9r\xe9 \xe0 l'emplacement sp\xe9cifi\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:["Si vous omettez ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,t.jsx)(n.em,{children:"finS\xe9l"}),", le r\xe9sultat de l\u2019expression est ins\xe9r\xe9 \xe0 l\u2019emplacement du curseur."]}),"\n",(0,t.jsxs)(n.li,{children:["Si vous passez ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,t.jsx)(n.em,{children:"finS\xe9l"}),", ",(0,t.jsx)(n.strong,{children:"ST INSERT EXPRESSION"})," remplace le texte situ\xe9 \xe0 l\u2019int\xe9rieur de cette s\xe9lection par le r\xe9sultat de l\u2019",(0,t.jsx)(n.em,{children:"expression"}),". Si la valeur de ",(0,t.jsx)(n.em,{children:"finS\xe9l"})," est sup\xe9rieure au nombre total de caract\xe8res dans l\u2019objet, tous les caract\xe8res entre ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et la fin du texte sont remplac\xe9s par le r\xe9sultat de l\u2019",(0,t.jsx)(n.em,{children:"expression"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["4D propose des constantes pr\xe9d\xe9finies afin de d\xe9signer automatiquement des bornes de s\xe9lection dans les param\xe8tres ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"})," et ",(0,t.jsx)(n.em,{children:"finS\xe9l"}),'. Ces constantes sont plac\xe9es dans le th\xe8me "',(0,t.jsx)(n.em,{children:"Texte multistyle"}),'" :']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST End highlight"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"-1001"}),(0,t.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST End text"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"D\xe9signe le dernier caract\xe8re du texte contenu dans l\u2019objet"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST Start highlight"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"-1000"}),(0,t.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re de la s\xe9lection courante de texte dans l\u2019objet (*)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST Start text"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"D\xe9signe le premier caract\xe8re du texte contenu dans l\u2019objet"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["(*) Vous devez passer un nom d\u2019objet dans ",(0,t.jsx)(n.em,{children:"objet"})," pour pouvoir utiliser cette constante. Si vous passez une r\xe9f\xe9rence de variable ou de champ, la commande s\u2019appliquera \xe0 l\u2019ensemble du texte de l\u2019objet."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Si ",(0,t.jsx)(n.em,{children:"d\xe9butS\xe9l"})," est sup\xe9rieur \xe0 ",(0,t.jsx)(n.em,{children:"finS\xe9l"})," (hormis si ",(0,t.jsx)(n.em,{children:"finS\xe9l"})," vaut 0), la commande ne fait rien et la variable ",(0,t.jsx)(n.em,{children:"OK"})," prend la valeur 0."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez remplacer le texte s\xe9lectionn\xe9 par la valeur d'un champ :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ST INSERT EXPRESSION(*;"myText";"[Clients]Nom";ST Start highlight;ST End highlight)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/st-compute-expressions",children:"ST COMPUTE EXPRESSIONS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/st-freeze-expressions",children:"ST FREEZE EXPRESSIONS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/st-get-expression",children:"ST Get expression"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/st-insert-url",children:"ST INSERT URL"})]}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"1281"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);