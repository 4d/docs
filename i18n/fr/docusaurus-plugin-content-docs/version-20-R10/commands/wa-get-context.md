---
id: wa-get-context
title: WA Get context
---

<!--REF #_command_.WA Get context.Syntax-->**WA Get context** ( {* ;} *object* ) -> *contextObj*<!-- END REF-->

<!--REF #_command_.WA Get context.Params-->

| Paramètres | Type                |                             | Description                                                                                                                                          |
| ---------- | ------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Opérateur           | &#8594; | Si passé, *object* est un nom d'objet (chaîne de caractères). Si omis, *object* est une variable. |
| object     | Objet de formulaire | &#8594; | Nom de l'objet (si \* est spécifié) ou Variable (si \* est omis).                              |
| contextObj | Object              | &#8592; | Objet contexte si défini précédemment, sinon `null`.                                                                                 |

<!-- END REF-->

### Description

La commande `WA Get context`<!--REF #_command_.WA Get context.Summary--> récupère l'objet contexte défini pour `$4d` dans la zone Web désignée par les paramètres \* et *object* en utilisant [`WA SET CONTEXT`](./wa-set-context.md).<!-- END REF--> Si `WA SET CONTEXT` n'a pas été appelé pour la zone web, la commande renvoie `null`.

:::note

La commande n'est utilisable qu'avec une zone web intégrée où les paramètres [**Utiliser le moteur de rendu web intégré**](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) et **Accéder aux méthodes 4D** sont fixés à `true`.

:::

### Exemple

Vérification de l'existence d'un contexte :

```4d
 var $contextObj:=WA Get context(*; "myWebArea")

 If ($contextObj=Null)
	ALERT("No context set for this web area.")
 Else 
	ALERT("Context is defined!")
 End if
```

### Voir également

[WA SET CONTEXT](wa-set-context.md)

### Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1849                        |
| Thread safe        | &cross; |
