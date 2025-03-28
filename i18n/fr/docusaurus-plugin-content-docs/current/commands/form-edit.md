---
id: form-edit
title: FORM EDIT
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*aTable* ;} *form* )<br/>**FORM EDIT** ( {*aTable* ;} *form* ; *object* )<!-- END REF-->

<!--REF #_command_.FORM EDIT.Params-->

| Paramètres | Type  |                             | Description                                                                                                                 |
| ---------- | ----- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| aTable     | Table | &#8594; | Table à laquelle appartient le formulaire; Si omis : Table par défaut ou utilisation d'un formulaire projet |
| form       | Text  | &#8594; | Nom du formulaire                                                                                                           |
| object     | Text  | &#8594; | Nom de l'objet du formulaire ou nom du groupe                                                                               |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                         |
| ------- | ------------------------------------- |
| 20 R8   | Prise en charge du paramètre *object* |

</details>

## Description

<!--REF #_command_.FORM EDIT.Summary-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.<!-- END REF-->La commande **FORM EDIT** ouvre le formulaire *form* associé à *aTable* dans l'éditeur de formulaires de 4D, avec optionnellement *object* sélectionné. Notez que vous devez avoir accès à l'environnement de Structure, sinon l'erreur -9804 ("Cannot open form") est générée.

La commande est asynchrone : elle retourne immédiatement à la méthode appelante et n'attend pas que le formulaire soit ouvert.

Si vous passez le paramètre optionnel *aTable*, vous indiquez la table associée à *form*. Si vous omettez ce paramètre, vous indiquez que *form* est un formulaire projet.

Dans le paramètre *form*, passez le nom du formulaire à ouvrir dans l'éditeur de formulaires de 4D. Si vous passez un nom qui n'existe pas, l'erreur 81 est générée ("Formulaire introuvable").

Optionnellement, vous pouvez passer dans *objet* le nom d'un objet de formulaire ou d'un groupe à sélectionner automatiquement dans l'éditeur de formulaires de 4D. Cette fonctionnalité vous permet, par exemple, de gagner du temps lors du débogage d'un formulaire sur la base des erreurs d'expressions renvoyées par [`Compile project`](compile-project.md).

Si *objet* n'est pas trouvé dans *form*, le formulaire est ouvert et aucune erreur n'est renvoyée.

Passez une chaîne vide dans *objet* pour désélectionner tous les objets dans le *form* ouvert.

## Exemples

Pour ouvrir le formulaire *Address* de la table *Contacts* :

```4d
 FORM EDIT([Contacts];"Address")
```

Pour ouvrir le formulaire projet *ContactList* :

```4d
 FORM EDIT("ContactList")
```

Pour ouvrir le formulaire projet *ContactPage* avec l'objet "name-input" sélectionné :

```4d
 FORM EDIT("ContactList"; "name-input")
```

## Voir également

[Commandes Accès objets développement](../commands/theme/Design_Object_Access.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1749                        |
| Thread safe        | &cross; |


