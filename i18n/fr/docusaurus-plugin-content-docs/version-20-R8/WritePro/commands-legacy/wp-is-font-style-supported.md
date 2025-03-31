---
id: wp-is-font-style-supported
title: WP Is font style supported
slug: /WritePro/commands/wp-is-font-style-supported
displayed_sidebar: docs
---

<!--REF #_command_.WP Is font style supported.Syntax-->**WP Is font style supported** ( *objCible* ; *stylePoliceWP* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Is font style supported.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément |
| stylePoliceWP | Integer | &#8594;  | Constante de style de police |
| Résultat | Boolean | &#8592; | Vrai si le style est pris en charge dans tout ou partie de objCible, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Is font style supported.Summary-->La commande **WP Is font style supported** retourne Vrai si le style *stylePoliceWP* est pris en charge par au moins une partie du texte inclus dans *objCible*.<!-- END REF-->

Dans *objCible*, vous pouvez passer :

* une plage, ou
* un élément (tableau / ligne / paragraphe / image en ligne / en-tête / corps / pied de page).

Dans *stylePoliceWP*, vous pouvez passer une des constantes de style suivantes, placées dans le thème "4D Write Pro" :

| Constante                 | Type   | Valeur               | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | ------ | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk font bold              | Chaîne | fontBold             | Définit la graisse du texte (dépend des styles de police disponibles). Valeurs possibles :<br/>wk true pour passer en style gras les caractères sélectionnés ; avec la commande [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk true est retournée si au moins un des caractères sélectionnés prend en charge le style de police gras. wk false (défaut) pour supprimer le style gras des caractères sélectionnés s'il y en a ; avec la commande [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk false est retournée si aucun des caractères sélectionnés ne prend en charge le style de police gras.                                                                    |
| wk font italic            | Chaîne | fontItalic           | Définit le style italique du texte (dépend des styles de police disponibles). Valeurs possibles :<br/>wk true pour passer en style italique ou oblique les caractères sélectionnés ; avec la commande [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk true est retournée si au moins un des caractères sélectionnés prend en charge le style de police italique ou oblique. wk false (défaut) pour supprimer le style italique ou oblique des caractères sélectionnés s'il y en a ; avec la commande [WP GET ATTRIBUTES](../commands/wp-get-attributes.md), wk false est retournée si aucun des caractères sélectionnés ne prend en charge le style de police italique ou oblique. |
| wk text linethrough style | Chaîne | textLinethroughStyle | Définit le style du texte barré. Valeurs possibles :<br/>wk none (défaut) : pas d'effet texte barré wk solid : dessine une ligne pleine sur le texte sélectionnéwk dotted : dessine une ligne en pointillés sur le texte sélectionnéwk dashed : dessine une ligne en tirets sur le texte sélectionnéwk double : dessine une ligne double sur le texte sélectionnéwk semi transparent : atténue la ligne sur le texte sélectionné. Peut être combiné à un autre style de ligne. wk word : dessine une ligne sur les mots uniquement (exclut les blancs). Peut être combiné à un autre style de ligne.                                                                 |
| wk text underline style   | Chaîne | textUnderlineStyle   | Définit le style du trait de soulignement. Valeurs possibles :<br/>wk none (défaut) : pas de soulignement wk solid : dessine un trait pleinwk dotted : dessine un trait en pointilléswk dashed : dessine un trait en tiretswk double : dessine un trait doublewk semi transparent : atténue le trait. Peut être combiné à un autre style de ligne. wk word : dessine le trait sur les mots uniquement (exclut les blancs). Peut être combiné à un autre style de trait.                                                                                                                                                                                              |

Typiquement, cette commande permet aux développeurs d'implémenter des objets d'interface personnalisés, comme un pop-up menu proposant des options de style en fonction du texte sélectionné. 
