---
id: listbox-set-footer-calculation
title: LISTBOX SET FOOTER CALCULATION
slug: /commands/listbox-set-footer-calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Syntax-->**LISTBOX SET FOOTER CALCULATION** ( {* ;} *objet* ; *calcul* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| calcul | Integer | &#8594;  | Calcul pour la zone de pied |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX SET FOOTER CALCULATION.Summary-->La commande **LISTBOX SET FOOTER CALCULATION** permet de définir le calcul automatique associé à la zone de pied de list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable.  
Le paramètre *objet* peut désigner :

* la variable ou le nom d’une zone de pied. Dans ce cas, la commande s’applique à cette zone.
* la variable ou le nom d’une colonne de list box. Dans ce cas, la commande s’applique à la zone de pied de cette colonne.
* la variable ou le nom d’une list box. Dans ce cas, la commande s’applique toutes les zones de pied de la list box.

Passez dans *calcul* une des constantes suivantes, placées dans le thème *List box pied calcul*, afin de définir le calcul à effectuer :

| Constante                    | Type        | Comment                                                                                                                                                               |
| ---------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Listbox footer std deviation | Entier long | Utilisable avec les colonnes de type numérique, heure (listbox de type tableau uniquement)<br/>Type par défaut du résultat du calcul : Réel                   |
| lk footer average            | Entier long | Utilisable avec les colonnes de type numérique, heure<br/>Type par défaut du résultat du calcul : Réel                                                        |
| lk footer count              | Entier long | Utilisable avec les colonnes de type numérique, texte, date, heure, booléen, image<br/>Type par défaut du résultat du calcul : Entier long                    |
| lk footer custom             | Entier long | Aucun calcul n’est effectué par 4D. La variable du pied doit être calculée par programmation.<br/>Type par défaut du résultat du calcul : type de la variable |
| lk footer max                | Entier long | Utilisable avec les colonnes de type numérique, date, heure, booléen<br/>Type par défaut du résultat du calcul : type du tableau ou champ de la colonne       |
| lk footer min                | Entier long | Utilisable avec les colonnes de type numérique, date, heure, booléen<br/>Type par défaut du résultat du calcul : type du tableau ou champ de la colonne       |
| lk footer sum                | Entier long | Utilisable avec les colonnes de type numérique, heure, booléen<br/>Type par défaut du résultat du calcul : type du tableau ou champ de la colonne             |
| lk footer sum squares        | Entier long | Utilisable avec les colonnes de type numérique, heure (listbox de type tableau uniquement)<br/>Type par défaut du résultat du calcul : Réel                   |
| lk footer variance           | Entier long | Utilisable avec les colonnes de type numérique, heure (listbox de type tableau uniquement)<br/>Type par défaut du résultat du calcul : Réel                   |

A noter que les calculs prédéfinis tiennent compte de toutes les valeurs de la colonne, y compris les valeurs des lignes éventuellement masquées. Si vous souhaitez restreindre un calcul aux lignes visibles, vous devez utiliser la constante lk footer custom et effectuer un calcul personnalisé. 

Si le type de données de la colonne ou d’au moins une colonne de la list box (si *objet* désigne une list box) est incompatible avec le *calcul* défini, le pied n’est pas modifié et l’erreur 18 est générée. Si une colonne contient une formule (list box de type sélection), l’erreur 10 est générée.

**Note :** Les variables de zone de pied sont automatiquement typées (lorsqu'elles ne sont pas typées par programmation) en fonction du type de calcul défini dans la Liste des propriétés (cf. *Propriétés spécifiques des pieds de List box*). Si le type de la variable diffère du résultat attendu par la commande **LISTBOX SET FOOTER CALCULATION**, une erreur de type est générée. Par exemple, pour une colonne affichant des dates, si le pied effectue un calcul 'Maximum', la variable *pied* sera typée en date. Si vous exécutez alors l'instruction **LISTBOX SET FOOTER CALCULATION**(footer;lk footer count), une erreur est générée car le type du résultat attendu (entier long) est différent du type de la variable. 

#### Voir aussi 

[LISTBOX Get footer calculation](listbox-get-footer-calculation.md)  