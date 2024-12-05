---
id: overview
title: Evénements formulaire
---

Les événements formulaire sont des événements qui peuvent conduire à l'exécution de la méthode de formulaire et/ou de la ou des méthodes objet de formulaire. Les événements de formulaire vous permettent de contrôler le flux de votre application et d'écrire du code qui n'est exécuté que lorsqu'un événement spécifique se produit.

In your code, you control the events using the [`FORM Event`](../commands/form-event.md) command, that returns the triggered event. Par exemple :

```4d
//code d'un bouton
If(FORM Event.code=On Clicked) 
// faire quelque chose quand on clique sur le bouton
End if
```

> Chaque formulaire et chaque objet actif du formulaire peut lire un ensemble prédéfini d'événements, mais seuls les événements que vous avez activés au niveau du formulaire et/ou à chaque niveau d'objet se produiront réellement.

## Objet événement

Each event is returned as an object by the [`FORM Event`](../commands/form-event.md) command. Par défaut, il contient les propriétés suivantes :

| Propriété   | Type        | Description                                                                                                      |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| objectName  | text        | Nom de l'objet générant l'événement - Non inclus si l'événement est déclenché par le formulaire                  |
| code        | entier long | Valeur numérique de l'événement formulaire. Egalement retourné par la commande `Form event code` |
| Description | text        | Nom de l'événement de formulaire (par exemple "On After Edit")                                |

Des propriétés supplémentaires sont retournées lorsque l'événement se produit sur des objets spécifiques. En particulier :

- Les [list boxes](FormObjects/listbox_overview.md#supported-form-events) et les [colonnes de list box](FormObjects/listbox_overview.md#supported-form-events-1) retournent des [propriétés](FormObjects/listbox_overview.md#additional-properties) telles que `columnName` ou `isRowSelected`.
- Les [zones 4D View Pro](FormObjects/viewProArea_overview.md) retournent par exemple des propriétés `sheetName` ou `action` dans l'objet événement [On After Edit](onAfterEdit.md).

## Événements et méthodes

Lorsqu'un événement formulaire se produit, 4D effectue les actions suivantes :

- Tout d'abord, il parcourt les objets du formulaire et appelle la méthode objet pour tout objet (associé à l'événement) dont la propriété d'événement d'objet correspondante a été sélectionnée.
- Deuxièmement, il appelle la méthode formulaire si la propriété d'événement formulaire correspondante a été sélectionnée.

Ne supposez pas que les méthodes objet, le cas échéant, seront appelées dans un ordre particulier. La règle d'or est que les méthodes objet sont toujours appelées avant la méthode formulaire. Si un objet est un sous-formulaire, les méthodes objet du formulaire liste du sous-formulaire sont appelées, suivie de la méthode formulaire du formulaire liste. 4D continue alors d'appeler les méthodes objet du formulaire parent. En d'autres termes, lorsqu'un objet est un sous-formulaire, 4D utilise la même règle pour les méthodes objet et formulaire au sein de l'objet sous-formulaire.

À l'exception des événements [On Load](onLoad.md) et [On Unload](onUnload.md) (voir ci-dessous), si la propriété d'événement formulaire n'est pas sélectionnée pour un événement donné, cela n'empêche pas les appels vers les méthodes objet pour les objets d En d'autres termes, l'activation ou la désactivation d'un événement au niveau du formulaire n'a aucun effet sur les propriétés d'événement de l'objet.

Le nombre d'objets associés à un événement dépend de la nature de l'événement.

## Tableau des appels

Le tableau suivant résume la manière dont les méthodes objet et formulaire sont appelées pour chaque type d'événement :

| Evénement                 | Méthode objet                                                      | Méthode formulaire | Objets                      |
| ------------------------- | ------------------------------------------------------------------ | ------------------ | --------------------------- |
| On Load                   | Oui                                                                | Oui                | Tous les objets             |
| On Unload                 | Oui                                                                | Oui                | Tous les objets             |
| Sur validation            | Oui                                                                | Oui                | Tous les objets             |
| On Clicked                | Oui                                                                | Oui                | Objets concernés uniquement |
| On Double Clicked         | Oui                                                                | Oui                | Objets concernés uniquement |
| On Before Keystroke       | Oui                                                                | Oui                | Objets concernés uniquement |
| On After Keystroke        | Oui                                                                | Oui                | Objets concernés uniquement |
| On After Edit             | Oui                                                                | Oui                | Objets concernés uniquement |
| On Getting Focus          | Oui                                                                | Oui                | Objets concernés uniquement |
| On Losing Focus           | Oui                                                                | Oui                | Objets concernés uniquement |
| Sur activation            | Jamais                                                             | Oui                | Aucun                       |
| On Deactivate             | Jamais                                                             | Oui                | Aucun                       |
| Sur appel extérieur       | Jamais                                                             | Oui                | Aucun                       |
| Sur changement page       | Jamais                                                             | Oui                | Aucun                       |
| On Begin Drag Over        | Oui                                                                | Oui                | Objets concernés uniquement |
| On Drop                   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Drag Over              | Oui                                                                | Jamais             | Objets concernés uniquement |
| On Mouse Enter            | Oui                                                                | Oui                | Tous les objets             |
| On Mouse Move             | Oui                                                                | Oui                | Tous les objets             |
| On Mouse Leave            | Oui                                                                | Oui                | Tous les objets             |
| On Mouse Up               | Oui                                                                | Jamais             | Objets concernés uniquement |
| Sur menu sélectionné      | Jamais                                                             | Oui                | Aucun                       |
| On Bound variable change  | Jamais                                                             | Oui                | Aucun                       |
| On Data Change            | Oui                                                                | Oui                | Objets concernés uniquement |
| Sur appel zone du plug in | Oui                                                                | Oui                | Objets concernés uniquement |
| Sur entête                | Oui                                                                | Oui                | Tous les objets             |
| On Printing Detail        | Oui                                                                | Oui                | Tous les objets             |
| On Printing Break         | Oui                                                                | Oui                | Tous les objets             |
| On Printing Footer        | Oui                                                                | Oui                | Tous les objets             |
| On Close Box              | Jamais                                                             | Oui                | Aucun                       |
| On Display Detail         | Oui                                                                | Oui                | Tous les objets             |
| On Open Detail            | Oui (List box)                                  | Oui                | Aucun, excepté les List box |
| On Close Detail           | Oui (List box)                                  | Oui                | Aucun, excepté les List box |
| Sur redimensionnement     | Jamais                                                             | Oui                | Aucun                       |
| On Selection Change       | Oui                                                                | Oui                | Objets concernés uniquement |
| Sur chargement ligne      | Jamais                                                             | Oui                | Aucun                       |
| Sur minuteur              | Jamais                                                             | Oui                | Aucun                       |
| On Scroll                 | Oui                                                                | Jamais             | Objets concernés uniquement |
| On Before Data Entry      | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Column Moved           | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Row Moved              | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Column Resize          | Oui (List box et Zone 4D View Pro)              | Jamais             | Objets concernés uniquement |
| On Header Click           | Oui (List box et Zone 4D View Pro)              | Jamais             | Objets concernés uniquement |
| On Footer Click           | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On After Sort             | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Long Click             | Oui (Bouton)                                    | Oui                | Objets concernés uniquement |
| On Alternative Click      | Oui (Bouton et List box)                        | Jamais             | Objets concernés uniquement |
| On Expand                 | Oui (Liste hiérar. et list box) | Jamais             | Objets concernés uniquement |
| On Collapse               | Oui (Liste hiérar. et list box) | Jamais             | Objets concernés uniquement |
| On Delete Action          | Oui (Liste hiérar. et list box) | Jamais             | Objets concernés uniquement |
| On URL Resource Loading   | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On Begin URL Loading      | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On URL Loading Error      | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On URL Filtering          | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On End URL Loading        | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On Open External Link     | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On Window Opening Denied  | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On VP Range Changed       | Oui (4D View Pro Area)                          | Jamais             | Objets concernés uniquement |
| On VP Ready               | Oui (4D View Pro Area)                          | Jamais             | Objets concernés uniquement |
| On Row Resize             | Oui (4D View Pro Area)                          | Jamais             | Objets concernés uniquement |

Gardez toujours à l'esprit que, pour tout événement, la méthode d'un formulaire ou d'un objet est appelée si la propriété d'événement correspondante est sélectionnée pour le formulaire ou les objets. L'avantage de la désactivation des événements dans l'environnement de développement (à l'aide de la liste des propriétés de l'éditeur de formulaires) est la réduction du nombre d'appels vers des méthodes et par conséquent l'optimisation de la vitesse d'exécution de vos formulaires.

> ATTENTION : Les événements [On Load](onLoad.md) et [On Unload](onUnload.md) sont générés pour les objets s'ils sont activés à la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les événements sont activés pour les objets uniquement, ils ne se produiront pas; ces deux événements doivent également être activés au niveau du formulaire.
