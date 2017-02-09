/* tslint:disable */
import {
  GeoPoint
} from '../index';

declare var Object: any;
export interface AddressInterface {
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  postal?: string;
  country?: string;
  geocode?: GeoPoint;
  title?: string;
  id?: number;
}

export class Address implements AddressInterface {
  street1: string = '';
  street2: string = '';
  city: string = '';
  state: string = '';
  postal: string = '';
  country: string = '';
  geocode: GeoPoint = <any>null;
  title: string = '';
  id: number = 0;
  constructor(data?: AddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Address`.
   */
  public static getModelName() {
    return "Address";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Address for dynamic purposes.
  **/
  public static factory(data: AddressInterface): Address{
    return new Address(data);
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
      name: 'Address',
      plural: 'addresses',
      properties: {
        street1: {
          name: 'street1',
          type: 'string'
        },
        street2: {
          name: 'street2',
          type: 'string'
        },
        city: {
          name: 'city',
          type: 'string'
        },
        state: {
          name: 'state',
          type: 'string'
        },
        postal: {
          name: 'postal',
          type: 'string'
        },
        country: {
          name: 'country',
          type: 'string'
        },
        geocode: {
          name: 'geocode',
          type: 'GeoPoint'
        },
        title: {
          name: 'title',
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
