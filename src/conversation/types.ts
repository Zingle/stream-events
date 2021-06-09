import {Direction} from "../message";

interface Channel {
    type: string;
    value?: string;
}

export interface Message {
    id: number;
    body: string;
    direction: Direction;
    serviceChannel: Channel;
    contactChannel: Channel;
    bulk: boolean;
}

export interface Workflow {
    id: string;
    name: string;
}

export interface User {
    id?: string;
    name?: string;
}

interface Meta {
    id: string;
    name: string;
}

export interface Contact extends Meta {
    externalId?: string;
    segments?: Meta[];
    tags?: Meta[];
}

export interface Service {
    id: string;
    name: string;
    accountId: string;
    timezone: string;
    hipaa: boolean;
}

export interface ConversationEvent {
    id: number;
    uuid: string;
    feedUuid: string;
    service?: Service;
    contact?: Contact;
    type: string;
    message?: Message;
    triggerMessage?: number;
    triggerWorkflow?: Workflow;
    triggerUser?: User;
    createdAt: number;
}
