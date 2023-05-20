import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

const CommonDialog = ({
  dialogTitle,
  isOpen,
  setIsOpen,
  children,
  width = 'sm',
}) => {
  const dialogCloseFunc = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };
  return (
    <Dialog
      PaperProps={{
        style: {
          minWidth: 340,
        },
      }}
      maxWidth={width}
      fullWidth={true}
      onClose={(e) => dialogCloseFunc(e)}
      open={isOpen}
    >
      {dialogTitle && <DialogTitle>{dialogTitle}</DialogTitle>}
      {children}
    </Dialog>
  );
};

export default CommonDialog;
