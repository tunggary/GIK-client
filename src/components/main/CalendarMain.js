import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Button, Page, setOptions } from '@mobiscroll/react';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

function CalendarReal() {
  const [openPicker, setOpenPicker] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  const show = () => {
    setOpenPicker(true);
  };

  const onClose = () => {
    setOpenPicker(false);
  };

  const inputProps = {
    className: 'md-mobile-picker-input',
    placeholder: 'Please Select...',
  };

  const boxInputProps = {
    className: 'md-mobile-picker-box-label',
    inputStyle: 'box',
    placeholder: 'Please Select...',
  };

  return (
    <div>
      <div className="mbsc-grid">
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12">
              <div className="mbsc-txt-muted md-mobile-picker-header">
                Use the picker with any inputs & show on focus/click
              </div>
              <Datepicker controls={['calendar']} inputComponent="input" inputProps={inputProps} />
            </div>
          </div>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12 mbsc-txt-muted md-mobile-picker-header">
              Disable <code>onClick/onFocus</code> and only show on button
            </div>
            <div className="mbsc-col-8">
              <Datepicker
                controls={['calendar']}
                inputComponent="input"
                inputProps={inputProps}
                showOnClick={false}
                showOnFocus={false}
                isOpen={openPicker}
                onClose={onClose}
                defaultValue={date}
              />
            </div>
            <div className="mbsc-col-4">
              <Button variant="outline" color="primary" className="md-mobile-picker-button" onClick={show}>
                Show picker
              </Button>
            </div>
          </div>
        </div>
        <div className="mbsc-form-group">
          <div className="mbsc-row">
            <div className="mbsc-col-12">
              <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker with a Mobiscroll input</div>
              <Datepicker controls={['calendar']} inputProps={boxInputProps} />
            </div>
          </div>
        </div>
        <div className="mbsc-txt-muted md-mobile-picker-header">Use the picker inline in any page</div>
      </div>
      <div className="md-mobile-picker-inline">
        <Datepicker display="inline" ntrols={['calendar']} />
      </div>
    </div>
  );
}

export default CalendarReal;
