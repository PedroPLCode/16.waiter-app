import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const PageFooter = () => {

  return (
    <MDBFooter className='bg-primary text-center text-white mt-3'>
      <MDBContainer className='p-3'>
        <section>
          Pedro
          <MDBBtn outline color="light" floating href='https://github.com/PedroPLCode/' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
};

export default PageFooter;