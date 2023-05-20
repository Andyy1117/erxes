import { TAG_TYPES } from '../../models/definitions/constants';
import { Builder, IListArgs } from '../../coc/companies';
import { countBySegment, countByTag } from '../../coc/utils';
import {
  checkPermission,
  requireLogin
} from '@erxes/api-utils/src/permissions';
import { IContext } from '../../connectionResolver';
import { ICountBy } from '../../coc/utils';
import { sendFormsMessage } from '../../messageBroker';
interface ICountArgs extends IListArgs {
  only?: string;
}

const countByForm = async (
  subdomain: string,
  qb: any,
  params: any
): Promise<ICountBy> => {
  const counts: ICountBy = {};

  // Count companies by submitted form
  const forms = await sendFormsMessage({
    subdomain,
    action: 'find',
    data: {
      query: {}
    },
    isRPC: true,
    defaultValue: []
  });

  for (const form of forms) {
    await qb.buildAllQueries();
    await qb.formFilter(subdomain, form._id);

    counts[form._id] = await qb.runQueries('count');
  }

  return counts;
};

const companyQueries = {
  /**
   * Companies list
   */
  async companies(
    _root,
    params: IListArgs,
    { commonQuerySelector, commonQuerySelectorElk, models, subdomain }: IContext
  ) {
    const qb = new Builder(models, subdomain, params, {
      commonQuerySelector,
      commonQuerySelectorElk
    });

    await qb.buildAllQueries();

    const { list } = await qb.runQueries();

    return list;
  },

  /**
   * Companies for only main list
   */
  async companiesMain(
    _root,
    params: IListArgs,
    { commonQuerySelector, commonQuerySelectorElk, models, subdomain }: IContext
  ) {
    const qb = new Builder(models, subdomain, params, {
      commonQuerySelector,
      commonQuerySelectorElk
    });

    await qb.buildAllQueries();

    const { list, totalCount } = await qb.runQueries();

    return { list, totalCount };
  },

  /**
   * Group company counts by segments
   */
  async companyCounts(
    _root,
    args: ICountArgs,
    { commonQuerySelector, commonQuerySelectorElk, models, subdomain }: IContext
  ) {
    const counts = {
      bySegment: {},
      byTag: {},
      byBrand: {},
      byLeadStatus: {},
      byForm: {}
    };

    const { only } = args;

    const qb = new Builder(models, subdomain, args, {
      commonQuerySelector,
      commonQuerySelectorElk
    });

    switch (only) {
      case 'byTag':
        counts.byTag = await countByTag(subdomain, TAG_TYPES.COMPANY, qb);
        break;

      case 'bySegment':
        counts.bySegment = await countBySegment(
          subdomain,
          'contacts:company',
          qb
        );
        break;

      case 'byForm':
        counts.byForm = await countByForm(subdomain, qb, args);
        break;
    }

    return counts;
  },

  /**
   * Get one company
   */
  companyDetail(
    _root,
    { _id }: { _id: string },
    { models: { Companies } }: IContext
  ) {
    return Companies.findOne({ _id });
  }
};

requireLogin(companyQueries, 'companiesMain');
requireLogin(companyQueries, 'companyCounts');
requireLogin(companyQueries, 'companyDetail');

checkPermission(companyQueries, 'companies', 'showCompanies', []);
checkPermission(companyQueries, 'companiesMain', 'showCompanies', {
  list: [],
  totalCount: 0
});

export default companyQueries;
