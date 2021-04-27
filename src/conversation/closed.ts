import {Contact, Message, Service, Workflow} from "./types";

export interface ConversationClosedEvent {
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