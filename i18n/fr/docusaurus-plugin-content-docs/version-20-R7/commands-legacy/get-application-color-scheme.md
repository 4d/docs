---
id: get-application-color-scheme
title: Get application color scheme
slug: /commands/get-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.Get application color scheme.Syntax-->**Get application color scheme** {( * )} : Text<!-- END REF-->
<!--REF #_command_.Get application color scheme.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Retourne le schéma couleur de la base hôte |
| Résultat | Text | &#8592; | Schéma de couleur de l'application courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get application color scheme.Summary-->La commande **Get application color scheme** retourne le nom du schéma de couleur utilisé dans l'application.<!-- END REF--> 

**Note :** Sous Windows, cette command retourne toujours "light".

Le schéma de couleur est défini :

* via un appel à la commande [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md);
* si la commande [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) n'a pas été appelé ou si elle a été appelée avec une valeur de paramètre "inherited", les Paramètres (paramètres de la base hôte dans le cas d'un composant);
* si les paramètres sont définis sur "inherited", les préférences de utilisateur du système d'exploitation.

Le paramètre \* est utile lorsque la commande est appelée à partir d'un composant : lorsqu'elle est passée, la commande retourne le schéma de couleurs de la base hôte.

Pour plus de détails sur les noms des schémas de couleur, veuillez vous reporter à la description de la commande [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md).

#### Exemple 

```4d
 var $colorScheme : Text
 
  // Récupère le schemaCouleur de la base hôte
 $colorScheme:=Get application color scheme(*)
```

#### Voir aussi 

[FORM Get color scheme](form-get-color-scheme.md)  
[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1763 |
| Thread safe | &check; |
| Interdite sur le serveur ||


