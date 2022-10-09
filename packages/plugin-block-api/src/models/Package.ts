import { Model } from 'mongoose';
import * as _ from 'underscore';
import { IModels, models } from '../connectionResolver';
import {
  IPackage,
  IPackageDocument,
  packageSchema
} from './definitions/package';

export interface IPackageModel extends Model<IPackageDocument> {
  createPackage(doc: IPackage): Promise<IPackageDocument>;
  updatePackage(_id: string, doc: IPackage): Promise<IPackageDocument>;
  removePackage(packageIds: string[]): Promise<IPackageDocument>;
}

export const loadPackageClass = (models: IModels) => {
  class Package {
    public static async createPackage(doc: IPackage) {
      return models.Packages.create({
        ...doc,
        createdAt: new Date()
      });
    }

    public static async updatePackage(_id, doc: IPackage) {
      await models.Packages.updateOne(
        {
          _id
        },
        { $set: { ...doc, modifiedAt: new Date() } }
      );

      return models.Packages.findOne({ _id });
    }

    public static async removePackage(packageIds) {
      return models.Packages.deleteMany({ _id: { $in: packageIds } });
    }
  }

  packageSchema.loadClass(Package);

  return packageSchema;
};