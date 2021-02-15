import {injectable, /* inject, */ BindingScope} from '@loopback/core';

@injectable({scope: BindingScope.SINGLETON})
export class TestService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
}
