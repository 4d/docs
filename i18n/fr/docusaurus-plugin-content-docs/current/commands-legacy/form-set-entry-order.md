---
id: form-set-entry-order
title: FORM SET ENTRY ORDER
slug: /commands/form-set-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET ENTRY ORDER.Syntax-->**FORM SET ENTRY ORDER** ( *nomsObjets* {; *numPage*} )<!-- END REF-->
<!--REF #_command_.FORM SET ENTRY ORDER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomsObjets | Text array | &#8594;  | Tableau des noms d'objets dans l'ordre de saisie souhaité |
| numPage | Integer | &#8594;  | Numéro de la page dont vous voulez fixer l'ordre de saisie (page courante si omis) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FORM SET ENTRY ORDER.Summary-->La commande **FORM SET ENTRY ORDER** permet de fixer dynamiquement l'ordre de saisie du formulaire courant pour le process en cours, basé sur le tableau *nomsObjets*.<!-- END REF--> 

Passez dans *nomsObjets* un tableau contenant les noms des objets du formulaire à inclure dans l'ordre de saisie. L'ordre des objets dans le tableau définit l'ordre de saisie. Tout objet valide du formulaire sur le formulaire courant peut être listé. Un objet est valide si :

* il a la propriété **focusable** (**Note :** La commande ignore la propriété **Tabulable** des objets),
* il existe sur le formulaire (son nom est défini),
* il est utilisé sur la page courante (ou sur la page *numPage*, voir ci-dessous). Gardez à l'esprit qu'une page de formulaire inclut les objets de la page 0 et les objets du formulaire hérité.

Si un objet invalide est détecté à l'utilisation, il est simplement ignoré et 4D essaiera d'utiliser l'objet valide suivant dans le tableau *nomsObjets*. Vous pouvez connaitre l'ordre de saisie actuel de la page courante (basé sur les objets valides) en utilisant la commande [FORM GET ENTRY ORDER](form-get-entry-order.md) avec le paramètre \*. 

Optionnellement, vous pouvez passer le *numPage* de la page pour laquelle vous fixez l'ordre de saisie. Si omis, la commande s'applique à la page courante. 

**Notes :** 

* L'ordre de saisie d'un sous-formulaire est défini dans le sous-formulaire lui-même. Vous devez appeler la commande **FORM SET ENTRY ORDER** dans le contexte du sous-formulaire.
* Cette commande ne définit pas le premier objet ciblé sur le formulaire à l'utilisation. Si vous souhaitez fixer un premier objet dans l'ordre de saisie, vous devez utiliser la commande [GOTO OBJECT](goto-object.md) dans l'événement formulaire Sur chargement. Si vous utilisez la commande [OBJECT DUPLICATE](object-duplicate.md), vous pouvez fixer l'objet dupliqué en première position en passant la constante Objet Premier ordre saisie dans le paramètre *reliéA*.

**A propos de l'ordre de saisie des données**  
L'ordre de saisie des données est l'ordre dans lequel les champs, les sous-formulaires et tous les autres objets actifs, sont sélectionnés quand l'utilisateur utilise la touche **Tabulation** ou le Retour chariot sur le formulaire. L'ordre de saisie inversé est également disponible en appuyant sur les touches **Maj+Tabulation** ou **Maj+Retour chariot**. L'ordre de saisie peut être défini par défaut ou modifié dans l'Editeur de formulaire. Pour plus d'informations, référez-vous à la section *Modifier l'ordre de saisie* dans le manuel *Mode Développement*. 

#### Exemple 

Vous souhaitez fixer l'ordre de saisie des objets du formulaire en vous basant sur leur nom :

```4d
 ARRAY TEXT(tabNames;0)
 
 FORM GET OBJECTS(tabNames;Form current page+Form inherited) //on récupère les noms des objets du formulaire
 SORT ARRAY(tabNames;>) //on trie les noms par ordre alphabétique ascendant
 FORM SET ENTRY ORDER(tabNames) //on utilise cet ordre alphabétique comme ordre de saisie
  //les objets non-focusables sont ignorés
```

#### Voir aussi 

[FORM GET ENTRY ORDER](form-get-entry-order.md)  