---
id: form-get-entry-order
title: FORM GET ENTRY ORDER
slug: /commands/form-get-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET ENTRY ORDER.Syntax-->**FORM GET ENTRY ORDER** ( *nomsObjets* {; numPage | *} )<!-- END REF-->
<!--REF #_command_.FORM GET ENTRY ORDER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomsObjets | Text array | &#8592; | Noms des objets triés par ordre de saisie |
| numPage &#124; * | Entier long, Opérateur | &#8594;  | Numéro de la page dont vous voulez lire l'ordre de saisie défini (page courante si omis), ou * pour obtenir l'ordre de saisie actuel de la page courante |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FORM GET ENTRY ORDER.Summary-->La commande **FORM GET ENTRY ORDER** retourne dans *nomsObjets* les noms des objets dans l'ordre de saisie du formulaire courant.<!-- END REF--> 

* Si vous ne passez pas le paramètre *\**, **FORM GET ENTRY ORDER** retourne l'ordre de saisie tel qu'il a été précédemment déclaré avec la commande [FORM SET ENTRY ORDER](form-set-entry-order.md). Avec cette syntaxe, vous pouvez omettre ou passer le paramètre *numPage* :  
   * si vous omettez le paramètre *numPage*, le tableau *nomsObjets* retourne l'ordre de saisie des objets de la page courante.  
   * si vous passez le paramètre *numPage*, le tableau *nomsObjets* retourne l'ordre de saisie des objets de la page dont le numéro est *numPage*.  
Dans les deux cas, si la commande [FORM SET ENTRY ORDER](form-set-entry-order.md) n'a pas été précédemment appelée pour le formulaire courant, le tableau *nomsObjets* est retourné vide.
* Si vous passez le paramètre *\**, **FORM GET ENTRY ORDER** retourne l'ordre de saisie actuel de la page courante, c'est-à-dire que le tableau *nomsObjets* contient seulement les noms d'objets **valides** (pour plus d'informations sur les objets valides, veuillez vous référer à la description de la commande [FORM SET ENTRY ORDER](form-set-entry-order.md)). L'ordre de saisie actuel du formulaire peut être :  
   * l'ordre de saisie par défaut du formulaire, basé sur le plan des objets,  
   * ou l'ordre de saisie de l'éditeur de formulaire (voir *Modifier l'ordre de saisie*), s'il a été défini,  
   * ou l'ordre de saisie fixé par un appel à la commande [FORM SET ENTRY ORDER](form-set-entry-order.md) dans le process courant, si elle a été appelée.  
L'ordre de saisie actuel inclut toujours les objets de la page 0 et des formulaires hérités.

**Note :** L'ordre de saisie dans un sous-formulaire n'est pas retourné lorsque la commande s'applique au formulaire parent. 

#### Exemple 

Vous voulez exclure certains objets de l'ordre de saisie :

```4d
 ARRAY TEXT($arrTabOrderObject;0)
 var $vElem : Integer
 FORM GET ENTRY ORDER($arrTabOrderObject;*)  //on lit l'ordre de saisie actuel
 Repeat
    $vElem:=Find in array($arrTabOrderObject;"Tot@")
    If($vElem>0)  // On exclut de l'ordre de saisie les objets dont le nom commence par "Tot"
       DELETE FROM ARRAY($arrTabOrderObject;$vElem)
    End if
 Until($vElem<0)
 FORM SET ENTRY ORDER($arrTabOrderObject)  // On applique le nouvel ordre de saisie
```

#### Voir aussi 

[FORM SET ENTRY ORDER](form-set-entry-order.md)  