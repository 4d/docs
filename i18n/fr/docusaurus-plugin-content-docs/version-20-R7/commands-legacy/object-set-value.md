---
id: object-set-value
title: OBJECT SET VALUE
slug: /commands/object-set-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VALUE.Syntax-->**OBJECT SET VALUE** ( *nomObjet* ; *valeur* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VALUE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomObjet | Text | &#8594;  | Nom de l'objet |
| valeur | any | &#8594;  | Nouvelle valeur des sources de données de l'objet de formulaire |

<!-- END REF-->

#### Exemple 1 

<!--REF #_command_.OBJECT SET VALUE.Summary-->**OBJECT SET VALUE** fixe la *valeur* des sources de données courantes pour les objets formulaires désignés par le paramètre *nomObjet*.<!-- END REF-->

Dans le paramètre nomObjet, passez le nom d'un objet formulaire (une chaine). Vous pouvez définir la valeur de plusieurs objets formulaires à l'aide du caractère générique (“@”).

Le paramètre *valeur* vous permet de passer une nouvelle valeur (de tout type) pour les sources de données de l'objet formulaire.

**Note** : Si les sources de données sont une expression non assignable, **OBJECT SET VALUE** ne fait rien. Pour plus d'informations, consultez *expressions assignables vs non-assignables* .

#### Exemple 2 

Vous souhaitez lire la valeur des sources de données d'un objet formulaire, lire son nom et définir une nouvelle valeur :

```4d
 var $value : Variant
 
 $value:=OBJECT Get value(OBJECT Get name(Object current)) //vérifier la valeur définie 
 
 OBJECT SET VALUE(OBJECT Get name(Object current);$value+10) //trouver le nom de l'objet formulaire et définir la valeur à 50
```

#### Voir aussi 

[OBJECT Get value](object-get-value.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1742 |
| Thread safe | &check; |
| Interdite sur le serveur ||


