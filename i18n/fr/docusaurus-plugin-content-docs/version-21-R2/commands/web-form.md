---
id: web-form
title: Web Form
displayed_sidebar: docs
---

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Paramètres | Type                       |                             | Description                  |
| ---------- | -------------------------- | :-------------------------: | ---------------------------- |
| Résultat   | 4D.WebForm | &#8592; | Nouvel objet proxy `WebForm` |

<!-- END REF -->

## Description

La commande `Web Form` <!-- REF #_command_.Web Form.Summary --> renvoie un objet proxy `4D.WebForm`, qui permet de travailler avec les propriétés et les fonctions de la page et de les émuler efficacement<!-- END REF -->.

:::info

Gardez à l'esprit qu'un objet `4D.WebForm` est un **objet proxy**, et non une référence directe à l'objet page web lui-même. En conséquence, par exemple, l'objet `4D.WebForm` n'expose pas toutes les propriétés de la page dans le débogueur.

:::

Chaque propriété de l'objet renvoyé est un objet de la classe [4D.WebFormItem](../API/WebFormItemClass.md).

La commande renvoie `null` si elle est appelée dans une requête qui ne provient pas de Qodly Studio.

## Voir également

[Web Event](web-event.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1735                        |
| Thread safe        | &cross; |




