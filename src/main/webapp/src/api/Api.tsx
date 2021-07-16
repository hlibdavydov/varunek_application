export function getQuestions() : any{
    const response = fetch('http://localhost:8080/question').then(response => response.json()).then(data => console.log(data)).catch(e=>{
        console.log(e)
    });
    console.log(response)
    return response;
}
