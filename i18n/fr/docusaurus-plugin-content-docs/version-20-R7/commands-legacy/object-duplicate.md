---
id: object-duplicate
title: OBJECT DUPLICATE
slug: /commands/object-duplicate
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT DUPLICATE.Syntax-->**OBJECT DUPLICATE** ( {* ;} *objet* {; *nouvNom* {; *nouvVar* {; *reliéA* {; *dépH* {; *dépV* {; *redimH* {; *redimV*}}}}}}} {; *} )<!-- END REF-->
<!--REF #_command_.OBJECT DUPLICATE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| nouvNom | Text | &#8594;  | Nom du nouvel objet |
| nouvVar | Pointer | &#8594;  | Pointeur vers la variable du nouvel objet |
| reliéA | Text | &#8594;  | Nom de l’objet saisissable (ou du bouton radio) précédent |
| dépH | Integer | &#8594;  | Décalage horizontal du nouvel objet<br/>(>0 = vers la droite, <0 = vers la gauche) |
| dépV | Integer | &#8594;  | Décalage vertical du nouvel objet<br/>(>0 = vers le bas, <0 = vers le haut) |
| redimH | Integer | &#8594;  | Valeur de redimensionnement horizontal du nouvel objet |
| redimV | Integer | &#8594;  | Valeur de redimensionnement vertical du nouvel objet |
| * | Opérateur | &#8594;  | Si spécifié = coordonnées absolues<br/>Si omis = coordonnées relatives |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT DUPLICATE.Summary-->La commande **OBJECT DUPLICATE** permet de créer une copie de l’objet désigné par le paramètre *objet* dans le contexte du formulaire en cours d’exécution (mode Application).<!-- END REF--> Le formulaire d’origine, généré en mode Développement, n’est pas modifié. 

Par défaut, toutes les options définies dans la Liste des propriétés pour l’objet source sont appliquées à la copie (taille, options de redimensionnement, couleur, etc.), y compris la méthode objet éventuellement associée. Les exceptions suivantes sont toutefois à noter :

* Bouton par défaut : il ne peut y avoir qu’un seul bouton par défaut dans un formulaire. Lorsque vous dupliquez un bouton ayant la propriété "Bouton par défaut", cette propriété est attribuée à la copie et est supprimée de l’objet d’origine.
* Equivalents clavier : le raccourci clavier associé à un objet source n’est pas dupliqué. Cette propriété est laissée vide dans la copie.
* Noms d’objet : il ne peut pas y avoir plusieurs objets de même nom dans un formulaire. Si vous ne passez pas le paramètre *nouvNom*, le nom de l’objet source est automatiquement incrémenté dans le nouvel objet (cf. ci-dessous).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* désigne le nom d’un objet (une chaîne). Si vous ne passez pas le paramètre *\**, vous indiquez que le paramètre *objet* désigne un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne de caractères mais la référence du champ ou de la variable (champs ou variables objets uniquement).  
Si vous passez une référence de champ ou de variable et si le formulaire contient plusieurs objets utilisant la même référence, la première occurrence trouvée est utilisée. Dans ce cas, pour éviter toute ambiguïté, il est conseillé de travailler avec les noms d’objets, qui sont uniques.

Passez dans le paramètre *nouvNom* le nom attribué à la copie de l’objet. Ce nom doit être conforme aux règles de nommage des objets et être unique dans le formulaire. S’il est invalide ou est déjà utilisé par un autre objet, la commande ne fait rien et la variable *OK* retourne 0\.   
Si vous omettez ce paramètre ou passez une chaîne vide, le nouveau nom est automatiquement généré par incrémentation du nom de l’objet source (si ce nom n’est pas déjà utilisé). Par exemple :  

| **Nom d’origine** | **Nom de la copie**              |
| ----------------- | -------------------------------- |
| Bouton            | Bouton 1                         |
| Bouton20          | Bouton21                         |
| Bouton21          | Bouton23 si Bouton22 existe déjà |

Passez dans *nouvVar* un pointeur vers la variable à associer au nouvel objet. Vous devez en principe pointer vers une variable du même type que celle de l’objet d’origine mais certains "retypages" sont possibles. La commande propose des automatismes facilitant l’écriture de code générique :

* De manière générale, toutes les variables "saisissables" peuvent être retypées ; par exemple, un objet affichant une Date ou un Entier long peut être dupliqué et utilisé avec une variable de type Texte. Les propriétés compatibles sont maintenues. La commande permet également les changements de type entre des objets Texte et des objets Image. A noter qu’un objet texte dupliqué et associé à une variable ou un champ booléen aura automatiquement l’apparence d’une case à cocher.
* Il est généralement possible de transformer dynamiquement une variable en champ et inversement.  
En revanche, les objets graphiques (boutons, cases à cocher...) ne peuvent pas être tranformés en d’autres types de contrôles.

Si le type de la variable est incompatible avec l’objet, la commande ne fait rien et la variable *OK* prend la valeur 0\. Si vous omettez ce paramètre, la variable est créée dynamiquement par 4D (cf. paragraphe “Variables dynamiques” dans la section [DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)). Si vous dupliquez un objet statique (ligne, rectangle, image statique...) ce paramètre est ignoré. Passez un pointeur Nil (->\[\]) si vous souhaitez pouvoir utiliser les autres paramètres. 

Vous utilisez le paramètre *reliéA* dans deux cas :

* mise à jour de l’ordre de saisie : dans ce cas, passez dans *reliéA* le nom de l’objet saisissable situé juste avant l’objet dupliqué. Si vous souhaitez que le nouvel objet devienne le premier objet dans l’ordre de saisie de la page, passez la constante Object First in entry order (cf. commande [OBJECT Get pointer](object-get-pointer.md)).
* association à un groupe de boutons radio : les boutons radios fonctionnent de façon coordonnée lorsqu’ils sont groupés. Si l’objet dupliqué est un bouton radio, passez dans *reliéA* le nom d’un bouton radio du groupe auquel rattacher le nouvel objet.

Si vous omettez ce paramètre ou passez une chaîne vide, le nouvel objet devient le dernier objet saisissable de la page du formulaire. Dans le cas d’un bouton radio, l’objet est rattaché au groupe du bouton source. 

Le nouvel objet peut être déplacé et redimensionné via les paramètres *dépH*, *dépV*, *redimH* et *redimV*. Comme pour la commande [OBJECT MOVE](object-move.md), le sens du déplacement ou du redimensionnement est défini par le signe des valeurs passées dans les paramètres *dépH* et *dépV* :

* Si la valeur est positive, le déplacement ou le redimensionnement s’effectue respectivement vers la droite ou vers le bas.
* Si la valeur est négative, le déplacement ou le redimensionnement s’effectue respectivement vers la gauche ou vers le haut.

Par défaut, les valeurs de *dépH*, *dépV*, *redimH* et *redimV* modifient les coordonnées de l’objet relativement à sa position précédente. Si vous souhaitez que ces paramètres définissent des coordonnées absolues, passez le dernier paramètre optionnel *\**.  
Si vous omettez ces paramètres, le nouvel objet se superpose à l’objet d’origine. 

Cette commande doit être utilisée dans le contexte de l’affichage d’un formulaire. Elle sera généralement appelée dans l’événement On Load du formulaire ou suite à une action utilisateur (événement On Clicked). 

**Note :** Si l’événement On Load est associé à l’objet d’origine, il est généré pour l’objet dupliqué au moment de l’exécution de la commande. Ce principe permet par exemple d’initialiser la valeur de l’objet. 

Pour des raisons techniques et logiques, **OBJECT DUPLICATE** ne peut pas être appelée dans le cadre de certains événements formulaire, notamment :

* Evénement On Load généré dans une méthode objet
* Evénement On Unload.
* Evénement lié à un contexte d’impression (On Header, On Printing Detail, etc.). Pour imprimer plusieurs fois un objet, vous devez utiliser la commande [Print object](print-object.md).

Lorsque la commande est appelée dans un contexte non pris en charge, l’objet n’est pas dupliqué et la variable OK prend la valeur 0\. Si elle est appelée dans un contexte d’impression, l’erreur -10601 est en outre générée.

Si la commande est exécutée correctement, la variable *OK* prend la valeur 1\. Sinon, elle prend la valeur 0\. 

#### Exemple 1 

Création d’un nouveau bouton nommé "BoutonAnnul" au-dessus de l’objet existant "BoutonOK" et association à la variable *vAnnul* :

```4d
 OBJECT DUPLICATE(*;"BoutonOK";"BoutonAnnul";vAnnul)
```

#### Exemple 2 

Création d’un nouveau bouton radio "bRadio6" basé sur le bouton radio existant "bRadio5". Ce bouton sera associé à la variable <>r6, intégré au groupe du bouton "bRadio5" et placé 20 pixels au-dessous :

```4d
 OBJECT DUPLICATE(*;"bRadio5";"bRadio6";<>r6;"bRadio5";0;20)
```

#### Voir aussi 

[OBJECT Get pointer](object-get-pointer.md)  
[OBJECT MOVE](object-move.md)  
*Objets de formulaire (Accès)*  