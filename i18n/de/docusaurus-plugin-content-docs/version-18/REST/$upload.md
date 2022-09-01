---
id: upload
title: "$upload"
---


Returns an ID of the file uploaded to the server

## Beschreibung
Post this request when you have a file that you want to upload to the Server. If you have an image, you pass `$rawPict=true`. For all other files, you pass `$binary=true`.

You can modify the timeout, which by default is 120 seconds, by passing a value to the `$timeout parameter`.

## Image upload example
To upload an image, you must first select the file object on the client using the HTML 5 built-in API for using file from a web application. 4D uses the MIME type attribute of the file object so it can handle it appropriately.

Then, we upload the selected image to 4D Server:

 `POST  /rest/$upload?$rawPict=true`

**Result**:

`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50" }`

 Afterwards, you use this ID to add it to an attribute using [`$method=update`]($method.md#methodupdate) to add the image to an entity:

 `POST  /rest/Employee/?$method=update`

**POST data**:

````
{
    __KEY: "12",
    __STAMP: 4,
    photo: { "ID": "D507BC03E613487E9B4C2F6A0512FE50" } 
}
````

**Response**:

The modified entity is returned:

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
 
