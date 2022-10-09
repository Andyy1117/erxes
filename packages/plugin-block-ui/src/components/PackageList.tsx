import { confirm, router } from '@erxes/ui/src/utils';
import Wrapper from '@erxes/ui/src/layout/components/Wrapper';
import Pagination from '@erxes/ui/src/components/pagination/Pagination';
import Alert from '@erxes/ui/src/utils/Alert';
import Table from '@erxes/ui/src/components/table';
import withTableWrapper from '@erxes/ui/src/components/table/withTableWrapper';
import DataWithLoader from '@erxes/ui/src/components/DataWithLoader';
import { BarItems } from '@erxes/ui/src/layout/styles';
import FormControl from '@erxes/ui/src/components/form/Control';
import { __ } from '@erxes/ui/src/utils/core';
import Button from '@erxes/ui/src/components/Button';
import { ModalTrigger } from '@erxes/ui/src/components';
import React from 'react';
import { IPackage } from '../types';
import PackageRow from './PackageRow';

type Props = {
  packages: IPackage[];
};

type State = {
  searchValue?: string;
};

class PackagesList extends React.Component<Props, State> {
  private timer?: NodeJS.Timer = undefined;

  constructor(props) {
    super(props);
  }

  render() {
    const { packages } = this.props;

    const mainContent = (
      <withTableWrapper.Wrapper>
        <Table
          whiteSpace="nowrap"
          hover={true}
          bordered={true}
          responsive={true}
          wideHeader={true}
        >
          <thead>
            <tr>
              <th>
                <FormControl componentClass="checkbox" />
              </th>
              <th>{__('name')}</th>
              <th>{__('level')}</th>
              <th>{__('price')}</th>
              <th>{__('profit')}</th>
            </tr>
          </thead>
          <tbody>
            {packages.map(data => (
              <PackageRow data={data} key={data._id} />
            ))}
          </tbody>
        </Table>
      </withTableWrapper.Wrapper>
    );

    const addTrigger = (
      <Button btnStyle="success" size="small" icon="plus-circle">
        Add package
      </Button>
    );

    let actionBarLeft: React.ReactNode;

    actionBarLeft = (
      <BarItems>
        <Button btnStyle="danger" size="small" icon="cancel-1">
          Delete
        </Button>
      </BarItems>
    );

    const packageForm = props => {
      return <>packageForm</>;
    };

    const actionBarRight = (
      <BarItems>
        <FormControl
          type="text"
          placeholder={__('Type to search')}
          autoFocus={true}
        />

        <ModalTrigger
          title="New package"
          trigger={addTrigger}
          autoOpenKey="showPackageModal"
          size="xl"
          content={packageForm}
          backDrop="static"
        />
      </BarItems>
    );

    const actionBar = (
      <Wrapper.ActionBar right={actionBarRight} left={actionBarLeft} />
    );

    return (
      <Wrapper
        header={<Wrapper.Header title={__(`Packages`) + ` (${0})`} />}
        actionBar={actionBar}
        // footer={<Pagination count={1} />}
        leftSidebar={<>leftSidebar</>}
        content={
          <DataWithLoader
            data={mainContent}
            loading={false}
            count={1}
            emptyText="Add in your first package!"
            emptyImage="/images/actions/1.svg"
          />
        }
      />
    );
  }
}

export default PackagesList;