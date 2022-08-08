---
id: navigation
title: Menu déroulant de navigation
---

Le menu de navigation vous aide à organiser votre code et à naviguer plus facilement dans vos classes et méthodes :

![dropdown-list](assets/en/code-editor/dropdown-list.png)

Certaines balises sont ajoutées automatiquement ; vous pouvez compléter la liste déroulante à l'aide de [marqueurs](#manual-tagging).

## Navigation dans le code

Cliquez sur un élément de la liste déroulante pour accéder à sa première ligne dans le code. Vous pouvez également naviguer avec les touches fléchées et appuyer sur **Entrée**.

## Balisage automatique

Les constructeurs, les déclarations de méthodes, les fonctions et les attributs calculés sont automatiquement balisés et ajoutés à la liste déroulante.

Lorsqu'il n'y a pas de balise dans la classe/méthode, l'outil affiche "No tag".

Les éléments suivants sont ajoutés automatiquement :

| Icône                                                                    | Élément                                       |
| ------------------------------------------------------------------------ | --------------------------------------------- |
| ![no-tag-icon](assets/en/code-editor/no-tag.png)                         | Pas de balise                                 |
| ![constructor-icon](assets/en/code-editor/constructor.png)               | Class constructor ou déclaration de méthode   |
| ![computed-attribute-icon](assets/en/code-editor/computed-attribute.png) | Attribut calculé (get, set, orderBy et query) |
| ![function-icon](assets/en/code-editor/function.png)                     | Nom de la fonction de classe                  |


## Balisage manuel

En ajoutant des marqueurs dans votre code, vous pouvez ajouter les balises suivantes à la liste déroulante :

| Icône                                                | Élément        |
| ---------------------------------------------------- | -------------- |
| ![mark-tag-icon](assets/en/code-editor/mark-tag.png) | MARK : balise  |
| ![todo-tag-icon](assets/en/code-editor/todo-tag.png) | TODO : balise  |
| ![fixme-icon](assets/en/code-editor/fixme-tag.png)   | FIXME : balise |

Vous les déclarez en ajoutant des commentaires tels que :

```4d 
// FIXME : Corrige les éléments suivants
```

Les déclarations ne sont pas sensibles à la casse ; écrire `fixme` : a le même effet.

L'ajout d'un trait d'union après la balise `MARK:` trace une ligne de séparation dans l'éditeur de code et dans le menu déroulant. Ainsi, cette saisie :

![mark-hyphen-image](assets/en/code-editor/mark-hyphen-editor.png)

Se traduit par ceci :

![mark-hyphen-image](assets/en/code-editor/dropdown-organize.png)

Tous les marqueurs situés à l'intérieur des fonctions sont indentés dans la liste déroulante, à l'exception des balises `MARK:` situées à la fin des fonctions et non suivies d'instructions. Celles-ci apparaîtront au premier niveau.

## Ordre d'affichage

Les balises sont affichées dans leur ordre d'apparition à l'intérieur de la méthode/classe.

Pour afficher les balises d'une méthode ou d'une classe par ordre alphabétique, effectuez l'une des opérations suivantes :
* Faites un **clic droit** sur l'outil déroulant
* maintenez la touche **Cmd** sous macOS ou **Alt** sous Windows, et cliquez sur l'outil de liste déroulante

> Les balises à l'intérieur des fonctions se déplacent avec leurs éléments parents.




