---
id: date
title: Fecha
---

Las variables, campos o expresiones de tipo fecha pueden estar comprendidas entre 1/1/100 y 31/12/32.767.

Aunque el modo de representación de fechas por C_DATE permite trabajar con fechas hasta el año 32 767, ciertas operaciones que pasan por el sistema imponen un límite inferior.

**Nota:** en el manual de Referencia del Lenguaje 4D, los parámetros de tipo Fecha en las descripciones de los comandos se denominan Fecha, salvo que se indique lo contrario.

## Constantes literales de tipo fecha

Una constante literal de tipo fecha está rodeada de signos de exclamación (!...!). Una fecha debe estar estructurada utilizando el formato ISO (!AAAA-MM-DD!). Estos son algunos ejemplos de constantes de fechas:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

A null date is specified by _!00-00-00!_.

**Consejo:** el Editor de código incluye un acceso directo para introducir una fecha null. To type a null date, enter the exclamation (!) character and press Enter.

**Notas:**

- For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the `SET DEFAULT CENTURY` command.
- Si ha marcado la opción "Utilizar la configuración regional del sistema" ( ver Página Métodos), debe utilizar el formato de fecha definido en su sistema. Generalmente, en un entorno estadounidense, las fechas se introducen en la forma mes/día/año, con una barra "/" que separa los valores.

## Operadores de fechas

| Operación         | Sintaxis       | Devuelve | Expression                                  | Valor        |
| ----------------- | -------------- | -------- | ------------------------------------------- | ------------ |
| Diferencia        | Fecha – Fecha  | Number   | !2017-01-20! - !2017-01-01!                 | 19           |
| Adición           | Fecha + Número | Fecha    | !2017-01-20! + 9                            | !2017-01-29! |
| Resta             | Fecha - Número | Fecha    | !2017-01-20! - 9                            | !2017-01-11! |
| Igual             | Fecha = Fecha  | Boolean  | !2017-01-20! - !2017-01-01! =!2017-01-01!   | True         |
|                   |                |          | !2017-01-20! !2017-01-01! =!2017-01-01!     | False        |
| Desigualdad       | Fecha # Fecha  | Boolean  | !2017-01-20! !2017-01-20! # !2017-01-01!    | True         |
|                   |                |          | !2017-01-20! !2017-01-20! # !2017-01-20!    | False        |
| Mayor que         | Date > Date    | Boolean  | !2017-01-20! > !2017-01-01!                 | True         |
|                   |                |          | !2017-01-20! > !2017-01-20!                 | False        |
| Menor que         | Date < Date    | Boolean  | !2017-01-20! - !2017-01-01! < !2017-01-20!  | True         |
|                   |                |          | !2017-01-20! < !2017-01-20!                 | False        |
| Mayor o igual que | Date >= Date   | Boolean  | !2017-01-20! >=!2017-01-01!                 | True         |
|                   |                |          | !2017-01-01!>=!2017-01-20!                  | False        |
| Menor o igual que | Date <= Date   | Boolean  | !2017-01-20! - !2017-01-01! <= !2017-01-20! | True         |
|                   |                |          | !2017-01-20! <= !2017-01-01!                | False        |
