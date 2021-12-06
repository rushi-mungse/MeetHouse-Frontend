import StepPhoneAndEmail from "../Steps/StepPhoneAndEmail/StepPhoneAndEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";
import { useState } from "react";

const steps = {
  1: StepPhoneAndEmail,
  2: StepOtp,
};
const Authenticate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <Step text={"Next"} onClick={nextStep}/>
    </div>
  );
};

export default Authenticate;
