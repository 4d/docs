---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** : Boolean<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le système d'exploitation est macOS, sinon Faux |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|17|Créé|

</details>
</div>

#### Description 

<!--REF #_command_.Is macOS.Summary-->La commande **Is macOS** retourne Vrai si le système d'exploitation courant est macOS.<!-- END REF--> 

#### Exemple 

Vous voulez déterminer si le système d'exploitation courant est macOS :

```4d
 If(Is macOS)
    ALERT("C'est macOS")
 Else
    ALERT("Ce n'est pas macOS")
 End if
```

#### Voir aussi 

[System info](../commands/system-info)  
[Is Windows](../commands/is-windows)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1572 |
| Thread safe | yes |


