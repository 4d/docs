"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56276],{823659:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(474848),t=n(28453);const l={id:"parse-formula",title:"Parse formula",slug:"/commands/parse-formula",displayed_sidebar:"docs"},a=void 0,i={id:"commands-legacy/parse-formula",title:"Parse formula",description:"Parse formula ( formule {; options}{; messageErr} ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/parse-formula.md",sourceDirName:"commands-legacy",slug:"/commands/parse-formula",permalink:"/docs/fr/commands/parse-formula",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fparse-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"parse-formula",title:"Parse formula",slug:"/commands/parse-formula",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET ALLOWED METHODS",permalink:"/docs/fr/commands/get-allowed-methods"},next:{title:"SET ALLOWED METHODS",permalink:"/docs/fr/commands/set-allowed-methods"}},d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function u(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Parse formula"})," ( ",(0,r.jsx)(s.em,{children:"formule"})," {; ",(0,r.jsx)(s.em,{children:"options"}),"}{; ",(0,r.jsx)(s.em,{children:"messageErr"}),"} ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tre"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"formule"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Texte brut de la formule"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"options"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Instructions d'entr\xe9e / sortie"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"messageErr"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Message d'erreur (cha\xeene vide si pas d'erreur)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"R\xe9sultat"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Formule avec transformation (texte brut)"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["La commande ",(0,r.jsx)(s.strong,{children:"Parse formula"})," inspecte le contenu de la ",(0,r.jsx)(s.em,{children:"formule"})," 4D, v\xe9rifie sa syntaxe, et la retourne sous une forme normalis\xe9e. Cette op\xe9ration permet \xe0 la formule de rester valide dans le cas o\xf9 un \xe9l\xe9ment du langage 4D ou de la structure est renomm\xe9 (commande, constante, table, champ ou plug-in 4D)."]}),"\n",(0,r.jsxs)(s.p,{children:["Vous pouvez utiliser ",(0,r.jsx)(s.strong,{children:"Parse formula"})," pour \xe9valuer et traduire les formules de diff\xe9rentes mani\xe8res :"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['Les noms "r\xe9els" de tables et de champs peuvent \xeatre convertis en noms "virtuels*" (noms personnalis\xe9s) ou en \xe9quivalents ',(0,r.jsx)(s.em,{children:"tokenis\xe9"}),"s**."]}),"\n",(0,r.jsx)(s.li,{children:'Les \xe9quivalents tokenis\xe9s des tables/champs peuvent \xeatre convertis en noms "virtuels" ou "r\xe9els".'}),"\n",(0,r.jsxs)(s.li,{children:['Les noms "virtuels" des tables/champs peuvent \xeatre convertis en noms "r\xe9els" ou en \xe9quivalents ',(0,r.jsx)(s.em,{children:"tokenis\xe9"}),"s."]}),"\n",(0,r.jsx)(s.li,{children:"Les \xe9l\xe9ments du langage 4D peuvent \xeatre convertis en \xe9quivalents tokenis\xe9s du langage 4D."}),"\n",(0,r.jsx)(s.li,{children:"Les \xe9quivalents tokenis\xe9s du langage 4D peuvent \xeatre convertis en \xe9l\xe9ments du langage 4D."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:[(0,r.jsx)(s.em,{children:"*"})," Les noms de la structure virtuelle sont d\xe9finis \xe0 l'aide de commandes ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-table-titles",children:"SET TABLE TITLES"})," et ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-field-titles",children:"SET FIELD TITLES"})," (utilis\xe9es avec le param\xe8tre *)."]})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)(s.em,{children:[(0,r.jsx)(s.em,{children:"**"})," Les"]})," \xe9quivalents tokenis\xe9s ",(0,r.jsx)(s.em,{children:"sont les \xe9l\xe9ments du langage 4D et de la structure exprim\xe9s en texte brut et avec la"})," syntaxe tokenis\xe9e*, comme illustr\xe9 ci-dessous* ",(0,r.jsx)(s.em,{children:"(voir aussi la page"})," ",(0,r.jsx)(s.em,{children:"Utiliser des tokens dans les formules) :"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-RAW",children:"[Table:3]Field:1+Chaine:C10(1)\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Passez dans le param\xe8tre ",(0,r.jsx)(s.em,{children:"formule"})," une formule 4D en texte brut. Elle peut utiliser des noms r\xe9els ou virtuels ainsi que des \xe9quivalents tokenis\xe9s."]}),"\n",(0,r.jsxs)(s.p,{children:["Quels que soient les types de noms utilis\xe9s dans ",(0,r.jsx)(s.em,{children:"formule"}),", par d\xe9faut ",(0,r.jsx)(s.strong,{children:"Parse formula"})," retourne les noms r\xe9els des \xe9l\xe9ments de langage 4D ou de structure sans tokens. Le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"options"})," vous permet d'indiquer comment la ",(0,r.jsx)(s.em,{children:"formule"})," est exprim\xe9e et/ou doit \xeatre retourn\xe9e. Vous pouvez passer dans ce param\xe8tre une ou plusieurs des constantes suivantes du th\xe8me ",(0,r.jsx)(s.em,{children:"Formules"})," (vous pouvez combiner des constantes afin d'indiquer simultan\xe9ment les formats d'entr\xe9e et de sortie de la formule."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constante"}),(0,r.jsx)(s.th,{children:"Valeur"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Formula in with virtual structure"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"La formule utilise les noms de la structure virtuelle (noms personnalis\xe9s). Par d\xe9faut, la formule retourn\xe9e utilise les noms r\xe9els."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Formula out with virtual structure"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"La formule doit \xeatre retourn\xe9e avec les noms de la structure virtuelle (noms personnalis\xe9s)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Formula out with tokens"}),(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"La formule doit \xeatre retourn\xe9e avec des \xe9quivalents tokenis\xe9s (ex. : Cxx)."})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Si une erreur de syntaxe est d\xe9tect\xe9e dans la ",(0,r.jsx)(s.em,{children:"formule"}),", un message d'erreur est retourn\xe9 dans le param\xe8tre optionnel ",(0,r.jsx)(s.em,{children:"messageErr"}),". Si aucune erreur n'est d\xe9tect\xe9e, une cha\xeene vide est retourn\xe9e."]}),"\n",(0,r.jsx)(s.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0ARRAY TEXT($t1;1)\n\xa0ARRAY LONGINT($t2;1)\n\xa0$t1{1}:="Table virtuelle"\n\xa0$t2{1}:=1\n\xa0SET TABLE TITLES($t1;$t2;*)\n\xa0\n\xa0ARRAY TEXT($tf1;1)\n\xa0ARRAY LONGINT($tf2;1)\n\xa0$tf1{1}:="Champ virtuel"\n\xa0$tf2{1}:=2\n\xa0SET FIELD TITLES([Table_1];$tf1;$tf2;*)\n\xa0\n\xa0\xa0//Structure virtuelle vers \xe9quivalents r\xe9els\n\xa0$parsedFormula:=Parse formula("[Table virtuelle]Champ virtuel";Formula in with virtual structure;$errorMessage)\n\xa0\xa0//retourne [Table_1]Champ_2\n\xa0\n\xa0\xa0//Noms de champ et de table r\xe9els vers leur \xe9quivalent dans la structure virtuelle\n\xa0$parsedFormula:=Parse formula("[Table_1]Champ_2";Formula out with virtual structure;$errorMessage)\n\xa0\xa0//retourne [Table virtuelle]Champ virtuel\n\xa0\n\xa0\xa0//Noms de champ et de table vers leur \xe9quivalent tokenis\xe9s\n\xa0$parsedFormula:=Parse formula("Chaine([Table_1]Champ_2)";Formula out with tokens;$errorMessage)\n\xa0\xa0//retourne Chaine:C10([Table_1:1]Champ_2:2)\n'})}),"\n",(0,r.jsx)(s.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0//demander \xe0 l'utilisateur de saisir sa formule\n\xa0$formula:=\"\"\n\xa0EDIT FORMULA([Table_1];$formula)\n\xa0\n\xa0\xa0//sauvegarder la formule de l'utilisateur pour une utilisation ult\xe9rieure\n\xa0CREATE RECORD([users_preferences])\n\xa0$persistentFormula:=Parse formula($formula;Formula out with tokens)\n\xa0[users_preferences]formula:=$persistentFormula\n\xa0SAVE RECORD([users_preferences])\n\xa0\n\xa0\xa0//plus tard : ex\xe9cution de la formule\n\xa0CREATE RECORD([Table_1])\n\xa0EXECUTE FORMULA([users_preferences]formula)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"formula-from-string.md",children:"Formula from string"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/commands/set-table-titles",children:"SET TABLE TITLES"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.em,{children:"Utiliser des tokens dans les formules"})]})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var r=n(296540);const t={},l=r.createContext(t);function a(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);