import { Entity } from '@loopback/repository';
export declare class Message extends Entity {
    id?: string;
    message: string;
    isWhatsapp?: boolean;
    isEmail?: boolean;
    isSms?: boolean;
    schedule: number;
    active?: boolean;
    [prop: string]: any;
    constructor(data?: Partial<Message>);
}
export interface MessageRelations {
}
export declare type MessageWithRelations = Message & MessageRelations;
