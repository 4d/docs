---
id: onScroll
title: On Scroll
---

| Code | Peut être appelé par                                                                                                                                   | Définition                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 59   | [Zone de saisie](FormObjects/input_overview.md) de [type](FormObjects/properties_Object.md#type) `image` - [List Box](FormObjects/listbox_overview.md) | L'utilisateur fait défiler le contenu d'un objet image ou d'une list box à l'aide de la souris ou du clavier. |

## Description

Cet événement peut être généré dans le contexte d'une zone de saisie d'image ou d'une list box.

Il est déclenché après tout autre événement utilisateur lié à l'action de défilement ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). L'événement est uniquement généré dans la méthode objet (pas dans la méthode formulaire).

L'événement est déclenché lorsque le défilement est le résultat d'une action de l'utilisateur : à l'aide des barres de défilement et/ou des curseurs, à l'aide de la molette de la souris ou du [clavier](FormObjects/properties_Appearance.md#vertical-scroll- Il n'est pas généré lors du défilement de l'objet en raison de l'exécution de la commande `OBJECT SET SCROLL POSITION`.

### Zone de saisie d'image

L'événement est généré dès qu'un utilisateur fait défiler une image dans la zone (champ ou variable) qui la contient. Vous pouvez faire défiler le contenu d'une zone d'image lorsque la taille de la zone est plus petite que son contenu et que le [format d'affichage](FormObjects/properties_Display.md#picture-format) est "Tronqué (non centré)".

### List box

L'événement est généré dès qu'un utilisateur fait défiler les lignes ou les colonnes de la list box.
