---
id: ob-remove
title: OB REMOVE
slug: /commands/ob-remove
displayed_sidebar: docs
---

<!--REF #_command_.OB REMOVE.Syntax-->**OB REMOVE** ( *objeto* : Object, Campo Object ; *propiedad* : Text )<!-- END REF-->
<!--REF #_command_.OB REMOVE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594; | Objeto estructurado |
| propiedad | Text | &#8594; | Nombre de la propiedad a eliminar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|15|Modificado|
|14|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.OB REMOVE.Summary-->El comando **OB REMOVE** elimina la *propiedad* del objeto de lenguaje designado por el parámetro *objeto*.<!-- END REF--> Este comando elimina la propiedad, así como su valor actual.  
  
*objeto* debe haber sido definido utilizando el comando *C\_OBJECT* o designar un campo objeto 4D.  
  
En el parámetro *propiedad*, pase la etiqueta de la propiedad a leer. Tenga en cuenta que el parámetro *propiedad* tiene en cuenta las mayúsculas y minúsculas.

## Ejemplo 

Usted quiere eliminar la propiedad "edad" de un objeto:

```4d
 var $Object : Object
 OB SET($Object;"nombre";"smith";"edad";42;"cliente";True)
  // $Object={"nombre":"smith","edad":42,"client":true}
 OB REMOVE($Object;"edad")
  // $Object={"nombre":"smith","cliente":true}
```

## Ver también 

[OB SET](../commands/ob-set)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1226 |
| Hilo seguro | yes |


