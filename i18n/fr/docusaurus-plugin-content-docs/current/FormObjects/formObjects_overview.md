---
id: formObjectsOverview
title: Objets de formulaire
---

Vous créez et personnalisez les formulaires de votre application en manipulant les objets qu'ils contiennent. Vous pouvez ajouter des objets, repositionner des objets, définir des propriétés d'objets, appliquer des règles métier en spécifiant des contraintes de saisie de données ou écrire des méthodes objet qui s'exécutent automatiquement lorsque l'objet est utilisé.

## Objets actifs et statiques

Les formulaires 4D prennent en charge un grand nombre d'objets **actifs** et **statiques** intégrés :

- **Les objets actifs** réalisent une tâche ou une fonction de l’interface. Les champs sont des objets actifs. Les autres objets actifs — objets saisissables (variables), combo box, listes déroulantes, boutons image, etc. — stockent des données temporairement en mémoire ou effectuent une tâche telle que l'ouverture d'une boite de dialogue, l'impression d'un état ou le lancement d'un processus d'arrière-plan.
- **Les objets statiques** sont généralement utilisés pour le décor, les libellés ou encore l'interface graphique du formulaire. A la différence des objets actifs, les objets statiques ne sont pas associés à des variables. A noter qu'il est possible d'insérer des éléments dynamiques dans les objets statiques.

## Gérer les objets de formulaire

Vous pouvez ajouter des objets dans un formulaire de nombreuses manières :

- **[Éditeur de formulaire](FormEditor/formEditor.md) :** en glissant un objet de la barre d'outils de l'éditeur de formulaire vers le formulaire. Utilisez ensuite la liste de propriétés pour indiquer les propriétés de l'objet.

- **Langage 4D** : Les commandes du thème `Objets (Formulaires)` telles que [`OBJECT DUPLICATE`](../commands/object-duplicate) ou [`OBJECT SET FONT STYLE`](../commands/object-set-font-style) permettent de créer et de définir des objets de formulaire.

- **Code JSON dans les formulaires dynamiques :** Définissez les propriétés à l'aide du JSON. Utilisez la propriété [type](properties_Object.md#type) pour définir le type d'objet puis indiquez ses [propriétés disponibles](properties_Reference.md).
  Exemple d'un objet bouton :

```json
	{
		"type": "button", 
		"style": "bevel", 
		"text": "OK", 
		"action": "Cancel", 
		"left": 60, 
		"top": 160, 
		"width": 100, 
		"height": 20
	}
```

### Accessing form objects using their name or their data source in the 4D language

Many commands handling form objects such as commands from [Objects (Forms)](../commands/theme/Objects_Forms.md), [List Box](../commands/theme/List_Box.md), or [Styled Text](../commands/theme/Styled_Text.md) themes share the same generic syntaxes described here:

```4d
COMMAND NAME( * ; *object* : Text { ; *additional parameters* } )
//or
COMMAND NAME( *object* : Variable, Field { ; *additional parameters* })
```

If you specify the \* parameter, you indicate that *object* is the [name of the object](./properties_Object.md#object-name) (a string). If you don't pass the \*, you indicate that *object* is a field or a variable, i.e. its [data source](./properties_Object.md#variable-or-expression).

When using the [object name](./properties_Object.md#object-name), you can rely on the @ character within that name if you want to address several objects of the form in one call. The following table shows examples of object names you can specify to this command.

| Object Names                       | Objects affected by the call                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------ |
| mainGroupBox                       | Only the object mainGroupBox.                                  |
| main@                 | The objects whose name starts with “main”.                     |
| @GroupBox             | The objects whose name ends with “GroupBox”.                   |
| @Groupe@ | The objects whose name contains “Group”.                       |
| main@Btn              | The objects whose name starts with “main” and ends with “Btn”. |
| @                     | All the objects present in the form.                           |

Form object names can contain up 255 bytes, allowing you to define and apply custom naming rules, such as "xxxx_Button" or "xxx_Mac".

:::warning

You can [configure the way the @ character is interpreted](../settings/database.md#text-comparison) when it is included in a character string. This option affects the functioning of the form object commands.

:::

