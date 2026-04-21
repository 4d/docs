---
id: qr-count-columns
title: QR Count columns
slug: /commands/qr-count-columns
displayed_sidebar: docs
---

<!--REF #_command_.QR Count columns.Syntax-->**QR Count columns** ( *area* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.QR Count columns.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referencia del área |
| Resultado | Integer | &#8592; | Número de columnas en el área |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2003|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.QR Count columns.Summary-->El comando QR Count columns devuelve el número de columnas presentes en el *area* del informe rápido.<!-- END REF-->

Si pasa un número de *area* inválido, se genera el error -9850.

## Ejemplo 

El siguiente código permite añadir una columna adicional a la derecha de la última columna del área:

```4d
 $ColNb:=QR Count columns(MiArea)
 QR INSERT COLUMN(MiArea;$ColNb+1;->[Tabla 1]Campo2)
```

## Ver también 

[QR DELETE COLUMN](../commands/qr-delete-column)  
[QR INSERT COLUMN](../commands/qr-insert-column)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 764 |
| Hilo seguro | no |
| Modifica variables | error |


