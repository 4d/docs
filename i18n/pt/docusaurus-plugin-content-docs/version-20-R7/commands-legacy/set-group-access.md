---
id: set-group-access
title: SET GROUP ACCESS
slug: /commands/set-group-access
displayed_sidebar: docs
---

<!--REF #_command_.SET GROUP ACCESS.Syntax-->**SET GROUP ACCESS** {( *grupos* )}<!-- END REF-->
<!--REF #_command_.SET GROUP ACCESS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| grupos | Collection | &#8594;  | Nome dos grupos ao qual a conta de usuário 4D deve pertencer durante a sessão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET GROUP ACCESS.Summary-->O comando **SET GROUP ACCESS** modifica o nível de filiação da conte de usuário 4D para a sesão atual.<!-- END REF--> Restabelece toda filiação a um grupo anterior e define as novas filiações aos *grupos* listados.

**Nota:**

* o alcance desse comando é a sessão atual. Chamar a [CHANGE CURRENT USER](change-current-user.md) depois, por exemplo, restabeleceria as filiações definidas.
* esse comando pode ser chamado apenas de 4D remote ou aplicações monousuário 4D . Não é permitido no 4D Server.

Passe no parâmetro *grupos* uma coleção de nomes de grupo existentes aos que deve pertenecer à conta de usuário 4D (se não existir um nome de grupo, se ignora). Se passar uma coleção vazia, a conta de usuário 4D já não pertencerá a nenhum grupo.

Se omitir o parâmetro *grupos*, as filiações da conta de usuário 4D são restabelecidas às filiações de grupo armazenadas no disco.

**Nota:**   
quando uma filiação grupal oferece acesso a uma funcionalidade "serializada" (por exemplo, um plug-in), se utilizar uma licença correspondente e permanecerá anexa à conta de usuário 4D até o final da sessão, mesmo se chamar o comando **SET GROUP ACCESS** e é cancelado ao se chamar ao grupo.

#### Exemplo 

Se quiser promover o usuário atual aos grupos "admin" e "plugins" durante a sessão:

```4d
 $groups:=New collection("admin";"plugins")
 SET GROUP ACCESS($groups)
```

#### Ver também 

[Get group access](get-group-access.md)  
[Get plugin access](get-plugin-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  
[SET USER ALIAS](set-user-alias.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1737 |
| Thread-seguro | &check; |
| Proibido no servidor ||


