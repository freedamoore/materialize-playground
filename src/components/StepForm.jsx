import React, {useState} from 'react';

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
                        <div className="step-form__step-title" onClick={() => showHideSteps(true, false, false)}>1: Select Qualification or Course(s)</div>
                        {showStepOne && 
                            <div className="step-form__step-body">
                                <div className="step-form__step-content">Qualifications form component will go here</div>
                                <div className="step-form__step-action">
                                    <a className="waves-effect waves-dark btn-small" onClick={() => showHideSteps(false, true, false)}>CONTINUE</a>
                                </div>
                            </div>
                        }
                    </li>
                    <li className="step-form__step step-form__step--2">
                        <div className="step-form__step-title" onClick={() => showHideSteps(false, true, false)}>2: Contact Details</div>
                        {showStepTwo && 
                            <div className="step-form__step-body">
                                <div className="step-form__step-content">Contact Details form component will go here</div>
                                <div className="step-form__step-action">
                                    <a class="" onClick={() => showHideSteps(true, false, false)}>BACK</a>
                                    <a className="waves-effect waves-dark btn-small" onClick={() => showHideSteps(false, false, true)}>CONTINUE</a>
                                </div>
                            </div>
                        }
                    </li>
                    <li className="step-form__step step-form__step--3">
                        <div className="step-form__step-title" onClick={() => showHideSteps(false, false, true)}>3: VET data collection</div>
                        {showStepThree && 
                            <div className="step-form__step-body">
                                <div className="step-form__step-content">VET data collection component will go here</div>
                                <div className="step-form__step-action">
                                    <a class="" onClick={() => showHideSteps(false, true, false)}>BACK</a>
                                    <button class="btn-small waves-effect waves-light" type="submit" name="action">Submit
                                        <i class="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                        }
                    </li>
                </ul>
            </form>
        </div>
    );
}

export default StepForm;