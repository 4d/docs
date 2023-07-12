---
id: gettingStarted
title: Getting Started 
---

4D provides you with a powerful REST server, that allows direct access to data stored in your 4D applications.

The REST server is included in 4D and 4D Server, it is automatically available in your 4D applications [once it is configured](configuration.md).

This section is intended to help familiarize you with REST functionality by means of a simple example. We are going to:
- create and configure a basic 4D application project
- access data from the 4D project through REST using a standard browser.

To keep the example simple, we’re going to use 4D and a browser that are running on the same machine. Of course, you could also use a remote architecture.

 

## Creating and configuring the 4D project

1. Launch your 4D or 4D Server application and create a new project. You can name it "Emp4D", for example.

2. In the Structure editor, create an [Employees] table and add the following fields to it:
	- Lastname (Alpha)
	- Firstname (Alpha)
	- Salary (Longint)

![](../assets/en/REST/getstarted1.png) 

> The "Expose a REST resource" option is checked by default for the table and every field; do not change this setting.

3. Create forms, then create a few employees:

![](../assets/en/REST/getstarted2.png) 

4. Open the **Web > Web Features** page of the Settings dialog box and [check the Expose as REST server](configuration.md#starting-the-rest-server) option. 

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

The 4D [REST API](REST_requests.md) provides various commands to interact with the 4D applications.  
