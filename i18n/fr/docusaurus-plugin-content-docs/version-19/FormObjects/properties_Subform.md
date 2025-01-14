---
id: propertiesSubform
title: Sous-formulaire
---

---
## Autoriser la suppression

Indique si l’utilisateur peut supprimer des sous-enregistrements dans un sous-formulaire liste.

#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles               |
| --------------- | --------------- | ------------------------------- |
| deletableInList | boolean         | true, false (par défaut : true) |

#### Objets pris en charge

[Sous-formulaire](subform_overview.md)


---
## Formulaire de détail

Cette option permet de désigner un formulaire détaillé à utiliser dans un sous-formulaire. Il peut être :

- un widget, c'est-à-dire un sous-formulaire de type page doté de fonctions spécifiques. Dans ce cas, [le sous-formulaire de liste](#list-form) et les propriétés [Source](#source) doivent être vides ou non présents.   
  Vous pouvez sélectionner un nom de formulaire de composant lorsqu'il est publié dans le composant.
> Pour cela, il vous suffit de cliquer deux fois sur le champ à modifier afin de le passer en mode édition (veillez à laisser suffisamment de temps entre les deux clics pour ne pas générer de double-clic).

- le formulaire détaillé à associer au [sous-formulaire de liste](#list-form). Le formulaire détaillé peut être utilisé pour saisir ou afficher des sous-enregistrements. Il contient généralement plus d'informations que le sous-formulaire liste. Naturellement, le formulaire détaillé doit appartenir à la même table que le sous-formulaire. Vous utilisez normalement un formulaire de sortie comme formulaire liste et un formulaire d'entrée comme formulaire détaillé. Si vous n'indiquez pas le formulaire à utiliser pour la saisie pleine page, 4D utilise automatiquement le format d'entrée par défaut de la table.


#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                                                                                        |
| ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string          | Nom de formulaire table ou projet, ou chemin POSIX (chaîne) d'un fichier .json décrivant le formulaire, ou objet décrivant le formulaire |

#### Objets pris en charge

[Sous-formulaire](subform_overview.md)

---
## Double-clic sur ligne vide

Action à effectuer en cas de double-clic sur une ligne vide d'un sous-formulaire de liste. Les options suivantes sont disponibles :
- Ne rien faire : ignore le double-clic.
- Ajouter un enregistrement : crée un nouvel enregistrement dans le sous-formulaire et passe en mode édition. L'enregistrement sera créé directement dans la liste si la propriété [Saisissable dans la liste] est activée. Sinon, il sera créé en mode page, dans le [formulaire détaillé](detail-form) associé au sous-formulaire.


#### Grammaire JSON

| Nom                          | Type de données | Valeurs possibles                  |
| ---------------------------- | --------------- | ---------------------------------- |
| doubleClickInEmptyAreaAction | string          | "addSubrecord" ou "" to do nothing |

#### Objets pris en charge

[Sous-formulaire](subform_overview.md)

#### Voir également
[Double-clic sur ligne](#double-click-on-row)

---
## Double-clic sur ligne

`Sous-formulaires liste`

Définit l'action à réaliser lorsqu'un utilisateur double-clique sur une ligne dans un sous-formulaire liste. Les options disponibles sont :

*   **Ne rien faire** (par défaut) : Un double-clic sur une ligne ne déclenche aucune action automatique.
*   **Modifier enregistrement** : Un double-clic sur une ligne permet d'afficher l'enregistrement correspondant dans le [ formulaire détaillé défini pour le sous-formulaire liste](#detail-form). L'enregistrement est ouvert en lecture-écriture afin qu'il puisse être modifié.
*   **Afficher l'enregistrement**: Identique à l'action précédente, sauf que l'enregistrement est ouvert en mode lecture seule et ne peut donc pas être modifié.

Quelle que soit l'action sélectionnée/choisie, l'événement formulaire " `On Double clicked"` est généré.

Pour les deux dernières actions, l'événement formulaire " `On Open Detail` est également généré. L'événement `On Close Detail` est alors généré lorsqu'un enregistrement affiché dans le formulaire détaillé associé à la list box est sur le point d'être fermé (que l'enregistrement ait été modifié ou non).

#### Grammaire JSON

| Nom                    | Type de données | Valeurs possibles                   |
| ---------------------- | --------------- | ----------------------------------- |
| doubleClickInRowAction | string          | "editSubrecord", "displaySubrecord" |

#### Objets pris en charge

[Sous-formulaire](subform_overview.md)


#### Voir également
[Double-clic sur ligne vide](#double-click-on-empty-row)

---
## Saisissable en liste

Lorsque cette propriété est activée pour un sous-formulaire de liste, l'utilisateur peut modifier les données de l'enregistrement directement dans la liste, sans avoir à utiliser le [formulaire détaillé associé](#detail-form).

> Pour cela, il vous suffit de cliquer deux fois sur le champ à modifier afin de le passer en mode édition (veillez à laisser suffisamment de temps entre les deux clics pour ne pas générer de double-clic).


#### Grammaire JSON

| Nom             | Type de données | Valeurs possibles |
| --------------- | --------------- | ----------------- |
| enterableInList | boolean         | true, false       |


#### Objets pris en charge

[Sous-formulaire](subform_overview.md)


---
## Formulaire de liste

Cette option permet de désigner un formulaire liste à utiliser dans un sous-formulaire. Un sous-formulaire en liste vous permet de saisir, visualiser et modifier des données dans d’autres tables.

Les sous-formulaires de liste peuvent être utilisés pour la saisie de données de deux manières : l'utilisateur peut saisir des données directement dans le sous-formulaire ou les saisir dans un [formulaire de saisie](#detail-form). Dans cette configuration, le formulaire utilisé comme sous-formulaire est appelé formulaire Liste. Le formulaire de saisie est appelé le formulaire détaillé.

#### Grammaire JSON

| Nom      | Type de données | Valeurs possibles                                                                                                                        |
| -------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | string          | Nom de formulaire table ou projet, ou chemin POSIX (chaîne) d'un fichier .json décrivant le formulaire, ou objet décrivant le formulaire |

#### Objets pris en charge

[Sous-formulaire](subform_overview.md)



---
## Source

Spécifie la table à laquelle appartient le sous-formulaire Liste (le cas échéant).

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles                                     |
| ----- | --------------- | ----------------------------------------------------- |
| table | string          | Nom de la table 4D, ou "" s'il n'existe aucune table. |

#### Objets pris en charge

[Sous-formulaire](subform_overview.md)

---
## Mode de sélection

Désigne l'option permettant aux utilisateurs de sélectionner des lignes :
- **Aucun** : Les lignes ne peuvent pas être sélectionnées si ce mode est choisi. Cliquer sur la liste n'aura aucun effet à moins que l'option [Saisissable en liste](subform_overview.md#enterable-in-list) soit activée. Les touches de navigation ne font que faire défiler la liste ; l'événement formulaire " `On Selection Change"` n'est pas généré.
- **Ligne unique** : Ce mode permet de sélectionner une ligne à la fois. Un clic sur une ligne la sélectionne. Un **Ctrl+clic** (Windows) ou **Command+clic** (macOS) sur une ligne fait basculer son état (sélectionnée ou non).  
  Les touches fléchées Haut et Bas permettent de sélectionner la ligne précédente/suivante dans la liste. Les autres touches de navigation font défiler la liste. L'événement formulaire `On Selection Change` est généré chaque fois que la ligne courante est modifié.
- **Multilignes** : Ce mode permet de sélectionner simultanément plusieurs lignes.
    - Les sous-enregistrements sélectionnés sont retournés par la commande `GET HIGHLIGHTED RECORDS`.
    - Cliquer sur l'enregistrement permettra de le sélectionner, mais ne modifiera pas l'enregistrement courant.
    - Si vous pressez **Ctrl+clic** (Windows) ou **Commande+clic** (macOS) sur un enregistrement, cela fera basculer son état (entre sélectionné ou non). Les touches fléchées Haut et Bas sélectionnent l'enregistrement précédent/suivant dans la liste. Les autres touches de navigation font défiler la liste. L'événement formulaire `On Selection Change` est généré chaque fois que l'enregistrement sélectionné est modifié.


#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles            |
| ------------- | --------------- | ---------------------------- |
| selectionMode | string          | "multiple", "single", "none" |

#### Objets pris en charge

[Sous-formulaire](subform_overview.md)
