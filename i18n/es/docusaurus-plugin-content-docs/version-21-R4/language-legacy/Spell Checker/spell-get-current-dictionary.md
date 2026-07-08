---
id: spell-get-current-dictionary
title: SPELL Get current dictionary
slug: /commands/spell-get-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL Get current dictionary.Syntax-->**SPELL Get current dictionary**  : Integer<!-- END REF-->
<!--REF #_command_.SPELL Get current dictionary.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | ID del diccionario utilizado para la corrección ortográfica |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.SPELL Get current dictionary.Summary-->El comando **SPELL Get current dictionary** devuelve el número de ID del diccionario que está siendo utilizado.<!-- END REF-->

## Ejemplo 

Queremos mostrar el lenguaje del diccionario actual: 

```4d
  // Lista de los diccionarios cargados
 SPELL GET DICTIONARY LIST($IDs_al;$Codes_at;$Names_at)
 $curLangCode:=SPELL Get current dictionary
 $countryName:=$Names_at{Find in array($IDs_al;$curLangCode)}
  // Mostrar mensaje
 ALERT("Diccionario actual: "+$countryName) // Español
```

## Ver también 

[SPELL SET CURRENT DICTIONARY](../commands/spell-set-current-dictionary)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1205 |
| Hilo seguro | no |


