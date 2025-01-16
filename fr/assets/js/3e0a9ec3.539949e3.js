"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["99105"],{160035:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>a,assets:()=>d,toc:()=>o,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/sql-execute","title":"SQL EXECUTE","description":"SQL EXECUTE ( instructionSQL {; objetLi\xe9}{; objetLi\xe92 ; ... ; objetLi\xe9N} )","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/sql-execute.md","sourceDirName":"commands-legacy","slug":"/commands/sql-execute","permalink":"/docs/fr/commands/sql-execute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsql-execute.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"sql-execute","title":"SQL EXECUTE","slug":"/commands/sql-execute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SQL End selection","permalink":"/docs/fr/commands/sql-end-selection"},"next":{"title":"SQL EXECUTE SCRIPT","permalink":"/docs/fr/commands/sql-execute-script"}}'),t=s("785893"),l=s("250065");let r={id:"sql-execute",title:"SQL EXECUTE",slug:"/commands/sql-execute",displayed_sidebar:"docs"},i=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple 1",id:"exemple-1",level:4},{value:"Exemple 2",id:"exemple-2",level:4},{value:"Exemple 3",id:"exemple-3",level:4},{value:"Exemple 4",id:"exemple-4",level:4},{value:"Exemple 5",id:"exemple-5",level:4},{value:"Exemple 6",id:"exemple-6",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:4}];function c(e){let n={a:"a",admonition:"admonition",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SQL EXECUTE"})," ( ",(0,t.jsx)(n.em,{children:"instructionSQL"})," {; ",(0,t.jsx)(n.em,{children:"objetLi\xe9"}),"}{; ",(0,t.jsx)(n.em,{children:"objetLi\xe92"})," ; ... ; ",(0,t.jsx)(n.em,{children:"objetLi\xe9N"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"instructionSQL"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Commande SQL \xe0 ex\xe9cuter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objetLi\xe9"}),(0,t.jsx)(n.td,{children:"Variable, Field"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"R\xe9ception du r\xe9sultat (si n\xe9cessaire)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SQL EXECUTE"})," permet d\u2019ex\xe9cuter une commande SQL et d\u2019associer le r\xe9sultat \xe0 des objets 4D (tableaux, variables ou champs) li\xe9s."]}),"\n",(0,t.jsx)(n.p,{children:"Pour que la commande puisse \xeatre ex\xe9cut\xe9e, une connexion valide doit \xeatre d\xe9finie dans le process courant."}),"\n",(0,t.jsxs)(n.p,{children:["Le param\xe8tre ",(0,t.jsx)(n.em,{children:"instructionSQL"})," contient la commande SQL \xe0 ex\xe9cuter. Le param\xe8tre ",(0,t.jsx)(n.em,{children:"objetLi\xe9"})," re\xe7oit les r\xe9sultats. Les objets sont li\xe9s dans l\u2019ordre de la colonne, ce qui signifie que les \xe9ventuelles colonnes distantes suppl\xe9mentaires sont ignor\xe9es."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["La commande prend en charge jusqu'\xe0 127 param\xe8tres ",(0,t.jsx)(n.em,{children:"objetLi\xe9"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Si des champs 4D sont pass\xe9s dans le(s) param\xe8tre(s) ",(0,t.jsx)(n.em,{children:"objetLi\xe9"}),", la commande cr\xe9era des enregistrements et les sauvegardera automatiquement. Les champs doivent appartenir \xe0 la m\xeame table (il n\u2019est pas possible de passer un champ de la table 1 et un champ de la table 2 dans le m\xeame appel). Si des champs de tables diff\xe9rentes sont pass\xe9s, une erreur est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention :"})," Lorsque vous passez des champs 4D dans le(s) param\xe8tre(s) ",(0,t.jsx)(n.em,{children:"objetLi\xe9"})," et ex\xe9cutez la commande ",(0,t.jsx)(n.em,{children:"SELECT"}),", ce sont toujours les donn\xe9es de la source 4D distante qui sont modifi\xe9es. Si vous souhaitez r\xe9cup\xe9rer en local des donn\xe9es de la source distante, vous devez utiliser des tableaux locaux interm\xe9diaires et appeler la commande ",(0,t.jsx)(n.em,{children:"INSERT"})," (cf. exemple 6)."]}),"\n",(0,t.jsxs)(n.p,{children:["Si vous passez des tableaux ou des variables 4D dans le(s) param\xe8tre(s) ",(0,t.jsx)(n.em,{children:"objetLi\xe9"}),", il est conseill\xe9 de les d\xe9clarer pr\xe9alablement \xe0 l\u2019appel de la commande afin de contr\xf4ler le type de donn\xe9es trait\xe9es. Les tableaux sont redimensionn\xe9s automatiquement si n\xe9cessaire."]}),"\n",(0,t.jsx)(n.p,{children:"Dans le cas d\u2019une variable 4D, un seul enregistrement est r\xe9cup\xe9r\xe9 \xe0 la fois."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Pour plus d'informations sur le r\xe9f\xe9rencement des expressions 4D dans les requ\xeates SQL, reportez-vous \xe0 la section ",(0,t.jsx)(n.em,{children:"Pr\xe9sentation des commandes du th\xe8me SQL"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple-1",children:"Exemple 1"}),"\n",(0,t.jsx)(n.p,{children:"Dans cet exemple, nous r\xe9cup\xe9rons la colonne ename de la table emp dans la source de donn\xe9es. Le r\xe9sultat est stock\xe9 dans le champ 4D [Employ\xe9s]Nom. Les enregistrements 4D seront cr\xe9\xe9s automatiquement :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;[Employ\xe9s]Nom)\n SQL LOAD RECORD(SQL all records)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-2",children:"Exemple 2"}),"\n",(0,t.jsx)(n.p,{children:"Pour mieux contr\xf4ler la cr\xe9ation des enregistrements, il est possible d\u2019inclure le code au sein d\u2019une transaction et de ne la valider que si le d\xe9roulement de l\u2019op\xe9ration s\u2019est av\xe9r\xe9 satisfaisant :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' SQL LOGIN("mysql";"root";"")\n SQLStmt:="SELECT alpha_field FROM app_testTable"\n START TRANSACTION\n SQL EXECUTE(SQLStmt;[Table 2]Champ1)\n While(Not(SQL End selection))\n    SQL LOAD RECORD\n    ... //Placer ici le code de validation des donn\xe9es\n End while\n VALIDATE TRANSACTION //Validation de la transaction\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-3",children:"Exemple 3"}),"\n",(0,t.jsxs)(n.p,{children:["Dans cet exemple, nous r\xe9cup\xe9rons la colonne ename de la table emp dans la source de donn\xe9es. Le r\xe9sultat est stock\xe9 dans le tableau ",(0,t.jsx)(n.em,{children:"tNoms"}),". Nous r\xe9cup\xe9rons les enregistrements 10 par 10."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' ARRAY STRING(30;tNoms;20)\n SQLStmt:="SELECT ename FROM emp"\n SQL EXECUTE(SQLStmt;tNoms)\n While(Not(SQL End selection))\n    SQL LOAD RECORD(10)\n End while\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-4",children:"Exemple 4"}),"\n",(0,t.jsxs)(n.p,{children:["Dans cet exemple, nous r\xe9cup\xe9rons les colonnes ename et job de la table emp pour un ID sp\xe9cifique (clause WHERE) de la source de donn\xe9es. Le r\xe9sultat est stock\xe9 dans les variables 4D ",(0,t.jsx)(n.em,{children:"vNom"})," and ",(0,t.jsx)(n.em,{children:"vJob"}),". Seul le premier enregistrement est r\xe9cup\xe9r\xe9."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"\n SQL EXECUTE(SQLStmt;vName;vJob)\n SQL LOAD RECORD\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-5",children:"Exemple 5"}),"\n",(0,t.jsx)(n.p,{children:"Dans cet exemple, nous r\xe9cup\xe9rons la colonne Champ_Blob de la table Test dans la source de donn\xe9es. Le r\xe9sultat est stock\xe9 dans une variable BLOB dont la valeur est mise \xe0 jour \xe0 chaque chargement d\u2019enregistrement."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var MonBlob : Blob\n SQL LOGIN\n SQL EXECUTE("SELECT Champ_Blob FROM Test";MonBlob)\n While(Not(SQL End selection))\n  //On parcourt le r\xe9sultat\n    SQL LOAD RECORD\n  //La valeur de MonBlob est mise \xe0 jour \xe0 chaque appel\n End while\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemple-6",children:"Exemple 6"}),"\n",(0,t.jsx)(n.p,{children:"Vous souhaitez r\xe9cup\xe9rer en local des donn\xe9es stock\xe9es sur une base 4D Server distante. Pour cela, vous devez passer par des tableaux interm\xe9diaires :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'   // Connexion \xe0 la base distante\n SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)\n If(OK=1)\n        //A partir de ce point les requ\xeates sont adress\xe9es \xe0 la base distante\n    var $LastName_value : Text // variable 4D utilis\xe9e dans la chaine de recherche\n    ARRAY TEXT($a_LastName;0) // Stockage temporaire des valeurs distantes de LastName\n    ARRAY TEXT($a_FirstName;0) // Stockage temporaire des valeurs distantes de FirstName\n    var $UseSQL : Boolean //Choix du moyen de stocker en local\n        // les donn\xe9es de la base distante (d\xe9monstration uniquement)\n \n     $LastName_value:="Smith"  // Initialisation de la variable 4D\n \n        // Associer la variable 4D $LastName_value avec le premier "?" dans la requ\xeate SQL\n    SQL SET PARAMETER($LastName_value;SQL param in)\n \n        // R\xe9cup\xe9rer de la table PERSONS distante les valeurs des champs LastName et FirstName\n        // o\xf9 "LastName = Smith" et les stocker dans les tableaux $a_LastName et $a_FirstName\n    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)\n    If(Not(SQL End selection))  // si au moins un enregistrement est trouv\xe9\n \n       SQL LOAD RECORD(SQL all records)  // Charger tous les enregistrements\n \n       $UseSQL:=True  // Pour choisir la mani\xe8re d\'int\xe9grer les donn\xe9es (d\xe9monstration uniquement)\n \n       If($UseSQL)  // Utilisation de requ\xeates SQL\n          SQL LOGOUT  // D\xe9connexion de la base distante\n          SQL LOGIN(SQL_INTERNAL;"user";"password")  // Connexion \xe0 la base locale\n              //A partir de ce point les requ\xeates sont adress\xe9es \xe0 la base locale\n              // Sauvegarde des tableaux $a_LastName et $a_FirstName dans la table locale PERSONS\n          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")\n \n       Else   // Utilisation de commandes 4D\n          For($i;1;Size of array($a_LastName))\n             CREATE RECORD([PERSONS])\n             [PERSONS]LastName:=$a_LastName{$i}\n             [PERSONS]FirstName:=$a_FirstName{$i}\n             SAVE RECORD([PERSONS])\n          End for\n       End if\n    End if\n    SQL LOGOUT  // Fermeture de la connexion\n End if\n'})}),"\n",(0,t.jsx)(n.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsx)(n.p,{children:"Si la commande a \xe9t\xe9 correctement ex\xe9cut\xe9e, la variable syst\xe8me OK retourne 1, sinon elle retourne 0."}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/sql-load-record",children:"SQL LOAD RECORD"})}),"\n",(0,t.jsx)(n.h4,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Num\xe9ro de commande"}),(0,t.jsx)(n.td,{children:"820"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifie les variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var a=s(667294);let t={},l=a.createContext(t);function r(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);