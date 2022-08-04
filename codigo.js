const bikinis=[
    {
        nombre:"mara",
        precio:"$3450"
    },
    {
        nombre:"raquel",
        precio:"$2700"
    },
    {
        nombre:"mili",
        precio:"$3350"
    },
    {
        nombre:"nicole",
        precio:"$3800"
    }
];

for(const bikini of bikinis){
    console.log(bikini.nombre);
    console.log(bikini.precio);
}

let bikiniABuscar=prompt("Ingresa la bikini que desea (mara, mili, nicole, raquel");
for(const bikini of bikinis){
    if(bikini.nombre==bikiniABuscar){
        let posicion=bikinis.indexOf(bikini);
        alert("La bikini se encuentra en la posicion "+posicion);
        console.log(bikini);
    }
}