---
id: object-get-value
title: OBJECT Get value
slug: /commands/object-get-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get value.Syntax-->**OBJECT Get value** ( *nomObjet* ) : any<!-- END REF-->
<!--REF #_command_.OBJECT Get value.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomObjet | Text | &#8594;  | Nom de l'objet |
| Résultat | any | &#8592; | Valeur courante des sources de données de l'objet de formulaire |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT Get value.Summary-->La commande **OBJECT Get value** retourne la valeur courante des sources de données des objets formulaire désignés par le paramètre nomObjet.<!-- END REF-->

Dans le paramètre nomObjet, passez le nom d'un objet formulaire (chaine). Si vous utilisez un caractère générique (“@”) pour de multiples objets, seule la valeur des sources de données du premier objet de formulaire est retourné.

**Note**: **OBJECT Get value** n'est pas disponible dans les objets colonnes de list box..

**Valeur retournée**

Valeur courante des sources de données de l'objet de formulaire.

**Notes** :

* Si les sources de données sont un tableau, la commande retourne l'index du tableau.
* Si les sources de données sont une expression, la commande retoure la valeur évaluée à partir du dernier cycle d'exécution

#### Exemple 

Voir l'exemple de la commande [OBJECT SET VALUE](object-set-value.md). 

#### Voir aussi 

[OBJECT SET VALUE](object-set-value.md)  