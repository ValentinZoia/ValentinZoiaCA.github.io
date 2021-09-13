
var infoalumno = []

const button1 = document.querySelector(".button1");//selecciono el boton de enviar la cant de alumnos
button1.addEventListener("click", ()=> {
    var cantAlumnos = document.getElementById("numeroAlumnos").value;//obtengo el valor de la cantidad de alumos
        if( cantAlumnos == "") {
            document.getElementById("numeroAlumnos").focus();
        } else {
            const contenedor = document.querySelector(".contenedor");//selecciono un contenedor donde luego agragare los inputs de los nombres de esos respectivos alumnos
            const fragmento = document.createDocumentFragment();//Se crea un objeto DocumentFragment vacio, el cual queda listo para que pueda insertarseles nodos en el.
            for  (i=0; i < cantAlumnos ; i++) {
                const input =document.createElement ("input");//creo un input para escribir los mombres
                input.placeholder= ( "Nombre del alumno "  +  ( i + 1 ) );
                input.classList= ("position");
                input.id= ("alumno" + ( i + 1 ));//gracias al for cada alumno tendra un id diferente
                fragmento.appendChild(input);//insertamos los inputs en el fragmento
                }
            contenedor.appendChild(fragmento)//insertamos el fragmento al contenedor
            document.getElementById("numeroAlumnos").value = "";//en el caso de que numeroAlumnos no tenga valor, lo marcamos con un focus
            document.getElementById("alumno1").focus();
            } 
        })
    
const button2 = document.querySelector(".button2");//selecciono el boton de enviar los nombres, para poder tomar lista
button2.addEventListener("click", ()=> {
    var asistencia = document.getElementsByClassName("position").length;//obtengo la cantidad de alumnos en numero
    for (i=0; i < asistencia; i++) {
        infoalumno[i] = [document.getElementById("alumno" + ( i + 1  )).value,0];//completo el array anteriormente creado con otro array, como posicion 0 coloco el nombre del alumno
        }
    const  tomarAsistencia  =  (nombre, p)  => { // creo una funcion con dos parametros.
        let presencia=prompt("DIA " + (i + 1) + `\n\rPresente o Ausente (Colocar "p" en el caso de que este presente o colocar "a" en el caso de que no lo este)`   + "\n\r-" + nombre+"?")//mensaje para tomar asistencia.
        if( presencia  == "p" ||  presencia  == "P" )  {
            infoalumno[p][1]++; }//si se coloco presente en el alumno, en la posicion 1 del array dentro de el array infoalumno, se incrementara un numero que indicara las presencias del respectivo. El parametro p se completara con  la posicion del array con la informacion del alumno en el array infoalumno
        }
    for (i = 0; i < 5; i++) {
        for (alumno in infoalumno) {// "in" metodo de los array, donde devuelve un number. En este caso devolvera la posicion de cada array donde en cada uno esta la informacion del alumno(su nombre y su asistencia.)
            tomarAsistencia(infoalumno[alumno][0],alumno);//completamos los parametros de la funcion tomarAsistencia, en el paramtero "nombre", completamos con la posicion 0 del array dentro de infoalumnos y en el parametro "p" se completara con un numero que indicara la posicion del array del alumno
            }
        }
    })
           
const button3 =document.querySelector(".button3");
const contenedor = document.querySelector(".resultado")//seleccionamos el contenedor donde se agregara la informacion del alumno
button3.addEventListener("click", ()=>{
    for (alumno in infoalumno) {
        var resultado =  `<strong>${infoalumno[alumno][0]}:</strong>`+
        "<br>Presentes:" + ` ${infoalumno[alumno][1]}`+
        "<br>Ausencias:" + `${5 - infoalumno[alumno][1]}` + "<br><br>" ;
        contenedor.innerHTML+=resultado;//agregamos la variable resultado con la informacion del alumno(nombre, presencia, ausencia), al contenedor para finalmente mostrarla en el DOM.
        }
        
    })

       
         
        


        
     
   
        



   

        
    



    














 

 




   
   
   
   
   

