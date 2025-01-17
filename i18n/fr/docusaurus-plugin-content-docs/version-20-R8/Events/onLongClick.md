---
id: onLongClick
title: On Long Click
---

| Code | Peut être appelé par                     | Définition                                                                            |
| ---- | ---------------------------------------- | ------------------------------------------------------------------------------------- |
| 39   | [Bouton](FormObjects/button_overview.md) | Un bouton est cliqué et le bouton de la souris reste enfoncé pendant un certain temps |

## Description

Cet événement est généré lorsqu'un bouton reçoit un clic et que le bouton de la souris est maintenu pendant un certain temps. En théorie, la durée de génération de cet événement est égale à la durée maximale séparant un double-clic, telle que définie dans les préférences système.

Cet événement peut être généré pour les styles de boutons suivants :

- [Toolbar](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Bevel arrondi](FormObjects/button_overview.md#rounded-bevel)
- [OS X Gradient](FormObjects/button_overview.md#os-x-gradient)
- [OS X Texture](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Aide](FormObjects/button_overview.md#help)
- [Rond](FormObjects/button_overview.md#circle)
- [Personnalisé](FormObjects/button_overview.md#custom)

Cet événement est généralement utilisé pour afficher des pop-up menus en cas de longs clics sur les boutons. L'événement [`On Clicked`](onClicked.md), s'il est activé, est généré si l'utilisateur relâche le bouton de la souris avant la limite de temps du "clic long".

### Voir également

[`On Alternative Click`](onAlternativeClick.md)
