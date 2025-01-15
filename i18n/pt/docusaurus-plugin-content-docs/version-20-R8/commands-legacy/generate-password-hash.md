---
id: generate-password-hash
title: Generate password hash
slug: /commands/generate-password-hash
displayed_sidebar: docs
---

<!--REF #_command_.Generate password hash.Syntax-->**Generate password hash** ( *senha* {; *opções*} ) : Text<!-- END REF-->
<!--REF #_command_.Generate password hash.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| senha | Text | &#8594;  | A senha do usuário. Só os primeiros 72 caracteres são usados |
| opções | Object | &#8594;  | Um objeto contendo opções |
| Resultado | Text | &#8592; | Retorna a senha hashed |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Generate password hash.Summary-->A função **Generate password hash** devolve um hash de *senha* seguro gerado por um algoritmo de hash criptográfico.<!-- END REF-->

Passe um valor de string no parâmetro *senha*. **Generate password hash** devolve uma string de hash para a senha. Múltiplos passes da mesma senha darão lugar a strings hash diferentes.

No objeto *opções*, passe as propriedades que se utilizarão ao gerar o hash da senha. Os valores disponíveis são mostrados na tabela abaixo:  

| **Propriedade** | **Tipo de valor** | **Descrição**                                                                                      | **Valor por padrão** |
| --------------- | ----------------- | -------------------------------------------------------------------------------------------------- | -------------------- |
| algorithm       | string            | algoritmo que se utilizará. Atualmente só se admite "bcrypt" (sensível a maiúsculas e minúsculas). | bcrypt               |
| cost            | numérico          | velocidade que se utilizará. Os valores admitidos para bcrypt estão entre 4 e 31.                  | 10                   |

**Nota**: se um valor no objeto de *opções* não for válido, se devolverá uma mensagem de erro e uma string vazia.

##### Gestão de erros 

The following errors may be returned. You can review an error with the [Last errors](last-errors.md)  and [ON ERR CALL](on-err-call.md) commands.  

| **Number** | **Message**                                                                                |
| ---------- | ------------------------------------------------------------------------------------------ |
| 850        | Password-hash: Unsupported algorithm.                                                      |
| 852        | Password-hash: Unavailable bcrypt cost parameter, please provide a value between 4 and 31. |

##### About bcrypt 

bcrypt is a password hashing function based on the Blowfish cipher. In addition to incorporating a salt to protect against rainbow table attacks, it's an adaptive function in which the iteration count can be increased to make it slower, so it remains resistant to brute-force attacks even with increasing computation power because it takes longer and becomes too time consuming and expensive.

#### Exemplo 

Este exemplo gera um hash de senha utilizando bcrypt com um fator de custo 4.

```4d
 var $password : Text
 var $hash : Text
 var $options : Object
 
 $options:=New object("algorithm";"bcrypt";"cost";4)
 $password:=Request("Por favor digite sua senha")
 
 $hash:=Generate password hash($password;$options)
 [Users]hash:=$hash
 SAVE RECORD([Users])
```

**Nota**: Múltiplas passadas da mesma senha resultará em diferentes strings hash. Esse é um comportamento normal para algoritmos como bcrypt, já que a melhor prática é criar um novo "sal" aleatório para cada hash. Veja a descrição [Verify password hash ](verify-password-hash.md) para um exemplo de como checar as senhas.

#### Ver também 

  
[Generate digest](generate-digest.md)  
[Verify password hash ](verify-password-hash.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1533 |
| Thread-seguro | &check; |


