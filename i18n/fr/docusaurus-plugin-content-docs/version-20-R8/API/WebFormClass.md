---
id: WebFormClass
title: WebForm
---

La classe `WebForm` contient des fonctions et des propriétés permettant de gérer vos composants de webforms Qodly. Cette classe est décrite en détail dans la [documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>Historique</summary>

| Release | Modifications                                                                  |
| ------- | ------------------------------------------------------------------------------ |
| 20 R6   | Ajout de enableState() et disableState() |
| 20 R2   | Ajout                                                                          |

</details>

### Commandes et fonctions

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)<br/><!-- INCLUDE #WebFormClass.componentName.Summary -->  |
| [<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)<br/><!-- INCLUDE #WebFormClass.disableState().Summary --> |
| [<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)<br/><!-- INCLUDE #WebFormClass.enableState().Summary -->    |
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)<br/><!-- INCLUDE #WebFormClass.setError().Summary -->             |
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)<br/><!-- INCLUDE #WebFormClass.setMessage().Summary -->       |
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)<br/><!-- INCLUDE #WebFormClass.setWarning().Summary -->       |
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)<br/><!-- INCLUDE #_command_.Web Form.Summary -->                       |
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)<br/><!-- INCLUDE #_command_.Web Event.Summary -->                    |

### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Description

Les composants des webforms sont des <!-- REF #WebFormClass.componentName.Summary -->objets disponibles directement en tant que propriétés<!-- END REF --> de ces webforms.

Pour plus d'informations, veuillez vous référer à la description de [`.componentName` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#componentname).

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| Paramètres | Type   |     | Description                                       |
| ---------- | ------ | :-: | ------------------------------------------------- |
| state      | string |  -> | Nom de l'état à désactiver dans le formulaire web |

<!-- END REF -->

#### Description

La fonction `.disableState()` <!-- REF #WebFormClass.disableState().Summary -->désactive le rendu de l'*état* dans le formulaire web courant<!-- END REF -->.

Cette fonction ne fait rien si :

- l'*état* n'est actuellement pas activé dans le formulaire web,
- l'*état* n'existe pas pour le formulaire web.

Si vous [activez](#enablestate) ou désactivez plusieurs états dans la même fonction utilisateur, toutes les modifications sont envoyées en même temps au client une fois que la fonction se termine.

Pour plus d'informations sur les états des pages Qodly, veuillez consulter [developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| Paramètres | Type   |     | Description                                   |
| ---------- | ------ | :-: | --------------------------------------------- |
| state      | string |  -> | Nom de l'état à activer sur le formulaire web |

<!-- END REF -->

#### Description

La fonction `.enableState()` <!-- REF #WebFormClass.enableState().Summary -->active le rendu de l'*état* dans le formulaire web courant<!-- END REF -->.

Cette fonction ne fait rien si :

- l'*état* a déjà été activé sur le formulaire web,
- l'*état* n'existe pas pour le formulaire web.

Si vous activez ou [désactivez](#disablestate) plusieurs états dans la même fonction utilisateur, toutes les modifications sont envoyées en même temps au client une fois que la fonction se termine.

Pour plus d'informations sur les états des pages Qodly, veuillez consulter [developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

#### Exemple

Vous activez un état spécifique appelé "wrongCredentials" en cas d'erreur sur votre page de connexion :

```4d
Function authenticationError()
	If (Session.info.type#"remote")
		Web Form.enableState("wrongCredentials")
	End if
```

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| Paramètres | Type   |     | Description                                 |
| ---------- | ------ | :-: | ------------------------------------------- |
| msg        | string |  -> | Message d'erreur à afficher dans le webform |

<!-- END REF -->

#### Description

La fonction `.setError()` <!-- REF #WebFormClass.setError().Summary -->envoie *msg* en tant que message d'erreur vers le formulaire web<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de la fonction `.setError()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#seterror).

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| Paramètres | Type   |     | Description                                      |
| ---------- | ------ | :-: | ------------------------------------------------ |
| msg        | string |  -> | Message d'information à afficher dans le webform |

<!-- END REF -->

#### Description

La fonction `.setMessage()` <!-- REF #WebFormClass.setMessage().Summary -->envoie *msg* en tant que message d'information au formulaire web<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de la méthode `.setMessage()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#setmessage).

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| Paramètres | Type   |     | Description                                        |
| ---------- | ------ | :-: | -------------------------------------------------- |
| msg        | string |  -> | Message d'avertissement à afficher dans le webform |

<!-- END REF -->

#### Description

La fonction `.setWarning()` <!-- REF #WebFormClass.setWarning().Summary -->envoie *msg* en tant que message d'avertissement au formulaire web<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de la méthode `.setWarning()` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#setwarning).

## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Paramètres | Type                       |                             | Description                  |
| ---------- | -------------------------- | :-------------------------: | ---------------------------- |
| Résultat   | 4D.WebForm | <- | Nouvel objet proxy `WebForm` |

<!-- END REF -->

#### Description

La commande `Web Form` <!-- REF #_command_.Web Form.Summary --> renvoie un objet proxy `4D.WebForm` qui vous permet d'interagir avec le formulaire web<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de la commande `webForm` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webform).

## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : Object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| Paramètres | Type   |                             | Description |
| ---------- | ------ | :-------------------------: | ----------- |
| Résultat   | object | <- | object      |

<!-- END REF -->

#### Description

La commande `Web Event` <!-- REF #_command_.Web Event.Summary -->renvoie un objet contenant des informations sur un événement déclenché lié à un composant de formulaire web<!-- END REF -->.

Pour plus d'informations, veuillez vous référer à la [description de la commande `webEvent` dans la documentation de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webevent).
