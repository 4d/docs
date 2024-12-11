---
id: get-plugin-access
title: Get plugin access
slug: /commands/get-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.Get plugin access.Syntax-->**Get plugin access** ( *plugIn* ) : Text<!-- END REF-->
<!--REF #_command_.Get plugin access.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | Número de plug-in |
| Resultado | Text | &#8592; | Nome do grupo associado ao plug-in |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get plugin access.Summary-->O comando Get plugin access retorna o nome do grupo de usuários autorizados a utilizar o *plug-in* cujo número se passa no parâmetro *plugIn*.<!-- END REF--> Se nenhum grupo estiver associado ao plug-in, o comando retorna uma cadeia vazia ("").  

Passe no parâmetro *plugIn* o número do plug-in do que deseja conhecer o grupo de usuários associado. As licenças dos plug-ins incluem as licenças web e SOAP de 4D Client. Pode passar uma das seguintes constantes do tema *Licença disponível*:

| Constante              | Tipo          | Valor     |
| ---------------------- | ------------- | --------- |
| 4D Client SOAP license | Inteiro longo | 808465465 |
| 4D Client Web license  | Inteiro longo | 808465209 |
| 4D for OCI license     | Inteiro longo | 808465208 |
| 4D ODBC Pro license    | Inteiro longo | 808464946 |
| 4D View license        | Inteiro longo | 808465207 |
| 4D Write license       | Inteiro longo | 808464697 |

#### Ver também 

[SET GROUP ACCESS](set-group-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 846 |
| Thread-seguro | &check; |
| Proibido no servidor ||


