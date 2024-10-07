---
id: get-restore-information
title: GET RESTORE INFORMATION
slug: /commands/get-restore-information
displayed_sidebar: docs
---

<!--REF #_command_.GET RESTORE INFORMATION.Syntax-->**GET RESTORE INFORMATION** ( *seletor* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.GET RESTORE INFORMATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seletor | Inteiro longo | &#x1F852; | Tipo de informação a ser obtida |
| info1 | Inteiro longo, Data | &#x1F858; | Valor 1 do seletor |
| info2 | String, Hora | &#x1F858; | Valor 2 do seletor |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET RESTORE INFORMATION.Summary-->O comando GET RESTORE INFORMATION permite obter informações relacionadas com a última restauração automática da base de dados.<!-- END REF-->

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