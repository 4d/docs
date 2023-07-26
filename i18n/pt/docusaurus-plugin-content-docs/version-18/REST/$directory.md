---
id: directory
title: "$directory"
---

O diretório processa o acesso dos usuários através de pedidos REST.


## $directory/login

Abre uma sessão REST na sua aplicação 4D e faz o login do usuário.

### Descrição
Utilize `$directory/login` para abrir uma sessão na sua aplicação 4D através de REST e fazer o login de um usuário. Também pode modificar o tempo limite predefinido da sessão 4D.

Todos os parâmetros devem ser transmitidos nos **cabeçalhos ** de um método POST:

| Chave de cabeçalho | Valor do cabeçalho                                                                     |
| ------------------ | -------------------------------------------------------------------------------------- |
| username-4D        | Usuário - Não obrigatório                                                              |
| password-4D        | Palavra-passe - Não obrigatória                                                        |
| hashed-password-4D | Palavra-passe com hash - Não obrigatório                                               |
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

Caso contrário, a resposta será:

```
{
     "result": false
}
```
