import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { RequestContext } from '@loopback/rest';
import { Ventas } from '../models';
import { VentasRepository } from '../repositories';
export declare class VentasController {
    ventasRepository: VentasRepository;
    context: RequestContext;
    constructor(ventasRepository: VentasRepository, context: RequestContext);
    create(ventas: Omit<Ventas, 'id'>): Promise<Ventas>;
    apicreate(ventas: Omit<Ventas, 'id'>): Promise<Ventas>;
    count(where?: Where<Ventas>): Promise<Count>;
    find(filter?: Filter<Ventas>): Promise<Ventas[]>;
    updateAll(ventas: Ventas, where?: Where<Ventas>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Ventas>): Promise<Ventas>;
    updateById(id: string, ventas: Ventas): Promise<void>;
    replaceById(id: string, ventas: Ventas): Promise<void>;
    deleteById(id: string): Promise<void>;
    sendMessage(filter?: Filter<Ventas>): Promise<void>;
}
