---
id: advanced-programming
title: Programmation avancée avec Javascript
---

Une zone 4D View Pro est un [objet de formulaire de zone Web](../FormObjects/webArea_overview.md) qui utilise le [moteur de rendu Web intégré](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). En tant que telle, elle se comporte comme n'importe quelle autre zone Web, et vous pouvez lui faire exécuter du code Javascript en appelant la commande 4D [`WA Evaluate Javascript`](https://doc.4d.com/4dv20/help/command/en/page1029.html).

Étant donné que 4D View Pro est alimenté par la [solution de feuille de calcul SpreadJS](https://developer.mescius.com/spreadjs), vous pouvez également appeler les méthodes Javascript de SpreadJS dans les zones 4D View Pro.

## Exemple concret : masquer le ruban

4D View Pro étant une zone Web, vous pouvez sélectionner un élément de page Web et modifier son comportement à l'aide de Javascript. L'exemple suivant permet de masquer le [ruban](./configuring.md#ribbon) spreadJS :

```4d
//Méthode objet du bouton

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```

## Appeler des méthodes JavaScript de SpreadJS

Vous pouvez exploiter la bibliothèque de méthodes Javascript de SpreadJS et les appeler directement pour gérer vos feuilles de calcul.

4D has a built-in `Utils.spread` property that gives access to the spreadsheet document (also called workbook) inside the 4D View Pro area, making it simpler to call the SpreadJS [Workbook methods](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Workbook).

#### Exemple

Le code suivant annule la dernière action dans la feuille de calcul :

```4d
WA Evaluate JavaScript(*; "ViewProArea"; "Utils.spread.undoManager().undo()")
```

## Dépôt 4D View Pro Tips

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) est un dépôt GitHub qui contient un projet rempli de fonctions utiles pour vous permettre de gérer les images flottantes, de trier les colonnes ou les lignes, de créer une culture personnali N'hésitez pas à le cloner et à l'expérimenter !
