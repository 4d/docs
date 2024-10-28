---
id: method-get-names
title: METHOD GET NAMES
slug: /commands/method-get-names
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET NAMES.Syntax-->**METHOD GET NAMES** ( *tabNoms* {; *filtre*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET NAMES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabNoms | Text array | &#8592; | Tableau des noms de méthodes projet |
| filtre | Text | &#8594;  | Filtrage des noms |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD GET NAMES.Summary-->La commande **METHOD GET NAMES** remplit le tableau *tabNoms* avec les noms des méthodes projet créées dans l’application.<!-- END REF--> 

Par défaut, toutes les méthodes sont listées. Vous pouvez restreindre cette liste en passant une chaîne de comparaison dans le paramètre *filtre* : dans ce cas, seules les méthodes dont le nom correspond au filtre seront retournées. Vous devez utiliser le caractère @ afin de définir des filtres de type "commence par", "se termine par" ou "contient". 

Si la commande est exécutée depuis un composant, elle retourne par défaut les noms des méthodes projet du composant. Si vous passez le paramètre *\**, le tableau contiendra les méthodes projet de la base hôte.

**Note :** Les méthodes placées dans la corbeille ne sont pas listées. 

#### Exemple 

Exemples d’utilisations types :

```4d
  // Liste de toutes les méthodes projet de la base
 METHOD GET NAMES(t_Noms)
 
  // Liste des méthodes projet débutant par une chaîne spécifique
 METHOD GET NAMES(t_Noms;"web_@")
 
  // Liste des méthodes projet de la base hôte débutant par une chaîne spécifique
 METHOD GET NAMES(t_Noms;"web_@";*)
```
