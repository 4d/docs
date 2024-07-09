---
id: WebFormItemClass
title: WebFormItem
---

Les objets `4D.WebFormItem` sont des propriétés de l'objet [`4D.WebForm`](WebFormItemClass.md) renvoyé par la commande [`Web Form`](WebFormClass.md#web-form).

La classe `WebFormItem` est décrite en détail dans la [documentation de Qodly](https://developer.qodly.com/docs/language/WebFormItemClass).

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R2   | Ajout         |

</details>

### Objet WebFormItem

|                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addclass)<br/><!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)<br/><!-- INCLUDE #WebFormItemClass.hide().Summary -->                            |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removeclass)<br/><!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)<br/><!-- INCLUDE #WebFormItemClass.show().Summary -->                            |

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

La fonction `.hide()` <!-- REF #WebFormItemClass.hide().Summary -->masque le composant<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de `.hide()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormItemClass#hide).

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

La fonction `.show()` <!-- REF #WebFormItemClass.show().Summary -->rend le composant visible<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de `.show()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormItemClass#show).

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| Paramètres | Type   |     | Description                                 |
| ---------- | ------ | :-: | ------------------------------------------- |
| className  | string |  -> | Nom de la classe CSS à ajouter au composant |

<!-- END REF -->

#### Description

La fonction `.addCSSClass` <!-- REF #WebFormItemClass.addCSSClass().Summary -->ajoute la classe *className* au composant<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de `.addCSSClass` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass).

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| Paramètres | Type   |     | Description                                   |
| ---------- | ------ | :-: | --------------------------------------------- |
| className  | string |  -> | Nom de la classe CSS à supprimer du composant |

<!-- END REF -->

#### Description

La fonction `.removeCSSClass()` <!-- REF #WebFormItemClass.removeCSSClass().Summary -->supprime la classe *className* du composant<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de `.removeCSSClass()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass).
