const Modal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <div className="mt-4">
          <p>Thank you for the message</p>
          <p>I'll get back to you as soon as possible</p>
        </div>
      )}
    </>
  );
};

export default Modal;
