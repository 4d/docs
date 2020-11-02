---
id: formEditor
title: Éditeur de formulaire
---

## Création de list box

Vous pouvez créer rapidement de nouvelles list box de type sélection d'entités avec le **générateur de list box**. La nouvelle list box peut être utilisée immédiatement ou elle peut être modifiée via l'éditeur de formulaires.

Le générateur de list box vous permet de créer et de remplir des list box de type sélection d'entités en quelques opérations simples.



### Utilisation du générateur de list box


1.  Dans la barre d'outils de l'éditeur de formulaire, cliquez sur l'icône du générateur de zone de liste :

    ![](assets/en/FormEditor/listboxBuilderIcon.png)

    Le générateur de list box s'affiche :

    ![](assets/en/FormEditor/listboxBuilder.png)

2.  Sélectionnez une table dans la liste déroulante **Table** :

    ![](assets/en/FormEditor/listboxBuilderTable.png)

3.  Sélectionnez les champs de la list box dans la zone **Champs** :

    ![](assets/en/FormEditor/listboxBuilderFields.png)

    Par défaut, tous les champs sont sélectionnés. Vous pouvez sélectionner ou désélectionner les champs individuellement ou utiliser **Ctrl+clic** (Windows) ou **Cmd+clic** (macOS) pour les sélectionner ou les désélectionner tous à la fois.

    Vous pouvez modifier l'ordre des champs via un glisser-déposer.

4.  L'expression qui permet de remplir les lignes de la list box à partir de la sélection d'entité est préremplie :

    ![](assets/en/FormEditor/listboxBuilderExpression.png)

    Cette expression peut être modifiée si nécessaire.

5.  En cliquant sur le bouton **Copier**, l'expression sera copiée pour charger tous les enregistrements en mémoire :

    ![](assets/en/FormEditor/listboxBuilderCode.png)

6.  Cliquez sur le bouton **Créer un widget** pour créer la list box.

    ![](assets/en/FormEditor/listboxBuilderBuild.png)

La list box finale :

![](assets/en/FormEditor/listboxBuilderListbox.png)


## Badges

L’éditeur de formulaires 4D permet d’utiliser des badges afin de faciliter la visualisation des propriétés des objets. Ils se trouvent dans la barre d'outils du formulaire :

![](assets/en/FormEditor/shields.png)


Le principe de cette fonction est le suivant : chaque badge est associé à une propriété (par exemple **Vues**, signifiant que l'objet “est dans la vue courante”). Lorsque vous activez un badge, 4D affiche une petite icône (un badge) en haut à gauche de chaque objet du formulaire auquel s’applique la propriété.

![](assets/en/FormEditor/shield.png)

### Utilisation des badges

Pour activer un badge, cliquez sur l'icône *badge* jusqu’à ce que le badge souhaité soit sélectionné. Vous pouvez également cliquer sur la partie droite du bouton et sélectionner directement le type de badge à afficher dans le menu associé :


Pour ne pas afficher de badges, choisissez la ligne **Pas de badges** dans le menu de sélection.
> Vous pouvez définir les badges à afficher par défaut dans la Préférences de l’application.

### Description du badge

Voici la description de chaque type de badge :

| Icône                                        | Nom               | Est affiché...                                                                                                                                |
| -------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/objectMethod.png)   | Méthode objet     | Pour les objets auxquels une méthode objet est associée                                                                                       |
| ![](assets/en/FormEditor/standardAction.png) | Action standard   | Pour les objets auxquels une action standard est associée                                                                                     |
| ![](assets/en/FormEditor/resizing.png)       | Redimensionnement | Pour les objets disposant d’au moins une propriété de redimensionnement, indique la combinaison de propriétés courante                        |
| ![](assets/en/FormEditor/entryOrder.png)     | Ordre de saisie   | Pour les objets saisissables, indique le numéro d’ordre de saisie                                                                             |
| ![](assets/en/FormEditor/viewNumber.png)     | Vue courante      | Pour tous les objets de la vue courante                                                                                                       |
| ![](assets/en/FormEditor/filter.png)         | Filtre            | Pour les objets saisissables auxquels un filtre de saisie est associé                                                                         |
| ![](assets/en/FormEditor/helpTip.png)        | Infobulle         | Pour les objets auxquels une infobulle (message d’aide) est associée                                                                          |
| ![](assets/en/FormEditor/localized.png)      | Localisé          | Pour les objets dont le libellé provient d’une référence (libellé débutant par “:”). La référence peut être de type ressource (STR#) ou XLIFF |
| ![](assets/en/FormEditor/noShields.png)      | Pas de badge      | Aucun badge n’apparaît                                                                                                                        |

## Vues

L'éditeur de formulaires 4D vous permet de créer des formulaires complexes en distribuant des objets de formulaire entre des vues séparées qui peuvent ensuite être masquées ou affichées selon les besoins.

Par exemple, vous pouvez répartir les objets par type (champs, variables, objets statiques, etc.). Tout type d'objet formulaire, y compris les sous-formulaires et les zones de plug-in, peut être inclus dans les vues.

Il n'y a pas de limite au nombre de vues par formulaire. Vous pouvez créer autant de vues différentes que nécessaire. De plus, chaque vue peut être affichée, masquée et/ou verrouillée.




Les vues sont gérées via à la palette de vues.

![](assets/en/FormEditor/viewEditor.png)


### Accéder à la palette de vues

Il existe trois façons d'accéder à la palette de vues :

*   **Barre d'outils** : cliquez sur l'icône de Vues dans la barre d'outils de l'éditeur de formulaires. (Cette icône apparaît en gris lorsqu'au moins un objet appartient à une vue autre que la vue par défaut.)

    |              Vue par défaut uniquement               |           Avec des vues supplémentaires            |
    |:----------------------------------------------------:|:--------------------------------------------------:|
    | ![](assets/en/FormEditor/icon.png "No views in use") | ![](assets/en/FormEditor/icon2.png "Views in use") |

*   **Menu contextuel** (formulaire ou objet) : faites un clic droit n'importe où dans l'éditeur de formulaires ou sur un objet, puis sélectionnez **Vue courante**

    ![](assets/en/FormEditor/contextMenu.png)

La vue courante est indiquée par une coche (par exemple, "Adresse professionnelle" dans l'image ci-dessus)


*   **Menu Formulaire** : cliquez sur le menu **Formulaire** et sélectionnez **Afficher la liste**

![](assets/en/FormEditor/formMenu.png)


### Avant de commencer

Voici quelques éléments importants à connaitre avant de commencer à travailler avec les vues :

*   **Contexte d’utilisation** : les vues sont un outil purement graphique, utilisable uniquement dans l’éditeur de formulaires ; il n’est pas possible d’accéder aux vues par programmation ou en mode Application.

*   **Vues et pages** : Les objets d’une même vue peuvent appartenir à des pages différentes d’un formulaire ; seuls les objets de la page courante (et de la page 0 si elle est visible) peuvent être affichés, quelle que soit la configuration des vues.

*   **Vues et plans** : Les vues sont indépendantes des plans des objets, il n’y a pas de hiérarchie d’affichage entre les différentes vues.

*   **Vues et groupes** : Seuls les objets appartenant à la vue courante peuvent être groupés.

*   **Vues courantes et par défaut** : la vue par défaut est la première vue d'un formulaire et ne peut pas être supprimée; la vue courante est la vue en cours de modification et le nom est affiché en gras.



### Gestion des vues

#### Créer des vues

Tout objet créé dans un formulaire est placé dans la première vue ("Vue 1") du formulaire. La première vue 1 est **toujours** la vue par défaut, indiquée par (par défaut) après le nom. Le nom de la vue peut être modifié (voir [Renommer les vues](#renaming-views)), mais il demeure la vue par défaut.


![](assets/en/FormEditor/createView.png)

Il existe deux façons d'ajouter des vues supplémentaires :

*   Cliquez sur le bouton **Ajouter une nouvelle vue** en bas de la palette Vue :

![](assets/en/FormEditor/addView.png)

*   Faites un clic droit sur une vue existante et sélectionnez **Insérer une vue** :

![](assets/en/FormEditor/addView2.png)

Il n'y a pas de limitation du nombre de vues.

#### Renommer des vues

Par défaut, les vues sont nommées "Vue" + le numéro de vue, mais vous pouvez modifier ces noms pour améliorer la lisibilité et mieux répondre à vos besoins.

Pour renommer une vue, vous pouvez soit :

*   Double-cliquer directement sur le nom de la vue (dans ce cas, la vue est sélectionnée). Le nom devient alors éditable :

    ![](assets/en/FormEditor/rename.png)

*   Faire un clic droit sur le nom de la vue. Le nom devient alors éditable :

    ![](assets/en/FormEditor/rename2.png)

#### Réordonner les vues

Vous pouvez modifier l'ordre d'affichage des vues en les faisant glisser/déposer dans la palette des vues.

A noter que la vue par défaut ne change pas :

![](assets/en/FormEditor/reorderView.png)


#### Supprimer des vues

Pour renommer une vue, vous pouvez soit :

*   Cliquer sur le bouton **Supprimer la vue sélectionnée** en bas de la palette des vues :

    ![](assets/en/FormEditor/deleteView.png)


*   Faire un clic droit sur le nom de la vue et sélectionner **Supprimer la vue** :

    ![](assets/en/FormEditor/deleteView2.png)
> Si une vue est supprimée, tous les objets qu'elle contient sont automatiquement déplacés vers la vue par défaut.




### Utilisation des vues

Une fois que les vues sont créées, vous pouvez utiliser la palette des vues pour :

*   Ajouter un objet aux vues,
*   Déplacer des objets d'une vue à une autre,
*   Sélectionner tous les objets d'une même vue en un seul clic,
*   Afficher ou masquer des objets pour chaque vue,
*   Verrouiller les objets d'une vue.

#### Ajouter des objets aux vues

Un objet ne peut appartenir qu’à une seule vue.

Pour créer un objet dans une autre vue, sélectionnez simplement la vue dans la palette des vues (avant de créer l'objet) en cliquant sur son nom (une icône Modifier est affichée pour la [Vue courante](#before-you-begin) et le nom apparaît en gras) :

![](assets/en/FormEditor/addObject.png)

#### Déplacer des objets entre les vues

Il est également possible de déplacer un ou plusieurs objets d'une vue à une autre. Dans le formulaire, sélectionnez le ou les objets dont vous souhaitez modifier la vue. La liste des vues indique, à l'aide d'un symbole, la vue à laquelle appartient la sélection :

![](assets/en/FormEditor/symbol.png)
> La sélection peut contenir plusieurs objets appartenant à différentes vues.

Sélectionnez simplement la vue de destination, faites un clic droit puis sélectionnez **Déplacer vers** :

![](assets/en/FormEditor/moveObject.png)

OU

Sélectionnez la vue de destination de la sélection et cliquez sur le bouton **Déplacer vers** en bas de la palette des vues :

![](assets/en/FormEditor/moveObject3.png)

La sélection est ensuite placée dans la nouvelle vue :

![](assets/en/FormEditor/objNewView.png)

Vous pouvez également déplacer un objet vers une autre vue via le menu contextuel de l'objet. Faites un clic droit sur l'objet, sélectionnez **Déplacer vers la vue** puis sélectionnez une vue dans la liste de vues disponibles :

![](assets/en/FormEditor/moveObject2.png)
> La [vue courante](#before-you-begin) est affichée en texte gras.



#### Sélectionner tous les objets d’une vue

Vous pouvez sélectionner dans la page courante du formulaire tous les objets appartenant à une même vue. Cette fonction est utile pour appliquer des modifications globales à un ensemble d’objets.

Pour cela, faites un clic droit sur la vue dans laquelle vous souhaitez sélectionner tous les objets et cliquez sur le bouton **Tout sélect. dans vue**:

![](assets/en/FormEditor/selectAll.png)

Vous pouvez également utiliser le bouton situé en dessous de la palette des vues :


![](assets/en/FormEditor/selectAll2.png)


#### Afficher ou masquer les objets d’une vue

Vous pouvez à tout moment afficher ou masquer les objets d’une vue dans la page courante du formulaire. Cette fonction permet par exemple de se concentrer sur certains objets lors de la modification du formulaire.

Par défaut, toutes les vues sont affichées, comme l’indique l’icône en regard de chaque vue dans la palette des vues:

![](assets/en/FormEditor/showHide.png)

Pour masquer une vue, cliquez sur cette icône. Elle est alors grisée et les objets de la vue correspondante ne sont plus affichés dans le formulaire :

![](assets/en/FormEditor/hidden.png)
> Il n’est pas possible de masquer la [vue courante](#before-you-begin).

Pour afficher une vue masquée, il suffit de la sélectionner ou de cliquer de nouveau sur l’icône de visualisation.



#### Verrouiller les objets d’une vue

Vous pouvez verrouiller les objets d’une vue. Cela empêche leur sélection, leur modification ou leur suppression dans le formulaire. Une fois verrouillé, un objet ne peut pas être sélectionné par un clic, un rectangle de sélection ou la commande **Sélectionner objets de même type** du menu contextuel. Cette fonction est utile pour éviter les erreurs de manipulation.

Par défaut, toutes les vues sont déverrouillées, comme l’indique l’icône en regard de chaque vue dans la palette des vues:

![](assets/en/FormEditor/lockUnlock.png)

Pour verrouiller les objets d’une vue, cliquez sur cette icône. Le cadenas est alors refermé, ce qui indique que la vue est verrouillée :

![](assets/en/FormEditor/locked.png)
> Il n’est pas possible de verrouiller la [vue courante](#before-you-begin).

Pour déverrouiller une vue, il suffit de la sélectionner ou de cliquer à nouveau sur l’icône de verrouillage.




