/**
 * Generates text using OpenAI's GPT-3 model
 * @param {string} prompt The prompt to feed to the GPT-3 model
 * @param {string} cell The cell to append to the prompt
 * @param {number} [maxWords=10] The maximum number of words to generate
 * @return {string} The generated text
 * @customfunction
 */

function runOpenAI(prompt, cell, maxWords) {

const API_KEY = "YOUR_API_KEY_FROM_OPENAI";

maxTokens = 10
if (maxWords){maxTokens = maxWords * 0.75}

model = "text-davinci-003"
prompt = prompt+cell+":",
temperature= 0

  // Set up the request body with the given parameters
  const requestBody = {
    "model": model,
    "prompt": prompt,
    "temperature": temperature,
    "max_tokens": maxTokens
  };
  console.log(requestBody)

  // Set up the request options with the required headers
  const requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+API_KEY
    },
    "payload": JSON.stringify(requestBody)
  };

  // Send the request to the GPT-3 API endpoint for completions
  const response = UrlFetchApp.fetch("https://api.openai.com/v1/completions", requestOptions);

  console.log(response.getContentText())
 
  // Get the response body as a JSON object
  const responseBody = JSON.parse(response.getContentText());


  let answer= responseBody.choices[0].text


  // Return the generated text from the response
  return answer
}
