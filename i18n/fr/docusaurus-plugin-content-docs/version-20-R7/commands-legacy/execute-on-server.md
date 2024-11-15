---
id: execute-on-server
title: Execute on server
slug: /commands/execute-on-server
displayed_sidebar: docs
---

<!--REF #_command_.Execute on server.Syntax-->**Execute on server** ( *procédure* ; *pile* {; *nom* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Execute on server.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| procédure | Text | &#8594;  | Procédure à exécuter dans le process |
| pile | Integer | &#8594;  | Taille de la pile en octets (0 = taille par défaut) |
| nom | Text | &#8594;  | Nom du process créé |
| param | Expression | &#8594;  | Paramètre(s) de la procédure |
| * | Opérateur | &#8594;  | Process unique |
| Résultat | Integer | &#8592; | Numéro du process pour un process nouvellement créé ou un process déjà en cours d'exécution |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Execute on server.Summary-->La commande **Execute on server** lance un nouveau process sur la machine serveur (lorsqu'elle est appelée en environnement client/serveur) et retourne le numéro de ce process.<!-- END REF-->

**Execute on server** vous permet de démarrer une procédure stockée. Pour plus d'informations sur les procédures stockées, reportez-vous à la section *Procédures stockées* dans le manuel de référence de 4D Server. 

Si vous appelez **Execute on server** sur un poste client, la commande retourne un numéro de process négatif. Si vous appelez **Execute on server** sur le poste serveur, la commande retourne un numéro de process positif. A noter que l'appel de la fonction [New process](new-process.md) sur le poste serveur est équivalent à l'appel de **Execute on server**.

Si le process n'a pas pu être créé (par exemple s'il n'y a pas assez de mémoire), **Execute on server** retourne zéro et une erreur est générée. Vous pouvez intercepter cette erreur à l'aide d'une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).

##### Méthode du process 

 Vous passez le nom de la méthode de gestion du nouveau process dans *procédure*. Une fois que 4D a défini le contexte pour le nouveau process, il démarre l'exécution de cette méthode qui devient alors la méthode du process.

##### Pile du process 

Le paramètre *pile* permet d'indiquer la quantité de mémoire allouée pour la pile du process. Cette valeur représente la place utilisée en mémoire pour "empiler" les appels de méthode, les variables locales, les paramètres des sous-routines et les enregistrements empilés.

* Passez 0 dans *pile* pour utiliser une taille de pile par défaut, adaptée à la plupart des applications (paramétrage recommandé).
* Dans certains cas particuliers, vous pouvez souhaiter fixer une valeur personnalisée. Elle doit être exprimée en octets. Ce paramètre doit être utilisé avec précaution, il dépend de la chaîne d'appel dans le process et de la plateforme.

**Note :** La pile n'est pas la mémoire totale réservée au process. Les process se partagent la mémoire pour les enregistrements, les variables interprocess, etc. Un process utilise également de la mémoire supplémentaire pour stocker ses variables process. La pile contient diverses informations internes à 4D ; la taille de ces informations varie en fonction du nombre d'appels de méthodes imbriquées.

##### Nom du process : 

Vous passez le nom du nouveau process dans *nom*. Avec 4D monoposte, ce nom s'affichera dans la liste des process de l'Explorateur d'exécution et sera retourné par la commande [Process info](../commands/process-info.md) appliquée à ce process. En client/serveur, ce nom apparaîtra en bleu dans la liste des **Procédures stockées** de la fenêtre principale de 4D Server. 

Vous pouvez omettre ce paramètre ; dans ce cas, le nom du process sera une chaîne vide. 

**Attention :** A la différence de la commande [New process](new-process.md), vous ne devez pas avec **Execute on server** créer un process local en préfixant son nom du symbole dollar (*$*). Cela fonctionnerait correctement en version monoposte, car **Execute on server** se comporte comme [New process](new-process.md) dans cet environnement, mais, en client/serveur, cela génèrerait une erreur. 

##### Paramètres de la méthode process : 

Vous pouvez passer des paramètres à la méthode process. Vous pouvez le faire de la même manière que pour les sous-routines. Notez cependant qu'il y a une restriction : vous ne pouvez pas passer d'expression de type Pointeur. Rappelez-vous également que les tableaux ne peuvent pas être passés comme paramètres à une méthode. Une fois qu'elle a commencé à s'exécuter dans le contexte du nouveau process, la méthode process reçoit les valeurs des paramètres dans *$1*, *$2*, etc. 

**Note** **:** Si vous passez des paramètres à la méthode process, vous devez passer le paramètre *nom*, il ne peut être omis dans ce cas. 

Si vous passez un objet 4D ([C\_OBJECT](c-object.md)) ou une collection ([C\_COLLECTION](c-collection.md)) comme *param*, une copie est envoyée (et non une référence) et la forme JSON est utilisée en utf-8 pour le serveur. Si l’objet ou la collection contient des pointeurs, leur valeurs dépointées sont envoyées, pas les pointeurs eux-mêmes.

##### Paramètre optionnel \* 

Si vous passez le dernier paramètre (optionnel) *\**, vous indiquez à 4D de vérifier en premier lieu si un process du même nom que celui que vous avez passé dans *nom* est déjà en cours d'exécution. Si c'est le cas, 4D ne démarre pas de nouveau process et retourne le numéro du process existant.

#### Exemple 1 

Vous souhaitez enregistrer certaines informations relatives à la machine distante dans un fichier texte sur la machine serveur.

Vous exécutez la méthode avec des informations locales en tant que paramètres sur la machine distante :

```4d
 $process:=Execute on server("WriteLog";0;"WriteLogFile";Current user;String(Current date);String(Current time))
```

La méthode WriteLog sera exécutée sur le serveur. Elle contient, par exemple :

```4d
 var $1;$2;$3 : Text
 TEXT TO DOCUMENT(Get 4D folder(Logs folder)+"Log"+$1+".txt";$2+" "+$3)
```

#### Exemple 2 

L'exemple suivant démontre comment l'import de données peut être accéléré de manière spectaculaire en environnement client/serveur. La méthode Import classique listée ci-dessous vous permet de mesurer combien de temps prend un import d'enregistrements basé sur la commande [IMPORT TEXT](import-text.md) :

```4d
  // Méthode projet Import classique
 $vhDocRef:=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    FORM SET INPUT([Table1];"Import")
    $vhStartTime:=Current time
    IMPORT TEXT([Table1];Document)
    $vhEndTime:=Current time
    ALERT("L'opération a duré "+String(0+($vhEndTime-$vhStartTime))+" secondes.")
 End if
```

Avec l'import de données classique, 4D Client analyse le fichier ASCII puis, pour chaque enregistrement, crée un nouvel enregistrement, remplit les champs avec les valeurs importées et envoie l'enregistrement au poste serveur afin qu'il soit ajouté à la base. Par conséquent, de nombreuses requêtes circulent sur le réseau. Afin d'optimiser l'opération, vous pouvez utiliser des procédures stockées pour effectuer l'import localement sur le poste serveur. Le poste client charge le document dans un BLOB et déclenche une procédure stockée en passant le BLOB comme paramètre. La procédure stockée place le BLOB dans un document sur le disque du poste serveur, puis importe le document en local. L'import des données est par conséquent effectué localement à une vitesse comparable à celle d'une version monoposte de 4D, car la plupart des requêtes transitant sur le réseau ont été éliminées. Voici la méthode projet CLIENT IMPORT. Lancée sur le poste client, elle déclenche l'exécution de la procédure stockée SERVER IMPORT, listée à la suite :

```4d
  // Méthode projet CLIENT IMPORT
  // CLIENT IMPORT ( Pointeur ; Alpha )
  // CLIENT IMPORT ( -> [Table] ; Formulaire entrée )
 
 var $1 : Pointer
 var $2 : Text
 var $vhDocRef : Time
 var $vxData : Blob
 var spErrCode : Integer
 
  // Sélectionnez le document à importer
 $vhDocRef:=Open document("")
 If(OK=1)
  // Si un document était sélectionné, ne pas le garder ouvert
    CLOSE DOCUMENT($vhDocRef)
    $vhStartTime:=Current time
  // Essayons de le charger en mémoire
    DOCUMENT TO BLOB(Document;$vxData)
    If(OK=1)
  // Si le document a pu être chargé dans le BLOB,
  // Démarrer la procédure stockée qui va importer les données sur le poste serveur
       $spProcessID:=Execute on server("SERVER IMPORT";0;"Serveur Import Services";Table($1);$2;$vxData)
  // Nous n'avons alors plus besoin du BLOB dans ce process
       CLEAR VARIABLE($vxData)
  // Attendons l'achèvement de l'opération effectuée par la procédure stockée
       Repeat
          DELAY PROCESS(Current process;300)
          GET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
          If(Undefined(spErrCode))
  // Note: si la procédure stockée n'a pas initialisé sa propre instance
  // de la variable spErrCode, il se peut qu'une variable indéfinie soit retournée
             spErrCode:=1
          End if
       Until(spErrCode<=0)
  // Envoyons un accusé de réception à la procédure stockée
       spErrCode:=1
       SET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
       $vhEndTime:=Current time
       ALERT("L'opération a duré "+String(0+($vhEndTime-$vhStartTime))+" secondes.")
    Else
       ALERT("Il n'y a pas assez de mémoire pour charger le document.")
    End if
 End if
```

Voici la méthode projet SERVER IMPORT exécutée en tant que procédure stockée :

```4d
  // Méthode projet SERVER IMPORT
  // SERVER IMPORT ( Entier long ; Alpha ; BLOB )
  // SERVER IMPORT ( Numéro de table ; Formulaire entrée ; Données importées )
 
 var $1 : Integer
 var $2 : Text
 var $3 : Blob
 var spErrCode : Integer
 
  // L'opération n'est pas encore terminée, affectons 1 à spErrCode
 spErrCode:=1
 $vpTable:=Table($1)
 FORM SET INPUT($vpTable->;$2)
 $vsDocName:="Fichier Import "+String(1+Random)
 DELETE DOCUMENT($vsDocName)
 BLOB TO DOCUMENT($vsDocName;$3)
 IMPORT TEXT($vpTable->;$vsDocName)
 DELETE DOCUMENT($vsDocName)
  // L'opération est terminée, affectons 0 à spErrCode
 spErrCode:=0
  // Attendons que le poste client à l'origine de la requête ait reçu les résultats
 Repeat
    DELAY PROCESS(Current process;1)
 Until(spErrCode>0)
```

Une fois que ces deux méthodes projet ont été implémentées dans votre base, vous pouvez effectuer un import basé sur une procédure stockée, en écrivant par exemple :

```4d
 CLIENT IMPORT(->[Table1];"Import")
```

Si vous réalisez quelques tests comparatifs, vous pourrez constater qu'avec ce type de méthode, l'import des enregistrements est jusqu'à 60 fois plus rapide qu'un import "classique".

#### Exemple 3 

Reportez-vous à la section *Services basés sur les procédures stockées (exemple)* dans le *Guide de référence* de 4D Server.

#### Voir aussi 

[EXECUTE ON CLIENT](execute-on-client.md)  
[New process](new-process.md)  