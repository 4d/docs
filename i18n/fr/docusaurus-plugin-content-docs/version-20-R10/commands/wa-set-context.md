---
id: wa-set-context
title: WA SET CONTEXT
---

<!--REF #_command_.WA SET CONTEXT.Syntax-->**WA SET CONTEXT** ( {* ;} *object* ; *contextObj* )<!-- END REF-->

<!--REF #_command_.WA SET CONTEXT.Params-->

| Paramètres | Type                |                             | Description                                                                                                                                          |
| ---------- | ------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Opérateur           | &#8594; | Si passé, *object* est un nom d'objet (chaîne de caractères). Si omis, *object* est une variable. |
| object     | Objet de formulaire | &#8594; | Nom de l'objet (si \* est spécifié) ou Variable (si \* est omis).                              |
| contextObj | Object              | &#8594; | Objet contenant les fonctions qui peuvent être appelées avec `$4d`.                                                                  |

<!-- END REF-->

### Description

La commande `WA SET CONTEXT` <!--REF #_command_.WA SET CONTEXT.Summary--> définit un objet contexte *contextObj* pour `$4d` dans la zone Web désignée par les paramètres \* et *object*. Lorsque cette commande est utilisée, `$4d` ne peut accéder qu'aux contenus déclarés dans le *contextObj* fourni. Si aucun objet contexte n'est défini, `$4d` a accès à toutes les méthodes 4D et ne peut pas accéder aux classes utilisateurs.<!-- END REF-->

:::note

La commande n'est utilisable qu'avec une zone web intégrée où les paramètres [**Utiliser le moteur de rendu web intégré**](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine) et **Accéder aux méthodes 4D** sont fixés à `true`.

:::

Passez dans *contextObj* les instances de classes utilisateurs ou les formules à autoriser dans `$4d` en tant qu'objets. Les fonctions de classe qui commencent par `_` sont considérées comme cachées et ne peuvent pas être utilisées avec `$4d`.

- Si *contextObj* est null, `$4d` a accès à toutes les méthodes 4D.
- Si *contextObj* est vide, `$4d` n'a aucun accès.

### Exemple 1

Autoriser l'accès à des méthodes spécifiques via `$4d`

```4d
 var $context:={}
 $context.myMethod:=Formula(myMethod)
 $context.myMethod2:=Formula(myMethod2)

 WA SET CONTEXT(*; "myWebArea"; $context)
```

**En JavaScript:**

```js
$4d.myMethod(); // Autorisé
$4d.myMethod2(); // Autorisé
$4d.someOtherMethod(); // Non autorisé
```

### Exemple 2

Utiliser un objet de classe

```4d
 var $myWAObject:=cs.WAFunctions.new()

 WA SET CONTEXT(*; "MyWA"; $myWAObject)
```

**En JavaScript:**

```js
$4d.myWAFunction(); // Autorisé
$4d._myPrivateFunction(); // Ne fera rien car la function est privée
```

### Voir également

[WA Get context](wa-get-context.md)

### Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1848                        |
| Thread safe        | &cross; |
