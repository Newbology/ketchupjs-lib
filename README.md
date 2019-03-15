# KetchupJS
Our target is to make it easier for both large and small business owners to record analytical data. We created a library to use in your app to do that. Just use our library you want to record a piece of data in your code base, and view your analytics at <a href="ketchupjs.dev">ketchupjs.dev</a>.


## Quick Start
First, signup at <a href="ketchupjs.dev">ketchupjs.dev</a> you will recieve a secret **Api Key** in order to use our service. **DO NOT** share this with anyone else.


After signing up and getting your **Api Key** run 
`$ npm install ketchupjs`.

## Using KetchupJS

```
const ketchup = require('ketchupjs')

ketchup.config("Api_Key")
```

```
ketchup.save( metric, value, [user_name, [public]])
```

```
ketchup.most( metric, value, [user_name, [public]])
```
## Parameters
| Name | Type  | Description |
|------|-------| :----------:|
|Api Key |String| Key provided when account is created |
| metric | String | Name of what you want to be recorded (Required) |
| value | Number | Amount of metric to be recorded (Required)| 
| user_name | String | [Optional] Attaches metric and value to certain user|
| public | String | [Requires user_name[Optional]] Makes data either public or private, defaults to setting on profile.|

## Examples
**config** sets api key to allows access to use our service.
```
ketchup.config("XXXXXXX-XXXXXXX-XXXXXXX-XXXXXXX")
```
**save** records an event of the **metric** and its **value**.
```
ketchup.save("sales", 2.49)
```
You can assign the recorded event to a certain user by specifying their **user_name**.
```
ketchup.save("sales", 2.49, "User1")
```
By setting **public** to false you can prevent anyone from viewing this data through our service at <a href="ketchupjs.dev">ketchupjs.dev</a> (defaulted to true, this can be changed in your profile settings). 
```
ketchup.save("sales", 2.49, "User1", false)
```
**most** records the highest **value** and overwrites any previous lesser recorded  **value** for the specified **metric**. 
```
ketchup.most("daily_spending", 4.92, "User1", false)
```
Ex. if **daily_spending** was greater than the **value** in database, the event would be recorded, but if it were less than the **value** it would not be recorded:
```
if(value > valueInDb) {
  valueInDb = value
};
```

