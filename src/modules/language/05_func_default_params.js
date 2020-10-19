export default function FuncDefaultParams() {
  
  const defaultParamsOne = (a, b) => a === b;
  console.log('defaultParamsOne: ', defaultParamsOne(1, 1)); //defaultParamsOne:  true

  const defaultParamstwo = (a, b = 0) => a === b;
  console.log('defaultParamstwo: ', defaultParamstwo(1)); // defaultParamstwo:  false

  const defaultParamsThree = (a, b = 1) => a === b;
  console.log('defaultParamsThree: ', defaultParamsThree(1)); // defaultParamsThree:  true
  
  const defaultParamsFour = (a = 1, b) => a === b;
  console.log('defaultParamsFour: ', defaultParamsFour(1)); // defaultParamsFour:  false
  
  const defaultParamsFive = (a = 1, b = a) => a === b;
  console.log('defaultParamsFive: ', defaultParamsFive(1)); // defaultParamsFive:  true

  const defaultParamsSix = (a = 1, b = a) => a === b;
  console.log('defaultParamsSix: ', defaultParamsSix()); // defaultParamsSix:  true

  //Normally this method doesn't works
  const defaultParamsSeven = (a = b, b = 10) => a === b;
  console.log('defaultParamsSeven: ', defaultParamsSeven()); // defaultParamsSeven:  true


}