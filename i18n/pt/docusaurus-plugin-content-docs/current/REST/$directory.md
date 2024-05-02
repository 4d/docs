---
id: directory
title: $directory
---

O diretório processa o acesso dos usuários através de pedidos REST.

## $directory/login

Abre uma sessão REST na sua aplicação 4D e faz o login do usuário.

### Descrição

Use `$directory/login` to open a session in your 4D application through REST and login a user. Também pode modificar o tempo limite predefinido da sessão 4D.

All parameters must be passed in **headers** of a POST method:

| Chave de cabeçalho | Valor do cabeçalho                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| username-4D        | Usuário - Não obrigatório                                                                                                 |
| password-4D        | Password in plain text - Not mandatory                                                                                    |
| session-4D-length  | Tempo de inatividade da sessão (minutos). Não pode ser inferior a 60 - Não obrigatório |

:::caution

Since the password is transmitted in plain text, it is strongly recommended to use a secured https connection for the login request.

:::

### Exemplo

```4d
C_TEXT($response;$body_t)
ARRAY TEXT($hKey;3)
ARRAY TEXT($hValues;3)
$hKey{1}:="username-4D"
$hKey{2}:="password-4D"
$hKey{3}:="session-4D-length"
$hValues{1}:="john"
$hValues{2}:="123"
$hValues{3}:=120
$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)
```

**Resultado**:

Se o login for bem-sucedido, o resultado será:

```
{
    "result": true
}
```

Caso contrário, a resposta será:

```
{
     "result": false
}
```
