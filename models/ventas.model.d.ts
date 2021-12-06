import { Entity } from '@loopback/repository';
export declare class Ventas extends Entity {
    id?: string;
    nameCustomer: string;
    phone?: string;
    nameProduc?: string;
    email?: string;
    date: string;
    send?: boolean;
    [prop: string]: any;
    constructor(data?: Partial<Ventas>);
}
export interface VentasRelations {
}
export declare type VentasWithRelations = Ventas & VentasRelations;
