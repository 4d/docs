---
id: open-datastore
title: Open datastore
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças                             |
| ------- | ------------------------------------ |
| 20 R6   | Suporte ao acesso a instâncias Qodly |
| 20 R4   | Nova propriedade *passwordAlgorithm* |
| 18      | Adicionado                           |

</details>

<!--REF #_command_.Open datastore.Syntax-->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : cs.DataStore<!-- END REF-->

<!--REF #_command_.Open datastore.Params-->

| Parâmetro      | Tipo                          |   | Descrição                                                                                       |
| -------------- | ----------------------------- | - | ----------------------------------------------------------------------------------------------- |
| connectionInfo | Object                        | → | Propriedades de conexão utilizadas para alcançar o armazém de datos remoto                      |
| localID        | Text                          | → | Id para assignar ao armazém de dados aberto na aplicação local (obrigatorio) |
| Resultado      | cs. DataStore | ← | Objeto do armazém de dados                                                                      |

<!-- END REF-->

#### Descrição

The `Open datastore` command <!-- REF #_command_.Open datastore.Summary -->connects the application to the remote datastore identified by the *connectionInfo* parameter<!-- END REF --> and returns a matching `cs.DataStore` object associated with the *localID* local alias.

Os seguintes datastores remotos são compatíveis com o comando:

| tipo de datastore                                                    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aplicação 4D remoto                                                  | A 4D application available as a remote datastore, i.e.:<li>its web server is launched with http and/or https enabled,</li><li>its datastore is exposed to REST ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked).</li>A license can be required (see note) |
| [Aplicação Qodly](https://developer.qodly.com/docs/cloud/getStarted) | Um aplicativo Qodly Server que forneceu a você um **api endpoint** e uma **api key** válida associada a um cargo definido. You must pass the api key in the `api-key` property of the *connectionInfo* object. You can then work with the returned datastore object, with all privileges granted to the associated role.                                    |

:::note

`Open datastore` requests rely on the 4D REST API and can require a 4D Client license to open the connection on a remote 4D Server. Consulte a seção [user login mode](../REST/authUsers.md#user-login-modes) para saber como configurar a autenticação dependendo do modo de login do usuário atual selecionado.

:::

Passe em connectionInfo um objeto que desceva o armazém de dados remoto ao que quiser se conectar. Pode conter as propriedades abaixo (todas as propriedades são opcionais menos *hostname*):

| Propriedade | Tipo       | Aplicação 4D remoto                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Aplicação Qodly                                                              |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| hostname    | Text       | Nome ou endereço IP da database remota + ":" + número de porta (o numero de porta é obrigatório)                                                                                                                                                                                                                                                                                                                                          | API Endpoint de instância Qodly cloud                                        |
| user        | Text       | Nome de usuario                                                                                                                                                                                                                                                                                                                                                                                                                                                              | - (ignorado)                                              |
| senha       | Text       | senha de usuario                                                                                                                                                                                                                                                                                                                                                                                                                                                             | - (ignorado)                                              |
| idleTimeout | Integer    | Tempo de espera da sessão de inatividade (em minutos) depois do qual a sessão é fechada automaticamente por 4D. Se omitido, o valor por defeito é 60 (1h). O valor não pode ser < 60 (se for passado um valor menor, o tempo limite será definido como 60). Para obter mais informações, veja **Sessões de encerramento**. | - (ignorado)                                              |
| tls         | Parâmetros | True para usar conexão segura(1). Se omitido, false por defeito. Se for omitido, o normal é falso Usar uma conexão segura é recomendado sempre que possível.                                                                                                                                                                                                                                              | True para usar conexão segura. Se omitido, false por defeito |
| type        | Text       | deve ser "4D Server"                                                                                                                                                                                                                                                                                                                                                                                                                                                         | - (ignorado)                                              |
| api-key     | Text       | - (ignorado)                                                                                                                                                                                                                                                                                                                                                                                                                                              | API key da instância Qodly cloud                                             |

(1) Se `tls` for true, o protocolo HTTPS é utilizado se:

- HTTPS for ativado no armazém de dados remoto
- o número de porto especificado coincide com o porto HTTPS configurado nos ajustes do banco de dados
- a valid certificate and private encryption key are installed in the 4D application. Senão é mostrado o erro "1610 - A remote request to host xxx has failed"

*localID* é um alias local para a sessão aberta no armazenamento de dados remoto. Se *localID* já existir no aplicativo, ele será usado. Caso contrário, uma nova sessão *localID* é criada quando o objeto de armazenamento de dados é usado.

Quando abrir a sessão, as sentenças abaixo são equivalentes e devolvem uma referência sobre o mesmo objeto datastore:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds e $myds2 são equivalentes
```

Objects available in the `cs.Datastore` are mapped with respect to the [ORDA general rules](ORDA/dsMapping.md#general-rules).

Se não for encontrado um datastore correspondente, `Open datastore` retornará **Null**.

#### Exemplo 1

Conexão a uma datastore remota com usuário/ senha/ timetou/ tls

```4d
 var $connectTo : Object
 var $remoteDS : cs. DataStore
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS. Students.all().length)+" students")
```

#### Exemplo 2

Conexão a uma datastore remota sem usuário ou senha:

```4d
 var $connectTo : Object
 var $remoteDS : cs. DataStore
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS. Students.all().length)+" students")
```

#### Exemplo 3

Trabalhando com várias datastores remotas:

```4d
 var $connectTo : Object
 var $frenchStudents; $foreignStudents : cs. DataStore
 $connectTo:=New object("hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
 ALERT("They are "+String($frenchStudents. Students.all().length)+" French students")
 ALERT("They are "+String($foreignStudents. Students.all().length)+" foreign students")
```

#### Exemplo

Conexão com uma aplicação Qodly:

```4d
var $connectTo : Object:={hostname: "https://xxx-x54xxx-xx-xxxxx-8xx5-xxxxxx.xx-api.cloud.com"; tls: True}

var $remoteDS : 4D.DataStoreImplementation
var $data : 4D.EntitySelection

$connectTo["api-key"]:="fxxxx-xxxx-4xxx-txxx-xxxxxxxx0" //only for example purpose  
  //it is recommended to store the API key in a secured place (e.g. a file)
  //and to load it in the code

$remoteDS:=Open datastore($connectTo; "remoteId")
$data:=$remoteDS.item.all()

ALERT(String($data.length)+" items have been read")

```

#### Gestão de erros

Em caso de erro, o comando retorna **Null**. Se não for possível acessar o armazem de dados remotos (endereço incorreto, servidor web não inciiado, http e https não habilitados...), se produz o erro 1610 " Uma petição remota ao host XXX falhou". Você pode interceptar esse erro com um método instalado por `ON ERR CALL`.

#### Veja também

[ds](ds.md)

#### Propriedades

|                    |                                 |
| ------------------ | ------------------------------- |
| Command number     | 1452                            |
| Thread safe        | &amp;check; |
| Modifies variables | error                           |
