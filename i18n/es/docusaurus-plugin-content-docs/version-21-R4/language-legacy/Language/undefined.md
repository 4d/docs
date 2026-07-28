---
id: undefined
title: Undefined
slug: /commands/undefined
displayed_sidebar: docs
---

<!--REF #_command_.Undefined.Syntax-->**Undefined** ( *expresion* : Expression ) : Boolean<!-- END REF-->
<!--REF #_command_.Undefined.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| expresion | Expression | &#8594; | Variable a probar |
| Resultado | Boolean | &#8592; | True = Variable indefinida False = Variable definida |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|16 R4|Modificado|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

#### Descripción 

<!--REF #_command_.Undefined.Summary-->Undefined devuelve True si el resultado de la evaluación de *expresion* no es un valor definido, y de lo contrario False.<!-- END REF-->

* Una variable está definida si se creó vía una directiva de compilación o si se le asigna un valor. Está indefinida en todos los demás casos. Si la base ha sido compilada, la función Undefined devuelve False para todas las variables.
* Una propiedad objeto no está definida si no existe en el objeto.
* Undefined siempre devuelve False a todas las referencias de campo.

**Nota:** tenga en cuenta que **Undefined** evalúa la *expresion*. Las siguientes declaraciones son equivalentes:  

```4d
 $result:=Undefined($exp)
  // mismo resultado:
 $result:=(Value type($exp)=Is undefined)
```

  
En algunos casos, es posible que no desee que se evalúe el parámetro (por ejemplo, cuando utiliza un puntero a una variable para verificar si la variable está definida). Entonces, debe escribir:  

```4d
 $result:=(Type($ptr->)=Is undefined) //true si la variable apuntada no existe (sin error)
```

#### Ejemplo 

Aquí están los diferentes resultados del comando [Undefined](../commands/undefined) así como también del comando [Null](../commands/null) aplicados a las propiedades de objetos, dependiendo del contexto:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 $undefined:=Undefined(vEmp.name) // False
 $null:=(vEmp.name=Null) //False
 
 $undefined:=Undefined(vEmp.children) // False
 $null:=(vEmp.children=Null) //True
 
 $undefined:=Undefined(vEmp.parent) // True
 $null:=(vEmp.parent=Null) //True
```

#### Ver también 

[CLEAR VARIABLE](../commands/clear-variable)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 82 |
| Hilo seguro | yes |


