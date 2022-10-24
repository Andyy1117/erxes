import { ButtonMutate, withProps } from '@erxes/ui/src';
import { IUser, UsersQueryResponse } from '@erxes/ui/src/auth/types';
import { IButtonMutateProps } from '@erxes/ui/src/types';
import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import React from 'react';
import { graphql } from 'react-apollo';
import ContractForm from '../components/ContractForm';

import { mutations, queries } from '../graphql';
import { ContractCategoriesQueryResponse, IContract } from '../types';

type Props = {
  contract: IContract;
  closeModal: () => void;
};

type FinalProps = {
  usersQuery: UsersQueryResponse;
  currentUser: IUser;
  contractCategoriesQuery: ContractCategoriesQueryResponse;
} & Props;

class ContractFromContainer extends React.Component<FinalProps> {
  render() {
    const { contractCategoriesQuery } = this.props;

    if (contractCategoriesQuery.loading) {
      return null;
    }

    const renderButton = ({
      passedName,
      values,
      isSubmitted,
      object
    }: IButtonMutateProps) => {
      const { closeModal } = this.props;

      const afterSave = data => {
        closeModal();
      };

      return (
        <ButtonMutate
          mutation={object ? mutations.contractsEdit : mutations.contractsAdd}
          variables={values}
          callback={afterSave}
          refetchQueries={getRefetchQueries()}
          isSubmitted={isSubmitted}
          type="submit"
          successMessage={`You successfully ${
            object ? 'updated' : 'added'
          } a ${passedName}`}
        />
      );
    };

    const contractCategories = contractCategoriesQuery.contractCategories || [];

    const updatedProps = {
      ...this.props,
      renderButton,
      contractCategories
    };
    return <ContractForm {...updatedProps} />;
  }
}

const getRefetchQueries = () => {
  return [
    'contracts',
    'contractDetails',
    'contractCounts',
    'contractCategories',
    'contractCategoriesTotalCount'
  ];
};

export default withProps<Props>(
  compose(
    graphql<Props, ContractCategoriesQueryResponse>(
      gql(queries.contractCategories),
      {
        name: 'contractCategoriesQuery'
      }
    )
  )(ContractFromContainer)
);