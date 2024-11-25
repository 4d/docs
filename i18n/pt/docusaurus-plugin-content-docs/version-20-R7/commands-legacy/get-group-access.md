---
id: get-group-access
title: Get group access
slug: /commands/get-group-access
displayed_sidebar: docs
---

<!--REF #_command_.Get group access.Syntax-->**Get group access** : Collection<!-- END REF-->
<!--REF #_command_.Get group access.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; | Coleção de nomes de grupos ao qual o usuário pertence |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get group access.Summary-->O comando **Get group access** devolve às filiações da conta de usuário 4D para a sessão atual.<!-- END REF--> Se o usuário não pertencer a nenhum grupo na sessão, se devolver uma coleção vazia.

**Valor devolvido** 

Coleção de strings: nomes de grupos aos que pertence a conta de usuário 4D.

#### Exemplo 

Se qusier verificar se o usuário atual pertence ao grupo "plugins":

```4d
 $groups:=Get group access
 If($groups.countValues("plugins")#0) //o usuário pertence ao grupo
    ... //
 End if
```

#### Ver também 

[SET GROUP ACCESS](set-group-access.md)  