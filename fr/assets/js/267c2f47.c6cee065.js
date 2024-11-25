"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78594"],{607166:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/query-by-sql","title":"QUERY BY SQL","description":"QUERY BY SQL ( {laTable ;} formuleSQL )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-by-sql.md","sourceDirName":"commands-legacy","slug":"/commands/query-by-sql","permalink":"/docs/fr/commands/query-by-sql","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-by-sql.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-by-sql","title":"QUERY BY SQL","slug":"/commands/query-by-sql","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is field value Null","permalink":"/docs/fr/commands/is-field-value-null"},"next":{"title":"SET FIELD VALUE NULL","permalink":"/docs/fr/commands/set-field-value-null"}}'),l=s("785893"),a=s("250065");let t={id:"query-by-sql",title:"QUERY BY SQL",slug:"/commands/query-by-sql",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"A propos des liens",id:"a-propos-des-liens",level:5},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",mavar:"mavar",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," ( {",(0,l.jsx)(n.em,{children:"laTable"})," ;} ",(0,l.jsx)(n.em,{children:"formuleSQL"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Param\xe8tre"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"laTable"}),(0,l.jsx)(n.td,{children:"Table"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Table de laquelle retourner une s\xe9lection d\u2019enregistrements ou Table par d\xe9faut si ce param\xe8tre est omis"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formuleSQL"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Formule de recherche SQL valide repr\xe9sentant la clause WHERE de la requ\xeate SELECT"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," permet de tirer directement parti du moteur SQL int\xe9gr\xe9 de 4D. Elle ex\xe9cute une requ\xeate SELECT simple qui peut \xeatre \xe9crite ainsi :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SELECT *\xa0\xa0\xa0FROM laTable \xa0\xa0\xa0WHERE \n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"laTable"})," est le nom de la table pass\xe9 en premier param\xe8tre et ",(0,l.jsx)(n.em,{children:"formuleSQL"})," la cha\xeene de recherche pass\xe9e en deuxi\xe8me param\xe8tre."]}),"\n",(0,l.jsx)(n.p,{children:"Par exemple, l\u2019instruction suivante :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY SQL([Employees];"name=\u2019smith\u2019")\n'})}),"\n",(0,l.jsx)(n.p,{children:"\xe9quivaut \xe0 la requ\xeate SQL :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:'SELECT * FROM Employees WHERE "name=\u2019smith\u2019"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["La commande ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," est semblable \xe0 la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),". Elle effectue une recherche parmi les enregistrements de la table d\xe9finie. Elle modifie la s\xe9lection courante de ",(0,l.jsx)(n.em,{children:"table"})," pour le process courant et fait du premier enregistrement de la nouvelle s\xe9lection le nouvel enregistrement courant."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," La commande ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," ne peut pas \xeatre utilis\xe9e dans le contexte d'une connexion SQL externe, elle s'adresse directement au moteur SQL int\xe9gr\xe9 de 4D."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," applique ",(0,l.jsx)(n.em,{children:"formuleSQL"})," \xe0 chaque enregistrement de la s\xe9lection de la table. ",(0,l.jsx)(n.em,{children:"formuleSQL"})," est une expression bool\xe9enne qui doit retourner VRAI ou FAUX. Comme vous le savez peut-\xeatre, dans la norme SQL, une condition de recherche peut avoir un r\xe9sultat VRAI, FAUX ou NULL. Tous les enregistrements (rows) pour lesquels la condition de recherche retourne VRAI sont inclus dans la nouvelle s\xe9lection courante."]}),"\n",(0,l.jsxs)(n.p,{children:["L\u2019expression ",(0,l.jsx)(n.em,{children:"formuleSQL"})," peut \xeatre simple, comme par exemple la comparaison d\u2019un champ (colonne) \xe0 une valeur ; elle peut \xe9galement \xeatre complexe, comme la r\xe9alisation d\u2019un calcul. Comme ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),", ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," peut \xe9valuer des valeurs dans les tables li\xe9es (cf. exemple 4). ",(0,l.jsx)(n.em,{children:"formuleSQL"})," doit \xeatre une instruction SQL valide, conforme \xe0 la norme SQL-2 et tenant compte de l\u2019impl\xe9mentation actuelle du SQL dans 4D. Pour plus d\u2019information la prise en charge du SQL dans 4D, reportez-vous au manuel Guide de r\xe9f\xe9rence 4D SQL."]}),"\n",(0,l.jsxs)(n.p,{children:["Le param\xe8tre ",(0,l.jsx)(n.em,{children:"formuleSQL"})," peut contenir des r\xe9f\xe9rences \xe0 des expressions 4D. La syntaxe \xe0 utiliser est la m\xeame que pour les commandes SQL int\xe9gr\xe9es ou le code inclus dans les balises ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/begin-sql",children:"Begin SQL"}),"/",(0,l.jsx)(n.a,{href:"/docs/fr/commands/end-sql",children:"End SQL"}),", c\u2019est-\xe0-dire : ",(0,l.jsxs)(n.em,{children:["<",(0,l.jsx)(n.mavar,{children:">"})]})," ou ",(0,l.jsx)(n.em,{children:":MaVar"}),(0,l.jsx)(n.br,{}),"\nPour plus d\u2019informations sur ce point, reportez-vous \xe0 la section ",(0,l.jsx)(n.em,{children:"Pr\xe9sentation des commandes du th\xe8me SQL"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Cette commande est compatible avec les commandes ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-query-limit",children:"SET QUERY LIMIT"})," et ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/set-query-destination",children:"SET QUERY DESTINATION"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Rappel :"})," Les r\xe9f\xe9rences aux variables locales ne sont pas possibles en mode compil\xe9. Pour plus d'informations sur la programmation SQL dans 4D, reportez-vous \xe0 la section ",(0,l.jsx)(n.em,{children:"Pr\xe9sentation des commandes du th\xe8me SQL"}),"."]}),"\n",(0,l.jsx)(n.h5,{id:"a-propos-des-liens",children:"A propos des liens"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," n\u2019utilise pas les liens entre les tables d\xe9finis dans l\u2019\xe9diteur de structure de 4D. Si vous souhaitez tirer parti des donn\xe9es li\xe9es, vous devez ajouter une clause JOIN dans la requ\xeate. Par exemple, consid\xe9rons la structure suivante, dans laquelle un lien N vers 1 relie les champs [Personnes]Ville \xe0 [Villes]Nom :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-RAW",children:"[Personnes]\xa0\xa0\xa0Nom\xa0\xa0\xa0Ville[Villes]\xa0\xa0\xa0Nom\xa0\xa0\xa0Population\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Avec la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),", vous pourriez \xe9crire :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0QUERY BY FORMULA([Personnes];[Villes]Population>1000)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Avec ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"}),", vous devez \xe9crire l\u2019instruction suivante, que le lien existe ou non :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY SQL([Personnes];"personnes.ville=villes.nom AND villes.population>1000")\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note :"})," Les liens 1 vers N et N vers N sont \xe9galement trait\xe9s par ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," d\u2019une mani\xe8re diff\xe9rente de ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple recherche les bureaux dont les ventes sont sup\xe9rieures \xe0 100. La requ\xeate SQL est :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM Bureaux WHERE Ventes > 100\n"})}),"\n",(0,l.jsxs)(n.p,{children:["En utilisant la commande ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0C_STRING(30;$formuleRequete)\n\xa0$formuleRequete:="Ventes > 100"\n\xa0QUERY BY SQL([Bureaux];$formuleRequete)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple recherche les commandes comprises entre 3000 et 4000. La requ\xeate SQL est :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM Commandes WHERE Total BETWEEN 3000 AND 4000\n"})}),"\n",(0,l.jsxs)(n.p,{children:["En utilisant la commande ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0C_STRING(40;$formuleRequete)\n\xa0$formuleRequete:="Total BETWEEN 3000 AND 4000"\n\xa0QUERY BY SQL([Ventes];$formuleRequete)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple montre comment trier le r\xe9sultat de la requ\xeate sur un crit\xe8re sp\xe9cifique. La requ\xeate SQL est :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SELECT * FROM PersonnesWHERE Ville =\u2019Paris\u2019ORDER BY Nom\n"})}),"\n",(0,l.jsxs)(n.p,{children:["En utilisant la commande ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0C_STRING(40;$formuleRequete)\n\xa0$formuleRequete:="Ville = \u2018Paris\u2019 ORDER BY Nom"\n\xa0QUERY BY SQL([Personnes];$formuleRequete)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,l.jsx)(n.p,{children:"Cet exemple montre une requ\xeate utilisant des tables li\xe9es dans 4D. Via le SQL vous devez utiliser un JOIN pour recr\xe9er cette relation. Consid\xe9rons les deux tables suivantes :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-RAW",children:"\xa0\xa0\xa0[Factures] avec les champs (colonnes) suivants :\xa0\xa0\xa0\xa0\xa0\xa0ID_Fact : Entier long\xa0\xa0\xa0\xa0\xa0\xa0Date_Fact : Date\xa0\xa0\xa0\xa0\xa0\xa0Total : R\xe9el\xa0\xa0\xa0[Lignes_Factures] avec les champs (colonnes) suivants :\xa0\xa0\xa0\xa0\xa0\xa0ID_Ligne : Entier long\xa0\xa0\xa0\xa0\xa0\xa0ID_Fact : Entier long\xa0\xa0\xa0\xa0\xa0\xa0Code : Alpha (10)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Un lien de N vers 1 relie le champ [Lignes_Factures]ID_Fact au champ [Factures]ID_Fact.",(0,l.jsx)(n.br,{}),"\nAvec la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"}),", vous pourriez \xe9crire :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([Lignes_Factures];([Lignes_Factures]Code="FX-200")\xa0&\xa0(Month of([Factures]Date_Fact)=4))\n'})}),"\n",(0,l.jsx)(n.p,{children:"La requ\xeate SQL est :"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"SELECT ID_LigneFROM Lignes_Factures, FacturesWHERE Lignes_Factures.ID_Fact=Factures.ID_FactAND Lignes_Factures.Code='FX-200'AND MONTH(Factures.Date_Fact) = 4\n"})}),"\n",(0,l.jsxs)(n.p,{children:["En utilisant la commande ",(0,l.jsx)(n.strong,{children:"QUERY BY SQL"})," :"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0C_STRING(40;$formuleRequete)\n\xa0$formuleRequete:="Lignes_Factures.ID_Fact=Factures.ID_Fact AND Lignes_Factures.Code=\u2019FX-200\u2019 AND MONTH(Factures.Date_Fact)=4"\n\xa0QUERY BY SQL([Lignes_Factures];$formuleRequete)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,l.jsxs)(n.p,{children:["Si le format de la condition de recherche est correct, la variable syst\xe8me OK prend la valeur 1. Sinon, elle prend la valeur 0, le r\xe9sultat de la commande est une s\xe9lection vide et une erreur est retourn\xe9e. Cette erreur peut \xeatre intercept\xe9e par une m\xe9thode install\xe9e \xe0 l\u2019aide de la commande ",(0,l.jsx)(n.a,{href:"/docs/fr/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/fr/commands/query-by-formula",children:"QUERY BY FORMULA"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var r=s(667294);let l={},a=r.createContext(l);function t(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);