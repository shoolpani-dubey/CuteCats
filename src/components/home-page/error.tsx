import Toast from "react-bootstrap/Toast";
interface IError {
  error: boolean;
  setError: (error: boolean) => void;
}
export default function Error({ error, setError }: IError) {
  return (
    <Toast onClose={() => setError(false)} show={error} delay={3000} autohide>
      <Toast.Body>
        Apologies but we could not load new cats for you at this time! Miau!
      </Toast.Body>
    </Toast>
  );
}
