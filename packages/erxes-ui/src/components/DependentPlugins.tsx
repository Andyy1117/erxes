import React from 'react';
// import Table from '@erxes/ui/src/components/table';
import Info from '@erxes/ui/src/components/Info';
type Props = {
  depPlugins: any[];
  currentPlugin: string;
};

const DependentPlugins = (props: Props) => {
  const { depPlugins, currentPlugin } = props;
  return (
    <Info type="primary">
      <thead>
        <th>
          Please enable the plugins below (inside <code> cli/configs.json</code>
          ) in order to run <code>{currentPlugin}</code>
        </th>
      </thead>
      <tbody>
        {depPlugins.map(dep => (
          <tr>
            <td>{dep}</td>
          </tr>
        ))}
      </tbody>
    </Info>
  );
};

export default DependentPlugins;
