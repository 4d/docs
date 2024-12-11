---
id: order-by-attribute
title: ORDER BY ATTRIBUTE
slug: /commands/order-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY ATTRIBUTE.Syntax-->**ORDER BY ATTRIBUTE** ( {*laTable* ;} *champObjet* ; *cheminAttribut* ; > ou < {; *champObjet2* ; *cheminAttribut2* ; > ou <2 ; ... ; *champObjetN* ; *cheminAttributN* ; > ou <N} {; *} )<!-- END REF-->
<!--REF #_command_.ORDER BY ATTRIBUTE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle la sélection est triée ou Table par défaut si ce paramètre est omis |
| champObjet | Object | &#8594;  | Champ objet dont les attributs sont à utiliser pour le tri |
| cheminAttribut | Text | &#8594;  | Nom ou chemin d'attribut pour chaque niveau que l'on veut trier |
| > ou < | Opérateur | &#8594;  | Sens de tri pour chaque niveau : > pour trier par ordre ascendant, ou < pour trier par ordre descendant. |
| * | Opérateur | &#8594;  | Attente d'exécution du tri |

<!-- END REF-->

#### Description 

<!--REF #_command_.ORDER BY ATTRIBUTE.Summary-->La commande **ORDER BY ATTRIBUTE** trie (réorganise) les enregistrements de la sélection courante de *laTable* pour le process courant, basé sur les contenus des *cheminAttribut* des *champObjet*.<!-- END REF--> Après réorganisation des enregistrements, le nouveau premier enregistrement de la sélection courante devient l'enregistrement courant.

Si vous omettez le paramètre *laTable*, la commande s'applique à la table par défaut, si celle-ci a été spécifiée. Sinon 4D utilise la table du premier champ passé en paramètre.

 Dans *champObjet*, passez le champ Objet dont vous voulez utiliser l'attribut pour le tri. Ce champ peut appartenir *laTable* ou à une table en lien Aller à partir de *laTable*, avec un lien automatique ou manuel. Dans ce cas, le tri est toujours séquentiel.

Dans le paramètre *cheminAttribut*, indiquez le chemin d'accès de l'attribut dont vous souhaitez utiliser les valeurs pour trier les enregistrements, par exemple "children.girls.age".

**Notes :** 

* Seuls les attributs contenant des valeurs scalaires (nombres, textes, booléens, date) peuvent être triés. Les autres types de valeurs (objet, image...) sont considérés comme des valeurs null.
* Vous ne pouvez pas passer un élément de tableau dans *cheminAttribut* (dans ce cas, une erreur est retournée).
* N'oubliez pas que les noms des attributs sont sensibles à la casse : "MonAtt" et "monAtt" sont des noms d'attributs différents dans le même enregistrement.
* Vous ne pouvez pas rechercher des attributs dont le nom contient des caractères spéciaux tels que "." ou "\[ \]", car ils seront incorrectement interprétés comme des tokens dans la chaîne de tri. Pour plus d'informations, veuillez consulter le paragraphe *Identifiants de propriétés d'objets*.

Si l'attribut du champ contient des valeurs de types différents (c'est-à-dire nombres, textes, booléens...), elles sont d'abord regroupées par type, puis par valeur.

Si la valeur d'un attribut de champ est **null** pour des enregistrements (c'est-à-dire la valeur de l'attribut est null ou *cheminAttribut* n'existe pas dans le champ) : 

* Si l'ordre est **ascendant** (>), les enregistrements avec valeur **null** seront placés au début de la sélection.
* Si l'ordre est **descendant** (<), les enregistrements avec valeur **null** seront placés à la fin de la sélection.

Vous pouvez trier la sélection sur un ou plusieurs niveaux. Pour chaque niveau de tri, vous précisez un *champObjet*, un *cheminAttribut* et un ordre de tri *\> ou <*. Si vous passez le symbole "plus grand que" (>), le tri sera ascendant. Si vous passez le symble "plus petit que" (<), le tri sera descendant. Si vous ne spécifiez pas d'ordre de tri, le tri sera ascendant par défaut.  
Si un seul champ est précisé (un niveau de tri) et que celui-ci est indexé, l'index est utilisé pour le tri. Si le champ n'est pas indexé ou que vous utilisez plus d'un champ, le tri est exécuté séquentiellement.

Pour les tris multiples (tris sur plusieurs champs), vous pouvez appeler la commande **ORDER BY ATTRIBUTE** autant de fois que nécessaire et utiliser le paramètre optionnel *\**, excepté pour le dernier appel de **ORDER BY ATTRIBUTE**, qui lance l'opération de tri. Cette fonctionnalité est utile pour la gestion du multi-tri dans des interfaces utilisateurs personnalisées. Notez que vous pouvez combiner les appels à la commande **ORDER BY ATTRIBUTE** avec les appels à la commande [ORDER BY](order-by.md).

**Note :** Avec cette syntaxe, vous ne pouvez passer qu'un seul niveau de tri (champ) pour l'appel à **ORDER BY ATTRIBUTE**.

Quelle que soit la façon dont le tri a été défini, si l'opération de tri doit prendre du temps, 4D affiche automatiquement un message avec thermomètre de progression. L'affichage de ce message peut être contrôlé grâce aux commandes [MESSAGES ON](messages-on.md) et [MESSAGES OFF](messages-off.md). Si le thermomètre de progression est affiché, l'utilisateur peut cliquer sur le bouton **Stop** pour interrompre le tri. Si le tri n'est pas interrompu, la variable OK passe à 1\. Sinon, si le tri est interrompu, la variable OK passe à 0 (zéro). 

#### Exemple 

Vous souhaitez trier la sélection courante par âge (descendant) puis par nom (ascendant). L'ordre par défaut est :

```json
// [Customer]OB_Info contient un export partiel
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Mikken","age":"Forty-six","client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Hamp","age":"Sixty","client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Martin","client":true],
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Gordini","client":true},
{"LastName":"Delaferme","age":54,"client":true},
{"LastName":"Belami","age":"Forty-six","client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Smeldorf","age":70,"client":true}
```

Après exécution du tri :

```4d
 ORDER BY ATTRIBUTE([Customer];[Customer]OB_Info;"age";<;[Customer]OB_Info;"LastName";>)
```

Les enregistrements sont dans l'ordre suivant : 

```json
{"LastName":"Smeldorf","age":70,"client":true}
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Delaferme","age":54,"client":true}, 
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Hamp","age":"Sixty","client":true}, //les valeurs de type chaîne dans age
{"LastName":"Belami","age":"Forty-six","client":true}, //sont gérés séparément
{"LastName":"Mikken","age":"Forty-six","client":true}
{"LastName":"Gordini","client":true}, //en fin car
{"LastName":"Martin","client":true} //age est null (manquant)
```

#### Voir aussi 

  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1407 |
| Thread safe | &check; |
| Interdite sur le serveur ||


