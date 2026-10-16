function StateMessage({ emotion, title, message, status, children }) {
  return (
    <div className="state-message">
      <p className="state-message__emoji">{emotion}</p>
      <h1 className="state-message__status">{status}</h1>
      <h2 className="state-message__title">{title}</h2>
      <p className="state-message__description">{message}</p>
      <div className="state-message__content">{children}</div>
    </div>
  );
}

export default StateMessage;
