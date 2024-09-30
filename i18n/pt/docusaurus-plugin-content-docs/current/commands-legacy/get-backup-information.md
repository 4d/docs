---
id: get-backup-information
title: GET BACKUP INFORMATION
slug: /commands/get-backup-information
displayed_sidebar: docs
---

<!--REF #_command_.GET BACKUP INFORMATION.Syntax-->**GET BACKUP INFORMATION** ( *seletor* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.GET BACKUP INFORMATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| seletor | Inteiro longo | &#x1F852; | Tipo de informação a ser obtida |
| info1 | Inteiro longo, Data | &#x1F858; | Valor 1 do seletor |
| info2 | Hora, String | &#x1F858; | Valor 2 do seletor |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET BACKUP INFORMATION.Summary-->O comando GET BACKUP INFORMATION permite obter informação relacionada com o último backup efetuado na base de dados.<!-- END REF-->

Passe o tipo de informação a se obter em *seletor*. É possível utilizar uma das constantes a seguir, localizadas no tema “*Backup*”:

| Constante               | Tipo          | Valor | Comentário                                                                                                                                                                                                           |
| ----------------------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Last backup date        | Inteiro longo | 0     | *info1* e *info2* devolvem respectivamente a data e a hora do último backup.                                                                                                                                         |
| Last backup information | Inteiro longo | 5     | *info1* devolve a última cópia de segurança em milissegundos (inteiro longo) e *info2* a última timestamp de inicio da cópia de segurança (string, ver os detalhes de formato no comando [Timestamp](timestamp.md)). |
| Last backup status      | Inteiro longo | 2     | *info1* devolve o número e *info2* o texto de estado da última cópia de segurança                                                                                                                                    |
| Next backup date        | Inteiro longo | 4     | *info1* devolve a data e *info2* a hora da próxima cópia de segurança programada                                                                                                                                     |

#### Ver também 

[RESTORE](restore.md)  