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

#### Description

<!--REF #_command_.FORM EDIT.Summary-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.<!-- END REF-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.La commande **FORM EDIT** ouvre le *formulaire* associé à *aTable* dans l'éditeur de formulaire 4D, avec optionnellement *object* sélectionné. Note that you must have access to the Design environment, otherwise the error -9804 ("Cannot open form") is generated.

The command is asynchronous: it returns immediately to the calling method and does not wait for the form to be open.

If you pass the optional *aTable* parameter, you indicate the table associated with *form*. If you omit this parameter, you indicate that *form* is a project form.

In the *form* parameter, pass the name of the form to open in the 4D Form editor. If you pass a name that does not exist, the error 81 is generated ("Form not found").

Optionnally, you can pass in *object* the name of a form object or of a group to select automatically in the 4D Form editor. This feature allows you, for example, to save time when debugging a form based upon expression errors returned by [`Compile project`](compile-project.md).

If *object* is not found in *form*, the form is opened and no error is returned.

Pass an empty string in *object* to deselect all objects in the open *form*.

#### Exemples

To open the *Contacts* table *Address* form:

```4d
 FORM EDIT([Contacts];"Address")
```

Pour ouvrir le formulaire de projet *ContactList* :

```4d
 FORM EDIT("ContactList")
```

Pour ouvrir le formulaire de projet *ContactPage* avec l'objet "name-input" sélectionné:

```4d
 FORM EDIT("ContactList"; "name-input")
```

#### Voir également

*Design Object Access Commands*

#### Propriétés

|                    |                                 |
| ------------------ | ------------------------------- |
| Numéro de commande | 1749                            |
| Thread safe        | &amp;cross; |
