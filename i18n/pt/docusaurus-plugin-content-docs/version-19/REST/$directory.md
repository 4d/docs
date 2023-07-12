---
id: directory
title: '$directory'
---

The directory handles user access through REST requests.


## $directory/login

Opens a REST session on your 4D application and logs in the user.

### Descrição
Use `$directory/login` to open a session in your 4D application through REST and login a user. You can also modify the default 4D session timeout.

All parameters must be passed in **headers** of a POST method:

| Chave de cabeçalho | Valor do cabeçalho                                                                     |
| ------------------ | -------------------------------------------------------------------------------------- |
| username-4D        | Usuário - Não obrigatório                                                              |
| password-4D        | Palavra-passe - Não obrigatória                                                        |
| hashed-password-4D | Hashed password - Not mandatory                                                        |
| session-4D-length  | Tempo de inatividade da sessão (minutos). Não pode ser inferior a 60 - Não obrigatório |


### Exemplo

```4d
C_TEXT($response;$body_t)
ARRAY TEXT($hKey;3)
ARRAY TEXT($hValues;3)
$hKey{1}:="username-4D"
$hKey{2}:="hashed-password-4D"
$hKey{3}:="session-4D-length"
$hValues{1}:="john"
$hValues{2}:=Generate digest("123";4D digest)
$hValues{3}:=120
$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)
```

**Resultadoi**:

Se o login for bem-sucedido, o resultado será:

```
{
    "result": true
}
```

Otherwise, the response will be:

```
{
     "result": false
}
```
