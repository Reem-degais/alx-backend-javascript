export default function returnHowManyArguments(...Args) {
  let number_of_arguments = 0;

  for (let arg of Args) {
    number_of_arguments++
  }

  return number_of_arguments;
}
