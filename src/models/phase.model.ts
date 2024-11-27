import {Entity, model, property} from '@loopback/repository';

@model()
export class Phase extends Entity {
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
  phaseName: string;


  constructor(data?: Partial<Phase>) {
    super(data);
  }
}

export interface PhaseRelations {
  // describe navigational properties here
}

export type PhaseWithRelations = Phase & PhaseRelations;
