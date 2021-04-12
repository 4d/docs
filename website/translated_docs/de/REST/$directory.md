---
id: directory
title: '$directory'
---

The directory handles user access through REST requests.


## $directory/login

Opens a REST session on your 4D application and logs in the user.

### Beschreibung
Use `$directory/login` to open a session in your 4D application through REST and login a user. You can also modify the default 4D session timeout.

All parameters must be passed in **headers** of a POST method:

| Header key         | Header value                                                                 |
| ------------------ | ---------------------------------------------------------------------------- |
| username-4D        | User - Not mandatory                                                         |
| password-4D        | Password - Not mandatory                                                     |
| hashed-password-4D | Hashed password - Not mandatory                                              |
| session-4D-length  | Session inactivity timeout (minutes). Cannot be less than 60 - Not mandatory |


### Beispiel

```4d
C_TEXT($response;$body_t)
ARRAY TEXT($hKey;3)
ARRAY TEXT($hValues;3)
$hKey{1}:="username-4D"
$hKey{2}:="hashed-password-4D"
$hKey{3}:="session-4D-length"
$hValues{1}:="john"
$hValues{2}:=Generate digest("123";4D digest)
$hValues{3}:=120
$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)
```

**Result**:

If the login was successful, the result will be:

```
{
    "result": true
}
```

Otherwise, the response will be:

```
{
     "result": false
}
```
