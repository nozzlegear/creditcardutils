declare namespace CreditCardUtils {
    export interface ICustomCard {
        /**
         * Card type, as returned by creditcardutils.parseCardType.
         */
        type: string;

        /**
         * Regex used to identify the card type. For the best experience, this should be the shortest
         * pattern that can guarantee the card is of a particular type.
         */
        pattern: RegExp;

        /**
         * Array of valid card number lengths.
         */
        length: number[];

        /**
         * Array of valid card CVC lengths.
         */
        cvcLength: number[];

        /**
         * Boolean indicating whether a valid card number should satisfy the Luhn check.
         */
        luhn: boolean;

        /**
         * Regex used to format the card number. Each match is joined with a space.
         */
        format: RegExp;
    }

    export interface ICreditCardUtils {
        /**
         * Formats the card number. Includes a space between every 4 digits, restricts input to numbers,
         * limits to 16 numbers, supports Amex format.
         */
        formatCardNumber(input: string): string;

        parseCardType(
            input: string
        ):
            | "visa"
            | "mastercard"
            | "amex"
            | "dinersclub"
            | "discover"
            | "unionpay"
            | "jcb"
            | "visaelectron"
            | "maestro"
            | "forbrugsforeningen"
            | "dankort";

        /**
         * Parses a credit card expiry in the form of MM/YYYY, returning an object containing the month and year.
         * Shorthand years, such as 13 are also supported (and converted into the longhand, e.g. 2013).
         * This function does not perform any validation, for that use @validateCardExpiry
         */
        parseCardExpiry(input: string): { month: number; year: number };

        validateCardNumber(input: string): boolean;

        validateCardExpiry(month: number, year: number): boolean;

        validateCardCVC(cvc: string, type: string): boolean;

        /**
         * Array of objects that describe custom valid card types.
         */
        cards: ICustomCard[];
    }
}

declare const CreditCardUtils: CreditCardUtils.ICreditCardUtils;

export = CreditCardUtils;
