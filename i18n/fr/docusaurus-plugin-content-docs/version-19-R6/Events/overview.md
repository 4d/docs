---
id: overview
title: Vue d’ensemble
---

Les événements formulaire sont des événements qui peuvent conduire à l'exécution de la méthode de formulaire et/ou de la ou des méthodes objet de formulaire. Les événements de formulaire vous permettent de contrôler le flux de votre application et d'écrire du code qui n'est exécuté que lorsqu'un événement spécifique se produit.

Dans votre code, vous contrôlez les événements à l'aide de la commande `FORM Event`, qui retourne l'événement déclenché.

```4d  
//code d'un bouton
If(FORM Event.code=On Clicked) 
// faire quelque chose quand on clique sur le bouton
End if
```

> Chaque formulaire et chaque objet actif du formulaire peut lire un ensemble prédéfini d'événements, mais seuls les événements que vous avez activés au niveau du formulaire et/ou à chaque niveau d'objet se produiront réellement.


## Objet événement

Chaque événement est retourné sous forme d'objet par la commande `FORM Event`. Par défaut, il contient les propriétés suivantes :

| Propriété | Type | Description |
| --------- | ---- | ----------- |
|           |      |             |
 objectName|text|Name of the object triggering the event - Not included if the event is triggered by the form| |code|longint|Numeric value of the form event. Also returned by the

Des propriétés supplémentaires sont retournées lorsque l'événement se produit sur des objets spécifiques. En particulier :

- Les [list box](FormObjects/listbox_overview.md#supported-form-events) et les [colonnes de list box](FormObjects/listbox_overview.md#supported-form-events-1) retournent des [propriétés supplémentaires](FormObjects/listbox_overview.md#additional-properties) telles que `columnName` ou `isRowSelected`.
- Les [zones 4D View Pro](FormObjects/viewProArea_overview.md) retournent par exemple des propriétés `sheetName` ou `action` dans l'objet événement [On After Edit](onAfterEdit.md).


## Événements et méthodes

Lorsqu'un événement formulaire se produit, 4D effectue les actions suivantes :

- Tout d'abord, il parcourt les objets du formulaire et appelle la méthode objet pour tout objet (associé à l'événement) dont la propriété d'événement d'objet correspondante a été sélectionnée.
- Deuxièmement, il appelle la méthode formulaire si la propriété d'événement formulaire correspondante a été sélectionnée.

Ne supposez pas que les méthodes objet, le cas échéant, seront appelées dans un ordre particulier. La règle d'or est que les méthodes objet sont toujours appelées avant la méthode formulaire. Si un objet est un sous-formulaire, les méthodes objet du formulaire liste du sous-formulaire sont appelées, suivie de la méthode formulaire du formulaire liste. 4D continue alors d'appeler les méthodes objet du formulaire parent. En d'autres termes, lorsqu'un objet est un sous-formulaire, 4D utilise la même règle pour les méthodes objet et formulaire au sein de l'objet sous-formulaire.

À l'exception des événements [On Load](onLoad.md) et [On Unload](onUnload.md) (voir ci-dessous), si la propriété d'événement formulaire n'est pas sélectionnée pour un événement donné, cela n'empêche pas les appels vers les méthodes objet pour les objets dont la même propriété d'événement est sélectionnée. En d'autres termes, l'activation ou la désactivation d'un événement au niveau du formulaire n'a aucun effet sur les propriétés d'événement de l'objet.

Le nombre d'objets associés à un événement dépend de la nature de l'événement.

## Tableau des appels

Le tableau suivant résume la manière dont les méthodes objet et formulaire sont appelées pour chaque type d'événement :

| Evénement                     | Méthode objet                      | Méthode formulaire | Objets                      |
| ----------------------------- | ---------------------------------- | ------------------ | --------------------------- |
| Sur chargement                | Oui                                | Oui                | Tous les objets             |
| On Unload                     | Oui                                | Oui                | Tous les objets             |
| Sur validation                | Oui                                | Oui                | Tous les objets             |
| On Clicked                    | Oui                                | Oui                | Objets concernés uniquement |
| On Double Clicked             | Oui                                | Oui                | Objets concernés uniquement |
| Sur avant frappe clavier      | Oui                                | Oui                | Objets concernés uniquement |
| On After Keystroke            | Oui                                | Oui                | Objets concernés uniquement |
| On After Edit                 | Oui                                | Oui                | Objets concernés uniquement |
| On Getting Focus              | Oui                                | Oui                | Objets concernés uniquement |
| On Losing Focus               | Oui                                | Oui                | Objets concernés uniquement |
| Sur activation                | Jamais                             | Oui                | Aucun                       |
| On Deactivate                 | Jamais                             | Oui                | Aucun                       |
| Sur appel extérieur           | Jamais                             | Oui                | Aucun                       |
| Sur changement page           | Jamais                             | Oui                | Aucun                       |
| Sur début survol              | Oui                                | Oui                | Objets concernés uniquement |
| Sur déposer                   | Oui                                | Oui                | Objets concernés uniquement |
| Sur glisser                   | Oui                                | Jamais             | Objets concernés uniquement |
| Sur début survol              | Oui                                | Oui                | Tous les objets             |
| Sur survol                    | Oui                                | Oui                | Tous les objets             |
| Sur fin survol                | Oui                                | Oui                | Tous les objets             |
| On Mouse Up                   | Oui                                | Jamais             | Objets concernés uniquement |
| Sur menu sélectionné          | Jamais                             | Oui                | Aucun                       |
| On Bound variable change      | Jamais                             | Oui                | Aucun                       |
| Sur données modifiées         | Oui                                | Oui                | Objets concernés uniquement |
| Sur appel zone du plug in     | Oui                                | Oui                | Objets concernés uniquement |
| Sur entête                    | Oui                                | Oui                | Tous les objets             |
| On Printing Detail            | Oui                                | Oui                | Tous les objets             |
| On Printing Break             | Oui                                | Oui                | Tous les objets             |
| On Printing Footer            | Oui                                | Oui                | Tous les objets             |
| On Close Box                  | Jamais                             | Oui                | Aucun                       |
| Sur affichage corps           | Oui                                | Oui                | Tous les objets             |
| Sur ouverture corps           | Oui (List box)                     | Oui                | Aucun, excepté les List box |
| Sur fermeture corps           | Oui (List box)                     | Oui                | Aucun, excepté les List box |
| Sur redimensionnement         | Jamais                             | Oui                | Aucun                       |
| Sur nouvelle sélection        | Oui                                | Oui                | Objets concernés uniquement |
| Sur chargement ligne          | Jamais                             | Oui                | Aucun                       |
| Sur minuteur                  | Jamais                             | Oui                | Aucun                       |
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
| Sur déployer                  | Oui (Liste hiérar. et list box)    | Jamais             | Objets concernés uniquement |
| Sur contracter                | Oui (Liste hiérar. et list box)    | Jamais             | Objets concernés uniquement |
| Sur action suppression        | Oui (Liste hiérar. et list box)    | Jamais             | Objets concernés uniquement |
| On URL Resource Loading       | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On Begin URL Loading          | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On URL Loading Error          | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On URL Filtering              | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On End URL Loading            | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On Open External Link         | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On Window Opening Denied      | Oui (Zone Web)                     | Jamais             | Objets concernés uniquement |
| On VP Range Changed           | Oui (4D View Pro Area)             | Jamais             | Objets concernés uniquement |
| On VP Ready                   | Oui (4D View Pro Area)             | Jamais             | Objets concernés uniquement |
| On Row Resize                 | Oui (4D View Pro Area)             | Jamais             | Objets concernés uniquement |

Gardez toujours à l'esprit que, pour tout événement, la méthode d'un formulaire ou d'un objet est appelée si la propriété d'événement correspondante est sélectionnée pour le formulaire ou les objets. L'avantage de la désactivation des événements dans l'environnement de développement (à l'aide de la liste des propriétés de l'éditeur de formulaires) est la réduction du nombre d'appels vers des méthodes et par conséquent l'optimisation de la vitesse d'exécution de vos formulaires.

> ATTENTION : Les événements [On Load et [](onUnloas)On Unload](onLoad) sont générés pour les objets s'ils sont activés à la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les événements sont activés pour les objets uniquement, ils ne se produiront pas; ces deux événements doivent également être activés au niveau du formulaire.

