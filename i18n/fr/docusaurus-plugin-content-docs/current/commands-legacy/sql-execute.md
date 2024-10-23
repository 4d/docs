---
id: sql-execute
title: SQL EXECUTE
slug: /commands/sql-execute
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE.Syntax-->**SQL EXECUTE** ( *instructionSQL* {; *objetLié*}{; *objetLié2* ; ... ; *objetLiéN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| instructionSQL | Text | &#8594;  | Commande SQL à exécuter |
| objetLié | Variable, Field | &#8592; | Réception du résultat (si nécessaire) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SQL EXECUTE.Summary-->La commande **SQL EXECUTE** permet d’exécuter une commande SQL et d’associer le résultat à des objets 4D (tableaux, variables ou champs) liés.<!-- END REF--> 

Pour que la commande puisse être exécutée, une connexion valide doit être définie dans le process courant. 

Le paramètre *instructionSQL* contient la commande SQL à exécuter. Le paramètre *objetLié* reçoit les résultats. Les objets sont liés dans l’ordre de la colonne, ce qui signifie que les éventuelles colonnes distantes supplémentaires sont ignorées. 

:::note

La commande prend en charge jusqu'à 127 paramètres *objetLié*.  

:::

Si des champs 4D sont passés dans le(s) paramètre(s) *objetLié*, la commande créera des enregistrements et les sauvegardera automatiquement. Les champs doivent appartenir à la même table (il n’est pas possible de passer un champ de la table 1 et un champ de la table 2 dans le même appel). Si des champs de tables différentes sont passés, une erreur est générée. 

**Attention :** Lorsque vous passez des champs 4D dans le(s) paramètre(s) *objetLié* et exécutez la commande *SELECT*, ce sont toujours les données de la source 4D distante qui sont modifiées. Si vous souhaitez récupérer en local des données de la source distante, vous devez utiliser des tableaux locaux intermédiaires et appeler la commande *INSERT* (cf. exemple 6). 

Si vous passez des tableaux ou des variables 4D dans le(s) paramètre(s) *objetLié*, il est conseillé de les déclarer préalablement à l’appel de la commande afin de contrôler le type de données traitées. Les tableaux sont redimensionnés automatiquement si nécessaire. 

Dans le cas d’une variable 4D, un seul enregistrement est récupéré à la fois. 

**Note :** Pour plus d'informations sur le référencement des expressions 4D dans les requêtes SQL, reportez-vous à la section *Présentation des commandes du thème SQL*.

#### Exemple 1 

Dans cet exemple, nous récupérons la colonne ename de la table emp dans la source de données. Le résultat est stocké dans le champ 4D \[Employés\]Nom. Les enregistrements 4D seront créés automatiquement : 

```4d
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;[Employés]Nom)
 SQL LOAD RECORD(SQL all records)
```

#### Exemple 2 

Pour mieux contrôler la création des enregistrements, il est possible d’inclure le code au sein d’une transaction et de ne la valider que si le déroulement de l’opération s’est avéré satisfaisant :

```4d
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="SELECT alpha_field FROM app_testTable"
 START TRANSACTION
 SQL EXECUTE(SQLStmt;[Table 2]Champ1)
 While(Not(SQL End selection))
    SQL LOAD RECORD
    ... //Placer ici le code de validation des données
 End while
 VALIDATE TRANSACTION //Validation de la transaction
```

#### Exemple 3 

Dans cet exemple, nous récupérons la colonne ename de la table emp dans la source de données. Le résultat est stocké dans le tableau *tNoms*. Nous récupérons les enregistrements 10 par 10.

```4d
 ARRAY STRING(30;tNoms;20)
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;tNoms)
 While(Not(SQL End selection))
    SQL LOAD RECORD(10)
 End while
```

#### Exemple 4 

Dans cet exemple, nous récupérons les colonnes ename et job de la table emp pour un ID spécifique (clause WHERE) de la source de données. Le résultat est stocké dans les variables 4D *vNom* and *vJob*. Seul le premier enregistrement est récupéré.

```4d
 SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"
 SQL EXECUTE(SQLStmt;vName;vJob)
 SQL LOAD RECORD
```

#### Exemple 5 

Dans cet exemple, nous récupérons la colonne Champ\_Blob de la table Test dans la source de données. Le résultat est stocké dans une variable BLOB dont la valeur est mise à jour à chaque chargement d’enregistrement.

```4d
 var MonBlob : Blob
 SQL LOGIN
 SQL EXECUTE("SELECT Champ_Blob FROM Test";MonBlob)
 While(Not(SQL End selection))
  //On parcourt le résultat
    SQL LOAD RECORD
  //La valeur de MonBlob est mise à jour à chaque appel
 End while
```

#### Exemple 6 

Vous souhaitez récupérer en local des données stockées sur une base 4D Server distante. Pour cela, vous devez passer par des tableaux intermédiaires :

```4d
   // Connexion à la base distante
 SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)
 If(OK=1)
        //A partir de ce point les requêtes sont adressées à la base distante
    var $LastName_value : Text // variable 4D utilisée dans la chaine de recherche
    ARRAY TEXT($a_LastName;0) // Stockage temporaire des valeurs distantes de LastName
    ARRAY TEXT($a_FirstName;0) // Stockage temporaire des valeurs distantes de FirstName
    var $UseSQL : Boolean //Choix du moyen de stocker en local
        // les données de la base distante (démonstration uniquement)
 
     $LastName_value:="Smith"  // Initialisation de la variable 4D
 
        // Associer la variable 4D $LastName_value avec le premier "?" dans la requête SQL
    SQL SET PARAMETER($LastName_value;SQL param in)
 
        // Récupérer de la table PERSONS distante les valeurs des champs LastName et FirstName
        // où "LastName = Smith" et les stocker dans les tableaux $a_LastName et $a_FirstName
    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)
    If(Not(SQL End selection))  // si au moins un enregistrement est trouvé
 
       SQL LOAD RECORD(SQL all records)  // Charger tous les enregistrements
 
       $UseSQL:=True  // Pour choisir la manière d'intégrer les données (démonstration uniquement)
 
       If($UseSQL)  // Utilisation de requêtes SQL
          SQL LOGOUT  // Déconnexion de la base distante
          SQL LOGIN(SQL_INTERNAL;"user";"password")  // Connexion à la base locale
              //A partir de ce point les requêtes sont adressées à la base locale
              // Sauvegarde des tableaux $a_LastName et $a_FirstName dans la table locale PERSONS
          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")
 
       Else   // Utilisation de commandes 4D
          For($i;1;Size of array($a_LastName))
             CREATE RECORD([PERSONS])
             [PERSONS]LastName:=$a_LastName{$i}
             [PERSONS]FirstName:=$a_FirstName{$i}
             SAVE RECORD([PERSONS])
          End for
       End if
    End if
    SQL LOGOUT  // Fermeture de la connexion
 End if
```

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK retourne 1, sinon elle retourne 0.

#### Voir aussi 

[SQL LOAD RECORD](sql-load-record.md)  