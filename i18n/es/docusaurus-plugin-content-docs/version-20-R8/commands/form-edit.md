---
id: form-edit
title: FORM EDIT
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*aTable* ;} *form* )<br/>**FORM EDIT** ( {*aTable* ;} *form* ; *object* )<!-- END REF-->

<!--REF #_command_.FORM EDIT.Params-->

| Parámetros | Tipo  |   | Descripción                                                                               |
| ---------- | ----- | - | ----------------------------------------------------------------------------------------- |
| aTable     | Tabla | → | Table owning the form or If omitted: default table or use of project form |
| form       | Text  | → | Form name                                                                                 |
| object     | Text  | → | Form object name or group name                                                            |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                |
| ----------- | ----------------------------- |
| 20 R8       | Support of *object* parameter |

</details>

#### Descripción

<!--REF #_command_.FORM EDIT.Summary-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.<!-- END REF-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected. Note that you must have access to the Design environment, otherwise the error -9804 ("Cannot open form") is generated.

The command is asynchronous: it returns immediately to the calling method and does not wait for the form to be open.

If you pass the optional *aTable* parameter, you indicate the table associated with *form*. If you omit this parameter, you indicate that *form* is a project form.

In the *form* parameter, pass the name of the form to open in the 4D Form editor. If you pass a name that does not exist, the error 81 is generated ("Form not found").

Optionnally, you can pass in *object* the name of a form object or of a group to select automatically in the 4D Form editor. This feature allows you, for example, to save time when debugging a form based upon expression errors returned by [`Compile project`](compile-project.md).

If *object* is not found in *form*, the form is opened and no error is returned.

Pass an empty string in *object* to deselect all objects in the open *form*.

#### Ejemplos

To open the *Contacts* table *Address* form:

```4d
 FORM EDIT([Contacts];"Address")
```

To open the *ContactList* project form:

```4d
 FORM EDIT("ContactList")
```

To open the *ContactPage* project form with "name-input" object selected:

```4d
 FORM EDIT("ContactList"; "name-input")
```

#### Ver también

*Design Object Access Commands*

#### Propiedades

|                |                                                                     |
| -------------- | ------------------------------------------------------------------- |
| Command number | 1749                                                                |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;cross; |
