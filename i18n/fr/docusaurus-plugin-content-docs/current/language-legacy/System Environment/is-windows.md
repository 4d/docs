---
id: is-windows
title: Is Windows
slug: /commands/is-windows
displayed_sidebar: docs
---

<!--REF #_command_.Is Windows.Syntax-->**Is Windows** : Boolean<!-- END REF-->
<!--REF #_command_.Is Windows.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si le système d'exploitation est Windows, Sinon Faux |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|17|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Is Windows.Summary-->La commande **Is Windows** retourne Vrai si le système d'exploitation courant est Windows.<!-- END REF-->

## Exemple 

Vous voulez savoir si le système d'exploitation courant est Windows :

```4d
 If(Is Windows)
    ALERT("C'est Windows")
 Else
    ALERT("Ce n'est pas Windows")
 End if
```

## Voir aussi 

[System info](../commands/system-info)  
[Is macOS](../commands/is-macos)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1573 |
| Thread safe | yes |


