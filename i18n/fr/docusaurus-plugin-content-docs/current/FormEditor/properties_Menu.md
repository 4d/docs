---
id: menu
title: Menu
---

## Barre de menus associée

Lorsqu'une barre de menus est associée à un formulaire, elle est ajoutée à droite de la barre de menus courante lorsque le formulaire est affiché dans l'environnement d'Application.

The selection of a menu command causes an `On Menu Selected` event to be sent to the form method; you can then use the `Menu selected` command to test the selected menu.

> Si la barre de menus du formulaire est identique à la barre de menus courante, elle n'est pas ajoutée.

La barre de menus du formulaire fonctionnera pour les formulaires d'entrée et de sortie.

#### Grammaire JSON

| Nom     | Type de données | Valeurs possibles       |
| ------- | --------------- | ----------------------- |
| menuBar | string          | Nom d'une barre de menu |
