---
id: get-registered-clients
title: GET REGISTERED CLIENTS
slug: /commands/get-registered-clients
displayed_sidebar: docs
---

<!--REF #_command_.GET REGISTERED CLIENTS.Syntax-->**GET REGISTERED CLIENTS** ( *listaClientes* ; *metodos* )<!-- END REF-->
<!--REF #_command_.GET REGISTERED CLIENTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| listaClientes | Text array | &#8592; | Lista dos clientes 4D registrados |
| metodos | Integer array | &#8592; | Lista de métodos a executar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET REGISTERED CLIENTS.Summary-->O comando GET REGISTERED CLIENTS preenche dois arrays:

* *listaClientes* contém a lista dos clientes “registrados” utilizando o comando [REGISTER CLIENT](register-client.md).<!-- END REF-->
* *metodos* fornece a lista de “cargas de trabalho” de cada cliente. A carga de trabalho é o número de métodos que um cliente 4D deve executar chamando o comando [EXECUTE ON CLIENT](execute-on-client.md) (para mais informação, consulte la descrição do comando [EXECUTE ON CLIENT](execute-on-client.md)).

**Nota:** se a operação foi bem sucedida, a variável sistema OK é igual a 1.

#### Exemplo 1 

Vamos supor que você quer obter uma lista de todos os clientes registrados e os métodos que faltam por executar: 

```4d
 ARRAY TEXT($clientes;0)
 ARRAY LONGINT($metodos;0)
 GET REGISTERED CLIENTS($clientes;$metodos)
```

#### Exemplo 2 

Consulte o exemplo do comando [REGISTER CLIENT](register-client.md).

#### Variáveis e conjuntos do sistema 

 Se a operação foi bem sucedida, a variável do sistema OK, tem valor 1.

#### Ver também 

[EXECUTE ON CLIENT](execute-on-client.md)  
[REGISTER CLIENT](register-client.md)  
[UNREGISTER CLIENT](unregister-client.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 650 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


