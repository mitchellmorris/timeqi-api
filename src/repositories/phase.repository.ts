import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Phase, PhaseRelations} from '../models';

export class PhaseRepository extends DefaultCrudRepository<
  Phase,
  typeof Phase.prototype.id,
  PhaseRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Phase, dataSource);
  }
}
