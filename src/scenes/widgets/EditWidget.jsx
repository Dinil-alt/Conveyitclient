import { Modal, TextField,MenuItem, } from '@mui/material'
import { Button } from 'bootstrap'
import { MDBCollapse,MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

function EditWidget() {

    const [display, setDisplay] = useState(false);
    const makeClose = () => setDisplay(false);
    const makeShow = () => setDisplay(true);

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
    {/* User Edit Modal */}
      <Modal show={display} onHide={makeClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-black">Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <TextField  id="filled-basic" label="Location" variant="filled" className="w-100 mt-2"/>
          <TextField id="filled-basic" label="Occupation" variant="filled" className="w-100 mt-2"/>
          <TextField id="filled-basic" label="Email" variant="filled" className="w-100 mt-2"/>
          <Button onClick={toggleOpen} className="w-100  mt-3">Change Password</Button>
          <MDBCollapse open={isOpen}>
          <hr />
          <TextField id="outlined-basic" label="Enter old Password" variant="outlined" className="w-75 mt-2"/>            
          <Button className="mt-3 ms-3  btn btn-secondary">verify</Button>
          <TextField id="outlined-basic" label="Enter new Password" type="password" variant="outlined" className="w-100 mt-2"/>
          <TextField id="outlined-basic" label="Re-enter new Password" type="password" variant="outlined" className="w-100 mt-2"/>
          </MDBCollapse>
        </Modal.Body>
      {/* Password edit collapse */}
        <Modal.Footer className="text-align-center">
          <Button variant="success">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditWidget