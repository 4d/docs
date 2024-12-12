---
id: method-resolve-path
title: METHOD RESOLVE PATH
slug: /commands/method-resolve-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD RESOLVE PATH.Syntax-->**METHOD RESOLVE PATH** ( *chemin* ; *typeMéthode* ; *ptrTable* ; *nomObjet* ; *nomObjetForm* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD RESOLVE PATH.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text | &#8594;  | Chemin à résoudre |
| typeMéthode | Integer | &#8592; | Sélecteur de type d’objet |
| ptrTable | Pointer | &#8592; | Référence de table |
| nomObjet | Text | &#8592; | Nom de formulaire ou de méthode base |
| nomObjetForm | Text | &#8592; | Nom d’objet du formulaire |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.METHOD RESOLVE PATH.Summary-->La commande **METHOD RESOLVE PATH** analyse le chemin d’accès interne passé dans le paramètre *chemin* et retourne ses différentes composantes dans les paramètres *typeMéthode*, *ptrTable*, *nomObjet* et *nomObjetForm*.<!-- END REF-->

Le paramètre *typeMéthode* retourne une valeur indiquant le type de la méthode. Vous pouvez comparer cette valeur aux constantes suivantes du thème *Accès objets développement* :

| Constante            | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Path database method | Entier long | 2      | Chemin des méthodes base définies (nom anglais). Liste de ces méthodes :<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Entier long | 4      | Chemin des méthodes formulaire projet et de toutes leurs méthodes objet. Exemples :<br/>*\[projectForm\]/monForm/{formMethod}<br/>\[projectForm\]/monForm/bouton1<br/>\[projectForm\]/monForm/maliste<br/>\[projectForm\]/monForm2/bouton1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Path project method  | Entier long | 1      | Nom de la méthode. <br/>Exemple : *MaMethodeProjet*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Path table form      | Entier long | 16     | Chemin des méthodes formulaire table et de toutes leurs méthodes objet. Exemples :<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/bouton1<br/>\[tableForm\]/table\_1/Form1/maliste<br/>\[tableForm\]/table\_2/Form1/maliste*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Path trigger         | Entier long | 8      | Chemin des triggers de la base. Exemples :<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

**Note :** La commande ne vérifie pas si la méthode existe vraiment dans la base de données/le projet. Une erreur n'est générée que si un nom de table non valide est passé.

Le paramètre *ptrTable* contient un pointeur sur une table de la base si le chemin référence une méthode formulaire table ou un trigger. 

Le paramètre *nomObjet* contient soit :

* un nom de formulaire si le chemin référence un formulaire table ou projet
* un nom de méthode base si le chemin référence une méthode base.

Le paramètre *nomObjetForm* contient un nom d’objet de formulaire si le chemin référence une méthode objet. 

Si la commande est exécutée depuis un composant, elle considère par défaut que *chemin* désigne une méthode du composant. Si vous passez le paramètre *\**, elle considère que *chemin* désigne une méthode de la base hôte.

#### Exemple 1 

Résolution d’un chemin de méthode base :

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $objectFormName : Text
 
 METHOD RESOLVE PATH("[databaseMethod]/onStartup";$methodType;$tablePtr;$objectName;$objectFormName)
  // $methodType: 2
  // $tablePtr: pointeur Nil
  // $objectName: "onStartup"
  // $objectFormName: ""
```

#### Exemple 2 

Résolution d’un chemin d’objet de méthode formulaire table :

```4d
 var $methodType : Integer
 var $tablePtr : Pointer
 var $objectName : Text
 var $objectFormName : Text
 
 METHOD RESOLVE PATH("[tableForm]/Table1/output1/myVar1";$methodType;$tablePtr;$objectName;$objectFormName)
  // $methodType: 16
  // $tablePtr: -> [Table1]
  // $objectName: "output1"
  // $objectFormName: "Btn1"
```

#### Voir aussi 

[METHOD Get path](method-get-path.md)  