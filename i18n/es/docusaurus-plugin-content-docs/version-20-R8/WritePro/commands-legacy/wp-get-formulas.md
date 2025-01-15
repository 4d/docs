---
id: wp-get-formulas
title: WP Get formulas
slug: /WritePro/commands/wp-get-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP Get formulas.Syntax-->**WP Get formulas** ( *objTarget* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get formulas.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| Resultado | Collection | &#8592; | Colección de fórmulas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get formulas.Summary-->El comando **WP Get formulas** devuelve una colección de todas las fórmulas definidas en *objTarget*.<!-- END REF-->

En el parámetro *objTarget*, puede pasar:

* un rango, o
* un elemento (tabla / línea / celda(s) / párrafo / cuerpo / encabezado / pie de página / sección / subsección / imagen en línea o anclada / caja de texto), o
* un documento 4D Write Pro.

**Nota:** cuando se pasa una sección en *objTarget*, sólo se devuelven las fórmulas imagen o las fórmulas de las cajas de texto ancladas a esta sección o a todas las secciones. Si están ancladas a una página o a la vista anidada, no se devuelven sus fórmulas. Pase el documento en *objTarget* para obtener todas las fórmulas de elementos anclados. 

**Valor devuelto**

**WP Get formulas** devuelve una colección de objetos fórmula, cada uno de los cuales contiene una o más de las siguientes propiedades:

| **Propiedad**    | **Tipo** | **Descripción**                                                                                                                                                                                                                                        |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \[ \].formula    | Objeto   | El texto de la fórmula está disponible a través de **\[ \].formula.source**. La fórmula es una **copia** de la fórmula que se encuentra en el objetivo. Si desea modificar la fórmula, debe volver a insertarla en el documento para tenerla en cuenta |
| \[ \].range      | Objeto   | Rango de la fórmula (no devuelto para fórmulas de imagen anclada)                                                                                                                                                                                      |
| \[ \].anchoredID | Texto    | ID de la imagen anclada (devuelta solo para fórmulas de imagen anclada)                                                                                                                                                                                |
| \[ \].name       | Texto    | Nombre de la fórmula, si se ha definido un nombre (no se devuelve en caso contrario). Los nombres pueden definirse utilizando [WP INSERT FORMULA](../commands/wp-insert-formula.md).                                                                               |
| \[ \].owner      | Objeto   | Documento 4D Write Pro                                                                                                                                                                                                                                 |

**Notas:**

* Si pasó una subsección como destino, se devuelven las fórmulas de la sección padre.
* Si se devuelven varias fórmulas, la colección se ordena con respecto al orden de las fórmulas en el destino, excepto los destinos de tipo documento y sección (cualquier orden en este caso).

#### Ejemplo 

Para obtener todas las fórmulas en un documento:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea)
```

Para obtener todas las fórmulas en la primera sección de un documento:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WP Get section(WriteProArea;1))
```

  
Para obtener las fórmulas de todas las imágenes ancladas en un documento:

```4d
 var $formulas : Collection
 $formulas:=WP Get formulas(WriteProArea).query("anchoredID # null")
```
  
  

#### Ver también 

*Gestión de fórmulas*  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get links](wp-get-links.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  