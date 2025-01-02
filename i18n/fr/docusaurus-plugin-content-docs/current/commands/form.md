---
id: form
title: Formulaire
displayed_sidebar: docs
---

<!--REF #_command_.Form.Syntax-->**Form**  : Object<!-- END REF-->

<!--REF #_command_.Form.Params-->

| Paramètres | Type   |   | Description                  |
| ---------- | ------ | - | ---------------------------- |
| Résultat   | Object | ← | Données du formulaire actuel |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*

<details><summary>Historique</summary>

| Release | Modifications      |
| ------- | ------------------ |
| 20 R8   | Form class support |

</details>

#### Description

<!--REF #_command_.Form.Summary-->The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).<!-- END REF-->The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor). 4D associe automatiquement un objet à la forme courante dans les cas suivants :

- the current form has been loaded by one of the [`DIALOG`](dialog.md), [`Print form`](print-form.md), or [`FORM LOAD`](form-load.md) commands,
- the current form is a subform,
- a table form is currently displayed on screen.

##### Commands (DIALOG...)

If the current form is being displayed or loaded by a call to the [DIALOG](dialog.md), [`Print form`](print-form.md), or [`FORM LOAD`](form-load.md) commands, **Form** returns either:

- the *formData* object passed as parameter to this command, if any,
- or, an instantiated object of the [user class associated to the form](../FormEditor/properties_FormProperties.md#form-class), if any,
- or, an empty object.

##### Sous-formulaire

If the current form is a subform, the returned object depends on the parent container variable:

- **Form** returns the object associated with the table form displayed on screen.\
  **Form** returns the object associated with the table form displayed on screen.\
  In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:

```4d
 (OBJECT Get pointer(Object subform container))->  
```

- If the variable associated to the parent container has not been typed as an object, **Form** returns an empty object, maintained by 4D in the subform context.

For more information, please refer to the *Page subforms* section.

##### Table form

**Form** returns the object associated with the table form displayed on screen. **Form** returns the object associated with the table form displayed on screen.\
In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:

| **Propriété** | **Type** | **Description**                           |
| ------------- | -------- | ----------------------------------------- |
| parentForm    | object   | **Form** object of the parent output form |

#### Exemple

Dans un formulaire affichant l'enregistrement d'une personne, un bouton ouvre un dialogue permettant de vérifier ou de modifier les noms et âges de ses enfants :

![](../assets/en/commands/pict3542015.en.png)

**Note :** Le champ objet "enfants" est représenté uniquement dans cet exemple afin de faire apparaître sa structure.

In the verification form, you have assigned some Form object properties to inputs:

![](../assets/en/commands/pict3541682.en.png)

Voici le code du bouton "Check Children" :

```4d
 var $win;$n;$i : Integer
 var $save : Boolean
 ARRAY OBJECT($children;0)
 OB GET ARRAY([Person]Children ; "children" ;$children) //obtient la collection d'enfants
 $save:=False //initialise la variable de sauvegarde
 
 $n:=Size of array($children)
 If($n>0)
    $win:=Open form window("Edit_Children";Movable form dialog box)
    SET WINDOW TITLE("Vérifier les enfants pour "+[Person]Name")
    For($i;1 ;$n) //pour chaque enfant
       DIALOG("Edit_Children" ;$children{$i}) //affiche la boîte de dialogue remplie de valeurs
       If(OK=1) //l'utilisateur a cliqué sur OK
          $save:=True
       End if
    End for
    If($save=True)
       [Person]Children:=[Person]Children //forces object field update
    End if
    CLOSE WINDOW($win)
 Else
    ALERT("No child to check.")
 End if
```

Le formulaire affiche des informations pour chaque enfant :

![](../assets/en/commands/pict3515152.en.png)

Si des valeurs sont modifiées et que l'utilisateur clique sur le bouton OK, le champ est mis à jour (bien entendu, l'enregistrement parent devra être sauvegardé par la suite).

#### Voir également

[DIALOG](dialog.md)
