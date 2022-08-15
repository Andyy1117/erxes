import React, { useState, useRef } from 'react';
import dayjs from 'dayjs';
// erxes
import ActionButtons from '@erxes/ui/src/components/ActionButtons';
import Button from '@erxes/ui/src/components/Button';
import FormControl from '@erxes/ui/src/components/form/Control';
import Tip from '@erxes/ui/src/components/Tip';
// local
import { FinanceAmount } from '../../styles';

type Props = {
  item: any;
  updateItem: (_id: string, remainder: number, status: string) => void;
  removeItem: (item: any) => void;
};

export default function Row(props: Props) {
  const { item, updateItem, removeItem } = props;
  const { product, modifiedAt, count, preCount, uom, status } = item;
  const timer: any = useRef(null);
  const [diff, setDiff] = useState<number>(count - preCount);
  const [remainder, setRemainder] = useState<number>(count);
  const [statusDisplay, setStatusDisplay] = useState<string>('new');

  const displayNumber = (value: number) => {
    return (value || 0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  const renderDate = (date: Date) => {
    if (!date) {
      return null;
    }

    return dayjs(date).format('lll');
  };

  const handleCheckChange = (event: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    event.preventDefault();

    const checked = event.target.checked;

    setStatusDisplay(checked ? 'checked' : 'new');

    timer.current = setTimeout(() => {
      updateItem(item._id, remainder, status);
    }, 100);
  };

  const handleRemainderChange = (event: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    event.preventDefault();

    const value = Number(event.target.value);

    setDiff(value - preCount);
    setRemainder(value);
    setStatusDisplay('checked');

    timer.current = setTimeout(() => {
      updateItem(item._id, remainder, status);
    }, 500);
  };

  const handleDiffChange = (event: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    event.preventDefault();

    const value = Number(event.target.value);
    setDiff(value);
    setRemainder(value + preCount);
    setStatusDisplay('checked');

    timer.current = setTimeout(() => {
      updateItem(item._id, remainder, status);
    }, 500);
  };

  return (
    <tr>
      <td>{product && `${product.code} - ${product.name}`}</td>

      <td>{renderDate(modifiedAt)}</td>
      <td>
        <FinanceAmount>{displayNumber(preCount)}</FinanceAmount>
      </td>
      <td>{uom && uom.name}</td>

      <td>
        <FormControl
          checked={statusDisplay !== 'new'}
          componentClass="checkbox"
          onChange={handleCheckChange}
        />
      </td>

      <td>
        <FormControl
          type="number"
          value={remainder}
          onChange={handleRemainderChange}
          align={'right'}
        />
      </td>
      <td>
        <FormControl
          type="number"
          value={diff}
          onChange={handleDiffChange}
          align={'right'}
        />
      </td>
      <td>
        <ActionButtons>
          <Tip text="Delete" placement="top">
            <Button
              btnStyle="link"
              onClick={() => removeItem(item)}
              icon="times-circle"
            />
          </Tip>
        </ActionButtons>
      </td>
    </tr>
  );
}
