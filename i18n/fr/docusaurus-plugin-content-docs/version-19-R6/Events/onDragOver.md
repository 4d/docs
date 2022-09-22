---
id: onDragOver
title: On Drag Over
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Définition                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 21   | [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) - [Liste hiérarchique](FormObjects/list_overview.md#overview) - [Zone de saisie](FormObjects/input_overview.md) -[List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | Les données peuvent être déposées sur un objet |


## Description

L'événement `On Drag Over` est envoyé à plusieurs reprises à l'objet de destination lorsque le pointeur de la souris est déplacé sur l'objet. Généralement, en réponse à cet événement :

- Vous récupérez les données et les signatures présentes dans le conteneur (via la commande `GET PASTEBOARD DATA`).
-  En fonction de la nature et du type de données dans le conteneur, vous acceptez ou refusez le glisser-déposer.

Pour **accepter** le glissement, la méthode de l'objet de destination doit retourner 0 (zéro), vous devez donc écrire `$0:=0`. Pour **rejeter** le glissement, la méthode de l'objet de destination doit retourner -1 (moins un), vous devez donc écrire `$0:=-1`. Lors d'un événement `On Drag Over`, 4D traite la méthode objet comme une fonction. Si aucun résultat n'est retourné, 4D suppose que le glissement est accepté.

Si vous acceptez le glissement, l'objet de destination est mis en surbrillance. Si vous refusez le glissement, la destination n'est pas mise en surbrillance. Accepter le glissement ne signifie pas que les données déplacées vont être insérées dans l'objet de destination. Cela signifie seulement que si le bouton de la souris était relâché à ce stade, l'objet de destination accepterait les données glissées et l'événement [`On Drop`](onDrop.md) serait déclenché.

Si vous ne traitez pas l'événement `On Drag Over` pour un objet déposable, cet objet sera mis en surbrillance pour toutes les opérations de glissement, quels que soient la nature et le type des données déplacées.

L'événement `On Drag Over` est le moyen par lequel vous contrôlez la première phase d'une opération de glisser-déposer. Vous pouvez non seulement tester si les données déplacées sont d'un type compatible avec l'objet de destination, puis accepter ou rejeter le glissement; vous pouvez simultanément avertir l'utilisateur de ce fait, car 4D met en évidence (ou non) l'objet de destination, en fonction de votre décision.

Le code gérant un événement `On Drag Over` doit être court et s'exécuter rapidement, car cet événement est envoyé à plusieurs reprises à l'objet de destination courant, en raison des mouvements de la souris.


#### Voir également
[`On Begin Drag Over`](onBeginDragOver.md)