---
id: type
title: Type
slug: /commands/type
displayed_sidebar: docs
---

<!--REF #_command_.Type.Syntax-->**Type** ( *champVar* ) : Integer<!-- END REF-->
<!--REF #_command_.Type.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| champVar | Field, Variable | &#8594;  | Champ ou variable à tester |
| Résultat | Integer | &#8592; | Numéro du type de données |

<!-- END REF-->

#### Description 

<!--REF #_command_.Type.Summary-->**Type** retourne une valeur numérique qui indique le type du champ ou de la variable que vous avez passé(e) dans le paramètre *champVar*.<!-- END REF-->

4D fournit les constantes prédéfinies suivantes, disponible dans le thème *Types champs et variables* :

| Constante          | Type        | Valeur |
| ------------------ | ----------- | ------ |
| Array 2D           | Entier long | 13     |
| Blob array         | Entier long | 31     |
| Boolean array      | Entier long | 22     |
| Date array         | Entier long | 17     |
| Integer array      | Entier long | 15     |
| Is alpha field     | Entier long | 0      |
| Is BLOB            | Entier long | 30     |
| Is Boolean         | Entier long | 6      |
| Is collection      | Entier long | 42     |
| Is date            | Entier long | 4      |
| Is integer         | Entier long | 8      |
| Is integer 64 bits | Entier long | 25     |
| Is longint         | Entier long | 9      |
| Is null            | Entier long | 255    |
| Is object          | Entier long | 38     |
| Is picture         | Entier long | 3      |
| Is pointer         | Entier long | 23     |
| Is real            | Entier long | 1      |
| Is string var      | Entier long | 24     |
| Is subtable        | Entier long | 7      |
| Is text            | Entier long | 2      |
| Is time            | Entier long | 11     |
| Is undefined       | Entier long | 5      |
| Is variant         | Entier long | 12     |
| LongInt array      | Entier long | 16     |
| Object array       | Entier long | 39     |
| Picture array      | Entier long | 19     |
| Pointer array      | Entier long | 20     |
| Real array         | Entier long | 14     |
| String array       | Entier long | 21     |
| Text array         | Entier long | 18     |
| Time array         | Entier long | 32     |

Vous pouvez appliquer la fonction **Type** aux champs, variables interprocess, variables process, variables locales et à des pointeurs dépointés qui référencent ces types d'objets. Vous pouvez appliquer **Type** aux paramètres (*$1,$2..., ${...}*) d'une méthode projet ou au résultat d'une fonction (*$0*).

**Notes :** 

* Vous ne pouvez pas appliquer la fonction **Type** aux expressions scalaires telles que les propriétés d'objets (*emp.name*) ou les éléments de collections (*maColl\[5\]*). Pour cela, vous devez utiliser la commande [Value type](value-type.md).
* En mode compilé, si vous appelez la commande **Type** pour un paramètre de méthode ($0, $1...) déclaré comme [C\_VARIANT](c-variant.md), cela ne retournera pas Is variant mais plutôt le type de données courantes (de même si vous appelez la commande [Value type](value-type.md)).

#### Exemple 1 

La méthode projet suivante efface une partie ou la totalité des champs de l'enregistrement courant de la table vers laquelle pointe le pointeur passé en paramètre, et ce, sans supprimer l'enregistrement ou changer d'enregistrement courant :

```4d
  // Méthode projet VIDER ENREGISTREMENT
  // VIDER ENREGISTREMENT ( Pointeur {; Entier long } )
  // VIDER ENREGISTREMENT ( -> [Table] { ; Type des valeurs } )
 
 var $1 : Pointer
 var $2;$vlTypeVal : Integer
 
 If(Count parameters>=2)
    $vlTypeVal:=$2
 Else
    $vlTypeVal:=0xFFFFFFFF
 End if
 For($vlChamp;1;Nombre de champs($1))
    $vpChamp:=Field(Table($1);$vlChamp)
    $vlTypeChamp:=Type($vpChamp->)
    If($vlTypeVal ??$vlTypeChamp )
       Case of
          :(($vlTypeChamp=Is alpha field)|($vlTypeChamp=Is text))
             $vpChamp->:=""
          :(($vlTypeChamp=Is real)|($vlTypeChamp=Is integer)|($vlTypeChamp=Is longint))
             $vpChamp->:=0
          :($vlTypeChamp=Is date)
             $vpChamp->:=!00/00/00!
          :($vlTypeChamp=Is time)
             $vpChamp->:=?00:00:00?
          :($vlTypeChamp=Is Boolean)
             $vpChamp->:=False
          :($vlTypeChamp=Is picture)
             var $vgImageVide : Picture
             $vpChamp->:=$vgImageVide
          :($vlTypeChamp=Is subtable)
             Repeat
                ALL SUBRECORDS($vpChamp->)
                DELETE SUBRECORD($vpChamp->)
             Until(Records in subselection($vpChamp->)=0)
          :($vlTypeChamp=Is BLOB)
             SET BLOB SIZE($vpChamp->;0)
       End case
    End if
 End for
```

Une fois cette méthode projet implémentée dans votre base, vous pouvez écrire :

```4d
  // Effacer la totalité du contenu de l'enregistrement courant de la table [Choses à faire]
 VIDER ENREGISTREMENT(->[Choses à faire])
 
  // Effacer les champs de type Texte, BLOB et Image de l'enregistrement courant de la table [Choses à faire]
 VIDER ENREGISTREMENT(->[Choses à faire];0?+Is text?+Is BLOB?+Is picture)
 
  // Effacer la totalité de l'enregistrement courant de la table [Choses à faire] sauf les champs Alpha
 VIDER ENREGISTREMENT(->[Choses à faire];-1?-Is alpha field)
```

#### Exemple 2 

Dans certains cas, par exemple pour écrire du code générique, il peut être nécessaire de savoir si un tableau est tableau standard indépendant ou une “ligne” d’un tableau 2D. Dans ce cas, il suffit d’utiliser le code suivant :

```4d
 ptrmonTab:=->monTab{6} // monTab{6} est-il une ligne d’un tableau 2D ?
 RESOLVE POINTER(ptrmonTab;nomVar;numTable;numChamp)
 If(nomVar#"")
    $ptr:=Get pointer(nomVar)
    $letype:=Type($ptr->)
  // Si monTab{6} est une ligne de tableau 2D, $letype vaut 13
 End if
```

#### Exemple 3 

Référez-vous à l'exemple de la commande [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md).

#### Voir aussi 

[Is a variable](is-a-variable.md)  
[Undefined](undefined.md)  
[Value type](value-type.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 295 |
| Thread safe | &check; |
| Interdite sur le serveur ||


