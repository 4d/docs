---
id: wp-insert-formula
title: WP INSERT FORMULA
slug: /WritePro/commands/wp-insert-formula
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT FORMULA.Syntax-->**WP INSERT FORMULA** ( *objTarget* ; *formula* ; *modo* {; *actRango*} )<!-- END REF-->
<!--REF #_command_.WP INSERT FORMULA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| formula | Object | &#8594;  | Objeto fórmula |
| modo | Number | &#8594;  | Modo de inserción |
| actRango | Number | &#8594;  | Incluye o excluye el contenido insertado dentro del rango |

<!-- END REF-->

## Descripción 

<!--REF #_command_.WP INSERT FORMULA.Summary-->El comando **WP INSERT FORMULA** inserta una *formula* en *objTarget* de acuerdo con el *modo* de inserción especificado.<!-- END REF-->

En el parámetro *objTarget*, puede pasar:

* un rango, o
* un elemento (tabla / línea / celda(s) / párrafo / cuerpo / encabezado / pie de página / sección / subsección / imagen en línea), o
* un documento 4D Write Pro.

En el parámetro *formula*, pase la fórmula 4D a evaluar. Puede pasar:

* o bien un [objeto fórmula](https://developer.4d.com/docs/API/FunctionClass#formula-objects) creado por el comando [**Formula**](https://developer.4d.com/docs/API/FunctionClass#formula) o [**Formula from string**](https://developer.4d.com/docs/API/FunctionClass#formula-from-string),
* o un objeto que contenga dos propiedades:  

| **Propiedad** | **Tipo** | **Descripción**                                                                                                                                                                                                                                                                    |  
| ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| nombre        | Cadena   | Nombre a mostrar para la fórmula en el documento                                                                                                                                                                                                                                   |  
| fórmula       | Objeto   | El [objeto fórmula](https://developer.4d.com/docs/API/FunctionClass#formula-objects) creado por el comando [**Formula**](https://developer.4d.com/docs/API/FunctionClass#formula) o [**Formula from string**](https://developer.4d.com/docs/API/FunctionClass#formula-from-string) |  
Cuando se utiliza un objeto con un *nombre* de fórmula, este nombre se muestra en el documento en lugar de la referencia de fórmula cuando las fórmulas se muestran como referencia, y en el consejo de fórmula cuando se muestran como valor o símbolos. Si la propiedad *nombre* contiene una cadena vacía o se omite, se elimina del objeto y la fórmula se muestra por defecto. Para más información, consulte la página *Gestión de fórmulas*.

En el parámetro *modo*, pase una de las siguientes constantes para indicar el modo de inserción que se utilizará:

| Constante  | Tipo         | Valor | Comentario                                 |
| ---------- | ------------ | ----- | ------------------------------------------ |
| wk append  | Entero largo | 2     | Inserta contenidos al final del rango      |
| wk prepend | Entero largo | 1     | Insertar contenidos al principio del rango |
| wk replace | Entero largo | 0     | Remplazar el contenido de la página        |

* Si *objTarget* es un rango, puede utilizar el parámetro opcional *actRango* para pasar una de las siguientes constantes para especificar si la *formula* insertada se incluye o no en el rango resultante:  
    
| Constante             | Tipo         | Valor | Comentario                                                            |  
| --------------------- | ------------ | ----- | --------------------------------------------------------------------- |  
| wk exclude from range | Entero largo | 1     | Contenidos insertados no incluidos en el rango actualizado            |  
| wk include in range   | Entero largo | 0     | Contenido insertado incluido en el rango actualizado (predeterminado) |  
    
Si no pasa un parámetro *actRango*, de forma predeterminada la *formula* insertada se incluye en el rango resultante.
* Si *objTarget* no es un rango, se ignora *actRango*.

**Nota:** tenga en cuenta que, cuando se llama, el objeto fórmula se evalúa dentro del contexto de la base de datos o del componente que lo creó.

## Ejemplo 1 

Para reemplazar todas las fórmulas de fecha actuales con cadenas formateadas:

```4d
 var $_formulas : Collection
 var $find;$newFormula : Object
 
  // define la fórmula a encontrar
 $find:=Formula(Current date)
 
  // define la fórmula de reemplazo
 $newFormula:=Formula(String(Current date;System date long))
 
  // busca todas las fórmulas en el documento
 $_formulas:=WP Get formulas(WriteProArea)
 
  // consulta la colección de WP Get formulas
 $_formulas:=$_formulas.query("formula.source =:1";$find.source)&NBSP;&NBSP;
 
  // luego reemplaza cada fórmula
 For each($formula;$_formulas)
    WP INSERT FORMULA($formula.range;$newFormula;wk replace)
 End for each
```

## Ejemplo 2 

Desea utilizar un nombre de fórmula para el nombre del cliente:

```4d
  //añade algunos datos
 $data:=New object("customer";New object("lastname";"Smith";"firstname";"John"))
 WP SET DATA CONTEXT(WPArea;$data)
 
  //crea un objeto fórmula con un nombre
 $o:=New object
 $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)
 $o.name:="Customer name"
 
  //inserta como texto
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP SET TEXT($range;"Dear ";wk append)
 WP INSERT FORMULA($range;$o;wk append)
```

Resultado:

![](../../assets/en/WritePro/commands/pict6433508.en.png)

## Ver también 

*Gestión de fórmulas*  
[WP COMPUTE FORMULAS](wp-compute-formulas.md)  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  