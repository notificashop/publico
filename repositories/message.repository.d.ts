import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Message, MessageRelations } from '../models';
export declare class MessageRepository extends DefaultCrudRepository<Message, typeof Message.prototype.id, MessageRelations> {
    constructor(dataSource: MongoDataSource);
}
