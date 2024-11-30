export function log(message){
    console.log("env:", process.env.PROFILE)
    console.log("Adicionando log via função:", message);
}