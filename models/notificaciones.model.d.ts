import { Entity } from '@loopback/repository';
export declare class Notificaciones extends Entity {
    venta: object;
    message: object;
    id?: string;
    type?: string;
    [prop: string]: any;
    constructor(data?: Partial<Notificaciones>);
}
export interface NotificacionesRelations {
}
export declare type NotificacionesWithRelations = Notificaciones & NotificacionesRelations;
