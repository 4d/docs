---
id: user-new
title: user WP
draft: true
---

to import

<!-- REF lists-WP.Desc -->

## Enumérations

4D Write Pro prend en charge deux types principaux de listes :

- listes non ordonnées : les éléments de la liste sont indiqués par des puces, des puces personnalisées ou des images utilisées comme marqueurs.
- listes ordonnées : les éléments de la liste sont indiqués par des chiffres ou des lettres

Ils peuvent être créés avec :

- la barre d'outils ou la barre latérale de [l'interface de 4D Write Pro](https://doc.4d.com/4Dv20/4D/20.2/Entry-areas.300-6750367.en.html#5865253)
- les [actions standard](../user-legacy/standard-actions.md) `listStyleType` ou `listStyleImage`,
- ou [par programmation](../commands-legacy/4d-write-pro-attributes.md#lists) en utilisant [WP SET ATTRIBUTE](./commands/wp-set-attributes).

Lorsqu'une liste est créée à l'aide d'une action standard (`listStyleType` ou `listStyleImage`) ou de la barre d'outils/sidebar, 4D Write Pro insère automatiquement une marge avant le texte afin que le marqueur soit positionné à l'intérieur de celle-ci. La valeur de la marge insérée correspond au décalage de l'onglet par défaut (`wk tab default`).

![](../../assets/en/WritePro/margin-bullets.png)

Lorsque la liste est créée à l'aide de la commande WP SET ATTRIBUTE(../commands-legacy/4d-write-pro-attributes.md#lists), aucune marge spécifique n'est gérée ; par défaut, le marqueur est ajouté à la limite gauche du paragraphe. Le développeur peut ajouter une marge personnalisée si nécessaire.

:::info Article(s) de blog sur le sujet

[4D Write Pro - Ajout automatique d'une marge lorsque des puces sont définies à l'aide d'actions standard](https://blog.4d.com/4d-write-pro-adding-a-margin-automatically-when-bullets-are-set-using-standard-actions)

:::

<!-- END REF -->
