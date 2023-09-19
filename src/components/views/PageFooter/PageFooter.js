import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ModalFooter } from 'react-bootstrap';
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const PageFooter = () => {
  return (
<MDBFooter className='bg-primary text-center text-white mt-4'>
      <MDBContainer className='p-3'>
        <section>
          Pedro
          <MDBBtn outline color="light" floating href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default PageFooter;