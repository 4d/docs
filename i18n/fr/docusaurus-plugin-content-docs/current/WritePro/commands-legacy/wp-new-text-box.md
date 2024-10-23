---
id: wp-new-text-box
title: WP New text box
slug: /WritePro/commands/wp-new-text-box
displayed_sidebar: docs
---

<!--REF #_command_.WP New text box.Syntax-->**WP New text box** ( *wpDoc* ; *pageNum* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP New text box.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Document 4D Write Pro |
| pageNum | Number | &#8594;  | Numéro de page où ancrer la zone de texte |
| Résultat | Object | &#8592; | Objet zone de texte |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP New text box.Summary-->La commande **WP New text box** crée et renvoie un nouvel objet zone de texte dans la page pageNum de wpDoc.<!-- END REF-->

**Note :** Pour plus d'informations sur les zones de texte, veuillez consulter le paragraphe *Gestion des zones de texte*.

Dans le paramètre wpDoc, passez un document 4D Write Pro. 

Dans pageNum, passez le numéro de la page à laquelle la zone de texte doit être ancrée. Si pageNum < 0, le numéro de page **1** est utilisé (aucune erreur n'est générée). 

The command creates a new text box element with the following default attributes:

La commande crée une nouvelle zone de texte avec les attributs par défaut suivants :

* largeur = 8 cm,
* hauteur = auto,
* bordure noire solide 1 pt,
* padding = 4 pt,
* marge = 0 pt,
* couleur de fond = white,
* id = "textBoxN" where N is a number,
* anchored in front of the body at the top left corner of the page rectangle (like an anchored picture, a text box can be anchored to embedded mode, or to a section, to all sections or to a subsection in page mode, and to the background or front layer.)
* ancrée devant le corps, dans le coin supérieur gauche du rectangle de la page (comme une image ancrée, une zone de texte peut être ancrée au mode incorporé, ou à une section, à toutes les sections ou à une sous-section en mode page, et au niveau de l'arrière-plan ou de l'avant-plan).

Voir la section *Attributs 4D Write Pro* pour une description détaillée de ces attributs.

The new text box is rendered only on the page *pageNum,* so it may not be rendered if:

La nouvelle zone texte n'est affichée que sur la page pageNum, il se peut donc qu'elle ne soit pas affichée si :

* il n'y a pas de page avec le numéro de page transmis
* le mode d'affichage actuel est incorporé (embedded) ou brouillon (draft)

Toutefois, la zone de texte existe toujours et appartient au document, même si elle n'est pas rendue. 

#### Exemple 1 

Vous souhaitez créer une zone de texte vide par défaut :

```4d
 $textBox:=WP Créer zone de texte(WParea;1)
```

Résultat :

![](../../assets/en/WritePro/commands/pict6196750.en.png)

#### Exemple 2 

Dans un modèle de lettre, on souhaite ajouter une zone de texte pour afficher l'adresse du destinataire (qui est stockée dans le contexte) :

```4d
  // #1 créer la zone de texte
 $textBox:=WP Créer zone de texte(WParea;1)
 
  // #2 définir quelques attributs de zone de texte
 WP SET ATTRIBUTES($textBox;wk id;"AddressArea")
 WP SET ATTRIBUTES($textBox;wk anchor origin;wk paper box)
 WP SET ATTRIBUTES($textBox;wk anchor horizontal align;wk left;wk vertical align;wk top)
 WP SET ATTRIBUTES($textBox;wk anchor horizontal offset;$form.offsetX.values[$form.offsetX.index])
 WP SET ATTRIBUTES($textBox;wk anchor vertical offset;$form.offsetY.values[$form.offsetY.index])
 WP SET ATTRIBUTES($textBox;wk width;$form.width.values[$form.width.index])
 WP SET ATTRIBUTES($textBox;wk height;$form.height.values[$form.height.index])
 WP SET ATTRIBUTES($textBox;wk padding;$form.padding.values[$form.padding.index])  // inside margins
 WP SET ATTRIBUTES($textBox;wk border style;wk dashed;wk border color;"Blue";wk border width;"1pt";wk border radius;"10pt")
 WP SET ATTRIBUTES($textBox;wk vertical align;wk center)


  // #3: définir les formules dans la zone de texte
 WP INSÉRER FORMULE($textBox;Formula(This.data.fullName);wk append)
 WP INSÉRER RUPTURE($textBox;wk paragraph break;wk append)
 WP INSÉRER FORMULE($textBox;Formula(This.data.fullAddress);wk append)


  // #4: Styliser le contenu de la zone de texte
 WP SET ATTRIBUTES($textBox;wk font;"Arial";wk font bold;wk true;wk font size;"18pt")


```

Résultat :

![](../../assets/en/WritePro/commands/pict6196766.en.png)

#### Voir aussi 

[WP DELETE TEXT BOX](wp-delete-text-box.md)  