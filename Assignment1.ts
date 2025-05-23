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

    //**Finish */
}