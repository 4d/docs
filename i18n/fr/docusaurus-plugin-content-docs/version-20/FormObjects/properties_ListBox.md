---
id: propertiesListBox
title: List Box
---

---
## Colonnes

Collection de colonnes de la list box.

#### Grammaire JSON

| Nom      | Type de données             | Valeurs possibles                                |
| -------- | --------------------------- | ------------------------------------------------ |
| colonnes | collection d'objets colonne | Contient les propriétés des colonnes de list box |

Pour une liste des propriétés prises en charge par les objets colonnes, veuillez vous référer à la section [Propriétés spécifiques aux colonnes.](listbox_overview.md#column-specific-properties).

#### Objets pris en charge

[List Box](listbox_overview.md)

---
## Nom formulaire détaillé
`List box sélection`

Indique le formulaire à utiliser pour modifier ou afficher les enregistrements individuels de la list box.

Le formulaire spécifié est affiché :

*   lors de l'utilisation des actions standard `Add Subrecord` et `Edit Subrecord` appliquées à la list box (voir [Utilisation des actions standard)](https://doc.4d.com/4Dv20/4D/20/Using-standard-actions.300-6263819.en.html),
*   lorsqu'on double-clique sur une ligne et que la propriété [Double-clic sur ligne](#double-clic-sur-ligne) est définie sur "Editer l'enregistrement" ou "Afficher l'enregistrement".

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                           |
| ---------- | --------------- | --------------------------------------------------------------------------- |
| detailForm | string          | <li>Nom (chaîne) du formulaire table ou projet</li><li>Chemin POSIX (chaîne) vers un fichier .json décrivant le formulaire</li><li>Objet décrivant le formulaire</li> |

#### Objets pris en charge

[List Box](listbox_overview.md)






---
## Double-clic sur ligne
`List box sélection`

Définit l'action à réaliser lorsqu'un utilisateur double-clique sur une ligne dans la list box. Les options disponibles sont :

*   **Ne rien faire** (par défaut) : Un double-clic sur une ligne ne déclenche aucune action automatique.
*   **Modifier enregistrement** : Un double-clic sur une ligne permet d'afficher l'enregistrement correspondant dans le formulaire détaillé défini [ pour la list box](#detail-form-name). L'enregistrement est ouvert en lecture-écriture afin qu'il puisse être modifié.
*   **Afficher l'enregistrement**: Identique à l'action précédente, sauf que l'enregistrement est ouvert en mode lecture seule et ne peut donc pas être modifié.
> Le double-clic sur une ligne vide est ignoré dans les listbox.

Quelle que soit l'action sélectionnée/choisie, l'événement formulaire " `On Double clicked"` est généré.

Pour les deux dernières actions, l'événement formulaire " `On Open Detail` est également généré. L'événement `On Close Detail` est alors généré lorsqu'un enregistrement affiché dans le formulaire détaillé associé à la list box est sur le point d'être fermé (que l'enregistrement ait été modifié ou non).

#### Grammaire JSON

| Nom                    | Type de données | Valeurs possibles                   |
| ---------------------- | --------------- | ----------------------------------- |
| doubleClickInRowAction | string          | "editSubrecord", "displaySubrecord" |

#### Objets pris en charge

[List Box](listbox_overview.md)




---
## Ensemble surlignage

`List box sélection`

Cette propriété permet de spécifier l'ensemble à utiliser pour gérer les enregistrements en surbrillance dans la list box (lorsque la source de données **Tableaux** est sélectionnée, un tableau booléen portant le même nom que la list box est utilisé).

4D crée un ensemble par défaut appelé *ListBoxSetN* où *N* commence à 0 et est incrémenté en fonction du nombre de list box dans le formulaire. Si nécessaire, vous pouvez modifier la configuration par défaut. Il peut s'agir d'un ensemble local, process ou interprocess (nous recommandons d'utiliser un ensemble local, par exemple *$LBSet*afin de limiter le trafic sur le réseau). Il est ensuite maintenu automatiquement par 4D. Si l'utilisateur sélectionne une ou plusieurs lignes dans la list box, l'ensemble est immédiatement mis à jour. Si vous souhaitez sélectionner une ou plusieurs lignes par programmation, vous pouvez appliquer les commandes du thème "Ensembles" à cet ensemble.
> * L'état de surbrillance des lignes de la list box et l'état de surbrillance des enregistrements de la table sont totalement indépendants.
> * Si la propriété "Highlight Set" ne contient pas de nom, il ne sera pas possible d'effectuer des sélections dans la list box.

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles |
| ------------ | --------------- | ----------------- |
| highlightSet | string          | Nom de l'ensemble |

#### Objets pris en charge

[List Box](listbox_overview.md)



---
## Colonnes verrouillées et colonnes statiques

Les colonnes verrouillées et les colonnes statiques sont deux fonctionnalités distinctes et indépendantes dans les list box :

*   Les colonnes verrouillées restent toujours affichées à gauche de la list box ; elles ne défilent pas horizontalement.
*   Les colonnes statiques ne peuvent pas être déplacées par glisser-déposer dans la list box.
> Vous pouvez définir des colonnes statiques et verrouillées par programmation, voir la section "List Box" dans le manuel *4D Language Reference* .

Ces propriétés interagissent comme suit :

*   Si vous définissez des colonnes qui sont uniquement statiques, elles ne peuvent pas être déplacées.

*   Si vous définissez des colonnes verrouillées mais non statiques, vous pouvez toujours modifier leur position librement à l'intérieur de la zone verrouillée. Toutefois, une colonne verrouillée ne peut pas être déplacée en dehors de cette zone verrouillée.

![](../assets/en/FormObjects/property_lockedStaticColumns1.png)

*   Si vous définissez toutes les colonnes de la zone verrouillée comme statiques, vous ne pouvez pas déplacer ces colonnes à l'intérieur de la zone verrouillée.

![](../assets/en/FormObjects/property_lockedStaticColumns2.png)

*   Vous pouvez combiner des colonnes verrouillées et statiques en fonction de vos besoins. Par exemple, si vous définissez trois colonnes verrouillées et une colonne statique, l'utilisateur peut permuter les deux colonnes les plus à droite dans la zone verrouillée (puisque seule la première colonne est statique).

### Nombre de colonnes verrouillées

Nombre de colonnes qui doivent rester affichées en permanence dans la partie gauche de la list box, même lorsque l'utilisateur fait défiler les colonnes horizontalement.

#### Grammaire JSON

| Nom               | Type de données | Valeurs possibles |
| ----------------- | --------------- | ----------------- |
| lockedColumnCount | integer         | minimum : 0       |

#### Objets pris en charge

[List Box](listbox_overview.md)


### Nombre de colonnes statiques

Nombre de colonnes qui ne peuvent pas être déplacées pendant l'exécution.

#### Grammaire JSON

| Nom               | Type de données | Valeurs possibles |
| ----------------- | --------------- | ----------------- |
| staticColumnCount | integer         | minimum : 0       |

#### Objets pris en charge

[List Box](listbox_overview.md)






---
## Nombre de colonnes

Définit le nombre de colonnes de la list box.
> Vous pouvez ajouter ou supprimer des colonnes de manière dynamique par programmation, en utilisant des commandes telles que [`LISTBOX INSERT COLUMN`](https://doc.4d.com/4dv20/help/command/en/page829.html) ou [`LISTBOX DELETE COLUMN`](https://doc.4d.com/4dv20/help/command/en/page830.html).

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles |
| ----------- | --------------- | ----------------- |
| columnCount | integer         | minimum: 1        |

#### Objets pris en charge

[List Box](listbox_overview.md)




---
## Tableau de contrôle des lignes

`List box tableau`

Un tableau 4D contrôlant l'affichage des lignes de la list box.

Ce tableau permet de définir les propriétés d'interface "masquée", "désactivée" et "sélectionnable" pour chaque ligne d'une list box basée sur un tableau. Il peut également être désigné à l'aide de la commande `LISTBOX SET ARRAY`.

Le tableau de contrôle des lignes doit être de type Longint et comprendre le même nombre de lignes que la list box. Chaque élément du *tableau de contrôle des lignes* définit le statut d'interface de la ligne correspondante dans la list box. Trois propriétés d'interface sont disponibles à l'aide de constantes dans le thème de constantes "List Box" :

| Constante                | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk row is disabled       | 2      | La ligne correspondante est désactivée. Le texte et les contrôles tels que les cases à cocher sont atténués ou grisés. Les zones de saisie de texte ne sont plus saisissables. Valeur par défaut : Enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| lk row is hidden         | 1      | La ligne correspondante est masquée. Le masquage des lignes n'affecte que l'affichage de la list box. Les lignes masquées sont toujours présentes dans les tableaux et peuvent être gérées par programmation. Les commandes du langage, plus particulièrement `LISTBOX Get number of rows` ou `LISTBOX GET CELL POSITION`, ne tiennent pas compte de l'état affiché/masqué des lignes. Par exemple, dans une list box de 10 lignes dont les 9 premières sont masquées, `LISTBOX Get number of rows` renvoie 10. Du point de vue de l'utilisateur, la présence de lignes masquées dans une zone de liste n'est pas décelable. Seules les lignes visibles peuvent être sélectionnées (par exemple à l'aide de la commande Tout sélectionner). Valeur par défaut : Visible |
| lk row is not selectable | 4      | La ligne correspondante n'est pas sélectionnable (le surlignage n'est pas possible). Les zones de saisie de texte ne sont plus saisissables à moins que l'option [Édition en un seul clic](properties_Entry.md#single-click-edit) soit activée. Les contrôles tels que les cases à cocher et les listes sont toutefois toujours fonctionnels. Ce paramètre est ignoré si le mode de sélection de la listbox est "None". Valeur par défaut : Sélectionnable                                                                                                                                                                                                                                                                                                              |

Pour modifier l'état d'une ligne, il suffit d'affecter la ou les constante(s) appropriée(s) à l'élément de tableau correspondant. Par exemple, si vous ne voulez pas que la ligne n° 10 soit sélectionnable, vous pouvez écrire :

```4d
 aLControlArr{10}:=lk row is not selectable
```

![](../assets/en/FormObjects/listbox_styles5.png)

Vous pouvez définir plusieurs propriétés d'interface à la fois :

```4d
 aLControlArr{8}:=lk row is not selectable + lk row is disabled
```

![](../assets/en/FormObjects/listbox_styles6.png)

Notez que le paramétrage des propriétés d'un élément remplace toutes les autres valeurs de cet élément (si non réinitialisées). Par exemple :

```4d
 aLControlArr{6}:=lk row is disabled + lk row is not selectable
 //définit la ligne 6 comme désactivée ET non sélectionnable
 aLControlArr{6}:=lk row is disabled
 //définit la ligne 6 comme désactivée mais sélectionnable à nouveau
```


#### Grammaire JSON

| Nom              | Type de données | Valeurs possibles                     |
| ---------------- | --------------- | ------------------------------------- |
| rowControlSource | string          | Nom du tableau de contrôle des lignes |

#### Objets pris en charge

[List Box](listbox_overview.md)



---
## Mode de sélection

Désigne l'option permettant aux utilisateurs de sélectionner des lignes :
- **Aucun** : Les lignes ne peuvent pas être sélectionnées si ce mode est choisi. Le fait de cliquer sur la liste n'aura aucun effet, sauf si l'option de [Saisie sur clic unique](properties_Entry.md#single-click-edit) est activée. Les touches de navigation ne font que faire défiler la liste ; l'événement formulaire " `On Selection Change"` n'est pas généré.
- **Ligne unique** : Ce mode permet de sélectionner une ligne à la fois. Un clic sur une ligne la sélectionne. Un **Ctrl+clic** (Windows) ou **Command+clic** (macOS) sur une ligne fait basculer son état (sélectionnée ou non).  
  Les touches fléchées Haut et Bas permettent de sélectionner la ligne précédente/suivante dans la liste. Les autres touches de navigation font défiler la liste. L'événement formulaire `On Selection Change` est généré chaque fois que la ligne courante est modifié.
- **Multilignes** : Ce mode permet de sélectionner simultanément plusieurs lignes.


#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles            |
| ------------- | --------------- | ---------------------------- |
| selectionMode | string          | "multiple", "single", "none" |

#### Objets pris en charge

[List Box](listbox_overview.md)