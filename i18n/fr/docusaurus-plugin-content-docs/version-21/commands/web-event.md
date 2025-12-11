---
id: web-event
title: Web Event
displayed_sidebar: docs
---

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| Paramètres | Type   |                             | Description                            |
| ---------- | ------ | :-------------------------: | -------------------------------------- |
| Résultat   | Object | &#8592; | Informations sur l'événement déclenché |

<!-- END REF -->

## Description

La commande `Web Event` <!-- REF #_command_.Web Event.Summary -->renvoie un objet contenant des informations sur un événement déclenché lié à un composant de formulaire web Qodly<!-- END REF -->.

La commande doit être appelée dans le contexte d'une page web gérée par le serveur web 4D.

**Résultat**

L'objet retourné contient les propriétés suivantes :

| Propriété |       | Type   | Description                                                                                                                                                                                                                                                            |
| --------- | ----- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| caller    |       | string | [Référence serveur](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#data-access-category) du composant qui déclenche l'événement                                                                                                              |
| eventType |       | string | Type d'événement :<li>onblur</li><li>onfocus</li><li>onclick</li><li>onauxclick</li><li>onmouseenter</li><li>onmouseleave</li><li>onkeyup</li><li>onkeydown</li><li>onchange</li><li>unload</li><li>onload - déclenché au chargement de la `Page`</li> |
| data      |       | object | Informations supplémentaires dépendantes du composant concerné                                                                                                                                                                                                         |
|           | index | number | <li>Composant Tabs : indice de l'onglet (les indices commencent à 0)</li><li>Composant Data Table : numéro de colonne</li>                                                                                                                                             |
|           | row   | number | Composant Data Table : numéro de ligne                                                                                                                                                                                                                 |
|           | name  | string | Composant Data Table : nom qodlysource de la colonne (par exemple "firstname", "address.city")                                                                                                                      |

#### Exemple

L'objectif est d'afficher/masquer un texte d'aide lorsque l'utilisateur survole le composant :

![](../assets/en/commands/web-event1.png)

Pour ce faire, les événements `onmouseenter` et `onmouseleave` sont attachés à un composant **Text input** qui affiche les informations stockées dans un composant **Text** (en affichant "This is the help text").

![](../assets/en/commands/web-event2.png)

Pour ce scénario :

- Le composant Text input a pour référence serveur `orderNumber`.
  ![](../assets/en/commands/web-event3.png)
- Le composant Text a pour référence serveur `helpOn_orderNumber`.
  ![](../assets/en/commands/web-event4.png)
- La fonction [exposée](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) `help()` est attachée aux événements `onmouseenter` et `onmouseleave` et contient le code suivant :

```4d
shared singleton Class constructor()
exposed Function help()
	
	var event : Object
	var myForm : 4D.WebForm
	var componentRef : Text
	
	myForm:=web Form
	event:=web Event
	componentRef:=event.caller

	Au cas ou 
		: (event.eventType="onmouseenter") // l'événement est onmouseenter 
			myForm["helpOn_"+componentRef].show() // montre l'aide sur "orderNumber" en affichant  
			// le composant texte avec la référence "helpOn_orderNumber" 
		: (event.eventType="onmouseleave") // l'événement est onmouseleave 
			myForm["helpOn_"+componentRef].hide() // masquel'aide sur orderNumber
			
	End case 

```

Pour ouvrir la page web avec l'aide de `orderNumber` masqué, vous pouvez associer cette fonction à l'événement `onload` de la page web :

```4d
exposed function hideOnLoad()
	webForm.helpOn_orderNumber.hide()

```

## Voir également

[Web Form](web-form.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1734                        |
| Thread safe        | no |

