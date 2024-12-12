---
id: spell-get-dictionary-list
title: SPELL GET DICTIONARY LIST
slug: /commands/spell-get-dictionary-list
displayed_sidebar: docs
---

<!--REF #_command_.SPELL GET DICTIONARY LIST.Syntax-->**SPELL GET DICTIONARY LIST** ( *lengID* ; *lengArchivos* ; *lengNoms* )<!-- END REF-->
<!--REF #_command_.SPELL GET DICTIONARY LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lengID | Integer array | &#8592; | IDs únicos de los lenguajes |
| lengArchivos | Text array | &#8592; | Nombres de los archivos de lenguaje instalados |
| lengNoms | Text array | &#8592; | Nombres locales de los lenguajes |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SPELL GET DICTIONARY LIST.Summary-->El comando **SPELL GET DICTIONARY LIST** devuelve en los arrays *lengID*, *lengArchivos* y *lengNoms*, los IDs, los nombres de archivos y los nombres de lenguajes correspondientes a los archivos de diccionarios Hunspell instalados en el equipo.<!-- END REF-->  
  
**Nota**: para mayor información sobre los diccionarios Hunspell, consulte la sección *Corrección ortográfica* en el *Manual de Diseño*.  

* *lengID* recibe los números de ID generados automáticamente y utilizados con el comando [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).  
Note que los IDs son únicos y basados en los nombres de los archivos. Este comando es útil principalmente en la fase de desarrollo; no tiene que regenerar los IDs cada vez que la base se ejecuta.
* *lengArchivos* recibe los nombres de los archivos de diccionarios instalados en la máquina.
* *lengNoms* recibe los nombres de los lenguajes expresados en el lenguaje actual de la aplicación. Por ejemplo, para un diccionario francés, el valor "français (France)" será devuelto en una máquina configurada en francés y "French (France)" en un sistema inglés. El nombre del lenguaje es seguido por "- Hunspell". Este campo sólo es válido para los archivos "conocidos" por 4D. Para los archivos no conocidos (por ejemplo, archivos personalizados), se devuelve el nombre "N/A - Hunspell". Este principio no le impide utilizar el diccionario (si el archivo correspondiente es válido), el ID devuelto puede ser pasado al comando [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).

#### Ejemplo 

Usted pone "fr-classic+reform1990.aff" y "fr-classic+reform1990.dic" como también "fr-dentist.aff" y "fr-dentist.dic" en el directorio Hunspell:

```4d
 ARRAY LONGINT($langID;0)
 ARRAY TEXT($dicName;0)
 ARRAY TEXT($langDesc;0)
 SPELL GET DICTIONARY LIST($langID;$dictName;$langDesc)
```

| **$langID** | **$dictName**         | **$langDesc**              |
| ----------- | --------------------- | -------------------------- |
| 65536       | en\_GB                | English (UK)               |
| 65792       | en\_US                | English (USA)              |
| 131072      | de\_DE                | German (Germany)           |
| 196608      | es\_ES                | Spanish                    |
| 262144      | fr\_FR                | French (France)            |
| 589824      | nb\_NO                | Norwegian Bokmal (Norway)  |
| 1074036166  | fr-classic+reform1990 | French (France) - Hunspell |
| 1073901273  | fr-dentist            | No description - Hunspell  |

#### Ver también 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  