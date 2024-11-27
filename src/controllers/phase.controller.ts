import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Phase} from '../models';
import {PhaseRepository} from '../repositories';

export class PhaseController {
  constructor(
    @repository(PhaseRepository)
    public phaseRepository : PhaseRepository,
  ) {}

  @post('/phases')
  @response(200, {
    description: 'Phase model instance',
    content: {'application/json': {schema: getModelSchemaRef(Phase)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Phase, {
            title: 'NewPhase',
            exclude: ['id'],
          }),
        },
      },
    })
    phase: Omit<Phase, 'id'>,
  ): Promise<Phase> {
    return this.phaseRepository.create(phase);
  }

  @get('/phases/count')
  @response(200, {
    description: 'Phase model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Phase) where?: Where<Phase>,
  ): Promise<Count> {
    return this.phaseRepository.count(where);
  }

  @get('/phases')
  @response(200, {
    description: 'Array of Phase model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Phase, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Phase) filter?: Filter<Phase>,
  ): Promise<Phase[]> {
    return this.phaseRepository.find(filter);
  }

  @patch('/phases')
  @response(200, {
    description: 'Phase PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Phase, {partial: true}),
        },
      },
    })
    phase: Phase,
    @param.where(Phase) where?: Where<Phase>,
  ): Promise<Count> {
    return this.phaseRepository.updateAll(phase, where);
  }

  @get('/phases/{id}')
  @response(200, {
    description: 'Phase model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Phase, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Phase, {exclude: 'where'}) filter?: FilterExcludingWhere<Phase>
  ): Promise<Phase> {
    return this.phaseRepository.findById(id, filter);
  }

  @patch('/phases/{id}')
  @response(204, {
    description: 'Phase PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Phase, {partial: true}),
        },
      },
    })
    phase: Phase,
  ): Promise<void> {
    await this.phaseRepository.updateById(id, phase);
  }

  @put('/phases/{id}')
  @response(204, {
    description: 'Phase PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() phase: Phase,
  ): Promise<void> {
    await this.phaseRepository.replaceById(id, phase);
  }

  @del('/phases/{id}')
  @response(204, {
    description: 'Phase DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.phaseRepository.deleteById(id);
  }
}
