// @ts-ignore
import encryptor from "../encryptor.ts";
// @ts-ignore
import CA from "../characterArray.ts";

const hashByRandomSalt = async (hashingData) => {
    let five: number = 5;
    let randSalt: string = ""
    while (five !== 0){
        let randChar = CA[Math.round(Math.random()*(CA.length - 1))];
        randSalt += randChar;
        five--;
    }
    return await encryptor(hashingData, '5r', randSalt);
};

for (let i = 0; i < 999; i++){
    // @ts-ignore
    console.log(await hashByRandomSalt('{"name": "Tahmid", "age": 9, email: "tm.ahad.bd@gmail.com"}'))
}