---
id: onScroll
title: On Scroll
---

| Code | Peut être appelé par                                                                                                                                | Définition                                                                                                                    |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 59   | [Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type) - [List Box](FormObjects/listbox_overview.md) | L'utilisateur fait défiler le contenu d'un objet image ou d'une list box à l'aide de la souris ou du clavier. |

## Description

Cet événement peut être généré dans le contexte d'une entrée d'image ou d'une list box.

This event is triggered after any other user event related to the scrolling action ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). L'événement est uniquement généré dans la méthode objet (pas dans la méthode formulaire).

The event is triggered when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or [the keyboard](FormObjects/properties_Appearance.md#vertical-scroll-bar). It is not generated when the object is scrolled due to the execution of the `OBJECT SET SCROLL POSITION` command.

### Entrée d'image

L'événement est généré dès qu'un utilisateur fait défiler une image dans l'entrée d'image (champ ou variable) qui la contient. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the [display format](FormObjects/properties_Display.md#picture-format) is "Truncated (non Centered)".

### List box

L'événement est généré dès qu'un utilisateur fait défiler les lignes ou les colonnes de la list box.
