---
id: formObjectsOverview
title: Objets de formulaire
---

Vous créez et personnalisez les formulaires de votre application en manipulant les objets qu'ils contiennent. Vous pouvez ajouter des objets, repositionner des objets, définir des propriétés d'objets, appliquer des règles métier en spécifiant des contraintes de saisie de données ou écrire des méthodes objet qui s'exécutent automatiquement lorsque l'objet est utilisé.

## Objets actifs et statiques

4D forms support a large number of built-in **active** and **static** objects:

- **active objects** perform a database task or an interface function. Les champs sont des objets actifs. Les autres objets actifs — objets saisissables (variables), combo box, listes déroulantes, boutons image, etc. — stockent des données temporairement en mémoire ou effectuent une tâche telle que l'ouverture d'une boite de dialogue, l'impression d'un état ou le lancement d'un processus d'arrière-plan.
- **static objects** are generally used for setting the appearance of the form and its labels as well as for the graphic interface. A la différence des objets actifs, les objets statiques ne sont pas associés à des variables. A noter qu'il est possible d'insérer des éléments dynamiques dans les objets statiques.

## Gérer les objets de formulaire

Vous pouvez ajouter des objets dans un formulaire de nombreuses manières :

- **[Form Editor](FormEditor/formEditor.md):** Drag an object from the Form Editor toolbar onto the form. Utilisez ensuite la liste de propriétés pour indiquer les propriétés de l'objet.

- **4D language**: Commands from the `Objects (Forms)` theme such as [`OBJECT DUPLICATE`](https://doc.4d.com/4dv20/help/command/en/page1111.html) or [`OBJECT SET FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page166.html) allow to create and define form objects.

- **JSON code in dynamic forms:** Define the properties using JSON. Use the [type](properties_Object.md#type) property to define the object type, then set its [available properties](properties_Reference.md).
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
