import React, { useState } from 'react';
import ContactForm from '../contact-form';
import Container from '../../layout/Container';

const Modal = ({ showModal, setShowModal }) => {
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity duration-300 ease-out" aria-hidden="true">
          <div className="absolute inset-0 bg-[black] opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          className={`inline-block align-bottom bg-[white] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all duration-300 ease-out sm:my-8 sm:align-middle w-full sm:w-11/12 lg:w-3/4 ${
            showModal ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mt-3 text-left sm:mt-5">
                <Container>
                    <ContactForm btnText={{en:'Submit an application',ru:'Оставить заявку',uz:'Ariza qoldirish'}} title={{en:"Leave a request",ru:"Оставьте заявку",uz:"So'rov qoldiring"}} closeBtn={true} onClick={() => setShowModal(false)}/>
                </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
