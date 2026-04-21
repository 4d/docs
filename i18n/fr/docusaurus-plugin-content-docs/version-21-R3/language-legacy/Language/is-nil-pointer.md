---
id: is-nil-pointer
title: Is nil pointer
slug: /commands/is-nil-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Is nil pointer.Syntax-->**Is nil pointer** ( *pointeur* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is nil pointer.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| pointeur | Pointer | &#8594;  | Pointeur à tester |
| Résultat | Boolean | &#8592; | VRAI = Pointeur Nil (->[]) FAUX = Pointeur valide vers un objet existant |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|16 R4|Renommé|
|<6|Créé|

</details>
</div>

#### Description 

<!--REF #_command_.Is nil pointer.Summary-->**Is nil pointer** retourne Vrai si le pointeur que vous passez dans *pointeur* est **Nil** (*\->\[\]*).<!-- END REF--> Elle retourne Faux dans tous les autres cas (pointeur vers un champ, une table ou une variable).

Si vous souhaitez connaître le nom de la variable pointée ou le numéro du champ, vous pouvez utiliser la commande [RESOLVE POINTER](../commands/resolve-pointer).

#### Exemple 

```4d
 var $ptr : Pointer
 ...
 If(Is nil pointer($ptr))
 End if
  // est équivalent à
 If($ptr=Null)
 End if
```

#### Voir aussi 

[Is a variable](../commands/is-a-variable)  
[RESOLVE POINTER](../commands/resolve-pointer)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 315 |
| Thread safe | yes |


