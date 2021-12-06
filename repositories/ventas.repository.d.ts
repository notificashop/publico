import { Getter } from '@loopback/core';
import { DefaultCrudRepository, DataObject } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Ventas, VentasRelations } from '../models';
import { MessageRepository } from './message.repository';
import { NotificacionesRepository } from './notificaciones.repository';
export declare class VentasRepository extends DefaultCrudRepository<Ventas, typeof Ventas.prototype.id, VentasRelations> {
    messageRepository: MessageRepository;
    notificacionesRepository: NotificacionesRepository;
    constructor(dataSource: MongoDataSource, messageRepositoryGetter: Getter<MessageRepository>, messageRepository: MessageRepository, notificacionesRepositoryGetter: Getter<NotificacionesRepository>, notificacionesRepository: NotificacionesRepository);
    apicreate(entity: DataObject<Ventas>, hash?: String | undefined): Promise<Ventas>;
    sendMessage(): Promise<void>;
}
