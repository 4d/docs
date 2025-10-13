---
id: date
title: Date
---

A Date field, variable or expression can be in the range of 1/1/100 to 12/31/32,767.

Although the representation mode for dates by can work with dates up to the year 32 767, certain operations passing through the system impose a lower limit.  

**Note:** In the 4D Language Reference manual, Date parameters in command descriptions are denoted as Date, except when marked otherwise.  

## Date literals  

A date literal constant is enclosed by exclamation marks (!…!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

A null date is specified by _!00-00-00!_.

**Tip:** The Code Editor includes a shortcut for entering a null date. To type a null date, enter the exclamation (!) character and press Enter.

**Notes:**

- For compatibility reasons, 4D accepts date inputs using system format with two-digit years, such as !12/04/98!. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the ```SET DEFAULT CENTURY``` command.
- If you have checked the "Use regional system settings" option (see Methods Page), you must use the date format defined in your system. Generally, in a US environment, dates are entered in the form month/day/year, with a slash "/" separating the values.
    
## Date operators 

|Operation	|Syntax	|Returns	|Expression	|Value|
|---|---|---|---|---|
|Date difference	|Date – Date	|Number	|!2017-01-20! - !2017-01-01!	|19|
|Day addition	|Date + Number	|Date	|!2017-01-20! + 9	|!2017-01-29!|
|Day subtraction	|Date – Number	|Date	|!2017-01-20! - 9	|!2017-01-11!|
|Equality	|Date = Date	|Boolean	|!2017-01-01! =!2017-01-01!	|True|
| | | |!2017-01-20! = !2017-01-01!	|False|
|Inequality	|Date # Date	|Boolean	|!2017-01-20! # !2017-01-01!	|True|
||||!2017-01-20! # !2017-01-20!	|False|
|Greater than	|Date > Date	|Boolean	|!2017-01-20! > !2017-01-01!	|True|
||||!2017-01-20! > !2017-01-20!	|False|
|Less than	|Date < Date	|Boolean	|!2017-01-01! < !2017-01-20!	|True|
||||!2017-01-20! < !2017-01-20!	|False|
|Greater than or equal to	|Date >= Date	|Boolean	|!2017-01-20! >=!2017-01-01!	|True|
||||!2017-01-01!>=!2017-01-20!	|False|
|Less than or equal to	|Date <= Date	|Boolean	|!2017-01-01! <= !2017-01-20!|	True|
||||!2017-01-20! <= !2017-01-01!|False|
