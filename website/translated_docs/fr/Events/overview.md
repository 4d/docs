---
id: overview
title: Aperçu
---

Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs.

In your code, you control the events using the `FORM Event` command, that returns the triggered event. Par exemple:

```4d  
//code of a button
If(FORM Event.code=On Clicked) 
// do something when the button is clicked
End if
```

> Every form and every active object on the form can listen to a predefined set of events, but only the events that you enabled at the form level and/or at every object level will actually occur.


## Event object

Each event is returned as an object by the `FORM Event` command. By default, it contains the following properties:

| Propriété | Type | Description |
| --------- | ---- | ----------- |
|           |      |             |
 objectName|text|Name of the object triggering the event - Not included if the event is triggered by the form| |code|longint|Numeric value of the form event. Also returned by the 

`Form event code` command| |description|text|Name of the form event (e.g. "On After Edit")|

Additional properties are returned when the event occurs on specific objects. For example, the [On After Edit](onAfterEdit.md) event object returned by a [4D View Pro area](FormObjects/viewProArea_overview.md) contains `sheetName` or `action` properties.


## Events and Methods

When a form event occurs, 4D performs the following actions:

- First, it browses the objects of the form and calls the object method for any object (involved in the event) whose corresponding object event property has been selected.
- Second, it calls the form method if the corresponding form event property has been selected.

Do not assume that the object methods, if any, will be called in a particular order. The rule of thumb is that the object methods are always called before the form method. If an object is a subform, the object methods of the subform’s list form are called, then the form method of the list form is called. 4D then continues to call the object methods of the parent form. In other words, when an object is a subform, 4D uses the same rule of thumb for the object and form methods within the subform object.

Except for the [On Load](onLoad.md) and [On Unload](onUnload.md) events (see below), if the form event property is not selected for a given event, this does not prevent calls to object methods for the objects whose same event property is selected. In other words, enabling or disabling an event at the form level has no effect on the object event properties.

The number of objects involved in an event depends on the nature of the event.

## Call Table

The following table summarizes how object and form methods are called for each event type:

| Evénement                     | Méthode objet                      | Méthode formulaire | Objets                      |
| ----------------------------- | ---------------------------------- | ------------------ | --------------------------- |
| On Load                       | Oui                                | Oui                | Tous les objets             |
| On Unload                     | Oui                                | Oui                | Tous les objets             |
| Sur validation                | Oui                                | Oui                | Tous les objets             |
| Sur clic                      | Oui                                | Oui                | Objets concernés uniquement |
| Sur double clic               | Oui                                | Oui                | Objets concernés uniquement |
| Sue avant frappe clavier      | Oui                                | Oui                | Objets concernés uniquement |
| Sue après frappe clavier      | Oui                                | Oui                | Objets concernés uniquement |
| Sur après modification        | Oui                                | Oui                | Objets concernés uniquement |
| On Getting Focus              | Oui                                | Oui                | Objets concernés uniquement |
| On Losing Focus               | Oui                                | Oui                | Objets concernés uniquement |
| Sur activation                | Jamais                             | Oui                | None                        |
| On Deactivate                 | Jamais                             | Oui                | None                        |
| Sur appel extérieur           | Jamais                             | Oui                | None                        |
| Sur changement page           | Jamais                             | Oui                | None                        |
| Sur début survol              | Oui                                | Oui                | Objets concernés uniquement |
| Sur déposer                   | Oui                                | Oui                | Objets concernés uniquement |
| Sur glisser                   | Oui                                | Jamais             | Objets concernés uniquement |
| Sur début survol              | Oui                                | Oui                | Tous les objets             |
| Sur survol                    | Oui                                | Oui                | Tous les objets             |
| Sur fin survol                | Oui                                | Oui                | Tous les objets             |
| On Mouse Up                   | Oui                                | Jamais             | Objets concernés uniquement |
| Sur menu sélectionné          | Jamais                             | Oui                | None                        |
| On Bound variable change      | Jamais                             | Oui                | None                        |
| Sur données modifiées         | Oui                                | Oui                | Objets concernés uniquement |
| Sur appel zone du plug in     | Oui                                | Oui                | Objets concernés uniquement |
| Sur entête                    | Oui                                | Oui                | Tous les objets             |
| On Printing Detail            | Oui                                | Oui                | Tous les objets             |
| On Printing Break             | Oui                                | Oui                | Tous les objets             |
| On Printing Footer            | Oui                                | Oui                | Tous les objets             |
| On Close Box                  | Jamais                             | Oui                | None                        |
| Sur affichage corps           | Oui                                | Oui                | Tous les objets             |
| Sur ouverture corps           | Oui (List box)                     | Oui                | Aucun, excepté les List box |
| Sur fermeture corps           | Oui (List box)                     | Oui                | Aucun, excepté les List box |
| Sur redimensionnement         | Jamais                             | Oui                | None                        |
| Sur nouvelle sélection        | Oui                                | Oui                | Objets concernés uniquement |
| Sur chargement ligne          | Jamais                             | Oui                | None                        |
| Sur minuteur                  | Jamais                             | Oui                | None                        |
| Sur défilement                | Oui                                | Jamais             | Objets concernés uniquement |
| Sur avant saisie              | Oui (List box)                     | Jamais             | Objets concernés uniquement |
| Sur déplacement colonne       | Oui (List box)                     | Jamais             | Objets concernés uniquement |
| Sur déplacement ligne         | Oui (List box)                     | Jamais             | Objets concernés uniquement |
| Sur redimensionnement colonne | Oui (List box et Zone 4D View Pro) | Jamais             | Objets concernés uniquement |
| Sur clic entête               | Oui (List box et Zone 4D View Pro) | Jamais             | Objets concernés uniquement |
| Sur clic pied                 | Oui (List box)                     | Jamais             | Objets concernés uniquement |
| Sur après tri                 | Oui (List box)                     | Jamais             | Objets concernés uniquement |
| Sur clic long                 | Oui (Bouton)                       | Oui                | Objets concernés uniquement |
| Sur clic alternatif           | Oui (Bouton et List box)           | Jamais             | Objets concernés uniquement |
| Sur déployer                  | Yes (Hier. list and list box)      | Jamais             | Objets concernés uniquement |
| Sur contracter                | Yes (Hier. list and list box)      | Jamais             | Objets concernés uniquement |
| Sur action suppression        | Yes (Hier. list and list box)      | Jamais             | Objets concernés uniquement |
| On URL Resource Loading       | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On Begin URL Loading          | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On URL Loading Error          | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On URL Filtering              | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On End URL Loading            | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On Open External Link         | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On Window Opening Denied      | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On VP Ready                   | Oui (4D View Pro Area)             | Jamais             | Objets concernés uniquement |
| On Row Resize                 | Oui (4D View Pro Area)             | Jamais             | Objets concernés uniquement |

Always keep in mind that, for any event, the method of a form or an object is called if the corresponding event property is selected for the form or objects. The benefit of disabling events in the Design environment (using the Property List of the Form editor) is that you can reduce the number of calls to methods and therefore significantly optimize the execution speed of your forms.

> WARNING: The [On Load](onLoad) and [On Unload](onUnloas) events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.

