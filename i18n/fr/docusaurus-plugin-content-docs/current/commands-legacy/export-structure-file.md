---
id: export-structure-file
title: Export structure file
slug: /commands/export-structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Export structure file.Syntax-->**Export structure file** ( *cheminDossier* {; *options*} ) : Object<!-- END REF-->
<!--REF #_command_.Export structure file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminDossier | Text | &#8594;  | Chemin du dossier de destination pour les fichiers projets |
| options | Object | &#8594;  | Options d'export |
| Résultat | Object | &#8592; | Statuts et messages de validation (le cas échéant) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Export structure file.Summary-->La commande **Export structure file** décompose la structure de la base de données 4D courante en un ensemble de fichiers de type texte ou de fichiers natifs de type image et les stocke dans le *cheminDossier* spécifié.<!-- END REF--> Par défaut, la structure de la base (méthodes, formulaires, catalogues, etc.) est intégralement exportée. Vous pouvez filtrer les contenus à exporter à l'aide du paramètre *options* (voir ci-dessous).

Cette commande vous permet de stocker des fichiers de structure de base de données dans un système de gestion de version (*i.e.*, *Git, Perforce,* etc.). Il est alors possible de comparer les modifications successives ou les modifications apportées par plusieurs sources à l'aide d'outils standards de gestion de version. 

Cette commande peut être utilisée dans les cas suivants :

* 4D en mode local ou 4D Server (une erreur est retournée si elle est appelée depuis 4D en mode distant),
* Base de données interprétée (la commande ne fait rien si elle est appelée depuis une base de données .4DC)

Notez également que lorsque la commande est appelée depuis un composant, elle exporte toujours la structure de la base de données hôte.

Dans *cheminDossier*, passez le chemin du système du dossier où les fichiers d'export doivent être stockés.

Le paramètre *options* vous permet de personnaliser le processus de conversion. L'objet *options* peut contenir les propriétés suivantes :

| **Nom de propriété** | **Type de valeur** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| withLog              | booléen ou chaîne  | <table><tbody><tr><td>vrai ou "always" : crée un fichier log de conversion dans le dossier de destination Logs.</td></tr><tr><td>"ifNotEmpty" : crée un fichier log de conversion uniquement s'il contient des messages</td></tr><tr><td>faux ou omis (défaut) : ne crée pas de fichier log de conversion </td></tr></tbody></table> |
| makeProject          | booléen            | vrai pour générer un fichier .4DProject dans le dossier "Project"                                                                                                                                                                                                                                                                                                                                                                    |
| filter               | objet              | Contenus à exporter. Si omis (défaut), tout est exporté                                                                                                                                                                                                                                                                                                                                                                              |
| projectMethods       | booléen            | vrai pour exporter les méthodes projet                                                                                                                                                                                                                                                                                                                                                                                               |
| databaseMethods      | booléen            | vrai pour exporter les méthodes base de données                                                                                                                                                                                                                                                                                                                                                                                      |
| triggerMethods       | booléen            | vrai pour exporter les méthodes trigger                                                                                                                                                                                                                                                                                                                                                                                              |
| forms                | booléen            | vrai pour exporter les formulaires                                                                                                                                                                                                                                                                                                                                                                                                   |
| pageFormat           | booléen            | vrai pour exporter le format de page des formulaires dans la propriété "pageFormat" de chaque fichier json du formulaire                                                                                                                                                                                                                                                                                                             |
| catalog              | booléen            | vrai pour exporter les définitions de tables et de champs                                                                                                                                                                                                                                                                                                                                                                            |
| folders              | booléen            | vrai pour exporter les définitions de dossiers de l'Explorateur                                                                                                                                                                                                                                                                                                                                                                      |
| settings             | booléen            | vrai pour exporter les paramètres de structure                                                                                                                                                                                                                                                                                                                                                                                       |
| menus                | booléen            | vrai pour exporter les menus                                                                                                                                                                                                                                                                                                                                                                                                         |
| tips                 | booléen            | vrai pour exporter les infobulles                                                                                                                                                                                                                                                                                                                                                                                                    |
| lists                | booléen            | vrai pour exporter les listes                                                                                                                                                                                                                                                                                                                                                                                                        |
| filters              | booléen            | vrai pour exporter les filtres                                                                                                                                                                                                                                                                                                                                                                                                       |
| pictures             | booléen            | vrai pour exporter les images à partir d'une bibliothèque d'images                                                                                                                                                                                                                                                                                                                                                                   |
| resources            | booléen            | vrai pour exporter le dossier Ressources                                                                                                                                                                                                                                                                                                                                                                                             |
| trash                | booléen            | vrai pour exporter les méthodes et des formulaires placés dans la corbeille (\*)                                                                                                                                                                                                                                                                                                                                                     |
| windowPositions      | booléen            | vrai pour exporter les emplacements de fenêtre                                                                                                                                                                                                                                                                                                                                                                                       |
| methodPreferences    | booléen            | vrai pour exporter les préférences de l'éditeur de méthodes                                                                                                                                                                                                                                                                                                                                                                          |
| buildSettings        | booléen            | vrai pour exporter le fichier buildApp.xml                                                                                                                                                                                                                                                                                                                                                                                           |
| dataPath             | booléen            | vrai pour copier, dans le fichier de préférences utilisateur du projet, le dernier chemin du fichier de données ouvert                                                                                                                                                                                                                                                                                                               |
| directory            | booléen            | vrai pour exporter les groupes et utilisateurs 4D                                                                                                                                                                                                                                                                                                                                                                                    |
| styleSheets          | booléen            | vrai pour exporter les feuilles de style (*style sheets*) en CSS                                                                                                                                                                                                                                                                                                                                                                     |
| documentation        | booléen            | vrai pour exporter les commentaires de l'Explorateur en fichiers markdown                                                                                                                                                                                                                                                                                                                                                            |

(\*) Le filtre "corbeille" est utile uniquement si les filtres "projectMethods" ou "forms" sont également sélectionnés.

**Attention :** Lorsque le paramètre *options* est passé et que l'objet "filter" est utilisé, vous devez déclarer explicitement chaque propriété destinée à l'export avec la valeur **vrai**. Lorsque cet objet est passé, 4D considère que toutes les propriétés sont, par défaut, fixées à **faux**. 

##### Résultat 

La commande retourne un objet qui indique le statut final de l'export ainsi que des informations sur les irrégularités et les erreurs survenues, le cas échéant. Les propriétés suivantes sont retournées :

| **Nom de propriété** | **Type de valeur** | **Description**                                                                                                                 |
| -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| success              | booléen            | Vrai si l'export est réussi, sinon Faux.                                                                                        |
| messages             | collection         | Collection d'objets décrivant les irrégularités survenues durant l'export                                                       |
| \[ \].severity       | texte              | Niveau d'irrégularité. Valeurs possibles : "info", "erreur". Seul le niveau "erreur" définit la propriété "success" comme Faux. |
| \[ \].message        | texte              | Description de l'irrégularité ou de l'erreur, par exemple "Unsupported for object type"                                         |
| \[ \].errors         | collection         | Pile d'erreurs (le cas échéant)                                                                                                 |

**Note :** Les objets listant des irrégularités peuvent contenir des propriétés supplémentaires selon le contexte.

Les erreurs peuvent être notamment :

* des éléments dupliqués
* des erreurs liées à la gestion de fichier (fichier déjà existant, fichier verrouillé, disque plein, etc.)
* une propriété ou un objet formulaire non pris en charge (voir également ).

#### Exemple 1 

Vous souhaitez exporter le fichier de structure de la base de données dans un dossier "Export" avec les paramètres par défaut :

```4d
 var $result : Object
 $result:=Export structure file("Export")
 If($result.success=True)
    ALERT("Export réussi")
 Else
    ALERT("Erreur durant l'export")
 End if
```

#### Exemple 2 

Vous souhaitez exporter uniquement les méthodes projet et les méthodes base, ainsi qu'un fichier historique :

```4d
 var $option;$result : Object
 $option:=New object("filter";New object)
 $option.filter.projectMethods:=True
 $option.filter.databaseMethods:=True
 $option.withLog:="always"
 $result:=Export structure file("exportWithLog";$option)
```

#### Voir aussi 

[FORM Convert to dynamic](form-convert-to-dynamic.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1565 |
| Thread safe | &check; |
| Interdite sur le serveur ||


