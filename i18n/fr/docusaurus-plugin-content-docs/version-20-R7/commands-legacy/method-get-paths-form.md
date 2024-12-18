---
id: method-get-paths-form
title: METHOD GET PATHS FORM
slug: /commands/method-get-paths-form
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS FORM.Syntax-->**METHOD GET PATHS FORM** ( {*laTable* ;} *tabChemins* {; *filtre*}{; *marqueur*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS FORM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Référence de table |
| tabChemins | Text array | &#8592; | Tableau des chemins et noms des méthodes |
| filtre | Text | &#8594;  | Filtrage des noms |
| marqueur | Real | &#8594;  | Valeur minimum de marqueur |
| &#8592; | Nouvelle valeur courante |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD GET PATHS FORM.Summary-->La commande **METHOD GET PATHS FORM** remplit le tableau *tabChemins* avec les chemins d’accès internes et les noms des méthodes de tous les objets des formulaires, ainsi que des méthodes formulaire.<!-- END REF--> Les méthodes formulaire sont libellées {formMethod}. 

Seuls les objets contenant du code sont listés. Par exemple, les boutons uniquement associés à une action automatique ne sont pas retournés. 

Si vous passez le paramètre *laTable*, la commande retourne les objets des formulaires table associés à cette table. Si vous omettez ce paramètre, le commande retourne les objets des formulaires projet de la base. 

Vous pouvez restreindre la liste des formulaires en passant une chaîne de comparaison dans le paramètre *filtre* : dans ce cas, seuls les formulaires dont le nom correspond au filtre seront retournés. Vous pouvez utiliser le caractère @ afin de définir des filtres de type "commence par", "se termine par" ou "contient". Si vous passez une chaîne vide, le paramètre *filtre* est ignoré. 

Le paramètre *marqueur* vous permet de ne récupérer que les chemins des méthodes modifiées à compter d’un instant spécifique. Dans le cadre d’un système de contrôle de version, ce principe permet de mettre à jour uniquement les méthodes modifiées depuis la denière sauvegarde.   
Le fonctionnement est le suivant : 4D maintient un compteur de modification des méthodes. A chaque fois qu’une méthode est créée ou réenregistrée, ce compteur est incrémenté et sa valeur courante est stockée dans le marqueur interne de la méthode. Si vous passez *marqueur*, la commande ne retourne que les méthodes dont le marqueur est supérieur ou égal à la valeur passée dans ce paramètre. De plus, la commande retourne dans *marqueur* la nouvelle valeur courante du compteur de modification, c’est-à-dire la valeur la plus élevée. Si vous stockez cette valeur, il vous suffira de la passer lors de l’appel suivant à la commande afin de ne récupérer que les méthodes nouvelles ou modifiées. 

Si la commande est exécutée depuis un composant, elle retourne par défaut les chemins des méthodes du composant. Si vous passez le paramètre *\**, le tableau contiendra les chemins des méthodes de la base hôte. 

**Note :** La commande ne liste pas les objets des formulaires hérités ni des sous-formulaires. 

Si la commande détecte un nom d'objet dupliqué, l'erreur -9802 est générée ("Chemin d'objet non unique"). Il est recommandé dans ce cas d'utiliser le CSM afin de vérifier la structure de la base de données. 

#### Exemple 1 

Liste de tous les objets du formulaire "input" de la table \[Emp\]. A noter que les méthodes formulaire table (et les méthodes formulaire projet) sont traitées comme des objets appartenant au formulaire :

```4d
 METHOD GET PATHS FORM([Emp];tabChemins;"input")
  // Contenu de tabChemins (par exemple)
  // [tableForm]/input/{formMethod} -> Méthode formulaire
  // [tableForm]/input/bOK -> Méthode objet
  // [tableForm]/input/bCancel -> Méthode objet
```

#### Exemple 2 

Liste des objets du formulaire projet "dial" :

```4d
 METHOD GET PATHS FORM(tabChemins;"dial")
```

#### Exemple 3 

Liste de tous les objets des formulaires "input" de la table \[Emp\] à partir d’un composant : 

```4d
 METHOD GET PATHS FORM(([Emp];tabChemins;"input@";*)
```

#### Voir aussi 

[FORM GET NAMES](form-get-names.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1168 |
| Thread safe | &cross; |


