---
id: form-get-names
title: FORM GET NAMES
slug: /commands/form-get-names
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET NAMES.Syntax-->**FORM GET NAMES** ( {*laTable* ;} *tabNoms* {; *filtre* {; *marqueur*}}{; *} )<!-- END REF-->
<!--REF #_command_.FORM GET NAMES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Référence de table |
| tabNoms | Text array | &#8592; | Tableau des noms de formulaires |
| filtre | Text | &#8594;  | Filtrage des noms |
| marqueur | Real | &#8594;  | Marqueur de version minimale à retourner |
| &#8592; | Nouvelle valeur |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET NAMES.Summary-->La commande **FORM GET NAMES** remplit le tableau *tabNoms* avec les noms des formulaires de l’application.<!-- END REF--> 

Si vous passez le paramètre *laTable*, la commande retourne les noms des formulaires table associés à cette table. Si vous omettez ce paramètre, le commande retourne les noms des formulaires projet de la base. 

Vous pouvez restreindre la liste des formulaires en passant une chaîne de comparaison dans le paramètre *filtre* : dans ce cas, seuls les formulaires dont le nom correspond au filtre seront retournés. Vous pouvez utiliser le caractère @ afin de définir des filtres de type "commence par", "se termine par" ou "contient". Si vous passez une chaîne vide, le paramètre *filtre* est ignoré. 

Vous pouvez également restreindre la liste des formulaires à l'aide du paramètre optionnel *marqueur*. Ce paramètre permet de limiter les formulaires retournés dans *tabNoms* à ceux qui ont été modifiés ultérieurement à un instant donné. Dans le cadre d’un système de contrôle de version, ce paramètre vous permet de ne mettre à jour que les formulaires ayant été modifiés depuis la dernière sauvegarde.   
Ce principe fonctionne de la manière suivante : 4D maintient en interne un compteur de modification des ressources de la base. Les formulaires étant des ressources, chaque fois qu’un formulaire est créé ou réenregistré, ce compteur est incrémenté. Si vous passez le paramètre *marqueur*, la commande retourne dans *tabNoms* uniquement les formulaires correspondant à des valeurs de marqueurs supérieures ou égales à celle de *marqueur*. En outre, si vous passez une variable dans *marqueur*, la commande retourne dans cette variable la nouvelle valeur du compteur de modification, c’est-à-dire la plus élevée. Vous pouvez alors sauvegarder cette valeur et l’utiliser lors du prochain appel de la commande **FORM GET NAMES** afin de ne récupérer que les formulaires nouveaux ou modifiés. 

Si la commande est exécutée depuis un composant, elle retourne par défaut les noms des formulaires projet du composant. Si vous passez le paramètre *\**, le tableau contiendra les formulaires de la base hôte. 

**Note :** Les formulaires placés dans la corbeille ne sont pas listés. 

#### Exemple 

Exemples d’utilisations type :

```4d
  // Liste de tous les formulaires projet de la base
 FORM GET NAMES(t_Noms)
 
     // Liste des formulaires de la table [Emps]
 FORM GET NAMES([Emps];t_Noms)
 
     // Liste des formulaires "input" de la table [Emps]
 FORM GET NAMES([Emps];t_Noms;"input_@")
 
     // Liste de formulaires projet spécifiques de la base
 FORM GET NAMES(t_Noms;"dialogue_@")
 
  // Liste de tous les formulaires projet de la base modifiés depuis la dernière synchronisation
  // vMarqueur contient une valeur numérique
 FORM GET NAMES(t_Noms;"";vMarqueur)
 
     // Liste de formulaires table depuis un composant
     // Un pointeur est requis car le nom de la table est inconnu
 FORM GET NAMES(tablePtr->;t_Noms;*)
```

#### Voir aussi 

*Formulaires*  
[METHOD GET PATHS FORM](method-get-paths-form.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1167 |
| Thread safe | &cross; |


