---
id: tabControl
title: Onglets
---

Un onglet crée un objet qui permet à l’utilisateur de choisir entre plusieurs écrans virtuels affichés dans les limites de l’onglet. L’utilisateur accède à chaque écran en cliquant sur l’onglet correspondant.

Le formulaire multi-pages suivant utilise un onglet :

![](../assets/en/FormObjects/tabControl1.png)

Pour passer d’un écran à l’autre, l’utilisateur clique simplement sur l’onglet correspondant.

Un onglet peut être utilisé, entre autres, pour gérer la navigation entre les pages d’un formulaire multi-pages. Dans ce cas, la commande [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) ou l’action standard `gotoPage` devra être appelée lorsque l’utilisateur cliquera sur l’onglet.

Un onglet peut aussi être utilisé pour contrôler les données qui sont affichées dans un sous-formulaire. On peut, par exemple, implémenter un rolodex à l’aide d’un onglet. Chaque onglet afficherait alors une des lettres de l’alphabet et l’action de l’onglet serait de charger les informations correspondantes à la lettre sur lequel l’utilisateur a cliqué.

Chaque onglet peut afficher des intitulés ou des intitulés et des petites icônes. Si vous placez des icônes, elles apparaissent à gauche de chaque intitulé. Voici un exemple d’onglet qui utilise des icônes :

![](../assets/en/FormObjects/tabControl2.png)

Lorsque vous créez un onglet, 4D gère l’espacement et le placement des onglets. Vous n’avez à fournir à 4D que les intitulés sous la forme d’un tableau ou les icônes et intitulés sous la forme d’une énumération hiérarchique.

Si l’onglet est assez large, il affiche les intitulés et les icônes. S’il ne peut pas afficher toutes les icônes à la fois, il place des flèches de défilement à droite du dernier onglet visible. S’il ne peut pas afficher toutes les icônes à la fois, il place des flèches de défilement à droite du dernier onglet visible. Les flèches de défilement permettent à l’utilisateur de faire défiler des onglets vers la droite ou vers la gauche.

Sous macOS, les onglets peuvent être orientés, en plus de la position standard (en haut), à droite, à gauche ou en bas.


### Exemple JSON :

```4d
    "myTab": {
        "type": "tab",
        "left": 60, 
        "top": 160,  
        "width": 100,   
        "height": 20,   
        "labelsPlacement": "bottom" //définit l'orientation
    }
```



## Ajouter les intitulés dans un onglet

Pour fournir les étiquettes d'un onglet, vous pouvez utiliser :

- un objet
- une liste déroulante
- un tableau

### Utilisation d'un objet

Vous pouvez affecter un [objet](Concepts/dt_object.md) encapsulant une [collection](../Concepts/dt_collection.md) comme [source de données](properties_Object.md#variable-or-expression) de l'onglet. Cet objet doit avoir les propriétés suivantes :

| Propriété      | Type       | Description                                                                                                                                                          |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collection | Obligatoire - Collection de valeurs scalaires. Seules les valeurs de type chaîne sont prises en charge. Si elle est invalide, vide ou non définie, l'onglet est vide |
| `index`        | number     | Indice de la page de l'onglet en cours (valeur comprise entre 0 et `collection.length-1`)                                                                            |
| `currentValue` | Text       | Valeur courante sélectionnée                                                                                                                                         |

Le code d'initialisation doit être exécuté avant que le formulaire ne soit présenté à l'utilisateur.

Dans l'exemple suivant, `Form.tabControl` a été défini comme [expression](properties_Object.md#variable-or-expression) de l'onglet. Vous pouvez associer l'[action standard `gotoPage`](#goto-page-action) à l'objet form :

```4d
Form.tabControl:=New object
Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")
Form.tabControl.index:=2 //démarrage à la page 3
```


### Utiliser une énumération

Vous pouvez associer à l’onglet [une liste de valeurs](properties_DataSource.md#choice-list-static-list), accessible via une collection (liste statique) ou un pointeur JSON vers une liste json ("$ref"). Les icônes associées à des éléments de liste dans l'éditeur de listes seront affichées dans l'onglet.

### Utiliser un tableau texte

Vous pouvez créer un tableau Texte qui contient les noms de chaque page du formulaire. Le code doit être exécuté avant que le formulaire soit présenté à l’utilisateur. Par exemple, vous pouvez placer ce code dans l’événement formulaire `Sur chargement`.

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```
> Vous pouvez également stocker les noms des pages dans une liste hiérarchique et utiliser la commande [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html) pour charger les valeurs dans le tableau.


## Fonctionnalités de Goto page

### Commande FORM GOTO PAGE

Vous pouvez utiliser la commande [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) dans la méthode de l’onglet pour naviguer parmi les pages du formulaire :

```4d
FORM GOTO PAGE(arrPages)
```

Cette commande est exécutée dans l’événement formulaire [`Sur clic`](Events/onClicked.md). Il est préférable d’effacer le tableau dans l’événement formulaire [`Sur libération`](Events/onUnload.md).

Vous pouvez, par exemple, écrire le code suivant :

```4d
 Case of
    :(Form event=On Load)
       LIST TO ARRAY("Tab Labels";arrPages)
    :(Form event=On Clicked)
       FORM GOTO PAGE(arrPages)
    :(Form event=On Unload)
       CLEAR VARIABLE(arrPages)
 End case
```

### Action Goto Page

Lorsque vous associez l’[action standard](properties_Action.md#standard-action) `gotoPage` à un objet de type Onglet, 4D affiche automatiquement la page du formulaire correspondant au numéro de l’onglet sélectionné.

Par exemple, si l’utilisateur clique sur le 3e onglet, 4D affichera la page 3 du formulaire courant (si elle existe).



## Propriétés prises en charge

Par exemple, si l’utilisateur clique sur le 3e onglet, 4D affichera la page 3 du formulaire courant (si elle existe). 
