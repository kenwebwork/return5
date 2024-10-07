const input = document.getElementById("input");
const output = document.getElementById("output");

function replacement() {
  const input_text = input.value;
  let output_text;

  output_text = input_text.replace(/\n\n/g,"\n".repeat(6));
  output.innerText = output_text;
  navigator.clipboard.writeText(output_text);
}