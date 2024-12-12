---
id: method-get-paths
title: METHOD GET PATHS
slug: /commands/method-get-paths
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS.Syntax-->**METHOD GET PATHS** ( {*nomDossier* ;} *typeMéthode* ; *tabChemins* {; *marqueur*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomDossier | Text | &#8594;  | Nom de dossier de la page Démarrage |
| typeMéthode | Integer | &#8594;  | Sélecteur de type de méthode à récupérer |
| tabChemins | Text array | &#8592; | Tableau des chemins et noms des méthodes |
| marqueur | Real | &#8594;  | Valeur minimum de marqueur |
| &#8592; | Nouvelle valeur courante |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.METHOD GET PATHS.Summary-->La commande **METHOD GET PATHS** remplit le tableau *tabChemins* avec les chemins d’accès internes et les noms des méthodes de l’application du type défini par le paramètre *typeMéthode*.<!-- END REF-->

Si votre code est organisé en "dossiers" dans l’Explorateur de 4D (page Démarrage), vous pouvez passer dans le paramètre optionnel *nomDossier* un nom de dossier. Dans ce cas, le tableau *tabChemins* ne contient que les chemins des méthodes situées à cet emplacement. 

**Note :** Il n’est pas possible d’utiliser le caractère "@" dans *nomDossier*. 

Passez dans *typeMéthode* le type de méthode dont vous souhaitez obtenir les chemins dans le tableau *tabChemins*. Vous pouvez utiliser les constantes suivantes, placées dans le thème *Accès objets développement* (vous pouvez utiliser une constante ou une combinaison de constantes) :

| Constante            | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Path all objects     | Entier long | \-1    | Chemins de toutes les méthodes de la base                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Path class           | Entier long | 32     | Chemin de la définition de classe. Exemple :<br/>\[class\]/Individu<br/>\[class\]/Etudiant                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Path database method | Entier long | 2      | Chemin des méthodes base définies (nom anglais). Liste de ces méthodes :<br/>*\[databaseMethod\]/onStartup<br/>\[databaseMethod\]/onExit<br/>\[databaseMethod\]/onDrop<br/>\[databaseMethod\]/onBackupStartup<br/>\[databaseMethod\]/onBackupShutdown<br/>\[databaseMethod\]/onWebConnection<br/>\[databaseMethod\]/onWebAuthentication<br/>\[databaseMethod\]/onWebSessionSuspend<br/>\[databaseMethod\]/onServerStartup<br/>\[databaseMethod\]/onServerShutdown<br/>\[databaseMethod\]/onServerOpenConnection<br/>\[databaseMethod\]/onServerCloseConnection<br/>\[databaseMethod\]/onSystemEvent<br/>\[databaseMethod\]/onSqlAuthentication<br/>* *\[databaseMethod\]/* *onHostDatabaseEvent<br/>* *\[databaseMethod\]/* *onRESTAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAuthentication<br/>* *\[databaseMethod\]/* *onMobileAppAction* *<br/>* |
| Path project form    | Entier long | 4      | Chemin des méthodes formulaire projet et de toutes leurs méthodes objet. Exemples :<br/>*\[projectForm\]/monForm/{formMethod}<br/>\[projectForm\]/monForm/bouton1<br/>\[projectForm\]/monForm/maliste<br/>\[projectForm\]/monForm2/bouton1*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Path project method  | Entier long | 1      | Nom de la méthode. <br/>Exemple : *MaMethodeProjet*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Path table form      | Entier long | 16     | Chemin des méthodes formulaire table et de toutes leurs méthodes objet. Exemples :<br/>*\[tableForm\]/table\_1/Form1/{formMethod}<br/>\[tableForm\]/table\_1/Form1/bouton1<br/>\[tableForm\]/table\_1/Form1/maliste<br/>\[tableForm\]/table\_2/Form1/maliste*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Path trigger         | Entier long | 8      | Chemin des triggers de la base. Exemples :<br/>*\[trigger\]/table\_1<br/>\[trigger\]/table\_2*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

Le paramètre *marqueur* vous permet de ne récupérer que les chemins des méthodes modifiées à compter d’un instant spécifique. Dans le cadre d’un système de contrôle de version, ce principe permet de mettre à jour uniquement les méthodes modifiées depuis la dernière sauvegarde. 

Le fonctionnement est le suivant : 4D maintient un compteur de modification des méthodes. A chaque fois qu’une méthode est créée ou réenregistrée, ce compteur est incrémenté et sa valeur courante est stockée dans le marqueur interne de la méthode. Si vous passez *marqueur*, la commande ne retourne que les méthodes dont le marqueur est supérieur ou égal à la valeur passée dans ce paramètre. De plus, la commande retourne dans *marqueur* la nouvelle valeur courante du compteur de modification, c’est-à-dire la valeur la plus élevée. Si vous stockez cette valeur, il vous suffira de la passer lors de l’appel suivant à la commande afin de ne récupérer que les méthodes nouvelles ou modifiées. 

Si la commande est exécutée depuis un composant, elle retourne par défaut les chemins des méthodes du composant. Si vous passez le paramètre *\**, le tableau contiendra les chemins des méthodes de la base hôte.

Si la commande détecte un nom de méthode dupliqué, l'erreur -9802 est générée ("Chemin d'objet non unique"). Il est recommandé dans ce cas d'utiliser le CSM afin de vérifier la structure de la base de données.

#### Exemple 1 

Récupération des méthodes projet placée dans un dossier "web" :

```4d
 METHOD GET PATHS("web";Path project method;tabChemins)
```

#### Exemple 2 

Récupération des méthodes base et des triggers :

```4d
 METHOD GET PATHS(Path trigger+Path database method;tabChemins)
```

#### Exemple 3 

Récupération des méthodes projet modifiées depuis le dernier backup :

```4d
  // On charge la dernière valeur stockée
 $stamp:=Max([Backups]cur_stamp)
 METHOD GET PATHS(Path project method;tabChemins;$stamp)
  // On stocke la nouvelle valeur
 CREATE RECORD([Backups])
 [Backups]cur_stamp:=$stamp
 SAVE RECORD([Backups])
```

#### Exemple 4 

Reportez-vous à l'exemple de la commande [METHOD SET CODE](method-set-code.md).

#### Voir aussi 

[Current method path](current-method-path.md)  
[METHOD GET FOLDERS](method-get-folders.md)  