---
id: get-pointer
title: Get pointer
slug: /commands/get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Get pointer.Syntax-->**Get pointer** ( *nomVar* ) : Pointer<!-- END REF-->
<!--REF #_command_.Get pointer.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomVar | Text | &#8594;  | Nom d'une variable process ou interprocess |
| Résultat | Pointer | &#8592; | Pointeur vers une variable process ou interprocess |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get pointer.Summary-->**Get pointer** retourne un pointeur vers la variable process ou interprocess dont le nom est passé dans *nomVar*.<!-- END REF-->

Pour récupérer un pointeur vers un champ, utilisez la fonction [Field](field.md). Pour récupérer un pointeur vers une table, utilisez la fonction [Table](table.md).

**Note :** Vous pouvez passer à **Get pointer** des expressions telles que, par exemple, *tTabNom+"{3}"* ainsi que des éléments de tableau 2D (*tTabNom+"{3}{5}"*).  
En revanche, vous ne ne pouvez pas passer d'indices variables (*tTabNom+"{maVar}"*).

#### Exemple 1 

Dans un formulaire, vous construisez une grille de 5 X 10 variables saisissables dont les noms sont v1, v2... v50\. Pour initialiser toutes ces variables, vous pouvez écrire :

```4d
  // ...
 For($vlVar;1;50)
    $vpVar:=Get pointer("v"+String($vlVar))
    $vpVar->:=""
 End for
```

#### Exemple 2 

Utilisation de pointeurs vers des éléments de tableaux à deux dimensions :

```4d
 $pt:=Get pointer("a{1}{2}")
  //$pt=->a{1}{2}
 $pt2:=Get pointer("atCities"+"{2}{6}")
  //$pt2=->atCities{2}{6}
```

#### Voir aussi 

[Field](field.md)  
[Table](table.md)  