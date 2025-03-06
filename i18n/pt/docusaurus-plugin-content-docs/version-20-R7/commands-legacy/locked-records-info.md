---
id: locked-records-info
title: Locked records info
slug: /commands/locked-records-info
displayed_sidebar: docs
---

<!--REF #_command_.Locked records info.Syntax-->**Locked records info** ( *aTabela* ) : Object<!-- END REF-->
<!--REF #_command_.Locked records info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Tabela da qual obter os registros bloqueados |
| Resultado | Object | &#8592; | Descrição dos registros bloqueados (se houver) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Locked records info.Summary-->O comando **Locked records info** devolve um objeto que contém diferente informação sobre os registros bloqueados atualmente em *aTabela*.<!-- END REF-->

**Nota**: o comando funciona só com 4D e 4D Server. Devolve um objeto não válido quando for chamado desde um 4D remoto. Entretanto, pode ser chamado neste contexto se a opção "Executar em servidor" estiver ativada para o método de chamada. Nesse caso, o objeto devolvido conterá informação sobre o servidor. Quando chamar desde um componente, sempre se aplica ao banco de dados local.  
  
O objeto devolvido contém uma propriedade "registros", que é um array de objetos:

```json
{    "records": [        objeto descrição,        (…)    ]}
```

Cada elemento da coleção "description object" identifica um registro bloqueado na tabela especificada. Contém diferentes propiedades dependendo da origem do bloqueio (processo 4D ou REST API).

* Se o registro foi bloqueado por um processo 4D:

| **Propriedade**   | **Tipo**      | **Descrição**                                                                                                                                                                                                                                                              |
| ----------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contextID         | UUID (Cadeia) | UUID do contexto da base responsável do bloqueio                                                                                                                                                                                                                           |
| contextAttributes | Objeto        | Objeto que contém a mesma informação que o comando [LOCKED BY](locked-by.md) aplicado ao registro, a diferença é que **Locked records info** devolve o nome do usuário definido no sistema e não o do usuário 4D, assim como informação adicional (ver mais a frente). |
| recordNumber      | Inteiro longo | Número de registro do registro bloqueado                                                                                                                                                                                                                                   |

O objeto *contextAttributes* tem as propriedades abaixo:

| **Propriedade**                                                                                           | **Tipo**      | **Descrição**                                                                                                             |
| --------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| task\_id                                                                                                  | Número        | Número de referência do processo                                                                                          |
| user\_name                                                                                                | Cadeia        | Nome do usuário definido no sistema operativo                                                                             |
| user4d\_alias                                                                                             | Text        | Apelido/alias definido com [SET USER ALIAS](set-user-alias.md), senão o nome do usuário no diretório de banco de dados 4D |
| user4d\_id                                                                                                | Número        | Número do usuário 4D(\*)                                                                                                  |
| host\_name                                                                                                | Cadeia        | Nome da máquina local                                                                                                     |
| task\_name                                                                                                | Cadeia        | Nome do processo                                                                                                          |
| client\_version                                                                                           | Número        | Versão da aplicação cliente                                                                                               |
| *Unicamente quando o comando se executa em 4D Server e se o bloqueio do registro provém de um 4D remoto:* |               |                                                                                                                           |
| is\_remote\_context                                                                                       | Boolean       | Indica se uma origem do bloqueio é um 4D remoto (sempre *true* já que caso contrário não está presente)                   |
| client\_uid                                                                                               | UUID (Cadeia) | UUID do 4D remoto na origem do bloqueio                                                                                   |

(\*) Só retornado em bancos de dados binários. Pode obter o nome de usuário 4D a partir do valor de user4d\_id usando o código abaixo

```4d
 GET USER LIST($arrNames;$arrIDs)
 $User4DName:=Find in array($arrIDs;user4d_id)
```

Se o registro foi bloqueado pela petição $lock REST (a nivel de sessão):  

| Propriedade  | Tipo    | Descrição                                                                                                                                                     |
| ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host         | Text  | URL com a qual a entidade foi bloqueada, por exemplo. "127.0.0.1:8044"                                                                                        |
| IPAddr       | Text  | Endereço IP utilizado na URL com a qual a entidade foi boqueada, por exemplo. "127.0.0.1"                                                                     |
| recordNumber | Inteiro | Número de registro do registro bloqueado                                                                                                                      |
| userAgent    | Text  | Agente de usuário do locker, por exemplo "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36" |

#### Exemplo 

Execute o seguinte código:

```4d
 $vOlocked :=Locked records info([Table])
```

Se dois registros estão bloqueados na tabela \[Table\], o seguinte objeto se devolve em $vOlocked:

```json
{    "records": [        {            "contextID": "A9BB84C0E57349E089FA44E04C0F2F25",            "contextAttributes": {                "task_id": 8, (*)                "user_name": "roland", (*)                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 1        },        {            "contextID": "8916338D1B8A4D86B857D92F593CCAC3",            "contextAttributes": {                "task_id": 9,                "user_name": "roland",                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 2        }    ]}
```

Se o código é executado em um 4D Server e o bloqueio é causado por uma máquina cliente remota, o seguinte objeto é devolvido em $vOlocked:  
  
```json
{    "records": [        {            "contextID": "B0EC087DC2FA704496C0EA15DC011D1C",            "contextAttributes": {                "task_id": 2,                "user_name": "achim",                "user4d_id": 1,                "host_name": "achim-pcwin",                "task_name": "P_RandomLock",                "is_remote_context": true,                "client_uid": "0696E66F6CD731468E6XXX581A87554A",                "client_version": -268364752            },            "recordNumber": 1        }    ]}
```

#### Ver também 

[Locked](locked.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1316 |
| Thread-seguro | &check; |


