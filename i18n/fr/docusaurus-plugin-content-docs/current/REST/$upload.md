---
id: upload
title: $upload
---

Retourne un ID du fichier téléchargé sur le serveur

## Description

Publiez cette requête lorsque vous vous souhaitez télécharger un fichier sur le serveur. If you have an image, you pass `$rawPict=true`. For all other files, you pass `$binary=true`.

You can modify the timeout, which by default is 120 seconds, by passing a value to the `$timeout` parameter.

## Scénario de téléchargement

Supposons que vous souhaitiez télécharger une image pour mettre à jour l'attribut image d'une entité.

Pour télécharger une image (ou tout autre fichier binaire), sélectionnez d'abord le fichier dans l'application cliente. The file itlself must be passed in the **body** of the request.

Téléchargez ensuite l'image sélectionnée vers le serveur 4D à l'aide d'une requête telle que :

`POST  /rest/$upload?$rawPict=true`

Par conséquent, le serveur retourne un ID qui identifie le fichier :

**Response**:

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

Afterwards, you use this ID to add it to an attribute using [`$method=update`]($method.md#methodupdate) to add the image to an entity. La requête est la suivante :

`POST  /rest/Employee/?$method=update`

**POST data**:

```
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
```

**Response**:

L'entité modifiée est retournée :

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

## Exemple avec un client 4D HTTP

The following example shows how to upload a _.pdf_ file to the server using the 4D HTTP client.

```4d
var $params : Text
var $response : Object
var $result : Integer
var $blob : Blob


ARRAY TEXT($headerNames; 1)
ARRAY TEXT($headerValues; 1)

$url:="localhost:80/rest/$upload?$binary=true" //prepare the REST request

$headerNames{1}:="Content-Type"
$headerValues{1}:="application/octet-stream"

DOCUMENT TO BLOB("c:\\invoices\\inv003.pdf"; $blob) //Load the binary 

 //Execute the first POST request to upload the file
$result:=HTTP Request(HTTP POST method; $url; $blob; $response; $headerNames; $headerValues)

If ($result=200) 
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
