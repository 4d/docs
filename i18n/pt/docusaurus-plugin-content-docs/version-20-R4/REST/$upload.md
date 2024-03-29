---
id: upload
title: $upload
---


Devolve um ID do ficheiro carregado para o servidor

## Descrição

Publique essa petição quando quiser fazer upload de um ficheiro para o servidor. Se tiver uma imagem, passe `$rawPict=true`. Para todos os outros ficheiros, deve passar `$binary=true`.

Pode modificar o tempo limite, que por defeito é de 120 segundos, passando um valor para o parâmetro `$timeout`.

## Cenário de carregamento

Imagine que pretende carregar uma imagem para atualizar o atributo imagem de uma entidade.

Para carregar uma imagem (ou qualquer ficheiro binário), deve primeiro selecionar o ficheiro a partir da aplicação cliente. O ficheiro em si deve ser passado no **corpo ** do pedido.

Depois, carrega a imagem selecionada para 4D Server usando uma petição como:

 `POST  /rest/$upload?$rawPict=true`

Como resultado, o servidor devolve um ID que identifica o ficheiro:

**Resposta**:

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

Afterwards, you use this ID to add it to an attribute using [`$method=update`]($method.md#methodupdate) to add the image to an entity: O pedido tem o seguinte aspecto:

 `POST  /rest/Employee/?$method=update`

**Dados POST**:

```
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
```

**Resposta**:

A entidade modificada é devolvida:

```
{
    "__KEY": "12", 
    "__STAMP": 5, 
    "uri": "http://127.0.0.1:8081/rest/Employee(12)", 
    "ID": 12, 
    "firstName": "John", 
    "firstName": "Smith",
    "photo":
    {
        "__deferred":
        {
            "uri": "/rest/Employee(12)/photo?$imageformat=best&$version=1&$expand=photo",
            "image": true
        }
    },}
```

## Exemplo com um cliente 4D HTTP

O exemplo a seguir mostra como fazer o upload de um arquivo *.pdf* para o servidor usando o cliente 4D HTTP.

```4d
var $params : Text
var $response : Object
var $result : Integer
var $blob : Blob ARRAY TEXT($headerNames; 1)
ARRAY TEXT($headerValues; 1)

$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request

$headerNames{1}:="Content-Type"
$headerValues{1}:="application/octet-stream" DOCUMENT TO BLOB("c:\\invoices\\inv003.pdf"; $blob) //Load the binary 

 //Execute the first POST request to upload the file
$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues) If ($result=200) 
    var $data : Object
    $data:=New object
    $data.__KEY:="3"
    $data.__STAMP:="3"
    $data.pdf:=New object("ID"; String($response.ID)) 

    $url:="localhost:80/rest/Invoices?$method=update" //second request to update the entity

    $headerNames{1}:="Content-Type"
    $headerValues{1}:="application/json"

    $result:=HTTP Request(HTTP POST method; $url; $data; $response; $headerNames; $headerValues)
Else
    ALERT(String($result)+" Error")
End if
```
