---
id: verify-data-file
title: VERIFY DATA FILE
slug: /commands/verify-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY DATA FILE.Syntax-->**VERIFY DATA FILE** ( *cheminStructure* ; *cheminDonnées* ; *objets* ; *options* ; *méthode* {; *tabTables* {; *tabChamps*}} )<!-- END REF-->
<!--REF #_command_.VERIFY DATA FILE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminStructure | Text | &#8594;  | Chemin d’accès du fichier de structure de la base à vérifier |
| cheminDonnées | Text | &#8594;  | Chemin d’accès du fichier de données de la base à vérifier |
| objets | Integer | &#8594;  | Objets à vérifier |
| options | Integer | &#8594;  | Options de vérification |
| méthode | Text | &#8594;  | Nom de la méthode 4D de rétroappel |
| tabTables | Integer array | &#8594;  | Numéros des tables à vérifier |
| tabChamps | 2D Integer array, 2D Integer array, 2D Real array | &#8594;  | Numéros des index à vérifier |

<!-- END REF-->

#### Description 

<!--REF #_command_.VERIFY DATA FILE.Summary-->La commande **VERIFY DATA FILE** effectue une vérification structurelle des objets contenus dans le fichier de données 4D désigné par *cheminStructure* et *cheminDonnées*.<!-- END REF-->Pour plus d’informations sur le processus de vérification des données, reportez-vous au manuel Mode Développement.

*cheminStructure* désigne le fichier de structure (compilé ou non) associé au fichier de données à vérifier. Il peut s’agir du fichier de structure ouvert ou de tout autre fichier de structure. Vous devez passer un chemin d’accès complet, exprimé avec la syntaxe du système d’exploitation. Vous pouvez également passer une chaîne vide, dans ce cas une boîte de dialogue standard d’ouverture de fichiers apparaît, permettant à l’utilisateur de désigner le fichier de structure à utiliser.   
  
*cheminDonnées* désigne un fichier de données 4D (.4DD). Il doit correspondre au fichier de structure défini par le paramètre *cheminStructure*. Attention, vous pouvez désigner le fichier de structure courant mais le fichier de données ne doit pas être le fichier courant (ouvert). Pour vérifier le fichier de données ouvert, utilisez la commande [VERIFY CURRENT DATA FILE](verify-current-data-file.md). Si vous tentez de vérifier le fichier de données courant avec la commande **VERIFY DATA FILE**, une erreur est générée.  
Le fichier de données désigné est ouvert en lecture seulement. Vous devez veiller à ce qu’aucune application n’accède à ce fichier en écriture, sinon les résultats de la vérification pourront être faussés.   
Vous pouvez passer dans le paramètre *cheminDonnées* une chaîne vide, un nom de fichier ou un chemin d’accès complet, exprimé dans la syntaxe du système d’exploitation. Si vous passez une chaîne vide, la boîte de dialogue standard d’ouverture de fichier apparaît, permettant à l’utilisateur de désigner le fichier à vérifier (à noter dans ce cas qu’il n’est pas possible de sélectionner le fichier de données courant). Si vous passez uniquement un nom de fichier de données, 4D le recherchera au même niveau que le fichier de structure défini.  
  
Le paramètre *objets* permet de désigner le(s) type(s) d’objets à vérifier. Deux types d’objets peuvent être vérifiés : les enregistrements et les index. Utilisez les constantes suivantes, placés dans le thème *Maintenance fichier de données* :  

| Constante      | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                     |
| -------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verify all     | Entier long | 16     |                                                                                                                                                                                                                                                                                             |
| Verify indexes | Entier long | 8      | Cette option contrôle la cohérence physique des index, sans lien avec les données. Elle signale des clés invalides mais ne permet pas de détecter les clés dupliquées (deux index pointant vers le même enregistrement). Ce type d'erreur ne peut être détecté qu'avec l'option Verify all. |
| Verify records | Entier long | 4      |                                                                                                                                                                                                                                                                                             |

  
Pour vérifier les enregistrements et les index, passez le cumul *Vérifier enregistrements*+*Vérifier index*. La valeur 0 (zéro) permet également d’obtenir le même résultat. L’option Verify all effectue la vérification interne la plus complète. Cette vérification est compatible avec la création d’un historique.  
  
Le paramètre *options* permet de définir les options de vérification. Les options suivantes sont disponibles, accessibles via des constantes du thème *Maintenance fichier de données* :   

| Constante               | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Do not create log file  | Entier long | 16384  | En principe, la commande crée un fichier d’historique au format xml (reportez-vous à la fin de la description de la commande). Vous pouvez annuler ce fonctionnement en passant cette option.                                                                                                                                                           |
| Timestamp log file name | Entier long | 262144 | Lorsque cette option est passée, le nom du fichier d'historique généré contiendra la date et l'heure de sa création, par conséquent il ne remplacera aucun fichier d'historique éventuellement déjà généré. Par défaut, si cette option n'est pas passée, le nom du fichier n'est pas horodaté, et chaque nouveau fichier généré remplace le précédent. |

  
Pour créer l’historique, passez 0 dans *options*.  
  
Le paramètre *méthode* permet de définir une méthode de rétro-appel qui sera régulièrement appelée durant la vérification. Si vous passez une chaîne vide ou un nom de méthode non valide, ce paramètre est ignoré (aucune méthode n’est appelée). Lorsqu’elle est appelée, la méthode reçoit jusqu’à 5 paramètres en fonction des objets vérifiés et du type d’événement à l’origine de l’appel (cf. tableau des appels). Vous devez impérativement déclarer ces paramètres dans la méthode : 

| $1 | Entier long | Type de message (cf. tableau) |
| -- | ----------- | ----------------------------- |
| $2 | Entier long | Type d’objet                  |
| $3 | Texte       | Message                       |
| $4 | Entier long | Numéro de table               |
| $5 | Entier long | Réservé                       |

Le tableau suivant décrit le contenu des paramètres en fonction du type d’événement :

| **Evénement**             | **$1 (Entier long)** | **$2 (** **Entier**   **long)** | **$3 (Texte)** | **$4 (** **Entier**   **long)** | **$5 (** **Entier**   **long)** |
| ------------------------- | -------------------- | ------------------------------- | -------------- | ------------------------------- | ------------------------------- |
| Message                   | 1                    | 0                               | Progression    | Pourcentage                     | Réservé                         |
| message                   | réalisé (0-100)      |                                 |                |                                 |                                 |
| Vérification terminée(\*) | 2                    | Type d’objet(\*\*)              | Message OK     | Table ou index                  | Réservé                         |
| test                      | numéro               |                                 |                |                                 |                                 |
| Erreur                    | 3                    | Type d’objet(\*\*)              | Texte d’erreur | Table ou index                  | Réservé                         |
| message                   | numéro               |                                 |                |                                 |                                 |
| Fin d’exécution           | 4                    | 0                               | DONE           | 0                               | Réservé                         |
| Warning                   | 5                    | Type d'objet(\*\*)              | Texte d'erreur | Table ou index                  | Réservé                         |
| message                   | numéro               |                                 |                |                                 |                                 |

(\*) L'événement *Vérification terminée* ($1=2) n'est jamais renvoyé lorsque le mode de vérification est Verify all. Il n'est utilisé qu'en mode Verify records ou Verify indexes.

(\*\*) *Type d’objet* : Lorsqu’un objet est vérifié, un message "terminé" ($1=2), erreur ($1=3) ou warning ($1=5) peut être envoyé. Le type d’objet retourné dans $2 peut être l’un des suivants :

* 0 = indéterminé
* 4 = enregistrement
* 8 = index
* 16 = objet structure (contrôle préliminaire du fichier de données).

*Cas particulier* : lorsque $4 = 0 pour $1 = 2, 3 ou 5, le message ne concerne pas une table mais le fichier de données dans son ensemble.

La méthode de rétro-appel doit également retourner une valeur dans $0 (Entier long), permettant de contrôler l’exécution de l’opération :

* si $0 = 0, l’opération continue normalement
* si $0 = -128, l’opération est stoppée sans erreur générée
* si $0 = autre valeur, l’opération est stoppée et la valeur passée dans $0 est retournée en tant que numéro d’erreur. Cette erreur peut être interceptée par une méthode d’appel sur erreur.

**Note :** Il n'est pas possible d'interrompre l'exécution via $0 après que l'événement *Fin d'exécution* ($4=1) a été généré.

Deux tableaux facultatifs peuvent également être utilisés par la commande :

* Le tableau *tabTables* contient les numéros des tables dont les enregistrements doivent être vérifiés. Il permet de limiter la vérification à certaines tables. Si ce paramètre n’est pas passé ou si le tableau est vide et que le paramètre *objets* contient Verify records, toutes les tables sont vérifiées.
* Le tableau *tabChamps* contient les numéros des champs indexés dont les index doivent être vérifiés. Si ce paramètre n’est pas passé ou si le tableau est vide et que le paramètre *objets* contient Verify indexes, tous les index sont vérifiés. La commande ignore les champs non indexés. Si un champ contient plusieurs index, tous les index sont vérifiés. Si un champ fait partie d’un index composite, la totalité de l’index est vérifiée.  
Vous devez passer un tableau 2D dans *tabChamps*. Pour chaque ligne du tableau :  
\- l’élément {0} contient le numéro de la table,  
\- les autres éléments {1...n} contiennent les numéros des champs.

Par défaut, la commande **VERIFY DATA FILE** crée un fichier d'historique au format xml (si vous n'avez pas passé l'option Do not create log file, cf. paramètre *options*). Son nom est basé sur celui du fichier de structure de la base et il est placé dans le dossier **Logs** de cette base. Par exemple, pour un fichier de structure nommé “myDB.4db”, le fichier d’historique sera nommé “myDB\_Verify\_Log.xml”.   
Si vous avez passé l'option Timestamp log file name, le nom du fichier d'historique inclut la date et l'heure de sa création sous la forme "AAAA-MM-JJ HH-MM-SS", ce qui donne par exemple : “myDB\_Verify\_Log\_2015-09-27 15-20-35.xml”. Ce principe permet d'éviter que chaque nouveau fichier d'historique écrase le précédent, mais pourra nécessiter ultérieurement une action manuelle afin de supprimer les fichiers superflus.   
Quelle que soit l'option sélectionnée, dès lors qu'un fichier d'historique est généré, son chemin est retourné dans la variable système *Document* à l'issue de l'exécution de la commande.

#### Exemple 1 

Vérification simple des données et des index :

```4d
 VERIFY DATA FILE($NomStruct;$NomData;Verify indexes+Verify records;Ne pas créer d’historique;"")
```

#### Exemple 2 

Vérification complète avec historique :

```4d
 VERIFY DATA FILE($NomStruct;$NomData;Verify all;0;"")
```

#### Exemple 3 

Vérification des enregistrements uniquement :

```4d
 VERIFY DATA FILE($NomStruct;$NomData;Verify records;0;"")
```

#### Exemple 4 

Vérification des enregistrements des tables 3 et 7 uniquement :

```4d
 ARRAY LONGINT($tnumTables;2)
 $tnumTables{1}:=3
 $tnumTables{2}:=7
 VERIFY DATA FILE($NomStruct;$NomData;Verify records;0;"FollowScan";$tnumTables)
```

#### Exemple 5 

Vérification d’index spécifiques (index du champ 1 de la table 4 et index des champs 2 et 3 de la table 5) :

```4d
 ARRAY LONGINT($tnumTables;0) //non utilisé mais obligatoire
 ARRAY LONGINT($tindex;2;0) //2 lignes (colonnes ajoutées ensuite)
 $tindex{1}{0}:=4 // numéro de table dans l’élément 0
 APPEND TO ARRAY($tindex{1};1) // numéro du 1er champ à vérifier
 $tindex{2}{0}:=5 // numéro de table dans l’élément 0
 APPEND TO ARRAY($tindex{2};2) // numéro du 1er champ à vérifier
 APPEND TO ARRAY($tindex{2};3) // numéro du 2e champ à vérifier
 VERIFY DATA FILE($NomStruct;$NomData;Verify indexes;0;"FollowScan";$tnumTables;$tindex)
```

#### Exemple 6 

Vérification du fichier de données, création et affichage du fichier d'historique :

```4d
 VERIFY DATA FILE(Structure file;Data file;Tout vérifier;0;"")
 SHOW ON DISK(File(Fichier log vérification).platformPath)
```

#### Variables et ensembles système 

Si la méthode de rétro-appel passée n’existe pas, la vérification n’est pas effectuée, une erreur est générée et la variable OK prend la valeur 0\. Si un fichier d'historique a été généré, son chemin complet est retourné dans la variable système Document. 

#### Voir aussi 

[VERIFY CURRENT DATA FILE](verify-current-data-file.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 939 |
| Thread safe | &check; |
| Modifie les variables | OK, Document, error |
| Interdite sur le serveur ||


