---
id: import-structure
title: IMPORT STRUCTURE
slug: /commands/import-structure
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT STRUCTURE.Syntax-->**IMPORT STRUCTURE** ( *estruturaXML* )<!-- END REF-->
<!--REF #_command_.IMPORT STRUCTURE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| estruturaXML | Text | &#8594;  | Definição XML da estrutura da base 4D |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.IMPORT STRUCTURE.Summary-->O comando **IMPORT STRUCTURE** importa, na base atual, a definição XML da estrutura da base 4D passada no parâmetro *estruturaXML*.<!-- END REF--> 

El parámetro *estructuraXML* debe contener una definición válida de estructura 4D en formato XML. Hay varias maneras de obtener una definición de estructura válida:

* Ejecutar el comando [EXPORT STRUCTURE](export-structure.md),
* Seleccionar el comando de menú **Exportar >** **Definición de estructura al archivo XML...** disponible en la interfaz del modo Diseño de 4D (ver *Exportar e importar definições de estrutura*),
* Crear o modificar un archivo XML personalizado basado en los DTD públicos que se encuentran en la carpeta "DTD" de la aplicación 4D.

La definición de estructura importada se agrega a la estructura que ya está abierta y se muestra en el editor de estructura estándar de 4D entre las tablas existentes (si las hubiera). Si una tabla importada tiene el mismo nombre que una local, se genera un error y la operación de importación se cancela. 

Puede crear una nueva base mediante la importación de una definición de estructura en una base vacía.

Se genera un error si la estructura está en modo compilado y/o de sólo lectura.

Este comando no se puede llamar desde una aplicación 4D que funciona en modo remoto.

#### Nota para lançamento 

Dado que este comando modifica a estrutura do banco de dados, não pode ser utilizado no contexto de uma aplicação empacotada de apenas leitura (arquivo .4dc instalado na pasta *Arquivos de programa* ou arquivo .4dz).

#### Exemplo 

Você deseja importar uma definição de estrutura guardada na base de dados atual:

```4d
 $struc:=Document to text("c:\\4DStructures\\Employee.xml")
 IMPORT STRUCTURE($struc)
```

#### Ver também 

[EXPORT STRUCTURE](export-structure.md)  