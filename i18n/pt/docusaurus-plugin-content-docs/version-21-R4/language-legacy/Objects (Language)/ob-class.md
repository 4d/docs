---
id: ob-class
title: OB Class
slug: /commands/ob-class
displayed_sidebar: docs
---

<!--REF #_command_.OB Class.Syntax-->**OB Class** ( *objeto* : Object ) : Object<!-- END REF-->
<!--REF #_command_.OB Class.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | Object | &#8594; | Objeto cuja classe vai ser retornada |
| Resultado | Null, Object | &#8592; | Classe do objeto |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|18 R3|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.OB Class.Summary-->O comando **OB Class** devolve a classe de *objeto* passado no parâmetro.<!-- END REF--> Em 4D, todos os objetos são herdados do objeto classe. Se *objeto* não for um objeto existente, **OB Class** devolve null.

## Exemplo 

Imagine que criou umaa classe Polygon:

```4d
  //Classe: Polygon
 
 Class constructor( $width : Integer ; $height : Integer)
 This.area:=$width*$height
```

Depois, em um método, pode escrever:

```4d
 var $poly;$class : Object
 $poly:=cs.Polygon.new(4;3)
 
 $class:=OB Class($poly)
  //$class contains Class: Polygon
```

## Ver também 

[OB Instance of](../commands/ob-instance-of)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1730 |
| Thread-seguro | yes |


