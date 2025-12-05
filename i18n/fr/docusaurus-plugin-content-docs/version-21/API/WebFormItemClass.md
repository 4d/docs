---
id: WebFormItemClass
title: WebFormItem
---

La classe `4D.WebFormItem` vous permet de gérer le comportement de vos composants dans les pages web Qodly.

Les objets `4D.WebFormItem` sont des propriétés de l'objet [`4D.WebForm`](WebFormClass.md) renvoyé par la commande [`Web Form`](../commands/web-form.md).

Lorsque vous appelez la commande [`Web Form`](../commands/web-form.md), l'objet proxy `4D.WebForm` retourné contient autant de `4D.WebFormItems` qu'il y a de composants avec [**références serveur**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#server-side) dans votre page Qodly.

Par exemple, `WebFormObject.myImage` fait référence au composant image avec `myImage` comme référence serveur.

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R2   | Ajout         |

</details>

### Objet WebFormItem

|                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addcssclass)<br/><!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)<br/><!-- INCLUDE #WebFormItemClass.hide().Summary -->                               |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removecssclass)<br/><!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)<br/><!-- INCLUDE #WebFormItemClass.show().Summary -->                               |

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| Paramètres | Type   |     | Description                                 |
| ---------- | ------ | :-: | ------------------------------------------- |
| className  | string |  -> | Nom de la classe CSS à ajouter au composant |

<!-- END REF -->

#### Description

La fonction `.addCSSClass` <!-- REF #WebFormItemClass.addCSSClass().Summary -->ajoute la classe *className* au composant<!-- END REF -->.

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

La fonction `.hide()` <!-- REF #WebFormItemClass.hide().Summary -->masque le composant<!-- END REF -->.

#### Exemple

Pour appeler une fonction qui masque une image lorsque l'utilisateur clique sur un bouton :

1. Créez une fonction [exposed](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) à l'intérieur d'une classe singleton partagée nommée `isHidden` qui contient le code suivant :

```4d

shared singleton Class constructor()
exposed Function isHidden()
	var myComponent : 4D.WebFormItem
	
	myComponent:=Web Form.myImage
	myComponent.hide() // Cache le composant qui a "myImage" comme référence serveur 
```

2. Dans Qodly Studio : Sélectionnez le composant image dans la page et entrez une référence côté serveur dans le panneau Properties > Server Side, par exemple "myImage".
3. Sélectionnez le composant Button et ajoutez-lui un événement `onclick`.
4. Attachez la fonction `isHidden` à l'événement.

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| Paramètres | Type   |     | Description                                   |
| ---------- | ------ | :-: | --------------------------------------------- |
| className  | string |  -> | Nom de la classe CSS à supprimer du composant |

<!-- END REF -->

#### Description

La fonction `.removeCSSClass()` <!-- REF #WebFormItemClass.removeCSSClass().Summary -->supprime la classe *className* du composant<!-- END REF -->.

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

La fonction `.show()` <!-- REF #WebFormItemClass.show().Summary -->rend le composant visible<!-- END REF -->. Si le composant était déjà visible, la fonction ne fait rien.

## Voir également

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebForm class](WebFormClass.md)



