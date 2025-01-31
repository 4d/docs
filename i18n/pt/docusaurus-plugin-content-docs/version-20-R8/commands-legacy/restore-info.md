---
id: restore-info
title: RESTORE INFO
slug: /commands/restore-info
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE INFO.Syntax-->**RESTORE INFO** ( *seletor* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.RESTORE INFO.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seletor | Integer | &#8594;  | Tipo de informação a ser obtida |
| info1 | Integer, Date | &#8592; | Valor 1 do seletor |
| info2 | Text, Time | &#8592; | Valor 2 do seletor |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESTORE INFO.Summary-->O comando RESTORE INFO permite obter informações relacionadas com a última restauração automática da base de dados.<!-- END REF-->

Passe o tipo de informação a obter em *seletor*. É possível utilizar uma das constantes a seguir, localizadas no tema “Backup and Restore”:

| Constante           | Tipo          | Valor |
| ------------------- | ------------- | ----- |
| Last restore date   | Inteiro longo | 0     |
| Last restore status | Inteiro longo | 2     |

O tipo e o conteúdo dos parâmetros *info1* e *info2* dependem do valor do *seletor*.  
• Se *seletor* \= 0 (Last Restore Date), *info1* retorna a data e *info2* a hora da última restauração automática da base de dados.   
• Se *seletor* \= 2 (Last Restore Status), *info1* retorna o número e *info2* o texto do estado da última restauração automática da base de dados. 

**Nota:** este comando não leva em conta restaurações manuais da base de dados.

#### Ver também 

[RESTORE](restore.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 889 |
| Thread-seguro | &cross; |


