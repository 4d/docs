---
id: undefined
title: Undefined
slug: /commands/undefined
displayed_sidebar: docs
---

<!--REF #_command_.Undefined.Syntax-->**Undefined** ( *expression* ) : Boolean<!-- END REF-->
<!--REF #_command_.Undefined.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | Expression à tester |
| Résultat | Boolean | &#8592; | Vrai = Variable actuellement indéfinie Faux = Variable actuellement définie |

<!-- END REF-->

#### Description 

<!--REF #_command_.Undefined.Summary-->La commande **Undefined** retourne Vrai si le résultat de l'évaluation d'*expression* n'est pas une valeur définie, sinon elle retourne Faux si *expression* a été définie.<!-- END REF-->retourne Faux pour toutes les variables.
* Une propriété d'objet est indéfinie si elle n'existe pas dans l'objet.
* La commande **Undefined** retourne toujours Faux pour les champs.

**Note :** A noter que **Undefined** évalue expression. Les instructions suivantes sont équivalentes :  

```4d
 $result:=Undefined($exp)
  // résultat identique :
 $result:=(Value type($exp)=Est une variable indéfinie)
```

  
Dans certains cas, il est possible que vous ne souhaitiez pas évaluer le paramètre (par exemple, lorsque vous utilisez un pointeur vers une variable pour véifier si la variable est définie). Vous devez alors écrire :  

```4d
 $result:=(Type($ptr->)=Est une variable indéfinie) //vrai si la variable pointée n'existe pas (pas d'erreur)
```

#### Exemple 

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

[CLEAR VARIABLE](clear-variable.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 82 |
| Thread safe | &check; |
| Interdite sur le serveur ||


