import {Contact, ConversationEvent, Message, Service, Workflow} from "./types";
import {KafkaEvent} from "../types";

export interface ConversationClosedEvent extends KafkaEvent {
    id: string;
    service?: Service;
    endEvent: ConversationEvent;
    absoluteStartEvent: ConversationEvent;
    userStartEvent?: ConversationEvent;
    promptingMessage?: Message;
    promptingWorkflow?: Workflow;
    events: ConversationEvent[];
    contact?: Contact;
    resolutionTime: number;
    firstResponseTime?: number;
}
