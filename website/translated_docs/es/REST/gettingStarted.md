---
id: gettingStarted
title: Comencemos
---

4D le ofrece un servidor REST poderoso, que permite el acceso directo a los datos almacenados en sus bases de datos 4D.

El servidor REST está incluido en las aplicaciones 4D y 4D Server, está automáticamente disponible en sus bases 4D [una vez configurado](configuration.md).

This section is intended to help familiarize you with REST functionality by means of a simple example. We are going to:
- crear y configurar una base de datos 4D simple
- acceder a los datos de la base 4D a través de REST utilizando un navegador estándar.

Para simplificar el ejemplo, vamos a utilizar una aplicación 4D y un navegador que se ejecutan en la misma máquina. Of course, you could also use a remote architecture.



## Crear y configurar la base de datos 4D

1. Lance su aplicación 4D o 4D Server y cree una nueva base de datos. You can name it "Emp4D", for example.

2. In the Structure editor, create an [Employees] table and add the following fields to it:
    - Lastname (Alpha)
    - Firstname (Alpha)
    - Salary (Longint)

![](assets/en/REST/getstarted1.png)

> The "Expose a REST resource" option is checked by default for the table and every field; do not change this setting.

3. Create forms, then create a few employees:

![](assets/en/REST/getstarted2.png)

4. Muestre la página **Recursos web/REST** de la caja de diálogo de las Propiedades de la base de datos y [marque la opción Exponer como servidor REST](configuration.md#starting-the-rest-server).

5. In the **Run** menu, select **Start Web Server** (if necessary), then select **Test Web Server**.

4D displays the default home page of the 4D Web Server.


## Accessing 4D data through the browser

You can now read and edit data within 4D only through REST requests.

Any 4D REST URL request starts with `/rest`, to be inserted after the `address:port` area. For example, to see what's inside the 4D datastore, you can write:

```
http://127.0.0.1/rest/$catalog
```

The REST server replies:

```
{
    "__UNIQID": "96A49F7EF2ABDE44BF32059D9ABC65C1",
    "dataClasses": [
        {
            "name": "Employees",
            "uri": "/rest/$catalog/Employees",
            "dataURI": "/rest/Employees"
        }
    ]
}
```

It means that the datastore contains the Employees dataclass. You can see the dataclass attributes by typing:

```
/rest/$catalog/Employees
```

If you want to get all entities of the Employee dataclass, you write:

```
/rest/Employees
```

**Response:**

```
{
    "__entityModel": "Employees",
    "__GlobalStamp": 0,
    "__COUNT": 3,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-01-07T17:07:52.467Z",
            "__STAMP": 2,
            "ID": 1,
            "Lastname": "Brown",
            "Firstname": "Michael",
            "Salary": 25000
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2020-01-07T17:08:14.387Z",
            "__STAMP": 2,
            "ID": 2,
            "Lastname": "Jones",
            "Firstname": "Maryanne",
            "Salary": 35000
        },
        {
            "__KEY": "3",
            "__TIMESTAMP": "2020-01-07T17:08:34.844Z",
            "__STAMP": 2,
            "ID": 3,
            "Lastname": "Smithers",
            "Firstname": "Jack",
            "Salary": 41000
        }
    ],
    "__SENT": 3
}
```

You have many possibilities to filter data to receive. For example, to get only the "Lastname" attribute value from the 2nd entity, you can just write:

```
/rest/Employees(2)/Lastname
```

**Response:**

```
{
    "__entityModel": "Employees",
    "__KEY": "2",
    "__TIMESTAMP": "2020-01-07T17:08:14.387Z",
    "__STAMP": 2,
    "Lastname": "Jones"
}
```

La [API REST](REST_requests.md) ofrece varios comandos para interactuar con la base 4D.  
