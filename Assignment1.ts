{
    //
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === true) {
            return input.toUpperCase();
        }
        else if (toUpper === false) {
            return input.toLowerCase();
        }
        else {
            return input.toUpperCase();
        }
    };


    console.log(formatString('Hello'));
    console.log(formatString("Hello", true));
    console.log(formatString("Hello", false));

    /*********************************************************** */

    type Item = {
        title: string;
        rating: number;
    };

    function filterByRating(items: Item[]): Item[] {
        return items.filter(selectedItem => selectedItem.rating >= 4);
    };

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 3.9 },
        { title: "Book E", rating: 4 }
    ];

    console.log(filterByRating(books));

    /*********************************************************** */

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        let outputArray: T[] = [];
        for (const arrayElement of arrays) {
            outputArray = outputArray.concat(arrayElement);
        }
        return outputArray;
    };


    console.log(concatenateArrays(["a", "b"], ["c"]));
    console.log(concatenateArrays([1, 2], [3, 4], [5]));

    /*********************************************************** */

    class Vehicle {
        private make: string;
        public year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        };

        public getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        };
    }

    class Car extends Vehicle {
        private model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        public getModel(): string {
            return `Model: ${this.model}`;
        }
    };

    const myCar = new Car("Toyota", 2020, "Corolla");

    console.log(myCar.getInfo());
    console.log(myCar.getModel());

    /*********************************************************** */

    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length;
        }
        else {
            return value * 2;
        }
    };

    console.log(processValue('hello'));
    console.log(processValue(10));

    /*********************************************************** */

    interface Product {
        name: string;
        price: number;
    };

    function getMostExpensiveProduct(products: Product[]): Product[] | null {
        if (products.length === 0) {
            return null;
        }

        const mostExpensivePrice = Math.max(...products.map(expensiveProduct => expensiveProduct.price));

        const mostExpensiveProduct = products.filter(product => product.price === mostExpensivePrice);

        return mostExpensiveProduct;
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 },
        { name: "Keyboard", price: 50 }
    ];

    const emptyProduct = [];

    console.log(getMostExpensiveProduct(products));
    console.log(getMostExpensiveProduct(emptyProduct));

    /*********************************************************** */

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

    function getDayType(day: Day): string {
        if (day === Day.Sunday) {
            return 'Weekend';
        }
        else {
            return 'Weekday';
        }
    };

    console.log(getDayType(Day.Monday));
    console.log(getDayType(Day.Sunday));
    console.log(getDayType(Day.Thursday));

    /*********************************************************** */
    
    async function squareAsync(n: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                if (n >= 0) {
                    resolve(n * n)
                }
                else {
                    reject(new Error('Negative number not allowed'))
                }
            }, 1000);
        });
    }

    async function testSquareAsync(n:number) {
        try {
            console.log(await squareAsync(n));
        }
        catch (error) {
            console.log('', error);
        }
    };

    testSquareAsync(4);
    testSquareAsync(-3);

    //**Finish **/
}