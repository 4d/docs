---
id: "null"
title: "Null"
slug: /commands/null
displayed_sidebar: docs
---

<!--REF #_command_.Null.Syntax-->**Null**  : Null<!-- END REF-->
<!--REF #_command_.Null.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Null | &#8592; | Valeur Null |

<!-- END REF-->

#### Description 

<!--REF #_command_.Null.Summary-->**Null** retourne la valeur **null**, de type Null.<!-- END REF-->

Cette fonction vous permet d'affecter ou de comparer la valeur **null** aux élements du langage 4D suivants :

| **Eléments du langage 4D**                                      | **Commentaire**                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Valeurs de propriétés d'objets                                  | La comparaison de **Null** avec une propriété d'objet vaut Vrai si la valeur de la propriété est null et Faux dans les autres cas. Par soucis de simplicité, comparer **Null** sera également Vrai si la propriété n'existe pas dans l'objet (i.e. est [Undefined](undefined.md)), voir exemple 4\. |
| Eléments de collections                                         | Lorsqu'une collection est étendue automatiquement par l'ajout d'éléments non adjacents, tous les éléments intermédiaires ajoutés prennent la valeur **null** par défaut.                                                                                                                            |
| Variables de type objet ([C\_OBJECT](c-object.md))              | Voir (\*) ci-dessous                                                                                                                                                                                                                                                                                |
| Variables de type collection ([C\_COLLECTION](c-collection.md)) | Voir (\*) ci-dessous                                                                                                                                                                                                                                                                                |
| Variables de type pointeur ([C\_POINTER](c-pointer.md))         | Voir (\*) ci-dessous                                                                                                                                                                                                                                                                                |
| Variables de type image ([C\_PICTURE](c-picture.md))            | (\*) Affecter la valeur **null** à une variable de ce type efface son contenu. Cela a le même effet qu'appeler la commande [CLEAR VARIABLE](clear-variable.md)                                                                                                                                      |
| variables variant ([C\_VARIANT](c-variant.md))                  |                                                                                                                                                                                                                                                                                                     |

**Note :** Cette commande ne peut pas être utilisée avec les champs scalaires de la base de données. Les valeurs Null dans les champs de la base sont prises en charge par le moteur SQL, et sont gérés via les commandes [Is field value Null](is-field-value-null.md) et [SET FIELD VALUE NULL](set-field-value-null.md),

#### Exemple 1 

Exemples d'affectation et de test de la valeur **null** avec des propriétés d'objets :

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 If(vEmp.children=Null) //vrai
 End if
 If(vEmp.name=Null) //faux
 End if
 If(vEmp.parent=Null) //vrai
 End if
```

**Note :** Cet exemple requiert que la notation objet soit activée dans la base. 

#### Exemple 2 

Exemple d'affectation et de test de la valeur **null** avec une collection d'éléments :

```4d
 var myCol : Collection
 myCol:=New collection(10;20;Null)
 ...
 If(myCol[2]=Null)
  // si le 3e élément est null
    ...
 End if
```

**Note :** Cet exemple requiert que la notation objet soit activée dans la base. 

#### Exemple 3 

Ces exemples illustrent les diverses manières d'affecter ou de comparer la valeur **null** à des variables : 

```4d
  //Variable objet
 var $o : Object
 $o:=New object
 $o:=Null //équivaut à EFFACER VARIABLE($o)
 If($o#Null) //équivaut à If(OB Est defini($o))
 End if
```

```4d
  //Variable collection
 var $c : Collection
 $c:=New collection
 $c:=Null //équivaut à EFFACER VARIABLE($c)
 If($c#Null)
 End if
```

```4d
  //Variable pointeur
 var $p : Pointer
 $p:=->$v
 $p:=Null //équivaut à EFFACER VARIABLE($p)
 If($p=Null) //équivaut à If(Pointeur nil($p))
 End if
```

```4d
  //Variable image
 var $i : Picture
 $i:=$vpicture
 $i:=Null //équivaut à EFFACER VARIABLE($i)
 If($i#Null) //équivaut à If(Taille image($i)#0)
 End if
```

#### Exemple 4 

Cet exemple compare les différents résultats de la commande [Undefined](undefined.md) et de la commande [Null](null.md) appliquées aux propriétés d'objets, en fonction du contexte :

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 $undefined:=Undefined(vEmp.name) // Faux
 $null:=(vEmp.name=Null) // Faux
 
 $undefined:=Undefined(vEmp.children) // Faux
 $null:=(vEmp.children=Null) // Vrai
 
 $undefined:=Undefined(vEmp.parent) // Vrai
 $null:=(vEmp.parent=Null) // Vrai
```

#### Voir aussi 

[Is field value Null](is-field-value-null.md)  
[OB SET NULL](ob-set-null.md)  
[SET FIELD VALUE NULL](set-field-value-null.md)  