---
id: version
title: $version 
---

Image version number	

## Description   

`$version` is the image's version number returned by the server. The version number, which is sent by the server, works around the browser's cache so that you are sure to retrieve the correct image.

The value of the image's version parameter is modified by the server.

## Example  

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

 `GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`