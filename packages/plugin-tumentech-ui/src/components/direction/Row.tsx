import React from 'react';
import { RowTitle } from '@erxes/ui-engage/src/styles';
import { IDirection } from '../../types';
import { ROAD_CONDITIONS } from '../../constants';
import Tip from '@erxes/ui/src/components/Tip';
import Button from '@erxes/ui/src/components/Button';
import { __ } from '@erxes/ui/src/utils/core';
import ActionButtons from '@erxes/ui/src/components/ActionButtons';
import ModalTrigger from '@erxes/ui/src/components/ModalTrigger';
import DirectionForm from '../../containers/direction/Form';

type Props = {
  direction: IDirection;
  remove: (directionId: string) => void;
};

const Row = (props: Props) => {
  const { direction } = props;

  const { roadConditions } = direction;
  let conditionString = '';

  for (const c of roadConditions) {
    conditionString += ROAD_CONDITIONS[c] + ', ';
  }

  conditionString = conditionString.slice(0, -2);

  const renderRemoveAction = () => {
    const { direction, remove } = props;

    const onClick = () => remove(direction._id);

    return (
      <Tip text={__('Delete')} placement="top">
        <Button
          id="directionDelete"
          btnStyle="link"
          onClick={onClick}
          icon="times-circle"
        />
      </Tip>
    );
  };

  const formContent = props => (
    <DirectionForm {...props} direction={direction} />
  );

  const placeA = (direction.places[0] && direction.places[0].name) || '-';
  const placeB = (direction.places[1] && direction.places[1].name) || '-';

  return (
    <tr>
      <td key={`${direction._id}_${direction.routeCode}`}>
        <RowTitle>{direction.routeCode || '-'}</RowTitle>
      </td>
      <td key={`${direction._id}_${direction.roadCode}`}>
        <RowTitle>{direction.roadCode || '-'}</RowTitle>
      </td>
      <td key={`${direction._id}_placeA`}>
        <RowTitle>{placeA}</RowTitle>
      </td>

      <td key={`${direction._id}_placeB`}>
        <RowTitle>{placeB}</RowTitle>
      </td>

      <td key={direction._id}>
        <RowTitle>{conditionString}</RowTitle>
      </td>

      <td key={`${direction._id}_${direction.duration}`}>
        <RowTitle>{direction.duration || '0'}</RowTitle>
      </td>

      <td key={`${direction._id}_${direction.totalDistance}`}>
        <RowTitle>{direction.totalDistance || '0'}</RowTitle>
      </td>

      <td>
        <ActionButtons>
          <ModalTrigger
            title={'Edit direction'}
            trigger={<Button btnStyle="link" icon="edit-3" />}
            content={formContent}
            size={'lg'}
          />
          {renderRemoveAction()}
        </ActionButtons>
      </td>
    </tr>
  );
};

export default Row;
