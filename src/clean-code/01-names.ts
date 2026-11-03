(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flogged: false },
        { id: 2, flogged: false },
        { id: 3, flogged: true },
        { id: 4, flogged: false },
        { id: 5, flogged: false },
        { id: 7, flogged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( f => f.flogged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const fechaActual = new Date();
    
    // días transcurridos - elapsed time in days
    const diasTranscurridos: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const cantidadArchivosDirectorio = 33;
    
    // primer nombre - first name
    const primerNombre = 'Fernando';
    
    // primer apellido - last name
    const primerApellido = 'Herrera';

    // días desde la última modificación - days since modification
    const diasDesdeUltimaModificacion = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maximoClasesPorEstudiante = 6;


})();