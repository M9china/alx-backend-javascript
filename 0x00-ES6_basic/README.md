                                # 0x00. ES6 Basics

- In this Project we are learning Es6 concepts, We are expect to have basic knowledge of Es6, which include:

    - What ES6 is
    - New features introduced in ES6
    - The difference between a constant and a variable
    - Block-scoped variables
    - Arrow functions and function parameters default to them
    - Rest and spread function parameters
    - String templating in ES6
    - Object creation and their properties in ES6
    - Iterators and for-of loops

- These Project has thirteen mandatory tasks which include:

    0. Const or let?
        Modify
            - function taskFirst to instantiate variables using const
            - function taskNext to instantiate variables using let

    1. Block Scope
            - Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

    2. Arrow functions
            - Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

    3. Parameter defaults
            - Condense the internals of the following function to 1 line - without changing the name of each function/variable.
            - Hint: The key here to define default parameter values for the function parameters

    4. Rest parameter syntax for functions
            - Modify the following function to return the number of arguments passed to it using the rest parameter syntax

            export default function returnHowManyArguments() {

            }

        - Example:
                > returnHowManyArguments("Hello", "Holberton", 2020);
                3
                >

    5. The wonders of spread syntax
            - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

            export default function concatArrays(array1, array2, string) {

            }

    6. Take advantage of template literals
            - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

    7. Object property value shorthand syntax
            - Notice how the keys and the variable names are the same?
            - Modify the following function’s budget object to simply use the keyname instead.

    8. No need to create empty objects before adding in properties
            - Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

            function getCurrentYear() {
                const date = new Date();
                return date.getFullYear();
            }

            export default function getBudgetForCurrentYear(income, gdp, capita) {
                const budget = {};

                budget[`income-${getCurrentYear()}`] = income;
                budget[`gdp-${getCurrentYear()}`] = gdp;
                budget[`capita-${getCurrentYear()}`] = capita;

                return budget;
            }

    9. ES6 method properties
            - Rewrite getFullBudgetObject to use ES6 method properties in the fullBudge

           function getCurrentYear() {
  				const date = new Date();
  				return date.getFullYear();
			}

			export default function getBudgetForCurrentYear(income, gdp, capita) {
  				const budget = {};

 	 			budget[`income-${getCurrentYear()}`] = income;
  				budget[`gdp-${getCurrentYear()}`] = gdp;
  				budget[`capita-${getCurrentYear()}`] = capita;

  				return budget;
			}

	10. For...of Loops
			- Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

			export default function appendToEachArrayValue(array, appendString) {
  				for (var idx in array) {
    				var value = array[idx];
    				array[idx] = appendString + value;
 				}

  				return array;
			}

	11. Iterator
			- Write a function named createEmployeesObject that will receive two arguments:
				- departmentName (String)
				- employees (Array of Strings)

				export default function createEmployeesObject(departmentName, employees) {

				}

				The function should return an object with the following format:

				{
     				$departmentName: [
          				$employees,
     				],
				}

	12. Let's create a report object
			- Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.

			export default function createReportObject(employeesList) {

			}

			- createReportObject should return an object containing the key allEmployees and a method property called getNumberOfDepartments.

			- allEmployees is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

			- The method property receives employeesList and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

			{
  				allEmployees: {
     				engineering: [
          				'John Doe',
          				'Guillaume Salva',
     				],
  				},
			};
