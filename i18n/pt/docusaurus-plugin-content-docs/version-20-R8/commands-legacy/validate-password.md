---
id: validate-password
title: Validate password
slug: /commands/validate-password
displayed_sidebar: docs
---

<!--REF #_command_.Validate password.Syntax-->**Validate password** ( *refUsuario* ; *senha* {; *digest*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Validate password.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refUsuario | Integer, Text | &#8594;  | ID de usuário |
| senha | Text | &#8594;  | Senha não criptografada |
| digest | Boolean | &#8594;  | Senha digest = True, Senha texto plano (por padrão) = False |
| Resultado | Boolean | &#8592; | TRUE= senha válida; FALSE = senha inválida |

<!-- END REF-->

#### Descrição 

Validate password retorna True se a cadeia passada em *senha* for a senha para a conta de usuário cujo número de referência é passado em *refUsuario*.  
  
O parâmetro opcional *digest* indica se o parâmetro *senha* contém uma senha em texto plano ou na senha em forma hash (modo digest):
* Se passar **True**, indica que o parâmetro *senha* contém uma senha em forma hash (modo digest),
* Se passar **False** ou omite este parâmetro, indica que *senha* contém uma senha em texto plano.

Este parâmetro é particularmente útil quando se utilizam métodos base de autenticação, em particular o [On 4D Mobile Authentication database method](on-4d-mobile-authentication-database-method.md).

O comando é atrasado com o objetivo de evitar ataques de força bruta (flooding), em outras palavras, tentativas de múltiplas combinações de nomes de usuário/senha. Como resultado, depois da quarta chamada a este comando, não se executa por um período de 10 segundos. Este atraso é global a estação de trabalho.

#### Exemplo 1 

O exemplo verifica se a senha do usuário “Hardy” for “Laurel”: 

```4d
 GET USER LIST(atNomeUsuario;aRefUsuario)
 $vlElem:=Find in array(atNomeUsuario;"Hardy")
 If($vlElem>0)
    If(Validate password(aRefUsuario{$vlElem};"Laurel"))
       ALERT("Sim")
    Else
       ALERT("Erro")
    End if
 Else
    ALERT("Nome de usuário desconhecido")
 End if
```

#### Exemplo 2 

No [On 4D Mobile Authentication database method](on-4d-mobile-authentication-database-method.md), você pode provar um pedido de conexão (utilizando os usuários 4D da base). Pode escrever:

```4d
 $0:=Validate password($1;$2;$3)
```

#### Ver também 

[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  
[WEB Validate digest](web-validate-digest.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 638 |
| Thread-seguro | &cross; |


