import {Entity, model, property} from '@loopback/repository';

@model()
export class Task extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'number',
    required: true,
  })
  novelty: number;

  @property({
    type: 'number',
    required: true,
  })
  technology: number;

  @property({
    type: 'string',
  })
  dependencies?: string;

  @property({
    type: 'string',
  })
  userStory?: string;

  @property({
    type: 'string',
  })
  deliverable?: string;

  @property({
    type: 'string',
  })
  impediment?: string;

  @property({
    type: 'string',
  })
  assignedTo?: string;

  @property({
    type: 'number',
    default: 0,
  })
  SWAG?: number;

  @property({
    type: 'number',
    default: 0,
  })
  progress?: number;

  @property({
    type: 'number',
    default: 0,
  })
  daysOff?: number;


  constructor(data?: Partial<Task>) {
    super(data);
  }
}

export interface TaskRelations {
  // describe navigational properties here
}

export type TaskWithRelations = Task & TaskRelations;
