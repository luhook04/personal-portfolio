const Modal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <div className="modal">
          <p>Thank you for the message!</p>
          <p>I'll get back to you as soon as possible!</p>
        </div>
      )}
    </>
  );
};

export default Modal;
