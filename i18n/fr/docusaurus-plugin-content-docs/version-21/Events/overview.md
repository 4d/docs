---
id: overview
title: Evénements formulaire
---

Les événements formulaire sont des événements qui peuvent conduire à l'exécution de la méthode de formulaire et/ou de la ou des méthodes objet de formulaire. Les événements de formulaire vous permettent de contrôler le flux de votre application et d'écrire du code qui n'est exécuté que lorsqu'un événement spécifique se produit.

Dans votre code, vous contrôlez les événements à l'aide de la commande [`FORM Event`](../commands/form-event), qui renvoie l'événement déclenché. Par exemple :

```4d
//code d'un bouton
If(FORM Event.code=On Clicked) 
// faire quelque chose quand on clique sur le bouton
End if
```

> Chaque formulaire et chaque objet actif du formulaire peut lire un ensemble prédéfini d'événements, mais seuls les événements que vous avez activés au niveau du formulaire et/ou à chaque niveau d'objet se produiront réellement.

## Objet événement

Chaque événement est renvoyé sous forme d'objet par la commande [`FORM Event`](../commands/form-event). Par défaut, il contient les propriétés suivantes :

| Propriété   | Type        | Description                                                                                                      |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| objectName  | text        | Nom de l'objet générant l'événement - Non inclus si l'événement est déclenché par le formulaire                  |
| code        | entier long | Valeur numérique de l'événement formulaire. Egalement retourné par la commande `Form event code` |
| Description | text        | Nom de l'événement de formulaire (par exemple "On After Edit")                                |

Des propriétés supplémentaires sont retournées lorsque l'événement se produit sur des objets spécifiques. En particulier :

- Les [list boxes](FormObjects/listbox-object.md#supported-form-events) et les [colonnes de list box](FormObjects/listbox-column.md#supported-form-events) retournent des [propriétés](FormObjects/listbox-object.md#supported-form-events) telles que `columnName` ou `isRowSelected`.
- Les [zones 4D View Pro](FormObjects/viewProArea_overview.md) retournent par exemple des propriétés `sheetName` ou `action` dans l'objet événement [On After Edit](onAfterEdit.md).

## Événements et méthodes

Lorsqu'un événement formulaire se produit, 4D effectue les actions suivantes :

- Tout d'abord, il parcourt les objets du formulaire et appelle la méthode objet pour tout objet (associé à l'événement) dont la propriété d'événement d'objet correspondante a été sélectionnée.
- Deuxièmement, il appelle la méthode formulaire si la propriété d'événement formulaire correspondante a été sélectionnée.

Ne supposez pas que les méthodes objet, le cas échéant, seront appelées dans un ordre particulier. La règle d'or est que les méthodes objet sont toujours appelées avant la méthode formulaire. Si un objet est un sous-formulaire, les méthodes objet du formulaire liste du sous-formulaire sont appelées, suivie de la méthode formulaire du formulaire liste. 4D continue alors d'appeler les méthodes objet du formulaire parent. En d'autres termes, lorsqu'un objet est un sous-formulaire, 4D utilise la même règle pour les méthodes objet et formulaire au sein de l'objet sous-formulaire.

À l'exception des événements [On Load](onLoad.md) et [On Unload](onUnload.md) (voir ci-dessous), si la propriété d'événement du formulaire n'est pas sélectionnée pour un événement donné, cela n'empêche pas les appels aux méthodes des objets dont la même propriété d'événement est sélectionnée. En d'autres termes, l'activation ou la désactivation d'un événement au niveau du formulaire n'a aucun effet sur les propriétés d'événement de l'objet.

Le nombre d'objets associés à un événement dépend de la nature de l'événement.

## Tableau des appels

Le tableau suivant résume la manière dont les méthodes objet et formulaire sont appelées pour chaque type d'événement :

| Evénement                | Code | Méthode objet                                                      | Méthode formulaire | Objets                      |
| ------------------------ | ---- | ------------------------------------------------------------------ | ------------------ | --------------------------- |
| On Activate              | 11   | Jamais                                                             | Oui                | Aucun                       |
| On After Edit            | 45   | Oui                                                                | Oui                | Objets concernés uniquement |
| On After Keystroke       | 28   | Oui                                                                | Oui                | Objets concernés uniquement |
| On After Sort            | 30   | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Alternative Click     | 38   | Oui (Bouton et List box)                        | Jamais             | Objets concernés uniquement |
| On Before Data Entry     | 41   | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Before Keystroke      | 17   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Begin Drag Over       | 46   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Begin URL Loading     | 47   | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On Bound variable change | 54   | Jamais                                                             | Oui                | Aucun                       |
| On Clicked               | 4    | Oui                                                                | Oui                | Objets concernés uniquement |
| On Close Box             | 22   | Jamais                                                             | Oui                | Aucun                       |
| On Close Detail          | 26   | Oui (List box)                                  | Oui                | Aucun, excepté les List box |
| On Collapse              | 44   | Oui (Liste hiérar. et list box) | Jamais             | Objets concernés uniquement |
| On Column Moved          | 32   | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Column Resize         | 33   | Oui (List box et Zone 4D View Pro)              | Jamais             | Objets concernés uniquement |
| On Data Change           | 20   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Deactivate            | 12   | Jamais                                                             | Oui                | Aucun                       |
| On Delete Action         | 58   | Oui (Liste hiérar. et list box) | Jamais             | Objets concernés uniquement |
| On Display Detail        | 8    | Oui                                                                | Oui                | Tous les objets             |
| On Double Clicked        | 13   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Drag Over             | 21   | Oui                                                                | Jamais             | Objets concernés uniquement |
| On Drop                  | 16   | Oui                                                                | Oui                | Objets concernés uniquement |
| On End URL Loading       | 49   | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On Expand                | 43   | Oui (Liste hiérar. et list box) | Jamais             | Objets concernés uniquement |
| On Footer Click          | 57   | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Getting Focus         | 15   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Header                | 5    | Oui                                                                | Oui                | Tous les objets             |
| On Header Click          | 42   | Oui (List box et Zone 4D View Pro)              | Jamais             | Objets concernés uniquement |
| On Load                  | 1    | Oui                                                                | Oui                | Tous les objets             |
| On Load Record           | 40   | Jamais                                                             | Oui                | Aucun                       |
| On Long Click            | 39   | Oui (Bouton)                                    | Oui                | Objets concernés uniquement |
| On Losing Focus          | 14   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Menu Selected         | 18   | Jamais                                                             | Oui                | Aucun                       |
| On Mouse Enter           | 35   | Oui                                                                | Oui                | Tous les objets             |
| On Mouse Leave           | 36   | Oui                                                                | Oui                | Tous les objets             |
| On Mouse Move            | 37   | Oui                                                                | Oui                | Tous les objets             |
| On Mouse Up              | 2    | Oui                                                                | Jamais             | Objets concernés uniquement |
| On Open Detail           | 25   | Oui (List box)                                  | Oui                | Aucun, excepté les List box |
| On Open External Link    | 52   | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On Outside Call          | 10   | Jamais                                                             | Oui                | Aucun                       |
| On Page Change           | 56   | Jamais                                                             | Oui                | Aucun                       |
| On Plug in Area          | 19   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Printing Break        | 6    | Oui                                                                | Oui                | Tous les objets             |
| On Printing Detail       | 23   | Oui                                                                | Oui                | Tous les objets             |
| On Printing Footer       | 7    | Oui                                                                | Oui                | Tous les objets             |
| On Resize                | 29   | Jamais                                                             | Oui                | Aucun                       |
| On Row Moved             | 34   | Oui (List box)                                  | Jamais             | Objets concernés uniquement |
| On Row Resize            | 60   | Oui (4D View Pro Area)                          | Jamais             | Objets concernés uniquement |
| On Scroll                | 59   | Oui                                                                | Jamais             | Objets concernés uniquement |
| On Selection Change      | 31   | Oui                                                                | Oui                | Objets concernés uniquement |
| On Timer                 | 27   | Jamais                                                             | Oui                | Aucun                       |
| On Unload                | 24   | Oui                                                                | Oui                | Tous les objets             |
| On URL Filtering         | 51   | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On URL Loading Error     | 50   | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On URL Resource Loading  | 48   | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |
| On Validate              | 3    | Oui                                                                | Oui                | Tous les objets             |
| On VP Range Changed      | 61   | Oui (4D View Pro Area)                          | Jamais             | Objets concernés uniquement |
| On VP Ready              | 9    | Oui (4D View Pro Area)                          | Jamais             | Objets concernés uniquement |
| On Window Opening Denied | 53   | Oui (Zone Web)                                  | Jamais             | Objets concernés uniquement |

Gardez toujours à l'esprit que, pour tout événement, la méthode d'un formulaire ou d'un objet est appelée si la propriété d'événement correspondante est sélectionnée pour le formulaire ou les objets. L'avantage de la désactivation des événements dans l'environnement de développement (à l'aide de la liste des propriétés de l'éditeur de formulaires) est la réduction du nombre d'appels vers des méthodes et par conséquent l'optimisation de la vitesse d'exécution de vos formulaires.

> ATTENTION : Les événements [On Load](onLoad.md) et [On Unload](onUnload.md) sont générés pour les objets s'ils sont activés à la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les événements sont activés pour les objets uniquement, ils ne se produiront pas; ces deux événements doivent également être activés au niveau du formulaire.


