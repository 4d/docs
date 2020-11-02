---
id: webServerGetStart
title: Getting Started
---

This "Getting started" section is geared at first-time users who want an overall overview on how to go from zero to a 4D website that handles data from the database. Let's start!


## Hello World Example

Let's start by making the web server send "Hello World" to the browser. The most simple way to do this is to create a project, start the web server and call the On Web Connection database method.

### Starting the web server

To start the 4D web server:

1. Launch your 4D application and create a new, empty 4D project. 
2. In the **Run** menu, select **Start Web Server**.

That's all! The web server is started and ready to handle requests. To check it, we'll display the default home page. 

### Displaying the default home page

The 4D web server creates automatically a default `index.html` page in the default `WebFolder` root folder, created at the same level as the Project folder.

1. Launch a web browser and connect to the web server IP address (default http port for 4D web server is 80). If the web server and the browser are on the same machine, you can select **Test Web Server** in the **Run** menu. 

The default home page is displayed:

![](assets/en/WebServer/defaultHomePage.png)

### Displaying Hello World

1. Open the Explorer and double-click on the `On Web Connection` database method. 

2. Enter the following line of code:

```4d
WEB SEND TEXT("Hello World!")
```

This very simple line only sends the text passed as parameter to the browser. 

The `On Web Connection` database method can be used as a fallback: it is called when the server receives an invalid request. 

3. Enter a non-existing page in the URL, for example:

```
http://localhost/hello
```

The web server handles the request and calls the `On Web Connection` database method, which returns:

![](assets/en/WebServer/hello.png)


## Getting data from the database

Now we'll see how simple it is to get data from database. First, we will create a table and fill it with some data.

Create a simple database with, for example, a single table containing some records:

![](assets/en/WebServer/hello2.png)
![](assets/en/WebServer/hello3.png)

1. You will need to use the REST server to access data: go the "Settings" dialog box, select the "Web/Rest resource" page, and check the **Expose as REST server** option.

![](assets/en/WebServer/hello5.png)

2. In the `WebFolder` of the project, create and save the "myPage.html" page which contains the following code:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	</head>
	<body>
		<div align="center">
			<table border="0" cellpadding="0" cellspacing="0" width="675">
				<tr><td>
	      		<h2 align="center">Getting started page</h2>
				<form action="/rest/$catalog" method="get">
  					<div align="center">
						<input type="submit" value="Send request">
					</div>
				</form>
				</td></tr>
			</table>
		</div>
	</body>
</html>
```

3. Enter `/myPage.html` in the server root address. The page is served:

![](assets/en/WebServer/hello4.png)

4. Click the **Send request** button; it will generate the `/rest/$catalog` REST request and the server returns the result in JSON:

```json
{
	"__UNIQID": "3F1B6ACFFE12B64493629AD76011922D",
	"dataClasses": [
		{
			"name": "Friends",
			"uri": "/rest/$catalog/Friends",
			"dataURI": "/rest/Friends"
		}
	]
}
```

You get the catalog, i.e. the list of exposed dataclasses and attributes in the datastore. 

You can also get any data.

5. Replace the <form action... line code with:

```html
	<form action="/rest/Friends" method="get">
```

4. Click the **Send request** button; it will generate the `/rest/Friends` REST request and the server returns the result in JSON:

```json
{
	"__DATACLASS": "Friends",
	"__entityModel": "Friends",
	"__GlobalStamp": 0,
	"__COUNT": 4,
	"__FIRST": 0,
	"__ENTITIES": [
		{
			"__KEY": "1",
			"__TIMESTAMP": "2020-10-27T14:29:01.914Z",
			"__STAMP": 1,
			"ID": 1,
			"lastName": "Smith",
			"firstName": "John"
		},
		{
			"__KEY": "2",
			"__TIMESTAMP": "2020-10-27T14:29:16.035Z",
			"__STAMP": 1,
			"ID": 2,
			"lastName": "Brown",
			"firstName": "Danny"
		},
		{
			"__KEY": "3",
			"__TIMESTAMP": "2020-10-27T14:29:43.945Z",
			"__STAMP": 1,
			"ID": 3,
			"lastName": "Purple",
			"firstName": "Mark"
		},
		{
			"__KEY": "4",
			"__TIMESTAMP": "2020-10-27T14:34:58.457Z",
			"__STAMP": 1,
			"ID": 4,
			"lastName": "Dupont",
			"firstName": "Jenny"
		}
	],
	"__SENT": 4
}
``` 

This very simple example shows how the web server interacts transparently with the [REST server](REST/gettingStarted.md) to return any requested data, provided it is exposed (see security below). In your web interfaces, you can easily bind the javascript or html code with returned data. XXXSee the "Datagrid" page to have an example of web interface bound to dataclasses through JSON.


## Login and session

In the above sections, we get free access to the application from web requests. However, in the world of web applications, data access security is the first priority. When connecting to the 4D web server, users must be authentified and their navigation controlled.

The most simple and secured way to log a user on the 4D web server is to combine the `On Web Authentication` database method and user sessions. T

First, we need to add some code in the home page so that users can enter their credentials. We will use a small JavaScript.

1. In the `index.html` default page, replace the body part with the following code:

```html
	<body bgcolor="#ffffff">
		<form align="center" action="/login" method="post">
			<div>
			    <label for="username">Username:</label>
			    <input type="text" id="username" name="username">
			</div>

			<div>
			    <label for="pass">Password:</label>
			    <input type="password" id="pass" name="password">
			</div>
			
			<div>
			<input type="submit" value="Sign in">
			</div>
		</form>
	</body>

```


2. In 4D, select **Design**/**Explorer**/**Methods**, expand "Database Methods" then double-click on `On Web Authentication`.

The `On Web Authentication` database method is automatically called for every request that needs some code execution on the 4D web server side:

- If it returns `True` in $0, the request is accepted and a session cookie is sent to the browser. 
- If it returns `False` in $0, the request is rejected. 

In this quick start guide, we will use a simple code that will only return a valid message if both user and passwords are identical (we will see later a more realistic challenge). In the `On Web Authentication` database method, enter the following code:

```4d
C_LONGINT($posit)
C_TEXT($username; $password)

ARRAY TEXT($tName; 0)
ARRAY TEXT($tVal; 0)

Case of 
	: ($1="/login")
		
		WEB GET VARIABLES($tName; $tVal)
			
			// get credentials from the form
		$posit:=Find in array($tName; "username")
		If ($posit>0)
			$username:=$tVal{$posit}
		End if 
		
		$posit:=Find in array($tName; "password")
		If ($posit>0)
			$password:=$tVal{$posit}
		End if 
			
			//only for demo 
		If ($username=$password)
			WEB SEND TEXT("You're logged")
		Else 
			WEB SEND TEXT("Wrong password")
		End if 
		
End case 
```

3. In the browser, enter the web server address. 

You should have a dialog similar to this one:

![](assets/en/WebServer/hello6.png)

4. Enter two identical values and click **Sign in**. 

Your web page now displays: 
```
"You're logged"
```

Entering two different values would result in displaying "Wrong password".

A more realistic example would use a custom \[Users] table and a hash code challenge:

```4d
			// replace demo part with this one
			// we use a custom user table
		QUERY([WebUsers]; [WebUsers]User=$username)
		
		If (OK=1)  //we have a user with this name
			$0:=Verify password hash($password; [WebUsers]hash)
			WEB SEND TEXT("You're logged")			
		Else 			
			$0:=False
			WEB SEND TEXT("Wrong username or password")
		End if 
		
```

In this example, the \[WebUsers] table could be encrypted for security. Note however that only the hash of the user password is stored and used for validation, not the password itself. The hash can be stored at user account creation using the following simple line of code:

```4d
[WebUsers]hash:=Generate password hash($password) 
```  

> To be secure from end to end, it is recommended that the connection is established via https.  


Once the user is logged, you can handle the associated session using the `WEB Get Current Session ID` method. 


