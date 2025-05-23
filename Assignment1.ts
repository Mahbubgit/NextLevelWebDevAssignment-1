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

    function filterByRating(items: { title: string; rating: number; }[]): { title: string; rating: number; }[] {
        return items.filter(selectedItem => selectedItem.rating >= 4);
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 3.9 },
        { title: "Book E", rating: 4 }
    ];

    console.log(filterByRating(books));

    //**Finish */
}