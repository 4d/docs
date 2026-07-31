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

### Accès aux objets de formulaire via leur nom ou leur source de données dans le langage 4D

De nombreuses commandes traitant des objets de formulaire telles que les commandes du thème [Objets (Formulaires)](../commands/theme/Objects_Forms.md), [List Box](../commands/theme/List_Box.md), ou [Styled Text](../commands/theme/Styled_Text.md) partagent les mêmes syntaxes génériques suivantes :

```4d
COMMAND NAME( * ; *object* : Text { ; *paramètres supplémentaires* } )
//ou
COMMAND NAME( *object* : Variable, Field { ; *paramètres supplémentaires* })
```

Si vous spécifiez le paramètre \*, vous indiquez que *object* est le [nom de l'objet](./properties_Object.md#object-name) (une chaîne). Si vous ne passez pas le \*, vous indiquez que *object* est un champ ou une variable, c'est-à-dire sa [source de données](./properties_Object.md#variable-or-expression).

Lors de l'utilisation du [nom de l'objet](./properties_Object.md#object-name), vous pouvez tirer parti du caractère @ dans ce nom si vous voulez traiter plusieurs objets du formulaire en un seul appel. Le tableau suivant montre des exemples de noms d'objets que vous pouvez spécifier avec cette commande.

| Noms d'objets                      | Objets affectés par l'appel                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------ |
| zoneGroupe                         | Uniquement l'objet zoneGroupe.                                 |
| zone@                 | Les objets dont le nom commence par “zone”.                    |
| @zoneGroupe           | Les objets dont le nom finit par “zoneGroupe”.                 |
| @Groupe@ | Les objets dont le nom contient “Groupe”.                      |
| zone@Btn              | Les objets dont le nom commence par “zone” et finit par “Btn”. |
| @                     | Tous les objets présents dans le formulaire.                   |

Les noms d'objets de formulaires peuvent contenir jusqu'à 255 octets, permettant la définition et l'application de règles de nommage personnalisées, par exemple "xxxx_Bouton" ou "xxx_Mac".

:::warning

Vous pouvez [configurer la façon dont le caractère @ est interprété] (../settings/database.md#text-comparison) lorsqu'il est inclus dans une chaîne de caractères. Cette option influe sur le fonctionnement des commandes d'objets.

:::

