/* tslint:disable */

declare var Object: any;
export interface ContactInterface {
  firstname?: string;
  middlename?: string;
  lastname?: string;
  email?: string;
  id?: number;
}

export class Contact implements ContactInterface {
  firstname: string = '';
  middlename: string = '';
  lastname: string = '';
  email: string = '';
  id: number = 0;
  constructor(data?: ContactInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contact`.
   */
  public static getModelName() {
    return "Contact";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contact for dynamic purposes.
  **/
  public static factory(data: ContactInterface): Contact{
    return new Contact(data);
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
      name: 'Contact',
      plural: 'contacts',
      properties: {
        firstname: {
          name: 'firstname',
          type: 'string'
        },
        middlename: {
          name: 'middlename',
          type: 'string'
        },
        lastname: {
          name: 'lastname',
          type: 'string'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
