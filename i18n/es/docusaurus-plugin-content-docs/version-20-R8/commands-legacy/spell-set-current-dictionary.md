---
id: spell-set-current-dictionary
title: SPELL SET CURRENT DICTIONARY
slug: /commands/spell-set-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Syntax-->**SPELL SET CURRENT DICTIONARY** ( *diccionario* )<!-- END REF-->
<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| diccionario | Integer, Text | &#8594;  | ID, Nombre o Código de lenguaje del diccionario a utilizar para la corrección ortográficaSi se omite = restablecer el diccionario por defecto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Summary-->El comando **SPELL SET CURRENT DICTIONARY** reemplaza el diccionario actual por el especificado en el parámetro *diccionario*.<!-- END REF--> El diccionario actual se utiliza para la corrección ortográfica integrada de 4D (para mayor información, consulte el *Manual de Diseño*) como también de 4D Write Pro. La modificación del diccionario actual repercute inmediatamente en todos los procesos de la base para la sesión, así como también en las áreas 4D Write Pro.   

4D utiliza el diccionario:

* bajo Windows, el diccionario Hunspell correspondiente al lenguaje de la aplicación,
* por defecto bajo macOS, el corrector ortográfico nativo.

**Nota**: bajo macOS, puede utilizar el diccionario Hunspell con la ayuda del comando [SET DATABASE PARAMETER](set-database-parameter.md). Para mayor información, consulte la sección *Configuración del corrector* en el manual de Diseño.

Puede utilizar el parámetro *diccionario* para cambiar el diccionario. Puede pasar:

* un número de identificación de diccionario Hunspell (devuelto por el comando [SPELL GET DICTIONARY LIST](spell-get-dictionary-list.md)),
* un nombre de diccionario Hunspell (que corresponde al nombre de archivo del diccionario Hunspell, con o sin la extensión),
* un código de lenguaje BCP 47, ISO 639-1 o ISO 639-2\. Por ejemplo, con el código de lenguaje BCP 47, "en-US" designa Inglés Americano y "en-GB" designa Inglés británico. Estos códigos son redirigidos internamente al diccionario actual correspondiente (Hunspell o nativo macOS).

**Nota de compatibilidad:** en versiones anteriores de 4D, se soportaron los diccionarios "Cordial". Por compatibilidad, aún es posible pasar un número de diccionario "Cordial" en el parámetro *diccionario* (valor o constante del tema "*Diccionarios*"). En este caso, sin embargo, el diccionario se redirige internamente a un diccionario Hunspell equivalente (o el diccionario nativo en OS X).

#### Variables y conjuntos del sistema 

Si el *diccionario* se carga correctamente, la variable sistema OK toma el valor 1; de lo contrario, toma el valor 0 y devuelve un error. 

#### Ejemplo 

Carga del diccionario "fr-classic" presente en la carpeta Hunspell:

```4d
 SPELL SET CURRENT DICTIONARY("fr-classic")
  // SPELL SET CURRENT DICTIONARY ("FR-classic.dic") es válido
```

#### Ver también 

[SPELL CHECKING](spell-checking.md)  
[SPELL Get current dictionary](spell-get-current-dictionary.md)  
[SPELL GET DICTIONARY LIST](spell-get-dictionary-list.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 904 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


