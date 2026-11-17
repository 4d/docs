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
  Voir le chapitre [Construire des formulaires](https://doc.4d.com/4Dv20/4D/20.2/Building-forms.200-6750076.en.html) pour plus d'informations.

- **Langage 4D** : Les commandes du thème [Objets (Formulaires)](https://doc.4d.com/4Dv20/4D/20.6/Objects-Forms.201-7486936.fe.html) comme `OBJECT DUPLICATE` ou `OBJECT SET FONT STYLE` permettent de créer et de définir des objets de formulaire.

- **Code JSON dans les formulaires dynamiques :** Définissez les propriétés à l'aide du JSON. Utilisez la propriété [type](properties_Object.md#type) pour définir le type d'objet puis indiquez ses propriétés disponibles.  Pour plus d'informations, consultez la page [Formulaires dynamiques](https://doc.4d.com/4Dv20/4D/20.2/Dynamic-Forms.300-6750140.fe.html).

Exemple d'objet  bouton :```json
	{
		"type": "button", 
		"style": "bevel", 
		"text": "OK", 
		"action": "Annuler", 
		"left": 60, 
		"top": 160, 
		"width": 100, 
		"height": 20
	}
```
