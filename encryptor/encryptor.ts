// @ts-ignore
import Encryptdatatype from "../types/encryptdata.ts";

const encryptor = (encryptingData: Encryptdatatype, secret: string) => {
    const decrypt: string = String(encryptingData) || JSON.stringify(encryptingData);
    const secret_number: number = Number(secret.substring(0, secret.length - 1));
    const format: string = secret[1];
    let encryptedData: string = "$";
    let error: string = "";

    const index = (arr: string[], ind: number): string => {
        return ind > 51 ? (() => {
            return arr[ind - 52];
        })() : ind < 0 ? (() => {
            return arr[ind + 52];
        })() : (() => {
            return arr[ind];
        })()
    };

    const CA = [
        "a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x",
        "y", "z", "A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V",
        "W", "X", "Y", "Z"
    ];
    for (let c of decrypt){
        const ec = format === "r" ? ((): string => {
            return index(CA, CA.indexOf(c) + secret_number);
        })(): format === "l" ? ((): string => {
            return index(CA, CA.indexOf(c) - secret_number);
        })(): ((): void => {
            error = "Invalid format";
        })();

        encryptedData += ec;
    }

    return error ? error : encryptedData;
}

console.log(encryptor("Venom", "112356l"));