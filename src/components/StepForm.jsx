import React, {useState} from 'react';
import './StepForm.scss';

const StepForm = () => {

    const [showStepOne, setShowStepOne] = useState(true);
    const [showStepTwo, setShowStepTwo] = useState(false);
    const [showStepThree, setShowStepThree] = useState(false);

    const showHideSteps = (show1, show2, show3) => {
        setShowStepOne(show1);
        setShowStepTwo(show2);
        setShowStepThree(show3);
    }

    return(
        <div className="step-form container">
            <form action="">
                <ul className="step-form__stepper">
                    <li className="step-form__step step-form__step--1">
                        <div className="step-form__step-title" onClick={() => showHideSteps(true, false, false)}>
                            <span className="step-form__step-number btn-floating">1</span>
                            <span>Title 1</span>
                        </div>
                        <div className="step-form__step-body" style={{display:showStepOne?"block":"none"}}>
                            <div className="step-form__step-content">
                                Plug in component one here
                            </div>
                            <div className="step-form__step-action">
                                <a className="waves-effect waves-dark btn" onClick={() => showHideSteps(false, true, false)}>CONTINUE</a>
                            </div>
                        </div>
                    </li>
                    <li className="step-form__step step-form__step--2">
                        <div className="step-form__step-title" onClick={() => showHideSteps(false, true, false)}>
                            <span className="step-form__step-number btn-floating">2</span>
                            <span>Title 2</span>
                        </div>
                        <div className="step-form__step-body" style={{display:showStepTwo?"block":"none"}}>
                            <div className="step-form__step-content">
                                Plug in component two here
                            </div>
                            <div className="step-form__step-action">
                                <a className="btn-flat transparent teal-text" onClick={() => showHideSteps(true, false, false)}>BACK</a>
                                <a className="waves-effect waves-dark btn" onClick={() => showHideSteps(false, false, true)}>CONTINUE</a>
                            </div>
                        </div>
                    </li>
                    <li className="step-form__step step-form__step--3">
                        <div className="step-form__step-title" onClick={() => showHideSteps(false, false, true)}>
                            <span className="step-form__step-number btn-floating">3</span>
                            <span> Title 3</span></div>
                        <div className="step-form__step-body" style={{display:showStepThree?"block":"none"}}>
                            <div className="step-form__step-content">
                                Plug in component three here
                            </div>
                            <div className="step-form__step-action">
                                <a className="btn-flat transparent teal-text" onClick={() => showHideSteps(false, true, false)}>BACK</a>
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default StepForm;