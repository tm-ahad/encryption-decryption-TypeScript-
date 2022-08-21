import encryptor from "../encryptor.ts";

const hashByRandomSecret = async (hashingData) => {
    let randSecret = `${Math.round(Math.random()*52)}${Math.random()*52 % 2 === 0 ? 'l': 'r'}`;
    return await encryptor(hashingData, randSecret);
};

for (let i = 0; i < 999; i++){
    console.log(await hashByRandomSecret('{"name": "Tahmid", "age": 9, email: "tm.ahad.bd@gmail.com"}'))
}