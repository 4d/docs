---
id: method-get-path
title: METHOD Get path
slug: /commands/method-get-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get path.Syntax-->**METHOD Get path** ( *typeMéthode* {; *laTable*}{; *nomObjet*{; *nomObjetForm*}}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.METHOD Get path.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeMéthode | Integer | &#8594;  | Sélecteur de type d’objet du développement |
| laTable | Table | &#8594;  | Référence de table |
| nomObjet | Text | &#8594;  | Nom de formulaire ou de méthode |
| nomObjetForm | Text | &#8592; | Nom d’objet du formulaire |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |
| Résultat | Text | &#8592; | Chemin complet de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD Get path.Summary-->La commande **METHOD Get path** retourne le chemin d’accès interne complet d’une méthode.<!-- END REF-->

Passez dans *typeMéthode* le type de méthode dont vous souhaitez obtenir le chemin. Vous pouvez utiliser les constantes suivantes, placées dans le thème *Accès objets développement* :

| Constante            | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Path database method | Entier long | 2      | Chemin des méthodes base définies (nom anglais). Liste de ces méthodes :<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Entier long | 4      | Chemin des méthodes formulaire projet et de toutes leurs méthodes objet. Exemples :<br/>*\[projectForm\]/monForm/{formMethod}<br/>\[projectForm\]/monForm/bouton1<br/>\[projectForm\]/monForm/maliste<br/>\[projectForm\]/monForm2/bouton1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Path project method  | Entier long | 1      | Nom de la méthode. <br/>Exemple : *MaMethodeProjet*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Path table form      | Entier long | 16     | Chemin des méthodes formulaire table et de toutes leurs méthodes objet. Exemples :<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/bouton1<br/>\[tableForm\]/table\_1/Form1/maliste<br/>\[tableForm\]/table\_2/Form1/maliste*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Path trigger         | Entier long | 8      | Chemin des triggers de la base. Exemples :<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

Passez des valeurs dans les paramètres *laTable*, *nomObjet* et *nomObjetForm* en fonction du type d’objet dont vous souhaitez récupérer le chemin d’accès de la méthode :  

| **Type d’objet**         | *table* | *nomObjet*    | *nomObjetForm* |
| ------------------------ | ------- | ------------- | -------------- |
| Chemin Formulaire projet | X       | X (optionnel) |                |
| Chemin Formulaire table  | X       | X             | X (optionnel)  |
| Chemin Méthode base      | X       |               |                |
| Chemin Méthode projet    | X       |               |                |
| Chemin Trigger           | X       |               |                |

**Note :** La commande ne vérifie pas l'existence réelle de la méthode dans la base. Une erreur est générée uniquement si un nom de méthode base invalide est passé avec le sélecteur Path database method. 

Si la commande est exécutée depuis un composant, elle retourne par défaut les chemins des méthodes du composant. Si vous passez le paramètre *\**, le tableau contiendra les chemins des méthodes de la base hôte.

#### Exemple 

```4d
  //Récupérer le chemin d’accès de la méthode base "Sur ouverture"
 $chemin:=METHOD Get path(Path database method;"onStartup")
 
  //Récupérer le chemin d’accès du trigger de la table [Emp] :
 $chemin:=METHOD Get path(Path trigger;[Emp])
 
  //Récupérer le chemin d’accès de la méthode de l’objet "OK" du formulaire "input" de la table [Emp] :
 $chemin:=METHOD Get path(Path table form;[Emp];"input";"OK")
```

#### Voir aussi 

[Current method path](current-method-path.md)  
[METHOD OPEN PATH](method-open-path.md)  
[METHOD RESOLVE PATH](method-resolve-path.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1164 |
| Thread safe | &cross; |


