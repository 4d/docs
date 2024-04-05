---
id: WebFormClass
title: WebForm
---


La classe `WebForm` contient des fonctions et des propriétés permettant de gérer vos composants de webforms Qodly. Cette classe est décrite en détail dans la [documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R2   | Ajout         |

</details>




### Commandes et fonctions

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary -->|
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->|
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->|
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->|
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Web Form.Summary -->|
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Web Event.Summary -->|



### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Description

Les composants des webforms sont <!-- REF #WebFormClass.componentName.Summary -->objets disponibles directement en tant que propriétés<!-- END REF --> de ces webforms.

Pour plus d'informations, veuillez vous référer à la description de [`.componentName` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#componentname).



### .setError()

<!-- REF #WebFormClass.setError().Syntax -->
**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->
| Paramètres | Type   |    | Description                                 |
| ---------- | ------ |:--:| ------------------------------------------- |
| msg        | string | -> | Message d'erreur à afficher dans le webform |
<!-- END REF -->

#### Description

La fonction `.setError()` <!-- REF #WebFormClass.setError().Summary -->envoie *msg* comme message d'erreur au webform<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la description de [`.setError()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#seterror).



### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->
**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->
| Paramètres | Type   |    | Description                                      |
| ---------- | ------ |:--:| ------------------------------------------------ |
| msg        | string | -> | Message d'information à afficher dans le webform |
<!-- END REF -->

#### Description

La fonction `.setMessage()` <!-- REF #WebFormClass.setMessage().Summary -->envoie *msg* comme message d'information au webform<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la description de [`.setMessage()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#setmessage).


### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->
**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->
| Paramètres | Type   |    | Description                                        |
| ---------- | ------ |:--:| -------------------------------------------------- |
| msg        | string | -> | Message d'avertissement à afficher dans le webform |
<!-- END REF -->

#### Description

La fonction `.setWarning()`  <!-- REF #WebFormClass.setWarning().Summary -->envoie *msg* comme message d'avertissement au webform<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la description de [`.setWarning()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#setwarning).


## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->
| Paramètres | Type       |    | Description                  |
| ---------- | ---------- |:--:| ---------------------------- |
| Résultat   | 4D.WebForm | <- | Nouvel objet proxy `WebForm` |
<!-- END REF -->

#### Description

La commande `Web Form` <!-- REF #_command_.Web Form.Summary --> renvoie un objet proxy `4D.WebForm` qui vous permet d'interagir avec le webform<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la description de la commande [`webForm` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webform).


## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->
| Paramètres | Type   |    | Description |
| ---------- | ------ |:--:| ----------- |
| Résultat   | object | <- | object      |
<!-- END REF -->

#### Description

La commande `Web Event` <!-- REF #_command_.Web Event.Summary -->renvoie un objet contenant des informations sur un événement déclenché lié à un composant webform<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la description de la commande [`webEvent` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webevent). 