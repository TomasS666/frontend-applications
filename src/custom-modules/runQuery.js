export async function runQuery(url, query){
        // console.log('efefef')

        let req = fetch(url+"?query="+ encodeURIComponent(query) +"&format=json");

        // req.catch(err => console.log(err))

        let response = await req;

        let data = await response.json();
        
        return data;
}