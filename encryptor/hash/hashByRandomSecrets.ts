// @ts-ignore
import encryptor from "../encryptor.ts";

const hashByRandomSecrets = async (hashingData) => {
    let randSecrets = "";
    let len = hashingData.length;

    while (len !== 0){
        let randSecret = `${Math.round(Math.random()*52)}${Math.random()*52 % 2 === 0 ? 'l': 'r'}`;
        randSecrets = `${randSecrets} ${randSecret}`
        len--;
    }
    return await encryptor(hashingData, randSecrets);
};

for (let i = 0; i < 999; i++){
    // @ts-ignore
    console.log(await hashByRandomSecrets('{name: "Tahmid", age: 9, email: "tm.ahad.07@gmail.com"}'))
}