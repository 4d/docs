---
id: form
title: Form
slug: /commands/form
displayed_sidebar: docs
---

<!--REF #_command_.Form.Syntax-->**Form**  : Object<!-- END REF-->
<!--REF #_command_.Form.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Object | &#8592; | Données associées au formulaire courant |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Form.Summary-->La commande **Form** retourne l'objet associé au formulaire courant, s'il existe.<!-- END REF--> 4D associe automatiquement un objet au formulaire courant dans les cas suivants :

* le formulaire courant est affiché par la commande [DIALOG](dialog.md),
* le formulaire courant est un sous-formulaire,
* un formulaire table est actuellement affiché à l'écran.

##### Formulaire DIALOGUE 

Si le formulaire courant est affiché suite à un appel à la commande [DIALOG](dialog.md), **Form** retourne soit un objet vide, soit l'objet *formData* passé en paramètre à cette commande, le cas échéant.

##### Sous-formulaire 

Si le formulaire courant est un sous-formulaire, l'objet retourné par **Form** dépend de la variable du conteneur parent :

* Si la variable associée au conteneur parent a été typée en objet ([C\_OBJECT](c-object.md)), **Form** retourne la valeur de cette variable.  
Dans ce cas, l'objet retourné par **Form** est identique à celui retourné par l'expression suivante :  
```4d  
 (OBJECT Get pointer(Object subform container))->  
```
* Si la variable associée au conteneur parent n'a pas été typée en objet, **Form** retourne un objet vide, maintenu par 4D dans le contexte du sous-formulaire.

Pour plus d'informations, veuillez vous reporter à la section *Sous-formulaires en page*.

##### Formulaire table 

**Form** retourne l'objet associé au formulaire table affiché à l'écran. Dans le contexte d'un formulaire d'entrée affiché depuis un formulaire de sortie (c'est-à-dire après un double-clic sur un enregistrement), l'objet retourné contient la propriété suivante :

| **Propriété** | **Type** | **Description**                               |
| ------------- | -------- | --------------------------------------------- |
| parentForm    | objet    | **Form** objet du formulaire de sortie parent |

#### Exemple 

Dans un formulaire affichant l'enregistrement d'une personne, un bouton ouvre un dialogue permettant de vérifier ou de modifier les noms et âges de ses enfants :

![](../assets/en/commands/pict3542015.en.png)

**Note :** Le champ objet "enfants" est représenté uniquement dans cet exemple afin de faire apparaître sa structure.

Dans le formulaire de vérification, vous avez assigné des propriétés d'objet [Form](form.md) aux variables :

![](../assets/en/commands/pict3541682.en.png)

Voici le code du bouton "Check Children" :

```4d
 var $win;$n;$i : Integer
 var $save : Boolean
 ARRAY OBJECT($children;0)
 OB GET ARRAY([Person]Children;"children";$children) //récupérer les enfants
 $save:=False //initialisation du marqueur de sauvegarde
 
 $n:=Size of array($children)
 If($n>0)
    $win:=Open form window("Edit_Children";Movable form dialog box)
    SET WINDOW TITLE("Vérification des enfants pour "+[Person]Name)
    For($i;1;$n) //pour chaque enfant
       DIALOG("Edit_Children";$children{$i}) //afficher le dialogue prérempli
       If(OK=1) //l'utilisateur a cliqué sur OK
          $save:=True
       End if
    End for
    If($save=True)
       [Person]Children:=[Person]Children //Forcer la mise à jour du champ
    End if
    CLOSE WINDOW($win)
 Else
    ALERT("Pas d'enfant à vérifier.")
 End if
```

**Note :** Cet exemple nécessite l'activation de la notation objet dans la base (voir *Page Compatibilité*).

Le formulaire affiche les informations pour chaque enfant :

![](../assets/en/commands/pict3515152.en.png)

Si des valeurs sont modifiées et que l'utilisateur clique sur le bouton OK, le champ est mis à jour (bien entendu, l'enregistrement parent devra être sauvegardé par la suite).

#### Voir aussi 

[DIALOG](dialog.md)  