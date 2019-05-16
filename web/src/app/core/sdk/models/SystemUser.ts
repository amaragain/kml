/* tslint:disable */

declare var Object: any;
export interface SystemUserInterface {
  "name"?: string;
  "age"?: number;
  "id"?: number;
}

export class SystemUser implements SystemUserInterface {
  "name": string;
  "age": number;
  "id": number;
  constructor(data?: SystemUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SystemUser`.
   */
  public static getModelName() {
    return "SystemUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SystemUser for dynamic purposes.
  **/
  public static factory(data: SystemUserInterface): SystemUser{
    return new SystemUser(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'SystemUser',
      plural: 'SystemUsers',
      path: 'SystemUsers',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "age": {
          name: 'age',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
