
(() => {

    // arreglo de temperaturas celsius
    const temperatureList = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const usersList = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' }
    ];

    // Listado de emails de los usuarios
    const emailList = usersList.map(person => person.email);

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoadingData = false;

    // Otros ejercicios
    // tiempo inicial
    const initialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const finalTime = new Date().getTime() - initialTime;


    // Funciones
    // Obtiene los libros
    function retrieveBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function retrieveBooksByUrl(bookUrl: string) {
        throw new Error('Function not implemented.');
    }

    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea(squareSide: number) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function displayJobIfActive() {
        throw new Error('Function not implemented.');
    }

})();