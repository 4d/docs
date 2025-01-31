---
id: menu
title: Menu
---

## Barre de menus associée

Lorsqu'une barre de menus est associée à un formulaire, elle est ajoutée à droite de la barre de menus courante lorsque le formulaire est affiché dans l'environnement d'Application.

La sélection d'une commande de menu entraîne l'envoi d'un événement `Sur menu sélectionné` à la méthode formulaire; vous pouvez ensuite utiliser la commande `Menu selected` pour tester le menu sélectionné.

> Si la barre de menus du formulaire est identique à la barre de menus courante, elle n'est pas ajoutée.

La barre de menus du formulaire fonctionnera pour les formulaires d'entrée et de sortie.

#### Grammaire JSON

| Nom     | Type de données | Valeurs possibles       |
| ------- | --------------- | ----------------------- |
| menuBar | string          | Nom d'une barre de menu |
