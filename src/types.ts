export interface KafkaDocument {
    eventTypeCode: string;
}

export interface KafkaEvent {
   doc: KafkaDocument;
}
