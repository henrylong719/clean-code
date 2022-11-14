# Clean Code

https://www.udemy.com/course/writing-clean-code/



* Readable and meaningful

* Reduce cognitive load

* Be concise and "to the point"

* Avoid unintuitive names, complex nesting and code blocks

* Follow common best practives and patterns

* Be fun to write and to maintain

  

_________



**Key Pain Points**

Names

* Variables
* Functions
* Classes



Structure & Comments

* Code Formatting
* Good & Bad Comments



Functions

* Length
* Parameters



Conditionals & Error Handling

* Deep Nesting
* Missing Error Handling



Classes & Data Structures

* Missing Distinction
* Bloated Classes



**Solution**

Rules & Concepts

Patterns & Principles

Test-Driven Development



## Naming



**Assigning Names to Variables, Functions, Classes & More**



How to name things correctly?



**Variables & Constants**

Data containers

e.g. user input data, validation results, a list of products

Use nouns or short phrases with adjectives

`const userData = { ... }`

`const isValid = ...`



**Function / Methods**

Commands or calculated values

e.g. send data to server, check if user input is valid

Use verbs or short phrases with adjectives

`sendData()`

`inputIsValid()`



**Classes**

Use classes to create "things"

e.g. a user, a product, a http request body

Use nouns or short phrases with nouns

`class User { ... }`

`class RequestBody { ... }`



| snake_case                    |           camelCase           |                    PascalCase |           kebab-case |
| :---------------------------- | :---------------------------: | ----------------------------: | -------------------: |
| is_valid, send_response       |     isValid, sendResponse     |     AdminRole, UserRepository |        <side-drawer> |
| e.g. Python                   |     e.g. Java, Javascript     | e.g. Python, Java, Javascript |            e.g. HTML |
| Variables, functions, methods | Variables, functions, methods |                       Classes | Custom HTML Elements |



**Naming Variables, Constants & Properties**

![naming_variable](images/naming_variable.png)



**Variable naming examples**



![variable_name_examples](images/variable_name_examples.png)



**Naming Functions & Methods**



![function_method_name](images/function_method_name.png)



**Examples  Function/Method Names**



![function_method_example](images/function_method_example.png)



**Naming Classes**



![naming_classes](images/naming_classes.png)

