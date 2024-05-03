---
id: forms
title: Page Formulaires
---

Cette page permet de paramétrer des options de fonctionnement et d'affichage de l'éditeur de formulaires de 4D.

## Déplacement

Ce groupe d'options permet de paramétrer les déplacements d’objets à l’aide du clavier ou de la souris dans l’éditeur de formulaires.

### Taille du pas de déplacement au clavier

This option allows setting the value (in points) of the step used for moving or resizing an object using the keyboard and the **Shift** key.

### Lors d'un déplacement au-delà des limites de la fenêtre

Cette option permet de définir le mode de fonctionnement de l’éditeur de formulaires lors du déplacement d’un objet à l’aide de la souris au-delà des limites de la fenêtre du formulaire.

- **Autoscroll**: When this option is checked, this action causes the scroll of the form in the window, as if you clicked on the scroll bars. Ce fonctionnement est utile pour déplacer des objets dans des formulaires de grande taille.
- **Start drag and drop**: When this option is checked, this action is interpreted as a drag and drop. La fenêtre du formulaire n’est pas modifiée et l’objet déplacé peut être déposé dans une autre fenêtre (si son contenu est compatible), par exemple un autre formulaire. This behavior is useful for recycling objects among several forms or using object libraries (see [Creating and using custom object libraries](FormEditor/objectLibrary.md#creating-and-using-custom-object-libraries)).

Vous pouvez configurer cette option en fonction de vos habitudes de travail et de vos besoins en développement.

### Activer le magnétisme par défaut

Cette option permet d’activer par défaut le magnétisme dans chaque nouvelle fenêtre de l’éditeur de formulaires. It is possible to modify this option individually in each window (refer to [Using the magnetic grid](FormEditor/formEditor.md#using-the-magnetic-grid)).

## Affichage par défaut à la création

- **Limits**, **Rulers**, ...: check items that must be displayed by default in each new window of the Form editor. It is possible to modify the display of each window individually using the **Display** hierarchical menu of the Form editor.
- **Color for marker lines**: modifies the color of the marker lines used in the Form editor to define the different areas (header, breaks, detail and footer, etc.). For more information about markers, refer to [Using output control lines](https://doc.4d.com/4Dv18R6/4D/18-R6/Using-output-control-lines.300-5217678.en.html).
- **Default display shield**: sets which shields to display by default in each new window of the Form editor. For more information about shields, refer to [Using shields](FormEditor/formEditor.md#using-shields).
