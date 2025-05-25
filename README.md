# Next Level Web Development Assignment-1

# What is the use of the keyof keyword in TypeScript? Provide an example.
=> The 'keyof' keyword in TypeScript is a type operator that creates a union type of all the known public      property keys of a given object type. It is a type operator that allows you to access the keys of an object type as a type themselves.

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

    const studentName = getProperty(student1, "name");  // string 
    const studentAge = getProperty(student, "age");    // number 
    const studentAddress = getProperty(student, "address");    // Error: "address" is not a valid key of Student.

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