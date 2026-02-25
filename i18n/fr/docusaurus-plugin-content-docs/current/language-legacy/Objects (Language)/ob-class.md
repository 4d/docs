---
id: ob-class
title: OB Class
slug: /commands/ob-class
displayed_sidebar: docs
---

<!--REF #_command_.OB Class.Syntax-->**OB Class** ( *objet* ) : any<!-- END REF-->
<!--REF #_command_.OB Class.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet dont la classe doit être retournée |
| Résultat | Null, Object | &#8592; | Classe de l'objet |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|18 R3|Créé|

</details>
</div>

## Description 

<!--REF #_command_.OB Class.Summary-->La commande **OB Class** retourne la classe de l'*objet* passé en paramètre.<!-- END REF--> Dans 4D, tous les objets sont hérités de l'objet classe. Si *objet* est un objet inexistant, **OB Class** retourne null. 

## Exemple 

Vous avez créé la classe Polygone :

```4d
  //Classe : Polygone
 Class constructor( $width : Integer ; $height : Integer)
 This.area:=$width*$height
```

Puis, dans une méthode, vous pouvez saisir :

```4d
 var $poly;$class : Object
 $poly:=cs.Polygone.new(4;3)
 $class:=OB Class($poly) //$class contient Classe : Polygone
```

## Voir aussi 

[OB Instance of](../commands/ob-instance-of)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1730 |
| Thread safe | yes |


