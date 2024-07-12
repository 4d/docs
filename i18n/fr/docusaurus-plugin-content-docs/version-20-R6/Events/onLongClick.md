---
id: onLongClick
title: Sur clic long
---

| Code | Peut être appelé par                     | Définition                                                                            |
| ---- | ---------------------------------------- | ------------------------------------------------------------------------------------- |
| 39   | [Button](FormObjects/button_overview.md) | Un bouton est cliqué et le bouton de la souris reste enfoncé pendant un certain temps |

## Description

Cet événement est généré lorsqu'un bouton reçoit un clic et que le bouton de la souris est maintenu pendant un certain temps. En théorie, la durée de génération de cet événement est égale à la durée maximale séparant un double-clic, telle que définie dans les préférences système.

Cet événement peut être généré pour les styles de boutons suivants :

- [Toolbar](FormObjects/button_overview.md#toolbar)
- [Bevel](FormObjects/button_overview.md#bevel)
- [Rounded Bevel](FormObjects/button_overview.md#rounded-bevel)
- [OS X Gradient](FormObjects/button_overview.md#os-x-gradient)
- [OS X Textured](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [Help](FormObjects/button_overview.md#help)
- [Circle](FormObjects/button_overview.md#circle)
- [Custom](FormObjects/button_overview.md#custom)

Cet événement est généralement utilisé pour afficher des pop-up menus en cas de longs clics sur les boutons. The [`On Clicked`](onClicked.md) event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.

### Voir également

[`On Alternative Click`](onAlternativeClick.md)
