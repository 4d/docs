---
id: propertiesForm
title: Propriétés des formulaires
---

---

## Schéma de couleurs

> La propriété de schéma de couleurs n'est appliquée que sur macOS.

Cette propriété définit la palette de couleurs du formulaire. Par défaut, lorsque la propriété n'est pas définie, la valeur d'une palette de couleurs est **héritée** (le formulaire utilise la palette définie [au niveau de l'application](../commands-legacy/set-application-color-scheme.md)). Pour le formulaire, cette option peut être remplacée par l'une des deux options suivantes :

- dark - texte clair sur fond foncé
- light - texte foncé sur fond clair

> Une palette de couleurs définie ne peut pas être remplacée par un CSS.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles |
| ----------- | --------------- | ----------------- |
| colorScheme | string          | "dark", "light"   |

---

## CSS

Cette propriété vous permet de charger le(s) fichier(s) CSS spécifiques pour le formulaire.

Un fichier CSS défini au niveau du formulaire remplacera la ou les feuilles de style par défaut. Pour plus d'informations, veuillez consulter la page [Feuilles de style](createStylesheet.md).

#### Grammaire JSON

| Nom | Type de données      | Valeurs possibles                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| css | string ou collection | Chemin(s) de fichier(s) CSS fourni(s) sous la forme<li>d'une chaîne (un fichier pour les deux plates-formes)</li><li>d'une collection de chaînes (une liste de fichiers pour les deux plates-formes)</li><li>d'une collection d'objets {"path":chaîne ; "media" : "mac" &#124; "win"}. </li> |

---

## Form Class

Nom d'une [classe utilisateurs](../Concepts/classes.md#class-definition) existante à associer au formulaire. La classe utilisateur peut appartenir au projet hôte ou à un [composant](../Extensions/develop-components.md#sharing-of-classes), auquel cas la syntaxe formelle est "[*componentNameSpace*](../settings/general.md#component-namespace-in-the-class-store).className".

L'association d'une classe au formulaire offre les avantages suivants :

- Lorsque vous travaillez dans l'[Editeur de formulaires](../FormEditor/formEditor.md), la classe associée est utilisée pour une vérification syntaxique précise des expressions telles que `Form.myProperty` dans toutes les zones de la [Liste des propriétés](../FormEditor/formEditor.md#property-list) qui supportent les [expressions](../Concepts/quick-tour.md#expressions) (par exemple **Variable ou Expression**, **Expression de la couleur de la police**...). Les erreurs sont affichées en rouge et les warnings en jaune dans la colonne de gauche de la liste des propriétés et vous pouvez les survoler pour obtenir des explications :

![](../assets/en/FormObjects/warning-proplist.png)

- La détection des erreurs dans le code des expressions d'objets formulaires par le [compilateur](../Project/compiler.md) est améliorée.

- Vous pouvez également bénéficier des [fonctions d'autocomplétion](../code-editor/write-class-method.md#autocomplete-functions) dans l'éditeur de code.

- Lorsque le formulaire est exécuté, 4D instancie automatiquement un objet de classe utilisateur pour le formulaire, qui est renvoyé par l'objet [`Form`](../commands/form.md). Votre code peut accéder directement aux fonctions définies dans la classe utilisateur par le biais de la commande `Form` (par exemple `Form.message()`) sans avoir à passer un objet *formData* comme paramètre aux commandes [`DIALOG`](../commands/dialog.md), [`Print form`](../commands/print-form.md), [`FORM LOAD`](../commands/form-load.md), et [`PRINT SELECTION`](../commands-legacy/print-selection.md).

:::note

Voir [cet article de blog](http://blog.4d.com/empower-your-development-process-with-your-forms) pour une illustration de cette fonctionnalité.

:::

#### Grammaire JSON

| Nom       | Type de données | Valeurs possibles                                                                                                               |
| --------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| formClass | string          | nom d'une classe utilisateur existante ("*className*" ou "*componentNameSpace*.*className*") |

---

## Nom du formulaire

Cette propriété est le nom du formulaire lui-même et est utilisée pour faire référence au formulaire par son nom dans le langage 4D. Le nom du formulaire doit être conforme aux [règles spécifiées pour les identifiants](Concepts/identifiers.md) dans 4D.

#### Grammaire JSON

Le nom du formulaire est défini par le nom du dossier qui contient le fichier form.4Dform. Voir [architecture du projet](Project/architecture#sources) pour plus d'informations.

---

## Type de formulaire

Le type de formulaire, c'est-à-dire sa destination, définit les caractéristiques qui seront disponibles pour le formulaire. Par exemple, les [taquets](properties_Markers.md) ne peuvent être définis que pour les formulaires table liste (sortie).

Chaque table dans une base de données a généralement au moins deux formulaires table. Un pour lister les enregistrements à l'écran et l'autre pour afficher un enregistrement à la fois (utilisé pour la saisie et les modifications) :

- Formulaire de sortie - le formulaire *sortie* ou *liste* affiche une liste d'enregistrements, avec une seule ligne par enregistrement. Les résultats des recherches sont affichés dans un formulaire de sortie et les utilisateurs peuvent double-cliquer sur une ligne pour afficher le formulaire d'entrée pour cet enregistrement.
  ![](../assets/en/FormObjects/formOutput.png)

- Formulaire d'entrée ou formulaire détail - utilisé pour la saisie des données. Il affiche un seul enregistrement par écran et comporte généralement des boutons permettant de sauvegarder et d'annuler les modifications apportées à l'enregistrement et de naviguer d'un enregistrement à l'autre (c'est-à-dire premier enregistrement, dernier enregistrement, enregistrement précédent, enregistrement suivant).
  ![](../assets/en/FormObjects/formInput.png)

Les types pris en charge dépendent de la catégorie de formulaire :

| Type de formulaire                     | Grammaire JSON     | Description                                                             | Prise en charge avec                   |
| -------------------------------------- | ------------------ | ----------------------------------------------------------------------- | -------------------------------------- |
| Formulaire détaillé                    | detailScreen       | Un formulaire d'affichage pour la saisie et la modification des données | Formulaires projet - Formulaires table |
| Formulaire de détail pour l'impression | detailPrinter      | Un rapport imprimé avec une page par enregistrement, comme une facture  | Formulaires projet - Formulaires table |
| Formulaire liste écran                 | listScreen         | Un formulaire pour lister les enregistrements à l'écran                 | Formulaires table                      |
| Formulaire de liste pour l'impression  | listPrinter        | Un rapport imprimé qui liste les enregistrements                        | Formulaires table                      |
| Aucun                                  | *sans destination* | Un formulaire sans fonction spécifique                                  | Formulaires projet - Formulaires table |

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                            |
| ----------- | --------------- | ------------------------------------------------------------ |
| destination | string          | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Nom du formulaire hérité

Cette propriété désigne le [formulaire à hériter](forms.md#inherited-forms) dans le formulaire actuel.

Pour hériter d'un formulaire table, définissez la table dans la propriété [Table du formulaire hérité](#inherited-form-table).

Pour supprimer l'héritage, sélectionnez \<Aucun>\` dans la liste des propriétés (ou " " en JSON).

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                                                                                                             |
| ------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| inheritedForm | string          | Nom du formulaire table ou projet OU chemin POSIX d'un fichier .json décrivant le formulaire OU objet décrivant le formulaire |

---

## Table du formulaire hérité

Cette propriété spécifie la table de la base de données à partir de laquelle [hériter d'un formulaire](forms.md#inherited-forms) dans le formulaire courant.

Fixé à \<Aucun>\` dans la liste des propriétés (ou " " en JSON) pour hériter d'un formulaire projet.

#### Grammaire JSON

| Nom                | Type de données  | Valeurs possibles      |
| ------------------ | ---------------- | ---------------------- |
| inheritedFormTable | string ou number | nom ou numéro de table |

---

## Pages

Chaque formulaire est composé d'au moins deux pages :

- une page 0 (page de fond)
- une page 1 (page principale)

Pour plus d'informations, veuillez consulter le thème [Pages formulaire](forms.md#form-pages).

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles                                                                                   |
| ----- | --------------- | --------------------------------------------------------------------------------------------------- |
| pages | collection      | Collection de pages (chaque page est un objet, la page 0 est le premier élément) |

---

## Publié en tant que sous-formulaire

Pour qu'un formulaire de composant soit sélectionné comme [sous-formulaire](FormObjects/subform_overview.md) dans une base de données hôte, il doit avoir été explicitement partagé. Lorsque cette propriété est sélectionnée, le formulaire sera publié dans le projet hôte.

Seuls les projets formulaire peuvent être indiqués comme étant des sous-formulaires publiés.

#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles |
| ------ | --------------- | ----------------- |
| shared | boolean         | true, false       |

---

## Mémoriser géométrie

Lorsque cette option est cochée, si la fenêtre est ouverte via la commande `Creer fenetre` formulaire avec le paramètre `*`, plusieurs paramètres du formulaire seront automatiquement mémorisés par 4D au moment de la fermeture de la fenêtre, quelle que soi

- la page courante,
- la position, la taille et la visibilité de chaque objet du formulaire (y compris la taille et la visibilité des colonnes de list box).

> Cette option ne prend pas en compte les objets générés via la commande `OBJECT DUPLICATE`. Pour que l’utilisateur retrouve son environnement lors de l’utilisation de cette commande, le développeur doit répéter la séquence de création, définition et positionnement des objets.

Lorsque cette option est cochée, l’option [Mémoriser valeur](FormObjects/properties_Object.md#save-value) est en outre disponible pour certains objets.

#### Grammaire JSON

| Nom              | Type de données | Valeurs possibles |
| ---------------- | --------------- | ----------------- |
| memorizeGeometry | boolean         | true, false       |

#### Voir également

[**Enregistrer la valeur**](FormObjects/properties_Object.md#save-value)

---

## Nom de la fenêtre

Le nom de la fenêtre est utilisé lorsque le formulaire est ouvert à l'aide des commandes `Open form window` et `Open window` dans l'environnement d'application. Le nom de la fenêtre apparaît dans la barre de titre de la fenêtre.

Vous pouvez utiliser des références dynamiques pour définir les noms de fenêtre des formulaires, c'est-à-dire :

- Une référence XLIFF standard stockée dans le dossier Resources.
- Un libellé de table ou de champ : La syntaxe à appliquer est la suivante : `<?[TableNum]FieldNum>` ou `<?[TableName]FieldName>`.
- Une variable ou un champ : La syntaxe à appliquer est la suivante : `\<VariableName>` ou `<[TableName]FieldName>`. La valeur du champ ou de la variable sera affichée dans le nom de la fenêtre.

> Le nombre de caractères pour un nom de fenêtre est limité à 31.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                             |
| ----------- | --------------- | ------------------------------------------------------------- |
| windowTitle | string          | Le nom de la fenêtre sous forme de texte brut ou de référence |


