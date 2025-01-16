---
id: set-plugin-access
title: SET PLUGIN ACCESS
slug: /commands/set-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.SET PLUGIN ACCESS.Syntax-->**SET PLUGIN ACCESS** ( *plugIn* ; *grupo* )<!-- END REF-->
<!--REF #_command_.SET PLUGIN ACCESS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| plugIn | Integer | &#8594;  | Número de plug-in |
| grupo | Text | &#8594;  | Nome do grupo associado ao plug-in |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET PLUGIN ACCESS.Summary-->O comando SET PLUGIN ACCESS permite especificar por programação o grupo de usuários autorizado a utilizar cada plug-in com “número de série” instalado na base.<!-- END REF--> Ao fazer isto, pode administrar a repartição das licenças dos plug-ins.

**Nota**: esta operação também pode ser realizada em modo Desenho no editor de grupos.  
  
Passe no parâmetro *plugIn* o número do plug-in a associar um grupo de usuários. As licenças de plug-ins incluem as licenças web e SOAP de 4D Client. Pode passar uma das seguintes constantes do tema “*Licença disponível*”:

| Constante              | Tipo          | Valor     |
| ---------------------- | ------------- | --------- |
| 4D Client SOAP license | Inteiro longo | 808465465 |
| 4D Client Web license  | Inteiro longo | 808465209 |
| 4D for OCI license     | Inteiro longo | 808465208 |
| 4D ODBC Pro license    | Inteiro longo | 808464946 |
| 4D View license        | Inteiro longo | 808465207 |
| 4D Write license       | Inteiro longo | 808464697 |

Passe no parâmetro *grupo* o nome do grupo cujos usuários estão autorizados a utilizar o plug-im.

**Nota**: 

* apenas um grupo por vez pode utilizar um plug-in. Quando este comando for executado, se outro grupo tiver os direitos de acesso ao plug-in, se perde este privilégio.
* As licenças utilizadas permanecerão anexadas às contas de usuário 4D em *grupo* durante toda a sessão, mesmo se mudar de filiação ou se o *grupo* perder seus direitos de acesso de plug-in.

#### Ver também 

[Get plugin access](get-plugin-access.md)  
[PLUGIN LIST](plugin-list.md)  
[SET GROUP ACCESS](set-group-access.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 845 |
| Thread-seguro | &cross; |


