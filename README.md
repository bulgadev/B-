# B++

B++ is a simple interpreted language built with Node.js. This project allows you to write and execute code in the B++ syntax.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## Getting Started

1. Clone this repository or download the project files.
2. Place your B++ code in the `code.txt` file, following the B++ syntax.
3. Run the interpreter using the following command:

   ```bash
   node index.js
   ```

## Syntax

### Variable Declaration

- Declare a variable using the `mut` keyword.
- Supported types: `int` (integer) and `string` (text).
- Example:

  ```plaintext
  mut string myVar = "Hello, World!"
  mut int myNumber = 42
  ```

### Printing Output

- Use the `yell` keyword to print values or perform operations.
- Example:

  ```plaintext
  yell -myVar-
  yell -myNumber + 10-
  ```

## Example

Here is an example of a `code.txt` file:

```plaintext
mut string greeting = "Hello"
mut int x = 5
mut int y = 10

yell -greeting-
yell -x + y-
```

Running the above code will output:

```
Hello
15
```

## Notes

- Ensure your code follows the B++ syntax strictly.
- The interpreter currently supports basic operations like addition (`+`) and multiplication (`*`).

## License

This project is open-source and available under the [MIT License](LICENSE).