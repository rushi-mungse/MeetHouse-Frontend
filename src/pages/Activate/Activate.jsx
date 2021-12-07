import StepName from "../Steps/StepName/StepName";
import StepUserName from "../Steps/StepUsername/StepUsername";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import { useState } from "react";

const steps = {
  1: StepName,
  2: StepUserName,
  3: StepAvatar,
};

const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <div>
      <Step onNext={nextStep} />
    </div>
  );
};

export default Activate;
