---
id: upload
title: "$upload"
---


Devolve um ID do ficheiro carregado para o servidor

## Descrição
Publique essa petição quando quiser fazer upload de um ficheiro para o servidor. Se tiver uma imagem, passe `$rawPict=true`. Para todos os outros ficheiros, deve passar `$binary=true`.

Você pode modificar o tempo limite, que por padrão é de 120 segundos, passando um valor para o `parâmetro$timeout`.

## Exemplo de carregamento de imagens
To upload an image, you must first select the file object on the client using the HTML 5 built-in API for using file from a web application. 4D uses the MIME type attribute of the file object so it can handle it appropriately.

Depois, carregamos a imagem selecionada para 4D Server:

 `POST  /rest/$upload?$rawPict=true`

**Resultadoi**:

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

 Afterwards, you use this ID to add it to an attribute using [`$method=update`]($method.md#methodupdate) to add the image to an entity:

 `POST  /rest/Employee/?$method=update`

**Dados POST**:

````
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
````

**Resposta**:

A entidade modificada é devolvida:

````
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
````
 
