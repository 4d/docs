---
id: ldap-login
title: LDAP LOGIN
slug: /commands/ldap-login
displayed_sidebar: docs
---

<!--REF #_command_.LDAP LOGIN.Syntax-->**LDAP LOGIN** ( *url* ; *login* ; *senha* {; *digest*} )<!-- END REF-->
<!--REF #_command_.LDAP LOGIN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| url | Text | &#8594;  | URL do servidor LDAP ao qual vai conectar |
| login | Text | &#8594;  | Login do usuário |
| senha | Text | &#8594;  | Senha do login |
| digest | Integer | &#8594;  | 0 = envia senha em digest MD5 (padrão), 1 = envia senha sem criptografia |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LDAP LOGIN.Summary-->O comando**LDAP LOGIN** abre uma conexão somente leitura no servidor LDAP especificado pelo parâmetro *url* com os identificadores de *login* e *senha*.<!-- END REF--> Se for aceito pelo servidor, esta ligação é utilizada para todas as pesquisas de LDAP posteriormente introduzidas no processo atual até que o comando *RuntimeVLWinFolder* sejaé executado (ou até que o processo seja fechado).

Em *url*, passe a URL completa do servidor LDAP para se conectar, incluindo o esquema e o porto (389 por padrão). Este parâmetro tem de ser compatível com o [rfc2255](https://www.ietf.org/rfc/rfc2255.txt). 

Você pode abrir conexões seguras usando TLS usando uma *url* que começa com "ldaps" e usa um número de porta específico (por exemplo, "ldaps://svr.ldap.acme.com:1389") . O servidor LDAP deve ter um certificado SSL (pelo menos para Microsoft Active Directory). É altamente recomendável usar uma conexão TLS quando a senha for enviada em texto simples (veja abaixo).  
  
**Nota**: Se você passar uma string vazia no parâmetro *url*, o comando tentará conectar-se ao servidor LDAP pré-determinado disponível no domínio; (esta funcionalidade é concebida para fins de teste, por razões de desempenho não deve ser utilizada na produção). 

No *login*, passar a conta de usuário no servidor LDAP, e em *senha*, passe senha do usuário. Por padrão, o *login* pode ser uma das seguintes strings de início de sessão, dependendo da configuração do servidor LDAP:  

  
* um Distinguished Name (DN), por exemplo, "CN=John Smith,OU=users,DC=example,DC=com"
* um nome de usuário (CN), por exemplo, "CN = John Smith"
* endereço de e-mail, por exemplo "johnsmith@4d.fr"
* uma SAM-Account-Name, por exemplo "jsmith".
Repare que os valores aceitos para o *login* estão relacionados com o modo de transmissão da senha definido pelo parâmetro *digest*. Por exemplo, em uma configuração padrão do MS Active Directory:  
  
* Quando o modo de transmissão for LDAP password MD5, o único valor aceito para um início de sessão é a  SAM-Account-Name.
* Quando a senha de transmissão for LDAP password plain text (texto simples), o parâmetro de *login* pode ser DN, CN ou e-mail. Uma  SAM-Account-Name também é aceita, mas apenas quando é precedida pelo nome do domínio (por exemplo, "dc-acme.com/jsmith").
O parâmetro *digest* permite alterar a forma como a senha é transmitida através da rede. Você pode usar uma das seguintes constantes, localizado na edição *LDAP*:  
  
| Constante                | Tipo          | Valor | Comentário                                                 |
| ------------------------ | ------------- | ----- | ---------------------------------------------------------- |
| LDAP password MD5        | Inteiro longo | 0     | (padrão pré-determinado) Enviar senha criptografada em MD5 |
| LDAP password plain text | Inteiro longo | 1     | Envio de senha sem criptografia (conexão TLS recomendada)  |
  
  
Por padrão, a *senha* é transmitida em digest MD5\. Passe LDAP password plain text, se for necessário, por exemplo, se quer usar diferentes valores de tipo de início de sessão para o servidor LDAP. Em um ambiente de produção, recomendamos usar uma conexão TLS para a *url*.  
  
**Nota**: A autenticação com senha em branco permite introduzir no modo de conexão anônima (se estiver autorizado pelo servidor LDAP). No entanto, neste modo, você pode gerar erros se tentar executar qualquer operação que não for permitido nesta forma específica.  
  
Se os parâmetros de login forem válidos, uma conexão com o servidor LDAP abre no processo 4D. Em seguida, pode procurar e recuperar informações usando comandos LDAP.  
  
Não se esqueça de chamar o comando *RuntimeVLWinFolder* quando a conexão com o servidor LDAP não for mais necessária.

#### Exemplo 1 

Imagine que você quer se conectar a um servidor LDAP e fazer uma pesquisa:

```4d
 ARRAY TEXT($_tabAttributes;0)
 APPEND TO ARRAY($_tabAttributes;"cn")
 APPEND TO ARRAY($_tabAttributes;"phoneNumber")
 LDAP LOGIN("ldap://srv.dc.acme.com:389";"John Smith";"qrnSurBret2elburg")
 $vfound:=LDAP Search("OU=UO_Users,DC=ACME,DC=com";”cn=John Doe";LDAP all levels;$_tabAttributes)
 LDAP LOGOUT //não se esqueça de se desconectar
```

#### Exemplo 2 

Este exemplo tenta conectar-se a um aplicativo:

```4d
 ON ERR CALL("ErrHdlr") //gestão de erros
 errOccured:=False
 errMsg:=""
 If(ppBindMode=1) //se senha é modo por padrão
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password MD5)
 Else
    LDAP LOGIN(vUrlLdap;vUserCN;vPwd;LDAP password plain text)
 End if
 
 Case of
    :(Not(errOccured))
       ALERT("Agora está conectado a seu servidor LDAP.  ")
 
    :(errOccured)
       ALERT("Erros em seus parâmetros")
 End case
 
 LDAP LOGOUT
 ON ERR CALL("")
```

#### Ver também 

*LDAP*  
[LDAP LOGOUT](ldap-logout.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1326 |
| Thread-seguro | &check; |
| Proibido no servidor ||


