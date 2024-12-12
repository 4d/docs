---
id: set-user-alias
title: SET USER ALIAS
slug: /commands/set-user-alias
displayed_sidebar: docs
---

<!--REF #_command_.SET USER ALIAS.Syntax-->**SET USER ALIAS** ( *alias* )<!-- END REF-->
<!--REF #_command_.SET USER ALIAS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| alias | Text | &#8594;  | Alias ou apelido é o nome de usuário alternativo para a conta de usuário 4D ou "" para resetar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET USER ALIAS.Summary-->O comando **SET USER ALIAS** define um nome personalizado alternativo para usar ao invés do nome da conta de usuário 4D atual para a sessão atual.<!-- END REF--> O nome alternativo se conserva na memória e se aplica apenas ao usuário atual.

**Nota:** este comando só pode ser invocado desde aplicações 4D remotas ou 4D mono usuário. Não está permitido em 4D Server.

No parâmetro *alias* (nome alternativo), passe o nome alternativo que se mostrará ao invés do nome da conta de usuário 4D atual.

Quando for executado o comando, o *alias* é usado onde for devolvido ou mostrado a conta de usuário 4D atual, em particular nos comandos [Current user](current-user.md), [Process activity](../commands/process-activity.md) e [LOCKED BY](locked-by.md), ou o [ORDER BY FORMULA](order-by-formula.md) da janela de administração de 4D Server. Em ambientes cliente/servidor, este comando deve ser executado em aplicações remotas para que cada usuário se identifique no servidor, por exemplo, mediante o comando [Current user](current-user.md), mesmo se todas as aplicações remotas utilizam a mesma conta de usuário 4D.

Para eliminar o *alias* de usuário 4D atual, chame a **SET USER ALIAS**("").

**Nota**: ao chamar ao comando [CHANGE CURRENT USER](change-current-user.md) se restabelece o nome de alias para o usuário atual.

#### Exemplo 

Seus usuários se administran através de uma tabela personalizada e utilizam a mesma conta de usuário 4D. Em cada máquina cliente, pode executar:

```4d
 SET USER ALIAS([myUsers]userName)
```

#### Ver também 

[CHANGE CURRENT USER](change-current-user.md)  
[Current user](current-user.md)  
[SET GROUP ACCESS](set-group-access.md)  