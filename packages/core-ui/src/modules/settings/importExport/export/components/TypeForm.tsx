import Icon from 'modules/common/components/Icon';
import { __ } from 'modules/common/utils';
import { FlexPad } from 'modules/common/components/step/styles';
import React from 'react';
import { Box, TypeContent, ImportHeader } from '../../styles';

type Props = {
  onChangeContentType: (contentType: string) => void;
  contentType: string;
  typeOptions: any[];
};

class TypeForm extends React.Component<Props> {
  renderSelected = selectedType => {
    const { contentType } = this.props;

    if (contentType) {
      return contentType === selectedType ? true : false;
    }

    return false;
  };

  renderBox(name, icon, contentType) {
    return (
      <Box
        key={Math.random()}
        selected={this.renderSelected(contentType)}
        onClick={() => this.props.onChangeContentType(contentType)}
      >
        <Icon icon={icon} />
        <span>{__(name)}</span>
      </Box>
    );
  }

  renderText = () => {
    return 'Select an object you would like to export';
  };

  renderOptions = () => {
    const { typeOptions } = this.props;

    return typeOptions.map(option => {
      return this.renderBox(option.text, option.icon, option.contentType);
    });
  };

  render() {
    return (
      <FlexPad type="stepper" direction="column">
        <ImportHeader>{__(this.renderText())}</ImportHeader>

        <TypeContent center={true}>{this.renderOptions()}</TypeContent>
      </FlexPad>
    );
  }
}

export default TypeForm;