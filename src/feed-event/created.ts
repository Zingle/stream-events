import {Direction} from "../message/constants";
import {KafkaEvent} from "../types";

interface MessageDetail {
  id: number,
  direction: Direction,
  messageTypeCode: string,
  contactId: number,
  source: string,
  processedAt: number,
  contactChannelTypeCode: string,
  contactChannelDisplayName: string,
  contactChannelValue?: string,
  contactChannelFormattedValue: string,
  serviceChannelTypeCode: string,
  serviceChannelValue: string,
  serviceChannelFormattedValue: string,
  labelId: number,
  labelUuid: string,
  readAt: number,
  deletedByContactAt?: number,
  metadataJson?: string,
}

export interface EventDocument {
  id: number,
  uuid: string,
  feedId: number,
  feedUuid: string,
  serviceId: number,
  serviceUuid: string,
  printerId?: number,
  printerUuid?: string,
  contactId: number,
  contactUuid: string,
  eventTypeCode: string,
  templateId?: number,
  templateUuid?: string,
  body?: string,
  translatedBody?: string,
  automationParsedBody?: string,
  bodyLanguageCode?: string,
  translatedBodyLanguageCode?: string,
  confirmedByUserId?: number,
  confirmedByPrinterId?: number,
  confirmedByWorkflowId?: number,
  confirmedByMessageId?: number,
  secondsToConfirm?: number,
  triggeredByUserId?: number,
  triggeredByUserUuid?: string,
  triggeredByPrinterId?: number,
  triggeredByPrinterUuid?: string,
  triggeredByWorkflowId?: number,
  triggeredByWorkflowUuid?: string,
  triggeredByMessageId?: number,
  forwardingMessageId?: number,
  forwardedByServiceId?: number,
  forwardedByServiceUuid?: string,
  correspondentServiceId: number,
  correspondentServiceUuid: string,
  workflowId?: number,
  workflowUuid?: string,
  respondingToQuestionId?: number,
  zingSuggestionAction?: string,
  metadataJson?: string,
  isHidingAttachments?: boolean,
  delayedActionUuid?: string,
  executeAt: number,
  executedAt?: number,
  confirmedAt?: number,
  createdAt: number,
  updatedAt: number,
  deletedAt?: number,
  isDelayed: boolean,
  notes: string[],
  messageDetails?: MessageDetail,
}

interface Label {
  id: number,
  uuid: string,
  displayName: string,
}

interface ContactMeta {
  labels?: Label[],
  segments?: Label[],
  id: number,
  uuid: string,
  externalId: string,
  fullName: string,
}

interface UserMeta {
  uuid: string,
  username: string,
  fullName: string,
}

interface WorkflowMeta {
  id: number,
  uuid: string,
  displayName: string,
}

interface MessageTemplateMeta {
  id: number,
  uuid: string,
  displayName: string,
}

interface BulkMessageMeta {
  id: number,
}

interface MessageMeta {
  template?: MessageTemplateMeta,
  bulk?: BulkMessageMeta,
  localTime: number,
}

interface ServiceMeta {
  id: number,
  uuid: string,
  name: string,
  accountId: string,
  featureCodes: string[],
  timezone: string,
}

interface EventDocumentMeta {
  contact?: ContactMeta,
  user?: UserMeta,
  workflow?: WorkflowMeta,
  message?: MessageMeta,
  service?: ServiceMeta,
}

export interface EventDocumentCreatedEvent extends KafkaEvent {
  doc: EventDocument,
  meta: EventDocumentMeta,
}
