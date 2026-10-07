---
id: gettingStarted
title: Comencemos
---

4D le ofrece un servidor REST poderoso, que permite el acceso directo a los datos almacenados en sus aplicaciones 4D.

El servidor REST está incluido en 4D y 4D Server, está automáticamente disponible en sus aplicaciones 4D [una vez configurado](configuration.md).

Esta sección pretende ayudar a familiarizarse con la funcionalidad de REST mediante un ejemplo sencillo. Vamos a:

- crear y configurar un proyecto de aplicación 4D básico
- acceder a los datos del proyecto 4D a través de REST utilizando un navegador estándar.

Para simplificar el ejemplo, vamos a utilizar 4D y un navegador que se ejecutan en la misma máquina. Por supuesto, también puede utilizar una arquitectura remota.

## Crear y configurar el proyecto 4D

1. Lance su aplicación 4D o 4D Server y cree un nuevo proyecto. Puede llamarlo, por ejemplo, "Emp4D".

2. En el editor de estructura, cree una tabla [Employees] y añada los siguientes campos a la misma:
   - Lastname (Alpha)
   - Firstname (Alpha)
   - Salary (Longint)

![](../assets/en/REST/getstarted1.png)

> La opción "Exponer un recurso REST" está marcada por defecto para la tabla y cada campo; no cambie esta configuración.

3. Cree los formularios y, a continuación, cree algunos empleados:

![](../assets/en/REST/getstarted2.png)

4. Abra la página **Web > Web Features** de la caja de diálogo de las Propiedades y [marque la opción Exponer como servidor REST](configuration.md#starting-the-rest-server).

5. En el menú **Ejecutar**, seleccione **Iniciar el servidor Web** (si es necesario), luego seleccione **Probar el servidor Web**.

4D muestra la página de inicio por defecto del servidor web de 4D.

## Acceso a los datos 4D con el navegador

Ahora puede leer y editar datos dentro de 4D sólo a través de peticiones REST.

Toda petición de URL 4D REST comienza por `/rest`, que se debe insertar después del área `address:port`. Por ejemplo, para ver lo que hay dentro del almacén de datos de 4D, puede escribir:

```
http://127.0.0.1/rest/$catalog
```

El servidor REST responde:

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

Esto significa que el almacén de datos contiene la clase de datos Employees. Puede ver los atributos de la clase de datos escribiendo:

```
/rest/$catalog/Employees
```

Si desea obtener todas las entidades de la clase de datos Employee, escriba:

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

Tiene muchas posibilidades para filtrar los datos a recibir. Por ejemplo, para obtener sólo el valor del atributo "Lastname" de la 2ª entidad, basta con escribir:

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

La [API REST](REST_requests.md) ofrece varios comandos para interactuar con las aplicaciones 4D.
