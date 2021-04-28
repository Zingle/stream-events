import {Contact, Message, Service, Workflow} from "./types";
import {KafkaEvent} from "../types";

export interface ConversationClosedEvent extends KafkaEvent {
    id: string;
    service?: Service;
    endEvent: Event;
    absoluteStartEvent: Event;
    userStartEvent?: Event;
    promptingMessage?: Message;
    promptingWorkflow?: Workflow;
    events: Event[];
    contact?: Contact;
    resolutionTime: number;
    firstResponseTime: number;
}
