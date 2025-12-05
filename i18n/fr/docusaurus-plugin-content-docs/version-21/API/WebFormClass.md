---
id: WebFormClass
title: WebForm
---

La classe `WebForm` contient des fonctions et des propriétés permettant de gérer vos composants de pages Qodly. Les objets `4D.WebForm` sont instanciés avec la commande [`webForm`](../commands/web-form.md).

<details><summary>Historique</summary>

| Release | Modifications                                                                  |
| ------- | ------------------------------------------------------------------------------ |
| 20 R6   | Ajout de enableState() et disableState() |
| 20 R2   | Ajout                                                                          |

</details>

### Commandes et fonctions

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE WebFormClass.componentName.Syntax -->](#componentname)<br/><!-- INCLUDE #WebFormClass.componentName.Summary -->   |
| [<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)<br/><!-- INCLUDE #WebFormClass.disableState().Summary --> |
| [<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)<br/><!-- INCLUDE #WebFormClass.enableState().Summary -->    |
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)<br/><!-- INCLUDE #WebFormClass.setError().Summary -->             |
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)<br/><!-- INCLUDE #WebFormClass.setMessage().Summary -->       |
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)<br/><!-- INCLUDE #WebFormClass.setWarning().Summary -->       |

### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Description

Les composants des pages web sont des objets <!-- REF #WebFormClass.componentName.Summary -->qui sont disponibles directement en tant que propriétés<!-- END REF --> de ces pages web.

Les objets retournés sont de la classe [`4D.WebFormItem`](WebFormItemClass.md). Ces objets possèdent des fonctions que vous pouvez utiliser pour gérer vos composants de manière dynamique.

#### Exemple

```4d
shared singleton Class constructor()
	
	var myForm : 4D.WebForm
	var component : 4D.WebFormItem
	
	myForm:=webForm //renvoie la page web en tant qu'objet, chaque propriété est un composant
	component:=myForm.myImage //renvoie le composant myImage de la page web

```

:::info

Bien que `myForm` n'affiche pas les propriétés typiques de l'objet lorsqu'il est examiné dans le débogueur, il se comporte comme s'il s'agissait de l'objet `webForm` réel. Vous pouvez interagir avec les propriétés et les fonctions de l'objet sous-jacent `webForm` à travers `myForm`. Par exemple, vous pouvez manipuler dynamiquement des composants de page ou transmettre des messages à des pages web en utilisant des fonctions spécialisées comme `myForm.setMessage()`.

:::

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| Paramètres | Type   |     | Description                                 |
| ---------- | ------ | :-: | ------------------------------------------- |
| state      | string |  -> | Nom de l'état à désactiver dans la page web |

<!-- END REF -->

#### Description

La fonction `.disableState()` <!-- REF #WebFormClass.disableState().Summary -->désactive le rendu de l'état *state* dans la page web courante<!-- END REF -->.

Cette fonction ne fait rien si :

- le *state* n'est actuellement pas activé dans la page web,
- le *state* n'existe pas pour la page web.

Si vous [activez](#enablestate) ou désactivez plusieurs états dans la même fonction utilisateur, toutes les modifications sont envoyées en même temps au client une fois que la fonction se termine.

Pour plus d'informations sur les états des pages web, veuillez vous référer à la [section States dans la documentation de Qodly](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/states/stateOverview).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| Paramètres | Type   |     | Description                               |
| ---------- | ------ | :-: | ----------------------------------------- |
| state      | string |  -> | Nom de l'état à activer sur les pages web |

<!-- END REF -->

#### Description

La fonction `.enableState()` <!-- REF #WebFormClass.enableState().Summary -->active le rendu de l'état *state* dans la page web courante<!-- END REF -->.

Cette fonction ne fait rien si :

- le *state* a déjà été activé sur la page web,
- le *state* n'existe pas pour la page web.

Si vous activez ou [désactivez](#disablestate) plusieurs états dans la même fonction utilisateur, toutes les modifications sont envoyées en même temps au client une fois que la fonction se termine.

Pour plus d'informations sur les états des pages web, veuillez vous référer à la [section States dans la documentation de Qodly](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/states/stateOverview).

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

| Paramètres | Type   |     | Description                                  |
| ---------- | ------ | :-: | -------------------------------------------- |
| msg        | string |  -> | Message d'erreur à afficher dans la page web |

<!-- END REF -->

#### Description

La fonction `.setError()` <!-- REF #WebFormClass.setError().Summary -->envoie *msg* comme message d'erreur à la page web<!-- END REF -->.

La fonction renvoie une réponse avec un statut `200 OK` et un objet `__WEBFORM` dans le corps avec une propriété `__NOTIFICATION.message` fixée à *msg* et un `__NOTIFICATION.type` fixé à "error".

#### Exemple

```4d
shared singleton Class constructor()
exposed function myError()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setError("My error message")

```

Si la fonctionnalité [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) est activée pour l'événement, le message *msg* s'affiche en *toast* rouge au bas de la page web et disparaît automatiquement après 5 secondes :

![](../assets/en/API/webformClass-pic1.png)

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| Paramètres | Type   |     | Description                                       |
| ---------- | ------ | :-: | ------------------------------------------------- |
| msg        | string |  -> | Message d'information à afficher dans la page web |

<!-- END REF -->

#### Description

La fonction `.setMessage()` <!-- REF #WebFormClass.setMessage().Summary -->envoie *msg* comme message d'information à la page web<!-- END REF -->.

La fonction renvoie une réponse avec un statut `200 OK` et un objet `__WEBFORM` dans le corps avec une propriété `__NOTIFICATION.message` fixée à *msg* et un `__NOTIFICATION.type` fixé à "message".

#### Exemple

```4d
shared singleton Class constructor()
exposed function myMessage()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setMessage("My information message")

```

Si la fonctionnalité [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) est activée pour l'événement, le message *msg* s'affiche en *toast* vert au bas de la page web et disparaît automatiquement après 5 secondes :

![](../assets/en/API/webformClass-pic2.png)

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| Paramètres | Type   |     | Description                                         |
| ---------- | ------ | :-: | --------------------------------------------------- |
| msg        | string |  -> | Message d'avertissement à afficher dans la page web |

<!-- END REF -->

#### Description

La fonction `.setWarning()` <!-- REF #WebFormClass.setWarning().Summary -->envoie *msg* comme message d'avertissement à la page web<!-- END REF -->.

La fonction renvoie une réponse avec un statut `200 OK` et un objet `__WEBFORM` dans le corps avec une propriété `__NOTIFICATION.message` fixée à *msg* et un `__NOTIFICATION.type` fixé à "warning".

#### Exemple

```4d
shared singleton Class constructor()
exposed function myWarning()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setWarning("My warning message")

```

Si la fonctionnalité [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) est activée pour l'événement, le message *msg* s'affiche en *toast* jaune au bas de la page web et disparaît automatiquement après 5 secondes :

![](../assets/en/API/webformClass-pic3.png)

## Voir également

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)