---
id: mobile-app-refresh-sessions
title: MOBILE APP REFRESH SESSIONS
slug: /commands/mobile-app-refresh-sessions
displayed_sidebar: docs
---

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Syntax-->**MOBILE APP REFRESH SESSIONS**<!-- END REF-->
<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MOBILE APP REFRESH SESSIONS.Summary-->O comando **MOBILE APP REFRESH SESSIONS** comprova todos os arquivos de sessão da aplicação móvel localizados na pasta MobileApps do servidor e atualiza o conteúdo de sessão existente na memória para todo arquivo editado.<!-- END REF-->

Este comando está criado para ser utilizado por 4D para os desenvolvedores de iOS para "forçar" a recarga da informação da sessão do usuário depois de terem editado seus arquivos locais. Por exemplo, se uma sessão necessitar ser reiniciado, pode eliminar o arquivo de sessão e depois chamar a **MOBILE APP REFRESH SESSIONS**. Para saber mais sobre as sessões de aplicações móveis, consulte a [documentação de 4D móvel](https://developer.4d.com/go-mobile).

O comando verifica o cumprimento de cada arquivo de sessão na pasta MobileApps (sintaxe json, esquema json, dados de sessão). Se o arquivo for compatível e tiver sido modificado, a sessão correspondente é atualizada na memória (se existir) com os conteúdos editados.

Se um arquivo de sessão não for válido ou tiver sido eliminado, a sessão correspondente é eliminada da memória.

O comando pode devolver um dos erros abaixo, que pode ser manejado através dos comandos [ON ERR CALL](on-err-call.md) e [Last errors](last-errors.md) :

| **Nome do componente** | **Código de erro** | **Descrição**                                               |
| ---------------------- | ------------------ | ----------------------------------------------------------- |
| mobi                   | 1                  | A localização do arquivo json não coincide com seu conteúdo |
| mobi                   | 2                  | O arquivo json não está formado corretamente                |
| mobi                   | 3                  | O arquivo json não valida o esquema json                    |
| mobi                   | 4                  | O token de conexão não cumpre com a informação atual        |

#### Exemplo 

Se quiser resetar todas as sessões atuais para todas as aplicações móveis:

```4d
 var $sessionsPath : Text
 $sessionsPath:=Get 4D folder(MobileApps folder)
 DELETE FOLDER(sessionsPath;Delete with contents)
 MOBILE APP REFRESH SESSIONS
```

#### Ver também 

[On Mobile App Authentication database method](on-mobile-app-authentication-database-method.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1596 |
| Thread-seguro | &check; |
| Proibido no servidor ||


