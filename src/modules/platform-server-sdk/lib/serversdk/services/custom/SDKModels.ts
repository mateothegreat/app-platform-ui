/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Organization } from '../../models/Organization';
import { Contact } from '../../models/Contact';
import { Address } from '../../models/Address';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Organization: Organization,
    Contact: Contact,
    Address: Address,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
