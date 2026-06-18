function filtrarAprovados(listaDeProvas) {
    for(let i = 0; listaDeProvas.length; i++)
        {
        if (listaDeProvas[i].notaTirada>= 6.0){
            console.log(listaDeProvas[i].disciplina);
        }
    }
}