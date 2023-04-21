import { useDispatch } from "react-redux";
import { CloseContactUs } from "../Actions/ContactUs";
import "./index.css";

const ContactUs = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="wd-privacy">
      <div className="wd-privacy-content">
        <div>
          <h5>Mail us at:</h5>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Pramodh Gowda</span>&nbsp;
            <a href="mailto:poonadahallyshivad.p@northeastern.edu">
              (poonadahallyshivad.p@northeastern.edu)
            </a>
          </p>
          <br></br>

          <h5>Contact us at:</h5>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Pramodh Gowda</span>&nbsp;
            <a href="tel:+16175163640">(+1-(617) 516 3640)</a>
          </p>
        </div>
        <i
          className="fa fa-times position-absolute top-0 end-0 p-3"
          aria-hidden="true"
          onClick={() => CloseContactUs(dispatch)}
        ></i>
      </div>
    </div>
  );
};

export default ContactUs;
