// @ts-ignore
import Encryptdata from "../types/encryptdata.ts";

const f = performance.now();
const encryptor = (encryptingData: Encryptdata, secret: string, salt: string=null) => {
    const decrypt: string = String(encryptingData) || JSON.stringify(encryptingData);
    let secret_number: number = Number(secret.substring(0, secret.length - 1));
    const format: string = secret[secret.length - 1];
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
        "y", "z", "0", "1", "2", "3", "4", "5",
        "6", "7", "8", "9", "A", "B", "C", "D",
        "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"
    ];
    salt && ((): void => {
        for (let sc of salt) {
            CA.push(sc);
            CA.unshift(sc);
        }
    })();
    for (let c of decrypt){

        let ec;
        let [c1, c2] = [format === "r", format === "l"];

        secret.split(" ").length === 1 ? (() => {
                ec = c1 ? ((): string => {

                    return index(CA, CA.indexOf(c) + secret_number);
                })(): c2 ? ((): string => {

                    return index(CA, CA.indexOf(c) - secret_number);
                })(): ((): void => {

                    error = "Invalid format";
                })();

        })(): (() => {
            let splited_secret = secret.split(" ")

            splited_secret.length = decrypt.length;

            for (let secrets of splited_secret){

                secret_number = Number(secrets.substring(0, secrets.length - 1));
                ec = c1 ? ((): string => {

                    return index(CA, CA.indexOf(c) + secret_number);
                })(): c2 ? ((): string => {

                    return index(CA, CA.indexOf(c) - secret_number);
                })(): ((): void => {

                    error = "Invalid format";
                })();
            }
        })()


        encryptedData += ec;
    }

    return error ? error : encryptedData;
}
const e = performance.now();
export de