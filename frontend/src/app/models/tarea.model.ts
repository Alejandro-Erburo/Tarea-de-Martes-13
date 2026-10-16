export interface Tarea {
    id_tarea: number;
    id_creador: number;
    grupo: string;
    titulo: string;
    descripcion: string;
    prioridad: number;
    creada: string;
    terminada: string | null;
    estado: string;
}
