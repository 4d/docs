---
id: web-validate-digest
title: WEB Validate digest
slug: /commands/web-validate-digest
displayed_sidebar: docs
---

<!--REF #_command_.WEB Validate digest.Syntax-->**WEB Validate digest** ( *nomeUsuario* ; *senha* ) : Boolean<!-- END REF-->
<!--REF #_command_.WEB Validate digest.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeUsuario | Text | &#8594;  | Nome do usuário |
| senha | Text | &#8594;  | Senha de usuário |
| Resultado | Boolean | &#8592; | True = Autenticação OK; False = autenticação falha |

<!-- END REF-->

## Descrição 

<!--REF #_command_.WEB Validate digest.Summary-->O comando WEB Validate digest permite verificar a validez da informação de identificação (nome e senha) fornecida por um usuário que se conecta ao servidor web.<!-- END REF--> Este comando deve ser utilizado no *On Web Authentication Database Method* no contexto de uma autenticação web em modo Digest (ver a seção *Conexões de Segurança*).  

Passe nos parâmetros *nomeUsuario* e *senha*, a informação de identificação do usuário armazenada localmente. O comando utiliza esta informação para gerar um valor que se compare com a informação enviada pelo navegador web.  
  
Se os valores forem idênticos, o comando retorna True. Do contrário, retorna False.  
  
Pode utilizar este mecanismo para administrar e manter por programação seu próprio sistema de acesso seguro ao servidor web. Note que a validação Digest não pode ser usado em conjunto com as senhas 4D.  
  
**Nota**: Se o navegador não compatível a autenticação Digest, um erro é retornado (erro de autenticação).

## Exemplo 

Exemplo de método de base On Web Authentication em modo Digest: 

```4d
  // Método de banco On Web Authentication
 #DECLARE($url : Text ; $http : Text ; $ipBrowser : Text ; $ipServer : Text ;\ $user : Text ; $pw : Text) -> $result : Boolean

 var $usuario : Text
 var $0 : Boolean
 $result:=False
 $usuario:=$5
  //Por razoes de segurança, recusar os nomes que contenham @
 If(WithWildcard($usuario))
    $result:=False
  //O método WithWildcard é descrito na seção "Método de banco On Web Authentication"
 Else
    QUERY([WebUsers];[WebUsers]Usuario=$usuario)
    If(OK=1)
       $result:=Validate Digest Web Password($usuario;[WebUsers]senha)
    Else
       $result:=False //Usuario inexistente
    End if
 End if
```

## Ver também 

[Generate digest](generate-digest.md)  
[Validate password](validate-password.md)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 946 |
| Thread-seguro | &check; |


