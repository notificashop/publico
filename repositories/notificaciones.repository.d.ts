import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Notificaciones, NotificacionesRelations } from '../models';
export declare class NotificacionesRepository extends DefaultCrudRepository<Notificaciones, typeof Notificaciones.prototype.id, NotificacionesRelations> {
    constructor(dataSource: MongoDataSource);
    getAll(): Promise<any[]>;
}
