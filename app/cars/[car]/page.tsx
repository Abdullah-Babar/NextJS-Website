export default function Car ({
    params
}:{
        params:{
            car: string
        }
    }
){
    return (
        <h1 style={{
            color: "white"
        }}>Details about {params.car}:</h1>
    )
}