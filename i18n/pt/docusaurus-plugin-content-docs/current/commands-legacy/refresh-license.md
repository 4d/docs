---
id: refresh-license
title: Refresh license
slug: /commands/refresh-license
displayed_sidebar: docs
---

<!--REF #_command_.Refresh license.Syntax-->**Refresh license** : Object<!-- END REF-->
<!--REF #_command_.Refresh license.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Status object |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Refresh license.Summary-->O comando **Refresh license** atualiza a licença atual de servidor 4D.<!-- END REF--> Conecta o servidor com o banco de dados de clientes 4D e ativa automaticamente qualquer licença nova ou atualizada (por exemplo, clientes comprados adicionais) relacionada com a licença atual.

**Objeto devolvido**

O objeto devolvido por **Refresh license** contém as propriedades abaixo:

| **Propriedad**e | **Tipo** | **Descrição**                                                  |
| --------------- | -------- | -------------------------------------------------------------- |
| success         | booleano | True se a ação de atualização for exitosa, do contrário False. |
| status          | número   | Código de estado                                               |
| statusText      | texto    | Descrição de estado                                            |
| tips            | texto    | Sugestões para resolver o erro.                                |

**Nota**: este comando só pode ser executado em 4D Server. Se o método que chamar ao comando for executado localmente em um cliente remoto ou em um só usuário 4D, **Refresh license** não faz nada.

#### Exemplo 

Se quiser atualizar sua licença e receber uma mensagem quando se completar:

```4d
  // Método ao executar no servidor
 var $res : Object
 $res:=Refresh license
 If($res.success)
    ALERT("Success")
 Else
    ALERT($res.statusText)
 End if
```


#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1336 |
| Thread-seguro | &cross; |


