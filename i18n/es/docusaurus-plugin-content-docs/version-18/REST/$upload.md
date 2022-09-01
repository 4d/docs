---
id: upload
title: "$upload"
---


Devuelve un ID del archivo subido al servidor

## Descripción
Publique esta petición cuando tenga un archivo que quiera subir al Servidor. Si tiene una imagen, pase `$rawPict=true`. Para todos los demás archivos, se pasa `$binary=true`.

Puede modificar el tiempo de espera, que por defecto es de 120 segundos, pasando un valor al parámetro `$timeout`.

## Ejemplo de carga de imagen
Para subir una imagen, primero hay que seleccionar el objeto archivo en el cliente utilizando la API integrada HTML 5 para utilizar el archivo desde una aplicación web. 4D utiliza el atributo de tipo MIME del objeto archivo para poder manejarlo adecuadamente.

A continuación, subimos la imagen seleccionada a 4D Server:

 `POST  /rest/$upload?$rawPict=true`

**Resultado**:

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

 Después, se utiliza este ID para añadirlo a un atributo utilizando [`$method=update`]($method.md#methodupdate)para añadir la imagen a una entidad:

 `POST  /rest/Employee/?$method=update`

**Datos POST**:

````
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
````

**Respuesta**:

Se devuelve la entidad modificada:

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
 
