#                 Next Level Web Development Assignment-1


# What is the use of the keyof keyword in TypeScript? Provide an example.

The 'keyof' keyword in TypeScript is a type operator that creates a union type of all the known public property keys of a given object type. It is a type operator that allows you to access the keys of an object type as a type themselves.

# Example:

    type Student = {
    name: string;
    age: number;
    roll: number;
    email: string;
    };

    type StudentKeys = keyof Student;
    // `StudentKeys` will be a union type and equivalent to: "name" | "age"| "roll" | "email"

    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
    };

    const student1: Student = {
    name: "Mike",
    age: 12,
    roll:2,
    email: "mike@gmail.com"
    };

    const studentName = getProperty(student1, "name");  // Output: string 
    const studentAge = getProperty(student, "age");    // Output: number 
    const studentAddress = getProperty(student, "address");    // Output: Error: "address" is not a valid key of Student.

# Key Use Cases:

1. Type-safe property access: Ensures only valid keys of an object are used.

2. Generic constraints: Works well with generics to enforce that a parameter must be a key of an object.

        function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
            return obj[key];
        };

3. Mapped types: Often used with keyof in mapped types to transform object properties.

        type ReadonlyStudent = {
            readonly [K in keyof Student]: Student[K];
        };

4. Ideal for creating reusable, robust code when working with dynamic keys.
----------------------------------------------------------------------------

# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums (enumerations) are a feature in TypeScript that allows you to define a set of named constants. So 'enum' is a special "class" that represents a group of unchangeable variables. It enhance code readability and maintainability by replacing "magic numbers" or hardcoded strings with meaningful, descriptive names. There are 2 types of Enums. a) numeric, and b) string. An enum can be defined using the 'enum' keyword.

# Uses of Enums in TypeScript:

 1. Improve code readability by using meaningful names instead of magic numbers or strings
 2. Ensure type safety by restricting values to a predefined set
 3. Group related values together.
 4. Auto-completion support in IDEs for enum members
 5. Document intent by making it clear what values are acceptable
 6. Allow reverse mapping in numeric enums.
 7. String enums are more readable in debugging and logs since they retain their textual value.

# Example of a Numeric Enum:

By default, Numeric enums auto-increment if you don't specify any values. If you don't initialize the first value, it starts at 0.

    enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
    };

    let moveUp: Direction = Direction.Up;
    console.log(moveUp); // Output: 0

You can also specify custom values:

    enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
    };

OR

    enum Direction {
    Up = 1,
    Down,    // 2
    Left,    // 3
    Right    // 4
    };

Reverse Mapping (applicable only for numeric enums):
    
    enum Direction {
    Up,      // 0
    Down,    // 1
    Left,    // 2
    Right    // 3
    };
    
    console.log(Direction[3]); // Output: "Right"

# Example of a String Enum

String enums don't auto-increment - each member must be initialized with a string value. They're useful when you need to provide a human-readable value that might be serialized later.

    enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
    }

    let moveDown: Direction = Direction.Down;
    console.log(moveDown); // Output: "DOWN"