---
id: wp-get-text
title: WP Get text
slug: /WritePro/commands/wp-get-text
displayed_sidebar: docs
---

<!--REF #_command_.WP Get text.Syntax-->**WP Get text** ( *objCible* {; *expressions*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get text.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| expressions | Number | &#8594;  | Instructions pour l'évaluation de l'expression |
| Résultat | Text | &#8592; | Texte de objCible |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get text.Summary-->La commande **WP Get text** récupère le contenu textuel d'un document 4D Write Pro dans l'*objCible* spécifié.<!-- END REF-->

**WP Get text** renvoie uniquement du texte brut. Tous les styles appliqués (gras, italique, etc.) seront ignorés.

Dans le paramètre *objCible*, passez un objet contenant :

* une plage, ou
* un élément ( tableau / paragraphe / corps / en-tête / pied / section / sous-section), ou
* un document 4D Write Pro

**Notes :** 

* Si vous passez un document 4D Write Pro objCible, la commande retourne uniquement le texte du *corps* du document.
* Si vous passez une sous-section dans *objCible*, la commande retourne le texte de la section parente.

Le paramètre optionnel *expressions* fournit des instructions pour l'évaluation des expressions 4D dans l'*objCible* (pour plus d’informations, reportez-vous à la page *Gérer des formules*). Les options sont :

| Constante                | Comment                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| wk expressions as source | La chaîne d'origine des références des expressions 4D est retournée.                         |
| wk expressions as space  | Chaque référence est retournée en tant qu'espace insécable.                                  |
| wk expressions as value  | Les références d'expressions 4D sont retournées dans leur forme évaluée (option par défaut). |

**Important** : Seul le texte brut avec wk expressions as space est cohérent avec les index de plage de texte utilisés par les commandes WP ou ST, car ces commandes présument toujours que la taille de l'expression = 1 caractère.

**Notes** : 

* Si *objCible* contient des images, elles sont ignorées et renvoyées sous forme de caractères espaces (" ").
* Si *objCible* contient des tableaux, le contenu de chaque cellule est traité comme des paragraphes individuels et renvoyé en tant que texte séparé par des tabulations. Les lignes sont séparées par des retours chariot.

#### Exemple 

Pour retrouver le texte dans ce document :

![](../../assets/en/WritePro/commands/pict3772381.en.png)

Vous pouvez écrire :

```4d
 $range:=WP Text range(myDoc2;wk start text;wk end text)
 vText:=WP Get text($range;wk expressions as value) // retourne "Hello world! Today is: 06/03/18."
 vText2:=WP Get text($range;wk expressions as source) //retourne "Hello world! Today is: date du jour.
 vText3:=WP Get text($range;wk expressions as space) //retourne "Hello world! Today is:  ."
```

#### Voir aussi 

*Gérer des formules*  
[WP SET TEXT](wp-set-text.md)  