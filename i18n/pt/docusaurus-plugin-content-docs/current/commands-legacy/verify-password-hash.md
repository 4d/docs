---
id: verify-password-hash
title: Verify password hash
slug: /commands/verify-password-hash
displayed_sidebar: docs
---

<!--REF #_command_.Verify password hash.Syntax-->**Verify password hash**  ( *senha* ; *hash* ) : Boolean<!-- END REF-->
<!--REF #_command_.Verify password hash.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| senha | Text | &#8594;  | A senha do usuário. Só os primeiros 72 caracteres são usados |
| hash | Text | &#8594;  | O hash da senha |
| Resultado | Boolean | &#8592; | Retorna TRUE se a senha e o hash coincidirem, ou então retorna FALSE |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Verify password hash.Summary-->A função **Verify password hash** verifica que o hash dado coincida com a *senha* dada.<!-- END REF-->

Esta função compara a *senha* com um *hash* gerado pela função [Generate password hash](generate-password-hash.md).

##### Gestão de erros 

Os erros abaixo podem ser devolvidos. Pode revisar um erro com os comandos [Last errors](last-errors.md)  e [ON ERR CALL](on-err-call.md).  
  
| **Número** | **Mensagem**                                         |
| ---------- | ---------------------------------------------------- |
| 850        | Password-hash: Algoritmo não compatível.             |
| 851        | Password-hash: Falha na verificação de consistência. |

**Lembrete:** Só algoritmo bcrypt é compatível. Se seu hash não foi gerado usando bcrypt, um erro é retornado. 

#### Exemplo 

Este exemplo verifica um hash de senha previamente criado por [Generate password hash](generate-password-hash.md) e o armazena em uma tabela \[Users\] com uma nova senha digitada:

```4d
 var $password : Text
 $password:=Request("Por favor digite sua senha")
 
 If(Verify password hash($password;[Users]hash))
    ALERT("Boa senha")
 Else
    ALERT("Erro de senha")
 End if
```

**Nota:** A senha nunca é armazenada no disco, apenas o hash. Usando uma aplicação remota 4D, o hash poderia ser produzido no lado do cliente. Se ao invés disso quiser usar um front end baseado em JavaScript (ou similar) a melhor prática para segurança é criar o hash do lado do servidor. Deve usar uma conexão de rede TLS criptografada para segurança, já que isso exige a transferência de uma senha pela rede

#### Ver também 

  
[Generate password hash](generate-password-hash.md)  